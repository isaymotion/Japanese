// Kanji example words that the dictionary does not list. usage: node kwords.js <repo> > out
const fs=require('fs'),path=require('path'),vm=require('vm');const root=process.argv[2];
const ctx={window:{}};ctx.window.window=ctx.window;vm.createContext(ctx);
const run=f=>vm.runInContext(fs.readFileSync(path.join(root,f),'utf8').replace(/^window\./gm,'window.'),ctx.window.__c||(ctx.window.__c=vm.createContext({window:{},get DICT_RAW(){return this.window.DICT_RAW},get KANJI_RAW(){return this.window.KANJI_RAW}})));
const files=fs.readdirSync(path.join(root,'js/data'));
const plain=s=>s.replace(/《[^》]*》/g,'').replace(/[｜\s]/g,'');
const sb={window:{}};vm.createContext(sb);
for(const f of files.filter(f=>/^(dict|kanji)-/.test(f))) vm.runInContext('var DICT_RAW,KANJI_RAW;'+fs.readFileSync(path.join(root,'js/data',f),'utf8').replace(/\bKANJI_RAW\.push/g,'window.KANJI_RAW.push'),sb);
const have=new Set();(sb.window.DICT_RAW||[]).join('\n').split('\n').forEach(l=>{l=l.trim();if(!l||l[0]==='#')return;have.add(plain(l.split('|')[0]));});
const out=[],seen=new Set();
for(const b of sb.window.KANJI_RAW)for(let l of b.text.split('\n')){l=l.trim();if(!l||l[0]==='#')continue;const c=l.split('|').map(x=>x.trim());
 for(const w of c[6].split(';')){const at=w.indexOf('=');const ja=w.slice(0,at).trim(),en=w.slice(at+1).trim();const p=plain(ja);if(have.has(p)||seen.has(p))continue;seen.add(p);out.push([b.level,c[0],ja,en]);}}
if(process.argv[3]==='count'){const n={};out.forEach(o=>n[o[0]]=(n[o[0]]||0)+1);console.log(have.size,'dict words;',out.length,'missing',JSON.stringify(n));}
else out.forEach(o=>console.log(o.join(' | ')));
