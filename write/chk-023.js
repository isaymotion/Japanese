#!/usr/bin/env node
/* Checks the 0.23.0 data shapes (PLAN-0.23.md section A). usage: node chk-023.js <repo> [extra data file ...]
   Loads js/ja.js, js/conjugate.js, js/lang.js and every js/data file in index.html order, remembering which file added
   each entry, then checks lessons (ids, after, review, quiz), LESSON_EXTRA, GRAMMAR_CLOZE, GRAMMAR_TRANSFORM, WORD_PAIRS
   and SOUND_WORDS. Extra files (a writer's draft) load after the repo data; the lesson order file is then run again.
   Prints one line per problem with the file name, then "N error(s)". Exit code 1 when there are errors. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(process.argv[2] || '.');
const ctx = { console, TextEncoder, Buffer }; ctx.window = ctx; ctx.globalThis = ctx; vm.createContext(ctx);
const ih = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...ih.matchAll(/src="([^"]+\.js)"/g)].map((m) => m[1]);
const dataFiles = scripts.filter((s) => /^js\/data\//.test(s)).map((s) => path.join(root, s));
const extras = process.argv.slice(3).map((f) => path.resolve(f));
const errs = [], warns = [];
const E = (file, m) => errs.push('ERROR ' + file + ': ' + m), W = (file, m) => warns.push('warning ' + file + ': ' + m);

// Which file added each entry
const fileOf = new Map(), extraFile = {};
const seenObj = new WeakSet();
const note = (f, o) => { if (o && typeof o === 'object' && !seenObj.has(o)) { seenObj.add(o); fileOf.set(o, f); } };
const track = (f) => {
  (ctx.LESSONS || []).forEach((l) => note(f, l));
  ['GRAMMAR_CLOZE', 'GRAMMAR_TRANSFORM', 'WORD_PAIRS'].forEach((k) => (Array.isArray(ctx[k]) ? ctx[k] : []).forEach((x) => note(f, x)));
  const sw = ctx.SOUND_WORDS || {}; (sw.groups || []).forEach((x) => note(f, x)); (sw.items || []).forEach((x) => note(f, x));
  const lx = ctx.LESSON_EXTRA || {}; Object.keys(lx).forEach((k) => { if (lx[k] && typeof lx[k] === 'object' && !seenObj.has(lx[k])) { note(f, lx[k]); (extraFile[k] = extraFile[k] || []).push(f); } });
};
const load = (abs) => {
  const f = path.relative(root, abs).startsWith('..') ? abs : path.relative(root, abs);
  try { vm.runInContext(fs.readFileSync(abs, 'utf8'), ctx, { filename: abs }); }
  catch (e) { E(f, 'does not load: ' + e.message); return; }
  track(path.basename(abs));
};
['js/ja.js', 'js/conjugate.js', 'js/lang.js'].forEach((f) => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f }));
dataFiles.forEach(load);
if (extras.length) { extras.forEach(load); const ord = path.join(root, 'js/data/lessons-zz-order.js'); if (fs.existsSync(ord)) vm.runInContext(fs.readFileSync(ord, 'utf8'), ctx); }
const JA = ctx.JA;
const sp = (s) => JA.speak(String(s == null ? '' : s)).trim();
const hira = (s) => JA.toHira(JA.compact(JA.kana(String(s || ''))));
const F = (o) => fileOf.get(o) || '?';
const isStr = (s) => typeof s === 'string' && s.trim().length > 0;
const LVS = ['N5', 'N4', 'N3', 'N2', 'N1'];

/* ---------- Lessons ---------- */
const L = ctx.LESSONS || [];
const lById = new Map();
L.forEach((l) => {
  const f = F(l);
  if (!l || !isStr(l.id)) return E(f, 'lesson without an id');
  if (lById.has(l.id)) E(f, 'lesson id twice: ' + l.id + ' (also in ' + F(lById.get(l.id)) + ')'); else lById.set(l.id, l);
});
const NEWFILE = /^lessons-(2[89]|3\d|4[0-4])\.js$/;
L.forEach((l) => {
  if (!l || !l.id) return;
  const f = F(l), where = 'lesson ' + l.id;
  if (!['Starter', 'N5', 'N4', 'N3', 'N2', 'N1'].includes(l.level)) E(f, where + ': level ' + l.level);
  ['unit', 'title', 'summary', 'body'].forEach((k) => { if (!isStr(l[k])) E(f, where + ': missing ' + k); });
  if (l.after != null) {
    if (l.after === l.id) E(f, where + ': after names itself');
    else if (!lById.has(l.after)) E(f, where + ': after names no lesson: ' + l.after);
  } else if (NEWFILE.test(f)) E(f, where + ': no `after` (every lesson of a 0.23.0 file needs one)');
  if (l.review != null && l.review !== true) E(f, where + ': review must be true or absent');
  const n = Array.isArray(l.quiz) ? l.quiz.length : 0;
  if (!NEWFILE.test(f)) {
    // Lessons released before 0.23.0 (some have 4 options): only the answer index is checked.
    return (l.quiz || []).forEach((q, i) => { if (!Array.isArray(q) || !Array.isArray(q[1]) || !(Number.isInteger(q[2]) && q[2] >= 0 && q[2] < q[1].length)) E(f, where + ' quiz ' + (i + 1) + ': shape or answer index'); });
  }
  if (l.review) {
    if (n !== 12) E(f, where + ': a review lesson has 12 quiz questions, found ' + n);
    if (!/^Review: /.test(l.title || '')) W(f, where + ': a review title starts with "Review: "');
    const t = lById.get(l.after);
    if (t && t.unit !== l.unit) W(f, where + ': unit "' + l.unit + '" differs from the unit of ' + l.after + ' ("' + t.unit + '")');
    if (t && t.level !== l.level) W(f, where + ': level ' + l.level + ' differs from ' + l.after + ' (' + t.level + ')');
  } else if (n < 5 || n > 7) E(f, where + ': 5 to 7 quiz questions, found ' + n);
  (l.quiz || []).forEach((q, i) => quizItem(f, where + ' quiz ' + (i + 1), q));
});
function quizItem(f, where, q) {
  if (!Array.isArray(q) || q.length < 3) return E(f, where + ': shape [q, [3 opts], idx, why]');
  const [qq, opts, a, why] = q;
  if (!isStr(qq)) E(f, where + ': empty question');
  if (!Array.isArray(opts) || opts.length !== 3) return E(f, where + ': 3 options, found ' + (Array.isArray(opts) ? opts.length : 'none'));
  if (!(Number.isInteger(a) && a >= 0 && a < opts.length)) E(f, where + ': answer index out of range: ' + a);
  if (new Set(opts.map((o) => String(o).trim())).size !== opts.length) E(f, where + ': two options are the same');
  if (!isStr(why)) W(f, where + ': no explanation');
}
// Order: every `after` is now directly before its lesson or before a run of its other followers
const pos = new Map(L.map((l, i) => [l, i]));
L.forEach((l) => { if (l && l.after && lById.has(l.after) && l.after !== l.id && pos.get(lById.get(l.after)) > pos.get(l)) E(F(l), 'lesson ' + l.id + ' comes before its after-lesson ' + l.after + ' (is lessons-zz-order.js loaded last?)'); });

