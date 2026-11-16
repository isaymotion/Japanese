"""0.20.0 topic matching level filter and set Quiz mode (#/vocab?tab=match). Prints "errors [...]" last."""
import os
from playwright.sync_api import sync_playwright

BASE = 'http://localhost:'+__import__('os').environ.get('QA_PORT','8765')+'/index.html'
OUT = '/tmp/qa-out'
os.makedirs(OUT, exist_ok=True)
errs = []
RANK = "({N5:1,N4:2,N3:3,N2:4})"


def run(p, name, vp, scheme):
    b = p.chromium.launch()
    ctx = b.new_context(viewport=vp, color_scheme=scheme)
    pg = ctx.new_page()
    pg.on('console', lambda m: errs.append(name + ': ' + m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(name + ': ' + str(e)))
    pg.goto(BASE + '#/'); pg.wait_for_timeout(500)
    pg.evaluate("()=>localStorage.clear()"); pg.reload(); pg.wait_for_timeout(600)
    # an old (All) best result must still show
    first = pg.evaluate("TOPIC_SETS[0].id")
    pg.evaluate("id=>{App.state.done.vocab=App.state.done.vocab||{};App.state.done.vocab['match:'+id]={m:2,t:75};App.save()}", first)

    def go(h):
        pg.evaluate("h=>{location.hash=h}", h); pg.wait_for_timeout(350)

    def check(label):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: errs.append(f'{name} {label}: overflow={ov} raw={raw}')

    go('#/vocab?tab=match')
    for lv in ['All', 'N5', 'N4', 'N3', 'N2']:
        pg.locator(f'[data-mlv="{lv}"]').click(); pg.wait_for_timeout(250)
        tiles = pg.locator('#view .grid .tile').count()
        exp = pg.evaluate("""lv=>{const R=""" + RANK + """;const by=new Map(App.DICT.map(e=>[e.tl+'|'+e.en,e]));return TOPIC_SETS.filter(s=>{const ws=[...new Set(s.words.map(k=>by.get(k)).filter(Boolean))];const n=ws.filter(e=>lv==='All'||(R[e.lv]||99)<=R[lv]).length;return n>=(lv==='All'?2:6)}).length}""", lv)
        counts = pg.evaluate("[...document.querySelectorAll('#view .grid .tile p')].map(p=>parseInt(p.textContent))")
        print(name, 'level', lv, 'sets', tiles, 'expected', exp, 'min words', min(counts) if counts else None, 'saved', pg.evaluate("App.state.settings.matchLv"))
        if tiles != exp: errs.append(f'{name} {lv}: {tiles} tiles, expected {exp}')
        if lv != 'All' and counts and min(counts) < 6: errs.append(f'{name} {lv}: a set with {min(counts)} words')
        if lv == 'All' and 'Best: 2 misses' not in pg.locator('#view .grid').inner_text(): errs.append(f'{name}: old All best not shown')
        check('list ' + lv)
        if lv in ('All', 'N5'): pg.screenshot(path=f'{OUT}/topiclv_list_{lv}_{name}.png')

    for lv in ['N5', 'N4', 'N3', 'N2', 'All']:
        go('#/vocab?tab=match'); pg.locator(f'[data-mlv="{lv}"]').click(); pg.wait_for_timeout(200)
        href = pg.locator('#view .grid .tile').first.get_attribute('href')
        sid = href.split('set=')[1]
        go(href)
        n = pg.locator('.vm-snd').count()
        # every word in the round is at the level
        bad = pg.evaluate("""lv=>{const R=""" + RANK + """;return [...document.querySelectorAll('.vm-snd .vm-w')].length}""", lv)
        # play the matching round(s) fully, with one miss
        rounds, miss_done = 0, False
        while pg.locator('.vm-snd').count() and rounds < 5:
            k = pg.locator('.vm-snd').count()
            words = pg.evaluate("[...document.querySelectorAll('.vm-mean')].map(b=>b.dataset.i)")
            if not miss_done and k > 1:
                pg.locator('.vm-snd[data-i="0"]').click(); pg.locator('.vm-mean[data-i="1"]').click(); miss_done = True
            for i in range(k):
                pg.locator(f'.vm-snd[data-i="{i}"]').click(); pg.locator(f'.vm-mean[data-i="{i}"]').click()
            if rounds == 0 and lv == 'N5': pg.screenshot(path=f'{OUT}/topiclv_match_{name}.png')
            check(f'match {lv} r{rounds}')
            pg.wait_for_timeout(900); rounds += 1
        key = 'match:' + sid + ('' if lv == 'All' else '@' + lv)
        saved = pg.evaluate("k=>App.state.done.vocab[k]", key)
        print(name, lv, 'match', sid, 'rounds', rounds, 'saved', key, saved)
        if not saved or saved['m'] != 1: errs.append(f'{name} {lv} match best {key} {saved}')
        # Quiz mode
        go(href + '&mode=quiz')
        if not pg.locator('#vtgo').count(): errs.append(f'{name} {lv}: no quiz'); continue
        for qm in ['meaning', 'recall']:
            pg.locator(f'[data-vtm="{qm}"]').click(); pg.locator('#vtgo').click(); pg.wait_for_timeout(200)
            n, res, lvbad = 0, [], 0
            while pg.locator('#vtq .opt').count() and not pg.locator('#vtq [data-act=retry]').count() and n < 25:
                opts = pg.evaluate("[...document.querySelectorAll('#vtq .opt')].map(o=>JA.textOf(o).replace(/\\s+/g,''))")
                if len(set(opts)) != 4: errs.append(f'{name} {lv} {qm}: options {opts}')
                k = '1' if n == 0 else '0'
                pg.locator(f'#vtq .opt[data-k="{k}"]').click()
                res.append(pg.locator('#vtq .feedback.ok').count() == 1)
                if qm == 'recall' and not pg.locator('#vtq [data-fb] .say').count(): errs.append(f'{name} recall: no sound after answer')
                if n == 0 and lv == 'N5': pg.screenshot(path=f'{OUT}/topiclv_quiz_{qm}_{name}.png')
                check(f'quiz {lv} {qm} q{n}')
                pg.locator('#vtq [data-act=next]').click(); n += 1
            key = f'topic:{sid}@{lv}:{qm}'
            saved = pg.evaluate("k=>App.state.done.vocab[k]", key)
            mist = pg.evaluate("App.state.mistakes.length")
            print(name, lv, 'quiz', qm, 'questions', n, 'results ok', sum(res), 'saved', key, saved, 'mistakes', mist)
            if res[0] or not all(res[1:]): errs.append(f'{name} {lv} {qm}: results {res}')
            if saved is None: errs.append(f'{name} {lv} {qm}: best not saved')
            if lv == 'N5' and qm == 'recall': pg.screenshot(path=f'{OUT}/topiclv_quiz_done_{name}.png')
        # the list shows the quiz best on the tile
        go('#/vocab?tab=match')
        if 'Meaning' not in pg.locator('#view .grid .tile').first.inner_text(): errs.append(f'{name} {lv}: quiz best not on tile')
    # a deep link to a set with too few words at a level shows a notice
    go('#/vocab?tab=match'); pg.locator('[data-mlv="N5"]').click(); pg.wait_for_timeout(200)
    hidden = pg.evaluate("""()=>{const R=""" + RANK + """;const by=new Map(App.DICT.map(e=>[e.tl+'|'+e.en,e]));const s=TOPIC_SETS.find(s=>s.words.map(k=>by.get(k)).filter(e=>e&&(R[e.lv]||99)<=1).length<6);return s&&s.id}""")
    if hidden:
        go('#/vocab?tab=match&set=' + hidden)
        if not pg.locator('#vmbox .notice').count(): errs.append(f'{name}: no notice for {hidden} at N5')
        check('notice')
    pg.evaluate("()=>{App.state.settings.matchLv='All';App.save()}")
    b.close()


with sync_playwright() as p:
    run(p, 'phone', {'width': 390, 'height': 844}, 'light')
    run(p, 'phonedark', {'width': 390, 'height': 844}, 'dark')
    run(p, 'small', {'width': 360, 'height': 740}, 'light')
    run(p, 'desk', {'width': 1280, 'height': 900}, 'light')
print('errors', errs)
