"""0.27.0 vocabulary quiz mode "Picture" (js/vocab.js): the picture (emoji card or a drawing with one highlighted pin) is the
question, choose the Japanese word among four. Phone 360x740 and desktop 1280x800, light and dark: status count, a full
round with right and wrong answers (click and keys), picture / options / raw notation / overflow on every question,
result card, saved best, My mistakes, a deck with fewer than 4 picture words, the other five modes still start.
Screenshots /tmp/qa-out/vocab-picture_<width>_<theme>_<cards|diagram>.png. Last line: errors [...]"""
import os, re
from playwright.sync_api import sync_playwright
URL = 'http://localhost:' + os.environ.get('QA_PORT', '8765') + '/index.html'
OUT = '/tmp/qa-out/'
os.makedirs(OUT, exist_ok=True)
problems = []

QSTATE = """()=>{const b=document.querySelector('#vq'); if(!b||!b.drQs||!b.querySelector('.dr-q')) return null;
  const q=b.drQs[b.drAt()], c=b.querySelector('.dr-q');
  const sv=c.querySelector('svg.pic-svg'), emo=c.querySelector('.pic-emo');
  const vis=sv?[...sv.querySelectorAll('.pic-pin')].filter(g=>getComputedStyle(g).display!=='none'):[];
  const r=sv?sv.getBoundingClientRect():(emo?emo.getBoundingClientRect():{width:0,height:0});
  return {id:q.id, right:q.opts.findIndex(o=>o.ok), kind:sv?'diagram':(emo?'cards':'none'),
    pins:vis.length, hl:vis.filter(g=>g.classList.contains('hl')).length, emo:emo?emo.textContent.trim():'',
    w:r.width, h:r.height, nopt:c.querySelectorAll('.dr-opts .opt').length,
    otl:c.querySelectorAll('.dr-opts .opt .tl').length, prompt:(c.querySelector('.vq-pq')||{}).textContent||''}}"""
RAW = "(()=>{const t=document.body.innerText; return /[《》｜]/.test(t)})()"
OVER = "document.documentElement.scrollWidth>innerWidth+1"


def line(name, tag, ok, extra=''):
    print(f'{name} {tag}: {"ok" if ok else "FAIL"} {extra}'.rstrip())
    if not ok: problems.append(f'{name} {tag} {extra}'.strip())


