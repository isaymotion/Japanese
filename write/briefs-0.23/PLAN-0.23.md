# Hanashimashō 0.23.0 plan: "More N5 and N4 grammar, six new drills"
Repo /home/claude/japanese (branch wip-0.23.0). Helpers /home/claude/devtools (qa/, write/), copies in /home/claude/work.
Rules that never change: tools/AUTHORING.md notation on EVERY Japanese string; all Japanese is draft; no medicine names,
doses or method detail in risk content; "the local crisis line", only number 119; "follow local law and your hospital's policy";
no git commands by agents; one agent = one file (coders: the files named in their brief).

## A. New data shapes (all files in js/data/, header comment says DRAFT FOR REVIEW)
1. Lessons (existing shape) get two optional fields:
   `after: '<lesson id>'` = show this lesson right after that one (js/data/lessons-zz-order.js re-sorts window.LESSONS);
   `review: true` = a unit review lesson (short recap body, quiz of 12).
2. `lesson-extra-N.js`: `window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], …3],   // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], …6],                          // extra example sentences
     quiz: [[q, [3 opts], idx, why], …6] } });`     // "More practice" set, same rules as lesson quizzes
3. `grammar-cloze-*.js`: `window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([
     { id:'c-n5-001', lv:'N5', l:'<lesson id>', s:'薬《くすり》 ＿ 飲《の》みます。', a:'を', opts:['を','に','が','で'], en:'I take medicine.', why:'…one sentence…' } ]);`
   `＿` is its own word; `a` is in `opts` (4 options, any position); filling `a` into `s` gives a correct natural sentence;
   every other option makes it ungrammatical or clearly the wrong meaning for `en`.
4. `grammar-transform-*.js`: `window.GRAMMAR_TRANSFORM = (window.GRAMMAR_TRANSFORM || []).concat([
     { id:'t-n5-001', lv:'N5', type:'neg', instr:'Make it negative.', from:'今日《きょう》 は 行《い》きます。', to:'今日《きょう》 は 行《い》きません。',
       alt:[], wrong:['…','…','…'], en:'I am not going today.', l:'<lesson id>' } ]);`
   `from` is a string, or an array of two sentences for joining. `to` = model answer, `alt` = other fully correct answers,
   `wrong` = exactly 3 well-formed Japanese sentences that do NOT follow the instruction (a different tense, form or meaning);
   never ungrammatical strings. `type` is one of: neg, past, pastneg, polite, plain, te-join, reason, contrast, want, request,
   potential, volitional, conditional, noun-mod, passive, causative, giving, keigo, formal, casual, nominalize, other.
5. `word-pairs-*.js`: `window.WORD_PAIRS = (window.WORD_PAIRS || []).concat([
     { id:'p-n5-001', lv:'N5', type:'opp', a:'大《おお》きい', ea:'big', b:'小《ちい》さい', eb:'small' },
     { id:'p-n5-041', lv:'N5', type:'col', a:'薬《くすり》 を', ea:'medicine', b:'飲《の》む', eb:'to take (medicine)', en:'to take medicine' },
     { id:'p-n4-021', lv:'N4', type:'syn', a:'…', ea:'…', b:'…', eb:'…', note:'difference in one line' } ]);`
6. `sound-words.js`: `window.SOUND_WORDS = { groups:[{ id:'pain', title:'Pain', note:'…' }, …], items:[
     { id:'s-001', w:'ズキズキ', en:'throbbing (pain)', g:'pain', lv:'N3', ex:'頭《あたま》 が ズキズキ します。', exen:'My head is throbbing.', note:'' } ] };`
Ids are permanent; files are append only after release.

## B. New pages (route, module, menu label)
- #/build      js/build.js      Sentence builder   (no new data: lesson .ex blocks, LESSON_EXTRA.more, DICT_EX; by level)
- #/cloze      js/cloze.js      Fill the blank     (GRAMMAR_CLOZE; by level or by lesson)
- #/transform  js/transform.js  Transform the sentence (GRAMMAR_TRANSFORM; choose or type)
- #/test       js/leveltest.js  Level review test  (mixed, timed, N5–N2; no new data)
- #/pairs      js/pairs.js      Word pairs         (WORD_PAIRS; match and quiz)
- #/sounds     js/soundwords.js Sound-symbolic words (SOUND_WORDS; learn, quiz, match)
- #/vocab      js/vocab.js      two new modes: "In context" (blank in an example sentence) and "Type it" (English → typed kana or romaji)
Scores: state.done.build / cloze / transform / test / pairs / sounds (best per key), shown on Progress "Practice scores".

## C. New lessons (21) and unit reviews
N5, file lessons-28.js, unit "Likes, amounts and frequency" (after `na-adjectives`):
  suki-jouzu (〜が 好き / 嫌い / 上手 / 下手 / わかる), frequency-degree (よく, 時々, あまり, 全然; とても, 少し, ちょっと),
  dake-shika (だけ, しか 〜ません, ぐらい / ごろ), indefinites (何か / 何も, 誰か / 誰も, どこか / どこも, いつも),
  mada-mou (まだ / もう with ました, ません, て います), then review-n5-likes (review: true)
N5, file lessons-29.js, unit "Linking and nuance" (after `linking`):
  ni-iku (ます-stem + に 行く / 来る / 帰る), prohibition (〜ては いけません, 〜ないで ください, 〜て も いい recap, signs),
  adverbs-ku-ni (早く, 静か に; 〜く / に する), conjunctions (そして, それから, でも, しかし, だから, それで, が / けど),
  ne-yo (ね, よ, よね, か, の; when よ sounds pushy to a patient), then review-n5-linking
