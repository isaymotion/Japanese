# Hanashimashō 0.29.0 (N1, second half) — fixed facts and specs (decided by the design lead; do not change, report if a source disagrees)

Repo /home/claude/japanese is READ ONLY for writers and reviewers (a test suite runs there): you may read it and run its
checkers on files outside it, never write in it. Drafts live in /home/claude/work/new-0.29/. Touch only the file named in
your task. No git commands. Do not start servers. Write every sentence by hand (no generating scripts or templates).

General rules (every file): first line `/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */`;
Japanese notation of /home/claude/japanese/tools/AUTHORING.md on EVERY Japanese string (reading in 《》 after every kanji run, one
space between words, particles separate, は / へ / を always alone, space after 、 and 。 inside a string, no romaji); English
strings contain no kanji without a reading; fictional people only; no method detail, no medicine or product names, no doses,
no vital-sign or lab numbers; crisis = "the local crisis line" / 地域《ちいき》 の 相談窓口《そうだんまどぐち》 and ｜119番《ひゃくじゅうきゅうばん》 only;
law = "follow local law and your hospital's policy" (no claim about Japanese law, admission types or services); no
statistics or study claims; no sentence that depends on today's date or the calendar; keep everyday examples away from
wounds and from anything that reads as encouragement to harm. A hint of wanting to die or disappear may appear ONLY where
this file says so, and then the clinician acknowledges and asks gently and directly (死《し》にたい と 思《おも》う こと は あります か).
Spacing conventions: する-nouns joined (勉強《べんきょう》します), て-form + auxiliary separate (食《た》べて います), な separate
after な-adjectives, auxiliary endings joined to their verb, a token ending in は that is not では / とは / には is split
(に して は). More N1 conventions: top of /home/claude/devtools/write/briefs-0.29/N1-LESSON-PLAN-2.md.
N1 grammar the app teaches: the 24 first-half lessons (/home/claude/devtools/write/briefs-0.28/N1-LESSON-PLAN.md, live in
js/data/lessons-45..52.js) and the 24 second-half lessons (N1-LESSON-PLAN-2.md, being written now). Use N1 patterns
naturally where they belong (6 or more per reading or dialogue, never forced).
Names with fixed facts elsewhere (do not use for new people): 佐藤, 田中, 高橋, 山田, 山本, 中村, 伊藤, 小林, 井上, 岡田, 松本,
木村, 長谷川, 石井, 森, 藤田, 小川, 林, 西村, 大野, 近藤. The learner is サントス先生 (a resident from the Philippines).

## A. N1 readings (8 passages; N1: 800–1,100 Japanese characters not counting readings, 6–9 paragraphs, glossary 18–24, 5 questions)
Brief: /home/claude/work/READING-BRIEF.md (read its N3 length and grammar lines as N1 per this section); models
/home/claude/japanese/js/data/reading-4.js and reading-5.js (N2). `level: 'N1'`. Files push to `READING` like reading-5.js.
reading-6.js (all `psych: true`), in this order:
1. `shourei-houkoku` — "A case report (sample)": である style, the sections a Japanese case report has (はじめ に, 症例, 経過,
   考察, おわり に) in miniature. A man in his seventies (no name: 「70歳代《ななじゅっさいだい》、 男性《だんせい》」) whose depression
   first showed as bodily complaints and many clinic visits; improved with rest, support for his family and outpatient
   follow-up. "Medicine was started and adjusted" at most: no names, doses, test values or scale scores. The 考察 gives the
   authors' reflection only (no literature claims). titleEn ends "(sample)".
2. `setsumei-doui-bunsho` — "An explanation and consent form (sample)": for a ward QUESTIONNAIRE about sleep and daily
   rhythm (not a treatment): purpose, what is asked, that taking part is free, that declining or withdrawing brings no
   disadvantage (〜いかん に かかわらず, 〜もの と します, 何ら 〜ない, 〜て も 差し支え ありません), how answers are kept, whom
   to ask. Generic ("当院《とういん》"), labelled sample, "follow your hospital's policy" in the English note.
3. `iryou-anzen-dayori` — "From the patient-safety newsletter (sample)": a near fall at night on a ward (nobody hurt): what
   happened, what staff noticed, what the ward changed (call button within reach, footwear, lighting, asking before
   getting up). Written, calm, no blame of any person. No medicine involved.
