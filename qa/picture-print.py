"""QA for js/picture-print.js (0.24.0): the Print tab of a picture set and the body map (#/pictures/bodymap).
Runs three data modes: fixture (our own sets, art and body map served in place of the body data files), empty (all body data
blanked) and real (whatever the writers have now). Phone 390 and 360, desktop 1280; light and dark.
PDF page counts through page.pdf + pdfinfo: a set = 1 page, 2 with the key; the body map handout = 1 page.
Last line: errors [...]. Screenshots /tmp/qa-out/pprint_*.png."""
import asyncio, subprocess, os, re
from playwright.async_api import async_playwright
B = 'http://localhost:8765/index.html'
FX = open('/home/claude/work/fixtures/picture-print.js', encoding='utf-8').read()
OUT = '/tmp/qa-out'; os.makedirs(OUT, exist_ok=True)
errors = []

async def pages(pg, name):
    path = f'{OUT}/pprint_{name}.pdf'
    await pg.pdf(path=path, prefer_css_page_size=True, print_background=True)
    r = subprocess.run(['pdfinfo', path], capture_output=True, text=True).stdout
    m = re.search(r'Pages:\s+(\d+)', r); sz = re.search(r'Page size:\s+([^\n]+)', r)
    return int(m.group(1)) if m else -1, (sz.group(1).strip() if sz else '')

CHECK = """()=>({ov:document.documentElement.scrollWidth>innerWidth, raw:/《|》/.test(document.querySelector('#view').innerText)})"""

async def check(pg, label):
    r = await pg.evaluate(CHECK)
    if r['ov'] or r['raw']: errors.append(f'{label}: overflow {r["ov"]} raw notation {r["raw"]}')

async def do_print(pg, btn, label, want):
    await pg.evaluate("window.print=()=>{}")
    await pg.click(btn); await pg.wait_for_timeout(250)
    st = await pg.evaluate("({cls:document.documentElement.classList.contains('pp-print'), th:document.documentElement.getAttribute('data-theme')})")
    if not st['cls'] or st['th'] != 'light': errors.append(f'{label}: print class/theme {st}')
    await pg.emulate_media(media='print')
    n, sz = await pages(pg, label)
    await pg.emulate_media(media='screen')
    await pg.evaluate("window.dispatchEvent(new Event('afterprint'))")
    print(label, 'pdf pages', n, '| size', sz)
    if n != want: errors.append(f'{label}: {n} pages, want {want}')
    return sz

