"""0.23.0 Level review test (#/test). Fixture /home/claude/work/fixtures/cloze.js stands in for GRAMMAR_CLOZE.
Phone 390 and desktop 1280, light and dark: start page per level (sections and counts), item checks on the built test
for every level, a full N5 test (mouse + keyboard 1-4/Enter, right and wrong, Back), leave and resume, discard, result page
(bars, wrong items, weakest area link), scores in done.test / done.testInfo and on #/progress, timer (time up),
empty pools (no cloze: total adjusts; no data at all: notice). Last line: errors [...]"""
import os
_HERE = os.path.dirname(os.path.abspath(__file__))
FXD = next((d for d in (os.path.join(_HERE, 'fixtures-0.23'), os.path.join(_HERE, '..', 'fixtures')) if os.path.isdir(d)), None)   # devtools/qa/fixtures-0.23 or work/fixtures
from playwright.sync_api import sync_playwright
URL = 'http://localhost:' + os.environ.get('QA_PORT', '8765') + '/index.html'
FIX = os.path.join(FXD, 'cloze.js')
os.makedirs('/tmp/qa-out', exist_ok=True)
problems = []

CHECK_ITEMS = """()=>{const r=App.state.testRun, bad=[];
  r.items.forEach((x,i)=>{
    const keys=x.opts.map(o=>JA.speak(o).replace(/\\s+/g,''));
    if(new Set(keys).size!==keys.length) bad.push(i+' dup opts '+x.kind+' '+keys.join('/'));
    if(!(x.a>=0&&x.a<x.opts.length)) bad.push(i+' bad a '+x.kind);
    if(x.ja && x.ja.includes('＿')) bad.push(i+' blank in ja');
    if(x.kind==='order'){ if(x.opts.length!==4) bad.push(i+' order opts '+x.opts.length);
      const rebuilt=JA.speak(x.ja).replace(/\\s+/g,''); if(!rebuilt.endsWith(JA.speak(x.tail).replace(/\\s+/g,''))) bad.push(i+' tail mismatch'); }
    if((x.kind==='cloze'||x.kind==='context') && (x.q.match(/＿/g)||[]).length!==1) bad.push(i+' blanks '+x.kind);
  });
  const c={}; r.items.forEach(x=>c[x.area+':'+x.kind]=(c[x.area+':'+x.kind]||0)+1); return [r.lv, r.items.length, c, bad];}"""

