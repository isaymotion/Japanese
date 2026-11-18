"""Every lesson: page renders, no raw notation, no overflow, quiz can be answered to the end. Expect "errors []" and "bad []".
0.28.0: N1 (when there are N1 lessons): every N1 lesson after every N2 lesson and review, N1 units in plan order, prev / next across
the N2 → N1 seam, the N1 level filter (no overflow at 360 px) and the Print button; screenshot /tmp/qa-n1/shots/lessons_n1.png."""
import os
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        pg=await b.new_page(viewport={'width':390,'height':844})
        errs=[]
        pg.on('console', lambda m: errs.append(m.text) if m.type=='error' and '403' not in m.text else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('http://localhost:'+__import__('os').environ.get('QA_PORT','8765')+'/index.html#/lessons'); await pg.wait_for_timeout(500)
        print('lessons',await pg.evaluate("LESSONS.length"),'by level',await pg.evaluate("JSON.stringify(LANG.levels.map(l=>l+':'+LESSONS.filter(x=>x.level===l).length))"),'units',await pg.evaluate("new Set(LESSONS.map(l=>l.unit)).size"))
        print('duplicate ids',await pg.evaluate("LESSONS.map(l=>l.id).filter((x,i,a)=>a.indexOf(x)!==i)"))
        print('dead links',await pg.evaluate("""(()=>{const ids=new Set(LESSONS.map(l=>l.id)),out=[];LESSONS.forEach(l=>{(l.body.match(/href="#\\/[^"]*"/g)||[]).forEach(h=>{const m=h.match(/#\\/lessons\\/([\\w-]+)/);if(m?!ids.has(m[1]):!/#\\/(kana|kanji|verbs|particles|dict|psych|reading|speak|flash|practice|settings|signs)/.test(h))out.push(l.id+' '+h)})});return out})()"""))
        print('quiz keys',await pg.evaluate("LESSONS.filter(l=>l.quiz.some(q=>q.length<4||q[1].length<2||!(q[2]>=0&&q[2]<q[1].length)||new Set(q[1]).size!==q[1].length)).map(l=>l.id)"))
        print('answer positions',await pg.evaluate("JSON.stringify(LESSONS.filter(l=>l.level==='N4'||l.level==='N3'||l.level==='N2'||l.level==='N1').reduce((a,l)=>{l.quiz.forEach(q=>a[q[2]]=(a[q[2]]||0)+1);return a},{}))"))
        for lv in await pg.evaluate("['all'].concat(LANG.levels)"):
            await pg.evaluate("h=>{location.hash=h}",'#/lessons?lv='+lv); await pg.wait_for_timeout(250)
            print(' list',lv,'tiles',await pg.locator('#view a.tile').count(),'ov',await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1"))
            if lv in ('all','N3','N2'): await pg.screenshot(path=f'/tmp/qa-out/lessons_{lv}.png')
        if await pg.evaluate("LESSONS.some(l=>l.level==='N1')"):
            UNITS=['The moment something happens','Reaching the extreme','If and only if','Even so','Grounds and standards','How it looks and sounds','Must, must not, cannot','Judging and summing up']
            o=await pg.evaluate("""()=>{const a=LESSONS.map(l=>l.level),f=a.indexOf('N1'),lN2=a.lastIndexOf('N2');return {f,lN2,stray:LESSONS.slice(f).filter(l=>l.level!=='N1').map(l=>l.id),after:LESSONS.filter(l=>l.level==='N1'&&l.after).map(l=>l.id),units:[...new Set(LESSONS.filter(l=>l.level==='N1').map(l=>l.unit))],first:LESSONS[f].id,prev:LESSONS[f-1].id}}""")
            print('N1 order: first',o['first'],'at',o['f'],'last N2 at',o['lN2'],'prev',o['prev'],'| stray',o['stray'],'| with after',o['after'],'| units',o['units'])
            if o['f']<o['lN2'] or o['stray'] or o['after']: errs.append('N1 lessons not after N2')
            if o['units']!=UNITS[:len(o['units'])]: errs.append('N1 units out of plan order')
            await pg.set_viewport_size({'width':360,'height':780})
            await pg.evaluate("h=>{location.hash=h}",'#/lessons?lv=N1'); await pg.wait_for_timeout(300)
            seg=await pg.evaluate("(()=>{const s=document.querySelector('#view .seg');return s?[...s.children].map(x=>x.textContent).join(' ')+' | seg overflow '+(s.scrollWidth>s.clientWidth+1||s.getBoundingClientRect().right>innerWidth+1):'no seg'})()")
            print(' N1 filter 360:',seg,'| tiles',await pg.locator('#view a.tile').count(),'| on',await pg.locator('#view .seg .on').inner_text(),'| page ov',await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1"))
            if 'N1' not in seg or 'overflow True' in seg: errs.append('N1 level seg missing or overflowing at 360')
            os.makedirs('/tmp/qa-n1/shots',exist_ok=True); await pg.screenshot(path='/tmp/qa-n1/shots/lessons_n1.png',full_page=True)
            await pg.evaluate("h=>{location.hash=h}",'#/lessons/'+o['first']); await pg.wait_for_timeout(300)
            pn=await pg.evaluate("[...document.querySelectorAll('.prevnext a')].map(a=>a.getAttribute('href'))")
            print(' first N1 prev/next',pn,'| print',await pg.locator('#lprint').count())
            if not pn or pn[0]!='#/lessons/'+o['prev']: errs.append('prev of first N1 lesson is not the last N2 lesson')
            await pg.set_viewport_size({'width':390,'height':844})
        bad=await pg.evaluate("""async()=>{const out=[];for(const l of LESSONS){location.hash='#/lessons/'+l.id;await new Promise(r=>setTimeout(r,120));
          const v=document.querySelector('#view');if(/[《》｜]/.test(v.innerText))out.push(l.id+' raw');if(document.documentElement.scrollWidth>innerWidth+1)out.push(l.id+' overflow');
          if(!v.querySelector('h1'))out.push(l.id+' no h1');if(v.querySelectorAll('.ex').length<3&&l.level!=='Starter')out.push(l.id+' few examples');}return out}""")
        print('bad',bad)
        for lid in ['passive','wake','casual-speech']:
            if await pg.evaluate("i=>LESSONS.some(l=>l.id===i)",lid):
                await pg.evaluate("h=>{location.hash=h}",'#/lessons/'+lid); await pg.wait_for_timeout(400)
                await pg.screenshot(path=f'/tmp/qa-out/lesson_{lid}.png',full_page=True)
        print('errors',errs)
        await b.close()
asyncio.run(main())
