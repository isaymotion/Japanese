"""1.1.0 Immersion (#/immersion, js/immersion.js, data immersion/sources.js). Phone 360x740 and desktop 1280x800, light and
dark: every tab, overflow, raw notation, level filter, star -> Mine (survives reload), look-up by kana / romaji / English
with links to the dictionary and Jisho for nonsense, the player (youtube-nocookie blocked with page.route: one iframe,
replaced by a second Play, removed by Close and by leaving), offline notice, external links, Japanese menu label, no
[data-say]. Screenshots /tmp/qa-out/imm_<width>_<theme>_<tab>.png. Last line: errors [...]"""
import os
from playwright.sync_api import sync_playwright
URL = 'http://localhost:' + os.environ.get('QA_PORT', '8765') + '/index.html'
OUT = '/tmp/qa-out/'
os.makedirs(OUT, exist_ok=True)
problems = []
# A second playable source (a playlist) so "a second Play replaces the first" can be tested whatever the data holds.
EXTRA = """()=>{const I=window.IMMERSION; const g=(I.groups.find(g=>g.tab==='watch')||{}).id;
  I.sources.push({id:'im-qa-2',g:g,kind:'youtube',title:'QA playlist',url:'https://www.youtube.com/',yt:{list:'PLqaqaqaqaqa'},lv:['Starter','Native'],speaks:'ja',cc:'auto',geo:'',cost:'free',en:'QA only.'})}"""
SMALL = """()=>[...document.querySelectorAll('#view .imm-src button, #view .imm-src a:not(p a), #view .imm-seg button, #view .imm-seg a, #view .imm-hit, #view #immq, #view #immgroup, #view .imm-none a')]
  .filter(e=>e.offsetParent!==null).map(e=>[e.textContent.trim().slice(0,20)||e.id||e.getAttribute('aria-label'), Math.round(e.getBoundingClientRect().height)]).filter(x=>x[1]<44)"""
EXT = """()=>[...document.querySelectorAll('#view a[href^="http"], #view a[href^="//"]')].filter(a=>a.target!=='_blank'||!/noopener/.test(a.rel)).map(a=>a.href)"""


