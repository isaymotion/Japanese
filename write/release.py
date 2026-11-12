"""Bump the version in the three places and add a changelog entry.
usage: python3 release.py <repo> <version> <YYYY-MM-DD> <title> <items.json>   (items: [[type, text], ...])"""
import sys, json, re
repo, ver, date, title, items = sys.argv[1:6]
items = json.load(open(items, encoding='utf-8'))
q = lambda s: "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"
p = repo + '/data/app-meta.js'; s = open(p, encoding='utf-8').read()
s, n = re.subn(r"version: '[\d.]+'", "version: '%s'" % ver, s, count=1); assert n == 1
open(p, 'w', encoding='utf-8').write(s)
p = repo + '/sw.js'; s = open(p, encoding='utf-8').read()
s, n = re.subn(r"const VERSION = PREFIX \+ '[\d.]+'", "const VERSION = PREFIX + '%s'" % ver, s, count=1); assert n == 1
open(p, 'w', encoding='utf-8').write(s)
p = repo + '/data/changelog.js'; s = open(p, encoding='utf-8').read()
assert ("version: '%s'" % ver) not in s, 'entry exists'
entry = "  {\n    version: %s, date: %s, title: %s,\n    items: [\n%s\n    ]\n  },\n" % (
    q(ver), q(date), q(title), ',\n'.join("      { type: %s, text: %s }" % (q(t), q(x)) for t, x in items))
a = 'window.APP_CHANGELOG = [\n'; assert s.count(a) == 1
open(p, 'w', encoding='utf-8').write(s.replace(a, a + entry))
print('ok', ver)
