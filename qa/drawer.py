"""Phone menu (the More drawer): it is no taller than the screen, scrolls to its last item, and the Psychiatry tab and Home tiles open the
interview hub. Expect "scrolls True", "errors []". Screenshot /tmp/qa-out/drawer_phone.png."""
import asyncio
from playwright.async_api import async_playwright
B='http://localhost:8765/index.html'
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(); errors=[]
        for name,vp in [('phone',{'width':390,'height':844}),('small',{'width':360,'height':640}),('tablet',{'width':820,'height':1180})]:
            pg=await br.new_page(viewport=vp,has_touch=True); pg.on('pageerror',lambda e: errors.append(str(e)))
            await pg.goto(B+'#/'); await pg.wait_for_timeout(600); await pg.locator('#tabMore').click(); await pg.wait_for_timeout(450)
            m=await pg.evaluate("(()=>{const r=document.getElementById('rail');r.scrollTop=99999;const last=[...r.querySelectorAll('.nav-item')].pop().getBoundingClientRect();return {client:r.clientHeight,scroll:r.scrollHeight,inner:innerHeight,top:r.scrollTop,lastBottom:Math.round(last.bottom)}})()")
            print(name,m,'scrolls',m['client']<=m['inner'] and m['top']>0 and m['lastBottom']<=m['inner'])
            if name=='phone': await pg.screenshot(path='/tmp/qa-out/drawer_phone.png')
            await pg.keyboard.press('Escape'); await pg.wait_for_timeout(300)
            tabs=await pg.locator('#tabbar [data-nav]').evaluate_all("els=>els.map(e=>e.dataset.nav)")
            await pg.locator('#tabbar [data-nav=psych]').click(); await pg.wait_for_timeout(400)
            print(' tabs',tabs,'| psych tab ->',await pg.evaluate("location.hash"),'on:',await pg.locator('#tabbar .on').get_attribute('data-nav'),'| overflow',await pg.evaluate("document.documentElement.scrollWidth>innerWidth"))
            await pg.goto(B+'#/flash'); await pg.wait_for_timeout(300); print(' flashcards highlight:',await pg.locator('#tabbar .on').get_attribute('data-nav'))
            await pg.goto(B+'#/'); await pg.wait_for_timeout(400); print(' home psychiatry tiles',await pg.locator('#view a.tile[href^="#/psych"]').count())
            if name=='phone': await pg.screenshot(path='/tmp/qa-out/tabbar_phone.png')
            await pg.close()
        print('errors',errors); await br.close()
asyncio.run(main())
