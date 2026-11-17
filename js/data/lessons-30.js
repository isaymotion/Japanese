/* Lessons part 30 (0.23.0): N4, unit "Listing, conditions and time" (after nagara-mama-tokoro-bakari): tari-toka, nara, baai, aida-made, review-n4-listing.
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

  { id: 'tari-toka', level: 'N4', unit: 'Listing, conditions and time', after: 'nagara-mama-tokoro-bakari', title: `Giving examples: 〜たり 〜たり する, や 〜 など, とか`, summary: `List a few actions or things as examples rather than a complete list, and follow patients who describe symptoms this way.`, draft: true,
    body: `<p>Patients rarely give a complete list. They say "I wake up at night, I lose my appetite, that kind of thing", or "I worry about things like work and money". Japanese marks a list as "examples only" in set ways. You met 〜たり 〜たり します in <a href="#/lessons/ta-form-plain">The た-form and plain style</a>; this lesson completes it, and adds や 〜 など for nouns and the spoken とか.</p>
<h3>How to make it</h3>
<p>Take the plain past (た-form) and add り. Every item in the list takes たり, and the list ends with する. Tense and politeness go on that final する only.</p>
<table><tr><th>Word type</th><th>Rule</th><th>Example</th></tr>
<tr><td>group 1 verb</td><td>た-form + り</td><td>飲《の》む → 飲《の》んだり</td></tr>
<tr><td>group 2 verb</td><td>た-form + り</td><td>寝《ね》る → 寝《ね》たり</td></tr>
<tr><td>する, 来《く》る</td><td>した + り, 来《き》た + り</td><td>したり, 来《き》たり</td></tr>
<tr><td>negative</td><td>なかった + り</td><td>眠《ねむ》れない → 眠《ねむ》れなかったり</td></tr>
<tr><td>い-adjective</td><td>かった + り</td><td>痛《いた》い → 痛《いた》かったり</td></tr>
<tr><td>な-adjective, noun</td><td>+ だったり</td><td>静《しず》か だったり, 雨《あめ》 だったり</td></tr>
<tr><td>nouns (written, polite)</td><td>A や B (など)</td><td>頭痛《ずつう》 や 吐《は》き気《け》 など</td></tr>
<tr><td>nouns or verbs (spoken)</td><td>A とか B とか</td><td>頭痛《ずつう》 とか 吐《は》き気《け》 とか</td></tr></table>
<h3>〜たり 〜たり する: doing things like</h3>
<p>Two or more actions are given as examples; there may be others, and the order is not important. Compare 〜て, which lists actions in the order they happen (<a href="#/lessons/linking">Linking sentences</a>).</p>
<div class="ex"><b>週末《しゅうまつ》 は 友達《ともだち》 と 会《あ》ったり、 買《か》い物《もの》 を したり します。</b><span>At weekends I meet friends, go shopping, that sort of thing.</span></div>
<div class="ex"><b>入院中《にゅういんちゅう》 は 本《ほん》 を 読《よ》んだり、 散歩《さんぽ》したり して 過《す》ごしました。</b><span>During my stay in hospital I spent the time reading, going for walks and so on.</span></div>
<div class="ex"><b>最近《さいきん》、 急《きゅう》 に 泣《な》いたり 怒《おこ》ったり する こと は あります か。</b><span>Lately, do you find yourself suddenly crying or getting angry?</span></div>
<h3>One たり: for example</h3>
<p>A single 〜たり する gives one example and hints that there are others. In a question it sounds softer than a plain yes-or-no question, and in a suggestion it sounds less like an order.</p>
<div class="ex"><b>夜《よる》 に 目《め》 が 覚《さ》めたり します か。</b><span>Do you wake up at night, anything like that?</span></div>
<div class="ex"><b>天気《てんき》 の いい 日《ひ》 は、 少《すこ》し 散歩《さんぽ》したり する の も いい です よ。</b><span>On fine days it's good to do something like taking a short walk.</span></div>
<h3>Opposites: sometimes one, sometimes the other</h3>
<p>Two opposite forms with たり say that things go back and forth.</p>
<div class="ex"><b>お薬《くすり》 を 飲《の》んだり 飲《の》まなかったり して います か。</b><span>Are there days you take your medicine and days you don't?</span></div>
<div class="ex"><b>熱《ねつ》 が 上《あ》がったり 下《さ》がったり して います。</b><span>The fever keeps going up and down.</span></div>
<h3>や 〜 など: nouns, for example</h3>
<p>や joins nouns as examples from a longer list; と (from <a href="#/lessons/no-mo-to">の, も and と</a>) gives the complete list. など after the last noun adds "and so on" and can be left out. 牛乳《ぎゅうにゅう》 と 卵《たまご》 means milk and eggs and nothing else; 牛乳《ぎゅうにゅう》 や 卵《たまご》 means milk, eggs and other things.</p>
<div class="ex"><b>頭痛《ずつう》 や 吐《は》き気《け》 など は ありません か。</b><span>Do you have anything like headaches or nausea?</span></div>
<div class="ex"><b>冷蔵庫《れいぞうこ》 に 牛乳《ぎゅうにゅう》 や 卵《たまご》 が あります。</b><span>There's milk, eggs and other things in the fridge.</span></div>
<div class="ex"><b>仕事《しごと》 や お金《かね》 の こと で 悩《なや》んで います。</b><span>I'm worried about things like work and money.</span></div>
<h3>とか: the spoken version</h3>
<p>とか gives examples in conversation. It can follow nouns or plain verbs, and it often comes after the last item too. It is casual: you will hear it from patients all the time, but in your own polite speech and in writing, や 〜 など and 〜たり are safer.</p>
<div class="ex"><b>夜《よる》 は ゲーム とか スマホ とか で、 遅《おそ》く まで 起《お》きて います。</b><span>At night I stay up late with games, my phone and so on.</span></div>
<div class="ex"><b>気分《きぶん》 が 悪《わる》い とき は、 音楽《おんがく》 を 聞《き》く とか、 お風呂《ふろ》 に 入《はい》る とか して います。</b><span>When I feel bad, I do things like listen to music or have a bath.</span></div>
<h3>In the interview</h3>
<div class="ex"><b>食欲《しょくよく》 が なかったり、 疲《つか》れやすかったり します か。</b><span>Do you have things like a poor appetite or getting tired easily?</span></div>
<div class="ex"><b>お子《こ》さん は 学校《がっこう》 を 休《やす》んだり、 部屋《へや》 から 出《で》なかったり する こと が あります か。</b><span>Does your child sometimes miss school or not come out of their room?</span></div>
<div class="ex"><b>人《ひと》 の 前《まえ》 に 出《で》る と、 手《て》 が 震《ふる》えたり、 汗《あせ》 が 出《で》たり します。</b><span>When I'm in front of people, my hands shake, I sweat, that kind of thing.</span></div>
<p>The most common mistake is to put たり on the first item only: 本《ほん》 を 読《よ》んだり、 音楽《おんがく》 を 聞《き》きます is wrong. Say 読《よ》んだり、 聞《き》いたり します. Also keep 〜し (<a href="#/lessons/concession">Even if and although</a>) apart: し lists reasons or facts that point the same way, while たり lists sample actions.</p>
<div class="note">Every item takes たり, and する at the end carries the tense: 読《よ》んだり 聞《き》いたり しました. For nouns, や gives examples and と the full list; とか is the casual spoken form.</div>`,
    quiz: [
      [`What is the たり form of 行《い》く?`, [`行《い》きたり`, `行《い》ったり`, `行《い》くたり`], 1, `たり is built on the た-form, and the た-form of 行《い》く is 行《い》った.`],
      [`週末《しゅうまつ》 は 掃除《そうじ》 を したり、 料理《りょうり》 を ＿。`, [`したり します`, `します`, `して`], 0, `Every item takes たり and the list ends with する.`],
      [`What is the たり form of 痛《いた》い?`, [`痛《いた》いたり`, `痛《いた》くたり`, `痛《いた》かったり`], 2, `An い-adjective uses its past form 痛《いた》かった + り.`],
      [`頭痛《ずつう》 ＿ 吐《は》き気《け》 など は あります か。`, [`を`, `や`, `で`], 1, `や joins nouns as examples and pairs naturally with など.`],
      [`Which sentence is correct?`, [`夜《よる》 は 本《ほん》 を 読《よ》んだり、 音楽《おんがく》 を 聞《き》いたり します。`, `夜《よる》 は 本《ほん》 を 読《よ》んだり、 音楽《おんがく》 を 聞《き》きます。`, `夜《よる》 は 本《ほん》 を 読《よ》みたり、 音楽《おんがく》 を 聞《き》きたり します。`], 0, `Both verbs take the た-form + り, and する ends the list.`],
      [`お薬《くすり》 を 飲《の》んだり 飲《の》まなかったり して います means:`, [`I take my medicine every day.`, `I have never taken my medicine.`, `Some days I take my medicine and some days I don't.`], 2, `Opposite forms with たり describe something that goes back and forth.`]
    ] },

  { id: 'nara', level: 'N4', unit: 'Listing, conditions and time', after: 'tari-toka', title: `なら: "if that's the case", and how it differs from たら`, summary: `Take up what someone has just said and give advice or information about it with なら, and choose correctly between なら and たら.`, draft: true,
    body: `<p>A patient says "I'm thinking of going back to work next week", and you answer "If you're going back, let's start with short days". A visitor asks about a pharmacy, and you say "The pharmacy? It's in front of the hospital". In both replies you take up something the other person has just said and respond to it. Japanese uses なら for this. You learned とき, たら, と and ば in <a href="#/lessons/when-if">When and if</a>; なら is the one conditional that is about what the speaker has heard or learned, not about what happens first.</p>
<h3>How to make it</h3>
<table><tr><th>Word type</th><th>Rule</th><th>Example</th></tr>
<tr><td>verb</td><td>plain form + なら</td><td>行《い》く なら, 行《い》かない なら</td></tr>
<tr><td>い-adjective</td><td>plain form + なら</td><td>痛《いた》い なら</td></tr>
<tr><td>な-adjective</td><td>stem + なら (no だ)</td><td>心配《しんぱい》 なら</td></tr>
<tr><td>noun</td><td>noun + なら (no だ)</td><td>薬局《やっきょく》 なら</td></tr></table>
<p>You will also hear 〜の なら and 〜ん なら (行《い》く ん なら) with the same meaning.</p>
<h3>Picking up what was said</h3>
<p>X なら Y means "if X (as you say, or as it seems), then Y". Y is usually advice, a request, an opinion or a decision.</p>
<div class="ex"><b>「来週《らいしゅう》 から 仕事《しごと》 に 戻《もど》る つもり です。」 「戻《もど》る なら、 最初《さいしょ》 は 短《みじか》い 時間《じかん》 から 始《はじ》めましょう。」</b><span>"I'm thinking of going back to work next week." "If you're going back, let's start with short hours."</span></div>
<div class="ex"><b>眠《ねむ》れない なら、 寝《ね》る 前《まえ》 に スマホ を 見《み》ないで ください。</b><span>If you can't sleep, please don't look at your phone before bed.</span></div>
<div class="ex"><b>「少《すこ》し 頭《あたま》 が 痛《いた》い ん です。」 「痛《いた》い なら、 今日《きょう》 は 早《はや》く 休《やす》んで ください。」</b><span>"I have a bit of a headache." "If it hurts, please rest early today."</span></div>
<h3>Noun + なら: if it's X you mean</h3>
<p>After a noun, なら picks out a topic: "if it's X (you are asking about)". The reply gives information or a recommendation about that topic.</p>
<div class="ex"><b>「この 近《ちか》く に 薬局《やっきょく》 は あります か。」 「薬局《やっきょく》 なら、 病院《びょういん》 の 前《まえ》 に あります よ。」</b><span>"Is there a pharmacy near here?" "A pharmacy? There's one in front of the hospital."</span></div>
<div class="ex"><b>甘《あま》い もの なら、 駅前《えきまえ》 の ケーキ屋《や》 が おいしい です。</b><span>If it's something sweet you want, the cake shop by the station is good.</span></div>
<div class="ex"><b>日曜日《にちようび》 なら、 時間《じかん》 が あります。</b><span>If it's Sunday, I have time.</span></div>
<h3>なら or たら: which comes first</h3>
<p>With X たら Y, X happens first and Y follows. With X なら Y, Y can come before X: なら only means "given that X is the plan or is true". So advice for before an event needs なら.</p>
<div class="ex"><b>病院《びょういん》 に 行《い》く なら、 今《いま》 飲《の》んで いる 薬《くすり》 を 全部《ぜんぶ》 持《も》って いって ください。</b><span>If you're going to the hospital, please take all the medicines you are taking now. (before you go)</span></div>
<div class="ex"><b>病院《びょういん》 に 着《つ》いたら、 受付《うけつけ》 で 名前《なまえ》 を 言《い》って ください。</b><span>When you get to the hospital, please give your name at reception. (after you arrive)</span></div>
<div class="ex"><b>お酒《さけ》 を 飲《の》む なら、 車《くるま》 を 運転《うんてん》しないで ください。</b><span>If you're going to drink, please don't drive.</span></div>
<p>For something that is sure to happen, such as a time arriving, use たら: 十時《じゅうじ》 に なったら 始《はじ》めましょう, not 十時《じゅうじ》 に なる なら. For "whenever" and natural results, use と: 春《はる》 に なる と 暖《あたた》かく なります. The other common mistake is adding だ: 心配《しんぱい》 だ なら is wrong; say 心配《しんぱい》 なら.</p>
<h3>In the interview</h3>
<div class="ex"><b>つらい なら、 無理《むり》 に 話《はな》さなくて も いい です よ。</b><span>If it's hard, you don't have to talk about it.</span></div>
<div class="ex"><b>副作用《ふくさよう》 が 心配《しんぱい》 なら、 遠慮《えんりょ》 なく 聞《き》いて ください。</b><span>If you're worried about side effects, please feel free to ask.</span></div>
<div class="ex"><b>ご家族《かぞく》 が 一緒《いっしょ》 なら、 外出《がいしゅつ》して も 大丈夫《だいじょうぶ》 です。</b><span>If a family member is with you, it's fine to go out.</span></div>
<div class="ex"><b>お薬《くすり》 の こと なら、 薬剤師《やくざいし》 が 詳《くわ》しく 説明《せつめい》します。</b><span>If it's about your medicine, the pharmacist will explain it in detail.</span></div>
<p>More uses of なら, with regret and wishes, come in <a href="#/lessons/hypotheticals">Supposing, regret and wishes</a> at N3.</p>
<div class="note">なら answers what you have just heard: "if (as you say) X, then…". The advice can come before X happens, which たら cannot do. No だ before なら: 心配《しんぱい》 なら, 薬《くすり》 なら.</div>`,
    quiz: [
      [`How do you say "if you're worried" with なら?`, [`心配《しんぱい》 だ なら`, `心配《しんぱい》 な なら`, `心配《しんぱい》 なら`], 2, `A な-adjective goes straight before なら, with no だ or な.`],
      [`「郵便局《ゆうびんきょく》 は どこ です か。」 「郵便局《ゆうびんきょく》 ＿、 あの 角《かど》 を 左《ひだり》 です。」`, [`なら`, `たら`, `と`], 0, `Noun + なら takes up the place the other person asked about.`],
      [`You want to say "If you're going to the hospital, take your medicines with you" (before going). Which fits?`, [`病院《びょういん》 に 行《い》ったら、 薬《くすり》 を 持《も》って いって ください。`, `病院《びょういん》 に 行《い》く なら、 薬《くすり》 を 持《も》って いって ください。`, `病院《びょういん》 に 行《い》く と、 薬《くすり》 を 持《も》って いって ください。`], 1, `The advice applies before going, so なら is needed; たら means after arriving, and と cannot take a request.`],
      [`Which sentence is natural?`, [`十時《じゅうじ》 に なる なら、 始《はじ》めましょう。`, `十時《じゅうじ》 に なったら、 始《はじ》めましょう。`, `十時《じゅうじ》 に なる なら、 始《はじ》めました。`], 1, `A time that is sure to arrive takes たら, not なら.`],
      [`お酒《さけ》 を 飲《の》む なら、 運転《うんてん》しないで ください means:`, [`Please don't drink after you drive.`, `Whenever you drink, please drive.`, `If you're going to drink, please don't drive.`], 2, `X なら Y: given that you plan to drink, do not drive.`],
      [`「来週《らいしゅう》 から 仕事《しごと》 に 戻《もど》ります。」 「戻《もど》る ＿、 最初《さいしょ》 は 半日《はんにち》 から に しましょう。」`, [`なら`, `まで`, `と`], 0, `なら takes up the plan the patient just mentioned and gives advice about it.`]
    ] },

  { id: 'baai', level: 'N4', unit: 'Listing, conditions and time', after: 'nara', title: `〜場合《ばあい》 は: in case of, if (instructions and safety-netting)`, summary: `Understand and give instructions for situations that might happen, including what to do if things get worse after a visit.`, draft: true,
    body: `<p>Leaflets, consent forms and ward rules say "in case of rain…", "if you cannot attend…", "if side effects appear…". At the end of a visit or at discharge you also tell the patient what to do if things get worse: this is safety-netting. Japanese uses 場合《ばあい》 ("case, situation") for these. It means "if" like たら, but it sounds more formal and is about a situation that may or may not happen.</p>
<h3>How to make it</h3>
<p>場合《ばあい》 is a noun, so it is joined to what comes before like とき (<a href="#/lessons/when-if">When and if</a>) or any noun (<a href="#/lessons/noun-clauses">Describing a noun with a sentence</a>). It is usually followed by は.</p>
<table><tr><th>Word type</th><th>Rule</th><th>Example</th></tr>
<tr><td>verb</td><td>plain form (present, past or negative) + 場合《ばあい》</td><td>来《こ》られない 場合《ばあい》, 飲《の》み忘《わす》れた 場合《ばあい》</td></tr>
<tr><td>い-adjective</td><td>plain form + 場合《ばあい》</td><td>痛《いた》い 場合《ばあい》</td></tr>
<tr><td>な-adjective</td><td>+ な + 場合《ばあい》</td><td>不安《ふあん》 な 場合《ばあい》</td></tr>
<tr><td>noun</td><td>+ の + 場合《ばあい》</td><td>雨《あめ》 の 場合《ばあい》</td></tr></table>
<h3>Instructions: if this happens, do that</h3>
<div class="ex"><b>雨《あめ》 の 場合《ばあい》 は、 散歩《さんぽ》 は 中止《ちゅうし》 です。</b><span>If it rains, the walk is cancelled.</span></div>
<div class="ex"><b>予約《よやく》 の 時間《じかん》 に 来《こ》られない 場合《ばあい》 は、 前《まえ》 の 日《ひ》 まで に 連絡《れんらく》して ください。</b><span>If you can't come at your appointment time, please let us know by the day before.</span></div>
<div class="ex"><b>お薬《くすり》 を 飲《の》み忘《わす》れた 場合《ばあい》 は、 自分《じぶん》 で 判断《はんだん》しないで、 病院《びょういん》 に 聞《き》いて ください。</b><span>If you forget to take your medicine, don't decide what to do on your own; ask the hospital.</span></div>
<div class="ex"><b>わからない 場合《ばあい》 は、 いつでも 聞《き》いて ください。</b><span>If anything is unclear, please ask at any time.</span></div>
<h3>場合《ばあい》 or たら</h3>
<p>Both mean "if". たら is everyday and personal; 場合《ばあい》 は sounds like a rule or an instruction, and suits written notices and careful explanations. The same request can be said either way:</p>
<div class="ex"><b>熱《ねつ》 が 出《で》たら、 連絡《れんらく》して ください。</b><span>If you get a fever, please contact us. (everyday)</span></div>
<div class="ex"><b>熱《ねつ》 が 出《で》た 場合《ばあい》 は、 ご連絡《れんらく》 ください。</b><span>In the event of a fever, please contact us. (formal)</span></div>
<p>Because 場合《ばあい》 is about something that may happen, do not use it for something that is sure to happen, such as a time arriving: 三時《さんじ》 に なったら, not 三時《さんじ》 に なった 場合《ばあい》. And unlike とき, which is simply "the time when", 場合《ばあい》 is "in the case that".</p>
<h3>Safety-netting</h3>
<p>Before a patient leaves, say clearly what to do if things get worse. Give the real contact details your service uses (the hospital, the local crisis line) and follow local law and your hospital's policy. The only number given in this app is ｜119番《ひゃくじゅうきゅうばん》.</p>
<div class="ex"><b>気分《きぶん》 が ひどく 落《お》ち込《こ》んだ 場合《ばあい》 は、 次《つぎ》 の 予約《よやく》 を 待《ま》たないで、 病院《びょういん》 に 連絡《れんらく》して ください。</b><span>If your mood gets very low, don't wait for the next appointment; please contact the hospital.</span></div>
<div class="ex"><b>死《し》にたい 気持《きも》ち が 強《つよ》く なった 場合《ばあい》 は、 一人《ひとり》 で 我慢《がまん》しないで、 すぐ 誰《だれ》 か に 話《はな》して ください。</b><span>If the wish to die gets stronger, don't bear it alone; please tell someone right away.</span></div>
<div class="ex"><b>夜《よる》 や 休《やす》み の 日《ひ》 で 病院《びょういん》 に つながらない 場合《ばあい》 は、 地域《ちいき》 の 相談窓口《そうだんまどぐち》 に 電話《でんわ》して ください。</b><span>If you can't reach the hospital at night or on a holiday, please call the local crisis line.</span></div>
<div class="ex"><b>命《いのち》 に 危険《きけん》 が ある 場合《ばあい》 は、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》して ください。</b><span>If a life is in danger, please call 119.</span></div>
<h3>On forms and leaflets</h3>
<div class="ex"><b>ご本人《ほんにん》 が 来《こ》られない 場合《ばあい》 は、 ご家族《かぞく》 の 方《かた》 でも 大丈夫《だいじょうぶ》 です。</b><span>If the patient can't come in person, a family member is fine.</span></div>
<div class="ex"><b>場合《ばあい》 に よって は、 入院《にゅういん》 が 必要《ひつよう》 な こと も あります。</b><span>Depending on the situation, a hospital stay may be needed.</span></div>
<p>場合《ばあい》 に よって は is a set phrase: "depending on the case", "in some cases". The most common mistake with 場合《ばあい》 is forgetting な or の: say 不安《ふあん》 な 場合《ばあい》 and 雨《あめ》 の 場合《ばあい》, not 不安《ふあん》 場合《ばあい》 or 雨《あめ》 場合《ばあい》.</p>
<div class="note">〜場合《ばあい》 は is a formal "if, in case": join it like a noun (な-adjective + な, noun + の). Use it for things that may happen, never for things sure to happen. Safety-netting names who to contact: the hospital, the local crisis line, or ｜119番《ひゃくじゅうきゅうばん》 in an emergency.</div>`,
    quiz: [
      [`How do you say "if you can't come"?`, [`来《こ》られない 場合《ばあい》 は`, `来《こ》られない の 場合《ばあい》 は`, `来《こ》られなくて 場合《ばあい》 は`], 0, `A verb in plain form goes straight before 場合《ばあい》, with no の.`],
      [`雨《あめ》 ＿ 場合《ばあい》 は、 散歩《さんぽ》 は 中止《ちゅうし》 です。`, [`な`, `を`, `の`], 2, `A noun takes の before 場合《ばあい》.`],
      [`予約《よやく》 に 遅《おく》れる 場合《ばあい》 は、 ご連絡《れんらく》 ください means:`, [`Please contact us after your appointment.`, `If you are going to be late for your appointment, please let us know.`, `Because you were late, please contact us.`], 1, `〜場合《ばあい》 は sets up a possible situation: "if you will be late".`],
      [`Which sentence is natural?`, [`三時《さんじ》 に なった 場合《ばあい》 は、 お茶《ちゃ》 を 飲《の》みましょう。`, `三時《さんじ》 に なる 場合《ばあい》、 お茶《ちゃ》 を 飲《の》みましょう。`, `三時《さんじ》 に なったら、 お茶《ちゃ》 を 飲《の》みましょう。`], 2, `A time that is sure to come takes たら; 場合《ばあい》 is for things that may or may not happen.`],
      [`Which is the right safety-netting line for a patient going home?`, [`つらく なった 場合《ばあい》 は、 次《つぎ》 の 予約《よやく》 を 待《ま》たないで 連絡《れんらく》して ください。`, `つらく なった 場合《ばあい》 は、 次《つぎ》 の 予約《よやく》 まで 我慢《がまん》して ください。`, `つらく なる 場合《ばあい》 は ありません。`], 0, `Safety-netting tells the patient to make contact early, not to wait or put up with it.`],
      [`場合《ばあい》 に よって は means:`, [`in every case`, `depending on the situation`, `only in an emergency`], 1, `場合《ばあい》 に よって は is a set phrase for "in some cases, depending on the situation".`]
    ] },

  { id: 'aida-made', level: 'N4', unit: 'Listing, conditions and time', after: 'baai', title: `間《あいだ》, 間《あいだ》 に, まで, まで に: during, until and by`, summary: `Say how long something goes on, when within a period something happens, and the deadline by which something must be done.`, draft: true,
    body: `<p>Ward rules, appointments and tests are full of time limits: "visiting is until eight", "please be back by five", "wait here until you are called". English "until" and "by" are easy to mix up, and Japanese marks the difference with one small word: に. The same に also separates "the whole time" from "at some point during".</p>
<h3>How to make it</h3>
<table><tr><th>Word type</th><th>まで / まで に</th><th>間《あいだ》 / 間《あいだ》 に</th></tr>
<tr><td>verb</td><td>dictionary form: 帰《かえ》る まで</td><td>〜て いる form: 待《ま》って いる 間《あいだ》</td></tr>
<tr><td>noun</td><td>noun + まで: 五時《ごじ》 まで, 金曜日《きんようび》 まで に</td><td>noun + の: 昼休《ひるやす》み の 間《あいだ》</td></tr>
<tr><td>adjective</td><td>use なる: よく なる まで</td><td>な-adjective + な: 元気《げんき》 な 間《あいだ》</td></tr></table>
<p>The rule for に is the same in both pairs:</p>
<table><tr><th></th><th>no に: the whole stretch</th><th>with に: one event inside it</th></tr>
<tr><td>time limit</td><td>〜まで: until (keeps going up to then)</td><td>〜まで に: by (done at some point before then)</td></tr>
<tr><td>period</td><td>〜間《あいだ》: the whole time</td><td>〜間《あいだ》 に: at some point during</td></tr></table>
<h3>まで: until</h3>
<p>The action or state continues right up to the limit. Verbs like 待《ま》つ, いる, 休《やす》む, 寝《ね》る and 起《お》きて いる go with まで.</p>
<div class="ex"><b>順番《じゅんばん》 が 来《く》る まで、 こちら で お待《ま》ち ください。</b><span>Please wait here until it's your turn.</span></div>
<div class="ex"><b>熱《ねつ》 が 下《さ》がる まで、 家《いえ》 で 休《やす》んで ください。</b><span>Please rest at home until the fever goes down.</span></div>
<div class="ex"><b>昨日《きのう》 は 夜中《よなか》 の 二時《にじ》 まで 起《お》きて いました。</b><span>Last night I was up until two in the morning.</span></div>
<div class="ex"><b>気持《きも》ち が 落《お》ち着《つ》く まで、 ここ に いて も いい です よ。</b><span>You can stay here until you feel calmer.</span></div>
<h3>まで に: by</h3>
<p>One action has to happen at some point before the limit. Think of まで に as a deadline.</p>
<div class="ex"><b>金曜日《きんようび》 まで に この 書類《しょるい》 を 出《だ》して ください。</b><span>Please hand in this form by Friday.</span></div>
<div class="ex"><b>検査《けんさ》 の 日《ひ》 は、 九時《くじ》 まで に 受付《うけつけ》 に 来《き》て ください。</b><span>On the day of the test, please come to reception by nine.</span></div>
<div class="ex"><b>家族《かぞく》 が 帰《かえ》って くる まで に、 夕飯《ゆうはん》 を 作《つく》ります。</b><span>I'll make dinner before my family gets home.</span></div>
<p>Compare 五時《ごじ》 まで 病棟《びょうとう》 に いて ください (stay on the ward until five) with 五時《ごじ》 まで に 病棟《びょうとう》 に 戻《もど》って ください (be back on the ward by five). The common mistake is まで with a one-time action: 金曜日《きんようび》 まで 出《だ》して ください sounds as if you should keep handing it in until Friday. Also, the verb before まで stays in the dictionary form even about the past: 母《はは》 が 帰《かえ》る まで 待《ま》ちました, not 帰《かえ》った まで.</p>
<h3>間《あいだ》 and 間《あいだ》 に: during</h3>
<p>Without に, the main clause fills the whole period, often with ずっと. With に, one event happens somewhere inside it. <a href="#/lessons/aida-uchi">〜間《あいだ》, 〜間《あいだ》 に, 〜うち に</a> at N3 goes further and adds うち に.</p>
<div class="ex"><b>診察《しんさつ》 を 待《ま》って いる 間《あいだ》、 ずっと スマホ を 見《み》て いました。</b><span>The whole time I was waiting to be seen, I was looking at my phone.</span></div>
<div class="ex"><b>昼休《ひるやす》み の 間《あいだ》 に 銀行《ぎんこう》 に 行《い》って きます。</b><span>I'll go to the bank during my lunch break.</span></div>
<div class="ex"><b>眠《ねむ》って いる 間《あいだ》 に、 看護師《かんごし》 が 何度《なんど》 か 部屋《へや》 に 来《き》ました。</b><span>While you were asleep, the nurse came into the room a few times.</span></div>
<h3>On the ward</h3>
<div class="ex"><b>面会《めんかい》 は 夜《よる》 の 八時《はちじ》 まで です。</b><span>Visiting hours are until eight in the evening.</span></div>
<div class="ex"><b>次《つぎ》 の 診察《しんさつ》 まで に、 毎日《まいにち》 何時間《なんじかん》 眠《ねむ》れた か メモして おいて ください。</b><span>Before your next visit, please write down how many hours you sleep each night.</span></div>
<div class="ex"><b>先生《せんせい》 が 来《く》る まで、 少《すこ》し お待《ま》ち いただけます か。</b><span>Could you wait a little until the doctor comes?</span></div>
<div class="note">No に = the whole stretch: まで 待《ま》つ, 間《あいだ》 ずっと. With に = one event inside it or before the limit: まで に 出《だ》す, 間《あいだ》 に 行《い》く. English "by" is まで に; "until" is まで.</div>`,
    quiz: [
      [`金曜日《きんようび》 ＿ 書類《しょるい》 を 出《だ》して ください。 (by Friday)`, [`まで`, `まで に`, `から`], 1, `A single action before a deadline takes まで に.`],
      [`熱《ねつ》 が 下《さ》がる ＿、 家《いえ》 で 休《やす》んで ください。`, [`まで`, `まで に`, `間《あいだ》 に`], 0, `Resting goes on the whole time up to that point, so まで without に.`],
      [`五時《ごじ》 まで に 戻《もど》って ください means:`, [`Please stay until five.`, `Please come back after five.`, `Please come back by five.`], 2, `まで に marks a deadline: by five.`],
      [`Which says "I went to the pharmacy during my lunch break"?`, [`昼休《ひるやす》み の 間《あいだ》 に 薬局《やっきょく》 に 行《い》きました。`, `昼休《ひるやす》み 間《あいだ》 に 薬局《やっきょく》 に 行《い》きました。`, `昼休《ひるやす》み まで に 薬局《やっきょく》 に 行《い》きました。`], 0, `A noun takes の before 間《あいだ》, and に marks one event within the period; まで に would mean "before lunch".`],
      [`How do you say "until the doctor comes"?`, [`先生《せんせい》 が 来《き》た まで`, `先生《せんせい》 が 来《き》て まで`, `先生《せんせい》 が 来《く》る まで`], 2, `The verb before まで is in the dictionary form.`],
      [`Which sentence is correct?`, [`寝《ね》て いる 間《あいだ》、 電話《でんわ》 が 一回《いっかい》 鳴《な》りました。`, `待《ま》って いる 間《あいだ》、 ずっと 本《ほん》 を 読《よ》んで いました。`, `待《ま》って いる 間《あいだ》 に、 ずっと 本《ほん》 を 読《よ》んで いました。`], 1, `間《あいだ》 without に fits an activity that fills the whole time; a single ring needs 間《あいだ》 に, and ずっと does not fit 間《あいだ》 に.`]
    ] },

  { id: 'review-n4-listing', level: 'N4', unit: 'Listing, conditions and time', after: 'aida-made', review: true, title: `Review: Listing, conditions and time`, summary: `Bring together examples with たり, や and とか, the conditionals なら and 〜場合《ばあい》 は, and time limits with 間《あいだ》 and まで.`, draft: true,
    body: `<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜たり 〜たり する</td><td>sample actions</td><td>休《やす》み の 日《ひ》 は 掃除《そうじ》 を したり、 料理《りょうり》 を したり します。</td></tr>
<tr><td>A や B など</td><td>sample nouns</td><td>机《つくえ》 の 上《うえ》 に 本《ほん》 や ノート など が あります。</td></tr>
<tr><td>A とか B とか</td><td>sample items, spoken</td><td>野菜《やさい》 とか 果物《くだもの》 とか、 食《た》べて います か。</td></tr>
<tr><td>〜なら</td><td>"if (as you say)", then advice</td><td>疲《つか》れて いる なら、 今日《きょう》 は 早《はや》く 寝《ね》ましょう。</td></tr>
<tr><td>〜場合《ばあい》 は</td><td>in case of (formal)</td><td>わからない 場合《ばあい》 は、 受付《うけつけ》 で 聞《き》いて ください。</td></tr>
<tr><td>〜間《あいだ》</td><td>the whole time</td><td>電車《でんしゃ》 に 乗《の》って いる 間《あいだ》、 ずっと 寝《ね》て いました。</td></tr>
<tr><td>〜間《あいだ》 に</td><td>at some point during</td><td>母《はは》 が 寝《ね》て いる 間《あいだ》 に、 買《か》い物《もの》 に 行《い》きました。</td></tr>
<tr><td>〜まで</td><td>until</td><td>雨《あめ》 が やむ まで 待《ま》ちましょう。</td></tr>
<tr><td>〜まで に</td><td>by (a deadline)</td><td>明日《あした》 の 朝《あさ》 まで に 結果《けっか》 が わかります。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Every item takes たり, then する: 読《よ》んだり 書《か》いたり します, not 読《よ》んだり 書《か》きます.</li>
<li>や gives examples, と the complete list; とか is casual.</li>
<li>No だ before なら: 心配《しんぱい》 なら. Advice for before an event needs なら (行《い》く なら 持《も》って いって); a time sure to come needs たら.</li>
<li>場合《ばあい》 joins like a noun (不安《ふあん》 な 場合《ばあい》, 雨《あめ》 の 場合《ばあい》) and is only for things that may happen.</li>
<li>に means one event inside the period or before the limit (まで に 出《だ》す, 間《あいだ》 に 行《い》く); no に means the whole stretch (まで 待《ま》つ, 間《あいだ》 ずっと).</li></ul>
<h3>Putting them together</h3>
<div class="ex"><b>外泊《がいはく》する なら、 日曜日《にちようび》 の 五時《ごじ》 まで に 戻《もど》って ください。</b><span>If you're going home overnight, please be back by five on Sunday.</span></div>
<div class="ex"><b>頭痛《ずつう》 や めまい など が ある 場合《ばあい》 は、 すぐ 看護師《かんごし》 に 言《い》って ください。</b><span>If you have anything like a headache or dizziness, please tell a nurse straight away.</span></div>
<div class="ex"><b>眠《ねむ》れない なら、 眠《ねむ》く なる まで 本《ほん》 を 読《よ》んだり して も いい です よ。</b><span>If you can't sleep, you can read or do something like that until you feel sleepy.</span></div>
<div class="ex"><b>次《つぎ》 の 診察《しんさつ》 まで に 気分《きぶん》 が ひどく 落《お》ち込《こ》んだ 場合《ばあい》 は、 予約《よやく》 を 待《ま》たないで 連絡《れんらく》して ください。</b><span>If your mood gets very low before your next visit, please don't wait for the appointment; contact us.</span></div>`,
    quiz: [
      [`夜中《よなか》 に 起《お》きたり、 ＿ します。`, [`夢《ゆめ》 を 見《み》たり`, `夢《ゆめ》 を 見《み》ます`, `夢《ゆめ》 を 見《み》て`], 0, `Every item in the list takes たり before the final する.`],
      [`Which means "things like coffee and tea" (and maybe others)?`, [`コーヒー と お茶《ちゃ》`, `コーヒー や お茶《ちゃ》 など`, `コーヒー で お茶《ちゃ》`], 1, `や 〜 など gives examples; と gives the complete list.`],
      [`「肩《かた》 が 痛《いた》い ん です。」 「痛《いた》い ＿、 少《すこ》し 休《やす》みましょう。」`, [`と`, `まで`, `なら`], 2, `なら takes up what the other person said and gives advice.`],
      [`How do you say "if it's about your medicine"?`, [`お薬《くすり》 の こと なら`, `お薬《くすり》 の こと だ なら`, `お薬《くすり》 の こと な なら`], 0, `A noun goes straight before なら, with no だ.`],
      [`Choose the correct form for "if you have a fever".`, [`熱《ねつ》 が ある の 場合《ばあい》 は`, `熱《ねつ》 が あって 場合《ばあい》 は`, `熱《ねつ》 が ある 場合《ばあい》 は`], 2, `A plain verb goes straight before 場合《ばあい》.`],
      [`明日《あした》 ＿ 返事《へんじ》 を ください。 (by tomorrow)`, [`まで`, `まで に`, `間《あいだ》`], 1, `A one-time action before a deadline takes まで に.`],
      [`寝《ね》て いる 間《あいだ》 に 雨《あめ》 が 降《ふ》りました means:`, [`It rained the whole time I was asleep.`, `It rained at some point while I was asleep.`, `It rained, so I slept.`], 1, `間《あいだ》 に marks one event somewhere inside the period.`],
      [`Which says "If you're going out, take an umbrella"?`, [`出《で》かける 場合《ばあい》 の 傘《かさ》 を 持《も》って いって ください。`, `出《で》かける と、 傘《かさ》 を 持《も》って いって ください。`, `出《で》かける なら、 傘《かさ》 を 持《も》って いって ください。`], 2, `なら gives advice for before the plan happens; と cannot take a request, and 場合《ばあい》 の 傘《かさ》 is not a sentence.`],
      [`予約《よやく》 を 変《か》えたい 場合《ばあい》 は、 前《まえ》 の 日《ひ》 まで に 連絡《れんらく》して ください means:`, [`If you want to change your appointment, please let us know by the day before.`, `Please keep calling us until the day before your appointment.`, `Because you changed your appointment, please call us the day before.`], 0, `場合《ばあい》 は sets up the possible case, and まで に gives the deadline.`],
      [`Which sentence is correct?`, [`入院《にゅういん》して いる 間《あいだ》、 絵《え》 を 描《か》いたり 散歩《さんぽ》しました。`, `入院《にゅういん》して いる 間《あいだ》、 絵《え》 を 描《か》いたり 散歩《さんぽ》したり して いました。`, `入院《にゅういん》して いる まで に、 絵《え》 を 描《か》いたり 散歩《さんぽ》したり しました。`], 1, `Both actions take たり and する ends the list; 間《あいだ》 without に fits the whole stay.`],
      [`「三時《さんじ》 まで 会議《かいぎ》 です。」 「それ なら、 四時《よじ》 に 来《き》ます。」 What does それ なら mean here?`, [`until then`, `by three`, `in that case`], 2, `それ なら takes up what was just said: "in that case".`],
      [`Which is the right safety-netting line?`, [`夜《よる》 に 命《いのち》 の 危険《きけん》 が ある 場合《ばあい》 は、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》して ください。`, `夜《よる》 に 命《いのち》 の 危険《きけん》 が ある 場合《ばあい》 は、 朝《あさ》 まで 待《ま》って ください。`, `夜《よる》 に 命《いのち》 の 危険《きけん》 が ある まで、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》して ください。`], 0, `場合《ばあい》 は sets up the emergency and the instruction is to call 119; waiting until morning is wrong, and ある まで is not the right form.`]
    ] }
);
