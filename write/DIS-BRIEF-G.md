# Brief: one discharge practice case for Hanashimashō (general version)

Write ONE file, named in your task, in `/home/claude/work/new/`. Do not touch /home/claude/japanese (read only). No git commands.
The app teaches Japanese to an English-speaking psychiatry resident (a beginner) and the psychiatric interview in Japanese.
Your task message gives the patient's FIXED FACTS; they take priority over anything you would invent. This is written
from scratch (there is no source case to port), so you write the English clinical text too, in the plain style of the
existing cases.

## Read first
1. `/home/claude/japanese/tools/AUTHORING.md`: the Japanese notation (furigana in 《》 after EVERY kanji run, ONE space
   between words, particles separate, a space after 、 and 。 inside a string, no romaji). It applies to every Japanese
   string, including Japanese quoted inside English text.
2. `/home/claude/japanese/js/data/psych-discharge.js`: the 17 fields, each field's `ask` list and `picks`. `need` / `ok` /
   keys of `wrong` must be strings from that field's `picks` (a `need` item may be an array meaning "any one of").
   `ans` keys and `key` entries are indexes into that field's `ask`. Each ask carries a phrase: make sure each answer
   really answers that question.
3. `/home/claude/japanese/js/data/psych-discharge-cases-2.js` (ren, tetsuo) and `-3.js` (ayaka): the model for shape,
   depth, tone and length. Match them: `obs`, `ans`, `key`, `need`, `ok`, `wrong`, `doc`, `why`, `quote` (mood only),
   `decision: { discharge, why }`, `setting`, a 4-line `chart` (admission; admission MSE; course; plan). Every field except
   `by` (kind `sign`) has an entry.
4. `/home/claude/japanese/js/discharge-practice.js`: how a case is played and graded.
5. The same patient elsewhere, named in your task (simulation and/or admission MSE case): keep every fact consistent.

## File shape
```
/* Discharge practice cases, part N: <what>. STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   (rest of the header as in part 3, naming the ids in this part) */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
 { id: "<id>", title: "...", level: "N3", dx: "...", decision: {...}, setting: "...", chart: [...], fields: {...} }
]);
```

## Hard rules
- No method detail for self-harm or substance use (how taken, how much, where obtained, prices), no street or brand names,
  no tablet counts. Prescribed discharge medicines may be named with a dose in the English chart and plan, as the other
  discharge cases do; patient-facing Japanese does not need doses.
- No phone number other than 119 (`｜119番《ひゃくじゅうきゅうばん》`); say "the local crisis line".
- No Japan-specific legal or service claims (no named laws, programmes, insurance schemes, admission types, reporting
  duties). Where law matters, write "follow local law and your hospital's policy".
- Nothing from the published wording of rating scales. No HDS-R / MMSE items.
- Do not invent lab values or vital-sign numbers beyond the fixed facts.
- Respectful, non-judgemental wording.

## Checks (all must pass)
```
cd /home/claude/japanese
node --check ../work/new/<file>
node tools/check-ja.js ../work/new/<file>          # relative path; must end "0 error(s)"; read the warnings
node ../work/chk-dis.js . ../work/new/<file>       # must end "0 error(s)" and show "fields 16 of 16"
```
## Report back (max 15 lines)
The `need` pick in each field where it was a judgement call, every fact you added that is not in the fixed facts or the
source files, every disagreement between the source files, and up to six Japanese lines you are least sure about.
