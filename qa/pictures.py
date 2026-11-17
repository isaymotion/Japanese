"""QA for #/pictures (js/pictures.js, 0.24.0). Phone 390 and 360, desktop 1280, light and dark: list, level seg, every tab of
a diagram set, a cards set and a diagram whose art is missing (fixture /home/claude/work/fixtures/pictures.js, injected before
the data scripts), right and wrong answers in every mode, Choose and Type, mistakes round, score on #/progress, keyboard on
pins, two lesson embeds on one page, App.pictures.svg; then the empty state (picture data blocked) and every REAL set.
Screenshots /tmp/qa-out/pictures_*.png. Last line: errors [...]"""
import re
from playwright.sync_api import sync_playwright
B = 'http://localhost:8765/index.html'
FIX = '/home/claude/work/fixtures/pictures.js'
errors, problems = [], []
SPY = "App._said=[];if(!App._spy){App._spy=1;const o=App.speak;App.speak=(t,x)=>{App._said.push(t);return o(t,x)}}"

def check(pg, tag):
    r = pg.evaluate("({ov:document.documentElement.scrollWidth>innerWidth, raw:/[《》]/.test(document.querySelector('#view').innerText)})")
    if r['ov'] or r['raw']: problems.append(tag + ' overflow=' + str(r['ov']) + ' raw=' + str(r['raw']))

def go(pg, h):
    pg.goto(B + h); pg.wait_for_timeout(350); pg.evaluate(SPY)
    if pg.locator('[data-act=new]').count(): pg.locator('[data-act=new]').click(); pg.wait_for_timeout(120)   # restart so the spy hears the first prompt

def said(pg): return pg.evaluate("App._said[App._said.length-1]")

def part_for_word(pg, sid, w): return pg.evaluate("([s,w])=>{const x=App.pictures.get(s).parts.find(p=>p.w===w);return x?x.id:null}", [sid, w])
def part_for_say(pg, sid, ja): return pg.evaluate("([s,j])=>{const x=App.pictures.get(s).say.find(p=>p.ja===j);return x?x.p:null}", [sid, ja])
def other_part(pg, sid, pid): return pg.evaluate("([s,p])=>App.pictures.get(s).parts.find(x=>x.id!==p).id", [sid, pid])

def tap(pg, pid):
    loc = pg.locator('.pic-q .pic-pin[data-p="%s"], .pic-q .pic-card[data-p="%s"]' % (pid, pid)).first
    loc.click()

def round_tap(pg, sid, mode, tag):
    """Answers a tap round (identify / listen): first wrong, the rest right. Returns (n, right)."""
    n = right = 0
    for k in range(20):
        if not pg.locator('.pic-round').count(): break
        txt_before = pg.locator('.pic-round').inner_text()
        w = said(pg)
        pid = part_for_word(pg, sid, w) if mode == 'identify' else part_for_say(pg, sid, w)
        if mode == 'listen':
            en = pg.evaluate("([s,j])=>App.pictures.get(s).say.find(p=>p.ja===j).en", [sid, w])
            if en in txt_before: problems.append(tag + ' listen sentence visible before answering')
        if pid is None: problems.append(tag + ' could not map spoken text ' + str(w)); break
        tgt = other_part(pg, sid, pid) if k == 0 else pid
        tap(pg, tgt); pg.wait_for_timeout(120)
        ok = pg.locator('.pic-q .feedback.ok').count() > 0
        if ok != (tgt == pid): problems.append(tag + ' wrong feedback at q%d' % k)
        if k == 0:
            if not pg.locator('.pic-q .good[data-p="%s"]' % pid).count(): problems.append(tag + ' right one not shown after a wrong tap')
            if mode == 'listen' and pg.evaluate("([s,j])=>App.pictures.get(s).say.find(p=>p.ja===j).en", [sid, w]) not in pg.locator('.pic-q .feedback').inner_text():
                problems.append(tag + ' listen sentence English not shown after answering')
        n += 1; right += ok
        pg.locator('[data-act=next]').click(); pg.wait_for_timeout(100)
    return n, right

