/* Lessons part 37 (0.24.0): N5, unit "Picture lessons: clothes, town and signs" (after review-n5-te): wearing-verbs, directions-map, reading-signs, review-n5-pictures2.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level:'N5'|'N4', unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus `after: '<lesson id>'` on EVERY lesson (the first lesson after review-n5-te, each next one after the lesson before it) and
   `review: true` on the unit review (quiz of exactly 12; others 5 to 7). Examples: <div class="ex"><b>JA</b><span>EN</span></div>.
   A picture in the body: <div class="pic-embed" data-pic="<picture set id>"></div> (the app mounts the tap-to-learn picture).
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  /* ============ Unit: Picture lessons: clothes, town and signs ============ */
  { id: 'wearing-verbs', level: 'N5', unit: 'Picture lessons: clothes, town and signs', after: 'review-n5-te', title: `Colours and clothes: 赤《あか》い, 緑《みどり》 の, 着《き》て います, 履《は》いて います`, summary: `Name colours, and say what someone is wearing with the right verb for each part of the body.`, draft: true,
    body: `<p>Clothes come up more often in a clinic than you might expect. You tell a patient what to take off before an examination, you look for a family member in a busy waiting room ("she is wearing a red coat"), and the appearance part of a mental state examination notes what the patient is wearing. Japanese does this with colour words and a small set of "wearing" verbs, each used with 〜て います, which you know from <a href="#/lessons/te-imasu">〜て います</a>.</p>
<div class="pic-embed" data-pic="clothes"></div>
<p>Look at the picture and tap the clothes to hear their names. Then read on for the verbs that go with them.</p>
<h3>Colours: two kinds of word</h3>
<p>Six colour words have an い-adjective form, so they go straight before a noun and take です like 高《たか》い. They also have a noun form without い, used when you talk about the colour itself. Other colours are nouns only: before another noun they need <b>の</b>.</p>
<table><tr><th>Colour</th><th>い-adjective</th><th>Noun</th><th>Before a noun</th></tr>
<tr><td>red</td><td>赤《あか》い</td><td>赤《あか》</td><td>赤《あか》い シャツ</td></tr>
<tr><td>blue</td><td>青《あお》い</td><td>青《あお》</td><td>青《あお》い 傘《かさ》</td></tr>
<tr><td>white</td><td>白《しろ》い</td><td>白《しろ》</td><td>白《しろ》い 靴下《くつした》</td></tr>
<tr><td>black</td><td>黒《くろ》い</td><td>黒《くろ》</td><td>黒《くろ》い 靴《くつ》</td></tr>
<tr><td>yellow</td><td>黄色《きいろ》い</td><td>黄色《きいろ》</td><td>黄色《きいろ》い 帽子《ぼうし》</td></tr>
<tr><td>brown</td><td>茶色《ちゃいろ》い</td><td>茶色《ちゃいろ》</td><td>茶色《ちゃいろ》い かばん</td></tr>
<tr><td>green</td><td>none</td><td>緑《みどり》</td><td>緑《みどり》 の セーター</td></tr>
<tr><td>pink, grey, orange</td><td>none</td><td>ピンク, グレー, オレンジ</td><td>ピンク の スカート</td></tr></table>
<p>To ask the colour, use 何色《なにいろ》 "what colour".</p>
<div class="ex"><b>好《す》き な 色《いろ》 は 青《あお》 です。</b><span>My favourite colour is blue.</span></div>
<div class="ex"><b>私《わたし》 の かばん は 黒《くろ》い です。 姉《あね》 の かばん は 緑《みどり》 です。</b><span>My bag is black. My older sister's bag is green.</span></div>
<div class="ex"><b>ご家族《かぞく》 の 方《かた》 は 何色《なにいろ》 の コート を 着《き》て います か。</b><span>What colour coat is your family member wearing?</span></div>
<h3>One verb for each part of the body</h3>
<p>English uses "wear" for everything. Japanese chooses the verb by <b>where</b> the thing goes on the body.</p>
<table><tr><th>Verb</th><th>Group</th><th>て-form</th><th>Used for</th></tr>
<tr><td>着《き》る</td><td>2</td><td>着《き》て</td><td>the upper body or the whole body: シャツ, セーター, コート, 上着《うわぎ》 (jacket), パジャマ, 着物《きもの》</td></tr>
<tr><td>履《は》く</td><td>1</td><td>履《は》いて</td><td>from the waist down, feet included: ズボン, スカート, 靴《くつ》, 靴下《くつした》 (also often written in kana, はく)</td></tr>
<tr><td>かぶる</td><td>1</td><td>かぶって</td><td>on the head: 帽子《ぼうし》</td></tr>
<tr><td>かける</td><td>2</td><td>かけて</td><td>glasses: 眼鏡《めがね》</td></tr>
<tr><td>する</td><td>3</td><td>して</td><td>small things you put on: ネクタイ, ベルト, 時計《とけい》 (watch), マフラー, マスク, 指輪《ゆびわ》 (ring)</td></tr></table>
<p>The thing worn is marked with を. 着《き》て "wearing" sounds the same as 来《き》て "coming"; the kanji and the context tell you which.</p>
<h3>〜て います: "is wearing"</h3>
<p>着《き》ます by itself is the action "put on". To describe what someone has on now, use the state meaning of 〜て います. Past state is 〜て いました.</p>
<div class="ex"><b>弟《おとうと》 は 白《しろ》い シャツ を 着《き》て、 黒《くろ》い ズボン を 履《は》いて います。</b><span>My younger brother is wearing a white shirt and black trousers.</span></div>
<div class="ex"><b>父《ちち》 は いつも 帽子《ぼうし》 を かぶって います。</b><span>My father always wears a hat.</span></div>
<div class="ex"><b>寒《さむ》い です から、 セーター を 着《き》ます。</b><span>It is cold, so I will put on a sweater.</span></div>
<div class="ex"><b>昨日《きのう》 は 茶色《ちゃいろ》い 靴《くつ》 を 履《は》いて いました。</b><span>Yesterday I was wearing brown shoes.</span></div>
<h3>Taking things off</h3>
<p>For clothes, shoes and a hat the opposite is 脱《ぬ》ぐ (group 1, 脱《ぬ》いで); for a hat you will also hear 取《と》る. For things that are hooked or fastened on, such as glasses, a mask, a watch, a belt or a ring, say 外《はず》す (group 1, 外《はず》して) "take off, remove". Avoid 眼鏡《めがね》 を 取《と》って ください: it usually means "please pass me the glasses".</p>
<h3>In the clinic</h3>
<div class="ex"><b>上着《うわぎ》 を 脱《ぬ》いで ください。</b><span>Please take off your jacket.</span></div>
<div class="ex"><b>靴《くつ》 を 脱《ぬ》いで、 ベッド に 横《よこ》 に なって ください。</b><span>Please take off your shoes and lie down on the bed.</span></div>
<div class="ex"><b>検査《けんさ》 の 前《まえ》 に 眼鏡《めがね》 と マスク を 外《はず》して ください。</b><span>Please take off your glasses and mask before the test.</span></div>
<div class="ex"><b>病棟《びょうとう》 で は マスク を して ください。</b><span>Please wear a mask on the ward.</span></div>
<div class="ex"><b>患者《かんじゃ》さん は 青《あお》い パジャマ を 着《き》て、 白《しろ》い 靴下《くつした》 を 履《は》いて います。</b><span>The patient is wearing blue pyjamas and white socks.</span></div>
<div class="note"><b>Watch out.</b> Shoes, socks and trousers are never 着《き》る: they are 履《は》く. A hat is かぶる and glasses are かける. And keep the difference between 着《き》ます (puts on) and 着《き》て います (is wearing). Colours: 赤《あか》い シャツ, but 緑《みどり》 の シャツ (never 緑《みどり》い).</div>`,
    quiz: [
      [`靴下《くつした》 を ＿ います。`, [`着《き》て`, `履《は》いて`, `かぶって`], 1, `Socks go on the feet, so the verb is 履《は》く.`],
      [`帽子《ぼうし》 を ＿ います。`, [`かぶって`, `かけて`, `履《は》いて`], 0, `Things on the head take かぶる.`],
      [`Which means "a green bag"?`, [`緑《みどり》い かばん`, `緑《みどり》 な かばん`, `緑《みどり》 の かばん`], 2, `緑《みどり》 is a noun only, so it joins the next noun with の.`],
      [`What does 何色《なにいろ》 ask?`, [`How many clothes?`, `What colour?`, `Which part of the body?`], 1, `何色《なにいろ》 means "what colour".`],
      [`田中《たなか》さん は 眼鏡《めがね》 を かけて います。`, [`Tanaka-san is wearing glasses.`, `Tanaka-san is buying glasses.`, `Tanaka-san has taken off his glasses.`], 0, `かけて います is the state "is wearing (glasses)".`],
      [`How do you say "Please take off your shoes"?`, [`靴《くつ》 を 履《は》いて ください。`, `靴《くつ》 を 着《き》て ください。`, `靴《くつ》 を 脱《ぬ》いで ください。`], 2, `脱《ぬ》ぐ is "take off" for clothes and shoes; 履《は》く would mean "put them on".`]
    ] },

  { id: 'directions-map', level: 'N5', unit: 'Picture lessons: clothes, town and signs', after: 'wearing-verbs', title: `Directions: まっすぐ 行《い》って、 右《みぎ》 に 曲《ま》がって ください`, summary: `Ask the way and give simple directions in the street and inside a hospital, with turns, ordinals and landmarks.`, draft: true,
    body: `<p>"Excuse me, where is the pharmacy?" is one of the questions you will hear most in a hospital corridor, and you will ask the way to the station yourself. Directions in Japanese are a chain of て-forms ending in ください, which you know from <a href="#/lessons/te-kudasai">〜て ください</a> and <a href="#/lessons/linking">linking with て</a>, plus a handful of street words and the position words from <a href="#/lessons/position-words">position words</a>.</p>
<div class="pic-embed" data-pic="street"></div>
<h3>The words you need</h3>
<table><tr><th>Japanese</th><th>Meaning</th><th>How it is used</th></tr>
<tr><td>まっすぐ</td><td>straight on</td><td>まっすぐ 行《い》って ください</td></tr>
<tr><td>右《みぎ》, 左《ひだり》</td><td>right, left</td><td>右《みぎ》 に 曲《ま》がります</td></tr>
<tr><td>曲《ま》がる (group 1)</td><td>turn</td><td>角《かど》 を 曲《ま》がって</td></tr>
<tr><td>渡《わた》る (group 1)</td><td>cross</td><td>道《みち》 を 渡《わた》って, 橋《はし》 を 渡《わた》って</td></tr>
<tr><td>角《かど》</td><td>corner</td><td>二《ふた》つ目《め》 の 角《かど》</td></tr>
<tr><td>信号《しんごう》</td><td>traffic light</td><td>信号《しんごう》 を 右《みぎ》 に</td></tr>
<tr><td>突《つ》き当《あ》たり</td><td>the end of a road or corridor</td><td>廊下《ろうか》 の 突《つ》き当《あ》たり</td></tr>
<tr><td>〜階《かい》</td><td>floor</td><td>一階《いっかい》, 二階《にかい》, 三階《さんがい》</td></tr></table>
<p>Two particles do the work. The place where you turn or which you cross takes <b>を</b> (角《かど》 を, 道《みち》 を). The direction you turn to takes <b>に</b> (右《みぎ》 に). So: 角《かど》 を 右《みぎ》 に 曲《ま》がる "turn right at the corner". You will also hear 角《かど》 で 右《みぎ》 に, but use を yourself.</p>
<h3>Chaining the steps with て</h3>
<p>Put each step in the て-form and end with ください only once, on the last verb.</p>
<div class="ex"><b>まっすぐ 行《い》って、 二《ふた》つ目《め》 の 角《かど》 を 右《みぎ》 に 曲《ま》がって ください。</b><span>Go straight on and turn right at the second corner.</span></div>
<div class="ex"><b>この 道《みち》 を 渡《わた》って、 左《ひだり》 に 曲《ま》がって ください。</b><span>Cross this road and turn left.</span></div>
<div class="ex"><b>信号《しんごう》 を 左《ひだり》 に 曲《ま》がって、 橋《はし》 を 渡《わた》って ください。</b><span>Turn left at the traffic light and cross the bridge.</span></div>
<h3>First, second, third: 〜つ目《め》</h3>
<p>Add 目《め》 to the native counter 一《ひと》つ, 二《ふた》つ, 三《みっ》つ to make an ordinal: 一《ひと》つ目《め》 "the first", 二《ふた》つ目《め》 "the second", 三《みっ》つ目《め》 "the third", 四《よっ》つ目《め》 "the fourth". Join it to the landmark with の.</p>
<div class="ex"><b>三《みっ》つ目《め》 の 信号《しんごう》 を 右《みぎ》 に 曲《ま》がって ください。</b><span>Turn right at the third traffic light.</span></div>
<h3>Where it is: 隣《となり》, 向《む》かい, 手前《てまえ》</h3>
<p>The last step is usually a landmark: A は B の 〜 に あります, or more briefly A は B の 〜 です.</p>
<table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>〜の 隣《となり》</td><td>next to</td></tr>
<tr><td>〜の 向《む》かい</td><td>opposite, across from</td></tr>
<tr><td>〜の 手前《てまえ》</td><td>just before you reach it, on this side of it</td></tr>
<tr><td>〜の 前《まえ》</td><td>in front of</td></tr>
<tr><td>右側《みぎがわ》, 左側《ひだりがわ》</td><td>on the right-hand side, on the left-hand side</td></tr></table>
<div class="ex"><b>薬局《やっきょく》 は 病院《びょういん》 の 向《む》かい に あります。</b><span>The pharmacy is across from the hospital.</span></div>
<div class="ex"><b>銀行《ぎんこう》 の 手前《てまえ》 に コンビニ が あります。</b><span>There is a convenience store just before the bank.</span></div>
<h3>Asking the way</h3>
<div class="ex"><b>すみません、 駅《えき》 は どこ です か。</b><span>Excuse me, where is the station?</span></div>
<div class="ex"><b>ここ から 歩《ある》いて 何分《なんぷん》 ぐらい です か。</b><span>About how many minutes is it from here on foot?</span></div>
<h3>Inside the hospital</h3>
<div class="pic-embed" data-pic="hospital-floor"></div>
<div class="ex"><b>会計《かいけい》 は 一階《いっかい》 の 受付《うけつけ》 の 隣《となり》 です。</b><span>The cashier is on the ground floor, next to reception.</span></div>
<div class="ex"><b>診察室《しんさつしつ》 は この 廊下《ろうか》 の 突《つ》き当《あ》たり です。</b><span>The consulting room is at the end of this corridor.</span></div>
<div class="ex"><b>エレベーター で 三階《さんがい》 に 行《い》って ください。 病棟《びょうとう》 は エレベーター の 向《む》かい です。</b><span>Please take the lift to the third floor. The ward is opposite the lift.</span></div>
<div class="ex"><b>トイレ は 待合室《まちあいしつ》 の 手前《てまえ》 に あります。</b><span>The toilets are just before the waiting room.</span></div>
<div class="ex"><b>少《すこ》し 遠《とお》い です ね。 一緒《いっしょ》 に 行《い》きましょう。</b><span>It is a little far, isn't it. Let's go together.</span></div>
<div class="note"><b>Watch out.</b> The corner takes を and the direction takes に: 角《かど》 を 右《みぎ》 に 曲《ま》がって, not 右《みぎ》 を. Only the last verb gets ください; the steps before it are plain て-forms. 前《まえ》 is "in front of"; 手前《てまえ》 is "before you get there". Floors in Japan are counted from the ground: 一階《いっかい》 is the ground floor.</div>`,
    quiz: [
      [`二《ふた》つ目《め》 の 角《かど》 ＿ 右《みぎ》 に 曲《ま》がって ください。`, [`を`, `が`, `と`], 0, `The corner where you turn is marked with を.`],
      [`What is 三《みっ》つ目《め》 の 信号《しんごう》?`, [`three traffic lights`, `the third traffic light`, `the traffic light for three minutes`], 1, `〜つ目《め》 makes an ordinal: the third one.`],
      [`Which means "Go straight on and cross the bridge"?`, [`まっすぐ 行《い》って、 橋《はし》 が 渡《わた》って ください。`, `まっすぐ 行《い》きます ください、 橋《はし》 を 渡《わた》って。`, `まっすぐ 行《い》って、 橋《はし》 を 渡《わた》って ください。`], 2, `The steps are て-forms, the bridge you cross takes を, and ください comes once at the end.`],
      [`薬局《やっきょく》 は 銀行《ぎんこう》 の 手前《てまえ》 です。`, [`The pharmacy is just before the bank.`, `The pharmacy is behind the bank.`, `The pharmacy is inside the bank.`], 0, `手前《てまえ》 is the side you reach first.`],
      [`A patient asks: トイレ は どこ です か。 Which answer is natural?`, [`トイレ を まっすぐ 曲《ま》がって ください。`, `あそこ の エレベーター の 隣《となり》 です。`, `トイレ は 右《みぎ》 を あります。`], 1, `It names a landmark with の 隣《となり》 and ends in です; the others are ungrammatical.`],
      [`会計《かいけい》 は 受付《うけつけ》 の ＿ です。 "The cashier is opposite reception."`, [`隣《となり》`, `手前《てまえ》`, `向《む》かい`], 2, `向《む》かい means opposite; 隣《となり》 is next to.`]
    ] },

  { id: 'reading-signs', level: 'N5', unit: 'Picture lessons: clothes, town and signs', after: 'directions-map', title: `Reading signs: 〜禁止《きんし》, 〜中《ちゅう》, 〜口《ぐち》, 〜室《しつ》, ご〜 ください`, summary: `Read the short noun-style Japanese of signs by spotting a few common endings and the polite request forms お〜 ください and ご〜 ください.`, draft: true,
    body: `<p>Signs in a hospital, a station or a shop are not written like the sentences you have learned. They leave out particles and です, stack nouns together and use many kanji above N5. You do not need to write this style, only to recognise it, and a few endings carry most of the meaning. Every word here has its reading; learn the meanings and the patterns, not every kanji. Then practise on real-looking boards in <a href="#/signs">Signs and buttons</a>.</p>
<h3>Noun style: no です, no particles</h3>
<p>A sign is usually just the noun. ここ は 受付《うけつけ》 です "this is reception" becomes 受付《うけつけ》. Two ideas are joined with no particle in between: 駐車《ちゅうしゃ》 (parking) + 禁止《きんし》 (prohibited) = 駐車《ちゅうしゃ》 禁止《きんし》 "no parking" (the sign itself has no space; this app puts one between the blocks so you can see them). To read a long sign, split it into blocks (usually two kanji, sometimes three) and read the last block first: it tells you what kind of sign it is.</p>
<table><tr><th>Block</th><th>関係者《かんけいしゃ》</th><th>以外《いがい》</th><th>立入《たちいり》</th><th>禁止《きんし》</th></tr>
<tr><td>Meaning</td><td>people concerned (staff)</td><td>other than</td><td>entering</td><td>prohibited</td></tr></table>
<div class="ex"><b>関係者《かんけいしゃ》 以外《いがい》 立入《たちいり》 禁止《きんし》</b><span>Staff only. (No entry except for authorised people.)</span></div>
<h3>The common endings</h3>
<table><tr><th>Ending</th><th>Meaning</th><th>Signs</th></tr>
<tr><td>〜禁止《きんし》</td><td>not allowed</td><td>駐車《ちゅうしゃ》 禁止《きんし》 no parking, 立入《たちいり》 禁止《きんし》 keep out, 撮影《さつえい》 禁止《きんし》 no photography (and 禁煙《きんえん》 no smoking)</td></tr>
<tr><td>〜中《ちゅう》</td><td>going on now</td><td>工事中《こうじちゅう》 under construction, 使用中《しようちゅう》 occupied, 営業中《えいぎょうちゅう》 open, 準備中《じゅんびちゅう》 not open yet, 故障中《こしょうちゅう》 out of order, 診察中《しんさつちゅう》 the doctor is with a patient</td></tr>
<tr><td>〜口《ぐち》</td><td>way in or out</td><td>入口《いりぐち》 entrance, 出口《でぐち》 exit, 非常口《ひじょうぐち》 emergency exit, 東口《ひがしぐち》 east exit</td></tr>
<tr><td>〜室《しつ》</td><td>room</td><td>診察室《しんさつしつ》 consulting room, 待合室《まちあいしつ》 waiting room, 検査室《けんさしつ》 test room, 面談室《めんだんしつ》 a private room for talks with patients and families</td></tr>
<tr><td>〜所《しょ》</td><td>place, office (often read じょ)</td><td>案内所《あんないじょ》 information desk, 喫煙所《きつえんじょ》 smoking area, 事務所《じむしょ》 office</td></tr>
<tr><td>〜場《ば》</td><td>place for doing something (also read じょう)</td><td>乗《の》り場《ば》 boarding point, 売《う》り場《ば》 sales counter, 駐車場《ちゅうしゃじょう》 car park</td></tr></table>
<p>The readings of 所《しょ》 and 場《ば》 change from word to word, so learn each word as a whole. 中《ちゅう》 on a sign is "in the middle of doing", not "inside".</p>
<div class="ex"><b>トイレ は 今《いま》 使用中《しようちゅう》 です。</b><span>The toilet is occupied at the moment.</span></div>
<div class="ex"><b>エレベーター が 故障中《こしょうちゅう》 です から、 階段《かいだん》 を 使《つか》って ください。</b><span>The lift is out of order, so please use the stairs.</span></div>
<div class="ex"><b>すみません、 ここ は 禁煙《きんえん》 です。</b><span>I'm sorry, this is a no-smoking area.</span></div>
<h3>Polite requests: お〜 ください, ご〜 ください</h3>
<p>Signs and staff announcements make requests in a more formal way than 〜て ください. Native Japanese verbs: お + the ます-stem + ください. する-nouns of Chinese origin: ご + the noun + ください. The meaning is the same as 〜て ください; you only need to understand it.</p>
<table><tr><th>Sign form</th><th>Same as</th><th>Meaning</th></tr>
<tr><td>お待《ま》ち ください</td><td>待《ま》って ください</td><td>please wait</td></tr>
<tr><td>お入《はい》り ください</td><td>入《はい》って ください</td><td>please come in</td></tr>
<tr><td>お取《と》り ください</td><td>取《と》って ください</td><td>please take one</td></tr>
<tr><td>ご注意《ちゅうい》 ください</td><td>注意《ちゅうい》して ください</td><td>please be careful</td></tr>
<tr><td>ご利用《りよう》 ください</td><td>利用《りよう》して ください</td><td>please use</td></tr>
<tr><td>ご遠慮《えんりょ》 ください</td><td>(no simple N5 form)</td><td>please refrain, that is, please do not</td></tr></table>
<div class="ex"><b>こちら で お待《ま》ち ください。</b><span>Please wait here.</span></div>
<div class="ex"><b>足元《あしもと》 に ご注意《ちゅうい》 ください。</b><span>Please mind your step.</span></div>
<div class="ex"><b>院内《いんない》 で の 携帯電話《けいたいでんわ》 の ご使用《しよう》 は ご遠慮《えんりょ》 ください。</b><span>Please do not use mobile phones in the hospital.</span></div>
<h3>Other things you will see</h3>
<p>Doors show a verb in the dictionary form: 押《お》す "push", 引《ひ》く "pull". Road signs say 止《と》まれ "stop" (learn it as one word). Toilets show 男《おとこ》 and 女《おんな》, or お手洗《てあら》い.</p>
<h3>On the ward</h3>
<div class="ex"><b>面会《めんかい》 時間《じかん》</b><span>Visiting hours.</span></div>
<div class="ex"><b>手指《しゅし》 消毒《しょうどく》 に ご協力《きょうりょく》 ください。</b><span>Please clean your hands with the sanitizer. (Word for word: please cooperate with hand disinfection.)</span></div>
<div class="ex"><b>マスク 着用《ちゃくよう》</b><span>Please wear a mask. (着《ちゃく》 is the 着《き》 of 着《き》る "wear".)</span></div>
<div class="ex"><b>先生《せんせい》 は 今《いま》 診察中《しんさつちゅう》 です から、 待合室《まちあいしつ》 で お待《ま》ち ください。</b><span>The doctor is with a patient now, so please wait in the waiting room.</span></div>
<div class="note"><b>Watch out.</b> 使用中《しようちゅう》 means "occupied", not "you may use it". 準備中《じゅんびちゅう》 on a shop means "closed for now". ご遠慮《えんりょ》 ください is a polite "please do not". 入口《いりぐち》 is read いりぐち, and 口《くち》 becomes ぐち after another word. Read the last block of a long sign first.</div>`,
    quiz: [
      [`A toilet door shows 使用中《しようちゅう》. What does it mean?`, [`Occupied: someone is inside.`, `Free: please use it.`, `Out of order.`], 0, `〜中《ちゅう》 means going on now: it is being used.`],
      [`What does 立入《たちいり》 禁止《きんし》 mean?`, [`Please come in.`, `Keep out.`, `Entrance.`], 1, `〜禁止《きんし》 means not allowed; 立入《たちいり》 is entering.`],
      [`Where can you smoke?`, [`禁煙《きんえん》`, `非常口《ひじょうぐち》`, `喫煙所《きつえんじょ》`], 2, `喫煙所《きつえんじょ》 is a smoking area; 禁煙《きんえん》 means no smoking.`],
      [`携帯電話《けいたいでんわ》 の ご使用《しよう》 は ご遠慮《えんりょ》 ください。`, [`Please do not use mobile phones.`, `Please use your mobile phone here.`, `Mobile phones are sold here.`], 0, `ご遠慮《えんりょ》 ください is a polite way of saying "please do not".`],
      [`A restaurant door says 準備中《じゅんびちゅう》. What does it tell you?`, [`It is open now.`, `It is not open yet: they are getting ready.`, `It has closed down for good.`], 1, `準備中《じゅんびちゅう》 means preparation is going on, so it is not open at the moment.`],
      [`Which sign is a room?`, [`改札口《かいさつぐち》`, `工事中《こうじちゅう》`, `待合室《まちあいしつ》`], 2, `〜室《しつ》 means room: 待合室《まちあいしつ》 is the waiting room.`]
    ] },

  { id: 'review-n5-pictures2', level: 'N5', unit: 'Picture lessons: clothes, town and signs', after: 'reading-signs', review: true, title: `Review: Picture lessons: clothes, town and signs`, summary: `Gather and test colours and wearing verbs, giving directions, and reading signs.`, draft: true,
    body: `<p>This review gathers the three lessons of the unit. Read the table, check the "Watch out" list, then try the quiz. For more practice with signs, go to <a href="#/signs">Signs and buttons</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model</th></tr>
<tr><td>赤《あか》い, 白《しろ》い, 黒《くろ》い … / 緑《みどり》 の</td><td>colour before a noun</td><td>黒《くろ》い 靴《くつ》, 緑《みどり》 の セーター</td></tr>
<tr><td>着《き》て います</td><td>wearing on the body</td><td>コート を 着《き》て います。</td></tr>
<tr><td>履《は》いて います</td><td>wearing below the waist</td><td>靴下《くつした》 を 履《は》いて います。</td></tr>
<tr><td>かぶって / かけて / して います</td><td>hat / glasses / small items</td><td>マスク を して います。</td></tr>
<tr><td>脱《ぬ》いで / 外《はず》して ください</td><td>take off (clothes, shoes, hat / glasses, mask, watch)</td><td>靴《くつ》 を 脱《ぬ》いで ください。</td></tr>
<tr><td>〜て、 〜て ください</td><td>steps of directions</td><td>まっすぐ 行《い》って、 右《みぎ》 に 曲《ま》がって ください。</td></tr>
<tr><td>角《かど》 を 右《みぎ》 に</td><td>turn right at the corner</td><td>角《かど》 を 左《ひだり》 に 曲《ま》がって ください。</td></tr>
<tr><td>〜つ目《め》 の</td><td>first, second, third</td><td>二《ふた》つ目《め》 の 信号《しんごう》</td></tr>
<tr><td>の 隣《となり》 / 向《む》かい / 手前《てまえ》</td><td>next to / opposite / just before</td><td>薬局《やっきょく》 は 病院《びょういん》 の 向《む》かい です。</td></tr>
<tr><td>〜禁止《きんし》, 〜中《ちゅう》, 〜口《ぐち》, 〜室《しつ》, 〜所《じょ》</td><td>sign endings</td><td>駐車《ちゅうしゃ》 禁止《きんし》, 使用中《しようちゅう》, 出口《でぐち》</td></tr>
<tr><td>お〜 ください, ご〜 ください</td><td>polite request on signs</td><td>お待《ま》ち ください, ご注意《ちゅうい》 ください</td></tr></table>
<h3>Watch out</h3>
<ul><li>Shoes, socks, trousers and skirts take 履《は》く, not 着《き》る.</li>
<li>着《き》ます is "put on"; 着《き》て います is "is wearing".</li>
<li>緑《みどり》 and ピンク are nouns: 緑《みどり》 の シャツ, never 緑《みどり》い.</li>
<li>角《かど》 を 右《みぎ》 に 曲《ま》がる: を for the corner, に for the direction.</li>
<li>One ください at the end of a chain of directions.</li>
<li>使用中《しようちゅう》 is "occupied"; 準備中《じゅんびちゅう》 is "not open yet"; ご遠慮《えんりょ》 ください is "please do not".</li></ul>
<h3>Patterns together</h3>
<div class="ex"><b>母《はは》 は 赤《あか》い コート を 着《き》て、 黒《くろ》い 靴《くつ》 を 履《は》いて います。</b><span>My mother is wearing a red coat and black shoes.</span></div>
<div class="ex"><b>父《ちち》 は 眼鏡《めがね》 を かけて、 茶色《ちゃいろ》い 帽子《ぼうし》 を かぶって います。</b><span>My father is wearing glasses and a brown hat.</span></div>
<div class="ex"><b>靴《くつ》 を 脱《ぬ》いで、 お入《はい》り ください。</b><span>Please take off your shoes and come in.</span></div>
<div class="ex"><b>まっすぐ 行《い》って、 二《ふた》つ目《め》 の 角《かど》 を 左《ひだり》 に 曲《ま》がって ください。 薬局《やっきょく》 は 銀行《ぎんこう》 の 隣《となり》 です。</b><span>Go straight on and turn left at the second corner. The pharmacy is next to the bank.</span></div>
<div class="ex"><b>この トイレ は 使用中《しようちゅう》 です から、 二階《にかい》 の トイレ を 使《つか》って ください。</b><span>This toilet is occupied, so please use the one on the second floor.</span></div>
<div class="ex"><b>面会《めんかい》 時間《じかん》 は 午後《ごご》 二時《にじ》 から 七時《しちじ》 まで です。</b><span>Visiting hours are from two to seven in the afternoon.</span></div>`,
    quiz: [
      [`スカート を ＿ います。`, [`履《は》いて`, `着《き》て`, `かけて`], 0, `A skirt is worn below the waist, so 履《は》く.`],
      [`マスク を ＿ ください。`, [`かぶって`, `して`, `履《は》いて`], 1, `A mask, like a watch or a tie, takes する.`],
      [`Which means "a white shirt"?`, [`白《しろ》 な シャツ`, `白《しろ》い の シャツ`, `白《しろ》い シャツ`], 2, `白《しろ》い is an い-adjective and goes straight before the noun.`],
      [`How do you ask "What colour is the bag?"`, [`かばん は 何色《なにいろ》 です か。`, `かばん は 何《なん》 の 色《いろ》い です か。`, `何色《なにいろ》い かばん です か。`], 0, `何色《なにいろ》 is a noun meaning "what colour" and takes です.`],
      [`道《みち》 ＿ 渡《わた》って ください。`, [`に`, `を`, `で`], 1, `The road you cross is marked with を.`],
      [`Which means "Turn left at the first corner"?`, [`一《ひと》つ の 角《かど》 に 左《ひだり》 を 曲《ま》がって ください。`, `一番《いちばん》 角《かど》 を 左《ひだり》 曲《ま》がります ください。`, `一《ひと》つ目《め》 の 角《かど》 を 左《ひだり》 に 曲《ま》がって ください。`], 2, `一《ひと》つ目《め》 の is "the first"; the corner takes を and the direction に.`],
      [`病棟《びょうとう》 は エレベーター の 向《む》かい です。`, [`The ward is next to the lift.`, `The ward is opposite the lift.`, `The ward is behind the lift.`], 1, `向《む》かい means opposite, across from.`],
      [`郵便局《ゆうびんきょく》 の 手前《てまえ》 means:`, [`just before you reach the post office`, `inside the post office`, `far beyond the post office`], 0, `手前《てまえ》 is the side you come to first.`],
      [`What does the sign 非常口《ひじょうぐち》 mean?`, [`Entrance`, `Information desk`, `Emergency exit`], 2, `〜口《ぐち》 is a way in or out; 非常《ひじょう》 means emergency.`],
      [`A lift shows 故障中《こしょうちゅう》. What does it mean?`, [`It is being cleaned.`, `It is out of order.`, `It is in use.`], 1, `故障《こしょう》 is a breakdown; 〜中《ちゅう》 says it is the case now.`],
      [`足元《あしもと》 に ご注意《ちゅうい》 ください。`, [`Please mind your step.`, `Please take off your shoes.`, `Please wait by your feet.`], 0, `ご注意《ちゅうい》 ください is "please be careful", and 足元《あしもと》 is where you put your feet.`],
      [`Which tells a patient "The doctor is with a patient, so please wait in the waiting room"?`, [`先生《せんせい》 は 今《いま》 準備中《じゅんびちゅう》 です から、 診察室《しんさつしつ》 で 待合《まちあい》 ください。`, `先生《せんせい》 は 今《いま》 診察中《しんさつちゅう》 です から、 待合室《まちあいしつ》 を お待《ま》ち ください。`, `先生《せんせい》 は 今《いま》 診察中《しんさつちゅう》 です から、 待合室《まちあいしつ》 で お待《ま》ち ください。`], 2, `診察中《しんさつちゅう》 is "with a patient", and the place where you wait takes で.`]
    ] }
);
