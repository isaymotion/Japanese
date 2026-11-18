/* Lesson extras part 17 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N2 lessons
   (n2-ka-to-omou-to, n2-saichuu, n2-wo-kikkake-ni, n2-ni-hanshite, n2-nimo-kakawarazu, n2-to-shitara).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n2-ka-to-omou-to': {
    mistakes: [
      [`予約《よやく》 を して から で ない と、 受診《じゅしん》 できます。`, `予約《よやく》 を して から で ない と、 受診《じゅしん》 できません。`, `〜て から で ない と must end in a negative or "impossible" idea.`],
      [`ベル が 鳴《な》る か 鳴《な》った か の うち に、 教室《きょうしつ》 を 飛《と》び出《だ》した。`, `ベル が 鳴《な》る か 鳴《な》らない か の うち に、 教室《きょうしつ》 を 飛《と》び出《だ》した。`, `The second verb in 〜か 〜ない か の うち に is the same verb in its ない-form.`],
      [`雨《あめ》 が やんだ か と 思《おも》ったら、 出《で》かけましょう。`, `雨《あめ》 が やんだら、 出《で》かけましょう。`, `〜か と 思《おも》ったら reports something that actually happened, so it cannot end in an invitation; use 〜たら.`]
    ],
    more: [
      [`夫《おっと》 は 布団《ふとん》 に 入《はい》った か と 思《おも》う と、 すぐ 起《お》き上《あ》がって 部屋《へや》 の 中《なか》 を 歩《ある》き回《まわ》ります。`, `(Family) My husband no sooner gets into bed than he gets up again and paces around the room.`],
      [`主治医《しゅじい》 と 相談《そうだん》 して から で ない と、 外泊《がいはく》 は 決《き》められません。`, `We can't decide about an overnight stay at home until I've talked it over with the attending doctor.`],
      [`自分《じぶん》 が 病気《びょうき》 に なって はじめて、 患者《かんじゃ》さん の 気持《きも》ち が 少《すこ》し わかる よう に なりました。`, `Only after falling ill myself did I begin to understand a little how patients feel.`],
      [`子《こ》どもたち は 「いただきます」 と 言《い》う か 言《い》わない か の うち に、 料理《りょうり》 に 手《て》 を 伸《の》ばした。`, `The children had barely said "itadakimasu" when they reached for the food.`],
      [`電車《でんしゃ》 が 動《うご》き出《だ》した か と 思《おも》ったら、 すぐ に また 止《と》まって しまった。`, `No sooner had the train started moving than it stopped again.`],
      [`実際《じっさい》 に 住《す》んで みて はじめて、 その 町《まち》 の よさ が わかる もの です。`, `You only really see what is good about a town once you have actually lived there.`]
    ],
    quiz: [
      [`"You can't go home until your fever comes down." 熱《ねつ》 が 下《さ》がって ＿、 帰《かえ》れません。`, [`から で ない と`, `はじめて`, `か と 思《おも》ったら`], 0, `〜て から で ない と sets a condition on timing and ends in a negative.`],
      [`夫《おっと》 は 怒《おこ》った か と 思《おも》う と、 すぐ に 謝《あやま》って きます means:`, [`My husband gets angry only when he thinks I will apologize.`, `My husband no sooner gets angry than he comes and apologizes.`, `My husband thinks about apologizing but gets angry instead.`], 1, `〜か と 思《おも》う と: A happens, and at once B, often the opposite.`],
      [`Which of these is a natural Japanese sentence?`, [`明日《あした》 晴《は》れた か と 思《おも》ったら、 海《うみ》 に 行《い》きましょう。`, `結果《けっか》 を 見《み》て から で ない と、 安心《あんしん》 して ください。`, `姉《あね》 は 電話《でんわ》 を 切《き》った か と 思《おも》ったら、 また かけて きた。`], 2, `〜か と 思《おも》ったら describes what someone else actually did; the first is a plan, and 〜て から で ない と cannot end in a request.`],
      [`患者《かんじゃ》さん と の 信頼関係《しんらいかんけい》 が あって はじめて、 率直《そっちょく》 な 話《はなし》 が 聞《き》ける means:`, [`You can hear a patient's frank account only once there is trust.`, `Frank talk is the first step to building trust with a patient.`, `The first time you hear frank talk, the patient starts to trust you.`], 0, `In formal style 〜て はじめて states a condition: only when A is in place does B become possible.`],
      [`Which pattern stresses that B began before A was even complete?`, [`〜た とたん`, `〜か 〜ない か の うち に`, `〜て から で ない と`], 1, `〜か 〜ない か の うち に means "barely had A happened when B"; 〜て から で ない と means "not until".`],
      [`A nurse tells a patient that they cannot eat until the test is over. Which fits?`, [`検査《けんさ》 が 終《お》わる か 終《お》わらない か の うち に、 食事《しょくじ》 を して ください。`, `検査《けんさ》 が 終《お》わった か と 思《おも》ったら、 食事《しょくじ》 できます。`, `検査《けんさ》 が 終《お》わって から で ない と、 お食事《しょくじ》 は できません。`], 2, `"Not until" is 〜て から で ない と with a negative; the other two patterns describe past events, not rules or requests.`]
    ]
  },
  'n2-saichuu': {
    mistakes: [
      [`料理《りょうり》 を した 最中《さいちゅう》 に、 電話《でんわ》 が 鳴《な》った。`, `料理《りょうり》 を して いる 最中《さいちゅう》 に、 電話《でんわ》 が 鳴《な》った。`, `A verb before 最中《さいちゅう》 takes the 〜て いる form, even when the sentence is in the past.`],
      [`退院《たいいん》 際《さい》 に、 お薬《くすり》 の 説明《せつめい》 を します。`, `退院《たいいん》 の 際《さい》 に、 お薬《くすり》 の 説明《せつめい》 を します。`, `A noun needs の before 際《さい》.`],
      [`来週《らいしゅう》 の 金曜日《きんようび》 は 祝日《しゅくじつ》 を 当《あ》たる ので、 休診《きゅうしん》 です。`, `来週《らいしゅう》 の 金曜日《きんようび》 は 祝日《しゅくじつ》 に 当《あ》たる ので、 休診《きゅうしん》 です。`, `The pattern is noun + に 当《あ》たる, not を.`]
    ],
    more: [
      [`カウンセリング の 最中《さいちゅう》 に 涙《なみだ》 が 出《で》て きて も、 気《き》 に しなくて 大丈夫《だいじょうぶ》 です よ。`, `If tears come in the middle of a counselling session, please don't worry about it.`],
      [`受診《じゅしん》 の 際《さい》 は、 診察券《しんさつけん》 を 受付《うけつけ》 に お出《だ》し ください。`, `(Notice) When you come for a consultation, please hand your patient card to reception.`],
      [`患者《かんじゃ》さん の 父方《ちちかた》 の 叔父《おじ》 に 当《あ》たる 方《かた》 に も、 似《に》た 症状《しょうじょう》 が あった そう です。`, `We hear that the patient's uncle on the father's side also had similar symptoms.`],
      [`会議《かいぎ》 の 最中《さいちゅう》 に 携帯《けいたい》 が 鳴《な》って しまって、 恥《は》ずかしかった。`, `My phone went off right in the middle of the meeting, and I was embarrassed.`],
      [`先日《せんじつ》 京都《きょうと》 を 訪《たず》ねた 折《おり》 に、 恩師《おんし》 に お会《あ》い しました。`, `(Letter) When I visited Kyoto the other day, I met my old teacher.`],
      [`今年《ことし》 の 誕生日《たんじょうび》 は ちょうど 土曜日《どようび》 に 当《あ》たる ので、 友達《ともだち》 と 出《で》かける つもり です。`, `My birthday falls on a Saturday this year, so I'm planning to go out with friends.`]
    ],
    quiz: [
      [`今《いま》 ちょうど 食事《しょくじ》 の ＿ です ので、 後《あと》 で お電話《でんわ》 します。`, [`最中《さいちゅう》`, `際《さい》`, `折《おり》`], 0, `最中《さいちゅう》 です means "busy doing it right now"; 際《さい》 and 折《おり》 mark an occasion, not an activity in progress.`],
      [`Which suits a hospital notice: "When paying, please show your card"?`, [`お支払《しはら》い の 最中《さいちゅう》 に、 カード を お見《み》せ ください。`, `お支払《しはら》い の 際《さい》 に、 カード を お見《み》せ ください。`, `お支払《しはら》い に 当《あ》たる、 カード を お見《み》せ ください。`], 1, `際《さい》 is the polite "when" of notices; 最中《さいちゅう》 means an interruption mid-activity, and に 当《あ》たる cannot be used this way.`],
      [`来月《らいげつ》 の 三日《みっか》 は 結婚記念日《けっこんきねんび》 に 当《あ》たります means:`, [`We are getting married on the third of next month.`, `The third of next month is our wedding anniversary.`, `We met on the third day of last month.`], 1, `〜に 当《あ》たる says what a date falls on.`],
      [`A patient is not ready to talk to their workplace yet. Which is a gentle suggestion?`, [`折《おり》 を 見《み》て、 職場《しょくば》 に も 相談《そうだん》 して みましょう か。`, `職場《しょくば》 に 相談《そうだん》 して いる 最中《さいちゅう》 です。`, `職場《しょくば》 に 当《あ》たって 相談《そうだん》 しましょう。`], 0, `折《おり》 を 見《み》て means "when the time is right"; the second says the talk is already under way, and に 当《あ》たって does not fit here.`],
      [`ご不明《ふめい》 な 点《てん》 が ある 際《さい》 は、 スタッフ に お尋《たず》ね ください means:`, [`The staff will ask you if anything is unclear.`, `Anything unclear will be explained at the end.`, `If anything is unclear, please ask the staff.`], 2, `際《さい》 is a formal とき: "when there is something unclear".`],
      [`"During the summer holidays I studied Japanese every day." 夏休《なつやす》み の ＿、 毎日《まいにち》 日本語《にほんご》 を 勉強《べんきょう》 しました。`, [`最中《さいちゅう》 に`, `際《さい》 に`, `間《あいだ》`], 2, `A whole period during which something went on is 間《あいだ》; 最中《さいちゅう》 is the busiest point of one activity, and 際《さい》 is a single occasion.`]
    ]
  },
  'n2-wo-kikkake-ni': {
    mistakes: [
      [`会社《かいしゃ》 を 辞《や》めた を きっかけ に、 生活《せいかつ》 が 乱《みだ》れました。`, `会社《かいしゃ》 を 辞《や》めた の を きっかけ に、 生活《せいかつ》 が 乱《みだ》れました。`, `A clause needs の before を きっかけ に.`],
      [`三年《さんねん》 に わたって 治療《ちりょう》 の 結果《けっか》、 回復《かいふく》 しました。`, `三年《さんねん》 に わたる 治療《ちりょう》 の 結果《けっか》、 回復《かいふく》 しました。`, `Before a noun the form is に わたる, not に わたって.`],
      [`何《なに》 を 契機《けいき》 に 不眠《ふみん》 が 出現《しゅつげん》 しました か。`, `何《なに》 が きっかけ で 眠《ねむ》れなく なりました か。`, `Grammatical but 契機《けいき》 and 出現《しゅつげん》 are case-summary words; to a patient ask with きっかけ.`]
    ],
    more: [
      [`父《ちち》 が 亡《な》くなった の を きっかけ に、 お酒《さけ》 の 量《りょう》 が 増《ふ》えた ん です。`, `My drinking went up after my father died.`],
      [`職場《しょくば》 で の 配置転換《はいちてんかん》 を 契機《けいき》 に 不安《ふあん》 が 強《つよ》まり、 欠勤《けっきん》 が 増《ふ》えた。`, `(Case summary) Anxiety increased after a change of post at work, and absences became more frequent.`],
      [`一年《いちねん》 に わたる 外来《がいらい》 で の 治療《ちりょう》 を 経《へ》て、 少《すこ》しずつ 仕事《しごと》 に 戻《もど》れる よう に なりました。`, `After a year of outpatient treatment, I have gradually been able to go back to work.`],
      [`留学《りゅうがく》 を きっかけ に、 自分《じぶん》 で 料理《りょうり》 を する よう に なりました。`, `Studying abroad was what got me cooking for myself.`],
      [`工事《こうじ》 は 三《さん》か月《げつ》 に わたって 行《おこな》われる 予定《よてい》 です。`, `The construction work is planned to go on for three months.`],
      [`この 地方《ちほう》 は 一年《いちねん》 を 通《つう》じて 雨《あめ》 が 少《すく》ない。`, `This region gets little rain all year round.`]
    ],
    quiz: [
      [`Before a noun: 十年《じゅうねん》 ＿ 研究《けんきゅう》`, [`に わたる`, `に わたって`, `を 経《へ》る`], 0, `に わたる is the form that comes before a noun.`],
      [`Which is the most natural way to ask a patient what started their low mood?`, [`何《なに》 を 経《へ》て 気分《きぶん》 が 落《お》ち込《こ》みました か。`, `何《なに》 が きっかけ で 気分《きぶん》 が 落《お》ち込《こ》む よう に なりました か。`, `何《なに》 に わたって 気分《きぶん》 が 落《お》ち込《こ》みました か。`], 1, `何《なに》 が きっかけ で is the everyday question about a trigger; 経《へ》て is a route and わたって a span.`],
      [`一《いっ》か月《げつ》 に わたる 検査入院《けんさにゅういん》 を 経《へ》て、 診断《しんだん》 が つきました means:`, [`A month of tests in hospital failed to give a diagnosis.`, `She was diagnosed and then admitted for a month of tests.`, `The diagnosis was made after a month-long admission for tests.`], 2, `〜を 経《へ》て gives the stage that came first; 診断《しんだん》 が つく means a diagnosis was reached.`],
      [`子《こ》ども が 生《う》まれた ＿ を きっかけ に、 たばこ を やめた。`, [`の`, `が`, `に`], 0, `A clause takes の before を きっかけ に.`],
      [`"All through the treatment, her family supported her." 治療期間《ちりょうきかん》 ＿、 家族《かぞく》 が 支《ささ》えて くれた。`, [`を きっかけ に`, `を 通《つう》じて`, `を 経《へ》て`], 1, `〜を 通《つう》じて covers a whole period; きっかけ names a trigger and 経《へ》て the stage before something.`],
      [`退職《たいしょく》 を 契機《けいき》 に、 趣味《しゅみ》 の 絵《え》 を 再開《さいかい》 した means:`, [`She gave up painting when she retired.`, `She retired so that she could paint.`, `Her retirement became the turning point for taking up painting again.`], 2, `〜を 契機《けいき》 に names the event that started a change.`]
    ]
  },
  'n2-ni-hanshite': {
    mistakes: [
      [`予想《よそう》 を 反《はん》して、 手術《しゅじゅつ》 は 短時間《たんじかん》 で 終《お》わった。`, `予想《よそう》 に 反《はん》して、 手術《しゅじゅつ》 は 短時間《たんじかん》 で 終《お》わった。`, `反《はん》する takes に: 〜に 反《はん》して.`],
      [`心配性《しんぱいしょう》 の 夫《おっと》 に 反《はん》して、 妻《つま》 は のんき です。`, `心配性《しんぱいしょう》 の 夫《おっと》 と は 逆《ぎゃく》 に、 妻《つま》 は のんき です。`, `〜に 反《はん》して needs a noun of expectation, wish or rule, not a person; to contrast two people, use 〜と は 逆《ぎゃく》 に.`],
      [`この 町《まち》 は 静《しず》か 反面《はんめん》、 店《みせ》 が 少《すく》ない。`, `この 町《まち》 は 静《しず》か な 反面《はんめん》、 店《みせ》 が 少《すく》ない。`, `A な-adjective needs な (or である) before 反面《はんめん》.`]
    ],
    more: [
      [`周囲《しゅうい》 の 心配《しんぱい》 と は 逆《ぎゃく》 に、 ご本人《ほんにん》 は 「何《なに》 も 困《こま》って いない」 と 話《はな》して います。`, `(Handover) In contrast to the worries of those around her, she herself says she has no problems.`],
      [`入院生活《にゅういんせいかつ》 は 規則正《きそくただ》しい 反面《はんめん》、 自由《じゆう》 が 少《すく》ない と 感《かん》じる 方《かた》 も います。`, `Life on the ward is regular, but on the other hand some people feel it leaves them little freedom.`],
      [`ご家族《かぞく》 の 期待《きたい》 に 反《はん》して お仕事《しごと》 を 辞《や》めた こと を、 今《いま》 も ご自分《じぶん》 で 責《せ》めて いらっしゃる ん です ね。`, `So you still blame yourself for leaving your job against your family's hopes.`],
      [`天気予報《てんきよほう》 に 反《はん》して、 一日中《いちにちじゅう》 よく 晴《は》れた。`, `Contrary to the forecast, it was sunny all day.`],
      [`都会《とかい》 の 暮《く》らし は 便利《べんり》 な 反面《はんめん》、 家賃《やちん》 が 高《たか》い。`, `City life is convenient, but on the other hand the rent is high.`],
      [`早《はや》く 着《つ》こう と 思《おも》って 近道《ちかみち》 を したら、 逆《ぎゃく》 に 時間《じかん》 が かかって しまった。`, `I took a shortcut to get there sooner, and it actually took longer.`]
    ],
    quiz: [
      [`この 仕事《しごと》 は 大変《たいへん》 ＿ 反面《はんめん》、 やりがい も ある。`, [`だ`, `な`, `の`], 1, `A な-adjective takes な (or である) before 反面《はんめん》.`],
      [`"Contrary to the doctor's prediction, she recovered quickly." 医師《いし》 の 予想《よそう》 ＿、 早《はや》く 回復《かいふく》 した。`, [`に 反《はん》して`, `の 反面《はんめん》`, `に 対《たい》して`], 0, `A result against an expectation is 〜に 反《はん》して.`],
      [`父《ちち》 と は 逆《ぎゃく》 に、 母《はは》 は 夜型《よるがた》 です means:`, [`Like my father, my mother is a night owl.`, `My mother became a night owl because of my father.`, `Unlike my father, my mother is a night owl.`], 2, `〜と は 逆《ぎゃく》 に means "the opposite of": the mother keeps the opposite hours to the father.`],
      [`Choose the one grammatical, natural sentence.`, [`この 薬《くすり》 は よく 効《き》く 反面《はんめん》、 眠気《ねむけ》 が 出《で》る こと が あります。`, `この 薬《くすり》 は よく 効《き》く に 反《はん》して、 眠気《ねむけ》 が 出《で》る こと が あります。`, `この 薬《くすり》 は よく 効《き》く と は 逆《ぎゃく》 に、 眠気《ねむけ》 が 出《で》る こと が あります。`], 0, `Good and bad sides of one treatment take 反面《はんめん》; に 反《はん》して needs a noun such as 予想《よそう》, and と は 逆《ぎゃく》 に needs a noun or の.`],
      [`「運動《うんどう》 する と 疲《つか》れません か。」 「いいえ、 逆《ぎゃく》 に 元気《げんき》 に なります。」 What does 逆《ぎゃく》 に mean here?`, [`as expected`, `on the contrary, if anything`, `at the same time`], 1, `On its own, 逆《ぎゃく》 に means "on the contrary".`],
      [`A nurse writes that a patient had to move rooms against her wishes. Which is natural?`, [`本人《ほんにん》 の 希望《きぼう》 の 反面《はんめん》、 部屋《へや》 を 移《うつ》る こと に なった。`, `本人《ほんにん》 の 希望《きぼう》 に 対《たい》して、 部屋《へや》 を 移《うつ》る こと に なった。`, `本人《ほんにん》 の 希望《きぼう》 に 反《はん》して、 部屋《へや》 を 移《うつ》る こと に なった。`], 2, `Going against someone's wish is 〜に 反《はん》して.`]
    ]
  },
  'n2-nimo-kakawarazu': {
    mistakes: [
      [`雨《あめ》 に も かかわらず、 ぜひ 来《き》て ください。`, `雨《あめ》 でも、 ぜひ 来《き》て ください。`, `〜に も かかわらず reports a fact and cannot end in a request; use でも or 〜て も.`],
      [`体《からだ》 に 悪《わる》い と 知《し》る ながら、 夜更《よふ》かし を して しまいます。`, `体《からだ》 に 悪《わる》い と 知《し》り ながら、 夜更《よふ》かし を して しまいます。`, `ながら follows the ます-stem: 知《し》り ながら.`],
      [`休日《きゅうじつ》 だ に も かかわらず、 先生《せんせい》 が 来《き》て くださいました。`, `休日《きゅうじつ》 に も かかわらず、 先生《せんせい》 が 来《き》て くださいました。`, `A noun goes straight before に も かかわらず (or takes である), never だ.`]
    ],
    more: [
      [`夜間《やかん》 に も かかわらず、 すぐ に 対応《たいおう》 して いただき、 ありがとう ございました。`, `(Family) Thank you for dealing with it so quickly, even though it was the middle of the night.`],
      [`服薬《ふくやく》 を 継続《けいぞく》 して いる に も かかわらず、 幻聴《げんちょう》 が 持続《じぞく》 して いる。`, `(Chart) Despite continued medication, auditory hallucinations persist.`],
      [`眠《ねむ》れて いる と いって も、 夜中《よなか》 に 何度《なんど》 も 目《め》 が 覚《さ》める ん です。`, `I say I'm sleeping, but I wake up many times in the night.`],
      [`残念《ざんねん》 ながら、 今回《こんかい》 は ご希望《きぼう》 に 沿《そ》えません でした。`, `Unfortunately, we were not able to meet your request this time.`],
      [`小《ちい》さい ながら も、 自分《じぶん》 の 店《みせ》 を 持《も》つ こと が できました。`, `Small as it is, I have been able to open a shop of my own.`],
      [`旅行《りょこう》 に 行《い》った と いって も、 隣《となり》 の 県《けん》 に 一泊《いっぱく》 した だけ です。`, `I say I went on a trip, but it was only one night in the next prefecture.`]
    ],
    quiz: [
      [`熱《ねつ》 が ある ＿、 彼《かれ》 は 出勤《しゅっきん》 した。`, [`に も かかわらず`, `に かかわらず`, `から と いって`], 0, `"Despite having a fever" is に も かかわらず; に かかわらず is "regardless of", and から と いって needs a negative ending.`],
      [`「毎日《まいにち》 歩《ある》いて います。 と いって も、 家《いえ》 の 周《まわ》り を 十分《じゅっぷん》 ほど です けど。」 What does と いって も do here?`, [`It gives the reason for walking.`, `It limits what was just said.`, `It rejects a conclusion.`], 1, `〜と いって も means "I do say A, but don't imagine too much".`],
      [`Only one of these is correct. Which?`, [`危険《きけん》 だ と 知《し》る ながら、 彼《かれ》 は 一人《ひとり》 で 山《やま》 に 入《はい》った。`, `危険《きけん》 な ながら、 彼《かれ》 は 一人《ひとり》 で 山《やま》 に 入《はい》った。`, `危険《きけん》 だ と 知《し》り ながら、 彼《かれ》 は 一人《ひとり》 で 山《やま》 に 入《はい》った。`], 2, `Concessive ながら follows the ます-stem of a state verb: 知《し》り ながら.`],
      [`At a formal meeting you thank the guests for coming despite the rain. Which fits?`, [`雨《あめ》 だ けど、 来《き》て くれて ありがとう。`, `雨《あめ》 に も かかわらず、 お越《こ》し いただき ありがとう ございます。`, `雨《あめ》 に かかわらず、 お越《こ》し いただき ありがとう ございます。`], 1, `The first is grammatical but too casual; the third means "regardless of the rain".`],
      [`残念《ざんねん》 ながら、 面会《めんかい》 は 午後《ごご》 八時《はちじ》 まで と なって います means:`, [`Unfortunately, visiting hours end at 8 p.m.`, `The visitor is sorry and will stay until 8 p.m.`, `Visiting is allowed after 8 p.m. on request.`], 0, `残念《ざんねん》 ながら is the set phrase "unfortunately".`],
      [`検査《けんさ》 で 異常《いじょう》 が なかった から と いって、 ＿。`, [`安心《あんしん》 して 帰《かえ》りました`, `症状《しょうじょう》 は 気《き》 の せい です`, `症状《しょうじょう》 が 気《き》 の せい だ と いう わけ では ありません`], 2, `〜から と いって rejects a conclusion and needs a negative ending: normal tests do not mean the symptoms are imagined.`]
    ]
  },
  'n2-to-shitara': {
    mistakes: [
      [`明日《あした》 雨《あめ》 が 降《ふ》る と して も、 遠足《えんそく》 は 中止《ちゅうし》 に なります。`, `明日《あした》 雨《あめ》 が 降《ふ》る と したら、 遠足《えんそく》 は 中止《ちゅうし》 に なります。`, `〜と して も says the result holds anyway, which clashes with a cancellation caused by rain; for the consequence of a supposition, use 〜と したら.`],
      [`万一《まんいち》 停電《ていでん》 した の 場合《ばあい》 は、 職員《しょくいん》 の 指示《しじ》 を お待《ま》ち ください。`, `万一《まんいち》 停電《ていでん》 した 場合《ばあい》 は、 職員《しょくいん》 の 指示《しじ》 を お待《ま》ち ください。`, `A verb goes straight before 場合《ばあい》; only a noun takes の, as in 万一《まんいち》 の 場合《ばあい》.`],
      [`春《はる》 に なる と する と、 花粉症《かふんしょう》 が ひどく なります。`, `春《はる》 に なる と、 花粉症《かふんしょう》 が ひどく なります。`, `〜と する と sets up a supposition; for something that happens every time, use the plain conditional と.`]
    ],
    more: [
      [`もし 退院後《たいいんご》 に 一人暮《ひとりぐ》らし を する と したら、 どんな 手助《てだす》け が あれば 安心《あんしん》 です か。`, `If you were to live alone after discharge, what help would make you feel safe?`],
      [`仮《かり》 に 症状《しょうじょう》 が また 出《で》た と して も、 早《はや》め に 相談《そうだん》 して いただければ、 一緒《いっしょ》 に 対応《たいおう》 を 考《かんが》えられます から ね。`, `Even supposing the symptoms come back, if you talk to us early, we can work out together what to do.`],
      [`万一《まんいち》 検査中《けんさちゅう》 に 気分《きぶん》 が 悪《わる》く なった 場合《ばあい》 は、 すぐ に 中止《ちゅうし》 いたします。`, `(Consent form) In the unlikely event that you feel unwell during the test, it will be stopped at once.`],
      [`この 道《みち》 が 混《こ》んで いる と すれば、 電車《でんしゃ》 で 行《い》った ほう が 早《はや》い かも しれません。`, `If this road is busy, it may be quicker to go by train.`],
      [`「会議《かいぎ》 は 三時《さんじ》 から に なりました。」 「だ と する と、 お昼《ひる》 は ゆっくり 食《た》べられます ね。」`, `"The meeting has moved to three o'clock." "In that case, we can take our time over lunch."`],
      [`万《まん》が一《いち》 道《みち》 に 迷《まよ》った とき の ため に、 地図《ちず》 を 印刷《いんさつ》 して おきました。`, `I printed a map in case I got lost.`]
    ],
    quiz: [
      [`仮《かり》 に 両親《りょうしん》 に 反対《はんたい》 された ＿、 私《わたし》 は 留学《りゅうがく》 します。`, [`と して も`, `と したら`, `と する と`], 0, `The decision holds anyway, so "even supposing" is 〜と して も.`],
      [`彼《かれ》 の 話《はなし》 が 本当《ほんとう》 だ と すれば、 すぐ に 知《し》らせる べき だ means:`, [`Even if what he says is true, nobody should be told.`, `If what he says is true, someone should be told at once.`, `Because he told someone at once, it must be true.`], 1, `〜と すれば sets up a supposition and draws a conclusion from it.`],
      [`Which notice is correct?`, [`万一《まんいち》 地震《じしん》 な 場合《ばあい》 は、 エレベーター を 使《つか》わないで ください。`, `万一《まんいち》 地震《じしん》 が 起《お》きる の 場合《ばあい》 は、 エレベーター を 使《つか》わないで ください。`, `万一《まんいち》 地震《じしん》 が 起《お》きた 場合《ばあい》 は、 エレベーター を 使《つか》わないで ください。`], 2, `万一《まんいち》 + plain verb + 場合《ばあい》 は, with no な or の in between.`],
      [`In a safety plan you ask: "If you couldn't sleep at all again, what would we do first?" Which fits?`, [`また 全然《ぜんぜん》 眠《ねむ》れなく なった と したら、 まず 何《なに》 を しましょう か。`, `また 全然《ぜんぜん》 眠《ねむ》れなく なった と して も、 まず 何《なに》 を しましょう か。`, `また 全然《ぜんぜん》 眠《ねむ》れなく なる と、 まず 何《なに》 を しましょう か。`], 0, `〜と したら sets up a supposition and asks what follows; と して も means "even so", and plain と cannot end in a suggestion.`],
      [`(Information sheet) 万一《まんいち》 検査後《けんさご》 に 体調《たいちょう》 が 変《か》わった 場合《ばあい》 は、 すぐ に ご連絡《れんらく》 ください。 What does 万一《まんいち》 tell the reader?`, [`A change is expected after every test.`, `A change is unlikely, but they should know what to do if it happens.`, `A change has already happened.`], 1, `万一《まんいち》 marks an unlikely, unwelcome event that still has to be planned for.`],
      [`"Even if it is only a small change, please let us know." たとえ 小《ちい》さな 変化《へんか》 ＿、 お知《し》らせ ください。`, [`だ と したら`, `だ と する と`, `だ と して も`], 2, `たとえ goes with 〜と して も, "even supposing".`]
    ]
  }
});
