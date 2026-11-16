"""0.20.0: the refactored discharge engine renders exactly as before. Walks every discharge case (ask all, pick the key,
check, next ... compare, decide) with the original js/discharge-practice.js (from /tmp/discharge-practice.orig.js) and with
the current one, and compares #view innerHTML at every step. Expect "differences 0", "errors []"."""
import asyncio, sys
from playwright.async_api import async_playwright
B='http://localhost:8765/index.html'
ORIG=sys.argv[1] if len(sys.argv)>1 else '/tmp/discharge-practice.orig.js'
async def walk(br, orig):
    ctx=await br.new_context(viewport={'width':390,'height':844}); pg=await ctx.new_page(); errs=[]
    pg.on('pageerror',lambda e: errs.append(str(e)))
    if orig:
        body=open(ORIG).read()
        await pg.route('**/js/discharge-practice.js', lambda r: r.fulfill(status=200, content_type='application/javascript', body=body))
    await pg.goto(B+'#/psych/dcases'); await pg.wait_for_timeout(600)
    snaps=[await pg.inner_html('#view')]
    ids=await pg.evaluate("PSYCH_DISCHARGE_CASES.map(c=>c.id)")
    for cid in ids:
        await pg.evaluate("h=>{location.hash=h}",'#/psych/dcases'); await pg.wait_for_timeout(100)
        await pg.evaluate("h=>{location.hash=h}",'#/psych/dcase/'+cid); await pg.wait_for_timeout(200)
        for step in range(30):
            snaps.append(await pg.inner_html('#view'))
            if await pg.locator('#view .ds-chip.sum.on').count():
                d=pg.locator('#view [data-dec="1"]')
                if await d.count(): await d.click(); snaps.append(await pg.inner_html('#view'))
                break
            for b in await pg.locator('#view [data-ask]').all():
                await pg.locator('#view [data-ask]').first.click(); await pg.wait_for_timeout(20)
            snaps.append(await pg.inner_html('#view'))
            await pg.evaluate("""()=>{const fid=[...document.querySelectorAll('#view .ds-chip')].findIndex(b=>b.classList.contains('on'));
              const C=PSYCH_DISCHARGE_CASES.find(c=>location.hash.endsWith('/'+c.id)); const F=PSYCH_DISCHARGE.fields.filter(f=>f.kind!=='sign'&&C.fields[f.id]);
              const f=F[fid]; const need=(C.fields[f.id].need||[]).map(n=>Array.isArray(n)?n[0]:n); const w=Object.keys(C.fields[f.id].wrong||{});
              [...need.slice(0, Math.max(1,need.length-1)), ...w.slice(0,1)].forEach(p=>{const k=f.picks.indexOf(p); const b=document.querySelector('#view [data-pick="'+k+'"]'); if(b) b.click();});}""")
            c=pg.locator('#view #dcCheck')
            if await c.count() and await c.is_enabled(): await c.click(); await pg.wait_for_timeout(30)
            snaps.append(await pg.inner_html('#view'))
            await pg.locator('#view .ds-field .spread [data-go]').last.click(); await pg.wait_for_timeout(30)
    st=await pg.evaluate("JSON.stringify(App.state.done.dcases)")
    await ctx.close(); return snaps, st, errs
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch()
        a,sa,ea=await walk(br,True); b,sb,eb=await walk(br,False)
        diff=[i for i,(x,y) in enumerate(zip(a,b)) if x!=y]
        print('snapshots',len(a),len(b),'differences',len(diff)+abs(len(a)-len(b)), 'first at', diff[:3])
        print('scores same', sa==sb, sb)
        print('errors',ea+eb); await br.close()
asyncio.run(main())
