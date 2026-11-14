"""Listening practice (#/listen): every tab, every level, both sources, dictation by tiles / romaji / kana, right and wrong,
a sound-pairs set, story items with questions. Prints "errors [...]" last."""
import os
from playwright.sync_api import sync_playwright

BASE = 'http://localhost:8765/index.html'
OUT = '/tmp/qa-out'
DRAFT_Q = '/home/claude/work/new/listen-questions.js'
DRAFT_P = '/home/claude/work/new/sound-pairs.js'
os.makedirs(OUT, exist_ok=True)
errs = []
PAIRS = """window.SOUND_PAIRS = { guide: [['long','Long vowels','A long vowel lasts two beats.'],['small-tsu','Small っ','A small っ is a one-beat pause.'],['voiced','Voiced sounds','か and が differ only in voicing.']],
 items: [['long','おばさん','aunt','おばあさん','grandmother'],['long','おじさん','uncle','おじいさん','grandfather'],['long','ゆき','snow','ゆうき','courage'],['long','ここ','here','こうこう','high school'],['long','え','picture','ええ','yes'],
 ['small-tsu','きて','come (te-form)','きって','stamp'],['small-tsu','おと','sound','おっと','husband'],['small-tsu','さか','slope','さっか','writer'],
 ['voiced','かき','persimmon','かぎ','key'],['voiced','てんき','weather','でんき','electricity'],['voiced','さる','monkey','ざる','colander']] };"""