def run(b, w, h, theme):
    name = f'{w}_{theme}'
    ctx = b.new_context(viewport={'width': w, 'height': h}, color_scheme='dark' if theme == 'dark' else 'light')
    pg = ctx.new_page()
    errs = []
    ign = re.compile(r'(403|404|Failed to load resource)', re.I)
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and not ign.search(m.text) else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('response', lambda r: errs.append(f'HTTP {r.status} {r.url}') if r.status >= 400 and not re.search(r'(font|audio|\.mp3|\.ogg|\.m4a|\.woff)', r.url, re.I) else None)
    pg.goto(URL + '#/'); pg.wait_for_timeout(500)
    pg.evaluate("()=>{localStorage.clear()}"); pg.reload(); pg.wait_for_timeout(800)
    if theme == 'dark':
        dk = pg.evaluate("document.documentElement.dataset.theme||getComputedStyle(document.body).backgroundColor")
        print(name, 'theme', dk)

    def go(hh): pg.evaluate("h=>{location.hash=h}", hh); pg.wait_for_timeout(400)
    go('#/vocab')
    segs = pg.evaluate("[...document.querySelectorAll('[data-vm]')].map(b=>b.dataset.vm)")
    line(name, 'mode buttons', segs == ['meaning', 'recall', 'reading', 'context', 'type', 'picture'], str(segs))
    intro = pg.locator('#app h1 ~ p.muted').first.inner_text() if pg.locator('#app h1 ~ p.muted').count() else pg.locator('p.muted').first.inner_text()
    line(name, 'intro mentions six ways and Picture', 'six ways' in intro and 'Picture' in intro)
    pg.select_option('#vqdeck', 'lv-N5'); pg.locator('[data-vm=picture]').click(); pg.locator('[data-vc="10"]').click()
    stat = pg.locator('#vqstat').inner_text()
    m = re.search(r'(\d+) words in this deck have a picture', stat)
    line(name, 'status count > 100', bool(m) and int(m.group(1)) > 100, stat[:90].replace('\n', ' '))
    pg.locator('#vqgo').click(); pg.wait_for_timeout(300)
    shots, n, wrong_ids, kinds = set(), 0, [], {}
    rounds = 0
    while True:
        st = pg.evaluate(QSTATE)
        if not st:
            break
        kinds[st['kind']] = kinds.get(st['kind'], 0) + 1
        pic_ok = (st['kind'] == 'diagram' and st['pins'] == 1 and st['hl'] == 1) or (st['kind'] == 'cards' and st['emo'] != '')
        pic_ok = pic_ok and st['w'] > 20 and st['h'] > 20
        bad = []
        if not pic_ok: bad.append(f"picture {st}")
        if st['nopt'] != 4 or st['otl'] != 4: bad.append(f"options {st['nopt']}/{st['otl']}")
        if not st['prompt'].startswith('What is this? ('): bad.append('prompt ' + st['prompt'])
        if pg.evaluate(RAW): bad.append('raw notation')
        if pg.evaluate(OVER): bad.append('horizontal overflow')
        if pg.locator('#vq .dr-q .say').count(): bad.append('speaker before answering')
        if rounds == 0: line(name, f"q{n + 1} {st['kind']}", not bad, '; '.join(bad))
        elif bad: line(name, f"extra q {st['kind']}", False, '; '.join(bad))
        if st['kind'] in ('cards', 'diagram') and st['kind'] not in shots:
            pg.locator('#vq .dr-q').scroll_into_view_if_needed()
            pg.evaluate("document.querySelector('#vq .dr-q').scrollIntoView({block:'start'})"); pg.wait_for_timeout(150)
            pg.screenshot(path=OUT + f"vocab-picture_{w}_{theme}_{st['kind']}.png"); shots.add(st['kind'])
        r = st['right']
        wrong = rounds == 0 and n in (0, 3, 6)
        k = (r + 1) % 4 if wrong else r
        if rounds == 0 and n == 1:
            pg.locator('body').click(position={'x': 2, 'y': 2}); pg.keyboard.press(str(k + 1))
        else:
            pg.locator('#vq .dr-opts .opt').nth(k).click()
        pg.wait_for_timeout(80)
        if wrong: wrong_ids.append(st['id'])
        fb = pg.locator('#vq [data-fb]')
        okfb = fb.locator('.feedback.ok').count() == 1
        if rounds == 0:
            exp = [fb.locator('.say').count() >= 1, fb.locator('a', has_text='Word page').count() == 1,
                   fb.locator('a', has_text='Open the picture').count() == 1, '= ' in fb.inner_text(), okfb != wrong]
            if wrong: exp.append('You chose' in fb.inner_text())
            line(name, f'q{n + 1} feedback', all(exp), str(exp))
            if pg.evaluate(RAW) or pg.evaluate(OVER): line(name, f'q{n + 1} after answer raw/overflow', False)
        if rounds == 0 and n == 2:
            pg.locator('body').click(position={'x': 2, 'y': 2}); pg.keyboard.press('Enter')
        else:
            pg.locator('#vq [data-act=next]').click()
        pg.wait_for_timeout(80)
        n += 1
        if pg.locator('#vq .dr-done').count():
            if rounds == 0:
                done = pg.locator('#vq .dr-done').inner_text()
                line(name, 'result card', '7 / 10' in done and pg.locator('#vq .dr-done [data-act=retry]').count() == 1, done[:60].replace('\n', ' '))
                bestv = pg.evaluate("App.state.done.vocab && App.state.done.vocab['lv-N5:picture']")
                line(name, "done.vocab['lv-N5:picture'] is a number", isinstance(bestv, (int, float)), str(bestv))
                seg = pg.locator('[data-vm=picture]').inner_text()
                line(name, 'best in mode button', '70%' in seg, seg)
                mis = pg.evaluate("App.state.mistakes||[]")
                line(name, 'wrong answers in My mistakes', all(x in mis for x in wrong_ids), f'{wrong_ids} in {len(mis)}')
                pg.screenshot(path=OUT + f'vocab-picture_{w}_{theme}_done.png')
            if len(shots) == 2 or rounds >= 4:
                break
            rounds += 1; n = 0
            first = pg.evaluate("document.querySelector('#vq').drQs.map(q=>q.id).join()")
            pg.locator('#vq .dr-done [data-act=retry]').click(); pg.wait_for_timeout(200)
            if rounds == 1:
                nxt = pg.evaluate("document.querySelector('#vq').drQs.map(q=>q.id).join()")
                line(name, 'New round starts a new set of words', first != nxt)
    line(name, 'both kinds of picture seen', shots == {'cards', 'diagram'}, f'{kinds}')
    # A deck with fewer than 4 picture words
    go('#/vocab'); pg.locator('[data-vm=picture]').click()
    decks = pg.evaluate("[...document.querySelectorAll('#vqdeck option')].map(o=>o.value)")
    small = None
    for d in decks:
        pg.select_option('#vqdeck', d); pg.wait_for_timeout(30)
        if pg.locator('#vqgo').is_disabled():
            small = d; break
    if small:
        note = pg.locator('#vqstat .notice').inner_text() if pg.locator('#vqstat .notice').count() else ''
        line(name, f'small deck {small} notice + Start disabled', ('Picture mode' in note or 'My mistakes' in note), note[:110])
    else:
        line(name, 'a deck with fewer than 4 picture words found', False)
    # The other five modes still start
    pg.select_option('#vqdeck', 'lv-N5')
    for md in ['meaning', 'recall', 'reading', 'context', 'type']:
        pg.locator(f'[data-vm={md}]').click(); pg.locator('#vqgo').click(); pg.wait_for_timeout(250)
        okm = pg.locator('#vqtype').count() == 1 if md == 'type' else pg.locator('#vq .opt').count() >= 2
        line(name, f'mode {md} starts', okm)
        if md == 'meaning':   # keys still work in a runQuiz mode after a Picture round
            pg.locator('body').click(position={'x': 2, 'y': 2}); pg.keyboard.press('1'); pg.wait_for_timeout(80)
            line(name, 'key 1 answers in Meaning after Picture', pg.locator('#vq .opt:disabled').count() >= 1)
    # Progress page lists Picture
    go('#/progress'); pg.wait_for_timeout(300)
    line(name, 'Progress lists Picture', 'Picture' in pg.locator('#app').inner_text() if pg.locator('#app').count() else 'Picture' in pg.locator('body').inner_text())
    if errs: problems.extend(f'{name} {e}' for e in errs[:5])
    ctx.close()


with sync_playwright() as p:
    b = p.chromium.launch()
    for w, h in [(360, 740), (1280, 800)]:
        for theme in ['light', 'dark']:
            run(b, w, h, theme)
    b.close()
print('errors', problems)
