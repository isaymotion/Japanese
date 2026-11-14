"""0.18.0 CODE-1 QA: Progress page practice scores (empty + seeded), case simulations in the listening story tab
(temporary draft questions for case-chiyoko), nurse-played cases (injected temporary case). Prints "errors [...]" last."""
import os, json
from playwright.sync_api import sync_playwright

BASE = 'http://localhost:8765/index.html'
OUT = '/tmp/qa-out'
import os
DRAFT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'fixtures', 'lq2-test.js')
os.makedirs(OUT, exist_ok=True)
errs = []
NURSE = """()=>{ if (PSYCH_CASES.some(c=>c.id==='qa-nurse')) return; const c=JSON.parse(JSON.stringify(PSYCH_CASES.find(x=>x.id==='chiyoko')));
  c.id='qa-nurse'; c.title='QA nurse case (temporary)'; c.role='nurse'; PSYCH_CASES.push(c);
  window.LISTEN_Q['case-qa-nurse']=window.LISTEN_Q['case-chiyoko']; }"""
SEED = """()=>{ const s=JSON.parse(localStorage.getItem('hanashimasho.v1')||'{}'); s.done=s.done||{};
  const set0=(window.TOPIC_SETS||[])[0], g0=((window.JA_COUNTERS||{}).groups||[])[0], m0=(window.PSYCH_MSE_CASES||[])[0], d0=(window.PSYCH_DISCHARGE_CASES||[])[0];
  s.done.vocab={'lv-N5:meaning':80,'lv-N5:recall':40,'mistakes:reading':100}; if(set0) s.done.vocab['match:'+set0.id]={m:2,t:41};
  s.done.listen2={'hear:words:N5':90,'hear:sentences:N4':60,'dict:N5':30,'pairs:all':70,'story:case-chiyoko':67};
  s.done.numbers={'mixed:listen':50,clinic:75}; if(g0) s.done.numbers[g0.id+':read']=80;
  s.done.cases={chiyoko:85}; if(m0) s.done.mcases={[m0.id]:70}; if(d0) s.done.dcases={[d0.id]:45};
  localStorage.setItem('hanashimasho.v1', JSON.stringify(s)); }"""

