cd /home/claude/japanese; Q=/home/claude/devtools/qa
for t in "$@"; do python3 $Q/$t.py > /tmp/qa-out/$t.txt 2>&1; echo "$t: $(grep -c 'overflow True\|ov True' /tmp/qa-out/$t.txt) overflow, $(grep -E 'errors|problems|without' /tmp/qa-out/$t.txt | tr '\n' ' ' | cut -c1-220)"; done
