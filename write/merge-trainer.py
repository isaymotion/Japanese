"""usage: python3 merge-trainer.py <repo> <label> <fragment.js>...   appends NEW_VERBS / NEW_ADJ entries (one per line) to the END of
JA_VERBS / JA_ADJ in js/data/verbs.js (positions are ids: never insert or reorder). Run chk-trainer.js on the fragments first."""
import sys,re
repo,label,frags=sys.argv[1],sys.argv[2],sys.argv[3:]
verbs,adjs=[],[]
for f in frags:
    cur=None
    for line in open(f,encoding='utf8'):
        if 'window.NEW_VERBS' in line: cur=verbs; continue
        if 'window.NEW_ADJ' in line: cur=adjs; continue
        s=line.strip()
        if cur is not None and s.startswith('{'): cur.append('  '+s.rstrip(',')+',')
        elif s.startswith('];'): cur=None
p=repo+'/js/data/verbs.js'; src=open(p,encoding='utf8').read()
a,b=src.split('window.JA_ADJ = [')
def add(block,items,what):
    if not items: return block
    i=block.rstrip().rfind('];'); head=block[:i].rstrip()
    if not head.endswith(','): head+=','
    items[-1]=items[-1].rstrip(',')
    return head+'\n  // ---- '+label+': '+what+' ----\n'+'\n'.join(items)+'\n];\n'
a=add(a,verbs,'verbs')+'\n'; b=add(b,adjs,'adjectives')
open(p,'w',encoding='utf8').write(a+'window.JA_ADJ = ['+b)
print('added',len(verbs),'verbs,',len(adjs),'adjectives')
