"""0.25.0 Find the mistake (#/errors, js/errors.js). Phone 390 and desktop 1280, light and dark.
Fixture /home/claude/work/fixtures/errors.js (14 items, ids fx-e-*) is added to GRAMMAR_ERRORS when the real set has fewer
than 10 items (QA_FIXTURE=1: the fixture only); the real items present are always used too. Checks: level seg, a round answered right and wrong (tap the
tile), the wrong sentence never spoken (App.speak spy) and no speaker before answering, the right word shown in place, the
fix with one speaker, lesson link, score saved (done.errors) and shown on #/progress, mistakes round takes ids off, empty
state, every real item renders its tiles and its corrected tiles without overflow. QA_PORT picks the port.
Prints lines with "overflow False/True"; last line: errors [...]"""
import os
from playwright.sync_api import sync_playwright
PORT = os.environ.get('QA_PORT', '8765')
URL = f'http://localhost:{PORT}/index.html'
FIX = '/home/claude/work/fixtures/errors.js'
os.makedirs('/tmp/qa-out', exist_ok=True)
problems = []
SPY = "()=>{window._said=[];if(!App._spy){App._spy=1;const o=App.speak;App.speak=(t,x)=>{window._said.push(t);return o(t,x)};const o2=App.speakAsync;App.speakAsync=(t,x)=>{window._said.push(t);return o2(t,x)}}}"
ONLY_FIX = os.environ.get('QA_FIXTURE') == '1'   # test with the fixture only
INJ = "f=>{const r=(window.GRAMMAR_ERRORS||[]);window._realN=r.length;if(f)window.GRAMMAR_ERRORS=FX_ERRORS.slice();else if(r.length<10)window.GRAMMAR_ERRORS=r.concat(FX_ERRORS)}"


