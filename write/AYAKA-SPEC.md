# Task: the fifth discharge practice case (Ayaka Nakamura) for Hanashimashō

Follow `/home/claude/work/port/TOOLS-BRIEF.md` (the general port method) with the changes below, which take priority.

- Source: `/home/claude/work/src-yesenia.js` (one case, Spanish app, opioid use disorder).
- Destination: `/home/claude/work/new/psych-discharge-cases-3.js` (write ONLY this file; do not touch /home/claude/japanese, no git).
- Look at `/home/claude/japanese/js/data/psych-discharge-cases-2.js` for the header, tone and finished style, and at the
  `ayaka` case in `/home/claude/japanese/js/data/psych-cases-2.js` (the simulation of the same patient: keep every fact consistent with it).
- Header comment like part 2's, saying "part 3", "Ids in this part: ayaka", DRAFT FOR REVIEW. The file must start the array with
  `window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([` and end with `]);`.

## This case is RE-SET, not only translated
The owner (a psychiatrist) decided this app has no opioid case. The patient becomes Ayaka Nakamura and the substance becomes
over-the-counter cough and cold medicine. So here you DO rewrite the English clinical text of this case, but only as far as the
re-setting needs; keep the structure (every key, array length, question index, pick string in `need` / `ok` / `wrong` keys that
comes from the app's own pick lists, every "section:index" reference) exactly as in the source. Pick strings are checked against
`/home/claude/japanese/js/data/psych-discharge.js`: use the picks that exist there (see how part 2's `tetsuo` case does a
substance diagnosis, e.g. `need: ["Other comorbid: ___"]`). If a `wrong` key in the source names a pick, keep the key and adapt only the explanation.

Fixed facts (use exactly these):
- id `"ayaka"`, level `"N3"`, title `"Urges down, medicines locked away, follow-up booked"`.
- dx `"Substance use disorder, moderate (over-the-counter cough and cold medicine)"`.
- Ayaka Nakamura, 20, university student with a part-time job; lives with her mother and her younger brother. Her mother,
  Mrs. Nakamura (中村《なかむら》さん の お母《かあ》さん), is waiting downstairs. (Replaces the source's two children and Doña Lidia:
  her reasons for living / motivation are her mother, her brother, and finishing university.)
- Admitted 6 days ago after taking far more over-the-counter cough and cold medicine than the label says; a friend could not
  wake her and called 119. It began during exam stress (to stay awake and to calm down), she wanted to stop and could not.
  The overdose was unintentional; she denies suicidal thoughts, plan or intent. Nightmares and startle after a frightening
  event she does not want to describe (keep the source's respect for that boundary).
- Admission MSE as in the source but without a COWS score: "tearful, anxious, strong urges to use, mild withdrawal symptoms
  (restless, poor sleep, low mood), no suicidal ideation, insight fair".
- Course: supportive care and monitoring; withdrawal symptoms settled by day 4; no medicine was started for the use disorder.
  Urges from 9/10 to 2/10. No restraint, no falls. Nightmares twice a week, improved from nightly. Sleep chart 6 to 7 hours.
- Plan: outpatient appointment in 3 days (Monday 10 a.m.), date and place in writing; NO discharge medicines; she will not buy
  over-the-counter medicines herself and will ask the outpatient doctor or a pharmacist before taking anything for a cold or
  cough; with her agreement her mother keeps the household medicines locked away and has cleared the boxes from Ayaka's room;
  mother and patient taught the warning signs and what to do if someone cannot be woken (call 119, turn on the side, stay,
  show the paramedics the box); counselling for the nightmares when she is ready; the local crisis line card.
- Wherever the source uses naloxone / the naloxone kit, use that emergency teaching plus the locked medicines.
  Wherever it uses buprenorphine-naloxone, the 7-day supply or the bridge clinic, use "no discharge medicines" and the
  outpatient appointment in 3 days. The teach-back in the medication field becomes: no medicine to take; do not buy
  over-the-counter medicines alone; ask first; mother keeps the medicine box.
- The teaching point of the `decision.why` and the last `why`: the first days after discharge carry the highest risk of
  relapse and of taking too much again (tolerance falls in hospital); the real risk would be going home without a booked
  appointment and without the family knowing what to do. If the source says the mother sees addiction as a vice, keep that
  theme (the mother thinks it is weakness of will / 意志《いし》 が 弱《よわ》い).

## Hard rules for this case
- NO product names, brand names, ingredient names, doses, tablet or bottle counts, prices, or where to buy. Say only
  "over-the-counter cough and cold medicine" / 市販《しはん》 の 咳止《せきど》め や 風邪薬《かぜぐすり》 / 市販薬《しはんやく》. No method detail.
- No words: opioid, fentanyl, naloxone, Narcan, buprenorphine, Suboxone, methadone, oxycodone, COWS, bridge clinic, 988.
- No Japan-specific legal or service claims (no named clinics, programmes, laws, insurance). "The local crisis line"; the only number is 119 (｜119番《ひゃくじゅうきゅうばん》).
- Staff address her as 中村《なかむら》さん. Polite register for the clinician; Ayaka speaks like a polite 20-year-old to a doctor
  (です/ます, sometimes trailing off); her mother speaks politely as a worried parent.

## Checks (all must pass)
```
cd /home/claude/japanese
node --check /home/claude/work/new/psych-discharge-cases-3.js
node tools/check-ja.js /home/claude/work/new/psych-discharge-cases-3.js        # 0 errors; read warnings
JA_REPO=/home/claude/japanese node /home/claude/work/port/cmp-struct.js /home/claude/work/src-yesenia.js /home/claude/work/new/psych-discharge-cases-3.js PSYCH_DISCHARGE_CASES --pick yesenia=ayaka
grep -n -i "Spanish\|español\|usted\|Hablemos\|988\|opioid\|fentanyl\|naloxone\|narcan\|buprenorphine\|suboxone\|oxycod\|COWS\|bridge\|Yesenia\|Lidia\|niños\|children" /home/claude/work/new/psych-discharge-cases-3.js   # nothing
```
(If cmp-struct's --pick or path handling does not work as written, read the script and call it the way it expects; say what you did.)
Final reply (max 12 lines): string counts, every place where you changed English beyond the facts above, and up to six Japanese lines you are least sure about.
