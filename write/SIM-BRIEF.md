# Brief: one case simulation for Hanashimashō

Write ONE file, named in your task, in `/home/claude/work/new/`. /home/claude/japanese is READ ONLY. No git commands.
A case simulation is a branching interview: at each step a patient or family member says a line, and the learner picks
one of three replies (score 2 best, 1 acceptable, 0 harmful or unhelpful) with feedback. The same case also plays as a
spoken role-play dialogue (js/views.js turns PSYCH_CASES into dialogues), so the best choice must flow into the next line.

## Read first
1. `/home/claude/japanese/tools/AUTHORING.md` (notation: furigana in 《》 after EVERY kanji run, one space between words,
   particles separate, a space after 、 and 。 inside a string, no romaji; kanji in English text need furigana too).
2. `/home/claude/japanese/js/data/psych-cases-1.js` (shota, yumiko, ren, shigeru) and `psych-cases-2.js` (tetsuo,
   agitated, ayaka): shape, depth, tone. Match `agitated` and `ayaka` for length (6–8 steps).
3. The patient's other files named in your task: their facts are FIXED and take priority.
4. `/home/claude/japanese/js/views.js` (search `case-`) to see how a case becomes a dialogue.

## File shape
```
/* Case simulations, part 3 (<id>). Same structure as psych-cases-1.js. Patients and families are fictional.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician. */
window.PSYCH_CASES = (window.PSYCH_CASES || []).concat([
  { id: '<id>', title: '...', level: 'N3', setting: '...', steps: [ { who, line: [ja, en], choices: [ { tl, en, score, fb } ×3 ] } ], summary: { findings: [4 lines], mse: '...' } }
]);
```
`who` is a display name in English ("Chiyoko", "Hiroshi (son)", "Megumi (daughter-in-law)"). Choices: order the three
choices differently from step to step (not always best first). Feedback 1–2 sentences, teaching something true.

## Hard rules
- No method detail for self-harm or substance use, no product or brand names, no doses in patient-facing Japanese.
- No phone numbers other than 119; "the local crisis line"; no Japan-specific legal or service claims ("follow local
  law and your hospital's policy" where law matters). No HDS-R / MMSE items or rating-scale wording.
- Do not invent lab values or vital-sign numbers. Respectful wording; staff address the patient as <surname>さん.

## Checks
```
cd /home/claude/japanese
node --check ../work/new/<file>
node tools/check-ja.js ../work/new/<file>      # 0 error(s)
```
## Report back (max 15 lines)
The clinical teaching point of each step; every fact you added beyond the fixed facts; any disagreement with the
patient's other files; up to six Japanese lines you are least sure of.
