#!/usr/bin/env node
/* Checks the 0.25.0 data shapes and counts (PLAN-0.25.md section A). usage: node chk-025.js <repo>
   Loads js/ja.js, js/conjugate.js, js/lang.js and every js/data file in index.html order, remembering which file added each
   entry of GRAMMAR_ERRORS and LISTEN_REPLY and each key of LISTEN_Q.
   GRAMMAR_ERRORS (grammar-errors-n5 | n4 | n3n2.js): ids unique, e-<lv>-NNN matching lv and the file; i a word index of bad;
     bad and fix differ without furigana; type; l a lesson id when present; counts N5 60 / N4 60 / N3 40 + N2 40.
   LISTEN_REPLY (listen-reply-1 | 2.js): ids unique, r-001…r-080 (file 1, clin false) and r-101…r-180 (file 2, clin true);
     4 opts with ja and en, distinct without furigana; a 0..3; counts per level (file 1: N5 25, N4 25, N3 20, N2 10; file 2:
     N5 15, N4 25, N3 25, N2 15); answer positions varied.
   LISTEN_Q (listen-questions-5 | 6.js): once present, exactly the planned keys, each with 5 questions [q, [4 opts], 0..3, why]
     and a case that exists (mse- PSYCH_MSE_CASES, dis- PSYCH_DISCHARGE_CASES, eot- PSYCH_EOT_CASES).
   While the writers are still filling the files, counts and missing keys are WARNINGS; shape problems are errors.
   Prints warnings, then errors, then "N warning(s)" and "N error(s)". Exit 1 when there are errors. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(process.argv[2] || '.');
const ctx = { console: { log() {}, warn() {}, error() {} }, TextEncoder, Buffer }; ctx.window = ctx; ctx.globalThis = ctx; vm.createContext(ctx);
const ih = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...ih.matchAll(/src="([^"]+\.js)"/g)].map((m) => m[1]);
const errs = [], warns = [];
const E = (f, m) => errs.push('ERROR ' + f + ': ' + m), W = (f, m) => warns.push('warning ' + f + ': ' + m);
['js/ja.js', 'js/conjugate.js', 'js/lang.js'].forEach((f) => { try { vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f }); } catch (e) { E(f, 'does not load: ' + e.message); } });
const JA = ctx.JA;
const fileOf = new Map(), qFile = {};
scripts.filter((s) => /^js\/data\//.test(s)).forEach((s) => {
  const base = path.basename(s);
  try { vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s }); }
  catch (e) { E(base, 'does not load: ' + e.message); return; }
  [ctx.GRAMMAR_ERRORS, ctx.LISTEN_REPLY].forEach((a) => (Array.isArray(a) ? a : []).forEach((x) => { if (x && typeof x === 'object' && !fileOf.has(x)) fileOf.set(x, base); }));
  Object.keys(ctx.LISTEN_Q || {}).forEach((k) => { if (!qFile[k]) qFile[k] = base; });
});
const isStr = (x) => typeof x === 'string' && x.trim() !== '';
const plain = (t) => (JA ? JA.speak(String(t || '')) : String(t || '')).replace(/\s+/g, '');
const lessons = new Set((ctx.LESSONS || []).map((l) => l && l.id));

/* ---------- Find the mistake ---------- */
const EFILES = { 'grammar-errors-n5.js': { N5: 60 }, 'grammar-errors-n4.js': { N4: 60 }, 'grammar-errors-n3n2.js': { N3: 40, N2: 40 }, 'grammar-errors-n1.js': { N1: 40 } };
const TYPES = new Set(['particle', 'verb-form', 'adj-form', 'tense', 'counter', 'pair', 'give-receive', 'keigo', 'connector', 'word-choice']);
const GE = Array.isArray(ctx.GRAMMAR_ERRORS) ? ctx.GRAMMAR_ERRORS : [];
const eIds = new Map(), eCount = {};
let nMissing = 0, nClin = 0;
GE.forEach((x, k) => {
  const f = fileOf.get(x) || '?', id = x && x.id, at = f + ' ' + (id || '#' + k);
  if (!x || typeof x !== 'object') return E(f, 'entry ' + k + ' is not an object');
  if (!isStr(id)) return E(f, 'entry ' + k + ' has no id');
  if (eIds.has(id)) E(f, 'duplicate id ' + id + ' (also in ' + eIds.get(id) + ')'); else eIds.set(id, f);
  const m = /^e-(n5|n4|n3|n2|n1)-(\d{3})$/.exec(id);
  if (!m) E(f, 'id ' + id + ' is not e-<n5|n4|n3|n2>-NNN');
  else if (('N' + m[1].slice(1)) !== x.lv) E(f, id + ': id level does not match lv ' + x.lv);
  if (!EFILES[f] || !(x.lv in EFILES[f])) E(f, id + ': level ' + x.lv + ' does not belong in this file');
  (eCount[f] = eCount[f] || {})[x.lv] = ((eCount[f] || {})[x.lv] || 0) + 1;
  if (!TYPES.has(x.type)) E(f, id + ': unknown type ' + x.type);
  if (!isStr(x.bad) || !isStr(x.fix)) return E(f, id + ': bad and fix needed');
  const bw = x.bad.trim().split(/ +/), fw = x.fix.trim().split(/ +/);
  if (!Number.isInteger(x.i) || x.i < 0 || x.i >= bw.length) E(f, id + ': i ' + x.i + ' out of range (' + bw.length + ' words)');
  if (plain(x.bad) === plain(x.fix)) E(f, id + ': bad and fix are the same without furigana');
  if (bw.length !== fw.length) nMissing++;
  if (Math.abs(bw.length - fw.length) > 1) W(f, id + ': bad and fix differ by more than one word');
  // the changed words must include word i (or, for a missing word, start right after it)
  let p = 0; while (p < bw.length && p < fw.length && bw[p] === fw[p]) p++;
  let s = 0; while (s < bw.length - p && s < fw.length - p && bw[bw.length - 1 - s] === fw[fw.length - 1 - s]) s++;
  const wasN = bw.length - s - p;
  if (wasN > 0 && (x.i < p || x.i >= p + wasN)) W(f, id + ': the changed words (' + p + '…' + (p + wasN - 1) + ') do not include i = ' + x.i);
  if (wasN === 0 && x.i !== p - 1) W(f, id + ': a missing word comes after word ' + (p - 1) + ', but i = ' + x.i);
  if (wasN > 1) W(f, id + ': ' + wasN + ' words differ between bad and fix');
  if (x.l != null && !lessons.has(x.l)) E(f, id + ': l ' + x.l + ' is not a lesson id');
  if (!isStr(x.en) || !isStr(x.why)) E(f, id + ': en and why needed');
  if (/hospital|patient|doctor|nurse|medicine|ward|symptom|clinic|sleep|pain|ill|sick|health/i.test(x.en || '')) nClin++;
});
Object.entries(EFILES).forEach(([f, want]) => Object.entries(want).forEach(([lv, n]) => {
  const have = (eCount[f] || {})[lv] || 0;
  if (have !== n) W(f, lv + ': ' + have + ' of ' + n + ' items');
  const ids = GE.filter((x) => x && fileOf.get(x) === f && x.lv === lv).map((x) => x.id).sort();
  ids.forEach((id, k) => { const want2 = 'e-' + lv.toLowerCase() + '-' + String(k + 1).padStart(3, '0'); if (id !== want2 && k < n) W(f, 'ids not in sequence at ' + id + ' (expected ' + want2 + ')'); });
}));
if (GE.length && nMissing > GE.length / 10) W('grammar-errors', nMissing + ' items with a missing or extra word (plan: under a tenth)');

