import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':390,'height':844}); errs=[]
        pg.on('console', lambda m: errs.append(m.text) if m.type=='error' else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('http://localhost:8765/index.html'); await pg.wait_for_timeout(600)
        print(await pg.evaluate("[PSYCH_SECTIONS.length,PSYCH_SECTIONS.reduce((a,s)=>a+s.phrases.length,0),PSYCH_MSE_CASES.length,PSYCH_DISCHARGE_CASES.length].join(' ')"))
        print(await pg.evaluate("PSYCH_SECTIONS.slice(27).map(s=>s.id+':'+s.phrases.length).join(' ')"))
        routes=['#/psych','#/psych?tab=tools','#/psych?tab=cases','#/psych/mood','#/psych/mood?t=mania','#/psych/sud','#/psych/withdrawal','#/psych/deesc','#/psych/discharge','#/psych/dcases','#/psych/mcases','#/psych/mcase/shota','#/psych/mcase/ren','#/psych/dcase/shota','#/psych/dcase/yumiko','#/psych/dcase/ren','#/psych/dcase/tetsuo','#/psych/s/discharge','#/psych/s/mi','#/psych/s/wd-alcohol','#/psych/s/deescalation','#/more','#/practice']
        for r in routes:
            await pg.evaluate("h=>{location.hash=h}", r); await pg.wait_for_timeout(300)
            raw=await pg.evaluate("(document.querySelector('#view').innerText.match(/[《》｜]/g)||[]).length"); ov=await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
            h=await pg.evaluate("document.querySelector('#view h1')?JA.textOf(document.querySelector('#view h1')).slice(0,34):'NO H1'")
            es=await pg.evaluate("(document.querySelector('#view').innerText.match(/[¿¡ñ]|Spanish|usted|Hablemos/g)||[]).join(',')")
            print(r,'|',h,'| raw',raw,'ov',ov,es)
            name=r.replace('#/','').replace('/','_').replace('?','_').replace('=','_')
            if r in ('#/psych/mood','#/psych/sud','#/psych/withdrawal','#/psych/deesc','#/psych/discharge','#/psych/mcase/shota','#/psych/dcase/tetsuo','#/psych?tab=tools'): await pg.screenshot(path='/tmp/qa-out/'+name+'.png')
        print('errors',[e for e in errs if '403' not in e][:10]); await b.close()
asyncio.run(main())
