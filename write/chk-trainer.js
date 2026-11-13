// usage: node chk-trainer.js <repo> <fragment.js> [more fragments]   (fragment: window.NEW_VERBS = [...] and/or window.NEW_ADJ = [...])
// Checks shape, duplicates, group against the dictionary, that each example uses the word, then prints every form to <fragment>.forms.txt
const path=require('path'),fs=require('fs'),cp=require('child_process');
const repo=path.resolve(process.argv[2]);global.window=global;
require(repo+'/js/ja.js');require(repo+'/js/conjugate.js');require(repo+'/js/data/verbs.js');
const flat=s=>s.replace(/《[^》]*》/g,'').replace(/[｜\s]/g,'');
const dict={};
for(const f of fs.readdirSync(repo+'/js/data').filter(f=>/^dict-/.test(f)))for(const line of fs.readFileSync(repo+'/js/data/'+f,'utf8').split('\n')){
  const p=line.split(' | ');if(p.length<5)continue;const pos=p[2].trim();if(!/^(v1|v5|vs|vi|ai|an)$/.test(pos))continue;
  const ja=p[0].trim().replace(/^[`'"\s]+/,'');let d=ja;if(pos==='vs'&&!/する$/.test(flat(d)))d+='する';dict[flat(d)]={d,pos,lv:p[4].trim()};}
const have=new Map();JA_VERBS.concat(JA_ADJ).forEach(x=>have.set(flat(x.d),'trainer'));
let errs=0,warns=0;const E=(m)=>{errs++;console.log('ERROR '+m)},W=(m)=>{warns++;console.log('warn  '+m)};
const G={v1:'ru',v5:'u',vs:'suru'},T={ai:'i',an:'na'};
for(const file of process.argv.slice(3)){
  delete global.NEW_VERBS;delete global.NEW_ADJ;require(path.resolve(file));
  const out=[];
  const each=(list,kind)=>(list||[]).forEach((it,i)=>{
    const id=path.basename(file)+' '+kind+' #'+(i+1)+' '+(it.d||'?');
    if(!it.d||!it.en||!it.lv||!Array.isArray(it.ex)){E(id+': missing d/en/lv/ex');return;}
    const fd=flat(it.d);
    if(have.has(fd))E(id+': already in '+have.get(fd));have.set(fd,path.basename(file));
    if(!/^(N5|N4|N3|C)$/.test(it.lv))E(id+': lv must be N5, N4, N3 or C');
    if(it.lv==='C'&&!it.clin)E(id+': lv C needs clin: true');
    if('clin' in it&&it.clin!==true)E(id+': clin must be true or absent');
    const dd=dict[fd];
    if(!dd)W(id+': not in the dictionary');
    else{ if(dd.d!==it.d)E(id+': dictionary writes it '+dd.d);
      if(kind==='v'&&G[dd.pos]!==it.g)E(id+': dictionary pos '+dd.pos+' but g '+it.g);
      if(kind==='a'&&T[dd.pos]!==it.t)E(id+': dictionary pos '+dd.pos+' but t '+it.t);
      if(dd.lv!==it.lv)W(id+': dictionary level '+dd.lv+', here '+it.lv);}
    const n=kind==='v'?2:1;if(it.ex.length!==n)E(id+': needs exactly '+n+' example(s)');
    it.ex.forEach((e)=>{if(!Array.isArray(e)||e.length!==2||!e[0]||!e[1])E(id+': example must be [japanese, english]');});
    let f;
    if(kind==='v'){ if(!/^(ru|u|suru|kuru)$/.test(it.g)){E(id+': bad g');return;} f=JConj.verb(it.d,it.g);if(!f){E(id+': cannot conjugate');return;}
      if(it.g==='suru'&&flat(it.d).length<=3)E(id+': one-kanji する verbs conjugate irregularly; not supported');
      if(/[問乞請]う$/.test(fd))E(id+': irregular て-form; not supported');
      if(it.g==='ru'&&!/[いきぎしじちにひびみりえけげせぜてでねへべめれ]る$/.test(JA.kana?flat(JA.kana(it.d)):fd))E(id+': る-verb must end in an い- or え-row sound + る');
    }else{ if(!/^(i|na)$/.test(it.t)){E(id+': bad t');return;} f=JConj.adj(it.d,it.t);
      if(it.t==='i'&&!/い$/.test(fd))E(id+': い-adjective must end in い');
      if(it.t==='i'&&/[ぁ-ん]いい$/.test(fd))E(id+': 〜いい compounds are not supported');
      if(it.t==='na'&&/な$/.test(fd))E(id+': な-adjective d is the bare stem, without な'); }
    // each example must contain the word's stem
    const stem=kind==='v'?(it.g==='suru'?fd.replace(/する$/,''):it.g==='kuru'?fd.replace(/くる$|来る$/,''):fd.slice(0,-1)):(it.t==='i'?fd.slice(0,-1):fd);
    it.ex.forEach((e,j)=>{if(e&&e[0]&&!flat(e[0]).includes(stem)&&!(it.g==='kuru'))E(id+': example '+(j+1)+' does not contain the word');});
    out.push(it.d+'  ['+(it.g||it.t)+' '+it.lv+(it.clin?' clin':'')+']  '+it.en+'\n   '+Object.keys(f).map(k=>k+': '+f[k]).join(' | ')+'\n'+it.ex.map(e=>'   ex: '+e[0]+'  = '+e[1]).join('\n'));
  });
  each(global.NEW_VERBS,'v');each(global.NEW_ADJ,'a');
  fs.writeFileSync(file+'.forms.txt',out.join('\n\n')+'\n');
  console.log(path.basename(file)+': '+(global.NEW_VERBS||[]).length+' verbs, '+(global.NEW_ADJ||[]).length+' adjectives; forms in '+file+'.forms.txt');
  const r=cp.spawnSync('node',[repo+'/tools/check-ja.js',path.relative(repo,path.resolve(file))],{encoding:'utf8'});
  console.log('check-ja: '+(r.stdout||'').trim().split('\n').slice(-12).join('\n'));
}
console.log(errs+' error(s), '+warns+' warning(s) from chk-trainer');
