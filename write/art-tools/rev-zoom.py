import sys, json, subprocess, re
from playwright.sync_api import sync_playwright
repo='/home/claude/japanese'; g='home'; only=sys.argv[1:] 
js = r"""global.window=global;const fs=require('fs');for(const f of ['js/data/picture-sets-home.js','pictures/art-home.js'])eval(fs.readFileSync('%s/'+f,'utf8'));console.log(JSON.stringify({sets:window.PICTURE_SETS,art:window.PICTURE_ART}))""" % repo
d=json.loads(subprocess.check_output(['node','-e',js]))
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':900,'height':800})
    for s in d['sets']:
        if s['kind']!='diagram' or (only and s['id'] not in only): continue
        a=d['art'][s['art']]
        pins=''.join('<g opacity="0.75"><circle cx="%s" cy="%s" r="11" fill="#7a4fd0"/><text x="%s" y="%s" font-size="12" fill="#fff" text-anchor="middle" dominant-baseline="central">%d</text></g>'%(q['x'],q['y'],q['x'],q['y'],i+1) for i,q in enumerate(s['parts']))
        h=''
        for withp in (False,True):
            h+='<svg viewBox="0 0 %d %d" width="420" style="color:#2a2440;--surface:#fff;border:1px solid #ccc">%s%s</svg>'%(a['vb'][0],a['vb'][1],a['svg'],pins if withp else '')
        pg.set_content('<body style="margin:4px;background:#fff">'+h+'</body>')
        f='/tmp/qa-out/art/zoom-%s.png'%s['id']; pg.screenshot(path=f,full_page=True); print(f)
    b.close()
