/* Lessons part 38 (0.24.0): N4, unit "Picture lessons: machines and how things are" (after review-n4-te): machine-instructions, states-pictures, explaining-with-pictures, review-n4-pictures.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level:'N5'|'N4', unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus `after: '<lesson id>'` on EVERY lesson (the first lesson after review-n4-te, each next one after the lesson before it) and
   `review: true` on the unit review (quiz of exactly 12; others 5 to 7). Examples: <div class="ex"><b>JA</b><span>EN</span></div>.
   A picture in the body: <div class="pic-embed" data-pic="<picture set id>"></div> (the app mounts the tap-to-learn picture).
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  /* ============ Unit: Picture lessons: machines and how things are ============ */
  { id: 'machine-instructions', level: 'N4', unit: 'Picture lessons: machines and how things are', after: 'review-n4-te', title: `〜と, 〜ない と, 〜方《かた》, まず / 次《つぎ》 に: how machines work and how to use them`, summary: `Say what happens when you press or turn something, what will not work unless you do a step, how to use a machine, and give steps in order.`, draft: true,
    body: `<p>Machines in Japan speak short Japanese: the washing machine, the microwave, the ward's blood pressure machine, the nurse-call button by the bed. To explain one to a patient, or to follow a nurse who explains one to you, you need three tools: 〜と for "do this and that happens", 〜方《かた》 for "how to do it", and the order words まず, 次《つぎ》 に, それから and 最後《さいご》 に. Look at the picture first, then practise real buttons on the <a href="#/signs?tab=panels">machine panels</a>.</p>
<div class="pic-embed" data-pic="computer-phone"></div>
<h3>How to make it</h3>
<table><tr><th>Pattern</th><th>Rule</th><th>Example</th></tr>
<tr><td>〜と (when, whenever)</td><td>dictionary form + と</td><td>押《お》す と、 開《あ》きます。</td></tr>
<tr><td>〜ない と (unless, if you don't)</td><td>ない-form + と</td><td>押《お》さない と、 動《うご》きません。</td></tr>
<tr><td>〜方《かた》 (how to)</td><td>ます-stem + 方《かた》</td><td>使《つか》います → 使《つか》い方《かた》</td></tr>
<tr><td>する verbs</td><td>noun + の 仕方《しかた》</td><td>予約《よやく》します → 予約《よやく》 の 仕方《しかた》</td></tr>
<tr><td>Steps</td><td>まず → 次《つぎ》 に → それから → 最後《さいご》 に</td><td>first, next, then, finally</td></tr></table>
<h3>〜と: press this, and that happens</h3>
<p>You met と in <a href="#/lessons/when-if">When and if</a>. With machines it is the natural choice, because the result always follows: press, and the machine does it. The second half says what happens. It is not your wish or your request.</p>
<div class="ex"><b>この ボタン を 押《お》す と、 電源《でんげん》 が 入《はい》ります。</b><span>When you press this button, the power comes on.</span></div>
<div class="ex"><b>ドア を 開《あ》ける と、 電子《でんし》レンジ は 止《と》まります。</b><span>When you open the door, the microwave stops.</span></div>
<div class="ex"><b>ここ を 押《お》す と、 看護師《かんごし》 が 来《き》ます。</b><span>When you press here, a nurse comes.</span></div>
<div class="ex"><b>体温計《たいおんけい》 は、 測《はか》り終《お》わる と 音《おと》 が 鳴《な》ります。</b><span>The thermometer beeps when it has finished measuring.</span></div>
<h3>〜ない と: unless you do this</h3>
<p>Put the ない-form before と to say what will not happen if a step is skipped. The second half is usually negative: it won't work, you can't use it. You will also hear 〜ない と いけません "you have to", as in 毎日《まいにち》 充電《じゅうでん》しない と いけません "it has to be charged every day".</p>
<div class="ex"><b>電源《でんげん》 を 入《い》れない と、 動《うご》きません。</b><span>It won't work unless you switch it on.</span></div>
<div class="ex"><b>ふた を 閉《し》めない と、 洗濯機《せんたくき》 は 始《はじ》まりません。</b><span>The washing machine won't start unless you close the lid.</span></div>
<div class="ex"><b>充電《じゅうでん》しない と、 スマホ が 使《つか》えなく なります。</b><span>If you don't charge it, you won't be able to use your phone.</span></div>
<p>Look at the picture of home machines and say what happens when you switch each one on: テレビ を つける と、 画面《がめん》 が 明《あか》るく なります.</p>
<div class="pic-embed" data-pic="appliances"></div>
<h3>〜方《かた》: how to</h3>
<p>The ます-stem plus 方《かた》 makes a noun, "the way of doing it". Because it is now a noun, the object takes の instead of を: 機械《きかい》 を 使《つか》う → 機械《きかい》 の 使《つか》い方《かた》.</p>
<div class="ex"><b>すみません、 この 機械《きかい》 の 使《つか》い方《かた》 を 教《おし》えて ください。</b><span>Excuse me, please show me how to use this machine.</span></div>
<div class="ex"><b>切符《きっぷ》 の 買《か》い方《かた》 が わかりません。</b><span>I don't know how to buy a ticket.</span></div>
<div class="ex"><b>ナースコール の 使《つか》い方《かた》 を 説明《せつめい》します ね。</b><span>Let me explain how to use the nurse call.</span></div>
<h3>まず, 次《つぎ》 に, それから, 最後《さいご》 に: in order</h3>
<p>For steps, start with まず (first), go on with 次《つぎ》 に (next) and それから (then), and close with 最後《さいご》 に (finally). Here a nurse explains the blood pressure machine.</p>
<div class="ex"><b>まず、 椅子《いす》 に 座《すわ》って、 腕《うで》 を ここ に 入《い》れて ください。</b><span>First, sit on the chair and put your arm in here (into the cuff).</span></div>
<div class="ex"><b>次《つぎ》 に、 この 青《あお》い ボタン を 押《お》して ください。</b><span>Next, please press this blue button.</span></div>
<div class="ex"><b>それから、 終《お》わる まで 動《うご》かないで ください。</b><span>Then please keep still until it finishes.</span></div>
<div class="ex"><b>最後《さいご》 に、 画面《がめん》 の 数字《すうじ》 を この 紙《かみ》 に 書《か》いて ください。</b><span>Finally, please write the numbers on the screen on this paper.</span></div>
<div class="note"><b>Watch out.</b> After 〜と the second half cannot be a request, an invitation or your own plan. Not ここ を 押《お》す と、 待《ま》って ください, but ここ を 押《お》したら、 待《ま》って ください "after you press here, please wait". And remember の with 〜方《かた》: 機械《きかい》 の 使《つか》い方《かた》, not 機械《きかい》 を 使《つか》い方《かた》.</div>`,
    quiz: [
      [`ボタン を 押《お》す ＿、 ドア が 開《あ》きます。 Which fits?`, [`と`, `を`, `が`], 0, `Dictionary form + と says what always happens next.`],
      [`Which means "how to use"?`, [`使《つか》う 方《かた》`, `使《つか》い方《かた》`, `使《つか》って 方《かた》`], 1, `方《かた》 "how to" follows the ます-stem: 使《つか》い + 方《かた》.`],
      [`Which is natural for "After you press here, please wait"?`, [`ここ を 押《お》す と、 待《ま》って ください。`, `ここ を 押《お》す と、 待《ま》ちましょう。`, `ここ を 押《お》したら、 待《ま》って ください。`], 2, `A request cannot follow と; たら can introduce one.`],
      [`What does 電源《でんげん》 を 入《い》れない と、 動《うご》きません mean?`, [`It won't work if you switch it on.`, `It won't work unless you switch it on.`, `Please don't switch it on.`], 1, `ない-form + と means "unless, if you don't".`],
      [`Which word means "finally" in a list of steps?`, [`最後《さいご》 に`, `まず`, `次《つぎ》 に`], 0, `まず is "first", 次《つぎ》 に is "next", 最後《さいご》 に is "finally".`],
      [`この 機械《きかい》 ＿ 使《つか》い方《かた》 を 教《おし》えて ください。`, [`を`, `に`, `の`], 2, `使《つか》い方《かた》 is a noun, so the machine is joined to it with の.`]
    ] },

  { id: 'states-pictures', level: 'N4', unit: 'Picture lessons: machines and how things are', after: 'machine-instructions', title: `開《あ》いて います, ついて います, 置《お》いて あります: describing how a room is`, summary: `Describe a room or a picture: what is open or shut, on or off, and what has been put where.`, draft: true,
    body: `<p>Describing a room is something you do on the ward and at home: whether the window is open, whether the light is on, where a patient's things have been put. Japanese describes these states with the verb pairs from <a href="#/lessons/transitive-intransitive">Verb pairs</a>: the が verb (intransitive) + 〜て います for how a thing is now, and the を verb (transitive) + 〜て あります for a state someone has left that way, usually on purpose (see <a href="#/lessons/te-iku-kuru-aru">〜て ある</a>). Look at the picture and describe what you see.</p>
<div class="pic-embed" data-pic="living-room"></div>
<h3>How to make it</h3>
<table><tr><th>が verb (it happens)</th><th>How it is now</th><th>を verb (someone does it)</th><th>Left like this on purpose</th></tr>
<tr><td>開《あ》く open</td><td>開《あ》いて います</td><td>開《あ》ける open</td><td>開《あ》けて あります</td></tr>
<tr><td>閉《し》まる shut</td><td>閉《し》まって います</td><td>閉《し》める shut</td><td>閉《し》めて あります</td></tr>
<tr><td>つく come on</td><td>ついて います</td><td>つける switch on</td><td>つけて あります</td></tr>
<tr><td>消《き》える go off</td><td>消《き》えて います</td><td>消《け》す switch off</td><td>消《け》して あります</td></tr>
<tr><td>入《はい》る go in</td><td>入《はい》って います</td><td>入《い》れる put in</td><td>入《い》れて あります</td></tr>
<tr><td>かかる hang, be locked</td><td>かかって います</td><td>かける hang, lock</td><td>かけて あります</td></tr>
<tr><td>(none)</td><td>(none)</td><td>置《お》く put</td><td>置《お》いて あります</td></tr></table>
<h3>〜て います: how it is now</h3>
<p>With a が verb of change (open, go off, break, fall), 〜て います does not mean "is doing". It means the change has happened and the result is still there.</p>
<p>In the living-room picture: the light is on, the window is shut, the curtains are open.</p>
<div class="ex"><b>部屋《へや》 の 電気《でんき》 が ついて います。</b><span>The light in the room is on.</span></div>
<div class="ex"><b>窓《まど》 が 閉《し》まって います。</b><span>The window is shut.</span></div>
<div class="ex"><b>カーテン が 開《あ》いて います。</b><span>The curtains are open.</span></div>
<div class="ex"><b>床《ゆか》 に 何《なに》 か 落《お》ちて います よ。</b><span>There's something on the floor. (Something has fallen.)</span></div>
<h3>〜て あります: someone left it like this</h3>
<p>With a を verb, 〜て あります says that someone did it and the result is there, usually for a reason. Who did it is not said. The thing is usually marked with が (窓《まど》 が 開《あ》けて あります); を is also correct (窓《まど》 を 開《あ》けて あります) and puts a little more weight on the preparation someone did. Only a を verb takes 〜て あります: 開《あ》いて あります is wrong.</p>
<div class="ex"><b>壁《かべ》 に カレンダー が かけて あります。</b><span>A calendar has been hung on the wall.</span></div>
<div class="ex"><b>引《ひ》き出《だ》し に タオル が 入《い》れて あります。</b><span>Towels have been put in the drawer.</span></div>
<div class="ex"><b>エアコン が つけて あります から、 部屋《へや》 は 暖《あたた》かい です よ。</b><span>The air conditioner has been switched on, so the room is warm.</span></div>
<h3>Describing a whole picture</h3>
<p>To describe more than one thing, join the states with the て-form: 開《あ》いて いて, ついて いて. In the bedroom picture the curtains are open, the desk lamp is on and the window is shut.</p>
<div class="pic-embed" data-pic="bedroom"></div>
<div class="ex"><b>カーテン が 開《あ》いて いて、 電気《でんき》スタンド が ついて います。</b><span>The curtains are open and the desk lamp is on.</span></div>
<div class="ex"><b>机《つくえ》 の 上《うえ》 に 本《ほん》 と 眼鏡《めがね》 が 置《お》いて あります。</b><span>A book and glasses have been put on the desk.</span></div>
<h3>On the ward</h3>
<div class="ex"><b>ベッド の 横《よこ》 に お水《みず》 が 置《お》いて あります。</b><span>There's water by your bed for you.</span></div>
<div class="ex"><b>窓《まど》 は 少《すこ》し だけ 開《あ》いて います。 寒《さむ》く ありません か。</b><span>The window is open just a little. Aren't you cold?</span></div>
<div class="ex"><b>「隣《となり》 の ベッド の テレビ が ついて いて、 眠《ねむ》れません。」</b><span>"The TV at the next bed is on and I can't sleep."</span></div>
<div class="ex"><b>鍵《かぎ》 が かかって いる か どうか、 何度《なんど》 も 確《たし》かめて しまいます か。</b><span>Do you find yourself checking again and again whether the door is locked?</span></div>
<div class="note"><b>Watch out.</b> Do not mix the pairs. ドア が 開《あ》いて います "the door is open"; 母《はは》 が ドア を 開《あ》けて います "my mother is opening the door" (an action going on); ドア が 開《あ》けて あります "the door has been left open". ドア が 開《あ》けて います and ドア が 開《あ》いて あります are wrong. 置《お》く has no が partner, so a thing someone put somewhere is 置《お》いて あります. Mind the two readings of the same kanji: 消《き》える (go off) and 消《け》す (switch off).</div>`,
    quiz: [
      [`窓《まど》 が ＿。 "The window is open."`, [`開《あ》いて います`, `開《あ》けて います`, `開《あ》いて あります`], 0, `The が verb 開《あ》く + 〜て います gives the state now.`],
      [`机《つくえ》 の 上《うえ》 に ペン が ＿。 "A pen has been put on the desk."`, [`置《お》いて います`, `置《お》いて あります`, `置《お》きて います`], 1, `置《お》く is a を verb, so its left-on-purpose state is 置《お》いて あります.`],
      [`What does 電気《でんき》 が 消《き》えて います mean?`, [`Someone is switching the light off.`, `The light will go off soon.`, `The light is off.`], 2, `消《き》える + 〜て います is the state after the change: it is off.`],
      [`Which describes an action going on now?`, [`ドア が 閉《し》まって います。`, `母《はは》 が ドア を 閉《し》めて います。`, `ドア が 閉《し》めて あります。`], 1, `A を verb + 〜て います with a person doing it is an action in progress.`],
      [`ドア に 鍵《かぎ》 ＿ かかって います。 "The door is locked."`, [`が`, `を`, `で`], 0, `かかる is a が verb.`],
      [`Which means "The TV is on"?`, [`テレビ が つけて います。`, `テレビ を ついて います。`, `テレビ が ついて います。`], 2, `つく is the が verb; つける would need を and a person.`]
    ] },

  { id: 'explaining-with-pictures', level: 'N4', unit: 'Picture lessons: machines and how things are', after: 'states-pictures', title: `これ は 〜と いう ところ です, この 辺《へん》, 〜に つながって います: explaining with a picture`, summary: `Point at a simple body diagram and say what a part is called, where it is and what it is connected to, and ask where it hurts.`, draft: true,
    body: `<p>A picture helps a patient understand. When a patient asks where the stomach is or what the lungs do, you can point at a simple diagram and explain in a few words. This lesson gives the frames: これ は 〜と いう ところ です (naming a part), この 辺《へん》 and 〜の ところ (around here, the area of), こう やって (like this) and 〜に つながって います (is connected to). Keep the explanation to what the part is and where it is: plain facts, in short sentences.</p>
<div class="pic-embed" data-pic="inside"></div>
<h3>How to make it</h3>
<table><tr><th>Frame</th><th>Job</th><th>Example</th></tr>
<tr><td>これ は 〜と いう ところ です</td><td>naming a part</td><td>これ は 肝臓《かんぞう》 と いう ところ です。</td></tr>
<tr><td>〜は 〜に あります</td><td>where it is</td><td>心臓《しんぞう》 は 胸《むね》 に あります。</td></tr>
<tr><td>この 辺《へん》</td><td>around here (not an exact spot)</td><td>この 辺《へん》 です か。</td></tr>
<tr><td>noun + の ところ</td><td>the area of, around</td><td>胃《い》 の ところ</td></tr>
<tr><td>こう やって</td><td>like this (while you show it)</td><td>こう やって 吸《す》って ください。</td></tr>
<tr><td>〜に つながって います</td><td>is connected to, leads to</td><td>胃《い》 は 腸《ちょう》 に つながって います。</td></tr></table>
<h3>これ は 〜と いう ところ です: naming a part</h3>
<p>と いう ("called", from <a href="#/lessons/to-iu-n4">と いう</a>) introduces a word the listener may not know. ところ here means "part, place". Doctors also say 臓器《ぞうき》 (organ), but ところ is easier for a patient.</p>
<div class="ex"><b>これ は 肝臓《かんぞう》 と いう ところ です。</b><span>This is a part called the liver.</span></div>
<div class="ex"><b>肝臓《かんぞう》 は お腹《なか》 の 右《みぎ》 の 上《うえ》 の 方《ほう》 に あります。</b><span>The liver is in the upper right part of the belly.</span></div>
<div class="ex"><b>これ は 心臓《しんぞう》 です。 胸《むね》 の 真《ま》ん中《なか》 より 少《すこ》し 左《ひだり》 に あります。</b><span>This is the heart. It is a little to the left of the middle of the chest.</span></div>
<div class="ex"><b>脳《のう》 は 頭《あたま》 の 中《なか》 に あります。 考《かんが》えたり 覚《おぼ》えたり する ところ です。</b><span>The brain is inside the head. It is the part that thinks and remembers.</span></div>
<h3>〜に つながって います: how parts connect</h3>
<p>つながる (be connected, lead to) is a が verb, so 〜て います gives the state, as in <a href="#/lessons/states-pictures">the last lesson</a>. The place it leads to takes に.</p>
<div class="ex"><b>食道《しょくどう》 は のど から 胃《い》 に つながって います。</b><span>The oesophagus goes from the throat to the stomach.</span></div>
<div class="ex"><b>胃《い》 は 腸《ちょう》 に つながって います。</b><span>The stomach leads into the intestines.</span></div>
<h3>この 辺《へん》 and 〜の ところ: around here</h3>
<p>この 辺《へん》 means "around here", a little less exact than ここ. It helps when a patient cannot say exactly where the pain is. Noun + の ところ means "around the X, at the X".</p>
<div class="ex"><b>痛《いた》い の は この 辺《へん》 です か。</b><span>Is it around here that it hurts?</span></div>
<div class="ex"><b>「胃《い》 の ところ が ずっと 痛《いた》い ん です。」</b><span>"It keeps hurting around my stomach."</span></div>
<div class="ex"><b>「おへそ の 上《うえ》 の ところ です。」</b><span>"It's just above the belly button."</span></div>
<h3>こう やって: like this</h3>
<p>こう やって (like this, this way) goes with a gesture. Show the action and ask the patient to copy it.</p>
<div class="ex"><b>こう やって、 ゆっくり 息《いき》 を 吸《す》って ください。</b><span>Breathe in slowly, like this.</span></div>
<div class="ex"><b>こう やって 押《お》す と、 痛《いた》い です か。</b><span>Does it hurt when I press like this?</span></div>
<h3>On the ward: checking understanding</h3>
<div class="pic-embed" data-pic="body-front"></div>
<div class="ex"><b>不安《ふあん》 な とき は、 胸《むね》 が ドキドキ する こと が あります。</b><span>When you feel anxious, your heart can pound.</span></div>
<div class="ex"><b>絵《え》 で 見《み》る と、 わかりやすい です ね。</b><span>It's easier to understand with a picture, isn't it.</span></div>
<div class="ex"><b>何《なに》 か わからない ところ は あります か。</b><span>Is there anything you didn't understand?</span></div>
<div class="note"><b>Watch out.</b> つながる takes に for where it leads: 胃《い》 は 腸《ちょう》 に つながって います, not 腸《ちょう》 を. と いう comes straight after the name: 肝臓《かんぞう》 と いう ところ. Keep a picture explanation simple: say what the part is and where it is, then check with わからない ところ は あります か. Questions about treatment belong to the full consultation.</div>`,
    quiz: [
      [`これ は 肝臓《かんぞう》 ＿ いう ところ です。`, [`と`, `を`, `に`], 0, `"Called" is と いう, straight after the name.`],
      [`Which means "around here" (not an exact spot)?`, [`ここ だけ`, `この 辺《へん》`, `この 間《あいだ》`], 1, `この 辺《へん》 is "around here"; ここ だけ is "only here" and この 間《あいだ》 is "the other day".`],
      [`食道《しょくどう》 は 胃《い》 ＿ つながって います。`, [`を`, `で`, `に`], 2, `つながる marks where it leads with に.`],
      [`A patient says 「胃《い》 の ところ が 痛《いた》い です。」 What does she mean?`, [`It hurts around my chest.`, `It hurts around my stomach.`, `It hurts all over.`], 1, `胃《い》 is the stomach, and の ところ means "around, at".`],
      [`What does こう やって 息《いき》 を 吸《す》って ください mean?`, [`Breathe in like this.`, `Breathe in here.`, `Stop breathing for a moment.`], 0, `こう やって is "like this", said while showing the action.`],
      [`Which is natural for "Is it around here that it hurts?"`, [`痛《いた》い は この 辺《へん》 です か。`, `痛《いた》い の は この 辺《へん》 を です か。`, `痛《いた》い の は この 辺《へん》 です か。`], 2, `痛《いた》い の は makes "the hurting" the topic, and です needs no を before it.`]
    ] },

  { id: 'review-n4-pictures', level: 'N4', unit: 'Picture lessons: machines and how things are', after: 'explaining-with-pictures', review: true, title: `Review: Picture lessons: machines and how things are`, summary: `Gather and test 〜と and 〜ない と with machines, 〜方《かた》 and step words, states with 〜て います and 〜て あります, and explaining with a body picture.`, draft: true,
    body: `<p>This review gathers the three picture lessons of the unit. Read the table, check the "Watch out" list, then try the quiz.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>dictionary form + と</td><td>do this and that happens</td><td>この ボタン を 押《お》す と、 電源《でんげん》 が 入《はい》ります。</td></tr>
<tr><td>ない-form + と</td><td>unless, if you don't</td><td>ふた を 閉《し》めない と、 始《はじ》まりません。</td></tr>
<tr><td>ます-stem + 方《かた》</td><td>how to</td><td>この 機械《きかい》 の 使《つか》い方《かた》 を 教《おし》えて ください。</td></tr>
<tr><td>まず, 次《つぎ》 に, それから, 最後《さいご》 に</td><td>steps in order</td><td>まず、 椅子《いす》 に 座《すわ》って ください。</td></tr>
<tr><td>が verb + 〜て います</td><td>how it is now</td><td>窓《まど》 が 開《あ》いて います。</td></tr>
<tr><td>を verb + 〜て あります</td><td>left like this on purpose</td><td>ベッド の 横《よこ》 に お水《みず》 が 置《お》いて あります。</td></tr>
<tr><td>これ は 〜と いう ところ です</td><td>naming a part</td><td>これ は 肝臓《かんぞう》 と いう ところ です。</td></tr>
<tr><td>この 辺《へん》, noun + の ところ</td><td>around here, around the X</td><td>胃《い》 の ところ が 痛《いた》い です。</td></tr>
<tr><td>こう やって</td><td>like this</td><td>こう やって 息《いき》 を 吸《す》って ください。</td></tr>
<tr><td>〜に つながって います</td><td>is connected to</td><td>胃《い》 は 腸《ちょう》 に つながって います。</td></tr></table>
<h3>Watch out</h3>
<ul><li>No request after と: ボタン を 押《お》したら、 待《ま》って ください, not 押《お》す と、 待《ま》って ください.</li>
<li>〜方《かた》 makes a noun, so を becomes の: 切符《きっぷ》 の 買《か》い方《かた》.</li>
<li>開《あ》いて います is a state, 開《あ》けて います is someone doing it, 開《あ》けて あります is a state left on purpose.</li>
<li>Two readings of the same kanji: 電気《でんき》 が 消《き》える (goes off), 電気《でんき》 を 消《け》す (switch off).</li>
<li>つながる takes に: 腸《ちょう》 に つながって います.</li></ul>
<h3>Patterns together</h3>
<div class="ex"><b>ここ を 押《お》す と、 部屋《へや》 の 電気《でんき》 が つきます。</b><span>Press here and the room light comes on.</span></div>
<div class="ex"><b>電気《でんき》 が 消《き》えて います から、 この スイッチ を 押《お》して ください。</b><span>The light is off, so please press this switch.</span></div>
<div class="ex"><b>テレビ の つけ方《かた》 を 教《おし》えましょう か。</b><span>Shall I show you how to turn on the TV?</span></div>
<div class="ex"><b>まず、 ふた を 開《あ》けて ください。 中《なか》 に 説明書《せつめいしょ》 が 入《い》れて あります。</b><span>First, open the lid. The instructions have been put inside.</span></div>
<div class="ex"><b>これ は 胃《い》 と いう ところ です。 食道《しょくどう》 に つながって います。</b><span>This is a part called the stomach. It is connected to the oesophagus.</span></div>
<div class="ex"><b>この 辺《へん》 を こう やって 押《お》す と、 痛《いた》い です か。</b><span>Does it hurt when I press around here like this?</span></div>`,
    quiz: [
      [`右《みぎ》 に 回《まわ》す ＿、 音《おと》 が 大《おお》きく なります。`, [`で`, `と`, `を`], 1, `Dictionary form + と: turn it, and the sound gets louder.`],
      [`Which is natural for "After you press the button, please wait a little"?`, [`ボタン を 押《お》したら、 少《すこ》し 待《ま》って ください。`, `ボタン を 押《お》す と、 少《すこ》し 待《ま》って ください。`, `ボタン を 押《お》す と、 少《すこ》し 待《ま》ちたい です。`], 0, `A request or wish cannot follow と; たら is used instead.`],
      [`切符《きっぷ》 ＿ 買《か》い方《かた》 が わかりません。`, [`を`, `が`, `の`], 2, `買《か》い方《かた》 is a noun, so the ticket joins it with の.`],
      [`Which means "how to read"?`, [`読《よ》み方《かた》`, `読《よ》む 方《かた》`, `読《よ》んで 方《かた》`], 0, `方《かた》 follows the ます-stem: 読《よ》み + 方《かた》.`],
      [`What does ふた を 閉《し》めない と、 始《はじ》まりません mean?`, [`Don't close the lid until it starts.`, `It won't start unless you close the lid.`, `Close the lid after it starts.`], 1, `ない-form + と is "unless", followed by what will not happen.`],
      [`電気《でんき》 が ＿。 "The light is on."`, [`つけて います`, `ついて あります`, `ついて います`], 2, `つく is the が verb, and its state now is ついて います.`],
      [`A nurse says water has been put by your bed for you: ベッド の 横《よこ》 に お水《みず》 が ＿。`, [`置《お》いて あります`, `置《お》いて います`, `置《お》きます`], 0, `Something put there on purpose is 置《お》いて あります.`],
      [`Which means "The door has been left open (on purpose)"?`, [`ドア が 開《あ》いて いました。`, `ドア が 開《あ》けて あります。`, `ドア を 開《あ》けて います。`], 1, `A を verb + 〜て あります is a state someone left on purpose.`],
      [`電気《でんき》 を ＿ ください。 "Please switch off the light."`, [`消《き》えて`, `つけて`, `消《け》して`], 2, `Switching off is the を verb 消《け》す; 消《き》える is "go off" by itself.`],
      [`胃《い》 は 腸《ちょう》 ＿ つながって います。`, [`に`, `を`, `が`], 0, `つながる marks where it leads with に.`],
      [`Which asks the patient to copy what you show?`, [`ここ に 座《すわ》って ください。`, `この 辺《へん》 です か。`, `こう やって 腕《うで》 を 上《あ》げて ください。`], 2, `こう やって means "like this", said while showing the action.`],
      [`これ は 脳《のう》 ＿ いう ところ です。`, [`の`, `と`, `で`], 1, `"Called" is と いう.`]
    ] }
);
