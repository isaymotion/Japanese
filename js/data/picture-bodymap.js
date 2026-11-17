/* Body map (0.24.0): #/pictures/bodymap (js/picture-print.js): the patient taps where it hurts; printable A4 handout.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A6): window.PICTURE_BODYMAP = { sets: ['body-front', 'body-back'] (picture set ids),
     ask: [ { ja, en } ] exactly 8 = questions a clinician asks ("Where does it hurt? Please point."),
     words: [ { ja, en } ] exactly 10 = pain-describing words the patient can point to }.
   No faces scale and no published scale wording. Append only after release. */
window.PICTURE_BODYMAP = {
  sets: ['body-front', 'body-back'],
  ask: [
    { ja: 'どこ が 痛《いた》い です か。 指《ゆび》 で 指《さ》して ください。', en: 'Where does it hurt? Please point to it.' },
    { ja: '一番《いちばん》 痛《いた》い ところ は どこ です か。', en: 'Where does it hurt the most?' },
    { ja: 'いつ から 痛《いた》い です か。', en: 'Since when has it hurt?' },
    { ja: '痛《いた》み は ずっと あります か。 それとも 時々《ときどき》 です か。', en: 'Is the pain there all the time, or does it come and go?' },
    { ja: 'どんな 痛《いた》み です か。 この 中《なか》 から 選《えら》んで ください。', en: 'What kind of pain is it? Please choose from these words.' },
    { ja: '痛《いた》み が ほか の ところ に 広《ひろ》がる こと は あります か。', en: 'Does the pain ever spread to other places?' },
    { ja: '何《なに》 を する と 痛《いた》く なります か。', en: 'What makes it hurt?' },
    { ja: 'ゼロ から 十《じゅう》 で 言《い》う と、 今《いま》 の 痛《いた》み は いくつ です か。', en: 'On a scale of 0 to 10, how bad is the pain now?' }
  ],
  words: [
    { ja: '痛《いた》い', en: 'it hurts, painful' },
    { ja: 'ズキズキ する', en: 'throbbing' },
    { ja: 'ガンガン する', en: 'pounding (as in a bad headache)' },
    { ja: 'チクチク する', en: 'prickling, like needles' },
    { ja: 'ひりひり する', en: 'stinging, burning (on the skin or in the throat)' },
    { ja: 'キリキリ する', en: 'sharp and griping (often the stomach)' },
    { ja: 'しびれる', en: 'numb, tingling' },
    { ja: 'かゆい', en: 'itchy' },
    { ja: '重《おも》い', en: 'heavy' },
    { ja: '苦《くる》しい', en: 'tight, hard to breathe' }
  ],
  scale: { ja: 'ゼロ は 「痛《いた》く ない」、 十《じゅう》 は 「一番《いちばん》 ひどい 痛《いた》み」 です。', en: '0 means no pain; 10 means the worst pain.' }
};
