# Brief: one admission MSE practice case for Hanashimashō (general version)

Write ONE file, named in your task, in `/home/claude/work/new/`. Do not touch /home/claude/japanese (read only). No git commands.
The app teaches Japanese to an English-speaking psychiatry resident (a beginner) and the psychiatric interview in Japanese.
Your task message gives the patient's FIXED FACTS; they take priority over anything you would invent.

## Read first
1. `/home/claude/japanese/tools/AUTHORING.md`: the Japanese notation (furigana in 《》 after EVERY kanji run, ONE space
   between words, particles separate, no romaji). It applies to every Japanese string, including Japanese quoted inside English text.
2. `/home/claude/japanese/js/data/psych-mse-cases.js`: the two existing cases (shota, ren). Match their shape, depth, tone
   and length exactly: `obs`, `ans`, `key`, `need`, `ok`, `wrong`, `doc`, `why`, `quote`, `ev` used the same way.
3. `/home/claude/japanese/js/data/psych-admit-mse.js`: the 13 domains, their `ask` references and the `picks` lists.
   `need` / `ok` / keys of `wrong` must be strings from that domain's `picks`. `ans` keys are indexes into that domain's `ask`.
   Look up each ask reference ("section:index") in `js/data/psych-phrases-*.js` so each answer really answers that question.
4. `/home/claude/japanese/js/mse-practice.js`: how the case is played and graded.
5. `js/data/psych-mse-cases-2.js` (ayaka, the newest case): the finished style to match.
6. The same patient elsewhere, named in your task: their simulation and discharge case. Their facts are FIXED FACTS.

## File shape
```
/* Admission MSE practice cases, part N. Hanashimashō (Japanese). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Same shape as psych-mse-cases.js. Ids in this part: <id> (same id as the patient's case simulation and discharge case, if any). */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
  { "id": "<id>", ... }
]);
```
Every domain object has `obs` where the existing cases have it (observe-kind domains always need `obs`).
The `cc` (chief complaint) has three options: the Japanese quote (correct), an English interpretation, an English translation.

## Hard rules
- No method detail for self-harm or substance use (how, how much, where obtained), no product or brand names, no tablet counts.
  Where a fixed fact names a means at home, refer to it only as the fixed fact does and ask about access in general terms.
- No phone number other than 119 (`｜119番《ひゃくじゅうきゅうばん》`); say "the local crisis line".
- No Japan-specific legal or service claims (no named laws, programmes, insurance, admission types). Where law matters,
  write "follow local law and your hospital's policy".
- Nothing from the published wording of rating scales (CIWA-Ar, PHQ-9 …). No HDS-R / MMSE items. Use only the app's own
  ask phrases for cognition.
- English clinical text in the same plain style as the existing cases. Do not invent lab values or vital-sign numbers.
- Respectful wording; staff address the patient as <surname>さん.

## Checks (all must pass)
```
cd /home/claude/japanese
node --check ../work/new/<file>
node tools/check-ja.js ../work/new/<file>          # relative path; must end "0 error(s)"; read the warnings
node ../work/chk-mse.js . ../work/new/<file>       # must end "0 error(s)"
```
## Report back (max 15 lines)
The `need` pick in each domain where it was a judgement call, every fact you added that is not in the fixed facts or the
source files, every disagreement you found between the source files, and up to six Japanese lines you are least sure about.