4. `kaifuku-no-shuki` — "Notes on getting better": a woman in her sixties, a retired librarian (青木さん, new), writes in a
   literary です/ます or である essay about the months when she could not even read a page, the people who waited, and
   reading again. Hopeful. Risk content at most "there were mornings I could not picture the next day"; no methods, no
   wish-to-die line.
reading-7.js (no `psych` except where stated), in this order:
5. `shasetsu-kodoku` — "Editorial: so that no one grows old alone": newspaper-editorial style on loneliness in an ageing
   town; opinion and everyday observation only (no statistics, studies, laws or named services).
6. `shikiten-no-aisatsu` — "A speech at the hospital's anniversary ceremony": the director's formal speech (thanks to the
   community and staff, the years behind, resolve): 〜に あたり, 〜を もちまして, 〜の 賜物《たまもの》, 〜て やみません,
   ご指導 ご鞭撻. No hospital name, no numbers beyond a made-up round anniversary.
7. `zuihitsu-hatsushimo` — "Essay: the first frost": a literary essay (随筆) on a winter morning walk and an old
   neighbour's garden, with the classical-flavoured forms the lessons teach (〜ぬ, 〜ざる, 〜と も なく, 〜ごとく, 〜ながら に).
8. `kenshuu-ichinen` — "One year of training": サントス先生's essay for the hospital newsletter, written style: what the first
   year taught about words, silence and asking for help; thanks to seniors and nurses. (`psych: true`.) Consistent with
   reading `kenshuu-hantoshi` (reading-5.js): read it first.

## B. N1 dialogues (file dialogues-4.js, 6 dialogues, `level: 'N1'`, 16–20 lines each)
Brief: /home/claude/work/DIALOGUE-BRIEF.md (read its N3 lines as N1 per this section); model
/home/claude/japanese/js/data/dialogues-3.js. The learner is サントス, speaker 0 (`you: 0`).
1. `gakkai-shitsugi` — "Questions after a conference talk": サントス has presented a case (the sample case of reading 1,
   no new clinical facts beyond it); the chair and questioner is 岡本《おかもと》先生 (new). Formal conference speech
   (ご質問 ありがとう ございます, ご指摘 の とおり, 〜と 考えて おります, 今後 の 課題 と させて いただきます).
2. `kujou-taiou` — "Listening to a family's complaint": the daughter (福田《ふくだ》さん, new) of an inpatient is upset that
   nobody explained a change of room. Apology keigo, listening first, no excuses, no promises that cannot be kept, a
   concrete next step (the charge nurse and doctor will explain today).
3. `nenpai-no-kanja` — "An older patient who speaks formally": 三浦《みうら》さん (new), a man in his eighties, retired
   school principal, widowed some months ago, seen in the outpatient clinic with poor sleep and low mood. He speaks in
   the older, formal style the lessons teach (〜ぬ, 〜と いえども, 〜ゆえ, お恥ずかしい 限り). サントス understands, answers in
   plain polite Japanese and checks one old expression kindly. He says once that he would like to "go early to where my
   wife is" (早く 妻《つま》 の ところ へ 行《い》きたい と 思《おも》う こと も ある); サントス acknowledges, then asks the direct
   question; he answers that he thinks of it at times but has no intention of doing anything, because of his
   grandchildren; サントス thanks him for telling, asks him to say so if the thought grows stronger, and they agree the next
   visit. No plan, no means, no method, nothing more.
4. `tashokushu-kaigi` — "A discharge-support meeting": サントス with the social worker 太田《おおた》さん (new) and the charge
   nurse (name-less: 師長《しちょう》) about an unnamed older inpatient going home: formal spoken N1 (〜を 踏まえて,
   〜いかん に よって は, 〜に 即して, 〜ないまでも). No named services or legal categories: "day service" style
   generic words only (通《かよ》い の サービス, 訪問《ほうもん》).
5. `buchou-ni-houkoku` — "Reporting a near miss to the department head": サントス reports to 坂本《さかもと》部長《ぶちょう》 (new)
   that a patient nearly fell while being walked to the interview room (nobody hurt): facts first, own part, what was
   done, what will change. Humble keigo; the head's reply is calm and constructive.
