#!/usr/bin/env node
/* Lists dictionary words that still have no example sentence (0.17.0 recipe), split into word-list files for writers.
   usage: node write/excand.js <repo> <outdir> <level N5|N4|N3|C> [per-file, default 200]
   Writes <outdir>/ex-words-<level>-<n>.txt in the format W-examples.md expects (key, then [pos, category, level, note]).
   Skips grammar/number/counter/pronoun/question categories, phrases and particles, and the risk category. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const [repo, out, lv, per = 200] = process.argv.slice(2);
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
const dd = path.join(repo, 'js/data');
fs.readdirSync(dd).filter((f) => /^(dict-|examples-)/.test(f)).sort().forEach((f) => vm.runInContext(fs.readFileSync(path.join(dd, f), 'utf8'), ctx));
const have = new Set((ctx.DICT_EX || []).map((e) => e[0])), seen = new Set(), rows = [];
(ctx.DICT_RAW || []).forEach((b) => String(b).split('\n').forEach((l) => { l = l.trim(); if (!l || l[0] === '#') return;
  const c = l.split('|').map((x) => x.trim()); if (!c[1]) return; const k = c[0] + '|' + c[1]; if (seen.has(k)) return; seen.add(k);
  if (c[4] !== lv || have.has(k)) return;
  if (!['n', 'v1', 'v5', 'vs', 'vi', 'ai', 'an', 'adv'].includes(c[2])) return;
  if (['grammar', 'numbers', 'counters', 'pronouns', 'questions', 'risk'].includes(c[3])) return;
  rows.push(k + '  [' + c[2] + ', ' + c[3] + ', ' + c[4] + (c[5] ? ', note: ' + c[5] : '') + ']'); }));
fs.mkdirSync(out, { recursive: true });
for (let i = 0; i * per < rows.length; i++) fs.writeFileSync(path.join(out, 'ex-words-' + lv + '-' + (i + 1) + '.txt'), rows.slice(i * per, (i + 1) * per).join('\n') + '\n');
console.log(lv + ': ' + rows.length + ' words without an example, ' + Math.ceil(rows.length / per) + ' file(s) in ' + out);
