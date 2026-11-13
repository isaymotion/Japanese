# Voice review: Hanashimashō audio pack (ja-JP-NanamiNeural)

A: 0 furigana errors found at medium or high confidence (all 1,074 report lines read; counters, 何 なに/なん, okurigana and rendaku also checked by script across all 10,118 strings).
B: 5 voice-text problems (14 + 1 + 3 + 1 + 1 strings).
C: 9 risky kanji left as kanji in report lines; D: 17 risky spellings not sent in kana (mostly one-word cards with no context).

Source: report regenerated 2026-11-13 (`make_audio_pack.py --report`; 10,118 texts, 1,074 sent in a different spelling). The old file had 1,059 lines and has been replaced.

## A. Furigana errors in the app data

None at medium or high confidence. Lines checked and found acceptable: 何県《なにけん》/何市《なにし》, 何科《なにか》, 三十歳《さんじゅっさい》/九十歳《きゅうじゅっさい》/八十歳《はちじゅっさい》, 来棟《らいとう》, 十四人《じゅうよにん》, 二十四時間《にじゅうよじかん》, 四《よ》、五時間, 一《いっ》か月《げつ》, 四合瓶《よんごうびん》, 百六十《ひゃくろくじゅっ》キロ, 罰《ばち》 (both ばつ and ばち are used correctly in context), 入《はい》れる (the potential form of 入る), 何《なん》 に でも, 中《ちゅう》 くらい, 空笑《くうしょう》, 易刺激性《いしげきせい》, 談話心迫《しんぱく》.

## B. Voice-text problems

1. **The blank ＿ disappears, so the sentence starts with a particle or loses its slot (14 strings).** clean() turns ＿ into 、 and then strips it. Examples:
   - `ご自宅《じたく》 で 飲《の》む お薬《くすり》 は こちら です。 ＿ を 一日《いちにち》 一回《いっかい》…` → `…こちらです。を一日いっかい、毎晩飲んでください。`
   - `＿ に 外来《がいらい》 の 診察《しんさつ》 に 来《き》て ください。` → `に外来の診察に来てください。`
   - `分《わ》かりました。 ＿ から、 怒《おこ》って いらっしゃる の です ね。` → `分かりました。から、怒って…`
   - Also: `＿ です。 八歳《はっさい》 です。` → `です。はっさいです。` and `医師《いし》 の ＿ です。` → `医師の、です。`
   - Fix: send a spoken filler (e.g. まるまる) or a real pause in place of ＿.
2. **The pattern `〜 は どこ です か` becomes `はどこですか` (1 string).** When は opens the utterance, the voice is likely to say "ha", not "wa". This is the only string in all 10,118 that starts with particle は/へ. Fix: keep the particle in kana as わ, or start with a filler.
3. **Removing the 「」 glues words together (3 strings).**
   - `二《ふた》つ 以上《いじょう》 に 「はい」 と 答《こた》えた…` (2 strings) → `二つ以上にはいと答えた…`. This is likely to be heard as には + いと.
   - `「夜《よる》 なかなか 眠《ねむ》れない」 「朝《あさ》 起《お》きても…` → `夜なかなか眠れない朝起きても疲れが取れない`. The two quotes merge into one clause ("the morning when I can't sleep").
   - Fix: turn a 」「 boundary into 、, and put 、 around a short quoted word like はい.
4. **`サントス先生《せんせい》 は 何科《なにか》 です か。` → `…先生はなにかですか。` (1 string).** In kana this sounds like "Is Dr Santos something?". The reading is correct, but the kana removes the cue from the kanji. Keeping 何科 as kanji gives なんか, which is also acceptable; either choice is safer than なにか in kana.
5. **The stage-direction removal changes the meaning in one string (1 string).** `今《いま》 から 言《い》う 三《みっ》つ の 言葉《ことば》…… … （三《さん》 〜 五分後《ごふんご》） 先《さき》ほど の…` → `…言ってみてください。…先ほどの三つの言葉は何でしたか。` The 3–5 minute delay is lost and the recall question follows straight on. This is probably acceptable for a script line; noting it because it is the only removal that changes the meaning.

