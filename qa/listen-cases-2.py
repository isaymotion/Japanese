"""0.25.0 listening questions on the older practice cases (js/data/listen-questions-5.js mse-<id>, -6.js dis-<id> and eot-<id>)
and the new end-of-treatment story kind (App.eotDialogue, js/listen.js). When fewer than 10 of the planned keys exist, test
items are injected for mse-shota, dis-shota and eot-ocd (keys that already exist are kept). Phone 390 (light and dark) and
desktop 1280: story list groups (End-of-treatment reviews last), App.listenStoryIds, every EOT case dialogue alternates
Doctor / patient with no blanks, every planned key present: Play all starts, text hidden until Show, 5 questions answered
(one wrong), best saved in done.listen2['story:<key>'], back link to the case; the admission, discharge and EOT case pages
show "Listening questions on this interview" exactly when a key exists and the link opens that story. QA_PORT picks the port.
Prints lines with "overflow False/True"; last line: errors [...]"""
import os, json
from playwright.sync_api import sync_playwright
PORT = os.environ.get('QA_PORT', '8765')
BASE = f'http://localhost:{PORT}/index.html'
OUT = '/tmp/qa-out'
os.makedirs(OUT, exist_ok=True)
errs = []
PLAN = ['mse-shota', 'mse-ren', 'mse-ayaka', 'mse-yumiko', 'mse-tetsuo', 'mse-chiyoko', 'mse-daisuke', 'mse-shigeru',
        'dis-shota', 'dis-yumiko', 'dis-ren', 'dis-tetsuo', 'dis-ayaka', 'dis-daisuke', 'dis-chiyoko', 'dis-shigeru',
        'eot-ocd', 'eot-ptsd', 'eot-hinata', 'eot-panic']
Q5 = [["Test question %d?" % i, ["a", "b", "c", "d"], i % 4, "Test explanation."] for i in range(5)]
TEST = "(()=>{const Q=%s;const n=%s.filter(k=>(window.LISTEN_Q||{})[k]).length;window._planHave=n;if(n<10)['mse-shota','dis-shota','eot-ocd'].forEach(k=>{if(!LISTEN_Q[k])LISTEN_Q[k]=Q})})()" % (json.dumps(Q5), json.dumps(PLAN))


