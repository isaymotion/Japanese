# Common rules for every 1.0.0 content writer
You write ONE data file for Hanashimashō, a Japanese-learning app for an English-speaking psychiatry resident (started
from zero, now at N1). The repo is /home/claude/japanese: READ it, never edit it. Your file is
/home/claude/work/new-1.0/<your file> (a stub with the header and wrapper: keep them, fill it). Edit ONLY that file.
No git commands. Do not start servers.
Read first: /home/claude/japanese/tools/AUTHORING.md (notation: reading in 《》 after EVERY kanji run, ONE space between
words, particles separate, space after 、 and 。 inside a string, no romaji, blank = ＿ as its own word).
- Write every sentence by hand: no scripts or templates that generate sentences. Natural, standard Japanese at the
  lesson's level (N1), vocabulary at or below N1 (prefer N2 and below outside the pattern itself) plus common clinical words.
- About 40–50% of sentences clinical or health-related (history-taking, ward, family meetings, handover, letters and
  chart style where the lesson is about written style); to patients polite and gentle です/ます. The rest everyday.
- Keep each pattern in the register the lesson gives it (spoken / formal spoken / written; N1 lessons mark every pattern SAY or UNDERSTAND, with its register and,
  for "understand", the plain form to say instead). A written-only pattern said to a patient is a good "mistake".
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
  node --check ../work/new-1.0/F && node tools/check-ja.js ../work/new-1.0/F | tail -5 && node /home/claude/work/chk-023.js . /home/claude/work/new-1.0/F | grep -v "grammar-transform-2" | tail -15
(0 errors from each; fix warnings that name your file, e.g. "repeats an example of the lesson".)
Finish with a short report (under 250 words): counts, and an "unsure" list of the lines you are least sure are natural or correct.

## N1 additions (1.0.0)
- Most N1 patterns are written or formal. NEVER put a written-only or literary pattern in a doctor's line to a patient as
  a model sentence: show it where it lives (a notice, a letter, a case report, a speech, a newspaper, a senior's formal
  remark), and where it helps, add in the English or the why the plain form the resident would SAY instead.
- Patterns that can sound judgemental (〜始末 だ, 〜きらい が ある, 〜まじき, 〜ぶる, 〜がましい, 〜もの を, 〜極まりない, 〜たる 者,
  〜と いったら ない about a person) are never aimed at a patient or a family member. Use them about weather, traffic,
  one's own mistakes, institutions, or in quoted written text.
- NO risk content at all in this build: no wish to die, self-harm, overdose, violence. Clinical sentences are about
  history-taking, explanation, handover, conferences, letters, reports, consent, ward life.
- The learner persona is Dr. サントス (never any other name for the learner, and never the name Navarro / ナバロ).
- About a third of the second-half N1 patterns (lessons-53..60) are three-line reminders of N2 patterns with links.
  Spend the extras on what the lesson NEWLY teaches; a reminder pattern gets at most one example.
- N1 spacing conventions of this repo (but ALWAYS copy the spacing the lesson itself uses for its pattern): する-nouns
  joined (報告《ほうこく》します), する-noun + いたします split; `もの を` split; `す べく` / `す べからず`; `そば から`; stem + がてら
  joined, noun + がてら spaced; `と あって は`, `なくして は`, `に して は` split before は; いかん, ものともせず, ともなると,
  思いきや, なりとも, しかるべき one word; ずじまい joined to its stem; `こそ すれ`; `この 上 ない`; `差し支え ない`;
  a token that ends in は must be は, では, とは or には.
- No sentence may depend on the calendar or on today's date. No statistics, study claims, laws or real institutions.
- A quiz stem or example equal or CLOSE to one of the lesson's own examples or quiz stems is a repeat even if the checker
  is silent: grep the lesson file (and for second-half lessons also js/data/grammar-cloze-n1a.js, grammar-cloze-n1b.js,
  grammar-errors-n1.js, grammar-transform-3.js) for your key content words before keeping a sentence.
- A wrong quiz option must be wrong WITHOUT the English cue, and wrong for most native speakers (ungrammatical in the
  slot, or clearly another meaning). Prescriptive-only rules are not mistakes.
- Lengths are counted WITHOUT readings and WITHOUT HTML tags.
