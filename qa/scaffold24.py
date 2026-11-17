"""0.24.0 scaffold checks: lesson picture embed (known and unknown set), Progress rows for pictures / signs, Practice tiles,
Japanese headings, search hooks, empty dictionary categories. Last line: errors [...]."""
import asyncio, json
from playwright.async_api import async_playwright
U = 'http://localhost:8765/index.html'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        errs = []
        for vp, dark in [({'width': 390, 'height': 844}, True), ({'width': 1280, 'height': 900}, False)]:
            ctx = await b.new_context(viewport=vp, color_scheme='dark' if dark else 'light')
            pg = await ctx.new_page()
            pg.on('console', lambda m: errs.append(m.text) if m.type in ('error', 'warning') and '403' not in m.text and 'fonts' not in m.text else None)
            pg.on('pageerror', lambda e: errs.append(str(e)))
            await pg.goto(U); await pg.wait_for_timeout(500)
            tag = 'phone' if vp['width'] < 500 else 'desk'
            # temporary lesson with two embeds (one unknown), added in the page only
            await pg.evaluate("""()=>{LESSONS.push({id:'zz-pic',level:'N5',unit:'Picture lessons: places and bodies',title:'Pic test',summary:'s',draft:true,
              body:'<p>x</p><div class="pic-embed" data-pic="positions"></div><div class="pic-embed" data-pic="nope"></div>',quiz:[['q',['a','b','c'],0,'w']]})}""")
            await pg.evaluate("location.hash='#/lessons/zz-pic'"); await pg.wait_for_timeout(300)
            r = await pg.evaluate("""()=>{const e=[...document.querySelectorAll('.pic-embed')];return e.map(d=>d.dataset.pic+':'+(d.innerText.trim().replace(/\\s+/g,' ').slice(0,60)||'(empty)')+':'+(d.querySelector('a')?d.querySelector('a').getAttribute('href'):''))}""")
            print(tag, 'embeds', r)
            # Progress with fake scores
            await pg.evaluate("""()=>{const d=App.state.done;d.pictures={'identify:positions':80,'label:positions':40,'listen:pets-farm':100,miss:['positions:ue']};
              d.signs={'quiz:hospital:ja-en':70,'quiz:all:en-ja':55,'panel:washer':90,'x':'bad'};App.save()}""")
            await pg.evaluate("location.hash='#/progress'"); await pg.wait_for_timeout(400)
            r = await pg.evaluate("""()=>[...document.querySelectorAll('.ps-block')].filter(b=>/Picture words|Signs and buttons/.test(b.innerText)).map(b=>b.innerText.replace(/\\s+/g,' ').slice(0,200))""")
            print(tag, 'progress', r)
            ov = await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
            await pg.evaluate("location.hash='#/practice'"); await pg.wait_for_timeout(300)
            print(tag, 'practice tiles', await pg.evaluate("[...document.querySelectorAll('#view a.tile')].filter(a=>/pictures|signs/.test(a.getAttribute('href'))).map(a=>a.getAttribute('href'))"))
            await pg.screenshot(path='/tmp/qa-out/s24_practice_%s.png' % tag, full_page=False)
            print(tag, 'search', await pg.evaluate("JSON.stringify(['dog','reception','positions','uketsuke'].map(q=>[q,App.searchAll(q).filter(r=>/Picture|Sign/.test(r.type)).slice(0,2).map(r=>r.route)]))"))
            await pg.evaluate("location.hash='#/dict'"); await pg.wait_for_timeout(300)
            print(tag, 'dict topics have animals/things/clothes', await pg.evaluate("['animals','things','clothes'].map(k=>!!document.querySelector('#dcat option[value='+k+']'))"),
                  'CATS', await pg.evaluate("['animals','things','clothes'].map(k=>App.CATS[k])"))
            await pg.evaluate("location.hash='#/dict?cat=animals'"); await pg.wait_for_timeout(300)
            print(tag, 'dict cat=animals', await pg.evaluate("document.querySelector('#dres').innerText.slice(0,50)"))
            await pg.evaluate("location.hash='#/vocab'"); await pg.wait_for_timeout(300)
            for h in ['#/pictures', '#/pictures/positions', '#/signs', '#/pictures/bodymap']:
                await pg.evaluate("h=>{location.hash=h}", h); await pg.wait_for_timeout(250)
                raw = await pg.evaluate("document.body.innerText.includes('《')")
                o = await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
                if raw or o: errs.append(h + ' raw/overflow ' + str((raw, o)))
            await pg.screenshot(path='/tmp/qa-out/s24_pictures_%s.png' % tag)
            # Japanese shell: headings of the new pages
            await pg.evaluate("App.setLang && App.setLang('tl')"); await pg.wait_for_timeout(300)
            await pg.evaluate("location.hash='#/practice'"); await pg.wait_for_timeout(400)
            print(tag, 'ja heads', await pg.evaluate("[...document.querySelectorAll('#view h2, #view .tile h3')].filter(h=>/Pictures|Picture words|Body map|Signs and buttons/.test(h.dataset.en||h.textContent)).map(h=>(h.dataset.en||'EN-ONLY')+'='+JA.textOf(h).slice(0,24))"))
            await pg.screenshot(path='/tmp/qa-out/s24_practice_ja_%s.png' % tag)
            await pg.evaluate("App.setLang && App.setLang('en')"); await pg.wait_for_timeout(200)
            if ov: errs.append(tag + ' progress overflow')
            await ctx.close()
        print('errors', errs)
        await b.close()
asyncio.run(main())
