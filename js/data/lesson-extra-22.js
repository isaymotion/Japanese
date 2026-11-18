/* Lesson extras part 22 (1.0.0): common mistakes, more examples and a "More practice" quiz for existing N1 lessons
   (n1-to-areba, n1-nakushite, n1-ga-saigo, n1-to-iedomo, n1-de-are, n1-ni-hikikae).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n1-to-areba': {
    mistakes: [
      ["週末《しゅうまつ》 と あって、 早《はや》め に 予約《よやく》 して ください。", "週末《しゅうまつ》 です から、 早《はや》め に 予約《よやく》 して ください。", "〜と あって reports a cause and an observed result, so it cannot be followed by a request."],
      ["必要《ひつよう》 な と あれば、 紹介状《しょうかいじょう》 も お書《か》き します。", "必要《ひつよう》 と あれば、 紹介状《しょうかいじょう》 も お書《か》き します。", "Before と あれば a な-adjective takes its bare stem: 必要《ひつよう》 と あれば, not 必要《ひつよう》 な と あれば."],
      ["素人《しろうと》 いざ 知《し》らず、 プロ の 料理人《りょうりにん》 が 塩《しお》 と 砂糖《さとう》 を 間違《まちが》える とは。", "素人《しろうと》 なら いざ 知《し》らず、 プロ の 料理人《りょうりにん》 が 塩《しお》 と 砂糖《さとう》 を 間違《まちが》える とは。", "いざ 知《し》らず needs なら or は after the noun."]
    ],
    more: [
      ["必要《ひつよう》 と あれば、 次回《じかい》 の 診察《しんさつ》 を 早《はや》める こと も できます。", "If necessary, we can also bring your next appointment forward."],
      ["年末《ねんまつ》 と あって、 外来《がいらい》 は 朝《あさ》 から 混《こ》み合《あ》って いた。", "It being the end of the year, the outpatient clinic was crowded from the morning. (ward report)"],
      ["娘《むすめ》 の 頼《たの》み と あって は、 父《ちち》 も 受診《じゅしん》 を 断《ことわ》れなかった よう です。", "Since it was his daughter asking, it seems her father could not refuse to see a doctor. (a family member)"],
      ["孫《まご》 に 会《あ》える と あれば、 祖母《そぼ》 は どんなに 遠《とお》くて も 出《で》かけて いく。", "If it means seeing her grandchildren, my grandmother will go out however far it is."],
      ["人気《にんき》 の パン屋《や》 が 駅前《えきまえ》 に 新《あたら》しい 店《みせ》 を 出《だ》す と あって、 開店前《かいてんまえ》 から 長《なが》い 列《れつ》 が できて いた。", "With a popular bakery opening a new shop by the station, a long queue had formed before it opened. (news)"],
      ["旅行中《りょこうちゅう》 なら いざ 知《し》らず、 毎日《まいにち》 外食《がいしょく》 では お金《かね》 が 続《つづ》かない。", "On a trip it would be another matter, but eating out every day, the money will not last."]
    ],
    quiz: [
      ["You tell a patient that a nurse can also explain in detail if needed. Which is natural?", ["必要《ひつよう》 と あれば、 看護師《かんごし》 から も 詳《くわ》しく ご説明《せつめい》 します。", "必要《ひつよう》 と あって、 看護師《かんごし》 から も 詳《くわ》しく ご説明《せつめい》 します。", "必要《ひつよう》 なら いざ 知《し》らず、 看護師《かんごし》 から も 詳《くわ》しく ご説明《せつめい》 します。"], 0, "必要《ひつよう》 と あれば is the sayable \"if necessary\"; 〜と あって gives a cause, and いざ 知《し》らず sets an exception aside."],
      ["恩師《おんし》 の 退職《たいしょく》 記念《きねん》 パーティー と あって は、 欠席《けっせき》 する わけ に は いかない。 means:", ["Because it is only my teacher's party, I can skip it.", "Since it is my former teacher's retirement party, I can hardly stay away.", "If my teacher retires, I will hold a party for him."], 1, "〜と あって は: given that it is X, one cannot do otherwise."],
      ["久《ひさ》しぶり の 外泊《がいはく》 ＿、 患者《かんじゃ》 は 前日《ぜんじつ》 から 落《お》ち着《つ》かない 様子《ようす》 だった。", ["なら いざ 知《し》らず", "と あれば", "と あって"], 2, "A special situation given as the cause of an observed past scene is 〜と あって (case-note style)."],
      ["子《こ》ども ＿ いざ 知《し》らず、 大人《おとな》 が この 説明《せつめい》 を 読《よ》めない はず は ない。", ["は", "を", "に"], 0, "いざ 知《し》らず follows a noun + は or なら: 子《こ》ども は いざ 知《し》らず."],
      ["昔《むかし》 の 携帯電話《けいたいでんわ》 なら いざ 知《し》らず、 今《いま》 の スマホ で この 機能《きのう》 が ない の は 不便《ふべん》 だ。 means:", ["Old phones lacked it too, so it does not matter.", "Old phones might be another matter, but a modern smartphone without this feature is inconvenient.", "Old phones are inconvenient because they lack this feature."], 1, "〜なら いざ 知《し》らず excuses X as an exception and then judges the present case."],
      ["A patient's daughter says 母《はは》 の ため と あれば、 仕事《しごと》 を 休《やす》んで でも 付《つ》き添《そ》います。 What is she saying?", ["She cannot take time off, even for her mother.", "If her mother asks her to, she will go to work.", "For her mother's sake, she will stay with her even if it means taking time off work."], 2, "〜と あれば gives a reason worth the effort, followed by strong willingness."]
    ]
  },
  'n1-nakushite': {
    mistakes: [
      ["先生《せんせい》 の ご指導《しどう》 なくして、 論文《ろんぶん》 を 書《か》き上《あ》げました。", "先生《せんせい》 の ご指導《しどう》 なくして、 論文《ろんぶん》 は 書《か》き上《あ》げられません でした。", "〜なくして needs a negative or \"impossible\" ending: it says X was essential."],
      ["何《なん》 でも 相談《そうだん》 できる 相手《あいて》 は、 姉《あね》 を おいて です。", "何《なん》 でも 相談《そうだん》 できる 相手《あいて》 は、 姉《あね》 を おいて ほか に いません。", "〜を おいて cannot end the sentence: \"no one but X\" is 〜を おいて ほか に いない / ない."],
      ["彼《かれ》 は 挨拶《あいさつ》する なし に 帰《かえ》って しまった。", "彼《かれ》 は 挨拶《あいさつ》 なし に 帰《かえ》って しまった。", "なし に follows a noun; after a verb use 〜こと なく or 〜ず に."]
    ],
    more: [
      ["多職種《たしょくしゅ》 の 連携《れんけい》 なくして は、 退院《たいいん》 支援《しえん》 は 進《すす》まない。", "Without cooperation between professions, discharge support cannot move forward. (conference talk)"],
      ["面会《めんかい》 は、 事前《じぜん》 の 予約《よやく》 なし に は お受《う》け できません。", "Visits cannot be accepted without a booking in advance. (ward notice)"],
      ["この 地域《ちいき》 で 思春期《ししゅんき》 の 入院《にゅういん》 治療《ちりょう》 を お願《ねが》い できる の は、 貴院《きいん》 を おいて ほか に ございません。", "In this area, there is nowhere but your hospital we can ask for adolescent inpatient care. (referral letter)"],
      ["地元《じもと》 の 人々《ひとびと》 の 協力《きょうりょく》 なくして、 この 祭《まつ》り は 続《つづ》けられなかった だろう。", "Without the help of local people, this festival could not have continued."],
      ["弟《おとうと》 は 何《なん》 の 相談《そうだん》 も なし に 仕事《しごと》 を 辞《や》めて しまった。", "My younger brother quit his job without a word of discussion with anyone."],
      ["家族《かぞく》 旅行《りょこう》 の 行《い》き先《さき》 は、 子《こ》どもたち の 意見《いけん》 を 抜《ぬ》き に して は 決《き》められない。", "We cannot decide where the family trip goes while leaving the children's opinions out."]
    ],
    quiz: [
      ["ご本人《ほんにん》 の 同意《どうい》 ＿、 治療《ちりょう》 の 方針《ほうしん》 を 決《き》める こと は できない。", ["を おいて", "なくして", "なら まだしも"], 1, "\"Without X, Y cannot be\" is 〜なくして + a negative."],
      ["友人《ゆうじん》 が 困《こま》って いる と 聞《き》けば、 何《なに》 を おいて も 駆《か》けつけます。 means:", ["If I hear a friend is in trouble, I drop everything and rush over.", "If I hear a friend is in trouble, I go after putting everything away.", "If I hear a friend is in trouble, I leave everything to someone else."], 0, "何《なに》 を おいて も means \"before anything else\"."],
      ["Which sentence from a case conference is natural?", ["睡眠《すいみん》 の 問題《もんだい》 を 抜《ぬ》き に して は、 この 方《かた》 の 不調《ふちょう》 は よく 説明《せつめい》 できる。", "睡眠《すいみん》 の 問題《もんだい》 を 抜《ぬ》き に して は、 この 方《かた》 の 不調《ふちょう》 を 説明《せつめい》 しましょう。", "睡眠《すいみん》 の 問題《もんだい》 を 抜《ぬ》き に して は、 この 方《かた》 の 不調《ふちょう》 は 説明《せつめい》 できない。"], 2, "〜を 抜《ぬ》き に して は needs a negative or \"impossible\" ending: leaving X out, it cannot be explained."],
      ["A recommendation letter: この 役職《やくしょく》 に ふさわしい の は、 ＿。", ["吉田《よしだ》先生《せんせい》 なし に いません", "吉田《よしだ》先生《せんせい》 を おいて ほか に いません", "吉田《よしだ》先生《せんせい》 を 抜《ぬ》き に して いません"], 1, "\"No one but X\" is 〜を おいて ほか に いない."],
      ["練習《れんしゅう》 なくして 上達《じょうたつ》 なし。 means:", ["Without practice there is no progress.", "Practice brings no progress.", "Progress comes even without practice."], 0, "〜なくして + a negative says X is essential."],
      ["Chatting with a friend: 昨日《きのう》 は 傘《かさ》 ＿ 出《で》かけちゃった。", ["抜《ぬ》き に して は", "なくして は", "なし で"], 2, "In casual speech \"without\" is 〜なし で; 〜抜《ぬ》き に して は and 〜なくして は need a negative ending."]
    ]
  },
  'n1-ga-saigo': {
    mistakes: [
      ["一度《いちど》 この ゲーム を 始《はじ》める が 最後《さいご》、 なかなか やめられない。", "一度《いちど》 この ゲーム を 始《はじ》めた が 最後《さいご》、 なかなか やめられない。", "〜が 最後《さいご》 follows the た-form of the verb."],
      ["夜更《よふ》かし の 癖《くせ》 は 一度《いちど》 ついたら 最後《さいご》、 すぐ に 直《なお》る。", "夜更《よふ》かし の 癖《くせ》 は 一度《いちど》 ついたら 最後《さいご》、 なかなか 直《なお》らない。", "〜たら 最後《さいご》 needs a result that lasts and cannot easily be undone."],
      ["休《やす》み が 取《と》れたら 取《と》れる で、 何《なに》 を すれば いい か わからない。", "休《やす》み が 取《と》れたら 取《と》れた で、 何《なに》 を すれば いい か わからない。", "In 〜たら 〜た で the same verb is repeated in the た-form."]
    ],
    more: [
      ["息子《むすこ》 は 一度《いちど》 昼夜《ちゅうや》 が 逆転《ぎゃくてん》 したら 最後《さいご》、 なかなか 元《もと》 に 戻《もど》らない ん です。", "Once my son's days and nights get reversed, it is very hard to get him back. (a parent)"],
      ["物忘《ものわす》れ だけ なら まだしも、 最近《さいきん》 は 夜中《よなか》 に 外《そと》 へ 出《で》よう と する ので、 目《め》 が 離《はな》せません。", "Forgetfulness alone would be one thing, but lately he tries to go out in the night, so I cannot take my eyes off him. (a family member)"],
      ["薬《くすり》 が 減《へ》ったら 減《へ》った で、 また 眠《ねむ》れなく なる ん じゃ ない か と 心配《しんぱい》 に なります。", "Now that my medicine has been reduced, I start worrying that I will not be able to sleep again. (a patient)"],
      ["母《はは》 は 約束《やくそく》 の 時間《じかん》 に 少《すこ》し でも 遅《おく》れよう もの なら、 すぐ 機嫌《きげん》 が 悪《わる》く なる。", "If I am even a little late for an arrangement, my mother's mood turns sour at once."],
      ["この 推理《すいり》 小説《しょうせつ》 は、 読《よ》み始《はじ》めた が 最後《さいご》、 結末《けつまつ》 まで 本《ほん》 を 置《お》けない。", "Once you start this mystery novel, you cannot put it down until the end."],
      ["仕事《しごと》 が 忙《いそが》しい と 疲《つか》れる し、 暇《ひま》 なら 暇《ひま》 で 何《なに》 を して いい か わからなく なる。", "When work is busy I get tired, and when I am free, then I do not know what to do with myself."]
    ],
    quiz: [
      ["一度《いちど》 機械《きかい》 の 電源《でんげん》 を ＿ が 最後《さいご》、 設定《せってい》 は すべて 消《き》えて しまう。", ["切《き》る", "切《き》った", "切《き》ろう"], 1, "〜が 最後《さいご》 follows the た-form: 切《き》った が 最後《さいご》."],
      ["引《ひ》っ越《こ》したら 引《ひ》っ越《こ》した で、 今度《こんど》 は 近所《きんじょ》 付《つ》き合《あ》い が 大変《たいへん》 だ。 means:", ["Now that I have moved, dealing with the neighbours is a new burden.", "If I move, dealing with the neighbours will be easier.", "I moved because dealing with the neighbours was hard."], 0, "〜たら 〜た で: even when it happens, then there is something else."],
      ["Which line about a fever makes sense?", ["微熱《びねつ》 が 最後《さいご》、 すぐ に 病院《びょういん》 で 診《み》て もらう べき だ。", "微熱《びねつ》 なら まだしも、 高《たか》い 熱《ねつ》 も 心配《しんぱい》 いらない。", "微熱《びねつ》 なら まだしも、 これ ほど 高《たか》い 熱《ねつ》 は すぐ に 病院《びょういん》 で 診《み》て もらう べき だ。"], 2, "〜なら まだしも: X would be acceptable, but this is too much; 〜が 最後《さいご》 needs a verb in the た-form."],
      ["この 編集長《へんしゅうちょう》 は、 原稿《げんこう》 に 一《ひと》つ でも 誤字《ごじ》 が ＿ もの なら、 全部《ぜんぶ》 書《か》き直《なお》させる。", ["あろう", "ある", "あった"], 0, "〜よう もの なら takes the volitional form: あろう もの なら."],
      ["A parent says 息子《むすこ》 は ゲーム を 始《はじ》めたら 最後《さいご》、 食事《しょくじ》 も 忘《わす》れて しまう ん です。 What does this mean?", ["He forgets his meals only at the end of a game.", "Once he starts a game, he cannot stop, and even forgets to eat.", "He plays games last, after his meals."], 1, "〜たら 最後《さいご》: once it starts, there is no stopping."],
      ["Which reply to that parent is natural?", ["一度《いちど》 始《はじ》める が 最後《さいご》、 やめられない ん です ね。", "一度《いちど》 始《はじ》めたら 始《はじ》めた で、 やめられない ん です ね。", "一度《いちど》 始《はじ》める と、 なかなか やめられない ん です ね。"], 2, "Reflect with plain 一度《いちど》 〜と、 なかなか 〜ない; が 最後《さいご》 needs the た-form, and 〜たら 〜た で means something else."]
    ]
  },
  'n1-to-iedomo': {
    mistakes: [
      ["薬《くすり》 を 飲《の》んだ もの を、 熱《ねつ》 は 下《さ》がらなかった。", "薬《くすり》 を 飲《の》んだ ものの、 熱《ねつ》 は 下《さ》がらなかった。", "ものの (although) states a fact and then a contrast; もの を laments a chance that was missed."],
      ["若《わか》い と いえども、 寝不足《ねぶそく》 が 続《つづ》けば 体《からだ》 に 響《ひび》きます よ。", "若《わか》くて も、 寝不足《ねぶそく》 が 続《つづ》けば 体《からだ》 に 響《ひび》きます よ。", "Grammatical but と いえども is written and stiff; to a patient say 〜ても or 〜でも."],
      ["熱《ねつ》 が 下《さ》がった とは いえ、 もう すっかり 元気《げんき》 です。", "熱《ねつ》 が 下《さ》がった とは いえ、 まだ 体《からだ》 は だるい です。", "〜とは いえ grants a fact and then limits it, so the second half must go against what you would expect."]
    ],
    more: [
      ["新人《しんじん》 と いえども、 患者《かんじゃ》さん から 見《み》れば 一人《ひとり》 の 医師《いし》 で ある。", "Even a new doctor is, in the patient's eyes, a doctor like any other. (a senior's talk)"],
      ["検査《けんさ》 の 結果《けっか》 は 問題《もんだい》 ありません でした。 とは いえ、 気《き》 に なる 症状《しょうじょう》 が あれば、 いつ でも おっしゃって ください。", "Your test results showed no problems. That said, if any symptom worries you, please tell me at any time."],
      ["微力《びりょく》 ながら、 退院後《たいいんご》 の 支援《しえん》 に も 協力《きょうりょく》 させて いただきます。", "In my own small way, I will also help with support after discharge. (letter)"],
      ["早《はや》く 家《いえ》 を 出《で》れば 間《ま》に合《あ》った もの を、 つい 寝坊《ねぼう》 して しまった。", "If only I had left home early, I would have made it, but I overslept. (about oneself)"],
      ["たとえ 一円《いちえん》 と いえども、 会社《かいしゃ》 の お金《かね》 を 私的《してき》 に 使《つか》って は ならない。", "Even a single yen of company money must not be used for private purposes."],
      ["仕事《しごと》 に 慣《な》れて きた とは いえ、 まだ 一人《ひとり》 で 任《まか》される の は 不安《ふあん》 だ。", "I may be getting used to the job, but being left to handle it alone still makes me uneasy."]
    ],
    quiz: [
      ["雪《ゆき》 が やんだ ＿、 道《みち》 は まだ 凍《こお》って いて 危《あぶ》ない。", ["とは いえ", "もの を", "ながら"], 0, "A fact, then a limit to it: 〜とは いえ; concessive ながら does not follow a た-form, and もの を laments a missed chance."],
      ["一言《ひとこと》 謝《あやま》れば 済《す》んだ もの を、 彼《かれ》 は 意地《いじ》 を 張《は》って しまった。 means:", ["He apologised once, so the matter was settled.", "One apology would have settled it, but he dug his heels in.", "Although he was stubborn, he apologised in the end."], 1, "〜ば … た もの を laments a better outcome that was missed."],
      ["A guideline: ベテラン ＿、 確認《かくにん》 を 怠《おこた》って は ならない。", ["もの を", "と あって", "と いえども"], 2, "\"Even X is not exempt from the rule\" is 〜と いえども."],
      ["Which sentence means \"If only I had checked, I would have noticed\"?", ["確認《かくにん》 した ものの、 気《き》づかなかった。", "確認《かくにん》 すれば 気《き》づいた もの を。", "確認《かくにん》 した とは いえ、 気《き》づいた。"], 1, "〜ば … た もの を is \"if only\"; ものの is \"although\"."],
      ["手術《しゅじゅつ》 は 無事《ぶじ》 に 終《お》わった。 とは いえ、 油断《ゆだん》 は できない。 means:", ["The operation went well. That said, we cannot relax yet.", "Because the operation went well, we can relax.", "The operation did not go well, so we cannot relax."], 0, "Sentence-initial とは いえ、 means \"that said\"."],
      ["Opening a short self-introduction politely: 簡単《かんたん》 ＿、 自己紹介《じこしょうかい》 を させて いただきます。", ["もの を", "と いえども", "ながら"], 2, "簡単《かんたん》 ながら (brief though it is) is a set phrase of concessive ながら."]
    ]
  },
  'n1-de-are': {
    mistakes: [
      ["何《なに》 を 食《た》べる で あれ、 よく 噛《か》む こと が 大切《たいせつ》 だ。", "何《なに》 を 食《た》べよう と、 よく 噛《か》む こと が 大切《たいせつ》 だ。", "で あれ follows nouns; after a verb use the volitional + と or が."],
      ["彼《かれ》 が 行《い》こう が 行《い》かまい が、 私《わたし》 は 参加《さんか》 する つもり だ。", "彼《かれ》 が 行《い》こう が 行《い》くまい が、 私《わたし》 は 参加《さんか》 する つもり だ。", "With a group 1 verb, まい follows the dictionary form: 行《い》くまい, not 行《い》かまい."],
      ["どんな 小《ちい》さな こと で あれ、 気《き》 に なる こと が あれば 教《おし》えて ください。", "どんな 小《ちい》さな こと でも、 気《き》 に なる こと が あれば 教《おし》えて ください。", "Grammatical but で あれ is written; to a patient say 〜でも."]
    ],
    more: [
      ["経験《けいけん》 年数《ねんすう》 が 何年《なんねん》 で あれ、 申《もう》し送《おく》り では 必《かなら》ず 復唱《ふくしょう》 する こと。", "However many years of experience you have, always repeat back what you hear at handover. (ward rule)"],
      ["いかに 忙《いそが》しかろう と、 患者《かんじゃ》さん の 話《はなし》 を 途中《とちゅう》 で 遮《さえぎ》って は いけない。", "However busy you are, you must not cut patients off in the middle of what they are saying. (a senior's advice)"],
      ["外来《がいらい》 で あれ 入院《にゅういん》 で あれ、 治療《ちりょう》 の 目標《もくひょう》 は 変《か》わりません。", "Outpatient or inpatient, the goal of treatment stays the same. (leaflet; in speech, 外来《がいらい》 でも 入院《にゅういん》 でも)"],
      ["どこ に 住《す》もう と、 人付《ひとづ》き合《あ》い の 悩《なや》み は ついて くる もの だ。", "Wherever you live, worries about getting on with people follow you."],
      ["売《う》れよう が 売《う》れまい が、 自分《じぶん》 が 書《か》きたい 小説《しょうせつ》 を 書《か》く。", "Whether it sells or not, I will write the novel I want to write."],
      ["たとえ 冗談《じょうだん》 で あれ、 人《ひと》 の 外見《がいけん》 を からかう の は よくない。", "Even as a joke, making fun of someone's appearance is not right."]
    ],
    quiz: [
      ["いくら ＿ が、 父《ちち》 は たばこ を やめよう と しない。", ["説得《せっとく》されよう", "説得《せっとく》される", "説得《せっとく》されまい"], 0, "\"No matter how much\" takes いくら + the volitional + が."],
      ["相手《あいて》 が 子《こ》ども で あろう と、 約束《やくそく》 は 守《まも》る べき だ。 means:", ["Because the other person is a child, the promise need not be kept.", "Even if the other person is a child, a promise should be kept.", "If the other person were a child, I would keep my promise."], 1, "〜で あろう と means \"even if it is X\"."],
      ["Which sentence is natural?", ["何《なに》 が ある で あれ、 明日《あした》 の 会議《かいぎ》 に は 出《で》ます。", "何《なに》 が ある が、 明日《あした》 の 会議《かいぎ》 に は 出《で》ます。", "何《なに》 が あろう と、 明日《あした》 の 会議《かいぎ》 に は 出《で》ます。"], 2, "After a verb, \"no matter what\" is the volitional + と: あろう と; で あれ follows nouns."],
      ["The plain spoken equivalent of 来《こ》よう が 来《く》るまい が is:", ["来《き》て も 来《こ》なくて も", "来《き》たら 来《こ》ない で", "来《く》る なら 来《こ》ない"], 0, "〜よう が 〜まい が is said 〜ても 〜なくて も."],
      ["You tell a patient that either a phone call or an email is fine for changing an appointment. Which fits?", ["電話《でんわ》 で あれ メール で あれ、 ご連絡《れんらく》 ください。", "お電話《でんわ》 でも メール でも、 ご連絡《れんらく》 いただければ 大丈夫《だいじょうぶ》 です。", "電話《でんわ》 で あろう が メール で あろう が、 連絡《れんらく》 して ください。"], 1, "To a patient say 〜でも 〜でも; 〜で あれ 〜で あれ is written, and 〜で あろう が sounds forceful."],
      ["どんなに 疲《つか》れて いよう と、 寝《ね》る 前《まえ》 に 日記《にっき》 を 書《か》く こと に して いる。 means:", ["If I am tired, I write my diary before bed.", "I write my diary before bed only when I am not tired.", "However tired I am, I make a point of writing my diary before bed."], 2, "どんなに + volitional + と is \"no matter how\"."]
    ]
  },
  'n1-ni-hikikae': {
    mistakes: [
      ["合格点《ごうかくてん》 とは 言《い》わない まで も、 満点《まんてん》 は 取《と》りたい。", "満点《まんてん》 とは 言《い》わない まで も、 合格点《ごうかくてん》 は 取《と》りたい。", "In 〜ない まで も, A is the bigger thing not reached and B the smaller step that is."],
      ["去年《きょねん》 の 冬《ふゆ》 が 暖《あたた》か だった に ひきかえ、 今年《ことし》 は 雪《ゆき》 が 多《おお》い。", "去年《きょねん》 の 冬《ふゆ》 が 暖《あたた》か だった の に ひきかえ、 今年《ことし》 は 雪《ゆき》 が 多《おお》い。", "Before に ひきかえ a clause needs の: 暖《あたた》か だった の に ひきかえ."],
      ["今年《ことし》 の 夏《なつ》 は 去年《きょねん》 も まして 暑《あつ》い。", "今年《ことし》 の 夏《なつ》 は 去年《きょねん》 に も まして 暑《あつ》い。", "The pattern is A に も まして; the に cannot be dropped."]
    ],
    more: [
      ["前回《ぜんかい》 の 面接《めんせつ》 で 口数《くちかず》 が 少《すく》なかった の に ひきかえ、 本日《ほんじつ》 は 自発的《じはつてき》 な 発言《はつげん》 が 多《おお》く 見《み》られた。", "In contrast to the previous interview, when he said little, today there was a good deal of spontaneous speech. (progress note)"],
      ["不規則《ふきそく》 な 勤務《きんむ》 が 飲酒《いんしゅ》 習慣《しゅうかん》 と 相《あい》まって、 睡眠《すいみん》 の 質《しつ》 を 低下《ていか》 させて いた と 考《かんが》えられる。", "Irregular shifts, combined with a drinking habit, seem to have lowered the quality of his sleep. (case summary)"],
      ["一人《ひとり》 で の 外出《がいしゅつ》 は まだ できない まで も、 看護師《かんごし》 と 一緒《いっしょ》 なら 病棟《びょうとう》 の 外《そと》 を 少《すこ》し 歩《ある》けます よ。", "You can't go out on your own yet, but with a nurse you can at least walk a little outside the ward."],
      ["今日《きょう》 の 駅前《えきまえ》 は いつ に も まして 人《ひと》 が 多《おお》い。", "There are even more people than usual in front of the station today."],
      ["昨日《きのう》 は 一日中《いちにちじゅう》 雨《あめ》 だった。 それ に ひきかえ、 今日《きょう》 は 雲《くも》 一《ひと》つ ない 晴天《せいてん》 だ。", "Yesterday it rained all day. Today, by contrast, the sky is clear without a single cloud."],
      ["静《しず》か な 音楽《おんがく》 と 柔《やわ》らか な 照明《しょうめい》 が 相《あい》まって、 落《お》ち着《つ》いた 雰囲気《ふんいき》 の 店《みせ》 だ。", "The quiet music together with the soft lighting gives the shop a calm atmosphere."]
    ],
    quiz: [
      ["完全《かんぜん》 に 元《もと》 どおり ＿、 日常《にちじょう》 生活《せいかつ》 に は 困《こま》らない 程度《ていど》 に 回復《かいふく》 した。", ["と 相《あい》まって", "に も まして", "とは 言《い》わない まで も"], 2, "\"If not fully back to normal, at least enough for daily life\" is 〜とは 言《い》わない まで も."],
      ["天候《てんこう》 不順《ふじゅん》 と 人手不足《ひとでぶそく》 が 相《あい》まって、 野菜《やさい》 の 値段《ねだん》 が 上《あ》がって いる。 means:", ["Bad weather and a labour shortage together are pushing up vegetable prices.", "Despite bad weather and a labour shortage, vegetable prices are falling.", "Unlike the labour shortage, bad weather is pushing up vegetable prices."], 0, "A と B が 相《あい》まって: two causes acting together."],
      ["今年《ことし》 の 新人《しんじん》 は 例年《れいねん》 ＿ 意欲的《いよくてき》 だ。", ["ない まで も", "に も まして", "と 相《あい》まって"], 1, "\"Even more than in other years\" is 〜に も まして."],
      ["Which sentence is natural?", ["緊張《きんちょう》 と 慣《な》れない 環境《かんきょう》 に ひきかえ、 入院《にゅういん》 初日《しょにち》 は ほとんど 眠《ねむ》れなかった。", "緊張《きんちょう》 と 慣《な》れない 環境《かんきょう》 に も まして、 入院《にゅういん》 初日《しょにち》 は ほとんど 眠《ねむ》れなかった。", "緊張《きんちょう》 と 慣《な》れない 環境《かんきょう》 が 相《あい》まって、 入院《にゅういん》 初日《しょにち》 は ほとんど 眠《ねむ》れなかった。"], 2, "Two factors acting together is A と B が 相《あい》まって; に ひきかえ needs a contrast, and に も まして needs something to compare with."],
      ["何《なに》 に も まして うれしかった の は、 母《はは》 が 笑顔《えがお》 を 取《と》り戻《もど》した こと だ。 means:", ["What made me happiest of all was that my mother smiled again.", "Nothing made me happy, not even my mother's smile.", "I was happier than my mother when she smiled."], 0, "何《なに》 に も まして means \"above all, more than anything\"."],
      ["A patient says jogging every day is too much. Which suggestion is natural?", ["毎日《まいにち》 ジョギング する に ひきかえ、 散歩《さんぽ》 して みましょう。", "ジョギング とは 言《い》わない まで も、 少《すこ》し 歩《ある》いて みましょう か。", "ジョギング とは 言《い》う まで も、 少《すこ》し 歩《ある》いて みましょう か。"], 1, "Noun + とは 言《い》わない まで も: if not jogging, at least a little walking; the negative cannot be dropped."]
    ]
  }
});
