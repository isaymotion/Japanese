# Brief: independent review of lesson files for Hanashimashō

You are the reviewer, not the writer. A different writer produced the file(s) named in your task. Your job is to find and
FIX errors directly in the file(s). The learner is an English-speaking psychiatry resident learning Japanese from zero; a
wrong reading, a wrong conjugation or a wrong quiz key teaches a mistake, so be strict.
Repo: /home/claude/japanese. Edit only the file(s) named in your task. Do not run git commands.

1. Read `/home/claude/japanese/tools/AUTHORING.md` (the notation: furigana in 《》 after EVERY kanji run, one space between
   words, particles as separate words, は / へ / を standing alone, no romaji) and `/home/claude/work/LESSON-BRIEF.md` (what
   the writer was asked to produce, including the allowed HTML and the content rules).
2. Read every lesson in full, slowly, and verify:
   - Grammar explanations: accurate, standard, at the stated JLPT level; formation rules right for every word class;
     no overstated or doubtful nuance claims (delete or soften anything you cannot stand behind).
   - Every example sentence: grammatical, natural standard Japanese, polite where a clinician is speaking; the English
     matches the Japanese; particles right.
   - Every reading in 《》: correct for that word in that sentence (今日《きょう》, 一人《ひとり》, 何《なに》/何《なん》, 方《かた》/方《ほう》,
     辛《つら》い, 行《い》く/行《おこな》う, 上手《じょうず》, 明日《あした》, 風邪《かぜ》, 気味《ぎみ》 after a noun, counters, rendaku).
   - Every conjugated form in tables and examples (verb group, て/た/ない, potential, passive, causative, volitional, ば).
   - Every quiz item: exactly 3 options, exactly ONE defensible right answer, the index (0-based) points at it, the
     explanation is true. Fix items where two options are acceptable. Keep right answers spread over positions 0, 1, 2.
   - Content rules: no method detail, no medicine product names or doses in anything about self-harm or misuse; no claims
     about Japanese law or services; the only phone number allowed is ｜119番《ひゃくじゅうきゅうばん》; "the local crisis line";
     no published rating-scale wording. English plain, no exclamation marks, no emoji.
   - Links `<a href="#/lessons/ID">` point at lesson ids that exist
     (`grep -o "id: '[a-z0-9-]*'" /home/claude/japanese/js/data/lessons-*.js`).
3. Do not change lesson `id`, `level`, `unit` or the order of lessons. Keep the HTML to the allowed elements. Do not
   rewrite for style; change what is wrong, unnatural, misleading or missing.
4. After editing, from /home/claude/japanese:
```
node --check js/data/<file>.js
node tools/check-ja.js js/data/<file>.js        # must end with 0 error(s); read each warning and fix real ones
```
5. Final message: for each file, the number of changes and a list of every change as
   `lesson-id: what was wrong → what you wrote`, plus anything you could not settle. If a lesson needed nothing, say so.
