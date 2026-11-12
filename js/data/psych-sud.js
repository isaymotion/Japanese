/* Substance use disorder screening and brief intervention in Japanese, for the clinic, the wards and the MSE sheet.
   Hanashimashō (Japanese / English). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Criteria follow the DSM-5-TR substance use disorder template (11 criteria, 2 or more within 12 months;
   mild 2–3, moderate 4–5, severe 6 or more), paraphrased in Japanese as questions. Gambling disorder has its own
   9 criteria. Codes are ICD-10-CM as listed in DSM-5-TR; confirm against the manual and local coding practice.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Japanese line in polite です/ます form, `c` = the same
   line in gentle plain form, `en` = English, `n` = clinician note (English), `r` = Japanese names a clinician may hear.
   Templates: {s} and {sa} = the substance noun (Japanese has no articles, so both hold the same noun; every template puts
   a space and a particle after the slot), {w} = withdrawal symptoms (a noun phrase), {u} = the unit to count in
   (杯数《はいすう》, 本数《ほんすう》, 回数《かいすう》). fill(text, sub) replaces them (its Spanish contraction fixes do nothing here).
   fillEn(text, sub) fills the English with the English noun and unit.
   These are practice phrasings for training, not validated translations. Nothing here stores patient information. */
(function () {
  const SUB = [
    { id: 'alcohol', label: 'Alcohol', s: 'お酒《さけ》', sa: 'お酒《さけ》', en: 'alcohol', unit: '杯数《はいすう》', unitEn: 'drinks',
      dsm: 'Alcohol use disorder', cls: 'alcohol', codes: { mild: 'F10.10', modsev: 'F10.20', remMild: 'F10.11', remModsev: 'F10.21' },
      w: '手《て》 の ふるえ、 汗《あせ》、 不安《ふあん》、 不眠《ふみん》、 吐《は》き気《け》 や 嘔吐《おうと》、 または 実際《じっさい》 に は ない もの が 見《み》えたり 聞《き》こえたり する こと',
      wen: 'shaking hands, sweating, anxiety, insomnia, nausea or vomiting, or seeing or hearing things that are not there',
      ask: [
        { tl: 'お酒《さけ》 は 飲《の》みます か。 何《なに》 を 飲《の》みます か。 ビール、 チューハイ、 日本酒《にほんしゅ》、 焼酎《しょうちゅう》、 ワイン、 ウイスキー など です。', c: 'お酒《さけ》 は 飲《の》む？ 何《なに》 を 飲《の》む？ ビール、 チューハイ、 日本酒《にほんしゅ》、 焼酎《しょうちゅう》、 ワイン、 ウイスキー とか。', en: 'Do you drink alcohol? What do you drink: beer, chūhai, sake, shōchū, wine, whisky?', n: 'Strong chūhai cans (9%, 500 ml, about 36 g of alcohol) are easy to under-report. Ask "what do you drink?" rather than "do you drink a lot?"; patients answer the first honestly.', r: 'ストロング = strong chūhai cans; 晩酌《ばんしゃく》 = a regular evening drink at home; 飲《の》み会《かい》 = drinking party; 二日酔《ふつかよ》い = hangover' },
        { tl: '一回《いっかい》 に 何杯《なんばい》 くらい 飲《の》みます か。 一週間《いっしゅうかん》 に 何日《なんにち》 飲《の》みます か。', c: '一回《いっかい》 に 何杯《なんばい》 くらい 飲《の》む？ 一週間《いっしゅうかん》 に 何日《なんにち》 飲《の》む？', en: 'How many drinks do you have on one occasion? How many days a week do you drink?', n: 'US standard drink = 14 g alcohol. Patients may also think in grams of pure alcohol (純《じゅん》アルコール 量《りょう》). A 500 ml can of 5% beer is about 20 g (1.4 drinks); one gō (180 ml) of sake about 22 g (1.5); a 500 ml can of 9% strong chūhai about 36 g (2.6); a 720 ml bottle of 25% shōchū about 144 g (about 10).' },
        { tl: '最後《さいご》 に 飲《の》んだ の は いつ です か。', c: '最後《さいご》 に 飲《の》んだ の は いつ？', en: 'When was your last drink?', n: 'Heavy daily drinkers whose last drink was 6–48 hours ago need withdrawal monitoring.' },
        { tl: 'お酒《さけ》 を やめた 後《あと》 に、 けいれん が 起《お》きたり、 実際《じっさい》 に は ない もの が 見《み》えたり した こと は あります か。', c: 'お酒《さけ》 を やめた 後《あと》 に、 けいれん が 起《お》きたり、 実際《じっさい》 に は ない もの が 見《み》えたり した こと ある？', en: 'Have you ever had a seizure, or seen things that were not there, after stopping drinking?', n: 'Past withdrawal seizures or delirium tremens predict a more severe course.' }
      ],
      psychoed: [
        { tl: 'お酒《さけ》 の 飲《の》みすぎ は、 肝臓《かんぞう》、 すい臓《ぞう》、 心臓《しんぞう》 を 傷《いた》め、 血圧《けつあつ》 も 上《あ》げます。', c: 'お酒《さけ》 の 飲《の》みすぎ は、 肝臓《かんぞう》、 すい臓《ぞう》、 心臓《しんぞう》 を 傷《いた》める し、 血圧《けつあつ》 も 上《あ》げる よ。', en: 'Too much alcohol damages the liver, pancreas and heart, and raises blood pressure.' },
        { tl: '最初《さいしょ》 は 楽《らく》 に なる よう に 感《かん》じて も、 気分《きぶん》 の 落《お》ち込《こ》み や 不安《ふあん》 を 悪《わる》く し、 眠《ねむ》り も 浅《あさ》く なります。', c: '最初《さいしょ》 は 楽《らく》 に なる 気《き》 が して も、 落《お》ち込《こ》み や 不安《ふあん》 を 悪《わる》く する し、 眠《ねむ》り も 浅《あさ》く なる よ。', en: 'It also worsens sadness and anxiety and ruins sleep, even though at first it seems to help.' },
        { tl: '毎日《まいにち》 たくさん 飲《の》んで いる 場合《ばあい》 は、 医師《いし》 に 相談《そうだん》 せず に 急《きゅう》 に やめない で ください。 離脱症状《りだつしょうじょう》 は 危険《きけん》 な こと が あります。', c: '毎日《まいにち》 たくさん 飲《の》んで いる なら、 医者《いしゃ》 に 相談《そうだん》 しない で 急《きゅう》 に やめない で ね。 離脱症状《りだつしょうじょう》 は 危《あぶ》ない こと が ある から。', en: 'If you drink heavily every day, do not stop suddenly without a doctor\'s guidance. Withdrawal can be dangerous.', n: 'Seizures and delirium tremens.' },
        { tl: '薬《くすり》、 カウンセリング、 家族《かぞく》 の 支《ささ》え で、 お酒《さけ》 を やめられた 方《かた》 は たくさん います。', c: '薬《くすり》、 カウンセリング、 家族《かぞく》 の 支《ささ》え で、 お酒《さけ》 を やめられた 人《ひと》 は たくさん いる よ。', en: 'Many people stop with the help of medicine, counseling and family support.', n: 'Naltrexone, acamprosate; refer to local mutual-help groups (such as AA) and services.' }
      ] },
    { id: 'tobacco', label: 'Tobacco and vaping', s: 'たばこ', sa: 'たばこ', en: 'tobacco', unit: '本数《ほんすう》', unitEn: 'cigarettes',
      dsm: 'Tobacco use disorder', cls: 'tobacco', codes: { mild: 'Z72.0', modsev: 'F17.200', remMild: 'Z72.0 (no remission code for mild)', remModsev: 'F17.201' },
      w: 'いらいら、 不安《ふあん》、 集中《しゅうちゅう》 できない こと、 食欲《しょくよく》 が 増《ふ》える こと、 または 眠《ねむ》れない こと',
      wen: 'irritability, anxiety, poor concentration, increased appetite, or insomnia',
      ask: [
        { tl: 'たばこ は 吸《す》います か。 加熱式《かねつしき》 たばこ や 電子《でんし》 たばこ は 使《つか》って います か。', c: 'たばこ は 吸《す》う？ 加熱式《かねつしき》 たばこ や 電子《でんし》 たばこ は 使《つか》って る？', en: 'Do you smoke? Do you use heated tobacco or e-cigarettes?', n: 'Ask about heated tobacco by name; many patients who use it say they do not smoke. Count heated-tobacco sticks like cigarettes.', r: '加熱式《かねつしき》 たばこ = heated tobacco (patients often use the brand name, e.g. アイコス); 電子《でんし》 たばこ / ベイプ = e-cigarette; 一箱《ひとはこ》 = one pack' },
        { tl: '一日《いちにち》 に 何本《なんぼん》、 または 何箱《なんはこ》 くらい 吸《す》います か。 何年《なんねん》 くらい 吸《す》って います か。', c: '一日《いちにち》 に 何本《なんぼん》、 または 何箱《なんはこ》 くらい 吸《す》う？ 何年《なんねん》 くらい 吸《す》って る？', en: 'How many cigarettes or how many packs a day? For how many years?', n: 'Pack (箱《はこ》) = 20. Pack-years = packs per day × years. For heated tobacco, count sticks per day.' },
        { tl: '朝《あさ》 起《お》きて から、 どの くらい で 最初《さいしょ》 の 一本《いっぽん》 を 吸《す》います か。', c: '朝《あさ》 起《お》きて から、 どの くらい で 最初《さいしょ》 の 一本《いっぽん》 を 吸《す》う？', en: 'How soon after waking do you smoke your first cigarette?', n: 'Within 30 minutes suggests heavier dependence.' },
        { tl: '最後《さいご》 に 吸《す》った の は いつ です か。', c: '最後《さいご》 に 吸《す》った の は いつ？', en: 'When was your last cigarette?' }
      ],
      psychoed: [
        { tl: '喫煙《きつえん》 は、 肺《はい》 や 心臓《しんぞう》 の 病気《びょうき》、 脳卒中《のうそっちゅう》、 多《おお》く の がん の 大《おお》きな 原因《げんいん》 です。', c: 'たばこ は、 肺《はい》 や 心臓《しんぞう》 の 病気《びょうき》、 脳卒中《のうそっちゅう》、 いろいろ な がん の 大《おお》きな 原因《げんいん》 なんだ よ。', en: 'Smoking is a leading cause of lung and heart disease, stroke, and many cancers.' },
        { tl: 'たばこ を やめる と、 数週間《すうしゅうかん》 で 息《いき》 が 楽《らく》 に なり、 一年《いちねん》 で 心臓《しんぞう》 の リスク が 大《おお》きく 下《さ》がります。', c: 'たばこ を やめる と、 数週間《すうしゅうかん》 で 息《いき》 が 楽《らく》 に なって、 一年《いちねん》 で 心臓《しんぞう》 の リスク が すごく 下《さ》がる よ。', en: 'After stopping: breathing improves within weeks; within a year the heart risk falls a lot.' },
        { tl: 'いちばん つらい の は 最初《さいしょ》 の 一週間《いっしゅうかん》 です。 いらいら や 吸《す》いたい 気持《きも》ち は、 だんだん おさまります。', c: 'いちばん つらい の は 最初《さいしょ》 の 一週間《いっしゅうかん》 だ よ。 いらいら や 吸《す》いたい 気持《きも》ち は、 だんだん おさまる から。', en: 'The first week is the hardest. The irritability and the craving pass.' },
        { tl: 'ニコチン パッチ や ニコチン ガム、 ブプロピオン、 バレニクリン など、 助《たす》け に なる 薬《くすり》 が あります。 一緒《いっしょ》 に 相談《そうだん》 しましょう。', c: 'ニコチン パッチ や ニコチン ガム、 ブプロピオン、 バレニクリン など、 助《たす》け に なる 薬《くすり》 が ある よ。 一緒《いっしょ》 に 考《かんが》えよう。', en: 'There are medicines that help, like nicotine patches or gum, bupropion and varenicline. We can talk about them.', n: 'Combination NRT (patch + gum or lozenge) or varenicline doubles quit rates. Refer to local smoking-cessation services; check which medicines are currently available locally.' }
      ] },
    { id: 'cannabis', label: 'Cannabis', s: '大麻《たいま》', sa: '大麻《たいま》', en: 'cannabis', unit: '回数《かいすう》', unitEn: 'times',
      dsm: 'Cannabis use disorder', cls: 'cannabis', codes: { mild: 'F12.10', modsev: 'F12.20', remMild: 'F12.11', remModsev: 'F12.21' },
      w: 'いらいら、 眠《ねむ》れない こと、 食欲《しょくよく》 が なくなる こと、 または 不安《ふあん》',
      wen: 'irritability, insomnia, loss of appetite, or anxiety',
      ask: [
        { tl: '大麻《たいま》 は 使《つか》います か。 どう やって 使《つか》います か。 吸《す》う、 ワックス など の 濃縮《のうしゅく》 タイプ、 電子《でんし》 たばこ の リキッド、 グミ など の 食《た》べる もの、 の どれ です か。', c: '大麻《たいま》 は 使《つか》う？ どう やって 使《つか》う？ 吸《す》う、 ワックス みたい な 濃縮《のうしゅく》 タイプ、 電子《でんし》 たばこ の リキッド、 グミ とか の 食《た》べる もの、 どれ？', en: 'Do you use marijuana? How: smoking it, concentrates like wax or dabs, vapes, or edibles?', n: 'Concentrates and THC vapes are far stronger than flower; ask what and how, not just "do you smoke weed". Also ask about gummies or liquids sold as legal; some contain THC-like synthetic cannabinoids.', r: 'マリファナ, 葉《は》っぱ, 草《くさ》, ガンジャ; ジョイント = joint; リキッド = vape liquid; グミ = edibles' },
        { tl: '毎日《まいにち》 使《つか》います か。 一日《いちにち》 に 何回《なんかい》 です か。', c: '毎日《まいにち》 使《つか》う？ 一日《いちにち》 に 何回《なんかい》？', en: 'Do you use it every day? How many times a day?' },
        { tl: '最後《さいご》 に 使《つか》った の は いつ です か。', c: '最後《さいご》 に 使《つか》った の は いつ？', en: 'When was the last time you used it?' }
      ],
      psychoed: [
        { tl: '大麻《たいま》 を よく 使《つか》う と、 特《とく》 に 若《わか》い 人《ひと》 で は、 幻覚《げんかく》 や 妄想《もうそう》 が 出《で》る 病気《びょうき》 の リスク が 高《たか》く なり、 記憶《きおく》 や やる気《き》 に も 影響《えいきょう》 します。', c: '大麻《たいま》 を よく 使《つか》う と、 特《とく》 に 若《わか》い 人《ひと》 は、 幻覚《げんかく》 や 妄想《もうそう》 が 出《で》る 病気《びょうき》 の リスク が 高《たか》く なる し、 記憶《きおく》 や やる気《き》 に も 影響《えいきょう》 する よ。', en: 'Frequent marijuana use raises the risk of psychosis, especially in young people, and affects memory and motivation.' },
        { tl: 'やめる と、 一週間《いっしゅうかん》 から 二週間《にしゅうかん》 ほど、 いらいら や 不眠《ふみん》 が 出《で》る こと が あります。 それ は おさまります。', c: 'やめる と、 一週間《いっしゅうかん》 から 二週間《にしゅうかん》 ぐらい、 いらいら したり 眠《ねむ》れなかったり する こと が ある。 でも、 それ は おさまる よ。', en: 'When you stop there can be irritability and insomnia for one or two weeks. That passes.' },
        { tl: '激《はげ》しく 吐《は》く こと が 繰《く》り返《かえ》し 起《お》こり、 熱《あつ》い シャワー で 楽《らく》 に なる 場合《ばあい》 は、 大麻《たいま》 が 原因《げんいん》 かも しれません。 治《なお》す 方法《ほうほう》 は、 大麻《たいま》 を やめる こと だけ です。', c: '激《はげ》しく 吐《は》く こと が 何度《なんど》 も あって、 熱《あつ》い シャワー で 楽《らく》 に なる なら、 大麻《たいま》 の せい かも しれない。 治《なお》す 方法《ほうほう》 は、 大麻《たいま》 を やめる こと だけ なんだ。', en: 'If you have severe vomiting that comes and goes and gets better with hot showers, it may be from the marijuana. Stopping is the only cure.', n: 'Cannabinoid hyperemesis syndrome (CHS).' }
      ] },
    { id: 'meth', label: 'Methamphetamine', s: '覚醒剤《かくせいざい》', sa: '覚醒剤《かくせいざい》', en: 'methamphetamine', unit: '回数《かいすう》', unitEn: 'times',
      dsm: 'Stimulant use disorder, amphetamine-type substance (methamphetamine)', cls: 'stimulant', codes: { mild: 'F15.10', modsev: 'F15.20', remMild: 'F15.11', remModsev: 'F15.21' },
      w: 'ひどい だるさ、 眠《ねむ》り すぎる こと や 眠《ねむ》れない こと、 気分《きぶん》 の 落《お》ち込《こ》み、 強《つよ》い 食欲《しょくよく》、 または 悪《わる》い 夢《ゆめ》',
      wen: 'severe fatigue, sleeping too much or too little, low mood, strong appetite, or bad dreams',
      ask: [
        { tl: 'これ から 薬物《やくぶつ》 に ついて お聞《き》き します。 秘密《ひみつ》 は 守《まも》られ、 治療《ちりょう》 の ため の 質問《しつもん》 です。 責《せ》める ため では ありません。 覚醒剤《かくせいざい》 や、 ほか の 薬物《やくぶつ》 を 使《つか》った こと は あります か。', c: 'これ から 薬物《やくぶつ》 の こと を 聞《き》く ね。 秘密《ひみつ》 は 守《まも》る し、 治療《ちりょう》 の ため の 質問《しつもん》 だ よ。 責《せ》める ため じゃ ない から ね。 覚醒剤《かくせいざい》 や、 ほか の 薬物《やくぶつ》 を 使《つか》った こと ある？', en: 'I am going to ask about drugs. It is confidential and it is for your treatment; I am not here to judge you. Have you used methamphetamine, crystal, or any other drug?', n: 'Say the preface before asking. Do not promise that it is never shared with the police; say what is true: it is confidential medical information used for treatment. On reporting, follow local law and your hospital\'s policy.', r: 'シャブ, エス, スピード, アイス, クリスタル; あぶり = smoking it from foil; ポンプ = syringe' },
        { tl: 'どう やって 使《つか》います か。 あぶって 吸《す》う、 鼻《はな》 から 吸《す》う、 注射《ちゅうしゃ》 する、 の どれ です か。', c: 'どう やって 使《つか》う？ あぶって 吸《す》う、 鼻《はな》 から 吸《す》う、 注射《ちゅうしゃ》 する、 どれ？', en: 'How do you use it: smoked, snorted, or injected?' },
        { tl: 'どの くらい の 頻度《ひんど》 で 使《つか》います か。 最後《さいご》 に 使《つか》った の は いつ です か。', c: 'どの くらい の ペース で 使《つか》う？ 最後《さいご》 に 使《つか》った の は いつ？', en: 'How often? When was the last time?' },
        { tl: '使《つか》って いる とき に、 見張《みは》られて いる 感《かん》じ が したり、 人《ひと》 を 強《つよ》く 疑《うたが》ったり、 声《こえ》 が 聞《き》こえたり、 ひどく 怒《おこ》ったり した こと は あります か。', c: '使《つか》って いる とき に、 見張《みは》られて いる 感《かん》じ が したり、 人《ひと》 を すごく 疑《うたが》ったり、 声《こえ》 が 聞《き》こえたり、 すごく 怒《おこ》ったり した こと ある？', en: 'While using, have you felt watched or very suspicious, heard voices, or become very angry?' },
        { tl: '使《つか》って いる とき に、 体《からだ》 が ひどく 熱《あつ》く なったり、 胸《むね》 が 痛《いた》く なったり、 動悸《どうき》 が 激《はげ》しく なったり した こと は あります か。', c: '使《つか》って いる とき に、 体《からだ》 が すごく 熱《あつ》く なったり、 胸《むね》 が 痛《いた》く なったり、 心臓《しんぞう》 が すごく ドキドキ したり した こと ある？', en: 'Have you had overheating, chest pain, or a racing heart while using?', n: 'Hyperthermia and chest pain need medical evaluation.' }
      ],
      psychoed: [
        { tl: '覚醒剤《かくせいざい》 は、 被害妄想《ひがいもうそう》、 幻聴《げんちょう》、 不眠《ふみん》、 怒《いか》り を 引《ひ》き起《お》こし、 心臓《しんぞう》 や 歯《は》 を 傷《いた》めます。', c: '覚醒剤《かくせいざい》 は、 被害妄想《ひがいもうそう》、 幻聴《げんちょう》、 不眠《ふみん》、 怒《いか》り を 引《ひ》き起《お》こす し、 心臓《しんぞう》 や 歯《は》 を 傷《いた》める よ。', en: 'Methamphetamine causes paranoia, voices, insomnia and anger, and damages the heart and teeth.' },
        { tl: '使《つか》った 後《あと》 は 反動《はんどう》 が 来《き》て、 ひどい 落《お》ち込《こ》み と だるさ が 出《で》ます。 私《わたし》たち は 責《せ》める ため では なく、 助《たす》ける ため に ここ に います。', c: '使《つか》った 後《あと》 は 反動《はんどう》 が 来《き》て、 すごく 落《お》ち込《こ》んだり、 だるく なったり する。 私《わたし》たち は 責《せ》める ため じゃ なくて、 助《たす》ける ため に ここ に いる よ。', en: 'After use comes the crash: severe low mood and exhaustion. We are here to help you, not to judge you.' },
        { tl: '効果《こうか》 の ある 治療《ちりょう》 プログラム が あります。 よろしければ、 ご紹介《しょうかい》 します。', c: '効果《こうか》 の ある 治療《ちりょう》 プログラム が ある よ。 よかったら 紹介《しょうかい》 する ね。', en: 'There are treatment programs that do work. If you want, we can refer you.', n: 'Contingency management has the best evidence for stimulant use disorder; there is no FDA-approved medication yet.' }
      ] },
    { id: 'cocaine', label: 'Cocaine and crack', s: 'コカイン', sa: 'コカイン', en: 'cocaine', unit: '回数《かいすう》', unitEn: 'times',
      dsm: 'Cocaine use disorder', cls: 'stimulant', codes: { mild: 'F14.10', modsev: 'F14.20', remMild: 'F14.11', remModsev: 'F14.21' },
      w: 'だるさ、 気分《きぶん》 の 落《お》ち込《こ》み、 眠《ねむ》り すぎる こと や 悪《わる》い 夢《ゆめ》、 強《つよ》い 食欲《しょくよく》、 または 落《お》ち着《つ》かなさ',
      wen: 'fatigue, low mood, sleeping too much or bad dreams, strong appetite, or restlessness',
      ask: [
        { tl: 'コカイン や クラック は 使《つか》います か。 どう やって 使《つか》います か。 鼻《はな》 から 吸《す》う、 あぶって 吸《す》う、 注射《ちゅうしゃ》 する、 の どれ です か。', c: 'コカイン や クラック は 使《つか》う？ どう やって 使《つか》う？ 鼻《はな》 から 吸《す》う、 あぶって 吸《す》う、 注射《ちゅうしゃ》 する、 どれ？', en: 'Do you use cocaine or crack? How: snorted, smoked, or injected?', r: 'コーク, スノー, C (シー); クラック = crack' },
        { tl: 'どの くらい の 頻度《ひんど》 で 使《つか》います か。 最後《さいご》 に 使《つか》った の は いつ です か。', c: 'どの くらい の ペース で 使《つか》う？ 最後《さいご》 に 使《つか》った の は いつ？', en: 'How often? When was the last time?' },
        { tl: '使《つか》って いる とき に、 胸《むね》 の 痛《いた》み や けいれん が 起《お》きた こと は あります か。', c: '使《つか》って いる とき に、 胸《むね》 が 痛《いた》く なったり、 けいれん が 起《お》きたり した こと ある？', en: 'Have you had chest pain or seizures while using?' },
        { tl: 'お酒《さけ》 と 一緒《いっしょ》 に 使《つか》います か。 使《つか》って いる もの に フェンタニル が 混《ま》ざって いる かも しれない こと を ご存《ぞん》じ です か。', c: 'お酒《さけ》 と 一緒《いっしょ》 に 使《つか》う？ 使《つか》って いる もの に フェンタニル が 混《ま》ざって いる かも しれない って、 知《し》って る？', en: 'Do you mix it with alcohol? Do you know whether what you use could contain fentanyl?', n: 'Cocaine plus alcohol forms cocaethylene (more cardiotoxic). Fentanyl contamination of cocaine is common; offer naloxone and fentanyl test strips.' }
      ],
      psychoed: [
        { tl: 'コカイン は、 若《わか》い 人《ひと》 で も、 初《はじ》めて の 一回《いっかい》 で も、 心筋梗塞《しんきんこうそく》 や 脳卒中《のうそっちゅう》 を 起《お》こす こと が あります。', c: 'コカイン は、 若《わか》い 人《ひと》 で も、 初《はじ》めて の 一回《いっかい》 で も、 心筋梗塞《しんきんこうそく》 や 脳卒中《のうそっちゅう》 を 起《お》こす こと が ある よ。', en: 'Cocaine can cause a heart attack or a stroke, even in young people and even the first time.' },
        { tl: '効《き》き目《め》 が 切《き》れる と 反動《はんどう》 が 来《き》て、 落《お》ち込《こ》み、 だるさ、 また 使《つか》いたい 強《つよ》い 気持《きも》ち が 出《で》ます。', c: '効《き》き目《め》 が 切《き》れる と 反動《はんどう》 が 来《き》て、 落《お》ち込《こ》んだり、 だるく なったり、 また すごく 使《つか》いたく なったり する。', en: 'After the high comes the crash: sadness, exhaustion and a strong urge to use again.' },
        { tl: '今《いま》 は、 路上《ろじょう》 で 売《う》られる 錠剤《じょうざい》 や 粉《こな》 の 多《おお》く に、 知《し》らない うち に フェンタニル が 入《い》って います。 ナロキソン を 手元《てもと》 に 置《お》き、 一人《ひとり》 で 使《つか》わない で ください。', c: '今《いま》 は、 路上《ろじょう》 で 売《う》られる 錠剤《じょうざい》 や 粉《こな》 の 多《おお》く に、 知《し》らない うち に フェンタニル が 入《い》って いる。 ナロキソン を 手元《てもと》 に 置《お》いて、 一人《ひとり》 で 使《つか》わない で ね。', en: 'Today many street pills and powders contain fentanyl without people knowing. Keep naloxone (Narcan) on hand and do not use alone.' }
      ] },
    { id: 'opioids', label: 'Opioids and fentanyl', s: 'オピオイド', sa: 'オピオイド', en: 'opioids', unit: '回数《かいすう》', unitEn: 'times',
      dsm: 'Opioid use disorder', cls: 'opioid', codes: { mild: 'F11.10', modsev: 'F11.20', remMild: 'F11.11', remModsev: 'F11.21' },
      w: '体《からだ》 や 骨《ほね》 の 痛《いた》み、 汗《あせ》、 寒気《さむけ》、 吐《は》き気《け》、 嘔吐《おうと》 や 下痢《げり》、 不安《ふあん》、 または 不眠《ふみん》',
      wen: 'body and bone aches, sweating, chills, nausea, vomiting or diarrhea, anxiety, or insomnia',
      ask: [
        { tl: '処方《しょほう》 されて いない 痛《いた》み止《ど》め、 咳止《せきど》め の 市販薬《しはんやく》、 ヘロイン、 フェンタニル など を 使《つか》います か。', c: '処方《しょほう》 されて いない 痛《いた》み止《ど》め、 咳止《せきど》め の 市販薬《しはんやく》、 ヘロイン、 フェンタニル とか を 使《つか》う？', en: 'Do you use pain pills that were not prescribed to you, over-the-counter cough medicine, heroin, or fentanyl?', n: 'In the US most street "oxycodone" M30 pills are counterfeit and contain fentanyl. Ask also about over-the-counter cough medicines containing codeine or dihydrocodeine.', r: 'ヘロイン; フェンタニル; 痛《いた》み止《ど》め = pain pills; 咳止《せきど》め / ブロン = OTC cough medicine; オーバードーズ / OD = overdose' },
        { tl: 'どう やって 使《つか》います か。 飲《の》む、 鼻《はな》 から 吸《す》う、 あぶって 吸《す》う、 注射《ちゅうしゃ》 する、 の どれ です か。', c: 'どう やって 使《つか》う？ 飲《の》む、 鼻《はな》 から 吸《す》う、 あぶって 吸《す》う、 注射《ちゅうしゃ》 する、 どれ？', en: 'How do you use them: swallowed, snorted, smoked, or injected?' },
        { tl: 'どの くらい の 頻度《ひんど》 で 使《つか》います か。 最後《さいご》 に 使《つか》った の は いつ です か。', c: 'どの くらい の ペース で 使《つか》う？ 最後《さいご》 に 使《つか》った の は いつ？', en: 'How often? When was the last time?', n: 'Last use 8–24 hours ago (short-acting) → watch for withdrawal; COWS is in Psychiatry → Withdrawal.' },
        { tl: 'これ まで に オーバードーズ を した こと は あります か。 家《いえ》 に ナロキソン は あります か。', c: 'これ まで に オーバードーズ を した こと ある？ 家《いえ》 に ナロキソン は ある？', en: 'Have you ever overdosed? Do you have naloxone (Narcan) at home?', n: 'A recent overdose is the strongest predictor of another one. Give or prescribe naloxone before the patient leaves.' },
        { tl: '注射《ちゅうしゃ》 して いる 場合《ばあい》、 針《はり》 や 注射器《ちゅうしゃき》 を ほか の 人《ひと》 と 共有《きょうゆう》 した こと は あります か。 HIV と C型《がた》 肝炎《かんえん》 の 検査《けんさ》 を 受《う》けて いただけます。', c: '注射《ちゅうしゃ》 して いる なら、 針《はり》 や 注射器《ちゅうしゃき》 を ほか の 人《ひと》 と 使《つか》い回《まわ》した こと ある？ HIV と C型《がた》 肝炎《かんえん》 の 検査《けんさ》 が 受《う》けられる よ。', en: 'If you inject: have you shared needles or syringes? We offer testing for HIV and hepatitis C.', n: 'Also look at injection sites for infection.' },
        { tl: '妊娠《にんしん》 して います か。 または、 その 可能性《かのうせい》 は あります か。', c: '妊娠《にんしん》 して る？ または、 その 可能性《かのうせい》 は ある？', en: 'Are you pregnant, or could you be?', n: 'Pregnant patients with opioid use disorder need buprenorphine or methadone promptly; do not detox.' }
      ],
      psychoed: [
        { tl: '今《いま》 は、 路上《ろじょう》 で 出回《でまわ》る 錠剤《じょうざい》 や 粉《こな》 の ほとんど に フェンタニル が 入《い》って います。 だから、 初《はじ》めて で も、 一回《いっかい》 の 使用《しよう》 で オーバードーズ に なる こと が あります。', c: '今《いま》 は、 路上《ろじょう》 で 出回《でまわ》る 錠剤《じょうざい》 や 粉《こな》 の ほとんど に フェンタニル が 入《い》って いる。 だから、 初《はじ》めて で も、 一回《いっかい》 で オーバードーズ に なる こと が ある よ。', en: 'Today almost all street pills and powders contain fentanyl. That is why any use can be an overdose, even the first time.' },
        { tl: '一人《ひとり》 で 使《つか》わない で ください。 だれ か に そば に いて もらう か、 様子《ようす》 を 見《み》 に 来《き》て もらって ください。', c: '一人《ひとり》 で 使《つか》わない で ね。 だれ か に そば に いて もらう か、 様子《ようす》 を 見《み》 に 来《き》て もらって。', en: 'Never use alone. Have someone with you or someone who can check on you.' },
        { tl: 'ナロキソン を 手元《てもと》 に 置《お》いて ください。 鼻《はな》 の 片方《かたほう》 に スプレー して、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 します。 二分《にふん》 から 三分《さんぷん》 で 反応《はんのう》 が なければ、 もう 一回《いっかい》 使《つか》います。 息《いき》 を して いなければ、 人工呼吸《じんこうこきゅう》 を して ください。', c: 'ナロキソン を 手元《てもと》 に 置《お》いて おいて ね。 鼻《はな》 の 片方《かたほう》 に スプレー して、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 する。 二分《にふん》 から 三分《さんぷん》 で 反応《はんのう》 が なければ、 もう 一回《いっかい》 使《つか》う。 息《いき》 を して いなければ、 人工呼吸《じんこうこきゅう》 を して。', en: 'Keep naloxone (Narcan) on hand. Spray it in one nostril, call 119 (emergency services), and if there is no response in two or three minutes give a second dose. If they are not breathing, give rescue breaths.', n: 'Take-home naloxone is not available everywhere; check what is available locally and follow your hospital\'s policy.' },
        { tl: 'ブプレノルフィン や メサドン で 治療《ちりょう》 する と、 オーバードーズ で 亡《な》くなる 人《ひと》 は 半分《はんぶん》 以下《いか》 に 減《へ》ります。 早《はや》め に 始《はじ》める こと が できます。', c: 'ブプレノルフィン や メサドン で 治療《ちりょう》 する と、 オーバードーズ で 亡《な》くなる 人《ひと》 は 半分《はんぶん》 以下《いか》 に 減《へ》る よ。 早《はや》め に 始《はじ》められる から ね。', en: 'Treatment with buprenorphine (Suboxone) or methadone cuts overdose deaths by more than half. We can start it soon.', n: 'Offer medication the same day when possible; waiting lists lose patients.' },
        { tl: '依存症《いぞんしょう》 は 病気《びょうき》 です。 意志《いし》 の 弱《よわ》さ では ありません。 そして、 治療《ちりょう》 できます。', c: '依存症《いぞんしょう》 は 病気《びょうき》 なんだ。 意志《いし》 が 弱《よわ》い から じゃ ない よ。 そして、 治療《ちりょう》 できる。', en: 'Addiction is an illness, not a moral failing. And it can be treated.' }
      ] },
    { id: 'other', label: 'Other (benzodiazepines, inhalants, hallucinogens, others)', s: 'その 薬物《やくぶつ》', sa: 'その 薬物《やくぶつ》', en: 'the substance', unit: '回数《かいすう》', unitEn: 'times',
      dsm: 'Other (or unknown) substance use disorder (name the substance)', cls: 'other', codes: { mild: 'F19.10', modsev: 'F19.20', remMild: 'F19.11', remModsev: 'F19.21' },
      w: '体《からだ》 や 心《こころ》 の 不調《ふちょう》',
      wen: 'physical or mental discomfort',
      ask: [
        { tl: 'ほか に、 気分《きぶん》 を 変《か》える ため に 使《つか》って いる もの は あります か。 処方《しょほう》 されて いない 睡眠薬《すいみんやく》 や 安定剤《あんていざい》、 たくさん 飲《の》む 市販《しはん》 の 咳止《せきど》め や かぜ薬《ぐすり》、 シンナー、 マジック マッシュルーム、 LSD など です。 何《なん》 です か。', c: 'ほか に、 気分《きぶん》 を 変《か》える ため に 使《つか》って いる もの は ある？ 処方《しょほう》 されて いない 睡眠薬《すいみんやく》 や 安定剤《あんていざい》、 たくさん 飲《の》む 市販《しはん》 の 咳止《せきど》め や かぜ薬《ぐすり》、 シンナー、 マジック マッシュルーム、 LSD とか。 何《なに》？', en: 'Do you use anything else to feel different: sleeping pills or tranquillizers that were not prescribed to you, over-the-counter cough or cold medicines in large amounts, inhalants, mushrooms or LSD, or something else? What is it?', n: 'Ask for the name of any benzodiazepine or sleeping pill (e.g. etizolam, デパス), and about overdose of over-the-counter cough and cold medicines (dextromethorphan, codeine or caffeine). Use the specific code (F13.x sedatives, F18.x inhalants, F16.x hallucinogens) once the substance is named.', r: 'OD / オーバードーズ = taking a large amount of medicine; 眠剤《みんざい》 = sleeping pills; 市販薬《しはんやく》 = OTC medicine; シンナー = solvent; キノコ = mushrooms' },
        { tl: 'どの くらい の 頻度《ひんど》 で 使《つか》います か。 最後《さいご》 に 使《つか》った の は いつ です か。', c: 'どの くらい の ペース で 使《つか》う？ 最後《さいご》 に 使《つか》った の は いつ？', en: 'How often, and when was the last time?' }
      ],
      psychoed: [
        { tl: '処方《しょほう》 の とおり に 使《つか》わない 薬《くすり》 や 薬物《やくぶつ》 は、 体《からだ》 と 心《こころ》 を 傷《いた》める こと が あります。', c: '処方《しょほう》 の とおり に 使《つか》わない 薬《くすり》 や 薬物《やくぶつ》 は、 体《からだ》 と 心《こころ》 を 傷《いた》める こと が ある よ。', en: 'Any medicine or drug used outside its prescription can harm the body and the mind.' },
        { tl: '安定剤《あんていざい》 を 毎日《まいにち》 飲《の》んで いる 場合《ばあい》 は、 急《きゅう》 に やめない で ください。 離脱症状《りだつしょうじょう》 で けいれん が 起《お》きる こと が あります。 まず 医師《いし》 に 相談《そうだん》 して ください。', c: '安定剤《あんていざい》 を 毎日《まいにち》 飲《の》んで いる なら、 急《きゅう》 に やめない で ね。 離脱症状《りだつしょうじょう》 で けいれん が 起《お》きる こと が ある。 まず 医者《いしゃ》 に 相談《そうだん》 して。', en: 'If you take nerve pills every day, do not stop them suddenly: withdrawal can cause seizures. Talk to the doctor first.', n: 'Benzodiazepine withdrawal; taper under supervision.' }
      ] },
    { id: 'gambling', label: 'Gambling (sports betting, casino, online, lottery)', s: 'ギャンブル', sa: 'ギャンブル', en: 'gambling', unit: '賭《か》け の 回数《かいすう》', unitEn: 'bets', gamble: true,
      dsm: 'Gambling disorder', cls: 'gambling', codes: { mild: 'F63.0', modsev: 'F63.0', remMild: 'F63.0', remModsev: 'F63.0' },
      w: '落《お》ち着《つ》かなさ や いらいら',
      wen: 'restlessness or irritability',
      ask: [
        { tl: 'ギャンブル は します か。 たとえば、 パチンコ や パチスロ、 競馬《けいば》 や 競艇《きょうてい》 など の レース、 宝《たから》くじ、 オンライン カジノ など です。 スマホ で 買《か》う もの も 含《ふく》みます。', c: 'ギャンブル は する？ たとえば、 パチンコ や パチスロ、 競馬《けいば》 や 競艇《きょうてい》 とか の レース、 宝《たから》くじ、 オンライン カジノ とか。 スマホ で 買《か》う の も 入《はい》る よ。', en: 'Do you gamble? For example, pachinko or pachislot, horse, boat, bicycle or motorcycle racing (including betting by phone), lottery or scratch cards, or online casinos.', n: 'Phone betting and online casinos are easy to reach and to hide. Ask about phone apps and cashless payments.', r: 'パチンコ, パチスロ / スロット; 競馬《けいば》, 競艇《きょうてい》 / ボートレース, 競輪《けいりん》; 宝《たから》くじ, スクラッチ; 借金《しゃっきん》 = debt' },
        { tl: 'どの くらい の 頻度《ひんど》 で、 ふだん いくら くらい 賭《か》けます か。 先月《せんげつ》 は いくら 負《ま》けました か。', c: 'どの くらい の ペース で、 いつも いくら くらい 賭《か》ける？ 先月《せんげつ》 は いくら 負《ま》けた？', en: 'How often, and how much do you usually bet? How much did you lose last month?' },
        { tl: 'ギャンブル の ため の 借金《しゃっきん》 は あります か。 どこ から 借《か》りて います か。 消費者金融《しょうひしゃきんゆう》、 カード ローン、 クレジット カード、 ご家族《かぞく》 など です か。', c: 'ギャンブル の ため の 借金《しゃっきん》 は ある？ どこ から 借《か》りて る？ 消費者金融《しょうひしゃきんゆう》、 カード ローン、 クレジット カード、 家族《かぞく》 とか？', en: 'Do you have debts because of gambling? Whom do you owe: consumer loan companies, credit cards, family?', n: 'Debt and family conflict are common presentations; ask about suicidal thoughts when debts are large.' },
        { tl: '一日《いちにち》 に 何時間《なんじかん》 くらい、 スマホ で ギャンブル を して います か。', c: '一日《いちにち》 に 何時間《なんじかん》 くらい、 スマホ で ギャンブル を して る？', en: 'How many hours a day do you spend betting on your phone?' }
      ],
      psychoed: [
        { tl: 'ギャンブル は、 薬物《やくぶつ》 と 同《おな》じ よう に 脳《のう》 を 変《か》えます。 賭《か》けたく なる 気持《きも》ち や、 負《ま》けた 分《ぶん》 を 取《と》り返《かえ》したく なる 気持《きも》ち は 病気《びょうき》 の 一部《いちぶ》 で、 性格《せいかく》 の 弱《よわ》さ では ありません。', c: 'ギャンブル は、 薬物《やくぶつ》 と 同《おな》じ よう に 脳《のう》 を 変《か》える。 賭《か》けたく なる 気持《きも》ち や、 負《ま》けた 分《ぶん》 を 取《と》り返《かえ》したく なる 気持《きも》ち は 病気《びょうき》 の 一部《いちぶ》 で、 性格《せいかく》 が 弱《よわ》い から じゃ ない よ。', en: 'Gambling changes the brain like a drug: the urge to bet and the chasing of losses are part of the illness, not weakness of character.' },
        { tl: '長《なが》い 目《め》 で 見《み》る と、 胴元《どうもと》 や アプリ が 必《かなら》ず 勝《か》ちます。 負《ま》けた お金《かね》 は、 もっと 賭《か》けて も 取《と》り戻《もど》せません。', c: '長《なが》い 目《め》 で 見《み》る と、 胴元《どうもと》 や アプリ が 必《かなら》ず 勝《か》つ。 負《ま》けた お金《かね》 は、 もっと 賭《か》けて も 取《と》り戻《もど》せない よ。', en: 'The house, or the app, always wins in the long run. Losses are not recovered by betting more.' },
        { tl: '信頼《しんらい》 できる 人《ひと》 に カード を 預《あず》ける、 アプリ を 消《け》す、 ギャンブル の 店《みせ》 や サイト に 利用制限《りようせいげん》 を 申《もう》し込《こ》む、 ギャンブル サイト を ブロック する ソフト を 入《い》れる、 と いった こと が 役《やく》 に 立《た》ちます。', c: '信頼《しんらい》 できる 人《ひと》 に カード を 預《あず》ける、 アプリ を 消《け》す、 ギャンブル の 店《みせ》 や サイト に 利用制限《りようせいげん》 を 申《もう》し込《こ》む、 ギャンブル サイト を ブロック する ソフト を 入《い》れる、 と いった こと が 役《やく》 に 立《た》つ よ。', en: 'It helps to let a trusted person hold your cards, delete the apps, request self-exclusion from gambling venues and betting apps, and install software that blocks gambling sites.', n: 'Ask about self-exclusion options available locally; banks and card issuers can block gambling transactions; blocking software (e.g. Gamban); refer to local services and mutual-help groups.' },
        { tl: '借金《しゃっきん》 が 大《おお》きく なって、 もう 逃《に》げ道《みち》 が ない と 感《かん》じたら、 すぐ に 教《おし》えて ください。 道《みち》 は あります。', c: '借金《しゃっきん》 が 大《おお》きく なって、 もう 逃《に》げ道《みち》 が ない と 感《かん》じたら、 すぐ に 教《おし》えて ね。 道《みち》 は ある から。', en: 'When the debt is large and you feel there is no way out, tell us right away. There is a way out.', n: 'Gambling disorder carries a high suicide risk; screen every time.' }
      ] }
  ];

  /* Gambling disorder: 9 criteria (DSM-5-TR, paraphrased), 4 or more in 12 months; mild 4–5, moderate 6–7, severe 8–9. */
  const GAMB = [
    { n: 1, group: 'gamble', en: 'Needs to gamble with increasing amounts to get the excitement', tl: '同《おな》じ 興奮《こうふん》 を 感《かん》じる ため に、 賭《か》ける お金《かね》 を どんどん 増《ふ》やす 必要《ひつよう》 が あります か。', c: '同《おな》じ ドキドキ を 感《かん》じる ため に、 賭《か》ける お金《かね》 を どんどん 増《ふ》やさない と だめ？' },
    { n: 2, group: 'gamble', en: 'Restless or irritable when trying to cut down or stop', tl: 'ギャンブル を 減《へ》らそう と したり、 やめよう と したり する と、 落《お》ち着《つ》かなく なったり、 いらいら したり します か。', c: 'ギャンブル を 減《へ》らそう と したり、 やめよう と したり する と、 落《お》ち着《つ》かなく なったり、 いらいら したり する？' },
    { n: 3, group: 'gamble', en: 'Repeated unsuccessful efforts to control, cut back, or stop', tl: 'ギャンブル を コントロール したり、 減《へ》らしたり、 やめたり しよう と して、 うまく いかなかった こと は あります か。', c: 'ギャンブル を コントロール したり、 減《へ》らしたり、 やめたり しよう と して、 うまく いかなかった こと ある？' },
    { n: 4, group: 'gamble', en: 'Preoccupied with gambling', tl: 'いつも ギャンブル の こと を 考《かんが》えて います か。 たとえば、 この 前《まえ》 の 勝負《しょうぶ》、 次《つぎ》 の 賭《か》け、 賭《か》ける お金《かね》 を どう 用意《ようい》 する か、 など です。', c: 'いつも ギャンブル の こと を 考《かんが》えて る？ たとえば、 この 前《まえ》 の 勝負《しょうぶ》、 次《つぎ》 の 賭《か》け、 賭《か》ける お金《かね》 を どう 用意《ようい》 する か、 とか。' },
    { n: 5, group: 'gamble', en: 'Gambles when distressed', tl: '悲《かな》しい とき、 不安《ふあん》 な とき、 ストレス が ある とき、 罪悪感《ざいあくかん》 が ある とき に、 ギャンブル を します か。', c: '悲《かな》しい とき、 不安《ふあん》 な とき、 ストレス が ある とき、 悪《わる》い と 思《おも》って いる とき に、 ギャンブル を する？' },
    { n: 6, group: 'gamble', en: 'Chasing: returns to get even after losing', tl: '負《ま》けた 後《あと》、 負《ま》けた 分《ぶん》 を 取《と》り返《かえ》そう と して、 また 賭《か》けます か。', c: '負《ま》けた 後《あと》、 負《ま》けた 分《ぶん》 を 取《と》り返《かえ》そう と して、 また 賭《か》ける？' },
    { n: 7, group: 'gamble', en: 'Lies to conceal the extent of gambling', tl: 'どの くらい ギャンブル を して いる か、 ご家族《かぞく》 や ほか の 人《ひと》 に うそ を ついた こと は あります か。', c: 'どの くらい ギャンブル を して いる か、 家族《かぞく》 や ほか の 人《ひと》 に うそ を ついた こと ある？' },
    { n: 8, group: 'gamble', en: 'Jeopardized or lost a relationship, job, or opportunity because of gambling', tl: 'ギャンブル の せい で、 大切《たいせつ》 な 人間関係《にんげんかんけい》、 仕事《しごと》、 勉強《べんきょう》 の 機会《きかい》 を 危《あや》うく したり、 失《うしな》ったり した こと は あります か。', c: 'ギャンブル の せい で、 大切《たいせつ》 な 人《ひと》 と の 関係《かんけい》、 仕事《しごと》、 勉強《べんきょう》 の チャンス を だめ に しかけたり、 なくしたり した こと ある？' },
    { n: 9, group: 'gamble', en: 'Relies on others for money to relieve gambling debts', tl: 'ギャンブル の 借金《しゃっきん》 を 返《かえ》す ため に、 ご家族《かぞく》 や ほか の 人《ひと》 に お金《かね》 を 出《だ》して もらった こと は あります か。', c: 'ギャンブル の 借金《しゃっきん》 を 返《かえ》す ため に、 家族《かぞく》 や ほか の 人《ひと》 に お金《かね》 を 出《だ》して もらった こと ある？' }
  ];

  /* The 11 criteria (DSM-5-TR, paraphrased). group: control | social | risky | pharm. */
  const CRIT = [
    { n: 1, group: 'control', en: 'Larger amounts or over a longer period than intended', tl: '{s} の 量《りょう》 や 時間《じかん》 が、 思《おも》って いた より 多《おお》く なる こと が よく あります か。', c: '{s} の 量《りょう》 や 時間《じかん》 が、 思《おも》って いた より 多《おお》く なる こと が よく ある？' },
    { n: 2, group: 'control', en: 'Persistent desire or unsuccessful efforts to cut down or control use', tl: '{sa} を 減《へ》らしたい、 やめたい と 思《おも》った こと は あります か。 やって みて、 うまく いかなかった こと は あります か。', c: '{sa} を 減《へ》らしたい、 やめたい と 思《おも》った こと ある？ やって みて、 うまく いかなかった こと は ある？' },
    { n: 3, group: 'control', en: 'A great deal of time spent obtaining, using, or recovering', tl: '{s} を 手《て》 に 入《い》れたり、 {s} の 影響《えいきょう》 から 回復《かいふく》 したり する のに、 一日《いちにち》 の 多《おお》く の 時間《じかん》 を 使《つか》って いません か。', c: '{s} を 手《て》 に 入《い》れたり、 {s} の 影響《えいきょう》 から 回復《かいふく》 したり する のに、 一日《いちにち》 の 多《おお》く の 時間《じかん》 を 使《つか》って ない？' },
    { n: 4, group: 'control', en: 'Craving: a strong desire or urge to use', tl: '{s} が ほしくて たまらなく なり、 ほか の こと が 考《かんが》えられない こと は あります か。', c: '{s} が ほしくて たまらなく なって、 ほか の こと が 考《かんが》えられない こと ある？' },
    { n: 5, group: 'social', en: 'Failure to fulfill major role obligations at work, school, or home', tl: '{sa} の せい で、 仕事《しごと》 や 学校《がっこう》、 家《いえ》 の こと が できなく なった こと は あります か。 たとえば、 仕事《しごと》 を 休《やす》んだり、 家族《かぞく》 の 世話《せわ》 が できなかったり した こと です。', c: '{sa} の せい で、 仕事《しごと》 や 学校《がっこう》、 家《いえ》 の こと が できなく なった こと ある？ たとえば、 仕事《しごと》 を 休《やす》んだり、 家族《かぞく》 の 世話《せわ》 が できなかったり。' },
    { n: 6, group: 'social', en: 'Continued use despite persistent social or interpersonal problems caused or worsened by it', tl: '{sa} の こと で、 パートナー や ご家族《かぞく》、 友人《ゆうじん》 と もめた のに、 それ でも {s} を 続《つづ》けて いる こと は あります か。', c: '{sa} の こと で、 パートナー や 家族《かぞく》、 友《とも》だち と もめた のに、 それ でも {s} を 続《つづ》けて る？' },
    { n: 7, group: 'social', en: 'Important social, occupational, or recreational activities given up or reduced', tl: '{sa} の ため に、 仕事《しごと》、 趣味《しゅみ》、 友人《ゆうじん》 と 会《あ》う こと など、 前《まえ》 は 大切《たいせつ》 だった こと を やめたり 減《へ》らしたり しました か。', c: '{sa} の ため に、 仕事《しごと》、 趣味《しゅみ》、 友《とも》だち と 会《あ》う こと とか、 前《まえ》 は 大切《たいせつ》 だった こと を やめたり 減《へ》らしたり した？' },
    { n: 8, group: 'risky', en: 'Recurrent use in physically hazardous situations', tl: '{s} の 影響《えいきょう》 が 残《のこ》った まま、 車《くるま》 を 運転《うんてん》 したり、 機械《きかい》 を 使《つか》ったり、 子《こ》ども の 世話《せわ》 を したり する こと は あります か。', c: '{s} の 影響《えいきょう》 が 残《のこ》った まま、 車《くるま》 を 運転《うんてん》 したり、 機械《きかい》 を 使《つか》ったり、 子《こ》ども の 世話《せわ》 を したり する こと ある？' },
    { n: 9, group: 'risky', en: 'Continued use despite a physical or psychological problem it causes or worsens', tl: '{sa} の せい で、 体《からだ》 や 心《こころ》 の 健康《けんこう》 に 問題《もんだい》 が 出《で》たり 悪《わる》く なったり して いる のに、 それ でも {s} を 続《つづ》けて います か。', c: '{sa} の せい で、 体《からだ》 や 心《こころ》 の 健康《けんこう》 に 問題《もんだい》 が 出《で》たり 悪《わる》く なったり して いる のに、 それ でも {s} を 続《つづ》けて る？' },
    { n: 10, group: 'pharm', en: 'Tolerance: need for more, or diminished effect with the same amount', tl: '前《まえ》 と 同《おな》じ 効《き》き目《め》 を 感《かん》じる のに、 前《まえ》 より 多《おお》く の 量《りょう》 が 必要《ひつよう》 に なりました か。 それとも、 同《おな》じ 量《りょう》 で は 効《き》き目《め》 が 弱《よわ》く なりました か。', c: '前《まえ》 と 同《おな》じ 効《き》き目《め》 を 感《かん》じる のに、 前《まえ》 より 多《おお》く 必要《ひつよう》 に なった？ それとも、 同《おな》じ 量《りょう》 だ と 効《き》き目《め》 が 弱《よわ》く なった？' },
    { n: 11, group: 'pharm', en: 'Withdrawal: the characteristic syndrome, or use to relieve or avoid it', tl: '{s} を やめたり 減《へ》らしたり した とき に、 {w} は あります か。 その つらさ を 避《さ》ける ため に、 また {s} に 手《て》 を 出《だ》す こと は あります か。', c: '{s} を やめたり 減《へ》らしたり した とき に、 {w} は ある？ その つらさ を 避《さ》ける ため に、 また {s} に 手《て》 を 出《だ》す こと ある？' }
  ];
  const GROUPS = { control: 'Impaired control (1–4)', social: 'Social impairment (5–7)', risky: 'Risky use (8–9)', pharm: 'Pharmacological (10–11)', gamble: 'Gambling disorder (9 criteria; 4 or more)' };

  /* Optional validated add-on screens, paraphrased into Japanese (not the published Japanese versions). Each item: tl, c, en, opts [label, points]. */
  const SCREENS = {
    alcohol: { id: 'auditc', title: 'AUDIT-C (quick alcohol screen)', note: 'Score 0–12. Positive: 4 or more (men), 3 or more (women). It flags hazardous drinking; the 11 criteria still decide the diagnosis. Count US standard drinks (14 g).',
      items: [
        { tl: 'お酒《さけ》 を 飲《の》む の は、 どの くらい の 頻度《ひんど》 です か。', c: 'お酒《さけ》 を 飲《の》む の は、 どの くらい の ペース？', en: 'How often do you have a drink containing alcohol?', opts: [['飲《の》まない', 0], ['月《つき》 に 一回《いっかい》 以下《いか》', 1], ['月《つき》 に 二回《にかい》 から 四回《よんかい》', 2], ['週《しゅう》 に 二回《にかい》 から 三回《さんかい》', 3], ['週《しゅう》 に 四回《よんかい》 以上《いじょう》', 4]] },
        { tl: 'お酒《さけ》 を 飲《の》む 日《ひ》 は、 ふつう 何杯《なんばい》 くらい 飲《の》みます か。', c: 'お酒《さけ》 を 飲《の》む 日《ひ》 は、 いつも 何杯《なんばい》 くらい 飲《の》む？', en: 'How many standard drinks do you have on a typical day when drinking?', opts: [['一杯《いっぱい》 か 二杯《にはい》', 0], ['三杯《さんばい》 か 四杯《よんはい》', 1], ['五杯《ごはい》 か 六杯《ろっぱい》', 2], ['七杯《ななはい》 から 九杯《きゅうはい》', 3], ['十杯《じゅっぱい》 以上《いじょう》', 4]], n: 'One US standard drink = 14 g of alcohol. A 500 ml can of 5% beer is about 1.4 drinks; one gō (180 ml) of sake about 1.5; a 500 ml can of 9% strong chūhai about 2.6.' },
        { tl: '六杯《ろっぱい》 以上《いじょう》 飲《の》む 日《ひ》 は、 どの くらい あります か。', c: '六杯《ろっぱい》 以上《いじょう》 飲《の》む 日《ひ》 は、 どの くらい ある？', en: 'How often do you have six or more drinks on one occasion?', opts: [['ない', 0], ['月《つき》 に 一回《いっかい》 未満《みまん》', 1], ['毎月《まいつき》', 2], ['毎週《まいしゅう》', 3], ['毎日《まいにち》 か ほぼ 毎日《まいにち》', 4]] }
      ],
      bands: (n, female) => (n >= (female ? 3 : 4) ? 'positive (hazardous drinking)' : 'negative') },
    tobacco: { id: 'fager', title: 'Fagerström test (nicotine dependence)', note: 'Score 0–10: 0–2 low, 3–4 low to moderate, 5–7 moderate, 8–10 high dependence. Higher scores favor nicotine replacement or other pharmacotherapy.',
      items: [
        { tl: '朝《あさ》 起《お》きて から、 どの くらい で 最初《さいしょ》 の 一本《いっぽん》 を 吸《す》います か。', c: '朝《あさ》 起《お》きて から、 どの くらい で 最初《さいしょ》 の 一本《いっぽん》 を 吸《す》う？', en: 'How soon after waking do you smoke your first cigarette?', opts: [['五分《ごふん》 以内《いない》', 3], ['六分《ろっぷん》 から 三十分《さんじゅっぷん》', 2], ['三十一分《さんじゅういっぷん》 から 六十分《ろくじゅっぷん》', 1], ['六十分《ろくじゅっぷん》 より 後《あと》', 0]] },
        { tl: '病院《びょういん》 や 電車《でんしゃ》、 飛行機《ひこうき》 など、 禁煙《きんえん》 の 場所《ばしょ》 で 吸《す》わず に いる の は つらい です か。', c: '病院《びょういん》 や 電車《でんしゃ》、 飛行機《ひこうき》 とか、 禁煙《きんえん》 の 場所《ばしょ》 で 吸《す》わず に いる の は つらい？', en: 'Is it hard not to smoke where it is forbidden, like a hospital, train or airplane?', opts: [['はい', 1], ['いいえ', 0]] },
        { tl: 'どの 一本《いっぽん》 を やめる の が、 いちばん つらい です か。', c: 'どの 一本《いっぽん》 を やめる の が、 いちばん つらい？', en: 'Which cigarette would you most hate to give up?', opts: [['朝《あさ》 いちばん の 一本《いっぽん》', 1], ['それ 以外《いがい》', 0]] },
        { tl: '一日《いちにち》 に 何本《なんぼん》 吸《す》います か。', c: '一日《いちにち》 に 何本《なんぼん》 吸《す》う？', en: 'How many cigarettes a day?', opts: [['十本《じゅっぽん》 以下《いか》', 0], ['十一本《じゅういっぽん》 から 二十本《にじゅっぽん》', 1], ['二十一本《にじゅういっぽん》 から 三十本《さんじゅっぽん》', 2], ['三十一本《さんじゅういっぽん》 以上《いじょう》', 3]] },
        { tl: '起《お》きて から 最初《さいしょ》 の 数時間《すうじかん》 に、 一日《いちにち》 の ほか の 時間《じかん》 より 多《おお》く 吸《す》います か。', c: '起《お》きて から 最初《さいしょ》 の 数時間《すうじかん》 に、 一日《いちにち》 の ほか の 時間《じかん》 より 多《おお》く 吸《す》う？', en: 'Do you smoke more in the first hours after waking than during the rest of the day?', opts: [['はい', 1], ['いいえ', 0]] },
        { tl: '病気《びょうき》 で 寝込《ねこ》んで いる 日《ひ》 で も、 たばこ を 吸《す》います か。', c: '病気《びょうき》 で 寝込《ねこ》んで いる 日《ひ》 で も、 たばこ を 吸《す》う？', en: 'Do you smoke even when you are ill and in bed most of the day?', opts: [['はい', 1], ['いいえ', 0]] }
      ],
      bands: (n) => (n >= 8 ? 'high dependence' : n >= 5 ? 'moderate dependence' : n >= 3 ? 'low to moderate dependence' : 'low dependence') }
  };

  /* Opening lines for any substance, and the time frame. */
  const OPEN = [
    { tl: 'これ から、 お酒《さけ》、 たばこ、 薬物《やくぶつ》、 ギャンブル に ついて お聞《き》き します。 健康《けんこう》 や 治療《ちりょう》 に 関係《かんけい》 する ので、 皆《みな》さん に お聞《き》き して います。', c: 'これ から、 お酒《さけ》、 たばこ、 薬物《やくぶつ》、 ギャンブル の こと を 聞《き》く ね。 健康《けんこう》 や 治療《ちりょう》 に 関係《かんけい》 する から、 みんな に 聞《き》いて いる よ。', en: 'I am going to ask about alcohol, tobacco, drugs and gambling. We ask everyone, because they affect health and treatment.', n: 'Normalize first; it lowers shame.' },
    { tl: 'お話《はなし》 いただいた こと は 秘密《ひみつ》 に して、 治療《ちりょう》 の ため に 使《つか》います。 責《せ》める ため では ありません。', c: '話《はな》して くれた こと は 秘密《ひみつ》 に して、 治療《ちりょう》 の ため に 使《つか》う よ。 責《せ》める ため じゃ ない から ね。', en: 'What you tell me is confidential and is for your treatment. I am not here to judge you.', n: 'Do not promise that it is never shared with the police; medical confidentiality has limits. Say what is true: it goes in the medical record and is used for your care.' },
    { tl: 'この 十二《じゅうに》か月《げつ》 の こと に ついて お話《はなし》 しましょう。', c: 'この 十二《じゅうに》か月《げつ》 の こと を 話《はな》そう。', en: 'Let us talk about the past twelve months.', n: 'The criteria count applies to a 12-month period.' },
    { tl: 'この 中《なか》 で、 いちばん 影響《えいきょう》 が 大《おお》きい の は どれ です か。', c: 'この 中《なか》 で、 いちばん 影響《えいきょう》 が 大《おお》きい の は どれ？', en: 'Of all these, which one affects you the most?' }
  ];
  const REMISSION = [
    { tl: '最後《さいご》 に した の は いつ です か。 やめて いる 状態《じょうたい》、 または コントロール できて いる 状態《じょうたい》 が、 何《なん》か月《げつ》 続《つづ》いて います か。', c: '最後《さいご》 に した の は いつ？ やめて いる、 または コントロール できて いる 状態《じょうたい》 が、 何《なん》か月《げつ》 続《つづ》いて る？', en: 'When was the last time? For how many months have you stopped, or kept it under control?', n: '≥3 months without criteria (craving allowed) = early remission; ≥12 months = sustained remission.' },
    { tl: '今《いま》、 {sa} に 近《ちか》づけない 場所《ばしょ》 に います か。 たとえば、 病院《びょういん》、 刑務所《けいむしょ》、 回復《かいふく》 施設《しせつ》 など です。', c: '今《いま》、 {sa} に 近《ちか》づけない 場所《ばしょ》 に いる？ たとえば、 病院《びょういん》、 刑務所《けいむしょ》、 回復《かいふく》 施設《しせつ》 とか。', en: 'Are you somewhere you have no access to {s}, like a hospital, jail or a rehabilitation center?', n: 'Specifier: in a controlled environment.' }
  ];

  /* Brief intervention: a guided motivational-interviewing flow (OARS; importance and confidence rulers;
     elicit–provide–elicit; change plan). Each step has lines to choose from. */
  const MI = [
    { id: 'permission', title: 'Ask permission and open', goal: 'Ask before advising. Open questions, then listen without interrupting.', lines: [
      { tl: '{sa} に ついて、 少《すこ》し お話《はなし》 して も よろしい です か。', c: '{sa} に ついて、 少《すこ》し 話《はな》して も いい？', en: 'May we talk a little about {s}?' },
      { tl: '{sa} の どんな ところ が 好《す》き です か。 逆《ぎゃく》 に、 いや な ところ は あります か。', c: '{sa} の どんな ところ が 好《す》き？ 逆《ぎゃく》 に、 いや な ところ は ある？', en: 'What do you like about {s}? And what do you not like?', n: 'Decisional balance. Ask the good things first; the patient feels heard.' },
      { tl: 'ふだん の 一日《いちにち》 の 中《なか》 で、 {sa} が どう 関《かか》わって いる か 教《おし》えて いただけます か。', c: 'いつも の 一日《いちにち》 の 中《なか》 で、 {sa} が どう 関《かか》わって いる か 教《おし》えて くれる？', en: 'Tell me what happens on a typical day with {s}.' },
      { tl: 'その こと は、 ご家族《かぞく》、 お仕事《しごと》、 健康《けんこう》 など、 あなた に とって 大切《たいせつ》 な こと に、 どう 影響《えいきょう》 して います か。', c: 'その こと は、 家族《かぞく》、 仕事《しごと》、 健康《けんこう》 とか、 大切《たいせつ》 な こと に、 どう 影響《えいきょう》 して る？', en: 'How does it affect the things that matter to you, like family, work or health?' }
    ] },
    { id: 'reflect', title: 'Reflect and affirm', goal: 'Say back what you heard; notice strengths. Reflect change talk when you hear it.', lines: [
      { tl: 'つまり、 ストレス の 解消《かいしょう》 に は なる けれど、 肝臓《かんぞう》 の こと が 心配《しんぱい》 なん です ね。', c: 'つまり、 ストレス の 解消《かいしょう》 に は なる けど、 肝臓《かんぞう》 の こと が 心配《しんぱい》 なん だ ね。', en: 'If I understand you, it helps with your stress, but you worry about your liver.', n: 'Double-sided reflection: the good, then the concern, ending on change.' },
      { tl: 'お子《こ》さん の ため に 健康《けんこう》 で いる こと が、 大切《たいせつ》 なん です ね。', c: '子《こ》ども の ため に 健康《けんこう》 で いる こと が、 大切《たいせつ》 なん だ ね。', en: 'It sounds like being healthy for your children matters to you.' },
      { tl: '正直《しょうじき》 に 話《はな》して くださって、 ありがとう ございます。 話《はな》しにくい こと です よね。', c: '正直《しょうじき》 に 話《はな》して くれて、 ありがとう。 話《はな》しにくい こと だ よね。', en: 'Thank you for being open. This is not easy to talk about.' },
      { tl: '前《まえ》 に も やめよう と された ん です ね。 それ は 大《おお》きな こと です。', c: '前《まえ》 に も やめよう と した ん だ ね。 それ は 大《おお》きな こと だ よ。', en: 'I see you have tried to stop before. That is a big thing.', n: 'Affirm effort, not just outcome.' },
      { tl: 'それ は、 どういう 意味《いみ》 です か。', c: 'それ って、 どういう 意味《いみ》？', en: 'What do you mean by that?' }
    ] },
    { id: 'rulers', title: 'Importance and confidence rulers', goal: 'Two numbers, then ask why not lower: the answer is change talk.', lines: [
      { tl: 'ゼロ から 十《じゅう》 で いう と、 {sa} を 減《へ》らす か やめる こと は、 ご自分《じぶん》 に とって どの くらい 大切《たいせつ》 です か。', c: 'ゼロ から 十《じゅう》 で いう と、 {sa} を 減《へ》らす か やめる こと は、 自分《じぶん》 に とって どの くらい 大切《たいせつ》？', en: 'From zero to ten, how important is it to you to cut down or stop {s}?' },
      { tl: 'どうして その 数字《すうじ》 で、 もっと 低《ひく》い 数字《すうじ》 では ない の です か。', c: 'どうして その 数字《すうじ》 で、 もっと 低《ひく》い 数字《すうじ》 じゃ ない の？', en: 'Why that number and not lower?', n: 'Never ask "why not higher"; it invites arguments against change.' },
      { tl: '何《なに》 が あれば、 その 数字《すうじ》 が 二《ふた》つ 上《あ》がる と 思《おも》います か。', c: '何《なに》 が あれば、 その 数字《すうじ》 が 二《ふた》つ 上《あ》がる と 思《おも》う？', en: 'What would need to happen for it to go up by two points?' },
      { tl: 'ゼロ から 十《じゅう》 で いう と、 やる と 決《き》めたら できる 自信《じしん》 は どの くらい あります か。', c: 'ゼロ から 十《じゅう》 で いう と、 やる と 決《き》めたら できる 自信《じしん》 は どの くらい ある？', en: 'From zero to ten, how confident are you that you could do it if you decided to?' },
      { tl: '少《すこ》し の 間《あいだ》 で も やめられた とき、 何《なに》 が 助《たす》け に なりました か。', c: '少《すこ》し の 間《あいだ》 で も やめられた とき、 何《なに》 が 助《たす》け に なった？', en: 'What helped you when you managed to stop, even briefly?' }
    ] },
    { id: 'feedback', title: 'Elicit, provide, elicit', goal: 'Ask what they know, give one or two facts with permission, then ask what they make of it.', lines: [
      { tl: '{sa} が 健康《けんこう》 に 与《あた》える 影響《えいきょう》 に ついて、 どんな こと を ご存《ぞん》じ です か。', c: '{sa} が 健康《けんこう》 に 与《あた》える 影響《えいきょう》 に ついて、 どんな こと を 知《し》って る？', en: 'What do you know about the effects of {s} on health?' },
      { tl: 'これ に ついて 分《わ》かって いる こと を、 少《すこ》し お伝《つた》え して も よろしい です か。', c: 'これ に ついて 分《わ》かって いる こと を、 少《すこ》し 話《はな》して も いい？', en: 'May I share a few things we know about this?' },
      { tl: '(心理《しんり》 教育《きょういく》 の リスト から、 一《ひと》つ か 二《ふた》つ の 情報《じょうほう》 を 伝《つた》えます。)', c: '(心理《しんり》 教育《きょういく》 の リスト から、 一《ひと》つ か 二《ふた》つ の 情報《じょうほう》 を 伝《つた》える。)', en: '(Give one or two facts from the psychoeducation list.)', n: 'Short and specific to this patient, for example the liver tests you just reviewed.' },
      { tl: 'どう 思《おも》われます か。 ご自分《じぶん》 の 場合《ばあい》 に は、 どう 当《あ》てはまります か。', c: 'どう 思《おも》う？ 自分《じぶん》 の 場合《ばあい》 に は、 どう 当《あ》てはまる？', en: 'What do you think? How does this apply to you?' }
    ] },
    { id: 'plan', title: 'Change plan (if ready)', goal: 'Let the patient choose the goal and the first step. Small and specific beats big and vague.', lines: [
      { tl: 'どう したい です か。 まず 減《へ》らします か、 それとも 完全《かんぜん》 に やめます か。', c: 'どう したい？ まず 減《へ》らす？ それとも 完全《かんぜん》 に やめる？', en: 'What would you like to do: cut down first, or stop completely?' },
      { tl: 'いつ から 始《はじ》めます か。 何日《なんにち》 に します か。', c: 'いつ から 始《はじ》める？ 何日《なんにち》 に する？', en: 'When will you start? What date?' },
      { tl: 'いちばん 難《むずか》しい の は どんな とき です か。 食後《しょくご》、 友人《ゆうじん》 と いる とき、 ストレス が ある とき や 疲《つか》れた とき など です か。', c: 'いちばん 難《むずか》しい の は どんな とき？ ご飯《はん》 の 後《あと》、 友《とも》だち と いる とき、 ストレス が ある とき や 疲《つか》れた とき とか？', en: 'When is it hardest: after meals, with friends, when stressed or tired?', n: 'Triggers.' },
      { tl: 'かわり に 何《なに》 を します か。 たとえば、 ガム を かむ、 水《みず》 を 飲《の》む、 散歩《さんぽ》 に 行《い》く、 パートナー と 話《はな》す、 など です。', c: 'かわり に 何《なに》 を する？ たとえば、 ガム を かむ、 水《みず》 を 飲《の》む、 散歩《さんぽ》 に 行《い》く、 パートナー と 話《はな》す、 とか。', en: 'What will you do instead? For example, chewing gum, water, a walk, or talking to your partner.' },
      { tl: 'だれ が 支《ささ》えて くれます か。 その 方《かた》 に、 この 計画《けいかく》 を 伝《つた》えて も いい です か。', c: 'だれ が 支《ささ》えて くれる？ その 人《ひと》 に、 この 計画《けいかく》 を 伝《つた》えて も いい？', en: 'Who can support you? May we tell them the plan?' },
      { tl: 'うまく いって いる か どう か、 どう やって 確《たし》かめましょう か。 一日《いちにち》 の 目標《もくひょう》 を、 {u} で 決《き》めましょう か。', c: 'うまく いって いる か どう か、 どう やって 確《たし》かめよう か。 一日《いちにち》 の 目標《もくひょう》 を、 {u} で 決《き》めよう か。', en: 'How will we know it is working? What is your daily target, in {u}?' },
      { tl: 'ほしい 気持《きも》ち や 離脱症状《りだつしょうじょう》 を 楽《らく》 に する 薬《くすり》 も あります。 その お話《はなし》 を して も いい です か。', c: 'ほしい 気持《きも》ち や 離脱症状《りだつしょうじょう》 を 楽《らく》 に する 薬《くすり》 も ある よ。 その 話《はなし》 を して も いい？', en: 'There are medicines that help with craving and withdrawal. Would you like to talk about them?' }
    ] },
    { id: 'notready', title: 'If not ready', goal: 'Do not argue. Respect autonomy, keep the door open, offer harm reduction.', lines: [
      { tl: '今《いま》 は まだ その 気持《きも》ち に なれない ん です ね。 決《き》める の は ご自分《じぶん》 です。', c: '今《いま》 は まだ その 気持《きも》ち に なれない ん だ ね。 決《き》める の は 自分《じぶん》 だ よ。', en: 'I understand you are not ready right now. The decision is yours.' },
      { tl: '次《つぎ》 の 診察《しんさつ》 で、 また この こと を お聞《き》き して も いい です か。', c: '次《つぎ》 の 診察《しんさつ》 で、 また この こと を 聞《き》いて も いい？', en: 'May I ask about this again at our next visit?' },
      { tl: 'まだ やめて いない 間《あいだ》 に、 少《すこ》し で も 安全《あんぜん》 に する ため に できる 小《ちい》さな こと は 何《なん》 でしょう か。', c: 'まだ やめて いない 間《あいだ》 に、 少《すこ》し で も 安全《あんぜん》 に する ため に できる 小《ちい》さな こと って 何《なに》 か な。', en: 'While you have not stopped, what is one small thing you could do to be safer?', n: 'Harm reduction: naloxone and never using alone, fentanyl test strips, not sharing needles, not drinking before driving.' },
      { tl: '気持《きも》ち が 変《か》わったら、 いつ でも 来《き》て ください。', c: '気持《きも》ち が 変《か》わったら、 いつ でも 来《き》て ね。', en: 'If you change your mind, we are here.' }
    ] },
    { id: 'close', title: 'Close and follow up', goal: 'Summarize their own reasons and plan. Normalize slips.', lines: [
      { tl: 'まとめる と、 ご家族《かぞく》 の ため に {sa} を 減《へ》らしたい、 そして 月曜日《げつようび》 から 始《はじ》める、 と いう こと です ね。', c: 'まとめる と、 家族《かぞく》 の ため に {sa} を 減《へ》らしたい、 そして 月曜日《げつようび》 から 始《はじ》める、 って こと だ ね。', en: 'To summarize: you want to cut down on {s} for your family, and you will start on Monday.', n: 'Use the patient\'s own words and reasons.' },
      { tl: '少《すこ》し 戻《もど》って しまったり、 再発《さいはつ》 したり する こと は よく あります。 失敗《しっぱい》 では ありません。 また 計画《けいかく》 に 戻《もど》れば いい の です。', c: '少《すこ》し 戻《もど》って しまったり、 再発《さいはつ》 したり する こと は よく ある。 失敗《しっぱい》 じゃ ない よ。 また 計画《けいかく》 に 戻《もど》れば いい ん だ。', en: 'A slip or relapse is normal. It is not failure; we just go back to the plan.' },
      { tl: '二週間後《にしゅうかんご》 に また お会《あ》い して、 様子《ようす》 を 聞《き》かせて ください。', c: '二週間後《にしゅうかんご》 に また 会《あ》って、 様子《ようす》 を 聞《き》かせて ね。', en: 'Let us meet again in two weeks to see how it goes.' },
      { tl: 'ありがとう ございました。 この こと を 話《はな》せた の は、 大《おお》きな 一歩《いっぽ》 です。', c: 'ありがとう。 この こと を 話《はな》せた の は、 大《おお》きな 一歩《いっぽ》 だ よ。', en: 'Thank you. Talking about this is a big step.' }
    ] }
  ];

  /* Nurse view: a shorter screening and advice script. Pending nursing review. */
  const NURSE = {
    notice: 'Nurse screening script, pending nursing review. Use it as a communication aid; follow your unit\'s procedures and report findings to the physician on duty.',
    steps: [
      { title: 'Ask', lines: [
        { tl: 'たばこ は 吸《す》います か。 お酒《さけ》 は 飲《の》みます か。 薬物《やくぶつ》 は 使《つか》います か。 ギャンブル は します か。', c: 'たばこ は 吸《す》う？ お酒《さけ》 は 飲《の》む？ 薬物《やくぶつ》 は 使《つか》う？ ギャンブル は する？', en: 'Do you smoke, drink alcohol, use any drugs, or gamble?' },
        { tl: '一日《いちにち》 に どの くらい です か。 最後《さいご》 は いつ です か。', c: '一日《いちにち》 に どの くらい？ 最後《さいご》 は いつ？', en: 'How much a day? When was the last time?' },
        { tl: 'これ まで に オーバードーズ を した こと は あります か。 家《いえ》 に ナロキソン は あります か。', c: 'これ まで に オーバードーズ を した こと ある？ 家《いえ》 に ナロキソン は ある？', en: 'Have you ever had an overdose? Do you have naloxone (Narcan) at home?', n: 'Ask whenever the patient uses opioids, any street pills, or large amounts of over-the-counter medicine. Report a recent overdose.' }
      ] },
      { title: 'Watch for withdrawal', lines: [
        { tl: '手《て》 が ふるえたり、 汗《あせ》 を かいたり、 めまい が したり します か。', c: '手《て》 が ふるえたり、 汗《あせ》 を かいたり、 めまい が したり する？', en: 'Are your hands shaking, are you sweating, or do you feel dizzy?', n: 'Alcohol: shaking, sweating, fast pulse, high BP, confusion. Report at once.' },
        { tl: '眠《ねむ》れます か。 何《なに》 か 変《へん》 な もの が 見《み》えたり 聞《き》こえたり します か。', c: '眠《ねむ》れる？ 何《なに》 か 変《へん》 な もの が 見《み》えたり 聞《き》こえたり する？', en: 'Are you able to sleep? Are you seeing or hearing anything unusual?' },
        { tl: '体《からだ》 の 痛《いた》み、 吐《は》き気《け》、 寒気《さむけ》 は あります か。', c: '体《からだ》 が 痛《いた》い とか、 吐《は》き気《け》 とか、 寒気《さむけ》 とか ある？', en: 'Do you have body aches, nausea, or chills?', n: 'Opioid withdrawal: aches, nausea, vomiting, diarrhea, sweating, yawning, large pupils. Uncomfortable rather than dangerous by itself, but report it so treatment can start.' }
      ] },
      { title: 'Brief advice', lines: [
        { tl: '看護師《かんごし》 と して、 健康《けんこう》 の ため に {sa} を 減《へ》らす か、 やめる こと を おすすめ します。 私《わたし》たち は いつ でも お手伝《てつだ》い します。', c: '看護師《かんごし》 と して、 健康《けんこう》 の ため に {sa} を 減《へ》らす か、 やめる こと を すすめる よ。 私《わたし》たち は いつ でも 手伝《てつだ》う から ね。', en: 'As your nurse, I advise you to cut down or stop {s} for your health. We are ready to help you.', n: '看護師《かんごし》 is used for nurses of any gender.' },
        { tl: '入院中《にゅういんちゅう》 に、 ほしい 気持《きも》ち が 強《つよ》く なったり、 具合《ぐあい》 が 悪《わる》く なったり したら、 教《おし》えて ください。', c: '入院中《にゅういんちゅう》 に、 ほしい 気持《きも》ち が 強《つよ》く なったり、 具合《ぐあい》 が 悪《わる》く なったり したら、 教《おし》えて ね。', en: 'While you are in the hospital, tell us if you have cravings or feel unwell.' },
        { tl: '助《たす》けて もらえる よう に、 医師《いし》 に 伝《つた》えて おきます ね。', c: '助《たす》けて もらえる よう に、 先生《せんせい》 に 伝《つた》えて おく ね。', en: 'I will let the doctor know so you can be helped.' }
      ] }
    ],
    escalate: 'Report to the physician on duty: any alcohol withdrawal signs (shaking, sweating, fast pulse, high blood pressure), confusion, hallucinations, suicidal statements, large gambling debts, opioid overdose signs (slow or no breathing, pinpoint pupils, cannot be roused) or a recent overdose, or a red, swollen or draining injection site.'
  };

  const fill = (text, sub) => String(text).replace(/\{sa\}/g, sub.sa || sub.s).replace(/\{s\}/g, sub.s).replace(/\{w\}/g, sub.w).replace(/\{u\}/g, sub.unit)
    .replace(/\ba el /g, 'al ').replace(/\bde el /g, 'del ').replace(/\bA el /g, 'Al ').replace(/\bDe el /g, 'Del ');
  const fillEn = (text, sub) => String(text).replace(/\{sa\}|\{s\}/g, sub.en).replace(/\{w\}/g, sub.wen).replace(/\{u\}/g, sub.unitEn || sub.unit);

  window.PSYCH_SUD = { substances: SUB, criteria: CRIT, gambling: GAMB, groups: GROUPS, screens: SCREENS, open: OPEN, remission: REMISSION, mi: MI, nurse: NURSE,
    criteriaFor: (sub) => (sub && sub.gamble ? GAMB : CRIT),
    severity: (n) => (n >= 6 ? 'severe' : n >= 4 ? 'moderate' : n >= 2 ? 'mild' : 'none'),
    severityFor: (sub, n) => (sub && sub.gamble ? (n >= 8 ? 'severe' : n >= 6 ? 'moderate' : n >= 4 ? 'mild' : 'none') : (n >= 6 ? 'severe' : n >= 4 ? 'moderate' : n >= 2 ? 'mild' : 'none')),
    rule: (sub) => (sub && sub.gamble ? '4 or more of 9 in 12 months: mild 4–5, moderate 6–7, severe 8–9' : '2 or more of 11 in 12 months: mild 2–3, moderate 4–5, severe 6 or more'),
    fill, fillEn };

  /* Also publish the lines as phrase sections, so they appear in search, flashcards, the handout generator
     and the audio pack. Alcohol is the worked example for the criteria; the screener substitutes other substances. */
  const sec = (id, title, intro, items) => ({ id, group: 'Substance use', title, intro, draft: true, phrases: items.map((p) => ({ en: p.en, f: p.tl, c: p.c || p.tl, n: p.n })) });
  const alcohol = SUB[0];
  const fillA = (p) => ({ en: fillEn(p.en, alcohol), tl: fill(p.tl, alcohol), c: fill(p.c || p.tl, alcohol), n: p.n });
  const by = (id) => SUB.find((x) => x.id === id);
  const sections = [
    sec('sud-screen', 'Substance use: the 11 criteria', 'DSM-5-TR substance use disorder, asked about alcohol. Replace お酒《さけ》 with たばこ, 大麻《たいま》, 覚醒剤《かくせいざい》, コカイン, オピオイド, or the drug named; the particle after it stays the same. Two or more in 12 months: mild 2–3, moderate 4–5, severe 6 or more. The screener in Psychiatry → Substance use substitutes the other substances and does the counting.',
      OPEN.concat(CRIT.map((c) => ({ tl: c.tl, c: c.c, en: c.n + '. ' + c.en, n: GROUPS[c.group] })), REMISSION).map(fillA)),
    sec('sud-alcohol-tobacco', 'Alcohol and tobacco: asking and explaining', 'Substance-specific questions and psychoeducation for alcohol (count US standard drinks of 14 g; a 500 ml can of strong chūhai is about 2.6) and tobacco, heated tobacco or vaping.',
      [by('alcohol'), by('tobacco')].flatMap((s) => s.ask.concat(s.psychoed))),
    sec('sud-drugs', 'Cannabis, methamphetamine, cocaine, opioids, other drugs: asking and explaining', 'Ask with the non-judgmental preface, name the route and the last use, and for opioids always ask about overdose and naloxone. Fentanyl is in most street pills and powders now. Also ask about over-the-counter medicine overdose.',
      ['cannabis', 'meth', 'cocaine', 'opioids', 'other'].map(by).flatMap((s) => s.ask.concat(s.psychoed))),
    sec('sud-gambling', 'Gambling (sports betting, casino, online, lottery): the 9 criteria', 'Gambling disorder, DSM-5-TR: 4 or more of 9 criteria in 12 months; mild 4–5, moderate 6–7, severe 8–9. Ask about pachinko, betting on races by phone, and online casinos; ask about suicide when debts are large.',
      by('gambling').ask.concat(GAMB.map((c) => ({ tl: c.tl, c: c.c, en: c.n + '. ' + c.en })), by('gambling').psychoed)),
    sec('sud-screens', 'AUDIT-C and Fagerström in Japanese', 'Quick add-on screens: three AUDIT-C questions for alcohol and six Fagerström questions for nicotine dependence, with the answer choices. The screener in Psychiatry → Substance use scores them.',
      SCREENS.alcohol.items.concat(SCREENS.tobacco.items).map((it) => ({ tl: it.tl, c: it.c, en: it.en, n: it.opts.map((o) => o[0]).join(' / ') }))),
    sec('mi', 'Motivational interviewing', 'Brief intervention in Japanese: permission, open questions, reflections, rulers, elicit–provide–elicit, change plan, and what to say when the patient is not ready. Filled with alcohol; the guided flow in Psychiatry → Substance use → Brief intervention substitutes the other substances.',
      MI.flatMap((st) => st.lines).map(fillA))
  ];
  if (window.PSYCH_SECTIONS) sections.forEach((s) => PSYCH_SECTIONS.push(s));
})();
