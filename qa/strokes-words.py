"""Stroke order on dictionary-word flashcards (0.15.0): the back of a word card shows one button per kanji of the word
that has a diagram; each opens the panel under the row, a second tap closes it, a kana-only word shows no row.
Expect "errors []", no "overflow True". Screenshots /tmp/qa-out/sw_*.png."""
import asyncio
from playwright.async_api import async_playwright
B='http://localhost:8765/index.html'
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(); errors=[]
        for name,vp,scheme in [('phone',{'width':390,'height':844},'light'),('small',{'width':320,'height':640},'dark'),('desk',{'width':1280,'height':900},'dark')]:
            ctx=await br.new_context(viewport=vp,color_scheme=scheme); pg=await ctx.new_page()
            pg.on('console',lambda m: errors.append(m.text) if m.type=='error' and '403' not in m.text else None); pg.on('pageerror',lambda e: errors.append(str(e)))
            ov=lambda: pg.evaluate("document.documentElement.scrollWidth>innerWidth")
            await pg.goto(B+'#/flash/lv-N3'); await pg.wait_for_timeout(600)
            seen_multi=seen_none=0; checked=0
            for i in range(40):
                await pg.locator('#fc').click(); await pg.wait_for_timeout(120)
                n=await pg.locator('.so-fc-word [data-so-open]').count()
                if n==0: seen_none+=1
                if n>=1 and checked<3:
                    ks=[await pg.locator('.so-fc-word [data-so-open]').nth(j).get_attribute('data-so-open') for j in range(n)]
                    for k in ks:
                        b=pg.locator(f'.so-fc-word [data-so-open="{k}"]'); await b.click()
                        await pg.wait_for_selector(f'.so-kana .so[data-so="{k}"] .so-big')
                        paths=await pg.locator('.so-kana .so-big .so-p').count(); exp=await b.get_attribute('aria-expanded'); panels=await pg.locator('.so-kana').count()
                        print(name,'card',i,'kanji',k,'of',ks,'paths',paths,'expanded',exp,'panels',panels,'romaji in row',await pg.locator('.so-fc-word .rj').count(),'overflow',await ov())
                    await pg.locator(f'.so-fc-word [data-so-open="{ks[-1]}"]').click(); await pg.wait_for_timeout(150)
                    print('   second tap closes:',await pg.locator('.so-kana').count()==0)
                    if n>1: seen_multi+=1
                    if checked==0: await pg.wait_for_timeout(300)
                    if checked==0:
                        await pg.locator(f'.so-fc-word [data-so-open="{ks[0]}"]').click(); await pg.wait_for_timeout(500); await pg.screenshot(path=f'/tmp/qa-out/sw_{name}.png',full_page=True)
                    checked+=1
                await pg.locator('[data-g="2"]').click(); await pg.wait_for_timeout(120)
                if await pg.locator('.so-kana').count(): errors.append('panel left after grading')
                if await pg.locator('#fc').count()==0: break
            print(name,'cards with kanji buttons checked',checked,'multi-kanji',seen_multi,'cards without row',seen_none)
            await ctx.close(); ctx=await br.new_context(viewport=vp,color_scheme=scheme); pg=await ctx.new_page()
            await pg.goto(B+'#/flash/kanji-N5'); await pg.wait_for_timeout(400); await pg.locator('#fc').click(); await pg.wait_for_timeout(150)
            print(name,'kanji card: word row',await pg.locator('.so-fc-word').count(),'kanji button',await pg.locator('.so-fc [data-so-open]').count())
            await ctx.close(); ctx=await br.new_context(viewport=vp,color_scheme=scheme); pg=await ctx.new_page()
            await pg.goto(B+'#/flash/psych'); await pg.wait_for_timeout(400); await pg.locator('#fc').click(); await pg.wait_for_timeout(150)
            print(name,'phrase card: word row',await pg.locator('.so-fc-word').count())
            await ctx.close()
        print('errors',errors); await br.close()
asyncio.run(main())
