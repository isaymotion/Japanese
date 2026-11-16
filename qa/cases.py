"""Practice cases (0.15.0; 0.20.0 adds end-of-treatment review cases, kind 'eot'): every admission MSE, discharge and EOT case graded with its own key gives full marks in every
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
          (window.PSYCH_MSE_CASES||[]).forEach(C=>out.push(['mse',C.id,run(C,C.domains)]));(window.PSYCH_DISCHARGE_CASES||[]).forEach(C=>out.push(['dis',C.id,run(C,C.fields)]));
          (window.PSYCH_EOT_CASES||[]).forEach(C=>{const bad=run(C,C.fields);const F=PSYCH_EOT.fields.map(f=>f.id);
             Object.keys(C.fields).forEach(k=>{if(!F.includes(k))bad.push(k+':not-a-form-field')});
             PSYCH_EOT.fields.forEach(f=>{const x=C.fields[f.id];if(!x)return;[].concat(...(x.need||[]).map(n=>Array.isArray(n)?n:[n]),x.ok||[],Object.keys(x.wrong||{})).forEach(p=>{if(!f.picks.includes(p))bad.push(f.id+':unknown-pick:'+p)})});
             if(!C.decision||typeof C.decision.end!=='boolean'||!C.decision.why)bad.push('decision');out.push(['eot',C.id,bad])});return out})()""")
        probs=[]
        for kind,cid,bad in res:
            print(kind,cid,'fields not full marks' if bad else 'all full marks',bad)
            if bad: probs.append((kind,cid,bad))
        for kind,cid,_ in res:
            r={'mse':'#/psych/mcase/','dis':'#/psych/dcase/','eot':'#/psych/ecase/'}[kind]+cid
            await pg.goto(B+r); await pg.wait_for_timeout(500)
            ov=await pg.evaluate("document.documentElement.scrollWidth>innerWidth"); raw=await pg.evaluate("/《/.test(document.querySelector('#view').innerText)")
            h=await pg.evaluate("(document.querySelector('#view h1')||{}).textContent||''")
            print(r,'title',h.strip()[:60],'overflow',ov,'raw notation',raw)
            if ov or raw: probs.append((r,ov,raw))
        await pg.goto(B+'#/psych/mcases'); await pg.wait_for_timeout(400); print('mcases tiles',await pg.locator('#view a.tile').count())
        await pg.screenshot(path='/tmp/qa-out/cases_mcases.png',full_page=True)
        await pg.goto(B+'#/psych/dcases'); await pg.wait_for_timeout(400); print('dcases tiles',await pg.locator('#view a.tile').count())
        await pg.goto(B+'#/psych/eot'); await pg.wait_for_timeout(400); print('eot tiles',await pg.locator('#view a.tile').count())
        # EOT decision graded against decision.end: run each case's decision both ways on its compare step
        for cid,end in await pg.evaluate("(window.PSYCH_EOT_CASES||[]).map(C=>[C.id,C.decision.end])"):
            for choice in ('1','0'):
                await pg.goto(B+'#/psych/eot'); await pg.wait_for_timeout(200); await pg.goto(B+'#/psych/ecase/'+cid); await pg.wait_for_timeout(300)
                await pg.locator('#view .ds-chip.sum').click(); await pg.wait_for_timeout(150)
                await pg.locator('#view [data-dec="'+choice+'"]').click(); await pg.wait_for_timeout(150)
                fb=await pg.evaluate("(document.querySelector('#view .dc-decide .feedback')||{}).className||''")
                same=(choice=='1')==end; ok=('ok' in fb.split())==same
                print('eot decision',cid,'end' if choice=='1' else 'continue','model end',end,'graded right' if ok else 'GRADED WRONG')
                if not ok: probs.append(('eot-decision',cid,choice))
        print('cases with problems',probs); print('errors',errors); await br.close()
asyncio.run(main())
