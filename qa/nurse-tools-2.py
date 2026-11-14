"""Nurse tools 2 (0.19.0): Nurse view of the Mood episode checker (#/psych/mood) and the MSE interviewer sheet
(#/psych/mse-sheet) at 390 and 1280 px, light and dark; backup summary with the practice-score count.
Data: PSYCH_NURSE_TOOLS.mood / .admit from js/data/psych-nurse-tools-2.js; while that is empty, fixtures/nurse-tools-2.js
is injected (real data wins). Checks: no switch without data, switch shows, steps render with speak buttons, no raw 《,
no overflow, English toggle, register toggle, back to Resident shows the original page (tabs / print button).
Port: QA_PORT env or first argument (default 8765). Screenshots /tmp/qa-out/nt2_*.png. Expect "errors []" last."""
import asyncio, os, sys
from playwright.async_api import async_playwright
PORT = (sys.argv[1] if len(sys.argv) > 1 else os.environ.get('QA_PORT', '8765'))
B = f'http://localhost:{PORT}/index.html'
FIX = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'fixtures', 'nurse-tools-2.js')
os.makedirs('/tmp/qa-out', exist_ok=True)
PAGES = [('mood', 'mood', '#view [data-tab="mde"]'), ('mse-sheet', 'admit', '#view #msPrint')]
STAT = """()=>{const v=document.querySelector('#view');return {ov:document.documentElement.scrollWidth>innerWidth, raw:/[《》]/.test(v.innerText),
  role:v.querySelectorAll('[data-role]').length, steps:v.querySelectorAll('.nt-step').length, say:v.querySelectorAll('.nt-step .say').length,
  en:[...v.querySelectorAll('.nt-step .dz-line > div > .small.muted:not(.tl)')].length, esc:v.querySelectorAll('.notice.info b').length,
  first:(v.querySelector('.nt-step .dz-tl')||{}).textContent||'', card:!!v.querySelector('a[href="#/psych/handout?nursecard=1"]')}}"""

