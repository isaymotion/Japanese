import asyncio, sys
from playwright.async_api import async_playwright
routes=['#/','#/lessons','#/lessons/writing-systems','#/lessons/te-form','#/lessons/keigo','#/kana','#/kana?tab=drill','#/kanji','#/kanji?tab=drill','#/kanji?tab=list','#/psych/handout','#/psych/mse-sheet','#/psych/handout?deesccard=1','#/lessons?lv=N3','#/lessons/passive','#/lessons/casual-speech','#/verbs','#/verbs/v/0','#/verbs?tab=adj','#/verbs/a/0','#/particles','#/particles?tab=guide','#/dict','#/dict?q=nemui','#/dict?q=sleep','#/flash','#/flash/lv-N5','#/reading','#/reading/jikoshoukai','#/speak','#/speak/hajimemashite','#/psych','#/psych/s/suicide','#/psych/s/opening','#/psych/listen','#/psych/point?s=depression','#/placement','#/progress','#/settings','#/about','#/new','#/more','#/practice','#/search?q=kusuri','#/psych?tab=tools','#/psych?tab=cases']
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        pg=await b.new_page(viewport={'width':390,'height':844})
        errs=[]
        pg.on('console', lambda m: errs.append(('console',m.text)) if m.type=='error' else None)
        pg.on('pageerror', lambda e: errs.append(('pageerror',str(e))))
        await pg.goto('http://localhost:8765/index.html')
        for r in routes:
            await pg.evaluate("h=>{location.hash=h}", r); await pg.wait_for_timeout(250)
            h1=await pg.evaluate("document.querySelector('#view h1')?JA.textOf(document.querySelector('#view h1')).slice(0,40):document.querySelector('#view').innerText.slice(0,60)")
            raw=await pg.evaluate("(document.querySelector('#view').innerText.match(/[《》｜]/g)||[]).length")
            ov=await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
            print(r,'|',h1,'| rawNotation',raw,'| overflow',ov)
            if r in ('#/','#/lessons/te-form','#/kana','#/verbs/v/0','#/particles','#/psych/s/suicide','#/reading/jikoshoukai','#/settings','#/dict?q=nemui','#/psych/point?s=depression','#/flash/lv-N5'):
                await pg.screenshot(path='/tmp/qa-out/'+r.replace('#/','').replace('/','_').replace('?','_').replace('=','_') .strip('_')+'.png' if r!='#/' else '/tmp/qa-out/home.png')
        # dictionary word page for a verb
        await pg.evaluate("location.hash='#/dict/'+App.DICT.find(e=>e.pos==='v5').id"); await pg.wait_for_timeout(250)
        await pg.screenshot(path='/tmp/qa-out/word.png')
        print('dict size',await pg.evaluate("App.DICT.length"), 'search nemui', await pg.evaluate("App.searchDict('nemui').slice(0,3).map(r=>r.e.tl)"), await pg.evaluate("App.searchDict('くすり').slice(0,3).map(r=>r.e.tl)"), await pg.evaluate("App.searchAll('shinitai',5).map(r=>r.type+':'+r.title.slice(0,20))"))
        for e in errs[:20]: print('ERR',e)
        print('errors',len(errs))
        await b.close()
asyncio.run(main())
