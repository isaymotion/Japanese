"""0.23.0 vocabulary quiz modes "In context" and "Type it" (js/vocab.js) on the real dictionary and DICT_EX.
Usable words per level, a full round of each mode (wrong and right answers, keys, I don't know, kana / katakana /
romaji answers), saved bests, My mistakes. Phone and desktop, light and dark. Last line: errors [...]"""
import os
from playwright.sync_api import sync_playwright
URL = 'http://localhost:' + os.environ.get('QA_PORT', '8765') + '/index.html'
OUT = '/tmp/qa-out/'
problems = []
CTX_ANS = """()=>{const q=document.querySelector('#vq .vq-in .card > div.tl'); const t=JA.textOf(q).replace(/\\s+/g,'');
  const e=App.DICT.find(x=>{const c=App.vocabContextOf(x); return c&&JA.speak(c.s).replace(/\\s+/g,'').replace(/、/g,'')===t.replace(/[＿、]/g,'')&&[...document.querySelectorAll('#vq .opt')].some(o=>JA.textOf(o).replace(/\\s+/g,'')===JA.speak(x.tl).replace(/\\s+/g,''))});
  if(!e) return [-1,''];
  const os=[...document.querySelectorAll('#vq .opt')].map(o=>JA.textOf(o).replace(/\\s+/g,''));
  return [os.findIndex(o=>o===JA.speak(e.tl).replace(/\\s+/g,'')), e.id]}"""
TYPE_ANS = """()=>{const card=document.querySelector('#vq .card'); const en=card.querySelector('div[style*="1.12rem"]').textContent;
  const pm=card.querySelector('div.muted'); const pos=pm?JA.textOf(pm).replace(/\s+/g,''):'';
  const e=App.DICT.find(x=>x.en===en&&(App.POS[x.pos]||'').replace(/\s+/g,'')===pos);
  return e?[e.kn, JA.kanaToRomaji(e.kn), JA.speak(e.tl)]:null}"""

