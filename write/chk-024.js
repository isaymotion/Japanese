#!/usr/bin/env node
/* Checks the 0.24.0 data shapes (PLAN-0.24.md section A). usage: node chk-024.js <repo> [extra data file ...]
   Loads js/ja.js, js/conjugate.js, js/lang.js, every js/data file in index.html order and every pictures/art-*.js named there,
   remembering which file added each entry; extra files (a writer's draft: picture-sets-*.js, art-*.js, signs*.js, …) load after them.
   Checks PICTURE_SETS (+ PICTURE_ART), SIGNS, SIGN_PANELS, PICTURE_BODYMAP and lessons-36..38 (after, .pic-embed ids).
   A file that still contains the comment "seed: writers replace" is a scaffold seed: its count rules (parts, say, signs,
   controls, tasks) are reported as warnings, not errors. A body map with no ask and no words is a stub (one warning).
   Prints warnings, then one line per problem with the FILE name, then "N error(s)". Exit code 1 when there are errors. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(process.argv[2] || '.');
const ctx = { console, TextEncoder, Buffer }; ctx.window = ctx; ctx.globalThis = ctx; vm.createContext(ctx);
const ih = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...ih.matchAll(/src="([^"]+\.js)"/g)].map((m) => m[1]);
const dataFiles = scripts.filter((s) => /^(js\/data|pictures)\//.test(s)).map((s) => path.join(root, s));
const extras = process.argv.slice(3).map((f) => path.resolve(f));
const errs = [], warns = [];
const E = (file, m) => errs.push('ERROR ' + file + ': ' + m), W = (file, m) => warns.push('warning ' + file + ': ' + m);
const seedFiles = new Set();
const SEED = 'seed: writers replace';
// Count rules: errors, or warnings in a seed file.
const C = (file, m) => (seedFiles.has(file) ? W(file, m + ' (seed)') : E(file, m));

/* ---------- Load, remembering which file added what ---------- */
const fileOf = new Map(), seenObj = new WeakSet(), artFile = {};
const note = (f, o) => { if (o && typeof o === 'object' && !seenObj.has(o)) { seenObj.add(o); fileOf.set(o, f); } };
const track = (f) => {
  (ctx.LESSONS || []).forEach((l) => note(f, l));
  (Array.isArray(ctx.PICTURE_SETS) ? ctx.PICTURE_SETS : []).forEach((x) => note(f, x));
  const sg = ctx.SIGNS || {}; (sg.groups || []).forEach((x) => note(f, x)); (sg.signs || []).forEach((x) => note(f, x));
  (Array.isArray(ctx.SIGN_PANELS) ? ctx.SIGN_PANELS : []).forEach((x) => note(f, x));
  if (ctx.PICTURE_BODYMAP) note(f, ctx.PICTURE_BODYMAP);
  const A = ctx.PICTURE_ART || {}; Object.keys(A).forEach((k) => { if (A[k] && typeof A[k] === 'object' && !seenObj.has(A[k])) { note(f, A[k]); if (artFile[k]) E(f, 'art ' + k + ' defined twice (also ' + artFile[k] + ')'); artFile[k] = f; } });
};
const load = (abs) => {
  const base = path.basename(abs);
  let src;
  try { src = fs.readFileSync(abs, 'utf8'); } catch (e) { E(base, 'cannot read: ' + e.message); return; }
  if (src.includes(SEED)) seedFiles.add(base);
  try { vm.runInContext(src, ctx, { filename: abs }); }
  catch (e) { E(base, 'does not load: ' + e.message); return; }
  track(base);
};
['js/ja.js', 'js/conjugate.js', 'js/lang.js'].forEach((f) => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f }));
dataFiles.forEach(load);
if (extras.length) { extras.forEach(load); const ord = path.join(root, 'js/data/lessons-zz-order.js'); if (fs.existsSync(ord)) vm.runInContext(fs.readFileSync(ord, 'utf8'), ctx); }
const JA = ctx.JA;
const sp = (s) => JA.speak(String(s == null ? '' : s)).trim();
const F = (o) => fileOf.get(o) || '?';
const isStr = (s) => typeof s === 'string' && s.trim().length > 0;
const isNum = (v) => typeof v === 'number' && isFinite(v);

