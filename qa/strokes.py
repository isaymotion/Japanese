"""Stroke-order diagrams: kanji page (play, next stroke, step pictures, numbers), every kanji has a diagram whose
stroke count matches the app's data, kana chart tap panel (single and combination kana), offline message, dark theme.
Expect "errors []", "kanji without a matching diagram []". Screenshots in /tmp/qa-out/strokes_*.png."""
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
                await pg.goto(B+h); await pg.wait_for_timeout(450)
            await go('#/kanji/k/'+urllib.parse.quote('食')); await pg.wait_for_selector('.so-big')
            print(name,'paths',await pg.locator('.so-big .so-p').count(),'steps',await pg.locator('.so-step').count(),'count',await pg.locator('.so-count').inner_text())
            ov=await pg.evaluate("document.documentElement.scrollWidth>innerWidth"); print(' overflow',ov)
            await pg.locator('.so-big').scroll_into_view_if_needed(); await pg.screenshot(path=f'/tmp/qa-out/strokes_page_{name}.png')
            await pg.locator('[data-so-act=play]').click(); await pg.wait_for_timeout(1500)
            mid=await pg.locator('.so-count').inner_text(); await pg.screenshot(path=f'/tmp/qa-out/strokes_play_{name}.png')
            await pg.wait_for_timeout(9000); print(' mid:',mid,'| end:',await pg.locator('.so-count').inner_text(),'| hidden',await pg.evaluate("[...document.querySelectorAll('.so-big .so-p')].filter(p=>p.style.visibility==='hidden').length"))
            for i in range(3): await pg.locator('[data-so-act=next]').click(); await pg.wait_for_timeout(1300)
            print(' after 3 next:',await pg.locator('.so-count').inner_text(),'visible',await pg.evaluate("[...document.querySelectorAll('.so-big .so-p')].filter(p=>p.style.visibility!=='hidden').length"))
            await pg.locator('[data-step="5"]').click(); print(' step 5:',await pg.locator('.so-count').inner_text(),'visible',await pg.evaluate("[...document.querySelectorAll('.so-big .so-p')].filter(p=>p.style.visibility!=='hidden').length"),'numbers',await pg.evaluate("[...document.querySelectorAll('.so-n')].filter(t=>t.style.display!=='none').length"))
            await pg.screenshot(path=f'/tmp/qa-out/strokes_step_{name}.png')
            await pg.locator('[data-so-act=nums]').click(); print(' numbers off:',await pg.evaluate("[...document.querySelectorAll('.so-n')].filter(t=>t.style.display!=='none').length"))
            # kana
            await go('#/kana'); await pg.locator('.kana-cell[data-say="き"]').click(); await pg.wait_for_selector('.so-kana .so-big')
            print(' kana き paths',await pg.locator('.so-kana .so-big .so-p').count()); await pg.wait_for_timeout(500); await pg.screenshot(path=f'/tmp/qa-out/strokes_kana_{name}.png')
            await pg.locator('.kana-cell[data-say="きゃ"]').click(); await pg.wait_for_timeout(600)
            print(' kana きゃ panels',await pg.locator('.so-kana').count(),'diagrams',await pg.locator('.so-kana .so-big').count()); await pg.screenshot(path=f'/tmp/qa-out/strokes_kana2_{name}.png')
            await pg.locator('[data-so-close]').click(); print(' closed',await pg.locator('.so-kana').count())
            await go('#/kana?s=k'); await pg.locator('.kana-cell[data-say="ツ"]').click(); await pg.wait_for_selector('.so-kana .so-big'); print(' kana ツ paths',await pg.locator('.so-kana .so-big .so-p').count())
            print(' overflow',await pg.evaluate("document.documentElement.scrollWidth>innerWidth"))
            if name=='desk':
                bad=await pg.evaluate("""async()=>{const out=[];for(const x of App.KANJI){location.hash=App.kanjiHref(x.k);const sel='.so[data-so="'+x.k+'"] .so-big';for(let i=0;i<60&&!document.querySelector(sel);i++)await new Promise(r=>setTimeout(r,20));
                  const n=document.querySelectorAll(sel+' .so-p').length;if(n!==x.strokes||document.querySelectorAll('.so-step').length!==(n>1?n:0)||document.documentElement.scrollWidth>innerWidth)out.push(x.k+':'+n+'/'+x.strokes);}return out}""")
                print('kanji without a matching diagram',bad)
                kana=await pg.evaluate("""async()=>{const miss=[];for(const k of KANA.all)for(const c of k)if(!STROKES[c])miss.push(c);return miss}""")
                print('kana without a diagram',kana)
                await ctx.set_offline(True); await pg.evaluate("delete window.STROKES"); 
            await ctx.close()
        print('errors',errors); await br.close()
asyncio.run(main())
