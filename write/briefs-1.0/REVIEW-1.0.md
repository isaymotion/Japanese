# Reviewer brief (1.0.0 content)
You are an independent reviewer: you did not write this file. Read /home/claude/work/briefs-1.0/COMMON-WRITE-1.0.md and the
writer brief named in your task. Your task gives the file's path: fix it in place. The repo /home/claude/japanese is read-only for you.
Edit ONLY that file. No git commands, no servers. For each entry, open the lesson(s) it belongs to so you judge it against
what the lesson teaches. Read EVERY entry and FIX:
1. Japanese: wrong readings (furigana), conjugations, particles, connection forms of the N1 pattern, unnatural or
   stiff lines, register (polite and gentle to patients; written patterns kept to written contexts), spacing conventions.
2. Mistake pairs, the fairness test: is the WRONG line really wrong for most native speakers? (If many accept it, replace
   the pair with a real mistake for that lesson.) Is the right line the minimal fix and itself natural? Does the why
   state the rule correctly? The two lines must differ in text, not only in furigana.
3. Keys: every quiz item has exactly ONE defensible answer: fix or replace items where a "wrong" option is acceptable or
   the index is wrong; spread answer positions. No item repeats the lesson's own quiz.
4. Explanations: accurate, no claims you cannot stand behind; remove what you cannot verify.
5. Safety: no methods, medicine names, doses; nothing that reads as encouragement to harm; kind wording about patients;
   no Japan-specific legal or service claims; no new facts about the app's named patients.
5b. N1 rules (COMMON, "N1 additions"): no risk content; no judgemental pattern aimed at a patient or family; no
   written-only pattern as a doctor's spoken model line to a patient; the say / understand marks and "Say instead" cells
   of a review agree with the lessons; near-copies of the lesson's own examples or quiz stems are replaced (grep them);
   the learner is Dr. サントス.
6. Shape: do not add, remove or reorder entries or change ids / level / unit / after / review. Reviews: body is one table +
   Watch out + Mixed examples + note, nothing newly taught.
Check until clean (run from /home/claude/japanese; F = the file name in /home/claude/work/new-1.0):
  node --check ../work/new-1.0/F && node tools/check-ja.js ../work/new-1.0/F | tail -5 && node /home/claude/work/chk-023.js . /home/claude/work/new-1.0/F | grep -v "grammar-transform-2" | tail -15
Report (under 300 words): what you changed (counts and the important ones), and the lines to leave for a
native-speaking clinician (id + the Japanese + your doubt, one line each).