6. `soubetsukai-no-aisatsu` — "A speech at a farewell party": a senior nurse (名前 なし: 主任《しゅにん》) asks サントス for a
   few words as a colleague leaves; サントス gives a short formal speech in several turns (僭越 ながら, 〜に あたり, 〜て
   やみません), the 主任 reacts and closes. Warm, a little humour.

## C. Example sentences for N1 words (files examples-21.js, -22.js, -23.js; lists /home/claude/work/new-0.29/ex-words-N1-<1..3>.txt)
Brief: /home/claude/work/briefs-0.18/W-examples.md + /home/claude/work/briefs-0.17/COMMON-WRITE.md, with these changes:
your file is /home/claude/work/new-0.29/examples-<n>.js (wrapper `window.DICT_EX = (window.DICT_EX || []).concat([ … ]);`,
header as in /home/claude/japanese/js/data/examples-17.js with "part <n> (0.29.0)"); one sentence for EVERY word in your
list (skip a word only if no safe, natural sentence exists: report it); the key is copied EXACTLY from the list; grammar
up to N2 with an occasional N1 pattern, vocabulary N1 or below; 6 to 16 words; many N1 words are written or formal:
put such a word in the kind of sentence where it lives (news, notice, report, meeting) in です/ます or である as fits; at
least a quarter clinical or hospital-flavoured where the word allows.
Checks (from /home/claude/japanese, RELATIVE paths): `node --check ../work/new-0.29/<file>`,
`node tools/check-ja.js ../work/new-0.29/<file>` (0 errors), `node ../work/chk-017.js . /home/claude/work/new-0.29/<file>`
(0 errors: every key exists in the dictionary).

## D. N1 topic sets (file topic-sets-6.js, 8 sets)
Brief: /home/claude/work/briefs-0.17/W-topics.md + COMMON-WRITE.md, with these changes: your file is
/home/claude/work/new-0.29/topic-sets-6.js (wrapper and header like /home/claude/japanese/js/data/topic-sets-4.js with "part 6
(0.29.0): N1 sets"); 8 sets of 12–16 words; at least 9 words of each set must have dictionary level N1 (the rest N2 or
below) so the set shows under the N1 filter; N1 words are in js/data/dict-n1-1..3.js. Ids must not repeat an existing
set id. Sets (id: title, clin): n1-society: Politics, economy and society · n1-rules: Rules, administration and formal
procedures · n1-mind: Feelings and states of mind (clin) · n1-medicine: Medicine and the body (clin) · n1-nature: Nature
and the land · n1-culture: Arts, religion and tradition · n1-work: Business and organisations · n1-describe: Describing
people and things (adjectives and adverbs). No risk words. Glosses within a set must not be confusable.
Checks as in C (chk-017 checks every word is a dictionary key).