/* ---------- PLAN C: the set ids of each group ---------- */
const PLAN = {
  body: ['body-front', 'body-back', 'face', 'hand-arm', 'leg-foot', 'inside'],
  home: ['house-outside', 'living-room', 'kitchen', 'bathroom', 'bedroom', 'appliances', 'kitchen-tools'],
  town: ['street', 'station', 'buildings', 'hospital-floor', 'positions', 'shops', 'pharmacy-counter', 'ward-room'],
  animals: ['pets-farm', 'zoo', 'birds-insects-sea', 'animal-parts'],
  machines: ['car', 'bicycle', 'computer-phone', 'vehicles', 'ward-things'],
  food: ['fruit-veg', 'meals-drinks', 'table-setting'],
  clothes: ['clothes', 'accessories-colours'],
  nature: ['landscape', 'weather', 'seasons-plants'],
  daily: ['feelings', 'daily-routine', 'school-office', 'family-tree', 'sports-hobbies', 'clock-calendar']
};
const PLANNED = new Set([].concat(...Object.values(PLAN)));

/* ---------- Art ---------- */
const ART = ctx.PICTURE_ART || {};
const ELEMS = new Set(['g', 'path', 'line', 'circle', 'ellipse', 'rect', 'polyline', 'polygon']);
const artChecked = new Set();
function checkArt(key) {
  if (artChecked.has(key)) return; artChecked.add(key);
  const a = ART[key], f = artFile[key] || '?', where = 'art ' + key;
  if (!a || typeof a !== 'object') return;
  const vb = a.vb;
  if (!Array.isArray(vb) || vb.length !== 2 || !isNum(vb[0]) || !isNum(vb[1])) E(f, where + ': vb must be [width, height]');
  else { if (vb[0] < 300 || vb[0] > 420) E(f, where + ': width ' + vb[0] + ' (300 to 420)'); if (vb[1] < 240 || vb[1] > 440) E(f, where + ': height ' + vb[1] + ' (240 to 440)'); }
  const svg = a.svg;
  if (!isStr(svg)) return E(f, where + ': svg missing');
  const bytes = Buffer.byteLength(svg, 'utf8');
  if (bytes >= 9 * 1024) E(f, where + ': ' + bytes + ' bytes (under 9 KB)');
  if (/[぀-ヿ㐀-鿿]/.test(svg)) E(f, where + ': Japanese inside the art');
  if (/<\s*(text|script|style|image|svg|use|foreignObject|a)\b/i.test(svg)) E(f, where + ': forbidden element ' + svg.match(/<\s*(text|script|style|image|svg|use|foreignObject|a)\b/i)[1]);
  if (/\bhref\s*=|xlink:/i.test(svg)) E(f, where + ': href / external reference');
  if (/\bid\s*=/i.test(svg)) E(f, where + ': id= attribute');
  if (/\bstyle\s*=|\bclass\s*=|url\(|#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(/i.test(svg)) E(f, where + ': style, class, url(), or a colour value (only the allowed paints)');
  if (/\bon[a-z]+\s*=/i.test(svg)) E(f, where + ': event attribute');
  [...svg.matchAll(/<\s*([a-zA-Z][\w:-]*)/g)].forEach((m) => { if (!ELEMS.has(m[1])) E(f, where + ': element <' + m[1] + '> (allowed: ' + [...ELEMS].join(' ') + ')'); });
  [...svg.matchAll(/\b([a-z-]+)\s*=\s*"([^"]*)"/gi)].forEach(([, at, v]) => {
    at = at.toLowerCase();
    if (at === 'stroke' && v !== 'currentColor' && v !== 'none') E(f, where + ': stroke="' + v + '" (only currentColor)');
    else if (at === 'fill' && !['none', 'currentColor', 'var(--surface)'].includes(v)) E(f, where + ': fill="' + v + '" (none, currentColor or var(--surface))');
    else if (at === 'fill-opacity' && !(+v >= 0.06 && +v <= 0.2)) E(f, where + ': fill-opacity ' + v + ' (0.06 to 0.2)');
    else if (at === 'stroke-width' && !(+v >= 1.5 && +v <= 3)) E(f, where + ': stroke-width ' + v + ' (1.5 to 3)');
    else if ((at === 'stroke-linecap' || at === 'stroke-linejoin') && v !== 'round') W(f, where + ': ' + at + '="' + v + '" (round)');
    else if (['opacity', 'stroke-opacity', 'color', 'stop-color', 'filter', 'mask', 'clip-path', 'marker-start', 'marker-end', 'marker-mid'].includes(at)) E(f, where + ': ' + at + ' (not an allowed paint)');
  });
  [...svg.matchAll(/<[^>]*>/g)].forEach(([t]) => { if (/\bfill="currentColor"/.test(t) && !/\bfill-opacity=/.test(t)) W(f, where + ': fill="currentColor" without fill-opacity (solid fill: meant?)'); });
}

