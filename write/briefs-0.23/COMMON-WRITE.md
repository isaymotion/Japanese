# Common rules for every 0.23.0 content writer
You write ONE data file for Hanashimashō, a Japanese-learning app for an English-speaking psychiatry resident (a beginner
who works up to N2). Repo /home/claude/japanese. Edit ONLY your file (it exists as a registered stub: keep its first
lines and wrapper, fill it). No git commands. Do not start servers.
Read first: /home/claude/japanese/tools/AUTHORING.md (notation: reading in 《》 after EVERY kanji run, ONE space between
words, particles separate, space after 、 and 。 inside a string, no romaji, blank = ＿ as its own word), then
/home/claude/work/briefs-0.23/PLAN-0.23.md (section A = your file's exact shape; your section of C, D or E = what to write).
- Write every sentence by hand: no scripts or templates that generate sentences. Natural, standard Japanese; vocabulary at
  or below the item's level plus common clinical words; grammar at or below the level.
- About 40% of sentences clinical or health-related (polite, gentle です/ます to patients), the rest everyday.
- Risk content stays general: no methods, medicine names, doses or numbers of tablets. No real people, hospitals or brands.
- Spacing conventions of this repo: どの くらい, 何時《なんじ》 ごろ, に は, な after な-adjectives separate (静《しず》か な), 一緒《いっしょ》 に,
  〜たち attached, て-form + auxiliary separate (食《た》べて います, 飲《の》んで ください), する-nouns joined (勉強《べんきょう》します),
  は / へ / を always separate words.
- English inside the file must not contain kanji without a reading (the checker reads every string).
- Never write a backtick or ${ inside a backtick string.
Check until clean (run from /home/claude/japanese):
  node --check js/data/<your file> && node tools/check-ja.js js/data/<your file> | tail -5 && node /home/claude/work/chk-023.js . | tail -15
(0 errors from each; chk-023 checks the shapes, ids, options and lesson ids of all new data, so read only lines naming your file.)
Finish with a short report: counts, and an "unsure" list of the lines you are least sure are natural or correct.
