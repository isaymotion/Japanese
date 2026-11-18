"""Sentence builder (#/build): chunker on 200 random sentences, judge rules, every level and source, a full round
(right, wrong, "also possible", hinted), furigana off, hear-it-first, mistakes round, score on #/progress, empty data,
phone + desktop, light + dark. Prints "errors [...]" last."""
import os, json, random
from playwright.sync_api import sync_playwright

BASE = 'http://localhost:' + os.environ.get('QA_PORT', '8765') + '/index.html'
OUT = '/tmp/qa-out'
os.makedirs(OUT, exist_ok=True)
errs = []

def run(p, name, vp, scheme, full):
    b = p.chromium.launch()
    ctx = b.new_context(viewport=vp, color_scheme=scheme)
    pg = ctx.new_page()
    pg.on('console', lambda m: errs.append(name + ': ' + m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(name + ': ' + str(e)))
    pg.goto(BASE + '#/build'); pg.wait_for_timeout(1200)
    pg.evaluate("""()=>{App.speak=(t,op)=>{window._last=t;App._seq=(App._seq||0)+1}}""")
    def go(h):
        pg.evaluate("h=>{location.hash=h}", h); pg.wait_for_timeout(350)
    def check(label):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: errs.append(f'{name} {label}: overflow={ov} raw={raw}')

    if full:
        # ---- chunker on 200 random raw sentences of every source ----
        raw = pg.evaluate("""()=>{const out=[];const re=/<div class="ex"><b>([\\s\\S]*?)<\\/b><span>/g;
          const dh=(h)=>{const d=document.createElement('div');d.innerHTML=h;return d.textContent.trim()};
          (window.LESSONS||[]).forEach(l=>{let m;re.lastIndex=0;while((m=re.exec(l.body||'')))out.push(dh(m[1]))});
          (window.DICT_EX||[]).forEach(x=>out.push(x[1]));
          Object.values(window.LESSON_EXTRA||{}).forEach(x=>(x.more||[]).forEach(m=>out.push(m[0])));return out}""")
        random.seed(23)
        sample = random.sample(raw, min(200, len(raw)))
        res = pg.evaluate("""(ss)=>ss.map(s=>{const c=App.buildChunks(s); if(!c) return null;
           return {ok: c.chunks.join(' ')+c.end===s.trim().replace(/\\s+/g,' '), empty: c.chunks.some(x=>!x.trim()), n:c.chunks.length}})""", sample)
        got = [r for r in res if r]
        bad = [sample[k] for k, r in enumerate(res) if r and (not r['ok'] or r['empty'])]
        print(name, 'chunker: sentences', len(sample), 'chunked', len(got), 'skipped', len(res) - len(got), 'bad', len(bad))
        if bad: errs.append(f'chunker bad {bad[:3]}')
        ex = pg.evaluate("""()=>['今日《きょう》 は 薬《くすり》 を 飲《の》んで います。','ここ で 写真《しゃしん》 を 撮《と》って も いい です か。',
          '廊下《ろうか》 を 走《はし》らないで ください。','私《わたし》 は 元気《げんき》 じゃ ありません。','夜《よる》 は あまり 眠《ねむ》れません でした。'].map(s=>App.buildChunks(s).chunks.join(' | '))""")
        for e in ex: print(name, 'chunks:', e)
        exp = ['今日《きょう》 は | 薬《くすり》 を | 飲《の》んで います', 'ここ で | 写真《しゃしん》 を | 撮《と》って も いい です か',
               '廊下《ろうか》 を | 走《はし》らないで ください', '私《わたし》 は | 元気《げんき》 じゃ ありません', '夜《よる》 は | あまり | 眠《ねむ》れません でした']
        if ex != exp: errs.append(f'chunk examples differ {ex}')
        pool = pg.evaluate("""()=>{const r={};App.buildSentences().forEach(s=>{const k=s.lv+':'+s.src;r[k]=(r[k]||0)+1});
          const bad=App.buildSentences().filter(s=>s.chunks.length<4||s.chunks.length>12).length;return [r,bad]}""")
        print(name, 'pool', json.dumps(pool[0]), 'out of 4-12:', pool[1])
        if pool[1]: errs.append('pool has sentences outside 4-12 tiles')
        # ---- judge ----
        J = pg.evaluate("""()=>{const m=['昨日《きのう》','友達《ともだち》 と','映画《えいが》 を','見《み》ました'];
          const m2=['この','店《みせ》 の','ランチ は','安《やす》い です'];const m3=['毎朝《まいあさ》','この','薬《くすり》 を','飲《の》みます'];
          return [App.buildJudge(m,m), App.buildJudge([m[1],m[0],m[2],m[3]],m), App.buildJudge([m[0],m[1],m[3],m[2]],m),
                  App.buildJudge([m2[1],m2[0],m2[2],m2[3]],m2), App.buildJudge([m2[2],m2[0],m2[1],m2[3]],m2), App.buildJudge([m[0],m[1],m[2]],m), App.buildJudge([m3[1],m3[2],m3[0],m3[3]],m3)]}""")
        print(name, 'judge', J)
        if J != ['right', 'alt', 'wrong', 'wrong', 'wrong', 'wrong', 'alt']: errs.append(f'judge {J}')

    # ---- settings: every level and source ----
    for src in ['lesson', 'word', 'both']:
        pg.locator(f'[data-bs="{src}"]').click(); pg.wait_for_timeout(120)
        lvs = pg.evaluate("[...document.querySelectorAll('[data-bl]')].map(b=>b.dataset.bl)")
        counts = []
        for lv in lvs:
            pg.locator(f'[data-bl="{lv}"]').click(); pg.wait_for_timeout(100)
            counts.append(lv + ' ' + pg.locator('#bdset p.small').inner_text().split(' ')[0])
        if full: print(name, 'source', src, counts)
        if src == 'both' and 'N1' in lvs:   # 0.28.0: N1 (lesson examples only in 0.28.0) gives a round that can be played
            pg.locator('[data-bl="N1"]').click(); pg.wait_for_timeout(100)
            if full: print(name, 'N1 sentences', pg.evaluate("App.buildChunks ? 1 : 0"), pg.locator('#bdset p.small').inner_text()[:80])
    check('settings')
    pg.screenshot(path=f'{OUT}/build_settings_{name}.png', full_page=True)

    # ---- a round at N5, both sources ----
    pg.locator('[data-bs="both"]').click(); pg.locator('[data-bl="N5"]').click(); pg.locator('[data-bc="10"]').click(); pg.wait_for_timeout(100)
    pg.locator('#bdgo').click(); pg.wait_for_timeout(200)
    model = lambda: pg.evaluate("()=>{const id=document.querySelector('[data-bid]').dataset.bid;return App.buildSentences().find(s=>s.id===id).chunks}")
    def tray_click(text_order):
        # tap tray tiles in the given chunk order (matching by the tile's data index into the shuffled tray)
        tiles = pg.evaluate("""()=>{const id=document.querySelector('[data-bid]').dataset.bid;return id}""")
        for c in text_order:
            k = pg.evaluate("""(c)=>{const s=App.buildSentences().find(x=>x.id===document.querySelector('[data-bid]').dataset.bid);
               const furi=App.state.settings.buildFuri!==false; const want=furi?c:JA.speak(c);
               const b=[...document.querySelectorAll('#bdtray [data-t]')].find(b=>{const cl=b.cloneNode(true);cl.querySelectorAll('rt,.rj').forEach(r=>r.remove());return cl.textContent.replace(/\\s/g,'')===JA.speak(c).replace(/\\s/g,'')});
               return b?b.dataset.t:null}""", c)
            if k is None: errs.append(f'{name}: tile not found {c}'); return
            pg.locator(f'#bdtray [data-t="{k}"]').click()
    expected = 0; n = 0; seen_alt = False; firstwrong = None
    while pg.locator('#bdcheck').count() and n < 12:
        m = model()
        tray_order = pg.evaluate("[...document.querySelectorAll('#bdtray [data-t]')].map(b=>b.textContent)")
        if n == 0 and len(set(m)) > 1:
            # the tray is never already in answer order
            pass
        if n == 1:   # wrong: last chunk first
            order = [m[-1]] + m[:-1]
            tray_click(order)
            pg.locator('#bdcheck').click(); firstwrong = pg.evaluate("document.querySelector('[data-bid]').dataset.bid")
            fb = pg.locator('#bdfb .feedback').inner_text()
            if 'Not quite' not in fb: errs.append(f'{name}: wrong not marked: {fb[:60]}')
            if pg.locator('#bdfb .feedback .say').count() != 1: errs.append(f'{name}: wrong feedback speaker count')
            pg.screenshot(path=f'{OUT}/build_wrong_{name}.png', full_page=True)
        elif n == 2:   # hint, then finish right: not counted
            pg.locator('#bdhint').click(); pg.wait_for_timeout(50)
            placed = pg.locator('#bdline [data-b]').count()
            if placed != 1: errs.append(f'{name}: hint placed {placed}')
            tray_click(m[1:])
            pg.locator('#bdcheck').click()
            fb = pg.locator('#bdfb .feedback').inner_text()
            if 'hint' not in fb: errs.append(f'{name}: hint feedback {fb[:60]}')
        elif n >= 3 and not seen_alt and len(m) >= 3 and m[0] != m[1] and pg.evaluate("(a)=>App.buildJudge(a[0],a[1])", [[m[1], m[0]] + m[2:], m]) == 'alt':
            tray_click([m[1], m[0]] + m[2:]); pg.locator('#bdcheck').click()
            fb = pg.locator('#bdfb .feedback').inner_text()
            if 'Also possible' not in fb: errs.append(f'{name}: alt feedback {fb[:60]}')
            seen_alt = True; expected += 1
            pg.screenshot(path=f'{OUT}/build_alt_{name}.png', full_page=True)
        else:
            # send one tile back and forth, then build right
            tray_click(m[:1]); pg.locator('#bdline [data-b="0"]').click(); tray_click(m)
            if pg.locator('#bdcheck').is_disabled(): errs.append(f'{name}: check disabled with all tiles')
            if n == 0: pg.screenshot(path=f'{OUT}/build_q_{name}.png', full_page=True)
            pg.keyboard.press('Enter') if n == 0 else pg.locator('#bdcheck').click()
            pg.wait_for_timeout(50)
            fb = pg.locator('#bdfb .feedback').inner_text()
            if 'Correct' not in fb: errs.append(f'{name}: right not marked: {fb[:80]} model {m}')
            expected += 1
            if n == 0: pg.screenshot(path=f'{OUT}/build_right_{name}.png', full_page=True)
        check(f'q{n}')
        pg.locator('#bdnext').click(); pg.wait_for_timeout(80); n += 1
    score = pg.locator('#bd h3').inner_text()
    print(name, 'round', score, 'expected', expected, 'alt seen', seen_alt)
    if not score.startswith(f'{expected} /'): errs.append(f'{name}: score {score} expected {expected}')
    st = pg.evaluate("JSON.stringify({b:App.state.done.build.N5, miss:App.state.done.build.miss.length})")
    print(name, 'stored', st)
    pg.screenshot(path=f'{OUT}/build_score_{name}.png', full_page=True)

    # ---- mistakes round: all right; the list empties ----
    if pg.locator('#bdmiss2').count():
        pg.locator('#bdmiss2').click(); pg.wait_for_timeout(100); k = 0
        while pg.locator('#bdcheck').count() and k < 12:
            tray_click(model()); pg.locator('#bdcheck').click(); pg.locator('#bdnext').click(); pg.wait_for_timeout(60); k += 1
        left = pg.evaluate("App.state.done.build.miss.length")
        print(name, 'mistakes round', k, 'items; left', left)
        if left: errs.append(f'{name}: mistakes left {left}')
    else: errs.append(f'{name}: no mistakes button')

    # ---- furigana off + hear first ----
    go('#/practice'); go('#/build')
    pg.locator('#bdfuri').uncheck(); pg.locator('#bdhear').check(); pg.wait_for_timeout(50)
    pg.evaluate("window._last=null")
    pg.locator('#bdgo').click(); pg.wait_for_timeout(400)
    ruby = pg.locator('#bdtray ruby').count()
    spoke = pg.evaluate("window._last")
    hidden = pg.locator('#bdshow').count()
    print(name, 'furigana off: ruby in tray', ruby, '| hear first spoke', bool(spoke), '| English hidden', bool(hidden))
    if ruby or not spoke or not hidden: errs.append(f'{name}: furi/hear {ruby} {spoke} {hidden}')
    pg.screenshot(path=f'{OUT}/build_hear_{name}.png', full_page=True)
    pg.locator('#bdshow').click()
    pg.locator('#bdfuri').check(); pg.wait_for_timeout(100)
    if not pg.locator('#bdtray ruby').count() and pg.evaluate("/[一-鿿]/.test(document.querySelector('#bdtray').textContent)"): errs.append(f'{name}: furigana not back on')
    pg.locator('#bdhear').uncheck()
    check('hear')

    # ---- progress page ----
    go('#/progress'); pg.wait_for_timeout(300)
    blk = pg.evaluate("[...document.querySelectorAll('.ps-block')].map(b=>b.innerText).find(t=>t.startsWith('Sentence builder'))||''")
    print(name, 'progress:', blk.replace('\n', ' ')[:80])
    if 'N5' not in blk or '%' not in blk: errs.append(f'{name}: progress block {blk[:60]}')
    check('progress')

    # ---- empty data ----
    pg.evaluate("()=>{window.__L=window.LESSONS;window.__E=window.DICT_EX;window.LESSONS=[];window.DICT_EX=[];window.__X=window.LESSON_EXTRA;window.LESSON_EXTRA={}}")
    go('#/build')
    emp = pg.locator('#bdset .notice').inner_text() if pg.locator('#bdset .notice').count() else ''
    print(name, 'empty:', emp[:50])
    if 'No sentences' not in emp: errs.append(f'{name}: empty state')
    pg.screenshot(path=f'{OUT}/build_empty_{name}.png')
    pg.evaluate("()=>{window.LESSONS=window.__L;window.DICT_EX=window.__E;window.LESSON_EXTRA=window.__X}")
    b.close()

with sync_playwright() as p:
    run(p, 'phone-light', {'width': 390, 'height': 844}, 'light', True)
    run(p, 'phone-dark', {'width': 390, 'height': 844}, 'dark', False)
    run(p, 'desk-light', {'width': 1280, 'height': 900}, 'light', False)
    run(p, 'desk-dark', {'width': 1280, 'height': 900}, 'dark', False)
print('errors', errs)
