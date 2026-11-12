// Cross-check kanji files against the reference dataset (dev only; reference data is not shipped).
// usage: node xcheck.js <kanji.json> <repo> [file...]
const fs=require('fs'),path=require('path'),vm=require('vm');
const kd=JSON.parse(fs.readFileSync(process.argv[2],'utf8')),root=process.argv[3];
const files=process.argv.slice(4).length?process.argv.slice(4):fs.readdirSync(path.join(root,'js/data')).filter(f=>/^kanji-/.test(f)).map(f=>'js/data/'+f);
const toHira=s=>s.replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60));
const ctx={};ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root,'js/ja.js'),'utf8').replace(/document\./g,'({addEventListener(){},readyState:"x"}).'),ctx);
let n=0,issues=0;
for(const f of files){ctx.KANJI_RAW=[];vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
 for(const b of ctx.KANJI_RAW) for(let line of b.text.split('\n')){line=line.trim();if(!line||line[0]==='#')continue;n++;
  const c=line.split('|').map(x=>x.trim()),k=c[0],r=kd[k];const say=m=>{issues++;console.log(f.replace('js/data/','')+' '+k+': '+m)};
  if(!r){say('not in reference');continue}
  if(+c[4]!==r.strokes)say('strokes '+c[4]+' vs ref '+r.strokes);
  const refOn=new Set((r.readings_on||[]).map(toHira)),refKun=new Set((r.readings_kun||[]).map(x=>x.replace(/[-.]/g,'')));
  const refKunStem=new Set((r.readings_kun||[]).map(x=>x.replace(/-/g,'')));
  if(c[2]!=='-')for(const o of c[2].split('・'))if(!refOn.has(toHira(o)))say('on '+o+' not in ref ['+[...refOn]+']');
  if(c[3]!=='-')for(const q of c[3].split(',').map(x=>x.trim())){if(!refKun.has(q.replace('.','')))say('kun '+q+' not in ref ['+(r.readings_kun||[])+']');else if(!refKunStem.has(q)&&!refKunStem.has(q.replace('.','')))say('kun okurigana split '+q+' vs ref ['+(r.readings_kun||[])+']');}
  // word readings: the kanji's reading inside each word should start with a known reading (loose check, flags irregulars)
  const all=[...refOn,...[...(r.readings_kun||[])].map(x=>x.replace(/-/g,'').split('.')[0])];
  for(const w of c[6].split(';').map(x=>x.trim())){const ja=w.split('=')[0];const re=/([一-鿿々]+)《([^》]*)》/g;let m;
   while((m=re.exec(ja))){if(m[1]===k){const rd=m[2];const ok=all.some(a=>a===rd||voiced(a)===rd||gem(a,rd));if(!ok)say('word '+ja+' reading '+rd+' not a listed reading (irregular?)');}}}
 }}
function voiced(a){const map={か:'が',き:'ぎ',く:'ぐ',け:'げ',こ:'ご',さ:'ざ',し:'じ',す:'ず',せ:'ぜ',そ:'ぞ',た:'だ',ち:'ぢ',つ:'づ',て:'で',と:'ど',は:'ば',ひ:'び',ふ:'ぶ',へ:'べ',ほ:'ぼ'};return (map[a[0]]||a[0])+a.slice(1)}
function gem(a,rd){const p={は:'ぱ',ひ:'ぴ',ふ:'ぷ',へ:'ぺ',ほ:'ぽ'};if((p[a[0]]||'')+a.slice(1)===rd)return true;if(a.length>1&&/[くちつき]$/.test(a)&&a.slice(0,-1)+'っ'===rd)return true;return false}
console.log(n+' kanji, '+issues+' item(s) to look at');
