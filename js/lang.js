/* Language pack: everything in the ENGINE (core.js, views.js, psych-views.js, app.js) that is specific to the
   target language lives here. Hanashimashō shares its engine with Usap Tayo (Tagalog) and Hablemos (Spanish);
   the data files (js/data/*) hold the Japanese content. Field names in the data stay `tl`, `f`, `c` for engine
   compatibility: `tl` is the Japanese text, f = polite (です/ます), c = plain form.
   Japanese strings use the furigana notation of js/ja.js. Shell UI strings are in data/strings.js and go through t(). */
window.LANG = {
  code: 'ja',
  name: 'Japanese',
  nameFull: 'Japanese (standard, Tokyo)',
  nameNative: '日本語',
  voiceName: 'Japanese',
  bcp47: 'ja-JP',
  voiceLang: /^ja([-_]|$)/i,
  voiceNameMatch: /japanese|日本語|kyoko|otoya|nanami|keita|o-ren|hattori/i,
  // No other language reads Japanese text acceptably, so there is no "near" fallback.
  nearVoices: [],
  packVoices: 'Nanami, Keita',
  deviceVoiceHelp: 'Phones and computers already have a Japanese voice. iPhone and iPad: Settings → Accessibility → Spoken Content → Voices → Japanese (download an Enhanced voice for better sound). Android: Settings → Google Text-to-speech → install Japanese. Microsoft Edge on a computer includes natural Japanese voices (Nanami, Keita).',
  testLine: 'こんにちは。 今日《きょう》 は どう されました か。',

  // Two registers for every interview phrase: f = polite, c = plain.
  registers: {
    f: { label: 'Polite (です/ます)', short: 'Polite', help: 'uses です/ます with light honorifics (the default with every adult patient and with family)' },
    c: { label: 'Plain (casual)', short: 'Plain', help: 'uses the plain form (for children and adolescents, and to recognise how patients and families speak among themselves)' }
  },
  registerIntro: 'each in a polite (です/ます) and a plain form',

  // Short words the engine prints in quizzes and drills.
  quiz: { great: 'Very good.', ok: 'Good.', keepGoing: 'Keep going.', right: 'Correct.', wrong: 'Not quite.', toTarget: 'EN→JA', toEnglish: 'JA→EN', done: 'Done.' },
  yes: 'はい', no: 'いいえ',
  cardDir: { 'tl-en': 'Japanese first', 'en-tl': 'English first' },
  dictDir: { tl: 'Japanese → English', en: 'English → Japanese' },
  // Rows offered by the dictionary browser (first kana of the reading).
  letters: 'あ か さ た な は ま や ら わ'.split(' '),
  searchExample: 'e.g., ねむい, 眠い, nemui, sleepy',
  // Lesson and placement levels, easiest first.
  levels: ['Starter', 'N5', 'N4', 'N3'],
  placementLevels: [['S', 'Starter (kana and greetings)'], ['N5a', 'N5, first half'], ['N5b', 'N5, second half'], ['N4', 'N4'], ['N3', 'N3']],

  // Display order of the psychiatry sections (the same order as Usap Tayo). Data files may load in any order.
  sectionOrder: ['opening', 'consent', 'cc-hpi', 'depression', 'mania', 'anxiety', 'trauma', 'hallucinations', 'delusions', 'suicide', 'violence', 'deescalation', 'substance', 'history', 'family-hx', 'social', 'collateral', 'mse-cog', 'mse-abstract', 'mse-describe', 'explain', 'meds', 'admission', 'child', 'elderly', 'closing', 'shea-techniques',
    'mood-screens', 'sud-screen', 'sud-alcohol-tobacco', 'sud-drugs', 'sud-gambling', 'sud-screens', 'mi', 'wd-alcohol', 'wd-cannabis', 'wd-opioid', 'wd-agitation', 'discharge'],

  // Point board: the strip the interviewer reads after the patient taps a tile.
  point: { title: '指《ゆび》さしボード', subtitle: 'Point to your answer', pass: '答《こた》え を 指《ゆび》 で さして ください。', passEn: 'Hand the phone or tablet to the patient.' },

  variety: 'Japanese wording follows standard (Tokyo) Japanese in the polite です/ます style. Regional dialects are not covered.',
  review: 'Every Japanese section is a draft for review until a native Japanese-speaking clinician has checked it.',
  reviewer: 'a native Japanese-speaking clinician',
  interpreter: 'For consent, risk disclosures, diagnosis and treatment decisions, work with a qualified medical interpreter.'
};
