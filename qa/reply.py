"""0.25.0 Listen and reply (#/reply, js/reply.js). Phone 390 and desktop 1280, light and dark.
Fixture /home/claude/work/fixtures/reply.js (12 items, ids fx-r-*) is added to LISTEN_REPLY when the real set has fewer than
10 items (QA_FIXTURE=1: the fixture only); the real items present are always used too. Checks: kind and level segs, `say`
played on open and by Play again, its text hidden until answered, 4 options each with its own speaker, right and wrong
answers (keys 1-4 and clicks), feedback with `say`, its speaker and English and every option's English, score saved
(done.reply['kind:lv']) and on #/progress, mistakes round, empty state, every real item's question and feedback without
overflow. QA_PORT picks the port. Prints lines with "overflow False/True"; last line: errors [...]"""
import os
from playwright.sync_api import sync_playwright
PORT = os.environ.get('QA_PORT', '8765')
URL = f'http://localhost:{PORT}/index.html'
FIX = '/home/claude/work/fixtures/reply.js'
ONLY_FIX = os.environ.get('QA_FIXTURE') == '1'
os.makedirs('/tmp/qa-out', exist_ok=True)
problems = []
SPY = "()=>{window._said=[];if(!App._spy){App._spy=1;const o=App.speak;App.speak=(t,x)=>{window._said.push(t);return o(t,x)}}}"
INJ = "f=>{const r=(window.LISTEN_REPLY||[]);window._realN=r.length;if(f)window.LISTEN_REPLY=FX_REPLY.slice();else if(r.length<10)window.LISTEN_REPLY=r.concat(FX_REPLY)}"


