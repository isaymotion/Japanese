# Common rules for every 0.25.0 content writer
You write ONE data file for Hanashimashō, a Japanese-learning app for an English-speaking psychiatry resident (a beginner
who works up to N2). Repo /home/claude/japanese. Edit ONLY your file (it exists as a registered stub: keep its header
comment and wrapper, fill it). No git commands. Do not start servers. Other agents are editing other files in the repo
at the same time: never touch them.
Read first: /home/claude/japanese/tools/AUTHORING.md (notation: reading in 《》 after EVERY kanji run, ONE space between
words, particles separate, space after 、 and 。 inside a string, no romaji), then
/home/claude/work/briefs-0.25/PLAN-0.25.md (section A = your file's exact shape and what to write).
- Write every sentence by hand: no scripts or templates that generate sentences. Natural, standard Japanese; vocabulary at
  or below the item's level plus common clinical words; grammar at or below the level.
- Risk content stays general: no methods, medicine names, doses or numbers of tablets. No real people, hospitals or brands.
  Keep everyday examples away from wounds and self-harm.
- Spacing conventions of this repo: どの くらい, 何時《なんじ》 ごろ, に は, な after な-adjectives separate (静《しず》か な), 一緒《いっしょ》 に,
  〜たち attached, て-form + auxiliary separate (食《た》べて います, 飲《の》んで ください), する-nouns joined (勉強《べんきょう》します),
  は / へ / を always separate words.
- English inside the file must not contain kanji without a reading (the checker reads every string).
Check until clean (run from /home/claude/japanese):
  node --check js/data/<your file> && node tools/check-ja.js js/data/<your file> | tail -5
(0 errors), plus a small node script of your own (global.window = global; load your file) that checks the shape rules of
the plan for your file (ids unique and in sequence, counts per level, indexes in range, 4 options, and so on).
Finish with a short report (under 200 words): counts, and an "unsure" list of the lines you are least sure are natural or correct.
