# Task: an admission MSE practice case for Ayaka Nakamura (Hanashimashō)

Write ONE file: `/home/claude/work/new/psych-mse-cases-2.js`. Do not touch /home/claude/japanese (read only). No git commands.
The app teaches Japanese to an English-speaking psychiatry resident (a beginner) and the psychiatric interview in Japanese.

## Read first
1. `/home/claude/japanese/tools/AUTHORING.md`: the Japanese notation (furigana in 《》 after EVERY kanji run, ONE space
   between words, particles separate, no romaji). It applies to every Japanese string, including Japanese quoted inside English text.
2. `/home/claude/japanese/js/data/psych-mse-cases.js`: the two existing cases (shota, ren). Match their shape, depth, tone
   and length exactly: `obs`, `ans`, `key`, `need`, `ok`, `wrong`, `doc`, `why`, `quote`, `ev` used the same way.
3. `/home/claude/japanese/js/data/psych-admit-mse.js`: the 13 domains, their `ask` references and the `picks` lists.
   `need` / `ok` / keys of `wrong` must be strings from that domain's `picks`. `ans` keys are indexes into that domain's `ask`.
   Look up each ask reference ("section:index") in `js/data/psych-phrases-*.js` so each answer really answers that question.
4. `/home/claude/japanese/js/mse-practice.js`: how the case is played and graded.
5. The same patient elsewhere, to stay consistent: the `ayaka` simulation in `js/data/psych-cases-2.js` (its
   `summary.findings` and `summary.mse` are FIXED FACTS) and her discharge case `js/data/psych-discharge-cases-3.js`
   (its admission line, chart and history are FIXED FACTS).

## File shape
```
/* Admission MSE practice cases, part 2. Hanashimashō (Japanese). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Same shape as psych-mse-cases.js. Ids in this part: ayaka (same id as her case simulation and discharge case). */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
  { "id": "ayaka", ... }
]);
```

## Fixed facts
- id `"ayaka"`, level `"N3"`, title `"Ayaka on admission"`, `form: ""`,
  dx `"Substance use disorder, severe (over-the-counter cough and cold medicine)"`.
- Setting: admitting section, evening (the evening of the admission that the discharge case looks back on six days later).
  Ayaka Nakamura, 20, university student with a part-time job, lives with her mother and younger brother. Brought by her
  mother, Mrs. Nakamura, after taking far more over-the-counter cough and cold medicine than the label says. Medically
  assessed and cleared for the psychiatric interview; awake and able to talk. One earlier episode when a friend could not
  wake her and called 119. It began with a cold during exam stress (to stay awake, to calm down); she wants to stop and cannot.
- Tonight's and the earlier episode were UNINTENTIONAL. She denies suicidal thoughts, plan and intent, and denies any wish
  to harm others. The safety domain must still be asked in full and documented, and its `why` should teach that an
  unintentional overdose is still asked about directly every time, without assuming.
- Presentation on admission (from the discharge case): tearful, anxious, avoids eye contact, strong urges to use, mild
  withdrawal-like symptoms (malaise, sweating, abdominal pain, restless, poor sleep, low mood), no suicidal ideation,
  insight fair. Mood in her words: 「怖《こわ》かった」 can be used. No hallucinations, no delusions, linear thought process,
  oriented, cognition grossly intact. Judgment: your call from the picks, defended in `why` (she kept using despite harm,
  but came in and accepts help).
- Nightmares and startle after a frightening event she does not want to describe. The event is NEVER described; if a
  question comes near it she says she does not want to talk about it yet, and the `why` tells the learner not to press.
- Her mother thinks the problem is weakness of will (意志《いし》 が 弱《よわ》い). The chief complaint (`cc`) is asked of the
  PATIENT or the mother, your choice (use a suitable existing phrase reference, as the other cases do), with three
  options: the Japanese quote (correct), an English interpretation, an English translation.
- Register: Ayaka is a polite 20-year-old speaking to a doctor (です/ます, short answers, sometimes trailing off with …).
  Her mother speaks politely as a worried parent. Staff call her 中村《なかむら》さん.

## Hard rules
- NO product, brand or ingredient names, doses, tablet or bottle counts, prices, where to buy, or method detail. Say only
  "over-the-counter cough and cold medicine" / 市販《しはん》 の 咳止《せきど》め や 風邪薬《かぜぐすり》 / 市販薬《しはんやく》.
- No words: opioid, naloxone, COWS, 988. The only number allowed is 119 (`｜119番《ひゃくじゅうきゅうばん》`); "the local crisis line".
- No Japan-specific legal or service claims. Nothing from the published wording of rating scales. No HDS-R / MMSE content.
- English clinical text in the same plain style as the existing cases. Do not invent lab values or vital-sign numbers.

## Checks (all must pass)
```
cd /home/claude/japanese
node --check ../work/new/psych-mse-cases-2.js
node tools/check-ja.js ../work/new/psych-mse-cases-2.js      # relative path; must end "0 error(s)"; read the warnings
node ../work/chk-mse.js . ../work/new/psych-mse-cases-2.js   # must end "0 error(s)"
```
## Report back (max 12 lines)
Which pick you chose as `need` in each domain where it was a judgement call, every fact you added that is not in the
fixed facts or the two source files, and up to six Japanese lines you are least sure about.
