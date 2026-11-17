"""0.24.0 Signs and buttons (#/signs, js/signs.js). Uses the fixture /home/claude/work/fixtures/signs.js unless QA_REAL=1
(then the real js/data/signs.js and signs-panels.js). Learn (boards, tap, readings switch, group seg, deep link), Quiz
(both modes, wrong then right, keys, level seg, mistakes round), Panels (list, explore, tasks with a wrong tap, deep link),
empty state, Progress. Phone, small phone, desktop, light and dark. Last line: errors [...]"""
import os
from playwright.sync_api import sync_playwright
URL = 'http://localhost:' + os.environ.get('QA_PORT', '8765') + '/index.html'
REAL = os.environ.get('QA_REAL') == '1'
FIX = open('/home/claude/work/fixtures/signs.js', encoding='utf-8').read()
OUT = '/tmp/qa-out/'
os.makedirs(OUT, exist_ok=True)
problems = []
ANS = """()=>{const box=document.querySelector('#sgq'); const S=SIGNS.signs; const sp=s=>JA.speak(s);
  const qb=box.querySelector('.sg-qboard .sg-board');
  const xs=qb ? S.filter(y=>sp(y.ja)===qb.textContent.trim()) : S.filter(y=>y.en===box.querySelector('.sg-q').textContent.trim());
  const os=[...box.querySelectorAll('.opt')];
  return os.findIndex(o=> qb ? xs.some(x=>JA.textOf(o).replace(/^\\s*\\d\\s*/,'').trim()===x.en) : xs.some(x=>o.querySelector('.sg-board').textContent.trim()===sp(x.ja)))}"""

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
    def view(): return pg.locator('#view').inner_text()
    # Empty and missing data
    real = pg.evaluate("()=>({s:window.SIGNS,p:window.SIGN_PANELS})")
    pg.evaluate("()=>{window.SIGNS={groups:[],signs:[]};window.SIGN_PANELS=[]}")
    go('#/signs'); check('empty')
    if 'No signs yet' not in view(): problems.append(f'{name} no empty notice')
    go('#/signs?tab=panels')
    if 'No panels yet' not in view(): problems.append(f'{name} no empty panels notice')
    pg.evaluate("()=>{delete window.SIGNS;delete window.SIGN_PANELS}"); go('#/'); go('#/signs?tab=quiz')
    if 'No signs yet' not in view(): problems.append(f'{name} no empty notice (undefined)')
    if REAL: pg.evaluate("r=>{window.SIGNS=r.s;window.SIGN_PANELS=r.p}", real)
    else: pg.evaluate(FIX)
    # Learn
    go('#/'); go('#/signs'); check('learn')
    tiles = pg.locator('.sg-tile').count()
    rts = pg.locator('.sg-board rt, .sg-board .rj').count()
    print(name, 'learn tiles', tiles, 'ruby in boards', rts, 'groups', pg.locator('#sgbox h2').count())
    if tiles < 1 or rts: problems.append(f'{name} learn tiles={tiles} ruby={rts}')
    if pg.locator('.sg-detail:visible').count(): problems.append(f'{name} details visible before tap')
    pg.locator('.sg-tap').first.click(); pg.wait_for_timeout(150)
    d = pg.locator('.sg-detail').first
    if not d.is_visible() or d.locator('rt').count() == 0 or d.locator('.say').count() == 0: problems.append(f'{name} tap shows no reading')
    pg.screenshot(path=OUT + f'signs_learn_{name}.png')
    pg.locator('#sgread').check(); pg.wait_for_timeout(200)
    if pg.locator('.sg-detail:visible').count() != pg.locator('.sg-tile').count(): problems.append(f'{name} readings switch')
    check('learn readings'); pg.screenshot(path=OUT + f'signs_learn_read_{name}.png', full_page=False)
    pg.locator('#sgread').uncheck(); pg.wait_for_timeout(150)
    gid = pg.evaluate("SIGNS.groups[1] ? SIGNS.groups[1].id : SIGNS.groups[0].id")
    pg.locator(f'[data-sgg="{gid}"]').click(); pg.wait_for_timeout(200)
    if pg.locator('#sgbox h2').count() != 1: problems.append(f'{name} group seg')
    go('#/'); go('#/signs?tab=learn&g=all')
    if pg.locator('#sgbox h2').count() < 2 and pg.evaluate("SIGNS.groups.length") > 1: problems.append(f'{name} deep link g=all')
    # Quiz
    for mode in ['ja-en', 'en-ja']:
        go('#/signs?tab=quiz&g=all'); pg.locator(f'[data-sgm="{mode}"]').click(); pg.wait_for_timeout(100)
        pg.locator('#sggo').click(); pg.wait_for_timeout(300)
        n = 0
        while pg.locator('#sgq .opt').count() and pg.locator('#sgq [data-act=next]').count() == 0:
            if pg.locator('#sgq .sg-board rt').count(): problems.append(f'{name} {mode} furigana in a board')
            right = pg.evaluate(ANS)
            if right < 0: problems.append(f'{name} {mode} q{n} no right option'); break
            k = (right + 1) % 4 if n == 0 else right
            if n == 1: pg.keyboard.press(str(k + 1))
            else: pg.locator(f'#sgq .opt[data-k="{k}"]').click()
            if pg.locator('#sgq [data-fb] .say').count() < 1 or pg.locator('#sgq [data-fb] .sg-read').count() < 1: problems.append(f'{name} {mode} feedback reading/speaker')
            if n == 0: pg.screenshot(path=OUT + f'signs_quiz_{mode}_fb_{name}.png')
            check(f'{mode} q{n}')
            if n == 1: pg.keyboard.press('Enter')
            else: pg.locator('#sgq [data-act=next]').click()
            pg.wait_for_timeout(60); n += 1
            if n > 25: break
        best = pg.evaluate(f"App.state.done.signs['quiz:all:{mode}']")
        print(name, 'quiz', mode, 'questions', n, '|', pg.locator('#sgq h3').inner_text(), '| best', best)
        if not isinstance(best, (int, float)): problems.append(f'{name} quiz {mode} score not saved')
    print(name, 'miss list', pg.evaluate("App.state.done.signs.miss"))
    pg.locator('#sgq [data-act=miss]').click(); pg.wait_for_timeout(300)
    mq = pg.locator('#sgq .eyebrow').inner_text(); check('mistakes')
    if 'of' not in mq.lower(): problems.append(f'{name} mistakes round did not start')
    go('#/signs?tab=quiz'); lvs = pg.locator('[data-sglv]').all_inner_texts(); print(name, 'level seg', lvs)
    if len(lvs) > 1:
        pg.locator(f'[data-sglv="{lvs[1]}"]').click(); pg.wait_for_timeout(150); print(name, 'level', lvs[1], pg.locator('#sgbox p.small').first.inner_text())
    # Panels
    go('#/signs?tab=panels'); check('panels list')
    pt = pg.locator('.sg-ptile').count(); print(name, 'panels', pt)
    pg.screenshot(path=OUT + f'signs_panels_{name}.png')
    pid = pg.evaluate("SIGN_PANELS[0].id")
    pg.locator('.sg-ptile').first.click(); pg.wait_for_timeout(350); check('panel explore')
    ctl = pg.locator('.sg-dev .sg-ctl[data-cid]').count()
    for i in range(ctl):
        pg.locator('.sg-dev .sg-ctl[data-cid]').nth(i).click()
        if pg.locator('#sgpi .say').count() != 1: problems.append(f'{name} explore control {i} no info')
    small = pg.evaluate("[...document.querySelectorAll('.sg-ctl[data-cid]')].filter(b=>{const r=b.getBoundingClientRect();return r.width<44||r.height<44}).length")
    if small: problems.append(f'{name} {small} controls under 44 px')
    pg.screenshot(path=OUT + f'signs_explore_{name}.png', full_page=True)
    pg.locator('[data-pm="tasks"]').click(); pg.wait_for_timeout(200)
    if pg.locator('.sg-dev button.sg-lamp').count(): problems.append(f'{name} lamp tappable in tasks')
    n = 0
    while pg.locator('.sg-task').count():
        a = pg.evaluate("(()=>{const q=document.querySelector('.sg-task .sg-q').textContent.trim();const p=SIGN_PANELS.find(x=>x.id===%r);return p.tasks.find(t=>t.q===q).a})()" % pid)
        if n == 0:
            wrong = pg.evaluate("a=>[...document.querySelectorAll('.sg-ctl[data-cid]')].map(b=>b.dataset.cid).find(c=>c!==a)", a)
            pg.locator(f'.sg-ctl[data-cid="{wrong}"]').click(); pg.wait_for_timeout(100)
            if not pg.locator(f'.sg-ctl[data-cid="{wrong}"].wrong').count() or not pg.locator(f'.sg-ctl[data-cid="{a}"].right').count(): problems.append(f'{name} wrong tap not shown')
            pg.screenshot(path=OUT + f'signs_task_wrong_{name}.png', full_page=True)
        else:
            pg.locator(f'.sg-ctl[data-cid="{a}"]').click()
        if pg.locator('[data-fb] .say').count() < 1: problems.append(f'{name} task feedback')
        check(f'task {n}')
        pg.locator('[data-act=next]').click(); pg.wait_for_timeout(80); n += 1
        if n > 10: break
    pbest = pg.evaluate(f"App.state.done.signs['panel:{pid}']")
    print(name, 'tasks', n, '|', pg.locator('#sgbox h3').inner_text(), '| best', pbest)
    if not isinstance(pbest, (int, float)): problems.append(f'{name} panel score not saved')
    p2 = pg.evaluate("SIGN_PANELS[SIGN_PANELS.length-1]")
    go('#/'); go('#/signs?tab=panels&p=' + p2['id'])
    if pg.locator('h1').inner_text().strip() != p2['title']: problems.append(f'{name} panel deep link')
    go('#/progress'); check('progress')
    txt = pg.evaluate("(()=>{const h=[...document.querySelectorAll('.ps-block')].find(x=>x.querySelector('h3').textContent==='Signs and buttons');return h?h.innerText.replace(/\\s+/g,' '):'(none)'})()")
    print(name, 'progress:', txt[:200])
    if txt.count('%') < 3: problems.append(f'{name} progress lacks signs scores')
    if errs: problems.append(f'{name} console {errs[:3]}')
    ctx.close()

with sync_playwright() as p:
    b = p.chromium.launch()
    for w, h, name, dark in [(390, 844, 'phone', False), (360, 780, 'phone360dark', True), (1280, 900, 'desk', False), (390, 844, 'phonedark', True)]:
        run(b, w, h, name, dark)
    b.close()
print('errors', problems)