## E. N1 trainer words (file /home/claude/work/new-0.29/trainer-n1.js)
Brief: /home/claude/work/TRAINER-BRIEF.md. The trainer has 528 verbs and 307 adjectives (the brief's numbers are old).
Candidates: /home/claude/work/new-0.29/cand-verbs-N1.txt (298) and cand-adj-N1.txt (84). Choose 40–50 verbs and 12–16
adjectives, `lv: "N1"`, preferring words a resident will meet (meetings, reports, letters, careful speech) and a spread of
v5 / v1 / する. Leave out any verb whose 〜ましょう / 〜て ください / causative / potential form would be harmful, coercive,
unkind or absurd when shown or spoken alone (staff procedures, bodily functions, violence, crime, deceit, symptoms,
death, things nobody chooses to do, honorific and humble verbs) and adjectives that insult (卑しい, 愚か and the like).
Check: `cd /home/claude/japanese && node ../work/chk-trainer.js . ../work/new-0.29/trainer-n1.js` (it writes
`../work/new-0.29/trainer-n1.js.forms.txt` beside the fragment: read every built form).

## F. Listening questions on the N1 readings and dialogues (file listen-questions-7.js) — written AFTER A and B are reviewed
Brief: /home/claude/work/briefs-0.17/W-questions.md + COMMON-WRITE.md; your file /home/claude/work/new-0.29/listen-questions-7.js
(wrapper `window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, { … });`, header like listen-questions-4.js with
"(0.29.0)"); keys = the 8 reading ids and 6 dialogue ids above; 3 questions each (42), English, 4 options, exactly as
the reviewed texts say; answer positions varied; the question on `nenpai-no-kanja` stays away from the risk exchange
except in general terms ("What does Mr. Miura say keeps him going?").

## G. N1 drill items (ids permanent; N1 only; each file is new and holds only N1 items)
Common rules: /home/claude/work/briefs-0.23/COMMON-WRITE.md (ignore its "registered stub" and check lines: your file is in
/home/claude/work/new-0.29/ and the checks are below) and the brief named for your file. Vocabulary N1 or below; about
40% clinical or hospital sentences; N1 patterns are mostly written or formal, so sentences are in the register where the
pattern lives. Lesson ids for `l`: the 24 first-half N1 ids (the lessons exist in js/data/lessons-45..52.js: read the
lesson before writing its items; do not copy its examples or quiz stems).
- G1 `grammar-cloze-n1a.js` — Fill the blank: brief /home/claude/work/briefs-0.23/W-cloze.md and the shape in the header of
  /home/claude/japanese/js/data/grammar-cloze-n2b.js. 96 items, ids c-n1-001 … c-n1-096, `lv:'N1'`, 4 items for each of the
  24 first-half N1 lessons in lesson order. Wrong options: prefer forms that are ungrammatical in the slot or clearly
  another meaning; never a second acceptable answer. A blank is a whole word.
- G2 `grammar-cloze-n1b.js` — the same for the 24 second-half lessons (ids c-n1-101 … c-n1-196), written AFTER those
  lessons are reviewed (files /home/claude/work/new-0.29/lessons-53..60.js).
- G3 `grammar-transform-3.js` — Transform the sentence: brief W-transform.md and the header of grammar-transform-2.js.
  40 items t-n1-001 … t-n1-040, `lv:'N1'`: spoken → written or formal (and back: "Say it plainly."), pattern swaps
  named in `instr` (Rewrite with 〜や 否や.), keigo up to letter style, classical negative → modern. `wrong` = 3
  well-formed sentences that do not follow the instruction.
- G4 `grammar-errors-n1.js` — Find the mistake: shape and rules in section A1 of /home/claude/work/briefs-0.25/PLAN-0.25.md and
  the header of grammar-errors-n3n2.js. 40 items e-n1-001 … e-n1-040, `lv:'N1'`. Fairness test for EVERY item: exactly
  one tile can be the mistake (no other word could be changed to repair the sentence), and the wrong sentence is wrong
  for most native speakers (formation errors: what the pattern attaches to, a wrong particle inside a fixed pattern,
  a wrong member of a set phrase), never a matter of register or taste. `bad` and `fix` differ in visible text.
- G5 `word-pairs-3.js` — Word pairs: brief W-pairs.md and the header of word-pairs-2.js. 60 items p-n1-001 … p-n1-060,
  `lv:'N1'`: about 24 opposites, 12 near-synonyms with a `note`, 24 collocations; words from the N1 dictionary files
  (js/data/dict-n1-1..3.js) where possible; each `a` has ONE obvious partner among the pairs of its type.
- G6 `listen-reply-3.js` — Listen and reply: shape and rules in section A2 of PLAN-0.25.md and the header of
  listen-reply-2.js. 30 items, `lv:'N1'`: r-201 … r-215 `clin: false` (formal workplace exchanges: a senior's formal
  request, a speech cue, a phone call from another hospital, a letter-style greeting said aloud, an older neighbour's
  set phrases) and r-216 … r-230 `clin: true` (an older or formal-speaking patient or relative, a department head, a
  conference question; the right reply models good practice: acknowledges first, asks openly, promises nothing). NO item
  with a hint of wanting to die or disappear in this file. Wrong replies are well-formed Japanese that does not fit.
Checks (from /home/claude/japanese, RELATIVE paths): `node --check ../work/new-0.29/<file>`,
`node tools/check-ja.js ../work/new-0.29/<file>` (0 errors); for G1, G2, G3, G5 also
`node ../work/chk-023.js . /home/claude/work/new-0.29/<file> | tail -15` (0 errors in lines naming your file); for G4 and G6 a
small node script of your own (in /tmp) that checks ids in sequence, counts, indexes in range, 4 options, `bad` ≠ `fix`.
