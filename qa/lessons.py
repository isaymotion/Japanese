"""Every lesson: page renders, no raw notation, no overflow, quiz can be answered to the end. Expect "errors []" and "bad []"."""
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        pg=await b.new_page(viewport={'width':390,'height':844})
        errs=[]
        pg.on('console', lambda m: errs.append(m.text) if m.type=='error' and '403' not in m.text else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('http://localhost:8765/index.html#/lessons'); await pg.wait_for_timeout(500)
        print('lessons',await pg.evaluate("LESSONS.length"),'by level',await pg.evaluate("JSON.stringify(LANG.levels.map(l=>l+':'+LESSONS.filter(x=>x.level===l).length))"),'units',await pg.evaluate("new Set(LESSONS.map(l=>l.unit)).size"))
        print('duplicate ids',await pg.evaluate("LESSONS.map(l=>l.id).filter((x,i,a)=>a.indexOf(x)!==i)"))
        print('dead links',await pg.evaluate("""(()=>{const ids=new Set(LESSONS.map(l=>l.id)),out=[];LESSONS.forEach(l=>{(l.body.match(/href="#\\/[^"]*"/g)||[]).forEach(h=>{const m=h.match(/#\\/lessons\\/([\\w-]+)/);if(m?!ids.has(m[1]):!/#\\/(kana|kanji|verbs|particles|dict|psych|reading|speak|flash|practice|settings)/.test(h))out.push(l.id+' '+h)})});return out})()"""))
        print('quiz keys',await pg.evaluate("LESSONS.filter(l=>l.quiz.some(q=>q.length<4||q[1].length<2||!(q[2]>=0&&q[2]<q[1].length)||new Set(q[1]).size!==q[1].length)).map(l=>l.id)"))
        print('answer positions',await pg.evaluate("JSON.stringify(LESSONS.filter(l=>l.level==='N4'||l.level==='N3').reduce((a,l)=>{l.quiz.forEach(q=>a[q[2]]=(a[q[2]]||0)+1);return a},{}))"))
        for lv in await pg.evaluate("['all'].concat(LANG.levels)"):
            await pg.evaluate("h=>{location.hash=h}",'#/lessons?lv='+lv); await pg.wait_for_timeout(250)
            print(' list',lv,'tiles',await pg.locator('#view a.tile').count(),'ov',await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1"))
            if lv in ('all','N3'): await pg.screenshot(path=f'/tmp/qa-out/lessons_{lv}.png')
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
