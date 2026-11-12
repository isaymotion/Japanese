// duplicates of one new dictionary file against have.txt (existing), the other new files, and itself
const fs=require('fs'),path=require('path');const f=process.argv[2];
const plain=s=>s.replace(/《[^》]*》/g,'').replace(/[｜\s]/g,'');
const lines=t=>{const m=t.match(/push\(`([\s\S]*?)`\)/);return (m?m[1]:'').split('\n').map(l=>l.trim()).filter(l=>l&&l[0]!=='#')};
const have=new Map(fs.readFileSync('/home/claude/work/have.txt','utf8').split('\n').filter(Boolean).map(l=>l.split('\t')));
const others=new Map();const dir=path.dirname(f);
for(const g of fs.readdirSync(dir).filter(x=>/^dict-/.test(x)&&!/dict-(core|everyday|clinical|more)\.js/.test(x)&&x!==path.basename(f)))lines(fs.readFileSync(path.join(dir,g),'utf8')).forEach(l=>others.set(plain(l.split('|')[0]),g));
const seen=new Set();let n=0,k=0;
for(const l of lines(fs.readFileSync(f,'utf8'))){k++;const c=l.split('|').map(s=>s.trim());const p=plain(c[0]);
 if(have.has(p)){n++;console.log('already in dictionary:',c[0],'=',c[1],'| existing gloss:',have.get(p));}
 else if(others.has(p)){n++;console.log('also in',others.get(p)+':',c[0]);}
 if(seen.has(p)){n++;console.log('repeated in this file:',c[0]);}seen.add(p);}
console.log(k,'lines,',n,'duplicate(s)');