async def run(br, mode, name, vp, dark):
    ctx = await br.new_context(viewport=vp, color_scheme='dark' if dark else 'light', service_workers='block'); pg = await ctx.new_page()
    pg.on('console', lambda m: errors.append(f'{mode}/{name}: ' + m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errors.append(f'{mode}/{name}: ' + str(e)))
    if mode == 'fixture':
        await pg.route('**/js/data/picture-sets-body.js', lambda r: r.fulfill(body=FX, content_type='application/javascript'))
        for f in ('**/pictures/art-body.js', '**/js/data/picture-bodymap.js'):
            await pg.route(f, lambda r: r.fulfill(body='/* blank */', content_type='application/javascript'))
    if mode == 'empty':
        for f in ('**/js/data/picture-sets-*.js', '**/pictures/art-*.js'):
            await pg.route(f, lambda r: r.fulfill(body='/* blank */', content_type='application/javascript'))
        await pg.route('**/js/data/picture-bodymap.js', lambda r: r.fulfill(body='window.PICTURE_BODYMAP={};', content_type='application/javascript'))
    await pg.goto(B + '#/'); await pg.wait_for_timeout(500)
    if dark: await pg.evaluate("document.documentElement.setAttribute('data-theme','dark')")
    tag = f'{mode}_{name}_{"dark" if dark else "light"}'
    ids = await pg.evaluate("(window.PICTURE_SETS||[]).map(s=>s.id+'|'+s.kind)")
    diag = next((i.split('|')[0] for i in ids if i.endswith('|diagram')), None)
    card = next((i.split('|')[0] for i in ids if i.endswith('|cards')), None)
    # ---- print tab ----
    for sid in [x for x in (diag, card, 'fx-noart' if mode == 'fixture' else None) if x]:
        await pg.goto(B + f'#/pictures/{sid}?tab=print'); await pg.wait_for_timeout(450)
        if dark: await pg.evaluate("document.documentElement.setAttribute('data-theme','dark')")
        info = await pg.evaluate("""()=>{const p=document.querySelector('#ppPaper');return p?{pins:p.querySelectorAll('.pp-pin').length,lines:p.querySelectorAll('.pp-lines li, .pp-card').length,
            key:p.querySelectorAll('.pp-key li').length,svg:p.querySelectorAll('svg').length,foot:(p.querySelector('.pp-foot')||{}).textContent||''}:null}""")
        if not info: errors.append(f'{tag} {sid}: no paper'); continue
        print(tag, sid, info['pins'], 'pins', info['lines'], 'lines', info['key'], 'key rows', info['svg'], 'svg')
        if 'not yet reviewed by a native speaker' not in info['foot']: errors.append(f'{tag} {sid}: footer')
        await check(pg, f'{tag} {sid}')
        if name == 'phone' and not dark or sid == diag and name == 'phone':
            await pg.screenshot(path=f'{OUT}/pprint_{tag}_{sid}.png', full_page=True)
        if name == 'desk' and not dark:
            await do_print(pg, '#ppPrint', f'{tag}_{sid}_key', 2)
            # options: filled, furigana off, English off, no key, Letter
            for k, v in (('fill', 'filled'), ('furi', '0'), ('en', '0'), ('key', '0'), ('paper', 'LETTER')):
                await pg.click(f'[data-pp-set="{k}"][data-v="{v}"]'); await pg.wait_for_timeout(120)
            o = await pg.evaluate("App.state.settings.picPrint")
            st = await pg.evaluate("""()=>{const p=document.querySelector('#ppPaper');return {cls:p.className,filled:[...p.querySelectorAll('.pp-w')].some(x=>x.textContent.trim()),en:p.querySelectorAll('.pp-en').length,key:p.querySelectorAll('.pp-key').length,
               rt:[...p.querySelectorAll('rt')].filter(r=>getComputedStyle(r).display!=='none').length}}""")
            print(tag, sid, 'options', o, st)
            if not (st['filled'] and st['en'] == 0 and st['key'] == 0 and 'pp-nofu' in st['cls'] and st['rt'] == 0): errors.append(f'{tag} {sid}: options not applied {st}')
            sz = await do_print(pg, '#ppPrint', f'{tag}_{sid}_nokey', 1)
            if '612 x 792' not in sz: errors.append(f'{tag} {sid}: Letter size {sz}')
            await pg.reload(); await pg.wait_for_selector('#ppPaper', timeout=8000)
            if (await pg.evaluate("document.querySelector('#ppPaper').className")).find('pp-letter') < 0: errors.append(f'{tag}: options not remembered')
            for k, v in (('fill', 'blank'), ('furi', '1'), ('en', '1'), ('key', '1'), ('paper', 'A4')):
                await pg.click(f'[data-pp-set="{k}"][data-v="{v}"]'); await pg.wait_for_timeout(80)
    # ---- body map ----
    await pg.goto(B + '#/pictures/bodymap'); await pg.wait_for_timeout(500)
    if dark: await pg.evaluate("document.documentElement.setAttribute('data-theme','dark')")
    bm = await pg.evaluate("""()=>({dots:document.querySelectorAll('#view .pp-bm .pp-dot').length,figs:document.querySelectorAll('#view .pp-bm .pp-bm-fig').length,
        ask:document.querySelectorAll('.pp-bm-list li').length,chips:document.querySelectorAll('.pp-chip').length,notice:!!document.querySelector('.pp-bm .notice'),
        hit:(()=>{const d=document.querySelector('#view .pp-bm .pp-hit');if(!d)return 0;const r=d.getBoundingClientRect();return Math.round(Math.min(r.width,r.height))})(),
        paperVisible:getComputedStyle(document.querySelector('#ppBmPaper')).display!=='none'})""")
    print(tag, 'bodymap', bm)
    if bm['paperVisible']: errors.append(f'{tag}: handout visible on screen')
    if bm['dots'] and bm['hit'] < 44 and name != 'desk': errors.append(f'{tag}: pin hit area {bm["hit"]}px')
    if mode == 'empty' and not bm['notice']: errors.append(f'{tag}: no empty notice')
    if bm['dots']:
        await pg.evaluate("window.__spoken=[];App.speak=(t,x)=>{window.__spoken.push(t);};0")
        await pg.locator('#view .pp-bm .pp-dot').nth(1).click(); await pg.wait_for_timeout(150)
        sh = await pg.evaluate("({t:document.querySelector('#ppBmShow').innerText, on:document.querySelectorAll('.pp-dot.on').length, sp:window.__spoken.slice(), big:!!document.querySelector('#ppBmShow .pp-bm-ja ruby, #ppBmShow .pp-bm-ja')})")
        print(tag, 'tap pin ->', sh['t'].replace('\n', ' / ')[:60], '| spoken', sh['sp'])
        if not sh['sp'] or sh['on'] != 1 or not sh['big']: errors.append(f'{tag}: pin tap {sh}')
        await pg.locator('#view .pp-bm .pp-dot').nth(0).focus(); await pg.keyboard.press('Enter'); await pg.wait_for_timeout(100)
        await pg.keyboard.press(' '); await pg.wait_for_timeout(100)
        if len(await pg.evaluate("window.__spoken")) < 3: errors.append(f'{tag}: keyboard on pin')
        if bm['chips']:
            await pg.locator('.pp-chip').nth(2).click(); await pg.wait_for_timeout(80)
            if len(await pg.evaluate("window.__spoken")) < 4: errors.append(f'{tag}: chip did not speak')
            if (await pg.evaluate("[...document.querySelectorAll('.pp-chip')].reduce((a,c)=>Math.min(a,c.getBoundingClientRect().height),99)")) < 44: errors.append(f'{tag}: chip too small')
        lab = await pg.evaluate("document.querySelector('#view .pp-bm .pp-dot').getAttribute('aria-label')")
        if '《' in (lab or ''): errors.append(f'{tag}: notation in aria-label')
    stored = await pg.evaluate("JSON.stringify(App.state).length")
    await check(pg, f'{tag} bodymap')
    if name != 'desk' or not dark: await pg.screenshot(path=f'{OUT}/pprint_{tag}_bodymap.png', full_page=True)
    if name == 'desk' and not dark:
        await do_print(pg, '#ppBmPrint', f'{tag}_bodymap_a4', 1)
        await pg.click('[data-pp-set="paper"][data-v="LETTER"]'); await pg.wait_for_timeout(150)
        await do_print(pg, '#ppBmPrint', f'{tag}_bodymap_letter', 1)
        await pg.click('[data-pp-set="paper"][data-v="A4"]'); await pg.wait_for_timeout(100)
        if mode == 'fixture':
            await pg.emulate_media(media='print'); await pg.evaluate("document.documentElement.classList.add('pp-print')")
            await pg.screenshot(path=f'{OUT}/pprint_{tag}_bodymap_print.png', full_page=True)
            await pg.evaluate("document.documentElement.classList.remove('pp-print')"); await pg.emulate_media(media='screen')
    await ctx.close()

async def main():
    async with async_playwright() as p:
        br = await p.chromium.launch()
        for mode in ('fixture', 'empty', 'real'):
            for name, vp in (('phone', {'width': 390, 'height': 844}), ('small', {'width': 360, 'height': 740}), ('desk', {'width': 1280, 'height': 900})):
                for dark in (False, True):
                    if mode != 'fixture' and name == 'small': continue
                    await run(br, mode, name, vp, dark)
        await br.close()
    print('errors', errors)
asyncio.run(main())
