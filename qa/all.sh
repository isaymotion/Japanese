#!/bin/bash
# Run every check and print one compact line each. usage: bash ../devtools/qa/all.sh   (from the site folder, server on :8765)
Q=$(cd "$(dirname "$0")" && pwd); mkdir -p /tmp/qa-out
SK=$(find /root/.claude/skills -maxdepth 4 -type d -name isaymotion-app-design | head -1)
bad=0; for f in js/*.js js/data/*.js data/*.js sw.js; do node --check $f 2>/dev/null || { echo "SYNTAX FAIL $f"; bad=1; }; done; echo "syntax: $([ $bad = 0 ] && echo ok)"
echo "check-ja: $(node tools/check-ja.js | tail -1)"
echo "menu strings: $(node tools/check-ja.js data/strings.js | tail -1)"
v1=$(grep -o "version: '[0-9.]*'" data/app-meta.js | head -1); v2=$(grep -o "version: '[0-9.]*'" data/changelog.js | head -1); v3=$(grep -o "PREFIX + '[0-9.]*'" sw.js)
echo "versions: $v1 | $v2 | $v3"
for s in $(grep -o 'src="[^"]*\.js"' index.html | cut -d'"' -f2); do [ -f $s ] || echo "MISSING $s"; grep -q "'$s'" sw.js || echo "NOT IN SW $s"; done
for f in js/data/*.js js/*.js; do grep -q "\"$f\"" index.html || echo "NOT IN INDEX $f"; done
python3 $Q/routes.py > /tmp/qa-out/routes.txt 2>&1; echo "routes: $(grep -c 'rawNotation 0 | overflow False' /tmp/qa-out/routes.txt) clean, $(grep -c 'overflow True\|rawNotation [1-9]' /tmp/qa-out/routes.txt) bad, $(tail -1 /tmp/qa-out/routes.txt)"
python3 $Q/psych.py > /tmp/qa-out/psych.txt 2>&1; echo "psych: $(grep -E '^[0-9]+ [0-9]+ ' /tmp/qa-out/psych.txt | head -1) $(tail -1 /tmp/qa-out/psych.txt)"
python3 $Q/shell-lang.py > /tmp/qa-out/shell-lang.txt 2>&1; echo "menu language: $(grep -E '^widths|^errors' /tmp/qa-out/shell-lang.txt | tr '\n' ' ')"
for t in drawer tools clickthrough flows kanji strokes writing lessons handout printpages; do [ -f $Q/$t.py ] && { python3 $Q/$t.py > /tmp/qa-out/$t.txt 2>&1; echo "$t: $(grep -c 'overflow True\|ov True' /tmp/qa-out/$t.txt) overflow, $(grep 'errors' /tmp/qa-out/$t.txt | tr '\n' ' ' | cut -c1-200)"; }; done
node tools/collect-texts.js --quiet > /tmp/qa-out/collect.txt 2>&1; echo "audio texts: $(tail -1 /tmp/qa-out/collect.txt); texts.json $(git status --short tools/texts.json | wc -l) uncommitted change(s)"
python3 -c "import fugashi" 2>/dev/null && echo "voice text: $(python3 tools/make_audio_pack.py --report 2>&1 >/tmp/qa-out/voice-report.tsv | tail -1)"; rm -rf tools/__pycache__
python3 $Q/audio.py > /tmp/qa-out/audio.txt 2>&1; echo "audio: $(grep -E '^play checks|^missing|^errors' /tmp/qa-out/audio.txt | tr '\n' ' ' | cut -c1-200)"
python3 $SK/scripts/check_design.py . --browser > /tmp/qa-out/design.txt 2>&1; echo "design: $(tail -1 /tmp/qa-out/design.txt)"; rm -rf _qa
echo "sw: $(python3 $SK/scripts/check_sw.py . 2>&1 | tail -1)"
