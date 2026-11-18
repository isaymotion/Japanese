"""0.23.0 lesson engine: order (after / review), lesson extras on #/lessons/desu (common mistakes: the wrong line has no
speaker and is never spoken; more examples; More practice quiz stored apart), review pill, print, phone 390 and desktop
1280, light and dark, Japanese shell headings. Temporary seed lessons are served in place of js/data/lessons-28.js by
request interception, so the repo is not changed. Expect "errors []" as the last line."""
import os, json
from playwright.sync_api import sync_playwright
PORT = os.environ.get('QA_PORT', '8765')
SEED = r"""window.LESSONS = window.LESSONS || [];
const q5 = [0,1,2,3,4].map((i) => ['Q' + i + ' 一《いち》', ['a', 'b', 'c'], 0, 'why']);
window.LESSONS.push(
  { id: 'tmp-after', level: 'Starter', unit: 'First sentences', title: 'Temp after desu', summary: 'temp', draft: true, after: 'desu',
    body: '<p>Temp.</p><div class="ex"><b>私《わたし》 は 学生《がくせい》 です。</b><span>I am a student.</span></div>', quiz: q5 },
  { id: 'tmp-chain', level: 'Starter', unit: 'First sentences', title: 'Temp chain', summary: 'temp', draft: true, after: 'tmp-after',
    body: '<p>Temp.</p>', quiz: q5 },
  { id: 'tmp-review', level: 'Starter', unit: 'First sentences', title: 'Review: First sentences', summary: 'temp', draft: true, after: 'desu', review: true,
    body: '<p>Recap.</p>', quiz: [0,1,2,3,4,5,6,7,8,9,10,11].map((i) => ['R' + i, ['a', 'b', 'c'], 1, 'why']) },
  { id: 'tmp-unknown', level: 'N2', unit: 'Temp unit', title: 'Temp unknown after', summary: 'temp', draft: true, after: 'no-such-lesson', body: '<p>x</p>', quiz: q5 }
);
"""
errors = []
def run(p, name, vp, scheme, uiLang=None):
    br = p.chromium.launch()
    ctx = br.new_context(viewport=vp, color_scheme=scheme, service_workers='block')
    pg = ctx.new_page()
    errs = []
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '403' not in m.text else None)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.route('**/js/data/lessons-28.js', lambda r: r.fulfill(status=200, content_type='application/javascript', body=SEED))
    pg.goto('http://localhost:%s/index.html#/' % PORT); pg.wait_for_timeout(600)
    if uiLang:
        pg.evaluate("l=>{App.state.settings.uiLang=l;App.save()}", uiLang); pg.reload(); pg.wait_for_timeout(600)
    pg.evaluate("""()=>{window.__said=[];const o=App.speak;App.speak=(t,x)=>{window.__said.push(t);};}""")
    def go(h, wait='#view h1'):
        pg.evaluate("h=>{location.hash=h}", h); pg.wait_for_timeout(400)
    def chk(cond, msg):
        if not cond: errors.append(name + ': ' + msg)
    def page_ok(tag):
        ov = pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
        raw = pg.evaluate("(document.querySelector('#view').innerText.match(/[《》｜]/g)||[]).length")
        chk(not ov, tag + ' horizontal overflow'); chk(raw == 0, tag + ' raw notation %d' % raw)
        return ov, raw
    order = pg.evaluate("(()=>{const ids=LESSONS.map(l=>l.id);const i=ids.indexOf('desu');return ids.slice(i,i+5).concat(['|', ids.indexOf('tmp-unknown'), ids.length, ids.indexOf('review-n2-connectors')])})()")
    print(name, 'order', order)
    chk(order[:5] == ['desu', 'tmp-review', 'tmp-after', 'tmp-chain', 'no-mo-to'], 'order after desu ' + str(order[:5]))
    chk(order[6] == order[7] - 1 and order[8] == order[7] - 2, 'unknown after should stay in place (end of the file order)')
    # Lessons list: review pill, one heading per unit
    go('#/lessons?lv=all')
    r = pg.evaluate("""()=>{const t=document.querySelector('a.tile[href="#/lessons/tmp-review"]');const hs=[...document.querySelectorAll('#view h2')].map(h=>h.dataset.en||h.textContent.trim());
      return {pill: !!(t&&t.querySelector('.pill.rv')), others: document.querySelectorAll('.pill.rv').length - LESSONS.filter(l=>l.review&&l.id!=='tmp-review').length, first: hs.filter(h=>h==='First sentences').length, after: (()=>{const hs=[...document.querySelectorAll('a.tile')].map(a=>a.getAttribute('href'));const i=hs.indexOf('#/lessons/desu');return hs.slice(i+1,i+5)})()}}""")
    print(name, 'list', r); page_ok('list')
    chk(r['pill'] and r['others'] == 1, 'review pill on the list'); chk(r['first'] == 1, 'one First sentences heading')
    chk(r['after'][:3] == ['#/lessons/tmp-review', '#/lessons/tmp-after', '#/lessons/tmp-chain'], 'list order ' + str(r['after']))
    # Review lesson page: pill, prev / next
    go('#/lessons/tmp-review')
    r = pg.evaluate("""()=>({pill: !!document.querySelector('#view > .row .pill.rv'), pn: [...document.querySelectorAll('.prevnext a')].map(a=>a.getAttribute('href')), q: (document.querySelector('#lq .eyebrow')||{}).textContent, lq2: !!document.querySelector('#lq2')})""")
    print(name, 'review page', r); page_ok('review page')
    chk(r['pill'], 'review pill on the page'); chk(r['pn'] == ['#/lessons/desu', '#/lessons/tmp-after'], 'prev/next ' + str(r['pn']))
    chk('of 12' in (r['q'] or ''), 'review quiz of 12'); chk(not r['lq2'], 'no More practice without extras')
    # desu: extras
    go('#/lessons/desu')
    r = pg.evaluate("""()=>{const X=LESSON_EXTRA.desu, lx=document.querySelector('.lesson-body.lx');
      const hs=[...document.querySelectorAll('#view h2')].map(h=>h.dataset.en||JA.textOf(h).trim());
      const bad=[...document.querySelectorAll('.lx-bad')];
      const says=[...document.querySelectorAll('[data-say]')].map(b=>JA.speak(b.dataset.say));
      const wrong=X.mistakes.map(m=>JA.speak(m[0]));
      return {lx: !!lx, hs, nm: document.querySelectorAll('.lx-m').length, badSay: bad.filter(b=>b.querySelector('.say,[data-say]')).length, struck: bad.filter(b=>b.querySelector('s')).length,
        okSay: document.querySelectorAll('.lx-ok .say').length, moreEx: lx ? lx.querySelectorAll(':scope > .ex .say').length : 0,
        wrongSpoken: says.filter(s=>wrong.includes(s)).length, rightIn: X.mistakes.every(m=>says.includes(JA.speak(m[1]))),
        beforeQuiz: !!(lx && lx.compareDocumentPosition(document.querySelector('#lq')) & 4), lq2After: !!(document.querySelector('#lq2') && document.querySelector('#lq').compareDocumentPosition(document.querySelector('#lq2')) & 4)}}""")
    print(name, 'desu', json.dumps(r, ensure_ascii=False)); page_ok('desu')
    chk(r['lx'] and r['nm'] == 3 and r['struck'] == 3, 'three struck mistakes')
    chk(r['badSay'] == 0 and r['wrongSpoken'] == 0, 'a wrong line has a speaker')
    chk(r['okSay'] == 3 and r['rightIn'], 'right lines have speakers')
    chk(r['moreEx'] == 6, 'six more examples with speakers')
    chk(r['beforeQuiz'] and r['lq2After'], 'placement of extras / More practice')
    for want in ['Common mistakes', 'More examples', 'Check yourself', 'More practice']:
        chk(want in r['hs'], 'heading ' + want)
    # click every speaker in the extras: nothing spoken may be a wrong line
    pg.evaluate("window.__said=[]")
    n = pg.locator('.lesson-body.lx .say').count()
    for i in range(n): pg.locator('.lesson-body.lx .say').nth(i).click()
    said = pg.evaluate("(()=>{const w=LESSON_EXTRA.desu.mistakes.map(m=>JA.speak(m[0]));return {n: window.__said.length, bad: window.__said.filter(s=>w.includes(JA.speak(s))).length}})()")
    print(name, 'speaker clicks', n, said); chk(said['bad'] == 0, 'wrong line spoken')
    if name == 'phone':
        pg.locator('.lesson-body.lx').scroll_into_view_if_needed(); pg.wait_for_timeout(200)
        pg.screenshot(path='/tmp/qa-out/lx_%s_extras.png' % name, full_page=False)
    # More practice: answer all, right and wrong
    before = pg.evaluate("App.state.done.lessons.desu")
    for i in range(6):
        opt = pg.locator('#lq2 .opt').nth(i % 3); opt.click(); pg.wait_for_timeout(60)
        pg.locator('#lq2 [data-act=next]').click(); pg.wait_for_timeout(60)
    res = pg.evaluate("({more: App.state.done.lessonMore && App.state.done.lessonMore.desu, lessons: App.state.done.lessons.desu, txt: document.querySelector('#lq2 h3').textContent})")
    print(name, 'more practice', res, 'lesson score before', before)
    chk(isinstance(res['more'], (int, float)), 'More practice best stored'); chk(res['lessons'] == before, 'lesson completion changed by More practice')
    # print view: extras shown, quizzes hidden
    pg.emulate_media(media='print'); pg.evaluate("document.documentElement.classList.add('pr-page')")
    pr = pg.evaluate("""()=>({lx: getComputedStyle(document.querySelector('.lesson-body.lx')).display, lq2: getComputedStyle(document.querySelector('#lq2')).display, bad: getComputedStyle(document.querySelector('.lx-bad')).display,
       h2: [...document.querySelectorAll('#view > h2')].filter(h=>getComputedStyle(h).display!=='none').map(h=>h.dataset.en||JA.textOf(h).trim())})""")
    pg.evaluate("document.documentElement.classList.remove('pr-page')"); pg.emulate_media(media='screen')
    print(name, 'print', pr)
    chk(pr['lx'] != 'none' and pr['bad'] != 'none' and pr['lq2'] == 'none' and 'More practice' not in pr['h2'], 'print rules')
    pg.evaluate("scrollTo(0,0)"); pg.wait_for_timeout(100)
    if name in ('phone', 'phonedark', 'desk'):
        pg.locator('.lesson-body.lx').scroll_into_view_if_needed(); pg.wait_for_timeout(200)
        pg.screenshot(path='/tmp/qa-out/lx_%s.png' % name)
    # Practice page and Progress rows with fake scores
    pg.evaluate("""()=>{const d=App.state.done;d.build={N5:80,all:40};d.cloze={N5:90,'l:desu':70};d.transform={'N5:choose':60,'N5:type':30,'N4:choose':100};d.test={N4:55};d.pairs={'match:N5':100,'quiz:all':45};d.sounds={'quiz:pain':75,'match:all':20};App.save()}""")
    go('#/progress'); page_ok('progress')
    rows = pg.evaluate("""()=>[...document.querySelectorAll('.ps-block')].map(b=>[b.querySelector('h3').textContent.trim(), b.querySelectorAll('tbody tr').length]).filter(x=>/builder|blank|Transform|review test|pairs|Sound/.test(x[0]))""")
    print(name, 'progress rows', rows)
    chk([x[1] for x in rows] == [2, 2, 2, 1, 2, 2], 'progress rows ' + str(rows))
    if name == 'phone': pg.locator('.ps-block', has_text='Sentence builder').scroll_into_view_if_needed(); pg.screenshot(path='/tmp/qa-out/lx_progress_phone.png')
    go('#/practice'); page_ok('practice')
    tiles = pg.evaluate("[...document.querySelectorAll('#view a.tile')].map(a=>a.getAttribute('href')).filter(h=>/build|cloze|transform|test|pairs|sounds/.test(h))")
    print(name, 'practice tiles', tiles); chk(len(tiles) == 6, 'six practice tiles')
    for h in ['#/build', '#/cloze', '#/transform', '#/test', '#/pairs', '#/sounds']:
        go(h); page_ok(h)
        chk(pg.evaluate("!!document.querySelector('#view h1') && !!document.querySelector('#view .breadcrumb')"), h + ' heading')
    if uiLang:
        go('#/lessons/desu')
        hd = pg.evaluate("[...document.querySelectorAll('#view .hd-tx')].map(h=>JA.speak(JA.textOf(h.firstChild)))")
        print(name, 'Japanese headings', hd); chk(len(hd) >= 4, 'Japanese headings on the lesson page')
    for e in errs: errors.append(name + ' console: ' + e)
    br.close()
with sync_playwright() as p:
    run(p, 'phone', {'width': 390, 'height': 844}, 'light')
    run(p, 'phonedark', {'width': 390, 'height': 844}, 'dark')
    run(p, 'desk', {'width': 1280, 'height': 900}, 'light')
    run(p, 'phoneja', {'width': 390, 'height': 844}, 'light', 'tl')
print('errors', errors)
