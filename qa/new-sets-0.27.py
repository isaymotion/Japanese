import sys,os
from playwright.sync_api import sync_playwright
port=os.environ.get('QA_PORT','8765'); B='http://localhost:%s/index.html'%port
errs=[]
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':360,'height':740})
    pg.on('pageerror',lambda e:errs.append(str(e)))
    for sid in ['shops','pharmacy-counter','kitchen-tools','ward-room','sports-hobbies','clock-calendar','hand-arm','kitchen']:
        for tab in ['learn','identify','label','listen','print']:
            pg.goto(B+'#/pictures/%s?tab=%s'%(sid,tab)); pg.wait_for_timeout(500)
            ov=pg.evaluate("document.documentElement.scrollWidth>innerWidth+1"); raw=pg.evaluate("/[《》｜]/.test(document.querySelector('#view').innerText)")
            if ov or raw: errs.append('%s %s ov %s raw %s'%(sid,tab,ov,raw))
            if tab=='learn': pg.screenshot(path='/tmp/qa-out/s27-%s.png'%sid)
    pg.goto(B+'#/pictures'); pg.wait_for_timeout(500); print('list sets', pg.evaluate("App.pictures.sets().length"))
    b.close()
print('errors',errs)
