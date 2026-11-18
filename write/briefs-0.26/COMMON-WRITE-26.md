# Common rules for every 0.26.0 content writer
You write ONE data file for Hanashimashō, a Japanese-learning app for an English-speaking psychiatry resident (started
from zero, now at N3 / N2). The repo is /home/claude/japanese: READ it, never edit it. Your file is
/home/claude/work/new-0.26/<your file> (a stub with the header and wrapper: keep them, fill it). Edit ONLY that file.
No git commands. Do not start servers.
Read first: /home/claude/japanese/tools/AUTHORING.md (notation: reading in 《》 after EVERY kanji run, ONE space between
words, particles separate, space after 、 and 。 inside a string, no romaji, blank = ＿ as its own word).
- Write every sentence by hand: no scripts or templates that generate sentences. Natural, standard Japanese at the
  lesson's level (N3 or N2), vocabulary at or below that level plus common clinical words.
- About 40–50% of sentences clinical or health-related (history-taking, ward, family meetings, handover, letters and
  chart style where the lesson is about written style); to patients polite and gentle です/ます. The rest everyday.
- Keep each pattern in the register the lesson gives it (spoken / formal spoken / written; N2 lessons mark what the
  resident should SAY and what they only need to UNDERSTAND). A written-only pattern said to a patient is a good "mistake".
- Risk content stays general: no methods, medicine names, doses or numbers of tablets. Nothing that reads as
  encouragement to harm. Kind wording about patients. No real people, hospitals or brands. No claims about Japanese law
  or services ("follow local law and your hospital's policy"); crisis help is 地域《ちいき》 の 相談窓口《そうだんまどぐち》 or 119 only.
- People: the app's fictional patients (佐藤, 田中, 高橋, 山田, 山本, 中村, 伊藤, 小林, 井上, 岡田, 松本, 木村, 森, 石井, 長谷川, 藤田)
  must get NO new facts: prefer 患者《かんじゃ》さん, 母《はは》, 先生《せんせい》, or the neutral names 鈴木《すずき》さん, 渡辺《わたなべ》さん, 吉田《よしだ》さん.
- Spacing conventions of this repo: どの くらい, 何時《なんじ》 ごろ, に は, な after な-adjectives separate (静《しず》か な), 一緒《いっしょ》 に,
  〜たち attached, て-form + auxiliary separate (食《た》べて います, 飲《の》んで ください), する-nouns joined (勉強《べんきょう》します),
  は / へ / を always separate words. N2: auxiliary endings joined to their verb (崩《くず》しかねません, 言《い》いがたい, やり抜《ぬ》く,
  飲《の》むまい), compound particles split (に 反《はん》して, を きっかけ に, に も かかわらず, に かけて は, と して は, に よって は:
  a token ending in は must be は, では, とは or には). FOLLOW THE SPACING THE LESSON ITSELF USES for its pattern.
- English inside the file must not contain kanji without a reading (the checker reads every string).
- Never write a backtick or ${ inside a backtick string. Inside double-quoted strings escape " as \".
- Two strings that must differ (a mistake pair, quiz options) must differ in their TEXT, not only in the furigana.
- A blank ＿ is a whole word: where the tested ending is joined to its verb, blank the whole word and offer forms of it.
Check until clean (run from /home/claude/japanese; F = your file name):
  node --check ../work/new-0.26/F && node tools/check-ja.js ../work/new-0.26/F | tail -5 && node /home/claude/work/chk-023.js . /home/claude/work/new-0.26/F | grep -v "grammar-transform-2" | tail -15
(0 errors from each; fix warnings that name your file, e.g. "repeats an example of the lesson".)
Finish with a short report (under 250 words): counts, and an "unsure" list of the lines you are least sure are natural or correct.
