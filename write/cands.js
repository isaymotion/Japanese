// usage: node cands.js <repo> <outdir>   lists dictionary verbs/adjectives not yet in the trainer
const path=require('path'),fs=require('fs');const repo=path.resolve(process.argv[2]),out=process.argv[3];
global.window=global;require(repo+'/js/data/verbs.js');
const flat=s=>s.replace(/《[^》]*》/g,'').replace(/[｜\s]/g,'');
const have=new Set(JA_VERBS.concat(JA_ADJ).map(x=>flat(x.d)));
const rows=[];
for(const f of fs.readdirSync(repo+'/js/data').filter(f=>/^dict-/.test(f))){
  const src=fs.readFileSync(repo+'/js/data/'+f,'utf8');
  for(const line of src.split('\n')){const p=line.split(' | ');if(p.length<5)continue;
    const ja=p[0].trim().replace(/^[`'"\s]+/,'');const pos=p[2].trim();
    if(!/^(v1|v5|vs|ai|an)$/.test(pos))continue;
    let d=ja; if(pos==='vs'&&!/する$/.test(flat(d)))d=d+'する';
    if(have.has(flat(d))||have.has(flat(ja)))continue;
    rows.push({d,en:p[1].trim(),pos,cat:p[3].trim(),lv:p[4].trim(),f});}
}
const seen=new Set();const u=rows.filter(r=>!seen.has(flat(r.d))&&seen.add(flat(r.d)));
const c={};u.forEach(r=>{const k=(/^v/.test(r.pos)?'verb':'adj')+' '+r.lv;c[k]=(c[k]||0)+1});console.log(c);
const cats={};u.forEach(r=>cats[r.cat]=(cats[r.cat]||0)+1);console.log(cats);
const w=(n,fn)=>fs.writeFileSync(out+'/'+n,u.filter(fn).map(r=>[r.d,r.en,r.pos,r.cat,r.lv].join(' | ')).join('\n')+'\n');
w('cand-verbs.txt',r=>/^v/.test(r.pos));w('cand-adj.txt',r=>/^a/.test(r.pos));
