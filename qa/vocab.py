"""0.17.0 vocabulary quiz, topic matching, examples, listening links. Expect "errors []" as the last line."""
from playwright.sync_api import sync_playwright
URL = 'http://localhost:8765/index.html'
problems = []
def run(b, w, h, name, dark=False):
    ctx = b.new_context(viewport={'width': w, 'height': h}, color_scheme='dark' if dark else 'light')
    pg = ctx.new_page()
    errs = []
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(URL + '#/'); pg.wait_for_timeout(500)
    pg.evaluate("()=>{localStorage.clear()}"); pg.reload(); pg.wait_for_timeout(500)
    def go(hh): pg.evaluate("h=>{location.hash=h}", hh); pg.wait_for_timeout(350)
    def check(tag):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: problems.append(f'{name} {tag} overflow={ov} raw={raw}')
    go('#/vocab'); check('quiz tab')
    pg.screenshot(path=f'/tmp/qa-out/vocab_quiz_{name}.png', full_page=True)
    for deck in ['lv-N5', 'c-health']:
        for mode in ['meaning', 'recall', 'reading']:
            go('#/vocab')
            pg.select_option('#vqdeck', deck); pg.locator(f'[data-vm={mode}]').click(); pg.locator('[data-vc="10"]').click()
            pg.locator('#vqgo').click(); pg.wait_for_timeout(150)
            n = 0
            while pg.locator('#vq [data-act=next]').count() == 0 and pg.locator('#vq .opt').count():
                opts = pg.evaluate("[...document.querySelectorAll('#vq .opt')].map(o=>JA.textOf(o).replace(/\\s+/g,''))")
                if len(set(opts)) != len(opts): problems.append(f'{name} {deck} {mode} duplicate options {opts}')
                if mode == 'reading':
                    if pg.locator('#vq rt').count() or pg.locator('#vq .say').count(): problems.append(f'{name} reading shows furigana/sound before answer')
                    if pg.locator('#vq .rj').count(): problems.append(f'{name} reading shows romaji')
                if mode == 'recall' and pg.locator('#vq .say').count(): problems.append(f'{name} recall sound before answer')
                if n == 0 and deck == 'c-health': pg.screenshot(path=f'/tmp/qa-out/vocab_{mode}_{name}.png')
                k = '1' if n == 0 else '0'          # first answer wrong, rest right
                pg.locator(f'#vq .opt[data-k="{k}"]').click()
                if mode != 'meaning' and pg.locator('#vq [data-fb] .say').count() == 0: problems.append(f'{name} {mode} no sound after answer')
                if n == 0 and deck == 'c-health': pg.screenshot(path=f'/tmp/qa-out/vocab_{mode}_fb_{name}.png')
                check(f'{deck} {mode} q{n}')
                pg.locator('#vq [data-act=next]').click(); n += 1
                if n > 25: break
            score = pg.locator('#vq h3').inner_text().replace('\n', ' ')
            bestv = pg.evaluate(f"App.state.done.vocab['{deck}:{mode}']")
            seglbl = pg.locator(f'[data-vm={mode}]').inner_text().replace('\n', ' ')
            print(name, deck, mode, 'questions', n, '|', score, '| best', bestv, '| seg', seglbl)
    print(name, 'mistakes', pg.evaluate("App.state.mistakes.length"))
    go('#/vocab'); pg.select_option('#vqdeck', 'mistakes'); pg.locator('[data-vm=meaning]').click()
    print(name, 'mistakes deck status:', pg.locator('#vqstat').inner_text()[:80], '| start enabled', pg.locator('#vqgo').is_enabled())
    pg.locator('#vqgo').click(); pg.locator('#vq .opt[data-k="0"]').click(); check('mistakes quiz')
    print(name, 'saved deck', pg.evaluate("App.state.settings.vocabDeck"))
    # Matching: seed set plus an injected set of 13 clinical words
    go('#/vocab?tab=match'); check('match tiles'); print(name, 'match tiles', pg.locator('.tile').count())
    pg.evaluate("""()=>{const ws=App.DICT.filter(e=>e.cat==='health'&&!/＿/.test(e.tl)).slice(0,13).map(e=>e.tl+'|'+e.en);
      window.TOPIC_SETS.push({id:'qa13',title:'QA symptoms',clin:true,words:ws.concat(['無《な》い|missing word'])});}""")
    for sid in ['body', 'qa13']:
        go('#/vocab?tab=match&set=' + sid); check('match ' + sid)
        rounds = 0
        while pg.locator('.vm-snd').count():
            cnt = pg.locator('.vm-snd').count()
            sizes = cnt
            if rounds == 0:
                pg.screenshot(path=f'/tmp/qa-out/vocab_match_{sid}_{name}.png')
                # wrong pair first
                pg.locator('.vm-snd[data-i="0"]').click(); pg.locator('.vm-mean[data-i="1"]').click(); pg.wait_for_timeout(100)
                if pg.locator('.vm-mean.wrong').count() != 1: problems.append(f'{name} no wrong flash')
            for i in range(cnt):
                pg.locator(f'.vm-snd[data-i="{i}"]').focus(); pg.keyboard.press('Enter')
                pg.locator(f'.vm-mean[data-i="{i}"]').focus(); pg.keyboard.press('Enter')
            if rounds == 0:
                hid = pg.evaluate("[...document.querySelectorAll('.vm-w')].filter(x=>x.hidden).length")
                if hid: problems.append(f'{name} locked words still hidden {hid}')
                check('match locked ' + sid); pg.screenshot(path=f'/tmp/qa-out/vocab_match_done_{sid}_{name}.png')
            print(name, 'match', sid, 'round', rounds + 1, 'size', sizes)
            pg.wait_for_timeout(900); rounds += 1
            if rounds > 6: break
        print(name, 'match result:', pg.locator('#vmbox h3').inner_text().replace('\n', ' '), '|', pg.locator('#vmbox p').first.inner_text(), '| best', pg.evaluate(f"App.state.done.vocab['match:{sid}']"))
        check('match result ' + sid)
    go('#/vocab?tab=match&set=body'); pg.locator('#vmshow').check()
    print(name, 'show words visible', pg.evaluate("[...document.querySelectorAll('.vm-w')].filter(x=>!x.hidden).length"), 'of', pg.locator('.vm-w').count())
    pg.screenshot(path=f'/tmp/qa-out/vocab_match_show_{name}.png'); pg.locator('#vmshow').uncheck()
    go('#/vocab?tab=match'); print(name, 'tiles after', pg.locator('.tile').count(), pg.locator('.tile').first.inner_text().replace('\n', ' | '))
    pg.screenshot(path=f'/tmp/qa-out/vocab_tiles_{name}.png')
    # Word page and flashcard back
    wid = pg.evaluate("App.DICT.find(e=>e.tl==='頭痛《ずつう》'&&e.en==='headache').id")
    go('#/dict/' + wid); check('word page')
    print(name, 'word', wid, 'example:', pg.locator('.word-ex').inner_text().replace('\n', ' | ') if pg.locator('.word-ex').count() else 'MISSING')
    pg.screenshot(path=f'/tmp/qa-out/vocab_word_{name}.png')
    pg.evaluate("id=>{App.state.srs={};App.state.srs[id]={e:2.5,i:0,r:0,due:0};App.save()}", wid)
    go('#/flash/due'); pg.locator('#fc').click(); pg.wait_for_timeout(200); check('flash back')
    print(name, 'flash back example:', pg.locator('.fc-ex').count(), '| stroke row', pg.locator('.so-fc-word').count())
    pg.screenshot(path=f'/tmp/qa-out/vocab_flash_{name}.png')
    if pg.locator('.so-fc-word button').count():
        pg.locator('.so-fc-word button').first.click(); pg.wait_for_timeout(300); print(name, 'stroke panel opens', pg.locator('.so-big, .so').count() > 0)
    # Listening question links (injected)
    did, rid = pg.evaluate("[DIALOGUES[0].id, READING[0].id]")
    go('#/speak/' + did); none_d = pg.locator('a[href^="#/listen?tab=story"]').count()
    pg.evaluate("([d,r])=>{window.LISTEN_Q[d]=[['Q?',['a','b'],0,'why']];window.LISTEN_Q[r]=[['Q?',['a','b'],0,'why']];}", [did, rid])
    go('#/speak/' + did + '?x=1'); hd = pg.locator('a[href^="#/listen?tab=story"]').get_attribute('href'); check('dialogue')
    go('#/reading/' + rid); hr = pg.locator('a[href^="#/listen?tab=story"]').get_attribute('href'); check('passage')
    print(name, 'listen links: before', none_d, '| dialogue', hd, '| reading', hr)
    for r in ['#/', '#/practice', '#/flash', '#/progress']:
        go(r); check(r)
    ctx.close()
    return errs
with sync_playwright() as p:
    b = p.chromium.launch()
    allerr = []
    for w, h, name, dark in [(390, 844, 'phone', False), (1280, 900, 'desk', False), (390, 844, 'phonedark', True)]:
        allerr += run(b, w, h, name, dark)
    b.close()
print('problems', problems)
print('errors', allerr)
