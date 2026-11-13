// usage: node chk-dis.js <repo> <case file>   structure check of discharge practice cases against PSYCH_DISCHARGE
const path=require('path');const repo=path.resolve(process.argv[2]);global.window=global;
for(const f of require('fs').readdirSync(repo+'/js/data').filter(f=>/^psych-phrases-/.test(f)))try{require(repo+'/js/data/'+f)}catch(e){}
global.PSYCH_SECTIONS=window.PSYCH_SECTIONS||[];window.PSYCH_FLOW_EXTRA=[];
require(repo+'/js/data/psych-discharge.js');
window.PSYCH_DISCHARGE_CASES=[];require(path.resolve(process.argv[3]));
const F=PSYCH_DISCHARGE.fields;let err=0;const E=m=>{err++;console.log('ERROR',m)};
for(const C of PSYCH_DISCHARGE_CASES){
  for(const k of ['id','title','level','dx','decision','setting','chart','fields'])if(C[k]==null)E(C.id+': missing '+k);
  for(const f of F){if(f.kind==='sign')continue;const x=(C.fields||{})[f.id];if(!x){E(C.id+': no field '+f.id);continue}
    for(const k of ['need','doc','why'].concat(f.kind==='observe'?['obs']:[]))if(x[k]==null)E(C.id+'.'+f.id+': missing '+k);
    for(const i of Object.keys(x.ans||{})){if(+i>=(f.ask||[]).length)E(C.id+'.'+f.id+': ans index '+i+' but only '+(f.ask||[]).length+' asks');const a=x.ans[i];if(!(Array.isArray(a)&&a.length>=2))E(C.id+'.'+f.id+': ans '+i+' shape')}
    for(const i of x.key||[])if(+i>=(f.ask||[]).length)E(C.id+'.'+f.id+': key '+i+' out of range');
    if(f.picks){const P=new Set(f.picks);const flat=[].concat(...(x.need||[]).map(n=>Array.isArray(n)?n:[n]));
      for(const p of flat.concat(x.ok||[],Object.keys(x.wrong||{})))if(!P.has(p))E(C.id+'.'+f.id+': not a pick: '+p);
      for(const p of flat)if((x.ok||[]).includes(p)||(x.wrong||{})[p])E(C.id+'.'+f.id+': pick in two lists: '+p);}
    if(!(x.need||[]).length)E(C.id+'.'+f.id+': empty need');
  }
  for(const k of Object.keys(C.fields||{}))if(!F.find(f=>f.id===k))E(C.id+': unknown field '+k);
  console.log(C.id,'fields',Object.keys(C.fields||{}).length,'of',F.filter(f=>f.kind!=='sign').length);
}
console.log(err+' error(s)');
