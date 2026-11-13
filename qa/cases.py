"""Practice cases (0.15.0): every admission MSE and discharge case graded with its own key gives full marks in every
domain/field (App.dischargeGrade with the first choice of each `need` item), and each case page opens without errors or
overflow at phone width. Expect "cases with problems []", "errors []"."""
import asyncio
from playwright.async_api import async_playwright
B='http://localhost:8765/index.html'
async def main():
    async with async_playwright() as p:
        br=await p.chromium.launch(); pg=await br.new_page(viewport={'width':390,'height':844}); errors=[]
        pg.on('console',lambda m: errors.append(m.text) if m.type=='error' and '403' not in m.text else None); pg.on('pageerror',lambda e: errors.append(str(e)))
        await pg.goto(B+'#/psych/mcases'); await pg.wait_for_timeout(600)
        res=await pg.evaluate("""(()=>{const out=[];const run=(C,dom)=>{const bad=[];for(const [k,x] of Object.entries(dom)){const picks=new Set((x.need||[]).map(n=>Array.isArray(n)?n[0]:n));const r=App.dischargeGrade(x,picks);if(r.score!==2)bad.push(k);
             const w=Object.keys(x.wrong||{});if(w.length){const r2=App.dischargeGrade(x,new Set([...picks,w[0]]));if(r2.score===2)bad.push(k+':wrong-not-penalised')}}return bad};
          (window.PSYCH_MSE_CASES||[]).forEach(C=>out.push(['mse',C.id,run(C,C.domains)]));(window.PSYCH_DISCHARGE_CASES||[]).forEach(C=>out.push(['dis',C.id,run(C,C.fields)]));return out})()""")
        probs=[]
        for kind,cid,bad in res:
            print(kind,cid,'fields not full marks' if bad else 'all full marks',bad)
            if bad: probs.append((kind,cid,bad))
        for kind,cid,_ in res:
            r=('#/psych/mcase/' if kind=='mse' else '#/psych/dcase/')+cid
            await pg.goto(B+r); await pg.wait_for_timeout(500)
            ov=await pg.evaluate("document.documentElement.scrollWidth>innerWidth"); raw=await pg.evaluate("/《/.test(document.querySelector('#view').innerText)")
            h=await pg.evaluate("(document.querySelector('#view h1')||{}).textContent||''")
            print(r,'title',h.strip()[:60],'overflow',ov,'raw notation',raw)
            if ov or raw: probs.append((r,ov,raw))
        await pg.goto(B+'#/psych/mcases'); await pg.wait_for_timeout(400); print('mcases tiles',await pg.locator('#view a.tile').count())
        await pg.screenshot(path='/tmp/qa-out/cases_mcases.png',full_page=True)
        await pg.goto(B+'#/psych/dcases'); await pg.wait_for_timeout(400); print('dcases tiles',await pg.locator('#view a.tile').count())
        print('cases with problems',probs); print('errors',errors); await br.close()
asyncio.run(main())
