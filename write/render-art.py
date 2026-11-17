#!/usr/bin/env python3
"""Render every picture set of one group (diagram with numbered pins, or emoji cards) to PNGs for visual checking.
usage: python3 /home/claude/work/render-art.py <group>   -> /tmp/qa-out/art/<group>-<set id>-light.png / -dark.png"""
import sys, os, json, subprocess, pathlib
from playwright.sync_api import sync_playwright
g = sys.argv[1]; repo = '/home/claude/japanese'; out = '/tmp/qa-out/art'; os.makedirs(out, exist_ok=True)
js = r"""
global.window = global; const fs = require('fs');
for (const f of ['js/data/picture-sets-%s.js', 'pictures/art-%s.js']) eval(fs.readFileSync('%s/' + f, 'utf8'));
console.log(JSON.stringify({ sets: window.PICTURE_SETS || [], art: window.PICTURE_ART || {} }));
""" % (g, g, repo)
d = json.loads(subprocess.check_output(['node', '-e', js]))
import re
def plain(s): return re.sub(r'《[^》]*》', '', s).replace('｜', '')
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 380, 'height': 700})
    for s in d['sets']:
        for theme, bg, ink in (('light', '#ffffff', '#2a2440'), ('dark', '#1b1826', '#ece8f5')):
            if s.get('kind') == 'diagram':
                a = d['art'].get(s.get('art'))
                if not a: print('NO ART', s['id']); continue
                pins = ''.join('<g><circle cx="%s" cy="%s" r="11" fill="#7a4fd0"/><text x="%s" y="%s" font-size="12" font-weight="700" fill="#fff" text-anchor="middle" dominant-baseline="central">%d</text></g>' % (q['x'], q['y'], q['x'], q['y'], i + 1) for i, q in enumerate(s['parts']))
                body = '<svg viewBox="0 0 %d %d" width="340" style="color:%s;--surface:%s">%s%s</svg>' % (a['vb'][0], a['vb'][1], ink, bg, a['svg'], pins)
                body += '<ol style="columns:2;font:13px sans-serif;color:%s">%s</ol>' % (ink, ''.join('<li>%s (%s)</li>' % (plain(q['w']), q['en']) for q in s['parts']))
            else:
                body = '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;width:340px">%s</div>' % ''.join('<div style="text-align:center;font:11px sans-serif;color:%s"><div style="font-size:40px;line-height:1.2">%s</div>%s<br>%s</div>' % (ink, q.get('pic', '?'), plain(q['w']), q['en']) for q in s['parts'])
            pg.set_content('<body style="margin:12px;background:%s"><h3 style="font:600 14px sans-serif;color:%s">%s</h3>%s</body>' % (bg, ink, s['id'], body))
            f = '%s/%s-%s-%s.png' % (out, g, s['id'], theme); pg.screenshot(path=f, full_page=True); print(f)
    b.close()
