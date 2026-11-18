/* Lessons part 42 (0.26.0): N2 unit reviews: review-n2-possibility, review-n2-nochoice, review-n2-mono-koto, review-n2-comparison.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level, unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus: after: '<lesson id>' (the unit's last lesson; read by js/data/lessons-zz-order.js) and review: true
   (a unit review: title "Review: <unit>", level and unit of its unit, short recap body, quiz of exactly 12).
   Examples in the body: <div class="ex"><b>JA</b><span>EN</span></div>.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  { id: 'review-n2-possibility', level: 'N2', unit: 'Possibility and limits', review: true, after: 'n2-ppanashi', title: `Review: Possibility and limits`, summary: `Check how to warn of a risk, refuse politely, play something down or give credit, and describe states left as they are, from 〜かねない to 〜放題《ほうだい》.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-kanenai">〜かねない, 〜かねる …</a>, <a href="#/lessons/n2-ni-suginai">〜に すぎない …</a> and <a href="#/lessons/n2-ppanashi">〜っぱなし, 〜きり …</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜かねない</td><td>a bad result could well follow; formal (say)</td><td>夜更《よふ》かし が 続《つづ》く と、 体調《たいちょう》 を 崩《くず》しかねません。</td></tr>
<tr><td>〜かねる</td><td>polite "I can't"; formal spoken (say)</td><td>その 件《けん》 は お答《こた》え しかねます。</td></tr>
<tr><td>〜得《う》る / 得《え》ない</td><td>can / cannot happen; written (say あり得《う》る)</td><td>再発《さいはつ》 は あり得《う》る。</td></tr>
<tr><td>〜っこない</td><td>no way; casual (understand)</td><td>信《しん》じて もらえっこない。</td></tr>
<tr><td>〜に すぎない</td><td>merely; formal (say)</td><td>一《ひと》つ の 可能性《かのうせい》 に すぎません。</td></tr>
<tr><td>〜に ほかならない</td><td>nothing other than; formal (say)</td><td>日々《ひび》 の 努力《どりょく》 の 結果《けっか》 に ほかなりません。</td></tr>
<tr><td>〜と いう もの だ</td><td>that is what … is; spoken, written</td><td>それ は 無理《むり》 と いう もの です。</td></tr>
<tr><td>〜っぱなし</td><td>left as it is; on and on; spoken (say)</td><td>窓《まど》 を 開《あ》けっぱなし に した。</td></tr>
<tr><td>〜きり</td><td>only; did … and not since; spoken (say)</td><td>朝《あさ》 に 一口《ひとくち》 食《た》べた きり です。</td></tr>
<tr><td>〜ぶり</td><td>first time in (a time); spoken (say)</td><td>十年《じゅうねん》ぶり に 会《あ》った。</td></tr>
<tr><td>〜放題《ほうだい》</td><td>all you like; left unchecked; casual in a note</td><td>部屋《へや》 が 散《ち》らかり放題《ほうだい》 だ。</td></tr></table>
<h3>Watch out</h3>
<ul><li>〜かねない ends in ない but means "could happen" (bad results only); 〜かねます means "I can't": 転《ころ》びかねません vs お答《こた》え しかねます.</li>
<li>得《う》る is read うる or える, but its other forms use え: 得《え》ない.</li>
<li>No だ before に: 推測《すいそく》 に すぎない. に すぎない plays down; に ほかならない names the true cause. 〜に 相違《そうい》ない (without doubt) is for reading.</li>
<li>会《あ》った きり (and not since) is not 一年《いちねん》ぶり (first time in a year). 〜っぱなし follows the ます-stem and, unlike 〜た まま, says the state should have ended.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>一時的《いちじてき》 な 症状《しょうじょう》 に すぎません が、 放《ほう》って おく と 長引《ながび》きかねません。</b><span>It is merely a passing symptom, but left alone it could drag on.</span></div>
<div class="ex"><b>娘《むすめ》 は 仕事《しごと》 を 辞《や》めた きり 家《いえ》 から 出《で》ず、 カーテン も 閉《し》めっぱなし です。</b><span>My daughter quit her job and hasn't gone out since; the curtains stay shut.</span></div>
<div class="ex"><b>半年《はんとし》ぶり に 外出《がいしゅつ》 できた の は、 ご本人《ほんにん》 の 努力《どりょく》 に ほかなりません。</b><span>Going out for the first time in six months is due to nothing other than her own effort.</span></div>
<div class="ex"><b>一日中《いちにちじゅう》 立《た》ちっぱなし で 休《やす》み も ない の は、 無理《むり》 と いう もの だ。</b><span>On your feet all day with no break: that is simply too much.</span></div>
<div class="ex"><b>こんな 量《りょう》、 今週中《こんしゅうちゅう》 に 終《お》わりっこない。 徹夜《てつや》 したら 倒《たお》れかねない し。</b><span>No way this much gets done this week. And an all-nighter could well knock me out.</span></div>
<div class="note">Say 〜かねない, 〜かねます, 〜に すぎない, 〜に ほかならない; hear 〜っこない. When a family uses 〜きり or 〜放題《ほうだい》 about a patient, ask since when.</div>`,
    quiz: [
      [`Which sentence uses 〜かねる correctly?`, [`申《もう》し訳《わけ》 ありません が、 個人情報《こじんじょうほう》 は お伝《つた》え しかねます。`, `このまま だ と、 熱《ねつ》 が 上《あ》がりかねます。`, `よく 休《やす》めば、 元気《げんき》 に なりかねません。`], 0, `〜かねます is a polite "I can't"; a rising fever needs 〜かねません, and 〜かねない never describes a good result.`],
      [`父《ちち》 と は 三年前《さんねんまえ》 に 電話《でんわ》 で 話《はな》した ＿、 連絡《れんらく》 を 取《と》って いません。`, [`ぶり`, `きり`, `放題《ほうだい》`], 1, `た-form + きり is "did this, and nothing since"; ぶり follows a length of time, not a past verb.`],
      [`The doctor wants to give the patient the credit: "You can walk again precisely because you kept up the exercises." Which says it?`, [`また 歩《ある》ける よう に なった の は、 運動《うんどう》 を 続《つづ》けた から に すぎません。`, `また 歩《ある》ける よう に なった の は、 運動《うんどう》 を 続《つづ》けた から と いう もの では ありません。`, `また 歩《ある》ける よう に なった の は、 運動《うんどう》 を 続《つづ》けた から に ほかなりません。`], 2, `から に ほかならない singles out the one true reason; に すぎない would play the effort down, and と いう もの では ない denies it.`],
      [`Which says, in written style, only that something can happen, without warning that it probably will?`, [`起《お》こり得《う》る`, `起《お》こりかねない`, `起《お》こりっこない`], 0, `得《う》る states a possibility; 〜かねない warns that a bad result could well follow, and 〜っこない means "no way".`],
      [`今《いま》 から 走《はし》って も、 最終《さいしゅう》 バス に は 間《ま》に 合《あ》いっこない よ means:`, [`If we run now, we'll catch the last bus easily.`, `We might catch the last bus if we run now.`, `There's no way we'll catch the last bus, even if we run now.`], 2, `〜っこない is a casual "no way", like 〜わけ が ない.`],
      [`何《なん》でも 話《はな》せば 楽《らく》 に なる ＿ では ありません が、 話《はな》して みる 価値《かち》 は あります。`, [`に すぎない もの`, `と いう もの`, `に ほかならない もの`], 1, `〜と いう もの では ない means "it is not simply the case that".`],
      [`会議中《かいぎちゅう》、 ずっと 電話《でんわ》 が 鳴《な》りっぱなし でした means:`, [`The phone rang once during the meeting.`, `The phone kept ringing all through the meeting.`, `The phone was left switched off during the meeting.`], 1, `〜っぱなし can mean that the same thing goes on and on.`],
      [`庭《にわ》 の 木《き》 が ＿ に なって いる。 (left to grow wild)`, [`伸《の》び放題《ほうだい》`, `伸《の》びっきり`, `伸《の》びぶり`], 0, `ます-stem + 放題《ほうだい》 means "left to go as far as it will"; ぶり follows a length of time.`],
      [`Which of these is casual, to understand from patients but not to write in a note?`, [`〜に すぎない`, `〜かねない`, `〜っこない`], 2, `〜っこない belongs to casual conversation; the other two are formal and fit a note.`],
      [`母《はは》 と 二人《ふたり》 きり で 暮《く》らして います means:`, [`I have not lived with my mother for two years.`, `I am living with my mother for the first time in a while.`, `I live with my mother, just the two of us.`], 2, `Noun + きり means "only": 二人《ふたり》 きり is "just the two of us".`],
      [`A patient says 私《わたし》 は 家族《かぞく》 の 重荷《おもに》 に すぎない. She means:`, [`She feels she is nothing but a burden to her family.`, `She feels she is the real support of her family.`, `She is sure that her family feels no burden.`], 0, `〜に すぎない plays herself down to "only this"; note it as possible low self-worth.`],
      [`見《み》かねた 近所《きんじょ》 の 人《ひと》 が、 救急車《きゅうきゅうしゃ》 を 呼《よ》んで くれました means:`, [`A neighbour who could not see well called an ambulance.`, `A neighbour who could not bear to stand by any longer called an ambulance.`, `A neighbour who had not noticed anything called an ambulance.`], 1, `見《み》かねる is a fixed word: "unable to stand by and watch".`]
    ] },

  { id: 'review-n2-nochoice', level: 'N2', unit: 'No choice and strong feeling', review: true, after: 'n2-kagiri-da', title: `Review: No choice and strong feeling`, summary: `Check how to say there was no other way, that you can't just carry on, a hedged yes, and how strongly someone feels, from 〜ざる を 得《え》ない to 〜と いったら ない.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-zaru-wo-enai">〜ざる を 得《え》ない …</a>, <a href="#/lessons/n2-te-wa-irarenai">〜て は いられない …</a> and <a href="#/lessons/n2-kagiri-da">〜限《かぎ》り だ, 〜こと か …</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜ざる を 得《え》ない</td><td>no choice but, against one's wish; formal, written (say)</td><td>退院《たいいん》 を 延期《えんき》 せざる を 得《え》ません。</td></tr>
<tr><td>〜ほか ない / 〜より ほか ない</td><td>nothing for it but; slightly formal (say)</td><td>タクシー で 帰《かえ》る ほか なかった。</td></tr>
<tr><td>〜しか ない</td><td>the everyday "have to"; spoken (say)</td><td>もう 待《ま》つ しか ない ね。</td></tr>
<tr><td>〜て は いられない</td><td>can't just keep doing; spoken (say)</td><td>試験前《しけんまえ》 だ から、 遊《あそ》んで は いられない。</td></tr>
<tr><td>〜ない こと は ない</td><td>hedged yes; spoken (understand)</td><td>食《た》べられない こと は ない です。</td></tr>
<tr><td>〜ない もの でも ない</td><td>not out of the question; stiff (understand)</td><td>値段《ねだん》 次第《しだい》 で は、 買《か》わない もの でも ない。</td></tr>
<tr><td>〜限《かぎ》り だ</td><td>utterly (my feeling); formal (say)</td><td>寂《さび》しい 限《かぎ》り です。</td></tr>
<tr><td>question word … 〜こと か</td><td>how very; emotional (understand)</td><td>どれほど 救《すく》われた こと か。</td></tr>
<tr><td>〜もの が ある</td><td>there is something … about it; formal (say)</td><td>毎日《まいにち》 の 通院《つういん》 は、 つらい もの が あります ね。</td></tr>
<tr><td>〜と いったら ない</td><td>indescribably; casual (understand)</td><td>真夏《まなつ》 の 暑《あつ》さ と いったら ない。</td></tr></table>
<h3>Watch out</h3>
<ul><li>する becomes せざる (not しざる); 得《え》ない is read え.</li>
<li>Circumstances force it: 〜ざる を 得《え》ない, 〜ほか ない, 〜しか ない. Duty or a promise: 〜ない わけ に は いかない.</li>
<li>〜て は いられない (can't keep doing) is the opposite of 〜ないで は いられない (can't keep from doing).</li>
<li>行《い》けない こと は ない (I could go) is not 行《い》く こと は ない (no need to go).</li>
<li>〜こと か needs a question word; 〜限《かぎ》り だ is only for the speaker's own feeling.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>仕事《しごと》 を 休《やす》まざる を 得《え》なく なった とき は、 情《なさ》けない 限《かぎ》り でした。</b><span>When I had no choice but to take time off work, I felt utterly pathetic.</span></div>
<div class="ex"><b>歩《ある》けない こと は ない ん です が、 駅《えき》 から 遠《とお》くて、 結局《けっきょく》 タクシー で 来《く》る ほか なかった ん です。</b><span>I could walk, but it's far from the station, so I had to come by taxi.</span></div>
<div class="ex"><b>父《ちち》 が 救急車《きゅうきゅうしゃ》 で 運《はこ》ばれた と 聞《き》いて、 じっと して は いられません でした。 どれほど 心配《しんぱい》 した こと か。</b><span>Hearing Dad was taken by ambulance, I couldn't sit still. How worried I was.</span></div>
<div class="ex"><b>一人《ひとり》 で 頑張《がんば》る ほか なかった ん です ね。 つらい もの が あった でしょう ね。</b><span>So there was nothing for it but to manage alone. That must have been very hard.</span></div>
<div class="ex"><b>締《し》め切《き》り が 明日《あした》 だ から、 のんびり して は いられない。 忙《いそが》しさ と いったら ない よ。</b><span>The deadline is tomorrow: no time to relax. I'm busier than words can say.</span></div>
<div class="note">After a hedged yes, ask how much or how often; reflect strong feeling back. If a patient says 消《き》える しか ない, ask calmly and directly about suicidal thoughts and follow your hospital's policy.</div>`,
    quiz: [
      [`Which situation calls for 〜ない わけ に は いかない rather than 〜ざる を 得《え》ない?`, [`The trains stopped, so I had no choice but to walk.`, `I gave my word, so I can't very well not go.`, `It rained, so the match had to be called off.`], 1, `〜ない わけ に は いかない is pressure from duty or a promise; the other two are forced by circumstances.`],
      [`泣《な》かないで は いられなかった means:`, [`I couldn't keep from crying.`, `I couldn't afford to keep crying.`, `There was no need to cry.`], 0, `〜ないで は いられない is "can't keep from doing"; 〜て は いられない is the opposite.`],
      [`A patient says 「眠《ねむ》れない こと は ない ん です けど…」. What should you do next?`, [`Record that she sleeps normally.`, `Record that she cannot sleep at all.`, `Ask how long and how well she sleeps.`], 2, `〜ない こと は ない is a hedged yes, so ask how much or how often.`],
      [`Which means "There's no need to apologise"?`, [`謝《あやま》らない こと は ありません。`, `謝《あやま》る こと は ありません。`, `謝《あやま》らない もの でも ありません。`], 1, `Dictionary form + こと は ない is "no need to"; the other two are hedged double negatives.`],
      [`頼《たの》まれれば、 手伝《てつだ》わない もの でも ない means:`, [`If I'm asked, I might help.`, `Even if I'm asked, I will never help.`, `I helped because I was asked.`], 0, `〜ない もの でも ない is a reluctant "it's not out of the question".`],
      [`How do you exclaim "How many times I wanted to give up"?`, [`何度《なんど》 やめたい と 思《おも》った こと か。`, `とても やめたい と 思《おも》った こと か。`, `何度《なんど》 やめたい と 思《おも》った もの か。`], 0, `The exclamation needs a question word (何度《なんど》) + plain form + こと か.`],
      [`In a formal farewell speech, which says "I am utterly sad to part from you all"?`, [`皆様《みなさま》 と お別《わか》れ する の は、 寂《さび》しい と いったら ない よ。`, `皆様《みなさま》 と お別《わか》れ する の は、 寂《さび》しい 限《かぎ》り です。`, `皆様《みなさま》 と お別《わか》れ する の は、 寂《さび》しい こと か。`], 1, `〜限《かぎ》り です fits the speaker's own feeling in a formal moment; と いったら ない is casual, and こと か needs a question word.`],
      [`To acknowledge a mother's hardship calmly: 夜勤《やきん》 を 続《つづ》けながら の 子育《こそだ》て は、 ＿ ね。`, [`大変《たいへん》 な もの が あります`, `大変《たいへん》 と いったら ない です`, `大変《たいへん》 な 限《かぎ》り です`], 0, `〜もの が ある acknowledges the weight of someone else's situation; 〜限《かぎ》り だ is for one's own feeling, and と いったら ない is casual.`],
      [`あの 時《とき》 の 悔《くや》しさ と いったら なかった means:`, [`I wasn't frustrated at that time.`, `I can't remember whether I was frustrated.`, `I was more frustrated than words can say.`], 2, `〜と いったら ない: "if I try to say how much, there are no words".`],
      [`バス が ない ので、 駅《えき》 まで 歩《ある》く ＿ ない。`, [`ばかり`, `もの`, `ほか`], 2, `Dictionary form + ほか ない: "there is nothing for it but".`],
      [`A patient says もう 消《き》える しか ない. What is the right response?`, [`Treat it as ordinary grammar and move on.`, `Ask calmly and directly whether she is having thoughts of ending her life.`, `Suggest the more formal 消《き》えざる を 得《え》ない.`], 1, `〜しか ない about oneself can state suicidal thinking: ask directly, stay with her and follow your hospital's policy.`],
      [`Which is the natural chart line for "the treatment plan had to be changed"?`, [`治療方針《ちりょうほうしん》 を 変更《へんこう》 して は いられなかった。`, `治療方針《ちりょうほうしん》 を 変更《へんこう》 しない こと は なかった。`, `治療方針《ちりょうほうしん》 を 変更《へんこう》 せざる を 得《え》なかった。`], 2, `〜ざる を 得《え》なかった is the formal written "had no choice but to".`]
    ] },

  { id: 'review-n2-mono-koto', level: 'N2', unit: 'もの, こと and ところ', review: true, after: 'n2-tokoro', title: `Review: もの, こと and ところ`, summary: `Check the N2 patterns built on もの, こと and ところ: which to say, which to write in a note, and which to hear as a feeling.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-mono">〜もの か, 〜ものの …</a>, <a href="#/lessons/n2-koto">〜ない こと に は …</a> and <a href="#/lessons/n2-tokoro">〜ところ を, 〜どころ か …</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜もん か</td><td>never (angry); rough (understand)</td><td>誰《だれ》 が 謝《あやま》る もん か。</td></tr>
<tr><td>〜もの なら</td><td>if only I could; if you dare; spoken (understand)</td><td>戻《もど》れる もの なら 戻《もど》りたい。</td></tr>
<tr><td>〜ものの</td><td>although; written (write)</td><td>睡眠《すいみん》 は 改善《かいぜん》 した ものの、 だるさ が 残《のこ》る。</td></tr>
<tr><td>よく 〜た もの だ</td><td>used to; how remarkable (understand)</td><td>昔《むかし》 は よく 泳《およ》いだ もの だ。</td></tr>
<tr><td>〜ない こと に は</td><td>unless (… can't); spoken (say)</td><td>検査《けんさ》 しない こと に は わかりません。</td></tr>
<tr><td>〜こと なく</td><td>without; written (write)</td><td>休《やす》む こと なく 通《かよ》って いる。</td></tr>
<tr><td>〜こと だし</td><td>since, so let's; spoken (say)</td><td>雨《あめ》 も 止《や》んだ こと だし、 出《で》かけよう。</td></tr>
<tr><td>emotion + こと に</td><td>to my surprise; formal (understand)</td><td>驚《おどろ》いた こと に、 何《なに》 も 覚《おぼ》えて いなかった。</td></tr>
<tr><td>〜ところ を</td><td>sorry to trouble you; formal (say)</td><td>お疲《つか》れ の ところ を、 すみません。</td></tr>
<tr><td>〜ところ に / へ</td><td>just then; narrative (understand)</td><td>帰《かえ》ろう と した ところ へ、 友達《ともだち》 が 来《き》た。</td></tr>
<tr><td>〜た ところ で</td><td>even if (it's no use); spoken (understand)</td><td>今《いま》 謝《あやま》った ところ で 遅《おそ》い。</td></tr>
<tr><td>〜た ところ</td><td>found on doing; formal (say, write)</td><td>確認《かくにん》 した ところ、 問題《もんだい》 は なかった。</td></tr>
<tr><td>〜どころ か / 〜どころ では ない</td><td>far from; no state for (understand)</td><td>休《やす》む どころ か、 かえって 忙《いそが》しく なった。</td></tr></table>
<h3>Watch out</h3>
<ul><li>〜ものの is written; 〜もの なら needs a potential or volitional form.</li>
<li>〜た ところ、 reports a finding; 〜た ところ で + negative is "even if, no use"; N4 〜た ところ です is "have just".</li>
<li>〜ない こと に は needs a negative ending.</li>
<li>お忙《いそが》しい ところ (apology) is not 〜どころ か (far from). Never say もん か to a patient.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>お休《やす》み の ところ すみません。 血圧《けつあつ》 を 測《はか》らない こと に は、 入浴《にゅうよく》 の 許可《きょか》 が 出《だ》せない ので。</b><span>Sorry to wake you. Unless I check your blood pressure, I can't allow a bath.</span></div>
<div class="ex"><b>職場《しょくば》 に 確認《かくにん》 した ところ、 一度《いちど》 も 休《やす》む こと なく 出勤《しゅっきん》 して いた。</b><span>Checking with his workplace: he never missed a day.</span></div>
<div class="ex"><b>退院《たいいん》 は した ものの、 まだ 仕事《しごと》 どころ では ない よう です。</b><span>He was discharged, but work still seems out of the question.</span></div>
<div class="ex"><b>やめられる もの なら やめたい けど、 今《いま》 やめた ところ で 次《つぎ》 が ない。</b><span>I'd quit if I could, but quitting now would get me nowhere.</span></div>
<div class="ex"><b>若《わか》い 頃《ころ》 は よく 徹夜《てつや》 した もの だ が、 今《いま》 は 徹夜《てつや》 どころ か、 夜《よる》 十時《じゅうじ》 に は 眠《ねむ》く なる。</b><span>I often stayed up all night when young; now, far from it, I'm sleepy by ten.</span></div>
<div class="note">Write 〜ものの, 〜こと なく, 〜た ところ. Hear もん か (anger), もの なら (a wish) and 〜た ところ で (hopelessness): respond to the feeling.</div>`,
    quiz: [
      [`Chart: 母親《ははおや》 に 連絡《れんらく》 した ＿、 本人《ほんにん》 は 昨夜《さくや》 帰宅《きたく》 して いない こと が わかった。`, [`ところ で`, `ところ`, `ものの`], 1, `た-form + ところ、 reports what was found; ところ で would mean "even if", and ものの "although".`],
      [`会《あ》える もの なら、 もう 一度《いちど》 父《ちち》 に 会《あ》いたい means:`, [`If I possibly could, I would like to see my father once more.`, `Since I can see him, I will see my father once more.`, `Unless I see him, I can't see my father again.`], 0, `Potential form + もの なら is a wish that may be impossible: "if only I could".`],
      [`休《やす》もう もの なら、 すぐ 職場《しょくば》 から 電話《でんわ》 が かかって くる means:`, [`Whenever I plan to rest, I phone my workplace.`, `If I so much as try to take a day off, my workplace phones at once.`, `I should rest, and then my workplace will phone.`], 1, `Volitional form + もの なら: "if one dares to do even that", with a bad result.`],
      [`「あんな 人《ひと》 の 言《い》う こと なんか、 聞《き》く もん か」. The speaker is:`, [`asking whether to listen`, `agreeing to listen`, `angrily refusing to listen`], 2, `Dictionary form + もん か is an angry "I will never".`],
      [`学生時代《がくせいじだい》 は、 友人《ゆうじん》 と よく 夜中《よなか》 まで 語《かた》り合《あ》った もの です means:`, [`As a student, I often used to talk with friends late into the night.`, `As a student, I should have talked with friends late into the night.`, `As a student, I never talked with friends late into the night.`], 0, `よく 〜た もの だ recalls something one often used to do.`],
      [`Which sentence makes a suggestion, with a reason that leads to it?`, [`顔色《かおいろ》 が 良《よ》く ならない こと に は、 少《すこ》し 外《そと》 を 歩《ある》いて みましょう か。`, `顔色《かおいろ》 が 良《よ》く なる こと なく、 少《すこ》し 外《そと》 を 歩《ある》いて みましょう か。`, `顔色《かおいろ》 も 良《よ》く なった こと です し、 少《すこ》し 外《そと》 を 歩《ある》いて みましょう か。`], 2, `こと です し gives a reason that leads to a suggestion; 〜ない こと に は needs a negative ending, and こと なく means "without".`],
      [`In a referral letter, 二年間《にねんかん》 再発《さいはつ》 する こと なく 経過《けいか》 して いる means:`, [`For two years there has been no relapse.`, `For two years the illness has relapsed regularly.`, `Unless there is a relapse within two years, nothing can be said.`], 0, `〜こと なく is the written "without".`],
      [`嬉《うれ》しい こと に、 娘《むすめ》さん が 毎日《まいにち》 面会《めんかい》 に 来《き》て くれて います means:`, [`The daughter has decided to be happy and visit every day.`, `The daughter is happy because she has to visit every day.`, `Happily, the daughter comes to visit every day.`], 2, `Emotion word + こと に frames a fact with the speaker's feeling.`],
      [`Entering a patient's room during a meal: お食事中《しょくじちゅう》 の ＿ 失礼《しつれい》 します。`, [`ところ`, `どころ`, `ところ で`], 0, `Noun + の ところ apologises for interrupting someone; どころ means "far from", and ところ で "even if".`],
      [`今更《いまさら》 後悔《こうかい》 した ところ で、 何《なに》 も 変《か》わらない means:`, [`When I regretted it, things changed.`, `Even if I regret it now, nothing will change.`, `Just as I began to regret it, nothing changed.`], 1, `た-form + ところ で + negative means "even if, it's no use".`],
      [`熱《ねつ》 が 下《さ》がる どころ か、 ＿。`, [`すっかり 下《さ》がりました`, `かえって 上《あ》がりました`, `少《すこ》し ずつ 下《さ》がりました`], 1, `X どころ か says that the opposite of X happened.`],
      [`ちょうど 電話《でんわ》 しよう と 思《おも》って いた ＿、 向《む》こう から かかって きた。`, [`ところ で`, `どころ か`, `ところ に`], 2, `〜ところ に (へ) means "just at that moment", before an arrival or a call.`]
    ] },

  { id: 'review-n2-comparison', level: 'N2', unit: 'Comparison and surprise', review: true, after: 'n2-to-wa', title: `Review: Comparison and surprise`, summary: `Check how to compare with an expectation, weigh two options, give advice, define a term and say you never expected something, from 〜に して は to 〜なら では.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-ni-shite-wa">〜に して は …</a>, <a href="#/lessons/n2-mushiro">〜より むしろ …</a> and <a href="#/lessons/n2-to-wa">〜と は, 〜なんて …</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜に して は</td><td>for an X, not as expected (say)</td><td>三月《さんがつ》 に して は 寒《さむ》い。</td></tr>
<tr><td>〜に して も 〜に して も</td><td>whether A or B; spoken (say)</td><td>行《い》く に して も 行《い》かない に して も、 連絡《れんらく》 を ください。</td></tr>
<tr><td>〜に せよ / 〜に しろ</td><td>whether; に せよ formal, に しろ spoken (say いずれ に せよ)</td><td>いずれ に せよ、 また ご連絡《れんらく》 します。</td></tr>
<tr><td>〜と いい 〜と いい</td><td>both A and B, judging the whole (understand)</td><td>景色《けしき》 と いい 空気《くうき》 と いい、 最高《さいこう》 だ。</td></tr>
<tr><td>〜やら 〜やら</td><td>what with A and B; spoken (understand)</td><td>引《ひ》っ越《こ》し やら 手続《てつづ》き やら で 忙《いそが》しい。</td></tr>
<tr><td>〜より むしろ</td><td>rather than A, B (say)</td><td>冗談《じょうだん》 と いう より むしろ 皮肉《ひにく》 に 聞《き》こえた。</td></tr>
<tr><td>〜くらい なら</td><td>rather than the worse X; spoken (understand)</td><td>頼《たの》む くらい なら 自分《じぶん》 で やる。</td></tr>
<tr><td>〜ほう が まし</td><td>the lesser evil; spoken (understand)</td><td>待《ま》つ より 歩《ある》く ほう が まし だ。</td></tr>
<tr><td>〜に 越《こ》した こと は ない</td><td>it's best to; formal spoken (say)</td><td>用心《ようじん》 する に 越《こ》した こと は ありません。</td></tr>
<tr><td>〜と は</td><td>definition; surprise (say)</td><td>ここ で 会《あ》う と は 思《おも》わなかった。</td></tr>
<tr><td>〜なんて</td><td>things like; how could; casual (understand)</td><td>彼《かれ》 が 忘《わす》れる なんて。</td></tr>
<tr><td>〜とも なると</td><td>at a high point (understand)</td><td>夏休《なつやす》み とも なると、 海《うみ》 は 混《こ》む。</td></tr>
<tr><td>〜なら では</td><td>unique to; written (understand)</td><td>地元《じもと》 なら では の 味《あじ》 だ。</td></tr></table>
<h3>Watch out</h3>
<ul><li>A noun goes straight before に して は; after an adjective use わり に: 若《わか》い わり に.</li>
<li>〜と いい 〜と いい needs a judgement, not a neutral list. 〜とも なると needs a high point; 〜なら では is positive.</li>
<li>まし is "less bad", never advice. In 〜くらい なら, the first half is what the speaker fears.</li>
<li>なんて is casual and can sound dismissive; 私《わたし》 なんて is self-criticism.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>初《はじ》めて の 面接《めんせつ》 に して は 落《お》ち着《つ》いて おり、 緊張《きんちょう》 より むしろ 疲《つか》れ が 目立《めだ》った。</b><span>Calm for a first interview; tiredness, not tension, stood out.</span></div>
<div class="ex"><b>迷惑《めいわく》 を かける くらい なら、 一人《ひとり》 で 抱《かか》える ほう が まし だ と 思《おも》って いる ん です ね。</b><span>So you feel carrying it alone is less bad than troubling others.</span></div>
<div class="ex"><b>仕事《しごと》 を 続《つづ》ける に して も 休《やす》む に して も、 よく 眠《ねむ》る に 越《こ》した こと は ありません。</b><span>Working or on leave, it is best to sleep well.</span></div>
<div class="ex"><b>父《ちち》 が 私《わたし》 を 忘《わす》れる と は…。 寂《さび》しい やら 悲《かな》しい やら で、 言葉《ことば》 に なりません。</b><span>To think Dad would forget me... Sad and lonely at once, I have no words.</span></div>
<div class="ex"><b>連休《れんきゅう》 とも なると 道《みち》 が 混《こ》む から、 行《い》く に しろ 行《い》かない に しろ、 早《はや》め に 決《き》めよう。</b><span>Roads get crowded on long holidays, so go or not, let's decide early.</span></div>
<div class="note">Hear まし as partial improvement; after 嬉《うれ》しい やら 不安《ふあん》 やら, ask about the worry.</div>`,
    quiz: [
      [`八十歳《はちじゅっさい》 ＿、 足腰《あしこし》 が しっかり して います ね。`, [`に して は`, `とも なると`, `なら では`], 0, `Noun + に して は: "for (someone of) eighty", better than you would expect.`],
      [`Which means "Whether you take the job or turn it down, reply soon"?`, [`引《ひ》き受《う》ける やら 断《ことわ》る やら、 早《はや》め に 返事《へんじ》 を しましょう。`, `引《ひ》き受《う》ける に して も 断《ことわ》る に して も、 早《はや》め に 返事《へんじ》 を しましょう。`, `引《ひ》き受《う》ける に して は 断《ことわ》る に して は、 早《はや》め に 返事《へんじ》 を しましょう。`], 1, `The paired 〜に して も 〜に して も means "whether A or B".`],
      [`この 地方《ちほう》 ＿ の 料理《りょうり》 を 食《た》べて みたい。 (food you can only get here)`, [`なら では`, `とも なると`, `に して は`], 0, `Noun + なら では の + noun: something only that place or person has.`],
      [`Which uses 〜と いい 〜と いい correctly?`, [`顔色《かおいろ》 と いい 食欲《しょくよく》 と いい、 ずいぶん 回復《かいふく》 されました ね。`, `月曜《げつよう》 と いい 水曜《すいよう》 と いい、 外来《がいらい》 が あります。`, `熱《ねつ》 と いい 血圧《けつあつ》 と いい を 測《はか》りました。`], 0, `〜と いい 〜と いい ends in a judgement of the whole; it is not for a neutral list.`],
      [`At discharge a patient says 嬉《うれ》しい やら 不安《ふあん》 やら です. Best next step?`, [`Congratulate her and end the visit.`, `Ask what she feels anxious about.`, `Tell her she should only feel happy.`], 1, `やら 〜やら names mixed feelings; ask about the anxious half.`],
      [`Which reframes a family's reading kindly: "I think she is frightened rather than angry"?`, [`怒《おこ》って いる くらい なら、 怖《こわ》がって います。`, `怒《おこ》って いる に 越《こ》した こと は なく、 怖《こわ》がって います。`, `怒《おこ》って いる と いう より むしろ、 怖《こわ》がって いる の だ と 思《おも》います。`], 2, `A と いう より むしろ B says B describes it better than A.`],
      [`A patient says 人《ひと》 に 話《はな》す くらい なら、 黙《だま》って いる ほう が いい. Which does she find worse?`, [`keeping quiet`, `talking to someone`, `neither: both are fine`], 1, `In 〜くらい なら, the first half is the option the speaker finds worse.`],
      [`外《そと》 で 待《ま》つ より、 中《なか》 で 立《た》って いる ほう が まし だ. What is the speaker weighing?`, [`two unpleasant options, choosing the less bad`, `two good options, choosing the best`, `one good option and no other`], 0, `まし means "less bad": both choices are unpleasant.`],
      [`How do you advise "It's best to sleep well before the test"?`, [`検査《けんさ》 の 前《まえ》 は、 よく 眠《ねむ》る ほう が まし です。`, `検査《けんさ》 の 前《まえ》 は、 よく 眠《ねむ》る くらい なら いい です。`, `検査《けんさ》 の 前《まえ》 は、 よく 眠《ねむ》る に 越《こ》した こと は ありません。`], 2, `〜に 越《こ》した こと は ない is polite advice; ほう が まし would make sleep sound like a lesser evil.`],
      [`Which explains a term to a family in the right register?`, [`「不眠《ふみん》」 なんて、 眠《ねむ》れない こと です よ。`, `「不眠《ふみん》」 なら では、 眠《ねむ》れない こと です。`, `「不眠《ふみん》」 と は、 夜《よる》 よく 眠《ねむ》れない 日《ひ》 が 続《つづ》く こと を 言《い》います。`], 2, `Noun + と は … こと を 言《い》います is a formal definition; なんて is casual and dismissive.`],
      [`A patient is worried about side effects. Which reply should you avoid?`, [`どんな 点《てん》 が 気《き》 に なります か。`, `そんな 心配《しんぱい》 なんて、 しなくて いい です よ。`, `ご心配《しんぱい》 な こと を 教《おし》えて ください。`], 1, `なんて makes light of the worry and sounds dismissive.`],
      [`一人《ひとり》 で ここ まで 来《こ》られる ＿ 思《おも》って いません でした。`, [`とも なると`, `なら では`, `と は`], 2, `Plain form + と は 思《おも》わなかった expresses surprise.`]
    ] }
);
