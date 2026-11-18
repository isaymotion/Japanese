/* Picture sets added in 0.27.0 (part 1). DRAFT: all Japanese here is pending review by a native Japanese-speaking clinician.
   Notation: tools/AUTHORING.md. Shape: the header of picture-sets-body.js. Set ids and part ids are permanent: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'shops', group: 'town', title: 'A shopping street', lv: 'N4', kind: 'diagram', art: 'shops',
    intro: 'A row of small shops, each known by the picture on its sign and the goods in its window, with a supermarket and a vending machine.',
    parts: [
      { id: 'panya', w: 'パン屋《や》', en: 'bakery', lv: 'N5', x: 69, y: 128 },
      { id: 'yaoya', w: '八百屋《やおや》', en: 'greengrocer', lv: 'N5', x: 151, y: 128 },
      { id: 'sakanaya', w: '魚屋《さかなや》', en: 'fish shop', lv: 'N4', x: 233, y: 128 },
      { id: 'nikuya', w: '肉屋《にくや》', en: 'butcher', lv: 'N4', x: 315, y: 128 },
      { id: 'hanaya', w: '花屋《はなや》', en: 'florist, flower shop', lv: 'N4', x: 397, y: 128 },
      { id: 'honya', w: '本屋《ほんや》', en: 'bookshop', lv: 'N5', x: 69, y: 336 },
      { id: 'kutsuya', w: '靴屋《くつや》', en: 'shoe shop', lv: 'N4', x: 151, y: 336 },
      { id: 'tokoya', w: '床屋《とこや》', en: "barber's", lv: 'N4', x: 233, y: 336 },
      { id: 'suupaa', w: 'スーパー', en: 'supermarket', lv: 'N4', x: 346, y: 240 },
      { id: 'reji', w: 'レジ', en: 'till, checkout', lv: 'N4', x: 368, y: 316 },
      { id: 'fukuro', w: '袋《ふくろ》', en: 'bag', lv: 'N4', x: 270, y: 306 },
      { id: 'tenin', w: '店員《てんいん》', en: 'shop assistant', lv: 'N4', x: 312, y: 328 },
      { id: 'jidouhanbaiki', w: '自動販売機《じどうはんばいき》', en: 'vending machine', lv: 'N3', x: 395, y: 350 }
    ],
    say: [
      { ja: '体《からだ》 の ため に、 八百屋《やおや》 で 野菜《やさい》 を たくさん 買《か》って います。', en: 'For my health, I buy plenty of vegetables at the greengrocer.', p: 'yaoya' },
      { ja: 'お見舞《みま》い に 持《も》って 行《い》く 花《はな》 を 花屋《はなや》 で 買《か》いました。', en: 'I bought flowers at the florist to take to someone in hospital.', p: 'hanaya' },
      { ja: '足《あし》 が 痛《いた》く ならない 靴《くつ》 を 靴屋《くつや》 で 探《さが》して います。', en: 'I am looking in the shoe shop for shoes that will not hurt my feet.', p: 'kutsuya' },
      { ja: '喉《のど》 が 渇《かわ》いた ので、 自動販売機《じどうはんばいき》 で 水《みず》 を 買《か》います。', en: 'I am thirsty, so I will buy water from the vending machine.', p: 'jidouhanbaiki' },
      { ja: 'お金《かね》 は あちら の レジ で 払《はら》って ください。', en: 'Please pay at the till over there.', p: 'reji' },
      { ja: 'わからない こと が あったら、 店員《てんいん》 に 聞《き》いて ください。', en: 'If there is anything you are not sure of, ask the shop assistant.', p: 'tenin' },
      { ja: '袋《ふくろ》 は いります か。', en: 'Do you need a bag?', p: 'fukuro' },
      { ja: '床屋《とこや》 で 髪《かみ》 を 短《みじか》く 切《き》って もらいました。', en: "I had my hair cut short at the barber's.", p: 'tokoya' },
      { ja: '本屋《ほんや》 で 日本語《にほんご》 の 辞書《じしょ》 を 買《か》いました。', en: 'I bought a Japanese dictionary at the bookshop.', p: 'honya' },
      { ja: '毎朝《まいあさ》 パン屋《や》 で 朝《あさ》ご飯《はん》 の パン を 買《か》います。', en: 'Every morning I buy bread for breakfast at the bakery.', p: 'panya' }
    ] },

  { id: 'pharmacy-counter', group: 'town', title: 'At the pharmacy counter', lv: 'N4', kind: 'diagram', art: 'pharmacy-counter',
    intro: 'The pharmacist behind the counter, and the things you see on it: the prescription, the medicine bag and the different forms medicine comes in.',
    parts: [
      { id: 'yakuzaishi', w: '薬剤師《やくざいし》', en: 'pharmacist', lv: 'N3', x: 100, y: 148 },
      { id: 'masuku', w: 'マスク', en: 'mask', lv: 'N4', x: 156, y: 80 },
      { id: 'tana', w: '棚《たな》', en: 'shelf, shelves', lv: 'N4', x: 392, y: 105 },
      { id: 'shohousen', w: '処方箋《しょほうせん》', en: 'prescription', lv: 'N3', x: 36, y: 234 },
      { id: 'kusuribukuro', w: '薬袋《くすりぶくろ》', en: 'medicine bag', lv: 'N4', x: 120, y: 238 },
      { id: 'okusuritechou', w: 'お薬手帳《くすりてちょう》', en: 'medicine notebook (record of your medicines)', lv: 'N4', x: 192, y: 234 },
      { id: 'bangou', w: '番号《ばんごう》', en: 'number (on your ticket)', lv: 'N4', x: 300, y: 210 },
      { id: 'koppu', w: 'コップ', en: 'glass, cup', lv: 'N5', x: 383, y: 232 },
      { id: 'jouzai', w: '錠剤《じょうざい》', en: 'tablet', lv: 'N3', x: 78, y: 300 },
      { id: 'kapuseru', w: 'カプセル', en: 'capsule', lv: 'N4', x: 116, y: 306 },
      { id: 'konagusuri', w: '粉薬《こなぐすり》', en: 'powder medicine', lv: 'N4', x: 196, y: 318 },
      { id: 'shiroppu', w: 'シロップ', en: 'syrup (liquid medicine)', lv: 'N4', x: 312, y: 326 },
      { id: 'megusuri', w: '目薬《めぐすり》', en: 'eye drops', lv: 'N4', x: 388, y: 322 },
      { id: 'nurigusuri', w: '塗《ぬ》り薬《ぐすり》', en: 'ointment, cream', lv: 'N4', x: 50, y: 390 },
      { id: 'shippu', w: '湿布《しっぷ》', en: 'compress, medicated patch', lv: 'N3', x: 168, y: 396 },
      { id: 'saifu', w: '財布《さいふ》', en: 'purse, wallet', lv: 'N4', x: 310, y: 396 }
    ],
    say: [
      { ja: '処方箋《しょほうせん》 を お預《あず》かりします。', en: 'I will take your prescription.', p: 'shohousen' },
      { ja: '番号《ばんごう》 で お呼《よ》びします ので、 お待《ま》ち ください。', en: 'We will call you by your number, so please wait.', p: 'bangou' },
      { ja: 'お薬手帳《くすりてちょう》 は お持《も》ち です か。', en: 'Do you have your medicine notebook with you?', p: 'okusuritechou' },
      { ja: '薬《くすり》 の こと で 心配《しんぱい》 な こと は、 薬剤師《やくざいし》 に 相談《そうだん》して ください。', en: 'If anything about your medicine worries you, please talk to the pharmacist.', p: 'yakuzaishi' },
      { ja: '目《め》 が かゆい ので、 目薬《めぐすり》 を もらいました。', en: 'My eyes are itchy, so I was given eye drops.', p: 'megusuri' },
      { ja: '錠剤《じょうざい》 が 大《おお》きくて 飲《の》みにくい とき は、 教《おし》えて ください。', en: 'If the tablets are too big to swallow easily, please tell us.', p: 'jouzai' },
      { ja: '粉薬《こなぐすり》 が 苦手《にがて》 な 方《かた》 は、 お知《し》らせ ください。', en: 'If you find powder medicine hard to take, please let us know.', p: 'konagusuri' },
      { ja: '腰《こし》 が 痛《いた》くて、 湿布《しっぷ》 を 出《だ》して もらいました。', en: 'My lower back hurt, so I was given compresses.', p: 'shippu' },
      { ja: 'お薬《くすり》 は この 袋《ふくろ》 に 入《はい》って います。', en: 'Your medicine is in this bag.', p: 'kusuribukuro' },
      { ja: 'コップ に お水《みず》 が 入《はい》って います。 どうぞ。', en: 'There is water in the glass. Here you are.', p: 'koppu' }
    ] }
]);
