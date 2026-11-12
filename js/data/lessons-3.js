/* Lessons part 3: plain forms, saying more, politeness and culture, clinical Japanese (13 lessons).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md. */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  { id: 'nai-form', level: 'N4', unit: 'Plain forms', title: `The ない-form: not, don't, must, need not`, summary: `How to make the plain negative of every verb and use it for "please don't", "must" and "you don't have to".`, draft: true,
    body: `<p>Much of what you say to patients is about what to avoid and what is or is not necessary: do not stop the medicine suddenly, you must come back next week, you do not have to answer today. All of these are built on the plain negative, the ない-form. Patients also use it constantly when they describe symptoms.</p>
<h3>Making the ない-form</h3>
<p>Group 1 (う-verbs): change the last kana from the う-row to the あ-row and add ない. Verbs ending in う are the one surprise: う becomes わ, so 使《つか》う becomes 使《つか》わない. The verb ある is irregular: its negative is simply ない.</p>
<p>Group 2 (る-verbs): drop る and add ない. Group 3: する becomes しない, and 来《く》る becomes 来《こ》ない (the reading of the kanji changes).</p>
<table><tr><th>Group</th><th>Dictionary form</th><th>ない-form</th><th>Polite negative</th></tr>
<tr><td>1</td><td>飲《の》む</td><td>飲《の》まない</td><td>飲《の》みません</td></tr>
<tr><td>1</td><td>行《い》く</td><td>行《い》かない</td><td>行《い》きません</td></tr>
<tr><td>1</td><td>話《はな》す</td><td>話《はな》さない</td><td>話《はな》しません</td></tr>
<tr><td>1</td><td>待《ま》つ</td><td>待《ま》たない</td><td>待《ま》ちません</td></tr>
<tr><td>1</td><td>帰《かえ》る</td><td>帰《かえ》らない</td><td>帰《かえ》りません</td></tr>
<tr><td>1</td><td>使《つか》う</td><td>使《つか》わない</td><td>使《つか》いません</td></tr>
<tr><td>1 (irregular)</td><td>ある</td><td>ない</td><td>ありません</td></tr>
<tr><td>2</td><td>食《た》べる</td><td>食《た》べない</td><td>食《た》べません</td></tr>
<tr><td>2</td><td>起《お》きる</td><td>起《お》きない</td><td>起《お》きません</td></tr>
<tr><td>3</td><td>する</td><td>しない</td><td>しません</td></tr>
<tr><td>3</td><td>来《く》る</td><td>来《こ》ない</td><td>来《き》ません</td></tr></table>
<h3>〜ないで ください: please don't</h3>
<p>Add で ください to the ない-form to ask someone not to do something. It is the negative partner of 〜て ください.</p>
<div class="ex"><b>お酒《さけ》 と 一緒《いっしょ》 に 薬《くすり》 を 飲《の》まないで ください。</b><span>Please don't take the medicine with alcohol.</span></div>
<div class="ex"><b>薬《くすり》 を 急《きゅう》に やめないで ください。</b><span>Please don't stop the medicine suddenly.</span></div>
<div class="ex"><b>無理《むり》 を しないで ください。</b><span>Please don't push yourself too hard.</span></div>
<div class="ex"><b>一人《ひとり》 で 悩《なや》まないで ください。</b><span>Please don't carry this worry alone.</span></div>
<div class="ex"><b>心配《しんぱい》 しないで ください。</b><span>Please don't worry.</span></div>
<h3>Must and need not</h3>
<p>For "must", replace the final い of the ない-form with ければ and add なりません: 飲《の》まない → 飲《の》まなければ なりません. For "you don't have to", replace い with くて and add も いい です: 飲《の》まない → 飲《の》まなくて も いい です.</p>
<div class="ex"><b>毎日《まいにち》 同《おな》じ 時間《じかん》 に 飲《の》まなければ なりません。</b><span>You must take it at the same time every day.</span></div>
<div class="ex"><b>来週《らいしゅう》 も 病院《びょういん》 に 来《こ》なければ なりません か。</b><span>Do I have to come to the hospital next week too?</span></div>
<div class="ex"><b>血液《けつえき》 検査《けんさ》 を しなければ なりません。</b><span>We need to do a blood test.</span></div>
<div class="ex"><b>毎日《まいにち》 来《こ》なくて も いい です。</b><span>You don't have to come every day.</span></div>
<div class="ex"><b>今日《きょう》 は 全部《ぜんぶ》 話《はな》さなくて も いい です よ。</b><span>You don't have to tell me everything today.</span></div>
<div class="ex"><b>朝《あさ》 は 飲《の》まなくて も いい です か。</b><span>Is it all right if I don't take it in the morning?</span></div>
<div class="note">Common mistakes: the negative of ある is ない, never あらない; and 来《く》る becomes 来《こ》ない, read with こ. In everyday speech you will also hear shortened "must" forms such as 〜なきゃ and 〜なくちゃ, and the variant 〜なければ いけません, which means the same as 〜なければ なりません.</div>`,
    quiz: [
      [`What is the ない-form of 使《つか》う?`, [`使《つか》あない`, `使《つか》わない`, `使《つか》いない`], 1, `Verbs ending in う change う to わ before ない.`],
      [`What is the negative of ある?`, [`ない`, `あらない`, `ありない`], 0, `ある is irregular; its plain negative is simply ない.`],
      [`How do you read the ない-form of 来《く》る?`, [`きない`, `くない`, `こない`], 2, `来《く》る becomes 来《こ》ない; the kanji is read こ here.`],
      [`Which sentence means "Please don't worry"?`, [`心配《しんぱい》 して ください。`, `心配《しんぱい》 しなければ なりません。`, `心配《しんぱい》 しないで ください。`], 2, `〜ないで ください asks someone not to do something.`],
      [`毎日《まいにち》 来《こ》なくて も いい です means:`, [`You must come every day.`, `You don't have to come every day.`, `Please don't come every day.`], 1, `〜なくて も いい です means "it is fine not to", that is, "you don't have to".`],
      [`Which form means "must take (the medicine)"?`, [`飲《の》まなければ なりません`, `飲《の》まないで ください`, `飲《の》まなくて も いい です`, `飲《の》みません`], 0, `ない → なければ なりません expresses obligation.`]
    ] },

  { id: 'ta-form-plain', level: 'N4', unit: 'Plain forms', title: `The た-form and plain style`, summary: `Make the plain past, read the full plain-style table, and use it for experience (〜た こと が あります) and lists of actions (〜たり 〜たり します).`, draft: true,
    body: `<p>Patients do not always answer in です/ます. When they are tired, upset or talking about themselves, many slip into plain style, and family members talk to each other in it. You also need plain forms inside longer sentences even when the whole sentence is polite. This lesson completes the plain-style table and adds two very useful history-taking patterns.</p>
<h3>Making the た-form</h3>
<p>The た-form is made exactly like the て-form: take the て-form and change て to た (or で to だ). So 飲《の》んで → 飲《の》んだ, 行《い》って → 行《い》った, 食《た》べて → 食《た》べた. The plain past negative comes from the ない-form: change ない to なかった.</p>
<table><tr><th>Dictionary</th><th>ない (not)</th><th>た (did)</th><th>なかった (did not)</th></tr>
<tr><td>飲《の》む</td><td>飲《の》まない</td><td>飲《の》んだ</td><td>飲《の》まなかった</td></tr>
<tr><td>行《い》く</td><td>行《い》かない</td><td>行《い》った</td><td>行《い》かなかった</td></tr>
<tr><td>話《はな》す</td><td>話《はな》さない</td><td>話《はな》した</td><td>話《はな》さなかった</td></tr>
<tr><td>待《ま》つ</td><td>待《ま》たない</td><td>待《ま》った</td><td>待《ま》たなかった</td></tr>
<tr><td>帰《かえ》る</td><td>帰《かえ》らない</td><td>帰《かえ》った</td><td>帰《かえ》らなかった</td></tr>
<tr><td>寝《ね》る</td><td>寝《ね》ない</td><td>寝《ね》た</td><td>寝《ね》なかった</td></tr>
<tr><td>食《た》べる</td><td>食《た》べない</td><td>食《た》べた</td><td>食《た》べなかった</td></tr>
<tr><td>ある</td><td>ない</td><td>あった</td><td>なかった</td></tr>
<tr><td>する</td><td>しない</td><td>した</td><td>しなかった</td></tr>
<tr><td>来《く》る</td><td>来《こ》ない</td><td>来《き》た</td><td>来《こ》なかった</td></tr>
<tr><td>つらい (い-adjective)</td><td>つらくない</td><td>つらかった</td><td>つらくなかった</td></tr>
<tr><td>元気《げんき》 だ (な-adjective)</td><td>元気《げんき》 じゃない</td><td>元気《げんき》 だった</td><td>元気《げんき》 じゃなかった</td></tr></table>
<h3>When plain style is used</h3>
<ul><li>With friends, family and children, and when talking to oneself.</li>
<li>Inside longer sentences, for example before a noun: 昨日《きのう》 飲《の》んだ 薬《くすり》 means "the medicine I took yesterday".</li>
<li>Many patients answer in plain style, especially when distressed. You should keep speaking in です/ます yourself.</li></ul>
<div class="ex"><b>薬《くすり》、 飲《の》んだ？</b><span>Did you take your medicine? (to a family member)</span></div>
<div class="ex"><b>うん、 もう 飲《の》んだ。</b><span>Yeah, I already took it.</span></div>
<div class="ex"><b>昨日《きのう》 は 何《なに》 も 食《た》べなかった。</b><span>I didn't eat anything yesterday. (a patient speaking plainly)</span></div>
<div class="ex"><b>昨日《きのう》 飲《の》んだ 薬《くすり》 は どれ です か。</b><span>Which is the medicine you took yesterday?</span></div>
<h3>〜た こと が あります: have you ever</h3>
<p>た-form + こと が あります means "I have (at some time) done". Ask with か, and answer "never" with 一度《いちど》 も ありません.</p>
<div class="ex"><b>前《まえ》 に 入院《にゅういん》 した こと が あります か。</b><span>Have you ever been admitted to hospital before?</span></div>
<div class="ex"><b>いいえ、 一度《いちど》 も ありません。</b><span>No, never.</span></div>
<div class="ex"><b>睡眠薬《すいみんやく》 を 飲《の》んだ こと が あります か。</b><span>Have you ever taken sleeping pills?</span></div>
<div class="ex"><b>学生《がくせい》 の とき、 カウンセリング を 受《う》けた こと が あります。</b><span>I had counselling once when I was a student.</span></div>
<h3>〜たり 〜たり します: things like</h3>
<p>Add り to two or more た-forms and finish with します to give examples of actions, not a complete list. It also describes things that alternate.</p>
<div class="ex"><b>休《やす》み の 日《ひ》 は 寝《ね》たり、 テレビ を 見《み》たり して います。</b><span>On my days off I sleep, watch TV, that kind of thing.</span></div>
<div class="ex"><b>夜中《よなか》 に 起《お》きたり、 朝《あさ》 早《はや》く 目《め》 が 覚《さ》めたり します。</b><span>I wake up in the middle of the night, or wake early in the morning.</span></div>
<div class="ex"><b>気分《きぶん》 が よかったり 悪《わる》かったり します。</b><span>My mood is sometimes good, sometimes bad.</span></div>
<div class="note">Do not confuse 〜た こと が あります (have ever done) with dictionary form + こと が あります (sometimes do). 飲《の》んだ こと が あります means "I have taken it before"; 飲《の》む こと が あります means "I sometimes take it".</div>`,
    quiz: [
      [`What is the plain past of 行《い》く?`, [`行《い》いた`, `行《い》った`, `行《い》きた`], 1, `行《い》く is the one く-verb with the irregular て/た form 行《い》って / 行《い》った.`],
      [`What is the plain past negative of 食《た》べる?`, [`食《た》べなかった`, `食《た》べないた`, `食《た》べませんだ`], 0, `Change ない to なかった: 食《た》べない → 食《た》べなかった.`],
      [`A patient says 昨日《きのう》 は 何《なに》 も 食《た》べなかった。 What style is this?`, [`Honorific`, `です/ます polite`, `Plain`], 2, `食《た》べなかった is the plain past negative; patients often speak this way.`],
      [`How do you ask "Have you ever been admitted to hospital?"`, [`入院《にゅういん》 する こと が あります か。`, `入院《にゅういん》 して ください。`, `入院《にゅういん》 した こと が あります か。`], 2, `た-form + こと が あります asks about past experience.`],
      [`寝《ね》たり、 テレビ を 見《み》たり します means:`, [`I sleep, watch TV and so on.`, `I sleep after watching TV.`, `I can't sleep because of TV.`], 0, `〜たり 〜たり します lists example activities.`],
      [`What is the plain past of 来《く》る?`, [`来《こ》た`, `来《く》った`, `来《き》た`], 2, `来《く》る → 来《き》た; the kanji is read き in the た-form.`]
    ] },

  { id: 'wanting', level: 'N5', unit: 'Saying more', title: `Wanting and intending: 〜たい, ほしい, つもり`, summary: `Say what you want to do, what you want to have, and what you intend to do, and ask a patient the same.`, draft: true,
    body: `<p>Treatment planning depends on what the patient wants: to sleep, to go back to work, to stop a medicine, to be left alone. Japanese has three common ways to talk about wishes and plans: 〜たい (want to do), ほしい (want to have) and つもり (intend to).</p>
<h3>〜たい です: want to do</h3>
<p>Take the ます-stem (the part before ます) and add たい. The result behaves like an い-adjective: たくない (don't want to), たかった (wanted to). Add です to make it polite. The object can be marked with を or が.</p>
<table><tr><th>ます-form</th><th>Want to</th><th>Don't want to</th><th>Wanted to</th></tr>
<tr><td>休《やす》みます</td><td>休《やす》みたい</td><td>休《やす》みたくない</td><td>休《やす》みたかった</td></tr>
<tr><td>寝《ね》ます</td><td>寝《ね》たい</td><td>寝《ね》たくない</td><td>寝《ね》たかった</td></tr>
<tr><td>会《あ》います</td><td>会《あ》いたい</td><td>会《あ》いたくない</td><td>会《あ》いたかった</td></tr>
<tr><td>します</td><td>したい</td><td>したくない</td><td>したかった</td></tr>
<tr><td>来《き》ます</td><td>来《き》たい</td><td>来《き》たくない</td><td>来《き》たかった</td></tr></table>
<div class="ex"><b>少《すこ》し 休《やす》みたい です。</b><span>I want to rest a little.</span></div>
<div class="ex"><b>夜《よる》 は ぐっすり 眠《ねむ》りたい です。</b><span>I want to sleep soundly at night.</span></div>
<div class="ex"><b>今《いま》 は 誰《だれ》 に も 会《あ》いたくない です。</b><span>Right now I don't want to see anyone.</span></div>
<div class="ex"><b>早《はや》く 仕事《しごと》 に 戻《もど》りたい です。</b><span>I want to get back to work soon.</span></div>
<div class="ex"><b>今日《きょう》 は 何《なに》 に ついて 話《はな》したい です か。</b><span>What would you like to talk about today?</span></div>
<h3>〜が ほしい です: want to have</h3>
<p>ほしい is an い-adjective meaning "wanted". The thing you want is marked with が.</p>
<div class="ex"><b>静《しず》か な 時間《じかん》 が ほしい です。</b><span>I want some quiet time.</span></div>
<div class="ex"><b>何《なに》 か ほしい もの は あります か。</b><span>Is there anything you would like to have?</span></div>
<h3>〜つもり です: intend to</h3>
<p>Dictionary form or ない-form + つもり です states a plan or intention.</p>
<div class="ex"><b>来月《らいげつ》 から 仕事《しごと》 に 戻《もど》る つもり です。</b><span>I plan to go back to work from next month.</span></div>
<div class="ex"><b>お薬《くすり》 は 続《つづ》ける つもり です か。</b><span>Do you intend to continue the medicine?</span></div>
<div class="ex"><b>薬《くすり》 は もう 飲《の》まない つもり です。</b><span>I don't intend to take the medicine any more.</span></div>
<h3>Talking about someone else's wishes</h3>
<p>〜たい and ほしい express the speaker's own feelings, so they are not used directly about a third person. For others, say 〜たがって います (seems to want to), ほしがって います, or report their words with と 言《い》って います.</p>
<div class="ex"><b>母《はは》 は 家《いえ》 に 帰《かえ》りたがって います。</b><span>My mother wants to go home.</span></div>
<div class="ex"><b>娘《むすめ》 は 入院《にゅういん》 したくない と 言《い》って います。</b><span>My daughter says she doesn't want to be admitted.</span></div>
<div class="note">Asking a superior or a guest 〜たい です か directly can sound too personal. To offer something, use いかが です か or 〜ませんか instead, for example お茶《ちゃ》 は いかが です か. With patients, a gentle question about wishes such as 何《なに》 か したい こと は あります か is usual in clinical talk.</div>`,
    quiz: [
      [`How do you say "I want to rest"?`, [`休《やす》みたい です。`, `休《やす》む つもり です。`, `休《やす》み が ほしい です。`], 0, `ます-stem 休《やす》み + たい expresses wanting to do.`],
      [`What is the negative of 会《あ》いたい?`, [`会《あ》いたいない`, `会《あ》わないたい`, `会《あ》いたくない`], 2, `たい conjugates like an い-adjective: たい → たくない.`],
      [`Which particle marks the thing you want with ほしい?`, [`を`, `が`, `で`], 1, `With ほしい the wanted thing takes が.`],
      [`来月《らいげつ》 から 仕事《しごと》 に 戻《もど》る つもり です means:`, [`I want to go back to work.`, `I plan to go back to work from next month.`, `I went back to work last month.`], 1, `つもり です states an intention or plan.`],
      [`How would you say "My mother wants to go home"?`, [`母《はは》 は 家《いえ》 に 帰《かえ》りたい です。`, `母《はは》 は 家《いえ》 に 帰《かえ》りたがって います。`, `母《はは》 は 家《いえ》 が ほしい です。`], 1, `For a third person use 〜たがって います rather than 〜たい です.`]
    ] },

  { id: 'reasons', level: 'N4', unit: 'Saying more', title: `Giving reasons: から, ので, 〜ん です`, summary: `Give and ask for reasons with から and ので, ask why gently, and use the explanatory 〜ん です.`, draft: true,
    body: `<p>Patients explain themselves: "I stopped eating because…", "I came today because…". You need to understand reasons, ask for them without sounding accusing, and recognise the explanatory 〜ん です, which is everywhere in spoken Japanese.</p>
<h3>から and ので</h3>
<p>Both mean "because" and come after the reason: reason + から / ので, result. から is direct and common in speech. ので sounds softer and more objective, so it is preferred when explaining something politely. After a noun or な-adjective, から takes だ (心配《しんぱい》 だ から) and ので becomes なので (心配《しんぱい》 なので).</p>
<table><tr><th>Before</th><th>から</th><th>ので</th></tr>
<tr><td>Verb</td><td>ある から</td><td>ある ので</td></tr>
<tr><td>い-adjective</td><td>痛《いた》い から</td><td>痛《いた》い ので</td></tr>
<tr><td>な-adjective</td><td>心配《しんぱい》 だ から</td><td>心配《しんぱい》 なので</td></tr>
<tr><td>Noun</td><td>休《やす》み だ から</td><td>休《やす》み なので</td></tr></table>
<div class="ex"><b>夜《よる》 遅《おそ》く まで 働《はたら》いて いる から、 いつも 疲《つか》れて います。</b><span>I work until late at night, so I'm always tired.</span></div>
<div class="ex"><b>朝《あさ》 は 時間《じかん》 が ない から、 何《なに》 も 食《た》べません。</b><span>I have no time in the morning, so I don't eat anything.</span></div>
<div class="ex"><b>心配《しんぱい》 な こと が ある ので、 相談《そうだん》 に 来《き》ました。</b><span>I came for advice because something is worrying me.</span></div>
<div class="ex"><b>一人暮《ひとりぐ》らし なので、 話《はな》す 人《ひと》 が いません。</b><span>I live alone, so I have no one to talk to.</span></div>
<h3>Asking why, and the explanatory 〜ん です</h3>
<p>どうして means "why". Questions with it usually end in 〜ん です か. ん (from の) after a plain form (after a noun or な-adjective: なん です) asks for or gives an explanation: 痛《いた》い ん です means "the thing is, it hurts". Patients use 〜ん です to explain, and you can use 〜ん です か to show you want to understand the background.</p>
<div class="ex"><b>どうして です か。</b><span>Why is that?</span></div>
<div class="ex"><b>何《なに》 か あった ん です か。</b><span>Did something happen?</span></div>
<div class="ex"><b>頭《あたま》 が 痛《いた》い ん です。</b><span>The thing is, I have a headache.</span></div>
<div class="ex"><b>実《じつ》 は、 最近《さいきん》 夫《おっと》 と 話《はな》して いない ん です。</b><span>Actually, my husband and I haven't been talking lately.</span></div>
<h3>だから and それで</h3>
<p>To start a new sentence with "so", use だから (so, therefore) or それで (and so, as a result). それで is also a natural prompt from the listener: "And then?"</p>
<div class="ex"><b>先月《せんげつ》 仕事《しごと》 を 辞《や》めました。 それで、 毎日《まいにち》 家《いえ》 に います。</b><span>I quit my job last month. So now I'm at home every day.</span></div>
<div class="ex"><b>夫《おっと》 は 毎晩《まいばん》 帰《かえ》り が 遅《おそ》い です。 だから、 いつも 一人《ひとり》 で 夕《ゆう》ご飯《はん》 を 食《た》べます。</b><span>My husband comes home late every night. So I always eat dinner alone.</span></div>
<div class="note">どうして 〜ん です か can sound like blame if said bluntly, especially about something the patient did or failed to do. A softer way to ask for reasons is 何《なに》 か 理由《りゆう》 が ある ん です か (is there some reason?) or 何《なに》 か あった ん です か (did something happen?).</div>`,
    quiz: [
      [`Which is the softer, more polite way to say "because"?`, [`ので`, `から`, `だから`], 0, `ので sounds softer and more objective than から.`],
      [`How does "because I'm worried" look with ので?`, [`心配《しんぱい》 だ ので`, `心配《しんぱい》 なので`, `心配《しんぱい》 の ので`], 1, `After a な-adjective or noun, ので becomes なので.`],
      [`頭《あたま》 が 痛《いた》い ん です。 The ん です here:`, [`makes it a question`, `makes it negative`, `gives an explanation for the situation`, `makes it past tense`], 2, `〜ん です explains the background: "the thing is, I have a headache".`],
      [`Which question is the gentlest way to find out why a patient missed an appointment?`, [`どうして 来《こ》なかった ん です か。`, `何《なに》 か あった ん です か。`, `どうして です か。`], 1, `何《なに》 か あった ん です か asks about circumstances without implying blame.`],
      [`Where does から go in a sentence giving a reason?`, [`Before the reason`, `After the result`, `At the start of the sentence only`, `Right after the reason`], 3, `The pattern is reason + から, result.`]
    ] },

  { id: 'thinking-saying', level: 'N4', unit: 'Saying more', title: `Thinking and saying: と 思《おも》います, と 言《い》いました`, summary: `Give opinions with 〜と 思《おも》います, report what someone said, quote a patient or a voice, and recognise hearsay 〜そう です.`, draft: true,
    body: `<p>The psychiatric history is full of reported speech and belief: what the patient thinks is causing the problem, what a family member said, what a voice says. The particle と marks the content of thinking or saying, and works like quotation marks.</p>
<h3>〜と 思《おも》います: I think</h3>
<p>Plain form + と 思《おも》います. After a noun or な-adjective, add だ: 原因《げんいん》 だ と 思《おも》います. Use 〜と 思《おも》って います for a belief someone has held for a while, and for what another person thinks.</p>
<div class="ex"><b>ストレス が 原因《げんいん》 だ と 思《おも》います。</b><span>I think stress is the cause.</span></div>
<div class="ex"><b>薬《くすり》 は 効《き》いて いる と 思《おも》います。</b><span>I think the medicine is working.</span></div>
<div class="ex"><b>自分《じぶん》 は だめ な 人間《にんげん》 だ と 思《おも》って います。</b><span>I believe I'm a worthless person.</span></div>
<div class="ex"><b>原因《げんいん》 は 何《なん》 だ と 思《おも》います か。</b><span>What do you think the cause is?</span></div>
<h3>Reporting speech: と 言《い》いました / 言《い》って います</h3>
<p>Exact words go in 「 」 followed by と 言《い》います. Without brackets the quote is indirect and is put in plain form. 言《い》って います means someone says it repeatedly or is saying it these days.</p>
<table><tr><th>Pattern</th><th>Use</th></tr>
<tr><td>「…」 と 言《い》いました</td><td>Direct quote: exact words</td></tr>
<tr><td>plain form + と 言《い》いました</td><td>Indirect report</td></tr>
<tr><td>〜と 言《い》って います</td><td>Someone keeps saying, or currently says</td></tr>
<tr><td>何《なん》 と 言《い》って います か</td><td>What is (the voice / person) saying?</td></tr></table>
<div class="ex"><b>夫《おっと》 は 「早《はや》く 病院《びょういん》 に 行《い》って」 と 言《い》いました。</b><span>My husband said, "Go to the hospital soon."</span></div>
<div class="ex"><b>前《まえ》 の 先生《せんせい》 は 大丈夫《だいじょうぶ》 だ と 言《い》いました。</b><span>My previous doctor said it was all right.</span></div>
<div class="ex"><b>母《はは》 は 毎日《まいにち》 「つらい」 と 言《い》って います。</b><span>My mother says "It's hard" every day.</span></div>
<div class="ex"><b>昨日《きのう》 は 「もう 消《き》えたい」 と 言《い》って いました。</b><span>Yesterday she was saying, "I just want to disappear."</span></div>
<h3>Quoting a voice</h3>
<p>To record exactly what a patient hears, keep the words in 「 」. The phrase 〜と 言《い》う 声《こえ》 means "a voice saying …".</p>
<div class="ex"><b>「お前《まえ》 は だめ だ」 と 言《い》う 声《こえ》 が 聞《き》こえます。</b><span>I hear a voice saying, "You're no good."</span></div>
<div class="ex"><b>その 声《こえ》 は 何《なん》 と 言《い》って います か。</b><span>What does the voice say?</span></div>
<h3>Hearsay: 〜そう です</h3>
<p>Plain form + そう です means "I hear that" or "apparently". It is useful for collateral history. It is different from the stem + そう です (ます-stem, or an adjective without its final い) meaning "looks like" (眠《ねむ》そう です, looks sleepy).</p>
<div class="ex"><b>娘《むすめ》さん は 最近《さいきん》 あまり 食《た》べない そう です。</b><span>I hear your daughter hasn't been eating much lately.</span></div>
<div class="ex"><b>ご主人《しゅじん》 の 話《はなし》 では、 夜《よる》 も 寝《ね》て いない そう です。</b><span>According to her husband, she isn't sleeping at night either.</span></div>
<div class="note">In casual speech patients often replace と with って: 「つらい」って 言《い》いました. And たい / 思《おも》います describe the speaker; for someone else's thoughts use 〜と 思《おも》って います or 〜と 言《い》って います.</div>`,
    quiz: [
      [`How do you say "I think stress is the cause"?`, [`ストレス が 原因《げんいん》 な と 思《おも》います。`, `ストレス が 原因《げんいん》 だ と 思《おも》います。`, `ストレス が 原因《げんいん》 です と 思《おも》いました か。`], 1, `After a noun, add だ before と 思《おも》います.`],
      [`母《はは》 は 毎日《まいにち》 「つらい」 と 言《い》って います means:`, [`My mother said once that it was hard.`, `My mother thinks it is hard.`, `My mother says "It's hard" every day.`], 2, `〜と 言《い》って います describes something said repeatedly or currently.`],
      [`How do you ask what a voice says?`, [`その 声《こえ》 は 何《なん》 と 言《い》って います か。`, `その 声《こえ》 は どう です か。`, `その 声《こえ》 は どこ です か。`], 0, `何《なん》 と 言《い》って います か asks for the content of what is said.`],
      [`食《た》べない そう です means:`, [`looks like she won't eat`, `I hear she doesn't eat`, `she wants not to eat`, `she must not eat`], 1, `Plain form + そう です is hearsay: "I hear that".`],
      [`In casual speech, which word often replaces the quoting particle と?`, [`って`, `ので`, `けど`], 0, `Many speakers say 〜って 言《い》いました in casual conversation.`]
    ] },

  { id: 'can', level: 'N4', unit: 'Saying more', title: `Can and can't: the potential form`, summary: `Say what someone can or cannot do with 〜こと が できます and the potential form, including the everyday clinical 眠《ねむ》れません and 食《た》べられません.`, draft: true,
    body: `<p>"I can't sleep", "I can't eat", "I can't concentrate", "I can't leave the house": loss of function is one of the main ways patients describe illness, and Japanese expresses it with the potential form. You will hear these words in almost every assessment.</p>
<h3>〜こと が できます</h3>
<p>The simplest way to say "can" is dictionary form + こと が できます. It is a little formal and works with every verb.</p>
<div class="ex"><b>一人《ひとり》 で 買《か》い物《もの》 に 行《い》く こと が できます か。</b><span>Can you go shopping by yourself?</span></div>
<h3>The potential form</h3>
<p>Group 2 (る-verbs): drop る and add られる. Group 1 (う-verbs): change the last kana to the え-row and add る. する becomes できる, and 来《く》る becomes 来《こ》られる. The result is a る-verb, so its polite forms are 〜ます and 〜ません. The thing you can do is often marked with が instead of を.</p>
<table><tr><th>Group</th><th>Dictionary</th><th>Potential</th><th>Polite negative</th></tr>
<tr><td>2</td><td>食《た》べる</td><td>食《た》べられる</td><td>食《た》べられません</td></tr>
<tr><td>2</td><td>起《お》きる</td><td>起《お》きられる</td><td>起《お》きられません</td></tr>
<tr><td>2</td><td>出《で》る</td><td>出《で》られる</td><td>出《で》られません</td></tr>
<tr><td>1</td><td>眠《ねむ》る</td><td>眠《ねむ》れる</td><td>眠《ねむ》れません</td></tr>
<tr><td>1</td><td>飲《の》む</td><td>飲《の》める</td><td>飲《の》めません</td></tr>
<tr><td>1</td><td>行《い》く</td><td>行《い》ける</td><td>行《い》けません</td></tr>
<tr><td>1</td><td>話《はな》す</td><td>話《はな》せる</td><td>話《はな》せません</td></tr>
<tr><td>1</td><td>待《ま》つ</td><td>待《ま》てる</td><td>待《ま》てません</td></tr>
<tr><td>1</td><td>使《つか》う</td><td>使《つか》える</td><td>使《つか》えません</td></tr>
<tr><td>3</td><td>する</td><td>できる</td><td>できません</td></tr>
<tr><td>3</td><td>来《く》る</td><td>来《こ》られる</td><td>来《こ》られません</td></tr></table>
<h3>What patients say</h3>
<div class="ex"><b>夜《よる》、 なかなか 眠《ねむ》れません。</b><span>I just can't get to sleep at night.</span></div>
<div class="ex"><b>最近《さいきん》、 あまり 食《た》べられません。</b><span>Lately I can't eat much.</span></div>
<div class="ex"><b>仕事《しごと》 に 集中《しゅうちゅう》 できません。</b><span>I can't concentrate on my work.</span></div>
<div class="ex"><b>怖《こわ》くて、 外《そと》 に 出《で》られません。</b><span>I'm scared, so I can't go outside.</span></div>
<div class="ex"><b>朝《あさ》、 起《お》きられない こと が あります。</b><span>Some mornings I can't get up.</span></div>
<div class="ex"><b>夜中《よなか》 に 目《め》 が 覚《さ》めて、 その あと 眠《ねむ》れません。</b><span>I wake up in the night and can't get back to sleep.</span></div>
<h3>What you ask</h3>
<div class="ex"><b>夜《よる》 は 何時間《なんじかん》 くらい 眠《ねむ》れます か。</b><span>About how many hours can you sleep at night?</span></div>
<div class="ex"><b>一人《ひとり》 で 病院《びょういん》 に 来《こ》られます か。</b><span>Can you come to the hospital on your own?</span></div>
<div class="ex"><b>誰《だれ》 か に 相談《そうだん》 できます か。</b><span>Is there anyone you can talk to about it?</span></div>
<div class="ex"><b>私《わたし》 は 日本語《にほんご》 が 少《すこ》し 話《はな》せます。</b><span>I can speak a little Japanese.</span></div>
<div class="note">In everyday speech many people drop ら from the potential of る-verbs and 来《く》る: 見《み》れる, 食《た》べれる, 寝《ね》れない, 来《こ》れる. You will hear these from patients and should understand them, but write and say the standard 〜られる forms yourself. For insomnia, 眠《ねむ》れない (from 眠《ねむ》る) is the usual word.</div>`,
    quiz: [
      [`What is the potential form of 飲《の》む?`, [`飲《の》まれる`, `飲《の》める`, `飲《の》みられる`], 1, `う-verbs move to the え-row and add る: む → める.`],
      [`What is the standard potential form of 食《た》べる?`, [`食《た》べられる`, `食《た》べれる`, `食《た》べける`], 0, `る-verbs drop る and add られる; 食《た》べれる is colloquial.`],
      [`A patient says 集中《しゅうちゅう》 できません. What do they mean?`, [`I don't want to concentrate.`, `I must concentrate.`, `I can't concentrate.`], 2, `できる is the potential of する, so できません means "cannot".`],
      [`What is the standard potential form of 来《く》る?`, [`来《き》られる`, `来《く》れる`, `来《こ》られる`, `来《こ》れる`], 2, `The standard potential of 来《く》る is 来《こ》られる.`],
      [`外《そと》 に 出《で》られません means:`, [`I can't go outside.`, `Please don't go outside.`, `I don't go outside.`], 0, `出《で》られる is the potential of 出《で》る.`],
      [`Which particle often marks what you can do with the potential form?`, [`で`, `が`, `に`], 1, `With the potential, the object is often marked with が: 日本語《にほんご》 が 話《はな》せます.`]
    ] },

  { id: 'comparing-changing', level: 'N4', unit: 'Saying more', title: `Comparing and changing: より, ほう, なる`, summary: `Compare with より, の ほう が and いちばん, and describe change with なる: better, worse, more severe than before.`, draft: true,
    body: `<p>Follow-up visits are about comparison and change: is the patient sleeping better than before, is the anxiety worse, when in the day is it hardest. These patterns let you ask and understand that.</p>
<h3>より, の ほう が, いちばん</h3>
<p>A より B means "B compared with A"; the thing after より is the standard: 前《まえ》 より いい means "better than before". To ask which of two, say A と B と どちら が 〜 です か; answer with A の ほう が 〜 です. For the most, use いちばん.</p>
<div class="ex"><b>前《まえ》 より よく 眠《ねむ》れます。</b><span>I can sleep better than before.</span></div>
<div class="ex"><b>先週《せんしゅう》 より 気分《きぶん》 が いい です。</b><span>I feel better than last week.</span></div>
<div class="ex"><b>朝《あさ》 と 夜《よる》 と、 どちら が つらい です か。</b><span>Which is harder, mornings or nights?</span></div>
<div class="ex"><b>朝《あさ》 の ほう が つらい です。</b><span>Mornings are harder.</span></div>
<div class="ex"><b>一日《いちにち》 の 中《なか》 で、 いつ が いちばん つらい です か。</b><span>When in the day is it hardest?</span></div>
<div class="ex"><b>十点《じゅってん》 満点《まんてん》 で、 今日《きょう》 の 気分《きぶん》 は 何点《なんてん》 です か。</b><span>On a scale out of ten, what score would you give your mood today?</span></div>
<h3>Change with なる</h3>
<p>なる means "become". An い-adjective changes い to く before it; a な-adjective or noun takes に. ない becomes なく なる (stop being, lose).</p>
<table><tr><th>Word</th><th>Becomes</th><th>Meaning</th></tr>
<tr><td>いい</td><td>よく なる</td><td>get better</td></tr>
<tr><td>悪《わる》い</td><td>悪《わる》く なる</td><td>get worse</td></tr>
<tr><td>ひどい</td><td>ひどく なる</td><td>become severe</td></tr>
<tr><td>楽《らく》 (な-adj.)</td><td>楽《らく》 に なる</td><td>become easier, feel relief</td></tr>
<tr><td>元気《げんき》 (な-adj.)</td><td>元気《げんき》 に なる</td><td>recover one's energy</td></tr>
<tr><td>病気《びょうき》 (noun)</td><td>病気《びょうき》 に なる</td><td>fall ill</td></tr>
<tr><td>ない</td><td>なく なる</td><td>disappear, be lost</td></tr></table>
<div class="ex"><b>薬《くすり》 を 飲《の》んで から、 よく なりました。</b><span>It got better after I started taking the medicine.</span></div>
<div class="ex"><b>前《まえ》 より 悪《わる》く なりました か。</b><span>Has it got worse than before?</span></div>
<div class="ex"><b>先月《せんげつ》 から 不安《ふあん》 が ひどく なって います。</b><span>The anxiety has been getting worse since last month.</span></div>
<div class="ex"><b>話《はな》して、 少《すこ》し 楽《らく》 に なりました。</b><span>Talking about it has made me feel a little better.</span></div>
<div class="ex"><b>冬《ふゆ》 に なって から、 元気《げんき》 が なく なりました。</b><span>Since winter came, I have lost my energy.</span></div>
<div class="ex"><b>食欲《しょくよく》 が なく なりました。</b><span>I've lost my appetite.</span></div>
<div class="note">いい is irregular: its other forms are built on よい, so "got better" is よく なりました, never いく なりました. Also notice 〜て います with なる: ひどく なって います describes a change still in progress or a state that has resulted from it.</div>`,
    quiz: [
      [`前《まえ》 より よく 眠《ねむ》れます means:`, [`I slept well before.`, `I can sleep better than before.`, `I can't sleep as well as before.`], 1, `より marks the standard of comparison: "than before".`],
      [`How do you say "It got better"?`, [`いく なりました。`, `いい に なりました。`, `よく なりました。`], 2, `いい becomes よく before なる.`],
      [`Which is correct for "became easier"?`, [`楽《らく》 に なりました`, `楽《らく》く なりました`, `楽《らく》 で なりました`], 0, `楽《らく》 is a な-adjective, so it takes に before なる.`],
      [`Answer to 朝《あさ》 と 夜《よる》 と、 どちら が つらい です か if nights are harder:`, [`夜《よる》 より つらい です。`, `いちばん 朝《あさ》 です。`, `夜《よる》 の ほう が つらい です。`], 2, `A の ほう が 〜 です picks one of two.`],
      [`食欲《しょくよく》 が なく なりました means:`, [`I have no appetite yet.`, `I've lost my appetite.`, `My appetite came back.`], 1, `ない → なく なる means something has gone away.`]
    ] },

  { id: 'when-if', level: 'N4', unit: 'Saying more', title: `When and if: とき, たら, と, ば`, summary: `Talk about when things happen and what to do if something happens, including safety-plan style instructions.`, draft: true,
    body: `<p>Patients describe triggers ("when I'm alone…") and you give conditional instructions ("if you feel worse, call us"). Safety planning in particular depends on clear "if … then …" sentences. Japanese has several conditional forms; this lesson covers the four you will meet most.</p>
<h3>The four forms</h3>
<table><tr><th>Form</th><th>How to make it</th><th>Main use</th></tr>
<tr><td>〜とき</td><td>plain form / い-adj. / な-adj. + な / noun + の, then とき</td><td>at the time when</td></tr>
<tr><td>〜たら</td><td>た-form + ら (飲《の》んだら, つらかったら)</td><td>if, when (once) something happens; the most versatile</td></tr>
<tr><td>〜と</td><td>dictionary form + と</td><td>whenever, every time; natural results</td></tr>
<tr><td>〜ば</td><td>e-row + ば (飲《の》めば, 食《た》べれば, すれば, 来《く》れば, つらければ)</td><td>if (condition for a result)</td></tr></table>
<h3>〜とき: when</h3>
<div class="ex"><b>眠《ねむ》れない とき は、 この 薬《くすり》 を 飲《の》んで ください。</b><span>When you can't sleep, take this medicine.</span></div>
<div class="ex"><b>不安《ふあん》 な とき、 どう して います か。</b><span>What do you do when you feel anxious?</span></div>
<div class="ex"><b>家《いえ》 に 帰《かえ》った とき、 急《きゅう》に 涙《なみだ》 が 出《で》ました。</b><span>When I got home, tears suddenly came.</span></div>
<h3>〜たら: if, once</h3>
<p>たら is the safest choice for instructions and safety plans, because a request or advice can follow it.</p>
<div class="ex"><b>つらく なったら、 すぐ 教《おし》えて ください。</b><span>If it becomes hard, please tell me right away.</span></div>
<div class="ex"><b>薬《くすり》 を 飲《の》んで 気分《きぶん》 が 悪《わる》く なったら、 すぐ 電話《でんわ》 して ください。</b><span>If you feel unwell after taking the medicine, please call straight away.</span></div>
<div class="ex"><b>死《し》にたい 気持《きも》ち が 強《つよ》く なったら、 夜《よる》 でも 病院《びょういん》 に 連絡《れんらく》 して ください。</b><span>If the wish to die gets stronger, please contact the hospital, even at night.</span></div>
<div class="ex"><b>眠《ねむ》れなかったら、 無理《むり》 に 寝《ね》なくて も いい です。</b><span>If you can't sleep, you don't have to force yourself.</span></div>
<h3>〜と: whenever</h3>
<p>と describes something that always or naturally follows. It is common when patients describe triggers.</p>
<div class="ex"><b>一人《ひとり》 で いる と、 悪《わる》い こと ばかり 考《かんが》えます。</b><span>Whenever I'm alone, I think only bad thoughts.</span></div>
<div class="ex"><b>人《ひと》 が 多《おお》い ところ に 行《い》く と、 ドキドキ します。</b><span>When I go somewhere crowded, my heart pounds.</span></div>
<div class="ex"><b>夜《よる》 に なる と、 不安《ふあん》 に なります。</b><span>When night comes, I get anxious.</span></div>
<h3>〜ば: if (briefly)</h3>
<div class="ex"><b>よく 眠《ねむ》れば、 気分《きぶん》 も 少《すこ》し よく なります。</b><span>If you sleep well, your mood will improve a little too.</span></div>
<div class="ex"><b>何《なに》 か あれば、 いつでも 連絡《れんらく》 して ください。</b><span>If anything comes up, contact us any time.</span></div>
<div class="note">A request, invitation or advice cannot normally follow と. To say "if it gets hard, please tell me", use たら (つらく なったら), not と. When in doubt, たら is the most widely usable conditional.</div>`,
    quiz: [
      [`Which form is best for "If you feel worse, please call"?`, [`悪《わる》く なる と、 電話《でんわ》 して ください。`, `悪《わる》く なったら、 電話《でんわ》 して ください。`, `悪《わる》く なる とき、 電話《でんわ》 しました。`], 1, `A request can follow たら but not と.`],
      [`一人《ひとり》 で いる と、 悪《わる》い こと ばかり 考《かんが》えます. The と here means:`, [`and`, `with`, `whenever`, `because`], 2, `Dictionary form + と describes what happens every time.`],
      [`How do you make the たら form of 飲《の》む?`, [`飲《の》んだら`, `飲《の》むたら`, `飲《の》みたら`], 0, `Take the た-form 飲《の》んだ and add ら.`],
      [`What is the ば form of する?`, [`しば`, `するば`, `すれば`], 2, `する becomes すれば.`],
      [`How do you say "when I am anxious" with とき?`, [`不安《ふあん》 とき`, `不安《ふあん》 な とき`, `不安《ふあん》 の とき は ない`], 1, `A な-adjective takes な before とき.`]
    ] },

  { id: 'keigo', level: 'N4', unit: 'Politeness and culture', title: `Keigo: the polite phrases a clinician needs`, summary: `Understand the levels of politeness and learn the small set of honorific and humble phrases used every day in clinics.`, draft: true,
    body: `<p>Japanese grammar changes with the relationship between speakers. You do not need full keigo to be a good clinician: steady です/ます is respectful and safe. But a small set of honorific and humble phrases is used in every clinic, and patients will expect to hear them when they are greeted, asked their name or asked to wait.</p>
<h3>The levels</h3>
<ul><li><b>Plain</b> (飲《の》む, 行《い》く): family, friends, children.</li>
<li><b>Polite</b> (飲《の》みます, 行《い》きます): the default with adults you do not know well, including patients.</li>
<li><b>Honorific</b> (尊敬語《そんけいご》): raises the other person; used only for their actions. いらっしゃいます, 召《め》し上《あ》がります.</li>
<li><b>Humble</b> (謙譲語《けんじょうご》): lowers yourself; used only for your own actions. 申《もう》します, 伺《うかが》います.</li></ul>
<table><tr><th>Plain</th><th>Polite</th><th>Honorific (their action)</th><th>Humble (my action)</th></tr>
<tr><td>いる</td><td>います</td><td>いらっしゃいます</td><td>おります</td></tr>
<tr><td>行《い》く / 来《く》る</td><td>行《い》きます / 来《き》ます</td><td>いらっしゃいます</td><td>参《まい》ります</td></tr>
<tr><td>言《い》う</td><td>言《い》います</td><td>おっしゃいます</td><td>申《もう》します</td></tr>
<tr><td>見《み》る</td><td>見《み》ます</td><td>ご覧《らん》 に なります</td><td>拝見《はいけん》 します</td></tr>
<tr><td>する</td><td>します</td><td>なさいます</td><td>いたします</td></tr>
<tr><td>食《た》べる / 飲《の》む</td><td>食《た》べます / 飲《の》みます</td><td>召《め》し上《あ》がります</td><td>いただきます</td></tr>
<tr><td>聞《き》く</td><td>聞《き》きます</td><td>お聞《き》き に なります</td><td>伺《うかが》います / お聞《き》き します</td></tr>
<tr><td>知《し》って いる</td><td>知《し》って います</td><td>ご存《ぞん》じ です</td><td>存《ぞん》じて おります</td></tr></table>
<h3>Phrases for the consultation</h3>
<p>お and ご in front of a noun show respect for something belonging to the other person: お名前《なまえ》, ご家族《かぞく》, お仕事《しごと》. お + ます-stem + ください is a polite request: お待《ま》ち ください. 〜て いただけます か is a very polite "could you…".</p>
<div class="ex"><b>精神科《せいしんか》 の ナバロ と 申《もう》します。</b><span>I'm Navarro from psychiatry.</span></div>
<div class="ex"><b>お名前《なまえ》 を 教《おし》えて いただけます か。</b><span>Could you tell me your name, please?</span></div>
<div class="ex"><b>こちら に おかけ ください。</b><span>Please take a seat here.</span></div>
<div class="ex"><b>少々《しょうしょう》 お待《ま》ち ください。</b><span>Please wait a moment.</span></div>
<div class="ex"><b>今日《きょう》 は どう されました か。</b><span>What brings you in today?</span></div>
<div class="ex"><b>ご家族《かぞく》 の 方《かた》 も 今日《きょう》 いらっしゃいました か。</b><span>Has a family member come with you today?</span></div>
<div class="ex"><b>少《すこ》し お話《はなし》 を 伺《うかが》って も よろしい です か。</b><span>May I ask you a few things?</span></div>
<div class="ex"><b>いくつか お聞《き》き します ね。</b><span>I'm going to ask you a few questions.</span></div>
<div class="ex"><b>お薬手帳《くすりてちょう》 を 拝見《はいけん》 して も よろしい です か。</b><span>May I look at your medication record book?</span></div>
<div class="ex"><b>朝《あさ》ご飯《はん》 は 召《め》し上《あ》がりました か。</b><span>Did you have breakfast?</span></div>
<div class="ex"><b>何《なに》 か 気《き》 に なる こと が あったら、 おっしゃって ください。</b><span>If anything concerns you, please tell me.</span></div>
<div class="note">The most common keigo mistake is direction: never use honorific verbs for yourself (not 私《わたし》 が いらっしゃいます) and never use humble verbs for the patient (not 患者《かんじゃ》さん が 申《もう》しました). If you are unsure, plain です/ます is always acceptable and much better than keigo used the wrong way round.</div>`,
    quiz: [
      [`Which verb do you use to introduce yourself humbly?`, [`申《もう》します`, `おっしゃいます`, `いらっしゃいます`], 0, `申《もう》します is the humble form of 言《い》う, used for yourself.`],
      [`今日《きょう》 は どう されました か is used to ask:`, [`What did you eat today?`, `What brings you in today?`, `Where are you going today?`], 1, `It is the standard honorific opening question in a consultation.`],
      [`What is the honorific form of 食《た》べる?`, [`いただきます`, `召《め》し上《あ》がります`, `拝見《はいけん》 します`], 1, `召《め》し上《あ》がります is honorific; いただきます is humble.`],
      [`Which phrase is a polite request to wait?`, [`お待《ま》ち します`, `待《ま》って いらっしゃいます`, `お待《ま》ち ください`], 2, `お + ます-stem + ください makes a polite request.`],
      [`Which sentence uses keigo the wrong way round?`, [`私《わたし》 が いらっしゃいます。`, `お薬手帳《くすりてちょう》 を 拝見《はいけん》 します。`, `ナバロ と 申《もう》します。`], 0, `Honorific いらっしゃいます must not be used for your own actions.`],
      [`The humble form of 見《み》る is:`, [`ご覧《らん》 に なります`, `拝見《はいけん》 します`, `見《み》られます`, `お見《み》 ください`], 1, `拝見《はいけん》 します is humble "I look at"; ご覧《らん》 に なります is honorific.`]
    ] },

  { id: 'conversation-habits', level: 'N5', unit: 'Politeness and culture', title: `Conversation habits: あいづち, softeners and indirect no`, summary: `Common habits that keep Japanese conversation smooth: listening sounds, softening words, indirect refusals, すみません as thanks, silence and forms of address.`, draft: true,
    body: `<p>Grammar alone does not make a conversation feel natural. Many Japanese speakers rely on small listening signals, softening words and indirect ways of saying no. These are tendencies, not rules, and individual patients vary widely, but knowing them helps you hear what is meant and sound attentive.</p>
<h3>あいづち: showing that you are listening</h3>
<p>Many speakers expect frequent short responses while they talk: はい, ええ, うん (casual), そう です か, なるほど. They usually mean "I'm following", not "I agree". A long stretch without them can feel to some speakers as if the listener is not paying attention.</p>
<div class="ex"><b>そう です か。 それ は 大変《たいへん》 でした ね。</b><span>I see. That must have been hard.</span></div>
<div class="ex"><b>なるほど、 よく わかりました。</b><span>I see, I understand now.</span></div>
<h3>Softeners</h3>
<ul><li>ちょっと (a little) softens requests and refusals.</li>
<li>A sentence left open with けど or が (…but) lets the listener fill in the rest.</li>
<li>〜でしょう か is a softer question than 〜です か.</li></ul>
<div class="ex"><b>ちょっと 聞《き》いて も いい です か。</b><span>May I ask you something?</span></div>
<div class="ex"><b>少《すこ》し 話《はな》したい こと が ある ん です けど…。</b><span>There's something I'd like to talk about…</span></div>
<div class="ex"><b>薬《くすり》 は 飲《の》んで います けど、 あまり 変《か》わりません。</b><span>I am taking the medicine, but it hasn't changed much.</span></div>
<div class="ex"><b>もう 少《すこ》し 様子《ようす》 を 見《み》て も いい でしょう か。</b><span>Would it be all right to wait and see a little longer?</span></div>
<h3>Saying no indirectly</h3>
<p>A direct いいえ can feel harsh, so many people decline by trailing off or saying something is difficult. When a patient answers this way, it often means no. Check gently rather than taking it as yes.</p>
<div class="ex"><b>明日《あした》 は ちょっと…。</b><span>Tomorrow is a bit… (difficult).</span></div>
<div class="ex"><b>それ は ちょっと 難《むずか》しい かも しれません。</b><span>That might be a little difficult.</span></div>
<div class="ex"><b>考《かんが》えて おきます。</b><span>I'll think about it. (often a polite no)</span></div>
<h3>すみません, silence and names</h3>
<p>すみません is often used to thank someone who has gone to trouble for you, as well as to apologise. Silence in conversation may simply mean the person is thinking, and many speakers are comfortable with a pause; you do not need to fill it at once. Address adults by family name + さん. Doctors, teachers and lawyers are addressed as 先生《せんせい》, and patients will usually call you that.</p>
<div class="ex"><b>わざわざ 来《き》て いただいて、 すみません。</b><span>Thank you for taking the trouble to come.</span></div>
<div class="ex"><b>ゆっくり で いい です よ。</b><span>Take your time.</span></div>
<div class="ex"><b>山田《やまだ》さん、 どうぞ お入《はい》り ください。</b><span>Mr. or Ms. Yamada, please come in.</span></div>
<div class="note">Never add さん to your own name: say ナバロ です, not ナバロさん です. And remember that はい in the middle of someone's story often means "I'm listening", so do not record it as agreement or consent; ask a clear question when you need a clear answer.</div>`,
    quiz: [
      [`While a patient talks, you say そう です か at intervals. This mainly shows:`, [`that you agree with everything`, `that you are listening`, `that you want them to stop`], 1, `あいづち signals attention, not necessarily agreement.`],
      [`A patient answers a proposed appointment with 明日《あした》 は ちょっと…。 This most likely means:`, [`Tomorrow is fine.`, `Tomorrow is a little early.`, `Tomorrow is difficult for me.`], 2, `Trailing off after ちょっと is a common indirect no.`],
      [`Which is a softer way to ask a question?`, [`〜でしょう か`, `〜です`, `〜だ`], 0, `〜でしょう か is gentler than 〜です か.`],
      [`How do you introduce yourself?`, [`ナバロさん です。`, `ナバロ です。`, `ナバロ先生《せんせい》 です。`], 1, `Do not use さん or 先生《せんせい》 with your own name.`],
      [`わざわざ 来《き》て いただいて、 すみません is best understood as:`, [`an apology for a mistake`, `a complaint`, `thanks for taking the trouble to come`], 2, `すみません is often used as thanks when someone has gone to trouble.`]
    ] },

  { id: 'distress-words', level: 'N4', unit: 'Clinical Japanese', psych: true, title: `Words for distress`, summary: `Common ways patients put distress into words: body words, つらい and its relatives, 気《き》 expressions, and mimetic words.`, draft: true,
    body: `<p>Patients rarely say "I am depressed" at first. Many people, in Japan as elsewhere, start with the body (tiredness, heaviness, a tight chest) or with everyday words such as つらい. Knowing these words helps you hear distress that is not named as a psychiatric symptom. This is a general observation, not a rule about any individual patient.</p>
<h3>Body words</h3>
<table><tr><th>Word</th><th>Plain meaning</th></tr>
<tr><td>だるい</td><td>sluggish, heavy, lacking energy (whole body)</td></tr>
<tr><td>体《からだ》 が 重《おも》い</td><td>body feels heavy, hard to move</td></tr>
<tr><td>頭《あたま》 が 重《おも》い</td><td>head feels heavy or foggy</td></tr>
<tr><td>胸《むね》 が 苦《くる》しい</td><td>chest feels tight or oppressed</td></tr>
<tr><td>息苦《いきぐる》しい</td><td>hard to breathe</td></tr>
<tr><td>疲《つか》れやすい</td><td>gets tired easily</td></tr>
<tr><td>食欲《しょくよく》 が ない</td><td>no appetite</td></tr>
<tr><td>眠《ねむ》れない</td><td>cannot sleep</td></tr></table>
<div class="ex"><b>朝《あさ》 から 体《からだ》 が だるい です。</b><span>I've felt sluggish since the morning.</span></div>
<div class="ex"><b>体《からだ》 が 重《おも》くて、 起《お》きられません。</b><span>My body feels so heavy I can't get up.</span></div>
<div class="ex"><b>時々《ときどき》 胸《むね》 が 苦《くる》しく なります。</b><span>Sometimes my chest gets tight.</span></div>
<h3>つらい, しんどい, きつい, 苦《くる》しい</h3>
<p>つらい is the most general word for emotional or physical hardship: "it's hard, it hurts to bear". しんどい (originally western Japan, now widely heard) and きつい mean exhausting, hard going. 苦《くる》しい suggests suffering or a feeling of being squeezed, physically or emotionally. 我慢《がまん》 する means to endure or hold it in; patients often say they have been enduring for a long time before they seek help.</p>
<div class="ex"><b>毎日《まいにち》 が つらい です。</b><span>Every day is hard.</span></div>
<div class="ex"><b>仕事《しごと》 が しんどい です。</b><span>Work is exhausting me.</span></div>
<div class="ex"><b>ずっと 我慢《がまん》 して きました。</b><span>I've been holding it in all this time.</span></div>
<h3>気《き》 expressions</h3>
<p>気《き》 (mind, spirit, attention) appears in many everyday phrases about mood and energy.</p>
<ul><li>気分《きぶん》: mood, how one feels at the moment. 気持《きも》ち: feelings.</li>
<li>元気《げんき》 が ない: low in energy or spirits. やる気《き》 が 出《で》ない: no motivation.</li>
<li>気《き》 が 重《おも》い: dread, feeling weighed down about something coming.</li>
<li>気《き》 に なる: something bothers one or stays on one's mind.</li>
<li>気《き》 が 散《ち》る: easily distracted, cannot focus.</li>
<li>落《お》ち込《こ》む: to feel down, depressed. 不安《ふあん》: anxiety, unease.</li></ul>
<div class="ex"><b>最近《さいきん》、 気分《きぶん》 が 落《お》ち込《こ》んで います。</b><span>Lately I've been feeling down.</span></div>
<div class="ex"><b>何《なに》 も やる気《き》 が 出《で》ません。</b><span>I can't find the motivation for anything.</span></div>
<div class="ex"><b>月曜日《げつようび》 の 朝《あさ》 は 気《き》 が 重《おも》い です。</b><span>Monday mornings I feel a sense of dread.</span></div>
<div class="ex"><b>人《ひと》 の 目《め》 が 気《き》 に なります。</b><span>I worry about how other people see me.</span></div>
<div class="ex"><b>将来《しょうらい》 の こと が 不安《ふあん》 です。</b><span>I'm anxious about the future.</span></div>
<h3>Mimetic words</h3>
<p>Japanese has many sound-symbolic words, often written in katakana or hiragana, used with する or 〜と. Patients use them naturally to describe inner states.</p>
<table><tr><th>Word</th><th>Typical meaning</th></tr>
<tr><td>イライラ する</td><td>irritable, on edge</td></tr>
<tr><td>ドキドキ する</td><td>heart pounding (anxiety, excitement)</td></tr>
<tr><td>そわそわ する</td><td>restless, unable to settle</td></tr>
<tr><td>ぐるぐる</td><td>going round and round (thoughts, dizziness)</td></tr>
<tr><td>ぼーっと する</td><td>spaced out, foggy, absent-minded</td></tr>
<tr><td>くよくよ する</td><td>to brood, dwell on things</td></tr></table>
<div class="ex"><b>小《ちい》さい こと で イライラ します。</b><span>Little things make me irritable.</span></div>
<div class="ex"><b>同《おな》じ こと を ぐるぐる 考《かんが》えて しまいます。</b><span>I keep thinking the same thing over and over.</span></div>
<div class="ex"><b>一日中《いちにちじゅう》 ぼーっと して います。</b><span>I'm in a fog all day.</span></div>
<div class="note">Body words do not rule out physical illness, and a mimetic word can mean different things to different speakers. When a patient uses one, ask them to say more: the frame 「＿」 と いう の は、 どんな 感《かん》じ です か is a natural way to ask what they mean by it.</div>`,
    quiz: [
      [`A patient says 何《なに》 も やる気《き》 が 出《で》ません. This means:`, [`I can't find motivation for anything.`, `I am easily distracted.`, `I can't breathe well.`], 0, `やる気《き》 が 出《で》ない means lacking motivation.`],
      [`Which word means "easily distracted"?`, [`気《き》 が 重《おも》い`, `気《き》 が 散《ち》る`, `気《き》 に なる`], 1, `気《き》 が 散《ち》る means one's attention scatters.`],
      [`そわそわ します most nearly means:`, [`I feel sleepy.`, `I feel heavy.`, `I feel restless.`, `I feel sad.`], 2, `そわそわ describes restlessness and inability to settle.`],
      [`Which phrase describes a tight or oppressed feeling in the chest?`, [`胸《むね》 が 苦《くる》しい`, `頭《あたま》 が 重《おも》い`, `体《からだ》 が だるい`], 0, `胸《むね》 が 苦《くる》しい refers to the chest.`],
      [`ずっと 我慢《がまん》 して きました suggests the patient:`, [`has just started having symptoms`, `has been enduring it for a long time`, `has been complaining to everyone`], 1, `我慢《がまん》 する means to endure or hold it in.`],
      [`How do you read 気分《きぶん》?`, [`きもち`, `げんき`, `きぶん`], 2, `気分《きぶん》 means mood; 気持《きも》ち is feelings.`]
    ] },

  { id: 'interview-patterns', level: 'N4', unit: 'Clinical Japanese', psych: true, title: `Sentence frames for the psychiatric interview`, summary: `Reusable question frames for presence, onset, frequency, experience and context of symptoms, and ways to soften sensitive questions.`, draft: true,
    body: `<p>A psychiatric interview reuses a small number of question frames. Learn the frames and you can ask about almost any symptom by changing one word. All of these are polite and gentle enough for an adult patient you have just met.</p>
<h3>Presence, onset and amount</h3>
<table><tr><th>Frame</th><th>Asks</th></tr>
<tr><td>〜は あります か</td><td>Do you have …?</td></tr>
<tr><td>いつ から です か</td><td>Since when?</td></tr>
<tr><td>どの くらい 〜</td><td>How much, how long, how often</td></tr>
<tr><td>〜こと が あります か</td><td>Does it (sometimes) happen?</td></tr>
<tr><td>〜た こと が あります か</td><td>Has it ever happened?</td></tr>
<tr><td>〜て います か</td><td>Are you (currently, regularly) …?</td></tr>
<tr><td>どんな とき に 〜</td><td>In what situations …?</td></tr></table>
<div class="ex"><b>頭痛《ずつう》 は あります か。</b><span>Do you have headaches?</span></div>
<div class="ex"><b>いつ ごろ から 眠《ねむ》れなく なりました か。</b><span>Roughly since when have you been unable to sleep?</span></div>
<div class="ex"><b>その 気分《きぶん》 は どの くらい 続《つづ》いて います か。</b><span>How long has that mood been going on?</span></div>
<div class="ex"><b>夜中《よなか》 に 目《め》 が 覚《さ》める こと が あります か。</b><span>Do you ever wake up in the middle of the night?</span></div>
<div class="ex"><b>以前《いぜん》 に も 同《おな》じ よう な 状態《じょうたい》 に なった こと が あります か。</b><span>Has something like this ever happened before?</span></div>
<div class="ex"><b>お酒《さけ》 は 飲《の》んで います か。</b><span>Do you drink alcohol?</span></div>
<div class="ex"><b>どんな とき に 不安《ふあん》 に なります か。</b><span>In what situations do you feel anxious?</span></div>
<h3>Inviting the patient to talk</h3>
<p>〜に ついて 教《おし》えて ください (please tell me about) and 〜を 聞《き》かせて いただけます か (could you let me hear about) open up a topic. 〜と 感《かん》じる こと は あります か (do you ever feel that) is useful for perceptions and beliefs.</p>
<div class="ex"><b>ご家族《かぞく》 に ついて 教《おし》えて ください。</b><span>Please tell me about your family.</span></div>
<div class="ex"><b>お仕事《しごと》 の こと を 聞《き》かせて いただけます か。</b><span>Could you tell me about your work?</span></div>
<div class="ex"><b>誰《だれ》 か に 見《み》られて いる と 感《かん》じる こと は あります か。</b><span>Do you ever feel that someone is watching you?</span></div>
<div class="ex"><b>ほか の 人《ひと》 に は 聞《き》こえない 声《こえ》 が 聞《き》こえる こと は あります か。</b><span>Do you ever hear voices that other people can't hear?</span></div>
<h3>Softening sensitive questions</h3>
<p>Before asking about suicide, self-harm, substance use or trauma, a short preface tells the patient that the question is routine and that they may answer in their own way: もし よければ (if you don't mind), 答《こた》えにくい かも しれません が (this may be hard to answer, but), 大切《たいせつ》 な こと なので お聞《き》き します (I ask because it is important).</p>
<div class="ex"><b>もし よければ、 もう 少《すこ》し 詳《くわ》しく 聞《き》かせて ください。</b><span>If you don't mind, please tell me a little more.</span></div>
<div class="ex"><b>答《こた》えにくい かも しれません が、 大切《たいせつ》 な こと なので お聞《き》き します。</b><span>This may be hard to answer, but I'm asking because it's important.</span></div>
<div class="ex"><b>死《し》にたい と 思《おも》う こと は あります か。</b><span>Do you ever have thoughts of wanting to die?</span></div>
<div class="note">Ask one thing at a time. Japanese questions are easy to stack with けど and て, but a patient who is distressed may answer only the last part. After a sensitive question, give time for the answer and use あいづち rather than moving on quickly.</div>`,
    quiz: [
      [`Which frame asks "Has it ever happened?"`, [`〜こと が あります か`, `〜た こと が あります か`, `〜て います か`], 1, `た-form + こと が あります か asks about past experience.`],
      [`いつ から です か asks about:`, [`onset`, `frequency`, `location`], 0, `いつ から means "since when".`],
      [`How do you ask "In what situations do you feel anxious?"`, [`どこ で 不安《ふあん》 です か。`, `どう して 不安《ふあん》 です か。`, `どんな とき に 不安《ふあん》 に なります か。`], 2, `どんな とき に asks about the situations in which something happens.`],
      [`Which preface softens a sensitive question?`, [`早《はや》く 答《こた》えて ください。`, `答《こた》えにくい かも しれません が、`, `わかりました。`], 1, `答《こた》えにくい かも しれません が acknowledges the question may be hard to answer.`],
      [`お仕事《しごと》 の こと を 聞《き》かせて いただけます か means:`, [`Could you tell me about your work?`, `Did you hear about work?`, `Can you go to work?`, `Do you like your work?`], 0, `〜を 聞《き》かせて いただけます か politely invites the patient to talk about a topic.`]
    ] },

  { id: 'interpreting', level: 'N4', unit: 'Clinical Japanese', psych: true, title: `When your Japanese is not enough`, summary: `Repair phrases for when you don't understand, ways to check your understanding, and how to work safely with a medical interpreter.`, draft: true,
    body: `<p>At this stage your Japanese will often fall short, and that is normal. What matters is noticing when you have not understood, saying so politely, and knowing when to stop and bring in a qualified interpreter. A misunderstanding in a psychiatric assessment can change a risk judgement or a diagnosis.</p>
<h3>Repair phrases</h3>
<div class="ex"><b>すみません、 もう 一度《いちど》 お願《ねが》い します。</b><span>Sorry, could you say that once more?</span></div>
<div class="ex"><b>もう 少《すこ》し ゆっくり 話《はな》して ください。</b><span>Please speak a little more slowly.</span></div>
<div class="ex"><b>「しんどい」 は どういう 意味《いみ》 です か。</b><span>What does "shindoi" mean?</span></div>
<div class="ex"><b>私《わたし》 の 日本語《にほんご》 は まだ 上手《じょうず》 では ありません。</b><span>My Japanese is not good yet.</span></div>
<div class="ex"><b>簡単《かんたん》 な 言葉《ことば》 で 言《い》って いただけます か。</b><span>Could you say it in simpler words?</span></div>
<div class="ex"><b>ここ に 書《か》いて いただけます か。</b><span>Could you write it here?</span></div>
<div class="ex"><b>英語《えいご》 で も いい です か。</b><span>Would English be all right?</span></div>
<h3>Checking that you understood</h3>
<p>Summarise in simple words and end with 〜と いう こと です か (do you mean that …). This catches errors and shows the patient you are listening carefully.</p>
<div class="ex"><b>つまり、 夜《よる》 は 二時間《にじかん》 くらい しか 眠《ねむ》れない と いう こと です か。</b><span>So you mean you can only sleep about two hours at night?</span></div>
<div class="ex"><b>声《こえ》 が 聞《き》こえる の は 夜《よる》 だけ と いう こと です か。</b><span>Do you mean you hear the voice only at night?</span></div>
<h3>Working with an interpreter</h3>
<ul><li>Use a qualified medical interpreter, in person, by phone or by video, for informed consent, risk assessment (including suicide and violence), diagnosis, and treatment decisions. Your own limited Japanese is not enough for these.</li>
<li>Family members, friends and children are informants, not interpreters. They may soften, leave out or add things, and the patient may not speak freely in front of them.</li>
<li>Speak to the patient, not to the interpreter, and look at the patient.</li>
<li>Use short sentences and pause often so each part can be interpreted fully.</li>
<li>For key statements, such as what a voice says or what a patient says about suicide, ask the interpreter for the patient's exact words, word for word.</li>
<li>Brief the interpreter before and after the session when possible, and check the patient's understanding at the end.</li></ul>
<div class="ex"><b>今日《きょう》 は 通訳《つうやく》 の 方《かた》 に 入《はい》って いただきます。</b><span>Today an interpreter will join us.</span></div>
<div class="ex"><b>大切《たいせつ》 な 話《はなし》 なので、 通訳《つうやく》 の 方《かた》 を お呼《よ》び します。</b><span>Because this is important, I'll call an interpreter.</span></div>
<div class="note">The phrases in this app are practice wording for training. They do not replace an interpreter for anything that affects consent, safety or treatment. When you are not sure you understood something important, say so and check, rather than guessing.</div>`,
    quiz: [
      [`How do you ask someone to speak more slowly?`, [`もう 少《すこ》し ゆっくり 話《はな》して ください。`, `もう 一度《いちど》 書《か》いて ください。`, `英語《えいご》 で も いい です か。`], 0, `ゆっくり 話《はな》して ください asks for slower speech.`],
      [`〜と いう こと です か is used to:`, [`ask for the meaning of a single word`, `check that you have understood what was said`, `end the interview`], 1, `It means "do you mean that …" and checks your understanding.`],
      [`A patient's adult son offers to interpret during a suicide risk assessment. The best course is to:`, [`accept, because he knows the patient best`, `continue in your own Japanese`, `arrange a qualified medical interpreter and treat the son as an informant`], 2, `Family members are informants, not interpreters, especially for risk assessment.`],
      [`When working with an interpreter, you should:`, [`speak to the interpreter and look at them`, `speak to the patient in short sentences`, `ask long, combined questions to save time`], 1, `Address the patient directly and keep sentences short.`],
      [`How do you ask what しんどい means?`, [`「しんどい」 は どういう 意味《いみ》 です か。`, `「しんどい」 は どこ です か。`, `「しんどい」 を 書《か》いて います か。`], 0, `〜は どういう 意味《いみ》 です か asks for the meaning of a word.`]
    ] }

);
