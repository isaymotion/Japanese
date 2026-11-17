import sys, json, subprocess
from playwright.sync_api import sync_playwright
key=sys.argv[1]; pins=len(sys.argv)>2
js="global.window=global;const fs=require('fs');eval(fs.readFileSync('/home/claude/japanese/pictures/art-town.js','utf8'));eval(fs.readFileSync('/home/claude/japanese/js/data/picture-sets-town.js','utf8'));console.log(JSON.stringify({a:PICTURE_ART[%r],s:PICTURE_SETS.find(s=>s.art===%r)}))"%(key,key)
d=json.loads(subprocess.check_output(['node','-e',js]))
a=d['a']; P=''
if pins: P=''.join('<circle cx="%s" cy="%s" r="11" fill="#7a4fd0" fill-opacity="0.5"/>'%(q['x'],q['y']) for q in d['s']['parts'])
with sync_playwright() as p:
  b=p.chromium.launch(); pg=b.new_page(viewport={'width':760,'height':900})
  pg.set_content('<body style="margin:0;background:#fff"><svg viewBox="0 0 %d %d" width="740" style="color:#2a2440;--surface:#fff">%s%s</svg></body>'%(a['vb'][0],a['vb'][1],a['svg'],P))
  f='/home/claude/work/new/town/%s-big.png'%key; pg.screenshot(path=f,full_page=True); print(f)
  b.close()