def run(b, w, h, name, dark=False):
    ctx = b.new_context(viewport={'width': w, 'height': h}, color_scheme='dark' if dark else 'light')
    pg = ctx.new_page()
    errs = []
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('dialog', lambda d: d.accept())
    pg.goto(URL + '#/'); pg.wait_for_timeout(400)
    pg.evaluate("()=>{localStorage.clear()}"); pg.reload(); pg.wait_for_timeout(500)
    pg.add_script_tag(path=FIX)
    def go(hh): pg.evaluate("h=>{location.hash=h}", hh); pg.wait_for_timeout(300)
    def gotest(): go('#/practice'); go('#/test')
    def check(tag):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: problems.append(f'{name} {tag} overflow={ov} raw={raw}')
    gotest(); check('start')
    pg.screenshot(path=f'/tmp/qa-out/leveltest_start_{name}.png', full_page=True)
    lvs = pg.evaluate("[...document.querySelectorAll('[data-lv]')].map(b=>b.dataset.lv)")
    print(name, 'levels', lvs)
    # build a test at every level and check the items (then discard)
    for lv in lvs:
        gotest(); pg.locator(f'[data-lv="{lv}"]').click(); pg.wait_for_timeout(100)
        plan = pg.locator('.lt-plan').inner_text().replace('\n', ' ') if pg.locator('.lt-plan').count() else '(none)'
        pg.locator('#ltgo').click(); pg.wait_for_timeout(150)
        lvx, n, c, bad = pg.evaluate(CHECK_ITEMS)
        if name == 'phone': print(f' {lv}: {n} items {c}')
        if bad: problems.append(f'{name} {lv} item problems {bad[:4]}')
        if name == 'phone':
            # walk every question once to check layout and the yomi / kanji rules
            for i in range(n):
                k = pg.evaluate("App.state.testRun.items[App.state.testRun.i].kind")
                if k in ('yomi', 'kanji') and (pg.locator('.lt-q .lt-qt rt, .lt-q .lt-big rt').count() or pg.locator('.lt-q .lt-qt .rj, .lt-q .lt-big .rj').count()):
                    problems.append(f'{lv} {k} shows reading/romaji in the question')
                if k in ('order', 'cloze', 'context') and pg.locator('.lt-q .lt-sent .rj').count(): problems.append(f'{lv} {k} romaji in sentence')
                if pg.locator('.lt-q .say').count(): problems.append(f'{lv} {k} speaker during the test')
                check(f'{lv} q{i} {k}')
                if lv == 'N4' and k in ('order', 'yomi', 'kanji', 'passage', 'context', 'cloze') and not os.path.exists(f'/tmp/qa-out/leveltest_{k}_{name}.png'):
                    pg.screenshot(path=f'/tmp/qa-out/leveltest_{k}_{name}.png', full_page=True)
                if i + 1 < n: pg.locator('#ltnext').click(); pg.wait_for_timeout(40)
        gotest()
        if not pg.locator('#ltresume').count(): problems.append(f'{name} {lv} no resume card')
        pg.locator('#ltdiscard').click(); pg.wait_for_timeout(200)
        if pg.evaluate("!!App.state.testRun"): problems.append(f'{name} discard failed')
    # full N5 test: wrong on every 4th, keyboard on odd ones, skip one, back once
    gotest(); pg.locator('[data-lv="N5"]').click(); pg.wait_for_timeout(80)
    if pg.locator('#lttimer').is_checked(): pg.locator('#lttimer').uncheck()
    pg.locator('#ltgo').click(); pg.wait_for_timeout(150)
    n = pg.evaluate("App.state.testRun.items.length")
    if pg.locator('#lttime').count(): problems.append(f'{name} timer shown while off')
    expect = 0
    for i in range(n):
        a = pg.evaluate("App.state.testRun.items[App.state.testRun.i].a")
        nopt = pg.evaluate("App.state.testRun.items[App.state.testRun.i].opts.length")
        if i == 5:   # skip
            pg.locator('#ltnext').click(); pg.wait_for_timeout(40); continue
        k = a if i % 4 else (a + 1) % nopt
        if k == a: expect += 1
        if i % 2: pg.keyboard.press(str(k + 1))
        else: pg.locator('.lt-opts .opt').nth(k).click()
        if pg.locator('.lt-q .feedback, .opt.right, .opt.wrong').count(): problems.append(f'{name} feedback during test')
        if i == 3:   # back and forward keep the answer
            pg.locator('#ltprev').click(); pg.wait_for_timeout(40)
            if pg.locator('.lt-opts .opt.on').count() != 1: problems.append(f'{name} back lost the answer')
            pg.locator('#ltnext').click(); pg.wait_for_timeout(40)
            if pg.locator('.lt-opts .opt.on').count() != 1: problems.append(f'{name} forward lost the answer')
        if i == 8:   # leave and resume
            pg.locator('a[data-ltgo]').click(); pg.wait_for_timeout(300)
            if not pg.locator('#ltresume').count(): problems.append(f'{name} save and leave: no resume')
            if name == 'phone': pg.screenshot(path=f'/tmp/qa-out/leveltest_resume_{name}.png', full_page=True)
            pg.locator('#ltresume').click(); pg.wait_for_timeout(150)
            if pg.evaluate("App.state.testRun.i") != 8: problems.append(f'{name} resumed at wrong question')
        if i + 1 < n:
            if i % 2: pg.keyboard.press('Enter')
            else: pg.locator('#ltnext').click()
            pg.wait_for_timeout(40)
        else:
            pg.locator('#ltnext').click(); pg.wait_for_timeout(300)   # confirm() accepted (one skipped)
    check('result')
    pg.screenshot(path=f'/tmp/qa-out/leveltest_result_{name}.png', full_page=True)
    total = pg.locator('.lt-total').inner_text() if pg.locator('.lt-total').count() else '(none)'
    print(' N5 result', total, 'expected', f'{expect} / {n}', '| bars', pg.locator('.lt-result .lt-bar').count(), '| wrong items', pg.locator('.lt-w').count(),
          '| weak', pg.locator('.lt-weak').inner_text()[:70].replace('\n', ' ') if pg.locator('.lt-weak').count() else None)
    if total != f'{expect} / {n}': problems.append(f'{name} total {total} != {expect} / {n}')
    if pg.locator('.lt-w').count() != n - expect: problems.append(f'{name} wrong list {pg.locator(".lt-w").count()} != {n - expect}')
    spk = pg.evaluate("[...document.querySelectorAll('.lt-w .say')].map(s=>s.dataset.say).filter(s=>s.includes('＿')).length")
    if spk: problems.append(f'{name} speaker on blank text')
    t, info = pg.evaluate("[App.state.done.test.N5, App.state.done.testInfo.N5]")
    print(' saved', t, '| info keys', sorted(info.keys()), '| areas', info['areas'], '| testRun', pg.evaluate("!!App.state.testRun"))
    if not isinstance(t, (int, float)): problems.append(f'{name} done.test.N5 not a number')
    go('#/progress')
    pr = pg.evaluate("()=>{const t=document.querySelector('.ps-scores').innerText;const i=t.indexOf('Level review test');return t.slice(i,i+60).replace(/\\s+/g,' ')}")
    print(' progress:', pr)
    if 'N5' not in pr: problems.append(f'{name} progress row missing')
    gotest(); check('start after'); print(' start page result card', pg.locator('.lt-bars').count() > 0)
    # timer: start with timer, show clock, then force time up
    pg.locator('[data-lv="N5"]').click(); pg.wait_for_timeout(60)
    pg.locator('#lttimer').check(); pg.locator('#ltgo').click(); pg.wait_for_timeout(1300)
    clock = pg.locator('#lttime').inner_text() if pg.locator('#lttime').count() else None
    print(' timer shows', clock)
    if not clock or not clock.startswith('24:') and not clock.startswith('25:'): problems.append(f'{name} timer {clock}')
    pg.evaluate("()=>{App.state.testRun.used=1498.5}"); pg.wait_for_timeout(2300)
    print(' time up ->', pg.locator('h1').first.inner_text(), '| notice', pg.locator('.notice').first.inner_text()[:30])
    if 'result' not in pg.locator('h1').first.inner_text(): problems.append(f'{name} time up did not finish')
    pg.locator('#lttimer').count() or None
    pg.evaluate("()=>{App.state.settings.testTimer=false;App.save()}")
    # empty cloze pool: grammar shrinks to the quiz items only
    pg.evaluate("()=>{window._gc=window.GRAMMAR_CLOZE;window.GRAMMAR_CLOZE=[]}")
    go('#/practice'); gotest(); pg.locator('[data-lv="N5"]').click(); pg.wait_for_timeout(60); pg.locator('#ltgo').click(); pg.wait_for_timeout(150)
    lvx, n2, c, bad = pg.evaluate(CHECK_ITEMS)
    print(' no cloze ->', n2, c.get('grammar:cloze', 0), 'cloze items')
    if c.get('grammar:cloze'): problems.append(f'{name} cloze items without data')
    gotest(); pg.locator('#ltdiscard').click(); pg.wait_for_timeout(150)
    pg.evaluate("()=>{window.GRAMMAR_CLOZE=window._gc}")
    # nothing at all
    pg.evaluate("()=>{window._s=[window.LESSONS,App.DICT,App.KANJI,window.READING,window.GRAMMAR_CLOZE];window.LESSONS=[];App.DICT=[];App.KANJI=[];window.READING=[];window.GRAMMAR_CLOZE=undefined}")
    go('#/practice'); gotest(); check('empty')
    print(' empty ->', pg.locator('.notice').first.inner_text()[:60] if pg.locator('.notice').count() else '(no notice)')
    pg.evaluate("()=>{[window.LESSONS,App.DICT,App.KANJI,window.READING,window.GRAMMAR_CLOZE]=window._s}")
    if errs: problems.append(f'{name} console: {errs[:5]}')
    ctx.close()

with sync_playwright() as p:
    b = p.chromium.launch()
    for args in [(390, 844, 'phone'), (390, 844, 'phonedark', True), (1280, 900, 'desk'), (1280, 900, 'deskdark', True)]:
        run(b, *args)
    b.close()
print('errors', problems)
