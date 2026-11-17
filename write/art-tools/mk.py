# Builds pictures/art-body.js from hand-placed coordinates (art only; no Japanese).
import re
OUT = '/home/claude/japanese/pictures/art-body.js'
G = '<g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">'
SH = 'fill="currentColor" fill-opacity="0.08"'
def mir(seg):
    """mirror a list of ('C', pts) / ('L', pt) segments about x=150 and reverse them"""
    pass
# left half of the body outline as absolute points: start point then cubic segments (c1, c2, end)
L_START = (141, 70)
L = [((141, 78), (141, 82), (141, 85)),
     ((136, 92), (118, 92), (108, 96)),
     ((100, 99), (96, 106), (95, 116)),
     ((92, 136), (89, 156), (86, 174)),
     ((83, 192), (79, 210), (76, 228)),
     ((70, 240), (68, 256), (72, 266)),
     ((76, 274), (86, 272), (88, 264)),
     ((90, 254), (90, 244), (88, 234)),
     ((92, 214), (96, 196), (100, 180)),
     ((104, 162), (107, 146), (111, 132)),
     ((113, 160), (115, 182), (114, 200)),
     ((113, 214), (108, 228), (107, 244)),
     ((106, 270), (109, 296), (112, 318)),
     ((115, 340), (114, 362), (118, 386)),
     ((110, 392), (102, 398), (103, 404)),
     ((104, 409), (136, 409), (141, 404)),
     ((143, 398), (142, 392), (140, 386)),
     ((141, 362), (142, 340), (142, 320)),
     ((143, 296), (145, 276), (150, 264))]
def f(p): return '%g %g' % p
def m(p): return (300 - p[0], p[1])
def outline():
    d = 'M' + f(L_START)
    for c1, c2, e in L: d += 'C' + f(c1) + ' ' + f(c2) + ' ' + f(e)
    pts = [L_START] + [s[2] for s in L]
    for i in range(len(L) - 1, -1, -1):
        c1, c2, e = L[i]; start = pts[i]
        d += 'C' + f(m(c2)) + ' ' + f(m(c1)) + ' ' + f(m(start))
    return d + 'Z'
BODY = '<path ' + SH + ' d="' + outline() + '"/>'
HEAD = '<ellipse cx="150" cy="46" rx="24" ry="28" fill="var(--surface)"/><ellipse cx="150" cy="46" rx="24" ry="28" ' + SH + '/>'
EARS = '<path d="M126.5 40C119 38 118 54 127 55M173.5 40C181 38 182 54 173 55"/>'
KNEES = '<path stroke-width="2" d="M121 320Q127 325 134 320M166 320Q173 325 179 320"/>'
front = (G + BODY + HEAD + EARS +
  '<path ' + SH + ' d="M126 44C125 24 138 17 150 17C162 17 175 24 174 44C168 33 158 29 150 31C142 29 132 33 126 44Z"/>' +
  '<g stroke-width="2"><circle cx="141" cy="47" r="2.2"/><circle cx="159" cy="47" r="2.2"/>' +
  '<path d="M150 50L148 57L152 57"/><path d="M143 63Q150 68 157 63"/>' +
  '<path d="M128 101Q138 105 146 102M172 101Q162 105 154 102"/>' +
  '<circle cx="150" cy="214" r="2.5"/><path d="M78 252L84 248M222 252L216 248"/></g>' + KNEES + '</g>')
back = (G + BODY + HEAD + EARS +
  '<path fill="currentColor" fill-opacity="0.18" d="M126 46C124 24 138 18 150 18C162 18 176 24 174 46C174 58 170 66 166 70C156 66 144 66 134 70C130 66 126 58 126 46Z"/>' +
  '<g stroke-width="2"><path d="M150 92L150 196" stroke-dasharray="3 6"/>' +
  '<path d="M124 116Q126 138 140 146M176 116Q174 138 160 146"/>' +
  '<path d="M84 170Q89 174 94 172M216 170Q211 174 206 172"/>' +
  '<path d="M150 228L150 262M114 248Q130 262 148 256M186 248Q170 262 152 256"/>' +
  '<path d="M120 338Q127 344 136 338M164 338Q173 344 180 338"/>' +
  '<path d="M121 396Q129 402 138 398M179 396Q171 402 162 398"/></g></g>')
ART = {'body-front': ([300, 420], front), 'body-back': ([300, 420], back)}
exec(open('/home/claude/work/new/body/mk2.py').read())
def js(s):
    s = re.sub(r'\s+', ' ', s)
    chunks = [s[i:i + 150] for i in range(0, len(s), 150)]
    return '\n    ' + ' +\n    '.join("'" + c + "'" for c in chunks)
hdr = open(OUT).read().split('window.PICTURE_ART = window.PICTURE_ART || {};')[0]
out = hdr + 'window.PICTURE_ART = window.PICTURE_ART || {};\n'
for k, (vb, s) in ART.items():
    out += "window.PICTURE_ART['%s'] = { vb: [%d, %d], svg:%s };\n" % (k, vb[0], vb[1], js(s))
open(OUT, 'w').write(out)
for k, (vb, s) in ART.items(): print(k, len(s))