## C. Kanji left as kanji in report lines that the voice may misread

1. **方《かた》 left as kanji next to another 方 that was turned into kana; the voice may say ほう.**
   - `退院《たいいん》 が 近《ちか》づく と… 不安《ふあん》 に なる 方《かた》 も 少《すく》なく ありません。`
   - `体調《たいちょう》 の 悪《わる》い 方《かた》 又《また》は 発熱《はつねつ》 の ある 方《かた》 の 面会《めんかい》 は…`: the second 方
   - `気分《きぶん》 の 落《お》ち込《こ》み が 毎日《まいにち》 ずっと 続《つづ》く 方《かた》 も いれば…`: the first 方
   - `【お食事《しょくじ》 の 時間《じかん》】 … 制限《せいげん》 の ある 方《かた》 も いらっしゃいます ので…`
2. **止《と》める / 止《と》められない left as kanji; the voice may say やめる.**
   - `佐藤《さとう》さん に は 触《さわ》りません。 でも、 ここ で 誰《だれ》か が けが を する こと は 止《と》めなければ なりません。`
   - `…考《かんが》え が 次々《つぎつぎ》 に 頭《あたま》 に 浮《う》かんで、 止《と》められなかった こと は ある？` and the polite version ending `あります か。` (2 strings)
3. **空《あ》いて left as kanji; the voice may say すいて (3 strings).**
   - `来週《らいしゅう》 の 水曜日《すいようび》 は 空《あ》いて います か。`
   - `申《もう》し訳《わけ》 ございません。 … 木曜日《もくようび》 の 午後《ごご》 なら 空《あ》いて おります。`
   - `木曜日《もくようび》 の 午後《ごご》 は 何時《なんじ》 が 空《あ》いて います か。`
4. **二分《にふん》 left as kanji before から; the voice may say にぶん (4 strings).** These are the naloxone instructions: `二分《にふん》 から 三分《さんぷん》 で 反応《はんのう》 が なければ…`, which appears in ナロキソン を 手元《てもと》 に 置《お》いて ください (2 versions) and だれ か が オーバードーズ に なったら (2 versions). Only 三分 was turned into kana, so the pair also sounds uneven.
5. **一日《いちにち》 left as kanji with no context before it; the voice may say ついたち.**
   - `一日《いちにち》 一回《いっかい》` → `一日いっかい`
   - `ご自宅《じたく》 で 飲《の》む お薬《くすり》 は こちら です。 ＿ を 一日《いちにち》 一回《いっかい》…` and `家《いえ》 で 飲《の》む 薬《くすり》 は これ だ よ。 ＿ を 一日《いちにち》 一回《いっかい》…`. After the blank is removed, these start almost cold.
   - Opposite case, low risk: `退院《たいいん》 は 七月《しちがつ》 一日《ついたち》 です。` keeps 一日 as kanji, where the voice should say ついたち.
6. **その後《ご》 left as kanji; the voice may say そのあと.** `「その 後《ご》、 いかが です か。」 「おかげさま で…」`
7. **他《ほか》 left as kanji; the voice may say た.** `誰《だれ》 か を 殴《なぐ》った こと は ない よ。 でも 昨日《きのう》、 高速《こうそく》 で 他《ほか》 の 車《くるま》 に…`
8. **抱《だ》かせて left as kanji; the voice may say いだかせて.** `去年《きょねん》、 はるか に 子供《こども》 が 生《う》まれました。 初《はじ》めて 孫《まご》 を 抱《だ》かせて もらった 日《ひ》…`
9. **〜様《さま》 is sent as `様` alone; the voice may say よう.** The same applies to `〜目《め》` → `目` (low risk).

