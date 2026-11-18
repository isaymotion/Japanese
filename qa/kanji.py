"""Kanji module: chart, kanji page, the four drill modes, flashcards, word-page chips, search. Expect "errors []".
0.28.0: also N1 (when the app has N1 kanji): the "more N1 kanji are in the Clinical set" block, the 600-of-1,230 line,
the four drill modes, the list tab, flashcards and search at N1."""
import asyncio, urllib.parse
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        for w,h,name in [(390,844,'phone'),(1280,900,'desk')]:
            pg=await b.new_page(viewport={'width':w,'height':h})
            errs=[]
            pg.on('console', lambda m: errs.append(m.text) if m.type=='error' and '403' not in m.text else None)
            pg.on('pageerror', lambda e: errs.append(str(e)))
            await pg.goto('http://localhost:'+__import__('os').environ.get('QA_PORT','8765')+'/index.html#/kanji'); await pg.wait_for_timeout(500)
            async def go(hh):
                await pg.evaluate("h=>{location.hash=h}",hh); await pg.wait_for_timeout(350)
            async def ov(): return await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
            levels=await pg.evaluate("App.KANJI_LEVELS.map(x=>x[0]+':'+App.KANJI.filter(k=>k.lv===x[0]).length)")
            print(name,'levels',levels,'total',await pg.evaluate("App.KANJI.length"))
            await pg.screenshot(path=f'/tmp/qa-out/kanji_chart_{name}.png')
            for lv in await pg.evaluate("App.KANJI_LEVELS.map(x=>x[0])"):
                await go('#/kanji?lv='+lv)
                print(' chart',lv,'cells',await pg.locator('.kj-cell').count(),'overflow',await ov(),'rj',await pg.locator('.kj-grid .rj').count())
                if lv=='N2':   # 0.21.0: links to the 37 N2 kanji kept in the clinical set
                    r=await pg.evaluate("""()=>{const p=[...document.querySelectorAll('#view p')].find(x=>/more N2 kanji are in the Clinical set/.test(x.textContent));if(!p)return 'no line';const g=p.nextElementSibling;const a=[...g.querySelectorAll('a.kj-cell')];return p.textContent.trim()+' links '+a.length+' bad '+a.filter(x=>{const k=decodeURIComponent(x.getAttribute('href').split('/k/')[1]||'');return !App.kanjiBy[k]||App.kanjiBy[k].lv!=='C'}).length}""")
                    print('  N2 in clinical set:',r)
                if lv=='N1':   # 0.28.0: links to the reference-N1 kanji kept in the clinical set, and the 600-of-1,230 line
                    r=await pg.evaluate("""()=>{const p=[...document.querySelectorAll('#view p')].find(x=>/more N1 kanji are in the Clinical set/.test(x.textContent));if(!p)return 'no line';const g=p.nextElementSibling;const a=[...g.querySelectorAll('a.kj-cell')];return p.textContent.trim()+' links '+a.length+' bad '+a.filter(x=>{const k=decodeURIComponent(x.getAttribute('href').split('/k/')[1]||'');return !App.kanjiBy[k]||App.kanjiBy[k].lv!=='C'}).length}""")
                    print('  N1 in clinical set:',r)
                    if 'no line' in r or ' bad 0' not in r: errs.append('N1 clinical block: '+r)
                    if await pg.evaluate("[...document.querySelectorAll('#view p')].some(x=>/600 most frequent/.test(x.textContent))"): errs.append('stale N1 600 line')
                if lv=='C': print('  C note:',await pg.evaluate("([...document.querySelectorAll('#view p.small')].find(p=>/psychiatry phrases/.test(p.textContent))||{}).textContent"))
            # every kanji page renders (desktop only, quick), no raw notation, no overflow
            if name=='desk':
                bad=await pg.evaluate("""async()=>{const out=[];for(const x of App.KANJI){location.hash=App.kanjiHref(x.k);await new Promise(r=>setTimeout(r,25));
                  const v=document.querySelector('#view');const t=v.innerText;if(/[《》｜]/.test(t)||!v.querySelector('.kj-glyph')||v.querySelectorAll('.entry').length<2)out.push(x.k);}return out}""")
                print(' pages with problems',bad)
            await go('#/kanji/k/'+urllib.parse.quote('食')); await pg.wait_for_timeout(200)
            print(' page h1',(await pg.locator('h1').inner_text())[:40].replace('\n',' '),'| entries',await pg.locator('.entry').count(),'overflow',await ov())
            await pg.screenshot(path=f'/tmp/qa-out/kanji_page_{name}.png',full_page=True)
            await pg.locator('#kjknow').click(); print(' known',await pg.evaluate("App.state.kanji['食']"))
            await pg.locator('#kjknow').click()
            await pg.locator('[data-addcard]').first.click(); print(' card',await pg.evaluate("!!App.state.srs['k:食']"))
            for mode in ['meaning','kanji','reading','word']:
                await go('#/kanji?lv=N5&tab=drill'); await pg.locator(f'[data-mode={mode}]').click(); await pg.locator('#kjstart').click()
                for i in range(10):
                    if i==0: await pg.screenshot(path=f'/tmp/qa-out/kanji_drill_{mode}_{name}.png')
                    # answer correctly: option 0 is the right one
                    await pg.locator('#kjq .opt[data-k="0"]').click()
                    if i==0: await pg.screenshot(path=f'/tmp/qa-out/kanji_fb_{mode}_{name}.png')
                    await pg.locator('#kjnext').click()
                print(' drill',mode,await pg.locator('#kjq h3').inner_text(),'overflow',await ov())
            if await pg.evaluate("App.KANJI.some(k=>k.lv==='N1')"):
                nN1=await pg.evaluate("App.KANJI.filter(k=>k.lv==='N1').length")
                for mode in ['meaning','kanji','reading','word']:
                    await go('#/kanji?lv=N1&tab=drill'); await pg.locator(f'[data-mode={mode}]').click()
                    for c in await pg.locator('[data-grp]').all():   # all N1 groups (the seed groups are small)
                        if not await c.is_checked(): await c.check()
                    await pg.locator('#kjstart').click()
                    for i in range(40):
                        if not await pg.locator('#kjq .opt[data-k="0"]').count(): break
                        await pg.locator('#kjq .opt[data-k="0"]').click(); await pg.locator('#kjnext').click()
                    print(' N1 drill',mode,(await pg.locator('#kjq h3').inner_text()) if await pg.locator('#kjq h3').count() else (await pg.locator('#kjq').inner_text())[:60],'overflow',await ov())
                await go('#/kanji?lv=N1&tab=list'); print(' N1 list rows',await pg.locator('.kj-table tr').count()-await pg.locator('.kj-table').count(),'of',nN1,'overflow',await ov())
                await go('#/flash/kanji-N1'); print(' N1 flash deck',await pg.locator('#fc').count(),'overflow',await ov())
                k1=await pg.evaluate("App.KANJI.find(k=>k.lv==='N1').k")
                print(' N1 search',k1,await pg.evaluate("k=>App.searchAll(k,8).filter(r=>r.type==='Kanji').map(r=>r.title).slice(0,2)",k1))
            print(' progress',await pg.evaluate("Object.keys(App.state.kanji).length"),'learned',await pg.evaluate("App.kanjiLearned()"))
            await go('#/flash/kanji-N5'); await pg.locator('#fc').click(); await pg.wait_for_timeout(150); await pg.screenshot(path=f'/tmp/qa-out/kanji_flash_{name}.png'); await pg.locator('[data-g="2"]').click()
            wid=await pg.evaluate("App.DICT.find(e=>JA.plain(e.tl)==='病院').id"); await go('#/dict/'+wid)
            print(' word chips',await pg.locator('.kj-chip').count()); await pg.screenshot(path=f'/tmp/qa-out/kanji_word_{name}.png')
            print(' search',await pg.evaluate("App.searchAll('eat',8).filter(r=>r.type==='Kanji').map(r=>r.title)"),await pg.evaluate("App.searchAll('食',8).map(r=>r.type).slice(0,4)"))
            for r in ['#/','#/practice','#/progress','#/more','#/flash']:
                await go(r); print(' ',r,'overflow',await ov())
            print(name,'errors',errs)
        await b.close()
asyncio.run(main())
