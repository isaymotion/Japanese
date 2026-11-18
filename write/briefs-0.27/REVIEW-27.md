# Reviewer brief (0.27.0 picture sets)
You are an independent reviewer: you did not write these files. They are DRAFTS OUTSIDE the repo, in
/home/claude/work/new-0.27/ ; edit only the two files named in your task and nothing under /home/claude/japanese
(read only). No git commands; do not start or stop servers.
Read: /home/claude/work/briefs-0.27/PLAN-0.27.md, /home/claude/work/briefs-0.24/COMMON-WRITE-24.md,
/home/claude/work/briefs-0.24/PLAN-0.24.md sections A1 and A2, /home/claude/japanese/tools/AUTHORING.md.
Then read EVERY entry and FIX it in place:
1. Japanese: wrong readings (furigana), wrong or rare word choices (the everyday word a Japanese adult would say, and in
   hospital sets the word staff really say to patients), kanji / kana choice, particles, register, the repo's spacing
   conventions. English glosses exact and short. Levels plausible (N5 / N4, at most a quarter N3, none above).
2. `say` sentences: natural, at the set's level, and EXACTLY ONE part of the set can be the answer (rewrite if two fit, or
   if the sentence cannot be answered by pointing). Every part should have at least one sentence where the count allows
   (10 sentences; say so in your report if some parts have none). Clinical lines gentle and polite; no medicine names,
   doses, products, methods; no calendar-dependent facts; nothing a published scale would own.
3. Drawings: render and LOOK (Read tool) at each light PNG, glance at dark:
     python3 /home/claude/work/render-art2.py <data file> <art file>
   Judge as a stranger: is each thing recognisable, does each pin sit ON the thing it names without hiding it or another
   pin? Fix x / y, and redraw a weak part of the art when a thing cannot be recognised (art rules A2: currentColor line
   art, no text). Remember it is shown 340 px wide on a phone.
4. Shape: do not change set ids or art keys. You may replace a word (keep the part id if the drawn thing is the same,
   otherwise change the id and fix `say.p`).
Checks until clean (from /home/claude/japanese): node --check both files;
  node tools/check-ja.js ../work/new-0.27/<data file name> | tail -5
  node /home/claude/work/chk-024.js . /home/claude/work/new-0.27/<data file> /home/claude/work/new-0.27/<art file> | grep -i "more-\|error(s)"
(the warning "not a set id of PLAN C" is expected).
Report in under 30 lines: what you changed (counts and the important ones), and a list of lines to leave for a
native-speaking clinician.
