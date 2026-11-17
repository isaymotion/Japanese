# Common rules for every 0.24.0 content writer
You write data for Hanashimashō, a Japanese-learning app for an English-speaking psychiatry resident (a beginner; this
build is N5 and N4 vocabulary learned from pictures). Repo /home/claude/japanese. Edit ONLY the file(s) named in your
task (they exist as registered stubs: keep the header and wrapper, replace any seed, fill them). No git commands. Do
not start or stop servers (one runs on port 8765 serving the repo).
Read first: /home/claude/japanese/tools/AUTHORING.md (notation: reading in 《》 after EVERY kanji run, ONE space between
words, particles separate, space after 、 and 。 inside a string, no romaji), then
/home/claude/work/briefs-0.24/PLAN-0.24.md (section A = exact shapes; then the section for your file).
- Write every word and sentence by hand: no scripts or templates that generate sentences. Natural, standard Japanese.
  Use the kanji a Japanese adult would normally write for the word (with its reading); words normally written in kana
  stay in kana (りんご, トイレ, かばん).
- Vocabulary N5 and N4 (a few N3 where a picture needs it); grammar at or below the set's or lesson's level.
- Clinical lines are polite and gentle. No medicine names, doses, methods; no real people, hospitals or brands.
- Spacing conventions of this repo: どの くらい, 何時《なんじ》 ごろ, に は, な after な-adjectives separate (静《しず》か な), 一緒《いっしょ》 に,
  〜たち attached, て-form + auxiliary separate (食《た》べて います, 飲《の》んで ください), する-nouns joined (勉強《べんきょう》します),
  は / へ / を always separate words, counters joined to their number with one reading (｜3本《さんぼん》 style per AUTHORING.md).
- English inside the file must not contain kanji without a reading (the checker reads every string).
- Never write a backtick or ${ inside a backtick string.
Check until clean (run from /home/claude/japanese):
  node --check <your file> && node tools/check-ja.js js/data/<your data file> | tail -5 && node /home/claude/work/chk-024.js . | tail -20
(0 errors from each; chk-024 checks every new file, so read only the lines naming your files.)
Finish with a short report (under 25 lines): counts, and an "unsure" list of the lines you are least sure are natural or correct.
