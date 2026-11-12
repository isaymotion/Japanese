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
files.forEach((f) => {
  const before = new Set(Object.keys(ctx));
  try { vm.runInContext(fs.readFileSync(path.join(rootDir, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { errors++; console.log('ERROR ' + f + ': does not load: ' + e.message); return; }
  const names = Object.keys(ctx).filter((k) => !before.has(k) || (k === 'DICT_RAW' && /dict-/.test(f)) || (k === 'PSYCH_SECTIONS' && /psych-phrases/.test(f)) || (k === 'LESSONS' && /lessons/.test(f)));
  names.forEach((n) => {
    const v = ctx[n];
    if (n === 'DICT_RAW') v.join('\n').split('\n').forEach((line, i) => { line = line.trim(); if (!line || line.startsWith('#')) return; const c = line.split('|'); if (c.length < 4) { errors++; console.log('ERROR ' + f + ' dictionary line has fewer than 4 columns: ' + line); } check(c[0], f + ' dict'); if (JA.hasJa(c[1] || '')) { /* Japanese in the English column is allowed in notes only */ } check(c.slice(5).join('|'), f + ' dict note'); });
    else walk(v, f + ':' + n, new Set());
  });
});
console.log('\n' + files.length + ' file(s): ' + errors + ' error(s), ' + warns + ' warning(s).');
process.exit(errors ? 1 : 0);
