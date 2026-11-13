# Brief: independent review of new trainer words (Hanashimashō)

You are the independent reviewer of ONE draft file of new verbs or adjectives for the conjugation trainer of a
Japanese-learning app for an English-speaking psychiatry resident (a beginner). You did not write it. Fix what is wrong
directly in the file; do not rewrite what is fine. Repo /home/claude/japanese is read only. Do not run git commands.

## Read first
1. `/home/claude/work/TRAINER-BRIEF.md`: what the writer was asked to do. Every rule there is yours to enforce.
2. `/home/claude/japanese/tools/AUTHORING.md`: the notation.
3. Your file in `/home/claude/work/new/` and its `.forms.txt` (every form the app builds from each word; regenerate it with
   the check command after edits).

## Check every entry
- **Reading**: the furigana of the word and of every kanji in the examples is correct for that sentence
  (counters, 何, 方, 日, 一人, 今日 and so on).
- **Group / type**: `g` or `t` is right (る-verbs that are really う-verbs: 帰る, 入る, 走る, 切る, 知る, 要る, 減る, 焦る,
  滑る, 握る, 蹴る, 喋る…). Look at the built forms in `.forms.txt`: the ます, て, ない and た forms must be the real ones.
  If the rule-built table is wrong for a word, replace the word with another from the same candidate list (named in
  your task) and write its examples.
- **Gloss**: accurate, short, same style as js/data/verbs.js; transitive / intransitive made clear where a learner
  would confuse a pair.
- **Level and `clin`**: sensible; `C` always has `clin: true`.
- **Examples**: natural, polite, grammatical Japanese that a native speaker would say; contain the entry; the English
  matches. Notation exact (one space between words, particles separate, verb kept with its endings, auxiliaries
  separate). Rewrite stiff or textbook-odd sentences.
- **Clinical rules**: no method detail, product or brand names, doses; no number but 119; no Japan-specific legal or
  service claims; nothing from published rating-scale wording; respectful wording. Remove or rewrite anything that breaks
  these.
- Remove any claim you cannot verify.

The writer's own "unsure" list is in your task: settle each point.

## Finish
```
cd /home/claude/work && node chk-trainer.js /home/claude/japanese new/<your file>
```
must print `0 error(s)` twice. Keep the number of entries and the order unchanged unless you replace a word.

## Report back (short)
- every change you made, as `word: what and why` (one line each);
- anything left for a native Japanese-speaking clinician to decide (keep this list short and specific).
