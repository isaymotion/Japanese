# Brief: more interpretation items and patient replies for Hanashimashō

Write the TWO files named in your task in `/home/claude/work/new/`. /home/claude/japanese is READ ONLY. No git commands.

## Read first
1. `/home/claude/japanese/tools/AUTHORING.md` (notation: furigana in 《》 after EVERY kanji run, one space between words,
   particles separate, a space after 、 and 。 inside a string, no romaji; kanji in English notes need furigana).
2. `/home/claude/japanese/js/data/psych-cases-2.js` from `window.PSYCH_INTERP` to the end: the 32 existing items
   `[japanese, englishWithLiteralGloss, clinicalNote]`. New items must NOT repeat their idioms.
3. `/home/claude/japanese/js/data/psych-answers.js` and `-2.js`: replies per section `[japanese, english, note?]`.
   Read every existing reply of the sections you add to, so you do not repeat them.

## File 1: interp-new.js — 16 new interpretation items
```
/* Interpretation drill, part 2 (16 items added in 0.16.0). Same shape as PSYCH_INTERP in psych-cases-2.js.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician. */
window.PSYCH_INTERP = (window.PSYCH_INTERP || []).concat([ ... ]);
```
Patient and family lines whose meaning is indirect: idioms of distress (気, 胸, 腹, 頭 expressions), somatic
presentations of depression or anxiety, understatement and politeness that hide severity (大丈夫 です, 迷惑 を かけたく
ない), passive death wishes (消えたい-type, but do not repeat existing ones), family shame and hiding (世間体),
a carer's exhaustion, an older adult's hints of confusion, a relative's hint of stimulant or alcohol use, sleep, and
cultural explanations. The note says what it may mean and what to ask next; risk lines say to ask about suicide directly.

## File 2: answers-more.js — 30 new replies to existing sections
```
/* Likely patient replies, part 4: more replies to existing sections (0.16.0). APPEND only. STATUS: DRAFT … */
window.PSYCH_ANSWERS = window.PSYCH_ANSWERS || { common: [], sections: {} };
(function (S, add) { Object.keys(add).forEach((k) => (S[k] = (S[k] || []).concat(add[k]))); })(window.PSYCH_ANSWERS.sections, {
  'violence': [ ... ], ...
});
```
Three replies each to these ten sections: violence, family-hx, mania, mse-describe, explain, elderly, admission,
consent, closing, opening. Each must be a natural answer to a question in that section (look at the section's phrases).

## Hard rules
No method detail, product names, doses or tablet counts; no phone number except 119; no Japan-specific legal claims;
respectful wording; plain English with no kanji in the English column.

## Checks
```
cd /home/claude/japanese
node --check ../work/new/<file> ; node tools/check-ja.js ../work/new/<file>    # 0 error(s) each
```
## Report back (max 12 lines): counts, and up to eight Japanese lines you are least sure of.