## D. Homograph spellings across all 10,118 strings that are not sent in kana

The default reading given for each is my estimate of what the voice would choose. One-word cards are the riskiest because they give no context.

1. **私《わたくし》** (1 card, `私`; the app otherwise uses わたし ×111, all sent as kana). The voice will say わたし. **High risk.**
2. **時《じ》** (1 card, `時`; 時《とき》 is sent as kana). The voice will likely say とき. Medium.
3. **年《ねん》** (1 card, `年`; とし ×3 is sent as kana). The voice will likely say とし. Medium.
4. **日《ひ》** (40 uses; the card `日《ひ》` is risky with no context, while uses in sentences are fine). The card alone may be read にち. Medium.
5. **月《つき》** (3 uses; the card `月` has no context). The card alone may be read げつ or がつ. Medium.
6. **他** (ほか ×4, た ×2). The card `他《ほか》` alone is likely read た, and `他《ほか》 の 車` (C7) may also be read た. `その他《た》` is fine either way. Medium.
7. **方** (かた ×57, ほう ×8; 24 かた and 6 ほう are kept as kanji). Beyond C1, the voice may say ほう in standalone uses such as `タバコ を 吸《す》う 方《かた》 は`, `見《み》て くださる 方《かた》 は どなた です か`, `山田《やまだ》 と いう 方《かた》 から`, `はじめて 来《こ》られる 方《かた》 へ`, `よく なる 方《かた》 は たくさん います` and `傷《きず》つけたい と 思《おも》う 方《かた》 は 少《すく》なく ありません`. Medium.
8. **止+め / 止+ま** (と ×25, ど ×7). The voice may say やめる in the card `止《と》める`, in `止《と》める 権利《けんり》 なんて ない`, in `自分《じぶん》 で 止《と》められない ん だ` and `止《と》められなく なる`, and in the C2 lines. Medium.
9. **空+い** (あ ×4, す ×1). The voice may say すいて in the C3 lines and in `今日《きょう》 ベッド が 空《あ》いて いる か どうか`. Medium.
10. **開+く / 開+い** (あ ×5 sent as kana, ひら ×3 kept). The card `開《ひら》く` alone may be read あく. `カフェ を 開《ひら》いた` may be read あいた. Medium.
11. **一日** (いちにち ×86: 51 kept as kanji, 35 as kana; ついたち ×2: 1 kept). The card `一日《いちにち》` and `一日《いちにち》 一回《いっかい》` may be read ついたち. Medium.
12. **後** (あと ×34, ご ×4; 3 ご kept). The voice may say あと in `その 後《ご》、 いかが です か` and `その 後《ご》、 良《よ》く なって います か`. The card `後《あと》` alone may be read ご. Medium.
13. **入+れ** (い ×38, はい ×2). The card `入《はい》れば` is kept as kanji and is likely read いれば. Medium.
14. **最中《さいちゅう》** (1 card). With no context the voice may say もなか. Medium.
15. **臭《くさ》い** (1 card). The voice may say におい. Medium.
16. **抱《だ》く** (1 card) and `抱《だ》かせて` (C8). The voice may say いだく. Medium.
17. **昨夜** (ゆうべ ×3 sent as kana, さくや ×3 kept as kanji). Each matches the furigana, but the voice may say ゆうべ for the さくや lines (`看護師《かんごし》 から、 昨夜《さくや》 は…`, `昨夜《さくや》 は 眠《ねむ》れず…`, and the card `昨夜`). Low to medium, and both readings are acceptable.

Not risky, though the readings are mixed: 何+か (なんかげつ is kept and is fine), 怒+り (いかり/おこり are read correctly in context), 腹 (お腹 / 腹が立つ), 入+っ, 気 (吐き気), 中, 人, 十, 分, 七, 九, 四 (the cards よん, なな and きゅう are fine), 家, 間, 紅葉, 罰, 薬, 滑+ら, 降+り, 頃, 飯.