/* ---------- Emoji (cards) ---------- */
const NEWER = [[0x1F90C, 0x1F90C], [0x1F972, 0x1F972], [0x1F977, 0x1F979], [0x1F9A3, 0x1F9A4], [0x1F9AB, 0x1F9AD], [0x1F9CB, 0x1F9CC],
  [0x1F6D6, 0x1F6DF], [0x1F6FB, 0x1F6FF], [0x1F7F0, 0x1F7FF], [0x1FA74, 0x1FA77], [0x1FA7B, 0x1FA7F], [0x1FA83, 0x1FA8F], [0x1FA96, 0x1FAFF]];   // added in Emoji 13.0 or later (a list, not the full table)
function checkPic(f, where, pic) {
  if (!isStr(pic)) return E(f, where + ': pic missing');
  const cps = [...pic].map((c) => c.codePointAt(0)).filter((c) => c !== 0xFE0F && c !== 0xFE0E);
  if (cps.includes(0x200D)) return E(f, where + ': ZWJ sequence in pic');
  if (cps.some((c) => c >= 0x1F3FB && c <= 0x1F3FF)) return E(f, where + ': skin-tone modifier in pic');
  if (cps.some((c) => c >= 0x1F1E6 && c <= 0x1F1FF)) return E(f, where + ': flag in pic');
  if (cps.length !== 1 && !(cps.length === 2 && cps[1] === 0x20E3)) return E(f, where + ': pic must be ONE emoji, found ' + JSON.stringify(pic));
  const c = cps[0];
  if (c < 0x2000) return E(f, where + ': pic is not an emoji: ' + JSON.stringify(pic));
  if (NEWER.some(([a, b]) => c >= a && c <= b)) E(f, where + ': pic U+' + c.toString(16).toUpperCase() + ' is newer than Emoji 12.0');
}