def run_label(pg, sid, tag, typed):
    n = 0
    for k in range(20):
        if not pg.locator('.pic-round').count(): break
        pid = pg.evaluate("(document.querySelector('.pic-q .pic-pin.hl')||document.querySelector('.pic-q .pic-card.hl')).dataset.p")
        if typed:
            ans = 'zzz' if k == 0 else pg.evaluate("([s,p,k])=>{const w=App.pictures.get(s).parts.find(x=>x.id===p).w;return k%3===1?JA.kana(w):k%3===2?JA.romaji(w):JA.plain(w)}", [sid, pid, k])
            pg.fill('.pic-in', ans); pg.press('.pic-in', 'Enter')
        else:
            if k == 0: pg.locator('.pic-q .opt:not([data-p="%s"])' % pid).first.click()
            elif k == 1: pg.keyboard.press(str(pg.evaluate("[...document.querySelectorAll('.pic-q .opt')].findIndex(b=>b.dataset.p===%r)+1" % pid)))
            else: pg.locator('.pic-q .opt[data-p="%s"]' % pid).click()
        pg.wait_for_timeout(100)
        ok = pg.locator('.pic-q .feedback.ok').count() > 0
        if ok != (k != 0): problems.append(tag + ' label %s q%d expected %s' % ('type' if typed else 'choose', k, k != 0))
        n += 1
        if k == 1: pg.keyboard.press('Enter')
        else: pg.locator('[data-act=next]').click()
        pg.wait_for_timeout(100)
    return n

