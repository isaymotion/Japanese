"""Nurse tools (0.18.0): De-escalation and Discharge pages in Resident and Nurse role at 390 and 1280 px, light and dark;
role switch shows the nurse script and back, register switch swaps polite/plain, speak buttons, no console errors,
no overflow, no raw notation. Nurse pocket card prints to A6 PDF (page count). Expect "errors []".
Screenshots /tmp/qa-out/nt_*.png, PDF /tmp/qa-out/nt_nursecard.pdf."""
import asyncio, subprocess, os
from playwright.async_api import async_playwright
import os as _os
PORT = _os.environ.get('QA_PORT', '8765')
B = 'http://localhost:' + PORT + '/index.html'
os.makedirs('/tmp/qa-out', exist_ok=True)
async def main():
    async with async_playwright() as p:
        br = await p.chromium.launch(); errors = []
        for name, vp in [('phone', {'width': 390, 'height': 844}), ('desk', {'width': 1280, 'height': 900})]:
            for scheme in ['light', 'dark']:
                ctx = await br.new_context(viewport=vp, color_scheme=scheme); pg = await ctx.new_page()
                pg.on('console', lambda m: errors.append(m.text) if m.type == 'error' and '403' not in m.text else None)
                pg.on('pageerror', lambda e: errors.append(str(e)))
                await pg.goto(B + '#/'); await pg.wait_for_timeout(500)
                await pg.evaluate("App.state.settings.role='resident';App.state.settings.register='f';App.save()")
                async def stat():
                    return await pg.evaluate("""()=>({ov:document.documentElement.scrollWidth>innerWidth, raw:/[《》]/.test(document.querySelector('#view').innerText),
                      steps:document.querySelectorAll('.nt-step').length, say:document.querySelectorAll('#view .nt-step .say').length,
                      first:(document.querySelector('.nt-step .dz-tl')||{}).textContent||'', tabs:document.querySelectorAll('.dz-tabs, .ds-nav').length})""")
                for page in ['deesc', 'discharge']:
                    await pg.goto(B + '#/psych/' + page); await pg.wait_for_timeout(500)
                    r = await stat(); out = [f"{name}/{scheme} {page} resident: tabs {r['tabs']} steps {r['steps']} ov {r['ov']} raw {r['raw']}"]
                    await pg.locator('#view [data-role="nurse"]').click(); await pg.wait_for_timeout(400)
                    r = await stat(); polite = r['first']
                    out.append(f"nurse: steps {r['steps']} say {r['say']} tabs {r['tabs']} ov {r['ov']} raw {r['raw']}")
                    await pg.screenshot(path=f'/tmp/qa-out/nt_{page}_{name}_{scheme}.png', full_page=False)
                    await pg.locator('#view [data-nreg="c"]').click(); await pg.wait_for_timeout(300)
                    r = await stat(); out.append(f"plain changes line {polite != r['first']} raw {r['raw']}")
                    await pg.locator('#ntEn').uncheck(); await pg.wait_for_timeout(200)
                    await pg.locator('#ntEn').check(); await pg.wait_for_timeout(200)
                    await pg.locator('#view .nt-step .say').first.click(); await pg.wait_for_timeout(200)
                    await pg.locator('#view [data-nreg="f"]').click(); await pg.wait_for_timeout(200)
                    await pg.locator('#view [data-role="resident"]').click(); await pg.wait_for_timeout(300)
                    r = await stat(); out.append(f"back: tabs {r['tabs']} steps {r['steps']}")
                    if page == 'deesc' and r['tabs']:
                        await pg.locator('[data-tab="drill"]').click(); await pg.wait_for_timeout(200)
                        await pg.locator('[data-tab="check"]').click(); await pg.wait_for_timeout(200)
                    if page == 'discharge' and r['tabs']:
                        await pg.locator('.ds-chip').nth(1).click(); await pg.wait_for_timeout(200)
                    print(' | '.join(out))
                await ctx.close()
        # nurse pocket card
        pg = await br.new_page(viewport={'width': 390, 'height': 844})
        pg.on('console', lambda m: errors.append(m.text) if m.type == 'error' and '403' not in m.text else None)
        pg.on('pageerror', lambda e: errors.append(str(e)))
        await pg.goto(B + '#/psych/handout?nursecard=1'); await pg.wait_for_timeout(800)
        await pg.evaluate("window.print=()=>{window.__printed=(window.__printed||0)+1}")
        r = await pg.evaluate("""()=>({cards:document.querySelectorAll('.nc-card').length, lines:document.querySelectorAll('.nc-line').length, ruby:document.querySelectorAll('#hoPaper ruby').length,
          overA6:[...document.querySelectorAll('.nc-card')].map(c=>Math.round(c.offsetHeight-c.offsetWidth*148/105)), raw:/[《》]/.test(document.querySelector('#view').innerText), ov:document.documentElement.scrollWidth>innerWidth,
          preset:(document.querySelector('.ho-preset.on b')||{}).textContent})""")
        print('nursecard', r)
        await pg.screenshot(path='/tmp/qa-out/nt_card_phone.png', full_page=True)
        await pg.locator('#hoPrint').click()
        print('pagecss', await pg.evaluate("document.getElementById('pagecss').textContent"))
        await pg.emulate_media(media='print')
        await pg.pdf(path='/tmp/qa-out/nt_nursecard.pdf', prefer_css_page_size=True, print_background=True)
        info = subprocess.run(['pdfinfo', '/tmp/qa-out/nt_nursecard.pdf'], capture_output=True, text=True).stdout
        print('pdf', ' | '.join(' '.join(l.split()) for l in info.split('\n') if l.startswith('Pages') or l.startswith('Page size')))
        await pg.emulate_media(media='screen')
        # preset button and switching away resets the card
        await pg.locator('[data-preset="full"]').click(); await pg.wait_for_timeout(300)
        print('after full preset: nc cards', await pg.locator('.nc-card').count(), 'paper', await pg.evaluate("document.getElementById('hoPaper').className"))
        await pg.locator('[data-preset="nursecard"]').click(); await pg.wait_for_timeout(300)
        print('nursecard preset: nc cards', await pg.locator('.nc-card').count())
        await pg.locator('[data-preset="deesccard"]').click(); await pg.wait_for_timeout(300)
        print('deesccard preset: hc cards', await pg.locator('.hc-card').count(), 'nc', await pg.locator('.nc-card').count())
        print('errors', errors)
        await br.close()
asyncio.run(main())