/* ---------- Picture sets ---------- */
const PS = Array.isArray(ctx.PICTURE_SETS) ? ctx.PICTURE_SETS : [];
const setById = new Map();
const VERB_END = /[うくぐすつぬぶむる]$/;
PS.forEach((s) => {
  const f = F(s);
  if (!s || typeof s !== 'object' || !isStr(s.id)) return E(f, 'picture set without an id');
  const where = 'set ' + s.id;
  if (setById.has(s.id)) E(f, where + ': id twice (also in ' + F(setById.get(s.id)) + ')'); else setById.set(s.id, s);
  const fg = (f.match(/^picture-sets-([\w]+)\.js$/) || [])[1];
  if (fg && s.group !== fg) E(f, where + ': group ' + s.group + ' (this file is group ' + fg + ')');
  if (!PLAN[s.group]) E(f, where + ': unknown group ' + s.group);
  else if (!PLAN[s.group].includes(s.id)) W(f, where + ': not a set id of PLAN C for group ' + s.group);
  if (s.kind !== 'diagram' && s.kind !== 'cards') E(f, where + ': kind must be diagram or cards, found ' + s.kind);
  if (s.lv !== 'N5' && s.lv !== 'N4') E(f, where + ': lv must be N5 or N4, found ' + s.lv);
  ['title', 'intro'].forEach((k) => { if (!isStr(s[k])) E(f, where + ': missing ' + k); });
  if (isStr(s.title) && JA.hasJa(s.title)) W(f, where + ': title should be English');
  const parts = Array.isArray(s.parts) ? s.parts : [];
  if (!Array.isArray(s.parts)) E(f, where + ': parts missing');
  const lo = s.kind === 'cards' ? 10 : 8;
  if (parts.length < lo || parts.length > 16) C(f, where + ': ' + lo + ' to 16 parts, found ' + parts.length);
  const pids = new Set(), ws = new Map(), pics = new Map();
  let n3 = 0;
  const art = s.kind === 'diagram' ? ART[s.art] : null;
  if (s.kind === 'diagram') { if (!isStr(s.art)) E(f, where + ': diagram without art'); else if (!art) E(f, where + ': art ' + s.art + ' not in PICTURE_ART (pictures/art-*.js)'); else checkArt(s.art); }
  if (s.kind === 'cards' && s.art != null) E(f, where + ': cards have no art');
  const vb = art && Array.isArray(art.vb) ? art.vb : null;
  const pins = [];
  parts.forEach((p, i) => {
    const pw = where + ' part ' + (p && p.id ? p.id : '#' + (i + 1));
    if (!p || typeof p !== 'object') return E(f, pw + ': not an object');
    if (!isStr(p.id)) E(f, pw + ': missing id');
    else if (!/^[a-z][a-z0-9-]*$/.test(p.id)) W(f, pw + ': id should be short romaji (a-z, 0-9, -)');
    if (isStr(p.id)) { if (pids.has(p.id)) E(f, pw + ': part id twice'); pids.add(p.id); }
    if (!isStr(p.w)) E(f, pw + ': missing w');
    else {
      const sw = sp(p.w);
      if (/\s/.test(p.w.trim())) { const toks = JA.toHira(JA.kana(p.w)).trim().split(/\s+/); if (!VERB_END.test(toks[toks.length - 1])) E(f, pw + ': w has spaces but is not a verb phrase: ' + p.w); }
      if (ws.has(sw)) E(f, pw + ': w ' + p.w + ' repeated (also part ' + ws.get(sw) + ')'); else ws.set(sw, p.id);
    }
    if (!isStr(p.en)) E(f, pw + ': missing en');
    if (!['N5', 'N4', 'N3'].includes(p.lv)) E(f, pw + ': lv must be N5, N4 or N3, found ' + p.lv);
    if (p.lv === 'N3') n3++;
    if (s.kind === 'diagram') {
      if (p.pic != null) W(f, pw + ': a diagram part has no pic');
      if (!isNum(p.x) || !isNum(p.y)) E(f, pw + ': x and y must be numbers');
      else {
        if (vb && (p.x < 12 || p.y < 12 || p.x > vb[0] - 12 || p.y > vb[1] - 12)) E(f, pw + ': pin (' + p.x + ', ' + p.y + ') not inside the box ' + vb.join('x') + ' with a 12-unit margin');
        pins.push([p.id, p.x, p.y]);
      }
    } else if (s.kind === 'cards') {
      if (p.x != null || p.y != null) E(f, pw + ': cards have no x / y');
      checkPic(f, pw, p.pic);
      if (isStr(p.pic)) { if (pics.has(p.pic)) E(f, pw + ': pic ' + p.pic + ' repeated (also part ' + pics.get(p.pic) + ')'); else pics.set(p.pic, p.id); }
    }
  });
  if (parts.length && n3 * 4 > parts.length) E(f, where + ': ' + n3 + ' of ' + parts.length + ' words are N3 (at most a quarter)');
  for (let i = 0; i < pins.length; i++) for (let j = i + 1; j < pins.length; j++) {
    const d = Math.hypot(pins[i][1] - pins[j][1], pins[i][2] - pins[j][2]);
    if (d < 26) E(f, where + ': pins ' + pins[i][0] + ' and ' + pins[j][0] + ' are ' + d.toFixed(1) + ' units apart (at least 26)');
  }
  const say = Array.isArray(s.say) ? s.say : [];
  if (say.length < 6 || say.length > 10) C(f, where + ': 6 to 10 say sentences, found ' + say.length);
  const sayText = new Set(), per = {};
  say.forEach((x, i) => {
    const xw = where + ' say ' + (i + 1);
    if (!x || typeof x !== 'object') return E(f, xw + ': not an object');
    if (!isStr(x.ja)) E(f, xw + ': ja empty');
    else { const t = sp(x.ja); if (sayText.has(t)) E(f, xw + ': sentence repeated'); sayText.add(t); }
    if (!isStr(x.en)) E(f, xw + ': missing en');
    if (!pids.has(x.p)) E(f, xw + ': p ' + x.p + ' is not a part id');
    else per[x.p] = (per[x.p] || 0) + 1;
  });
  Object.keys(per).forEach((k) => { if (per[k] > 2) W(f, where + ': part ' + k + ' is the answer of ' + per[k] + ' sentences'); });
});
// Art defined but not used by any set
Object.keys(ART).forEach((k) => { if (!PS.some((s) => s && s.art === k)) W(artFile[k] || '?', 'art ' + k + ' is not used by any set'); checkArt(k); });
const missing = [...PLANNED].filter((id) => !setById.has(id));
if (missing.length) W('picture-sets-*.js', missing.length + ' PLAN C set(s) not written yet: ' + missing.join(', '));

