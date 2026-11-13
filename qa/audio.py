"""Audio pack: (1) with a stubbed manifest the recorded clip is played, by the right file name; (2) coverage:
every Listen button on every page has a clip in tools/texts.json, except the conjugation tables on dictionary
word pages (device voice by design). Expect "play checks 0 failed", "missing 0" and "errors []".
usage (from the site folder, server on :8765): python3 ../devtools/qa/audio.py [-v]"""
import asyncio, json, sys
from playwright.async_api import async_playwright
TEXTS=json.load(open('tools/texts.json',encoding='utf-8'))
KEYS=[t['key'] for t in TEXTS]
MANIFEST=json.dumps({'engine':'edge','voice':'ja-JP-NanamiNeural','rate':'-5%','generated':'2026-11-13','count':len(KEYS),'bytes':150000000,'keys':KEYS})
STUB="""(()=>{window.__played=[];window.__spoken=[];
class A{constructor(src){this.src=src;window.__played.push(src);}play(){setTimeout(()=>this.onended&&this.onended(),5);return Promise.resolve();}pause(){}}
window.Audio=A;window.__device=new Set();
if(window.speechSynthesis){const s=window.speechSynthesis;s.speak=(u)=>{window.__spoken.push(u.text);if(!/^en/.test(u.lang))window.__device.add(u.text);setTimeout(()=>u.onend&&u.onend(),5);};s.cancel=()=>{};}})()"""
async def main():
    verbose='-v' in sys.argv
    async with async_playwright() as p:
        b=await p.chromium.launch()
        ctx=await b.new_context(viewport={'width':390,'height':844})
        await ctx.add_init_script(STUB)
        pg=await ctx.new_page()
        errs=[]
        pg.on('console', lambda m: errs.append(m.text) if m.type=='error' and '403' not in m.text else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.route('**/audio/manifest.json', lambda r: r.fulfill(status=200,content_type='application/json',body=MANIFEST))
        await pg.route('**/audio/*.mp3', lambda r: r.fulfill(status=200,content_type='audio/mpeg',body=b'\xff\xfb\x90\x00'+b'\x00'*600))
        await pg.goto('http://localhost:8765/index.html#/settings'); await pg.wait_for_timeout(700)
        print('pack loaded',await pg.evaluate("App.pack.keys.size"),'of',len(KEYS),'| settings shows',await pg.evaluate("(document.querySelector('#view').innerText.match(/Installed[^\\n]*/)||['NOT SHOWN'])[0]"))
        await pg.screenshot(path='/tmp/qa-out/audio_settings.png',full_page=True)
        fails=[]
        async def played(expr):
            await pg.evaluate("window.__played=[];window.__spoken=[]")
            await pg.evaluate(expr); await pg.wait_for_timeout(60)
            return await pg.evaluate("[window.__played.slice(),window.__spoken.slice()]")
        def check(name,cond,detail=''):
            if not cond: fails.append(name+' '+str(detail))
            if verbose or not cond: print(' ','ok ' if cond else 'FAIL',name,detail if not cond else '')
        # 1. a plain sentence plays audio/<AudioKey(JA.speak(text))>.mp3 and the device voice stays silent
        pl,sp=await played("App.speak(LANG.testLine)")
        k=await pg.evaluate("AudioKey(JA.speak(LANG.testLine))")
        check('test line plays its clip', pl==['audio/'+k+'.mp3'] and sp==[], (pl,sp))
        # 2. the Listen button of a phrase
        await pg.evaluate("location.hash='#/psych/s/opening'"); await pg.wait_for_timeout(300)
        await pg.evaluate("window.__played=[];window.__spoken=[]")
        say=await pg.evaluate("document.querySelector('#view [data-say]').dataset.say")
        await pg.evaluate("document.querySelector('#view [data-say]').click()"); await pg.wait_for_timeout(60)
        pl=await pg.evaluate("window.__played"); k=await pg.evaluate("s=>AudioKey(JA.speak(s))",say)
        check('Listen button plays its clip', pl==['audio/'+k+'.mp3'], pl)
        # 3. two readings of one spelling get two different clips; text without furigana gets the usual one
        two={}
        for t in TEXTS: two.setdefault(t['text'],[]).append(t)
        pairs=[v for v in two.values() if len(v)>1]
        print('spellings with two readings',len(pairs))
        for v in pairs:
            got=[]
            for t in v:
                pl,sp=await played("s=>App.speak(s)".replace('s=>App.speak(s)','App.speak('+json.dumps(t['ja'])+')'))
                got.append(pl[0] if pl else None)
                check('reading '+t['ja'], pl==['audio/'+t['key']+'.mp3'], pl)
            check('distinct clips '+v[0]['text'], len(set(got))==len(v), got)
            pl,sp=await played('App.speak('+json.dumps(v[0]['text'])+')')
            check('no furigana '+v[0]['text'], len(pl)==1 and pl[0] in got, pl)
        # 4. device voice setting: no clip is used
        await pg.evaluate("App.state.settings.voiceSource='device'")
        pl,sp=await played("App.speak(LANG.testLine)")
        check('device voice setting skips the pack', pl==[] and len(sp)==1, (pl,sp))
        await pg.evaluate("App.state.settings.voiceSource='pack'")
        # 5. a string that has no clip falls back to the device voice
        pl,sp=await played("App.speak('これ は 録音《ろくおん》 に ない 文《ぶん》 です。')")
        check('unrecorded text uses the device voice', pl==[] and sp==['これは録音にない文です。'], (pl,sp))
        # 6. English prompts never use the pack
        pl,sp=await played("App.speakAsync('Please sit down.',{lang:'en'})")
        check('English uses the device voice', pl==[] and len(sp)==1, (pl,sp))
        print('play checks',len(fails),'failed')

        # Coverage: every [data-say] on every page.
        routes=await pg.evaluate("""(()=>{const r=['#/kana','#/kana?script=k','#/verbs','#/verbs?tab=adj','#/particles','#/particles?tab=guide','#/dict','#/kanji','#/kanji?tab=list','#/speak','#/reading','#/psych','#/psych/cases','#/psych/interp','#/psych/point','#/psych/listen','#/psych/mood','#/psych/sud','#/psych/withdrawal','#/psych/deesc','#/psych/discharge','#/psych/mse-sheet','#/psych/mcases','#/psych/dcases','#/flash','#/settings'];
          LESSONS.forEach(l=>r.push('#/lessons/'+l.id));READING.forEach(x=>r.push('#/reading/'+x.id));DIALOGUES.forEach(d=>r.push('#/speak/'+d.id));PSYCH_CASES.forEach(c=>r.push('#/speak/case-'+c.id,'#/psych/case/'+c.id));
          PSYCH_SECTIONS.forEach(s=>r.push('#/psych/s/'+s.id,'#/psych/point?s='+s.id));
          JA_VERBS.forEach((v,i)=>r.push('#/verbs/v/'+i));JA_ADJ.forEach((v,i)=>r.push('#/verbs/a/'+i));
          App.KANJI.forEach(x=>r.push('#/kanji/k/'+encodeURIComponent(x.k)));
          (window.PSYCH_MSE_CASES||[]).forEach(c=>r.push('#/psych/mcase/'+c.id));(window.PSYCH_DISCHARGE_CASES||[]).forEach(c=>r.push('#/psych/dcase/'+c.id));
          return r})()""")
        res=await pg.evaluate("""async(routes)=>{const miss={},seen=new Set();let buttons=0;
          for(const r of routes){location.hash=r;await new Promise(x=>setTimeout(x,90));
            document.querySelectorAll('#view details').forEach(d=>d.open=true);
            document.querySelectorAll('#view [data-say]').forEach(el=>{buttons++;const s=el.dataset.say;if(seen.has(s))return;seen.add(s);if(!App.hasClip(s))(miss[r]=miss[r]||[]).push(s);});}
          return {miss,buttons,distinct:seen.size}}""",routes)
        print('routes',len(routes),'| Listen buttons',res['buttons'],'| distinct strings',res['distinct'])
        # Data that is spoken without a button (quizzes, flashcards, drills, simulated patients).
        data=await pg.evaluate("""(()=>{const out={};const t=(name,list)=>{const m=list.filter(s=>s&&!App.hasClip(s));if(m.length)out[name]=m;};
          t('dictionary',App.DICT.map(e=>e.tl));t('kanji words',App.KANJI.flatMap(x=>x.words.map(w=>w.tl)));t('kana',KANA.all);
          t('trainer forms',JA_VERBS.flatMap(v=>Object.values(JConj.verb(v.d,v.g)||{})).concat(JA_ADJ.flatMap(a=>Object.values(JConj.adj(a.d,a.t)||{}))));
          t('dialogues',DIALOGUES.flatMap(d=>d.lines.flatMap(l=>[l[1],l[3]])));t('readings',READING.flatMap(r=>r.tl));
          t('phrases',PSYCH_SECTIONS.flatMap(s=>s.phrases.flatMap(p=>[p.f,p.c])));
          t('replies',PSYCH_ANSWERS.common.flatMap(g=>g.items.map(i=>i[3]||i[0])).concat(Object.values(PSYCH_ANSWERS.sections).flatMap(l=>l.map(i=>i[0]))));
          t('interp',PSYCH_INTERP.map(x=>x[0]));t('cases',PSYCH_CASES.flatMap(c=>c.steps.flatMap(s=>[s.line[0]].concat(s.choices.map(x=>x.tl)))));
          t('practice',(window.PSYCH_MSE_CASES||[]).flatMap(c=>[c.cc&&c.cc.ans[0]].concat(Object.values(c.domains).flatMap(d=>Object.values(d.ans||{}).map(a=>a[0])))).concat((window.PSYCH_DISCHARGE_CASES||[]).flatMap(c=>Object.values(c.fields).flatMap(f=>Object.values(f.ans||{}).map(a=>a[0])))));
          return out})()""")
        missing=0
        for r,l in res['miss'].items():
            missing+=len(l); print(' MISSING',r,len(l),[x[:40] for x in l[:4]])
        for r,l in data.items():
            missing+=len(l); print(' MISSING data:'+r,len(l),[x[:40] for x in l[:6]])
        # Click through the tools, drills, quizzes and practice cases: every Listen button that appears must have a
        # clip, and nothing Japanese may reach the device voice.
        await pg.evaluate("window.__device.clear()")
        click={}
        for r in ['#/psych/sud','#/psych/mood','#/psych/withdrawal','#/psych/deesc','#/psych/discharge','#/psych/point','#/psych/listen','#/psych/interp','#/kana?tab=drill','#/kanji?tab=drill','#/verbs','#/verbs?tab=adj','#/flash/lv-N5','#/psych/s/suicide','#/lessons/te-form','#/reading/jikoshoukai','#/speak/hajimemashite']+[x for x in routes if '/mcase/' in x or '/dcase/' in x or '/psych/case/' in x]:
            await pg.evaluate("h=>{location.hash=h}", r); await pg.wait_for_timeout(250)
            for i in range(140):
                await pg.evaluate("""i=>{const bs=[...document.querySelectorAll('#view button, #view summary, #view .opt, #view .flashcard')].filter(b=>!b.disabled&&b.offsetParent&&!/Reset|Start over|Copy|new one|Print|Record|Erase|Export|Import/i.test(b.textContent)&&!b.dataset.pin&&!b.dataset.addcard);const b=bs[(i*7)%Math.max(1,bs.length)];if(b)b.click();
                  document.querySelectorAll('#view [data-say]').forEach(el=>{if(!App.hasClip(el.dataset.say))(window.__miss=window.__miss||new Set()).add(el.dataset.say);});}""", i)
                if i%10==0: await pg.wait_for_timeout(40)
                if not (await pg.evaluate("location.hash")).startswith(r.split('?')[0]): await pg.evaluate("h=>{location.hash=h}", r); await pg.wait_for_timeout(200)
        await pg.wait_for_timeout(300)
        cm=await pg.evaluate("[[...(window.__miss||[])],[...window.__device]]")
        print('click-through: Listen buttons without a clip',len(cm[0]),[x[:50] for x in cm[0][:8]],'| Japanese sent to the device voice',len(cm[1]),[x[:50] for x in cm[1][:8]])
        missing+=len(cm[0])+len(cm[1])
        # Dictionary word pages: the conjugation table is left to the device voice. Report how much that is.
        conj=await pg.evaluate("""async()=>{let n=0,head=0;const ws=App.DICT.filter(e=>['v1','v5','vs','vi','ai','an'].includes(e.pos));
          for(const e of ws.filter((x,i)=>i%25===0)){location.hash='#/dict/'+e.id;await new Promise(x=>setTimeout(x,80));
            document.querySelectorAll('#view [data-say]').forEach(el=>{if(!App.hasClip(el.dataset.say))n++;});if(!App.hasClip(e.tl))head++;}
          return {words:ws.length,sampled:Math.ceil(ws.length/25),unrecordedForms:n,headwordsMissing:head}}""")
        print('dictionary conjugation tables (device voice by design):',conj)
        print('missing',missing)
        print('errors',errs[:8])
        await b.close()
asyncio.run(main())
