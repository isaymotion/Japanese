"""0.23.0 Fill the blank (#/cloze). Fixture /home/claude/work/fixtures/cloze.js replaces GRAMMAR_CLOZE after load.
Phone 390 and desktop 1280, light and dark: Mixed (levels, 10/20, right and wrong, keyboard 1-4 + Enter), By lesson list,
lesson round (?l=), ?lv= link, mistakes round + mistakes first, score saved and on #/progress, lesson page link,
empty-data state. Last line: errors [...]"""
import os
_HERE = os.path.dirname(os.path.abspath(__file__))
FXD = next((d for d in (os.path.join(_HERE, 'fixtures-0.23'), os.path.join(_HERE, '..', 'fixtures')) if os.path.isdir(d)), None)   # devtools/qa/fixtures-0.23 or work/fixtures
from playwright.sync_api import sync_playwright
URL = 'http://localhost:' + os.environ.get('QA_PORT', '8765') + '/index.html'
FIX = os.path.join(FXD, 'cloze.js')
os.makedirs('/tmp/qa-out', exist_ok=True)
problems = []

def run(b, w, h, name, dark=False):
    ctx = b.new_context(viewport={'width': w, 'height': h}, color_scheme='dark' if dark else 'light')
    pg = ctx.new_page()
    errs = []
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(URL + '#/'); pg.wait_for_timeout(400)
    pg.evaluate("()=>{localStorage.clear()}"); pg.reload(); pg.wait_for_timeout(500)
    pg.add_script_tag(path=FIX)
    def go(hh): pg.evaluate("h=>{location.hash=h}", hh); pg.wait_for_timeout(300)
    def check(tag):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: problems.append(f'{name} {tag} overflow={ov} raw={raw}')
    def answer_round(tag, pattern, shot=None, keys=False):
        """pattern(i) -> True to answer right. Returns the score heading."""
        for i in range(25):
            if pg.locator('.cz-done').count(): break
            sent_rj = pg.locator('.cz-q .cz-sent .rj').count()
            if sent_rj: problems.append(f'{name} {tag} romaji on blank sentence')
            if pg.locator('.cz-q [data-fb] .say').count(): problems.append(f'{name} {tag} sound before answer')
            ok = pattern(i)
            idx = pg.evaluate("""ok=>{const q=document.querySelector('.cz-q'),opts=[...q.querySelectorAll('.opt')];
                const it=GRAMMAR_CLOZE.find(x=>x.id===q.dataset.id);
                const n=opts.findIndex(o=>it.opts[+o.dataset.k]===it.a);
                return ok?n:(n===0?1:0);}""", ok)
            if shot and i == 0: pg.screenshot(path=f'/tmp/qa-out/cloze_{shot}_q_{name}.png', full_page=True)
            if keys: pg.keyboard.press(str(idx + 1))
            else: pg.locator('.cz-q .opt').nth(idx).click()
            pg.wait_for_timeout(80)
            fb = pg.locator('.cz-q .feedback')
            if not fb.count(): problems.append(f'{name} {tag} q{i} no feedback'); break
            cls = fb.get_attribute('class')
            if ok and 'ok' not in cls.split(): problems.append(f'{name} {tag} q{i} right answer not marked ok')
            if not ok and 'no' not in cls.split(): problems.append(f'{name} {tag} q{i} wrong answer not marked')
            if pg.locator('.cz-q .cz-full .say').count() != 1: problems.append(f'{name} {tag} q{i} no speaker on full sentence')
            said = pg.evaluate("()=>document.querySelector('.cz-full .say').dataset.say")
            if '＿' in said: problems.append(f'{name} {tag} speaker text still has blank')
            if shot and i == (0 if not ok else 1): pg.screenshot(path=f'/tmp/qa-out/cloze_{shot}_fb_{name}.png', full_page=True)
            check(f'{tag} q{i}')
            if keys: pg.keyboard.press('Enter')
            else: pg.locator('[data-act=next]').click()
            pg.wait_for_timeout(60)
        hd = pg.locator('.cz-done h3')
        return hd.inner_text() if hd.count() else '(no score)'

    go('#/cloze'); check('mixed')
    pg.screenshot(path=f'/tmp/qa-out/cloze_mixed_{name}.png', full_page=True)
    lvs = pg.evaluate("[...document.querySelectorAll('[data-lv]')].map(b=>b.dataset.lv)")
    print(name, 'levels', lvs)
    # 0.28.0: a level is offered only when it has items (N1 has none in 0.28.0)
    want = pg.evaluate("['N5','N4','N3','N2','N1'].filter(l=>(window.GRAMMAR_CLOZE||[]).some(x=>x&&x.lv===l))")
    if [x for x in lvs if x != 'all'] != want: problems.append(f'{name} levels {lvs} but items at {want}')
    for lv in lvs:
        pg.locator(f'[data-lv="{lv}"]').click(); pg.wait_for_timeout(80); check('lv ' + lv)
    pg.locator('[data-lv="all"]').click(); pg.locator('[data-n="10"]').click(); pg.wait_for_timeout(60)
    pg.locator('#czgo').click(); pg.wait_for_timeout(100)
    sc = answer_round('mixed all', lambda i: i % 3 != 0, shot='mixed')
    print(' mixed all ->', sc, '| best', pg.evaluate("App.state.done.cloze.all"), 'miss', len(pg.evaluate("App.state.done.cloze.miss")))
    # keyboard round at N5
    pg.locator('#czback').click() if pg.locator('#czback').count() else None
    pg.locator('[data-lv="N5"]').click(); pg.wait_for_timeout(60); pg.locator('#czgo').click(); pg.wait_for_timeout(100)
    sc = answer_round('keys N5', lambda i: True, keys=True)
    print(' keyboard N5 ->', sc, '| best', pg.evaluate("App.state.done.cloze.N5"), '| remembered lv', pg.evaluate("App.state.settings.clozeLv"))
    # mistakes round + mistakes first
    go('#/practice'); go('#/cloze'); pg.locator('[data-lv="all"]').click(); pg.wait_for_timeout(60)
    nm = pg.locator('#czmiss')
    print(' mistakes button', nm.inner_text() if nm.count() else None)
    if nm.count():
        before = len(pg.evaluate("App.state.done.cloze.miss"))
        nm.click(); pg.wait_for_timeout(100)
        sc = answer_round('mistakes', lambda i: True, shot='miss' if name == 'phone' else None)
        print(' mistakes round ->', sc, '| miss', before, '->', len(pg.evaluate("App.state.done.cloze.miss")))
    else: problems.append(f'{name} no mistakes button')
    # mistakes first: make two misses, then start with the box on and check the first question is one of them
    pg.evaluate("()=>{App.state.done.cloze.miss=['fx-n3-002','fx-n2-001'];App.save()}")
    go('#/practice'); go('#/cloze'); pg.locator('[data-lv="all"]').click(); pg.wait_for_timeout(60)
    if not pg.locator('#czmf').is_checked(): pg.locator('#czmf').check()
    pg.locator('#czgo').click(); pg.wait_for_timeout(100)
    s0 = pg.evaluate("JA.textOf(document.querySelector('.cz-sent')).replace(/\\s+/g,'')")
    first_ok = s0.startswith('練習') or s0.startswith('年')
    print(' mistakes first ->', first_ok)
    if not first_ok: problems.append(f'{name} mistakes first did not put a miss first: {s0}')
    # 20 seg
    go('#/practice'); go('#/cloze'); pg.locator('[data-n="20"]').click(); pg.wait_for_timeout(60)
    print(' count 20 remembered', pg.evaluate("App.state.settings.clozeCount"))
    pg.locator('[data-n="10"]').click()
    # By lesson
    go('#/cloze?tab=lessons'); check('lessons')
    pg.screenshot(path=f'/tmp/qa-out/cloze_lessons_{name}.png', full_page=True)
    tiles = pg.locator('.cz-ltile').count()
    print(' by lesson tiles', tiles, '| first', pg.locator('.cz-ltile h3').first.inner_text().split('\n')[0][:40])
    pg.locator('.cz-ltile').first.click(); pg.wait_for_timeout(300)
    print(' lesson hash', pg.evaluate('location.hash'))
    sc = answer_round('lesson', lambda i: i != 1, shot='lesson' if name in ('phone', 'phonedark') else None)
    key = pg.evaluate("Object.keys(App.state.done.cloze).filter(k=>k.startsWith('l:'))")
    print(' lesson round ->', sc, '| keys', key)
    go('#/cloze?l=no-such-lesson'); check('unknown lesson')
    go('#/cloze?l=zzz-empty'); print(' empty lesson notice', pg.locator('.notice').count() > 0)
    go('#/cloze?lv=N3'); print(' ?lv=N3 ->', pg.evaluate("App.state.settings.clozeLv"), pg.locator('[data-lv="N3"].on').count())
    # progress page
    go('#/progress'); check('progress')
    rows = pg.evaluate("()=>{const t=document.querySelector('.ps-scores').innerText;const i=t.indexOf('Fill the blank');return t.slice(i,t.indexOf('Transform',i)).replace(/\\s+/g,' ')}")
    print(' progress:', rows)
    if 'All levels' not in rows and '%' not in rows: problems.append(f'{name} progress row missing')
    # lesson page link
    go('#/lessons/desu'); lk = pg.locator('a[href="#/cloze?l=desu"]')
    print(' lesson link', lk.count(), lk.first.inner_text() if lk.count() else '')
    if lk.count() != 1: problems.append(f'{name} lesson link count {lk.count()}')
    go('#/lessons/numbers'); print(' no link on lesson without items', pg.locator('a[href^="#/cloze?l="]').count() == 0)
    # empty data
    pg.evaluate("()=>{window._gc=window.GRAMMAR_CLOZE;window.GRAMMAR_CLOZE=[]}")
    go('#/practice'); go('#/cloze'); check('empty')
    print(' empty ->', pg.locator('.notice').first.inner_text()[:50])
    go('#/cloze?tab=lessons'); go('#/lessons/desu'); print(' empty: lesson link', pg.locator('a[href^="#/cloze?l="]').count())
    pg.evaluate("()=>{window.GRAMMAR_CLOZE=undefined}"); go('#/practice'); go('#/cloze'); check('undefined')
    pg.evaluate("()=>{window.GRAMMAR_CLOZE=window._gc}")
    if errs: problems.append(f'{name} console: {errs[:5]}')
    ctx.close()

with sync_playwright() as p:
    b = p.chromium.launch()
    for args in [(390, 844, 'phone'), (390, 844, 'phonedark', True), (1280, 900, 'desk'), (1280, 900, 'deskdark', True)]:
        run(b, *args)
    b.close()
print('errors', problems)
