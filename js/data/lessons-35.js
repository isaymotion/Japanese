/* Lessons part 35 (0.23.0): N4 reviews of existing units: review-n4-te, review-n4-plans, review-n4-purpose, review-n4-passive, review-n4-respect.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level:'N5'|'N4', unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus two optional fields read by js/data/lessons-zz-order.js:
     after: '<lesson id>'  show this lesson directly after that one. Give EVERY lesson of this file an `after`: the first
                           new lesson of a unit the anchor lesson, each following lesson the id of the lesson before it,
                           the unit review the last lesson of the unit. Several lessons with the same `after`: the
                           review: true ones come first, then the others in file order.
     review: true          a unit review: title "Review: <unit>", level and unit of its unit, short recap body, quiz of exactly 12.
   Other lessons have 5 to 7 quiz questions. Examples in the body: <div class="ex"><b>JA</b><span>EN</span></div>.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  { id: 'review-n4-te', level: 'N4', unit: 'More て-forms', title: `Review: More て-forms`, summary: `Bring together 〜て しまう, 〜て おく, 〜て みる, 〜て いく / くる / ある, the を / が verb pairs, 〜ながら, 〜た まま, ところ and 〜た ばかり, and tell the look-alikes apart.`, draft: true, review: true, after: 'nagara-mama-tokoro-bakari',
    body: `<p>This unit added attitude, direction and timing to the て-form and the た-form. Use this page to check that you can choose the right helper.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜て しまう</td><td>all of it; it happened and I regret it</td><td>薬《くすり》 を 飲《の》み忘《わす》れて しまいました。</td></tr>
<tr><td>〜て おく</td><td>do in advance; leave as it is</td><td>次《つぎ》 の 予約《よやく》 を 取《と》って おきます。</td></tr>
<tr><td>〜て みる</td><td>try and see</td><td>深呼吸《しんこきゅう》 を して みて ください。</td></tr>
<tr><td>〜て くる / 〜て いく</td><td>change up to now / from now on</td><td>だんだん よく なって きました。</td></tr>
<tr><td>〜て ある</td><td>a state someone left on purpose</td><td>名前《なまえ》 が 書《か》いて あります。</td></tr>
<tr><td>を / が pairs</td><td>someone acts / it happens</td><td>熱《ねつ》 が 下《さ》がりました。</td></tr>
<tr><td>〜ながら</td><td>two actions at once, one subject</td><td>音楽《おんがく》 を 聞《き》きながら 歩《ある》きます。</td></tr>
<tr><td>〜た まま</td><td>a state left unchanged</td><td>窓《まど》 を 開《あ》けた まま 出《で》かけました。</td></tr>
<tr><td>ところ / 〜た ばかり</td><td>the moment of an action / only recently</td><td>先月《せんげつ》 始《はじ》めた ばかり です。</td></tr></table>
<h3>Watch out</h3>
<ul><li>〜て おく is the preparing; 〜て ある is the prepared state: 予約《よやく》 して おきました → 予約《よやく》 して あります.</li>
<li>〜て ある takes only a transitive verb: 窓《まど》 が 開《あ》けて あります, never 開《あ》いて あります.</li>
<li>Match the particle to the verb: 電気《でんき》 を つけました, 電気《でんき》 が つきました.</li>
<li>〜て くる looks back (だんだん); 〜て いく looks ahead (これから).</li>
<li>With 先週《せんしゅう》 or 先月《せんげつ》, only 〜た ばかり works, not 〜た ところ.</li></ul>
<h3>Putting them together</h3>
<div class="ex"><b>この 薬《くすり》 は 飲《の》み始《はじ》めた ばかり な ので、 もう 少《すこ》し 続《つづ》けて みましょう。</b><span>You've only just started this medicine, so let's keep going a little longer and see.</span></div>
<div class="ex"><b>次《つぎ》 の 予約《よやく》 は 取《と》って あります。 来週《らいしゅう》 は お薬手帳《くすりてちょう》 を 持《も》って きて ください。</b><span>Your next appointment is booked. Next week, please bring your medication record book.</span></div>
<div class="ex"><b>熱《ねつ》 が 少《すこ》し ずつ 下《さ》がって きました ね。</b><span>Your fever has been coming down little by little.</span></div>
<div class="ex"><b>つい スマホ を 見《み》ながら ご飯《はん》 を 食《た》べて しまいます。</b><span>I end up eating while looking at my phone.</span></div>
<div class="ex"><b>テレビ を つけた まま 寝《ね》て しまいました。</b><span>I fell asleep with the TV still on.</span></div>
<div class="note">Go back to <a href="#/lessons/te-iku-kuru-aru">〜て いく, 〜て くる, 〜て ある</a> or <a href="#/lessons/nagara-mama-tokoro-bakari">〜ながら, まま, ところ, ばかり</a> if any question below catches you out.</div>`,
    quiz: [
      [`Fill the blank for "I left my wallet at home by mistake": 財布《さいふ》 を 家《いえ》 に 忘《わす》れて ＿。`, [`おきました`, `しまいました`, `みました`], 1, `〜て しまう shows something happened that the speaker did not want.`],
      [`診察《しんさつ》 の 前《まえ》 に、 聞《き》きたい こと を 書《か》いて おいて ください means:`, [`Before your appointment, please write down what you want to ask.`, `Before your appointment, please try asking questions.`, `I'm sorry I wrote down my questions before the appointment.`], 0, `〜て おく means doing something in advance, ready for later.`],
      [`Which sentence means "Let's try walking for ten minutes and see"?`, [`十分《じゅっぷん》 歩《ある》いて おきましょう。`, `十分《じゅっぷん》 歩《ある》いて しまいましょう。`, `十分《じゅっぷん》 歩《ある》いて みましょう。`], 2, `〜て みる is "try and see", and 〜て みましょう is the gentle suggestion.`],
      [`これから 少《すこ》し ずつ お薬《くすり》 を 減《へ》らして ＿。 (We'll reduce the medicine little by little from now on.)`, [`きました`, `いきます`, `あります`], 1, `〜て いく describes change from now into the future.`],
      [`予約《よやく》 して おきました (I booked it in advance). Which sentence describes the booked state that results?`, [`予約《よやく》 して しまいます。`, `予約《よやく》 して いきます。`, `予約《よやく》 して あります。`], 2, `〜て おく is the action of preparing; 〜て ある is the prepared state that results.`],
      [`Fill the blank: 急《きゅう》 に 電気《でんき》 ＿ 消《き》えました。`, [`を`, `に`, `が`], 2, `消《き》える is intransitive, so the light takes が.`],
      [`Fill the blank for "I eat while watching TV": テレビ を ＿ ご飯《はん》 を 食《た》べます。`, [`見《み》ながら`, `見《み》るながら`, `見《み》たながら`], 0, `ながら follows the ます-stem: 見《み》.`],
      [`How do you say "I was discharged only last week"?`, [`先週《せんしゅう》 退院《たいいん》 した ところ です。`, `先週《せんしゅう》 退院《たいいん》 した ばかり です。`, `先週《せんしゅう》 退院《たいいん》 する ところ です。`], 1, `With a time such as 先週《せんしゅう》, only 〜た ばかり can say "only recently".`],
      [`What does 窓《まど》 が 開《あ》けて あります tell you that 窓《まど》 が 開《あ》いて います does not?`, [`Someone opened it on purpose.`, `Someone is opening it right now.`, `It will be opened later.`], 0, `Transitive verb + 〜て ある is a state left on purpose; intransitive + 〜て いる is only the state.`],
      [`眼鏡《めがね》 を かけた まま 寝《ね》て しまいました means:`, [`I took off my glasses and went to sleep.`, `I fell asleep with my glasses still on.`, `I'll put my glasses on before I sleep.`], 1, `〜た まま keeps the state (glasses on), and 〜て しまう adds that it was not meant to happen.`],
      [`この 薬《くすり》 は 飲《の》み始《はじ》めた ばかり です から、 もう 少《すこ》し 続《つづ》けて ＿。 (…so let's keep on with it a little longer and see.)`, [`みましょう`, `しまいましょう`, `ありましょう`], 0, `〜た ばかり gives the reason (only just started), and 〜て みましょう suggests a trial.`],
      [`Fill the blank for "The fever has been coming down little by little": 熱《ねつ》 ＿ 少《すこ》し ずつ 下《さ》がって きました。`, [`を`, `で`, `が`], 2, `下《さ》がる is intransitive and takes が; 〜て くる shows change up to now.`]
    ] },

  { id: 'review-n4-plans', level: 'N4', unit: 'Plans, advice and rules', title: `Review: Plans, advice and rules`, summary: `Bring together the volitional, こと に する / なる, よう に する / なる, the advice patterns and the commands you must recognise, and choose the right one for a patient.`, draft: true, review: true, after: 'commands',
    body: `<p>This unit was about what people intend, decide, try, advise and order. Most of the patterns look alike, so the job of each one matters more than its shape.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜よう / 〜おう (か)</td><td>plain "let's", "shall we"</td><td>そろそろ 帰《かえ》ろう か。</td></tr>
<tr><td>〜よう と 思《おも》います</td><td>I'm thinking of doing</td><td>仕事《しごと》 に 戻《もど》ろう と 思《おも》って います。</td></tr>
<tr><td>〜よう と する</td><td>tried to, was about to</td><td>寝《ね》よう と しました が、 眠《ねむ》れません でした。</td></tr>
<tr><td>〜こと に する / なる</td><td>I decide / it was decided, the rule</td><td>来週《らいしゅう》 退院《たいいん》 する こと に なりました。</td></tr>
<tr><td>〜よう に する / なる</td><td>make an effort to / come to</td><td>夜《よる》 眠《ねむ》れる よう に なりました。</td></tr>
<tr><td>〜た / 〜ない ほう が いい</td><td>you should / had better not</td><td>お酒《さけ》 は 飲《の》まない ほう が いい です。</td></tr>
<tr><td>〜と いい, 〜て みて は どう でしょう か</td><td>a gentle tip, the softest suggestion</td><td>日記《にっき》 を 書《か》いて みて は どう でしょう か。</td></tr>
<tr><td>しろ, 〜な, 〜なさい</td><td>commands to recognise, not to use</td><td>「出《で》て いけ」 と 言《い》う 声《こえ》 が 聞《き》こえます。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Volitional + と 思《おも》います is an intention (行《い》こう); dictionary form + と 思《おも》います is a guess (行《い》く).</li>
<li>こと is a decision, よう is effort or change. A verb never goes straight before に なる: 話《はな》せる よう に なりました.</li>
<li>Negative advice is 〜ない ほう が いい, never 〜なかった ほう が いい.</li>
<li>To patients say 〜ましょう and 〜て ください, not the plain volitional, the imperative or 〜なさい.</li></ul>
<h3>Putting them together</h3>
<div class="ex"><b>夜《よる》 眠《ねむ》れる よう に なった ので、 来月《らいげつ》 から 仕事《しごと》 に 戻《もど》ろう と 思《おも》います。</b><span>I've become able to sleep at night, so I'm thinking of going back to work next month.</span></div>
<div class="ex"><b>寝《ね》る 前《まえ》 は スマホ を 見《み》ない よう に した ほう が いい と 思《おも》います。</b><span>I think it would be good to try not to look at your phone before bed.</span></div>
<div class="ex"><b>来週《らいしゅう》 退院《たいいん》 する こと に なりました が、 しばらく は 無理《むり》 を しない ほう が いい と 思《おも》います。</b><span>You'll be discharged next week, but for a while it's better not to push yourself.</span></div>
<div class="ex"><b>「早《はや》く 帰《かえ》れ」 と 言《い》う 声《こえ》 が 聞《き》こえて、 家《いえ》 に 帰《かえ》ろう と しました。</b><span>I heard a voice saying "Go home now", and I tried to go home.</span></div>
<div class="note">If the こと / よう questions are hard, go back to <a href="#/lessons/koto-ni-suru-naru">Decisions, rules and change</a>.</div>`,
    quiz: [
      [`What is the volitional form of 帰《かえ》る?`, [`帰《かえ》ろう`, `帰《かえ》よう`, `帰《かえ》りよう`], 0, `帰《かえ》る is a group 1 verb: る moves to ろ and adds う.`],
      [`Which sentence states an intention?`, [`明日《あした》 は 早《はや》く 起《お》きよう と 思《おも》います。`, `明日《あした》 は 雨《あめ》 が 降《ふ》る と 思《おも》います。`, `明日《あした》 は 寒《さむ》い と 思《おも》います。`], 0, `Volitional + と 思《おも》います is an intention; the other two are guesses.`],
      [`薬《くすり》 を 飲《の》もう と した とき、 電話《でんわ》 が 鳴《な》りました means:`, [`I took my medicine, and then the phone rang.`, `I decided to take my medicine because the phone rang.`, `Just as I was about to take my medicine, the phone rang.`], 2, `Volitional + と した とき is the moment just before an action.`],
      [`Which sentence states a decision the speaker has made?`, [`お酒《さけ》 は 飲《の》まない こと に しました。`, `お酒《さけ》 は 飲《の》まない ほう が いい です。`, `お酒《さけ》 は 飲《の》めなく なりました。`], 0, `こと に しました is the speaker's own decision; the others are advice and a change ("I can no longer drink").`],
      [`A nurse says 外出《がいしゅつ》 する とき は 看護師《かんごし》 に 伝《つた》える こと に なって います. What is she telling you?`, [`She is thinking of telling a nurse.`, `Tell a nurse, now. (an order)`, `It is the rule to tell a nurse when you go out.`], 2, `こと に なって います states an existing rule; it is neither an intention nor a command.`],
      [`人《ひと》 と 話《はな》せる ＿ に なりました。 (I've become able to talk with people.)`, [`こと`, `よう`, `ほう`], 1, `Potential form + よう に なる describes a change in ability.`],
      [`Choose the correct advice: "It's better not to stop the medicine suddenly."`, [`急《きゅう》 に 薬《くすり》 を やめなかった ほう が いい です。`, `急《きゅう》 に 薬《くすり》 を やめた ほう が いい です。`, `急《きゅう》 に 薬《くすり》 を やめない ほう が いい です。`], 2, `Negative advice uses the plain ない-form + ほう が いい, never なかった.`],
      [`Which is the gentlest way to suggest keeping a mood diary?`, [`気分《きぶん》 を 日記《にっき》 に 書《か》きなさい。`, `気分《きぶん》 を 日記《にっき》 に 書《か》いて みて は どう でしょう か。`, `気分《きぶん》 を 日記《にっき》 に 書《か》け。`], 1, `〜て みて は どう でしょう か invites without pressure; 〜なさい and the imperative are orders.`],
      [`What is the imperative of 起《お》きる?`, [`起《お》きろ`, `起《お》け`, `起《お》きよう`], 0, `Group 2 verbs change る to ろ; 起《お》きよう is the volitional.`],
      [`A patient says 「動《うご》く な」 と 言《い》う 声《こえ》 が 聞《き》こえます. What does the voice say?`, [`"Move."`, `"Don't move."`, `"Let's move."`], 1, `Dictionary form + な is a blunt negative command.`],
      [`毎朝《まいあさ》 歩《ある》こう と 思《おも》います and 毎朝《まいあさ》 歩《ある》く よう に して います: what is the difference?`, [`The first is a rule of the ward; the second is a guess.`, `Both mean that someone told the speaker to walk.`, `The first is an idea for the future; the second is an effort already kept up.`], 2, `Volitional + と 思《おも》います is an intention; よう に して います is a habit the speaker keeps.`],
      [`A patient says 最近《さいきん》、 外《そと》 に 出《で》られる よう に なりました. Which reply fits?`, [`外《そと》 に 出《で》ろ。`, `それ は よかった です ね。 これから も 続《つづ》けて いきましょう。`, `外《そと》 に 出《で》る こと に なって います。`], 1, `The patient reports progress; the reply welcomes it in polite style, not with an order or a rule.`]
    ] },

  { id: 'review-n4-purpose', level: 'N4', unit: 'Purpose and contrast', title: `Review: Purpose and contrast`, summary: `Bring together ため に, よう に, the two kinds of の に, 〜ても and 〜し, and choose the right one by the verb in front of it and the feeling of the sentence.`, draft: true, review: true, after: 'concession',
    body: `<p>This unit gave reasons for doing things and ways of saying "even if" and "although". Two of the patterns share the shape の に, so read what comes after it.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜ため に</td><td>in order to (an action you choose); after a noun + の: for the sake of</td><td>仕事《しごと》 に 戻《もど》る ため に、 早《はや》く 寝《ね》て います。</td></tr>
<tr><td>noun + の ため に</td><td>because of (notices)</td><td>大雨《おおあめ》 の ため に、 電車《でんしゃ》 が 止《と》まりました。</td></tr>
<tr><td>〜よう に</td><td>so that (potential, ない-form, uncontrollable)</td><td>忘《わす》れない よう に、 メモ します。</td></tr>
<tr><td>〜の に + 使《つか》う / 便利《べんり》 / かかる</td><td>used for, it takes</td><td>病院《びょういん》 に 来《く》る の に 一時間《いちじかん》 かかります。</td></tr>
<tr><td>stem + に 行《い》く / 来《く》る</td><td>go or come to do</td><td>薬《くすり》 を もらい に 来《き》ました。</td></tr>
<tr><td>〜ても, いくら 〜ても</td><td>even if; no matter how</td><td>よく なって も、 薬《くすり》 は 続《つづ》けて ください。</td></tr>
<tr><td>〜の に (although)</td><td>an unexpected fact, with feeling</td><td>薬《くすり》 を 飲《の》んで いる の に、 眠《ねむ》れません。</td></tr>
<tr><td>〜し、〜し</td><td>and what's more (reasons)</td><td>眠《ねむ》れない し、 食欲《しょくよく》 も ありません。</td></tr></table>
<h3>Watch out</h3>
<ul><li>眠《ねむ》れる ため に is wrong: after a potential form use よう に.</li>
<li>Purpose の に is followed by 使《つか》う, 便利《べんり》 or かかる; "although" の に joins two facts.</li>
<li>No request after "although" の に: 雨《あめ》 でも 来《き》て ください, not 雨《あめ》 な の に.</li>
<li>Forms: 痛《いた》くて も, 静《しず》か でも, 雨《あめ》 でも; but 静《しず》か な の に, 雨《あめ》 な の に.</li></ul>
<h3>Putting them together</h3>
<div class="ex"><b>眠《ねむ》れる よう に お酒《さけ》 を 飲《の》んで います が、 飲《の》んで も よく 眠《ねむ》れません。</b><span>I drink so that I can sleep, but even when I drink I don't sleep well.</span></div>
<div class="ex"><b>健康《けんこう》 の ため に 毎朝《まいあさ》 歩《ある》いて いる の に、 体重《たいじゅう》 が 減《へ》りません。</b><span>I walk every morning for my health, and yet my weight isn't going down.</span></div>
<div class="ex"><b>忘《わす》れない よう に メモ して おいた の に、 その メモ を なくして しまいました。</b><span>I wrote a note so that I wouldn't forget, and then I lost the note.</span></div>
<div class="ex"><b>病院《びょういん》 に 来《く》る の に 一時間《いちじかん》 かかる し、 待《ま》ち時間《じかん》 も 長《なが》い です。</b><span>It takes an hour to get to the hospital, and the wait is long too.</span></div>
<div class="ex"><b>いくら 忙《いそが》しくて も、 食事《しょくじ》 は きちんと とる よう に して ください。</b><span>However busy you are, please make sure you eat proper meals.</span></div>
<div class="note">Choose ため に or よう に by the verb before it, and tell 〜ても from 〜の に by asking: is it a condition (even if) or a fact that disappoints (although)?</div>`,
    quiz: [
      [`仕事《しごと》 に 戻《もど》る ＿ に、 毎朝《まいあさ》 同《おな》じ 時間《じかん》 に 起《お》きて います。`, [`ため`, `こと`, `し`], 0, `戻《もど》る is an action the speaker chooses, so ため に gives the purpose.`],
      [`Choose the correct sentence for "I take the medicine so that I can sleep well."`, [`よく 眠《ねむ》れる ため に、 薬《くすり》 を 飲《の》みます。`, `よく 眠《ねむ》れる よう に、 薬《くすり》 を 飲《の》みます。`, `よく 眠《ねむ》れる の に、 薬《くすり》 を 飲《の》みます。`], 1, `After a potential form use よう に; の に here would mean "although I can sleep well".`],
      [`この アプリ は 薬《くすり》 の 時間《じかん》 を 覚《おぼ》える の に 便利《べんり》 です means:`, [`Although I remember the times, the app is handy.`, `I use the app so that I don't remember the times.`, `This app is handy for remembering when to take medicine.`], 2, `Dictionary form + の に + 便利《べんり》 says what something is good for.`],
      [`Fill the blank: 検査《けんさ》 の 結果《けっか》 を 聞《き》き ＿ 来《き》ました。 (I came to hear my test results.)`, [`で`, `に`, `を`], 1, `ます-stem + に + 来《く》る gives the purpose of coming.`],
      [`台風《たいふう》 の ため に、 今日《きょう》 の 診察《しんさつ》 は 休《やす》み です. Here ため に means:`, [`in order to`, `even if`, `because of`], 2, `A typhoon is not a purpose; noun + の ため に here gives a cause, as on a notice.`],
      [`What is the "even if" form of 静《しず》か?`, [`静《しず》か でも`, `静《しず》かくて も`, `静《しず》か な でも`], 0, `A な-adjective takes でも directly, like a noun.`],
      [`たくさん 寝《ね》た の に、 まだ 眠《ねむ》い です. How does the speaker feel?`, [`pleased with the sleep`, `surprised or frustrated`, `sure about tomorrow`], 1, `"Although" の に joins two facts and shows that the result is not what the speaker expected.`],
      [`夜《よる》 は 眠《ねむ》れない ＿、 食欲《しょくよく》 も ありません。`, [`ても`, `に`, `し`], 2, `し lists facts that point the same way; も often follows in the second part.`],
      [`Which sentence uses の に to mean "although"?`, [`駅《えき》 まで 歩《ある》く の に 十分《じゅっぷん》 かかります。`, `この 薬《くすり》 は 眠《ねむ》る の に 使《つか》います。`, `薬《くすり》 を 飲《の》んで いる の に、 よく なりません。`], 2, `The first two are purpose の に (followed by かかる and 使《つか》う); the third joins two facts with disappointment.`],
      [`How do you say "Even if you feel better, please keep taking the medicine"?`, [`よく なった の に、 薬《くすり》 を 続《つづ》けて ください。`, `よく なって も、 薬《くすり》 を 続《つづ》けて ください。`, `よく なる ため に、 薬《くすり》 を やめて ください。`], 1, `〜ても can be followed by a request; "although" の に cannot, and the third says "stop".`],
      [`眠《ねむ》れる よう に お酒《さけ》 を 飲《の》んで も、 よく 眠《ねむ》れません means:`, [`Even if I drink so that I can sleep, I don't sleep well.`, `I drink because I sleep well.`, `I can sleep well, so I don't drink.`], 0, `よう に gives the goal (being able to sleep), and 〜ても says the result does not follow.`],
      [`健康《けんこう》 の ため に 歩《ある》いて いる の に、 体重《たいじゅう》 が 減《へ》りません. What does the speaker say?`, [`They walk for their health, yet their weight isn't going down.`, `They walk because their weight isn't going down.`, `Even if they walk, they will never be healthy.`], 0, `の ため に gives the purpose of walking, and の に adds the disappointing result.`]
    ] },

  { id: 'review-n4-passive', level: 'N4', unit: 'Passive and causative', title: `Review: Passive and causative`, summary: `Bring together the passive, the affected passive, the causative and the causative-passive, read each ending at a glance, and use them in history taking.`, draft: true, review: true, after: 'causative-passive',
    body: `<p>This unit changed who does what to whom. The four forms differ by a syllable or two, so the first skill is reading the ending; the second is hearing what the patient means by it.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜れる / 〜られる</td><td>be done to; the doer takes に</td><td>先生《せんせい》 に ほめられました。</td></tr>
<tr><td>passive with no doer</td><td>procedures, notices, the news</td><td>手術《しゅじゅつ》 は 明日《あした》 行《おこな》われます。</td></tr>
<tr><td>affected passive</td><td>it happened to me and troubled me</td><td>財布《さいふ》 を 盗《ぬす》まれました。</td></tr>
<tr><td>〜せる / 〜させる</td><td>make or let</td><td>子《こ》ども に 野菜《やさい》 を 食《た》べさせました。</td></tr>
<tr><td>〜させて ください / いただきます</td><td>let me; I will (politely)</td><td>少《すこ》し 考《かんが》えさせて ください。</td></tr>
<tr><td>〜させられる, short 〜される</td><td>be made to do</td><td>一時間《いちじかん》 も 待《ま》たされました。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Read the ending: 飲《の》まれる (passive), 飲《の》ませる (causative), 飲《の》まされる (causative-passive).</li>
<li>The doer of a passive takes に: 先生《せんせい》 に ほめられました. With が, the teacher is the one praised.</li>
<li>食《た》べられる can be passive or potential; context decides.</li>
<li>説明《せつめい》 させて ください is "let me explain"; 説明《せつめい》 して ください is "please explain".</li>
<li>Verbs in す have no short form: 話《はな》させられる.</li></ul>
<h3>Putting them together</h3>
<div class="ex"><b>子《こ》ども の ころ、 よく 父《ちち》 に 叱《しか》られて、 毎日《まいにち》 勉強《べんきょう》 させられました。</b><span>As a child I was often scolded by my father and made to study every day.</span></div>
<div class="ex"><b>上司《じょうし》 に 毎晩《まいばん》 残業《ざんぎょう》 させられて、 家族《かぞく》 も 心配《しんぱい》 させて しまいました。</b><span>My boss made me do overtime every night, and I ended up worrying my family too.</span></div>
<div class="ex"><b>前《まえ》 の 病院《びょういん》 で、 少《すこ》し 休《やす》んだ ほう が いい と 言《い》われました。</b><span>At my previous hospital I was told it would be better to rest for a while.</span></div>
<div class="ex"><b>検査《けんさ》 は 明日《あした》 の 朝《あさ》 行《おこな》われます。 その 前《まえ》 に、 少《すこ》し 説明《せつめい》 させて いただきます。</b><span>The test will be done tomorrow morning. Before that, let me explain a little.</span></div>
<div class="note">When a patient says they are watched, talked about or made to do things, ask with 〜と 感《かん》じる こと は あります か and reflect the feeling, as in <a href="#/lessons/passive-suffering">the affected passive</a> and <a href="#/lessons/causative-passive">the causative-passive</a>.</div>`,
    quiz: [
      [`What is the passive form of 使《つか》う?`, [`使《つか》える`, `使《つか》われる`, `使《つか》あれる`], 1, `Verbs ending in う use わ in the passive; 使《つか》える is the potential.`],
      [`Fill the blank for "I was scolded by my mother": 母《はは》 ＿ 叱《しか》られました。`, [`が`, `を`, `に`], 2, `In the passive the doer is marked with に.`],
      [`Which sentence uses the passive with no doer, as on a notice?`, [`検査《けんさ》 は 明日《あした》 の 朝《あさ》 行《おこな》われます。`, `検査《けんさ》 の 結果《けっか》 を 説明《せつめい》 させて ください。`, `検査《けんさ》 の 結果《けっか》 を 説明《せつめい》 させられました。`], 0, `行《おこな》われます is the passive with no doer; the others are a causative request and a causative-passive.`],
      [`Which means "Someone stepped on my foot on the train"?`, [`電車《でんしゃ》 で 足《あし》 に 踏《ふ》まれました。`, `電車《でんしゃ》 で 足《あし》 を 踏《ふ》まれました。`, `電車《でんしゃ》 で 足《あし》 を 踏《ふ》みました。`], 1, `In the affected passive the speaker's belonging keeps を; 踏《ふ》みました means "I stepped on".`],
      [`Which asks neutrally about the feeling of being watched?`, [`だれ か に 見《み》られて いる と 感《かん》じる こと は あります か。`, `だれ か が あなた を 見《み》て います。`, `だれ か に 見《み》させて います か。`], 0, `The passive plus 〜と 感《かん》じる こと は あります か asks about the experience without taking a side.`],
      [`What is the causative form of 休《やす》む?`, [`休《やす》まれる`, `休《やす》める`, `休《やす》ませる`], 2, `Group 1 verbs take the あ-row plus せる: む → ませる.`],
      [`How do you say "Please let me explain"?`, [`説明《せつめい》 して ください。`, `説明《せつめい》 させて ください。`, `説明《せつめい》 されて ください。`], 1, `The causative て-form + ください asks to be allowed to do it yourself.`],
      [`What is the short causative-passive form of 飲《の》む?`, [`飲《の》まされる`, `飲《の》まれる`, `飲《の》ませる`], 0, `Group 1 short form: あ-row + される; 飲《の》まれる is passive and 飲《の》ませる causative.`],
      [`Which form means "be made to say"?`, [`言《い》われる`, `言《い》わせる`, `言《い》わされる`], 2, `言《い》われる is passive and 言《い》わせる causative; あ-row + される is the causative-passive.`],
      [`知《し》らない 人《ひと》 に 見《み》られる の は 嫌《いや》 です. Here 見《み》られる is:`, [`potential: can see`, `causative: make someone look`, `passive: be looked at`], 2, `The doer marked with に shows the passive; for る-verbs the potential has the same shape.`],
      [`子《こ》ども の ころ、 毎日《まいにち》 ピアノ を 練習《れんしゅう》 させられました. What happened?`, [`Someone else made the speaker practise.`, `The speaker chose to practise.`, `The speaker made a child practise.`], 0, `させられる is the causative-passive: the speaker was made to do it.`],
      [`Fill the blank for "I'm sorry I kept you waiting so long": 長《なが》い 間《あいだ》 ＿ すみません でした。`, [`待《ま》たされて`, `待《ま》たせて`, `待《ま》たれて`], 1, `The causative 待《ま》たせる is "make someone wait"; 待《ま》たされる would mean the speaker was kept waiting.`]
    ] },

  { id: 'review-n4-respect', level: 'N4', unit: 'Respect language', title: `Review: Respect language`, summary: `Bring together honorific and humble language, choose which side each verb belongs to, and use the handful of keigo phrases a doctor really needs.`, draft: true, review: true, after: 'kenjougo',
    body: `<p>Honorific language raises the patient's actions; humble language lowers yours. Most mistakes come from using the right verb for the wrong person, so check who does the action first.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>いらっしゃる, おっしゃる, なさる</td><td>honorific verbs for their actions</td><td>今日《きょう》 は どなた と いらっしゃいました か。</td></tr>
<tr><td>お + stem + に なる</td><td>honorific for most verbs</td><td>何時《なんじ》 ごろ お帰《かえ》り に なります か。</td></tr>
<tr><td>お / ご 〜 ください</td><td>a polite request</td><td>問診票《もんしんひょう》 に ご記入《きにゅう》 ください。</td></tr>
<tr><td>〜れる / 〜られる</td><td>a light honorific</td><td>運動《うんどう》 は されて います か。</td></tr>
<tr><td>参《まい》る, 申《もう》す, 伺《うかが》う</td><td>humble verbs for your side</td><td>お話《はなし》 を 伺《うかが》います。</td></tr>
<tr><td>お / ご + stem + する</td><td>a humble action done for them</td><td>今日《きょう》 の 予定《よてい》 を ご説明《せつめい》 します。</td></tr>
<tr><td>〜て おります</td><td>humble 〜て います</td><td>お待《ま》ち して おりました。</td></tr>
<tr><td>ございます</td><td>courteous あります / です</td><td>お手洗《てあら》い は 二階《にかい》 に ございます。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Honorific for them, humble for you: not 私《わたし》 が ご説明《せつめい》 に なります, and not 受付《うけつけ》 で 伺《うかが》って ください.</li>
<li>お待《ま》ち に なって います (they are waiting) and お待《ま》ち して おりました (we were waiting) differ only in に なる and する.</li>
<li>いらっしゃる, おっしゃる and なさる have い in the ます-form: いらっしゃいます.</li>
<li>No お / ご on your own things: 私《わたし》 の 名前《なまえ》.</li></ul>
<h3>Putting them together</h3>
<div class="ex"><b>ご家族《かぞく》 が いらっしゃったら、 お呼《よ》び します ね。</b><span>When your family arrives, I'll call you.</span></div>
<div class="ex"><b>担当医《たんとうい》 は 今《いま》 病棟《びょうとう》 に おります ので、 こちら で 少々《しょうしょう》 お待《ま》ち ください。</b><span>The doctor in charge is on the ward at the moment, so please wait here a little.</span></div>
<div class="ex"><b>検査《けんさ》 の 結果《けっか》 が 出《で》ました。 一緒《いっしょ》 に ご覧《らん》 に なります か。</b><span>Your test results are back. Would you like to look at them together?</span></div>
<div class="ex"><b>何《なに》 か あれば、 いつでも おっしゃって ください。 すぐ に 参《まい》ります。</b><span>If anything comes up, please tell us at any time. I'll come straight away.</span></div>
<div class="note">You need to understand all of this, but in the consulting room clear です/ます with a few set phrases is enough; see <a href="#/lessons/kenjougo">humble language</a>.</div>`,
    quiz: [
      [`What is the ます-form of おっしゃる?`, [`おっしゃります`, `おっしゃいます`, `おっしゃれます`], 1, `おっしゃる is irregular: る becomes い in the ます-form.`],
      [`Which is the honorific of 見《み》る, for what the patient does?`, [`ご覧《らん》 に なる`, `拝見《はいけん》 する`, `見《み》させる`], 0, `ご覧《らん》 に なる is honorific; 拝見《はいけん》 する is humble and 見《み》させる is causative.`],
      [`Fill the blank to ask politely "What work do you do?": お仕事《しごと》 は 何《なに》 を ＿ います か。`, [`いたして`, `なさって`, `申《もう》して`], 1, `なさる is the honorific of する; いたす is humble.`],
      [`Fill the blank for "Please contact us at any time": いつでも ご連絡《れんらく》 ＿。`, [`ください`, `いたします`, `おります`], 0, `ご + する-noun + ください is a polite request; ご連絡《れんらく》 いたします would mean "we will contact you".`],
      [`最近《さいきん》、 運動《うんどう》 は されて います か. Here されて います is:`, [`passive: you are being exercised`, `causative: you make someone exercise`, `the light honorific of して います`], 2, `The passive shape of する is also a light honorific for the patient's action.`],
      [`Which is correct when you give your own name?`, [`私《わたし》 の お名前《なまえ》 は ナバロ です。`, `私《わたし》 の ご名前《なまえ》 は ナバロ です。`, `私《わたし》 の 名前《なまえ》 は ナバロ です。`], 2, `Do not put お or ご on your own things.`],
      [`What is the humble verb for 聞《き》く?`, [`おっしゃる`, `召《め》し上《あ》がる`, `伺《うかが》う`], 2, `伺《うかが》う is humble; おっしゃる (say) and 召《め》し上《あ》がる (eat) are honorific.`],
      [`Fill the blank at reception: こちら が 次回《じかい》 の 予約票《よやくひょう》 ＿。`, [`で ございます`, `で いらっしゃいます`, `で おります`], 0, `で ございます is the courteous です for things; で いらっしゃいます is for people.`],
      [`Which sentence is correct for "I'll explain"?`, [`私《わたし》 が ご説明《せつめい》 に なります。`, `私《わたし》 が ご説明《せつめい》 します。`, `私《わたし》 が 説明《せつめい》 なさいます。`], 1, `ご + する-noun + します is humble; ご〜 に なる and なさる are honorific and never used for yourself.`],
      [`You tell a patient that their family is waiting. Which sentence raises the family correctly?`, [`ご家族《かぞく》 は 待合室《まちあいしつ》 で お待《ま》ち して おります。`, `ご家族《かぞく》 は 待合室《まちあいしつ》 で 待《ま》たせて います。`, `ご家族《かぞく》 は 待合室《まちあいしつ》 で お待《ま》ち に なって います。`], 2, `お + stem + に なる is honorific; お待《ま》ち して おります is humble and would lower the family.`],
      [`How do you ask a patient to ask at reception?`, [`受付《うけつけ》 で 伺《うかが》って ください。`, `受付《うけつけ》 で お聞《き》き ください。`, `受付《うけつけ》 で 拝見《はいけん》 して ください。`], 1, `お + stem + ください is the polite request; 伺《うかが》う and 拝見《はいけん》 する are humble and cannot describe the patient's action.`],
      [`Which pair gives "come" as honorific (for the patient) and then humble (for you)?`, [`いらっしゃる / 参《まい》る`, `参《まい》る / いらっしゃる`, `おる / いらっしゃる`], 0, `いらっしゃる raises the other person's coming; 参《まい》る lowers your own.`]
    ] }
);
