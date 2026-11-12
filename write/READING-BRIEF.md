# Brief: write one file of reading passages for Hanashimashō

Hanashimashō is a Japanese-learning web app for an English-speaking psychiatry resident who started from zero.
You are writing ONE data file of graded reading passages. Repo: /home/claude/japanese. Touch only your file. No git.

1. Read `/home/claude/japanese/tools/AUTHORING.md` (notation: reading in 《》 after EVERY kanji run, one space between
   words, particles as separate words, a space after 、 and 。 inside a string, no romaji). Read
   `/home/claude/japanese/js/data/reading.js` in full: it is the model for shape, length, tone, glossary and questions.
2. File shape (the first file already created the array, so yours extends it):
```
/* Reading passages part N: <levels>. DRAFT FOR REVIEW by a native Japanese speaker. Shape: see js/data/reading.js. */
window.READING = window.READING || [];
window.READING.push(
  { id: 'romaji-id', level: 'N3', psych: true,          // psych only on clinical passages; omit it otherwise
    title: "日本語《にほんご》 の 題《だい》", titleEn: "English title",
    tl: [ "paragraph 1", "paragraph 2", ... ],          // 5 to 7 paragraphs
    en: [ "English of paragraph 1", ... ],              // same count as tl, faithful and natural
    gloss: [ ["単語《たんご》", "word"], ... ],             // 14 to 20 entries, in order of appearance, dictionary forms
    q: [ ["Japanese question", ["option", "option", "option"], correctIndex, "English explanation quoting the line"], ... ] }   // 5 questions
);
```
3. Each passage:
   - Level as given in your task. N4 passages: about 280–380 Japanese characters (not counting readings). N3: about
     420–600. Grammar and vocabulary at the stated level; N3 passages should use N3 grammar the app teaches (for example
     〜うち に, 〜たび に, 〜おかげ で, 〜せい で, わけ, 〜に よると, 〜に とって, 〜と して, 〜一方, 〜がち, 〜気味, 〜そう だ
     (hearsay), 〜と いう, 〜ず に, 〜よう と する, 〜て たまらない, passive and causative), used naturally, not forced.
   - Natural, standard Japanese that a native speaker would write, in the style that fits the text type (です/ます narrative,
     a diary in plain style, a notice in formal style, and so on). Your own text; do not copy any published text.
   - Glossary: the harder words, in dictionary form, with short English.
   - Questions in Japanese (with furigana), 3 options each, exactly one defensible answer, answer position varied
     (0, 1, 2); they test understanding of the passage, including one inference question. The explanation is in English.
   - Clinical passages are realistic for a psychiatry ward or clinic and use the app's fictional patients where it fits:
     高橋《たかはし》 翔太《しょうた》さん (19, first-episode psychosis; his mother), 由美子《ゆみこ》さん (46, depression; sister 典子《のりこ》さん),
     蓮《れん》さん (24, mania; girlfriend 美咲《みさき》さん), 山田《やまだ》 茂《しげる》さん (elderly, delirium; daughter 恵子《けいこ》さん),
     山本《やまもと》 哲夫《てつお》さん (52, alcohol; daughter はるかさん), 中村《なかむら》 彩花《あやか》さん (20, student).
   - Content rules: no method detail and no medicine product names or doses; no claims about Japanese law, insurance or
     services (write generically); the only phone number allowed is ｜119番《ひゃくじゅうきゅうばん》; say 相談窓口《そうだんまどぐち》
     ("a support line") rather than naming one. Nothing graphic. Hopeful or neutral endings.
   - Readings matter most. Check every 《》 (今日《きょう》, 一人《ひとり》, 大人《おとな》, 何《なに》/何《なん》, 方《かた》/方《ほう》, 明日《あした》, 上手《じょうず》,
     counters, rendaku). Double quotes inside strings must be escaped or avoided; use 「」 for Japanese quotes.
4. Checks, from /home/claude/japanese:
```
node --check js/data/<file>.js
node tools/check-ja.js js/data/<file>.js       # must end with 0 error(s); read each warning and fix real ones
```
   Then re-read every Japanese line for wrong readings and missing spaces (は, へ, を stand alone), check that en has the
   same number of paragraphs as tl, and re-check every answer index.
5. Final message: file path, each passage id with level and character count, the checker's last line, and anything you
   were unsure about for the reviewer.