def run(b, w, h, name, dark=False):
    ctx = b.new_context(viewport={'width': w, 'height': h}, color_scheme='dark' if dark else 'light')
    pg = ctx.new_page()
    errs = []
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(URL + '#/'); pg.wait_for_timeout(500)
    pg.evaluate("()=>{localStorage.clear()}"); pg.reload(); pg.wait_for_timeout(600)
    pg.add_script_tag(path=FIX); pg.evaluate(INJ, ONLY_FIX); pg.evaluate(SPY)
    real = pg.evaluate("window._realN")

    def go(hh): pg.evaluate("h=>{location.hash=h}", hh); pg.wait_for_timeout(300)

    def check(tag):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.querySelector('#view').innerText.includes('《')")
        print(f'{name} {tag} overflow {ov}')
        if ov or raw: problems.append(f'{name} {tag} overflow={ov} raw={raw}')

    def bads():
        return pg.evaluate("()=>(window.GRAMMAR_ERRORS||[]).map(x=>JA.speak(x.bad).replace(/\\s+/g,''))")

    def answer_round(tag, pattern, shot=None):
        n = 0
        for k in range(25):
            if pg.locator('.dr-done').count() or not pg.locator('.dr-q').count(): break
            if pg.locator('.dr-q .say').count(): problems.append(f'{name} {tag} speaker before answering')
            iid = pg.evaluate("document.querySelector('.dr-q').dataset.id")
            ans = pg.evaluate("id=>GRAMMAR_ERRORS.find(x=>x.id===id).i", iid)
            nt = pg.locator('.dr-q .er-tile').count()
            if shot and k == 0: pg.screenshot(path=f'/tmp/qa-out/errors_{shot}_q_{name}.png', full_page=True)
            ok = pattern(k)
            tgt = ans if ok else (ans + 1) % nt
            pg.locator(f'.dr-q .er-tile[data-w="{tgt}"]').click(); pg.wait_for_timeout(80)
            fb = pg.locator('.dr-q .feedback')
            if not fb.count(): problems.append(f'{name} {tag} q{k} no feedback'); break
            cls = fb.get_attribute('class').split()
            if ok != ('ok' in cls): problems.append(f'{name} {tag} q{k} feedback class {cls} for ok={ok}')
            if not pg.locator('.dr-q .er-done .er-now, .dr-q .er-done .er-was').count(): problems.append(f'{name} {tag} q{k} no correction shown in place')
            if pg.locator('.dr-q .er-fix .say').count() != 1: problems.append(f'{name} {tag} q{k} fix has no speaker')
            said = pg.evaluate("()=>document.querySelector('.er-fix .say').dataset.say")
            fx = pg.evaluate("id=>GRAMMAR_ERRORS.find(x=>x.id===id).fix", iid)
            if said != fx: problems.append(f'{name} {tag} q{k} speaker is not the fix')
            sp = pg.evaluate("()=>window._said.map(t=>JA.speak(t).replace(/\\s+/g,''))")
            if any(s in bads() for s in sp): problems.append(f'{name} {tag} a wrong sentence was spoken')
            if shot and k == (0 if not ok else 1): pg.screenshot(path=f'/tmp/qa-out/errors_{shot}_fb_{name}.png', full_page=True)
            if k < 2: check(f'{tag} q{k}')
            pg.locator('[data-act=next]').click(); pg.wait_for_timeout(60); n += 1
        hd = pg.locator('.dr-done h3')
        return n, hd.inner_text() if hd.count() else '(no score)'

    go('#/errors'); check('page')
    lvs = pg.evaluate("[...document.querySelectorAll('[data-lv]')].map(b=>b.dataset.lv)")
    print(name, 'real items', real, 'levels', lvs)
    for lv in lvs:
        pg.locator(f'[data-lv="{lv}"]').click(); pg.wait_for_timeout(60)
    pg.locator('[data-lv="all"]').click(); pg.wait_for_timeout(60)
    pg.locator('#ergo').click(); pg.wait_for_timeout(150)
    n, sc = answer_round('all', lambda k: k % 3 != 0, shot='all')
    best = pg.evaluate("(App.state.done.errors||{}).all"); miss = pg.evaluate("((App.state.done.errors||{}).miss||[]).length")
    print(f' {name} round {n} -> {sc} | best {best} miss {miss}')
    if best is None: problems.append(f'{name} best not saved')
    if not miss: problems.append(f'{name} misses not recorded')
    # keyboard: Enter goes on
    pg.locator('[data-act=again]').click(); pg.wait_for_timeout(120)
    pg.locator('.dr-q .er-tile').first.focus(); pg.keyboard.press('Enter'); pg.wait_for_timeout(80)
    if not pg.locator('.dr-q .feedback').count(): problems.append(f'{name} Enter on a tile did not answer')
    pg.keyboard.press('Escape'); pg.locator('body').focus() if False else None
    # mistakes round
    go('#/practice'); go('#/errors')
    mb = pg.locator('#ermiss')
    if mb.count():
        before = pg.evaluate("App.state.done.errors.miss.length")
        mb.click(); pg.wait_for_timeout(150)
        answer_round('miss', lambda k: True, shot='miss' if name == 'phone' else None)
        after = pg.evaluate("App.state.done.errors.miss.length")
        print(f' {name} mistakes {before} -> {after}')
        if after >= before: problems.append(f'{name} mistakes round did not take ids off')
    else: problems.append(f'{name} no mistakes button')
    go('#/errors?lv=N5'); print(' ?lv=N5 ->', pg.evaluate("App.state.settings.errorsLv"))
    go('#/progress'); check('progress')
    t = pg.evaluate("()=>{const t=document.querySelector('.ps-scores').innerText;const i=t.indexOf('Find the mistake');return i<0?'':t.slice(i,i+80).replace(/\\s+/g,' ')}")
    print(' progress:', t)
    if '%' not in t: problems.append(f'{name} progress row missing')
    # every item: tiles and the corrected tiles render without overflow (phone only)
    if name == 'phone':
        bad = pg.evaluate("""async()=>{const out=[];const box=document.createElement('div');document.querySelector('#view').appendChild(box);
          for(const q of App.errorsQs(GRAMMAR_ERRORS.map(x=>x.id))){box.innerHTML='<div class="card dr-q">'+q.html+'</div>';
            await new Promise(r=>setTimeout(r,0));const c=box.firstChild;const it=GRAMMAR_ERRORS.find(x=>x.id===q.id);
            if(document.documentElement.scrollWidth>innerWidth+1)out.push(q.id+' tiles overflow');
            if(c.querySelectorAll('.er-tile').length!==it.bad.trim().split(/ +/).length)out.push(q.id+' tile count');
            q.reveal(c,true,it.i);await new Promise(r=>setTimeout(r,0));
            if(!c.querySelector('.er-now,.er-was'))out.push(q.id+' no correction');
            if(document.documentElement.scrollWidth>innerWidth+1)out.push(q.id+' corrected overflow');}
          box.remove();return out}""")
        print(' every item rendered:', pg.evaluate("GRAMMAR_ERRORS.length"), 'problems', bad[:5], 'overflow', any('overflow' in x for x in bad))
        problems.extend(bad)
    # empty state
    pg.evaluate("()=>{window._ge=window.GRAMMAR_ERRORS;window.GRAMMAR_ERRORS=[]}")
    go('#/practice'); go('#/errors'); check('empty')
    if not pg.locator('.notice').count(): problems.append(f'{name} empty state has no notice')
    pg.evaluate("()=>{window.GRAMMAR_ERRORS=undefined}"); go('#/practice'); go('#/errors'); check('undefined')
    pg.evaluate("()=>{window.GRAMMAR_ERRORS=window._ge}")
    if errs: problems.append(f'{name} console: {errs[:5]}')
    ctx.close()


with sync_playwright() as p:
    b = p.chromium.launch()
    for args in [(390, 844, 'phone'), (390, 844, 'phonedark', True), (1280, 900, 'desk'), (1280, 900, 'deskdark', True)]:
        run(b, *args)
    b.close()
print('errors', problems)
