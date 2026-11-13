"""Writing practice sheet (#/write): each source (hiragana, katakana, kanji, typed), options, the links from the kanji
page and the kana panel, saved choices, every kanji level renders a block per character, and PDFs in A4 and Letter.
Expect "errors []", "levels with a missing block []", no overflow. Screenshots and PDFs in /tmp/qa-out/writing_*."""
import asyncio, urllib.parse, subprocess
from playwright.async_api import async_playwright
B='http://localhost:8765/index.html'
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(); errors=[]
        for name,vp,scheme in [('phone',{'width':390,'height':844},'light'),('desk',{'width':1280,'height':900},'dark')]:
            ctx=await br.new_context(viewport=vp,color_scheme=scheme); pg=await ctx.new_page()
            pg.on('console',lambda m: errors.append(m.text) if m.type=='error' and '403' not in m.text else None); pg.on('pageerror',lambda e: errors.append(str(e)))
            async def go(h):
                await pg.goto(B+h); await pg.wait_for_timeout(450)
            n=lambda: pg.locator('.ws-char').count()
            ov=lambda: pg.evaluate("document.documentElement.scrollWidth>innerWidth")
            await go('#/write'); await pg.wait_for_selector('.ws-char')
            print(name,'default blocks',await n(),'boxes',await pg.locator('.ws-char >> nth=0').locator('.ws-box').count(),'ghosts',await pg.locator('.ws-char >> nth=0').locator('.ws-box .ws-ghost').count(),'| count:',await pg.locator('#wscount').inner_text(),'| overflow',await ov())
            await pg.screenshot(path=f'/tmp/qa-out/writing_top_{name}.png'); await pg.locator('.ws-paper').scroll_into_view_if_needed(); await pg.screenshot(path=f'/tmp/qa-out/writing_sheet_{name}.png')
            await pg.locator('[data-ws-all="1"]').click(); await pg.wait_for_timeout(500); print(' all hiragana rows',await n())
            await pg.locator('[data-ws-set=src][data-v=k]').click(); await pg.wait_for_timeout(500); print(' katakana',await n(),await pg.locator('.ws-char >> nth=0').get_attribute('data-ws'))
            await pg.locator('[data-ws-all="0"]').click(); await pg.wait_for_timeout(300); print(' none:',await n(),'print disabled',await pg.locator('#wsprint').is_disabled())
            await pg.locator('[data-ws-row=sa]').check(); await pg.wait_for_timeout(300); print(' one row',await n())
            await pg.locator('[data-ws-set=src][data-v=kj]').click(); await pg.wait_for_selector('.ws-char'); await pg.wait_for_timeout(300)
            print(' kanji first group',await n(),'meta:',(await pg.locator('.ws-meta >> nth=0').inner_text()).replace('\n',' | '),'| overflow',await ov())
            for k,v in [('size','l'),('lines','3'),('trace','99')]:
                await pg.locator(f'[data-ws-set={k}][data-v="{v}"]').click(); await pg.wait_for_timeout(250)
            c=pg.locator('.ws-char >> nth=0'); print(' large, 3 rows, trace a row: boxes',await c.locator('.ws-box').count(),'ghosts',await c.locator('.ws-box .ws-ghost').count()//max(1,await c.locator('.ws-model .ws-p').count()))
            await pg.locator('[data-ws-flag=steps]').uncheck(); await pg.locator('[data-ws-flag=info]').uncheck(); await pg.wait_for_timeout(300)
            print(' steps off',await pg.locator('.ws-step').count(),'info off:',repr(await pg.locator('.ws-meta >> nth=0').inner_text()))
            await pg.reload(); await pg.wait_for_selector('.ws-char'); print(' kept after reload:',await pg.evaluate("JSON.stringify(App.state.writeSheet)"))
            await pg.locator('[data-ws-flag=steps]').check(); await pg.locator('[data-ws-flag=info]').check()
            for k,v in [('size','m'),('lines','2'),('trace','3')]:
                await pg.locator(f'[data-ws-set={k}][data-v="{v}"]').click(); await pg.wait_for_timeout(250)
            await pg.locator('[data-ws-set=src][data-v=own]').click(); await pg.locator('#wsown').fill('食飲薬 あx龘'); await pg.wait_for_timeout(600)
            print(' typed:',await n(),'|',await pg.locator('#wscount').inner_text(),'| focus kept',await pg.evaluate("document.activeElement.id"))
            await pg.locator('.ws-paper').scroll_into_view_if_needed(); await pg.screenshot(path=f'/tmp/qa-out/writing_own_{name}.png'); print(' overflow',await ov())
            await go('#/kanji/k/'+urllib.parse.quote('薬')); await pg.wait_for_selector('.so-big'); await pg.locator('a[href^="#/write?c="]').click(); await pg.wait_for_selector('.ws-char[data-ws="薬"]'); print(' from kanji page',await n())
            await go('#/kana'); await pg.locator('.kana-cell[data-say="きゃ"]').click(); await pg.wait_for_selector('.so-sheet'); await pg.locator('.so-sheet a >> nth=0').click(); await pg.wait_for_selector('.ws-char[data-ws="ゃ"]'); print(' from kana panel',await n())
            await go('#/write?lv=N4'); await pg.wait_for_selector('.ws-char'); print(' ?lv=N4',await n(),await pg.locator('.ws-head').inner_text()); await go('#/write?set=k'); await pg.wait_for_selector('.ws-char'); print(' ?set=k',await pg.locator('.ws-char >> nth=0').get_attribute('data-ws'))
            await go('#/lessons'); await pg.locator('#view a >> nth=0').click(); await pg.wait_for_timeout(300); print(' other pages still take clicks:',await pg.evaluate("location.hash")!='#/lessons')
            if name=='desk':
                bad=await pg.evaluate("""async()=>{const out=[];for(const [lv] of App.KANJI_LEVELS){App.state.writeSheet={src:'kj',lv,groups:[...new Set(App.KANJI.filter(x=>x.lv===lv).map(x=>x.group))].slice(0,3)};location.hash='#/write?x='+lv;await new Promise(r=>setTimeout(r,900));
                  const want=App.KANJI.filter(x=>x.lv===lv&&App.state.writeSheet.groups.includes(x.group)).slice(0,100);const got=[...document.querySelectorAll('.ws-char')];
                  if(got.length!==want.length||want.some((x,i)=>got[i].dataset.ws!==x.k||got[i].querySelectorAll('.ws-model .ws-p').length!==x.strokes)||document.documentElement.scrollWidth>innerWidth)out.push(lv+' '+got.length+'/'+want.length);}return out}""")
                print('levels with a missing block',bad)
                await pg.evaluate("App.state.writeSheet={src:'kj',lv:'N3',groups:[...new Set(App.KANJI.filter(x=>x.lv==='N3').map(x=>x.group))]};location.hash='#/write?y=1'"); await pg.wait_for_timeout(2500); print(' over the limit:',await n(),'|',await pg.locator('#wscount').inner_text())
                for paper,src in [('A4',"{src:'h',rows:['a','ka','sa']}"),('Letter',"{src:'kj',lv:'N5',groups:null,size:'l',lines:3,paper:'LETTER'}"),('A4s',"{src:'own',own:'鬱躁薬眠',size:'s',lines:4,trace:99}")]:
                    await pg.evaluate("App.state.writeSheet="+src+";location.hash='#/write?z="+paper+"'"); await pg.wait_for_timeout(900)
                    await pg.emulate_media(media='print',color_scheme='light'); f=f'/tmp/qa-out/writing_{paper}.pdf'
                    await pg.pdf(path=f,format='Letter' if paper=='Letter' else 'A4',margin={'top':'11mm','bottom':'11mm','left':'11mm','right':'11mm'},print_background=True); await pg.emulate_media(media='screen',color_scheme=scheme)
                    out=subprocess.run(['pdfinfo',f],capture_output=True,text=True).stdout; print(' pdf',paper,[l for l in out.split('\n') if l.startswith('Pages')],'blocks',await n())
            await ctx.close()
        print('errors',errors); await br.close()
asyncio.run(main())
