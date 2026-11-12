import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':390,'height':844}); errs=[]
        pg.on('console', lambda m: errs.append(m.text) if m.type=='error' else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('http://localhost:8765/index.html'); await pg.wait_for_timeout(500)
        print(await pg.evaluate("PSYCH_SECTIONS.map(s=>s.id+':'+s.phrases.length).join(' ')"))
        print(await pg.evaluate("[PSYCH_SECTIONS.length,PSYCH_SECTIONS.reduce((a,s)=>a+s.phrases.length,0),PSYCH_CASES.length,PSYCH_INTERP.length,Object.keys(PSYCH_ANSWERS.sections).length,Object.values(PSYCH_ANSWERS.sections).reduce((a,x)=>a+x.length,0)+PSYCH_ANSWERS.common.reduce((a,g)=>a+g.items.length,0)].join(' ')"))
        ids=await pg.evaluate("PSYCH_SECTIONS.map(s=>s.id)")
        cases=await pg.evaluate("PSYCH_CASES.map(c=>c.id)")
        routes=['#/psych','#/psych?tab=cases','#/psych/cases','#/psych/interp','#/speak','#/practice','#/more']+['#/psych/s/'+i for i in ids]+['#/psych/case/'+c for c in cases]+['#/speak/case-'+cases[0],'#/psych/point?s=meds']
        for r in routes:
            await pg.evaluate("h=>{location.hash=h}", r); await pg.wait_for_timeout(200)
            raw=await pg.evaluate("(document.querySelector('#view').innerText.match(/[《》｜]/g)||[]).length"); ov=await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
            h=await pg.evaluate("document.querySelector('#view h1')?JA.textOf(document.querySelector('#view h1')).slice(0,30):'NO H1'")
            if raw or ov or h=='NO H1': print('CHECK',r,h,raw,ov)
        # play a case to the end
        await pg.evaluate("location.hash='#/psych/case/'+PSYCH_CASES[0].id"); await pg.wait_for_timeout(300)
        await pg.screenshot(path='/tmp/qa-out/case.png')
        for i in range(12):
            o=pg.locator('#view .opt:not([disabled])').first
            if await o.count()==0: break
            await o.click(); await pg.wait_for_timeout(80)
            n=pg.locator('#view [data-act=next], #view #cnext, #view .btn.primary').first
            if await n.count(): await n.click(); await pg.wait_for_timeout(80)
        await pg.screenshot(path='/tmp/qa-out/case_end.png'); print('case done', await pg.evaluate("JSON.stringify(App.state.done.cases)"))
        await pg.evaluate("location.hash='#/psych/interp'"); await pg.wait_for_timeout(300); await pg.screenshot(path='/tmp/qa-out/interp.png')
        await pg.evaluate("location.hash='#/psych/s/shea-techniques'"); await pg.wait_for_timeout(300); await pg.screenshot(path='/tmp/qa-out/shea.png')
        print('errors',[e for e in errs if '403' not in e][:8]); await b.close()
asyncio.run(main())
