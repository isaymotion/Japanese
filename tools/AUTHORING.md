# Writing content for Hanashimashō (話しましょう)

Hanashimashō is the Japanese sister app of Usap Tayo (Tagalog) and Hablemos (Spanish): a web app that teaches an
English-speaking psychiatry resident Japanese from zero, with a heavy focus on grammar and vocabulary, and then the
psychiatric interview in Japanese. The learner is a **complete beginner** who cannot yet read kana. The app shows
furigana over every kanji, a romaji line under every sentence (generated automatically), and optional spaces between words.

All content lives in plain JavaScript files in `js/data/`. No build step. Every file must load with `node --check`.

## The Japanese notation (applies to EVERY Japanese string, in every file)

1. **Furigana on every kanji.** Put the reading in hiragana inside 《 》 directly after the kanji run it belongs to:
   `食《た》べます` `日本語《にほんご》` `今日《きょう》` `お薬《くすり》` `一人《ひとり》` `大丈夫《だいじょうぶ》`
   - One 《 》 per kanji run. Okurigana stays outside: `飲《の》みます`, `眠《ねむ》れません`, `気持《きも》ち`, `話《はな》し合《あ》う`.
   - Readings are **hiragana only** (even for on-yomi). Give the reading that is correct *in that sentence*
     (`今日《きょう》`, `一日《いちにち》` vs `一日《ついたち》`, `何《なに》` vs `何《なん》`, `方《かた》` vs `方《ほう》`,
     `行《い》って` vs `行《おこな》って`, `辛《つら》い` vs `辛《から》い`, `上手《じょうず》`, `大人《おとな》`, `明日《あした》`, `昨日《きのう》`, `一月《いちがつ》`, `二十歳《はたち》`).
     Apply rendaku and sound changes in the reading: `三百《さんびゃく》`, `六百《ろっぴゃく》`, `一本《いっぽん》`, `何人《なんにん》`, `時々《ときどき》`, `人々《ひとびと》`.
   - Numbers: write them in kanji with readings (`三時《さんじ》`, `二十歳《はたち》`, `一週間《いっしゅうかん》`). If you must use a digit, mark the
     base with a full-width bar: `｜3時《さんじ》`, `｜10分《じゅっぷん》`.
   - Katakana and hiragana words get no furigana.
   - Never leave a kanji without a reading, never put 《 》 after kana, never nest them.
2. **Spaces between words.** Separate words with ONE ordinary half-width space. Particles are their own word:
   `私《わたし》 は 医者《いしゃ》 です。` `病院《びょういん》 で 薬《くすり》 を もらいました。` `何《なに》 か 心配《しんぱい》 な こと は あります か。`
   - Separate: は が を に で へ と も の から まで より や か ね よ わ, the copula です / だ / でした / では ありません,
     auxiliaries written as their own verb (`食《た》べて います`, `飲《の》んで ください`, `行《い》く こと が できます`, `眠《ねむ》れない こと が あります`).
   - Keep together: a verb or adjective with its endings (`食《た》べました`, `食《た》べませんでした` → write `食《た》べません でした`,
     `眠《ねむ》れなかった`, `高《たか》くない`), prefixes お/ご with their word (`お名前《なまえ》`, `ご家族《かぞく》`), さん/先生 after a name
     (`田中《たなか》さん`), counters with their number (`三人《さんにん》`).
   - **は, へ and を as particles MUST be separate words** (the romaji is generated from this: a separate は becomes "wa").
     `では ありません` is written as `では` + space + `ありません`. こんにちは / こんばんは are single words.
   - No space before 。、？！ or after 「. Use Japanese punctuation (。、？！「」) in Japanese text.
   - A blank to fill in is written `＿` (one full-width underscore) as its own word.
3. **No romaji in Japanese fields.** The app generates it. In *English explanation* text you may write a romaji
   syllable in `<i>italics</i>` when teaching pronunciation, but when you cite Japanese, write Japanese (it gets its own romaji).
4. **Natural, standard Japanese** (Tokyo standard). Polite です/ます style unless the field says otherwise. Use kanji the way an
   adult normally writes (common jōyō kanji), and kana for words normally written in kana (ある, いる, できる, こと, とき, ください,
   ありがとう, いつ, どこ, なぜ, たくさん, もう, まだ). Do not write rare kanji just because one exists.
5. Quote characters: write Japanese strings in JS with backticks or double quotes; never put an unescaped quote of the same
   kind inside. English fields are plain English with no 《 》.

