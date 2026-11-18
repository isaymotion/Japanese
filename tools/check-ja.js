#!/usr/bin/env node
/* Checks the Japanese in the data files against the notation in js/ja.js.
   Usage: node tools/check-ja.js [file ...]      (default: every js/data/*.js)
   ERRORS (must fix): a kanji with no reading, a reading that is not hiragana, unbalanced 《 》, a file that does not load.
   WARNINGS (look at each): long unspaced Japanese, は / へ / を glued to a word (romaji would read ha / he / wo). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const rootDir = path.join(__dirname, '..');
const ctx = { console }; ctx.window = ctx; ctx.globalThis = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(rootDir, 'js/ja.js'), 'utf8'), ctx);
const JA = ctx.JA;
const files = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(path.join(rootDir, 'js/data')).filter((f) => f.endsWith('.js')).map((f) => 'js/data/' + f);
const KANJI = new RegExp('[' + JA.KANJI + ']');
const OK_WA = new Set(['はは', 'では', 'には', 'とは', 'のは', 'へは', 'からは', 'までは', 'よりは', 'だけは', 'こんにちは', 'こんばんは', 'それでは', 'または', 'あるいは', 'もしくは', 'じつは', 'ときは']);
let errors = 0, warns = 0;
const strip = (t) => t.replace(/^[　-〿！-｠]+|[　-〿！-｠]+$/g, '');
function check(str, where) {
  if (!JA.hasJa(str)) return;
  const err = (m) => { errors++; console.log('ERROR ' + where + ': ' + m + '\n      ' + str.slice(0, 160)); };
  const warn = (m) => { warns++; console.log('warn  ' + where + ': ' + m + '\n      ' + str.slice(0, 160)); };
  if ((str.match(/《/g) || []).length !== (str.match(/》/g) || []).length) err('unbalanced 《 》');
  const re = new RegExp(JA.RUBY_SRC, 'g'); let m;
  while ((m = re.exec(str))) {
    if (!m[3]) err('empty reading for ' + (m[1] || m[2]));
    else if (!/^[ぁ-ゖー]+$/.test(m[3])) err('reading is not hiragana: ' + m[0]);
  }
  const noRuby = str.replace(new RegExp(JA.RUBY_SRC, 'g'), '');
  const k = noRuby.match(KANJI);
  if (k) err('kanji without a reading: ' + k[0] + ' (near "' + noRuby.slice(Math.max(0, k.index - 6), k.index + 6) + '")');
  if (/[《》]/.test(noRuby)) err('stray 《 or 》 (a reading must follow kanji directly, or use ｜ to mark the base)');
  if (/<[^>]*[《》][^>]*>/.test(str)) err('furigana inside an HTML tag');
  const runs = str.match(new RegExp(JA.RUN_SRC, 'g')) || [];
  runs.forEach((run) => run.split(/ +/).forEach((tok) => {
    const kn = strip(JA.kana(tok));
    if (kn.length > 14) warn('long word without spaces (' + kn.length + ' kana): ' + tok);
    if (kn.length > 1 && /は$/.test(kn) && !OK_WA.has(kn)) warn('は attached to a word, romaji will say "ha": ' + tok);
    if (kn.length > 1 && /を/.test(kn)) warn('を attached to a word: ' + tok);
  }));
}
function walk(o, where, seen) {
  if (typeof o === 'string') return check(o, where);
  if (!o || typeof o !== 'object' || seen.has(o)) return;
  seen.add(o);
  if (Array.isArray(o)) o.forEach((x, i) => walk(x, where + '[' + i + ']', seen));
  else Object.keys(o).forEach((k) => walk(o[k], where + '.' + k, seen));
}
// Dictionary columns 3 and 4 (js/core.js: POS and App.CATS)
const DICT_POS = /^(n|v1|v5|vs|vi|ai|an|adv|pron|part|conj|interj|num|ctr|q|pre|suf|phr)$/;
const DICT_CAT = /^(basics|grammar|pronouns|questions|numbers|counters|time|people|family|body|food|home|money|places|travel|nature|adjectives|verbs|adverbs|emotions|health|mind|risk|substance|meds|hospital|clinical|mimetic|idioms|society|animals|things|clothes)$/;
// Kanji files: 字 | meanings | on | kun | strokes | group | words | note   (tools/AUTHORING.md)
const kanjiSeen = new Map();
function checkKanji(blocks, f) {
  const base = path.basename(f);
  blocks.filter((b) => !b._checked).forEach((b) => {
    b._checked = true;
    if (!/^(N5|N4|N3|N2|N1|C)$/.test(b.level || '')) { errors++; console.log('ERROR ' + f + ': kanji block level must be N5, N4, N3, N2, N1 or C'); }
    String(b.text || '').split('\n').forEach((line) => {
      line = line.trim(); if (!line || line.startsWith('#')) return;
      const c = line.split('|').map((x) => x.trim()), where = f + ' ' + (c[0] || '?');
      const bad = (m) => { errors++; console.log('ERROR ' + where + ': ' + m + '\n      ' + line.slice(0, 160)); };
      if (c.length < 7 || c.length > 8) return bad('a kanji line has 7 or 8 fields, found ' + c.length);
      const [k, mean, on, kun, strokes, group, words, note] = c;
      if ([...k].length !== 1 || !KANJI.test(k)) return bad('field 1 must be a single kanji');
      if (kanjiSeen.has(k)) bad('kanji already listed in ' + kanjiSeen.get(k)); else kanjiSeen.set(k, base);
      if (!mean || /[《》]/.test(mean) || JA.hasJa(mean)) bad('meanings must be plain English');
      if (on !== '-' && !/^[ァ-ヶー]+(・[ァ-ヶー]+)*$/.test(on)) bad('on readings must be katakana separated by ・ (or -)');
      if (kun !== '-' && !/^[ぁ-ゖー]+(\.[ぁ-ゖー]+)?(, [ぁ-ゖー]+(\.[ぁ-ゖー]+)?)*$/.test(kun)) bad('kun readings must be hiragana, okurigana after a dot, separated by ", " (or -)');
      if (on === '-' && kun === '-') bad('no reading given');
      if (!/^\d{1,2}$/.test(strokes)) bad('stroke count must be a number');
      if (!group) bad('group missing');
      const ws = (words || '').split(';').map((x) => x.trim()).filter(Boolean);
      if (ws.length < 2 || ws.length > 4) bad('give two to four example words');
      ws.forEach((w) => {
        const at = w.indexOf('=');
        if (at < 1 || !w.slice(at + 1).trim()) return bad('word needs the form word=gloss: ' + w);
        const ja = w.slice(0, at).trim(), gl = w.slice(at + 1);
        if (!JA.plain(ja).includes(k)) bad('example word does not contain the kanji: ' + ja);
        if (JA.hasJa(gl) || gl.includes('=')) bad('gloss must be plain English: ' + w);
        check(ja, where + ' word');
      });
      if (note) check(note, where + ' note');
    });
  });
}
// 0.23.0: globals that several files extend (concat or Object.assign, js/data/lessons-*.js, lesson-extra-*.js,
// grammar-cloze-*.js, grammar-transform-*.js, word-pairs-*.js). Each entry is checked once, under the file that added it,
// however many files load after it (concat makes a new array, so "new global" alone would miss the later files).
// 0.24.0: also PICTURE_SETS (picture-sets-*.js), DICT_EX (examples-*.js) and TOPIC_SETS (topic-sets-*.js). PICTURE_BODYMAP, SIGNS and
// SIGN_PANELS are one file each (new globals). pictures/art-*.js hold no Japanese and are never read here.
// DICT_RAW: each dictionary block is checked once, under the file that pushed it (before 0.24.0 every dictionary file
// re-checked all earlier blocks, so the same few warnings were counted once per dictionary file).
// 0.25.0: also GRAMMAR_ERRORS (grammar-errors-*.js) and LISTEN_REPLY (listen-reply-*.js), whose entries also get the shape
// checks below (SHAPE), under the file that added them.
const SHARED = new Set(['LESSONS', 'LESSON_EXTRA', 'GRAMMAR_CLOZE', 'GRAMMAR_TRANSFORM', 'WORD_PAIRS', 'PICTURE_SETS', 'DICT_EX', 'TOPIC_SETS', 'GRAMMAR_ERRORS', 'LISTEN_REPLY']);
// Lesson ids for GRAMMAR_ERRORS `l`: from window.LESSONS when loaded, else read once from js/data/lessons-*.js in a side context.
let lessonIds = null;
const lessonSet = () => {
  if (lessonIds) return lessonIds;
  let L = ctx.LESSONS;
  if (!Array.isArray(L) || !L.length) {
    const side = { console: { log() {}, warn() {}, error() {} } }; side.window = side; side.globalThis = side; vm.createContext(side);
    fs.readdirSync(path.join(rootDir, 'js/data')).filter((x) => /^lessons-.*\.js$/.test(x)).sort((a, b) => a.localeCompare(b, 'en', { numeric: true })).forEach((x) => { try { vm.runInContext(fs.readFileSync(path.join(rootDir, 'js/data', x), 'utf8'), side); } catch (e) { /* skip */ } });
    L = side.LESSONS || [];
  }
  lessonIds = new Set(L.map((l) => l && l.id));
  return lessonIds;
};
const noRuby = (t) => String(t || '').replace(new RegExp(JA.RUBY_SRC, 'g'), (m, a, b) => (a || b || '').replace(/｜/g, '')).replace(/｜/g, '');
const isStr = (x) => typeof x === 'string' && x.trim() !== '';
const LV4 = /^(N5|N4|N3|N2|N1)$/;
const ERR_TYPES = /^(particle|verb-form|adj-form|tense|counter|pair|give-receive|keigo|connector|word-choice)$/;
const SHAPE = {
  GRAMMAR_ERRORS: (x, f) => {
    const id = x && x.id, E = (m) => { errors++; console.log('ERROR ' + f + ' GRAMMAR_ERRORS ' + (id || '?') + ': ' + m); };
    if (!x || typeof x !== 'object') return E('entry is not an object');
    if (!isStr(id)) E('id missing');
    if (!LV4.test(x.lv || '')) E('lv must be N5, N4, N3, N2 or N1');
    if (!ERR_TYPES.test(x.type || '')) E('unknown type "' + x.type + '"');
    if (!isStr(x.bad) || !isStr(x.fix)) return E('bad and fix must be non-empty strings');
    const n = x.bad.trim().split(/ +/).length;
    if (!Number.isInteger(x.i) || x.i < 0 || x.i >= n) E('i = ' + x.i + ' is not a word index of bad (' + n + ' words)');
    if (noRuby(x.bad).replace(/\s+/g, '') === noRuby(x.fix).replace(/\s+/g, '')) E('bad and fix are the same once furigana is removed');
    if (x.l != null && !lessonSet().has(x.l)) E('l = "' + x.l + '" is not a lesson id');
    if (!isStr(x.en)) E('en missing');
    if (!isStr(x.why)) E('why missing');
  },
  LISTEN_REPLY: (x, f) => {
    const id = x && x.id, E = (m) => { errors++; console.log('ERROR ' + f + ' LISTEN_REPLY ' + (id || '?') + ': ' + m); };
    if (!x || typeof x !== 'object') return E('entry is not an object');
    if (!isStr(id)) E('id missing');
    if (!LV4.test(x.lv || '')) E('lv must be N5, N4, N3, N2 or N1');
    if (typeof x.clin !== 'boolean') E('clin must be true or false');
    if (!isStr(x.say)) E('say missing');
    if (!isStr(x.en)) E('en missing');
    if (!Array.isArray(x.opts) || x.opts.length !== 4) return E('opts must have exactly 4 options');
    x.opts.forEach((o, k) => { if (!o || !isStr(o.ja) || !isStr(o.en)) E('option ' + k + ' needs ja and en'); });
    if (!Number.isInteger(x.a) || x.a < 0 || x.a > 3) E('a must be 0, 1, 2 or 3');
    const plain = x.opts.map((o) => noRuby(o && o.ja).replace(/\s+/g, ''));
    if (new Set(plain).size !== plain.length) E('two options are the same once furigana is removed');
  }
};
let dictDone = 0;
const sharedSeen = new WeakSet();
function walkShared(n, v, f) {
  if (!v || typeof v !== 'object') return;
  Object.keys(v).forEach((k) => {
    const x = v[k];
    if (x && typeof x === 'object') { if (sharedSeen.has(x)) return; sharedSeen.add(x); }
    if (SHAPE[n] && Array.isArray(v)) SHAPE[n](x, f);
    walk(x, f + ':' + n + (Array.isArray(v) ? '[' + k + ']' : '.' + k), new Set());
  });
}
files.forEach((f) => {
  const before = new Set(Object.keys(ctx));
  try { vm.runInContext(fs.readFileSync(path.join(rootDir, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { errors++; console.log('ERROR ' + f + ': does not load: ' + e.message); return; }
  const names = Object.keys(ctx).filter((k) => !before.has(k) || (k === 'DICT_RAW' && /dict-/.test(f)) || (k === 'PSYCH_SECTIONS' && /psych-phrases/.test(f)) || SHARED.has(k));
  names.forEach((n) => {
    const v = ctx[n];
    if (SHARED.has(n)) return walkShared(n, v, f);
    if (n === 'DICT_RAW') v.slice(dictDone, (dictDone = v.length)).join('\n').split('\n').forEach((line, i) => { line = line.trim(); if (!line || line.startsWith('#')) return; const c = line.split('|'); if (c.length < 4) { errors++; console.log('ERROR ' + f + ' dictionary line has fewer than 4 columns: ' + line); } check(c[0], f + ' dict'); { const t = c.map((x) => x.trim()); if (!DICT_POS.test(t[2] || '')) { errors++; console.log('ERROR ' + f + ' dict: unknown part of speech "' + t[2] + '": ' + line); } if (!DICT_CAT.test(t[3] || '')) { errors++; console.log('ERROR ' + f + ' dict: unknown category "' + t[3] + '": ' + line); } if (t[4] && !/^(N5|N4|N3|N2|N1|C)$/.test(t[4])) { errors++; console.log('ERROR ' + f + ' dict: level must be N5, N4, N3, N2, N1 or C: ' + line); } if (/[《》]/.test(t[1] || '') || !(t[1] || '').trim()) { errors++; console.log('ERROR ' + f + ' dict: English column missing or has readings in it: ' + line); } } if (JA.hasJa(c[1] || '')) { /* Japanese in the English column is allowed in notes only */ } check(c.slice(5).join('|'), f + ' dict note'); });
    else if (n === 'KANJI_RAW') checkKanji(v, f);
    else walk(v, f + ':' + n, new Set());
  });
});
console.log('\n' + files.length + ' file(s): ' + errors + ' error(s), ' + warns + ' warning(s).');
process.exit(errors ? 1 : 0);
