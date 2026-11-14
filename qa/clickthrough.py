import asyncio
from playwright.async_api import async_playwright
import os as _os
PORT = _os.environ.get('QA_PORT', '8765')
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':390,'height':844}); errs=[]
        pg.on('console', lambda m: errs.append(m.text) if m.type=='error' else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('http://localhost:' + PORT + '/index.html#/psych/sud'); await pg.wait_for_timeout(500)
        await pg.evaluate("App.speak=()=>{};App.speakAsync=()=>Promise.resolve();App.stop=App.stop||(()=>{})")
        for r in ['#/psych/sud','#/psych/mood','#/psych/withdrawal','#/psych/deesc','#/psych/discharge','#/psych/mcase/shota','#/psych/mcase/ren','#/psych/mcase/ayaka','#/psych/mcase/yumiko','#/psych/mcase/tetsuo','#/psych/mcase/chiyoko','#/psych/dcase/daisuke','#/psych/dcase/chiyoko','#/psych/dcase/yumiko','#/psych/dcase/tetsuo','#/psych/dcase/ayaka','#/psych/dcases','#/psych/mcases']:
            await pg.evaluate("h=>{location.hash=h}", r); await pg.wait_for_timeout(300)
            n=0; e0=len(errs)
            for i in range(120):
                ok=await pg.evaluate("""i=>{const bs=[...document.querySelectorAll('#view button, #view summary')].filter(b=>!b.disabled&&b.offsetParent&&!/Reset|Start over|Copy|new one/i.test(b.textContent)&&!b.dataset.pin);const b=bs[i%Math.max(1,bs.length)];if(!b)return false;b.click();return true}""", i)
                if ok: n+=1
                if i%10==0: await pg.wait_for_timeout(30)
                if not (await pg.evaluate("location.hash")).startswith(r.split('?')[0]): await pg.evaluate("h=>{location.hash=h}", r); await pg.wait_for_timeout(200)
            raw=await pg.evaluate("(document.querySelector('#view').innerText.match(/[《》｜]|\\{s\\}|\\{sa\\}|\\{u\\}|\\{w\\}|undefined|NaN/g)||[]).join('')")
            print(r,'clicks',n,'new errors',len(errs)-e0,'leftovers:',raw[:40])
        await pg.evaluate("location.hash='#/psych/sud'"); await pg.wait_for_timeout(300)
        await pg.evaluate("[...document.querySelectorAll('#view button')].find(b=>/Brief intervention/.test(b.textContent)).click()"); await pg.wait_for_timeout(200); await pg.screenshot(path='/tmp/qa-out/sud_bi.png')
        print('errors',[e for e in errs if '403' not in e][:10]); await b.close()
asyncio.run(main())
