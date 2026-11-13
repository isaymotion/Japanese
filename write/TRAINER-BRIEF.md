# Brief: write new words for the verb and adjective trainer (Hanashimashō)

You are writing ONE data file of new entries for the conjugation trainer of a Japanese-learning web app. The learner is
an English-speaking psychiatry resident who started from zero. Repo: /home/claude/japanese (read only for you).
Write ONLY the one file named in your task, in /home/claude/work/new/. Do not touch the repo. Do not run git commands.

## Read first
1. `/home/claude/japanese/tools/AUTHORING.md`: the Japanese notation (furigana in 《》 after EVERY kanji run, readings in
   hiragana and correct for that sentence, ONE space between words, particles as separate words, a verb or adjective kept
   together with its endings, auxiliaries such as います / ください / でした as their own word, no romaji).
2. `/home/claude/japanese/js/data/verbs.js`: the existing 100 verbs and 60 adjectives. Match their shape, the length and
   tone of their examples, and the style of their English glosses. Do not repeat any word already there.
3. Your candidate list (named in your task): dictionary words that are not yet in the trainer, as
   `word | English | pos | category | level`. Choose ONLY from this list, and copy the word's notation exactly.

## File shape
```
/* New trainer words: <what>. DRAFT FOR REVIEW by a native Japanese speaker. */
window.NEW_VERBS = [
  { d: "安心《あんしん》する", g: "suru", en: "to feel relieved, to be reassured", lv: "N4", clin: true, ex: [["JAPANESE。", "English."], ["JAPANESE。", "English."]] },
  ...
];
window.NEW_ADJ = [
  { d: "寂《さび》しい", t: "i", en: "lonely", lv: "N4", clin: true, ex: [["JAPANESE。", "English."]] },
  ...
];
```
One entry per line. Include only the array(s) your task asks for.
- `d`: dictionary form in the notation. する verbs end in する. A な-adjective is the bare stem, without な.
- `g` (verbs): from the candidate's pos: `v1` → `"ru"`, `v5` → `"u"`, `vs` → `"suru"`. `t` (adjectives): `ai` → `"i"`, `an` → `"na"`.
- `en`: short gloss, verbs start with "to". Add a few words in brackets when it prevents a mistake, as verbs.js does
  ("(something)", "(said of someone else)", transitive / intransitive pairs).
- `lv`: the candidate's level (`N5`, `N4`, `N3`, or `C` for the clinical set). `C` always has `clin: true`.
- `clin: true` on words a psychiatrist needs in an interview or on the ward (symptoms, feelings, sleep, appetite,
  medicines, risk, care). Leave the key out otherwise.
- `ex`: verbs get exactly TWO example sentences, adjectives exactly ONE. Each is `[japanese, english]`.

## Choosing words
- Pick words that are common and useful to this learner; prefer the lower level when two words are equally useful.
- The app builds every form by rule (js/conjugate.js): polite forms, て, ない, た, たい, potential, volitional, passive,
  causative, 〜ば, 〜たら; for adjectives negative, past, 〜くて, before a noun, adverb. Prefer words for which most of
  those forms are real and usable. Do NOT pick:
  - one-kanji + する verbs (愛する, 察する, 関する, 対する, 接する…) or 〜ずる verbs: they conjugate irregularly;
  - 問う, 乞う, 請う; verbs that are themselves potential or spontaneous forms (見える, 聞こえる, できる, 要る, 足りる);
  - 〜いい compounds (かっこいい, 気持ちいい), 同じ, 大きな / 小さな, adjectives used only before a noun;
  - set phrases of several words (気 に なる, 気 を つける, 役 に 立つ…), honorific or humble verbs.
- Transitive / intransitive pairs are welcome when both are useful; say which is which in `en`.

## Examples
- Polite style (です / ます), 6 to 14 words, natural spoken Japanese. Each example MUST contain the entry itself, in any
  form. For verbs, use two different forms across the two examples (for instance ます and て, or ました and ない).
- Grammar and vocabulary no harder than the word's own level where you can (N5 words get N5 sentences).
- For `clin: true` words make at least one example something a clinician would say to a patient or a patient or
  relative would say to the clinician. Everyday words get everyday sentences, hospital flavour welcome but not forced.
- The English is a natural translation, not a gloss.

## Rules for clinical content
- No method detail, product names, brand names or doses anywhere. No phone number other than 119
  (`｜119番《ひゃくじゅうきゅうばん》`); say "the local crisis line" if one is needed.
- No Japan-specific legal or service claims. Nothing taken from the published wording of rating scales.
- Respectful, non-judgemental wording, as in the existing clinical entries.

## Check before you finish
```
cd /home/claude/work && node chk-trainer.js /home/claude/japanese new/<your file>
```
It must print `0 error(s)` twice (chk-trainer and check-ja). Read `new/<your file>.forms.txt`: it lists every form the
app will build from each of your words. If a word's table is mostly forms nobody says, replace the word. Warnings about
"long word without spaces" in check-ja usually mean a missing space.

## Report back (short)
The count written, and an "unsure" list: any reading, word choice, level or example you are not certain is natural,
with the alternative you considered. The list goes to an independent reviewer.
