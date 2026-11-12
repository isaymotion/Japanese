#!/usr/bin/env node
/* Compare the structure of a translated data file with its Spanish source.
   Usage: node <dev-tools>/port/cmp-struct.js <srcFile> <dstFile> <GLOBAL[,GLOBAL…]> [--pick srcId=dstId,…]
   Both files are loaded with the Japanese app's phrase sections present (for "section:index" refs).
   Reports: type / array-length / key differences (key `r` ignored), strings left in Spanish, and strings unchanged
   from the source that contain Spanish letters. Exit 1 on any difference. */
const fs = require('fs'), vm = require('vm'), path = require('path');
const [src, dst, globals, ...rest] = process.argv.slice(2);
const pick = {}; const pi = rest.indexOf('--pick'); if (pi >= 0) rest[pi + 1].split(',').forEach((x) => { const [a, b] = x.split('='); pick[a] = b || a; });
const J = (process.env.JA_REPO || process.cwd()) + '/js/data/';
function load(file) {
  const c = { console }; c.window = c; c.globalThis = c; vm.createContext(c);
  ['psych-phrases-1.js', 'psych-phrases-2.js', 'psych-phrases-3.js', 'psych-phrases-4.js', 'psych-phrases-5.js', 'psych-phrases-6.js'].forEach((f) => vm.runInContext(fs.readFileSync(J + f, 'utf8'), c));
  c.PSYCH_SECTIONS_BASE = c.PSYCH_SECTIONS.length;
  vm.runInContext(fs.readFileSync(file, 'utf8'), c, { filename: file });
  return c;
}
const A = load(src), B = load(dst);
const ES = /[¿¡ñáéíóúÁÉÍÓÚÑü]/;
let n = 0; const out = (m) => { if (n++ < 60) console.log(m); };
function walk(a, b, p) {
  if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b)) return out('TYPE ' + p + ': ' + typeof a + ' vs ' + typeof b);
  if (typeof a === 'string') {
    if (ES.test(b) && !/[぀-ヿ一-鿿]/.test(b)) out('SPANISH LEFT ' + p + ': ' + b.slice(0, 90));
    else if (a === b && ES.test(a)) out('UNCHANGED ' + p + ': ' + b.slice(0, 90));
    return;
  }
  if (!a || typeof a !== 'object') { if (a !== b && typeof a !== 'function') out('VALUE ' + p + ': ' + a + ' vs ' + b); return; }
  if (Array.isArray(a)) { if (a.length !== b.length) out('LENGTH ' + p + ': ' + a.length + ' vs ' + b.length); for (let i = 0; i < Math.min(a.length, b.length); i++) walk(a[i], b[i], p + '[' + i + ']'); return; }
  const ka = Object.keys(a).filter((k) => k !== 'r'), kb = Object.keys(b).filter((k) => k !== 'r');
  ka.filter((k) => !kb.includes(k)).forEach((k) => out('MISSING KEY ' + p + '.' + k));
  kb.filter((k) => !ka.includes(k)).forEach((k) => out('EXTRA KEY ' + p + '.' + k));
  ka.filter((k) => kb.includes(k)).forEach((k) => { if (k === 'id' && Object.keys(pick).length) return; walk(a[k], b[k], p + '.' + k); });
}
globals.split(',').forEach((g) => {
  let a = A[g], b = B[g];
  if (a == null || b == null) return out('GLOBAL ' + g + ' missing in ' + (a == null ? 'source' : 'translation'));
  if (Object.keys(pick).length && Array.isArray(a)) {
    Object.keys(pick).forEach((sid) => { const x = a.find((o) => o.id === sid), y = b.find((o) => o.id === pick[sid]); if (!x || !y) return out('PICK ' + sid + ' → ' + pick[sid] + ': not found'); walk(x, y, g + '<' + pick[sid] + '>'); });
  } else walk(a, b, g);
});
// phrase sections the file appended
const sa = A.PSYCH_SECTIONS.slice(A.PSYCH_SECTIONS_BASE), sb = B.PSYCH_SECTIONS.slice(B.PSYCH_SECTIONS_BASE);
if (!Object.keys(pick).length) { if (sa.length !== sb.length) out('SECTIONS appended: ' + sa.length + ' vs ' + sb.length); sa.forEach((s, i) => { if (sb[i]) { if (s.id !== sb[i].id) out('SECTION id ' + s.id + ' vs ' + sb[i].id); if (s.phrases.length !== sb[i].phrases.length) out('SECTION ' + s.id + ' phrases ' + s.phrases.length + ' vs ' + sb[i].phrases.length); sb[i].phrases.forEach((ph, k) => { ['f', 'c'].forEach((key) => { if (ph[key] && ES.test(ph[key]) && !/[぀-ヿ一-鿿]/.test(ph[key])) out('SPANISH LEFT section ' + s.id + ':' + k + '.' + key); }); }); } }); }
console.log(n ? n + ' difference(s).' : 'Structure matches; no Spanish left.');
process.exit(n ? 1 : 0);
