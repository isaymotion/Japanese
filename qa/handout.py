"""Printable handout and MSE sheet: every preset renders, no raw notation, no overflow, and prints to PDF (page counts).
Expect "errors []". PDFs are written to /tmp/qa-out/ho_<preset>.pdf."""
import asyncio, subprocess
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        pg=await b.new_page(viewport={'width':390,'height':844})
        errs=[]
        pg.on('console', lambda m: errs.append(m.text) if m.type=='error' and '403' not in m.text else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('http://localhost:8765/index.html#/psych/handout'); await pg.wait_for_timeout(700)
        await pg.evaluate("window.print=()=>{window.__printed=(window.__printed||0)+1}")
        async def stat(tag):
            raw=await pg.evaluate("(document.querySelector('#view').innerText.match(/[《》｜]/g)||[]).length")
            ov=await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
            return f"{tag}: raw {raw} ov {ov} phrases {await pg.locator('.ho-ph').count()} ruby {await pg.locator('#hoPaper ruby').count()}"
        presets=await pg.evaluate("[...document.querySelectorAll('[data-preset]')].map(b=>b.dataset.preset)")
        for k in presets:
            await pg.locator(f'[data-preset="{k}"]').click(); await pg.wait_for_timeout(500)
            print(await stat(k))
            await pg.locator('#hoPrint').click()
            css=await pg.evaluate("document.getElementById('pagecss').textContent")
            await pg.emulate_media(media='print')
            await pg.pdf(path=f'/tmp/qa-out/ho_{k}.pdf', prefer_css_page_size=True, print_background=True)
            await pg.emulate_media(media='screen')
            info=subprocess.run(['pdfinfo',f'/tmp/qa-out/ho_{k}.pdf'],capture_output=True,text=True).stdout
            pages=[l for l in info.split('\n') if l.startswith('Pages') or l.startswith('Page size')]
            print('   ',css.replace('@media print','').strip(),'|',' '.join(' '.join(x.split()) for x in pages))
        print('printed',await pg.evaluate("window.__printed"))
        # switches
        await pg.locator('[data-preset="full"]').click(); await pg.wait_for_timeout(300)
        for seg,v in [('romaji','show'),('furi','hide'),('english','key'),('register','both'),('depth','all'),('paper','A5'),('size','large')]:
            await pg.locator(f'[data-seg="{seg}"][data-v="{v}"]').click(); await pg.wait_for_timeout(250)
            print(' ',seg,v,'| class',await pg.evaluate("document.getElementById('hoPaper').className"),'|',await stat(''))
        for seg,v in [('romaji','hide'),('furi','show'),('english','show'),('register','f'),('depth','key'),('paper','A4'),('size','normal')]:
            await pg.locator(f'[data-seg="{seg}"][data-v="{v}"]').click(); await pg.wait_for_timeout(150)
        for q in ['?deesccard=1','?discharge=1','?deesc=1','?s=suicide']:
            await pg.evaluate("h=>{location.hash=h}",'#/psych/handout'+q); await pg.wait_for_timeout(500); print(await stat(q))
        if await pg.evaluate("!!window.PSYCH_MSE_SHEET"):
            await pg.evaluate("location.hash='#/psych/mse-sheet'"); await pg.wait_for_timeout(700)
            print('sheet pages',await pg.locator('.ms-page').count(),'sections',await pg.locator('.ms-sec').count(),'items',await pg.locator('.ms-sec li').count(),await stat('sheet'))
            await pg.screenshot(path='/tmp/qa-out/sheet_phone.png'); await pg.locator('#msPrint').click()
            await pg.emulate_media(media='print')
            await pg.pdf(path='/tmp/qa-out/mse_sheet.pdf', prefer_css_page_size=True, print_background=True)
            await pg.emulate_media(media='screen')
            info=subprocess.run(['pdfinfo','/tmp/qa-out/mse_sheet.pdf'],capture_output=True,text=True).stdout
            print('   sheet pdf',' '.join(' '.join(l.split()) for l in info.split('\n') if l.startswith('Pages') or l.startswith('Page size')))
        print('errors',errs)
        await b.close()
asyncio.run(main())
