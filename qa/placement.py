"""Placement test to N1 (0.28.0: 35 questions) and the Speaking level filter. Expect levels Starter / N4 / N3 / N2 / N1 / N1+
for the six runs (go: Writing systems / Time and sequence / Change and progress / The moment something happens (n1-ga-hayai-ka) /
#/psych), "errors []". Screenshot of the N1 result: /tmp/qa-n1/shots/placement_n1.png.
QA_PORT (default 8765) is the port of the local server."""
import asyncio, os
PORT=os.environ.get('QA_PORT','8765')
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(); pg=await br.new_page(viewport={'width':390,'height':844}); errors=[]
        pg.on('console',lambda m: errors.append(m.text) if m.type=='error' and '403' not in m.text else None); pg.on('pageerror',lambda e: errors.append(str(e)))
        await pg.goto(f'http://localhost:{PORT}/index.html#/placement'); await pg.wait_for_timeout(500)
        n=await pg.evaluate("PLACEMENT.length"); print('questions',n, await pg.evaluate("LANG.placementLevels.map(x=>x[0]+':'+PLACEMENT.filter(q=>q[0]===x[0]).length).join(' ')"))
        for right in [0,15,20,25,30,35]:   # answer the first `right` questions correctly, the rest "I don't know"
            await pg.evaluate("location.hash='#/'"); await pg.wait_for_timeout(200); await pg.evaluate("location.hash='#/placement'"); await pg.wait_for_timeout(300)
            for i in range(n):
                a=await pg.evaluate("i=>PLACEMENT[i][3]",i); k=a if i<right else 3
                await pg.locator(f'#pq .opt[data-k="{k}"]').click()
            if right==30: os.makedirs('/tmp/qa-n1/shots',exist_ok=True); await pg.screenshot(path='/tmp/qa-n1/shots/placement_n1.png',full_page=True)
            if right==35: await pg.screenshot(path='/tmp/qa-out/placement_end.png')
            print(' right',right,'level',await pg.evaluate("App.state.level"),'| go',await pg.locator('#pq a.btn.primary').get_attribute('href'),'| overflow',await pg.evaluate("document.documentElement.scrollWidth>innerWidth"))
        await pg.evaluate("location.hash='#/speak'"); await pg.wait_for_timeout(300)
        print('speak all',await pg.locator('.grid').first.locator('.tile').count())
        await pg.evaluate("location.hash='#/speak?lv=N3'"); await pg.wait_for_timeout(300); print('speak N3',await pg.locator('.grid').first.locator('.tile').count(),await pg.locator('.seg a.on').inner_text())
        await pg.screenshot(path='/tmp/qa-out/speak_n3.png')
        await pg.evaluate("location.hash='#/speak/kazoku-setsumei'"); await pg.wait_for_timeout(500); print('dialogue overflow',await pg.evaluate("document.documentElement.scrollWidth>innerWidth"), 'raw notation',await pg.evaluate("/《/.test(document.querySelector('#view').innerText)"))
        await pg.screenshot(path='/tmp/qa-out/speak_dialogue.png')
        bands=await pg.evaluate("LANG.placementLevels.map(x=>x[0]).join(' ')"); print('bands',bands)
        if n!=35 or bands!='S N5a N5b N4 N3 N2 N1': errors.append('expected 35 questions in 7 bands')
        print('errors',errors); await br.close()
asyncio.run(main())