async def main():
    async with async_playwright() as p:
        br = await p.chromium.launch(); errors = []
        for name, vp in [('phone', {'width': 390, 'height': 844}), ('desk', {'width': 1280, 'height': 900})]:
            for scheme in ['light', 'dark']:
                ctx = await br.new_context(viewport=vp, color_scheme=scheme); pg = await ctx.new_page()
                pg.on('console', lambda m: errors.append(m.text) if m.type == 'error' and '403' not in m.text else None)
                pg.on('pageerror', lambda e: errors.append(str(e)))
                await pg.goto(B + '#/'); await pg.wait_for_timeout(500)
                await pg.evaluate("App.state.settings.role='resident';App.state.settings.register='f';App.state.settings.nurseEn=true;App.save()")
                tag = f'{name}/{scheme}'
                real = await pg.evaluate("(()=>{const T=window.PSYCH_NURSE_TOOLS||{};return {mood:((T.mood||{}).steps||[]).length, admit:((T.admit||{}).steps||[]).length}})()")
                for page, key, orig in PAGES:
                    if not real[key]:  # no data: the page must be unchanged (no switch)
                        await pg.goto(B + '#/psych/' + page); await pg.wait_for_timeout(400)
                        r = await pg.evaluate(STAT)
                        if r['role']: errors.append(f'{tag} {page}: switch shown without data')
                await pg.add_script_tag(path=FIX)
                for page, key, orig in PAGES:
                    await pg.goto(B + '#/home'); await pg.goto(B + '#/psych/' + page); await pg.wait_for_timeout(500)
                    r = await pg.evaluate(STAT); has_orig = await pg.locator(orig).count()
                    out = [f"{tag} {page} ({'real' if real[key] else 'fixture'}) resident: switch {r['role']} orig {has_orig} ov {r['ov']} raw {r['raw']}"]
                    if not r['role'] or not has_orig: errors.append(f'{tag} {page}: resident view missing switch or original content')
                    await pg.locator('#view [data-role="nurse"]').click(); await pg.wait_for_timeout(400)
                    r = await pg.evaluate(STAT); polite, en_on = r['first'], r['en']
                    out.append(f"nurse: steps {r['steps']} say {r['say']} en {r['en']} escalate {r['esc']} card {r['card']} orig {await pg.locator(orig).count()} ov {r['ov']} raw {r['raw']}")
                    if r['steps'] < 2 or r['say'] < r['steps'] or r['ov'] or r['raw'] or not r['card'] or await pg.locator(orig).count():
                        errors.append(f'{tag} {page}: nurse view {r}')
                    await pg.screenshot(path=f'/tmp/qa-out/nt2_{page}_{name}_{scheme}.png', full_page=False)
                    await pg.locator('#ntEn').uncheck(); await pg.wait_for_timeout(250)
                    r = await pg.evaluate(STAT); out.append(f"en off {r['en']}")
                    if r['en'] != 0 or not en_on: errors.append(f'{tag} {page}: English toggle {en_on}->{r["en"]}')
                    await pg.locator('#ntEn').check(); await pg.wait_for_timeout(250)
                    await pg.locator('#view [data-nreg="c"]').click(); await pg.wait_for_timeout(300)
                    r = await pg.evaluate(STAT); out.append(f"plain changes line {polite != r['first']} raw {r['raw']} ov {r['ov']}")
                    if polite == r['first'] or r['raw'] or r['ov']: errors.append(f'{tag} {page}: register toggle')
                    await pg.locator('#view .nt-step .say').first.click(); await pg.wait_for_timeout(200)
                    await pg.locator('#view [data-nreg="f"]').click(); await pg.wait_for_timeout(200)
                    await pg.locator('#view [data-role="resident"]').click(); await pg.wait_for_timeout(400)
                    r = await pg.evaluate(STAT); has_orig = await pg.locator(orig).count()
                    out.append(f"back: orig {has_orig} steps {r['steps']} ov {r['ov']} raw {r['raw']}")
                    if not has_orig or r['steps'] or r['ov'] or r['raw']: errors.append(f'{tag} {page}: back to Resident')
                    if page == 'mood':
                        await pg.locator('#view [data-tab="man"]').click(); await pg.wait_for_timeout(200)
                    print(' | '.join(out))
                await ctx.close()
        # backup summary with practice scores
        pg = await br.new_page(viewport={'width': 390, 'height': 844})
        pg.on('pageerror', lambda e: errors.append(str(e)))
        await pg.goto(B + '#/'); await pg.wait_for_timeout(500)
        await pg.evaluate("""()=>{const d=App.state.done; d.vocab={'n5:meaning':80,'n5:recall':60,'match:body':{m:1,t:40}}; d.listen2={'hear:n5':90,'story:case-a':70};
          d.numbers={'mixed:read':50,'clinic':100}; App.save(); App.backup.paint();}""")
        s1 = await pg.evaluate("App.backup.summary()"); meta = await pg.locator('#bk-meta').inner_text()
        await pg.evaluate("()=>{const d=App.state.done; delete d.vocab; delete d.listen2; delete d.numbers; App.save(); App.backup.paint();}")
        s0 = await pg.evaluate("App.backup.summary()")
        tl = await pg.evaluate("STRINGS.tl['backup.sumPractice']||'MISSING'")
        print('backup with scores:', s1, '| footer:', meta)
        print('backup without keys:', s0, '| tl string:', tl)
        if tl == 'MISSING': errors.append('tl backup.sumPractice missing')
        if '7 practice scores' not in s1 or '7 practice scores' not in meta: errors.append('backup summary count: ' + s1)
        if 'practice' in s0: errors.append('backup summary without keys: ' + s0)
        await br.close()
        print('errors', errors)
asyncio.run(main())
