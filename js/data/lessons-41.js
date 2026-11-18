/* Lessons part 41 (0.26.0): N2 unit reviews: review-n2-change, review-n2-scope, review-n2-viewpoint, review-n2-reasons.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level, unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus: after: '<lesson id>' (the unit's last lesson; read by js/data/lessons-zz-order.js) and review: true
   (a unit review: title "Review: <unit>", level and unit of its unit, short recap body, quiz of exactly 12).
   Examples in the body: <div class="ex"><b>JA</b><span>EN</span></div>.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  { id: 'review-n2-change', level: 'N2', unit: 'Change and progress', review: true, after: 'n2-ue-de', title: `Review: Change and progress`, summary: `Check how to link two changes, describe a change still under way or steadily getting worse, and say what follows a step or a long process, each in its register.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-ni-tsurete">as one thing changes, so does another</a>, <a href="#/lessons/n2-tsutsu">〜つつ and 〜一方《いっぽう》 だ</a> and <a href="#/lessons/n2-ue-de">after doing, after long effort</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜に つれて / 〜に したがって</td><td>as A changes, B changes (したがって is more formal): say</td><td>練習《れんしゅう》 を 重《かさ》ねる に つれて、 緊張《きんちょう》 は 減《へ》って いきます。</td></tr>
<tr><td>〜と ともに</td><td>along with; together with; written: understand, use in notes</td><td>睡眠《すいみん》 の 改善《かいぜん》 と ともに、 日中《にっちゅう》 の 眠気《ねむけ》 も 減《へ》った。</td></tr>
<tr><td>〜に 伴《ともな》い</td><td>owing to; as A changes; written (notices): understand</td><td>移転《いてん》 に 伴《ともな》い、 電話番号《でんわばんごう》 が 変《か》わります。</td></tr>
<tr><td>〜つつ / 〜つつ も</td><td>while (one subject); although I know; written: understand</td><td>体《からだ》 に 悪《わる》い と 知《し》りつつ も、 つい 夜《よる》 遅《おそ》く まで 起《お》きて しまう。</td></tr>
<tr><td>〜つつ ある</td><td>a change under way; charts, formal speech</td><td>食欲《しょくよく》 は 少《すこ》し ずつ 戻《もど》りつつ ある。</td></tr>
<tr><td>〜一方《いっぽう》 だ</td><td>keeps going one way, usually worse; spoken and written: say</td><td>家事《かじ》 の 負担《ふたん》 が 増《ふ》える 一方《いっぽう》 です。</td></tr>
<tr><td>〜た 上《うえ》 で</td><td>after A, and based on it; formal spoken: say</td><td>予定《よてい》 を 確認《かくにん》 した 上《うえ》 で、 ご連絡《れんらく》 します。</td></tr>
<tr><td>dictionary form + 上《うえ》 で</td><td>in doing; formal spoken: say</td><td>一人暮《ひとりぐ》らし を 続《つづ》ける 上《うえ》 で、 困《こま》って いる こと は あります か。</td></tr>
<tr><td>〜た 末《すえ》 (に)</td><td>after a long process, any result; formal: say</td><td>半年《はんとし》 迷《まよ》った 末《すえ》、 転職《てんしょく》 を 決《き》めました。</td></tr>
<tr><td>〜た あげく</td><td>in the end, and it went badly; spoken: mainly understand</td><td>一時間《いちじかん》 並《なら》んだ あげく、 売《う》り切《き》れ でした。</td></tr></table>
<h3>Watch out</h3>
<ul><li>に つれて and に したがって need a change on both sides. For one single event, use と or たび に.</li>
<li>Sentence-final 一方《いっぽう》 だ is "keeps getting more"; 一方《いっぽう》 (で) in mid-sentence is "whereas". つつ ある only goes with verbs of change.</li>
<li>The form decides 上《うえ》 で: た-form is "after" (聞《き》いた 上《うえ》 で), dictionary form is "in doing" (続《つづ》ける 上《うえ》 で).</li>
<li>末《すえ》 can end well or badly; あげく only badly, and it judges: not about a patient's choices.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>外出《がいしゅつ》 の 予定《よてい》 は ご家族《かぞく》 と 相談《そうだん》 した 上《うえ》 で 決《き》めましょう。 回復《かいふく》 に つれて、 出《で》られる 時間《じかん》 も 増《ふ》えて いきます。</b><span>Let's plan outings after talking with your family. As you recover, your time out will grow.</span></div>
<div class="ex"><b>気分《きぶん》 は 改善《かいぜん》 しつつ ある が、 不眠《ふみん》 は 悪化《あっか》 する 一方《いっぽう》 で ある。</b><span>Mood is improving, but insomnia keeps getting worse. (chart note)</span></div>
<div class="ex"><b>休《やす》む べき だ と 思《おも》いつつ も、 仕事《しごと》 が たまる 一方《いっぽう》 な ので、 つい 残業《ざんぎょう》 して しまいます。</b><span>I know I should rest, but the work just keeps piling up, so I end up doing overtime.</span></div>
<div class="ex"><b>年齢《ねんれい》 と ともに 体力《たいりょく》 は 落《お》ちます が、 運動《うんどう》 を 続《つづ》ける 上《うえ》 で 大切《たいせつ》 な の は 無理《むり》 を しない こと です。</b><span>Strength falls with age, but in keeping up exercise what matters is not overdoing it.</span></div>
<div class="ex"><b>姉《あね》 は 努力《どりょく》 の 末《すえ》 に 合格《ごうかく》 した が、 兄《あに》 は 迷《まよ》った あげく 受験《じゅけん》 しなかった。</b><span>My sister passed after long effort; my brother dithered and in the end never sat the exam.</span></div>
<div class="note">Say に つれて; read と ともに and に 伴《ともな》い. Under way: つつ ある; steadily worse: 一方《いっぽう》 だ. After a step: た 上《うえ》 で; after a long road: 末《すえ》, or あげく for a bad end.</div>`,
    quiz: [
      [`仕事《しごと》 に 慣《な》れる ＿、 朝《あさ》 の 緊張《きんちょう》 が 減《へ》って きました。`, [`に つれて`, `上《うえ》 で`, `あげく`], 0, `Two gradual changes moving together take に つれて.`],
      [`Chart note, "anxiety is gradually easing": 不安《ふあん》 は 少《すこ》し ずつ ＿。`, [`和《やわ》らぎつつ も`, `和《やわ》らいだ あげく`, `和《やわ》らぎつつ ある`], 2, `A change under way is stem + つつ ある; つつ も needs a second clause, and あげく a bad end.`],
      [`Which sentence says that the number of people waiting just keeps growing?`, [`待《ま》つ 人《ひと》 は 増《ふ》えつつ も あります。`, `待《ま》つ 人《ひと》 は 増《ふ》える 一方《いっぽう》 です。`, `待《ま》つ 人《ひと》 が 増《ふ》える 一方《いっぽう》 で、 減《へ》って います。`], 1, `Sentence-final 一方《いっぽう》 です is "keeps going one way"; mid-sentence 一方《いっぽう》 で contrasts.`],
      [`How do you ask a patient to decide after reading the leaflet?`, [`この 説明書《せつめいしょ》 を 読《よ》んだ 上《うえ》 で、 決《き》めて ください。`, `この 説明書《せつめいしょ》 を 読《よ》む 上《うえ》 で、 決《き》めて ください。`, `この 説明書《せつめいしょ》 を 読《よ》んだ あげく、 決《き》めて ください。`], 0, `た-form + 上《うえ》 で is "after, based on it"; the dictionary form means "in doing", and あげく is for a bad end.`],
      [`何年《なんねん》 も 治療《ちりょう》 を 続《つづ》けた ＿、 ようやく 仕事《しごと》 に 戻《もど》れました。`, [`あげく`, `つつ`, `末《すえ》 に`], 2, `A long process with a good result takes 末《すえ》 に; あげく is only for a bad end.`],
      [`あちこち 探《さが》し回《まわ》った ＿、 結局《けっきょく》 鍵《かぎ》 は 見《み》つかりません でした。`, [`上《うえ》 で`, `あげく`, `一方《いっぽう》`], 1, `A long search with an unwanted end takes あげく; た 上《うえ》 で leads to a step based on A, and mid-sentence 一方《いっぽう》 would set up a contrast that is not there.`],
      [`A notice reads 病棟《びょうとう》 の 改修《かいしゅう》 に 伴《ともな》い、 売店《ばいてん》 は 一階《いっかい》 に 移《うつ》ります。 It means:`, [`Owing to the ward renovation, the shop is moving to the ground floor.`, `As the shop moves, the ward will be renovated.`, `Together with the ward staff, the shop is moving downstairs.`], 0, `On a notice, 〜に 伴《ともな》い gives the event that causes the change.`],
      [`Which sentence is natural?`, [`ご家族《かぞく》 に つれて、 退院《たいいん》 の 準備《じゅんび》 を 進《すす》めましょう。`, `ご家族《かぞく》 に 伴《ともな》って、 退院《たいいん》 の 準備《じゅんび》 を 進《すす》めましょう。`, `ご家族《かぞく》 と ともに、 退院《たいいん》 の 準備《じゅんび》 を 進《すす》めましょう。`], 2, `With a person, "together with" is と ともに; に つれて and に 伴《ともな》って need a change or an event.`],
      [`You want to say to a patient "Let's talk while we walk". Which is the natural spoken choice?`, [`歩《ある》きつつ 話《はな》しましょう。`, `歩《ある》きながら 話《はな》しましょう。`, `歩《ある》く 一方《いっぽう》 話《はな》しましょう。`], 1, `つつ is the written "while"; in conversation say ながら.`],
      [`仕事《しごと》 を 休《やす》む 上《うえ》 で 必要《ひつよう》 な 書類《しょるい》 means:`, [`the papers you need after you have taken time off`, `the papers that matter more than time off`, `the papers you need in taking time off`], 2, `Dictionary form + 上《うえ》 で means "in doing"; "after" would be 休《やす》んだ 上《うえ》 で.`],
      [`娘《むすめ》 は 心配《しんぱい》 を かける と 知《し》りつつ も、 誰《だれ》 に も 相談《そうだん》 できなかった そう です means:`, [`Although she knew it would worry people, she apparently couldn't talk to anyone.`, `While she was learning about worry, she apparently talked to everyone.`, `Because she knew it would worry people, she apparently chose to talk to no one.`], 0, `〜つつ も is "although": knowing A, the person still does B.`],
      [`A form says ご確認《かくにん》 の 上《うえ》、 ご返送《へんそう》 ください。 It means:`, [`Please return it while checking it.`, `Please check it and then return it.`, `Please return it before you check it.`], 1, `Noun + の 上《うえ》 is the written "after doing": check first, then return.`]
    ] },

  { id: 'review-n2-scope', level: 'N2', unit: 'Scope and range', review: true, after: 'n2-wo-hajime', title: `Review: Scope and range`, summary: `Check how to widen or narrow a statement, add a stronger second point, and set its edges: including, centred on, regardless of, from … through.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-ni-kagirazu">〜に 限《かぎ》らず and 〜限《かぎ》り</a>, <a href="#/lessons/n2-bakari-ka">not only … but also</a> and <a href="#/lessons/n2-wo-hajime">including, regardless of, from … through</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>N に 限《かぎ》らず</td><td>not only N (wider); spoken and written: say</td><td>子供《こども》 に 限《かぎ》らず、 大人《おとな》 に も 人気《にんき》 です。</td></tr>
<tr><td>N に 限《かぎ》って</td><td>of all times or people; spoken: say, hear</td><td>傘《かさ》 を 忘《わす》れた 日《ひ》 に 限《かぎ》って、 雨《あめ》 が 降《ふ》る。</td></tr>
<tr><td>N に 限《かぎ》り / に 限《かぎ》ります</td><td>only; written (notices): understand</td><td>面会《めんかい》 は 午後《ごご》 に 限《かぎ》ります。</td></tr>
<tr><td>V 限《かぎ》り / 〜ない 限《かぎ》り</td><td>as long as; unless; formal spoken: say</td><td>熱《ねつ》 が 出《で》ない 限《かぎ》り、 入浴《にゅうよく》 できます。</td></tr>
<tr><td>〜ばかり か</td><td>not only, but even (no request after it): understand</td><td>熱《ねつ》 が 下《さ》がらない ばかり か、 咳《せき》 も ひどく なった。</td></tr>
<tr><td>〜ばかり で なく</td><td>not only (neutral; a request may follow): say</td><td>手洗《てあら》い ばかり で なく、 うがい も して ください。</td></tr>
<tr><td>は もちろん / のみ ならず / は もとより</td><td>A of course, and B too: say は もちろん; the other two are written: understand</td><td>本人《ほんにん》 のみ ならず、 家族《かぞく》 の 負担《ふたん》 も 大《おお》きい。</td></tr>
<tr><td>N を はじめ</td><td>including, N above all; formal: understand</td><td>院長《いんちょう》 を はじめ、 多《おお》く の 職員《しょくいん》 が 参加《さんか》 しました。</td></tr>
<tr><td>N を 中心《ちゅうしん》 に</td><td>centred on: say</td><td>今日《きょう》 は 食事《しょくじ》 の こと を 中心《ちゅうしん》 に 伺《うかが》います。</td></tr>
<tr><td>を 問《と》わず / に かかわらず</td><td>regardless of (を 問《と》わず written; に かかわらず formal)</td><td>結果《けっか》 に かかわらず、 ご連絡《れんらく》 します。</td></tr>
<tr><td>〜も かまわず</td><td>without caring about: understand</td><td>周《まわ》り の 目《め》 も かまわず、 大声《おおごえ》 で 話《はな》し続《つづ》けた。</td></tr>
<tr><td>A から B に かけて</td><td>from … through (a loose span): say</td><td>夕方《ゆうがた》 から 夜《よる》 に かけて、 頭痛《ずつう》 が 強《つよ》く なります。</td></tr></table>
<h3>Watch out</h3>
<ul><li>に 限《かぎ》らず widens, に 限《かぎ》り narrows, に 限《かぎ》って points at one case; all follow a noun. A verb takes 限《かぎ》り directly.</li>
<li>In ばかり か / で なく, ばかり means "not only". After ばかり か, no request.</li>
<li>に かかわらず is "regardless"; に も かかわらず is "despite".</li>
<li>から 〜まで gives exact ends; から 〜に かけて a loose span. を 問《と》わず needs a noun.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>夜《よる》 に 限《かぎ》らず、 朝《あさ》 から 昼《ひる》 に かけて も 不安《ふあん》 が 強《つよ》く なる こと は あります か。</b><span>Does the anxiety get strong from morning to midday too, not only at night?</span></div>
<div class="ex"><b>眠《ねむ》れない ばかり か、 食欲《しょくよく》 も ない ん です ね。 今日《きょう》 は 体調《たいちょう》 を 中心《ちゅうしん》 に 伺《うかが》います。</b><span>So not only can't you sleep, you have no appetite either. Today I'll ask mainly about your physical health.</span></div>
<div class="ex"><b>医師《いし》 を はじめ、 看護師《かんごし》 や 薬剤師《やくざいし》 が、 年齢《ねんれい》 を 問《と》わず ご相談《そうだん》 を お受《う》け します。</b><span>Doctors, nurses, pharmacists and others take questions from all ages. (brochure)</span></div>
<div class="ex"><b>体調《たいちょう》 が 落《お》ち着《つ》いて いる 限《かぎ》り、 散歩《さんぽ》 は もちろん、 短《みじか》い 外出《がいしゅつ》 も 大丈夫《だいじょうぶ》 です。</b><span>As long as you stay well, walks and even short outings are fine.</span></div>
<div class="ex"><b>急《いそ》いで いる 朝《あさ》 に 限《かぎ》って、 子供《こども》 が 人目《ひとめ》 も かまわず 道《みち》 で 泣《な》き出《だ》す ん です。</b><span>It's always on my rushed mornings that my child bursts into tears in the street, not caring who sees.</span></div>
<div class="note">Noun + に 限《かぎ》らず / に 限《かぎ》り / に 限《かぎ》って; verb + 限《かぎ》り: as long as. Say ばかり で なく and は もちろん; read のみ ならず and は もとより.</div>`,
    quiz: [
      [`若《わか》い 人《ひと》 ＿、 高齢者《こうれいしゃ》 に も スマホ を 使《つか》う 人《ひと》 が 増《ふ》えて います。`, [`に 限《かぎ》らず`, `に 限《かぎ》り`, `に 限《かぎ》って`], 0, `"Not only young people, older people too" widens the statement: に 限《かぎ》らず.`],
      [`A sign says 駐輪場《ちゅうりんじょう》 の 利用《りよう》 は 職員《しょくいん》 に 限《かぎ》ります。 It means:`, [`Staff may not use the bicycle park.`, `Only staff may use the bicycle park.`, `Staff, of all people, use the bicycle park.`], 1, `に 限《かぎ》ります on a notice means "is limited to".`],
      [`A mother says うち の 息子《むすこ》 に 限《かぎ》って、 お酒《さけ》 で 問題《もんだい》 を 起《お》こす はず が ありません。 What is she conveying?`, [`that her son drinks only on special days`, `that drinking is a problem not only for her son`, `strong trust that her son, of all people, would not do it`], 2, `に 限《かぎ》って with a denial shows strong trust; hear it as a sign of how hard the news is.`],
      [`医師《いし》 の 許可《きょか》 が ＿ 限《かぎ》り、 外出《がいしゅつ》 は できません。`, [`ない`, `ある`, `あった`], 0, `〜ない 限《かぎ》り is "unless": you cannot go out unless the doctor allows it.`],
      [`Which sentence is natural?`, [`よく 眠《ねむ》る ばかり か、 水分《すいぶん》 も とって ください。`, `よく 眠《ねむ》る ばかり で なく、 水分《すいぶん》 も とって ください。`, `よく 眠《ねむ》る のみ ならず、 水分《すいぶん》 は とって ください。`], 1, `A request can follow ばかり で なく but not ばかり か, and the added point takes も.`],
      [`Which "not only" is formal written style, typical of case reports?`, [`〜ばかり で なく`, `〜は もちろん`, `〜のみ ならず`], 2, `のみ is the written だけ; のみ ならず belongs to reports and papers.`],
      [`日本語《にほんご》 は ＿、 英語《えいご》 も 話《はな》せる スタッフ が います。`, [`もちろん`, `ばかり`, `限《かぎ》らず`], 0, `After noun + は, "of course, and B too" is もちろん.`],
      [`院長《いんちょう》 ＿、 看護部長《かんごぶちょう》 や 事務長《じむちょう》 も 会議《かいぎ》 に 出席《しゅっせき》 しました。`, [`に 限《かぎ》って`, `を はじめ`, `を 問《と》わず`], 1, `The main example of a group, with others after it, is を はじめ; に 限《かぎ》って singles out one case, and を 問《と》わず needs a category such as 年齢《ねんれい》.`],
      [`Meaning "despite": 体調《たいちょう》 が 悪《わる》い ＿、 彼《かれ》 は 仕事《しごと》 に 行《い》った。`, [`に かかわらず`, `を 問《と》わず`, `に も かかわらず`], 2, `"Despite" needs も: に も かかわらず; に かかわらず and を 問《と》わず mean "regardless".`],
      [`A notice gives exact times. Which is right?`, [`受付《うけつけ》 は 九時《くじ》 から 十一時《じゅういちじ》 まで です。`, `受付《うけつけ》 は 九時《くじ》 から 十一時《じゅういちじ》 に かけて です。`, `受付《うけつけ》 は 九時《くじ》 を はじめ 十一時《じゅういちじ》 です。`], 0, `Exact end points take から 〜まで; から 〜に かけて is a loose span.`],
      [`夫《おっと》 は 夜中《よなか》 な の も かまわず、 大《おお》きな 音《おと》 で 音楽《おんがく》 を かける ん です。 The wife is saying her husband:`, [`plays music quietly so as not to wake anyone`, `plays loud music without caring that it is the middle of the night`, `plays music only in the middle of the night`], 1, `〜も かまわず is acting with no regard for something one should mind.`],
      [`Which sentence is natural?`, [`散歩《さんぽ》 する を 問《と》わず、 外《そと》 に 出《で》ましょう。`, `安定《あんてい》 して いる に 限《かぎ》らず、 外泊《がいはく》 できます。`, `性別《せいべつ》 を 問《と》わず、 どなた でも 受診《じゅしん》 できます。`], 2, `を 問《と》わず and に 限《かぎ》らず follow a noun, not a verb.`]
    ] },

  { id: 'review-n2-viewpoint', level: 'N2', unit: 'Viewpoint and basis', review: true, after: 'n2-ni-oite', title: `Review: Viewpoint and basis`, summary: `Check how to name a standpoint or evidence, say what a plan rests on, and read the formal words for "in", "on the occasion of" and "before".`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-kara-miru-to">from the standpoint of</a>, <a href="#/lessons/n2-ni-motozuite">based on, in line with, over</a> and <a href="#/lessons/n2-ni-oite">in, on the occasion of, prior to</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜から 見《み》て / 〜から 言《い》う と</td><td>judging from; speaking from (言《い》う not after a bare person): say</td><td>歩《ある》き方《かた》 から 見《み》て、 膝《ひざ》 が 痛《いた》そう です。</td></tr>
<tr><td>〜から する と / 〜に して みれば</td><td>from their side (not yourself): say</td><td>夫《おっと》 に して みれば、 急《きゅう》 な 転勤《てんきん》 は つらかった でしょう。</td></tr>
<tr><td>N + 上《じょう》</td><td>in terms of; written: understand</td><td>教育上《きょういくじょう》 よくない 番組《ばんぐみ》 だ。</td></tr>
<tr><td>〜に 基《もと》づいて</td><td>based on (grounds): say</td><td>同意《どうい》 に 基《もと》づいて 情報《じょうほう》 を 共有《きょうゆう》 します。</td></tr>
<tr><td>〜を もと に</td><td>using as material: say</td><td>日記《にっき》 を もと に、 睡眠《すいみん》 の 記録《きろく》 を 作《つく》りました。</td></tr>
<tr><td>〜に 沿《そ》って</td><td>in line with, along: say</td><td>リハビリ は 予定《よてい》 に 沿《そ》って 進《すす》めます。</td></tr>
<tr><td>〜に 応《おう》じて</td><td>adjusted as needed; formal: say</td><td>必要《ひつよう》 に 応《おう》じて、 訪問《ほうもん》 看護《かんご》 も 利用《りよう》 できます。</td></tr>
<tr><td>〜に こたえて</td><td>in response to; written: understand</td><td>住民《じゅうみん》 の 声《こえ》 に こたえて、 夜《よる》 の バス が 増《ふ》えた。</td></tr>
<tr><td>〜を めぐって</td><td>over a disputed issue: understand</td><td>介護《かいご》 の 分担《ぶんたん》 を めぐって、 兄弟《きょうだい》 が 対立《たいりつ》 して いる。</td></tr>
<tr><td>〜に おいて / に おける</td><td>formal で (place, field): understand</td><td>地域《ちいき》 に おける 支援《しえん》 の あり方《かた》 を 考《かんが》える。</td></tr>
<tr><td>〜に 際《さい》して</td><td>on the occasion of: understand</td><td>転居《てんきょ》 に 際《さい》し、 届《とど》け を 出《だ》した。</td></tr>
<tr><td>〜に あたって</td><td>as we begin (something important): say</td><td>発表《はっぴょう》 を 始《はじ》める に あたって、 資料《しりょう》 を お配《くば》り します。</td></tr>
<tr><td>〜に 先立《さきだ》って</td><td>prior to: understand</td><td>開会《かいかい》 に 先立《さきだ》ち、 会長《かいちょう》 が 挨拶《あいさつ》 した。</td></tr></table>
<h3>Watch out</h3>
<ul><li>に とって takes a value judgement, not an opinion (use と して); に よる と gives a source.</li>
<li>健康上《けんこうじょう》 is read じょう; 〜た 上《うえ》 で is another pattern.</li>
<li>Plain variation is に よって. を めぐって needs a dispute; else に ついて.</li>
<li>Before a noun: に 基《もと》づいた, に 沿《そ》った, に おける.</li>
<li>際《さい》して, あたって and 先立《さきだ》って need a formal occasion; in daily life say 時《とき》 or 前《まえ》 に.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>結果《けっか》 から 見《み》て 経過《けいか》 は 順調《じゅんちょう》 です ので、 通院《つういん》 の 間隔《かんかく》 は 体調《たいちょう》 に 応《おう》じて 決《き》めましょう。</b><span>Judging from the results you are doing well, so let's set your visits by how you feel.</span></div>
<div class="ex"><b>退院《たいいん》 に あたり、 ご家族《かぞく》 の お話《はなし》 を もと に 生活《せいかつ》 の 計画《けいかく》 を 立《た》てました。</b><span>For the discharge, we drew up a plan for life at home from your family's views.</span></div>
<div class="ex"><b>親《おや》 から する と 当然《とうぜん》 の 心配《しんぱい》 でも、 娘《むすめ》 に して みれば 窮屈《きゅうくつ》 な の でしょう。</b><span>To the parents it is natural worry; to the daughter it probably feels stifling.</span></div>
<div class="ex"><b>地域《ちいき》 医療《いりょう》 に おける 課題《かだい》 を めぐって、 活発《かっぱつ》 な 議論《ぎろん》 が 交《か》わされた。</b><span>There was a lively debate over the problems in community medicine.</span></div>
<div class="ex"><b>出発《しゅっぱつ》 に 先立《さきだ》ち、 安全上《あんぜんじょう》 の 注意《ちゅうい》 が 説明《せつめい》 された。</b><span>Before departure, the safety points were explained.</span></div>
<div class="note">Standpoint: から 見《み》て, から する と, に して みれば. Basis: 基《もと》づいて (grounds), もと に (material), 応《おう》じて (adjusting). に おいて is a formal で; 際《さい》して, あたって and 先立《さきだ》って are for formal events only.</div>`,
    quiz: [
      [`話《はな》し方《かた》 や 表情《ひょうじょう》 ＿、 かなり 落《お》ち込《こ》んで いる よう です。`, [`から 見《み》て`, `に とって`, `に よる と`], 0, `Evidence for your own judgement takes から 見《み》て; に よる と gives a source, and に とって a value judgement.`],
      [`Which sentence gives your own view from your role?`, [`医師《いし》 に とって、 その 治療《ちりょう》 に は 反対《はんたい》 です。`, `医師《いし》 と して、 その 治療《ちりょう》 に は 反対《はんたい》 です。`, `医師《いし》 に よる と、 その 治療《ちりょう》 に は 反対《はんたい》 です。`], 1, `An opinion from a role takes と して; に とって is not followed by an opinion, and に よる と reports a source.`],
      [`母《はは》 に して みれば、 一人《ひとり》 で 病院《びょういん》 に 行《い》く の は 心細《こころぼそ》い の でしょう means:`, [`My mother says going to hospital alone is lonely.`, `If my mother tries, she can go to hospital alone.`, `For my mother, going to hospital alone must feel daunting.`], 2, `〜に して みれば puts the speaker in another person's place.`],
      [`アンケート の 結果《けっか》 ＿、 新《あたら》しい 案内《あんない》 の 冊子《さっし》 を 作《つく》りました。`, [`を もと に`, `を めぐって`, `に 際《さい》して`], 0, `The survey results are the material the booklet was built from: を もと に.`],
      [`母《はは》 の 介護《かいご》 ＿、 兄《あに》 と 何度《なんど》 も 言《い》い争《あらそ》いました。`, [`に 沿《そ》って`, `を めぐって`, `に 応《おう》じて`], 1, `An issue that people argue over takes を めぐって.`],
      [`Which sentence is natural?`, [`人《ひと》 に 応《おう》じて 意見《いけん》 が 違《ちが》います。`, `天気《てんき》 を めぐって 散歩《さんぽ》 します。`, `体力《たいりょく》 に 応《おう》じて 運動《うんどう》 の 量《りょう》 を 変《か》えます。`], 2, `に 応《おう》じて needs something adjusted to fit; plain variation between people is に よって.`],
      [`Before a noun: ご本人《ほんにん》 の ペース ＿ リハビリ を 進《すす》めます。`, [`に 沿《そ》った`, `を 沿《そ》った`, `に 沿《そ》い の`], 0, `Before a noun, the form is に 沿《そ》った.`],
      [`本日《ほんじつ》 の 研修会《けんしゅうかい》 は 三階《さんがい》 の 講堂《こうどう》 ＿ 行《おこな》います。`, [`に 際《さい》して`, `に おいて`, `に あたって`], 1, `The formal で of place is に おいて.`],
      [`Which sentence is natural?`, [`歯《は》 を 磨《みが》く に 際《さい》して、 水《みず》 を 出《だ》します。`, `入院《にゅういん》 に 先立《さきだ》つ、 書類《しょるい》 を お出《だ》し ください。`, `入院《にゅういん》 に 際《さい》して、 診察券《しんさつけん》 を お出《だ》し ください。`], 2, `に 際《さい》して needs a formal occasion, and 先立《さきだ》つ only goes before a noun; to link to a clause use 先立《さきだ》って or 先立《さきだ》ち.`],
      [`Which is the natural formal opening of a consent talk?`, [`検査《けんさ》 を 受《う》けて いただく に あたって、 いくつか ご説明《せつめい》 します。`, `検査《けんさ》 を 受《う》けて いただいた に あたって、 いくつか ご説明《せつめい》 します。`, `検査《けんさ》 を 受《う》けて いただく に おいて、 いくつか ご説明《せつめい》 します。`], 0, `に あたって follows the dictionary form before something important begins; に おいて marks a place or field.`],
      [`Which pattern means strictly "before", not "at the time of"?`, [`〜に 際《さい》して`, `〜に 先立《さきだ》って`, `〜に おいて`], 1, `に 先立《さきだ》って is "prior to"; に 際《さい》して is at the time of the event itself.`],
      [`A referral letter says 外来《がいらい》 通院《つういん》 は 仕事上《しごとじょう》 の 都合《つごう》 で 中断《ちゅうだん》 して いた。 It means:`, [`Clinic visits had stopped so that he could look for work.`, `Clinic visits were about problems at work.`, `Clinic visits had been interrupted for work reasons.`], 2, `Noun + 上《じょう》 の 都合《つごう》 is the written "for reasons of".`]
    ] },

  { id: 'review-n2-reasons', level: 'N2', unit: 'Reasons and results', review: true, after: 'n2-amari', title: `Review: Reasons and results`, summary: `Check how to stress a reason, state resolve, hear the feeling inside a reason, and report causes, evidence and results in the right register.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-kara-koso">precisely because, now that</a>, <a href="#/lessons/n2-kara-ni-wa">now that, just because, you see</a> and <a href="#/lessons/n2-amari">out of too much, as a result</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜から こそ</td><td>precisely because (never ので こそ): say</td><td>信頼《しんらい》 して いる から こそ、 本音《ほんね》 が 言《い》える。</td></tr>
<tr><td>〜だけ に</td><td>all the more because: say</td><td>楽《たの》しみ に して いた だけ に、 中止《ちゅうし》 は 残念《ざんねん》 です。</td></tr>
<tr><td>〜だけ あって</td><td>as you would expect of (praise): say</td><td>元《もと》 料理人《りょうりにん》 だけ あって、 盛《も》り付《つ》け が きれい です。</td></tr>
<tr><td>〜以上《いじょう》 (は) / 〜上《うえ》 は</td><td>now that (resolve); 上《うえ》 は is written: understand</td><td>引《ひ》き受《う》けた 以上《いじょう》、 期限《きげん》 は 守《まも》ります。</td></tr>
<tr><td>〜から に は</td><td>now that, so I will; spoken: say</td><td>始《はじ》めた から に は、 続《つづ》けます。</td></tr>
<tr><td>〜ばかり に</td><td>just because (regret): understand, notice</td><td>無理《むり》 を した ばかり に、 かえって 長引《ながび》いた。</td></tr>
<tr><td>〜もの だから</td><td>you see (an excuse): understand</td><td>初《はじ》めて の 場所《ばしょ》 な もの です から、 迷《まよ》って しまって。</td></tr>
<tr><td>〜の だから / ん です から</td><td>since (a known fact): a push; say it gently</td><td>熱《ねつ》 が ある ん です から、 今日《きょう》 は 休《やす》みましょう。</td></tr>
<tr><td>〜あまり / N の あまり</td><td>out of too much (feeling): say</td><td>喜《よろこ》び の あまり、 泣《な》いて しまった。</td></tr>
<tr><td>〜こと から</td><td>from the fact that (evidence); formal: use in presentations</td><td>発熱《はつねつ》 が 続《つづ》く こと から、 感染《かんせん》 が 疑《うたが》われた。</td></tr>
<tr><td>〜た 結果《けっか》</td><td>as a result: say</td><td>生活《せいかつ》 を 見直《みなお》した 結果《けっか》、 よく 眠《ねむ》れる よう に なった。</td></tr>
<tr><td>N に つき</td><td>owing to (notices): understand</td><td>改装中《かいそうちゅう》 に つき、 休業《きゅうぎょう》 いたします。</td></tr></table>
<h3>Watch out</h3>
<ul><li>だけ に: any feeling, often disappointment; だけ あって: praise only.</li>
<li>以上《いじょう》 and から に は need will, duty or a firm conclusion after them.</li>
<li>ばかり に: one small cause, with regret; せい で blames a cause; 〜た ばかり is "have just done".</li>
<li>No request after もの だから or あまり (use ので); こと から is not for everyday reasons.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>真面目《まじめ》 な 方《かた》 だけ に、 心配《しんぱい》 の あまり 眠《ねむ》れなく なった の でしょう。</b><span>Being so conscientious, she probably worried so much she could not sleep.</span></div>
<div class="ex"><b>続《つづ》けて きた から こそ 今《いま》 が ある ん です。 ここ まで 来《き》た 以上《いじょう》、 もう 少《すこ》し 頑張《がんば》りましょう。</b><span>You are here precisely because you kept going. Now that you have come this far, let's keep at it a little longer.</span></div>
<div class="ex"><b>確認《かくにん》 を 一回《いっかい》 省《はぶ》いた ばかり に、 大《おお》きな ミス に なりました。 急《いそ》いで いた もの です から。</b><span>Just because I skipped one check, it became a big mistake. I was in a hurry, you see.</span></div>
<div class="ex"><b>朝《あさ》 の 頭痛《ずつう》 が 多《おお》い こと から 睡眠《すいみん》 を 調《しら》べた 結果《けっか》、 無呼吸《むこきゅう》 が 見《み》つかった。</b><span>As morning headaches were frequent, sleep was studied, and apnoea was found. (chart note)</span></div>
<div class="ex"><b>「子供《こども》 じゃ ない ん だから」 と いう お母《かあ》さん の 言葉《ことば》 も、 心配《しんぱい》 だ から こそ でしょう ね。</b><span>Even your mother's "You're not a child now" probably comes precisely from worry.</span></div>
<div class="note">Stress: から こそ, だけ に, だけ あって. Resolve: 以上《いじょう》, から に は. The feeling in a reason: ばかり に (regret), もの だから (excuse), の だから (a push). に つき: notices only.</div>`,
    quiz: [
      [`長年《ながねん》 勤《つと》めた 会社《かいしゃ》 だった ＿、 退職《たいしょく》 は 寂《さび》しかった です。`, [`だけ に`, `だけ あって`, `から に は`], 0, `A feeling made all the stronger by the background takes だけ に; だけ あって is praise, and から に は needs resolve.`],
      [`さすが 十年《じゅうねん》 も 練習《れんしゅう》 して きた ＿、 演奏《えんそう》 は 見事《みごと》 でした。`, [`ばかり に`, `だけ あって`, `もの だから`], 1, `A result that lives up to someone's effort, with さすが, is だけ あって.`],
      [`Which sentence is natural?`, [`契約《けいやく》 した 以上《いじょう》、 守《まも》る か どう か 分《わ》かりません。`, `入院《にゅういん》 した から に は、 退屈《たいくつ》 でした。`, `申《もう》し込《こ》んだ 以上《いじょう》、 必《かなら》ず 出席《しゅっせき》 します。`], 2, `以上《いじょう》 and から に は are followed by will or a firm conclusion, not doubt or a plain report.`],
      [`A daughter says 私《わたし》 が 薬《くすり》 の 管理《かんり》 を 父《ちち》 に 任《まか》せた ばかり に、 飲《の》み忘《わす》れ が 増《ふ》えて しまった。 What does she feel?`, [`regret and self-blame over one small cause`, `relief that her father has just started managing his medicine`, `annoyance that her father blames her`], 0, `ばかり に marks one small cause of a bad result, with regret; listen for self-blame.`],
      [`つらい 経験《けいけん》 を した ＿、 人《ひと》 の 痛《いた》み が 分《わ》かる の です。`, [`ばかり に`, `から こそ`, `上《うえ》 は`], 1, `Stressing the real, here positive, reason is から こそ; ばかり に needs a regretted result, and 上《うえ》 は needs resolve after it.`],
      [`疲《つか》れて いる ん です から、 今日《きょう》 は 早《はや》め に 休《やす》みましょう。 What does ん です から add?`, [`an excuse for something that went wrong`, `regret about one small cause`, `a reason the listener already accepts, followed by advice`], 2, `の だから gives a fact both people accept, then a judgement or advice; say it gently.`],
      [`試験《しけん》 に 受《う》かった 嬉《うれ》しさ ＿、 思《おも》わず 泣《な》いて しまいました。`, [`の あまり`, `の 結果《けっか》`, `に つき`], 0, `Too much of a feeling causing a result is noun + の あまり.`],
      [`不安《ふあん》 の あまり、 何度《なんど》 も 確認《かくにん》 して しまいます means (compare あまり 確認《かくにん》 しません, "I don't check much"):`, [`I don't check things very much.`, `I'm so anxious that I end up checking again and again.`, `I check too much, so I don't feel anxious.`], 1, `Noun + の あまり is "out of too much"; あまり + negative is "not very".`],
      [`Which is natural in a case presentation?`, [`幻聴《げんちょう》 が 続《つづ》いて いる もの だから、 入院《にゅういん》 治療《ちりょう》 が 必要《ひつよう》 と 判断《はんだん》 した。`, `幻聴《げんちょう》 の あまり、 入院《にゅういん》 を お願《ねが》い します。`, `幻聴《げんちょう》 が 続《つづ》いて いる こと から、 入院《にゅういん》 治療《ちりょう》 が 必要《ひつよう》 と 判断《はんだん》 した。`], 2, `こと から gives the evidence for a judgement; もの だから is a spoken excuse, not evidence, and あまり needs a feeling and is not followed by a request.`],
      [`A hospital sign says エレベーター 点検中《てんけんちゅう》 に つき、 階段《かいだん》 を ご利用《りよう》 ください。 It means:`, [`Owing to the lift inspection, please use the stairs.`, `Each time the lift is inspected, please use the stairs.`, `Please use the stairs to inspect the lift.`], 0, `に つき on a notice means "owing to".`],
      [`何度《なんど》 も 見学《けんがく》 した ＿、 ご家族《かぞく》 も 施設《しせつ》 入所《にゅうしょ》 に 賛成《さんせい》 されました。`, [`あまり`, `結果《けっか》`, `ばかり に`], 1, `What came out of an action is 〜た 結果《けっか》; ばかり に needs a regretted result, and あまり needs too much of a feeling.`],
      [`Which version of "now that I have decided" belongs mainly to letters and formal statements?`, [`決《き》めた から に は`, `決《き》めた 以上《いじょう》 は`, `決《き》めた 上《うえ》 は`], 2, `〜た 上《うえ》 は is the stiff written "now that"; in speech use 以上《いじょう》 or から に は.`]
    ] }
);
