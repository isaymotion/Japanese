/* Lesson extras part 4 (0.23.0): common mistakes, more examples and a "More practice" quiz for existing N5 and N4 lessons
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
  'wanting': {
    mistakes: [
      [`水《みず》 を ほしい です。`, `水《みず》 が ほしい です。`, `With ほしい the thing you want is marked with が, not を.`],
      [`海《うみ》 に 行《い》くたい です。`, `海《うみ》 に 行《い》きたい です。`, `たい attaches to the ます-stem (行《い》き), not to the dictionary form.`],
      [`明日《あした》 病院《びょういん》 に 行《い》きます つもり です。`, `明日《あした》 病院《びょういん》 に 行《い》く つもり です。`, `つもり follows the dictionary form, not the ます form.`]
    ],
    more: [
      [`今《いま》 は 何《なに》 も 食《た》べたくない です。`, `Right now I don't want to eat anything.`],
      [`家族《かぞく》 に は 話《はな》したくない です。`, `I don't want to tell my family.`],
      [`退院《たいいん》 の 後《あと》、 何《なに》 を したい です か。`, `What would you like to do after you leave hospital?`],
      [`週末《しゅうまつ》 は 海《うみ》 に 行《い》きたい です。`, `I want to go to the sea at the weekend.`],
      [`新《あたら》しい パソコン が ほしい です。`, `I want a new computer.`],
      [`今年《ことし》 は 旅行《りょこう》しない つもり です。`, `I don't plan to travel this year.`]
    ],
    quiz: [
      [`How do you say "I want to go home"?`, [`家《いえ》 に 帰《かえ》りたい です。`, `家《いえ》 に 帰《かえ》るたい です。`, `家《いえ》 が 帰《かえ》りたい です。`], 0, `ます-stem 帰《かえ》り + たい, and the destination takes に.`],
      [`What is the past form of 食《た》べたい?`, [`食《た》べたい だった`, `食《た》べたかった`, `食《た》べたくない`], 1, `たい conjugates like an い-adjective: たい → たかった.`],
      [`Fill the blank: 新《あたら》しい 靴《くつ》 ＿ ほしい です。`, [`で`, `を`, `が`], 2, `The wanted thing takes が with ほしい.`],
      [`今年《ことし》 は お酒《さけ》 を 飲《の》まない つもり です means:`, [`I don't intend to drink this year.`, `I can't drink this year.`, `I didn't drink this year.`], 0, `ない-form + つもり です states an intention not to do something.`],
      [`Which says "I plan to call my mother tonight"?`, [`今夜《こんや》 母《はは》 に 電話《でんわ》します つもり です。`, `今夜《こんや》 母《はは》 に 電話《でんわ》した つもり です。`, `今夜《こんや》 母《はは》 に 電話《でんわ》する つもり です。`], 2, `Dictionary form + つもり です; the た-form changes the meaning.`],
      [`何《なに》 も したくない です means:`, [`I want to do something.`, `I don't want to do anything.`, `I didn't do anything.`], 1, `したくない is the negative of したい; 何《なに》 も + negative means "nothing".`]
    ]
  },
  'reasons': {
    mistakes: [
      [`から 頭《あたま》 が 痛《いた》い、 薬《くすり》 を 飲《の》みました。`, `頭《あたま》 が 痛《いた》い から、 薬《くすり》 を 飲《の》みました。`, `から comes after the reason, not at the start of the sentence like English "because".`],
      [`明日《あした》 は 休《やす》み ん です。`, `明日《あした》 は 休《やす》み なん です。`, `After a noun or な-adjective, ん です needs な: 休《やす》み なん です.`],
      [`昨日《きのう》 は 一日中《いちにちじゅう》 寝《ね》て いました ん です。`, `昨日《きのう》 は 一日中《いちにちじゅう》 寝《ね》て いた ん です。`, `ん です follows the plain form, not the ます form.`]
    ],
    more: [
      [`夜《よる》 よく 寝《ね》て いない ので、 昼間《ひるま》 も 眠《ねむ》い です。`, `I haven't been sleeping well at night, so I'm sleepy in the daytime too.`],
      [`胃《い》 が 痛《いた》い ので、 朝《あさ》ご飯《はん》 を 食《た》べません でした。`, `My stomach hurt, so I didn't eat breakfast.`],
      [`ご家族《かぞく》 と 何《なに》 か あった ん です か。`, `Did something happen with your family?`],
      [`雨《あめ》 だ から、 今日《きょう》 は 家《いえ》 に います。`, `It's raining, so I'm staying at home today.`],
      [`明日《あした》 は 朝《あさ》 が 早《はや》い ので、 もう 寝《ね》ます。`, `I have an early start tomorrow, so I'm going to bed now.`],
      [`道《みち》 が 混《こ》んで いた ん です。 それで、 遅《おく》れました。`, `The roads were busy. That's why I was late.`]
    ],
    quiz: [
      [`Fill the blank: 熱《ねつ》 が ある ＿、 今日《きょう》 は 休《やす》みます。`, [`ので`, `なので`, `だ ので`], 0, `After a verb, ので follows directly; なので is for nouns and な-adjectives.`],
      [`Which is correct for "because it's a holiday" with から?`, [`休《やす》み から`, `休《やす》み だ から`, `休《やす》み な から`], 1, `A noun takes だ before から.`],
      [`それで at the start of a sentence means:`, [`but`, `because`, `and so, as a result`], 2, `それで links a result to what was said before.`],
      [`Which sentence uses ん です correctly?`, [`疲《つか》れて いる ん です。`, `疲《つか》れて います ん です。`, `疲《つか》れて いる な ん です。`], 0, `ん です follows the plain form; な is only added after nouns and な-adjectives.`],
      [`仕事《しごと》 が 大変《たいへん》 なので、 毎日《まいにち》 疲《つか》れて います means:`, [`I'm tired every day, so my work is hard.`, `My work is hard, but I'm not tired.`, `My work is hard, so I'm tired every day.`], 2, `The reason comes before なので and the result after it.`],
      [`Which word can start a new sentence meaning "so, therefore"?`, [`から`, `だから`, `ので`], 1, `から and ので come after a reason inside one sentence; だから starts a new one.`]
    ]
  },
  'thinking-saying': {
    mistakes: [
      [`田中《たなか》さん は 来《き》ます と 思《おも》います。`, `田中《たなか》さん は 来《く》る と 思《おも》います。`, `In standard Japanese the part before と 思《おも》います is in the plain form, not the ます form.`],
      [`母《はは》 は 私《わたし》 が 悪《わる》い と 思《おも》います。`, `母《はは》 は 私《わたし》 が 悪《わる》い と 思《おも》って います。`, `For what another person thinks, use と 思《おも》って います.`],
      [`夫《おっと》 は 「大丈夫《だいじょうぶ》」 を 言《い》いました。`, `夫《おっと》 は 「大丈夫《だいじょうぶ》」 と 言《い》いました。`, `The words someone says are marked with と, not を.`]
    ],
    more: [
      [`今《いま》 の 治療《ちりょう》 に ついて、 どう 思《おも》います か。`, `What do you think about your current treatment?`],
      [`患者《かんじゃ》さん は 「夜《よる》 が 怖《こわ》い」 と 言《い》って います。`, `The patient keeps saying, "I'm scared of the night."`],
      [`お母《かあ》さん の 話《はなし》 では、 最近《さいきん》 部屋《へや》 から 出《で》ない そう です。`, `According to her mother, she hasn't been leaving her room lately.`],
      [`この 店《みせ》 の ラーメン は おいしい と 思《おも》います。`, `I think the ramen at this shop is good.`],
      [`友達《ともだち》 は 来週《らいしゅう》 東京《とうきょう》 に 行《い》く と 言《い》いました。`, `My friend said she is going to Tokyo next week.`],
      [`明日《あした》 は 雪《ゆき》 が 降《ふ》る そう です。`, `I hear it is going to snow tomorrow.`]
    ],
    quiz: [
      [`Fill the blank: 彼《かれ》 の 考《かんが》え は 正《ただ》しい ＿ 思《おも》います。`, [`を`, `と`, `が`], 1, `と marks the content of what you think.`],
      [`娘《むすめ》 は 学校《がっこう》 に 行《い》きたくない と 言《い》って います means:`, [`My daughter is saying she doesn't want to go to school.`, `My daughter wants to go to school.`, `I don't want my daughter to go to school.`], 0, `〜と 言《い》って います reports what someone is saying.`],
      [`Which correctly says "I think he is kind"?`, [`彼《かれ》 は 親切《しんせつ》 な と 思《おも》います。`, `彼《かれ》 は 親切《しんせつ》 です と 思《おも》います。`, `彼《かれ》 は 親切《しんせつ》 だ と 思《おも》います。`], 2, `A な-adjective takes だ before と 思《おも》います.`],
      [`Which one means "I hear it will rain"?`, [`雨《あめ》 が 降《ふ》りそう です。`, `雨《あめ》 が 降《ふ》る そう です。`, `雨《あめ》 が 降《ふ》る と 思《おも》います。`], 1, `Plain form + そう です is hearsay; the ます-stem + そう means "looks like".`],
      [`Which reports "My husband said he would come home late"?`, [`夫《おっと》 は 遅《おそ》く 帰《かえ》る を 言《い》いました。`, `夫《おっと》 は 遅《おそ》く 帰《かえ》ります と 思《おも》います。`, `夫《おっと》 は 遅《おそ》く 帰《かえ》る と 言《い》いました。`], 2, `An indirect report is plain form + と 言《い》いました.`],
      [`A family member says of the patient: 自分《じぶん》 は 病気《びょうき》 じゃない と 思《おも》って います. What does it mean?`, [`He believes he is not ill.`, `He thought he was ill.`, `I hear he is not ill.`], 0, `〜と 思《おも》って います describes a belief someone holds, and is the form used for another person's thoughts.`]
    ]
  },
  'can': {
    mistakes: [
      [`夜《よる》 よく 眠《ねむ》られません。`, `夜《よる》 よく 眠《ねむ》れません。`, `眠《ねむ》る is a group 1 verb, so its potential is 眠《ねむ》れる; られる is only for る-verbs.`],
      [`ピアノ を 弾《ひ》く が できます。`, `ピアノ を 弾《ひ》く こと が できます。`, `After a verb, こと is needed before が できます.`],
      [`勉強《べんきょう》 に 集中《しゅうちゅう》されません。`, `勉強《べんきょう》 に 集中《しゅうちゅう》できません。`, `The potential of する is できる; される is a different form (passive or honorific).`]
    ],
    more: [
      [`最近《さいきん》、 本《ほん》 が 読《よ》めません。 集中《しゅうちゅう》できない ん です。`, `Lately I can't read books. I can't concentrate.`],
      [`ご家族《かぞく》 に 気持《きも》ち を 話《はな》せます か。`, `Can you talk to your family about how you feel?`],
      [`とても 疲《つか》れて いて、 朝《あさ》 シャワー を 浴《あ》びる こと が できません。`, `I'm so tired that I can't take a shower in the morning.`],
      [`私《わたし》 は 泳《およ》げません。`, `I can't swim.`],
      [`この 店《みせ》 で は カード が 使《つか》えます か。`, `Can I use a card in this shop?`],
      [`日曜日《にちようび》 は 会《あ》えます か。`, `Can we meet on Sunday?`]
    ],
    quiz: [
      [`What is the potential form of 書《か》く?`, [`書《か》ける`, `書《か》かれる`, `書《か》きられる`], 0, `う-verbs move to the え-row and add る: く → ける.`],
      [`What is the standard potential form of 見《み》る?`, [`見《み》れる`, `見《み》られる`, `見《み》ける`], 1, `見《み》る is a る-verb: drop る and add られる. 見《み》れる is colloquial.`],
      [`Fill the blank: 漢字《かんじ》 ＿ 少《すこ》し 読《よ》めます。`, [`が`, `で`, `に`], 0, `With the potential form the object is often marked with が.`],
      [`Fill the blank: 生《なま》 の 魚《さかな》 は ＿。 (I can't eat raw fish.)`, [`食《た》べません`, `食《た》べられません`, `食《た》べたくない です`], 1, `食《た》べられません is the potential negative "cannot eat"; 食《た》べません is only "don't eat".`],
      [`Which sentence uses こと が できます correctly?`, [`一人《ひとり》 で 歩《ある》き こと が できます。`, `一人《ひとり》 で 歩《ある》く こと が できます。`, `一人《ひとり》 で 歩《ある》く が できます。`], 1, `Dictionary form + こと が できます.`],
      [`人《ひと》 の 名前《なまえ》 が 覚《おぼ》えられません means:`, [`I don't want to remember people's names.`, `I didn't remember people's names.`, `I can't remember people's names.`], 2, `覚《おぼ》えられる is the potential of 覚《おぼ》える.`]
    ]
  },
  'comparing-changing': {
    mistakes: [
      [`部屋《へや》 が きれいく なりました。`, `部屋《へや》 が きれい に なりました。`, `きれい is a な-adjective even though it ends in い, so it takes に before なる.`],
      [`春《はる》 なりました。`, `春《はる》 に なりました。`, `A noun needs に before なる.`],
      [`電車《でんしゃ》 は バス の より 速《はや》い です。`, `電車《でんしゃ》 は バス より 速《はや》い です。`, `より follows the noun directly, with no の.`]
    ],
    more: [
      [`薬《くすり》 を 変《か》えて から、 頭痛《ずつう》 が 少《すこ》し 軽《かる》く なりました。`, `Since the medicine was changed, the headaches have become a little milder.`],
      [`最近《さいきん》、 前《まえ》 より 不安《ふあん》 が 強《つよ》く なりました。`, `Lately the anxiety has become stronger than before.`],
      [`一週間《いっしゅうかん》 の 中《なか》 で、 何曜日《なんようび》 が いちばん つらい です か。`, `Which day of the week is the hardest for you?`],
      [`今年《ことし》 の 夏《なつ》 は 去年《きょねん》 より 暑《あつ》い です。`, `This summer is hotter than last year.`],
      [`日本語《にほんご》 が 少《すこ》し 上手《じょうず》 に なりました。`, `My Japanese has got a little better.`],
      [`家族《かぞく》 の 中《なか》 で、 父《ちち》 が いちばん 背《せ》 が 高《たか》い です。`, `My father is the tallest in my family.`]
    ],
    quiz: [
      [`Fill the blank: 今日《きょう》 は 昨日《きのう》 ＿ 寒《さむ》い です。`, [`より`, `ほう`, `いちばん`], 0, `より marks what you compare against: "colder than yesterday".`],
      [`How do you say "It became quiet"?`, [`静《しず》かく なりました。`, `静《しず》か に なりました。`, `静《しず》か な なりました。`], 1, `静《しず》か is a な-adjective, so it takes に before なる.`],
      [`痛《いた》み が 強《つよ》く なりました means:`, [`The pain is not strong.`, `The pain has gone away.`, `The pain has become stronger.`], 2, `強《つよ》い becomes 強《つよ》く before なる: "became strong".`],
      [`Which asks "Which is better for you, morning or afternoon?"`, [`午前《ごぜん》 と 午後《ごご》 は いちばん いい です か。`, `午前《ごぜん》 の ほう が 午後《ごご》 です か。`, `午前《ごぜん》 と 午後《ごご》 と、 どちら が いい です か。`], 2, `A と B と、 どちら が 〜 です か asks which of two.`],
      [`How do you say "It got worse"?`, [`悪《わる》い に なりました。`, `悪《わる》く なりました。`, `悪《わる》く でした。`], 1, `An い-adjective changes い to く before なる.`],
      [`お酒《さけ》 を 飲《の》まなく なりました means:`, [`I've stopped drinking.`, `I don't want to drink.`, `I drank too much.`], 0, `ない → なく なる: something that used to happen no longer does.`]
    ]
  },
  'when-if': {
    mistakes: [
      [`熱《ねつ》 が 出《で》る と、 病院《びょういん》 に 来《き》て ください。`, `熱《ねつ》 が 出《で》たら、 病院《びょういん》 に 来《き》て ください。`, `A request cannot follow と; use たら.`],
      [`子供《こども》 とき、 よく 泣《な》きました。`, `子供《こども》 の とき、 よく 泣《な》きました。`, `A noun takes の before とき.`],
      [`家《いえ》 に 帰《かえ》るたら、 電話《でんわ》して ください。`, `家《いえ》 に 帰《かえ》ったら、 電話《でんわ》して ください。`, `たら attaches to the た-form: 帰《かえ》った + ら.`]
    ],
    more: [
      [`頭《あたま》 が 痛《いた》い とき は、 無理《むり》 を しないで ください。`, `When you have a headache, please don't push yourself.`],
      [`不安《ふあん》 が 強《つよ》く なったら、 病棟《びょうとう》 の 看護師《かんごし》 に 言《い》って ください。`, `If the anxiety gets stronger, please tell a nurse on the ward.`],
      [`人《ひと》 と 話《はな》す と、 少《すこ》し 気持《きも》ち が 楽《らく》 に なります。`, `Whenever I talk to someone, I feel a little better.`],
      [`駅《えき》 に 着《つ》いたら、 連絡《れんらく》して ください。`, `Please get in touch when you reach the station.`],
      [`春《はる》 に なる と、 桜《さくら》 が 咲《さ》きます。`, `When spring comes, the cherry trees bloom.`],
      [`安《やす》ければ、 買《か》います。`, `If it's cheap, I'll buy it.`]
    ],
    quiz: [
      [`What is the ば form of 行《い》く?`, [`行《い》くば`, `行《い》きば`, `行《い》けば`], 2, `Change the last kana to the え-row and add ば: く → けば.`],
      [`Fill the blank: 若《わか》い ＿、 よく 旅行《りょこう》しました。`, [`と`, `とき`, `たら`], 1, `An い-adjective + とき means "at the time when": when I was young.`],
      [`What is the たら form of 静《しず》か?`, [`静《しず》か だったら`, `静《しず》かったら`, `静《しず》か な たら`], 0, `A な-adjective or noun takes だった + ら.`],
      [`この ボタン を 押《お》す と、 ドア が 開《あ》きます means:`, [`Press this button and the door closes.`, `Please press this button and open the door.`, `When you press this button, the door opens.`], 2, `Dictionary form + と describes a result that always follows.`],
      [`Which says "When I'm tired, I listen to music"?`, [`疲《つか》れた とき は、 音楽《おんがく》 を 聞《き》きます。`, `疲《つか》れた と は、 音楽《おんがく》 を 聞《き》きます。`, `疲《つか》れる の とき、 音楽《おんがく》 を 聞《き》きます。`], 0, `A verb goes straight before とき, with no の.`],
      [`お金《かね》 が あれば、 旅行《りょこう》したい です means:`, [`I have money, so I want to travel.`, `If I had money, I would like to travel.`, `When I travel, I need money.`], 1, `あれば is the ば form of ある: "if there is".`]
    ]
  },
  'keigo': {
    mistakes: [
      [`田中《たなか》さん は 何《なん》 と 申《もう》しました か。`, `田中《たなか》さん は 何《なん》 と おっしゃいました か。`, `申《もう》す is humble and only for yourself or your own side; for what Tanaka-san said, use honorific おっしゃる.`],
      [`私《わたし》 の お名前《なまえ》 は ナバロ です。`, `私《わたし》 の 名前《なまえ》 は ナバロ です。`, `お before a noun shows respect for the other person's thing; do not use it for your own name.`],
      [`こちら で お待《ま》ち して ください。`, `こちら で お待《ま》ち ください。`, `お + ます-stem + する is humble (my action); a polite request is お + ます-stem + ください.`]
    ],
    more: [
      [`お名前《なまえ》 を お呼《よ》び します ので、 こちら で お待《ま》ち ください。`, `I will call your name, so please wait here.`],
      [`ご家族《かぞく》 は 何《なん》 と おっしゃって います か。`, `What is your family saying about it?`],
      [`お仕事《しごと》 は 何《なに》 を なさって います か。`, `What kind of work do you do?`],
      [`社長《しゃちょう》 は 今《いま》 会議室《かいぎしつ》 に いらっしゃいます。`, `The company president is in the meeting room now.`],
      [`明日《あした》 十時《じゅうじ》 に そちら へ 参《まい》ります。`, `I will come to your office at ten tomorrow.`],
      [`この 本《ほん》 を ご存《ぞん》じ です か。`, `Do you know this book?`]
    ],
    quiz: [
      [`The honorific form of 言《い》う is:`, [`申《もう》します`, `おっしゃいます`, `いたします`], 1, `おっしゃいます raises the other person; 申《もう》します is humble.`],
      [`Which is the humble form of する?`, [`いたします`, `なさいます`, `されます`], 0, `いたします is humble; なさいます is honorific.`],
      [`Which humbly says "I'll come right away"?`, [`すぐ いらっしゃいます。`, `すぐ 来《こ》られます。`, `すぐ 参《まい》ります。`], 2, `参《まい》ります is the humble form of 行《い》く / 来《く》る, used for yourself.`],
      [`Fill the blank: こちら に お名前《なまえ》 を ＿ ください。`, [`書《か》く`, `お書《か》き して`, `お書《か》き`], 2, `お + ます-stem + ください is a polite request: お書《か》き ください.`],
      [`ご存《ぞん》じ です か means:`, [`May I ask?`, `Do you know (about it)?`, `Are you there?`], 1, `ご存《ぞん》じ is the honorific form of 知《し》って いる.`],
      [`Which sentence uses keigo the right way round?`, [`先生《せんせい》、 この 資料《しりょう》 を ご覧《らん》 に なります か。`, `先生《せんせい》、 この 資料《しりょう》 を 拝見《はいけん》します か。`, `私《わたし》 が この 資料《しりょう》 を ご覧《らん》 に なります。`], 0, `ご覧《らん》 に なる is honorific, so it is used for the senior doctor's action, not your own.`]
    ]
  }
});