def run(b, w, h, name, dark=False):
    ctx = b.new_context(viewport={'width': w, 'height': h}, color_scheme='dark' if dark else 'light')
    pg = ctx.new_page()
    errs = []
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(URL + '#/'); pg.wait_for_timeout(500)
    pg.evaluate("()=>{localStorage.clear()}"); pg.reload(); pg.wait_for_timeout(600)
    pg.add_script_tag(path=FIX); pg.evaluate(INJ, ONLY_FIX); pg.evaluate(SPY)

    def go(hh): pg.evaluate("h=>{location.hash=h}", hh); pg.wait_for_timeout(300)

    def check(tag, quiet=False):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.querySelector('#view').innerText.includes('《')")
        if not quiet: print(f'{name} {tag} overflow {ov}')
        if ov or raw: problems.append(f'{name} {tag} overflow={ov} raw={raw}')

    def answer_round(tag, pattern, keys=False, shot=None):
        n = 0
        for k in range(25):
            if pg.locator('.dr-done').count() or not pg.locator('.dr-q').count(): break
            pg.wait_for_timeout(220)
            iid = pg.evaluate("document.querySelector('.dr-q').dataset.id")
            it = pg.evaluate("id=>{const x=LISTEN_REPLY.find(y=>y.id===id);return {say:x.say,en:x.en,a:x.a,opts:x.opts.map(o=>o.ja)}}", iid)
            said = pg.evaluate("window._said.slice(-1)[0]")
            if said != it['say']: problems.append(f'{name} {tag} q{k} say not played on open ({said})')
            txt = pg.locator('.dr-q').inner_text()
            if it['en'] in txt: problems.append(f'{name} {tag} q{k} English of say visible before answering')
            if pg.evaluate("id=>{const x=LISTEN_REPLY.find(y=>y.id===id);return document.querySelector('.dr-q').innerText.replace(/\\s+/g,'').includes(JA.speak(x.say).replace(/\\s+/g,''))}", iid) and it['say'] not in it['opts']:
                problems.append(f'{name} {tag} q{k} say text visible before answering')
            if pg.locator('.dr-q .dr-optrow .say').count() != 4: problems.append(f'{name} {tag} q{k} options without their own speaker')
            pg.locator('.dr-q [data-act=play]').click(); pg.wait_for_timeout(50)
            if pg.evaluate("window._said.slice(-1)[0]") != it['say']: problems.append(f'{name} {tag} q{k} Play again')
            if shot and k == 0: pg.screenshot(path=f'/tmp/qa-out/reply_{shot}_q_{name}.png', full_page=True)
            ok = pattern(k)
            idx = pg.evaluate("ok=>{const q=document.querySelector('.dr-q');const x=LISTEN_REPLY.find(y=>y.id===q.dataset.id);const os=[...q.querySelectorAll('.dr-opts .opt')];const t=os.map(o=>o.querySelector('.tl'));const right=os.findIndex(o=>JA.textOf(o.querySelector('.tl')).replace(/\\s+/g,'')===JA.speak(x.opts[x.a].ja).replace(/\\s+/g,''));return ok?right:(right+1)%4}", ok)
            if keys: pg.keyboard.press(str(idx + 1))
            else: pg.locator('.dr-q .dr-opts .opt').nth(idx).click()
            pg.wait_for_timeout(80)
            fb = pg.locator('.dr-q .feedback')
            if not fb.count(): problems.append(f'{name} {tag} q{k} no feedback'); break
            cls = fb.get_attribute('class').split()
            if ok != ('ok' in cls): problems.append(f'{name} {tag} q{k} feedback {cls} for ok={ok}')
            if pg.locator('.dr-q .rp-said .say').count() != 1: problems.append(f'{name} {tag} q{k} no speaker for say in feedback')
            if pg.locator('.dr-q .rp-ens li').count() != 4: problems.append(f'{name} {tag} q{k} not every option English shown')
            if it['en'] not in fb.inner_text(): problems.append(f'{name} {tag} q{k} say English not shown')
            if shot and k == (0 if not ok else 1): pg.screenshot(path=f'/tmp/qa-out/reply_{shot}_fb_{name}.png', full_page=True)
            check(f'{tag} q{k}', quiet=k > 1)
            if keys: pg.keyboard.press('Enter')
            else: pg.locator('[data-act=next]').click()
            pg.wait_for_timeout(60); n += 1
        hd = pg.locator('.dr-done h3')
        return n, hd.inner_text() if hd.count() else '(no score)'

    go('#/reply'); check('page')
    kinds = pg.evaluate("[...document.querySelectorAll('[data-rk]')].map(b=>b.dataset.rk)")
    print(name, 'real', pg.evaluate("window._realN"), 'kinds', kinds)
    for kd in kinds:
        pg.locator(f'[data-rk="{kd}"]').click(); pg.wait_for_timeout(60)
        print(' ', kd, 'levels', pg.evaluate("[...document.querySelectorAll('[data-rl]')].map(b=>b.dataset.rl)"))
    pg.locator('[data-rk="all"]').click(); pg.locator('[data-rl="all"]').click(); pg.wait_for_timeout(60)
    pg.locator('#rpgo').click()
    n, sc = answer_round('all', lambda k: k % 3 != 0, shot='all')
    print(f' {name} round {n} -> {sc} | best', pg.evaluate("(App.state.done.reply||{})['all:all']"), 'miss', pg.evaluate("((App.state.done.reply||{}).miss||[]).length"))
    if pg.evaluate("(App.state.done.reply||{})['all:all']") is None: problems.append(f'{name} best not saved')
    # clinical, keyboard
    if 'clinical' in kinds:
        go('#/practice'); go('#/reply'); pg.locator('[data-rk="clinical"]').click(); pg.wait_for_timeout(60)
        lv = pg.evaluate("[...document.querySelectorAll('[data-rl]')].map(b=>b.dataset.rl)")[-1]
        pg.locator(f'[data-rl="{lv}"]').click(); pg.wait_for_timeout(60); pg.locator('#rpgo').click()
        n, sc = answer_round('clinical keys', lambda k: True, keys=True, shot='clin' if name in ('phone', 'phonedark') else None)
        key = f'clinical:{lv}'
        print(f' {name} clinical {lv} keys {n} -> {sc} | best', pg.evaluate(f"(App.state.done.reply||{{}})['{key}']"))
        if pg.evaluate(f"(App.state.done.reply||{{}})['{key}']") != 100: problems.append(f'{name} clinical keyboard round not 100')
    go('#/practice'); go('#/reply'); pg.locator('[data-rk="all"]').click(); pg.locator('[data-rl="all"]').click(); pg.wait_for_timeout(60)
    mb = pg.locator('#rpmiss')
    if mb.count():
        before = pg.evaluate("App.state.done.reply.miss.length"); mb.click()
        answer_round('miss', lambda k: True)
        after = pg.evaluate("App.state.done.reply.miss.length"); print(f' {name} mistakes {before} -> {after}')
        if after >= before: problems.append(f'{name} mistakes round did not take ids off')
    else: problems.append(f'{name} no mistakes button')
    go('#/progress'); check('progress')
    t = pg.evaluate("()=>{const t=document.querySelector('.ps-scores').innerText;const i=t.indexOf('Listen and reply');return i<0?'':t.slice(i,i+90).replace(/\\s+/g,' ')}")
    print(' progress:', t)
    if '%' not in t: problems.append(f'{name} progress row missing')
    if name == 'phone':
        bad = pg.evaluate("""async()=>{const out=[];const box=document.createElement('div');document.querySelector('#view').appendChild(box);
          for(const q of App.replyQs(LISTEN_REPLY.map(x=>x.id))){box.innerHTML='<div class="card dr-q stack">'+q.html+'<div class="opts dr-opts dr-sayopts">'+q.opts.map(o=>'<div class="dr-optrow"><button class="opt">'+o.h+'</button>'+App.sayBtn(o.say,o.say)+'</div>').join('')+'</div><div class="feedback no stack dr-fb">'+q.fb(false,q.opts.find(o=>!o.ok))+'</div></div>';
            await new Promise(r=>setTimeout(r,0));if(document.documentElement.scrollWidth>innerWidth+1)out.push(q.id+' overflow');}
          box.remove();return out}""")
        print(' every item rendered:', pg.evaluate("LISTEN_REPLY.length"), 'problems', bad[:5], 'overflow', bool(bad))
        problems.extend(bad)
    pg.evaluate("()=>{window._lr=window.LISTEN_REPLY;window.LISTEN_REPLY=[]}")
    go('#/practice'); go('#/reply'); check('empty')
    if not pg.locator('.notice').count(): problems.append(f'{name} empty state has no notice')
    pg.evaluate("()=>{window.LISTEN_REPLY=window._lr}")
    if errs: problems.append(f'{name} console: {errs[:5]}')
    ctx.close()


with sync_playwright() as p:
    b = p.chromium.launch()
    for args in [(390, 844, 'phone'), (390, 844, 'phonedark', True), (1280, 900, 'desk'), (1280, 900, 'deskdark', True)]:
        run(b, *args)
    b.close()
print('errors', problems)
