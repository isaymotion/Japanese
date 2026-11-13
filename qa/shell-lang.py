"""Menu language (Settings -> Menu language): switch to Japanese and back at phone and desktop width.
Checks: every menu item has a Japanese label with its English underneath, tabs are Japanese, no raw 《》 notation left on the
page or in any attribute, no romaji line in the menu, no sideways overflow, the phone menu still scrolls to its last item,
the choice survives a reload, and English comes back. Screenshots in /tmp/qa-out/shell_*.png. Server on :8765."""
import asyncio
from playwright.async_api import async_playwright
RAW = "(()=>{const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n,c=0;while(n=w.nextNode()){if(/《/.test(n.nodeValue)&&!n.parentElement.closest('script,style,textarea'))c++}return c})()"
ATTR = "[...document.querySelectorAll('*')].filter(e=>[...e.attributes].some(a=>/《/.test(a.value)&&!/^data-/.test(a.name))).length"
OVER = "document.documentElement.scrollWidth>innerWidth"
async def main():
    async with async_playwright() as p:
        br = await p.chromium.launch(); errors = []; bad = []
        for name, vp in [('phone', {'width': 390, 'height': 844}), ('small', {'width': 360, 'height': 640}), ('desk', {'width': 1280, 'height': 900})]:
            ctx = await br.new_context(viewport=vp, has_touch=(name != 'desk'), service_workers='block'); pg = await ctx.new_page()
            pg.on('pageerror', lambda e: errors.append(str(e)))
            await pg.goto('http://localhost:8765/index.html#/settings'); await pg.wait_for_timeout(900)
            en_items = await pg.evaluate("[...document.querySelectorAll('#railBody .nav-item')].length")
            await pg.locator('[data-lang="tl"]').first.click(); await pg.wait_for_timeout(600)
            await pg.screenshot(path=f'/tmp/qa-out/shell_{name}_settings.png')
            m = await pg.evaluate("(()=>{const it=[...document.querySelectorAll('#railBody .nav-item')];return {n:it.length,ja:it.filter(a=>a.querySelector('.nav-tx .nav-en')&&/[぀-ヿ㐀-鿿]/.test(a.querySelector('.nav-tx').textContent)).length,rj:[...document.querySelectorAll('#rail .rj, #tabbar .rj, .site-foot .rj')].filter(e=>e.offsetParent!==null).length,tabs:[...document.querySelectorAll('#tabbar span:not(.badge)')].map(s=>s.textContent).join('|'),tabH:document.getElementById('tabbar').offsetHeight}})()")
            raw, attr, over = await pg.evaluate(RAW), await pg.evaluate(ATTR), await pg.evaluate(OVER)
            ok = m['n'] == en_items and m['ja'] == m['n'] and m['rj'] == 0 and raw == 0 and attr == 0 and not over
            if name != 'desk':
                await pg.locator('#tabMore').click(); await pg.wait_for_timeout(450)
                d = await pg.evaluate("(()=>{const r=document.getElementById('rail');r.scrollTop=99999;const last=[...r.querySelectorAll('.nav-item')].pop();return {client:r.clientHeight,screen:innerHeight,lastBottom:Math.round(last.getBoundingClientRect().bottom)}})()")
                ok = ok and d['client'] <= d['screen'] and d['lastBottom'] <= d['screen']
                await pg.evaluate("document.getElementById('rail').scrollTop=0"); await pg.screenshot(path=f'/tmp/qa-out/shell_{name}_menu.png')
                await pg.locator('#navClose').click(); await pg.wait_for_timeout(300)
            print(f"{name}: items {m['ja']}/{m['n']} Japanese with English | tabs {m['tabs']} (bar {m['tabH']}px) | romaji shown {m['rj']} | rawNotation {raw} | attrs {attr} | overflow {over}")
            for route in ['#/', '#/more', '#/about', '#/lessons', '#/psych']:
                await pg.goto('http://localhost:8765/index.html' + route); await pg.wait_for_timeout(500)
                r2, o2 = await pg.evaluate(RAW), await pg.evaluate(OVER)
                if r2 or o2: ok = False; print('  ', route, 'rawNotation', r2, 'overflow', o2)
            await pg.evaluate("window.scrollTo(0, document.body.scrollHeight)"); await pg.wait_for_timeout(200); await pg.screenshot(path=f'/tmp/qa-out/shell_{name}_foot.png')
            await pg.reload(); await pg.wait_for_timeout(800)
            kept = await pg.evaluate("!!document.querySelector('#railBody .nav-tx')")
            await pg.goto('http://localhost:8765/index.html#/about'); await pg.wait_for_timeout(500)
            await pg.locator('[data-lang="en"]').first.click(); await pg.wait_for_timeout(500)
            back = await pg.evaluate("(()=>({tx:document.querySelectorAll('#railBody .nav-tx').length,menu:document.querySelector('.rail__title').textContent,more:document.querySelector('#tabMore span').textContent,foot:document.querySelector('[data-i18n=\"backup.export\"]').textContent}))()")
            ok = ok and kept and back['tx'] == 0 and back['menu'] == 'Menu' and back['more'] == 'More' and back['foot'] == 'Export backup'
            print(f"   kept after reload {kept} | back to English {back['tx'] == 0 and back['menu'] == 'Menu'}")
            if not ok: bad.append(name)
            await ctx.close()
        print('widths with problems', bad); print('errors', errors); await br.close()
asyncio.run(main())
