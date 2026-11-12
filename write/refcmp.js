// compare the English of every 'sid:i' ref in a Hablemos file against the Japanese app's phrase with the same ref
const fs=require('fs'),vm=require('vm'),path=require('path');
function load(root){const sb={window:{}};sb.window.window=sb.window;vm.createContext(sb);const pre='var LANG={name:"X",sectionOrder:[]};var PSYCH_SECTIONS,P;';
 for(const f of fs.readdirSync(path.join(root,'js/data')).filter(f=>/^psych-phrases/.test(f)).sort())try{vm.runInContext(fs.readFileSync(path.join(root,'js/data',f),'utf8'),sb)}catch(e){console.log('load',f,e.message)}
 return sb.window.PSYCH_SECTIONS||sb.PSYCH_SECTIONS;}
const H=load('hablemos'),J=load('japanese');
const src=fs.readFileSync(process.argv[2],'utf8');const refs=[...new Set(src.match(/'[a-z0-9-]+:\d+'/g).map(s=>s.slice(1,-1)))];
let bad=0;for(const r of refs){const [s,i]=r.split(':');const h=(H.find(x=>x.id===s)||{phrases:[]}).phrases[+i],j=(J.find(x=>x.id===s)||{phrases:[]}).phrases[+i];
 if(!h||!j||h.en!==j.en){bad++;console.log(r,'|H:',h&&h.en.slice(0,60),'|J:',j&&j.en.slice(0,60));}}
console.log(refs.length,'refs,',bad,'differ');