def run(p, name, vp, scheme):
    b = p.chromium.launch()
    ctx = b.new_context(viewport=vp, color_scheme=scheme)
    pg = ctx.new_page()
    pg.on('console', lambda m: errs.append(name + ': ' + m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(name + ': ' + str(e)))
    def go(h):
        pg.evaluate("h=>{location.hash=h}", h); pg.wait_for_timeout(350)
    def check(label):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: errs.append(f'{name} {label}: overflow={ov} raw={raw}')
    def quiz_round(root, answers):
        n = 0
        while pg.locator(root + ' .opt').count() and n < 30:
            if pg.locator(root + ' [data-act=retry]').count(): break
            a = answers[n]; k = str((a + 1) % 2) if n == 1 else str(a)
            pg.locator(f'{root} .opt[data-k="{k}"]').click()
            fb = pg.locator(root + ' .feedback').first.get_attribute('class') if pg.locator(root + ' .feedback').count() else '?'
            if n < 2: print(name, 'quiz q', n, 'feedback', fb)
            pg.locator(root + ' [data-act=next]').click(); n += 1
        return pg.locator(root + ' h3').first.inner_text().replace('\n', ' ') if pg.locator(root + ' h3').count() else 'no score'

    # ---------- Progress: empty ----------
    pg.goto(BASE + '#/progress'); pg.wait_for_timeout(800)
    blocks = pg.evaluate("[...document.querySelectorAll('.ps-block')].map(b=>b.querySelector('h3').textContent+' | '+(b.querySelector('p.muted')||{}).textContent+' | '+b.querySelector('a.btn').getAttribute('href'))")
    print(name, 'empty blocks', len(blocks)); [print('   ', x) for x in blocks] if name == 'phone' else None
    if not all('Not tried yet' in x for x in blocks): errs.append(name + ' empty state missing')
    check('progress empty'); pg.locator('.ps-scores').screenshot(path=f'{OUT}/progress_empty_{name}.png')
    # old backup without the keys
    pg.evaluate("()=>{delete App.state.done.vocab;delete App.state.done.listen2;delete App.state.done.numbers;delete App.state.done.mcases;delete App.state.done.dcases}")
    go('#/home'); go('#/progress'); print(name, 'missing keys ok', pg.locator('.ps-block').count())
    # ---------- Progress: seeded ----------
    pg.evaluate(SEED); pg.reload(); pg.wait_for_timeout(800)
    go('#/home'); go('#/progress')
    rows = pg.evaluate("[...document.querySelectorAll('.ps-block')].map(b=>b.querySelector('h3').textContent+': '+[...b.querySelectorAll('tbody tr')].map(r=>r.innerText.replace(/\\s+/g,' ')).join(' ; ')+' '+[...b.querySelectorAll('.spread.small')].map(x=>x.innerText.replace(/\\s+/g,' ')).join(' ; '))")
    if name == 'phone': [print('   ', x) for x in rows]
    check('progress seeded'); pg.locator('.ps-scores').screenshot(path=f'{OUT}/progress_seeded_{name}.png')
    # ---------- Story tab with case questions ----------
    pg.add_script_tag(path=DRAFT); pg.evaluate(NURSE)
    go('#/home'); go('#/listen?tab=story')
    print(name, 'story h2', pg.evaluate("[...document.querySelectorAll('#lpbody h2')].map(h=>h.textContent)"), 'case tiles', pg.locator('#lpbody a[href*="case-"]').count())
    check('story list'); pg.screenshot(path=f'{OUT}/progress_storylist_{name}.png', full_page=True)
    go('#/listen?tab=story&id=case-chiyoko')
    print(name, 'play-all', pg.locator('#lpall').count(), 'back', pg.locator('#lpbody a.btn').first.get_attribute('href'), pg.locator('#lpbody a.btn').first.inner_text())
    pg.locator('#lpall').click(); pg.wait_for_timeout(400); print(name, 'status', pg.locator('#lpstat').inner_text()); pg.locator('#lpstop').click()
    pg.locator('#lpshow').click(); pg.wait_for_timeout(200)
    print(name, 'lines', pg.locator('#lptext [data-ln]').count(), 'expected', pg.evaluate("App.caseDialogue(PSYCH_CASES.find(c=>c.id==='chiyoko')).lines.length"), 'who', pg.evaluate("[...document.querySelectorAll('#lptext .who')].slice(0,2).map(x=>x.textContent)"))
    check('story case'); pg.screenshot(path=f'{OUT}/progress_storycase_{name}.png', full_page=True)
    print(name, 'score', quiz_round('#lpq', [0, 0, 0]), 'saved', pg.evaluate("App.state.done.listen2['story:case-chiyoko']"))
    go('#/listen?tab=story&id=case-qa-nurse'); print(name, 'nurse story who', pg.evaluate("[...document.querySelectorAll('#lptext .who')].map(x=>x.textContent).find(t=>t.startsWith('You'))"), pg.locator('#lpbody .row .small').first.inner_text())
    go('#/home'); go('#/progress'); print(name, 'listening block', pg.evaluate("[...document.querySelectorAll('.ps-block')].find(b=>b.querySelector('h3').textContent==='Listening').innerText.replace(/\\s+/g,' ')"))
    # ---------- Cases page with nurse case ----------
    for role in ['resident', 'nurse']:
        pg.evaluate(f"()=>{{App.state.settings.role='{role}'}}"); go('#/home'); go('#/psych/cases')
        print(name, role, 'groups', pg.evaluate("[...document.querySelectorAll('main h2, #view h2, h2')].map(h=>h.textContent).filter(t=>/Played/.test(t))"), 'nurse pills', pg.locator('a.tile .pill:text-is("nurse")').count())
        check('cases ' + role)
        if role == 'nurse': pg.screenshot(path=f'{OUT}/progress_cases_{name}.png', full_page=True)
    pg.evaluate("()=>{App.state.settings.role='resident'}")
    go('#/speak'); print(name, 'speak nurse pills', pg.locator('a.tile .pill:text-is("nurse")').count()); check('speak')
    go('#/speak/case-qa-nurse'); print(name, 'speak nurse roles', pg.evaluate("[...document.querySelectorAll('.who')].map(x=>x.textContent).filter(t=>t.startsWith('You')).slice(0,1)"))
    for cid in ['qa-nurse', 'chiyoko']:
        go('#/psych/case/' + cid)
        print(name, cid, 'nurse note', pg.locator('text=You are the ward nurse.').count())
        guard = 0
        while pg.locator('#cbody .opt').count() and guard < 40:
            pg.locator('#cbody .opt').first.click(); pg.wait_for_timeout(60); guard += 1
        lb = pg.locator('#cbody a:has-text("Listening questions")')
        print(name, cid, 'result listen btn', lb.count(), lb.first.get_attribute('href') if lb.count() else None)
        check('case ' + cid)
        if cid == 'qa-nurse': pg.screenshot(path=f'{OUT}/progress_caseresult_{name}.png', full_page=True)
    b.close()

with sync_playwright() as p:
    run(p, 'phone', {'width': 390, 'height': 844}, 'light')
    run(p, 'phonedark', {'width': 390, 'height': 844}, 'dark')
    run(p, 'small', {'width': 360, 'height': 740}, 'light')
    run(p, 'desk', {'width': 1280, 'height': 900}, 'light')
print('errors', errs)
