"""0.25.0 Today's practice (#/today, js/today.js) and the Today tiles on Home and Practice. Phone 390 and desktop 1280, light
and dark. Seeds the `miss` arrays of every drill (cloze, transform, pairs, sounds, pictures, signs, errors, reply) and
state.mistakes (dictionary ids) in the stored state with real ids (the errors / reply fixtures are added when those sets have
fewer than 10 items), then: 12 questions, all from the mistakes, at most 3 from one drill, every drill with mistakes present;
answers right and wrong; a right answer removes the id from that drill's miss list (state.mistakes for vocabulary), a wrong
one keeps it; the day's best is saved in done.today['YYYY-MM-DD'] and shown ("Done today"), days older than 90 are dropped;
Go again; with no mistakes the round is filled with new N5 items (cloze, errors, reply, vocab), at N3 after a placement at
N3; tiles first on Practice and first in Home → Today; #/progress row. QA_PORT picks the port.
Prints lines with "overflow False/True"; last line: errors [...]"""
import os, json
from playwright.sync_api import sync_playwright
PORT = os.environ.get('QA_PORT', '8765')
URL = f'http://localhost:{PORT}/index.html'
FXE, FXR = '/home/claude/work/fixtures/errors.js', '/home/claude/work/fixtures/reply.js'
os.makedirs('/tmp/qa-out', exist_ok=True)
problems = []
INJ = """()=>{if((window.GRAMMAR_ERRORS||[]).length<10)window.GRAMMAR_ERRORS=(window.GRAMMAR_ERRORS||[]).concat(FX_ERRORS);
  if((window.LISTEN_REPLY||[]).length<10)window.LISTEN_REPLY=(window.LISTEN_REPLY||[]).concat(FX_REPLY)}"""
# Four real ids per drill, newest last except cloze (newest first). Pictures: '<set>:<part>' of sets with a picture or cards.
SEED = """()=>{const d=App.state.done,ids={};const four=(a)=>a.slice(0,4);
  const pick=(a)=>four(App.shuffle(a));
  ids.cloze=pick((window.GRAMMAR_CLOZE||[]).map(x=>x.id));
  ids.transform=pick((window.GRAMMAR_TRANSFORM||[]).filter(x=>Array.isArray(x.wrong)&&x.wrong.length>=3).map(x=>x.id));
  ids.pairs=pick((window.WORD_PAIRS||[]).map(x=>x.id));
  ids.sounds=pick(((window.SOUND_WORDS||{}).items||[]).map(x=>x.id));
  ids.pictures=pick((window.PICTURE_SETS||[]).filter(s=>s.kind==='cards'||(window.PICTURE_ART||{})[s.art]).map(s=>s.id+':'+s.parts[0].id));
  ids.signs=pick(((window.SIGNS||{}).signs||[]).map(x=>x.id));
  ids.errors=pick(App.errorsItems().map(x=>x.id));
  ids.reply=pick(App.replyItems().map(x=>x.id));
  Object.keys(ids).forEach(k=>{d[k]=d[k]&&typeof d[k]==='object'?d[k]:{};d[k].miss=ids[k].slice();});
  ids.vocab=pick(App.DICT.filter(e=>e.lv==='N5'&&!/＿/.test(e.tl)).map(e=>e.id));App.state.mistakes=ids.vocab.slice();
  App.save();return ids}"""
MISS_OF = "([k,id])=>k==='vocab'?App.state.mistakes.includes(id):((App.state.done[k]||{}).miss||[]).includes(id)"


