# Resident / Nurse switch and the six nurse sections (0.16.0). usage: python3 ../devtools/qa/nurse.py  (from the site folder, server on :8765)
from playwright.sync_api import sync_playwright
errs=[]
with sync_playwright() as p:
    b=p.chromium.launch()
    for w,h,tag in [(390,844,'phone'),(1280,900,'desk')]:
        pg=b.new_page(viewport={'width':w,'height':h})
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto('http://localhost:8765/#/psych'); pg.wait_for_timeout(1500)
        r0=pg.eval_on_selector_all('.tile h3','e=>e.length')
        pg.click('[data-role="nurse"]'); pg.wait_for_timeout(800)
        tiles=pg.eval_on_selector_all('#view .tile h3','e=>e.map(x=>x.textContent)')
        ov=pg.evaluate('document.documentElement.scrollWidth>innerWidth')
        pg.screenshot(path='/tmp/qa-out/nurse_hub_%s.png'%tag, full_page=False)
        print(tag,'resident tiles',r0,'nurse tiles',len(tiles),tiles[:7],'overflow',ov)
        for sid in ['nurse-admit','nurse-meds','nurse-daily','nurse-risk','nurse-calm','nurse-educ']:
            pg.goto('http://localhost:8765/#/psych/s/'+sid); pg.wait_for_timeout(700)
            ov=pg.evaluate('document.documentElement.scrollWidth>innerWidth')
            n=pg.eval_on_selector_all('.phrase','e=>e.length'); nx=pg.eval_on_selector_all('.spread .btn','e=>e.map(x=>x.textContent.trim().slice(0,30))')
            raw=pg.evaluate("document.querySelector('#view').innerText.includes('《')")
            print(' ',sid,n,'ov',ov,'raw',raw,nx[-2:])
        pg.screenshot(path='/tmp/qa-out/nurse_sec_%s.png'%tag)
        pg.goto('http://localhost:8765/#/psych/point?s=nurse-meds'); pg.wait_for_timeout(800)
        print(' point tiles', pg.eval_on_selector_all('#view button','e=>e.length'))
        pg.goto('http://localhost:8765/#/psych/sud'); pg.wait_for_timeout(800)
        print(' sud role on', pg.eval_on_selector_all('[data-role].on','e=>e.map(x=>x.dataset.role)'))
        pg.goto('http://localhost:8765/#/psych'); pg.wait_for_timeout(800); pg.click('[data-role="resident"]'); pg.wait_for_timeout(500)
    b.close()
print('errors',errs)
