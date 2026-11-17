/* Lesson extras part 6 (0.23.0): common mistakes, more examples and a "More practice" quiz for existing N5 and N4 lessons
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

  'yasui-nikui-sugiru': {
    mistakes: [
      [`この 道《みち》 は 歩《ある》きやすい じゃ ありません。`, `この 道《みち》 は 歩《ある》きやすくない です。`, `〜やすい is an い-adjective, so its negative is 〜やすくない.`],
      [`昨日《きのう》 は 寝《ね》るすぎました。`, `昨日《きのう》 は 寝《ね》すぎました。`, `すぎる attaches to the ます-stem (寝《ね》), not the dictionary form.`],
      [`この 町《まち》 は 静《しず》か な すぎます。`, `この 町《まち》 は 静《しず》かすぎます。`, `A な-adjective takes すぎる directly, with no な.`]
    ],
    more: [
      [`お薬《くすり》 が 大《おお》きくて 飲《の》みにくい とき は、 教《おし》えて ください。`, `If the tablets are big and hard to swallow, please tell me.`],
      [`最近《さいきん》、 物《もの》 を 忘《わす》れやすく なりました か。`, `Have you become more forgetful lately?`],
      [`毎晩《まいばん》 お酒《さけ》 を 飲《の》みすぎて いません か。`, `You're not drinking too much every night, are you?`],
      [`この ペン は 書《か》きやすい です ね。`, `This pen is easy to write with.`],
      [`この カレー は 辛《から》すぎて、 食《た》べられません。`, `This curry is too spicy for me to eat.`],
      [`駅《えき》 の 近《ちか》く は 人《ひと》 が 多《おお》くて、 歩《ある》きにくい です。`, `There are so many people near the station that it's hard to walk.`]
    ],
    quiz: [
      [`How do you say "too quiet"?`, [`静《しず》か な すぎる`, `静《しず》かすぎる`, `静《しず》かくすぎる`], 1, `A な-adjective takes すぎる directly.`],
      [`忘《わす》れやすい です means:`, [`I tend to forget things.`, `It is easy to remember.`, `I forgot it.`], 0, `With something that happens to you, 〜やすい means "tends to".`],
      [`この 説明《せつめい》 は 難《むずか》しくて ＿ です。`, [`わかりやすい`, `わかりすぎ`, `わかりにくい`], 2, `A difficult explanation is hard to understand: わかりにくい.`],
      [`What is the negative of 飲《の》みやすい です?`, [`飲《の》みやすい じゃ ありません`, `飲《の》みやすくない です`, `飲《の》みにくくない です`], 1, `〜やすい works as an い-adjective: 〜やすくない です.`],
      [`Which asks a patient "Haven't you been working too much?"`, [`働《はたら》きすぎて いません か。`, `働《はたら》きやすい です か。`, `働《はたら》きにくい です か。`], 0, `Stem + すぎる means doing something too much.`],
      [`食《た》べすぎ means:`, [`easy to eat`, `hard to eat`, `eating too much`], 2, `Dropping る from 〜すぎる gives a noun: 食《た》べすぎ, overeating.`]
    ] },

  'sou-you-mitai-rashii': {
    mistakes: [
      [`この 料理《りょうり》 は おいしいそう です ね。`, `この 料理《りょうり》 は おいしそう です ね。`, `For "looks", drop い before そう; おいしい そう です with the full form would mean "I hear it is delicious".`],
      [`風邪《かぜ》 よう です。`, `風邪《かぜ》 の よう です。`, `A noun needs の before よう; only みたい follows a noun directly.`],
      [`田中《たなか》さん は 悲《かな》しい です。`, `田中《たなか》さん は 悲《かな》しそう です。`, `Japanese does not state another person's feelings as fact; say how they look.`]
    ],
    more: [
      [`顔色《かおいろ》 が よく ない です ね。 具合《ぐあい》 が 悪《わる》そう です が、 大丈夫《だいじょうぶ》 です か。`, `You look pale. You seem unwell; are you all right?`],
      [`佐藤《さとう》さん は 朝《あさ》 ご飯《はん》 を あまり 食《た》べなかった よう です。`, `Mr. Sato seems not to have eaten much breakfast.`],
      [`体《からだ》 が 石《いし》 の よう に 重《おも》い です。`, `My body feels as heavy as a stone.`],
      [`空《そら》 が 暗《くら》い です ね。 雪《ゆき》 が 降《ふ》りそう です。`, `The sky is dark. It looks like it's going to snow.`],
      [`隣《となり》 の 店《みせ》 は 来月《らいげつ》 閉《し》まる らしい です。`, `Apparently the shop next door is closing next month.`],
      [`子《こ》どもたち は 楽《たの》しそう に 遊《あそ》んで います。`, `The children are playing happily.`]
    ],
    quiz: [
      [`What is the "looks" form of 静《しず》か?`, [`静《しず》かそう`, `静《しず》か な そう`, `静《しず》かいそう`], 0, `A な-adjective takes そう directly on its stem.`],
      [`新《あたら》しい 先生《せんせい》 は 優《やさ》しい らしい です means:`, [`The new doctor looks kind.`, `The new doctor should be kind.`, `Apparently the new doctor is kind.`], 2, `らしい gives what you have heard from others.`],
      [`Fill the blank to mean "That person looks like a doctor": あの 人《ひと》 は 医者《いしゃ》 ＿ です ね。`, [`そう`, `みたい`, `な よう`], 1, `A noun takes みたい directly; そう cannot follow a noun, and よう needs の.`],
      [`You notice a patient seems worried. Which is the most natural thing to say?`, [`あなた は 心配《しんぱい》 です。`, `あなた は 心配《しんぱい》 らしい です。`, `少《すこ》し 心配《しんぱい》そう です ね。`], 2, `Describe what you see with 〜そう rather than stating the feeling as fact.`],
      [`雪《ゆき》 が 降《ふ》る そう です means:`, [`I hear it will snow.`, `It looks like it will snow.`, `It is snowing.`], 0, `Hearsay そう follows the full plain form (降《ふ》る); "looks like" would be 降《ふ》りそう.`],
      [`子《こ》ども の ＿ 泣《な》いて います。`, [`よう な`, `よう に`, `よう だ`], 1, `Before a verb, the comparison "like" is よう に.`]
    ] },

  'probability': {
    mistakes: [
      [`明日《あした》 は 雨《あめ》 だ でしょう。`, `明日《あした》 は 雨《あめ》 でしょう。`, `Drop だ after a noun before でしょう.`],
      [`母《はは》 は もう 元気《げんき》 はず です。`, `母《はは》 は もう 元気《げんき》 な はず です。`, `A な-adjective needs な before はず.`],
      [`もしかしたら 明日《あした》 は 晴《は》れる でしょう。`, `もしかしたら 明日《あした》 は 晴《は》れる かも しれません。`, `もしかしたら (possibly) pairs with かも しれません, not with でしょう.`]
    ],
    more: [
      [`朝《あさ》 早《はや》く 目《め》 が 覚《さ》める の は、 気分《きぶん》 の 落《お》ち込《こ》み と 関係《かんけい》 が ある かも しれません。`, `Waking early in the morning might be related to low mood.`],
      [`検査《けんさ》 の 結果《けっか》 は 来週《らいしゅう》 わかる はず です。`, `The test results should be ready next week.`],
      [`ご家族《かぞく》 も きっと 心配《しんぱい》 して いる でしょう。`, `Your family must be worried too.`],
      [`田中《たなか》さん は 今日《きょう》 休《やす》み だから、 会議《かいぎ》 に は 来《こ》ない でしょう。`, `Mr. Tanaka is off today, so he probably won't come to the meeting.`],
      [`鍵《かぎ》 は かばん の 中《なか》 に ある はず です。`, `The key should be in my bag.`],
      [`この 道《みち》 は 夕方《ゆうがた》 込《こ》む かも しれません。`, `This road might be busy in the evening.`]
    ],
    quiz: [
      [`How do you say "He is probably busy"?`, [`彼《かれ》 は 忙《いそが》しい でしょう。`, `彼《かれ》 は 忙《いそが》しい だ でしょう。`, `彼《かれ》 は 忙《いそが》しく でしょう。`], 0, `でしょう follows the plain form of an い-adjective directly.`],
      [`元気《げんき》 ＿ はず です。`, [`の`, `な`, `だ`], 1, `A な-adjective takes な before はず.`],
      [`鍵《かぎ》 は 机《つくえ》 の 上《うえ》 に ある はず です means:`, [`Please put the key on the desk.`, `The key might be on the desk.`, `The key should be on the desk.`], 2, `はず です is a reasoned expectation: "should be".`],
      [`Which is the least certain?`, [`もしかしたら 来《く》る かも しれません。`, `来《く》る はず です。`, `きっと 来《く》る でしょう。`], 0, `もしかしたら 〜かも しれません leaves the most room for doubt.`],
      [`How do you tell a patient "Please rest today"?`, [`今日《きょう》 は 休《やす》む はず です。`, `今日《きょう》 は 休《やす》んで ください。`, `今日《きょう》 は 休《やす》む でしょう。`], 1, `はず is an expectation, not advice; use a request.`],
      [`たぶん 間《ま》に合《あ》う だろう と 思《おも》います means:`, [`We will definitely make it in time.`, `I hope we make it in time.`, `I think we will probably make it in time.`], 2, `たぶん 〜だろう と 思《おも》います means "I think it will probably".`]
    ] },

  'ageru-kureru-morau': {
    mistakes: [
      [`兄《あに》 が 私《わたし》 に 時計《とけい》 を あげました。`, `兄《あに》 が 私《わたし》 に 時計《とけい》 を くれました。`, `When the receiver is me, the verb is くれる, never あげる.`],
      [`私《わたし》 は 友達《ともだち》 が 写真《しゃしん》 を もらいました。`, `私《わたし》 は 友達《ともだち》 に 写真《しゃしん》 を もらいました。`, `With もらう the giver takes に or から, never が.`],
      [`先生《せんせい》 が 私《わたし》 に 本《ほん》 を いただきました。`, `先生《せんせい》 が 私《わたし》 に 本《ほん》 を くださいました。`, `いただく is the humble もらう with me as the subject; when the teacher is the subject, use くださる.`]
    ],
    more: [
      [`薬局《やっきょく》 で お薬手帳《くすりてちょう》 を もらいました か。`, `Did you get a medication record book at the pharmacy?`],
      [`入院中《にゅういんちゅう》、 妹《いもうと》 が 毎週《まいしゅう》 果物《くだもの》 を くれました。`, `While I was in hospital, my younger sister brought me fruit every week.`],
      [`会社《かいしゃ》 を 休《やす》む ので、 診断書《しんだんしょ》 を もらいたい です。`, `I'm taking time off work, so I'd like a medical certificate.`],
      [`私《わたし》 は 友達《ともだち》 に お土産《みやげ》 を あげました。`, `I gave my friend a souvenir.`],
      [`誕生日《たんじょうび》 に 父《ちち》 から 自転車《じてんしゃ》 を もらいました。`, `I got a bicycle from my father for my birthday.`],
      [`毎日《まいにち》、 犬《いぬ》 に ご飯《はん》 を やります。`, `I feed the dog every day.`]
    ],
    quiz: [
      [`田中《たなか》さん は 鈴木《すずき》さん に 花《はな》 を ＿。`, [`くれました`, `あげました`, `もらいました`], 1, `Between two other people, the giver takes あげる.`],
      [`姉《あね》 に 傘《かさ》 を もらいました means:`, [`I got an umbrella from my older sister.`, `I gave my older sister an umbrella.`, `My older sister got an umbrella from me.`], 0, `With もらう, に marks the giver and the receiver is me.`],
      [`市役所《しやくしょ》 ＿ 書類《しょるい》 を もらいました。`, [`が`, `を`, `から`], 2, `When the giver is an organisation or office, use から.`],
      [`Fill the blank to mean "I received a book from my teacher": 先生《せんせい》 に 本《ほん》 を ＿。`, [`いただきました`, `くださいました`, `さしあげました`], 0, `いただく is the humble もらう: I receive from someone above me.`],
      [`A patient wants to say "My son gives me money." Which is right?`, [`息子《むすこ》 が お金《かね》 を あげます。`, `息子《むすこ》 が お金《かね》 を くれます。`, `息子《むすこ》 が お金《かね》 を もらいます。`], 1, `The son gives to the speaker, so くれる.`],
      [`What is the polite ます-form of くださる?`, [`くださります`, `くだいます`, `くださいます`], 2, `くださる is irregular: くださいます.`]
    ] },

  'te-ageru-kureru-morau': {
    mistakes: [
      [`母《はは》 に 迎《むか》え に 来《き》て くれました。`, `母《はは》 が 迎《むか》え に 来《き》て くれました。`, `With 〜て くれる the doer is the subject and takes が; に is for 〜て もらう.`],
      [`窓《まど》 を 閉《し》めて あげます。`, `窓《まど》 を 閉《し》めましょう か。`, `Said to a patient, 〜て あげます sounds patronising; offer with 〜ましょう か.`],
      [`ここ に 座《すわ》って くれます か。`, `ここ に 座《すわ》って いただけます か。`, `〜て くれます か is for friends and family; ask a patient with 〜て いただけます か.`]
    ],
    more: [
      [`だれ か 一緒《いっしょ》 に 病院《びょういん》 に 来《き》て くれる 人《ひと》 は います か。`, `Is there someone who can come to the hospital with you?`],
      [`次《つぎ》 の 診察《しんさつ》 に は、 ご家族《かぞく》 に も 来《き》て いただけます か。`, `Could your family come to the next appointment as well?`],
      [`夜《よる》 眠《ねむ》れない とき、 夫《おっと》 が そば に いて くれます。`, `When I can't sleep at night, my husband stays by my side.`],
      [`友達《ともだち》 に 駅《えき》 まで 車《くるま》 で 送《おく》って もらいました。`, `A friend gave me a lift to the station.`],
      [`妹《いもうと》 の 宿題《しゅくだい》 を 見《み》て あげました。`, `I looked over my younger sister's homework for her.`],
      [`隣《となり》 の 人《ひと》 が 荷物《にもつ》 を 持《も》って くれました。`, `The person next to me carried my bag for me.`]
    ],
    quiz: [
      [`友達《ともだち》 ＿ 写真《しゃしん》 を 撮《と》って もらいました。`, [`に`, `が`, `を`], 0, `In 〜て もらう the doer is marked with に.`],
      [`父《ちち》 が 車《くるま》 で 迎《むか》え に 来《き》て くれました means:`, [`I went to pick up my father by car.`, `My father came to pick me up by car.`, `My father asked me to pick him up.`], 1, `The father is the doer, and くれる shows the favour came to me.`],
      [`Which is the best way to offer to call a nurse for a patient?`, [`看護師《かんごし》 を 呼《よ》んで あげます。`, `看護師《かんごし》 を 呼《よ》びましょう か。`, `看護師《かんごし》 を 呼《よ》んで くれます。`], 1, `〜ましょう か is a gentle offer; 〜て あげます can sound patronising.`],
      [`困《こま》った とき は、 いつも 兄《あに》 が 助《たす》けて ＿。`, [`あげます`, `もらいます`, `くれます`], 2, `The brother is the doer (が) and the speaker benefits, so 〜て くれる.`],
      [`Which means the same as 姉《あね》 が 料理《りょうり》 を 作《つく》って くれました?`, [`姉《あね》 に 料理《りょうり》 を 作《つく》って あげました。`, `姉《あね》 が 料理《りょうり》 を 作《つく》って もらいました。`, `姉《あね》 に 料理《りょうり》 を 作《つく》って もらいました。`], 2, `姉《あね》 が 〜て くれる = 姉《あね》 に 〜て もらう.`],
      [`Which request suits a patient?`, [`ここ で 待《ま》って くれる？`, `ここ で 待《ま》って いただけます か。`, `ここ で 待《ま》って。`], 1, `〜て いただけます か is a polite request; the others are casual.`]
    ] },

  'te-shimau-oku-miru': {
    mistakes: [
      [`電車《でんしゃ》 で 財布《さいふ》 を 落《お》として みました。`, `電車《でんしゃ》 で 財布《さいふ》 を 落《お》として しまいました。`, `Losing something by accident takes 〜て しまう; 〜て みる means you tried it on purpose.`],
      [`この シャツ を 着《き》る みます。`, `この シャツ を 着《き》て みます。`, `みる follows the て-form: 着《き》て みます, "I'll try it on".`],
      [`予定《よてい》 を 書《か》いて おきて ください。`, `予定《よてい》 を 書《か》いて おいて ください。`, `おく is a group 1 verb, so its て-form is おいて.`]
    ],
    more: [
      [`つい お酒《さけ》 を 飲《の》みすぎて しまう こと は あります か。`, `Do you sometimes end up drinking too much?`],
      [`次《つぎ》 の 診察《しんさつ》 まで に、 毎日《まいにち》 の 睡眠時間《すいみんじかん》 を 書《か》いて おいて ください。`, `Before your next appointment, please write down how many hours you sleep each day.`],
      [`眠《ねむ》れない とき は、 一度《いちど》 ベッド から 出《で》て みて ください。`, `When you can't sleep, try getting out of bed for a while.`],
      [`ケーキ を 一人《ひとり》 で 全部《ぜんぶ》 食《た》べて しまいました。`, `I ate the whole cake by myself.`],
      [`友達《ともだち》 が 来《く》る ので、 飲《の》み物《もの》 を 買《か》って おきます。`, `A friend is coming, so I'll buy some drinks in advance.`],
      [`新《あたら》しい ラーメン屋《や》 に 行《い》って みました。`, `I tried the new ramen shop.`]
    ],
    quiz: [
      [`パーティー の 前《まえ》 に 部屋《へや》 を 掃除《そうじ》 して おきます means:`, [`I'll clean the room before the party, to be ready.`, `I cleaned the room by mistake.`, `I'll try cleaning the room and see.`], 0, `〜て おく means doing something in advance.`],
      [`Fill the blank to mean "I'll try on the new shoes": 新《あたら》しい 靴《くつ》 を はいて ＿。`, [`しまいます`, `みます`, `おきます`], 1, `〜て みる means try something and see.`],
      [`What is the て-form of おく?`, [`おきて`, `おって`, `おいて`], 2, `おく is group 1 and ends in く, so its て-form is おいて.`],
      [`やっとく is the casual form of:`, [`やって おく`, `やって いく`, `やって しまう`], 0, `In casual speech 〜て おく often becomes 〜とく.`],
      [`Which suggests that a patient try a short walk each morning and see how it goes?`, [`毎朝《まいあさ》 少《すこ》し 散歩《さんぽ》 して しまいましょう。`, `毎朝《まいあさ》 少《すこ》し 散歩《さんぽ》 して おきましょう。`, `毎朝《まいあさ》 少《すこ》し 散歩《さんぽ》 して みましょう か。`], 2, `〜て みましょう か is the gentle way to suggest a trial.`],
      [`友達《ともだち》 の 秘密《ひみつ》 を 話《はな》して しまいました means:`, [`I tried telling my friend's secret.`, `I let my friend's secret slip, and I regret it.`, `I'll tell my friend's secret in advance.`], 1, `〜て しまう here shows something happened that the speaker did not want.`]
    ] },

  'te-iku-kuru-aru': {
    mistakes: [
      [`明日《あした》、 保険証《ほけんしょう》 を 持《も》って いって ください。`, `明日《あした》、 保険証《ほけんしょう》 を 持《も》って きて ください。`, `When the patient will bring it here to you, use 〜て くる, toward the speaker.`],
      [`最近《さいきん》、 だんだん 食欲《しょくよく》 が 出《で》て いきました。`, `最近《さいきん》、 だんだん 食欲《しょくよく》 が 出《で》て きました。`, `Change that has reached the present takes 〜て くる; 〜て いく looks ahead from now.`],
      [`カーテン が 閉《し》まって あります。`, `カーテン が 閉《し》めて あります。`, `〜て ある needs a transitive verb (閉《し》める), not the intransitive 閉《し》まる.`]
    ],
    more: [
      [`前《まえ》 より 顔色《かおいろ》 が よく なって きました ね。`, `Your colour has been getting better than before.`],
      [`お部屋《へや》 に お茶《ちゃ》 と タオル が 用意《ようい》 して あります。`, `Tea and a towel have been put ready in your room.`],
      [`これから は、 ご家族《かぞく》 と 一緒《いっしょ》 に 少《すこ》し ずつ 生活《せいかつ》 を 整《ととの》えて いきましょう。`, `From now on, let's get your daily routine back in order bit by bit, together with your family.`],
      [`コンビニ で お弁当《べんとう》 を 買《か》って きます ね。`, `I'll just go and get a bento at the convenience store.`],
      [`冷蔵庫《れいぞうこ》 に ビール が 冷《ひ》やして あります。`, `There's beer chilling in the fridge.`],
      [`日本《にほん》 に 住《す》む 外国人《がいこくじん》 は これから も 増《ふ》えて いく でしょう。`, `The number of foreigners living in Japan will probably keep growing.`]
    ],
    quiz: [
      [`お茶《ちゃ》 が 入《い》れて あります means:`, [`Someone is making tea.`, `Tea has been made and is ready.`, `I will make tea.`], 1, `〜て ある describes a state someone prepared on purpose.`],
      [`Fill the blank to mean "I'll just go and post a letter (and come back)": ちょっと 手紙《てがみ》 を 出《だ》して ＿。`, [`きます`, `いきます`, `あります`], 0, `Do something and come back is 〜て くる.`],
      [`これから 人口《じんこう》 が 減《へ》って いきます means:`, [`The population has been falling.`, `The population fell.`, `The population will keep falling from now on.`], 2, `〜て いく describes change from now into the future.`],
      [`Which says "Someone is closing the door"?`, [`ドア を 閉《し》めて います。`, `ドア が 閉《し》めて あります。`, `ドア が 閉《し》まって います。`], 0, `Transitive verb + を + 〜て いる is an action in progress.`],
      [`A patient says things have become much easier recently. Which fits?`, [`最近《さいきん》、 だいぶ 楽《らく》 に なって いきます。`, `最近《さいきん》、 だいぶ 楽《らく》 に なって あります。`, `最近《さいきん》、 だいぶ 楽《らく》 に なって きました。`], 2, `Change up to now takes 〜て くる.`],
      [`What is the polite past of 持《も》って くる?`, [`持《も》って くりました`, `持《も》って きました`, `持《も》って こました`], 1, `くる is irregular: きます, きました.`]
    ] }
});
