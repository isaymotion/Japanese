import json,sys,re
R='/home/claude/work/new-1.1/reviewed/'
GROUPS=[('w-english','watch','Lessons explained in English','Teachers who explain Japanese in English. A good start while you are still learning the kana.'),
('w-japanese','watch','Taught or spoken in easy Japanese','Slow, clear Japanese made for learners. Watch with Japanese captions when the video has them.'),
('w-jlpt','watch','JLPT grammar, keigo and workplace Japanese','Grammar lessons from N3 to N1, polite language and Japanese for work.'),
('w-news','watch','News','Official news channels of Japanese broadcasters. Short clips; natural speed.'),
('w-life','watch','Everyday Japan: cooking, science, culture','Made for Japanese viewers. Pictures carry much of the meaning, which helps.'),
('w-health','watch','Health and medicine','Official channels of public health bodies. For listening practice in clinical Japanese, not for clinical guidance.'),
('l-learner','listen','Podcasts for learners','Slow or simple Japanese made for learners. Many have transcripts.'),
('l-native','listen','Native podcasts','Made for Japanese listeners: news, science and everyday talk.'),
('l-radio','listen','Radio','Most radio from Japan plays only inside Japan. The first entry here plays anywhere; the others are for when you are in Japan.'),
('r-news','read','Easy news','News rewritten in simple Japanese.'),
('r-readers','read','Graded readers and courses','Free books and courses written for each level.'),
('r-library','read','Magazines and libraries','Articles and books to read once graded readers feel easy.'),
('r-tools','read','Dictionaries and tools','Help while you read.'),
('r-health','read','Health and care Japanese','Public information pages and learning sites. For reading practice, not for clinical guidance.')]
DROP={'The Nihongo Nook','Beppu Kurashi','NHK'}
order=['yt-beginner','yt-intermediate','yt-native','clinical','podcasts','radio','reading']
src=[]
for b in order:
    d=json.load(open(R+b+'.json'))
    for s in d['sources']:
        s['_b']=b; src.append(s)
def drop(s):
    t=s['title']
    return t in DROP or 'Beppu' in t or 'Nihongo Nook' in t or 'ドクターサロン' in t+s.get('ja','') or 'Doctor Salon' in t or (s['_b']=='yt-native' and t.strip().upper().startswith('NHK'))
kept=[s for s in src if not drop(s)]
print('dropped',[s['title'] for s in src if drop(s)],file=sys.stderr)
gid=[g[0] for g in GROUPS]
kept.sort(key=lambda s:(gid.index(s['g']) if s['g'] in gid else 99))
# radio: SBS first
kept.sort(key=lambda s:(gid.index(s['g']), 0 if (s['g']!='l-radio' or not s.get('geo')) else 1))
out=[];seen=set()
for i,s in enumerate(kept,1):
    assert s['g'] in gid,(s['title'],s['g'])
    k=(s['url']); assert k not in seen,k; seen.add(k)
    assert s['url'].startswith('https://'),s['url']
    assert len(s['en'])<=140,(s['title'],len(s['en'])); assert len(s.get('tip',''))<=160,s['title']
    lv=s['lv']; assert len(lv)==2 and all(x in ['Starter','N5','N4','N3','N2','N1','Native'] for x in lv),(s['title'],lv)
    o={'id':'im-%03d'%i,'g':s['g'],'kind':s['kind'],'title':s['title']}
    if s.get('ja'): o['ja']=s['ja']
    o['url']=s['url']
    if s.get('yt') and s['kind']=='youtube':
        assert re.fullmatch(r'UU[\w-]{22}',s['yt']['list']),s['title']; o['yt']={'list':s['yt']['list']}
    o.update(lv=lv,speaks=s.get('speaks','ja'),cc=s.get('cc',''),geo=s.get('geo',''),cost=s.get('cost','free'),en=s['en'])
    if s.get('tip'): o['tip']=s['tip']
    if s.get('clin'): o['clin']=True
    out.append(o)
cap=json.load(open(R+'captions.json'))
caps=[{k:c[k] for k in ('id','title','device','steps','note','link')} for c in cap['captions']]
TIPS=json.load(open('tips.json'))
data={'checked':'2026-11','lang':'ja','summary':cap['summary'],'groups':[{'id':a,'tab':b,'title':c,'note':d} for a,b,c,d in GROUPS],'sources':out,'captions':caps,'tips':TIPS}
js='/* Immersion sources (1.1.0). Shape and rules: write/briefs-1.1/PLAN-1.1.md on dev-tools. ids are permanent: append only.\n   Every link was opened by a researcher and again by an independent reviewer on 20 Nov 2026. Japanese names are DRAFT readings.\n   This file is outside js/data on purpose: it is not recorded and does not start the recording job. */\nwindow.IMMERSION = '+json.dumps(data,ensure_ascii=False,indent=1)+';\n'
open('sources.js','w',encoding='utf-8').write(js)
for o in out: print(o['id'],o['g'],'|',o['title'],'|',o.get('ja',''),'|','-'.join(o['lv']),o['cc'] or '?',o['geo'],o['cost'],'yt' if 'yt' in o else '','\n    ',o['en'],'\n    T:',o.get('tip',''))