/* ---------- Listen and reply ---------- */
const RFILES = { 'listen-reply-1.js': { from: 1, to: 80, clin: false, lv: { N5: 25, N4: 25, N3: 20, N2: 10 } }, 'listen-reply-2.js': { from: 101, to: 180, clin: true, lv: { N5: 15, N4: 25, N3: 25, N2: 15 } }, 'listen-reply-3.js': { from: 201, to: 230, lv: { N1: 30 } } };
const LR = Array.isArray(ctx.LISTEN_REPLY) ? ctx.LISTEN_REPLY : [];
const rIds = new Map(), rCount = {}, aPos = {};
LR.forEach((x, k) => {
  const f = fileOf.get(x) || '?', id = x && x.id, spec = RFILES[f];
  if (!x || typeof x !== 'object') return E(f, 'entry ' + k + ' is not an object');
  if (!isStr(id)) return E(f, 'entry ' + k + ' has no id');
  if (rIds.has(id)) E(f, 'duplicate id ' + id + ' (also in ' + rIds.get(id) + ')'); else rIds.set(id, f);
  const m = /^r-(\d{3})$/.exec(id);
  if (!m) E(f, 'id ' + id + ' is not r-NNN');
  else if (spec && (+m[1] < spec.from || +m[1] > spec.to)) E(f, id + ': outside r-' + String(spec.from).padStart(3, '0') + '…r-' + spec.to);
  if (spec && spec.clin !== undefined && x.clin !== spec.clin) E(f, id + ': clin must be ' + spec.clin);
  if (!/^(N5|N4|N3|N2|N1)$/.test(x.lv || '')) E(f, id + ': lv ' + x.lv);
  (rCount[f] = rCount[f] || {})[x.lv] = ((rCount[f] || {})[x.lv] || 0) + 1;
  if (!isStr(x.say) || !isStr(x.en)) E(f, id + ': say and en needed');
  if (!isStr(x.who)) W(f, id + ': who missing');
  if (!isStr(x.why)) E(f, id + ': why missing');
  if (!Array.isArray(x.opts) || x.opts.length !== 4) return E(f, id + ': exactly 4 opts needed');
  x.opts.forEach((o, j) => { if (!o || !isStr(o.ja) || !isStr(o.en)) E(f, id + ': option ' + j + ' needs ja and en'); });
  const ps = x.opts.map((o) => plain(o && o.ja));
  if (new Set(ps).size !== 4) E(f, id + ': options not distinct without furigana');
  if (ps.includes(plain(x.say))) W(f, id + ': an option repeats what was said');
  if (!Number.isInteger(x.a) || x.a < 0 || x.a > 3) E(f, id + ': a must be 0..3');
  (aPos[f] = aPos[f] || [0, 0, 0, 0])[x.a] = ((aPos[f] || [])[x.a] || 0) + 1;
});
Object.entries(RFILES).forEach(([f, sp]) => {
  Object.entries(sp.lv).forEach(([lv, n]) => { const have = (rCount[f] || {})[lv] || 0; if (have !== n) W(f, lv + ': ' + have + ' of ' + n + ' items'); });
  const ids = LR.filter((x) => x && fileOf.get(x) === f).map((x) => x.id).sort();
  ids.forEach((id, k) => { const want = 'r-' + String(sp.from + k).padStart(3, '0'); if (id !== want) W(f, 'ids not in sequence at ' + id + ' (expected ' + want + ')'); });
  const ap = aPos[f]; if (ap) { const tot = ap.reduce((a, b) => a + b, 0); if (tot >= 20 && Math.max(...ap) > tot * 0.4) W(f, 'answer positions not varied: ' + ap.join(' / ')); }
});