/* ---------- Lesson extras ---------- */
const LX = ctx.LESSON_EXTRA || {};
Object.keys(LX).forEach((id) => {
  const x = LX[id], files = extraFile[id] || ['?'], f = files[files.length - 1], where = 'extra ' + id;
  if (files.length > 1) E(f, where + ': given in more than one file (' + files.join(', ') + '); the later one wins');
  if (!lById.has(id)) E(f, where + ': not a lesson id');
  if (!x || typeof x !== 'object') return E(f, where + ': not an object');
  const mis = x.mistakes || [], more = x.more || [], qz = x.quiz || [];
  if (mis.length !== 3) E(f, where + ': 3 mistakes, found ' + mis.length);
  if (more.length !== 6) E(f, where + ': 6 more examples, found ' + more.length);
  if (qz.length !== 6) E(f, where + ': 6 quiz questions, found ' + qz.length);
  mis.forEach((m, i) => {
    if (!Array.isArray(m) || m.length !== 3 || !m.every(isStr)) return E(f, where + ' mistake ' + (i + 1) + ': shape [wrongJa, rightJa, whyEn]');
    if (sp(m[0]) === sp(m[1])) E(f, where + ' mistake ' + (i + 1) + ': the wrong line is the same as the right line');
    if (!JA.hasJa(m[0]) || !JA.hasJa(m[1])) E(f, where + ' mistake ' + (i + 1) + ': wrong and right lines are Japanese');
  });
  more.forEach((m, i) => { if (!Array.isArray(m) || m.length !== 2 || !m.every(isStr)) E(f, where + ' more ' + (i + 1) + ': shape [ja, en]'); });
  const l = lById.get(id);
  if (l) {
    const own = new Set(); const re = /<div class="ex">\s*<b>([\s\S]*?)<\/b>/g; let mm; while ((mm = re.exec(l.body || ''))) own.add(sp(mm[1].replace(/<[^>]+>/g, '')));
    more.forEach((m, i) => { if (Array.isArray(m) && own.has(sp(m[0]))) W(f, where + ' more ' + (i + 1) + ': repeats an example of the lesson'); });
    const lq = new Set((l.quiz || []).map((q) => sp(q && q[0])));
    qz.forEach((q, i) => { if (Array.isArray(q) && lq.has(sp(q[0]))) W(f, where + ' quiz ' + (i + 1) + ': repeats a question of the lesson'); });
  }
  qz.forEach((q, i) => quizItem(f, where + ' quiz ' + (i + 1), q));
});

