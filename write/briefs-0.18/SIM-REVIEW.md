# Independent review of case simulations (Hanashimashō 0.18.0)
You did not write these files. Edit them IN PLACE in /home/claude/work/new/ (keep id, shape, step count, the one
score-2 choice per step and its position). /home/claude/japanese is read only; no git.
Read: /home/claude/work/SIM-BRIEF.md (the writer's brief), /home/claude/work/FACTS-0.18.md (General + the sections
for your cases: fixed facts, decided by the design lead; do not change them, report departures),
/home/claude/japanese/tools/AUTHORING.md (notation), and for existing patients their other files named in FACTS.
Check every line and choice:
1. Readings (every 《》 right in context), notation (spaces, separate particles, punctuation).
2. Natural standard Japanese at the level; the right register for the speaker (staff polite to patients, family and
   patients as fits age and stress; slang only if natural and readable for a learner). Rewrite unnatural lines.
3. Read the case as a DIALOGUE: the score-2 choice of step n must lead naturally into the line of step n+1 (the
   case also plays as a spoken role-play built from the best choices). Fix any break.
4. Clinical teaching: scores are right (2 best practice, 1 acceptable but weaker, 0 harmful/unhelpful), feedback is
   true and teaches one point; for nurse cases, nursing scope (beyond it = tell the doctor). Nothing coercive presented
   as good practice. Summary findings and MSE agree with the dialogue.
5. Content rules: no method detail, medicine/product names, doses, vital/lab numbers; only 119 as a number; "the local
   crisis line"; no Japan-specific legal claims; no rating-scale wording. English fields contain no Japanese characters
   except furigana'd words in notes per AUTHORING.md.
6. The writer's unsure list (in your task).
Checks after editing: `cd /home/claude/japanese && node --check ../work/new/<f> && node tools/check-ja.js ../work/new/<f>` (0 errors).
Report (max 20 lines for all your files): changes by type, the most important fixes (before → after), departures from
FACTS, and real doubts left for a native-speaking clinician (max 6 lines per case).