/* ---------- Listening questions on older cases ---------- */
const QPLAN = {
  'listen-questions-5.js': ['mse-shota', 'mse-ren', 'mse-ayaka', 'mse-yumiko', 'mse-tetsuo', 'mse-chiyoko', 'mse-daisuke', 'mse-shigeru'],
  'listen-questions-6.js': ['dis-shota', 'dis-yumiko', 'dis-ren', 'dis-tetsuo', 'dis-ayaka', 'dis-daisuke', 'dis-chiyoko', 'dis-shigeru', 'eot-ocd', 'eot-ptsd', 'eot-hinata', 'eot-panic']
};
const LQ = ctx.LISTEN_Q || {};
const caseOf = (k) => { const [pre, ...r] = k.split('-'), id = r.join('-'); const list = pre === 'mse' ? ctx.PSYCH_MSE_CASES : pre === 'dis' ? ctx.PSYCH_DISCHARGE_CASES : pre === 'eot' ? ctx.PSYCH_EOT_CASES : null; return Array.isArray(list) && list.some((c) => c && c.id === id); };
Object.entries(QPLAN).forEach(([f, keys]) => {
  const mine = Object.keys(qFile).filter((k) => qFile[k] === f);
  mine.filter((k) => !keys.includes(k)).forEach((k) => E(f, 'key ' + k + ' is not planned for this file'));
  keys.filter((k) => !mine.includes(k)).forEach((k) => (LQ[k] && qFile[k] !== f ? E(f, 'key ' + k + ' was added by ' + qFile[k]) : W(f, 'key ' + k + ' not written yet')));
  mine.filter((k) => keys.includes(k)).forEach((k) => {
    if (!caseOf(k)) E(f, k + ': no such case');
    const qs = LQ[k];
    if (!Array.isArray(qs) || qs.length !== 5) return E(f, k + ': 5 questions needed, found ' + (Array.isArray(qs) ? qs.length : 'none'));
    qs.forEach((q, j) => {
      if (!Array.isArray(q) || !isStr(q[0]) || !Array.isArray(q[1]) || q[1].length !== 4 || !q[1].every(isStr) || !Number.isInteger(q[2]) || q[2] < 0 || q[2] > 3 || !isStr(q[3])) E(f, k + ' question ' + (j + 1) + ': shape [question, [4 options], 0..3, explanation]');
      else if (new Set(q[1].map((o) => o.trim().toLowerCase())).size !== 4) E(f, k + ' question ' + (j + 1) + ': options not distinct');
    });
  });
});

console.log('find the mistake', GE.length, '(' + Object.entries(eCount).map(([f, c]) => f.replace(/\.js$/, '') + ' ' + Object.entries(c).map(([l, n]) => l + ' ' + n).join(' ')).join('; ') + ')', '| clinical-ish', nClin,
  '| listen and reply', LR.length, '| listening keys 5/6', Object.keys(qFile).filter((k) => qFile[k] === 'listen-questions-5.js').length + '/' + Object.keys(qFile).filter((k) => qFile[k] === 'listen-questions-6.js').length);
warns.forEach((w) => console.log(w)); errs.forEach((e) => console.log(e));
console.log(warns.length + ' warning(s)');
console.log(errs.length + ' error(s)');
process.exit(errs.length ? 1 : 0);
