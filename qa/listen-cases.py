"""0.20.0 listening questions on first-visit/admission MSE cases (mse-<id>) and discharge cases (dis-<id>).
Uses /home/claude/work/new/listen-questions-3.js if present, else injected test items. Prints "errors [...]" last."""
import os, json
from playwright.sync_api import sync_playwright

BASE = 'http://localhost:8765/index.html'
OUT = '/tmp/qa-out'
DRAFT = '/home/claude/work/new/listen-questions-3.js'
os.makedirs(OUT, exist_ok=True)
errs = []
TEST = """window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, {
 'mse-panic': [['Where did the attack start?', ['On a packed train', 'At home', 'At work', 'In a car'], 0, 'He says 満員電車.'],
               ['What does he fear most?', ['The attacks', 'Other people', 'Losing his job', 'Voices'], 0, 'He says 怖いのは発作です.']],
 'mse-ocd': [['Test question?', ['a', 'b', 'c', 'd'], 2, 'why']],
 'dis-panic': [['How does he feel tonight?', ['A little relieved', 'Angry', 'Very sleepy', 'Hungry'], 0, 'He says ほっと.'],
               ['Where will he go this week?', ['The psychiatry outpatient clinic', 'His mother\\'s home', 'Work', 'A gym'], 0, '外来.']]
});"""


def run(p, name, vp, scheme):
    b = p.chromium.launch()
    ctx = b.new_context(viewport=vp, color_scheme=scheme)
    if os.path.exists(DRAFT):
        src = open(DRAFT, encoding='utf8').read()
        ctx.add_init_script("window.addEventListener('load',()=>{" + src + "\n});")
    else:
        ctx.add_init_script("window.addEventListener('load',()=>{" + TEST + "});")
    pg = ctx.new_page()
    pg.on('console', lambda m: errs.append(name + ': ' + m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(name + ': ' + str(e)))
    pg.goto(BASE + '#/'); pg.wait_for_timeout(800)
    pg.evaluate("""()=>{const o=App.speakAsync;App.speakAsync=(t,op)=>{window._said=(window._said||[]).concat([t]);return o(t,op)};}""")

    def go(h):
        pg.evaluate("h=>{location.hash=h}", h); pg.wait_for_timeout(350)

    def check(label):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: errs.append(f'{name} {label}: overflow={ov} raw={raw}')

    keys = pg.evaluate("Object.keys(LISTEN_Q).filter(k=>/^(mse|dis)-/.test(k))")
    go('#/listen?tab=story'); pg.wait_for_timeout(300)
    h2 = pg.evaluate("[...document.querySelectorAll('#lpbody h2')].map(h=>h.textContent)")
    print(name, 'keys', keys, 'groups', h2)
    for g in ['First-visit and admission MSE cases', 'Discharge cases']:
        if not any(g in x for x in h2): errs.append(f'{name}: group missing {g}')
    if h2.index(next(x for x in h2 if 'Case simulations' in x)) > h2.index(next(x for x in h2 if 'First-visit' in x)):
        errs.append(f'{name}: groups out of order {h2}')
    ids = pg.evaluate("App.listenStoryIds()")
    for k in keys:
        if k not in ids: errs.append(f'{name}: listenStoryIds lacks {k}')
    check('story list')
    pg.screenshot(path=f'{OUT}/lcases_list_{name}.png', full_page=True)

    # dialogue structure sanity for every case (also those without questions)
    st = pg.evaluate("""()=>{const r={};(PSYCH_MSE_CASES||[]).forEach(c=>{const d=App.mseDialogue(c);r['mse-'+c.id]=[d.lines.length,d.roles[1],d.lines.filter(l=>/＿/.test(l[1])).length,d.lines.some((l,i)=>l[0]!==(i%2))]});
      (PSYCH_DISCHARGE_CASES||[]).forEach(c=>{const d=App.dischargeDialogue(c);r['dis-'+c.id]=[d.lines.length,d.roles[1],d.lines.filter(l=>/＿/.test(l[1])).length,d.lines.some((l,i)=>l[0]!==(i%2))]});return r}""")
    if name == 'phone': print('dialogues', json.dumps(st, ensure_ascii=False))
    for k, (n, who, blanks, alt) in st.items():
        if n < 6 or blanks or alt: errs.append(f'{name}: dialogue {k} lines={n} blanks={blanks} notalternating={alt}')

    for sid in [pg.evaluate("ks=>ks.find(k=>k.startsWith('mse-'))", keys), pg.evaluate("ks=>ks.find(k=>k.startsWith('dis-'))", keys)]:
        if not sid: continue
        go('#/listen?tab=story&id=' + sid); pg.wait_for_timeout(300)
        label = pg.locator('#lpbody .row .muted.small').first.inner_text()
        pg.evaluate("window._said=[]")
        pg.locator('#lpall').click(); pg.wait_for_timeout(500)
        stat = pg.locator('#lpstat').inner_text(); said = pg.evaluate("(window._said||[]).length")
        pg.locator('#lpstop').click()
        if 'Line 1' not in stat and 'Line' not in stat: errs.append(f'{name} {sid}: Play all did not start ({stat!r})')
        if pg.locator('#lptext').is_visible(): errs.append(f'{name} {sid}: text visible before Show')
        pg.locator('#lpshow').click(); pg.wait_for_timeout(200)
        who = pg.evaluate("[...document.querySelectorAll('#lptext .who')].map(w=>w.textContent)")
        nl = len(who)
        if not who or who[0] != 'Doctor' or len(set(who)) < 2: errs.append(f'{name} {sid}: speakers {set(who)}')
        check('story ' + sid)
        pg.screenshot(path=f'{OUT}/lcases_{sid}_{name}.png', full_page=False)
        pg.locator('#lptext').scroll_into_view_if_needed()
        pg.screenshot(path=f'{OUT}/lcases_{sid}_text_{name}.png', full_page=False)
        answers = pg.evaluate('i=>LISTEN_Q[i].map(q=>q[2])', sid)
        res, n = [], 0
        while pg.locator('#lpq .opt').count() and not pg.locator('#lpq [data-act=retry]').count() and n < 10:
            a = answers[n]; k = a if n != 1 else (a + 1) % 4
            pg.locator(f'#lpq .opt[data-k="{k}"]').click()
            res.append(pg.locator('#lpq .feedback.ok').count() == 1)
            if n == 0: pg.locator('#lpq').scroll_into_view_if_needed(); pg.screenshot(path=f'{OUT}/lcases_{sid}_q_{name}.png')
            check(f'{sid} q{n}')
            pg.locator('#lpq [data-act=next]').click(); n += 1
        exp = [i != 1 for i in range(len(res))]
        if res != exp: errs.append(f'{name} {sid}: quiz results {res}')
        saved = pg.evaluate(f"(App.state.done.listen2||{{}})['story:{sid}']")
        back = pg.locator('#lpbody a.btn').first.get_attribute('href')
        print(name, sid, '|', label, '| play', stat, said, '| lines', nl, 'speakers', sorted(set(who)), '| quiz', res, 'saved', saved, '| back', back)
        if saved is None: errs.append(f'{name} {sid}: best not saved')
        go(back); pg.wait_for_timeout(300)
        if not pg.locator('h1').count(): errs.append(f'{name} back link {back} empty')
    go('#/progress'); check('progress')
    b.close()


with sync_playwright() as p:
    run(p, 'phone', {'width': 390, 'height': 844}, 'light')
    run(p, 'phonedark', {'width': 390, 'height': 844}, 'dark')
    run(p, 'desk', {'width': 1280, 'height': 900}, 'light')
print('errors', errs)
