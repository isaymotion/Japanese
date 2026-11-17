/* Lessons part 29 (0.23.0): N5, unit "Linking and nuance" (after linking): ni-iku, prohibition, adverbs-ku-ni, conjunctions, ne-yo, review-n5-linking.
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

  { id: 'ni-iku', level: 'N5', unit: 'Linking and nuance', after: 'linking', title: `Going to do: ます-stem + に 行《い》く / 来《く》る / 帰《かえ》る`, summary: `Say that someone goes, comes or goes home in order to do something, and understand why a patient or a visitor has come.`, draft: true,
    body: `<p>"I came to get my medicine", "My mother came to see me", "The nurse will come to take your blood pressure": on a ward people are always coming and going for a reason. Japanese puts the purpose in front of the movement verb with に. The pattern only works with verbs of movement: 行《い》く (go), 来《く》る (come) and 帰《かえ》る (go home).</p>
<h3>How to make it</h3>
<p>Take the ます-form, drop ます, and add に + 行《い》きます / 来《き》ます / 帰《かえ》ります. With a する-noun such as 散歩《さんぽ》 or 検査《けんさ》, the noun can take に directly.</p>
<table><tr><th>Word type</th><th>ます-form</th><th>Stem + に + movement</th></tr>
<tr><td>Group 1 verb</td><td>飲《の》みます</td><td>飲《の》み に 行《い》きます (go to drink)</td></tr>
<tr><td>Group 2 verb</td><td>食《た》べます</td><td>食《た》べ に 行《い》きます (go to eat)</td></tr>
<tr><td>Group 2 verb (one-kana stem)</td><td>見《み》ます</td><td>見《み》 に 来《き》ます (come to see)</td></tr>
<tr><td>する</td><td>します</td><td>し に 来《き》ます (come to do)</td></tr>
<tr><td>する-noun</td><td>散歩《さんぽ》します</td><td>散歩《さんぽ》 に 行《い》きます (go for a walk)</td></tr></table>
<p>The place you go to is marked with に or へ, and the purpose with に. To avoid two に in a row, many speakers use へ for the place: 病院《びょういん》 へ 薬《くすり》 を もらい に 行《い》きます.</p>
<h3>Going to do: 〜に 行《い》きます</h3>
<div class="ex"><b>昼《ひる》ご飯《はん》 を 食《た》べ に 行《い》きません か。</b><span>Shall we go and have lunch?</span></div>
<div class="ex"><b>駅《えき》 の 前《まえ》 の 店《みせ》 へ 傘《かさ》 を 買《か》い に 行《い》きました。</b><span>I went to the shop in front of the station to buy an umbrella.</span></div>
<div class="ex"><b>帰《かえ》り に 薬局《やっきょく》 へ 薬《くすり》 を もらい に 行《い》きます。</b><span>On the way home I'll go to the pharmacy to get my medicine.</span></div>
<div class="ex"><b>毎朝《まいあさ》 犬《いぬ》 と 公園《こうえん》 へ 散歩《さんぽ》 に 行《い》きます。</b><span>Every morning I go for a walk in the park with my dog.</span></div>
<h3>Coming to do: 〜に 来《き》ます</h3>
<div class="ex"><b>先週《せんしゅう》 の 検査《けんさ》 の 結果《けっか》 を 聞《き》き に 来《き》ました。</b><span>I came to hear the results of last week's tests.</span></div>
<div class="ex"><b>昨日《きのう》、 母《はは》 が 会《あ》い に 来《き》ました。</b><span>My mother came to see me yesterday.</span></div>
<div class="ex"><b>友達《ともだち》 が 日本語《にほんご》 を 勉強《べんきょう》し に 来《き》ます。</b><span>A friend is coming over to study Japanese.</span></div>
<h3>Going home to do: 〜に 帰《かえ》ります</h3>
<div class="ex"><b>昼《ひる》 は 一度《いちど》 家《いえ》 へ ご飯《はん》 を 食《た》べ に 帰《かえ》ります。</b><span>At noon I go home once to eat.</span></div>
<div class="ex"><b>夏休《なつやす》み に 家族《かぞく》 に 会《あ》い に 国《くに》 へ 帰《かえ》ります。</b><span>In the summer holidays I'm going back to my country to see my family.</span></div>
<h3>On the ward</h3>
<p>Staff often say what they will come back to do. It tells the patient what to expect.</p>
<div class="ex"><b>後《あと》 で また 様子《ようす》 を 見《み》 に 来《き》ます。</b><span>I'll come back later to see how you are.</span></div>
<div class="ex"><b>三時《さんじ》 ごろ、 看護師《かんごし》 が 血圧《けつあつ》 を 測《はか》り に 来《き》ます。</b><span>Around three o'clock a nurse will come to take your blood pressure.</span></div>
<div class="ex"><b>ご家族《かぞく》 は 何時《なんじ》 ごろ 会《あ》い に 来《き》ます か。</b><span>About what time will your family come to see you?</span></div>
<div class="ex"><b>来週《らいしゅう》 の 月曜日《げつようび》 に、 また 検査《けんさ》 に 来《き》て ください。</b><span>Please come again next Monday for a test.</span></div>
<h3>Look-alikes and the common mistake</h3>
<ul><li>The purpose takes the ます-stem, never the dictionary form or the て-form: 食《た》べ に 行《い》きます, not 食《た》べる に 行《い》きます.</li>
<li>〜て 行《い》きます is different: 食《た》べて 行《い》きます means "eat (first) and then go", not "go to eat". See <a href="#/lessons/linking">Linking sentences</a>.</li>
<li>For purposes with other verbs ("I save money in order to travel") you will later use 〜ため に; see <a href="#/lessons/purpose">In order to</a>. 〜に 行《い》く is only for going, coming and going home.</li></ul>
<div class="note">Do not open a consultation with 何《なに》 を し に 来《き》ました か. It is grammatical, but to a patient it can sound like "What are you doing here?" Ask 今日《きょう》 は どう されました か instead. Remember the shape: ます-stem + に + 行《い》く / 来《く》る / 帰《かえ》る.</div>`,
    quiz: [
      [`How do you say "I go to eat"?`, [`食《た》べる に 行《い》きます。`, `食《た》べ に 行《い》きます。`, `食《た》べて に 行《い》きます。`], 1, `The purpose takes the ます-stem: 食《た》べ に 行《い》きます.`],
      [`What does 母《はは》 が 会《あ》い に 来《き》ました mean?`, [`My mother came to see me.`, `My mother wants to see me.`, `My mother went out to meet a friend.`], 0, `会《あ》い に 来《き》ました is "came in order to see".`],
      [`Fill the blank: 公園《こうえん》 へ 散歩《さんぽ》 ＿ 行《い》きます。`, [`で`, `を`, `に`], 2, `A する-noun of purpose takes に directly: 散歩《さんぽ》 に 行《い》きます.`],
      [`How does a nurse say "I'll come back later to see how you are"?`, [`後《あと》 で また 様子《ようす》 を 見《み》る に 来《き》ます。`, `後《あと》 で また 様子《ようす》 を 見《み》 に 行《い》きました。`, `後《あと》 で また 様子《ようす》 を 見《み》 に 来《き》ます。`], 2, `The stem of 見《み》ます is 見《み》, and 来《き》ます (not past 行《い》きました) fits "come back later".`],
      [`Which is the natural way to open a consultation?`, [`何《なに》 を し に 来《き》ました か。`, `今日《きょう》 は どう されました か。`, `何《なに》 を 食《た》べ に 来《き》ました か。`], 1, `何《なに》 を し に 来《き》ました か can sound like "What are you doing here?"; どう されました か is the usual opening.`],
      [`Fill the blank: 薬局《やっきょく》 へ 薬《くすり》 を ＿ に 行《い》きます。`, [`もらい`, `もらう`, `もらって`], 0, `もらいます → stem もらい + に 行《い》きます.`]
    ] },

  { id: 'prohibition', level: 'N5', unit: 'Linking and nuance', after: 'ni-iku', title: `Must not: 〜て は いけません, and gentler ways to say "please don't"`, summary: `Understand rules and signs with 〜て は いけません, and tell a patient what not to do in a gentle way.`, draft: true,
    body: `<p>Wards have rules: no smoking, no photos, no phone calls in some rooms. Patients need instructions too: please don't drive today, please don't go out alone. In <a href="#/lessons/te-kudasai">Requests and permission</a> you met 〜て も いい です か (may I?), 〜ないで ください (please don't) and 〜て は いけません (must not). This lesson shows when each one fits, because the strong form can sound harsh when said to a patient.</p>
<h3>How to make it</h3>
<p>て-form + は + いけません. は is the particle (read <i>wa</i>). The table also shows 〜ないで ください, which uses the ない-form; it is taught fully in <a href="#/lessons/nai-form">The ない-form</a>, so learn these as phrases for now.</p>
<table><tr><th>Verb</th><th>Must not</th><th>Please don't</th></tr>
<tr><td>Group 1: 飲《の》む</td><td>飲《の》んで は いけません</td><td>飲《の》まないで ください</td></tr>
<tr><td>Group 1: 吸《す》う</td><td>吸《す》って は いけません</td><td>吸《す》わないで ください</td></tr>
<tr><td>Group 2: 食《た》べる</td><td>食《た》べて は いけません</td><td>食《た》べないで ください</td></tr>
<tr><td>Group 2: 出《で》る</td><td>出《で》て は いけません</td><td>出《で》ないで ください</td></tr>
<tr><td>する: 運転《うんてん》する</td><td>運転《うんてん》して は いけません</td><td>運転《うんてん》しないで ください</td></tr>
<tr><td>来《く》る</td><td>来《き》て は いけません</td><td>来《こ》ないで ください</td></tr></table>
<h3>Rules and signs: 〜て は いけません</h3>
<p>〜て は いけません states a rule: something is not allowed. You will read it in hospital rules and hear it from teachers and parents. Notices usually use 〜ないで ください, and short signs use words such as 禁煙《きんえん》 (no smoking); more signs are in <a href="#/lessons/commands">Commands and prohibitions</a>.</p>
<div class="ex"><b>病院《びょういん》 の 中《なか》 で タバコ を 吸《す》って は いけません。</b><span>You must not smoke inside the hospital.</span></div>
<div class="ex"><b>病棟《びょうとう》 で 写真《しゃしん》 を 撮《と》って は いけません。</b><span>You must not take photos on the ward.</span></div>
<div class="ex"><b>テスト の とき、 辞書《じしょ》 を 使《つか》って は いけません。</b><span>You must not use a dictionary during the test.</span></div>
<div class="ex"><b>ここ に 車《くるま》 を 止《と》めないで ください。</b><span>Please do not park here. (a notice)</span></div>
<p>In casual speech you will also hear 〜て は だめ and the short form 〜ちゃ だめ: 食《た》べちゃ だめ "you can't eat that". Parents say this to children; do not use it with patients.</p>
<h3>Why it sounds harsh to a patient</h3>
<p>Said to a person face to face, 〜て は いけません sounds like a teacher reading a rule to a child. With an adult patient it can feel cold or scolding, even when the rule is real. Use one of the gentler forms instead:</p>
<ul><li>〜ないで ください, often with ね: お酒《さけ》 は 飲《の》まないで ください ね.</li>
<li>A cushion first: すみません が、 〜ないで ください.</li>
<li>A reason with から: 危《あぶ》ない です から、 今日《きょう》 は 運転《うんてん》しないで ください.</li>
<li>A more polite request: 〜ないで いただけます か.</li></ul>
<div class="ex"><b>お酒《さけ》 は しばらく 飲《の》まないで ください ね。</b><span>Please don't drink alcohol for a while.</span></div>
<div class="ex"><b>すみません が、 ここ で は 電話《でんわ》 を しないで ください。</b><span>I'm sorry, but please don't make phone calls here.</span></div>
<div class="ex"><b>危《あぶ》ない です から、 今日《きょう》 は 運転《うんてん》しないで ください。</b><span>It's dangerous, so please don't drive today.</span></div>
<div class="ex"><b>夜《よる》 は 一人《ひとり》 で 外《そと》 に 出《で》ないで いただけます か。</b><span>Would you mind not going outside alone at night?</span></div>
<h3>Saying yes: 〜て も いい です よ</h3>
<p>The opposite of a prohibition is permission. A patient asks 〜て も いい です か; you answer はい、 いい です よ or はい、 どうぞ. You can also offer permission without being asked.</p>
<div class="ex"><b>シャワー を 浴《あ》びて も いい です か。</b><span>May I take a shower?</span></div>
<div class="ex"><b>はい、 いい です よ。</b><span>Yes, that's fine.</span></div>
<div class="ex"><b>疲《つか》れました か。 少《すこ》し 休《やす》んで も いい です よ。</b><span>Are you tired? You can take a short rest.</span></div>
<p>If the answer is no (for example to 帰《かえ》って も いい です か), do not echo 〜て は いけません. Say sorry and give the reason or the next step: すみません、 今日《きょう》 は まだ 検査《けんさ》 が あります から、 もう 少《すこ》し 待《ま》って ください.</p>
<div class="note">The common mistake is mixing the two halves: 〜て も いい (may) and 〜て は いけません (must not) look alike but are opposites. And remember: 〜て は いけません is for rules and signs; to a patient, say 〜ないで ください (ね) and give a reason.</div>`,
    quiz: [
      [`How do you write the rule "You must not smoke here"?`, [`ここ で タバコ を 吸《す》って は いけません。`, `ここ で タバコ を 吸《す》う は いけません。`, `ここ で タバコ を 吸《す》って も いい です。`], 0, `Must not is て-form + は いけません; 吸《す》う は is ungrammatical and 〜て も いい gives permission.`],
      [`Which is the gentlest way to tell a patient "please don't drink alcohol"?`, [`お酒《さけ》 を 飲《の》んで は いけません。`, `お酒《さけ》 を 飲《の》んで も いい です。`, `お酒《さけ》 は 飲《の》まないで ください ね。`], 2, `〜ないで ください ね is a soft request; 〜て は いけません sounds like a rule.`],
      [`What does 写真《しゃしん》 を 撮《と》って も いい です よ mean?`, [`You must not take photos.`, `You may take photos.`, `Please take a photo of me.`], 1, `〜て も いい です gives permission.`],
      [`Fill the blank to say "Please don't park here": ここ に 車《くるま》 を ＿ ください。`, [`止《と》めて は`, `止《と》めないで`, `止《と》めなくて`], 1, `"Please don't" is ない-form + で ください: 止《と》めないで ください.`],
      [`Where does 〜て は いけません fit best?`, [`In a gentle request to an adult patient`, `In an invitation to a friend`, `In written rules and on notices`], 2, `It states a rule; face to face with a patient it can sound harsh.`],
      [`A patient asks シャワー を 浴《あ》びて も いい です か. Which is a natural "yes"?`, [`はい、 いい です よ。`, `はい、 浴《あ》びて は いけません。`, `はい、 浴《あ》び に 行《い》きました。`], 0, `はい、 いい です よ grants the permission that was asked for.`]
    ] },

  { id: 'adverbs-ku-ni', level: 'N5', unit: 'Linking and nuance', after: 'prohibition', title: `How it is done: 早《はや》く, 静《しず》か に; 〜く する, 〜に する`, summary: `Turn adjectives into adverbs to say how something is done, and use 〜く する / 〜に する to say that you make something a certain way.`, draft: true,
    body: `<p>A physical examination is full of "how": breathe in deeply, push hard, speak slowly, relax. Daily life is too: get up early, write neatly, come home late. Japanese makes these words from adjectives. The same forms with する say that you make something a certain way: turn the TV down, make yourself comfortable.</p>
<h3>How to make it</h3>
<table><tr><th>Word type</th><th>Rule</th><th>Adjective</th><th>Adverb</th></tr>
<tr><td>い-adjective</td><td>い → く</td><td>早《はや》い (early, fast)</td><td>早《はや》く</td></tr>
<tr><td>い-adjective</td><td>い → く</td><td>大《おお》きい (big)</td><td>大《おお》きく</td></tr>
<tr><td>いい (irregular)</td><td>from よい</td><td>いい (good)</td><td>よく</td></tr>
<tr><td>な-adjective</td><td>+ に</td><td>静《しず》か (quiet)</td><td>静《しず》か に</td></tr>
<tr><td>な-adjective</td><td>+ に</td><td>きれい (clean, neat)</td><td>きれい に</td></tr></table>
<p>This is the same く you met in 〜くて and 〜くない (<a href="#/lessons/i-adjectives">い-adjectives</a>), and the same split between い- and な-adjectives (<a href="#/lessons/na-adjectives">な-adjectives</a>). きれい and 嫌《きら》い end in い but are な-adjectives: きれい に, never きれく.</p>
<h3>い-adjectives: 〜く + verb</h3>
<div class="ex"><b>毎朝《まいあさ》 早《はや》く 起《お》きます。</b><span>I get up early every morning.</span></div>
<div class="ex"><b>昨日《きのう》 は 夜《よる》 遅《おそ》く 家《いえ》 に 帰《かえ》りました。</b><span>Yesterday I got home late at night.</span></div>
<div class="ex"><b>ここ に お名前《なまえ》 を 大《おお》きく 書《か》いて ください。</b><span>Please write your name here in large letters.</span></div>
<div class="ex"><b>私《わたし》 の 手《て》 を 強《つよ》く 押《お》して ください。</b><span>Please push against my hand hard.</span></div>
<p>よく has two common meanings: "well" and "often". 夜《よる》 は よく 寝《ね》ました is "I slept well"; よく 映画《えいが》 を 見《み》ます is "I often watch films". The context decides.</p>
<h3>な-adjectives: 〜に + verb</h3>
<div class="ex"><b>図書館《としょかん》 で は 静《しず》か に 話《はな》して ください。</b><span>Please speak quietly in the library.</span></div>
<div class="ex"><b>ここ に 字《じ》 を きれい に 書《か》いて ください。</b><span>Please write the letters neatly here.</span></div>
<div class="ex"><b>田中《たなか》さん は 英語《えいご》 を 上手《じょうず》 に 話《はな》します。</b><span>Mr. or Ms. Tanaka speaks English well.</span></div>
<p>Some common adverbs are not made from adjectives and have no rule: ゆっくり (slowly), ちょっと (a little), もう, まだ, 一緒《いっしょ》 に. Learn them as words.</p>
<h3>Making it so: 〜く する and 〜に する</h3>
<p>Adverb + する means "make it (that way)". Someone does it on purpose.</p>
<div class="ex"><b>すみません、 テレビ の 音《おと》 を 小《ちい》さく して ください。</b><span>Excuse me, please turn the TV down.</span></div>
<div class="ex"><b>部屋《へや》 を 少《すこ》し 明《あか》るく しましょう か。</b><span>Shall I make the room a little brighter?</span></div>
<div class="ex"><b>週末《しゅうまつ》 に 部屋《へや》 を きれい に しました。</b><span>I cleaned up my room at the weekend.</span></div>
<p>Compare 〜く なる "become", which you will meet in <a href="#/lessons/comparing-changing">Comparing and changing</a>: 部屋《へや》 を 明《あか》るく しました "I made the room brighter" (someone did it), 部屋《へや》 が 明《あか》るく なりました "the room got brighter" (it changed).</p>
<h3>In the examination room</h3>
<div class="ex"><b>どうぞ、 楽《らく》 に して ください。</b><span>Please make yourself comfortable.</span></div>
<div class="ex"><b>大《おお》きく 息《いき》 を 吸《す》って ください。</b><span>Please take a deep breath in.</span></div>
<div class="ex"><b>もう 少《すこ》し ゆっくり 話《はな》しましょう か。</b><span>Shall I speak a little more slowly?</span></div>
<div class="ex"><b>最近《さいきん》、 夜《よる》 遅《おそ》く まで 起《お》きて います か。</b><span>Have you been staying up late recently?</span></div>
<div class="note">The common mistakes are 静《しず》かく (a な-adjective takes に: 静《しず》か に) and using the plain adjective before a verb: 早《はや》い 起《お》きます should be 早《はや》く 起《お》きます. 楽《らく》 に して ください is a useful phrase for starting an examination or an interview.</div>`,
    quiz: [
      [`What is the adverb form of 早《はや》い?`, [`早《はや》い`, `早《はや》く`, `早《はや》 に`], 1, `An い-adjective changes い to く: 早《はや》く.`],
      [`What is the adverb form of 静《しず》か?`, [`静《しず》かく`, `静《しず》か な`, `静《しず》か に`], 2, `A な-adjective takes に: 静《しず》か に.`],
      [`Fill the blank: 字《じ》 を ＿ 書《か》いて ください。 (neatly)`, [`きれく`, `きれい に`, `きれいく`], 1, `きれい is a な-adjective even though it ends in い, so it takes に.`],
      [`What does 楽《らく》 に して ください mean?`, [`Please make yourself comfortable.`, `Please be quiet.`, `Please get well soon.`], 0, `楽《らく》 is a な-adjective (easy, comfortable), and 〜に する means "make it so".`],
      [`How do you say "Please turn the TV down"?`, [`テレビ の 音《おと》 を 小《ちい》さい して ください。`, `テレビ の 音《おと》 を 小《ちい》さく なって ください。`, `テレビ の 音《おと》 を 小《ちい》さく して ください。`], 2, `Making something quieter on purpose is 〜く する; 小《ちい》さい して is ungrammatical.`],
      [`What does 部屋《へや》 を 明《あか》るく しました mean?`, [`I made the room brighter.`, `The room became brighter by itself.`, `The room was bright.`], 0, `〜く する means someone made it so; 〜く なる would be "became".`]
    ] },

  { id: 'conjunctions', level: 'N5', unit: 'Linking and nuance', after: 'adverbs-ku-ni', title: `Linking words: そして, それから, でも, しかし, だから, それで, が / けど`, summary: `Join two sentences with "and", "and then", "but" and "so", choose the word that fits the situation, and follow a patient's story with それで and それから.`, draft: true,
    body: `<p>A patient's history is a story: "It started last week. Then I couldn't eat. But I went to work. So I'm very tired." The words that join these sentences tell you how the events connect. You met そして, それから and でも in <a href="#/lessons/linking">Linking sentences</a>; this lesson adds the rest of the basic set and shows which ones begin a sentence and which ones join two clauses inside one sentence.</p>
<h3>The set</h3>
<table><tr><th>Word</th><th>Job</th><th>Where it goes</th><th>Style</th></tr>
<tr><td>そして</td><td>and, and also</td><td>start of a sentence</td><td>neutral</td></tr>
<tr><td>それから</td><td>and then; also</td><td>start of a sentence</td><td>neutral, spoken</td></tr>
<tr><td>でも</td><td>but</td><td>start of a sentence</td><td>spoken</td></tr>
<tr><td>しかし</td><td>however</td><td>start of a sentence</td><td>written, formal talks</td></tr>
<tr><td>だから (ですから)</td><td>so, therefore</td><td>start of a sentence</td><td>spoken; ですから is politer</td></tr>
<tr><td>それで</td><td>and so, as a result</td><td>start of a sentence</td><td>spoken</td></tr>
<tr><td>が</td><td>but</td><td>after です / ます, inside one sentence</td><td>polite, neutral</td></tr>
<tr><td>けど</td><td>but</td><td>after です / ます or a plain form, inside one sentence</td><td>spoken, softer</td></tr></table>
<p>Inside one sentence, が and けど come straight after the first clause and are followed by a comma: 行《い》きたい です が、 / 行《い》きたい です けど、. This が is not the subject particle; it comes after a whole clause ending in です or ます, not after a noun.</p>
<h3>Adding: そして and それから</h3>
<div class="ex"><b>この 病院《びょういん》 は 広《ひろ》い です。 そして、 とても 静《しず》か です。</b><span>This hospital is spacious. And it's very quiet.</span></div>
<div class="ex"><b>朝《あさ》 シャワー を 浴《あ》びます。 それから、 朝《あさ》ご飯《はん》 を 食《た》べます。</b><span>I take a shower in the morning. Then I eat breakfast.</span></div>
<div class="ex"><b>頭《あたま》 が 痛《いた》い です。 それから、 少《すこ》し 熱《ねつ》 も あります。</b><span>I have a headache. And I also have a slight fever.</span></div>
<h3>Contrast: でも, しかし, が, けど</h3>
<div class="ex"><b>薬《くすり》 は 毎日《まいにち》 飲《の》んで います。 でも、 まだ 気分《きぶん》 が よくない です。</b><span>I take my medicine every day. But I still don't feel well.</span></div>
<div class="ex"><b>熱《ねつ》 は 下《さ》がりました。 しかし、 咳《せき》 は まだ 続《つづ》いて います。</b><span>The fever has come down. However, the cough is still continuing. (as in a written report)</span></div>
<div class="ex"><b>昼《ひる》 は 大丈夫《だいじょうぶ》 です が、 夜《よる》 は 少《すこ》し 不安《ふあん》 です。</b><span>I'm all right during the day, but at night I feel a little anxious.</span></div>
<div class="ex"><b>旅行《りょこう》 に 行《い》きたい です けど、 時間《じかん》 が ありません。</b><span>I want to go on a trip, but I don't have time.</span></div>
<p>が also works as a cushion before a request, with no real "but": すみません が、 少《すこ》し 待《ま》って ください "Excuse me, could you wait a moment". A sentence left open with けど or が is a soft way to start a topic or to say no (see <a href="#/lessons/conversation-habits">Conversation habits</a>).</p>
<h3>Result: だから and それで</h3>
<div class="ex"><b>昨日《きのう》 は 遅《おそ》く まで 仕事《しごと》 でした。 だから、 今日《きょう》 は とても 眠《ねむ》い です。</b><span>I worked late yesterday. So I'm very sleepy today.</span></div>
<div class="ex"><b>先週《せんしゅう》 から 熱《ねつ》 が あります。 それで、 今日《きょう》 病院《びょういん》 に 来《き》ました。</b><span>I've had a fever since last week. So I came to the hospital today.</span></div>
<p>だから can sound blunt, even argumentative ("so, as I said"). When you explain something to a patient, ですから is politer. それで tells what happened as a result, and it is also a gentle prompt to go on; see <a href="#/lessons/reasons">Giving reasons</a>.</p>
<h3>In the interview</h3>
<div class="ex"><b>それで、 どう なりました か。</b><span>And what happened then?</span></div>
<div class="ex"><b>それから、 どう しました か。</b><span>And what did you do after that?</span></div>
<div class="ex"><b>先生《せんせい》、 ちょっと 質問《しつもん》 が あります けど…。</b><span>Doctor, I have a little question...</span></div>
<div class="note">でも, しかし, だから and それで begin a new sentence; が and けど join two clauses inside one sentence. So say 痛《いた》い です が、 or 痛《いた》い です。 でも、, never 痛《いた》い です でも、 in one sentence. Use しかし in writing and ですから when explaining to a patient.</div>`,
    quiz: [
      [`Fill the blank: 熱《ねつ》 が あります。 ＿、 今日《きょう》 は 休《やす》みます。`, [`でも`, `だから`, `しかし`], 1, `The second sentence is the result of the first, so "so" (だから) fits; でも and しかし mean "but".`],
      [`Which word is the formal, written "however"?`, [`しかし`, `けど`, `それで`], 0, `しかし belongs to writing and formal talks; けど is spoken "but" and それで is "and so".`],
      [`Which sentence is correct?`, [`行《い》きたい です でも、 時間《じかん》 が ありません。`, `行《い》きたい です けど、 時間《じかん》 が ありません。`, `行《い》きたい けど です、 時間《じかん》 が ありません。`], 1, `けど joins two clauses inside one sentence; でも starts a new sentence.`],
      [`A patient pauses in their story. You say それで？ What does it mean?`, [`That's wrong.`, `Let's stop here.`, `And then? (please go on)`], 2, `それで invites the speaker to continue with what happened next.`],
      [`Fill the blank: 朝《あさ》 起《お》きて、 顔《かお》 を 洗《あら》います。 ＿、 薬《くすり》 を 飲《の》みます。`, [`でも`, `しかし`, `それから`], 2, `The actions follow in order, so それから "and then" fits.`],
      [`How do you say "Excuse me, but please wait a moment"?`, [`すみません が、 少《すこ》し 待《ま》って ください。`, `すみません だから、 少《すこ》し 待《ま》って ください。`, `すみません しかし、 少《すこ》し 待《ま》って ください。`], 0, `が after すみません is a cushion before a request; だから and しかし cannot join a clause like this.`]
    ] },

  { id: 'ne-yo', level: 'N5', unit: 'Linking and nuance', after: 'conjunctions', title: `Sentence endings: ね, よ, よね, か and の`, summary: `Use ね to share and soften, よ to tell, よね to check, recognise casual の questions, and know when よ sounds pushy to a patient.`, draft: true,
    body: `<p>Small endings after です or ます change how a sentence feels. That must have been hard <i>(isn't it)</i>, it's fine <i>(I'm telling you)</i>, your next visit is Monday <i>(right?)</i>: English uses tone or a tag; Japanese uses ね, よ and よね. They matter a great deal at the bedside, because the same sentence can sound warm or pushy depending on the ending.</p>
<h3>How to make it</h3>
<p>The ending goes at the very end of the sentence, after です / ます (or after a plain form in casual speech). よね is よ + ね, always in that order.</p>
<table><tr><th>Ending</th><th>Job</th><th>Example</th></tr>
<tr><td>ね</td><td>share a feeling, seek agreement, soften</td><td>寒《さむ》い です ね</td></tr>
<tr><td>よ</td><td>tell the listener something they may not know</td><td>大丈夫《だいじょうぶ》 です よ</td></tr>
<tr><td>よね</td><td>check something you think is true</td><td>明日《あした》 です よね</td></tr>
<tr><td>か</td><td>ask a question; with falling tone, "I see"</td><td>痛《いた》い です か / そう です か</td></tr>
<tr><td>の</td><td>casual question or explanation</td><td>どう した の？</td></tr></table>
<h3>ね: sharing and softening</h3>
<p>ね assumes the listener feels or knows the same thing. It makes a comment friendly, shows sympathy and softens a request.</p>
<div class="ex"><b>今日《きょう》 は いい 天気《てんき》 です ね。</b><span>Nice weather today, isn't it?</span></div>
<div class="ex"><b>それ は つらかった です ね。</b><span>That must have been hard.</span></div>
<div class="ex"><b>三時《さんじ》 ごろ、 また 来《き》ます ね。</b><span>I'll come again around three, all right?</span></div>
<h3>よ: telling</h3>
<p>よ marks information the listener does not have yet. Used kindly, it reassures; used on a correction or an order, it presses.</p>
<div class="ex"><b>この 店《みせ》 の ラーメン は おいしい です よ。</b><span>The ramen at this place is good, you know.</span></div>
<div class="ex"><b>まだ 時間《じかん》 は あります よ。</b><span>There's still time, don't worry.</span></div>
<div class="ex"><b>大丈夫《だいじょうぶ》 です よ。 ゆっくり 話《はな》して ください。</b><span>It's all right. Take your time.</span></div>
<h3>よね: checking</h3>
<p>よね says "this is right, isn't it?" Use it to confirm a fact you think you share.</p>
<div class="ex"><b>明日《あした》 は 休《やす》み です よね。</b><span>Tomorrow is a day off, right?</span></div>
<div class="ex"><b>次《つぎ》 の 診察《しんさつ》 は 来週《らいしゅう》 の 月曜日《げつようび》 です よね。</b><span>My next appointment is next Monday, isn't it?</span></div>
<h3>か and の</h3>
<p>か makes a polite question, said with rising tone. そう です か with falling tone is "I see", not a question. In casual speech, の with rising tone asks a question and の with falling tone explains; you will hear it from family members, friends and children. It is the casual partner of 〜ん です (see <a href="#/lessons/reasons">Giving reasons</a>).</p>
<div class="ex"><b>どこ が 痛《いた》い です か。</b><span>Where does it hurt?</span></div>
<div class="ex"><b>どう した の？</b><span>What's wrong? (casual, to a child or a friend)</span></div>
<div class="ex"><b>お母《かあ》さん、 頭《あたま》 が 痛《いた》い の。</b><span>Mum, my head hurts. (a child explaining)</span></div>
<h3>When よ sounds pushy to a patient</h3>
<p>よ tells the patient something they did not know. On a correction about their own experience, or on an instruction, it can sound like "I know better" or like nagging. ね is safer, because it shares rather than tells.</p>
<table><tr><th>Can sound pushy</th><th>Gentler</th></tr>
<tr><td>それ は 違《ちが》います よ。</td><td>そう です か。 もう 少《すこ》し 教《おし》えて ください。</td></tr>
<tr><td>お薬《くすり》 は 毎日《まいにち》 飲《の》んで ください よ。</td><td>お薬《くすり》 は 毎日《まいにち》 飲《の》んで ください ね。</td></tr></table>
<div class="note">ね shares, よ tells, よね checks. Do not put ね on something only you know: 私《わたし》 は ナバロ です ね sounds as if you are unsure of your own name. With patients, use よ for reassurance (大丈夫《だいじょうぶ》 です よ) and ね for instructions and sympathy.</div>`,
    quiz: [
      [`A patient tells you about a painful week. Which reply shows sympathy?`, [`それ は つらかった です よ。`, `それ は つらかった です ね。`, `それ は つらかった です か よ。`], 1, `ね shares the feeling; よ would tell the patient something they already know.`],
      [`You tell a friend something new: "The ramen here is good, you know." Which fits?`, [`ここ の ラーメン は おいしい です よ。`, `ここ の ラーメン は おいしい です よね。`, `ここ の ラーメン は おいしい か です。`], 0, `よ gives the listener new information; よね would check something they already know.`],
      [`What does 明日《あした》 は 休《やす》み です よね mean?`, [`Is tomorrow a day off? I have no idea.`, `Tomorrow is a day off, I'm telling you.`, `Tomorrow is a day off, right?`], 2, `よね checks something the speaker thinks is true.`],
      [`Which reminder can sound like nagging to a patient?`, [`お薬《くすり》 は 毎日《まいにち》 飲《の》んで ください ね。`, `お薬《くすり》 は 毎日《まいにち》 飲《の》んで ください よ。`, `お薬《くすり》 は 毎日《まいにち》 飲《の》んで いただけます か。`], 1, `よ on an instruction presses the point; ね and 〜て いただけます か are softer.`],
      [`Who would you expect to say どう した の？`, [`A parent to a child, or a friend to a friend`, `A doctor to a new adult patient`, `A receptionist to a visitor`], 0, `Question の is casual; with adults you do not know, use です / ます and か.`],
      [`How do you simply state your name?`, [`私《わたし》 は ナバロ です ね。`, `私《わたし》 は ナバロ です か。`, `私《わたし》 は ナバロ です。`], 2, `ね on your own name sounds unsure, and か makes it a question.`]
    ] },

  { id: 'review-n5-linking', level: 'N5', unit: 'Linking and nuance', after: 'ne-yo', review: true, title: `Review: Linking and nuance`, summary: `Check that you can say why someone goes or comes, say "must not" and "please don't" at the right strength, say how things are done, link sentences, and choose ね or よ.`, draft: true,
    body: `<p>This review gathers the five lessons of the unit. Read the table, check the "Watch out" list, then try the mixed sentences and the quiz.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>ます-stem + に 行《い》く / 来《く》る / 帰《かえ》る</td><td>go, come, go home to do</td><td>薬《くすり》 を もらい に 来《き》ました。</td></tr>
<tr><td>〜て は いけません</td><td>must not (rules, signs)</td><td>ここ で タバコ を 吸《す》って は いけません。</td></tr>
<tr><td>〜ないで ください</td><td>please don't (gentle)</td><td>一人《ひとり》 で 外《そと》 に 出《で》ないで ください ね。</td></tr>
<tr><td>〜く / 〜に + verb</td><td>how it is done</td><td>大《おお》きく 息《いき》 を 吸《す》って ください。</td></tr>
<tr><td>〜く する / 〜に する</td><td>make it so</td><td>楽《らく》 に して ください。</td></tr>
<tr><td>そして, それから, でも, しかし, だから, それで</td><td>start a new sentence</td><td>熱《ねつ》 が あります。 だから、 今日《きょう》 は 休《やす》みます。</td></tr>
<tr><td>〜が / 〜けど</td><td>but, inside one sentence; cushion</td><td>すみません が、 少《すこ》し 待《ま》って ください。</td></tr>
<tr><td>ね / よ / よね</td><td>share / tell / check</td><td>それ は つらかった です ね。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Purpose takes the ます-stem: 食《た》べ に 行《い》きます, not 食《た》べる に or 食《た》べて に.</li>
<li>〜て は いけません is a rule. To a patient, say 〜ないで ください (ね) and give a reason.</li>
<li>な-adjectives take に: 静《しず》か に, きれい に; never 静《しず》かく or きれく.</li>
<li>でも starts a sentence; が and けど come after です / ます inside one sentence.</li>
<li>よ on an instruction or a correction can sound pushy; ね shares and softens.</li></ul>
<h3>Mixed sentences</h3>
<div class="ex"><b>後《あと》 で また 様子《ようす》 を 見《み》 に 来《き》ます ね。</b><span>I'll come back later to see how you are.</span></div>
<div class="ex"><b>ここ で は 電話《でんわ》 を しないで ください。 でも、 外《そと》 で は 電話《でんわ》して も いい です よ。</b><span>Please don't make phone calls in here. But you can make calls outside.</span></div>
<div class="ex"><b>お名前《なまえ》 を 大《おお》きく 書《か》いて ください。 それから、 ここ に 電話番号《でんわばんごう》 も お願《ねが》い します。</b><span>Please write your name in large letters. And your phone number here too, please.</span></div>
<div class="ex"><b>熱《ねつ》 が あります。 それで、 今日《きょう》 は 早《はや》く 家《いえ》 に 帰《かえ》ります。</b><span>I have a fever. So I'm going home early today.</span></div>
<div class="ex"><b>昨日《きのう》 娘《むすめ》 が 会《あ》い に 来《き》ました が、 今日《きょう》 は 来《き》ません。</b><span>My daughter came to see me yesterday, but she isn't coming today.</span></div>`,
    quiz: [
      [`Fill the blank: 図書館《としょかん》 へ 本《ほん》 を ＿ に 行《い》きます。`, [`借《か》りる`, `借《か》りて`, `借《か》り`], 2, `Purpose takes the ます-stem: 借《か》ります → 借《か》り に 行《い》きます.`],
      [`Which sentence is a rule, as on a notice?`, [`写真《しゃしん》 を 撮《と》って は いけません。`, `写真《しゃしん》 を 撮《と》って も いい です よ。`, `写真《しゃしん》 を 撮《と》り に 行《い》きます。`], 0, `〜て は いけません states that something is not allowed.`],
      [`Fill the blank: お名前《なまえ》 を ＿ 書《か》いて ください。 (neatly)`, [`きれく`, `きれい に`, `きれい な`], 1, `きれい is a な-adjective, so the adverb is きれい に.`],
      [`Fill the blank: 頭《あたま》 が 痛《いた》い です。 ＿、 少《すこ》し 熱《ねつ》 も あります。`, [`それから`, `でも`, `しかし`], 0, `The second sentence adds another symptom, so それから "and also" fits; でも and しかし mean "but".`],
      [`A patient describes a hard week. Which reply shows sympathy?`, [`そう です か。 それ は 大変《たいへん》 でした よ。`, `そう です か。 それ は 大変《たいへん》 です か。`, `そう です か。 それ は 大変《たいへん》 でした ね。`], 2, `ね shares the feeling; よ would tell them something they know, and です か asks a question.`],
      [`Which is the gentlest way to ask a patient not to go outside alone?`, [`一人《ひとり》 で 外《そと》 に 出《で》て は いけません。`, `一人《ひとり》 で 外《そと》 に 出《で》ないで ください ね。`, `一人《ひとり》 で 外《そと》 に 出《で》て も いい です よ。`], 1, `〜ないで ください ね is a soft request; 〜て は いけません sounds like a rule and 〜て も いい gives permission.`],
      [`A nurse says 後《あと》 で 血圧《けつあつ》 を 測《はか》り に 来《き》ます ね. What does she mean?`, [`I'll come later to take your blood pressure.`, `I took your blood pressure earlier.`, `Please come later to have your blood pressure taken.`], 0, `測《はか》り に 来《き》ます is "come to measure", and ね makes it a friendly announcement.`],
      [`Fill the blank: 熱《ねつ》 が あります。 ＿、 今日《きょう》 は 早《はや》く 帰《かえ》ります。`, [`しかし`, `でも`, `それで`], 2, `Going home early is the result of the fever, so それで "and so" fits.`],
      [`What does 楽《らく》 に して ください mean?`, [`Please be quiet.`, `Please make yourself comfortable.`, `Please do it quickly.`], 1, `楽《らく》 に する is "make yourself comfortable"; "quietly" would be 静《しず》か に and "quickly" 早《はや》く.`],
      [`Fill the blank: すみません ＿、 ここ で は 電話《でんわ》 を しないで ください。`, [`を`, `で`, `が`], 2, `が after すみません is a cushion before a request.`],
      [`How do you say "I came to hear the results"?`, [`結果《けっか》 を 聞《き》き に 来《き》ました。`, `結果《けっか》 を 聞《き》く に 来《き》ました。`, `結果《けっか》 を 聞《き》いて に 来《き》ました。`], 0, `聞《き》きます → stem 聞《き》き + に 来《き》ました.`],
      [`A patient wants to check that their daughter is coming again tomorrow. Which is the checking question?`, [`娘《むすめ》 は 明日《あした》 も 会《あ》い に 来《き》ます よ。`, `娘《むすめ》 は 明日《あした》 も 会《あ》い に 来《き》ます よね。`, `娘《むすめ》 は 明日《あした》 も 会《あ》い に 来《き》ました ね。`], 1, `よね checks something the speaker believes; よ tells, and 来《き》ました is past.`]
    ] }
);
