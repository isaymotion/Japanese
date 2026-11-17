/* Machine panels (0.24.0): #/signs?tab=panels (js/signs.js): "press the control that …". 10 panels (PLAN-0.24 E).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A3): window.SIGN_PANELS = [ { id, title, lv, note,
     rows: [ [ { id, ja, en, kind: 'btn' | 'lamp' (a status light, not pressable in tasks) | 'dial' } ] ]   2 to 4 rows, 6 to 12 controls in all,
     tasks: [ { q: English task, a: the ONE right control id (not a lamp), why } ]   5 or 6 tasks } ].
   Control text is what is really printed in Japan. Panel and control ids are permanent: append only after release. */
window.SIGN_PANELS = [
  { id: 'washer', title: 'Washing machine', lv: 'N4',
    note: 'A home or coin-laundry washing machine. The three steps of a wash are 洗《あら》い (wash), すすぎ (rinse) and 脱水《だっすい》 (spin).',
    rows: [
      [ { id: 'power', ja: '電源《でんげん》', en: 'power', kind: 'btn' }, { id: 'start', ja: 'スタート', en: 'start', kind: 'btn' },
        { id: 'pause', ja: '一時停止《いちじていし》', en: 'pause', kind: 'btn' } ],
      [ { id: 'wash', ja: '洗《あら》い', en: 'wash', kind: 'btn' }, { id: 'rinse', ja: 'すすぎ', en: 'rinse', kind: 'btn' },
        { id: 'spin', ja: '脱水《だっすい》', en: 'spin (water out)', kind: 'btn' } ],
      [ { id: 'course', ja: 'コース', en: 'wash programme', kind: 'btn' }, { id: 'timer', ja: '予約《よやく》', en: 'timer (finish later)', kind: 'btn' },
        { id: 'done', ja: '終了《しゅうりょう》', en: 'finished', kind: 'lamp' } ]
    ],
    tasks: [
      { q: 'Switch the machine on.', a: 'power', why: '電源《でんげん》 is the power button.' },
      { q: 'Start the wash.', a: 'start', why: 'スタート starts the programme.' },
      { q: 'Stop for a moment to add a forgotten sock.', a: 'pause', why: '一時停止《いちじていし》 means "stop for a while": the wash goes on when you press スタート again.' },
      { q: 'Only spin the clothes so they are less wet.', a: 'spin', why: '脱水《だっすい》 means "remove water": the spin step.' },
      { q: 'Only rinse the clothes in clean water.', a: 'rinse', why: 'すすぎ is the rinse step.' },
      { q: 'Set the wash to be finished when you come home tonight.', a: 'timer', why: '予約《よやく》 means "booking": on machines it sets a timer.' }
    ] },

  { id: 'aircon', title: 'Air conditioner remote', lv: 'N4',
    note: 'Most rooms in Japan have one air conditioner that both cools and heats. Temperatures are in degrees Celsius.',
    rows: [
      [ { id: 'stop', ja: '停止《ていし》', en: 'stop (off)', kind: 'btn' }, { id: 'cool', ja: '冷房《れいぼう》', en: 'cooling', kind: 'btn' },
        { id: 'heat', ja: '暖房《だんぼう》', en: 'heating', kind: 'btn' }, { id: 'dry', ja: '除湿《じょしつ》', en: 'dehumidify', kind: 'btn' } ],
      [ { id: 'temp-up', ja: '温度《おんど》 ▲', en: 'temperature up', kind: 'btn' }, { id: 'temp-down', ja: '温度《おんど》 ▼', en: 'temperature down', kind: 'btn' } ],
      [ { id: 'fan', ja: '風量《ふうりょう》', en: 'fan speed', kind: 'btn' }, { id: 'vane', ja: '風向《ふうこう》', en: 'air direction', kind: 'btn' },
        { id: 'off-timer', ja: '切《きり》タイマー', en: 'off timer', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'It is a hot summer day. Turn on the cooling.', a: 'cool', why: '冷房《れいぼう》 is cooling: 冷《れい》 means cold.' },
      { q: 'It is a cold winter night. Turn on the heating.', a: 'heat', why: '暖房《だんぼう》 is heating: 暖《だん》 means warm.' },
      { q: 'It is the rainy season and the room feels damp. Dry the air.', a: 'dry', why: '除湿《じょしつ》 means "remove humidity".' },
      { q: 'The heating is on, but you want the room one degree warmer.', a: 'temp-up', why: '温度《おんど》 is temperature; ▲ raises it.' },
      { q: 'Make the air blow harder.', a: 'fan', why: '風量《ふうりょう》 is the amount of air: the fan speed.' },
      { q: 'Have it switch itself off an hour after you fall asleep.', a: 'off-timer', why: '切《きり》 means off, so 切《きり》タイマー turns the unit off later.' }
    ] },

  { id: 'toilet', title: 'Toilet control panel', lv: 'N4',
    note: 'Many toilets in Japan have a wall or side panel. The flush lever or button is often separate: 大《だい》 is a full flush and 小《しょう》 a small one.',
    rows: [
      [ { id: 'stop', ja: '止《とめ》', en: 'stop', kind: 'btn' }, { id: 'rear', ja: 'おしり', en: 'rear wash', kind: 'btn' },
        { id: 'bidet', ja: 'ビデ', en: 'front wash (bidet)', kind: 'btn' }, { id: 'dryer', ja: '乾燥《かんそう》', en: 'air dry', kind: 'btn' } ],
      [ { id: 'weaker', ja: '水勢《すいせい》 弱《よわ》', en: 'water pressure down', kind: 'btn' }, { id: 'stronger', ja: '水勢《すいせい》 強《つよ》', en: 'water pressure up', kind: 'btn' } ],
      [ { id: 'flush-big', ja: '流《なが》す 大《だい》', en: 'flush (full)', kind: 'btn' }, { id: 'flush-small', ja: '流《なが》す 小《しょう》', en: 'flush (small)', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'The water spray will not stop. Stop it.', a: 'stop', why: '止《とめ》 is the stop button, often orange and the largest. Press it first if you are unsure.' },
      { q: 'Use the spray to wash your bottom.', a: 'rear', why: 'おしり means bottom: the rear wash.' },
      { q: 'The spray is too strong. Make it gentler.', a: 'weaker', why: '水勢《すいせい》 is water force; 弱《よわ》 means weak.' },
      { q: 'You only urinated. Flush with less water.', a: 'flush-small', why: '小《しょう》 means small: the small flush.' },
      { q: 'Flush with the full amount of water.', a: 'flush-big', why: '大《だい》 means large: the full flush.' },
      { q: 'Dry with warm air after washing.', a: 'dryer', why: '乾燥《かんそう》 means drying.' }
    ] },

  { id: 'ticket', title: 'Train ticket machine', lv: 'N4',
    note: 'Ticket machines at stations sell tickets and top up prepaid IC cards. Look up the fare on the map above the machines first.',
    rows: [
      [ { id: 'ticket', ja: 'きっぷ', en: 'ticket', kind: 'btn' }, { id: 'charge', ja: 'チャージ', en: 'top up IC card', kind: 'btn' },
        { id: 'pass', ja: '定期券《ていきけん》', en: 'commuter pass', kind: 'btn' } ],
      [ { id: 'adult', ja: '大人《おとな》', en: 'adult', kind: 'btn' }, { id: 'child', ja: 'こども', en: 'child', kind: 'btn' },
        { id: 'receipt', ja: '領収書《りょうしゅうしょ》', en: 'receipt', kind: 'btn' } ],
      [ { id: 'cancel', ja: '取消《とりけし》', en: 'cancel', kind: 'btn' }, { id: 'call', ja: '呼出《よびだし》', en: 'call staff', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Buy a paper ticket.', a: 'ticket', why: 'きっぷ is a ticket. On signs it is often written 切符《きっぷ》.' },
      { q: 'Put more money on your IC card.', a: 'charge', why: 'チャージ means adding money to a card.' },
      { q: 'Buy a ticket for a child.', a: 'child', why: 'こども means child: the child fare (fare tables may say 小児《しょうに》).' },
      { q: 'You chose the wrong fare. Start again and get your money back.', a: 'cancel', why: '取消《とりけし》 cancels and returns the money you put in.' },
      { q: 'The machine kept your money. Call a station worker.', a: 'call', why: '呼出《よびだし》 means "call": staff answer through the machine.' },
      { q: 'Get a receipt for a work trip.', a: 'receipt', why: '領収書《りょうしゅうしょ》 is a receipt.' }
    ] },

  { id: 'atm', title: 'Bank ATM', lv: 'N4',
    note: 'Bank and convenience-store ATMs often have an English button too. お and ご before a word make it polite: お引《ひ》き出《だ》し.',
    rows: [
      [ { id: 'withdraw', ja: 'お引《ひ》き出《だ》し', en: 'withdrawal', kind: 'btn' }, { id: 'deposit', ja: 'お預《あず》け入《い》れ', en: 'deposit', kind: 'btn' } ],
      [ { id: 'balance', ja: '残高《ざんだか》 照会《しょうかい》', en: 'balance enquiry', kind: 'btn' }, { id: 'transfer', ja: 'お振込《ふりこ》み', en: 'bank transfer', kind: 'btn' },
        { id: 'passbook', ja: '通帳《つうちょう》 記入《きにゅう》', en: 'update passbook', kind: 'btn' } ],
      [ { id: 'confirm', ja: '確認《かくにん》', en: 'confirm', kind: 'btn' }, { id: 'correct', ja: '訂正《ていせい》', en: 'correct (clear)', kind: 'btn' },
        { id: 'cancel', ja: '取消《とりけし》', en: 'cancel', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Take out cash.', a: 'withdraw', why: 'お引《ひ》き出《だ》し means "pulling out": a withdrawal.' },
      { q: 'Put cash into your account.', a: 'deposit', why: 'お預《あず》け入《い》れ means "putting in to keep": a deposit.' },
      { q: 'See how much money is in your account.', a: 'balance', why: '残高《ざんだか》 is the balance and 照会《しょうかい》 means enquiry.' },
      { q: 'You typed the wrong amount. Clear it and type again.', a: 'correct', why: '訂正《ていせい》 means correction: it clears what you typed.' },
      { q: 'The amount on the screen is right. Go on.', a: 'confirm', why: '確認《かくにん》 means "check and confirm".' },
      { q: 'Stop everything and get your card back.', a: 'cancel', why: '取消《とりけし》 cancels the whole transaction.' }
    ] },

  { id: 'rice-cooker', title: 'Rice cooker', lv: 'N4',
    note: 'Almost every Japanese home has a rice cooker. The lamps show which kind of rice the menu is set to.',
    rows: [
      [ { id: 'cook', ja: '炊飯《すいはん》', en: 'cook rice', kind: 'btn' }, { id: 'warm', ja: '保温《ほおん》', en: 'keep warm', kind: 'btn' },
        { id: 'timer', ja: '予約《よやく》', en: 'timer (ready later)', kind: 'btn' }, { id: 'cancel', ja: '切《きり》 / 取消《とりけし》', en: 'off / cancel', kind: 'btn' } ],
      [ { id: 'menu', ja: 'メニュー', en: 'menu (kind of rice)', kind: 'btn' }, { id: 'hour', ja: '時《じ》', en: 'hour', kind: 'btn' },
        { id: 'minute', ja: '分《ふん》', en: 'minute', kind: 'btn' } ],
      [ { id: 'white', ja: '白米《はくまい》', en: 'white rice', kind: 'lamp' }, { id: 'porridge', ja: 'おかゆ', en: 'rice porridge', kind: 'lamp' } ]
    ],
    tasks: [
      { q: 'Start cooking the rice now.', a: 'cook', why: '炊飯《すいはん》 means cooking rice.' },
      { q: 'Keep the cooked rice warm until dinner.', a: 'warm', why: '保温《ほおん》 means keeping warm.' },
      { q: 'Have the rice ready when you wake up tomorrow.', a: 'timer', why: '予約《よやく》 sets the time the rice should be ready.' },
      { q: 'Change from white rice to rice porridge.', a: 'menu', why: 'メニュー changes the kind of rice; the lamps show the choice.' },
      { q: 'Set the hour for the timer.', a: 'hour', why: '時《じ》 means hour (o\'clock).' },
      { q: 'Switch the cooker off.', a: 'cancel', why: '切《きり》 means off and 取消《とりけし》 means cancel: one button stops cooking and keeping warm.' }
    ] },

  { id: 'microwave', title: 'Microwave oven', lv: 'N4',
    note: 'Convenience stores heat food for you, but at home or in a staff room you will meet this panel. あたため heats food by itself.',
    rows: [
      [ { id: 'auto', ja: 'あたため', en: 'auto reheat', kind: 'btn' }, { id: 'defrost', ja: '解凍《かいとう》', en: 'defrost', kind: 'btn' },
        { id: 'range', ja: 'レンジ', en: 'microwave (manual)', kind: 'btn' }, { id: 'oven', ja: 'オーブン', en: 'oven (bake)', kind: 'btn' } ],
      [ { id: 'time', ja: '時間《じかん》', en: 'time', kind: 'dial' } ],
      [ { id: 'start', ja: 'スタート', en: 'start', kind: 'btn' }, { id: 'cancel', ja: '取消《とりけし》', en: 'cancel', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Heat up a cold bento and let the machine choose the time.', a: 'auto', why: 'あたため means warming: it senses the food and stops by itself.' },
      { q: 'Thaw frozen meat.', a: 'defrost', why: '解凍《かいとう》 means thawing.' },
      { q: 'Bake a small cake.', a: 'oven', why: 'オーブン is the oven mode.' },
      { q: 'Set two minutes.', a: 'time', why: '時間《じかん》 is time: turn the dial.' },
      { q: 'Begin heating.', a: 'start', why: 'スタート starts it.' },
      { q: 'You set the wrong time. Clear it.', a: 'cancel', why: '取消《とりけし》 clears the setting or stops the oven.' }
    ] },

  { id: 'lift', title: 'Lift (elevator)', lv: 'N4',
    note: 'In Japan the ground floor is 一階《いっかい》 (floor 1). 開《ひらく》 and 閉《しめる》 are usually shown with arrows as well.',
    rows: [
      [ { id: 'f1', ja: '1', en: 'floor 1 (ground floor)', kind: 'btn' }, { id: 'f2', ja: '2', en: 'floor 2', kind: 'btn' },
        { id: 'f3', ja: '3', en: 'floor 3', kind: 'btn' }, { id: 'f4', ja: '4', en: 'floor 4', kind: 'btn' } ],
      [ { id: 'open', ja: '開《ひらく》', en: 'open doors', kind: 'btn' }, { id: 'close', ja: '閉《しめる》', en: 'close doors', kind: 'btn' } ],
      [ { id: 'alarm', ja: '非常《ひじょう》 呼出《よびだし》', en: 'emergency call', kind: 'btn' }, { id: 'full', ja: '満員《まんいん》', en: 'full', kind: 'lamp' } ]
    ],
    tasks: [
      { q: 'Someone is running towards the lift. Hold the doors open.', a: 'open', why: '開《ひらく》 means open: ◀▶ on the button.' },
      { q: 'Close the doors now.', a: 'close', why: '閉《しめる》 means close: ▶◀ on the button.' },
      { q: 'Go to the ground floor, where the entrance is.', a: 'f1', why: 'Japan counts the ground floor as floor 1 (一階《いっかい》).' },
      { q: 'Go to floor 3.', a: 'f3', why: 'Floor buttons show the number only; 階《かい》 is the floor counter.' },
      { q: 'The lift has stopped between floors. Call for help.', a: 'alarm', why: '非常《ひじょう》 means emergency and 呼出《よびだし》 means call.' }
    ] },

  { id: 'vending', title: 'Drinks vending machine', lv: 'N4',
    note: 'Vending machines are everywhere in Japan. A label under each drink shows if it is cold (つめたい, often printed つめた〜い) or hot (あたたかい, often printed あったか〜い); in winter many drinks are sold hot.',
    rows: [
      [ { id: 'tea', ja: 'お茶《ちゃ》', en: 'green tea', kind: 'btn' }, { id: 'coffee', ja: 'コーヒー', en: 'coffee', kind: 'btn' },
        { id: 'water', ja: '水《みず》', en: 'water', kind: 'btn' }, { id: 'juice', ja: 'ジュース', en: 'juice', kind: 'btn' } ],
      [ { id: 'cold', ja: 'つめたい', en: 'cold', kind: 'lamp' }, { id: 'hot', ja: 'あたたかい', en: 'hot', kind: 'lamp' },
        { id: 'sold-out', ja: '売切《うりきれ》', en: 'sold out', kind: 'lamp' } ],
      [ { id: 'change', ja: 'おつり', en: 'coin return', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Buy a bottle of green tea.', a: 'tea', why: 'お茶《ちゃ》 is tea; in Japan it usually means green tea.' },
      { q: 'Buy a can of coffee.', a: 'coffee', why: 'コーヒー is coffee.' },
      { q: 'Buy plain water.', a: 'water', why: '水《みず》 is water.' },
      { q: 'Buy fruit juice.', a: 'juice', why: 'ジュース is juice.' },
      { q: 'You changed your mind. Get your coins back.', a: 'change', why: 'おつり means change: the lever returns your money.' }
    ] },

  { id: 'bed-call', title: 'Hospital bed and nurse call', lv: 'N4',
    note: 'The handset clipped to a hospital bed. The nurse call button is usually red or orange and the largest button.',
    rows: [
      [ { id: 'call', ja: '呼出《よびだし》', en: 'call the nurse', kind: 'btn' }, { id: 'talking', ja: '通話中《つうわちゅう》', en: 'line open', kind: 'lamp' } ],
      [ { id: 'back-up', ja: '背上《せあ》げ', en: 'back up', kind: 'btn' }, { id: 'back-down', ja: '背下《せさ》げ', en: 'back down', kind: 'btn' },
        { id: 'leg-up', ja: '脚上《あしあ》げ', en: 'legs up', kind: 'btn' }, { id: 'leg-down', ja: '脚下《あしさ》げ', en: 'legs down', kind: 'btn' } ],
      [ { id: 'bed-up', ja: '高《たか》さ 上《あ》げ', en: 'bed higher', kind: 'btn' }, { id: 'bed-down', ja: '高《たか》さ 下《さ》げ', en: 'bed lower', kind: 'btn' },
        { id: 'light', ja: '照明《しょうめい》', en: 'light', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'You need help. Call the nurse.', a: 'call', why: '呼出《よびだし》 means call: it rings at the nurses\' station.' },
      { q: 'Sit up to eat your meal.', a: 'back-up', why: '背上《せあ》げ raises the back rest: 背《せ》 is the back and 上《あ》げ means raising.' },
      { q: 'Lie flat to sleep.', a: 'back-down', why: '下《さ》げ means lowering the back rest.' },
      { q: 'Your feet are swollen. Raise your legs.', a: 'leg-up', why: '脚上《あしあ》げ raises the leg part of the bed (脚《あし》 is leg).' },
      { q: 'Lower the bed before you stand up.', a: 'bed-down', why: '高《たか》さ is height: a low bed is safer for getting out.' },
      { q: 'Turn on the light to read.', a: 'light', why: '照明《しょうめい》 means lighting.' }
    ] }
];
