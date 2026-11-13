#!/usr/bin/env node
/* Collects every Japanese string the app can speak and writes tools/texts.json:
     [{ key, text, ja }]
   text = JA.speak(notation): what the app passes to the voice (readings and word spaces removed).
   key  = AudioKey(text): the audio file name (js/audio-key.js; the same function is used here).
   ja   = the string in the app's notation, with its furigana. tools/make_audio_pack.py uses the readings to
          choose what is sent to the voice (see "What the voice is sent" in that file). It never changes the key.

   When two strings are written the same but read differently (方 = かた / ほう), a single file name cannot
   hold both. The reading used most often keeps the plain key; each other reading gets a second entry with
   key = AudioKey(text + '|' + kana), which js/core.js looks for first.

   A blank (＿) in a phrase is spoken as a pause, as in the app. Not recorded (the device voice speaks them):
   the conjugation tables on dictionary word pages (only the verbs and adjectives of the trainer are recorded
   in every form). The particle drill sentences have no Listen button, so they are not collected.
   Usage: node tools/collect-texts.js [--quiet]. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { console, TextEncoder, Buffer };
ctx.window = ctx; ctx.globalThis = ctx;
vm.createContext(ctx);
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const load = (f) => vm.runInContext(read(f), ctx, { filename: f });

// Load what index.html loads: the notation, the conjugator, the language pack and every data file.
const scripts = [...read('index.html').matchAll(/src="([^"]+\.js)"/g)].map((m) => m[1]);
['js/ja.js', 'js/conjugate.js', 'js/audio-key.js', 'js/lang.js'].concat(scripts.filter((s) => /^js\/data\//.test(s))).forEach(load);
const JA = ctx.JA, AudioKey = ctx.AudioKey;

const HAS_WORD = /[぀-ヿ㐀-鿿]/;
const byText = new Map();   // text -> Map(kana -> { n, ja })
const stats = {};
let source = '';
const add = (s) => {
  if (!s || typeof s !== 'string') return;
  s = s.trim();
  if (!s || /[{}<>]/.test(s)) return;      // unfilled templates, markup
  const text = JA.speak(s).trim();
  if (!text || !HAS_WORD.test(text)) return;
  const kana = JA.compact(JA.kana(s)).trim();
  if (!byText.has(text)) { byText.set(text, new Map()); stats[source] = (stats[source] || 0) + 1; }
  const m = byText.get(text);
  if (m.has(kana)) m.get(kana).n++; else m.set(kana, { n: 1, ja: s.replace(/\s+/g, ' ') });
};
const from = (name, fn) => { source = name; fn(); };
const unesc = (h) => h.replace(/<[^>]+>/g, '').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const dataLines = (raw) => String(raw || '').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));

/* ---------- Learn track ---------- */
from('dictionary', () => (ctx.DICT_RAW || []).forEach((raw) => dataLines(raw).forEach((l) => add(l.split('|')[0]))));
from('kanji words', () => (ctx.KANJI_RAW || []).forEach((b) => dataLines(b.text).forEach((l) => {
  const c = l.split('|').map((x) => x.trim());
  if (c.length < 7) return;
  (c[6] && c[6] !== '-' ? c[6].split(';') : []).forEach((w) => { const at = w.indexOf('='); if (at > 0) add(w.slice(0, at)); });
})));
from('lesson examples', () => (ctx.LESSONS || []).forEach((l) => {
  const re = /<div class="ex">\s*<b>([\s\S]*?)<\/b>/g; let m;
  while ((m = re.exec(l.body))) add(unesc(m[1]));
}));
from('readings', () => (ctx.READING || []).forEach((r) => (r.tl || []).forEach(add)));
from('dialogues', () => (ctx.DIALOGUES || []).forEach((d) => d.lines.forEach((l) => { add(l[1]); if (l[3]) add(l[3]); })));
// 0.17.0: example sentences for dictionary words, sound pairs, numbers and counters (tables and clinic sentences).
from('word examples', () => (ctx.DICT_EX || []).forEach((e) => add(e[1])));
from('sound pairs', () => ((ctx.SOUND_PAIRS || {}).items || []).forEach((it) => { add(it[1]); add(it[3]); }));
from('numbers and counters', () => { const c = ctx.JA_COUNTERS || {}; (c.groups || []).forEach((g) => g.rows.forEach((r) => add(r[1]))); (c.clinical || []).forEach((x) => add(x[0])); });
from('kana', () => {
  // The kana chart is in js/kana.js (a view module): take the rows from its source.
  const rows = [...read('js/kana.js').matchAll(/R\('[^']*',\s*'[^']*',\s*'[^']*',\s*'([^']*)'\)/g)].map((m) => m[1]).join(' ').split(/\s+/).filter((x) => x && x !== '-');
  if (rows.length < 100) throw new Error('kana rows not found in js/kana.js (' + rows.length + ')');
  rows.forEach((h) => { add(h); add(h.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60))); });
});
from('verb and adjective trainer', () => {
  (ctx.JA_VERBS || []).forEach((it) => { add(it.d); (it.ex || []).forEach((e) => add(e[0])); Object.values(ctx.JConj.verb(it.d, it.g) || {}).forEach(add); });
  (ctx.JA_ADJ || []).forEach((it) => { add(it.d); (it.ex || []).forEach((e) => add(e[0])); Object.values(ctx.JConj.adj(it.d, it.t) || {}).forEach(add); });
});
from('particles', () => { const P = ctx.JA_PARTICLES || {}; (P.guide || []).forEach((g) => (g.ex || []).forEach((e) => add(e[0]))); });