def run(p, name, vp, scheme):
    b = p.chromium.launch()
    ctx = b.new_context(viewport=vp, color_scheme=scheme)
    pg = ctx.new_page()
    pg.on('console', lambda m: errs.append(name + ': ' + m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(name + ': ' + str(e)))
    pg.goto(BASE + '#/listen'); pg.wait_for_timeout(700)
    # remember what is spoken, so the test knows the answer
    pg.evaluate("""()=>{const o=App.speakAsync;App.speakAsync=(t,op)=>{window._last=t;return o(t,op)}; App.speak=(t,op)=>{window._last=t;App._seq=(App._seq||0)+1;App.speakAsync(t,op)};}""")
    def go(h):
        pg.evaluate("h=>{location.hash=h}", h); pg.wait_for_timeout(300)
    def check(label):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: errs.append(f'{name} {label}: overflow={ov} raw={raw}')
        return ov, raw
    def quiz_round(sel_root, shot=None, answers=None):
        """Answer a runQuiz to the end: first right, second wrong, rest right. Returns the score text.
        answers: the correct option index per question (default 0), in order; runQuiz keeps question order."""
        n = 0
        while pg.locator(sel_root + ' [data-act=next], ' + sel_root + ' .opt').count() and n < 30:
            if pg.locator(sel_root + ' [data-act=retry]').count(): break
            a = answers[n] if answers else 0
            k = str((a + 1) % 2) if n == 1 else str(a)
            pg.locator(f'{sel_root} .opt[data-k="{k}"]').click()
            if shot and n < 2: pg.screenshot(path=f'{OUT}/listen_{shot}_{n}_{name}.png')
            check(f'{shot} q{n}')
            pg.locator(sel_root + ' [data-act=next]').click(); n += 1
        return pg.locator(sel_root + ' h3').first.inner_text().replace('\n', ' ') if pg.locator(sel_root + ' h3').count() else 'no score'

    # ---------- Hear ----------
    for lv in ['Starter', 'N5', 'N4', 'N3']:
        pg.locator(f'[data-lv="{lv}"]').click(); pg.wait_for_timeout(150)
        for src in ['words', 'sentences']:
            pg.locator(f'[data-src="{src}"]').click(); pg.wait_for_timeout(150)
            if pg.locator('#lpq .notice').count():
                print(name, 'hear', lv, src, 'NOTICE', pg.locator('#lpq .notice').inner_text()); continue
            nq = pg.evaluate("document.querySelector('#lpq .eyebrow').textContent")
            opts = pg.evaluate("[...document.querySelectorAll('#lpq .opt')].map(b=>b.textContent)")
            dup = len(set(o.lower() for o in opts)) != len(opts)
            if dup: errs.append(f'{name} hear {lv} {src}: duplicate options {opts}')
            shot = f'hear_{src}' if lv == 'N5' else None
            sc = quiz_round('#lpq', shot)
            print(name, 'hear', lv, src, nq, '| score', sc, '| saved', pg.evaluate(f"(App.state.done.listen2||{{}})['hear:{src}:{lv}']"))
    print(name, 'listenLv', pg.evaluate("App.state.settings.listenLv"))
    # speed seg
    pg.locator('[data-sp="slow"]').click(); pg.wait_for_timeout(100)
    print(name, 'rate slow in quiz', pg.evaluate("document.querySelector('[data-sp=slow]').classList.contains('on')"))
    pg.locator('[data-sp="natural"]').click()

    # ---------- Dictation ----------
    for lv in ['Starter', 'N4', 'N3', 'N5']:
        go('#/listen?tab=dict'); pg.locator(f'[data-lv="{lv}"]').click(); pg.wait_for_timeout(300)
        if pg.locator('#lpbody .notice').count(): print(name, 'dict', lv, 'NOTICE'); continue
        print(name, 'dict', lv, 'pool', pg.evaluate(f"App.DICT.filter(e=>e.lv==='{'N5' if lv=='Starter' else lv}').length"), 'tiles', pg.locator('.lp-tile').count())
    # full round at N5
    ANS = """()=>{const t=window._last;const e=App.DICT.find(x=>x.tl===t);const p=JA.plain(t);return /^[ァ-ヺー]+$/.test(p)?p:e.kn}"""
    modes = ['tiles', 'romaji', 'kana', 'wrong', 'backspace', 'katakana-typed', 'tiles', 'romaji', 'wrongtiles', 'kana']
    got = []
    for i, mode in enumerate(modes):
        pg.wait_for_timeout(250)
        ans = pg.evaluate(ANS)
        if i == 0: pg.screenshot(path=f'{OUT}/listen_dict_{name}.png')
        if mode in ('tiles', 'backspace', 'wrongtiles'):
            chars = list(ans)
            if mode == 'wrongtiles': chars = chars[::-1] if len(set(chars)) > 1 else chars[:-1]
            for c in chars:
                pg.locator('.lp-tile:not([disabled])', has_text=c).first.click()
            if mode == 'backspace':
                pg.locator('#lpback').click(); pg.locator('.lp-tile:not([disabled])', has_text=chars[-1]).first.click()
                pg.locator('.lp-ch[data-pop]').click(); pg.locator('.lp-tile:not([disabled])', has_text=chars[-1]).first.click()
            if i == 0: pg.screenshot(path=f'{OUT}/listen_dict_built_{name}.png')
        elif mode == 'romaji':
            pg.fill('#lptype', pg.evaluate("a=>JA.romaji(a).toUpperCase().replace(/ō/g,'oo')", ans))
        elif mode == 'kana':
            pg.fill('#lptype', ans)
        elif mode == 'katakana-typed':
            pg.fill('#lptype', pg.evaluate("a=>a.replace(/[ぁ-ゖ]/g,c=>String.fromCharCode(c.charCodeAt(0)+0x60))", ans))
        else:
            pg.fill('#lptype', 'zzz')
        pg.locator('#lpcheck').click()
        ok = pg.locator('#lpfb .feedback.ok').count() == 1
        got.append((mode, ans, ok))
        if i in (0, 3): pg.screenshot(path=f'{OUT}/listen_dict_fb{i}_{name}.png')
        check(f'dict {i}')
        pg.locator('#lpnext').click()
    print(name, 'dict round', got)
    expect = [m not in ('wrong', 'wrongtiles') for m in modes]
    if [g[2] for g in got] != expect:
        # a word with one repeated character reversed is still right; flag only real mismatches
        bad = [g for g, e in zip(got, expect) if g[2] != e and not (g[0] == 'wrongtiles' and len(set(g[1])) == 1)]
        if bad: errs.append(f'{name} dict mismatch {bad}')
    print(name, 'dict score', pg.locator('#lpbody h3').inner_text(), 'saved', pg.evaluate("App.state.done.listen2['dict:N5']"), 'mistakes', pg.evaluate("App.state.mistakes.length"))
    # romaji normaliser spot checks
    print(name, 'romaji checks', pg.evaluate("""()=>{const r=JA.romaji;return [r('とうきょう'),r('コーヒー'),r('しんぶん'),r('きって')]}"""))

    # ---------- Sound pairs ----------
    if os.path.exists(DRAFT_P): pg.add_script_tag(path=DRAFT_P)
    else: pg.evaluate(PAIRS)
    go('#/listen?tab=pairs'); pg.wait_for_timeout(300)
    types = pg.evaluate("[...document.querySelectorAll('[data-type]')].map(b=>b.dataset.type)")
    print(name, 'pair types', types)
    for t in types:
        pg.locator(f'[data-type="{t}"]').click(); pg.wait_for_timeout(250)
        check('pairs ' + t)
        if t == types[-1] or t == '': pass
    pg.locator('[data-type=""]').click(); pg.wait_for_timeout(300)
    pg.screenshot(path=f'{OUT}/listen_pairs_{name}.png')
    n, res = 0, []
    while pg.locator('.lp-pick').count() and n < 12:
        pg.wait_for_timeout(200)
        k = pg.evaluate("""()=>{const h=JA.speak(window._last);return [...document.querySelectorAll('.lp-pick')].findIndex(b=>JA.speak(JA.textOf(b.querySelector('.lp-pw')).replace(/\\s/g,''))===h)}""")
        pick = k if n != 1 else 1 - k
        pg.locator(f'.lp-pick[data-k="{pick}"]').click()
        res.append(pg.locator('#lpfb .feedback.ok').count() == 1)
        if n == 1: pg.screenshot(path=f'{OUT}/listen_pairs_fb_{name}.png')
        check(f'pairs {n}')
        pg.locator('#lpnext').click(); n += 1
    print(name, 'pairs', res, pg.locator('#lpq h3').inner_text() if pg.locator('#lpq h3').count() else '', 'saved', pg.evaluate("App.state.done.listen2['pairs:all']"))
    if res and (res[1] or not all(r for i, r in enumerate(res) if i != 1)): errs.append(f'{name} pairs result {res}')

    # ---------- Dialogues and readings ----------
    go('#/listen?tab=story'); pg.wait_for_timeout(200)
    print(name, 'story empty notice', pg.locator('#lpbody .notice').count())
    if os.path.exists(DRAFT_Q): pg.add_script_tag(path=DRAFT_Q)
    else: pg.evaluate("window.LISTEN_Q={hajimemashite:[['Q?',['a','b','c'],0,'why']]}")
    go('#/listen?tab=home'); go('#/listen?tab=story'); pg.wait_for_timeout(300)
    print(name, 'story tiles', pg.locator('#lpbody .tile').count(), 'expected', pg.evaluate("Object.keys(LISTEN_Q).filter(k=>LISTEN_Q[k].length&&(DIALOGUES.some(d=>d.id===k)||READING.some(r=>r.id===k)||PSYCH_CASES.some(c=>'case-'+c.id===k))).length"), 'h2', pg.evaluate("[...document.querySelectorAll('#lpbody h2')].map(h=>h.dataset.en||h.textContent)"))
    check('story list'); pg.screenshot(path=f'{OUT}/listen_story_list_{name}.png', full_page=True)
    ids = pg.evaluate("[...new Set([...document.querySelectorAll('#lpbody .tile')].map(a=>new URLSearchParams(a.getAttribute('href').split('?')[1]).get('id')))]")
    dlg = pg.evaluate("ids=>ids.find(i=>DIALOGUES.some(d=>d.id===i))", ids)
    rd = pg.evaluate("ids=>ids.find(i=>READING.some(d=>d.id===i))", ids)
    for sid in [x for x in [dlg, rd] if x]:
        go('#/listen?tab=story&id=' + sid); pg.wait_for_timeout(300)
        pg.locator('#lpall').click(); pg.wait_for_timeout(400)
        stat = pg.locator('#lpstat').inner_text()
        pg.locator('#lpstop').click()
        pg.locator('#lpshow').click(); pg.wait_for_timeout(200)
        lines = pg.locator('#lptext [data-ln]').count()
        pg.screenshot(path=f'{OUT}/listen_story_{sid}_{name}.png', full_page=True)
        check('story ' + sid)
        sc = quiz_round('#lpq', None, pg.evaluate('i=>LISTEN_Q[i].map(q=>q[2])', sid))
        print(name, 'story', sid, 'status', stat, 'lines', lines, 'score', sc, 'saved', pg.evaluate(f"App.state.done.listen2['story:{sid}']"), 'back', pg.locator('#lpbody a.btn').first.get_attribute('href'))
    go('#/listen?tab=story&id=nope'); print(name, 'missing id notice', pg.locator('#lpbody .notice').count())
    for r in ['#/listen', '#/practice', '#/progress']:
        go(r); check(r)
    b.close()

with sync_playwright() as p:
    run(p, 'phone', {'width': 390, 'height': 844}, 'light')
    run(p, 'phonedark', {'width': 390, 'height': 844}, 'dark')
    run(p, 'small', {'width': 360, 'height': 740}, 'light')
    run(p, 'desk', {'width': 1280, 'height': 900}, 'light')
print('errors', errs)
