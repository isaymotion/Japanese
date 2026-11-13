"""usage: python3 drawer-any.py <port> <label>   measures the phone menu of the app served on <port>"""
import asyncio, sys
from playwright.async_api import async_playwright
port, label = sys.argv[1], sys.argv[2]
async def main():
    async with async_playwright() as p:
        br = await p.chromium.launch(); errors = []
        for name, vp in [('phone', {'width': 390, 'height': 844}), ('small', {'width': 360, 'height': 640}), ('tablet', {'width': 820, 'height': 1180})]:
            pg = await br.new_page(viewport=vp, has_touch=True); pg.on('pageerror', lambda e: errors.append(str(e)))
            await pg.goto(f'http://localhost:{port}/index.html#/'); await pg.wait_for_timeout(700)
            await pg.locator('#tabMore').click(); await pg.wait_for_timeout(450)
            m = await pg.evaluate("(()=>{const r=document.getElementById('rail');r.scrollTop=99999;const items=[...r.querySelectorAll('.nav-item')];const last=items.pop();return {client:r.clientHeight,content:r.scrollHeight,screen:innerHeight,scrolled:r.scrollTop,lastItem:last?last.textContent.trim():'',lastBottom:last?Math.round(last.getBoundingClientRect().bottom):0}})()")
            ok = m['client'] <= m['screen'] and m['lastBottom'] <= m['screen']
            hidden = 0 if ok else await pg.evaluate("(()=>[...document.querySelectorAll('#rail .nav-item')].filter(a=>a.getBoundingClientRect().top>innerHeight).length)()")
            print(f"{label} {name}: menu {m['client']}px on a {m['screen']}px screen, content {m['content']}px -> {'scrolls OK' if ok else 'BROKEN: cannot scroll, ' + str(hidden) + ' items off screen'} (last item: {m['lastItem']})")
            if name == 'phone': await pg.screenshot(path=f'/tmp/qa-out/drawer_{label}.png')
            await pg.close()
        print(label, 'errors', errors); await br.close()
asyncio.run(main())