def run(p, name, vp, scheme):
    b = p.chromium.launch()
    ctx = b.new_context(viewport=vp, color_scheme=scheme)
    ctx.add_init_script("window.addEventListener('DOMContentLoaded',()=>{" + TEST + "});")
    pg = ctx.new_page()
    pg.on('console', lambda m: errs.append(name + ': ' + m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(name + ': ' + str(e)))
    pg.goto(BASE + '#/'); pg.wait_for_timeout(800)
    pg.evaluate("()=>{const o=App.speakAsync;App.speakAsync=(t,op)=>{window._said=(window._said||[]).concat([t]);return o(t,op)};}")

    def go(h): pg.evaluate("h=>{location.hash=h}", h); pg.wait_for_timeout(350)

    def check(label, quiet=False):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.querySelector('#view').innerText.includes('《')")
        if not quiet: print(f'{name} {label} overflow {ov}')
        if ov or raw: errs.append(f'{name} {label}: overflow={ov} raw={raw}')

    keys = pg.evaluate("ks=>ks.filter(k=>(LISTEN_Q[k]||[]).length)", PLAN)
    print(name, 'planned keys present', pg.evaluate("window._planHave"), '| tested', len(keys))
    go('#/listen?tab=story')
    h2 = pg.evaluate("[...document.querySelectorAll('#lpbody h2')].map(h=>h.dataset.en||h.textContent)")
    if any(k.startswith('eot-') for k in keys):
        if not h2 or 'End-of-treatment reviews' not in h2[-1]: errs.append(f'{name}: EOT group not last {h2}')
    ids = pg.evaluate("App.listenStoryIds()")
    for k in keys:
        if k not in ids: errs.append(f'{name}: listenStoryIds lacks {k}')
    check('story list')
    pg.screenshot(path=f'{OUT}/lcases2_list_{name}.png', full_page=True)
    st = pg.evaluate("""()=>{const r={};(PSYCH_EOT_CASES||[]).forEach(c=>{const d=App.eotDialogue(c);r['eot-'+c.id]=[d.lines.length,d.roles[1],d.lines.filter(l=>/＿/.test(l[1])).length,d.lines.some((l,i)=>l[0]!==(i%2)),d.lines[0]&&d.lines[0][4]]});return r}""")
    if name == 'phone': print('eot dialogues', json.dumps(st, ensure_ascii=False))
    for k, (n, who, blanks, alt, first) in st.items():
        if n < 6 or blanks or alt or first != 'Doctor': errs.append(f'{name}: dialogue {k} lines={n} blanks={blanks} notalternating={alt} first={first}')
    sample = keys if name == 'phone' else [k for k in keys if k.endswith('-shota') or k.startswith('eot-')][:3]
    for sid in sample:
        go('#/listen?tab=story&id=' + sid)
        pg.evaluate("window._said=[]")
        pg.locator('#lpall').click(); pg.wait_for_timeout(400)
        stat = pg.locator('#lpstat').inner_text(); pg.locator('#lpstop').click()
        if 'Line' not in stat: errs.append(f'{name} {sid}: Play all did not start ({stat!r})')
        if pg.locator('#lptext').is_visible(): errs.append(f'{name} {sid}: text visible before Show')
        pg.locator('#lpshow').click(); pg.wait_for_timeout(150)
        who = pg.evaluate("[...document.querySelectorAll('#lptext .who')].map(w=>w.textContent)")
        if not who or who[0] != 'Doctor' or len(set(who)) < 2: errs.append(f'{name} {sid}: speakers {sorted(set(who))}')
        check('story ' + sid, quiet=name == 'phone' and sid not in sample[:3])
        if sid.startswith('eot-') and name in ('phone', 'phonedark'): pg.screenshot(path=f'{OUT}/lcases2_{sid}_{name}.png', full_page=False)
        answers = pg.evaluate('i=>LISTEN_Q[i].map(q=>q[2])', sid)
        res, n = [], 0
        while pg.locator('#lpq .opt').count() and not pg.locator('#lpq [data-act=retry]').count() and n < 10:
            a = answers[n]; k = a if n != 1 else (a + 1) % 4
            pg.locator(f'#lpq .opt[data-k="{k}"]').click()
            res.append(pg.locator('#lpq .feedback.ok').count() == 1)
            pg.locator('#lpq [data-act=next]').click(); n += 1
        if res != [i != 1 for i in range(len(res))] or len(res) != len(answers): errs.append(f'{name} {sid}: quiz results {res}')
        saved = pg.evaluate(f"(App.state.done.listen2||{{}})['story:{sid}']")
        if saved is None: errs.append(f'{name} {sid}: best not saved')
        back = pg.locator('#lpbody a.btn').first.get_attribute('href')
        want = {'mse': '#/psych/mcase/', 'dis': '#/psych/dcase/', 'eot': '#/psych/ecase/'}[sid[:3]] + sid[4:]
        if back != want: errs.append(f'{name} {sid}: back link {back}')
        print(name, sid, '| play', stat, '| lines', len(who), '| quiz', res, 'saved', saved, '| back', back)
    # case pages: the link exists exactly when the key does, and opens the story
    pages = pg.evaluate("""()=>[].concat((PSYCH_MSE_CASES||[]).map(c=>['mse-'+c.id,'#/psych/mcase/'+c.id]),(PSYCH_DISCHARGE_CASES||[]).map(c=>['dis-'+c.id,'#/psych/dcase/'+c.id]),(PSYCH_EOT_CASES||[]).map(c=>['eot-'+c.id,'#/psych/ecase/'+c.id]))""")
    nlink = 0
    for k, href in (pages if name == 'phone' else pages[:2] + pages[-2:]):
        go(href)
        has = pg.evaluate("k=>(LISTEN_Q[k]||[]).length>0", k)
        ln = pg.locator(f'#view a[href="#/listen?tab=story&id={k}"]').count()
        if has != (ln == 1): errs.append(f'{name} {href}: key {has} link count {ln}')
        nlink += ln
        check('case ' + k, quiet=True)
    print(name, 'case pages', len(pages) if name == 'phone' else 4, 'with link', nlink, 'overflow False' if not any('case ' in e for e in errs) else 'overflow True')
    k = next((k for k in keys if k.startswith('dis-')), None)
    if k:
        go('#/psych/dcase/' + k[4:]); pg.locator(f'#view a[href="#/listen?tab=story&id={k}"]').click(); pg.wait_for_timeout(350)
        if pg.evaluate("location.hash") != f'#/listen?tab=story&id={k}': errs.append(f'{name}: case link did not open the story')
        if name == 'phone': go('#/psych/ecase/' + next((x[4:] for x in keys if x.startswith('eot-')), 'ocd')); pg.screenshot(path=f'{OUT}/lcases2_ecase_{name}.png', full_page=False)
    go('#/progress'); check('progress')
    b.close()


with sync_playwright() as p:
    run(p, 'phone', {'width': 390, 'height': 844}, 'light')
    run(p, 'phonedark', {'width': 390, 'height': 844}, 'dark')
    run(p, 'desk', {'width': 1280, 'height': 900}, 'light')
print('errors', errs)
