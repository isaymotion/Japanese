# Brief: write one file of speaking dialogues for Hanashimashō

Hanashimashō is a Japanese-learning web app for an English-speaking psychiatry resident who started from zero.
You are writing ONE data file of dialogues for the Speaking page (listen, shadow, role-play). Repo: /home/claude/japanese.
Touch only your file. No git. Do not edit any other file.

1. Read `/home/claude/japanese/tools/AUTHORING.md` (notation: reading in 《》 after EVERY kanji run, one space between
   words, particles as separate words, a space after 、 and 。 inside a string, no romaji). Read
   `/home/claude/japanese/js/data/dialogues.js` in full: it is the model for shape, length and tone.
2. File shape (the first file already created the array, so yours extends it):
```
/* Dialogues part N: <level>. DRAFT FOR REVIEW by a native Japanese speaker. Shape: see js/data/dialogues.js. */
window.DIALOGUES = window.DIALOGUES || [];
window.DIALOGUES.push(
  { id: 'romaji-id', level: 'N3', title: "English title",
    roles: ['You (role)', 'Other person'], you: 0,          // exactly two speakers; the learner is speaker 0
    lines: [ [speakerIndex, "Japanese", "English"], ... ] }  // 12 to 16 lines, speakers alternate
);
```
3. Each dialogue:
   - Level as given in your task. An N3 dialogue uses N3 grammar the app teaches, naturally and not forced: 〜うち に,
     〜たび に, 〜て 以来, 〜間 / 〜間 に, 〜おかげ で, 〜せい で, わけ だ / わけ では ない, 〜はず, 〜べき, 〜に よると, 〜に とって,
     〜と して, 〜に ついて, 〜に 対して, 〜一方, 〜がち, 〜気味, 〜そう だ (hearsay), 〜らしい, 〜に 違いない, 〜と いう, 〜ず に,
     〜よう と する, 〜て たまらない, 〜て しまう, 〜ば 〜ほど, 〜たとえ 〜ても, passive, causative, keigo where the situation calls
     for it. Each dialogue should show 4 to 6 of these. Vocabulary at N3 or below, plus clinical words the app already
     teaches.
   - Lines of one or two sentences (about 15 to 45 Japanese characters, not counting readings), sayable in one breath:
     the learner shadows and role-plays them. The learner's lines carry the useful language.
   - Natural spoken Japanese that a native speaker would say. A clinician speaks to a patient or family in polite
     です/ます with 〜さん and never あなた; patients and family may speak polite or casual as fits them; colleagues speak
     as colleagues do. English: faithful and natural.
   - Clinical dialogues are realistic for a psychiatry ward or clinic and use the app's fictional patients where it fits:
     高橋《たかはし》 翔太《しょうた》さん (19, first-episode psychosis; his mother), 由美子《ゆみこ》さん (46, depression; sister 典子《のりこ》さん),
     蓮《れん》さん (24, mania; girlfriend 美咲《みさき》さん), 山田《やまだ》 茂《しげる》さん (elderly, delirium; daughter 恵子《けいこ》さん),
     山本《やまもと》 哲夫《てつお》さん (52, alcohol; daughter はるかさん), 中村《なかむら》 彩花《あやか》さん (20, student).
     The learner's surname in the existing dialogues is サントス (a doctor from the Philippines).
   - Content rules: no method detail and no medicine product names or doses; no claims about Japanese law, insurance or
     services (write generically); the only phone number allowed is ｜119番《ひゃくじゅうきゅうばん》; say 相談窓口《そうだんまどぐち》
     ("a support line") rather than naming one. Nothing graphic. Risk questions are asked calmly and directly, the way
     the app's interview phrases do. Hopeful or neutral endings.
   - Readings matter most. Check every 《》 (今日《きょう》, 一人《ひとり》, 大人《おとな》, 何《なに》/何《なん》, 方《かた》/方《ほう》, 明日《あした》, 上手《じょうず》,
     counters, rendaku). Double quotes inside strings must be escaped or avoided; use 「」 for Japanese quotes.
   - Ids: lower-case romaji with hyphens, not already used in dialogues.js.
4. Check, and fix until clean:
```
cd /home/claude/japanese && node --check js/data/<your file> && node tools/check-ja.js js/data/<your file>     # 0 error(s); read every warning
```
5. Reply with: the dialogue ids and titles, the N3 patterns each one uses, and an "unsure" list (any reading, word
   choice or line you are not certain a native speaker would accept).
