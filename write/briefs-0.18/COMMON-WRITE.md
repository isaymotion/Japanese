# Hanashimashō 0.18.0 — common rules for content writers

The app teaches Japanese from zero to a Filipino psychiatry resident (a complete beginner) and the psychiatric interview in Japanese. Repo: /home/claude/japanese. Read `tools/AUTHORING.md` sections "The Japanese notation", "Check your file", "Accuracy and tone" — every Japanese string follows that notation (furigana in 《》 on every kanji run, one space between words, particles separate, hiragana readings, no romaji). Readings matter more than anything: a wrong reading teaches a wrong word.
- Every file starts with the header comment of the seed file you are given (keep its DRAFT line and shape comment).
- Write to /home/claude/work/new/<file> ONLY. Do not touch the repo.
- Patient and staff names: avoid 佐藤, 田中, 山田, 高橋, 伊藤, 中村, 山本, 木村, 鈴木 if the sentence is clinical (they are patients or staff elsewhere); prefer no names, or 森さん, 林さん, 小川さん.
- No medicine names, no doses in mg, no method detail for self-harm or substance use, no claims about Japanese law or services ("the local crisis line" if ever needed; 119 is the only number allowed). Nothing frightening or shaming; nothing that reads as encouragement to harm.
- Do not copy sentences from textbooks; write your own.
- English: plain, natural, no Japanese characters in English fields (check-ja rejects kanji in English).
Checks (run from /home/claude/japanese; give the draft path RELATIVE to the repo):
```
node --check ../work/new/<file>
node tools/check-ja.js ../work/new/<file>     # must be 0 errors; read every warning
node ../work/chk-017.js . ../work/new/<file>   # 0 errors (it also checks dictionary keys and shapes)
```
Finish with a short report: counts, check results, and an "unsure" list (strings you are not sure are natural or correctly read), which goes to an independent reviewer.
