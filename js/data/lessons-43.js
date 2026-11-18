/* Lessons part 43 (0.26.0): N2 unit reviews: review-n2-timing, review-n2-contrast, review-n2-appearance, review-n2-topic.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level, unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus: after: '<lesson id>' (the unit's last lesson; read by js/data/lessons-zz-order.js) and review: true
   (a unit review: title "Review: <unit>", level and unit of its unit, short recap body, quiz of exactly 12).
   Examples in the body: <div class="ex"><b>JA</b><span>EN</span></div>.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  { id: 'review-n2-timing', level: 'N2', unit: 'Timing and turning points', review: true, after: 'n2-wo-kikkake-ni', title: `Review: Timing and turning points`, summary: `Check how to say "no sooner … than" and "not until", place an event in time with 最中《さいちゅう》, 際《さい》 and 折《おり》, and give the trigger, span and route of a history.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-ka-to-omou-to">no sooner … than, not until</a>, <a href="#/lessons/n2-saichuu">in the middle of, on the occasion of</a> and <a href="#/lessons/n2-wo-kikkake-ni">triggered by, over, via</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜か と 思《おも》ったら</td><td>no sooner A than B; understand</td><td>寝《ね》た か と 思《おも》ったら、 もう 起《お》きて きた。</td></tr>
<tr><td>〜か 〜ない か の うち に</td><td>barely A when B; written, understand</td><td>座《すわ》る か 座《すわ》らない か の うち に 話《はな》し始《はじ》めた。</td></tr>
<tr><td>〜て はじめて</td><td>only after, only when; say</td><td>休《やす》んで はじめて、 疲《つか》れ に 気《き》づいた。</td></tr>
<tr><td>〜て から で ない と</td><td>not until; spoken, say</td><td>診察《しんさつ》 して から で ない と 何《なん》 とも 言《い》えません。</td></tr>
<tr><td>〜最中《さいちゅう》</td><td>right in the middle of an activity; say</td><td>会議《かいぎ》 の 最中《さいちゅう》 に 呼《よ》ばれた。</td></tr>
<tr><td>〜際《さい》 / 〜折《おり》</td><td>formal とき / its letter form; say 際《さい》</td><td>上京《じょうきょう》 の 折《おり》 に は、 ぜひ ご連絡《れんらく》 ください。</td></tr>
<tr><td>〜に 当《あ》たる</td><td>falls on, corresponds to; formal, say</td><td>退院《たいいん》 の 予定日《よていび》 は 祝日《しゅくじつ》 に 当《あ》たる。</td></tr>
<tr><td>〜を きっかけ に / 〜を 契機《けいき》 に</td><td>trigger; きっかけ say, 契機《けいき》 written</td><td>引《ひ》っ越《こ》し を きっかけ に 料理《りょうり》 を 始《はじ》めた。</td></tr>
<tr><td>〜に わたって / 〜に わたる</td><td>over a long span; formal, say</td><td>十年《じゅうねん》 に わたる 介護《かいご》 が 終《お》わった。</td></tr>
<tr><td>〜を 経《へ》て</td><td>via; written, say when presenting</td><td>一年《いちねん》 の 準備《じゅんび》 を 経《へ》て 店《みせ》 を 開《ひら》いた。</td></tr></table>
<h3>Watch out</h3>
<ul><li>か と 思《おも》ったら and か 〜ない か の うち に report what happened, never a plan or a request.</li>
<li>〜て から で ない と needs a negative ending; for "once A, I will B" say 〜たら.</li>
<li>最中《さいちゅう》 needs an activity in progress. 〜に 当《あ》たる (falls on) is not 〜に あたって (at the start of).</li>
<li>きっかけ and 契機《けいき》 need one event; に わたって needs a long span.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>弟《おとうと》 は 帰《かえ》った か と 思《おも》ったら、 食事《しょくじ》 の 最中《さいちゅう》 に また 出《で》かけた。</b><span>No sooner was my brother home than he went out again in the middle of dinner.</span></div>
<div class="ex"><b>転居《てんきょ》 を きっかけ に 眠《ねむ》れなく なり、 一年《いちねん》 近《ちか》く に わたって 続《つづ》いて います。</b><span>Since moving house I haven't slept well, for nearly a year now.</span></div>
<div class="ex"><b>夫《おっと》 の 退職《たいしょく》 を 契機《けいき》 に 抑《よく》うつ 状態《じょうたい》 と なり、 近医《きんい》 を 経《へ》て 当科《とうか》 紹介《しょうかい》 と なった。</b><span>(Presentation) She became depressed when her husband retired, and was referred to us via a local doctor.</span></div>
<div class="ex"><b>退院《たいいん》 の 際《さい》 の お薬《くすり》 は、 検査《けんさ》 の 結果《けっか》 を 見《み》て から で ない と 決《き》められません。</b><span>We can't decide your medicines for discharge until we have seen the test results.</span></div>
<div class="ex"><b>進学《しんがく》 を きっかけ に 家《いえ》 を 出《で》ました が、 一人暮《ひとりぐ》らし を して はじめて 親《おや》 の ありがたさ が わかりました。</b><span>I left home when I started university, and only once I lived alone did I appreciate my parents.</span></div>
<div class="note">In a history, give the trigger (きっかけ, 契機《けいき》), the span (に わたって) and the route (を 経《へ》て).</div>`,
    quiz: [
      [`"Right in the middle of the interview, the phone rang." 面接《めんせつ》 の ＿ に、 電話《でんわ》 が 鳴《な》った。`, [`契機《けいき》`, `最中《さいちゅう》`, `うち`], 1, `最中《さいちゅう》 is the busiest point of an activity, the moment it is interrupted; 契機《けいき》 is a turning point that starts a change, and うち needs a span (〜ない うち に).`],
      [`(Notice) 外出《がいしゅつ》 の ＿ は、 ナースステーション に お声《こえ》 を おかけ ください。`, [`最中《さいちゅう》`, `うち`, `際《さい》`], 2, `際《さい》 is the formal "when" of notices.`],
      [`Which sentence is natural?`, [`結果《けっか》 が 出《で》た か と 思《おも》ったら、 お電話《でんわ》 します。`, `結果《けっか》 が 出《で》る 最中《さいちゅう》 に、 お電話《でんわ》 します。`, `結果《けっか》 が 出《で》て から で ない と、 お薬《くすり》 は 変《か》えられません。`], 2, `〜て から で ない と takes a negative ending; か と 思《おも》ったら cannot introduce a plan, and 最中《さいちゅう》 needs an activity.`],
      [`ドア が 開《あ》く か 開《あ》かない か の うち に、 子供《こども》たち が 飛《と》び出《だ》した。 means:`, [`The children rushed out almost before the door had opened.`, `The children waited to see whether the door would open.`, `The children rushed out only after the door was fully open.`], 0, `〜か 〜ない か の うち に: B starts before A is even complete.`],
      [`病気《びょうき》 に なって ＿、 健康《けんこう》 の ありがたさ が わかった。`, [`いる 最中《さいちゅう》 に`, `はじめて`, `から で ない と`], 1, `〜て はじめて means "only after"; から で ない と needs a negative, and 最中《さいちゅう》 does not take a state.`],
      [`"It all started when I changed schools." 転校《てんこう》 ＿、 学校《がっこう》 に 行《い》けなく なりました。`, [`の 最中《さいちゅう》`, `に わたって`, `を きっかけ に`], 2, `A single event that started a change is 〜を きっかけ に.`],
      [`Which would you say to a patient, rather than write in a summary?`, [`何《なに》 が きっかけ で 眠《ねむ》れなく なりました か。`, `何《なに》 を 契機《けいき》 に 不眠《ふみん》 が 出現《しゅつげん》 しました か。`, `何《なに》 を 経《へ》て 不眠《ふみん》 に わたりました か。`], 0, `が きっかけ で is the spoken form; 契機《けいき》 and 出現《しゅつげん》 are written, and the third misuses 経《へ》る and わたる.`],
      [`二十年《にじゅうねん》 に わたる 研究《けんきゅう》 means:`, [`research done twenty years ago`, `research that went on for twenty years`, `research that will start in twenty years`], 1, `〜に わたる before a noun stresses a long span.`],
      [`来年《らいねん》 の 誕生日《たんじょうび》 は 土曜日《どようび》 ＿。`, [`に あたって`, `の 際《さい》 です`, `に 当《あ》たります`], 2, `A date falls on a day with 〜に 当《あ》たる; 〜に あたって means "at the start of".`],
      [`(Letter) "When I called on you last month, you were very kind to me." 先月《せんげつ》 伺《うかが》った ＿ は、 大変《たいへん》 お世話《せわ》 に なりました。`, [`折《おり》`, `最中《さいちゅう》`, `うち`], 0, `折《おり》 is the occasion word of letters; 最中《さいちゅう》 needs 〜て いる, and うち does not follow a past visit.`],
      [`(Presentation) "She was admitted after first being seen in the emergency department." 救急外来《きゅうきゅうがいらい》 ＿ 入院《にゅういん》 と なった。`, [`を きっかけ に`, `を 経《へ》て`, `の 最中《さいちゅう》`], 1, `〜を 経《へ》て gives the route that came before; きっかけ is a trigger.`],
      [`娘《むすめ》 は 笑《わら》って いた ＿、 急《きゅう》 に 泣《な》き出《だ》した。`, [`か と 思《おも》ったら`, `に わたって`, `から で ない と`], 0, `A, then at once the opposite B: 〜か と 思《おも》ったら.`]
    ] },

  { id: 'review-n2-contrast', level: 'N2', unit: 'Contrast and supposition', review: true, after: 'n2-to-shitara', title: `Review: Contrast and supposition`, summary: `Check how to say "contrary to", "the opposite of", "on the other hand", "despite" and "although", and how to reason from a supposition, from 〜と したら to 万一《まんいち》.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-ni-hanshite">contrary to, the opposite of</a>, <a href="#/lessons/n2-nimo-kakawarazu">despite, although</a> and <a href="#/lessons/n2-to-shitara">supposing, in the unlikely event</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜に 反《はん》して / 反《はん》する + noun</td><td>against an expectation or rule; formal, say</td><td>予想《よそう》 に 反《はん》して、 客《きゃく》 は 少《すく》なかった。</td></tr>
<tr><td>〜と は 逆《ぎゃく》 に / 逆《ぎゃく》 に</td><td>the opposite; on the contrary; say</td><td>姉《あね》 と は 逆《ぎゃく》 に、 妹《いもうと》 は 朝型《あさがた》 だ。</td></tr>
<tr><td>〜反面《はんめん》</td><td>two sides of one thing; say</td><td>この 仕事《しごと》 は 楽《たの》しい 反面《はんめん》、 責任《せきにん》 も 重《おも》い。</td></tr>
<tr><td>〜に も かかわらず</td><td>despite; formal, say</td><td>熱《ねつ》 が ある に も かかわらず 出勤《しゅっきん》 した。</td></tr>
<tr><td>〜ながら (も)</td><td>although; written, say 残念《ざんねん》 ながら</td><td>小《ちい》さい ながら も、 自分《じぶん》 の 店《みせ》 を 持《も》った。</td></tr>
<tr><td>〜と いって も</td><td>limits what you just said; spoken, say</td><td>英語《えいご》 が 話《はな》せる と いって も、 少《すこ》し だけ です。</td></tr>
<tr><td>〜と したら / と すれば / と する と</td><td>supposing; if so; say</td><td>明日《あした》 晴《は》れる と したら、 どこ に 行《い》きます か。</td></tr>
<tr><td>仮《かり》 に 〜と して も</td><td>even supposing; formal, say</td><td>仮《かり》 に 負《ま》けた と して も、 悔《く》い は ない。</td></tr>
<tr><td>万一《まんいち》 〜場合《ばあい》 は</td><td>unlikely bad event; notices, say</td><td>万一《まんいち》 停電《ていでん》 した 場合《ばあい》 は、 その 場《ば》 で お待《ま》ち ください。</td></tr></table>
<h3>Watch out</h3>
<ul><li>〜に 反《はん》して follows an expectation, wish or rule, never a person; for people use 〜と は 逆《ぎゃく》 に.</li>
<li>に も かかわらず is "despite" and never ends in a request; without も, に かかわらず is "regardless of".</li>
<li>〜と いって も limits your own statement; 〜から と いって rejects a conclusion and ends in a negative.</li>
<li>と したら leads to a consequence; と して も holds anyway. 万一《まんいち》 is for unwelcome events.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>予想《よそう》 に 反《はん》して 副作用《ふくさよう》 は 軽《かる》かった。 その 反面《はんめん》、 効果《こうか》 も 弱《よわ》かった。</b><span>Contrary to expectations the side effects were mild. On the other hand, the effect was weak too.</span></div>
<div class="ex"><b>毎日《まいにち》 飲《の》んで いる に も かかわらず 眠《ねむ》れない と すれば、 生活《せいかつ》 リズム を 見直《みなお》す 必要《ひつよう》 が あります。</b><span>If you can't sleep despite taking it every day, we need to look at your daily rhythm.</span></div>
<div class="ex"><b>夜中《よなか》 だ と して も、 万一《まんいち》 の とき は 遠慮《えんりょ》 なく ご連絡《れんらく》 ください。</b><span>Even if it is the middle of the night, in an emergency please don't hesitate to contact us.</span></div>
<div class="ex"><b>「お酒《さけ》 は やめた と いって も、 付《つ》き合《あ》い で 少《すこ》し 飲《の》みます。」 「だ と する と、 まったく 飲《の》まない わけ では ない ん です ね。」</b><span>"I say I've stopped, but I drink a little socially." "In that case, you do still drink a little."</span></div>
<div class="ex"><b>父《ちち》 と は 逆《ぎゃく》 に、 母《はは》 は 無口《むくち》 です。 と いって も、 よく 笑《わら》います。</b><span>Unlike my father, my mother is quiet. That said, she laughs a lot.</span></div>
<div class="note">Ask which way it runs: against an expectation, despite a fact, or two sides of one thing.</div>`,
    quiz: [
      [`"Contrary to our expectations, she recovered quickly." 私《わたし》たち の 予想《よそう》 ＿、 回復《かいふく》 は 早《はや》かった。`, [`に 反《はん》して`, `の 反面《はんめん》`, `と したら`], 0, `A result against an expectation is 予想《よそう》 に 反《はん》して; 反面《はんめん》 does not follow a noun with の, and と したら sets up a supposition.`],
      [`"The pay is good, but on the other hand it is very busy." 給料《きゅうりょう》 が いい ＿、 とても 忙《いそが》しい。`, [`から と いって`, `反面《はんめん》`, `に 反《はん》して`], 1, `Two sides of the same job: 反面《はんめん》. から と いって needs a negative ending, and に 反《はん》して follows a noun.`],
      [`In a case summary: "Despite outpatient treatment, her symptoms worsened."`, [`外来《がいらい》 治療《ちりょう》 に も かかわらず、 症状《しょうじょう》 は 悪化《あっか》 した。`, `外来《がいらい》 治療《ちりょう》 に かかわらず、 症状《しょうじょう》 は 悪化《あっか》 した。`, `外来《がいらい》 治療《ちりょう》 と いって も、 症状《しょうじょう》 は 悪化《あっか》 した。`], 0, `"Despite" needs も: に も かかわらず; に かかわらず is "regardless of".`],
      [`"Unfortunately, the doctor is away today."`, [`残念《ざんねん》 に も かかわらず、 本日《ほんじつ》 先生《せんせい》 は 不在《ふざい》 です。`, `残念《ざんねん》 と して も、 本日《ほんじつ》 先生《せんせい》 は 不在《ふざい》 です。`, `残念《ざんねん》 ながら、 本日《ほんじつ》 先生《せんせい》 は 不在《ふざい》 です。`], 2, `残念《ざんねん》 ながら is the set phrase for "unfortunately".`],
      [`"I do have a hobby, though it's only reading." 趣味《しゅみ》 は ある ＿、 本《ほん》 を 読《よ》む くらい です。`, [`から と いって`, `と いって も`, `と すれば`], 1, `〜と いって も limits what you have just said.`],
      [`"Just because you feel better, it doesn't mean you can stop treatment."`, [`よく なった から と いって、 治療《ちりょう》 を やめて いい わけ では ありません。`, `よく なった と いって も、 治療《ちりょう》 を やめて いい わけ です。`, `よく なった に 反《はん》して、 治療《ちりょう》 を やめて は いけません。`], 0, `〜から と いって rejects a conclusion and ends in a negative such as わけ では ありません.`],
      [`たとえ 家族《かぞく》 に 反対《はんたい》 された ＿、 自分《じぶん》 で 決《き》めたい。`, [`と したら`, `場合《ばあい》 は`, `と して も`], 2, `たとえ needs "even if": 〜と して も; と したら would lead to a consequence.`],
      [`(Consent form) "In the unlikely event that you feel unwell during the test, please tell the staff."`, [`検査中《けんさちゅう》 に 万一《まんいち》 気分《きぶん》 が 悪《わる》く なった 場合《ばあい》 は、 係《かかり》 の 者《もの》 に お知《し》らせ ください。`, `検査中《けんさちゅう》 に 気分《きぶん》 が 悪《わる》く なった に も かかわらず、 お知《し》らせ ください。`, `検査中《けんさちゅう》 に 気分《きぶん》 が 悪《わる》く なった 反面《はんめん》、 お知《し》らせ ください。`], 0, `万一《まんいち》 〜場合《ばあい》 は leads to an instruction; に も かかわらず and 反面《はんめん》 cannot end in a request.`],
      [`「夜勤《やきん》 が 始《はじ》まって から 眠《ねむ》れません。」 「＿、 生活《せいかつ》 の リズム が 乱《みだ》れて いる の かも しれません ね。」`, [`と いって も`, `逆《ぎゃく》 に`, `だ と する と`], 2, `だ と する と draws a conclusion from what was just said: "in that case".`],
      [`「お酒《さけ》 を 飲《の》む と よく 眠《ねむ》れます か。」 「いいえ、 逆《ぎゃく》 に 夜中《よなか》 に 目《め》 が 覚《さ》めます。」 Here 逆《ぎゃく》 に means:`, [`despite that`, `on the contrary, if anything`, `in the unlikely event`], 1, `逆《ぎゃく》 に on its own means the opposite of what was suggested.`],
      [`Which sentence uses 〜に 反《はん》して correctly?`, [`去年《きょねん》 に 反《はん》して、 今年《ことし》 は 雪《ゆき》 が 多《おお》い。`, `周囲《しゅうい》 の 期待《きたい》 に 反《はん》して、 彼《かれ》 は 大学《だいがく》 を やめた。`, `雨《あめ》 に 反《はん》して、 試合《しあい》 は 行《おこな》われた。`], 1, `に 反《はん》して needs an expectation, wish or rule; say 去年《きょねん》 と は 逆《ぎゃく》 に and 雨《あめ》 に も かかわらず.`],
      [`息子《むすこ》 は 子供《こども》 ＿、 よく 気《き》 が つきます。 (although only a child)`, [`反面《はんめん》`, `と したら`, `ながら`], 2, `Noun + ながら is the set "although": 子供《こども》 ながら.`]
    ] },

  { id: 'review-n2-appearance', level: 'N2', unit: 'Appearance and difficulty', review: true, after: 'n2-ka-no-you-ni', title: `Review: Appearance and difficulty`, summary: `Check how to describe how someone looks, what something is full of or suited to, how hard something is to do, and "as if", "evidently" and "I hear".`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-ge-darake">looking, full of, suited to</a>, <a href="#/lessons/n2-gatai">hard to, no way to</a> and <a href="#/lessons/n2-ka-no-you-ni">as if, evidently, I hear</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜げ</td><td>how others look; written</td><td>彼《かれ》 は 満足《まんぞく》げ に うなずいた。</td></tr>
<tr><td>〜だらけ</td><td>too much of something unwelcome; spoken</td><td>間違《まちが》いだらけ の 書類《しょるい》</td></tr>
<tr><td>〜っぽい</td><td>-ish, like X though not X; casual</td><td>最近《さいきん》 忘《わす》れっぽく なった。</td></tr>
<tr><td>〜向《む》き / 〜向《む》け</td><td>suits X / made for X; say</td><td>初心者向《しょしんしゃむ》け の 料理《りょうり》 教室《きょうしつ》</td></tr>
<tr><td>〜がたい</td><td>hard to accept or believe; written, say set ones</td><td>受《う》け入《い》れがたい 知《し》らせ だった。</td></tr>
<tr><td>〜づらい</td><td>hard for me to do; spoken, say</td><td>夜中《よなか》 に は 電話《でんわ》 しづらい。</td></tr>
<tr><td>〜よう が ない</td><td>no way to; say</td><td>鍵《かぎ》 が ない ので、 開《あ》けよう が ない。</td></tr>
<tr><td>〜か の よう だ</td><td>as if; written, say in presentations</td><td>彼《かれ》 は まるで 自分《じぶん》 の 家《いえ》 に いる か の よう に くつろいで いた。</td></tr>
<tr><td>〜と 見《み》えて</td><td>evidently (from what I see); written, understand</td><td>試験《しけん》 が うまく いった と 見《み》えて、 兄《あに》 は 機嫌《きげん》 が いい。</td></tr>
<tr><td>〜とか</td><td>loose hearsay; light spoken, understand</td><td>お隣《となり》 に 赤《あか》ちゃん が 生《う》まれた とか。</td></tr>
<tr><td>つまり 〜と いう こと です ね</td><td>sums up what someone said; say</td><td>つまり、 朝《あさ》 が 一番《いちばん》 つらい と いう こと です ね。</td></tr></table>
<h3>Watch out</h3>
<ul><li>To a patient say 不安《ふあん》そう です ね; 〜げ is for notes about others.</li>
<li>だらけ is for unwelcome things (pleasant: いっぱい). 子供《こども》らしい praises; 子供《こども》っぽい criticises.</li>
<li>がたい is for accepting or believing, never physical (持《も》ちにくい). よう が ない takes the ます-stem (書《か》きよう).</li>
<li>よう です is a real guess; か の よう is "as if".</li>
<li>Not とか in a handover: と いう こと です, with the source.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>退院《たいいん》 の 話《はなし》 に なる と 不安《ふあん》げ な 表情《ひょうじょう》 を 見《み》せ、 「説明《せつめい》 の しよう が ない」 と 話《はな》した。</b><span>(Chart note) When discharge came up she looked anxious, and said there was no way to explain it.</span></div>
<div class="ex"><b>少《すこ》し 聞《き》きづらい の です が、 考《かんが》え が 周《まわ》り に 伝《つた》わって いる か の よう な 感《かん》じ は あります か。</b><span>This is a little awkward to ask, but do you ever feel as if your thoughts are reaching the people around you?</span></div>
<div class="ex"><b>弟《おとうと》 は 傷《きず》だらけ だった が、 試合《しあい》 に 勝《か》った と 見《み》えて 得意《とくい》げ だった。</b><span>My brother was covered in scrapes, but he had evidently won: he looked pleased with himself.</span></div>
<div class="ex"><b>つまり、 ご家族《かぞく》 に は 言《い》いづらい けれど、 誰《だれ》 か に は 聞《き》いて ほしい と いう こと です ね。</b><span>So what you mean is that it's hard to tell your family, but you'd like someone to listen.</span></div>
<div class="ex"><b>鈴木《すずき》さん は 夜中《よなか》、 誰《だれ》 か と 話《はな》して いる か の よう に 独《ひと》り言《ごと》 を 言《い》って いた と いう こと です。</b><span>(Handover) I'm told Mr Suzuki was talking to himself in the night, as if speaking with someone.</span></div>
<div class="note">Say 〜そう, 〜づらい and と いう こと です ね; understand 〜げ, と 見《み》えて and とか.</div>`,
    quiz: [
      [`Nursing note: "He looked pleased with himself as he showed his drawing." 絵《え》 を 見《み》せる とき、 ＿ な 表情《ひょうじょう》 だった。`, [`得意《とくい》だらけ`, `得意《とくい》げ`, `得意《とくい》っぽい`], 1, `〜げ describes a feeling that shows on someone's face, in written style.`],
      [`A teacher praising a drawing as "just what a child's drawing should be" says:`, [`子供《こども》っぽい 絵《え》 です ね。`, `子供向《こどもむ》け の 絵《え》 です ね。`, `子供《こども》らしい 絵《え》 です ね。`], 2, `〜らしい praises a thing for being true to type; っぽい criticises, and 向《む》け means "made for children".`],
      [`この 散歩《さんぽ》 コース は 坂《さか》 が 少《すく》なくて、 高齢者《こうれいしゃ》 ＿ です。 (it happens to suit older people)`, [`げ`, `向《む》き`, `っぽい`], 1, `向《む》き says it suits a group; げ does not follow a noun, and 高齢者《こうれいしゃ》っぽい would mean "elderly-looking".`],
      [`"It's awkward for me to ask my boss for advice." 上司《じょうし》 に は ＿。`, [`相談《そうだん》 しかねない`, `相談《そうだん》 しづらい`, `相談《そうだん》 する か の よう だ`], 1, `づらい says it costs the speaker something; しかねない means "might well end up consulting", and か の よう is "as if".`],
      [`"There was no way to check." 確認《かくにん》 の ＿ が なかった。`, [`しよう`, `しづらい`, `しがたい`], 0, `With a する-noun: noun + の しよう が ない.`],
      [`受《う》け入《い》れがたい 結果《けっか》 means:`, [`a result that is very hard to accept`, `a result I am not in a position to accept`, `a result that is easy to accept`], 0, `がたい: hard to do by any reasonable standard; "not in a position to" would be かねる.`],
      [`"He acted as if he hadn't heard." 聞《き》こえなかった ＿ 振《ふ》る舞《ま》った。`, [`か の よう な`, `げ に`, `か の よう に`], 2, `Before a verb phrase, "as if" is か の よう に; よう な goes before a noun.`],
      [`To a colleague, giving your real guess: "The patient seems to have a fever."`, [`患者《かんじゃ》さん は 熱《ねつ》 が ある か の よう です。`, `患者《かんじゃ》さん は 熱《ねつ》 が ある よう です。`, `患者《かんじゃ》さん は 熱《ねつ》 が ありげ です。`], 1, `A real judgement is よう です; か の よう says it only looks so.`],
      [`Which sentence uses 〜と 見《み》えて correctly?`, [`隣《となり》 の 人《ひと》 は 急《いそ》いで いた と 見《み》えて、 走《はし》って 行《い》った。`, `私《わたし》 は 疲《つか》れて いた と 見《み》えて、 すぐ 寝《ね》た。`, `明日《あした》 は 雨《あめ》 と 見《み》えて、 傘《かさ》 を 持《も》って 行《い》こう。`], 0, `と 見《み》えて draws a conclusion about others from what you see; not about yourself, and not before a plan.`],
      [`Chatting with a colleague: "I hear the canteen is closed today, or something."`, [`本日《ほんじつ》 食堂《しょくどう》 は 休業《きゅうぎょう》 と 見《み》えて。`, `今日《きょう》 は 食堂《しょくどう》 が 休《やす》み か の よう です。`, `今日《きょう》 は 食堂《しょくどう》 が 休《やす》み だ とか。`], 2, `Sentence-final とか is light hearsay among colleagues.`],
      [`A patient says it is hard to talk to her mother. You check you have understood:`, [`つまり、 お母様《かあさま》 に は 話《はな》しづらい と いう こと です ね。`, `つまり、 お母様《かあさま》 に は 話《はな》しづらい とか。`, `つまり、 お母様《かあさま》 に は 話《はな》しがたい か の よう です ね。`], 0, `つまり 〜と いう こと です ね sums up what the patient said; とか is loose hearsay.`],
      [`"The wall was covered in graffiti."`, [`壁《かべ》 は 落書《らくが》きっぽかった。`, `壁《かべ》 は 落書《らくが》き向《む》け だった。`, `壁《かべ》 は 落書《らくが》きだらけ だった。`], 2, `Too much of something unwelcome: だらけ.`]
    ] },

  { id: 'review-n2-topic', level: 'N2', unit: 'Topic, dependence and addition', review: true, after: 'n2-ue-ni', title: `Review: Topic, dependence and addition`, summary: `Check how to pick up a topic, say what something depends on, explain how something came about, and add one fact to another, from 〜と いえば to 〜のみ か.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-to-ieba">speaking of, when it comes to</a>, <a href="#/lessons/n2-shidai-de">depending on, under</a> and <a href="#/lessons/n2-ue-ni">on top of, both … and</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜と いえば / どちら か と いえば</td><td>speaking of; on balance; say</td><td>北海道《ほっかいどう》 と いえば 雪《ゆき》 です ね。</td></tr>
<tr><td>〜に かけて は</td><td>praise for a skill; say</td><td>記憶力《きおくりょく》 に かけて は 父《ちち》 が 一番《いちばん》 だ。</td></tr>
<tr><td>〜に 関《かん》する + noun</td><td>concerning; formal</td><td>面会《めんかい》 時間《じかん》 に 関《かん》する お知《し》らせ</td></tr>
<tr><td>〜と なる と</td><td>once it comes to; say</td><td>いざ 引《ひ》っ越《こ》す と なる と 寂《さび》しい。</td></tr>
<tr><td>noun + 次第《しだい》 で / だ</td><td>depends on; say</td><td>合格《ごうかく》 は 努力《どりょく》 次第《しだい》 だ。</td></tr>
<tr><td>〜た 次第《しだい》 です</td><td>that is why; formal</td><td>確認《かくにん》 したい 点《てん》 が あり、 ご連絡《れんらく》 した 次第《しだい》 です。</td></tr>
<tr><td>〜に よって は</td><td>in some cases; say</td><td>所《ところ》 に よって は 雪《ゆき》 が 降《ふ》る でしょう。</td></tr>
<tr><td>〜の もと で</td><td>under; formal</td><td>コーチ の 指導《しどう》 の もと で 練習《れんしゅう》 した。</td></tr>
<tr><td>〜上《うえ》 に</td><td>on top of (same direction); say</td><td>広《ひろ》い 上《うえ》 に 日当《ひあ》たり も いい。</td></tr>
<tr><td>〜に 加《くわ》えて</td><td>in addition to; formal, say</td><td>筆記《ひっき》 試験《しけん》 に 加《くわ》えて 面接《めんせつ》 も ある。</td></tr>
<tr><td>〜も 〜ば 〜も</td><td>both … and; say</td><td>歌《うた》 も 歌《うた》えば、 ギター も 弾《ひ》く。</td></tr>
<tr><td>〜のみ か</td><td>not only (written); understand</td><td>国内《こくない》 のみ か、 海外《かいがい》 で も 知《し》られて いる。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Noun + 次第《しだい》 is "depends on"; ます-stem + 次第《しだい》 is "as soon as"; 次第《しだい》 に is "gradually".</li>
<li>の もと で is "under"; を もと に is "based on".</li>
<li>上《うえ》 に takes no request (use に 加《くわ》えて); た 上《うえ》 で is "after doing".</li>
<li>に かけて は is praise, not 〜から 〜に かけて. Before a noun use に 関《かん》する.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>外出《がいしゅつ》 は 体調《たいちょう》 次第《しだい》 です が、 いざ 外出《がいしゅつ》 と なる と 緊張《きんちょう》 する 方《かた》 も います。</b><span>Going out depends on how you feel, but some people get nervous once it actually comes to it.</span></div>
<div class="ex"><b>この お薬《くすり》 は 眠気《ねむけ》 が 出《で》やすい 上《うえ》 に、 人《ひと》 に よって は 口《くち》 が 渇《かわ》く こと も あります。</b><span>This medicine tends to cause drowsiness, and in some people a dry mouth too.</span></div>
<div class="ex"><b>「体《からだ》 が だるい 日《ひ》 も あれば、 元気《げんき》 な 日《ひ》 も あります。」 「元気《げんき》 な 日《ひ》 と いう と、 どんな 一日《いちにち》 でしょう か。」</b><span>"Some days I feel sluggish, some days fine." "What is a fine day like?"</span></div>
<div class="ex"><b>姉《あね》 は 字《じ》 が きれい な 上《うえ》 に、 絵《え》 に かけて は 誰《だれ》 に も 負《ま》けない。</b><span>My sister has beautiful handwriting, and when it comes to drawing, no one can beat her.</span></div>
<div class="ex"><b>主治医《しゅじい》 の 指導《しどう》 の もと で、 服薬《ふくやく》 に 加《くわ》えて 生活《せいかつ》 リズム の 改善《かいぜん》 に も 取《と》り組《く》んで いる。</b><span>(Presentation) Under her doctor's guidance, she is working on her daily rhythm besides medication.</span></div>
<div class="note">Look at what comes before 次第《しだい》, and at what comes after 上《うえ》 に.</div>`,
    quiz: [
      [`結果《けっか》 が わかり次第《しだい》、 お電話《でんわ》 します。 means:`, [`Depending on the results, I may call you.`, `I will call you as soon as I know the results.`, `I called you because of the results.`], 1, `ます-stem + 次第《しだい》 is "as soon as"; after a noun it would be "depends on".`],
      [`"Depending on how you feel, we may change the plan."`, [`体調《たいちょう》 次第《しだい》 で は、 予定《よてい》 を 変《か》える こと も あります。`, `体調《たいちょう》 の もと で、 予定《よてい》 を 変《か》える こと も あります。`, `体調《たいちょう》 に かけて は、 予定《よてい》 を 変《か》える こと も あります。`], 0, `Noun + 次第《しだい》 で は picks out a possible result; の もと で is "under" and に かけて は is praise.`],
      [`"Based on the survey results, the plan was revised." 調査《ちょうさ》 の 結果《けっか》 ＿、 計画《けいかく》 が 見直《みなお》された。`, [`の もと で`, `を もと に`, `次第《しだい》 で は`], 1, `"Based on" is を もと に; の もと で is "under".`],
      [`(Letter) 一言《ひとこと》 お礼《れい》 を 申《もう》し上《あ》げたく、 筆《ふで》 を 取《と》った 次第《しだい》 です。 means:`, [`It depends on whether I can thank you in writing.`, `As soon as I picked up my pen, I thanked you.`, `I wanted to thank you, and that is why I am writing.`], 2, `〜た 次第《しだい》 です formally explains how something came about.`],
      [`季節《きせつ》 ＿、 この 道《みち》 は 通《とお》れない こと が あります。 (in some seasons)`, [`に よって は`, `に かけて は`, `の もと で`], 0, `に よって は picks out some cases.`],
      [`Which sentence is natural?`, [`診察券《しんさつけん》 を 持《も》って くる 上《うえ》 に、 お薬手帳《くすりてちょう》 も お持《も》ち ください。`, `診察券《しんさつけん》 に 加《くわ》えて、 お薬手帳《くすりてちょう》 も お持《も》ち ください。`, `診察券《しんさつけん》 も 持《も》てば、 お薬手帳《くすりてちょう》 も お持《も》ち ください。`], 1, `に 加《くわ》えて can end in a request; 上《うえ》 に and 〜も 〜ば 〜も cannot.`],
      [`よく 相談《そうだん》 した ＿、 治療《ちりょう》 の 方針《ほうしん》 を 決《き》めましょう。`, [`上《うえ》 に`, `次第《しだい》 で`, `上《うえ》 で`], 2, `"After doing" is た 上《うえ》 で; 上《うえ》 に adds a fact and cannot lead to an invitation.`],
      [`"There are days when I can go out and days when I can't."`, [`外出《がいしゅつ》 できる 日《ひ》 も あれば、 できない 日《ひ》 も あります。`, `外出《がいしゅつ》 できる 日《ひ》 の 上《うえ》 に、 できない 日《ひ》 も あります。`, `外出《がいしゅつ》 できる 日《ひ》 に よって は、 できない 日《ひ》 も あります。`], 0, `〜も あれば 〜も ある: "some … and some …".`],
      [`A report says 睡眠《すいみん》 不足《ぶそく》 は 集中力《しゅうちゅうりょく》 を 下《さ》げる のみ か、 事故《じこ》 の 原因《げんいん》 に も なる. In speech you would say:`, [`下《さ》げる 次第《しだい》 で`, `下《さ》げる ばかり で なく`, `下《さ》げる と いえば`], 1, `のみ か is written; in speech say ばかり で なく.`],
      [`友達《ともだち》 と 話《はな》す の は 平気《へいき》 です が、 上司《じょうし》 ＿、 緊張《きんちょう》 します。`, [`に かけて は`, `に 関《かん》して`, `と なる と`], 2, `と なる と: once the situation is X, something changes.`],
      [`Which sentence is praise for a skill?`, [`週末《しゅうまつ》 から 月曜《げつよう》 に かけて、 雨《あめ》 が 続《つづ》きます。`, `あの 看護師《かんごし》さん は 早起《はやお》き に かけて は 苦手《にがて》 です。`, `患者《かんじゃ》さん の 話《はなし》 を 聞《き》く こと に かけて は、 あの 看護師《かんごし》さん が 一番《いちばん》 です。`], 2, `に かけて は is followed by strong praise; から 〜に かけて is "from … through".`],
      [`命《いのち》 に 関《かか》わる 病気《びょうき》 means:`, [`an illness that can be life-threatening`, `an illness concerning one's way of life`, `an illness that depends on one's life`], 0, `関《かか》わる (to affect seriously) is a different word from 関《かん》する.`]
    ] }
);