def run(b, w, h, dark):
    theme = 'dark' if dark else 'light'
    name = f'{w}_{theme}'
    ctx = b.new_context(viewport={'width': w, 'height': h}, color_scheme=theme)
    hits = []
    def yt(route):
        hits.append(route.request.url)
        route.fulfill(status=200, content_type='text/html', body='<html><body>blocked</body></html>')
    ctx.route('**/*youtube-nocookie.com/**', yt)
    ctx.route('**/*youtube.com/**', lambda r: r.abort())
    pg = ctx.new_page()
    errs = []
    # The copy has no audio/ (the voice pack): its 404s are expected; any other missing file is an error.
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text and 'ERR_' not in m.text and 'Failed to load resource' not in m.text else None)
    pg.on('response', lambda r: errs.append('404 ' + r.url) if r.status == 404 and '/audio/' not in r.url else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(URL + '#/'); pg.wait_for_timeout(500)
    pg.evaluate("()=>{localStorage.clear()}"); pg.reload(); pg.wait_for_timeout(700)
    def go(hh): pg.evaluate("h=>{location.hash=h}", hh); pg.wait_for_timeout(350)
    def check(tag):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("document.body.innerText.includes('《')")
        say = pg.locator('#view [data-say]').count()
        ext = pg.evaluate(EXT)
        small = pg.evaluate(SMALL)
        if ov or raw or say or ext or small: problems.append(f'{name} {tag} overflow={ov} raw={raw} say={say} ext={ext} small={small}')
    def cards(): return pg.locator('#view .imm-src').count()
    def tabs(): return pg.locator('#view .imm-tabs a').all_inner_texts()

    # Search finds the page
    r = pg.evaluate("App.searchAll('immersion',8).map(x=>x.route)")
    if '#/immersion' not in r: problems.append(f'{name} search does not find Immersion {r}')
    # Practice tile and menu entry
    go('#/practice')
    if pg.locator('#view a.tile[href="#/immersion"]').count() != 1: problems.append(f'{name} no Practice tile')
    if pg.locator('#railBody [data-nav="immersion"]').count() != 1: problems.append(f'{name} no menu entry')

    # Every tab
    for tab in ['watch', 'listen', 'read', 'captions']:
        go('#/immersion?tab=' + tab); check(tab)
        pg.screenshot(path=OUT + f'imm_{w}_{theme}_{tab}.png', full_page=True)
        print(name, tab, 'cards', cards() or pg.locator('#view .imm-capcard').count(), '| tabs', tabs())
        if tab != 'captions' and not cards(): problems.append(f'{name} {tab} has no cards')
    if pg.locator('#view .imm-capcard').count() < 1: problems.append(f'{name} captions tab has no cards')
    if 'cannot translate speech' not in pg.locator('#view').inner_text(): problems.append(f'{name} captions paragraph missing')
    foot = pg.locator('#view .imm-foot').inner_text()
    mail = pg.locator('#view .imm-foot a[href^="mailto:"]').get_attribute('href') or ''
    meta_mail = pg.evaluate("APP_META.email")
    if 'Links checked:' not in foot or meta_mail not in mail: problems.append(f'{name} footer {foot!r} {mail!r}')
    if any('Mine' in t for t in tabs()): problems.append(f'{name} Mine shown with no stars')

    # Level filter (read tab), the tip callout, the saved level
    go('#/immersion?tab=read')
    n_all = cards()
    counts = {}
    for lv in ['Starter', 'N5', 'N3', 'N1']:
        pg.locator(f'#view [data-ilv="{lv}"]').first.click(); pg.wait_for_timeout(150)
        counts[lv] = cards()
        if lv == 'N5':
            tip = pg.locator('#view .imm-tipbox').all_inner_texts()
            if not tip or 'How to use this at N5' not in tip[0]: problems.append(f'{name} no N5 tip callout {tip}')
        check('read ' + lv)
    print(name, 'read all', n_all, 'by level', counts, '| saved', pg.evaluate("App.state.settings.immLv"))
    if len(set(counts.values()) | {n_all}) < 2: problems.append(f'{name} level filter does not change the list')
    if pg.evaluate("App.state.settings.immLv") != 'N1': problems.append(f'{name} level not saved')
    pg.locator('#view [data-ilv="All"]').first.click(); pg.wait_for_timeout(150)
    if cards() != n_all: problems.append(f'{name} All does not restore the list')
    # Group select
    if pg.locator('#immgroup').count():
        opts = pg.evaluate("[...document.querySelectorAll('#immgroup option')].map(o=>o.value)")
        pg.select_option('#immgroup', opts[1]); pg.wait_for_timeout(150)
        if cards() >= n_all and n_all > 1: problems.append(f'{name} group select does not filter')
        pg.select_option('#immgroup', 'all'); pg.wait_for_timeout(150)

    # Star -> Mine, survives reload
    go('#/immersion?tab=watch')
    st = pg.locator('#view [data-star]').first
    sid = st.get_attribute('data-star')
    st.click(); pg.wait_for_timeout(150)
    if st.get_attribute('aria-pressed') != 'true': problems.append(f'{name} star aria-pressed not true')
    if not any('Mine' in t for t in tabs()): problems.append(f'{name} Mine tab did not appear')
    pg.reload(); pg.wait_for_timeout(800)
    if not any('Mine' in t for t in tabs()): problems.append(f'{name} Mine tab gone after reload')
    if pg.evaluate("App.state.immersion && App.state.immersion.fav") != [sid]: problems.append(f'{name} fav not saved')
    go('#/immersion?tab=mine'); check('mine')
    pg.screenshot(path=OUT + f'imm_{w}_{theme}_mine.png', full_page=True)
    if cards() != 1: problems.append(f'{name} Mine shows {cards()} cards')

    # Look-up box: kana, romaji, English -> 水 (water); link to its page; Jisho for nonsense; term kept across tabs
    go('#/immersion?tab=watch')
    wid = pg.evaluate("(App.DICT.find(e=>e.tl==='水《みず》'&&e.en==='water')||{}).id")
    for term in ['みず', 'mizu', 'water']:
        pg.fill('#immq', term); pg.wait_for_timeout(400)
        hrefs = pg.evaluate("[...document.querySelectorAll('#immres .imm-hit')].map(a=>a.getAttribute('href'))")
        if '#/dict/' + str(wid) not in hrefs: problems.append(f'{name} look-up {term} did not find 水 ({wid}) {hrefs[:4]}')
        if len(hrefs) > 8: problems.append(f'{name} look-up {term} more than 8 results')
    check('lookup')
    pg.screenshot(path=OUT + f'imm_{w}_{theme}_lookup.png')
    go('#/immersion?tab=listen')
    if pg.input_value('#immq') != 'water' or not pg.locator('#immres .imm-hit').count(): problems.append(f'{name} look-up term lost on tab change')
    pg.locator(f'#immres .imm-hit[href="#/dict/{wid}"]').first.click(); pg.wait_for_timeout(400)
    if not pg.evaluate("location.hash").startswith('#/dict/' + str(wid)): problems.append(f'{name} look-up link did not open the word page')
    go('#/immersion?tab=watch')
    pg.fill('#immq', 'zzqxvk'); pg.wait_for_timeout(400)
    js = pg.locator('#immres a[href^="https://jisho.org/search/"]')
    if js.count() != 1 or 'zzqxvk' not in (js.get_attribute('href') or ''): problems.append(f'{name} no Jisho link for nonsense')
    check('lookup none')
    pg.fill('#immq', ''); pg.wait_for_timeout(300)

    # Player
    pg.evaluate(EXTRA); go('#/immersion?tab=mine'); go('#/immersion?tab=watch')
    plays = pg.locator('#view [data-play]')
    if plays.count() < 2: problems.append(f'{name} fewer than 2 Play buttons ({plays.count()})')
    if hits: problems.append(f'{name} YouTube contacted before any tap {hits}')
    plays.nth(0).click(); pg.wait_for_timeout(300)
    fr = pg.locator('#view iframe')
    src = fr.first.get_attribute('src') if fr.count() else ''
    if fr.count() != 1 or not src.startswith('https://www.youtube-nocookie.com/embed') or 'cc_load_policy=1' not in src:
        problems.append(f'{name} first Play: {fr.count()} iframe(s), src {src}')
    attrs = pg.evaluate("(()=>{const f=document.querySelector('#view iframe');return f?[f.getAttribute('allow'),f.hasAttribute('allowfullscreen'),f.getAttribute('loading'),f.getAttribute('referrerpolicy'),f.title]:null})()")
    print(name, 'iframe', src, attrs)
    if not attrs or 'encrypted-media' not in attrs[0] or not attrs[1] or attrs[2] != 'lazy' or attrs[3] != 'strict-origin-when-cross-origin' or 'on YouTube' not in attrs[4]:
        problems.append(f'{name} iframe attributes {attrs}')
    if 'Auto-translate' not in pg.locator('#view .imm-player').inner_text() or pg.locator('#view .imm-player a[href="#/immersion?tab=captions"]').count() != 1:
        problems.append(f'{name} player caption line or link missing')
    check('playing')
    pg.screenshot(path=OUT + f'imm_{w}_{theme}_player.png')
    # caption language switch updates the open video
    pg.locator('#view [data-cc="ja"]').first.click(); pg.wait_for_timeout(200)
    if 'cc_lang_pref=ja' not in (pg.locator('#view iframe').first.get_attribute('src') or ''): problems.append(f'{name} caption switch did not reach the player')
    if pg.evaluate("App.state.settings.immCc") != 'ja': problems.append(f'{name} immCc not saved')
    plays.nth(1).click(); pg.wait_for_timeout(300)
    fr = pg.locator('#view iframe')
    src2 = fr.first.get_attribute('src') if fr.count() else ''
    if fr.count() != 1 or src2 == src or 'listType=playlist&list=' not in src2: problems.append(f'{name} second Play: {fr.count()} iframe(s), {src2}')
    pg.locator('#view .imm-player [data-close]').click(); pg.wait_for_timeout(200)
    if pg.locator('iframe').count(): problems.append(f'{name} Close left an iframe')
    plays.nth(0).click(); pg.wait_for_timeout(200)
    go('#/practice')
    if pg.locator('iframe').count(): problems.append(f'{name} leaving the page left an iframe')
    print(name, 'player requests (blocked):', len(hits))

    # Offline: the notice instead of Play buttons
    go('#/immersion?tab=watch')
    ctx.set_offline(True); pg.wait_for_timeout(300)
    go('#/practice'); go('#/immersion?tab=watch')
    np_, off = pg.locator('#view [data-play]').count(), pg.locator('#view .imm-off').count()
    if np_ or not off: problems.append(f'{name} offline: play buttons {np_}, notice {off}')
    check('offline')
    ctx.set_offline(False); pg.wait_for_timeout(400)
    if not pg.locator('#view [data-play]').count(): problems.append(f'{name} Play buttons did not come back online')

    # Japanese menu
    pg.evaluate("App.setLang('tl')"); pg.wait_for_timeout(400)
    go('#/immersion?tab=watch')
    lab = pg.locator('#railBody [data-nav="immersion"]').text_content()
    h1 = pg.locator('#view h1').inner_text()
    print(name, 'ja menu', lab.replace('\n', ' / '), '| h1', h1.replace('\n', ' / '))
    if 'イマージョン' not in lab or 'イマージョン' not in h1: problems.append(f'{name} Japanese label missing: {lab!r} {h1!r}')
    check('ja menu')
    pg.evaluate("App.setLang('en')"); pg.wait_for_timeout(300)

    # Empty data
    pg.evaluate("()=>{window.IMMERSION={}}"); go('#/practice'); go('#/immersion?tab=watch'); check('empty')
    if 'No watch sources yet' not in pg.locator('#view').inner_text(): problems.append(f'{name} no empty state')
    go('#/immersion?tab=captions')
    if 'next data update' not in pg.locator('#view').inner_text(): problems.append(f'{name} no captions empty state')

    if errs: problems.append(f'{name} console {errs[:3]}')
    ctx.close()


with sync_playwright() as p:
    b = p.chromium.launch()
    for w, h in [(360, 740), (1280, 800)]:
        for dark in [False, True]:
            run(b, w, h, dark)
    b.close()
print('errors', problems)