/* ---------- Shared item checks ---------- */
const idsOnce = (list, kind) => { const m = new Map(); list.forEach((x) => { if (!x || !isStr(x.id)) return E(F(x), kind + ' without an id'); if (m.has(x.id)) E(F(x), kind + ' id twice: ' + x.id + ' (also in ' + F(m.get(x.id)) + ')'); else m.set(x.id, x); }); };
const lessonOfLevel = (f, where, l, lv) => {
  if (!isStr(l)) return W(f, where + ': no lesson id (l)');
  const t = lById.get(l);
  if (!t) W(f, where + ': l is not a lesson id: ' + l);
  else if (t.level !== lv) W(f, where + ': lesson ' + l + ' is ' + t.level + ', not ' + lv);
};
const idPrefix = (f, x, letter) => { if (isStr(x.id) && LVS.includes(x.lv) && x.id.indexOf(letter + '-' + x.lv.toLowerCase() + '-') !== 0) W(f, x.id + ': id does not start with ' + letter + '-' + x.lv.toLowerCase() + '-'); };

/* ---------- Grammar cloze ---------- */
const GC = Array.isArray(ctx.GRAMMAR_CLOZE) ? ctx.GRAMMAR_CLOZE : [];
idsOnce(GC, 'cloze');
GC.forEach((c) => {
  if (!c) return;
  const f = F(c), where = 'cloze ' + c.id;
  if (!LVS.includes(c.lv)) E(f, where + ': lv ' + c.lv);
  idPrefix(f, c, 'c');
  lessonOfLevel(f, where, c.l, c.lv);
  if (!isStr(c.s)) return E(f, where + ': no sentence s');
  const n = (c.s.match(/＿/g) || []).length;
  if (n !== 1) E(f, where + ': exactly one ＿, found ' + n);
  else if (!c.s.trim().split(/\s+/).some((t) => /^[「『（]?＿[。、？！」』）]*$/.test(t))) E(f, where + ': ＿ is not its own word');
  if (!isStr(c.a)) E(f, where + ': no answer a');
  if (!Array.isArray(c.opts) || c.opts.length !== 4) E(f, where + ': 4 options, found ' + (Array.isArray(c.opts) ? c.opts.length : 'none'));
  else {
    if (new Set(c.opts.map(sp)).size !== 4) E(f, where + ': options are not distinct');
    if (!c.opts.includes(c.a)) E(f, where + ': a is not among the options');
  }
  if (!isStr(c.en)) E(f, where + ': no en');
  if (!isStr(c.why)) W(f, where + ': no why');
  if (isStr(c.s) && isStr(c.a) && /＿/.test(JA.fillBlank(c.s, c.a))) E(f, where + ': the filled sentence still has a blank');
});

