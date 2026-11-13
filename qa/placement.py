"""Placement test to N3 and the Speaking level filter. Expect levels Starter / N4 / N3 / N3+ for the four runs, "errors []"."""
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(); pg=await br.new_page(viewport={'width':390,'height':844}); errors=[]
        pg.on('console',lambda m: errors.append(m.text) if m.type=='error' and '403' not in m.text else None); pg.on('pageerror',lambda e: errors.append(str(e)))
        await pg.goto('http://localhost:8765/index.html#/placement'); await pg.wait_for_timeout(500)
        n=await pg.evaluate("PLACEMENT.length"); print('questions',n, await pg.evaluate("LANG.placementLevels.map(x=>x[0]+':'+PLACEMENT.filter(q=>q[0]===x[0]).length).join(' ')"))
        for right in [0,15,20,25]:   # answer the first `right` questions correctly, the rest "I don't know"
            await pg.evaluate("location.hash='#/'"); await pg.wait_for_timeout(200); await pg.evaluate("location.hash='#/placement'"); await pg.wait_for_timeout(300)
            for i in range(n):
                a=await pg.evaluate("i=>PLACEMENT[i][3]",i); k=a if i<right else 3
                await pg.locator(f'#pq .opt[data-k="{k}"]').click()
            if right==25: await pg.screenshot(path='/tmp/qa-out/placement_end.png')
            print(' right',right,'level',await pg.evaluate("App.state.level"),'| go',await pg.locator('#pq a.btn.primary').get_attribute('href'),'| overflow',await pg.evaluate("document.documentElement.scrollWidth>innerWidth"))
        await pg.evaluate("location.hash='#/speak'"); await pg.wait_for_timeout(300)
        print('speak all',await pg.locator('.grid').first.locator('.tile').count())
        await pg.evaluate("location.hash='#/speak?lv=N3'"); await pg.wait_for_timeout(300); print('speak N3',await pg.locator('.grid').first.locator('.tile').count(),await pg.locator('.seg a.on').inner_text())
        await pg.screenshot(path='/tmp/qa-out/speak_n3.png')
        await pg.evaluate("location.hash='#/speak/kazoku-setsumei'"); await pg.wait_for_timeout(500); print('dialogue overflow',await pg.evaluate("document.documentElement.scrollWidth>innerWidth"), 'raw notation',await pg.evaluate("/《/.test(document.querySelector('#view').innerText)"))
        await pg.screenshot(path='/tmp/qa-out/speak_dialogue.png')
        print('errors',errors); await br.close()
asyncio.run(main())