def run(b, w, h, name, dark):
    ctx = b.new_context(viewport={'width': w, 'height': h}, color_scheme='dark' if dark else 'light')
    pg = ctx.new_page()
    errs = []
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(URL + '#/'); pg.wait_for_timeout(500)
    pg.evaluate("()=>{localStorage.clear()}"); pg.reload(); pg.wait_for_timeout(700)
    def go(hh): pg.evaluate("h=>{location.hash=h}", hh); pg.wait_for_timeout(350)
    def check(tag):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: problems.append(f'{name} {tag} overflow={ov} raw={raw}')
    go('#/vocab'); check('quiz tab')
    if name == 'phone': print('usable In context words per level:', pg.evaluate("JSON.stringify(App.vocabContextCount())"))
    segs = pg.evaluate("[...document.querySelectorAll('[data-vm]')].map(b=>b.dataset.vm)")
    if segs != ['meaning', 'recall', 'reading', 'context', 'type']: problems.append(f'{name} mode seg {segs}')
    decks = ['lv-N5', 'c-health'] + (['lv-N3'] if name == 'desk' else [])
    for deck in decks:
        go('#/vocab'); pg.select_option('#vqdeck', deck); pg.locator('[data-vm=context]').click(); pg.locator('[data-vc="10"]').click()
        stat = pg.locator('#vqstat').inner_text().replace('\n', ' ')
        print(name, deck, 'context status:', stat[:160])
        if 'may change its ending' not in stat: problems.append(f'{name} no hint in status')
        pg.locator('#vqgo').click(); pg.wait_for_timeout(200)
        if not pg.locator('#vq .vq-hint').is_visible(): problems.append(f'{name} hint not above the questions')
        n = 0
        while pg.locator('#vq [data-act=next]').count() == 0 and pg.locator('#vq .opt').count():
            qt = pg.locator('#vq .vq-in .card > div.tl').inner_text()
            if '＿' not in qt: problems.append(f'{name} {deck} q{n} no blank')
            if pg.locator('#vq .say').count(): problems.append(f'{name} context sound before answer')
            right, wid = pg.evaluate(CTX_ANS)
            if right < 0: problems.append(f'{name} {deck} q{n} answer not found'); pg.locator('#vq .opt').first.click()
            else:
                opts = pg.evaluate("[...document.querySelectorAll('#vq .opt')].map(o=>JA.textOf(o).replace(/\\s+/g,''))")
                if len(set(opts)) != 4: problems.append(f'{name} {deck} options {opts}')
                k = (right + 1) % 4 if n == 0 else right
                if n == 1:   # keys 1-4 pick the option in screen order
                    pg.locator('body').click(position={'x': 2, 'y': 300}); pg.keyboard.press(str(k + 1))
                else: pg.locator('#vq .opt').nth(k).click()
            fb = pg.locator('#vq [data-fb]')
            if fb.locator('.say').count() != 1 or fb.locator('a.vq-wl').count() != 1: problems.append(f'{name} {deck} q{n} feedback say/link {fb.locator(".say").count()} {fb.locator("a.vq-wl").count()}')
            if n == 0 and deck == 'c-health': pg.screenshot(path=OUT + f'vocab_context_fb_{name}.png')
            check(f'{deck} context q{n}')
            pg.locator('#vq [data-act=next]').click(); n += 1
            if n > 25: break
        print(name, deck, 'context', n, 'questions |', pg.locator('#vq h3').inner_text(), '| best', pg.evaluate(f"App.state.done.vocab['{deck}:context']"))
    # Type it
    go('#/vocab'); pg.select_option('#vqdeck', 'lv-N5'); pg.locator('[data-vm=type]').click(); pg.locator('#vqgo').click(); pg.wait_for_timeout(200)
    n = 0
    while pg.locator('#vqtype').count() and n < 25:
        ans = pg.evaluate(TYPE_ANS)
        if not ans: problems.append(f'{name} type q{n} word not found'); break
        kn, rj, kj = ans
        if n == 0: pg.fill('#vqtype', 'zzzz'); pg.locator('#vqcheck').click()
        elif n == 1: pg.locator('#vqidk').click()
        elif n == 2: pg.fill('#vqtype', rj.upper() + ' '); pg.keyboard.press('Enter')
        elif n == 3: pg.fill('#vqtype', pg.evaluate("s=>s.replace(/[ぁ-ゖ]/g,c=>String.fromCharCode(c.charCodeAt(0)+0x60))", kn)); pg.locator('#vqcheck').click()
        elif n == 4: pg.fill('#vqtype', kj + '。'); pg.locator('#vqcheck').click()
        else: pg.fill('#vqtype', kn); pg.locator('#vqcheck').click()
        fb = pg.locator('#vq [data-fb]')
        ok = fb.locator('.feedback.ok').count() == 1
        if (n < 2) == ok: problems.append(f'{name} type q{n} graded {ok} for {kn} / {rj} / {kj}')
        if fb.locator('.say').count() != 1 or fb.locator('a[href^="#/dict/"]').count() < 1: problems.append(f'{name} type feedback say/link')
        if n == 0: pg.screenshot(path=OUT + f'vocab_type_fb_{name}.png')
        check(f'type q{n}')
        pg.keyboard.press('Enter') if n == 2 else pg.locator('#vq [data-act=next]').click()
        pg.wait_for_timeout(60); n += 1
        if pg.locator('#vq h3').count(): break
    if not pg.locator('#vq h3').count(): problems.append(f'{name} type round did not finish at q{n}: ' + pg.locator('#vq').inner_text()[:200].replace('\n', ' ')); ctx.close(); return
    print(name, 'type', n, 'questions |', pg.locator('#vq h3').inner_text(), '| best', pg.evaluate("App.state.done.vocab['lv-N5:type']"))
    if pg.evaluate("App.state.done.vocab['lv-N5:type']") != 80: problems.append(f'{name} type best not 80')
    seg = pg.locator('[data-vm=type]').inner_text().replace('\n', ' ')
    print(name, 'seg', seg, '| mistakes', pg.evaluate("App.state.mistakes.length"))
    pg.screenshot(path=OUT + f'vocab_type_done_{name}.png')
    if errs: problems.append(f'{name} console {errs[:3]}')
    ctx.close()

with sync_playwright() as p:
    b = p.chromium.launch()
    for w, h, name, dark in [(390, 844, 'phone', False), (1280, 900, 'desk', False), (390, 844, 'phonedark', True)][:int(os.environ.get('QA_N', '3'))]:
        run(b, w, h, name, dark)
    b.close()
print('errors', problems)