Examples of complete, correct strings:
```
私《わたし》 は ナバロ と 申《もう》します。
今日《きょう》 は どう されました か。
夜《よる》 は よく 眠《ねむ》れて います か。
いつ から 気分《きぶん》 が 落《お》ち込《こ》んで います か。
お薬《くすり》 は 毎日《まいにち》 飲《の》んで います か。
```

## Check your file before you finish

Run from the repo root (`/home/claude/japanese`):
```
node --check js/data/<file>.js
node tools/check-ja.js js/data/<file>.js
```
`check-ja.js` must report **0 errors**. Read every warning: "は attached to a word" means you forgot a space before the
particle (fix it) unless the word really ends in は as part of the word. Then re-read your Japanese once more for wrong
readings — the checker cannot tell `今日《こんにち》` from `今日《きょう》`. A wrong reading teaches the learner a wrong word,
so readings matter more than anything else in this app.

## Accuracy and tone

- This is teaching material for a doctor. Grammar explanations must be correct and standard (JLPT N5–N4 scope first).
  Prefer the plain, widely taught account over clever nuance. If unsure of a fact, leave it out.
- English is plain and direct. No filler, no exclamation marks, no emoji.
- Clinical phrases are original practice wording for training, polite and gentle, the way a Japanese psychiatrist speaks
  to an adult patient (です/ます, soft requests, 〜ていただけますか, 〜はありますか). They are not translations of validated instruments.
- Do not copy sentences from textbooks (Genki, Minna no Nihongo, Tae Kim, etc.). Write your own examples.
- Do not touch files other than the ones you were asked to write.

## Kanji files (`js/data/kanji-*.js`)

Each file adds one block to `window.KANJI_RAW`. One kanji per line, 7 or 8 fields separated by ` | `:

```
window.KANJI_RAW = window.KANJI_RAW || [];
KANJI_RAW.push({ level: 'N5', text: `
食 | eat, food | ショク | た.べる, く.う | 9 | Food and things | 食《た》べる=to eat; 食事《しょくじ》=meal; 食《た》べ物《もの》=food | optional note
`});
```

1. **Kanji**: the single character, alone.
2. **Meanings**: one to three short English keywords, most useful first.
3. **On readings**: katakana, separated by `・`. Only readings a learner at this level will meet; `-` if none.
4. **Kun readings**: hiragana, separated by `, `. A dot separates the part written with the kanji from the okurigana
   (`た.べる`, `おお.きい`, `ひと`). Only common readings; `-` if none.
5. **Stroke count**: a number.
6. **Group**: one of the group names given in your brief, spelled exactly.
7. **Words**: three example words (two to four allowed), separated by `; `, each `word=gloss`. Words are in the normal
   notation (furigana on every kanji, the reading that is right for that word). Every word must contain the kanji of the line.
   Choose common words at or below the level of the kanji, and prefer words a clinician meets (and words already in the
   app's dictionary, `js/data/dict-*.js`). Show different readings of the kanji across the words where they are common.
   A gloss is short plain English and contains no `;`, `=` or `|`.
8. **Note** (optional): one short factual sentence a learner needs, such as a look-alike kanji (`Do not confuse with 入《にゅう》 (enter).`),
   an irregular reading, or how the kanji is used clinically. Any kanji cited in the note needs furigana. Leave it out if there is nothing useful to say.

Level is `N5`, `N4`, `N3` or `C` (clinical set). JLPT levels for kanji are approximate: there is no official list.
`node tools/check-ja.js js/data/<file>.js` validates every field.

## Dictionary files: ids, order and checks

- A word's id is what flashcards and the mistakes deck store, so ids must never change.
  `dict-core.js`, `dict-everyday.js`, `dict-clinical.js` and `dict-more.js` are **frozen**: do not add or remove lines
  (their ids are their kana order among themselves). Fix a line in place only if its reading does not change.
- Every later file (`dict-kanji-1..5.js`, `dict-n3-1.js`, `dict-n3-2.js`, and any new one) is **append only**: add new
  words at the end of the last file or in a new file loaded after the others; never reorder or delete published lines.
- `check-ja.js` checks each line's part of speech, category and level against the lists in `js/core.js`
  (`POS`, `App.CATS`, `App.LEVELS`). Categories now include `society` (society, ideas and abstract words); school words
  go in `money`.
- Before adding words, check they are not already there under another spelling (kana or kanji):
  `grep -n "WORD" js/data/dict-*.js`. An entry whose Japanese and English both equal an earlier entry is dropped at load.
