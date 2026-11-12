/* MSE interviewer sheet: the two-page Japanese MSE question sheet for the clinic and wards.
   Items are either { r: 'sectionId:index' } (an existing phrase from PSYCH_SECTIONS, shown with an HS mark)
   or { tl, en, b, arrow } written for the sheet itself (b = margin badge, e.g. the SIGECAPS letters).
   tl = polite Japanese (です/ます) throughout; titles and notes are Japanese with English glosses in `en`.
   Practice phrasings for training, not validated translations; cognitive items are original, not HDS-R or MMSE-J wording.
   pages: array of pages, each an array of columns, each an array of section ids. pageSubtitles: one per page.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician. */
window.PSYCH_MSE_SHEET = {
  id: 'mse-sheet',
  title: '面接者《めんせつしゃ》 ガイド： 日本語《にほんご》 の MSE',
  subtitle: '精神科《せいしんか》 面接《めんせつ》 と 精神《せいしん》 状態《じょうたい》 検査《けんさ》 の 質問《しつもん》 · 外来《がいらい》 と 病棟《びょうとう》 · 丁寧《ていねい》 な 話《はな》し方《かた》 （です・ます）',
  reminder: '忘《わす》れず に： 見当識《けんとうしき》 （時間《じかん》、 場所《ばしょ》、 人《ひと》） · 病識《びょうしき》 · 判断力《はんだんりょく》。 観察《かんさつ》： 外見《がいけん》、 精神運動《せいしんうんどう》、 態度《たいど》、 話《はな》し方《かた》、 感情《かんじょう》、 思考《しこう》 の 流《なが》れ。',
  disclaimer: '研修《けんしゅう》 の ため の 練習《れんしゅう》 フレーズ で、 検証《けんしょう》 された 翻訳《ほんやく》 では ありません。 患者《かんじゃ》さん に 合《あ》わせて 使《つか》って ください。 HS = 「話《はな》しましょう」 に ある フレーズ。',
  pageWord: 'ページ',
  pageSubtitles: null,   // null = subtitle for page 1, reminder for page 2
  pages: [
    [['opening', 'mania'], ['depression'], ['suicide', 'hallucinations']],
    [['delusions', 'violence', 'behaviour'], ['clarify', 'substance', 'anxiety', 'closing', 'observe'], ['cognition', 'insight']]
  ],
  sections: [
    { id: 'opening', title: '導入《どうにゅう》 と ラポール', en: 'Opening', ut: true, blocks: [
      { items: [
        { tl: 'おはよう ございます。 この 病院《びょういん》 の 医師《いし》 で、 ＿ と 申《もう》します。', en: 'Good morning. I\'m Dr. ____, one of the doctors here.', ut: true },
        { r: 'opening:1' }, { r: 'opening:3' },
        { tl: 'これから いろいろ と 質問《しつもん》 を させて いただきます。 個人的《こじんてき》 な こと も お聞《き》きします が、 間違《まちが》った 答《こた》え は ありません。', en: 'I will ask many questions. Some may be personal. There are no wrong answers.', ut: true },
        { r: 'opening:8' },
        { tl: '今日《きょう》 は どう されました か。 受診《じゅしん》 は ご自分《じぶん》 で 決《き》められました か、 それとも どなた か に 勧《すす》められました か。', en: 'What brings you here today? Whose idea was it to come here?', ut: true },
        { tl: '何《なに》 が あった か 教《おし》えて いただけます か。 いつごろ から です か。 急《きゅう》 に です か、 それとも 少《すこ》し ずつ です か。', en: 'Tell me what happened. When did it start: suddenly or gradually?', ut: true },
        { r: 'cc-hpi:10' }
      ] } ],
      note: '症状《しょうじょう》 を 聞《き》く 前《まえ》 に： その とき だれ か と 一緒《いっしょ》 でした か、 一人《ひとり》 でした か。 睡眠《すいみん》、 食欲《しょくよく》、 お薬《くすり》 （今《いま》 も 飲《の》んで いる か、 いつ やめた か）。 同意《どうい》 や 大事《だいじ》 な 決定《けってい》 に は、 訓練《くんれん》 を 受《う》けた 医療《いりょう》 通訳《つうやく》 を 依頼《いらい》 します。' },

    { id: 'depression', title: '抑《よく》うつ 気分《きぶん》 ＋ SIGECAPS', en: 'Major depressive episode: gate + 5 of 9, 2 weeks', ut: true, blocks: [
      { h: 'Gate', items: [ { r: 'depression:1' }, { r: 'depression:2' }, { r: 'depression:3' }, { r: 'depression:4' } ] },
      { h: 'SIGECAPS', items: [ { r: 'depression:5', b: 'S' }, { r: 'depression:7', b: 'I' }, { r: 'depression:8', b: 'G' }, { r: 'depression:9', b: 'E' }, { r: 'depression:10', b: 'C' }, { r: 'depression:11', b: 'A' }, { r: 'depression:12', b: 'P' }, { r: 'depression:13', b: 'S', arrow: '→ 自殺《じさつ》' } ] },
      { h: '期間《きかん》 · 機能《きのう》 障害《しょうがい》 · 特定《とくてい》 用語《ようご》', items: [ { r: 'depression:16' }, { r: 'depression:17' }, { r: 'depression:14' }, { r: 'depression:15' }, { r: 'depression:18', arrow: '→ DIGFAST' }, { r: 'depression:19' }, { r: 'depression:20' }, { r: 'depression:21' } ] } ],
      note: '気分《きぶん》 は 患者《かんじゃ》さん の 言葉《ことば》 の まま 記録《きろく》 します。 抗《こう》うつ薬《やく》 を 処方《しょほう》 する 前《まえ》 に、 うつ 状態《じょうたい》 の 患者《かんじゃ》さん に は 必《かなら》ず 過去《かこ》 の 躁《そう》 ・ 軽躁《けいそう》 エピソード を 聞《き》きます。 評価《ひょうか》 の 記録《きろく》 に は 公表《こうひょう》 されて いる 日本語版《にほんごばん》 の PHQ-9 を 使《つか》い、 ここ の 文《ぶん》 は 面接《めんせつ》 で 使《つか》います。' },

    { id: 'suicide', title: '自殺《じさつ》', en: 'Screen → explore. Ask directly.', risk: true, blocks: [
      { h: '1 · スクリーニング', items: [ { r: 'suicide:0' }, { r: 'suicide:1' }, { tl: 'ご自分《じぶん》 で 命《いのち》 を 絶《た》ちたい と 考《かんが》えた こと は あります か。 自殺《じさつ》 を 考《かんが》えた こと は あります か。', en: 'Have you thought about ending your life? About killing yourself?' } ] },
      { h: '2 · 「はい」 の 場合《ばあい》： 詳《くわ》しく 聞《き》く', items: [ { tl: 'その 考《かんが》え は どの くらい 続《つづ》きます か。 どの くらい の 頻度《ひんど》 で 考《かんが》えます か。', en: 'How long does it last? How often do you think about it?' }, { r: 'suicide:5' }, { tl: '具体的《ぐたいてき》 な 計画《けいかく》 は あります か。 方法《ほうほう》 を 考《かんが》えた こと は あります か。', en: 'Do you have a plan? Have you thought about how you would do it?' }, { r: 'suicide:11' }, { r: 'suicide:10' }, { tl: 'その ため に 使《つか》える もの が、 手《て》 の 届《とど》く ところ に あります か。 ご自宅《じたく》 に 危《あぶ》ない もの は あります か。', en: 'Do you have access to anything you could use? Is there anything dangerous at home?' }, { tl: 'これまで に 自殺《じさつ》 を 図《はか》った こと は あります か。 その とき、 何《なに》 を されました か。 その 後《あと》 は どう なりました か。', en: 'Have you ever tried to end your life before? What did you do? What happened afterwards?' }, { r: 'suicide:14' } ] },
      { h: '3 · 保護《ほご》 因子《いんし》 と 締《し》めくくり', items: [ { tl: 'これまで 思《おも》いとどまって こられた の は、 何《なに》 が あった から でしょう か。 生《い》きる 支《ささ》え に なって いる もの は 何《なん》 です か。', en: 'What has stopped you? What gives you a reason to keep going?' }, { r: 'suicide:18' } ] } ],
      note: '記録《きろく》： 希死念慮《きしねんりょ》 → 自殺《じさつ》 念慮《ねんりょ》 → 計画《けいかく》 → 意図《いと》 → 手段《しゅだん》 → 過去《かこ》 の 企図《きと》 → 保護《ほご》 因子《いんし》。 地域《ちいき》 の 相談《そうだん》 窓口《まどぐち》 を 案内《あんない》 し、 医学的《いがくてき》 な 緊急時《きんきゅうじ》 は ｜119番《ひゃくじゅうきゅうばん》。' },

    { id: 'mania', title: '高揚《こうよう》、 開放的《かいほうてき》、 または 易怒的《いどてき》 な 気分《きぶん》 ＋ DIGFAST', en: 'Mania: gate + 3 of 7 (4 if only irritable), 1 week · hypomania 4 days', ut: true, blocks: [
      { h: 'Gate', items: [ { r: 'mania:0' }, { r: 'mania:1' }, { r: 'mania:2' } ] },
      { h: 'DIGFAST', items: [ { r: 'mania:3', b: 'D' }, { r: 'mania:4', b: 'I' }, { r: 'mania:5', b: 'G' }, { r: 'mania:6', b: 'F' }, { r: 'mania:7', b: 'A' }, { r: 'mania:8', b: 'S' }, { r: 'mania:9', b: 'T' } ] },
      { h: '期間《きかん》 · 重症度《じゅうしょうど》 · 除外《じょがい》', items: [ { r: 'mania:10' }, { r: 'mania:11' }, { r: 'mania:12' }, { r: 'mania:13' }, { r: 'mania:14' } ] } ],
      note: '入院《にゅういん》 または 精神病《せいしんびょう》 症状《しょうじょう》 が あれば、 期間《きかん》 に 関係《かんけい》 なく 躁病《そうびょう》 エピソード です。 軽躁《けいそう》： 四日《よっか》 以上《いじょう》、 入院《にゅういん》 なし、 精神病《せいしんびょう》 症状《しょうじょう》 なし、 周《まわ》り の 人《ひと》 が 気《き》づく。 スクリーニング の 記録《きろく》 に は、 公表《こうひょう》 されて いる 日本語版《にほんごばん》 の MDQ を 使《つか》います。' },

    { id: 'hallucinations', title: '幻覚《げんかく》', en: 'Perception', blocks: [
      { h: 'スクリーニング', items: [ { r: 'hallucinations:1' }, { r: 'hallucinations:2' }, { r: 'hallucinations:5' }, { tl: 'ほか の 人《ひと》 に は わからない におい や 味《あじ》 を 感《かん》じたり、 体《からだ》 に 変《へん》 な 感覚《かんかく》 が あったり します か。', en: 'Do you smell, taste, or feel anything unusual on your body?' } ] },
      { h: '「はい」 の 場合《ばあい》： 声《こえ》 に ついて 詳《くわ》しく 聞《き》く', items: [ { tl: '一人《ひとり》 の 声《こえ》 です か、 何人《なんにん》 か の 声《こえ》 です か。 男性《だんせい》 の 声《こえ》 です か、 女性《じょせい》 の 声《こえ》 です か。', en: 'Is it one voice or many? A man\'s voice or a woman\'s?' }, { tl: 'だれ の 声《こえ》 か わかります か。', en: 'Do you know whose voice it is?' }, { r: 'hallucinations:10' }, { r: 'hallucinations:11' }, { tl: '声《こえ》 が 悪口《わるくち》 を 言《い》ったり、 ご自分《じぶん》 の して いる こと に ついて いちいち 何《なに》 か 言《い》ったり します か。', en: 'Do they criticize you, or comment on what you are doing?' }, { tl: '声《こえ》 が 何《なに》 か を する よう に 命令《めいれい》 して きます か。 その とおり に して しまう こと は あります か。', en: 'Does the voice tell you to do things? Do you obey it?', arrow: '→ リスク' }, { r: 'hallucinations:9' }, { tl: 'それ は どんな とき に あります か。 起《お》きて いる 間《あいだ》 です か、 それとも 寝《ね》つく とき や 目《め》 が 覚《さ》める とき だけ です か。', en: 'When does it happen: while awake, or only when falling asleep or waking up?' }, { r: 'substance:9' } ] } ],
      note: '観察《かんさつ》： 内的《ないてき》 刺激《しげき》 に 反応《はんのう》 して いる か。 死別《しべつ》 の 悲《かな》しみ の 中《なか》 で 亡《な》くなった 家族《かぞく》 の 姿《すがた》 や 声《こえ》 を 感《かん》じる こと は、 それ だけ で 幻覚《げんかく》 と は 限《かぎ》りません。 家族《かぞく》 も 同《おな》じ 体験《たいけん》 を して いる か 聞《き》きます。' },

    { id: 'behaviour', title: '怒《いか》り、 行動《こうどう》、 衝動《しょうどう》 の コントロール', en: 'Behaviour change', blocks: [
      { items: [ { tl: 'ここ 数《すう》か月《げつ》 で、 ご自分《じぶん》 の 行動《こうどう》 に 変化《へんか》 が あった と 感《かん》じます か。', en: 'Have you noticed a change in your behaviour these past months?' }, { tl: '前《まえ》 より 怒《おこ》りやすく なったり、 人《ひと》 と 言《い》い争《あらそ》う こと が 増《ふ》えたり しました か。', en: 'Do you get angry or argue with others more easily?' }, { tl: '腹《はら》 が 立《た》って、 人《ひと》 に けが を させたり、 物《もの》 を 壊《こわ》したり した こと は あります か。', en: 'Have you ever hurt someone, or broken things, out of anger?' }, { tl: 'よく 考《かんが》えず に、 衝動的《しょうどうてき》 に 何《なに》 か を して しまった こと は あります か。', en: 'Have you done things on impulse, without thinking first?' }, { r: 'violence:5' } ] } ] },

    { id: 'delusions', title: '妄想《もうそう》', en: 'Thought content', blocks: [
      { items: [ { r: 'delusions:0', b: 'Per' }, { tl: 'だれ か に 後《あと》 を つけられたり、 見張《みは》られたり して いる 感《かん》じ は あります か。 だれ か が ご自分《じぶん》 に 対《たい》して 何《なに》 か を たくらんで いる と 思《おも》います か。', en: 'Is someone following or watching you? Plotting against you?', b: 'Per' }, { r: 'delusions:6', b: 'Ref' }, { r: 'delusions:7', b: 'Gr' }, { r: 'delusions:8', b: 'Rel' }, { r: 'delusions:9', b: 'Th' }, { tl: 'ご自分《じぶん》 の もの では ない 考《かんが》え を、 だれ か に 頭《あたま》 の 中《なか》 に 入《い》れられる よう な 感《かん》じ は あります か。 考《かんが》え を 抜《ぬ》き取《と》られる よう な 感《かん》じ は あります か。', en: 'Does someone put thoughts in your head that aren\'t yours? Take your thoughts away?', b: 'Th' }, { r: 'delusions:13', b: 'Ctrl' }, { r: 'delusions:16', b: 'Jeal' }, { tl: '検査《けんさ》 で は 見《み》つからない 病気《びょうき》 が、 体《からだ》 の 中《なか》 に ある と 思《おも》います か。', en: 'Do you have an illness in your body that doctors can\'t find?', b: 'Som' } ] },
      { h: '確信《かくしん》 の 程度《ていど》 と 行動《こうどう》', items: [ { tl: 'それ が 本当《ほんとう》 だ と、 どの くらい 確信《かくしん》 して います か。 ほか の 説明《せつめい》 も 考《かんが》えられます か。', en: 'How sure are you that this is true? Could there be another explanation?', b: 'Test' }, { tl: 'その こと で、 これまで 何《なに》 か 行動《こうどう》 された こと は あります か。 これから 何《なに》 か する つもり は あります か。', en: 'What have you done because of this? What do you plan to do?', b: 'Plan' } ] } ],
      note: '妄想《もうそう》 = 訂正《ていせい》 できない 誤《あやま》った 確信《かくしん》 で、 その 人《ひと》 の 文化《ぶんか》 や 宗教《しゅうきょう》 で 共有《きょうゆう》 されて いない もの。 たたり や 霊《れい》 の しわざ と いう 家族《かぞく》 の 考《かんが》え は 文化的《ぶんかてき》 な 説明《せつめい》 で あり、 患者《かんじゃ》さん の 妄想《もうそう》 では ありません。' },

    { id: 'violence', title: '暴力《ぼうりょく》 ・ 他害《たがい》', en: 'Violence risk', risk: true, ut: true, blocks: [
      { items: [ { r: 'violence:0' }, { tl: 'その 相手《あいて》 は だれ です か。 方法《ほうほう》 まで 考《かんが》えました か。 実際《じっさい》 に 行動《こうどう》 に 移《うつ》す つもり は あります か。', en: 'Who? Have you thought about how? Do you intend to do it?' }, { r: 'violence:2' }, { r: 'violence:3' }, { r: 'violence:4' } ] } ],
      note: '特定《とくてい》 の 相手《あいて》 が いる 場合《ばあい》： だれ を、 どう やって、 いつ、 武器《ぶき》 が 手《て》 に 入《はい》る か。 上級医《じょうきゅうい》 に 報告《ほうこく》 し、 記録《きろく》 し、 地域《ちいき》 の 法律《ほうりつ》 と 病院《びょういん》 の 方針《ほうしん》 に 従《したが》って ください。' },

    { id: 'clarify', title: '確認《かくにん》 と 掘《ほ》り下《さ》げ', en: 'Clarifying', ut: true, blocks: [
      { items: [ { tl: 'その こと を もう 少《すこ》し 詳《くわ》しく 教《おし》えて いただけます か。 それ は どう いう 意味《いみ》 です か。', en: 'Can you tell me more about that? What do you mean by that?' }, { tl: 'よく なって きて います か、 それとも 悪《わる》く なって います か。 前《まえ》 に も こう いう こと は ありました か。', en: 'Has it gotten better or worse? Has this happened before?' }, { tl: 'お仕事《しごと》 や 学校《がっこう》、 ご家族《かぞく》 に どんな 影響《えいきょう》 が ありました か。', en: 'How has this affected your work, studies, or family?' }, { r: 'cc-hpi:11' }, { tl: 'お薬《くすり》 は 今《いま》 も 飲《の》んで います か。 やめた 場合《ばあい》 は、 いつ、 どんな 理由《りゆう》 で やめました か。', en: 'Are you still taking your medicine? When did you stop, and why?' } ] } ] },

    { id: 'substance', title: 'アルコール と 薬物《やくぶつ》', en: 'Substance use', ut: true, blocks: [
      { items: [ { tl: 'お酒《さけ》 は 飲《の》まれます か。 ビール、 ワイン、 焼酎《しょうちゅう》、 日本酒《にほんしゅ》、 ウイスキー など、 何《なに》 を 飲《の》みます か。 一回《いっかい》 に どの くらい、 週《しゅう》 に 何日《なんにち》 くらい 飲《の》みます か。', en: 'Do you drink alcohol? What: beer, wine, shochu or sake, liquor? How many in one sitting? How many days a week?' }, { r: 'substance:6' }, { r: 'substance:5' }, { tl: '大麻《たいま》、 覚醒剤《かくせいざい》、 コカイン、 処方《しょほう》 されて いない 薬《くすり》 など を 使《つか》った こと は あります か。 どの くらい の 頻度《ひんど》 で 使《つか》い、 最後《さいご》 に 使《つか》った の は いつ です か。', en: 'Have you ever used marijuana, methamphetamine, cocaine, or non-prescribed pills? How often, and when was the last time?' }, { r: 'substance:10' }, { r: 'substance:12' } ] } ] },

    { id: 'anxiety', title: '不安《ふあん》', en: 'Anxiety screen', ut: true, blocks: [
      { items: [ { tl: 'いろいろ な こと が 心配《しんぱい》 に なる こと が 多《おお》い です か。 心配《しんぱい》 し 始《はじ》める と、 止《と》める の が 難《むずか》しい です か。', en: 'Do you worry a lot? Is it hard to control the worrying?' }, { r: 'anxiety:2' }, { r: 'anxiety:3' }, { tl: '考《かんが》えたくない のに、 同《おな》じ 考《かんが》え が 何度《なんど》 も 浮《う》かんで きます か。 手《て》 を 洗《あら》ったり、 確認《かくにん》 したり、 数《かず》 を 数《かぞ》えたり する こと を、 何度《なんど》 も くり返《かえ》さない と 気《き》 が 済《す》まない こと は あります か。', en: 'Do thoughts keep coming back even if you don\'t want them? Do you have to wash, check, or count over and over?' } ] } ] },

    { id: 'closing', title: '締《し》めくくり', en: 'Closing', ut: true, blocks: [
      { items: [ { r: 'closing:0' }, { r: 'closing:1' }, { r: 'closing:2' }, { tl: 'よく なる よう に、 私《わたし》たち が お手伝《てつだ》いします。 また 明日《あした》 お会《あ》いしましょう。 お大事《だいじ》 に して ください。', en: 'We will help you get better. I will see you again tomorrow. Take care.' } ] } ] },

    { id: 'observe', title: '質問《しつもん》 せず に 観察《かんさつ》 する', en: 'Observed MSE', obs: [
      ['外見《がいけん》', '見《み》た目《め》 の 年齢《ねんれい》、 体格《たいかく》、 服装《ふくそう》、 身《み》だしなみ （良好《りょうこう》 ／ やや 不良《ふりょう》 ／ 不良《ふりょう》）'],
      ['精神運動《せいしんうんどう》', '興奮《こうふん》、 制止《せいし》 ・ 緩慢《かんまん》、 落《お》ち着《つ》き の なさ、 振戦《しんせん》、 異常《いじょう》 運動《うんどう》'],
      ['態度《たいど》 ／ 視線《しせん》', '協力的《きょうりょくてき》、 控《ひか》えめ、 疑《うたが》い深《ぶか》い、 敵対的《てきたいてき》。 医師《いし》 と あまり 目《め》 を 合《あ》わせない の は 礼儀《れいぎ》 の 場合《ばあい》 も あり、 それ だけ で 「警戒的《けいかいてき》」 と は しない'],
      ['話《はな》し方《かた》', '自発性《じはつせい》、 量《りょう》、 速《はや》さ、 声《こえ》 の 大《おお》きさ、 多弁《たべん》 ・ 談話《だんわ》 心迫《しんぱく》。 方言《ほうげん》 や 敬語《けいご》 の 使《つか》い方《かた》 の 違《ちが》い は、 それ だけ で は 異常《いじょう》 所見《しょけん》 では ない'],
      ['感情《かんじょう》', '幅《はば》、 強《つよ》さ、 安定性《あんていせい》、 気分《きぶん》 と の 一致《いっち》'],
      ['思考《しこう》 の 流《なが》れ', 'まとまって いる、 迂遠《うえん》、 接線的《せっせんてき》、 連合《れんごう》 弛緩《しかん》、 観念《かんねん》 奔逸《ほんいつ》、 思考《しこう》 途絶《とぜつ》'],
      ['知覚《ちかく》', '内的《ないてき》 刺激《しげき》 に 反応《はんのう》 して いる か']
    ] },

    { id: 'cognition', title: '認知《にんち》', en: 'Orientation · attention · memory', ut: true, blocks: [
      { items: [ { r: 'mse-cog:0' } ] },
      { h: '見当識《けんとうしき》： 時間《じかん》、 場所《ばしょ》、 人《ひと》', items: [ { tl: '今日《きょう》 の 日付《ひづけ》 を 教《おし》えて ください。 曜日《ようび》 は わかります か。 今《いま》 は 何年《なんねん》 の 何月《なんがつ》 でしょう か。 朝《あさ》、 昼《ひる》、 夜《よる》 の どれ です か。', en: 'What is the date today? The day? Month and year? Is it morning, afternoon, or evening?' }, { tl: '今《いま》 いる 場所《ばしょ》 は どこ だ と 思《おも》います か。 何《なん》 と いう 病院《びょういん》 です か。', en: 'Where are we right now? What place / what hospital is this?' }, { tl: 'お名前《なまえ》 を フルネーム で 教《おし》えて ください。 今《いま》、 おいくつ です か。 私《わたし》 が だれ か、 わかります か。 ここ で 何《なに》 を して いる 人《ひと》 でしょう か。', en: 'What is your full name? How old are you? Who am I? What do I do here?' } ] },
      { h: '注意《ちゅうい》', items: [ { tl: '百《ひゃく》 から 七《なな》 ずつ 減《へ》らしながら、 数《かず》 を 言《い》って ください。 （100、 93、 86、 79、 72）', en: 'Count backwards from 100 by sevens. (100, 93, 86, 79, 72)' }, { tl: '日曜日《にちようび》 から 始《はじ》めて、 曜日《ようび》 を 逆《ぎゃく》 の 順番《じゅんばん》 で 言《い》って ください。 ／ 私《わたし》 の 後《あと》 に 続《つづ》けて 言《い》って ください： 三《さん》、 八《はち》、 二《に》、 五《ご》。', en: 'Say the days of the week backwards, starting with Sunday. / Repeat: 3, 8, 2, 5.' } ] },
      { h: '記憶《きおく》', items: [ { tl: '今《いま》 から 言《い》う 三《みっ》つ の 言葉《ことば》 を 覚《おぼ》えて ください。 ボール、 木《き》、 かぎ。 では、 言《い》って みて ください。 … （三《さん》 〜 五分後《ごふんご》） 先《さき》ほど の 三《みっ》つ の 言葉《ことば》 は 何《なん》 でした か。', en: 'Remember these three words: ball, tree, key. Please repeat them. … (after 3–5 min) What were the three words?' }, { tl: '今朝《けさ》 は 何《なに》 を 食《た》べました か。 今《いま》 の 総理大臣《そうりだいじん》 は だれ です か。', en: 'What did you eat for breakfast? Who is the Prime Minister of Japan now?' } ] },
      { h: '抽象《ちゅうしょう》 思考《しこう》', items: [ { tl: 'バナナ と オレンジ は どこ が 似《に》て います か。 車《くるま》 と バス は どう です か。', en: 'How are a banana and an orange alike? A car and a bus?' }, { r: 'mse-abstract:2' } ] } ],
      note: '最初《さいしょ》 に 学歴《がくれき》 を 聞《き》きます。 学校《がっこう》 教育《きょういく》 が 短《みじか》い 方《かた》 に は、 七《なな》 を 引《ひ》いて いく 計算《けいさん》 より、 曜日《ようび》 を 逆《ぎゃく》 に 言《い》う 課題《かだい》 や 日常《にちじょう》 生活《せいかつ》 に 近《ちか》い 課題《かだい》 を 使《つか》います。' },

    { id: 'insight', title: '病識《びょうしき》 と 判断力《はんだんりょく》', en: '', ut: true, blocks: [
      { h: '病識《びょうしき》 （グレード 1〜6）', items: [ { tl: 'ご自分《じぶん》 が 病気《びょうき》 だ と 思《おも》います か。 ご自分《じぶん》 に 何《なに》 が 起《お》きて いる と 思《おも》います か。', en: 'Do you think you are sick? What do you think is happening to you?' }, { r: 'mse-abstract:8' }, { tl: 'お薬《くすり》 が 役《やく》 に 立《た》つ と 思《おも》います か。 治療《ちりょう》 や 手助《てだす》け が 必要《ひつよう》 だ と 思《おも》います か。', en: 'Do you think medicine could help you? Do you need help?' } ] },
      { h: '判断力《はんだんりょく》', items: [ { r: 'mse-abstract:5' }, { r: 'mse-abstract:6' }, { r: 'mse-abstract:10' } ] } ],
      note: 'グレード と 短《みじか》い 理由《りゆう》 を、 患者《かんじゃ》さん の 言葉《ことば》 で 記録《きろく》 します。 社会的《しゃかいてき》 判断力《はんだんりょく》 = 入院前《にゅういんまえ》 の 実生活《じっせいかつ》 で の 判断《はんだん》。' }
  ]
};
