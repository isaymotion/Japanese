/* Lessons part 40 (0.26.0): N3 unit reviews: review-n3-contrast, review-n3-hearsay, review-n3-feelings, review-n3-styles.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level, unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus: after: '<lesson id>' (the unit's last lesson; read by js/data/lessons-zz-order.js) and review: true
   (a unit review: title "Review: <unit>", level and unit of its unit, short recap body, quiz of exactly 12).
   Examples in the body: <div class="ex"><b>JA</b><span>EN</span></div>.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  { id: 'review-n3-contrast', level: 'N3', unit: 'Contrast and concession', review: true, after: 'even-supposing', title: `Review: Contrast and concession`, summary: `Check how to set two facts side by side, say "considering", and say that something still holds "even if" or "just because".`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/contrast">Contrast</a> and <a href="#/lessons/even-supposing">Even if, no matter how</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜の に 対《たい》して</td><td>whereas (two different things)</td><td>兄《あに》 は 静《しず》か な の に 対《たい》して、 弟《おとうと》 は にぎやか です。</td></tr>
<tr><td>〜一方《いっぽう》 (で)</td><td>while, on the other hand</td><td>頭痛《ずつう》 は 減《へ》った 一方《いっぽう》、 めまい は まだ 続《つづ》いて います。</td></tr>
<tr><td>〜反面《はんめん》</td><td>two sides of one thing</td><td>在宅勤務《ざいたくきんむ》 は 楽《らく》 な 反面《はんめん》、 運動不足《うんどうぶそく》 に なりやすい です。</td></tr>
<tr><td>〜わり に</td><td>considering, for</td><td>この 店《みせ》 は 安《やす》い わり に 量《りょう》 が 多《おお》い です。</td></tr>
<tr><td>〜くせ に</td><td>even though (blame; recognise only)</td><td>「何《なに》 も しない くせ に」 と 姉《あね》 に 言《い》われました。</td></tr>
<tr><td>たとえ 〜ても</td><td>even if</td><td>たとえ 少《すこ》し でも、 毎日《まいにち》 外《そと》 に 出《で》ましょう。</td></tr>
<tr><td>どんなに 〜ても</td><td>no matter how</td><td>どんなに 疲《つか》れて いて も、 母《はは》 は 毎朝《まいあさ》 歩《ある》きます。</td></tr>
<tr><td>〜と して も</td><td>even supposing</td><td>仮《かり》に 明日《あした》 晴《は》れた と して も、 山《やま》 は まだ 雪《ゆき》 でしょう。</td></tr>
<tr><td>〜に して も</td><td>granted that, still</td><td>遅《おく》れる に して も、 連絡《れんらく》 は して ほしかった です。</td></tr>
<tr><td>〜から と いって</td><td>just because (+ negative)</td><td>熱《ねつ》 が 下《さ》がった から と いって、 治《なお》った わけ では ありません。</td></tr></table>
<h3>Watch out</h3>
<ul><li>反面《はんめん》 is two sides of one thing; to compare two people use の に 対《たい》して or 一方《いっぽう》. Final 一方《いっぽう》 です is "keeps on -ing".</li>
<li>わり に is neutral surprise about degree; くせ に blames a person.</li>
<li>たとえ and どんなに still need ても or でも: たとえ 雨《あめ》 でも, not たとえ 雨《あめ》 だったら.</li>
<li>から と いって ends in a negative: わけ では ありません, と は 限《かぎ》りません.</li>
<li>だ: 大変《たいへん》 だ と して も, but 大変《たいへん》 に して も, 元気《げんき》 な わり に, 年《とし》 の わり に.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>退院《たいいん》 は うれしい 反面《はんめん》、 不安《ふあん》 も ある でしょう。 でも、 不安《ふあん》 が ある から と いって、 まだ 早《はや》い わけ では ありません。</b><span>Going home is good news, but there may be worries too. Worries don't mean it's too early.</span></div>
<div class="ex"><b>姉《あね》 は 年《とし》 の わり に 若《わか》く 見《み》える の に 対《たい》して、 私《わたし》 は 年上《としうえ》 に 見《み》られます。</b><span>My sister looks young for her age, whereas I get taken for older.</span></div>
<div class="ex"><b>ご主人《しゅじん》 は 「寝《ね》て ばかり いる くせ に」 と 言《い》います が、 長《なが》く 寝《ね》て いる わり に 疲《つか》れ が 取《と》れない の は、 よく ある 症状《しょうじょう》 です。</b><span>Your husband says "all you do is sleep", but feeling tired after sleeping so long is a common symptom.</span></div>
<div class="ex"><b>忙《いそが》しい に して も、 たとえ 五分《ごふん》 でも いい ので、 休憩《きゅうけい》 を 取《と》って ください。</b><span>Busy as you may be, please take a break, even if it's only five minutes.</span></div>
<div class="ex"><b>給料《きゅうりょう》 が 上《あ》がった と して も、 残業《ざんぎょう》 が 増《ふ》える 一方《いっぽう》 なら 意味《いみ》 が ありません。</b><span>Even if my pay went up, it would mean nothing if the overtime just kept growing.</span></div>
<div class="note">In notes and handovers use the neutral の に 対《たい》して, 一方《いっぽう》 and 反面《はんめん》. To reassure, use たとえ 〜ても and 〜から と いって 〜わけ では ありません.</div>`,
    quiz: [
      [`この 仕事《しごと》 は 自由《じゆう》 な ＿、 収入《しゅうにゅう》 が 安定《あんてい》しません。 (two sides of the same job)`, [`反面《はんめん》`, `わり に`, `くせ に`], 0, `反面《はんめん》 gives the good and the bad side of one thing; わり に compares degree and くせ に blames a person.`],
      [`祖父《そふ》 は 九十歳《きゅうじゅっさい》 の ＿ 耳《みみ》 が よく 聞《き》こえます。 (said admiringly)`, [`反面《はんめん》`, `くせ に`, `わり に`], 2, `"For a ninety-year-old" is noun + の わり に: better than you would expect.`],
      [`A doctor notes that a patient sleeps a lot but is still tired. Which sentence suits the doctor?`, [`よく 寝《ね》て いる くせ に、 疲《つか》れて います。`, `よく 寝《ね》て いる わり に、 疲《つか》れ が 取《と》れない よう です。`, `よく 寝《ね》て いる 反面《はんめん》、 疲《つか》れて いる に 対《たい》して です。`], 1, `わり に states the surprise neutrally; くせ に blames the patient, and the third is not grammatical.`],
      [`たとえ 誰《だれ》 か に ＿、 気《き》 に しなくて いい です。`, [`笑《わら》われたら`, `笑《わら》われる から`, `笑《わら》われて も`], 2, `たとえ is a booster for 〜ても; it does not go with たら or から.`],
      [`退院《たいいん》した から と いって、 通院《つういん》 を やめて いい わけ では ありません means:`, [`You were discharged, so you can stop coming to the clinic.`, `Being discharged doesn't mean you can stop coming to the clinic.`, `You cannot be discharged unless you keep coming to the clinic.`], 1, `〜から と いって … わけ では ありません corrects a belief: "just because …, it doesn't mean …".`],
      [`How do you say "even supposing it is hard work"?`, [`大変《たいへん》 だ と して も`, `大変《たいへん》 と して も`, `大変《たいへん》 な と して も`], 0, `A な-adjective keeps だ before と して も.`],
      [`Which sentence compares two different people naturally?`, [`兄《あに》 は 背《せ》 が 高《たか》い 反面《はんめん》、 弟《おとうと》 は 低《ひく》い です。`, `兄《あに》 は 背《せ》 が 高《たか》い の に 対《たい》して、 弟《おとうと》 は 低《ひく》い です。`, `兄《あに》 は 背《せ》 が 高《たか》い わり に、 弟《おとうと》 は 低《ひく》い です。`], 1, `の に 対《たい》して sets two different things side by side; 反面《はんめん》 is for one thing, and わり に compares with an expectation.`],
      [`入院《にゅういん》する に して も 通院《つういん》する に して も、 治療《ちりょう》 は 続《つづ》ける 必要《ひつよう》 が あります means:`, [`Only if you are admitted will treatment continue.`, `Even supposing you are admitted, you may stop treatment.`, `Whether you are admitted or come as an outpatient, treatment needs to continue.`], 2, `A に して も B に して も means "whether A or B".`],
      [`A patient says, "Needing help means I'm weak." Which reply gently corrects the belief?`, [`助《たす》け が 必要《ひつよう》 だ から と いって、 弱《よわ》い わけ では ありません。`, `助《たす》け が 必要《ひつよう》 な くせ に、 弱《よわ》く ありません。`, `助《たす》け が 必要《ひつよう》 な 反面《はんめん》、 弱《よわ》い です。`], 0, `〜から と いって 〜わけ では ありません is the frame for correcting a belief; the others blame or agree.`],
      [`どんなに 寝《ね》て も、 疲《つか》れ が 取《と》れません means:`, [`Because I slept a lot, I am not tired.`, `However much I sleep, the tiredness doesn't go.`, `For someone who sleeps so little, I am not tired.`], 1, `どんなに 〜ても is "no matter how (much)": the result stays the same whatever the amount.`],
      [`In a handover, which word can start a new sentence meaning "On the other hand, …"?`, [`一方《いっぽう》、`, `わり に、`, `くせ に、`], 0, `一方《いっぽう》 can stand at the start of a sentence; わり に and くせ に must follow a clause.`],
      [`An angry relative says 「子供《こども》 の くせ に 生意気《なまいき》 だ」. What is the speaker doing?`, [`Praising the child for being grown-up`, `Comparing two children neutrally`, `Blaming the child for acting above himself`], 2, `くせ に carries blame aimed at a person.`]
    ] },

  { id: 'review-n3-hearsay', level: 'N3', unit: 'Hearsay and judgement', review: true, after: 'to-iu', title: `Review: Hearsay and judgement`, summary: `Check how to pass on what you heard, how sure you are, how to describe tendencies, and the と いう patterns for naming and checking meaning.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/hearsay">I hear that</a>, <a href="#/lessons/certainty-risk">Must be, not necessarily</a>, <a href="#/lessons/tendencies">Tends to, a touch of</a> and <a href="#/lessons/to-iu">と いう</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜そう です (casual 〜って)</td><td>I hear</td><td>明日《あした》 は 休診《きゅうしん》 だ そう です。</td></tr>
<tr><td>〜との こと です</td><td>passing on a message (formal)</td><td>検査《けんさ》 は 午後《ごご》 に なる との こと です。</td></tr>
<tr><td>〜と 言《い》われて います</td><td>it is said (general belief)</td><td>緑茶《りょくちゃ》 は 体《からだ》 に いい と 言《い》われて います。</td></tr>
<tr><td>〜に 違《ちが》いない / 〜に 決《き》まって いる</td><td>must be / bound to</td><td>母《はは》 は もう 着《つ》いた に 違《ちが》いない。</td></tr>
<tr><td>〜と は 限《かぎ》らない</td><td>not necessarily</td><td>高《たか》い 物《もの》 が いい と は 限《かぎ》りません。</td></tr>
<tr><td>〜おそれ が ある</td><td>risk of something bad (formal)</td><td>大雨《おおあめ》 の おそれ が あります。</td></tr>
<tr><td>〜がち</td><td>tends to (unwelcome)</td><td>雨《あめ》 の 日《ひ》 は 家《いえ》 に こもりがち です。</td></tr>
<tr><td>〜気味《ぎみ》</td><td>a slight touch of</td><td>最近《さいきん》 太《ふと》り気味《ぎみ》 です。</td></tr>
<tr><td>〜っぽい</td><td>-ish; easily (casual)</td><td>弟《おとうと》 は 飽《あ》きっぽい です。</td></tr>
<tr><td>〜だらけ</td><td>covered in, full of</td><td>机《つくえ》 の 上《うえ》 が 書類《しょるい》だらけ です。</td></tr>
<tr><td>X と いう + noun</td><td>a … called X</td><td>「ひきこもり」 と いう 言葉《ことば》</td></tr>
<tr><td>X と いう の は / 〜と いう こと です か</td><td>what X means / so you mean</td><td>「だるい」 と いう の は、 眠《ねむ》い と いう こと です か。</td></tr>
<tr><td>A と いう より B</td><td>not so much A as B</td><td>痛《いた》い と いう より、 重《おも》い 感《かん》じ です。</td></tr>
<tr><td>X と いえば</td><td>speaking of X</td><td>京都《きょうと》 と いえば、 お寺《てら》 です ね。</td></tr></table>
<h3>Watch out</h3>
<ul><li>痛《いた》い そう です (I hear it hurts) is not 痛《いた》そう です (it looks painful). そう です never goes into the past; との こと でした can.</li>
<li>No だ before に 違《ちが》いない or に 決《き》まって いる; answer them with と は 限《かぎ》りません.</li>
<li>おそれ is for bad outcomes only; for good news say かも しれません.</li>
<li>がち: an unwelcome habit; 〜やすい: easily, by nature; 気味《ぎみ》: slight, polite.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>奥《おく》さん の 話《はなし》 では、 最近《さいきん》 怒《おこ》りっぽく なった そう です。</b><span>His wife says he has become quick to anger lately.</span></div>
<div class="ex"><b>嫌《きら》われて いる に 決《き》まって いる と 思《おも》う ん です ね。 でも、 みんな が そう 思《おも》って いる と は 限《かぎ》りません よ。</b><span>You feel sure you are disliked. But not everyone necessarily thinks that.</span></div>
<div class="ex"><b>疲《つか》れ気味《ぎみ》 と いう より、 何《なに》 も する 気《き》 が 起《お》きない ん です。</b><span>It's not so much tiredness; I just can't make myself do anything.</span></div>
<div class="ex"><b>夜間《やかん》 は トイレ が 近《ちか》く なりがち で、 転倒《てんとう》 の おそれ が ある との こと です。</b><span>I'm told he tends to need the toilet at night, so there is a risk of falls.</span></div>
<div class="ex"><b>北海道《ほっかいどう》 と いえば 雪《ゆき》 です が、 今年《ことし》 は 少《すく》ない そう です。</b><span>Hokkaido means snow, but I hear there is little this year.</span></div>
<div class="note">In a handover, mark what you were told and name the source.</div>`,
    quiz: [
      [`Which sentence means "I hear she has a slight cold"?`, [`風邪気味《かぜぎみ》 だ そう です。`, `風邪気味《かぜぎみ》そう です。`, `風邪気味《かぜぎみ》 な そう です。`], 0, `Hearsay そう です follows the full plain form, and 気味《ぎみ》 behaves like a noun, so it takes だ.`],
      [`A doctor gives cautious good news: 来週《らいしゅう》 に は 退院《たいいん》できる ＿。`, [`おそれ が あります`, `かも しれません`, `に 決《き》まって います`], 1, `おそれ is only for bad outcomes, and に 決《き》まって います is too certain for a doctor.`],
      [`Which one says that it may or may not happen?`, [`治《なお》る に 違《ちが》いない`, `治《なお》る と は 限《かぎ》らない`, `治《なお》る に 決《き》まって いる`], 1, `と は 限《かぎ》らない denies that it is certain; the other two state certainty.`],
      [`Which sentence says "When I'm busy I tend to skip meals"?`, [`忙《いそが》しい と 食事《しょくじ》 を 抜《ぬ》きだらけ です。`, `忙《いそが》しい と 食事《しょくじ》 を 抜《ぬ》きっぽい です。`, `忙《いそが》しい と 食事《しょくじ》 を 抜《ぬ》きがち です。`], 2, `Verb stem + がち is an unwelcome tendency; だらけ follows nouns and 抜《ぬ》きっぽい is not a word.`],
      [`部屋《へや》 が 本《ほん》だらけ です means:`, [`The room is full of books.`, `The room has a few books.`, `The room tends to have books.`], 0, `Noun + だらけ means "covered in, full of", with a sense of too much.`],
      [`不安《ふあん》 ＿、 怖《こわ》い ん です。 (It's not so much anxiety as fear.)`, [`と いえば`, `と いう より`, `と いう の は`], 1, `A と いう より B means "not so much A as B".`],
      [`In which sentence is って casual hearsay ("they say")?`, [`鈴木《すずき》さん、 今日《きょう》 は 来《こ》ない って。`, `鈴木《すずき》さん って、 どんな 人《ひと》 です か。`, `「頑張《がんば》って」 って 言《い》われました。`], 0, `Sentence-final って is hearsay; the second marks a topic and the third quotes before 言《い》う.`],
      [`Seeing his face, a nurse draws her own conclusion: "He must have been in pain."`, [`痛《いた》かった そう です。`, `痛《いた》かった に 違《ちが》いありません。`, `痛《いた》い おそれ が あります。`], 1, `に 違《ちが》いない is the speaker's own conclusion; そう です passes on what someone said, and おそれ is a risk still to come.`],
      [`Which sentence reports a general belief, not what one person told you?`, [`母《はは》 に よる と、 早寝《はやね》 は 体《からだ》 に いい そう です。`, `早寝《はやね》 は 体《からだ》 に いい と 聞《き》きました。`, `早寝《はやね》 は 体《からだ》 に いい と 言《い》われて います。`], 2, `〜と 言《い》われて います is "it is said"; the others report one source.`],
      [`自分《じぶん》 が 悪《わる》い ＿ 気持《きも》ち が 消《き》えません。 (the feeling that it is my fault)`, [`と いう`, `と いえば`, `と は 限《かぎ》らない`], 0, `A clause + と いう + noun gives the content of the noun: "the feeling that …".`],
      [`担任《たんにん》 の 先生《せんせい》 ＿ 話《はなし》 では、 授業中《じゅぎょうちゅう》 に よく 寝《ね》て いる そう です。`, [`が`, `に`, `の`], 2, `〜の 話《はなし》 では names the source: "according to what … says".`],
      [`白《しろ》っぽい シャツ means:`, [`a pure white shirt`, `a shirt that gets dirty easily`, `a whitish shirt`], 2, `Noun or adjective stem + っぽい means "-ish".`]
    ] },

  { id: 'review-n3-feelings', level: 'N3', unit: 'Feelings and attempts', review: true, after: 'koto-patterns', title: `Review: Feelings and attempts`, summary: `Check how to say a feeling is unbearable, that something was done without something else, that someone tried or meant to, and the こと patterns.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/strong-feelings">Strong feelings</a>, <a href="#/lessons/without-doing">Without doing</a>, <a href="#/lessons/trying">Trying and intending</a> and <a href="#/lessons/koto-patterns">こと patterns</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜て たまらない</td><td>unbearably</td><td>喉《のど》 が 渇《かわ》いて たまりません。</td></tr>
<tr><td>〜て しかた が ない</td><td>can't stop feeling</td><td>退屈《たいくつ》 で しかた が ありません。</td></tr>
<tr><td>〜て ならない</td><td>a feeling that comes by itself (formal)</td><td>悪《わる》い こと が 起《お》こる 気《き》 が して なりません。</td></tr>
<tr><td>〜ず に は いられない</td><td>can't help doing</td><td>彼《かれ》 の 話《はなし》 に は 笑《わら》わず に は いられません。</td></tr>
<tr><td>〜ないで / 〜ず に</td><td>without, instead of</td><td>歯《は》 を 磨《みが》かないで 寝《ね》て しまいました。</td></tr>
<tr><td>〜なくて</td><td>because not</td><td>バス が 来《こ》なくて、 遅刻《ちこく》しました。</td></tr>
<tr><td>〜よう と する</td><td>try to, be about to</td><td>立《た》とう と した とき、 めまい が しました。</td></tr>
<tr><td>〜よう と しない</td><td>won't even try</td><td>娘《むすめ》 は 誰《だれ》 と も 話《はな》そう と しません。</td></tr>
<tr><td>〜つもり だった / 〜た つもり</td><td>had meant to / thought one had</td><td>電話《でんわ》する つもり でした が、 できません でした。</td></tr>
<tr><td>〜た こと が ある</td><td>have ever done</td><td>一人《ひとり》 で 海外《かいがい》 に 行《い》った こと が あります。</td></tr>
<tr><td>〜こと が ある</td><td>there are times when</td><td>朝《あさ》 起《お》きられない こと が あります。</td></tr>
<tr><td>〜こと は ない</td><td>there is no need to</td><td>無理《むり》 に 話《はな》す こと は ありません よ。</td></tr>
<tr><td>〜こと に なって いる / して いる</td><td>a rule / my own rule</td><td>ここ で は 靴《くつ》 を 脱《ぬ》ぐ こと に なって います。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Link with the て-form: 不安《ふあん》 で たまらない. For others add よう です.</li>
<li>〜ないで: without, instead of. 〜なくて: because not. A request is 〜ないで ください.</li>
<li>〜よう と した: set out to; 〜て みた: actually did it to see; 〜よう に して いる: a habit.</li>
<li>飲《の》んだ こと が ある (have taken) is not 飲《の》む こと が ある (sometimes take).</li>
<li>こと に なって いる: a rule from outside; こと に して いる: your own. The ず form of する is せず.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>何《なに》 も 飲《の》まず に 寝《ね》よう と しました が、 不安《ふあん》 で たまらなく なりました。</b><span>I tried to go to sleep without taking anything, but I became unbearably anxious.</span></div>
<div class="ex"><b>確《たし》かめず に は いられない こと は、 ほか に も あります か。</b><span>Are there other things you can't stop yourself checking?</span></div>
<div class="ex"><b>誰《だれ》 に も 言《い》わないで 我慢《がまん》して きた ん です ね。 もう 一人《ひとり》 で 悩《なや》む こと は ありません。</b><span>You have put up with this without telling anyone. You don't need to struggle alone now.</span></div>
<div class="ex"><b>痩《や》せよう と して 夕食《ゆうしょく》 を 抜《ぬ》いたら、 お腹《なか》 が すいて しかた が ありません でした。</b><span>I skipped dinner to try to lose weight, and I was terribly hungry.</span></div>
<div class="ex"><b>早《はや》く 帰《かえ》る つもり でした が、 仕事《しごと》 が 終《お》わらなくて、 十時《じゅうじ》 に なりました。</b><span>I meant to go home early, but work ran on until ten.</span></div>
<div class="note">Watch the form before こと and the particle after よう: よう と (attempt), よう に (habit).</div>`,
    quiz: [
      [`娘《むすめ》 と 連絡《れんらく》 が ＿、 心配《しんぱい》しました。`, [`取《と》れないで`, `取《と》れなくて`, `取《と》れず に は`], 1, `A negative cause before a feeling takes 〜なくて; 〜ないで is "without".`],
      [`その 手紙《てがみ》 を 読《よ》んで、 ＿ に は いられません でした。`, [`泣《な》かず`, `泣《な》かない`, `泣《な》かなくて`], 0, `〜ず に は いられない uses the ず form: 泣《な》かず.`],
      [`Which sentence means "I tried to stand up, but I couldn't"?`, [`立《た》とう と しました が、 立《た》てません でした。`, `立《た》って みました が、 立《た》てません でした。`, `立《た》つ こと に しました が、 立《た》てません でした。`], 0, `〜よう と した is an attempt that may fail; 〜て みた says you actually did it, so it contradicts "couldn't".`],
      [`A doctor wants to ask "Do you sometimes lose your appetite?"`, [`食欲《しょくよく》 が なくなった こと が あります か。`, `食欲《しょくよく》 が なくなる こと が あります か。`, `食欲《しょくよく》 が なくなる こと に なって います か。`], 1, `Dictionary form + こと が ある is "there are times when"; the た-form asks about ever.`],
      [`そんな に 自分《じぶん》 を 責《せ》める ＿。 (There's no need to blame yourself so much.)`, [`こと が あります`, `こと に して います`, `こと は ありません`], 2, `Dictionary form + こと は ありません reassures: "there is no need to".`],
      [`何度《なんど》 誘《さそ》って も、 兄《あに》 は 外《そと》 に 出《で》よう と しません means:`, [`My brother tried to go out but couldn't.`, `However often we invite him, my brother won't go out.`, `My brother is just about to go out.`], 1, `〜よう と しない says the person makes no move to do it.`],
      [`Which sentence means "I had meant to go to bed early"?`, [`早《はや》く 寝《ね》た つもり でした。`, `早《はや》く 寝《ね》よう と しません でした。`, `早《はや》く 寝《ね》る つもり でした。`], 2, `Dictionary form + つもり でした is "had meant to"; た-form + つもり is "thought I had".`],
      [`A mother describes her son's feeling. Which sentence is natural?`, [`息子《むすこ》 は 寂《さび》しくて たまりません。`, `息子《むすこ》 は 寂《さび》しい で たまりません。`, `息子《むすこ》 は 寂《さび》しくて たまらない と 言《い》って います。`], 2, `たまらない states one's own feeling, so another person's needs と 言《い》って います; 寂《さび》しい で is the wrong link.`],
      [`Asked 夜中《よなか》 に 目《め》 が 覚《さ》める こと は あります か, a patient says いいえ、 覚《さ》める こと は ありません. She means:`, [`I don't wake up in the night.`, `I must not wake up in the night.`, `I once woke up in the night.`], 0, `As the answer to a "sometimes" question, こと は ありません means it does not happen.`],
      [`エレベーター を 使《つか》わないで、 階段《かいだん》 で 上《あ》がりました means:`, [`The lift wasn't working, so I had to climb the stairs.`, `Please don't use the lift; take the stairs.`, `I went up by the stairs instead of using the lift.`], 2, `〜ないで can mean "instead of doing".`],
      [`たまに 不安《ふあん》 で たまらなく なる こと が あります means:`, [`Now and then I get unbearably anxious.`, `I have once been very anxious.`, `There is no need to be anxious.`], 0, `たまらなく なる is "become unbearable", and dictionary form + こと が ある is "there are times when".`],
      [`毎晩《まいばん》 十二時《じゅうにじ》 まで に 寝《ね》る ＿ して います。 (I make a point of it.)`, [`よう と`, `よう に`, `こと が`], 1, `Dictionary form + よう に して いる is a habit or effort; よう と needs the volitional form and means an attempt.`]
    ] },

  { id: 'review-n3-styles', level: 'N3', unit: 'Casual and written styles', review: true, after: 'written-style', title: `Review: Casual and written styles`, summary: `Check that you can turn casual speech and chart-style writing back into the polite Japanese you speak.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/casual-speech">Understanding casual speech</a> and <a href="#/lessons/written-style">Written style</a>. Both are mainly for understanding: you keep speaking in です / ます.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜てる</td><td>casual 〜て いる</td><td>弟《おとうと》 は まだ 寝《ね》てる。</td></tr>
<tr><td>〜ちゃう / 〜じゃう</td><td>casual 〜て しまう</td><td>財布《さいふ》 を 落《お》としちゃった。</td></tr>
<tr><td>〜とく</td><td>casual 〜て おく</td><td>窓《まど》、 開《あ》けとく ね。</td></tr>
<tr><td>〜なきゃ / 〜なくちゃ</td><td>casual "must"</td><td>もう 帰《かえ》らなきゃ。</td></tr>
<tr><td>〜ん だ</td><td>casual 〜の だ</td><td>今日《きょう》 は 行《い》けない ん だ。</td></tr>
<tr><td>〜って</td><td>casual と, "they say", topic</td><td>明日《あした》 は 休《やす》み だ って。</td></tr>
<tr><td>〜っけ / 〜かな</td><td>checking a memory / wondering</td><td>会議《かいぎ》、 何時《なんじ》 から だっけ？</td></tr>
<tr><td>である</td><td>written だ</td><td>原因《げんいん》 は 不明《ふめい》 である。</td></tr>
<tr><td>〜て おり</td><td>written 〜て いて</td><td>夜間《やかん》 は よく 眠《ねむ》れて おり、 表情《ひょうじょう》 も 明《あか》るい。</td></tr>
<tr><td>stem, 〜く, 〜ず, であり</td><td>written linking</td><td>昼食《ちゅうしょく》 は 半分《はんぶん》 ほど 食《た》べ、 午後《ごご》 は 自室《じしつ》 で 過《す》ごした。</td></tr>
<tr><td>noun + あり / なし</td><td>chart note</td><td>頭痛《ずつう》 あり。 吐《は》き気《け》 なし。</td></tr>
<tr><td>本日《ほんじつ》, より, にて, 際《さい》</td><td>formal words</td><td>翌日《よくじつ》、 外来《がいらい》 にて 再診《さいしん》 予定《よてい》。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Answer casual speech in です / ます, restating it politely.</li>
<li>じゃない？ rising invites agreement; falling, it is a plain negative.</li>
<li>である follows nouns and な-adjectives only: 強《つよ》い である is wrong.</li>
<li>Written 眠《ねむ》れず、 is "could not sleep, and"; 〜ず に (from Without doing) is "without".</li>
<li>Chart lines are not said to a patient: ask 眠《ねむ》れて います か, not 不眠《ふみん》 あり？</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>本人《ほんにん》 より 「また 薬《くすり》 飲《の》み忘《わす》れちゃった」 と の 訴《うった》え あり。</b><span>The patient says, "I forgot my medicine again."</span></div>
<div class="ex"><b>「次《つぎ》 の 予約《よやく》、 いつ だっけ？」 「来週《らいしゅう》 の 月曜日《げつようび》 です よ。」</b><span>"When's my next appointment again?" "Next Monday."</span></div>
<div class="ex"><b>食欲《しょくよく》 が なく、 夜《よる》 も 眠《ねむ》れず、 日中《にっちゅう》 は 横《よこ》 に なって いる こと が 多《おお》い。</b><span>No appetite, cannot sleep at night, and often lying down in the daytime.</span></div>
<div class="ex"><b>宿題《しゅくだい》、 まだ やってない の？ 早《はや》く やらなきゃ。</b><span>You still haven't done your homework? You need to get on with it.</span></div>
<div class="ex"><b>本日《ほんじつ》 は 工事《こうじ》 の ため、 正面《しょうめん》 入口《いりぐち》 を 閉鎖《へいさ》して おります。</b><span>Because of building work, the main entrance is closed today.</span></div>
<div class="ex"><b>「もう 疲《つか》れちゃった」 と 言《い》う 方《かた》 に は、 「疲《つか》れて しまった ん です ね」 と 返《かえ》します。</b><span>To someone who says "I'm worn out", reply "So you've become worn out".</span></div>
<div class="note">Turn every casual or written form back into polite Japanese in your head: 〜ちゃった is 〜て しまいました, 〜ず、 is 〜なくて, 本日《ほんじつ》 is 今日《きょう》.</div>`,
    quiz: [
      [`読《よ》んどく is short for:`, [`読《よ》んで おく`, `読《よ》んで いく`, `読《よ》んで いる`], 0, `〜とく (〜どく after a verb whose て-form ends in で) is the casual form of 〜て おく.`],
      [`もう 帰《かえ》らなくちゃ means:`, [`I don't have to go home yet.`, `I have to go home now.`, `I have already gone home.`], 1, `〜なくちゃ is short for 〜なくて は (いけない): must.`],
      [`この 薬《くすり》、 本当《ほんとう》 に 効《き》く の ＿。 (I wonder if it really works.)`, [`っけ`, `もん`, `かな`], 2, `〜かな is wondering, half to oneself; 〜っけ checks a forgotten fact.`],
      [`顔色《かおいろ》 悪《わる》い ん じゃない？ (rising) means:`, [`Aren't you looking pale?`, `Your colour isn't bad.`, `I'm not pale.`], 0, `Rising じゃない？ invites agreement: "isn't it?".`],
      [`What is the polite form of 薬《くすり》、 飲《の》んだ？`, [`お薬《くすり》 を 飲《の》んで ください。`, `お薬《くすり》 は 飲《の》みません。`, `お薬《くすり》 は 飲《の》みました か。`], 2, `Casual speech drops the particle and か; put them back: 〜は 飲《の》みました か.`],
      [`表情《ひょうじょう》 は 穏《おだ》やか ＿、 会話《かいわ》 も 問題《もんだい》 ない。 (written style)`, [`であり`, `である`, `でおり`], 0, `A な-adjective links in writing with であり.`],
      [`What is the written form of 熱《ねつ》 が 続《つづ》いて いて、?`, [`熱《ねつ》 が 続《つづ》いて あり、`, `熱《ねつ》 が 続《つづ》いて おり、`, `熱《ねつ》 が 続《つづ》き である、`], 1, `In writing 〜て いて becomes 〜て おり.`],
      [`Which is chart style for "No appetite"?`, [`食欲《しょくよく》 ない ん だ。`, `食欲《しょくよく》 なし。`, `食欲《しょくよく》 が なくちゃ。`], 1, `A chart ends on the noun with なし for absent; the first is casual speech and the third means "must".`],
      [`Which line would sound wrong said directly to a patient?`, [`眠《ねむ》れて います か。`, `本日《ほんじつ》 は 混《こ》み合《あ》って おります。`, `不眠《ふみん》 あり。`], 2, `A noun + あり line is chart style; it is written, not said to a patient.`],
      [`本人《ほんにん》 より 電話《でんわ》 あり means:`, [`The patient should phone.`, `There were more calls than the patient.`, `The patient phoned.`], 2, `In charts より means "from", and あり marks that it happened.`],
      [`What is the written form of 痛《いた》み が 強《つよ》い です。?`, [`痛《いた》み が 強《つよ》い である。`, `痛《いた》み が 強《つよ》い。`, `痛《いた》み が 強《つよ》く である。`], 1, `An い-adjective simply uses its plain form; である follows only nouns and な-adjectives.`],
      [`What is the polite form of 寝《ね》てる 間《あいだ》 に 終《お》わっちゃった?`, [`寝《ね》て いる 間《あいだ》 に 終《お》わって しまいました。`, `寝《ね》た 間《あいだ》 に 終《お》わって おきました。`, `寝《ね》る 間《あいだ》 に 終《お》わりたい です。`], 0, `〜てる is 〜て いる and 〜ちゃった is 〜て しまった.`]
    ] }
);
