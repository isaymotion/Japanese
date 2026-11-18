/* Picture sets added in 0.27.0 (part 2). DRAFT: all Japanese here is pending review by a native Japanese-speaking clinician.
   Notation: tools/AUTHORING.md. Shape: the header of picture-sets-body.js. Set ids and part ids are permanent: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'kitchen-tools', group: 'home', title: 'Kitchen tools and tableware', lv: 'N4', kind: 'diagram', art: 'kitchen-tools',
    intro: 'The small things you cook, eat and wash up with, on the wall, the shelf and the worktop.',
    parts: [
      { id: 'epuron', w: 'エプロン', en: 'apron', lv: 'N4', x: 60, y: 84 },
      { id: 'otama', w: 'お玉《たま》', en: 'ladle', lv: 'N3', x: 165, y: 66 },
      { id: 'kappu', w: 'カップ', en: 'mug, cup', lv: 'N5', x: 236, y: 98 },
      { id: 'bin', w: '瓶《びん》', en: 'jar, bottle', lv: 'N4', x: 310, y: 92 },
      { id: 'yakan', w: 'やかん', en: 'kettle', lv: 'N4', x: 66, y: 174 },
      { id: 'bouru', w: 'ボウル', en: 'mixing bowl', lv: 'N4', x: 162, y: 182 },
      { id: 'chawan', w: '茶碗《ちゃわん》', en: 'rice bowl', lv: 'N4', x: 262, y: 188 },
      { id: 'bentoubako', w: '弁当箱《べんとうばこ》', en: 'lunch box', lv: 'N4', x: 312, y: 186 },
      { id: 'manaita', w: 'まな板《いた》', en: 'chopping board', lv: 'N3', x: 108, y: 238 },
      { id: 'hashi', w: '箸《はし》', en: 'chopsticks', lv: 'N5', x: 157, y: 252 },
      { id: 'supuun', w: 'スプーン', en: 'spoon', lv: 'N5', x: 190, y: 252 },
      { id: 'shamoji', w: 'しゃもじ', en: 'rice paddle', lv: 'N3', x: 223, y: 252 },
      { id: 'furaigaeshi', w: 'フライ返《がえ》し', en: 'turner, spatula', lv: 'N4', x: 264, y: 252 },
      { id: 'suponji', w: 'スポンジ', en: 'sponge', lv: 'N4', x: 360, y: 238 }
    ],
    say: [
      { ja: '使《つか》った まな板《いた》 は よく 洗《あら》って、 乾《かわ》かして ください。', en: 'After using the chopping board, wash it well and let it dry.', p: 'manaita' },
      { ja: 'やかん で お湯《ゆ》 を 沸《わ》かして、 お茶《ちゃ》 を 入《い》れます。', en: 'I boil water in the kettle and make tea.', p: 'yakan' },
      { ja: '手《て》 が 震《ふる》えて、 箸《はし》 が うまく 使《つか》えません。', en: 'My hands shake, so I cannot use chopsticks well.', p: 'hashi' },
      { ja: '飲《の》み込《こ》む の が 大変《たいへん》 な とき は、 小《ちい》さい スプーン で 少《すこ》し ずつ 食《た》べましょう。', en: 'When swallowing is hard, eat a little at a time with a small spoon.', p: 'supuun' },
      { ja: 'ご飯《はん》 は お茶碗《ちゃわん》 半分《はんぶん》 ぐらい 食《た》べられました。', en: 'I was able to eat about half a bowl of rice.', p: 'chawan' },
      { ja: '弁当箱《べんとうばこ》 に 野菜《やさい》 も 入《い》れる と、 体《からだ》 に いい です よ。', en: 'Putting vegetables in your lunch box too is good for your health.', p: 'bentoubako' },
      { ja: 'お玉《たま》 で 鍋《なべ》 の みそ汁《しる》 を すくいます。', en: 'I scoop the miso soup out of the pot with the ladle.', p: 'otama' },
      { ja: 'スポンジ に 洗剤《せんざい》 を つけて、 お皿《さら》 を 洗《あら》います。', en: 'I put washing-up liquid on the sponge and wash the plates.', p: 'suponji' },
      { ja: 'フライ返《がえ》し で 卵焼《たまごや》き を ひっくり返《かえ》します。', en: 'I turn the rolled omelette over with the turner.', p: 'furaigaeshi' },
      { ja: '炊《た》けた ご飯《はん》 を しゃもじ で 軽《かる》く 混《ま》ぜます。', en: 'I gently stir the cooked rice with the rice paddle.', p: 'shamoji' }
    ] },

  { id: 'ward-room', group: 'town', title: 'A bed on the ward', lv: 'N4', kind: 'diagram', art: 'ward-room',
    intro: 'A patient\'s bed space on a hospital ward, and the gentle things staff say about it.',
    parts: [
      { id: 'kaaten', w: 'カーテン', en: 'curtain', lv: 'N4', x: 35, y: 150 },
      { id: 'mado', w: '窓《まど》', en: 'window', lv: 'N5', x: 135, y: 64 },
      { id: 'denki', w: '電気《でんき》', en: 'light (electric)', lv: 'N5', x: 235, y: 42 },
      { id: 'nafuda', w: '名札《なふだ》', en: 'name card', lv: 'N3', x: 149, y: 121 },
      { id: 'makura', w: '枕《まくら》', en: 'pillow', lv: 'N4', x: 110, y: 160 },
      { id: 'naasukooru', w: 'ナースコール', en: 'nurse call button', lv: 'N4', x: 180, y: 158 },
      { id: 'shiitsu', w: 'シーツ', en: 'sheet', lv: 'N4', x: 136, y: 190 },
      { id: 'moufu', w: '毛布《もうふ》', en: 'blanket', lv: 'N4', x: 234, y: 186 },
      { id: 'beddo', w: 'ベッド', en: 'bed', lv: 'N5', x: 200, y: 214 },
      { id: 'teeburu', w: 'テーブル', en: 'table (over-bed table)', lv: 'N5', x: 236, y: 138 },
      { id: 'terebi', w: 'テレビ', en: 'television', lv: 'N5', x: 343, y: 143 },
      { id: 'hikidashi', w: '引《ひ》き出《だ》し', en: 'drawer', lv: 'N3', x: 343, y: 185 },
      { id: 'rokkaa', w: 'ロッカー', en: 'locker', lv: 'N4', x: 394, y: 130 },
      { id: 'surippa', w: 'スリッパ', en: 'slippers', lv: 'N4', x: 116, y: 284 }
    ],
    say: [
      { ja: 'ナースコール は 枕《まくら》 の 横《よこ》 に あります から、 いつでも 押《お》して ください。', en: 'The nurse call button is beside your pillow, so press it any time.', p: 'naasukooru' },
      { ja: '着替《きが》え の とき は、 カーテン を 閉《し》めます ね。', en: 'I will close the curtain while you change your clothes.', p: 'kaaten' },
      { ja: '枕《まくら》 の 高《たか》さ は これ で 大丈夫《だいじょうぶ》 です か。', en: 'Is the pillow at a comfortable height like this?', p: 'makura' },
      { ja: '寒《さむ》く ない です か。 毛布《もうふ》 を もう 一枚《いちまい》 持《も》って きましょう か。', en: 'Are you cold? Shall I bring you one more blanket?', p: 'moufu' },
      { ja: '今日《きょう》 は シーツ を 新《あたら》しい の に 替《か》えます ね。', en: 'Today I will change your sheets for clean ones.', p: 'shiitsu' },
      { ja: 'お食事《しょくじ》 は この テーブル の 上《うえ》 に 置《お》きます ね。', en: 'I will put your meal on this table.', p: 'teeburu' },
      { ja: 'スリッパ は 脱《ぬ》げやすい ので、 かかと の ある 靴《くつ》 を 履《は》いて ください ね。', en: 'Slippers come off easily, so please wear shoes that hold your heel.', p: 'surippa' },
      { ja: '名札《なふだ》 の お名前《なまえ》 は 合《あ》って います か。', en: 'Is the name on your name card (at the bed) correct?', p: 'nafuda' },
      { ja: 'ベッド から 起《お》きる とき は、 ゆっくり 起《お》きて ください。', en: 'When you get up from the bed, please get up slowly.', p: 'beddo' },
      { ja: 'テレビ を 見《み》る とき は、 イヤホン を 使《つか》って ください。', en: 'When you watch television, please use earphones.', p: 'terebi' }
    ] }
]);
