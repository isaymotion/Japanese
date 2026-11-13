"""Numbers and counters (#/numbers): Learn table + Play all, Quiz Read/Listen (group + Mixed), In the clinic.
Runs with the seed data, a test fixture, and the draft /home/claude/work/new/counters.js if it exists. Last line: errors [...]"""
import os, json
from playwright.sync_api import sync_playwright
BASE = 'http://localhost:8765/index.html'
DRAFT = '/home/claude/work/new/counters.js'
FIX = {'groups': [
  {'id': 'num', 'title': 'Numbers 0 to 10', 'note': '4 and 7 have two readings; よん and なな are safer in speech.',
   'rows': [['1', '｜1《いち》'], ['2', '｜2《に》'], ['3', '｜3《さん》'], ['4', '｜4《よん》', 1], ['5', '｜5《ご》'], ['7', '｜7《なな》', 1]]},
  {'id': 'hon', 'title': 'Long things: 本', 'note': 'ほん changes to ぽん or ぼん after some numbers.',
   'rows': [['1本', '｜1本《いっぽん》', 1], ['2本', '｜2本《にほん》'], ['3本', '｜3本《さんぼん》', 1], ['4本', '｜4本《よんほん》'], ['6本', '｜6本《ろっぽん》', 1]]},
  {'id': 'time', 'title': 'Clock times', 'note': '', 'rows': [['4:00', '｜4時《よじ》', 1], ['9:00', '｜9時《くじ》', 1], ['4:30', '｜4時《よじ》 半《はん》', 1]]}],
  'clinical': [[f'薬《くすり》 は {n}錠《じょう》 です。', f'The medicine is {n} tablets.', 'How many tablets?', str(n), [str(x) for x in range(1, 6) if x != n][:3]] for n in range(1, 6)] +
              [['毎日《まいにち》 3回《さんかい》 飲《の》みます。', 'I take it three times a day.', 'How often?', 'Three times a day', ['Once a day', 'Twice a day', 'Every three days']]]}
errors = []
def run(b, name, vp, scheme, data):
    pg = b.new_page(viewport=vp, color_scheme=scheme)
    errs = []
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(BASE + '#/'); pg.wait_for_timeout(500)
    if data == 'fixture': pg.evaluate('d=>{window.JA_COUNTERS=d}', FIX)
    elif data == 'draft': pg.add_script_tag(path=DRAFT)
    def go(h): pg.evaluate('h=>{location.hash=h}', h); pg.wait_for_timeout(350)
    def check(tag):
        ov = pg.evaluate('document.documentElement.scrollWidth>innerWidth+1')
        raw = pg.evaluate("document.body.innerText.includes('《')")
        if ov or raw: errs.append(f'{tag}: overflow={ov} raw={raw}')
    pre = f'{data}_{name}'
    go('#/numbers'); check('learn')
    groups = pg.evaluate("[...document.querySelectorAll('#numgrp option')].map(o=>o.value)")
    print(pre, 'groups', len(groups), 'rows', pg.locator('.num-table tr[data-i]').count(), 'irr', pg.locator('tr.num-irr').count(), 'h1', pg.locator('h1').first.inner_text())
    pg.screenshot(path=f'/tmp/qa-out/numbers_learn_{pre}.png', full_page=True)
    for gid in groups:
        pg.select_option('#numgrp', gid); pg.wait_for_timeout(120); check('learn ' + gid)
    print(' remembered', pg.evaluate('App.state.settings.numGroup'), '== last', groups[-1])
    go('#/practice'); go('#/numbers')
    print(' still selected', pg.evaluate("document.querySelector('#numgrp').value"))
    pg.locator('.num-table .say').first.click()
    pg.locator('#numplay').click(); pg.wait_for_timeout(300)
    print(' play all ->', pg.locator('#numplay').inner_text(), 'playing rows', pg.locator('tr.num-playing').count())
    pg.locator('#numplay').click(); pg.wait_for_timeout(100)
    print(' stop ->', pg.locator('#numplay').inner_text(), 'playing rows', pg.locator('tr.num-playing').count())
    def round_(tag, shot):
        for i in range(10):
            if pg.locator('#numq h3, #numcq h3').count(): break
            if i == 0 and shot: pg.screenshot(path=f'/tmp/qa-out/numbers_{shot}_{pre}.png', full_page=True)
            # answer right on even questions, wrong on odd ones
            sel = '.opt[data-k="0"]' if i % 2 == 0 else '.opt:not([data-k="0"])'
            pg.locator(sel).first.click()
            if i == 1 and shot: pg.screenshot(path=f'/tmp/qa-out/numbers_{shot}_fb_{pre}.png', full_page=True)
            check(f'{tag} q{i}')
            pg.locator('[data-act=next]').click(); pg.wait_for_timeout(60)
        h = pg.locator('#numq h3, #numcq h3')
        return h.inner_text() if h.count() else '(no score)'
    for gsel in ['mixed', groups[0]]:
        for mode in ['read', 'listen']:
            go('#/numbers?tab=quiz')
            if pg.locator('#numqg').count() == 0: print(' no quiz'); break
            pg.select_option('#numqg', gsel); pg.wait_for_timeout(100)
            pg.locator(f'[data-mode={mode}]').click(); pg.wait_for_timeout(100)
            n = pg.locator('.opt').count()
            res = round_(f'quiz {gsel}:{mode}', mode if gsel == 'mixed' else None) if n else '(notice: ' + pg.locator('#numq').inner_text()[:50] + ')'
            print(' quiz', gsel, mode, 'opts', n, '->', res)
    print(' best', json.dumps(pg.evaluate('App.state.done.numbers || {}')))
    go('#/numbers?tab=clinic'); check('clinic')
    for sp in ['slow', 'fast', 'natural']: pg.locator(f'[data-sp={sp}]').click(); pg.wait_for_timeout(60)
    n = pg.locator('#numcq .opt').count()
    print(' clinic opts', n, 'sub', pg.locator('#numcq .muted').nth(1).inner_text() if n else '', '->', round_('clinic', 'clinic') if n else pg.locator('#numcq').inner_text()[:60])
    if not n: pg.screenshot(path=f'/tmp/qa-out/numbers_clinic_{pre}.png', full_page=True)
    errors.extend(f'{pre}: {e}' for e in errs)
    pg.close()
with sync_playwright() as p:
    b = p.chromium.launch()
    sets = ['seed', 'fixture'] + (['draft'] if os.path.exists(DRAFT) else [])
    for data in sets:
        for name, vp, scheme in [('phone', {'width': 390, 'height': 844}, 'light'), ('phonedark', {'width': 390, 'height': 844}, 'dark'), ('small', {'width': 360, 'height': 740}, 'dark'), ('desk', {'width': 1280, 'height': 900}, 'light')]:
            if data == 'seed' and name in ('phonedark', 'small'): continue
            run(b, name, vp, scheme, data)
    b.close()
print('errors', errors)
