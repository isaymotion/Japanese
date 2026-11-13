#!/usr/bin/env python3
"""Build the stroke-order data files in this folder from KanjiVG.

    git clone --depth 1 https://github.com/KanjiVG/kanjivg ../ref/kanjivg
    python3 strokes/build-strokes.py ../ref/kanjivg .          # from the site folder

Reads the kanji of js/data/kanji-*.js and every kana, takes the stroke paths and stroke-number positions
of each from KanjiVG's kanji/<5-hex>.svg, rounds the coordinates to one decimal and writes
strokes/<set>.js (kana, n5, n4, n3, c; js/strokes.js loads a set when one of its characters is first shown):  STROKES["日"] = "path|path|…@x,y x,y …"   (109 x 109 grid, strokes in writing order).
The output is an adaptation of KanjiVG (c) Ulrich Apel, CC BY-SA 3.0; see strokes/LICENSE.md.
Prints stroke counts that differ from the app's own kanji data, and characters KanjiVG does not have.
"""
import json, os, re, sys

kvg, site = sys.argv[1], sys.argv[2]
NUM = re.compile(r'-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?')
TOK = re.compile(r'[a-zA-Z]|-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?')

def fmt(v):
    s = ('%.1f' % float(v)).rstrip('0').rstrip('.')
    return '0' if s in ('-0', '') else s

def compact(d):
    out, prev_num = [], False
    for t in TOK.findall(d):
        if t.isalpha():
            out.append(t); prev_num = False
        else:
            s = fmt(t)
            if prev_num and not s.startswith('-'): out.append(',')
            out.append(s); prev_num = True
    return ''.join(out)

def read(ch):
    p = os.path.join(kvg, 'kanji', '%05x.svg' % ord(ch))
    if not os.path.exists(p): return None
    x = open(p, encoding='utf-8').read()
    paths = re.findall(r'<path[^>]*?\sd="([^"]+)"', x)
    nums = re.findall(r'<text transform="matrix\(1 0 0 1 ([\d.-]+) ([\d.-]+)\)">(\d+)</text>', x)
    assert [int(n[2]) for n in nums] == list(range(1, len(paths) + 1)), ch
    return '|'.join(compact(d) for d in paths) + '@' + ' '.join(fmt(a) + ',' + fmt(b) for a, b, _ in nums), len(paths)

def kanji_of(name):
    rows = []
    for line in open(os.path.join(site, 'js/data', name), encoding='utf-8'):
        c = [s.strip() for s in line.split('|')]
        if len(c) >= 7 and len(c[0]) == 1 and ord(c[0]) >= 0x3400 and c[4].isdigit(): rows.append((c[0], int(c[4])))
    return rows

HIRA = [chr(c) for c in range(0x3041, 0x3097)]
KATA = [chr(c) for c in range(0x30a1, 0x30fb)] + ['ー']
SETS = [('kana', [(c, None) for c in HIRA + KATA]), ('n5', kanji_of('kanji-n5.js')), ('n4', kanji_of('kanji-n4.js')),
        ('n3', kanji_of('kanji-n3a.js') + kanji_of('kanji-n3b.js') + kanji_of('kanji-n3c.js')), ('c', kanji_of('kanji-clinical.js'))]
index, missing, differ = {}, [], []
for name, rows in SETS:
    data = {}
    for ch, want in rows:
        r = read(ch)
        if not r: missing.append(ch); continue
        data[ch] = r[0]; index[ch] = name
        if want is not None and want != r[1]: differ.append('%s app %d KanjiVG %d' % (ch, want, r[1]))
    body = ',\n'.join(json.dumps(k, ensure_ascii=False) + ':' + json.dumps(v) for k, v in data.items())
    with open(os.path.join(site, 'strokes', name + '.js'), 'w', encoding='utf-8') as f:
        f.write('/* Stroke order for Hanashimasho (set "%s", %d characters). Adapted from KanjiVG (https://kanjivg.tagaini.net),\n'
                '   copyright (C) 2009-2011 Ulrich Apel, Creative Commons Attribution-Share Alike 3.0; this file is under the same licence\n'
                '   (strokes/LICENSE.md). Made by strokes/build-strokes.py: do not edit by hand.\n'
                '   STROKES[character] = "path|path|...@x,y x,y ..." on a 109 x 109 grid: strokes in writing order, then where each number sits. */\n'
                'window.STROKES = window.STROKES || {};\nObject.assign(window.STROKES, {\n%s\n});\n' % (name, len(data), body))
    print(name, len(data), os.path.getsize(os.path.join(site, 'strokes', name + '.js')))
print('missing', missing); print('stroke counts that differ', len(differ)); print('\n'.join(differ))