/* ---------- Grammar transformations ---------- */
const TYPES = 'neg past pastneg polite plain te-join reason contrast want request potential volitional conditional noun-mod passive causative giving keigo formal casual nominalize other'.split(' ');
const GT = Array.isArray(ctx.GRAMMAR_TRANSFORM) ? ctx.GRAMMAR_TRANSFORM : [];
idsOnce(GT, 'transform');
GT.forEach((t) => {
  if (!t) return;
  const f = F(t), where = 'transform ' + t.id;
  if (!LVS.includes(t.lv)) E(f, where + ': lv ' + t.lv);
  idPrefix(f, t, 't');
  if (!TYPES.includes(t.type)) E(f, where + ': type ' + t.type + ' is not in the list');
  if (!isStr(t.instr)) E(f, where + ': no instr');
  if (!isStr(t.en)) E(f, where + ': no en');
  lessonOfLevel(f, where, t.l, t.lv);
  const from = Array.isArray(t.from) ? t.from : [t.from];
  if (Array.isArray(t.from) && t.from.length !== 2) E(f, where + ': from as an array has two sentences, found ' + t.from.length);
  if (!from.every(isStr)) E(f, where + ': from is empty');
  if (t.type === 'te-join' && !Array.isArray(t.from)) W(f, where + ': te-join with a single from sentence');
  if (!isStr(t.to)) E(f, where + ': no model answer to');
  if (!Array.isArray(t.alt)) E(f, where + ': alt must be an array (may be empty)');
  if (!Array.isArray(t.wrong) || t.wrong.length !== 3) E(f, where + ': 3 wrong, found ' + (Array.isArray(t.wrong) ? t.wrong.length : 'none'));
  const all = [t.to].concat(t.alt || [], t.wrong || []).filter((x) => x != null);
  if (!all.every(isStr)) E(f, where + ': an empty answer string');
  const said = all.map(sp);
  if (new Set(said).size !== said.length) E(f, where + ': to, alt and wrong are not all distinct');
  const fromSaid = new Set(from.map(sp).concat(from.length > 1 ? [from.map(sp).join('')] : []));
  said.forEach((x, i) => { if (fromSaid.has(x)) E(f, where + ': ' + (i === 0 ? 'to' : 'an answer') + ' equals from: ' + all[i]); });
});

/* ---------- Word pairs ---------- */
const WP = Array.isArray(ctx.WORD_PAIRS) ? ctx.WORD_PAIRS : [];
idsOnce(WP, 'pair');
const pairSeen = new Map();
WP.forEach((p) => {
  if (!p) return;
  const f = F(p), where = 'pair ' + p.id;
  if (!LVS.includes(p.lv)) E(f, where + ': lv ' + p.lv);
  idPrefix(f, p, 'p');
  if (!['opp', 'syn', 'col'].includes(p.type)) E(f, where + ': type ' + p.type + ' (opp, syn or col)');
  ['a', 'ea', 'b', 'eb'].forEach((k) => { if (!isStr(p[k])) E(f, where + ': missing ' + k); });
  if (isStr(p.a) && isStr(p.b) && sp(p.a) === sp(p.b)) E(f, where + ': a and b are the same');
  if (p.type === 'col' && !isStr(p.en)) E(f, where + ': a collocation needs en');
  if (p.type === 'syn' && !isStr(p.note)) W(f, where + ': a near-synonym pair should have a note');
  const k = [sp(p.a), sp(p.b)].sort().join(' / ');
  if (pairSeen.has(k)) E(f, where + ': the same pair as ' + pairSeen.get(k) + ' (' + k + ')'); else pairSeen.set(k, p.id);
});

/* ---------- Sound words ---------- */
const SW = ctx.SOUND_WORDS || { groups: [], items: [] };
const groups = Array.isArray(SW.groups) ? SW.groups : [], items = Array.isArray(SW.items) ? SW.items : [];
idsOnce(groups, 'sound group'); idsOnce(items, 'sound word');
const gids = new Set(groups.map((g) => g && g.id));
groups.forEach((g) => { if (g && !isStr(g.title)) E(F(g), 'sound group ' + g.id + ': no title'); });
const wordSeen = new Map();
items.forEach((it) => {
  if (!it) return;
  const f = F(it), where = 'sound word ' + it.id;
  if (!isStr(it.w)) return E(f, where + ': no word w');
  const k = sp(it.w);
  if (wordSeen.has(k)) E(f, where + ': word ' + it.w + ' twice (also ' + wordSeen.get(k) + ')'); else wordSeen.set(k, it.id);
  if (!gids.has(it.g)) E(f, where + ': group ' + it.g + ' does not exist');
  if (!['N5', 'N4', 'N3', 'N2', 'N1', 'C'].includes(it.lv)) E(f, where + ': lv ' + it.lv);
  ['en', 'ex', 'exen'].forEach((x) => { if (!isStr(it[x])) E(f, where + ': missing ' + x); });
  if (isStr(it.ex) && !hira(it.ex).includes(hira(it.w))) E(f, where + ': the example does not contain ' + it.w);
});

console.log('lessons', L.length, '(review ' + L.filter((l) => l && l.review).length + ', with after ' + L.filter((l) => l && l.after).length + ') | lesson extras', Object.keys(LX).length,
  '| cloze', GC.length, '| transform', GT.length, '| pairs', WP.length, '| sound words', items.length, 'in', groups.length, 'groups');
warns.forEach((w) => console.log(w)); errs.forEach((e) => console.log(e));
console.log(errs.length + ' error(s)');
process.exit(errs.length ? 1 : 0);
