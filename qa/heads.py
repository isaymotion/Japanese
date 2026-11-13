"""Japanese page headings (0.14.0): with the Japanese menu on, every menu page shows its heading in Japanese with the
English underneath; pins, breadcrumbs and the recent list keep the English; English mode is unchanged.
Expect "pages without a Japanese h1 []" (apart from Home, whose h1 is the app name), no "overflow True", "errors []".
Screenshots /tmp/qa-out/heads_*.png."""
import asyncio
from playwright.async_api import async_playwright
B='http://localhost:8765/index.html'
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(); errors=[]
        for name,vp in [('phone',{'width':390,'height':844}),('small',{'width':320,'height':640}),('desk',{'width':1280,'height':900})]:
            ctx=await br.new_context(viewport=vp); pg=await ctx.new_page()
            pg.on('console',lambda m: errors.append(m.text) if m.type=='error' and '403' not in m.text else None); pg.on('pageerror',lambda e: errors.append(str(e)))
            await pg.goto(B+'#/settings'); await pg.wait_for_timeout(600)
            await pg.locator('#view [data-lang="tl"]').first.click(); await pg.wait_for_timeout(500)
            hrefs=await pg.evaluate("App.NAV.reduce((a,g)=>a.concat(g[1].map(i=>i[1])),[]).concat(['#/more','#/search?q=sleep','#/lessons/desu','#/kanji/k/'+encodeURIComponent('食'),'#/verbs?tab=adj'])")
            none=[]; other=set()
            for h in hrefs:
                await pg.goto(B+h); await pg.wait_for_timeout(350)
                r=await pg.evaluate("""()=>{const h1=document.querySelector('#view h1');return {h1:h1?(h1.dataset.en||''):null,raw:h1?h1.textContent.trim().slice(0,40):'',
                  h2:[...document.querySelectorAll('#view h2')].filter(x=>!x.dataset.en&&!x.hasAttribute('data-norj')).map(x=>x.textContent.trim().slice(0,30)),
                  ov:document.documentElement.scrollWidth>innerWidth, notation:/《/.test(document.querySelector('#view').innerText), title:document.title,
                  rj:document.querySelectorAll('#view .hd-tx .rj, #view .hd-tx .romaji').length}}""")
                if r['h1']=='' : none.append(h+' ['+r['raw']+']')
                for x in r['h2']: other.add(x)
                if r['ov'] or r['notation'] or r['rj']: print(name,h,'overflow',r['ov'],'raw notation',r['notation'],'romaji in heading',r['rj'])
                if h in ('#/','#/practice','#/settings','#/lessons','#/psych/deesc') and name!='small':
                    await pg.screenshot(path=f"/tmp/qa-out/heads_{name}_{h.strip('#/').replace('/','-') or 'home'}.png")
                if h=='#/practice': print(name,'practice title:',r['title'])
            print(name,'pages without a Japanese h1',none)
            if name=='desk': print('h2 left in English:',sorted(other))
            # pins and recent keep the English text
            await pg.goto(B+'#/lessons'); await pg.wait_for_timeout(300); b=pg.locator('#view h1 .pin')
            if await b.count(): await b.click()
            st=await pg.evaluate("({pins:App.state.pins.map(p=>p.title),recent:App.state.recent.slice(0,3).map(r=>r.title)})"); print(name,st)
            await pg.goto(B+'#/kanji?tab=drill'); await pg.wait_for_timeout(300); await pg.locator('[data-tab=chart]').click(); await pg.wait_for_timeout(200)
            print(name,'h1 after a view redraw:',await pg.evaluate("document.querySelector('#view h1').dataset.en||'(english)'"))
            await pg.goto(B+'#/settings'); await pg.wait_for_timeout(300); await pg.locator('#view [data-lang="en"]').first.click(); await pg.wait_for_timeout(400)
            await pg.goto(B+'#/practice'); await pg.wait_for_timeout(300); print(name,'back in English: .hd-tx count',await pg.locator('.hd-tx').count(),'| title',await pg.title())
            await ctx.close()
        print('errors',errors); await br.close()
asyncio.run(main())
