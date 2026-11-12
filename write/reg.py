"""Register lesson files in index.html and sw.js after a given file. usage: reg.py <repo> <after-n> <n> [<n> ...]"""
import sys
repo, after, ns = sys.argv[1], sys.argv[2], sys.argv[3:]
p=repo+'/index.html'; s=open(p,encoding='utf-8').read()
a='<script src="js/data/lessons-%s.js"></script>\n'%after; assert s.count(a)==1
s=s.replace(a,a+''.join('<script src="js/data/lessons-%s.js"></script>\n'%n for n in ns)); open(p,'w',encoding='utf-8').write(s)
p=repo+'/sw.js'; s=open(p,encoding='utf-8').read()
a="'js/data/lessons-%s.js',"%after; assert s.count(a)==1
s=s.replace(a,a+''.join(" 'js/data/lessons-%s.js',"%n for n in ns)); open(p,'w',encoding='utf-8').write(s)
print('registered',ns)
