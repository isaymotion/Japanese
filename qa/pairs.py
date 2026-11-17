"""0.23.0 Word pairs (#/pairs, js/pairs.js) with the fixture /home/claude/work/fixtures/pairs.js.
Learn, Match (wrong then right, best time), Quiz (wrong then right, keys), mistakes round, empty state, Progress.
Phone and desktop, light and dark. Last line: errors [...]"""
import os
_HERE = os.path.dirname(os.path.abspath(__file__))
FXD = next((d for d in (os.path.join(_HERE, 'fixtures-0.23'), os.path.join(_HERE, '..', 'fixtures')) if os.path.isdir(d)), None)   # devtools/qa/fixtures-0.23 or work/fixtures
from playwright.sync_api import sync_playwright
URL = 'http://localhost:' + os.environ.get('QA_PORT', '8765') + '/index.html'
FIX = open(os.path.join(FXD, 'pairs.js'), encoding='utf-8').read()
OUT = '/tmp/qa-out/'
problems = []

def run(b, w, h, name, dark):
    ctx = b.new_context(viewport={'width': w, 'height': h}, color_scheme='dark' if dark else 'light')
    pg = ctx.new_page()
    errs = []
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(URL + '#/'); pg.wait_for_timeout(500)
    pg.evaluate("()=>{localStorage.clear()}"); pg.reload(); pg.wait_for_timeout(700)
    def go(hh): pg.evaluate("h=>{location.hash=h}", hh); pg.wait_for_timeout(350)
    def check(tag):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: problems.append(f'{name} {tag} overflow={ov} raw={raw}')
    # empty data
    pg.evaluate("()=>{window.WORD_PAIRS=[]}")
    go('#/pairs'); check('empty')
    if 'No items yet' not in pg.locator('#view').inner_text(): problems.append(f'{name} no empty notice')
    pg.evaluate(FIX)
    go('#/'); go('#/pairs'); check('learn')
    n_items = pg.locator('.pr-item').count(); n_say = pg.locator('.pr-item .say').count()
    print(name, 'learn items', n_items, 'speakers', n_say, 'h2', pg.locator('#prbox h2').count())
    if n_items != 24: problems.append(f'{name} learn shows {n_items} of 24')
    pg.screenshot(path=OUT + f'pairs_learn_{name}.png', full_page=False)
    pg.locator('[data-plv="N4"]').click(); pg.wait_for_timeout(200)
    pg.locator('[data-pty="syn"]').click(); pg.wait_for_timeout(200); check('learn N4 syn')
    print(name, 'N4 syn items', pg.locator('.pr-item').count(), '| lesson links', pg.locator('.pr-item a[href^="#/lessons/"]').count(), '| saved', pg.evaluate("[App.state.settings.pairsLv, App.state.settings.pairsType]"))
    dis = pg.evaluate("[...document.querySelectorAll('[data-pty]')].filter(b=>b.disabled).map(b=>b.dataset.pty)")
    print(name, 'N4 disabled types', dis)
    pg.locator('[data-plv="All"]').click(); pg.wait_for_timeout(200); pg.locator('[data-pty="all"]').click(); pg.wait_for_timeout(200)
    # Match
    go('#/pairs?tab=match'); check('match')
    cnt = pg.locator('.pr-a').count()
    pg.screenshot(path=OUT + f'pairs_match_{name}.png')
    pg.locator('.pr-a[data-i="0"]').click(); pg.locator('.pr-b[data-i="1"]').click(); pg.wait_for_timeout(100)
    if pg.locator('.pr-b.wrong').count() != 1: problems.append(f'{name} match no wrong flash')
    pg.wait_for_timeout(1100)
    t = pg.locator('#prt').inner_text()
    for i in range(cnt):
        pg.locator(f'.pr-a[data-i="{i}"]').click(); pg.locator(f'.pr-b[data-i="{i}"]').click()
    pg.wait_for_timeout(900); check('match result')
    print(name, 'match', cnt, 'pairs | timer showed', t, '|', pg.locator('#prbox h3').inner_text(), '|', pg.locator('#prbox p').first.inner_text(), '| best', pg.evaluate("[App.state.done.pairs['match:all'], JSON.stringify(App.state.done.pairs['time:all'])]"))
    pg.screenshot(path=OUT + f'pairs_match_done_{name}.png')
    # Quiz
    go('#/pairs?tab=quiz'); check('quiz setup')
    pg.locator('#prgo').click(); pg.wait_for_timeout(300)
    n = 0
    while pg.locator('#prq .opt').count() and pg.locator('#prq [data-act=next]').count() == 0:
        right = pg.evaluate("""()=>{const a=JA.textOf(document.querySelector('#prq .pr-q')).replace(/\\s+/g,'');
          const p=WORD_PAIRS.find(x=>JA.speak(x.a).replace(/\\s+/g,'')===a);
          return [...document.querySelectorAll('#prq .opt')].findIndex(o=>JA.textOf(o).replace(/^\\s*\\d\\s*/,'').replace(/\\s+/g,'')===JA.speak(p.b).replace(/\\s+/g,''))}""")
        if right < 0: problems.append(f'{name} quiz q{n} no right option'); break
        opts = pg.evaluate("[...document.querySelectorAll('#prq .opt')].map(o=>JA.textOf(o).replace(/\\s+/g,''))")
        if len(set(opts)) != 4: problems.append(f'{name} quiz q{n} options {opts}')
        pick_i = (right + 1) % 4 if n == 0 else right
        if n == 1: pg.keyboard.press(str(pick_i + 1))          # keys 1-4
        else: pg.locator(f'#prq .opt[data-k="{pick_i}"]').click()
        fb = pg.locator('#prq [data-fb]')
        if fb.locator('.say').count() < 2: problems.append(f'{name} quiz q{n} feedback speakers {fb.locator(".say").count()}')
        if n == 0:
            if 'Your choice' not in fb.inner_text(): problems.append(f'{name} wrong answer shows no choice')
            pg.screenshot(path=OUT + f'pairs_quiz_fb_{name}.png')
        check(f'quiz q{n}')
        if n == 1: pg.keyboard.press('Enter')
        else: pg.locator('#prq [data-act=next]').click()
        pg.wait_for_timeout(80); n += 1
        if n > 25: break
    print(name, 'quiz questions', n, '|', pg.locator('#prq h3').inner_text(), '| best', pg.evaluate("App.state.done.pairs['quiz:all']"), '| miss', pg.evaluate("App.state.done.pairs.miss"))
    # mistakes round
    pg.locator('#prq [data-act=miss]').click(); pg.wait_for_timeout(300)
    mq = pg.locator('#prq .eyebrow').inner_text()
    print(name, 'mistakes round:', mq); check('mistakes')
    if 'of' not in mq.lower(): problems.append(f'{name} mistakes round did not start')
    # Progress
    go('#/progress'); check('progress')
    txt = pg.evaluate("(()=>{const h=[...document.querySelectorAll('.ps-block')].find(x=>x.querySelector('h3').textContent==='Word pairs');return h?h.innerText.replace(/\\s+/g,' '):'(none)'})()")
    print(name, 'progress:', txt[:140])
    if '%' not in txt: problems.append(f'{name} progress has no pairs score')
    if errs: problems.append(f'{name} console {errs[:3]}')
    ctx.close()

with sync_playwright() as p:
    b = p.chromium.launch()
    for w, h, name, dark in [(390, 844, 'phone', False), (1280, 900, 'desk', False), (390, 844, 'phonedark', True)]:
        run(b, w, h, name, dark)
    b.close()
print('errors', problems)
