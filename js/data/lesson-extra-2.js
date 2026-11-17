/* Lesson extras part 2 (0.23.0): common mistakes, more examples and a "More practice" quiz for existing N5 and N4 lessons
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
  'verbs-masu': {
    mistakes: [
      [`昨日《きのう》 は 薬《くすり》 を 飲《の》みます。`, `昨日《きのう》 は 薬《くすり》 を 飲《の》みました。`, `昨日《きのう》 is in the past, so the verb must end in 〜ました.`],
      [`毎朝《まいあさ》 飲《の》みます か 薬《くすり》 を。`, `毎朝《まいあさ》 薬《くすり》 を 飲《の》みます か。`, `The verb comes last, and か comes right after it.`],
      [`明日《あした》 に 病院《びょういん》 に 来《き》ます。`, `明日《あした》 病院《びょういん》 に 来《き》ます。`, `Time words relative to today, such as 明日《あした》, take no particle.`]
    ],
    more: [
      [`今朝《けさ》 は 薬《くすり》 を 飲《の》みました か。`, `Did you take your medicine this morning?`],
      [`夜中《よなか》 に 起《お》きます か。`, `Do you wake up during the night?`],
      [`昨日《きのう》 は 何《なに》 を 食《た》べました か。`, `What did you eat yesterday?`],
      [`毎朝《まいあさ》 六時《ろくじ》 に 起《お》きます。`, `I get up at six every morning.`],
      [`週末《しゅうまつ》 は テレビ を 見《み》ません でした。`, `I didn't watch TV at the weekend.`],
      [`今日《きょう》 は 五時《ごじ》 に 帰《かえ》ります。`, `I'm going home at five today.`]
    ],
    quiz: [
      [`How do you say "I did not go"?`, [`行《い》きません`, `行《い》きました`, `行《い》きません でした`], 2, `The past negative is 〜ません followed by でした.`],
      [`昨日《きのう》 テレビ を ＿。 "I watched TV yesterday." What fills the gap?`, [`見《み》ます`, `見《み》ました`, `見《み》ません`], 1, `昨日《きのう》 is in the past, so the verb takes 〜ました.`],
      [`What does 毎晩《まいばん》 十時《じゅうじ》 に 寝《ね》ます mean?`, [`I go to bed at ten every night.`, `I went to bed at ten last night.`, `I don't go to bed at ten.`], 0, `〜ます with 毎晩《まいばん》 "every night" describes a habit.`],
      [`Which sentence has natural word order?`, [`毎朝《まいあさ》 飲《の》みます 薬《くすり》 を。`, `毎朝《まいあさ》 薬《くすり》 を 飲《の》みます。`, `薬《くすり》 を 飲《の》みます 毎朝《まいあさ》。`], 1, `Time first, then the object, and the verb at the very end.`],
      [`Which is the past of 来《き》ます?`, [`来《き》ません`, `来《き》ます でした`, `来《き》ました`], 2, `Replace ます with ました: 来《き》ました "came".`],
      [`Which ending means "did not"?`, [`〜ません でした`, `〜ません`, `〜ました`], 0, `〜ません is "do not", 〜ました is "did", and 〜ません でした is "did not".`]
    ]
  },
  'particles-core': {
    mistakes: [
      [`明日《あした》 病院《びょういん》 で 行《い》きます。`, `明日《あした》 病院《びょういん》 に 行《い》きます。`, `The place you go to takes に (or へ); で is for the place where an action happens.`],
      [`家《いえ》 に 薬《くすり》 を 飲《の》みます。`, `家《いえ》 で 薬《くすり》 を 飲《の》みます。`, `Taking medicine is an action done at home, so the place takes で.`],
      [`昨日《きのう》 姉《あね》 を 電話《でんわ》 しました。`, `昨日《きのう》 姉《あね》 に 電話《でんわ》 しました。`, `The person you phone takes に, not を, even though English says "call her".`]
    ],
    more: [
      [`今日《きょう》 は だれ と 来《き》ました か。`, `Who did you come with today?`],
      [`家《いえ》 から 病院《びょういん》 まで バス で 来《き》ました か。`, `Did you come from home to the hospital by bus?`],
      [`夜《よる》 は 家族《かぞく》 と 話《はな》します か。`, `Do you talk with your family in the evenings?`],
      [`日曜日《にちようび》 は 公園《こうえん》 で 散歩《さんぽ》 します。`, `On Sundays I go for a walk in the park.`],
      [`土曜日《どようび》 に 東京《とうきょう》 へ 行《い》きます。`, `I'm going to Tokyo on Saturday.`],
      [`スマホ で 映画《えいが》 を 見《み》ます。`, `I watch films on my phone.`]
    ],
    quiz: [
      [`学校《がっこう》 ＿ 日本語《にほんご》 を 勉強《べんきょう》します。 Which particle fits?`, [`に`, `を`, `で`], 2, `Studying happens at the school, so the place of the action takes で.`],
      [`友達《ともだち》 ＿ 昼《ひる》ご飯《はん》 を 食《た》べました。 "I had lunch with a friend." Which particle fits?`, [`と`, `に`, `を`], 0, `と after a person means "together with".`],
      [`水《みず》 ＿ 飲《の》みます。 Which particle marks what you drink?`, [`で`, `を`, `へ`], 1, `を marks the object of the verb.`],
      [`What does 月曜日《げつようび》 から 金曜日《きんようび》 まで 働《はたら》きます mean?`, [`I work from Monday to Friday.`, `I work on Mondays and Fridays.`, `I worked until Monday.`], 0, `から marks the start and まで the end.`],
      [`"I will phone the doctor." Which is correct?`, [`先生《せんせい》 を 電話《でんわ》 します。`, `先生《せんせい》 で 電話《でんわ》 します。`, `先生《せんせい》 に 電話《でんわ》 します。`], 2, `The person who receives the call takes に.`],
      [`"I'm going to Osaka on Saturday." Which is correct?`, [`土曜日《どようび》 で 大阪《おおさか》 へ 行《い》きます。`, `土曜日《どようび》 に 大阪《おおさか》 へ 行《い》きます。`, `土曜日《どようび》 に 大阪《おおさか》 で 行《い》きます。`], 1, `A day of the week takes に, and the destination takes へ (or に).`]
    ]
  },
  'wa-vs-ga': {
    mistakes: [
      [`私《わたし》 は 猫《ねこ》 を 好《す》き です。`, `私《わたし》 は 猫《ねこ》 が 好《す》き です。`, `The thing you like takes が, not を, even though it looks like an object in English.`],
      [`だれ は 料理《りょうり》 を します か。`, `だれ が 料理《りょうり》 を します か。`, `A question word that is the subject takes が, never は.`],
      [`はじめまして。 私《わたし》 が ナバロ です。`, `はじめまして。 私《わたし》 は ナバロ です。`, `When you introduce yourself, you are the topic, so use は; が sounds like "I am the one called Navarro".`]
    ],
    more: [
      [`胸《むね》 が 痛《いた》い です。`, `My chest hurts.`],
      [`日本語《にほんご》 が わかります か。`, `Do you understand Japanese?`],
      [`昼《ひる》 は 食欲《しょくよく》 が あります。`, `At lunchtime I do have an appetite.`],
      [`私《わたし》 は 日本《にほん》 の 映画《えいが》 が 好《す》き です。`, `I like Japanese films.`],
      [`兄《あに》 は 料理《りょうり》 が できません。`, `My older brother can't cook.`],
      [`コーヒー は 飲《の》みます。 お茶《ちゃ》 は 飲《の》みません。`, `I drink coffee. Tea, I don't drink.`]
    ],
    quiz: [
      [`何《なに》 ＿ 好《す》き です か。 Which particle fits?`, [`は`, `が`, `を`], 1, `A question word as the subject takes が, and the thing liked is marked with が.`],
      [`"I can speak a little Japanese." Which is correct?`, [`日本語《にほんご》 が 少《すこ》し できます。`, `日本語《にほんご》 は 少《すこ》し できます か。`, `日本語《にほんご》 を 少《すこ》し できます。`], 0, `With できます the skill takes が. The second option is a question.`],
      [`The doctor asks どこ が 痛《いた》い です か。 Which answer is natural?`, [`頭《あたま》 を 痛《いた》い です。`, `頭《あたま》 で 痛《いた》い です。`, `頭《あたま》 が 痛《いた》い です。`], 2, `The part that hurts takes が, the same particle as in the question.`],
      [`Which sentence introduces yourself naturally?`, [`私《わたし》 が 田中《たなか》 です。`, `私《わたし》 を 田中《たなか》 です。`, `私《わたし》 は 田中《たなか》 です。`], 2, `In a self-introduction you are the topic, so は.`],
      [`魚《さかな》 は 食《た》べます。 肉《にく》 は 食《た》べません。 What does は do here?`, [`It contrasts fish and meat.`, `It marks a question word.`, `It shows where you eat.`], 0, `は on two nouns sets them against each other: fish yes, meat no.`],
      [`だれ が 料理《りょうり》 を します か。 Which answer fits?`, [`夫《おっと》 は します か。`, `夫《おっと》 が します。`, `夫《おっと》 を します。`], 1, `The answer to a だれ が question also uses が.`]
    ]
  },
  'arimasu-imasu': {
    mistakes: [
      [`家《いえ》 に 犬《いぬ》 が あります。`, `家《いえ》 に 犬《いぬ》 が います。`, `Animals, like people, take います.`],
      [`部屋《へや》 で テレビ が あります。`, `部屋《へや》 に テレビ が あります。`, `The place where something is takes に; で is for where an action happens.`],
      [`上《うえ》 の 机《つくえ》 に 本《ほん》 が あります。`, `机《つくえ》 の 上《うえ》 に 本《ほん》 が あります。`, `The thing comes first and the location word after it: 机《つくえ》 の 上《うえ》 is "on the desk".`]
    ],
    more: [
      [`近《ちか》く に ご家族《かぞく》 が います か。`, `Do you have family living nearby?`],
      [`アレルギー は あります か。`, `Do you have any allergies?`],
      [`夜《よる》 も 病棟《びょうとう》 に 看護師《かんごし》 が います。`, `There are nurses on the ward at night too.`],
      [`駅《えき》 の 前《まえ》 に 銀行《ぎんこう》 が あります。`, `There is a bank in front of the station.`],
      [`冷蔵庫《れいぞうこ》 の 中《なか》 に 何《なに》 が あります か。`, `What is in the fridge?`],
      [`公園《こうえん》 に 子《こ》ども が たくさん います。`, `There are lots of children in the park.`]
    ],
    quiz: [
      [`部屋《へや》 に テレビ が ＿。 Which verb fits?`, [`います`, `です`, `あります`], 2, `A television is a thing, so あります.`],
      [`"I didn't have time yesterday." Which is correct?`, [`昨日《きのう》 は 時間《じかん》 が ありません でした。`, `昨日《きのう》 は 時間《じかん》 が いません でした。`, `昨日《きのう》 は 時間《じかん》 が あります。`], 0, `Time is a thing, and the past negative is ありません でした.`],
      [`Which word means "inside"?`, [`上《うえ》`, `前《まえ》`, `中《なか》`], 2, `中《なか》 is "inside"; 上《うえ》 is "on" and 前《まえ》 is "in front of".`],
      [`What does 病院《びょういん》 の 後《うし》ろ に 駐車場《ちゅうしゃじょう》 が あります mean?`, [`The hospital is behind the car park.`, `There is a car park behind the hospital.`, `There is a car park next to the hospital.`], 1, `X の 後《うし》ろ is "behind X", and the car park is what there is.`],
      [`ペン ＿ どこ に あります か。 "Where is the pen?" Which particle fits?`, [`は`, `を`, `で`], 0, `The pen is already the topic, so は, and the place takes に.`],
      [`机《つくえ》 の 下《した》 ＿ 犬《いぬ》 が います。 Which particle fits?`, [`で`, `に`, `を`], 1, `The place where someone or something is takes に.`]
    ]
  },
  'invitations': {
    mistakes: [
      [`いいえ、 食《た》べません。`, `すみません、 今日《きょう》 は ちょっと…。`, `A flat いいえ to an invitation sounds like rejecting the person; apologise and leave the sentence unfinished.`],
      [`いいえ、 行《い》きます。`, `いい です ね。 行《い》きましょう。`, `行《い》きません か is an invitation, not a negative question, so accept it with いい です ね, not いいえ.`],
      [`窓《まど》 を 開《あ》けません か。`, `窓《まど》 を 開《あ》けましょう か。`, `To offer to do something yourself, use 〜ましょう か; 〜ません か invites the other person to do it.`]
    ],
    more: [
      [`少《すこ》し 話《はな》しましょう か。`, `Shall we talk for a little while?`],
      [`看護師《かんごし》 を 呼《よ》びましょう か。`, `Shall I call a nurse?`],
      [`来週《らいしゅう》 また 会《あ》いましょう。`, `Let's meet again next week.`],
      [`土曜日《どようび》 に 映画《えいが》 を 見《み》ません か。`, `Would you like to see a film on Saturday?`],
      [`駅《えき》 で 会《あ》いましょう。`, `Let's meet at the station.`],
      [`コーヒー を 飲《の》みましょう か。`, `Shall we have a coffee?`]
    ],
    quiz: [
      [`What does 一緒《いっしょ》 に 帰《かえ》りません か mean?`, [`You didn't go home together?`, `I won't go home with you.`, `Would you like to go home together?`], 2, `〜ません か is a polite invitation.`],
      [`The room is dark. How do you offer to turn on the light?`, [`電気《でんき》 を つけません か。`, `電気《でんき》 を つけましょう か。`, `電気《でんき》 を つけました か。`], 1, `〜ましょう か with yourself acting is an offer: "Shall I turn on the light?"`],
      [`A friend asks 明日《あした》 昼《ひる》ご飯《はん》 を 食《た》べません か。 How do you accept?`, [`いいえ、 食《た》べません。`, `すみません、 明日《あした》 は ちょっと…。`, `いい です ね。`], 2, `いい です ね accepts; ちょっと… politely declines.`],
      [`Which form means "let's"?`, [`〜ません か`, `〜ましょう`, `〜ました`], 1, `〜ましょう is a suggestion, "let's".`],
      [`How do you say "What shall we eat?"`, [`何《なに》 を 食《た》べましょう か。`, `何《なに》 を 食《た》べました か。`, `何《なに》 を 食《た》べません か。`], 0, `A question word with 〜ましょう か asks "what shall we...?"`],
      [`Someone says 窓《まど》 を 開《あ》けましょう か。 You don't need it. What do you say?`, [`はい、 開《あ》けません。`, `大丈夫《だいじょうぶ》 です。 ありがとう ございます。`, `開《あ》けません か。`], 1, `大丈夫《だいじょうぶ》 です with thanks politely declines an offer.`]
    ]
  },
  'i-adjectives': {
    mistakes: [
      [`昨日《きのう》 は 寒《さむ》い でした。`, `昨日《きのう》 は 寒《さむ》かった です。`, `An い-adjective takes the past itself (〜かった); です does not change.`],
      [`あまり 痛《いた》い です。`, `あまり 痛《いた》くない です。`, `あまり "not very" goes only with a negative.`],
      [`今日《きょう》 は 痛《いた》いくない です。`, `今日《きょう》 は 痛《いた》くない です。`, `Drop the final い before adding くない.`]
    ],
    more: [
      [`夜《よる》 は 寂《さび》しい です か。`, `Do you feel lonely at night?`],
      [`頭《あたま》 は もう 痛《いた》くない です か。`, `Has your head stopped hurting?`],
      [`昨日《きのう》 は とても つらかった です。`, `Yesterday was very hard for me.`],
      [`今日《きょう》 は 暑《あつ》い です ね。`, `It's hot today, isn't it.`],
      [`この ラーメン は おいしい です。`, `This ramen is delicious.`],
      [`先週《せんしゅう》 の テスト は 難《むずか》しくなかった です。`, `Last week's test wasn't difficult.`]
    ],
    quiz: [
      [`How do you say "It was cold"?`, [`寒《さむ》い でした。`, `寒《さむ》くない です。`, `寒《さむ》かった です。`], 2, `The past of an い-adjective is 〜かった, followed by です.`],
      [`What is the past of いい?`, [`いかった`, `よかった`, `いい でした`], 1, `いい takes its other forms from よい: よかった.`],
      [`今日《きょう》 は とても ＿ です。 "I'm very sleepy today." What fills the gap?`, [`眠《ねむ》い`, `眠《ねむ》くない`, `眠《ねむ》かった`], 0, `とても goes with the positive, and "I'm" is the present.`],
      [`What does 怖《こわ》い 夢《ゆめ》 を 見《み》ました mean?`, [`I wasn't scared of the dream.`, `I had a bad dream.`, `I had a scary dream.`], 2, `怖《こわ》い is "scary"; it goes straight before the noun 夢《ゆめ》.`],
      [`Which sentence uses あまり correctly?`, [`あまり 寒《さむ》い です。`, `あまり 寒《さむ》くない です。`, `あまり 寒《さむ》かった です。`], 1, `あまり is used only with a negative.`],
      [`A patient says 体《からだ》 が だるい です。 What do they mean?`, [`My body feels heavy and tired.`, `I have a sharp pain.`, `I feel lonely.`], 0, `だるい describes a sluggish, heavy feeling in the body.`]
    ]
  },
  'na-adjectives': {
    mistakes: [
      [`父《ちち》 は 元気《げんき》くない です。`, `父《ちち》 は 元気《げんき》 では ありません。`, `元気《げんき》 is a な-adjective: change です, not the adjective.`],
      [`静《しず》か 部屋《へや》 で 休《やす》みます。`, `静《しず》か な 部屋《へや》 で 休《やす》みます。`, `A な-adjective needs な before the noun it describes.`],
      [`私《わたし》 は 音楽《おんがく》 が 好《す》き な です。`, `私《わたし》 は 音楽《おんがく》 が 好《す》き です。`, `な is used only before a noun; at the end of a sentence just add です.`]
    ],
    more: [
      [`何《なに》 か 好《す》き な こと は あります か。`, `Is there anything you enjoy doing?`],
      [`昨日《きのう》 の 夜《よる》 は 大丈夫《だいじょうぶ》 でした か。`, `Were you all right last night?`],
      [`ご家族《かぞく》 は お元気《げんき》 です か。`, `Is your family well?`],
      [`この 町《まち》 は あまり 有名《ゆうめい》 では ありません。`, `This town is not very famous.`],
      [`兄《あに》 は 料理《りょうり》 が 上手《じょうず》 です。`, `My older brother is good at cooking.`],
      [`きれい な 公園《こうえん》 です ね。`, `It's a lovely park, isn't it.`]
    ],
    quiz: [
      [`How do you say "I was free yesterday"?`, [`昨日《きのう》 は 暇《ひま》かった です。`, `昨日《きのう》 は 暇《ひま》 でした。`, `昨日《きのう》 は 暇《ひま》 な でした。`], 1, `The past of a な-adjective is でした.`],
      [`＿ 食《た》べ物《もの》 は 何《なん》 です か。 "What food do you dislike?" What fills the gap?`, [`嫌《きら》い な`, `嫌《きら》くない`, `嫌《きら》い`], 0, `嫌《きら》い is a な-adjective, so it takes な before a noun.`],
      [`What does 母《はは》 は 元気《げんき》 では ありません でした mean?`, [`My mother is well.`, `My mother was well.`, `My mother was not well.`], 2, `では ありません でした is the past negative.`],
      [`Which of these is NOT a な-adjective?`, [`寒《さむ》い`, `有名《ゆうめい》`, `静《しず》か`], 0, `寒《さむ》い is an い-adjective; its negative is 寒《さむ》くない.`],
      [`How do you praise someone's English?`, [`英語《えいご》 が 上手《じょうず》 な です ね。`, `英語《えいご》 が 上手《じょうず》 です ね。`, `英語《えいご》 が 上手《じょうず》く です ね。`], 1, `At the end of a sentence a な-adjective takes only です.`],
      [`元気《げんき》 ＿ 子《こ》ども "a lively child". What fills the gap?`, [`い`, `な`, `の`], 1, `元気《げんき》 is a な-adjective, so な links it to the noun.`]
    ]
  }
});
