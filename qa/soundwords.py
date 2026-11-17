"""0.23.0 Sound-symbolic words (#/sounds, js/soundwords.js) with the fixture /home/claude/work/fixtures/soundwords.js.
Learn (groups, filter, level), Quiz (each question type, wrong then right, keys, listen hides the word), Match,
mistakes round, empty state, Progress. Phone and desktop, light and dark. Last line: errors [...]"""
import os
_HERE = os.path.dirname(os.path.abspath(__file__))
FXD = next((d for d in (os.path.join(_HERE, 'fixtures-0.23'), os.path.join(_HERE, '..', 'fixtures')) if os.path.isdir(d)), None)   # devtools/qa/fixtures-0.23 or work/fixtures
from playwright.sync_api import sync_playwright
URL = 'http://localhost:' + os.environ.get('QA_PORT', '8765') + '/index.html'
FIX = open(os.path.join(FXD, 'soundwords.js'), encoding='utf-8').read()
OUT = '/tmp/qa-out/'
problems = []
ANS = """()=>{const box=document.querySelector('#swq'); const qt=box.querySelector('.sw-q'); const items=SOUND_WORDS.items;
  let x=null; const t=qt?JA.textOf(qt).replace(/\\s+/g,''):'';
  if(box.querySelector('[data-qtext]')) x=items.find(y=>y.w===t);                 // listen: hidden word is still in the DOM
  else x=items.find(y=>y.w===t)||items.find(y=>y.en===qt.textContent.trim());
  const os=[...box.querySelectorAll('.opt')].map(o=>JA.textOf(o).replace(/^\\s*\\d\\s*/,'').trim());
  return os.findIndex(o=>o===x.w||o===x.en)}"""

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
    pg.evaluate("()=>{window.SOUND_WORDS={groups:[],items:[]}}")
    go('#/sounds'); check('empty')
    if 'No items yet' not in pg.locator('#view').inner_text(): problems.append(f'{name} no empty notice')
    pg.evaluate("()=>{delete window.SOUND_WORDS}"); go('#/'); go('#/sounds')
    if 'No items yet' not in pg.locator('#view').inner_text(): problems.append(f'{name} no empty notice (undefined)')
    pg.evaluate(FIX)
    go('#/'); go('#/sounds'); check('learn')
    print(name, 'learn items', pg.locator('.sw-item').count(), 'speakers', pg.locator('.sw-item .say').count(), 'groups', pg.locator('#swbox h2').all_inner_texts())
    if pg.locator('.sw-item').count() != 15: problems.append(f'{name} learn count')
    pg.screenshot(path=OUT + f'sounds_learn_{name}.png')
    pg.select_option('#swgroup', 'pain'); pg.wait_for_timeout(200); check('learn pain')
    pg.locator('[data-slv="N2"]').click(); pg.wait_for_timeout(200)
    print(name, 'pain N2 items', pg.locator('.sw-item').count(), '| saved', pg.evaluate("[App.state.settings.soundsG, App.state.settings.soundsLv]"))
    pg.locator('[data-slv="All"]').click(); pg.wait_for_timeout(200)
    # Quiz, each type
    for kind in ['wm', 'mw', 'listen', 'mix']:
        go('#/sounds?tab=quiz'); pg.select_option('#swgroup', 'all'); pg.wait_for_timeout(200)
        pg.locator(f'[data-sq="{kind}"]').click(); pg.locator('#swgo').click(); pg.wait_for_timeout(300)
        n = 0
        while pg.locator('#swq .opt').count() and pg.locator('#swq [data-act=next]').count() == 0:
            if pg.locator('#swq [data-qtext]').count():
                if pg.locator('#swq [data-qtext]').is_visible(): problems.append(f'{name} listen word visible before answer')
            right = pg.evaluate(ANS)
            if right < 0: problems.append(f'{name} {kind} q{n} no right option'); break
            opts = pg.evaluate("[...document.querySelectorAll('#swq .opt')].map(o=>JA.textOf(o))")
            if len(set(opts)) != 4: problems.append(f'{name} {kind} options {opts}')
            k = (right + 1) % 4 if n == 0 else right
            if n == 1: pg.keyboard.press(str(k + 1))
            else: pg.locator(f'#swq .opt[data-k="{k}"]').click()
            if pg.locator('#swq [data-fb] .say').count() < 2: problems.append(f'{name} {kind} feedback speakers')
            if pg.locator('#swq [data-qtext]').count() and not pg.locator('#swq [data-qtext]').is_visible(): problems.append(f'{name} listen word hidden after answer')
            if n == 0: pg.screenshot(path=OUT + f'sounds_{kind}_fb_{name}.png')
            check(f'{kind} q{n}')
            if n == 1: pg.keyboard.press('Enter')
            else: pg.locator('#swq [data-act=next]').click()
            pg.wait_for_timeout(60); n += 1
            if n > 25: break
        print(name, 'quiz', kind, 'questions', n, '|', pg.locator('#swq h3').inner_text(), '| best', pg.evaluate("App.state.done.sounds['quiz:all']"))
    print(name, 'miss list', pg.evaluate("App.state.done.sounds.miss"))
    pg.locator('#swq [data-act=miss]').click(); pg.wait_for_timeout(300)
    mq = pg.locator('#swq .eyebrow').inner_text(); print(name, 'mistakes round:', mq); check('mistakes')
    if 'of' not in mq.lower(): problems.append(f'{name} mistakes round did not start')
    # Match within a group, then all
    for g in ['pain', 'all']:
        go('#/sounds?tab=match'); pg.select_option('#swgroup', g); pg.wait_for_timeout(300); check('match ' + g)
        cnt = pg.locator('.sw-a').count()
        if g == 'pain': pg.screenshot(path=OUT + f'sounds_match_{name}.png')
        pg.locator('.sw-a[data-i="0"]').click(); pg.locator('.sw-b[data-i="1"]').click(); pg.wait_for_timeout(100)
        if pg.locator('.sw-b.wrong').count() != 1: problems.append(f'{name} match no wrong flash')
        for i in range(cnt):
            pg.locator(f'.sw-a[data-i="{i}"]').click(); pg.locator(f'.sw-b[data-i="{i}"]').click()
        pg.wait_for_timeout(900); check('match result ' + g)
        print(name, 'match', g, cnt, '|', pg.locator('#swbox h3').first.inner_text(), '|', pg.locator('#swbox p').first.inner_text(), '| best', pg.evaluate(f"App.state.done.sounds['match:{g}']"))
    go('#/progress'); check('progress')
    txt = pg.evaluate("(()=>{const h=[...document.querySelectorAll('.ps-block')].find(x=>x.querySelector('h3').textContent==='Sound-symbolic words');return h?h.innerText.replace(/\\s+/g,' '):'(none)'})()")
    print(name, 'progress:', txt[:160])
    if '%' not in txt: problems.append(f'{name} progress has no sounds score')
    if errs: problems.append(f'{name} console {errs[:3]}')
    ctx.close()

with sync_playwright() as p:
    b = p.chromium.launch()
    for w, h, name, dark in [(390, 844, 'phone', False), (1280, 900, 'desk', False), (390, 844, 'phonedark', True)]:
        run(b, w, h, name, dark)
    b.close()
print('errors', problems)
