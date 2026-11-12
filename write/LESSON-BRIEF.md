# Brief: write one lessons file for Hanashimashō

You are writing ONE data file of grammar lessons for a Japanese-learning web app. The learner is an English-speaking
psychiatry resident who started from zero and has finished the app's earlier lessons. Repo: /home/claude/japanese.
Do not touch any file other than the one you are assigned. Do not run git commands.

## Read first
1. `/home/claude/japanese/tools/AUTHORING.md`: the Japanese notation (furigana in 《》 after EVERY kanji run, readings in
   hiragana and correct for that sentence, ONE space between words, particles as separate words, no romaji). It applies to
   every Japanese string you write, including Japanese cited inside English explanations, table cells and quiz options.
2. `/home/claude/japanese/js/data/lessons-3.js`: read at least the lessons `when-if`, `can` and `reasons` as models of
   shape, length, tone and how examples and quizzes are written. Match them.
3. Skim the titles of existing lessons (`grep -o "id: '[a-z0-9-]*'.*title: .[^\`]*" js/data/lessons-*.js`) so you can
   build on what the learner already knows and link back to it, and do not re-teach it.

## File shape
```
/* Lessons part N: <what it covers> (<count> lessons, <level>).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md. */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  { id: 'kebab-case-id', level: 'N4', unit: 'Unit name', title: `Title`, summary: `One sentence.`, draft: true,
    body: `...HTML...`,
    quiz: [
      ["Question", ["option A", "option B", "option C"], 1, "Why the answer is right."],
      ...
    ] },

  { ...next lesson... }
);
```
- `id`, `level`, `unit` and the order of lessons are given in your task. Use them exactly.
- `title`: short; name the grammar in Japanese with its plain-English job, like the existing titles.
- `summary`: one sentence saying what the learner will be able to do.
- `body`: HTML in a backtick string, using ONLY these elements: `<p>`, `<h3>`, `<b>`, `<i>`, `<ul><li>`,
  `<table><tr><th><td>`, `<a href="#/lessons/ID">`, `<div class="ex"><b>JAPANESE</b><span>English</span></div>` for example
  sentences, and `<div class="note">…</div>` for a caution or tip. No other tags, classes or inline styles.
- Never write a backtick or `${` inside the body. Inside quiz strings (double-quoted) escape any `"` as `\"`.

## What each lesson contains
- Length: body about 3,500–5,500 characters (a little fuller than the existing ones is fine). 10–16 example sentences.
- Opening paragraph: when the learner needs this grammar, in a clinic or ward or in daily life.
- "How to make it": the formation rule for every word class it attaches to (verb groups, い-adjective, な-adjective, noun),
  as a table when there are several cases, with one worked form each.
- One `<h3>` section per use or per pattern, each with 2–5 example sentences. Explain the meaning plainly, then show it.
- Contrast with look-alike grammar the learner already knows, and state the most common mistake.
- Where it is natural, a short section "In the interview" or "On the ward" with 3–4 examples the resident could say or will
  hear from a patient or family member. About a third to a half of all examples should be clinical or health-related; the
  rest everyday. Clinical lines are polite and gentle (です/ます, soft requests).
- A closing `<div class="note">` with the one or two things to remember.
- `quiz`: 6 questions (5–7 allowed), each with exactly 3 options and exactly ONE defensible right answer; vary the position
  of the right answer (0, 1, 2 about equally). Mix: choose the correct form, choose the meaning, choose the natural
  sentence, fill the blank (`＿` as its own word). The explanation says why in one sentence. Wrong options must be really
  wrong (ungrammatical or a different meaning), not merely less common.

## Accuracy rules
- Standard, widely taught grammar at the stated JLPT level. Correct conjugations. If unsure of a nuance, leave it out.
- Examples are your own sentences, natural standard Japanese, using vocabulary at or below the lesson's level plus common
  clinical words. Do not copy textbook sentences.
- Readings matter most: check every 《》 (今日《きょう》, 一人《ひとり》, 何《なに》/何《なん》, 方《かた》/方《ほう》, 行《い》く/行《おこな》う,
  辛《つら》い, 上手《じょうず》, 大人《おとな》, 明日《あした》, counters and rendaku).
- App content rules: no method detail, no medicine product names or doses in anything about self-harm or medicine misuse;
  no claims about Japanese law or services (write "follow local law and your hospital's policy" if needed); the only phone
  number allowed is ｜119番《ひゃくじゅうきゅうばん》; say "the local crisis line" rather than naming one. Do not reproduce
  published rating-scale wording.
- English is plain and direct. No filler, no exclamation marks, no emoji.

## Check before you finish (from /home/claude/japanese)
```
node --check js/data/<your file>.js
node tools/check-ja.js js/data/<your file>.js     # must end with 0 error(s); read every warning and fix real ones
```
Then re-read every Japanese line once more for wrong readings, missing spaces around particles (は, へ, を must stand
alone) and unnatural phrasing, and re-check every quiz answer index.

## Final message
The file path, the lesson ids with body length and quiz count, the checker's last line, and a short list of anything you
were unsure about (a nuance, a reading, a quiz item) for the reviewer.