/* ---------- Signs ---------- */
const SG = ctx.SIGNS;
const STYLES = ['green', 'red', 'blue', 'yellow', 'plain'];
let nSigns = 0;
if (SG != null) {
  const fS = F(SG.groups && SG.groups[0]) !== '?' ? F(SG.groups[0]) : 'signs.js';
  if (!Array.isArray(SG.groups) || !Array.isArray(SG.signs)) E(fS, 'SIGNS must be { groups: [], signs: [] }');
  const gids = new Set();
  (SG.groups || []).forEach((g, i) => {
    const f = F(g);
    if (!g || !isStr(g.id)) return E(f, 'sign group #' + (i + 1) + ' without an id');
    if (gids.has(g.id)) E(f, 'sign group ' + g.id + ' twice'); gids.add(g.id);
    if (!isStr(g.title)) E(f, 'sign group ' + g.id + ': missing title');
  });
  const ids = new Set(), inGroup = {};
  (SG.signs || []).forEach((x, i) => {
    const f = F(x);
    if (!x || !isStr(x.id)) return E(f, 'sign #' + (i + 1) + ' without an id');
    const where = 'sign ' + x.id;
    nSigns++;
    if (ids.has(x.id)) E(f, where + ': id twice'); ids.add(x.id);
    if (!/^sg-\d{3}$/.test(x.id)) W(f, where + ': ids are sg-001, sg-002, …');
    if (!gids.has(x.g)) E(f, where + ': group ' + x.g + ' does not exist');
    if (!STYLES.includes(x.style)) E(f, where + ': style must be one of ' + STYLES.join(', ') + ', found ' + x.style);
    if (!isStr(x.ja)) E(f, where + ': ja empty');
    else { const t = sp(x.ja), m = (inGroup[x.g] = inGroup[x.g] || new Map()); if (m.has(t)) E(f, where + ': ' + x.ja + ' repeated in group ' + x.g + ' (also ' + m.get(t) + ')'); else m.set(t, x.id); }
    if (!isStr(x.en)) E(f, where + ': missing en');
    if (!['N5', 'N4', 'N3', 'N2'].includes(x.lv)) E(f, where + ': lv ' + x.lv);
  });
  gids.forEach((g) => { if (!inGroup[g]) W('signs.js', 'sign group ' + g + ' has no signs'); });
}

/* ---------- Panels ---------- */
const SP = ctx.SIGN_PANELS;
if (SP != null && !Array.isArray(SP)) E('signs-panels.js', 'SIGN_PANELS must be an array');
const KINDS = ['btn', 'lamp', 'dial'];
const pIds = new Set();
(Array.isArray(SP) ? SP : []).forEach((p, i) => {
  const f = F(p);
  if (!p || !isStr(p.id)) return E(f, 'panel #' + (i + 1) + ' without an id');
  const where = 'panel ' + p.id;
  if (pIds.has(p.id)) E(f, where + ': id twice'); pIds.add(p.id);
  if (!isStr(p.title)) E(f, where + ': missing title');
  if (!['N5', 'N4', 'N3'].includes(p.lv)) E(f, where + ': lv ' + p.lv);
  const rows = Array.isArray(p.rows) ? p.rows : [];
  if (rows.length < 2 || rows.length > 4) E(f, where + ': 2 to 4 rows, found ' + rows.length);
  const ctl = new Map();
  rows.forEach((r, ri) => (Array.isArray(r) ? r : (E(f, where + ' row ' + (ri + 1) + ': not an array'), [])).forEach((c, ci) => {
    const cw = where + ' control ' + (c && c.id ? c.id : (ri + 1) + '.' + (ci + 1));
    if (!c || !isStr(c.id)) return E(f, cw + ': missing id');
    if (ctl.has(c.id)) E(f, cw + ': control id twice'); ctl.set(c.id, c);
    if (!isStr(c.ja)) E(f, cw + ': ja empty');
    if (!isStr(c.en)) E(f, cw + ': missing en');
    if (!KINDS.includes(c.kind)) E(f, cw + ': kind must be btn, lamp or dial, found ' + c.kind);
  }));
  if (ctl.size < 6 || ctl.size > 12) C(f, where + ': 6 to 12 controls, found ' + ctl.size);
  const tasks = Array.isArray(p.tasks) ? p.tasks : [];
  if (tasks.length < 5 || tasks.length > 6) C(f, where + ': 5 or 6 tasks, found ' + tasks.length);
  tasks.forEach((t, ti) => {
    const tw = where + ' task ' + (ti + 1);
    if (!t || !isStr(t.q)) return E(f, tw + ': missing q');
    const c = ctl.get(t.a);
    if (!c) E(f, tw + ': a ' + t.a + ' is not a control id');
    else if (c.kind === 'lamp') E(f, tw + ': a ' + t.a + ' is a lamp (not pressable)');
    if (!isStr(t.why)) W(f, tw + ': no why');
  });
});