/* ---------- Psychiatry ---------- */
from('interview phrases', () => (ctx.PSYCH_SECTIONS || []).forEach((s) => s.phrases.forEach((p) => { add(p.f); add(p.c); (p.answers || []).forEach((a) => add(a[0])); })));
from('replies', () => { const A = ctx.PSYCH_ANSWERS; if (!A) return; A.common.forEach((g) => g.items.forEach((it) => add(it[0]))); Object.values(A.sections).forEach((l) => l.forEach((it) => add(it[0]))); });
from('point board numbers', () => { const m = read('js/point-listen.js').match(/const NUM = \[([^\]]*)\]/); if (m) m[1].split(',').forEach((w) => add(w.replace(/['\s]/g, ''))); });
from('case simulations', () => (ctx.PSYCH_CASES || []).forEach((c) => c.steps.forEach((s) => { add(s.line[0]); s.choices.forEach((x) => add(x.tl)); })));
from('interpretation drill', () => (ctx.PSYCH_INTERP || []).forEach((x) => add(x[0])));
from('practice cases', () => {
  (ctx.PSYCH_DISCHARGE_CASES || []).forEach((c) => Object.values(c.fields).forEach((f) => Object.values(f.ans || {}).forEach((a) => add(a[0]))));
  (ctx.PSYCH_MSE_CASES || []).forEach((c) => { if (c.cc) add(c.cc.ans[0]); Object.values(c.domains).forEach((d) => Object.values(d.ans || {}).forEach((a) => add(a[0]))); });
  // The default answer of a simulated patient is a constant in each practice module.
  ['js/mse-practice.js', 'js/discharge-practice.js'].forEach((f) => { const m = read(f).match(/DEFAULT_ANS = \['([^']+)'/); if (m) add(m[1]); });
});
from('MSE sheet', () => (ctx.PSYCH_MSE_SHEET ? ctx.PSYCH_MSE_SHEET.sections : []).forEach((s) => (s.blocks || []).forEach((b) => b.items.forEach((it) => add(it.tl)))));
from('substance use screen', () => {
  // Lines are templates ({s} substance, {sa}, {w} withdrawal symptoms, {u} unit) filled at run time: record
  // every line as it is spoken for every substance.
  const SUD = ctx.PSYCH_SUD; if (!SUD) return;
  const lines = (o, out, seen) => {
    if (!o || typeof o !== 'object' || seen.has(o)) return out;
    seen.add(o);
    if (!Array.isArray(o) && typeof o.tl === 'string') out.push(o);
    Object.values(o).forEach((v) => lines(v, out, seen));
    return out;
  };
  const all = lines(SUD, [], new Set());
  SUD.substances.forEach((sub) => all.forEach((p) => ['tl', 'c'].forEach((k) => { if (typeof p[k] === 'string' && !p[k].startsWith('(')) add(SUD.fill(p[k], sub)); })));
});
from('withdrawal practice cases', () => ((ctx.PSYCH_WD || {}).CASES || []).forEach((c) => { if (c.tl) add(c.tl.replace(/^[^"「]*["「]/, '').replace(/["」][^"」]*$/, '')); }));
from('settings test line', () => { const L = ctx.LANG || {}; add(L.testLine); add(L.yes); add(L.no); });

// Safety net for the clinical tools and anything added later: every Japanese field of every psychiatry export.
from('tools and other psychiatry lines', () => {
  const KEYS = new Set(['tl', 'f', 'c', 'say']);
  const seen = new Set();
  const sweep = (o) => {
    if (!o || typeof o !== 'object' || seen.has(o)) return;
    seen.add(o);
    if (Array.isArray(o)) { o.forEach(sweep); return; }
    Object.entries(o).forEach(([k, v]) => {
      if (typeof v === 'string') { if (KEYS.has(k) && !v.startsWith('(')) add(v); }
      else if (Array.isArray(v) && KEYS.has(k)) v.forEach((x) => { if (typeof x === 'string' && !/^[\w-]+:\d+$/.test(x)) add(x); });
      else sweep(v);
    });
  };
  Object.keys(ctx).filter((k) => /^(PSYCH_|SHEA_)/.test(k)).forEach((k) => sweep(ctx[k]));
});

// Lines the app speaks that are not in any data file, one per line (# for comments), in the app's notation.
from('extra texts', () => {
  const extra = path.join(__dirname, 'extra-texts');
  if (fs.existsSync(extra)) fs.readdirSync(extra).filter((f) => f.endsWith('.txt')).forEach((f) => fs.readFileSync(path.join(extra, f), 'utf8').split('\n').forEach((l) => { if (!l.startsWith('#')) add(l); }));
});

/* ---------- Write ---------- */
const list = [];
let twoReadings = 0;
byText.forEach((readings, text) => {
  const sorted = [...readings.entries()].sort((a, b) => b[1].n - a[1].n || a[0].localeCompare(b[0]));
  list.push({ key: AudioKey(text), text, ja: sorted[0][1].ja });
  sorted.slice(1).forEach(([kana, v]) => { twoReadings++; list.push({ key: AudioKey(text + '|' + kana), text, ja: v.ja }); });
});
list.sort((a, b) => a.key.localeCompare(b.key));
const keys = new Set(list.map((x) => x.key));
if (keys.size !== list.length) throw new Error('two texts share one audio key');
fs.writeFileSync(path.join(__dirname, 'texts.json'), JSON.stringify(list, null, 0).replace(/\},\{/g, '},\n{') + '\n');
if (!process.argv.includes('--quiet')) Object.entries(stats).forEach(([k, n]) => console.log(String(n).padStart(6), k));
const chars = list.reduce((n, x) => n + x.text.length, 0);
console.log('Collected', list.length, 'texts (' + twoReadings + ' second readings),', chars, 'characters');