with sync_playwright() as p:
    br = p.chromium.launch()
    def ctx_page(vp, scheme, fixture=True, block=False):
        ctx = br.new_context(viewport=vp, color_scheme=scheme)
        if fixture: ctx.add_init_script(path=FIX)
        if block: ctx.route(re.compile(r'.*/(picture-sets-[a-z]+|art-[a-z]+)\.js.*'), lambda r: r.fulfill(status=200, body='', content_type='application/javascript'))
        pg = ctx.new_page()
        pg.on('console', lambda m: errors.append(m.text) if m.type == 'error' and '403' not in m.text else None)
        pg.on('pageerror', lambda e: errors.append(str(e)))
        return ctx, pg

    for name, vp in [('phone', {'width': 390, 'height': 844}), ('small', {'width': 360, 'height': 740}), ('desk', {'width': 1280, 'height': 900})]:
        for scheme in ['light', 'dark']:
            tag = name + '/' + scheme; shots = name != 'small'
            ctx, pg = ctx_page(vp, scheme)
            go(pg, '#/pictures'); check(pg, tag + ' list')
            if shots: pg.screenshot(path='/tmp/qa-out/pictures_%s_%s_list.png' % (name, scheme))
            pg.locator('[data-plv="N4"]').click(); pg.wait_for_timeout(150)
            if pg.locator('a[href="#/pictures/fx-face"]').count(): problems.append(tag + ' N4 filter kept an N5 set')
            pg.locator('[data-plv="All"]').click(); pg.wait_for_timeout(150)
            if not pg.locator('a[href="#/pictures/bodymap"]').count(): problems.append(tag + ' no body map link')
            # Learn, diagram
            go(pg, '#/pictures/fx-face'); check(pg, tag + ' learn')
            pg.locator('.pic-pin[data-p="me"]').click(); pg.wait_for_timeout(150)
            if 'eye' not in pg.locator('.pic-panel').inner_text(): problems.append(tag + ' learn panel missing eye')
            if said(pg) != '目《め》': problems.append(tag + ' learn did not speak the word')
            pg.locator('.pic-row[data-p="kubi"]').click(); pg.wait_for_timeout(100)
            if not pg.locator('.pic-pin.on[data-p="kubi"]').count(): problems.append(tag + ' row tap did not highlight its pin')
            pg.locator('.pic-pin[data-p="hana"]').focus(); pg.keyboard.press('Enter'); pg.wait_for_timeout(100)
            if 'nose' not in pg.locator('.pic-panel').inner_text(): problems.append(tag + ' Enter on a pin did nothing')
            if name == 'phone':
                sz = pg.evaluate("(()=>{const r=document.querySelector('.pic-pin .pic-hit').getBoundingClientRect();return Math.round(r.width)})()")
                if sz < 44: problems.append(tag + ' pin hit area %dpx' % sz)
                print('phone pin hit area px', sz, '| dict link shown:', pg.locator('.pic-panel a[href^="#/dict/"]').count())
            if shots: pg.screenshot(path='/tmp/qa-out/pictures_%s_%s_learn.png' % (name, scheme), full_page=True)
            # Identify (read), Identify (listen only), Label choose, Label type, Listen
            go(pg, '#/pictures/fx-face?tab=identify'); n, r = round_tap(pg, 'fx-face', 'identify', tag + ' identify')
            if shots and name == 'phone': pg.screenshot(path='/tmp/qa-out/pictures_%s_%s_score.png' % (name, scheme))
            sc = pg.evaluate("App.state.done.pictures['identify:fx-face']")
            if sc != round(100 * r / n): problems.append(tag + ' identify score %s vs %d/%d' % (sc, r, n))
            if not pg.locator('[data-act=mist]').count(): problems.append(tag + ' no mistakes button after a miss')
            else:
                pg.locator('[data-act=mist]').click(); pg.wait_for_timeout(150); m, _ = round_tap(pg, 'fx-face', 'identify', tag + ' mistakes')
                if pg.evaluate("App.state.done.pictures['identify:fx-face']") != sc: problems.append(tag + ' mistakes round changed best')
            pg.locator('[data-pread="listen"]').click(); pg.wait_for_timeout(150)
            if pg.locator('.pic-prompt .tl').count(): problems.append(tag + ' listen-only still shows the word')
            if shots: pg.screenshot(path='/tmp/qa-out/pictures_%s_%s_identify.png' % (name, scheme))
            round_tap(pg, 'fx-face', 'identify', tag + ' identify-listen')
            go(pg, '#/pictures/fx-face?tab=label')
            if pg.evaluate("[...document.querySelectorAll('.pic-q .pic-pin')].some(g=>/[^\\d]/.test(g.getAttribute('aria-label')||''))"): problems.append(tag + ' quiz pin aria-label not a number')
            pg.locator('.pic-q .opt').first.wait_for()
            if shots: pg.screenshot(path='/tmp/qa-out/pictures_%s_%s_label.png' % (name, scheme))
            run_label(pg, 'fx-face', tag, False)
            pg.locator('[data-plab="type"]').click(); pg.wait_for_timeout(150); run_label(pg, 'fx-face', tag, True)
            go(pg, '#/pictures/fx-face?tab=listen'); round_tap(pg, 'fx-face', 'listen', tag + ' listen')
            # Cards set
            go(pg, '#/pictures/fx-pets'); pg.locator('.pic-card[data-p="neko"]').click(); pg.wait_for_timeout(100)
            if 'cat' not in pg.locator('.pic-panel').inner_text(): problems.append(tag + ' cards learn panel')
            check(pg, tag + ' cards learn')
            if shots: pg.screenshot(path='/tmp/qa-out/pictures_%s_%s_cards.png' % (name, scheme), full_page=True)
            go(pg, '#/pictures/fx-pets?tab=identify'); round_tap(pg, 'fx-pets', 'identify', tag + ' cards identify'); check(pg, tag + ' cards identify')
            go(pg, '#/pictures/fx-pets?tab=label'); pg.locator('[data-plab="choose"]').click(); pg.wait_for_timeout(150); run_label(pg, 'fx-pets', tag + ' cards', False)
            go(pg, '#/pictures/fx-pets?tab=listen'); round_tap(pg, 'fx-pets', 'listen', tag + ' cards listen')
            if shots and name == 'phone':
                go(pg, '#/pictures/fx-pets?tab=label'); pg.screenshot(path='/tmp/qa-out/pictures_%s_%s_cardlabel.png' % (name, scheme))
            # Missing art
            go(pg, '#/pictures/fx-noart')
            if not pg.locator('.pic-list li').count() or not pg.locator('#picTab .notice').count(): problems.append(tag + ' missing-art learn')
            go(pg, '#/pictures/fx-noart?tab=identify')
            if not pg.locator('#picTab .notice').count(): problems.append(tag + ' missing-art identify')
            # Print tab
            go(pg, '#/pictures/fx-face?tab=print'); check(pg, tag + ' print')
            # Every tab of every set checked for overflow / notation
            for t in ['learn', 'identify', 'label', 'listen']:
                for sid in ['fx-face', 'fx-pets', 'fx-noart']: go(pg, '#/pictures/%s?tab=%s' % (sid, t)); check(pg, tag + ' ' + sid + ' ' + t)
            # Embeds (two on one page) + svg API
            go(pg, '#/lessons')
            pg.evaluate("""()=>{const d=document.createElement('div');d.id='qaemb';d.innerHTML='<div class="pic-embed" data-pic="fx-face"></div><div class="pic-embed" data-pic="fx-pets"></div><div class="pic-embed" data-pic="nope"></div><div class="pic-embed" data-pic="fx-face"></div>';document.querySelector('#view').prepend(d);App.mountPics(d)}""")
            pg.wait_for_timeout(200)
            e = pg.locator('#qaemb .pic-embed')
            if e.nth(2).inner_html() != '' or e.nth(0).locator('svg').count() != 1 or e.nth(1).locator('.pic-card').count() < 2: problems.append(tag + ' embed render')
            e.nth(3).locator('.pic-pin[data-p="kuchi"]').click(); pg.wait_for_timeout(100)
            if 'mouth' not in e.nth(3).locator('.pic-panel').inner_text() or 'mouth' in e.nth(0).locator('.pic-panel').inner_text(): problems.append(tag + ' embeds not independent')
            if not e.nth(0).locator('a[href="#/pictures/fx-face?tab=identify"]').count(): problems.append(tag + ' embed practise link')
            check(pg, tag + ' embeds')
            if name == 'phone' and scheme == 'light': pg.locator('#qaemb').screenshot(path='/tmp/qa-out/pictures_phone_embed.png')
            api = pg.evaluate("""()=>{const P=App.pictures,f=P.get('fx-face');const a=P.svg(f,{pins:'dots'}),b=P.svg(f,{pins:'none'}),c=P.svg(f,{highlight:'me'}),d=P.svg(P.get('fx-pets'));
              return [a.startsWith('<svg')&&!/class="pic-n"/.test(a), !/pic-pin/.test(b), /pic-pin hl" data-p="me"/.test(c), d==='', P.byId('fx-face')===f, P.sets().length>=3, Array.isArray(P.GROUPS)]}""")
            if not all(api): problems.append(tag + ' svg/API ' + str(api))
            # Progress
            go(pg, '#/progress'); t = pg.locator('#view').inner_text()
            if 'Fixture face' not in t: problems.append(tag + ' progress has no picture score')
            check(pg, tag + ' progress')
            ctx.close()

    # Empty state: picture data blocked, no fixture
    ctx, pg = ctx_page({'width': 390, 'height': 844}, 'light', fixture=False, block=True)
    go(pg, '#/pictures')
    print('empty state:', 'No pictures yet' in pg.locator('#view').inner_text()); check(pg, 'empty')
    go(pg, '#/pictures/body-front'); print('unknown set page:', pg.locator('#view h1').inner_text())
    pg.evaluate("()=>{const d=document.createElement('div');d.innerHTML='<div class=\"pic-embed\" data-pic=\"body-front\"></div>';App.mountPics(d)}")
    ctx.close()
    # Real data: every set, every tab
    ctx, pg = ctx_page({'width': 390, 'height': 844}, 'dark', fixture=False)
    go(pg, '#/pictures'); check(pg, 'real list')
    ids = pg.evaluate("App.pictures.sets().map(s=>s.id)")
    for sid in ids:
        for t in ['learn', 'identify', 'label', 'listen']:
            go(pg, '#/pictures/%s?tab=%s' % (sid, t)); check(pg, 'real ' + sid + ' ' + t)
            if t in ('identify', 'listen') and pg.locator('.pic-q .pic-pin, .pic-q .pic-card').count():
                pg.locator('.pic-q .pic-pin, .pic-q .pic-card').first.click(); pg.wait_for_timeout(80)
    print('real sets checked:', len(ids))
    ctx.close(); br.close()
print('problems', problems)
print('errors', errors)
