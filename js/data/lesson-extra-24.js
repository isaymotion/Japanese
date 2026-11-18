/* Lesson extras part 24 (1.0.0): common mistakes, more examples and a "More practice" quiz for existing N1 lessons
   (n1-bekarazu, n1-wo-yoginaku, n1-ni-katakunai, n1-de-nakute-nan-darou, n1-kirai-ga-aru, n1-ni-shite).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n1-bekarazu': {
    mistakes: [
      ["再発《さいはつ》 を 防《ふせ》ぐ べく、 お薬《くすり》 を 続《つづ》けて ください。", "再発《さいはつ》 を 防《ふせ》ぐ ため に、 お薬《くすり》 を 続《つづ》けて ください。", "〜べく cannot be followed by a request, and it is written style; to a patient say 〜ため に."],
      ["健康《けんこう》 は 幸福《こうふく》 に 欠《か》く べからず 条件《じょうけん》 だ。", "健康《けんこう》 は 幸福《こうふく》 に 欠《か》く べからざる 条件《じょうけん》 だ。", "Before a noun the form is べからざる; べからず only ends a sentence."],
      ["この お部屋《へや》 に は 入《はい》る べからず。", "この お部屋《へや》 に は 入《はい》らないで ください。", "Grammatical but べからず belongs to old signs and sayings; to a patient say 〜ないで ください."]
    ],
    more: [
      ["患者《かんじゃ》 の 尊厳《そんげん》 を 守《まも》る こと は、 医療《いりょう》 に 欠《か》く べからざる 姿勢《しせい》 で ある。", "Protecting the patient's dignity is an indispensable attitude in medicine. (written)"],
      ["地域《ちいき》 と の 連携《れんけい》 を 強化《きょうか》 す べく、 毎月《まいつき》 合同《ごうどう》 カンファレンス を 開催《かいさい》 して いる。", "To strengthen links with the community, we hold a joint conference every month. (hospital report)"],
      ["当時《とうじ》 の 医療《いりょう》 では、 早期《そうき》 の 診断《しんだん》 など 望《のぞ》む べく も なかった。", "With the medicine of those days, an early diagnosis was not to be hoped for. (essay)"],
      ["ここ に ごみ を 捨《す》てる べからず。", "Do not dump rubbish here. (old sign)"],
      ["新幹線《しんかんせん》 の 速《はや》さ は、 昔《むかし》 の 急行《きゅうこう》 と は 比《くら》べる べく も ない。", "The speed of the bullet train is beyond any comparison with the old express trains."],
      ["試合中《しあいちゅう》 に 審判《しんぱん》 を 侮辱《ぶじょく》 する の は、 スポーツ 選手《せんしゅ》 に ある まじき 態度《たいど》 だ。", "Insulting the referee during a match is behaviour unworthy of an athlete. (sports column)"]
    ],
    quiz: [
      ["彼《かれ》 の 誠実《せいじつ》さ は 疑《うたが》う べく も ない。 means:", ["His sincerity should be doubted.", "His sincerity is beyond any doubt.", "He cannot bring himself to doubt anyone."], 1, "〜べく も ない means \"cannot possibly\": there is no way to doubt it."],
      ["十分《じゅうぶん》 な 睡眠《すいみん》 は、 心身《しんしん》 の 健康《けんこう》 に 欠《か》く ＿ 要素《ようそ》 で ある。", ["べからず", "べからざる", "べく"], 1, "Before a noun (要素《ようそ》) the form is べからざる; べからず ends a sentence and べく means \"in order to\"."],
      ["A patient on the ward asks if she may go into the staff room. Which reply fits?", ["入《はい》る べからず です。", "入《はい》る まじき です。", "申《もう》し訳《わけ》 ありません が、 こちら に は 入《はい》らないで ください。"], 2, "To a patient say 〜ないで ください; べからず does not take です, and まじき needs a noun and condemns."],
      ["業務《ぎょうむ》 を 効率化《こうりつか》 ＿、 新《あたら》しい システム を 導入《どうにゅう》 した。", ["す べく", "し べく", "させ べく"], 0, "With a する-verb the usual form is す べく; べく follows the dictionary form, never the ます-stem."],
      ["Where would you expect to read 公務員《こうむいん》 に ある まじき 行為《こうい》?", ["In a news report on misconduct.", "In a doctor's greeting to a new patient.", "In a weather forecast."], 0, "まじき condemns conduct and belongs to news and ethics texts; it is never aimed at a patient."],
      ["あの チーム は 勝《か》つ べく して 勝《か》った。 means:", ["That team won by sheer luck.", "That team should have won but did not.", "That team won, as it was bound to."], 2, "〜べく して 〜た means it happened as it was bound to (here, because the team was strong)."]
    ]
  },
  'n1-wo-yoginaku': {
    mistakes: [
      ["症状《しょうじょう》 が 悪化《あっか》 し、 入院《にゅういん》 を 余儀《よぎ》なく した。", "症状《しょうじょう》 が 悪化《あっか》 し、 入院《にゅういん》 を 余儀《よぎ》なく された。", "余儀《よぎ》なく takes the passive される (or させる with a cause as subject), never する."],
      ["あの 映画《えいが》 を 見《み》て、 泣《な》かず に は すまなかった。", "あの 映画《えいが》 を 見《み》て、 泣《な》かず に は いられなかった。", "An inner urge you cannot resist is 〜ず に は いられない; 〜ず に は すまない is pressure from outside."],
      ["相次《あいつ》ぐ 不祥事《ふしょうじ》 に、 怒《いか》り が 禁《きん》じ得《え》ない。", "相次《あいつ》ぐ 不祥事《ふしょうじ》 に、 怒《いか》り を 禁《きん》じ得《え》ない。", "The feeling is the object of 禁《きん》じ得《え》ない, so it takes を, not が."]
    ],
    more: [
      ["慢性的《まんせいてき》 な 腰痛《ようつう》 の ため、 本人《ほんにん》 は 配置《はいち》 転換《てんかん》 を 余儀《よぎ》なく された。", "Because of chronic back pain, the patient was forced to move to another post. (referral letter)"],
      ["転倒《てんとう》 が あった 以上《いじょう》、 ご家族《かぞく》 に 経過《けいか》 を 説明《せつめい》 せず に は すまない。", "Since there has been a fall, we cannot get away without explaining what happened to the family. (handover)"],
      ["この 闘病記《とうびょうき》 は、 読《よ》む 人《ひと》 の 心《こころ》 を 動《うご》かさず に は おかない。", "This memoir of living with illness cannot fail to move its readers. (book review)"],
      ["記録的《きろくてき》 な 大雨《おおあめ》 は、 住民《じゅうみん》 に 長期間《ちょうきかん》 の 避難《ひなん》 生活《せいかつ》 を 余儀《よぎ》なく させた。", "The record rainfall forced residents into a long stay away from their homes. (news)"],
      ["子《こ》ども が 隣《となり》 の 家《いえ》 の 窓《まど》 を 割《わ》って しまった。 親《おや》 と して 弁償《べんしょう》 しない では すまない だろう。", "My child broke the neighbours' window. As the parent, I can hardly get away without paying for it."],
      ["三十年前《さんじゅうねんまえ》 と 少《すこ》し も 変《か》わらない 町並《まちな》み に、 驚《おどろ》き を 禁《きん》じ得《え》なかった。", "I could not hide my surprise at streets that had not changed at all in thirty years."]
    ],
    quiz: [
      ["A newspaper reports that an earthquake forced a factory to stop. Which wording fits?", ["工場《こうじょう》 は 操業《そうぎょう》 停止《ていし》 を 余儀《よぎ》なく された。", "工場《こうじょう》 は 操業《そうぎょう》 停止《ていし》 を 禁《きん》じ得《え》なかった。", "工場《こうじょう》 は 操業《そうぎょう》 停止《ていし》 せず に は おかなかった。"], 0, "Being forced by circumstances is 〜を 余儀《よぎ》なく される; 禁《きん》じ得《え》ない takes a feeling, and ず に は おかない means \"is bound to cause\"."],
      ["この 事件《じけん》 は、 社会《しゃかい》 に 大《おお》きな 衝撃《しょうげき》 を 与《あた》えず に は おかない だろう。 means:", ["This incident will not shock society.", "This incident is bound to give society a great shock.", "Society should not be shocked by this incident."], 1, "With a thing as subject, 〜ず に は おかない says it cannot fail to cause the reaction."],
      ["上司《じょうし》 に 知《し》られた 以上《いじょう》、 事情《じじょう》 を 説明《せつめい》 しない ＿ すまない。", ["に は", "で も", "では"], 2, "After the ない-form the pattern is 〜ない では すまない; に は goes with the ず-form (せず に は)."],
      ["謝罪《しゃざい》 だけ では すまない 問題《もんだい》 だ。 means:", ["An apology alone will not settle this problem.", "No apology is needed for this problem.", "Only an apology will settle this problem."], 0, "Noun + では すまない: it will not end at just that."],
      ["Choose the correct form: 会議《かいぎ》 で 決《き》まった こと だ から、 部長《ぶちょう》 に も ＿ に は すまない。", ["話《はな》しず", "話《はな》さず", "話《はな》せず"], 1, "The ず-form is the ない-form without ない: 話《はな》さない → 話《はな》さず."],
      ["Which sentence uses 〜を 禁《きん》じ得《え》ない correctly?", ["突然《とつぜん》 の 方針《ほうしん》 変更《へんこう》 に、 戸惑《とまど》う を 禁《きん》じ得《え》ません。", "突然《とつぜん》 の 方針《ほうしん》 変更《へんこう》 に、 戸惑《とまど》わず を 禁《きん》じ得《え》ません。", "突然《とつぜん》 の 方針《ほうしん》 変更《へんこう》 に、 戸惑《とまど》い を 禁《きん》じ得《え》ません。"], 2, "〜を 禁《きん》じ得《え》ない takes a noun of feeling (戸惑《とまど》い), not a verb form."]
    ]
  },
  'n1-ni-katakunai': {
    mistakes: [
      ["この 薬《くすり》 は 小《ちい》さくて、 飲《の》む に 難《かた》くない。", "この 薬《くすり》 は 小《ちい》さくて、 飲《の》みやすい。", "〜に 難《かた》くない goes only with words of thinking such as 想像《そうぞう》 and 理解《りかい》; for \"easy to take\" use 〜やすい."],
      ["軽《かる》い 風邪《かぜ》 です から、 入院《にゅういん》 する に は 足《た》りません。", "軽《かる》い 風邪《かぜ》 です から、 入院《にゅういん》 する に は 及《およ》びません。", "\"There is no need to\" is 〜に は 及《およ》ばない; 〜に 足《た》りない means \"not worth\"."],
      ["ご家族《かぞく》 の 苦労《くろう》 を 想像《そうぞう》 に 難《かた》くない。", "ご家族《かぞく》 の 苦労《くろう》 は 想像《そうぞう》 に 難《かた》くない。", "In this set phrase 想像《そうぞう》 is a noun, so the thing imagined is the topic with は, not an object with を."]
    ],
    more: [
      ["入院《にゅういん》 当初《とうしょ》、 本人《ほんにん》 の 不安《ふあん》 が 大《おお》きかった こと は 理解《りかい》 に 難《かた》くない。", "It is easy to understand that the patient was very anxious at the start of the admission. (case report)"],
      ["現在《げんざい》 の 所見《しょけん》 は、 診断《しんだん》 を 変更《へんこう》 する に 足《た》る もの では ない。", "The present findings are not enough to justify changing the diagnosis. (case conference)"],
      ["症状《しょうじょう》 は 落《お》ち着《つ》いて います ので、 次回《じかい》 の 受診《じゅしん》 を 早《はや》める に は 及《およ》びません。", "Your symptoms have settled, so there is no need to bring your next appointment forward. (formal reply to a patient)"],
      ["雨《あめ》 で 試合《しあい》 が 中止《ちゅうし》 に なったら、 家《いえ》 で 練習《れんしゅう》 する まで だ。", "If the match is rained off, I'll simply practise at home."],
      ["別《べつ》 に 怒《おこ》って いる わけ では ない。 思《おも》った こと を 言《い》った まで だ。", "I'm not angry. I only said what I thought."],
      ["経験《けいけん》 豊富《ほうふ》 な 彼《かれ》 に とって、 その 程度《ていど》 の 相手《あいて》 は 恐《おそ》れる に 足《た》りない。", "For someone as experienced as him, an opponent of that level is nothing to fear."]
    ],
    quiz: [
      ["この 程度《ていど》 の 雨《あめ》 なら、 試合《しあい》 を 中止《ちゅうし》 する まで も ない。 means:", ["This much rain is no reason to call off the match.", "The match has to be called off because of the rain.", "The match will go on until the rain stops."], 0, "Dictionary form + まで も ない: the step is not needed, the matter is too small for it."],
      ["A guest leaving says: お見送《みおく》り ＿ 及《およ》びません。 ここ で 失礼《しつれい》 します。", ["を", "に は", "で"], 1, "\"There is no need for\" is 〜に は 及《およ》びません."],
      ["誰《だれ》 も 手伝《てつだ》って くれない なら、 一人《ひとり》 で ＿ (\"I'll simply do it on my own\")", ["やった まで だ", "やる に 足《た》る", "やる まで だ"], 2, "Dictionary form + まで だ is a calm \"I will simply\"; the た-form means \"I only did\", and に 足《た》る means \"worth\"."],
      ["A letter to a patient: 今回《こんかい》 の 検査《けんさ》 の 数値《すうち》 は 正常《せいじょう》 範囲《はんい》 でした ので、 再検査《さいけんさ》 ＿。", ["に は 及《およ》びません", "に 難《かた》く ありません", "に 足《た》ります"], 0, "\"There is no need for\" is 〜に は 及《およ》びません; 難《かた》くない goes with words of thinking, and に 足《た》る means \"worth\"."],
      ["A patient's daughter offers a gift to thank the staff. Which is a polite decline?", ["お気遣《きづか》い は 取《と》る に 足《た》りません。", "お気持《きも》ち だけ で 十分《じゅうぶん》 です。 お気遣《きづか》い に は 及《およ》びません。", "お気遣《きづか》い に 難《かた》く ありません。"], 1, "〜に は 及《およ》びません politely says there is no need; calling her kindness 取《と》る に 足《た》りない would belittle it, and 難《かた》くない does not fit."],
      ["聞《き》かれた から 答《こた》えた まで の こと です。 means:", ["I will keep answering until I am asked.", "I had to answer whatever I was asked.", "I only answered because I was asked; nothing more."], 2, "た-form + まで の こと だ plays an action down: I did only that."]
    ]
  },
  'n1-de-nakute-nan-darou': {
    mistakes: [
      ["これ が 奇跡《きせき》 だ で なくて 何《なん》 だろう。", "これ が 奇跡《きせき》 で なくて 何《なん》 だろう。", "The noun goes straight before で なくて, with no だ."],
      ["体重《たいじゅう》 の 減少《げんしょう》 は 二《に》キロ だ と いった ところ です。", "体重《たいじゅう》 の 減少《げんしょう》 は 二《に》キロ と いった ところ です。", "An amount goes straight before と いった ところ, with no だ."],
      ["ここ まで 来《こ》られた の は、 努力《どりょく》 の 成果《せいか》 で なくて 何《なん》 でしょう。", "ここ まで 来《こ》られた の は、 まさに 努力《どりょく》 の 成果《せいか》 です ね。", "Grammatical but で なくて 何《なん》 だろう is a literary verdict; to a patient say まさに 〜です."]
    ],
    more: [
      ["説明《せつめい》 も なく 検査《けんさ》 を 進《すす》める の は、 患者《かんじゃ》 を 軽《かろ》んじる こと 以外《いがい》 の 何物《なにもの》 でも ない。", "Going ahead with tests without any explanation is nothing but disregard for the patient. (ethics lecture)"],
      ["研修《けんしゅう》 の 効果《こうか》 は 参加者《さんかしゃ》 個人《こじん》 に とどまらず、 病棟《びょうとう》 全体《ぜんたい》 の 雰囲気《ふんいき》 に も 表《あらわ》れて いる。", "The effect of the training is not limited to the participants; it shows in the atmosphere of the whole ward. (report)"],
      ["食欲《しょくよく》 は、 普段《ふだん》 の 半分《はんぶん》 と いった ところ です。", "My appetite is about half what it usually is, at most. (patient)"],
      ["十年《じゅうねん》 かけて 荒《あ》れ地《ち》 を 畑《はたけ》 に 変《か》えた。 これ が 執念《しゅうねん》 で なくて 何《なん》 だろう。", "He spent ten years turning wasteland into fields. If that is not tenacity, what is? (essay)"],
      ["私《わたし》 の 日本語《にほんご》 は、 まだ 日常《にちじょう》 会話《かいわ》 が できる と いった ところ です。", "My Japanese is still at the level of everyday conversation, and no more."],
      ["この アプリ の 利用者《りようしゃ》 は 若者《わかもの》 に とどまらず、 高齢者《こうれいしゃ》 に も 広《ひろ》がって いる。", "The users of this app are not just young people; it is spreading to older people too."]
    ],
    quiz: [
      ["この 町《まち》 の 人口《じんこう》 は、 せいぜい 三千人《さんぜんにん》 ＿ です。", ["と いった ところ", "以外《いがい》 の 何物《なにもの》 でも ない", "で なくて 何《なん》 だろう"], 0, "A modest estimate with せいぜい is 〜と いった ところ です; the other two are strong verdicts, not estimates."],
      ["人《ひと》 の 日記《にっき》 を 勝手《かって》 に 読《よ》む の は、 裏切《うらぎ》り 以外《いがい》 の 何物《なにもの》 でも ない。 means:", ["Reading it is not a betrayal at all.", "Reading it is nothing but a betrayal.", "Reading it is something other than a betrayal."], 1, "〜以外《いがい》 の 何物《なにもの》 でも ない is a strong verdict, \"nothing but\", not a negative."],
      ["講師《こうし》 は ＿、 参加者《さんかしゃ》 の 質問《しつもん》 に も 丁寧《ていねい》 に 答《こた》えた。", ["講演《こうえん》 する と いった ところ で", "講演《こうえん》 する に とどまらず", "講演《こうえん》 以外《いがい》 の 何物《なにもの》 でも なく"], 1, "\"Did not just give the talk but also\" is 〜に とどまらず, which takes a dictionary-form verb."],
      ["You want to tell a patient warmly that her steady progress is real recovery. Which fits?", ["まさに 回復《かいふく》 です ね。", "回復《かいふく》 以外《いがい》 の 何物《なにもの》 でも ない。", "回復《かいふく》 と いった ところ です。"], 0, "To a patient say まさに 〜です; 以外《いがい》 の 何物《なにもの》 でも ない is a blunt written verdict, and と いった ところ would play the recovery down."],
      ["体調《たいちょう》 は 七割《ななわり》 と いった ところ です。 means:", ["I feel completely recovered.", "I feel seventy percent worse than before.", "I feel about seventy percent, and no better."], 2, "〜と いった ところ gives a modest estimate: about this much, at most."],
      ["Which sentence is correct?", ["彼《かれ》 の 発言《はつげん》 は 差別《さべつ》 する 以外《いがい》 の 何物《なにもの》 でも ない。", "彼《かれ》 の 発言《はつげん》 は 差別《さべつ》 の 以外《いがい》 の 何物《なにもの》 でも ない。", "彼《かれ》 の 発言《はつげん》 は 差別《さべつ》 以外《いがい》 の 何物《なにもの》 でも ない。"], 2, "以外《いがい》 の 何物《なにもの》 でも ない takes a bare noun: no verb and no の before 以外《いがい》."]
    ]
  },
  'n1-kirai-ga-aru': {
    mistakes: [
      ["朝《あさ》 から 頭《あたま》 が 痛《いた》くて やまない。", "朝《あさ》 から 頭《あたま》 が 痛《いた》くて たまらない。", "〜て やまない is for lasting wishes and feelings such as hope and love; a strong bodily sensation takes 〜て たまらない."],
      ["この 記事《きじ》 は 誇張《こちょう》 きらい が ある。", "この 記事《きじ》 は 誇張《こちょう》 の きらい が ある。", "A noun needs の before きらい が ある."],
      ["息子《むすこ》さん は とうとう 学校《がっこう》 を 休《やす》む 始末《しまつ》 です ね。", "息子《むすこ》さん は 学校《がっこう》 を 休《やす》んで いる ん です ね。", "Grammatical but 〜始末《しまつ》 だ blames; said to a family it sounds like criticism, so describe it neutrally."]
    ],
    more: [
      ["カンファレンス では、 経験《けいけん》 の 長《なが》い 者《もの》 の 意見《いけん》 ばかり が 通《とお》る きらい が ある。", "At our conferences, only the views of the most experienced staff tend to carry the day. (about one's own institution)"],
      ["当直明《とうちょくあ》け に 書類《しょるい》 を まとめたら 誤字《ごじ》 だらけ で、 結局《けっきょく》 全部《ぜんぶ》 書《か》き直《なお》す 始末《しまつ》 だった。", "I did my paperwork straight after a night on call; it was full of typos, and I ended up rewriting all of it. (about oneself)"],
      ["新《あたら》しい 研修医《けんしゅうい》 の 皆《みな》さん が、 患者《かんじゃ》さん に 信頼《しんらい》 される 医師《いし》 に 育《そだ》つ こと を 期待《きたい》 して やみません。", "I never cease to hope that our new residents will grow into doctors their patients trust. (welcome speech)"],
      ["こう 毎日《まいにち》 雨《あめ》 に 降《ふ》られて は かなわない。", "I can't put up with getting caught in the rain like this every day."],
      ["ナビ を 信《しん》じて 走《はし》ったら 道《みち》 に 迷《まよ》い、 最後《さいご》 は 山道《やまみち》 で 立《た》ち往生《おうじょう》 する 始末《しまつ》 だった。", "I trusted the satnav, got lost, and in the end found myself stuck on a mountain road. (about oneself)"],
      ["私《わたし》 は 物事《ものごと》 を 悪《わる》い 方《ほう》 に 考《かんが》える きらい が ある。", "I have a tendency to look on the dark side of things. (about oneself)"]
    ],
    quiz: [
      ["こう 不便《ふべん》 ＿ かなわない。", ["な は", "では", "に は"], 1, "A な-adjective takes では before かなわない: 不便《ふべん》 では かなわない."],
      ["この 報告書《ほうこくしょ》 は、 問題点《もんだいてん》 を 軽《かる》く 扱《あつか》う きらい が ある。 means:", ["The report tends to play down problems (a criticism).", "The report dislikes problems.", "The report deals with problems thoroughly."], 0, "〜きらい が ある points out an unwelcome tendency; きらい here does not mean \"dislike\"."],
      ["Writing a referral letter about a patient who sometimes stops treatment on his own. Which do you write?", ["服薬《ふくやく》 を 自己判断《じこはんだん》 で 中断《ちゅうだん》 する きらい が ある。", "服薬《ふくやく》 を 自己判断《じこはんだん》 で 中断《ちゅうだん》 する 始末《しまつ》 で ある。", "服薬《ふくやく》 を 自己判断《じこはんだん》 で 中断《ちゅうだん》 する 傾向《けいこう》 が ある。"], 2, "In a letter about a patient write the neutral 傾向《けいこう》 が ある; きらい が ある and 始末《しまつ》 だ carry blame."],
      ["寝坊《ねぼう》 して 慌《あわ》てて 出《で》たら、 財布《さいふ》 まで 忘《わす》れる 始末《しまつ》 だった。 means:", ["I overslept, but at least I remembered my wallet.", "I overslept, rushed out, and on top of it all even forgot my wallet.", "I overslept because I was looking for my wallet."], 1, "〜始末《しまつ》 だ, often with まで, ends a run of bad developments with the worst one."],
      ["Which uses 〜て やまない correctly?", ["毎朝《まいあさ》 六時《ろくじ》 に 起《お》きて やまない。", "彼《かれ》 は いつも 会議《かいぎ》 に 遅《おく》れて やまない。", "新《あたら》しい 病棟《びょうとう》 が 地域《ちいき》 に 愛《あい》される 場所《ばしょ》 に なる こと を 願《ねが》って やみません。"], 2, "〜て やまない goes with verbs of wishing and feeling such as 願《ねが》う; it does not describe habits or everyday actions."],
      ["Which says \"I can't put up with being phoned in the middle of the night every night\"?", ["毎晩《まいばん》 夜中《よなか》 に 電話《でんわ》 されて は かなわない。", "毎晩《まいばん》 夜中《よなか》 に 電話《でんわ》 されて やまない。", "毎晩《まいばん》 夜中《よなか》 に 電話《でんわ》 される きらい が ある。"], 0, "A complaint about a situation is 〜て は かなわない; きらい が ある means \"tends to\", and やまない does not fit."]
    ]
  },
  'n1-ni-shite': {
    mistakes: [
      ["十万円《じゅうまんえん》 から ある 靴《くつ》 を 買《か》って しまった。", "十万円《じゅうまんえん》 から する 靴《くつ》 を 買《か》って しまった。", "A price takes から する; から ある is for size, weight and distance."],
      ["駅《えき》 まで は 一《いっ》キロ から ある ので、 すぐ です。", "駅《えき》 まで は 一《いっ》キロ ほど なので、 すぐ です。", "から ある stresses that an amount is large, so it cannot go with \"it's close\"; use ほど."],
      ["今回《こんかい》 は ご家族《かぞく》 の 協力《きょうりょく》 が ある の 退院《たいいん》 でした。", "今回《こんかい》 は ご家族《かぞく》 の 協力《きょうりょく》 が あって の 退院《たいいん》 でした。", "The pattern uses the て-form: A (が) あって の B."]
    ],
    more: [
      ["三度目《さんどめ》 の 入院《にゅういん》 に して はじめて、 本人《ほんにん》 は 病気《びょうき》 と 向《む》き合《あ》う 決心《けっしん》 を した。", "Only at the third admission did the patient decide to face the illness. (case report)"],
      ["この 病棟《びょうとう》 の 落《お》ち着《つ》いた 雰囲気《ふんいき》 は、 看護師《かんごし》 の 皆《みな》さん の 細《こま》やか な 配慮《はいりょ》 あって の もの です。", "The calm atmosphere of this ward is owed entirely to the nurses' careful attention. (staff meeting)"],
      ["ここ 数日《すうじつ》 と いう もの、 食事《しょくじ》 が ほとんど のど を 通《とお》りません。", "These last few days I have hardly been able to get any food down. (patient)"],
      ["全長《ぜんちょう》 二《に》メートル から ある 魚《さかな》 が 釣《つ》れた。", "I caught a fish no less than two metres long."],
      ["駅前《えきまえ》 の マンション は、 狭《せま》い 部屋《へや》 でも 五千万円《ごせんまんえん》 から する そう だ。", "I hear flats by the station cost fifty million yen or more, even small ones."],
      ["創業《そうぎょう》 から 五十年《ごじゅうねん》 に して ようやく、 その 店《みせ》 は 二号店《にごうてん》 を 出《だ》した。", "Only fifty years after it was founded did the shop finally open a second branch."]
    ],
    quiz: [
      ["この 絵《え》 は 一億円《いちおくえん》 ＿ と 言《い》われて いる。", ["から する", "から ある", "と いう もの"], 0, "A large price takes から する; から ある is for size, weight and distance."],
      ["この 成功《せいこう》 は チーム の 協力《きょうりょく》 あって の こと だ。 means:", ["The success came despite the team.", "The success was possible only thanks to the team's cooperation.", "The team began to cooperate after the success."], 1, "A あって の こと: it was possible only because of A."],
      ["入社《にゅうしゃ》 二十年目《にじゅうねんめ》 に して はじめて、 彼《かれ》 は 長期《ちょうき》 休暇《きゅうか》 を 取《と》った。 means:", ["For someone twenty years in the firm, he takes a lot of leave.", "He took long leave for the last time in his twentieth year.", "Only in his twentieth year at the firm did he take a long holiday for the first time."], 2, "Noun + に して はじめて means \"only at that point\"; に して は would mean \"for (unexpectedly)\"."],
      ["At a family meeting you want to give the family credit. Which fits?", ["ご家族《かぞく》 の 毎日《まいにち》 の 面会《めんかい》 あって の 回復《かいふく》 だ と 思《おも》います。", "ご家族《かぞく》 の 毎日《まいにち》 の 面会《めんかい》 から ある 回復《かいふく》 だ と 思《おも》います。", "ご家族《かぞく》 の 毎日《まいにち》 の 面会《めんかい》 と いう もの 回復《かいふく》 だ と 思《おも》います。"], 0, "A あって の B gives credit: B was possible only thanks to A; から ある needs a number, and と いう もの needs a length of time."],
      ["＿ と いう もの、 父《ちち》 は 仕事《しごと》 で ほとんど 家《いえ》 に いない。", ["一年前《いちねんまえ》 に", "ここ 一年《いちねん》", "一年後《いちねんご》 に"], 1, "と いう もの needs この / ここ + a length of time running up to now: ここ 一年《いちねん》 と いう もの, \"this whole past year\"."],
      ["Which uses から の correctly?", ["五百人《ごひゃくにん》 から ある ボランティア が 参加《さんか》 した。", "五百人《ごひゃくにん》 から する ボランティア が 参加《さんか》 した。", "五百人《ごひゃくにん》 から の ボランティア が 参加《さんか》 した。"], 2, "For a large number of people before a noun use から の; ある is for size and する for price."]
    ]
  }
});
