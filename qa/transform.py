"""Transform the sentence (#/transform): typed-answer matcher, fixture rounds in Choose and Type (right, wrong, hint), filters,
mistakes round, score on #/progress, empty data, real data smoke test, phone + desktop, light + dark. Prints "errors [...]" last."""
import os, json
_HERE = os.path.dirname(os.path.abspath(__file__))
FXD = next((d for d in (os.path.join(_HERE, 'fixtures-0.23'), os.path.join(_HERE, '..', 'fixtures')) if os.path.isdir(d)), None)   # devtools/qa/fixtures-0.23 or work/fixtures
from playwright.sync_api import sync_playwright

BASE = 'http://localhost:' + os.environ.get('QA_PORT', '8765') + '/index.html'
OUT = '/tmp/qa-out'
FX = open(os.path.join(FXD, 'transform.js'), encoding='utf-8').read().replace('window.GRAMMAR_TRANSFORM =', 'window.__FX =', 1)
os.makedirs(OUT, exist_ok=True)
errs = []

def run(p, name, vp, scheme, full):
    b = p.chromium.launch()
    ctx = b.new_context(viewport=vp, color_scheme=scheme)
    ctx.add_init_script(FX)
    pg = ctx.new_page()
    pg.on('console', lambda m: errs.append(name + ': ' + m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(name + ': ' + str(e)))
    pg.goto(BASE + '#/transform'); pg.wait_for_timeout(1200)
    pg.evaluate("""()=>{App.speak=(t,op)=>{(window._said=window._said||[]).push(t);App._seq=(App._seq||0)+1}}""")
    def go(h):
        pg.evaluate("h=>{location.hash=h}", h); pg.wait_for_timeout(350)
    def check(label):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: errs.append(f'{name} {label}: overflow={ov} raw={raw}')

    real = pg.evaluate("(window.GRAMMAR_TRANSFORM||[]).length")
    if full:
        # real data smoke test: page draws, a Choose item renders
        print(name, 'real items', real)
        if real:
            pg.locator('[data-tm="choose"]').click(); pg.locator('[data-tl="all"]').click(); pg.wait_for_timeout(100)
            if pg.locator('#trgo').is_enabled():
                pg.locator('#trgo').click(); pg.wait_for_timeout(150)
                if pg.locator('#tr .opt').count() != 4: errs.append(f'{name}: real data choose opts {pg.locator("#tr .opt").count()}')
                check('real')
        # matcher
        M = pg.evaluate("""()=>{const t='今日《きょう》 は 行《い》きません。', f=App.transformMatches;
          return [f('きょうはいきません',t), f('今日は行きません。',t), f('きょう は 行きません',t), f('kyou wa ikimasen',t), f('kyouha ikimasen.',t),
                  f('Kyō wa ikimasen',t), f('きょうはいきます',t), f('kyou wa ikimasu',t), f('キョウハイキマセン',t), f('',t)]}""")
        print(name, 'matcher', M)
        if M != [True, True, True, True, True, True, False, False, True, False]: errs.append(f'matcher {M}')

    # fixture only from here
    pg.evaluate("()=>{window.GRAMMAR_TRANSFORM=window.__FX}")
    go('#/practice'); go('#/transform')
    lv = pg.evaluate("[...document.querySelectorAll('[data-tl]')].map(b=>b.dataset.tl)")
    grp = pg.evaluate("[...document.querySelectorAll('[data-tg]')].map(b=>b.textContent)")
    if full: print(name, 'levels', lv, 'groups', grp)
    if lv != ['all', 'N5', 'N4', 'N3', 'N2']: errs.append(f'{name}: levels {lv}')
    # filters: each level × group has a count
    for l in lv:
        pg.locator(f'[data-tl="{l}"]').click(); pg.wait_for_timeout(60)
        gs = pg.evaluate("[...document.querySelectorAll('[data-tg]')].map(b=>b.dataset.tg)")
        for g in gs:
            pg.locator(f'[data-tg="{g}"]').click(); pg.wait_for_timeout(40)
            n = int(pg.locator('#trset p.small').inner_text().split(' ')[0])
            if n < 1: errs.append(f'{name}: empty filter {l} {g}')
        pg.locator('[data-tg="all"]').click()
    check('settings')
    pg.screenshot(path=f'{OUT}/transform_settings_{name}.png', full_page=True)
    item = lambda: pg.evaluate("()=>{const id=document.querySelector('[data-tid]').dataset.tid;return window.__FX.find(x=>x.id===id)}")

    # ---- Choose round, all levels, 10 items: q1 wrong (by key), rest right (keys 1-4) ----
    pg.locator('[data-tl="all"]').click(); pg.locator('[data-tm="choose"]').click(); pg.locator('[data-tc="10"]').click()
    pg.locator('#trgo').click(); pg.wait_for_timeout(150)
    n = 0; exp = 0
    while pg.locator('#tr .opt').count() and n < 12:
        x = item()
        opts = pg.evaluate("[...document.querySelectorAll('#tr .opt')].map(b=>b.dataset.k)")
        k = pg.evaluate("""(to)=>{const b=[...document.querySelectorAll('#tr .opt')];return b.findIndex(o=>{const c=o.cloneNode(true);c.querySelectorAll('rt,.rj,.tr-key').forEach(r=>r.remove());return c.textContent.replace(/\\s/g,'')===JA.speak(to).replace(/\\s/g,'')})}""", x['to'])
        if k < 0: errs.append(f'{name}: model not among options {x["id"]}'); break
        if len(set(opts)) != 4: errs.append(f'{name}: options {opts}')
        pg.evaluate("window._said=[]")
        if n == 0:
            pg.keyboard.press(str((k + 1) % 4 + 1))
            if 'Not quite' not in pg.locator('#trfb').inner_text(): errs.append(f'{name}: choose wrong not marked')
            pg.screenshot(path=f'{OUT}/transform_choose_wrong_{name}.png', full_page=True)
        else:
            pg.keyboard.press(str(k + 1)) if n % 2 else pg.locator(f'#tr .opt[data-k="{k}"]').click()
            exp += 1
            if 'Correct' not in pg.locator('#trfb').inner_text(): errs.append(f'{name}: choose right not marked')
            if n == 1: pg.screenshot(path=f'{OUT}/transform_choose_right_{name}.png', full_page=True)
        # speaker buttons only for from / to / alt
        says = pg.evaluate("[...document.querySelectorAll('#tr .say')].map(b=>b.dataset.say)")
        okset = set((x['from'] if isinstance(x['from'], list) else [x['from']]) + [x['to']] + x.get('alt', []))
        if any(s not in okset for s in says): errs.append(f'{name}: a wrong sentence has a speaker')
        if any(w in says for w in x['wrong']): errs.append(f'{name}: wrong sentence speakable')
        if x.get('l') and not pg.locator('#trfb a[href^="#/lessons/"]').count(): errs.append(f'{name}: no lesson link {x["id"]}')
        check(f'choose q{n}')
        pg.keyboard.press('Enter') if n == 2 else pg.locator('#trnext').click()
        pg.wait_for_timeout(60); n += 1
    score = pg.locator('#tr h3').inner_text()
    print(name, 'choose round', score, 'expected', exp)
    if not score.startswith(f'{exp} /'): errs.append(f'{name}: choose score {score}')

    # ---- Type round, N5 ----
    pg.locator('[data-tm="type"]').click(); pg.locator('[data-tl="N5"]').click(); pg.wait_for_timeout(80)
    pg.locator('#trgo').click(); pg.wait_for_timeout(150)
    n = 0; exp = 0
    while pg.locator('#trtype').count() and n < 12:
        x = item()
        if n == 0:   # wrong: the from sentence typed back
            fr = x['from'] if isinstance(x['from'], str) else x['from'][0]
            typed = pg.evaluate("t=>JA.compact(JA.kana(t))", fr)
            pg.fill('#trtype', typed); pg.keyboard.press('Enter')
            fb = pg.locator('#trfb').inner_text()
            if 'Not quite' not in fb or not pg.locator('#trfb mark.tr-diff').count(): errs.append(f'{name}: type wrong / hint missing')
            if typed and any(typed == s for s in pg.evaluate("window._said||[]")): errs.append(f'{name}: typed wrong answer spoken')
            pg.screenshot(path=f'{OUT}/transform_type_wrong_{name}.png', full_page=True)
        else:
            t = x['to'] if n % 2 else (x.get('alt') or [x['to']])[0]
            typed = pg.evaluate("t=>JA.romaji(t)", t) if n % 3 == 0 else pg.evaluate("t=>JA.compact(JA.kana(t))", t)
            pg.fill('#trtype', typed); pg.locator('#trcheck').click()
            exp += 1
            if 'Correct' not in pg.locator('#trfb').inner_text(): errs.append(f'{name}: typed right not accepted: {typed} for {x["id"]}')
            if n == 1: pg.screenshot(path=f'{OUT}/transform_type_right_{name}.png', full_page=True)
        check(f'type q{n}')
        pg.locator('#trnext').click(); pg.wait_for_timeout(60); n += 1
    score = pg.locator('#tr h3').inner_text()
    print(name, 'type round', score, 'expected', exp)
    if not score.startswith(f'{exp} /'): errs.append(f'{name}: type score {score}')
    st = pg.evaluate("JSON.stringify(Object.fromEntries(Object.entries(App.state.done.transform).map(([k,v])=>[k,Array.isArray(v)?v.length:v])))")
    print(name, 'stored', st)

    # ---- mistakes round ----
    if pg.locator('#trmiss2').count():
        pg.locator('#trmiss2').click(); pg.wait_for_timeout(100); k = 0
        while pg.locator('#trtype').count() and k < 12:
            x = item(); pg.fill('#trtype', pg.evaluate("t=>JA.compact(JA.kana(t))", x['to'])); pg.locator('#trcheck').click()
            pg.locator('#trnext').click(); pg.wait_for_timeout(50); k += 1
        left = pg.evaluate("App.state.done.transform.miss.length")
        print(name, 'mistakes round', k, 'items; left', left)
        if left: errs.append(f'{name}: mistakes left {left}')
    else: errs.append(f'{name}: no mistakes button')

    # ---- progress ----
    go('#/progress'); pg.wait_for_timeout(300)
    blk = pg.evaluate("[...document.querySelectorAll('.ps-block')].map(b=>b.innerText).find(t=>t.startsWith('Transform'))||''")
    print(name, 'progress:', blk.replace('\n', ' ').replace('\t', ' ')[:90])
    if 'N5' not in blk or 'All levels' not in blk: errs.append(f'{name}: progress block {blk[:60]}')
    check('progress')

    # ---- empty ----
    pg.evaluate("()=>{window.GRAMMAR_TRANSFORM=[]}")
    go('#/transform')
    emp = pg.locator('#trset .notice').inner_text() if pg.locator('#trset .notice').count() else ''
    if 'No items yet' not in emp: errs.append(f'{name}: empty state')
    pg.screenshot(path=f'{OUT}/transform_empty_{name}.png')
    check('empty')
    b.close()

with sync_playwright() as p:
    run(p, 'phone-light', {'width': 390, 'height': 844}, 'light', True)
    run(p, 'phone-dark', {'width': 390, 'height': 844}, 'dark', False)
    run(p, 'desk-light', {'width': 1280, 'height': 900}, 'light', False)
    run(p, 'desk-dark', {'width': 1280, 'height': 900}, 'dark', False)
print('errors', errs)
