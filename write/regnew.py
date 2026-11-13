import sys
# usage: regnew.py after=new1,new2 ...   (paths relative to js/data, without .js)
pairs=[a.split('=') for a in sys.argv[1:]]
ih=open('index.html',encoding='utf-8').read(); sw=open('sw.js',encoding='utf-8').read()
for after,news in pairs:
    prev=after
    for n in news.split(','):
        tag='<script src="js/data/%s.js"></script>'%prev
        if 'js/data/%s.js"'%n not in ih:
            i=ih.index(tag)+len(tag); ih=ih[:i]+'\n<script src="js/data/%s.js"></script>'%n+ih[i:]
        q="'js/data/%s.js'"%prev
        if "'js/data/%s.js'"%n not in sw:
            i=sw.index(q)+len(q); sw=sw[:i]+", 'js/data/%s.js'"%n+sw[i:]
        prev=n
open('index.html','w',encoding='utf-8').write(ih); open('sw.js','w',encoding='utf-8').write(sw)
