import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        pg=await b.new_page(viewport={'width':390,'height':844})
        errs=[]
        pg.on('console', lambda m: errs.append(m.text) if m.type=='error' else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('http://localhost:8765/index.html#/lessons/desu'); await pg.wait_for_timeout(400)
        async def go(h): 
            await pg.evaluate("h=>{location.hash=h}",h); await pg.wait_for_timeout(350)
        # lesson quiz to the end
        for i in range(8):
            o=pg.locator('#lq .opt:not([disabled])').first
            if await o.count()==0: break
            await o.click(); await pg.locator('#lq [data-act=next]').click()
        print('lesson done', await pg.evaluate("JSON.stringify(App.state.done.lessons)"))
        await go('#/verbs'); await pg.locator('#vstart').click(); await pg.wait_for_timeout(200)
        for i in range(10):
            await pg.locator('#vq .opt:not([disabled])').first.click(); await pg.locator('#vq [data-act=next]').click()
        print('verb drill', await pg.locator('#vq h3').inner_text())
        await pg.locator('[data-mode=type]').click(); await pg.locator('#vstart').click(); await pg.wait_for_timeout(200)
        ans=await pg.evaluate("(()=>{return 1})()")
        await pg.fill('#vin','tabemasu'); await pg.locator('#vform button[type=submit]').click(); await pg.wait_for_timeout(100)
        print('type fb', (await pg.locator('#vq [data-fb]').inner_text())[:80].replace('\n',' '))
        await pg.screenshot(path='/tmp/qa-out/verbtype.png')
        await go('#/particles'); 
        for i in range(10):
            await pg.locator('#pq .opt:not([disabled])').first.click(); 
            if i==0: await pg.screenshot(path='/tmp/qa-out/particle_fb.png')
            await pg.locator('#pq [data-act=next]').click()
        print('particles', await pg.locator('#pq h3').inner_text())
        await go('#/kana?tab=drill'); await pg.locator('#kstart').click()
        for i in range(10):
            await pg.locator('#kq .opt:not([disabled])').first.click(); await pg.locator('#knext').click()
        print('kana', await pg.locator('#kq h3').inner_text(), await pg.evaluate("Object.keys(App.state.kana).length"))
        await go('#/flash/c-basics'); await pg.locator('#fc').click(); await pg.wait_for_timeout(150); await pg.screenshot(path='/tmp/qa-out/flash.png'); await pg.locator('[data-g="2"]').click()
        print('srs', await pg.evaluate("Object.keys(App.state.srs).length"))
        await go('#/psych/s/depression'); await pg.screenshot(path='/tmp/qa-out/dep.png', full_page=False)
        await pg.mouse.wheel(0,700); await pg.wait_for_timeout(200); await pg.screenshot(path='/tmp/qa-out/dep2.png')
        await go('#/psych/point?s=depression'); await pg.locator('.ptile').first.click(); await pg.wait_for_timeout(150); await pg.screenshot(path='/tmp/qa-out/point.png')
        await go('#/psych/listen'); await pg.locator('#lq .opt').first.click(); await pg.screenshot(path='/tmp/qa-out/listen.png')
        await go('#/settings'); await pg.locator('[data-aid=furigana][data-v=tap]').click(); await pg.locator('[data-aid=romaji][data-v=false]').click(); await pg.locator('[data-aid=spacing][data-v=false]').click()
        print('classes', await pg.evaluate("document.documentElement.className"), await pg.evaluate("JSON.stringify([App.state.settings.furigana,App.state.settings.romaji,App.state.settings.spacing])"))
        await go('#/reading/nemurenai'); await pg.screenshot(path='/tmp/qa-out/read_noaids.png')
        await pg.reload(); await pg.wait_for_timeout(400); print('after reload', await pg.evaluate("document.documentElement.className"))
        await pg.locator('#tabMore').click(); await pg.wait_for_timeout(300); await pg.screenshot(path='/tmp/qa-out/drawer.png')
        # desktop dark
        pg2=await b.new_page(viewport={'width':1280,'height':800}, color_scheme='dark')
        pg2.on('pageerror', lambda e: errs.append(str(e)))
        await pg2.goto('http://localhost:8765/index.html#/lessons/wa-vs-ga'); await pg2.wait_for_timeout(500); await pg2.screenshot(path='/tmp/qa-out/desk_dark.png')
        await pg2.evaluate("location.hash='#/dict/'+App.DICT.find(e=>e.ftl==='飲む').id"); await pg2.wait_for_timeout(400); await pg2.screenshot(path='/tmp/qa-out/desk_word.png')
        # backup round trip
        payload=await pg.evaluate("JSON.stringify(App.backup.payload())"); print('backup bytes',len(payload))
        print('errors',errs[:10])
        await b.close()
asyncio.run(main())
