"""Printing a lesson, a reading passage and the kanji list (App.printPage): PDFs in /tmp/qa-out/pp_*.pdf. Expect "errors []"."""
import asyncio, subprocess, urllib.parse
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        pg=await b.new_page(viewport={'width':390,'height':844})
        errs=[]
        pg.on('console', lambda m: errs.append(m.text) if m.type=='error' and '403' not in m.text else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('http://localhost:8765/index.html'); await pg.wait_for_timeout(600)
        await pg.evaluate("window.print=()=>{window.__printed=(window.__printed||0)+1}")
        for name,h,btn in [('lesson','#/lessons/passive','#lprint'),('reading','#/reading/'+await pg.evaluate("READING[READING.length-1].id"),'#rprint'),('kanji','#/kanji?lv=N5&tab=list','#kjprint')]:
            await pg.evaluate("h=>{location.hash=h}",h); await pg.wait_for_timeout(600)
            ov=await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
            await pg.locator(btn).click()
            cls=await pg.evaluate("document.documentElement.className")
            await pg.emulate_media(media='print')
            await pg.pdf(path=f'/tmp/qa-out/pp_{name}.pdf', prefer_css_page_size=True, print_background=True)
            await pg.emulate_media(media='screen')
            await pg.evaluate("window.dispatchEvent(new Event('afterprint'))")
            info=subprocess.run(['pdfinfo',f'/tmp/qa-out/pp_{name}.pdf'],capture_output=True,text=True).stdout
            print(name,'overflow',ov,'| class during print:',cls,'| after:',await pg.evaluate("document.documentElement.className"),'|',' '.join(' '.join(l.split()) for l in info.split('\n') if l.startswith('Pages')))
        for lv in ['N4','N3','C']:
            await pg.evaluate("h=>{location.hash=h}",'#/kanji?lv='+lv+'&tab=list'); await pg.wait_for_timeout(500)
            print(' list',lv,'rows',await pg.locator('.kj-table tr').count(),'raw',await pg.evaluate("(document.querySelector('#view').innerText.match(/[《》｜]/g)||[]).length"),'ov',await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1"))
        for lv in await pg.evaluate("['all'].concat(LANG.levels)"):
            await pg.evaluate("h=>{location.hash=h}",'#/reading?lv='+lv); await pg.wait_for_timeout(250)
            print(' reading',lv,'tiles',await pg.locator('#view a.tile').count())
        print('printed',await pg.evaluate("window.__printed"),'errors',errs)
        await b.close()
asyncio.run(main())
