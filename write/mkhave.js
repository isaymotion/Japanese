global.window=global;const fs=require('fs');const R='/home/claude/japanese/js/data/';
for(const f of fs.readdirSync(R).filter(f=>/^dict-/.test(f)))require(R+f);
const plain=s=>s.replace(/《[^》]*》/g,'').replace(/[｜\s]/g,'');const out=[];
for(const b of DICT_RAW)for(const l of b.split('\n').map(x=>x.trim()).filter(x=>x&&x[0]!=='#')){const c=l.split('|').map(s=>s.trim());out.push(plain(c[0])+'\t'+c[1]+' ['+c[2]+' '+c[4]+']');}
fs.writeFileSync('/home/claude/work/have.txt',out.join('\n')+'\n');console.log(out.length);
