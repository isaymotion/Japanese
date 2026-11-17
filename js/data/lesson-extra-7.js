/* Lesson extras part 7 (0.23.0): common mistakes, more examples and a "More practice" quiz for existing N5 and N4 lessons
   (7 lessons per file, in lesson order; the lesson page shows them after the body and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'transitive-intransitive': {
    mistakes: [
      [`窓《まど》 を 開《あ》きました。`, `窓《まど》 を 開《あ》けました。`, `With を, use the transitive 開《あ》ける; 開《あ》く is intransitive and takes が.`],
      [`熱《ねつ》 を 下《さ》がりました。`, `熱《ねつ》 が 下《さ》がりました。`, `下《さ》がる is intransitive (the fever goes down by itself), so the fever takes が.`],
      [`テレビ が つけて います。`, `テレビ が ついて います。`, `For the state "is on", use the intransitive つく + 〜て いる.`]
    ],
    more: [
      [`血圧《けつあつ》 が 少《すこ》し 上《あ》がって います ね。`, `Your blood pressure has gone up a little.`],
      [`夜《よる》 は 病室《びょうしつ》 の 電気《でんき》 を 消《け》しましょう か。`, `Shall I turn off the light in your room at night?`],
      [`最近《さいきん》、 体重《たいじゅう》 が 増《ふ》えました か。`, `Have you put on weight recently?`],
      [`寒《さむ》い ので、 窓《まど》 を 閉《し》めます。`, `It's cold, so I'll close the window.`],
      [`風《かぜ》 で ドア が 開《あ》きました。`, `The door opened in the wind.`],
      [`バス が 駅《えき》 の 前《まえ》 に 止《と》まって います。`, `A bus is stopped in front of the station.`]
    ],
    quiz: [
      [`子《こ》ども が ドア ＿ 閉《し》めました。`, [`を`, `が`, `に`], 0, `閉《し》める is transitive, so the door takes を.`],
      [`What is the transitive partner of 増《ふ》える?`, [`減《へ》る`, `増《ふ》やす`, `上《あ》がる`], 1, `増《ふ》える (increases) pairs with 増《ふ》やす (increase something).`],
      [`Which sentence is natural?`, [`財布《さいふ》 が 落《お》としました。`, `財布《さいふ》 を 落《お》ちました。`, `財布《さいふ》 を 落《お》としました。`], 2, `落《お》とす (drop) is transitive and takes を; 落《お》ちる (fall) would take が.`],
      [`授業《じゅぎょう》 は 九時《くじ》 に ＿。 (Class starts at nine.)`, [`始《はじ》めます`, `始《はじ》まります`, `始《はじ》めて あります`], 1, `A class starts by itself, so use the intransitive 始《はじ》まる.`],
      [`薬《くすり》 を 減《へ》らしました means:`, [`Someone reduced the medicine.`, `The medicine increased.`, `The medicine ran out by itself.`], 0, `減《へ》らす with を is transitive: someone did the reducing.`],
      [`Which sentence describes a state, not an action?`, [`窓《まど》 を 開《あ》けて います。`, `電気《でんき》 を 消《け》して います。`, `窓《まど》 が 開《あ》いて います。`], 2, `An intransitive verb + 〜て いる describes the resulting state: the window is open.`]
    ]
  },
  'nagara-mama-tokoro-bakari': {
    mistakes: [
      [`テレビ を 見《み》るながら ご飯《はん》 を 食《た》べます。`, `テレビ を 見《み》ながら ご飯《はん》 を 食《た》べます。`, `ながら follows the ます-stem: 見《み》る becomes 見《み》ながら.`],
      [`先週《せんしゅう》 入院《にゅういん》した ところ です。`, `先週《せんしゅう》 入院《にゅういん》した ばかり です。`, `With a past time such as 先週《せんしゅう》, use 〜た ばかり; 〜た ところ is only the moment just after.`],
      [`窓《まど》 を 開《あ》けて まま 出《で》かけました。`, `窓《まど》 を 開《あ》けた まま 出《で》かけました。`, `まま follows the た-form, not the て-form.`]
    ],
    more: [
      [`お茶《ちゃ》 を 飲《の》みながら、 ゆっくり 話《はな》しましょう。`, `Let's take our time and talk over a cup of tea.`],
      [`眼鏡《めがね》 を かけた まま で 大丈夫《だいじょうぶ》 です よ。`, `It's fine to keep your glasses on.`],
      [`ちょうど 今《いま》、 検査《けんさ》 の 結果《けっか》 が 出《で》た ところ です。`, `The test results have just this moment come out.`],
      [`歩《ある》きながら スマホ を 見《み》ない で ください。`, `Please don't look at your phone while walking.`],
      [`今《いま》 から 家《いえ》 を 出《で》る ところ です。`, `I'm just about to leave the house.`],
      [`この パソコン は 先月《せんげつ》 買《か》った ばかり です。`, `I only bought this computer last month.`]
    ],
    quiz: [
      [`What is the ながら form of する?`, [`するながら`, `しながら`, `してながら`], 1, `ながら follows the ます-stem, and the stem of する is し.`],
      [`ご飯《はん》 を 食《た》べた ところ です means:`, [`I have just eaten.`, `I am about to eat.`, `I am eating now.`], 0, `た-form + ところ is the moment right after the action.`],
      [`Which sentence is natural?`, [`私《わたし》 は 歌《うた》いながら、 友達《ともだち》 が ピアノ を 弾《ひ》きます。`, `歌《うた》 を 歌《うた》いながら ピアノ を 弾《ひ》きます。`, `歌《うた》 を 歌《うた》うながら ピアノ を 弾《ひ》きます。`], 1, `ながら needs one subject doing both actions and follows the ます-stem.`],
      [`コンタクト を ＿ まま 寝《ね》て しまいました。 (I fell asleep with my contact lenses in.)`, [`入《い》れて`, `入《い》れる`, `入《い》れた`], 2, `まま follows the た-form: 入《い》れた まま.`],
      [`Which pattern can describe something three weeks ago that still feels recent?`, [`〜る ところ`, `〜て いる ところ`, `〜た ばかり`], 2, `〜た ばかり can stretch to weeks or months; ところ cannot.`],
      [`ラジオ を 聞《き》きながら 運転《うんてん》します means:`, [`I drive while listening to the radio.`, `I listen to the radio after driving.`, `I stop driving to listen to the radio.`], 0, `The ながら verb is the background action; the last verb is the main one.`]
    ]
  },
  'volitional': {
    mistakes: [
      [`もう 遅《おそ》い から、 帰《かえ》よう か。`, `もう 遅《おそ》い から、 帰《かえ》ろう か。`, `帰《かえ》る is a group 1 verb, so its volitional is 帰《かえ》ろう.`],
      [`来週《らいしゅう》 から ジム に 通《かよ》う と 思《おも》います。`, `来週《らいしゅう》 から ジム に 通《かよ》おう と 思《おも》います。`, `To say what you intend to do, use the volitional; dictionary form + と 思《おも》います sounds like a guess.`],
      [`田中《たなか》さん、 少《すこ》し 休《やす》もう。`, `田中《たなか》さん、 少《すこ》し 休《やす》みましょう。`, `To a patient, use polite 〜ましょう; the plain volitional is for friends and family.`]
    ],
    more: [
      [`来週《らいしゅう》 から 少《すこ》し ずつ 散歩《さんぽ》 を 始《はじ》めよう と 思《おも》います。`, `I'm thinking of starting short walks, bit by bit, from next week.`],
      [`一人《ひとり》 で 頑張《がんば》ろう と しない で、 周《まわ》り の 人《ひと》 に 相談《そうだん》して ください。`, `Please don't try to cope on your own; talk to the people around you.`],
      [`先生《せんせい》 に 話《はな》そう と 思《おも》いました が、 言《い》えません でした。`, `I meant to tell the doctor, but I couldn't say it.`],
      [`週末《しゅうまつ》 は 海《うみ》 に 行《い》こう よ。`, `Let's go to the beach this weekend.`],
      [`駅《えき》 まで 一緒《いっしょ》 に 歩《ある》こう か。`, `Shall we walk to the station together?`],
      [`電話《でんわ》しよう と した とき、 友達《ともだち》 から メール が 来《き》ました。`, `Just as I was about to phone, an email came from my friend.`]
    ],
    quiz: [
      [`What is the volitional form of 泳《およ》ぐ?`, [`泳《およ》ぎよう`, `泳《およ》ごう`, `泳《およ》げよう`], 1, `Group 1 verbs move to the お-row and add う: ぐ → ごう.`],
      [`What is the volitional form of 起《お》きる?`, [`起《お》こう`, `起《お》きろう`, `起《お》きよう`], 2, `起《お》きる is a group 2 verb: drop る and add よう.`],
      [`Which sentence states a plan that is already settled?`, [`仕事《しごと》 を 続《つづ》ける つもり です。`, `仕事《しごと》 を 続《つづ》けよう と 思《おも》います。`, `仕事《しごと》 を 続《つづ》けよう か。`], 0, `つもり です states a settled plan; 〜よう と 思《おも》います is an idea still forming.`],
      [`A friend says: 疲《つか》れた から、 タクシー に ＿ か。 (Shall we take a taxi?)`, [`乗《の》りよう`, `乗《の》ろう`, `乗《の》れ`], 1, `乗《の》る is group 1, so its volitional is 乗《の》ろう; 乗《の》れ is the imperative.`],
      [`電話《でんわ》 に 出《で》よう と した とき、 切《き》れました means:`, [`When I tried to answer the phone, it cut off.`, `I decided not to answer the phone.`, `I answered the phone and then hung up.`], 0, `Volitional + と した とき means "just as I was about to" or "when I tried to".`],
      [`A patient says 退院《たいいん》したら 実家《じっか》 に 帰《かえ》ろう と 思《おも》って います. What are they telling you?`, [`They have already gone back home.`, `They think their family will go home.`, `They are thinking of going back to their family home after discharge.`], 2, `帰《かえ》ろう と 思《おも》って います states the speaker's own intention.`]
    ]
  },
  'koto-ni-suru-naru': {
    mistakes: [
      [`泳《およ》げる に なりました。`, `泳《およ》げる よう に なりました。`, `A verb needs よう before に なる.`],
      [`お酒《さけ》 を 飲《の》まない に しました。`, `お酒《さけ》 を 飲《の》まない こと に しました。`, `A verb needs こと before に する to state a decision.`],
      [`夜《よる》 眠《ねむ》れない よう に なりました。`, `夜《よる》 眠《ねむ》れなく なりました。`, `For "no longer able to", the usual form is 〜なく なりました.`]
    ],
    more: [
      [`来週《らいしゅう》 から デイケア に 通《かよ》う こと に なりました。`, `You will be attending the day programme from next week.`],
      [`病棟《びょうとう》 で は、 食事《しょくじ》 は 食堂《しょくどう》 で 食《た》べる こと に なって います。`, `On the ward, meals are eaten in the dining room.`],
      [`最近《さいきん》 は 一人《ひとり》 で 買《か》い物《もの》 に 行《い》ける よう に なりました。`, `Lately I've become able to go shopping on my own.`],
      [`今年《ことし》 は 毎日《まいにち》 日記《にっき》 を 書《か》く こと に しました。`, `I've decided to keep a diary every day this year.`],
      [`野菜《やさい》 を たくさん 食《た》べる よう に して います。`, `I try to eat lots of vegetables.`],
      [`週末《しゅうまつ》 は 仕事《しごと》 の メール を 見《み》ない こと に して います。`, `I make it a rule not to look at work email at weekends.`]
    ],
    quiz: [
      [`一人《ひとり》 で バス に 乗《の》れる ＿ に なりました。 (I've become able to take the bus on my own.)`, [`よう`, `こと`, `ため`], 0, `Potential form + よう に なりました describes a change in ability.`],
      [`四月《しがつ》 から 大阪《おおさか》 に 引《ひ》っ越《こ》す こと に なりました means:`, [`I want to move to Osaka in April.`, `It has been arranged that I will move to Osaka from April.`, `I have become able to move to Osaka.`], 1, `こと に なりました means it has been decided, often by others or by circumstances.`],
      [`Which sentence is a rule the speaker has made for themselves?`, [`毎晩《まいばん》 十時《じゅうじ》 に 寝《ね》る こと に なりました。`, `毎晩《まいばん》 十時《じゅうじ》 に 寝《ね》られる よう に なりました。`, `毎晩《まいばん》 十時《じゅうじ》 に 寝《ね》る こと に して います。`], 2, `こと に して います is a personal rule the speaker keeps.`],
      [`How do you ask a patient to make sure to drink plenty of water?`, [`水《みず》 を たくさん 飲《の》む こと に なって ください。`, `水《みず》 を たくさん 飲《の》む よう に して ください。`, `水《みず》 を たくさん 飲《の》める よう に なって ください。`], 1, `よう に して ください asks for a continuing effort.`],
      [`Which pattern describes a gradual change in ability?`, [`〜こと に する`, `〜よう に なる`, `〜よう に する`], 1, `よう に なる is a change that comes about; よう に する is an effort.`],
      [`会社《かいしゃ》 を 辞《や》める こと に しました. Who made the decision?`, [`The company`, `Nobody yet; it is only an idea`, `The speaker`], 2, `こと に しました states the speaker's own decision.`]
    ]
  },
  'advice': {
    mistakes: [
      [`タバコ を 吸《す》わなかった ほう が いい です。`, `タバコ を 吸《す》わない ほう が いい です。`, `Negative advice uses the plain ない-form, never なかった.`],
      [`夕方《ゆうがた》 に 散歩《さんぽ》した と いい です よ。`, `夕方《ゆうがた》 に 散歩《さんぽ》する と いい です よ。`, `〜と いい follows the dictionary form, not the た-form.`],
      [`少《すこ》し 休《やす》んだ ほう に いい です。`, `少《すこ》し 休《やす》んだ ほう が いい です。`, `The fixed pattern is ほう が いい, with が.`]
    ],
    more: [
      [`つらい とき は、 一人《ひとり》 で 我慢《がまん》しない ほう が いい です よ。`, `When things are hard, it's better not to put up with it alone.`],
      [`眠《ねむ》れない とき は、 一度《いちど》 布団《ふとん》 から 出《で》る と いい です よ。`, `When you can't sleep, it helps to get out of bed for a while.`],
      [`寝《ね》た 時間《じかん》 と 起《お》きた 時間《じかん》 を 記録《きろく》して みて は どう でしょう か。`, `How about trying to write down when you go to sleep and when you wake up?`],
      [`雨《あめ》 が 降《ふ》りそう だ から、 傘《かさ》 を 持《も》って 行《い》った ほう が いい です よ。`, `It looks like rain, so you'd better take an umbrella.`],
      [`週末《しゅうまつ》 は 少《すこ》し ゆっくり したら どう です か。`, `Why don't you take it easy a bit this weekend?`],
      [`明日《あした》 晴《は》れる と いい です ね。`, `I hope it's sunny tomorrow.`]
    ],
    quiz: [
      [`熱《ねつ》 が ある とき は、 お風呂《ふろ》 に ＿ ほう が いい です。`, [`入《はい》らない`, `入《はい》らなかった`, `入《はい》らなくて`], 0, `Negative advice is the plain ない-form + ほう が いい.`],
      [`あまり 無理《むり》 を しない ほう が いい です よ means:`, [`You didn't push yourself too hard.`, `It's better not to push yourself too hard.`, `You are not able to push yourself.`], 1, `ない-form + ほう が いい is advice not to do something.`],
      [`A patient is struggling. Which is the gentlest way to suggest a short walk?`, [`散歩《さんぽ》した ほう が いい です。`, `散歩《さんぽ》したら どう です か。`, `少《すこ》し 散歩《さんぽ》して みて は どう でしょう か。`], 2, `〜て みて は どう でしょう か only invites the patient to try.`],
      [`A patient asks 薬《くすり》 は 食後《しょくご》 に 飲《の》んだ ほう が いい です か. What are they asking?`, [`Should I take the medicine after meals?`, `Did I take the medicine after meals?`, `Can I stop the medicine after meals?`], 0, `〜た ほう が いい です か asks for advice: "should I?".`],
      [`Which sentence is natural?`, [`寝《ね》る 前《まえ》 に 温《あたた》かい 牛乳《ぎゅうにゅう》 を 飲《の》んだ と いい です よ。`, `寝《ね》る 前《まえ》 に 温《あたた》かい 牛乳《ぎゅうにゅう》 を 飲《の》む と いい です よ。`, `寝《ね》る 前《まえ》 に 温《あたた》かい 牛乳《ぎゅうにゅう》 を 飲《の》む ほう に いい です よ。`], 1, `〜と いい follows the dictionary form; ほう takes が, not に.`],
      [`How do you make 〜たら どう です か with 相談《そうだん》する?`, [`相談《そうだん》するたら どう です か`, `相談《そうだん》して どう です か`, `相談《そうだん》したら どう です か`], 2, `〜たら is the た-form + ら: 相談《そうだん》した → 相談《そうだん》したら.`]
    ]
  },
  'commands': {
    mistakes: [
      [`早《はや》く 書《か》きろ。`, `早《はや》く 書《か》け。`, `書《か》く is group 1, so its imperative moves to the え-row: 書《か》け.`],
      [`薬《くすり》 を 飲《の》みなさい。`, `薬《くすり》 を 飲《の》んで ください。`, `To an adult patient 〜なさい sounds like talking to a child; use 〜て ください.`],
      [`ここ を 見《み》ない な。`, `ここ を 見《み》る な。`, `The negative command is the dictionary form + な, not the ない-form.`]
    ],
    more: [
      [`「話《はな》す な」 と 言《い》う 声《こえ》 が 聞《き》こえる こと が あります。`, `Sometimes I hear a voice saying, "Don't talk."`],
      [`声《こえ》 は どんな こと を しろ と 言《い》います か。`, `What does the voice tell you to do?`],
      [`危《あぶ》ない ので、 ここ に は 入《はい》らない で ください。`, `It isn't safe, so please don't come in here.`],
      [`父《ちち》 は よく 「早《はや》く 寝《ね》ろ」 と 言《い》います。`, `My father often says, "Go to bed."`],
      [`先生《せんせい》 は 学生《がくせい》 に 「静《しず》か に しなさい」 と 言《い》いました。`, `The teacher told the students, "Be quiet."`],
      [`「ここ で タバコ を 吸《す》う な」 と 書《か》いて あります。`, `It says, "Do not smoke here."`]
    ],
    quiz: [
      [`What is the imperative of 起《お》きる?`, [`起《お》きれ`, `起《お》きろ`, `起《お》け`], 1, `Group 2 verbs change る to ろ: 起《お》きろ.`],
      [`What is the imperative of する?`, [`しろ`, `すれ`, `しよう`], 0, `する is irregular: its imperative is しろ; しよう is the volitional.`],
      [`「ここ に ＿」 と 書《か》いて あります。 (It says, "Do not enter here.")`, [`入《はい》れ`, `入《はい》ろう`, `入《はい》る な`], 2, `Dictionary form + な is the negative command.`],
      [`A sign says 土足禁止《どそくきんし》. What should you do?`, [`Stop the car.`, `Put out your cigarette.`, `Take off your outdoor shoes.`], 2, `土足禁止《どそくきんし》 means outdoor shoes are not allowed.`],
      [`A patient is pacing and upset. What should you say?`, [`落《お》ち着《つ》け。`, `こちら に 座《すわ》って ください。`, `落《お》ち着《つ》きなさい。`], 1, `Use 〜て ください in a calm voice; the imperative and 〜なさい can escalate the situation.`],
      [`Which sentence reports a command indirectly?`, [`母《はは》 は 私《わたし》 に 早《はや》く 帰《かえ》る よう に 言《い》いました。`, `母《はは》 は 早《はや》く 帰《かえ》りました。`, `母《はは》 は 早《はや》く 帰《かえ》ろう と 思《おも》いました。`], 0, `Dictionary form + よう に 言《い》う reports what someone told you to do.`]
    ]
  },
  'purpose': {
    mistakes: [
      [`よく 眠《ねむ》れる ため に、 部屋《へや》 を 暗《くら》く します。`, `よく 眠《ねむ》れる よう に、 部屋《へや》 を 暗《くら》く します。`, `After a potential form such as 眠《ねむ》れる, use よう に, not ため に.`],
      [`家族《かぞく》 ため に 働《はたら》いて います。`, `家族《かぞく》 の ため に 働《はたら》いて います。`, `After a noun, ため に needs の.`],
      [`コンビニ に パン を 買《か》う に 行《い》きます。`, `コンビニ に パン を 買《か》い に 行《い》きます。`, `Before 行《い》く or 来《く》る, the purpose is the ます-stem + に.`]
    ],
    more: [
      [`転《ころ》ばない よう に、 ゆっくり 立《た》って ください。`, `Please stand up slowly so that you don't fall.`],
      [`原因《げんいん》 を 調《しら》べる ため に、 頭《あたま》 の 検査《けんさ》 を します。`, `We'll do a test of your head to find the cause.`],
      [`この 紙《かみ》 は 毎日《まいにち》 の 気分《きぶん》 を 記録《きろく》する の に 使《つか》います。`, `This sheet is for recording your mood each day.`],
      [`日本語《にほんご》 の 新聞《しんぶん》 が 読《よ》める よう に、 毎日《まいにち》 漢字《かんじ》 を 勉強《べんきょう》して います。`, `I study kanji every day so that I can read Japanese newspapers.`],
      [`旅行《りょこう》 の ため に、 お金《かね》 を ためて います。`, `I'm saving money for a trip.`],
      [`駅《えき》 まで 歩《ある》く の に 二十分《にじゅっぷん》 かかります。`, `It takes twenty minutes to walk to the station.`]
    ],
    quiz: [
      [`子《こ》ども に も わかる ＿ に、 やさしい 言葉《ことば》 で 話《はな》します。`, [`ため`, `の`, `よう`], 2, `わかる is not something you choose to do, so the goal takes よう に.`],
      [`大学《だいがく》 で 心理学《しんりがく》 を 学《まな》ぶ ＿ に、 東京《とうきょう》 に 引《ひ》っ越《こ》しました。`, [`よう`, `ため`, `の`], 1, `学《まな》ぶ is an action the speaker chooses, so ため に gives the purpose.`],
      [`この かばん は 旅行《りょこう》 ＿ 便利《べんり》 です。 (This bag is handy for travelling.)`, [`に`, `の に`, `よう に`], 0, `With a noun, just に comes before 便利《べんり》.`],
      [`後《うし》ろ の 席《せき》 から も 見《み》える よう に、 字《じ》 を 大《おお》きく 書《か》きます means:`, [`I write large in order to see the back seats.`, `I write large so that it can be seen from the back seats too.`, `I write large because I sit at the back.`], 1, `見《み》える is not controllable, so よう に means "so that".`],
      [`"I'm doing rehab so that I can walk." Which is correct?`, [`歩《ある》ける よう に リハビリ を して います。`, `歩《ある》ける ため に リハビリ を して います。`, `歩《ある》ける の に リハビリ を して います。`], 0, `A potential form such as 歩《ある》ける takes よう に.`],
      [`A patient says 不安《ふあん》 を 忘《わす》れる ため に お酒《さけ》 を 飲《の》みます. What do you learn?`, [`They forgot to drink.`, `They are anxious because of alcohol.`, `They drink in order to forget their anxiety.`], 2, `Dictionary form + ため に gives the purpose of drinking.`]
    ]
  }
});
