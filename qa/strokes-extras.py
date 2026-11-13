"""Stroke-order extras (0.14.0): the tap-a-kana card under the Starter kana lessons, the Stroke order button in the
kanji drill feedback (all four modes) and on kanji flashcards. Expect "errors []" and no "overflow True".
Screenshots in /tmp/qa-out/sx_*.png."""
import asyncio, urllib.parse
from playwright.async_api import async_playwright
B='http://localhost:8765/index.html'
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(); errors=[]
        for name,vp,scheme in [('phone',{'width':390,'height':844},'light'),('desk',{'width':1280,'height':900},'dark')]:
            ctx=await br.new_context(viewport=vp,color_scheme=scheme); pg=await ctx.new_page()
            pg.on('console',lambda m: errors.append(m.text) if m.type=='error' and '403' not in m.text else None); pg.on('pageerror',lambda e: errors.append(str(e)))
            async def go(h):
                await pg.goto(B+h); await pg.wait_for_timeout(500)
            ov=lambda: pg.evaluate("document.documentElement.scrollWidth>innerWidth")
            for lid,ch,ch2 in [('hiragana','き','ん'),('katakana','ア','ン')]:
                await go('#/lessons/'+lid); n=await pg.locator('.so-chip').count()
                await pg.locator(f'.so-chip[data-so-open="{ch}"]').click(); await pg.wait_for_selector(f'.so-kana .so[data-so="{ch}"] .so-big')
                paths=await pg.locator('.so-kana .so-big .so-p').count(); romaji=await pg.locator('.so-lesson .rj, .so-lesson rt').count()
                await pg.wait_for_timeout(400); await pg.screenshot(path=f'/tmp/qa-out/sx_lesson_{lid}_{name}.png')
                await pg.locator(f'.so-chip[data-so-open="{ch2}"]').click(); await pg.wait_for_selector(f'.so-kana .so[data-so="{ch2}"] .so-big'); panels=await pg.locator('.so-kana').count()
                await pg.locator(f'.so-chip[data-so-open="{ch2}"]').click(); await pg.wait_for_timeout(200); closed=await pg.locator('.so-kana').count()
                print(name,'lesson',lid,'chips',n,'paths',paths,'ruby/romaji in card',romaji,'panels',panels,'after second tap',closed,'overflow',await ov())
            for l in ['writing-systems','sounds','greetings','desu']:
                await go('#/lessons/'+l); print(name,'lesson',l,'chips',await pg.locator('.so-chip').count())
            for mode in ['meaning','kanji','reading','word']:
                await go('#/kanji?lv=N5&tab=drill'); await pg.locator(f'[data-mode={mode}]').click(); await pg.locator('#kjstart').click()
                await pg.locator('#kjq .opt').first.click(); b=pg.locator('#kjq [data-so-open]'); k=await b.get_attribute('data-so-open')
                await b.click(); await pg.wait_for_selector(f'.so-kana .so[data-so="{k}"] .so-big')
                print(name,'drill',mode,k,'paths',await pg.locator('.so-kana .so-big .so-p').count(),'expanded',await b.get_attribute('aria-expanded'),'overflow',await ov())
                if mode=='meaning': await pg.wait_for_timeout(400); await pg.screenshot(path=f'/tmp/qa-out/sx_drill_{name}.png')
                await pg.locator('#kjnext').click(); await pg.wait_for_timeout(150); print('   next question: panels',await pg.locator('.so-kana').count())
            await go('#/flash/kanji-N5'); await pg.locator('#fc').click(); await pg.wait_for_timeout(200)
            b=pg.locator('[data-so-open]'); k=await b.get_attribute('data-so-open'); await b.click(); await pg.wait_for_selector(f'.so-kana .so[data-so="{k}"] .so-big')
            await pg.wait_for_timeout(400); await pg.screenshot(path=f'/tmp/qa-out/sx_flash_{name}.png',full_page=True)
            print(name,'flash',k,'paths',await pg.locator('.so-kana .so-big .so-p').count(),'grade buttons',await pg.locator('[data-g]').count(),'overflow',await ov())
            await pg.locator('[data-g="2"]').click(); await pg.wait_for_timeout(200); print('   next card: panels',await pg.locator('.so-kana').count(),'button before flip',await pg.locator('[data-so-open]').count())
            await go('#/flash/n5-core') if False else None
            await go('#/kana'); await pg.locator('.kana-cell[data-say="きゃ"]').click(); await pg.wait_for_selector('.so-kana .so-big'); print(name,'kana chart きゃ diagrams',await pg.locator('.so-kana .so-big').count())
            await ctx.close()
        print('errors',errors); await br.close()
asyncio.run(main())
