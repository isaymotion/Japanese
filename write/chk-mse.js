// usage: node chk-mse.js <repo> <case file>   structure check of admission MSE practice cases against PSYCH_ADMIT_MSE
const path=require('path');const repo=path.resolve(process.argv[2]);global.window=global;
require(repo+'/js/data/psych-admit-mse.js');
for(const f of require('fs').readdirSync(repo+'/js/data').filter(f=>/^psych-phrases-/.test(f)))try{require(repo+'/js/data/'+f)}catch(e){}
window.PSYCH_MSE_CASES=[];require(path.resolve(process.argv[3]));
const D=PSYCH_ADMIT_MSE.domains;let err=0;const E=m=>{err++;console.log('ERROR',m)};
for(const C of PSYCH_MSE_CASES){
  for(const k of ['id','title','level','dx','setting','chart','cc','domains'])if(C[k]==null)E(C.id+': missing '+k);
  if(C.form!=='')E(C.id+': form must be ""');
  const cc=C.cc||{};if(!/^[a-z-]+:\d+$/.test(cc.ask||''))E(C.id+': cc.ask');if(!(cc.ans&&cc.ans.length===3))E(C.id+': cc.ans needs [ja,en,who]');
  if(!(cc.opts&&cc.opts.length===3&&cc.opts.filter(o=>o[1]===true).length===1))E(C.id+': cc.opts needs 3 with exactly one true');
  for(const d of D){const x=(C.domains||{})[d.id];if(!x){E(C.id+': no domain '+d.id);continue}
    for(const k of ['ans','need','doc','why'].concat(d.kind==='observe'?['obs']:[]))if(x[k]==null)E(C.id+'.'+d.id+': missing '+k);
    for(const i of Object.keys(x.ans||{})){if(+i>=d.ask.length)E(C.id+'.'+d.id+': ans index '+i+' but only '+d.ask.length+' asks');const a=x.ans[i];if(!(Array.isArray(a)&&a.length>=2))E(C.id+'.'+d.id+': ans '+i+' shape')}
    if(d.kind==='ask'&&Object.keys(x.ans||{}).length<d.ask.length)console.log('note',C.id+'.'+d.id+': '+Object.keys(x.ans||{}).length+' of '+d.ask.length+' asks answered');
    const P=new Set(d.picks);for(const p of (x.need||[]).concat(x.ok||[],Object.keys(x.wrong||{})))if(!P.has(p))E(C.id+'.'+d.id+': not a pick: '+p);
    for(const p of x.need||[])if((x.ok||[]).includes(p)||(x.wrong||{})[p])E(C.id+'.'+d.id+': pick in two lists: '+p);
    if(!(x.need||[]).length)E(C.id+'.'+d.id+': empty need');
  }
  for(const k of Object.keys(C.domains||{}))if(!D.find(d=>d.id===k))E(C.id+': unknown domain '+k);
  console.log(C.id,'domains',Object.keys(C.domains||{}).length);
}
console.log(err+' error(s)');