def run(b, w, h, name, dark=False):
    ctx = b.new_context(viewport={'width': w, 'height': h}, color_scheme='dark' if dark else 'light')
    pg = ctx.new_page()
    errs = []
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(URL + '#/'); pg.wait_for_timeout(500)
    pg.evaluate("()=>{localStorage.clear()}"); pg.reload(); pg.wait_for_timeout(600)
    pg.add_script_tag(path=FXE); pg.add_script_tag(path=FXR); pg.evaluate(INJ)

    def go(hh): pg.evaluate("h=>{location.hash=h}", hh); pg.wait_for_timeout(350)

    def check(tag, quiet=False):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.querySelector('#view').innerText.includes('《')")
        if not quiet: print(f'{name} {tag} overflow {ov}')
        if ov or raw: problems.append(f'{name} {tag} overflow={ov} raw={raw}')

    ids = pg.evaluate(SEED)
    # the seeded state must survive a reload (it is in localStorage); the fixtures are injected again
    pg.reload(); pg.wait_for_timeout(600); pg.add_script_tag(path=FXE); pg.add_script_tag(path=FXR); pg.evaluate(INJ)
    if pg.evaluate("((App.state.done.errors||{}).miss||[]).length") != len(ids['errors']): problems.append(f'{name} seeded miss not stored')
    old = pg.evaluate("()=>{const d=(n)=>{const x=new Date(Date.now()-n*864e5);return x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')};App.state.done.today={[d(100)]:40,[d(30)]:70};App.save();return [d(100),d(30)]}")

    # Home and Practice tiles
    go('#/'); check('home')
    first = pg.evaluate("()=>{const h=[...document.querySelectorAll('#view h2')].find(x=>(x.dataset.en||x.textContent).trim()==='Today');const g=h&&h.nextElementSibling;const a=g&&g.querySelector('a.tile');return a?a.getAttribute('href')+' | '+a.innerText.replace(/\\s+/g,' '):null}")
    print(' home Today first tile:', first)
    if not first or not first.startswith('#/today'): problems.append(f'{name} Today tile not first in Home → Today')
    if name == 'phone': pg.screenshot(path=f'/tmp/qa-out/today_home_{name}.png', full_page=True)
    go('#/practice'); check('practice')
    pf = pg.evaluate("document.querySelector('#view a.tile').getAttribute('href')")
    print(' practice first tile:', pf, '|', pg.evaluate("document.querySelector('#view a.tile').innerText.replace(/\\s+/g,' ')"))
    if pf != '#/today': problems.append(f'{name} Today not first on Practice')
    for hh in ['#/errors', '#/reply']:
        if not pg.locator(f'#view a.tile[href="{hh}"]').count(): problems.append(f'{name} Practice lacks {hh}')
    pg.screenshot(path=f'/tmp/qa-out/today_practice_{name}.png', full_page=True)

    go('#/today'); check('page')
    waiting = pg.locator('.td-set').inner_text()
    print(' set:', waiting.replace('\n', ' ')[:80])
    pg.locator('#tdgo').click(); pg.wait_for_timeout(300)
    qs = pg.evaluate("document.querySelector('#tdround').drQs.map(q=>[q.drill,q.id,q.src])")
    per = {}
    for d, i, s in qs: per[d] = per.get(d, 0) + 1
    print(' round', len(qs), json.dumps(per))
    if len(qs) != 12: problems.append(f'{name} round has {len(qs)} questions')
    if any(v > 3 for v in per.values()): problems.append(f'{name} more than 3 from one drill {per}')
    if any(s != 'miss' for _, _, s in qs): problems.append(f'{name} new items although there are 36 mistakes')
    if len(per) < 4: problems.append(f'{name} only {len(per)} drills in the round')
    for d, i, s in qs:
        if i not in ids.get(d, []): problems.append(f'{name} {d}:{i} was not a seeded mistake')
    # answer: even right, odd wrong
    for k in range(12):
        pg.wait_for_timeout(120)
        q = pg.evaluate("()=>{const b=document.querySelector('#tdround'),q=b.drQs[b.drAt()];return {drill:q.drill,id:q.id,ok:q.opts?q.opts.findIndex(o=>o.ok):-1}}")
        right = k % 2 == 0
        if k == 0: pg.screenshot(path=f'/tmp/qa-out/today_q_{name}.png', full_page=True)
        if q['ok'] >= 0:
            n = pg.locator('.dr-q .dr-opts .opt').count()
            idx = q['ok'] if right else (q['ok'] + 1) % n
            pg.locator('.dr-q .dr-opts .opt').nth(idx).click()
        elif q['drill'] == 'errors':
            i = pg.evaluate("id=>GRAMMAR_ERRORS.find(x=>x.id===id).i", q['id'])
            nt = pg.locator('.dr-q .er-tile').count()
            pg.locator(f'.dr-q .er-tile[data-w="{i if right else (i + 1) % nt}"]').click()
        elif q['drill'] == 'pictures':
            sid, pid = q['id'].split(':', 1)
            tgt = pid if right else pg.evaluate("([s,p])=>App.pictures.get(s).parts.find(x=>x.id!==p).id", [sid, pid])
            pg.locator(f'.dr-q .pic-pin[data-p="{tgt}"], .dr-q .pic-card[data-p="{tgt}"]').first.click()
        else:
            problems.append(f'{name} cannot answer {q}'); break
        pg.wait_for_timeout(100)
        fb = pg.locator('.dr-q .feedback')
        if not fb.count(): problems.append(f'{name} q{k} {q["drill"]} no feedback'); break
        got = 'ok' in fb.get_attribute('class').split()
        if got != right: problems.append(f'{name} q{k} {q["drill"]} feedback {got} expected {right}')
        still = pg.evaluate(MISS_OF, [q['drill'], q['id']])
        if right and still: problems.append(f'{name} q{k} right answer did not remove {q["drill"]}:{q["id"]}')
        if not right and not still: problems.append(f'{name} q{k} wrong answer dropped {q["drill"]}:{q["id"]}')
        if k == 1: pg.screenshot(path=f'/tmp/qa-out/today_fb_{name}.png', full_page=True)
        check(f'q{k} {q["drill"]}', quiet=k > 2)
        pg.locator('.dr-q [data-act=next]').click(); pg.wait_for_timeout(60)
    day = pg.evaluate("App.today()")
    best = pg.evaluate(f"(App.state.done.today||{{}})['{day}']")
    kept = pg.evaluate("Object.keys(App.state.done.today)")
    print(' best today', best, '| days kept', kept, '| done card', pg.locator('.dr-done').inner_text().replace('\n', ' ')[:90] if pg.locator('.dr-done').count() else None)
    if best != 50: problems.append(f'{name} day best {best}, expected 50')
    if old[0] in kept: problems.append(f'{name} day older than 90 not dropped')
    if old[1] not in kept: problems.append(f'{name} day 30 days ago dropped')
    if 'Done today: 50%' not in pg.locator('#view').inner_text(): problems.append(f'{name} "Done today" not shown')
    pg.screenshot(path=f'/tmp/qa-out/today_done_{name}.png', full_page=True)
    check('done')
    pg.locator('.dr-done [data-act=again]').click(); pg.wait_for_timeout(300)
    if pg.locator('.dr-q').count() != 1: problems.append(f'{name} Go again did not start a round')
    # no mistakes: new items at N5, then N3 after a placement at N3
    pg.evaluate("()=>{['cloze','transform','pairs','sounds','pictures','signs','errors','reply'].forEach(k=>{if(App.state.done[k])App.state.done[k].miss=[]});App.state.mistakes=[];App.save()}")
    for lv in ['N5', 'N3']:
        if lv == 'N3': pg.evaluate("()=>{App.state.level='N3';App.save()}")
        go('#/practice'); go('#/today'); pg.locator('#tdgo').click(); pg.wait_for_timeout(300)
        qs = pg.evaluate("document.querySelector('#tdround').drQs.map(q=>[q.drill,q.lv,q.src])")
        dr = sorted(set(d for d, _, _ in qs)); lvs = sorted(set(l for _, l, _ in qs))
        print(f' fill at {lv}: {len(qs)} questions, drills {dr}, levels {lvs}')
        if len(qs) != 12 or any(s != 'new' for _, _, s in qs): problems.append(f'{name} fill at {lv}: {len(qs)} {set(s for _,_,s in qs)}')
        if any(l != lv for l in lvs): problems.append(f'{name} fill at {lv} has levels {lvs}')
        if not set(dr) <= {'cloze', 'errors', 'reply', 'vocab'}: problems.append(f'{name} fill drills {dr}')
    go('#/progress'); check('progress')
    t = pg.evaluate("()=>{const t=document.querySelector('.ps-scores').innerText;const i=t.indexOf(\"Today's practice\");return i<0?'':t.slice(i,i+260).replace(/\\s+/g,' ')}")
    print(' progress:', t)
    if '50%' not in t: problems.append(f'{name} progress row lacks today')
    if errs: problems.append(f'{name} console: {errs[:5]}')
    ctx.close()


with sync_playwright() as p:
    b = p.chromium.launch()
    for args in [(390, 844, 'phone'), (390, 844, 'phonedark', True), (1280, 900, 'desk'), (1280, 900, 'deskdark', True)]:
        run(b, *args)
    b.close()
print('errors', problems)