N4, file lessons-30.js, unit "Listing, conditions and time" (after `nagara-mama-tokoro-bakari`):
  tari-toka (〜たり 〜たり する, とか, や … など), nara (なら vs たら), baai (〜場合 は; instructions and safety-netting),
  aida-made (間, 間 に, まで, まで に), then review-n4-listing
N4, file lessons-31.js, unit "Wishes, feelings and reported speech" (after `commands`):
  te-hoshii (〜て ほしい, 〜ないで ほしい, 〜て もらいたい), garu (〜がる, 〜たがる; other people's feelings),
  to-iu (N と いう N, 〜と いう こと, って), reported-requests (〜よう に 言う / 頼む / 伝える), then review-n4-wishes
N4, file lessons-32.js, unit "Degree, measure and compound verbs" (after `concession`):
  hodo-onaji (A は B ほど 〜ない, と 同じ, 同じ ぐらい, と 違って), compound-verbs (〜始める, 〜終わる, 〜続ける, 〜出す),
  sa-mi (〜さ, 〜み: 痛み, 重さ, 強さ; asking about severity), then review-n4-degree
Writers must first check the existing lessons for overlap (grep the pattern): build on and link back, never re-teach.
Reviews of existing units (id, unit, after):
  lessons-33.js N5: review-n5-first (First sentences: desu, no-mo-to, kosoado, question-words; after `question-words`),
    review-n5-numbers (Numbers and time; after `counters`), review-n5-verbs (Verbs; after `invitations`),
    review-n5-adjectives (Adjectives; after `na-adjectives`, BEFORE the new unit: the order file puts a review first),
    review-n5-te (The te-form; after `linking`)
  lessons-34.js N4: review-n4-plain (Plain forms; after `ta-form-plain`), review-n4-saying (Saying more: reasons … when-if; after `when-if`),
    review-n4-clinical (Clinical Japanese; after `interpreting`), review-n4-clauses (after `yasui-nikui-sugiru`),
    review-n4-seem (How things seem; after `probability`), review-n4-giving (after `te-ageru-kureru-morau`)
  lessons-35.js N4: review-n4-te (More て-forms; after `nagara-mama-tokoro-bakari`), review-n4-plans (after `commands`),
    review-n4-purpose (after `concession`), review-n4-passive (after `causative-passive`), review-n4-respect (after `kenjougo`)
A review lesson: level and unit of its unit, title "Review: <unit>", `review: true`, body 1,500–2,500 characters = one
summary table (pattern | job | one model sentence) + "Watch out" list of the 3–5 commonest confusions + 4–6 mixed example
sentences that combine patterns; quiz of exactly 12 mixed questions (3 options each) covering every lesson of the unit.

## D. Deepening the 56 existing N5 and N4 lessons (LESSON_EXTRA)
lesson-extra-1..8.js, 7 lessons each, in lesson order (list in each writer's task). Per lesson: 3 mistakes a beginner
really makes with THIS lesson's grammar, 6 more examples (3 clinical, 3 everyday; none repeating the lesson's own), 6 new quiz
questions (not repeating the lesson's).

## E. Drill data
grammar-cloze-n5.js (ids c-n5-…, 4 per N5 lesson incl. the 10 new = ~124), -n4a.js / -n4b.js (c-n4-…, 4 per N4 lesson, split in
lesson order, ~92 each; b starts at c-n4-201), -n3.js (c-n3-…, 5 per lesson = 120), -n2a.js / -n2b.js (c-n2-…, 4 per lesson, 96 each; b from c-n2-201).
grammar-transform-1.js (N5 70 + N4 50: t-n5-…, t-n4-001…), grammar-transform-2.js (N4 40 from t-n4-101, N3 45, N2 45).
word-pairs-1.js (N5 70, N4 70), word-pairs-2.js (N3 70, N2 70): about 40% opposites, 20% near-synonyms, 40% collocations.
sound-words.js: 90 words in 8–10 groups (pain, stomach and nausea, heart and breathing, dizziness and tiredness, mood and
irritation, anxiety and tension, sleep, speech and behaviour, weather and everyday), each with one example sentence.

## F. Added after the scaffold (binding)
- EVERY lesson in lessons-28..35 needs `after`: the first lesson of a new unit takes the anchor named in section C, each
  later lesson takes the id of the lesson before it, the unit's review takes the unit's last lesson. chk-023 reports a missing one.
- Scores (best % as a number): done.build['<lv>'] (N5|N4|N3|N2|all); done.cloze['<lv>'] or done.cloze['l:<lesson id>'];
  done.transform['<lv>:<choose|type>']; done.test['<lv>'] (the level test may keep its richer record under done.testInfo['<lv>']);
  done.pairs['<match|quiz>:<lv>']; done.sounds['<quiz|match>:<group id|all>']. V.progress already reads these.
- Fill a blank with App.fillBlank(s, a) and speak App.speak(App.fillBlank(s, a)) so the recorded clip is found.
- Lesson page links: a module may `App.lessonLinks.push((lesson) => htmlString)` ('' when nothing); V.lesson draws them under the quizzes.
- Lesson "More practice" best scores are in done.lessonMore[id]; LESSON_EXTRA is rendered by V.lesson.
- Two lesson ids changed because the N3 lessons already use them: the N4 compound-verb lesson is `compound-verbs-n4`
  (N3 has `compound-verbs`), the N4 と いう lesson is `to-iu-n4` (N3 has `to-iu`). Items about the N4 lessons use the -n4 ids.