/* ---------- Body map ---------- */
const BM = ctx.PICTURE_BODYMAP;
if (BM != null) {
  const f = F(BM) !== '?' ? F(BM) : 'picture-bodymap.js';
  const ask = Array.isArray(BM.ask) ? BM.ask : null, words = Array.isArray(BM.words) ? BM.words : null;
  if (!Array.isArray(BM.sets) || !BM.sets.length) E(f, 'body map: sets missing');
  if (!ask || !words) E(f, 'body map: ask and words must be arrays');
  else if (!ask.length && !words.length) W(f, 'body map is still a stub (no ask, no words)');
  else {
    (BM.sets || []).forEach((id) => { if (!setById.has(id)) E(f, 'body map: set ' + id + ' does not exist'); });
    if (ask.length !== 8) E(f, 'body map: 8 ask, found ' + ask.length);
    if (words.length !== 10) E(f, 'body map: 10 words, found ' + words.length);
    [['ask', ask], ['word', words]].forEach(([k, l]) => { const seen = new Set(); l.forEach((x, i) => {
      if (!x || !isStr(x.ja) || !isStr(x.en)) return E(f, 'body map ' + k + ' ' + (i + 1) + ': needs ja and en');
      const t = sp(x.ja); if (seen.has(t)) E(f, 'body map ' + k + ' ' + (i + 1) + ': repeated'); seen.add(t);
    }); });
  }
}

/* ---------- Picture lessons (lessons-36..38) ---------- */
const L = ctx.LESSONS || [];
const lIds = new Set(L.map((l) => l && l.id));
const NEWL = /^lessons-3[678]\.js$/;
let nNew = 0;
L.forEach((l) => {
  if (!l || !l.id) return;
  const f = F(l);
  if (!NEWL.test(f)) return;
  nNew++;
  const where = 'lesson ' + l.id;
  if (!isStr(l.after)) E(f, where + ': no after');
  else if (!lIds.has(l.after)) E(f, where + ': after names no lesson: ' + l.after);
  const body = String(l.body || '');
  [...body.matchAll(/<div\b[^>]*\bclass="pic-embed"[^>]*>/g)].forEach((m) => {
    const id = (m[0].match(/\bdata-pic="([^"]*)"/) || [])[1];
    if (!id) return E(f, where + ': .pic-embed without data-pic');
    if (setById.has(id)) return;
    if (PLANNED.has(id)) W(f, where + ': picture ' + id + ' is not written yet');
    else E(f, where + ': picture ' + id + ' is not a picture set id');
  });
  if (/pic-embed/.test(body) && !/<div class="pic-embed" data-pic="[^"]+"><\/div>/.test(body)) W(f, where + ': write embeds exactly as <div class="pic-embed" data-pic="<set id>"></div>');
});

console.log('picture sets', PS.length, '(' + PS.filter((s) => s && s.kind === 'diagram').length + ' diagram) | art', Object.keys(ART).length, '| signs', nSigns,
  '| panels', Array.isArray(SP) ? SP.length : 0, '| body map', BM ? 'yes' : 'no', '| picture lessons', nNew, seedFiles.size ? '| seed files: ' + [...seedFiles].join(', ') : '');
warns.forEach((w) => console.log(w)); errs.forEach((e) => console.log(e));
console.log(warns.length + ' warning(s)');
console.log(errs.length + ' error(s)');
process.exit(errs.length ? 1 : 0);
