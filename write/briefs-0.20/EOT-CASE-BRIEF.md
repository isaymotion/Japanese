# Brief: one end-of-treatment review case for Hanashimashō 0.20.0

Write ONE file, named in your task, in `/home/claude/work/new/`. /home/claude/japanese is READ ONLY. No git commands.
The app teaches Japanese to an English-speaking psychiatry resident (a beginner) and the psychiatric interview in Japanese.
This is a NEW practice format: the End-of-treatment review, the outpatient counterpart of the discharge practice. Same
engine, same grading, same case shape as discharge cases, with its own form.

## Read first
1. `/home/claude/work/briefs-0.20/FACTS-0.20.md` section 1: the form and YOUR PATIENT'S FIXED FACTS (they win).
2. `/home/claude/work/DIS-BRIEF-G.md`: the discharge case brief. Follow ALL of it (notation, hard rules, depth and tone,
   field entries `obs` / `ans` / `key` / `need` / `ok` / `wrong` / `doc` / `why` / `quote` (mood only), `setting`,
   4-line `chart`), with these differences:
   - The form is `/home/claude/work/new/psych-eot.js` (`window.PSYCH_EOT`), not psych-discharge.js: its fields, each
     field's `ask` list (`ans` / `key` indexes point into it) and its `picks` (need / ok / wrong keys must be exact picks).
     Every field gets an entry (there is no `sign` field).
   - `decision: { end: true|false, why }` (end = regular sessions can end today), not `discharge`.
   - The `chart` is the clinic record: line 1 first visit (date relative, e.g. "five months ago", the first-visit
     findings); line 2 the treatment plan agreed and what was given (type, number of sessions); line 3 the course
     (progress notes in brief); line 4 what today's review is for.
   - Model for shape and depth: `/home/claude/japanese/js/data/psych-discharge-cases-2.js` and `-6.js`.
   - File wrapper: copy the header and wrapper of `/home/claude/japanese/js/data/psych-eot-cases-1.js`
     (`window.PSYCH_EOT_CASES = (window.PSYCH_EOT_CASES || []).concat([ … ]);`), header naming your id.
3. The same patient: the simulation in `/home/claude/japanese/js/data/psych-cases-5.js` and the first-visit MSE case in
   `/home/claude/japanese/js/data/psych-mse-cases-6.js` (same id). Keep people, ages, history and voice consistent:
   months later the patient is better, but speaks the same way. The `title` like "Takumi at his last session", setting
   says outpatient clinic, end-of-treatment review.
4. Teach in `why`: what a good outpatient review checks (did the target symptoms change, function, safety asked again,
   residual symptoms named honestly, relapse signs in the patient's own words, a plan for coming back), and why the
   decision is right for this patient.

## Checks (all must pass)
```
cd /home/claude/japanese
node --check ../work/new/<file>
node tools/check-ja.js ../work/new/<file>                                   # 0 error(s)
node ../work/chk-eot.js . ../work/new/psych-eot.js ../work/new/<file>       # 0 error(s), "fields 9 of 9"
```
## Report back (max 15 lines)
The `need` pick where it was a judgement call, every fact you added beyond the fixed facts and source files, any
disagreement between sources, and up to six Japanese lines you are least sure about.
