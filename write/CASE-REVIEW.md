# Brief: independent review of one practice case for Hanashimashō

You are the reviewer, not the writer. Find and FIX errors directly in the one file named in your task. No git commands;
do not touch /home/claude/japanese (read only).

The app teaches Japanese to an English-speaking psychiatry resident (a beginner) and the psychiatric interview in Japanese.
All Japanese is a draft until a native-speaking clinician reviews it, so your job is to make it as right as you can now.

## Read first
- The writer's brief (named in your task) and the FIXED FACTS given to the writer (in your task). The fixed facts were
  decided by the app's design lead: do not change them; report if the file departs from them.
- `/home/claude/japanese/tools/AUTHORING.md` (notation).
- The domain or field definitions: `js/data/psych-admit-mse.js` (admission MSE) or `js/data/psych-discharge.js`
  (discharge), and the ask phrases they reference in `js/data/psych-phrases-*.js`.
- The same patient's other files named in your task.

## Check and fix
1. Japanese: every kanji reading (in that sentence), grammar, naturalness for the speaker (age, role, register), word
   spacing; every answer really answers the question it is attached to (look up each ask reference).
2. Clinical logic: the answer key (`need`, `ok`, `wrong`, `key`) matches what the patient says and what is observed; the
   `doc` line is what a careful resident would write; the `why` teaches something true and useful; `wrong` explanations
   are fair. Consistency with the patient's other files (dates, people, ages, findings); list every disagreement.
3. Rules: no method detail for self-harm or substance use, no street, brand or product names, no tablet counts; no phone
   number except 119; "the local crisis line"; no Japan-specific legal or service claims (where law matters: "follow
   local law and your hospital's policy"); no rating-scale wording; no HDS-R / MMSE items; no invented lab or vital numbers.
4. Speaker labels: a family member's label always names the relation in brackets, e.g. "Mrs. Takahashi (mother)"; the
   patient's label has no brackets.
5. Remove anything unverifiable or overclaimed. Prefer the smallest fix that makes a line right.

## Checks after editing (all must pass)
```
cd /home/claude/japanese
node --check ../work/new/<file>
node tools/check-ja.js ../work/new/<file>          # 0 error(s)
node ../work/chk-mse.js . ../work/new/<file>       # admission MSE case: 0 error(s)
node ../work/chk-dis.js . ../work/new/<file>       # discharge case: 0 error(s), fields 16 of 16
```
## Report back (max 20 lines)
Every change as `where: what was wrong → what you wrote` (group trivial wording polish as a count); every disagreement
with other files; up to six Japanese lines you still think a native-speaking clinician should look at.
