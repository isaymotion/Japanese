/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO: YYYY-MM-DD. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
  {
    version: '0.1.0', date: '2026-11-12', title: 'First version: the learn track',
    items: [
      { type: 'feature', text: 'Furigana on every kanji, a romaji line under every sentence and spaces between words. Each can be switched off in Settings or under the Aa button as you need it less; furigana can also be set to show only when you tap a word.' },
      { type: 'feature', text: 'Kana trainer: hiragana and katakana charts with sound, and a drill a row at a time (see the kana and choose the sound, see the sound and choose the kana, or listen and choose).' },
      { type: 'feature', text: '37 grammar lessons with quizzes, from the writing system and first sentences to particles, verbs, adjectives, the te-form, plain forms, keigo and the sentence patterns of a psychiatric interview.' },
      { type: 'feature', text: 'Verb and adjective trainer: 100 verbs and 60 adjectives with full conjugation tables made by rule, example sentences, and three drills (choose the form, name the form, type the form in kana or romaji).' },
      { type: 'feature', text: 'Particle guide and drill: 18 particles explained with examples, and 130 fill-in sentences.' },
      { type: 'feature', text: 'Dictionary of about 1,600 words with furigana, searchable in kanji, kana, romaji or English, with topic and JLPT-level filters. Verb and adjective entries show their conjugation. Every word can go into spaced-repetition flashcards; decks by topic and by level.' },
      { type: 'feature', text: 'Ten graded readings with glossaries and questions, ten dialogues with listen, shadow and role-play modes, and a 20-question placement test.' },
      { type: 'feature', text: 'Psychiatry track, first pass: 14 interview sections (197 phrases) in polite and plain forms, from opening and consent to mood, psychosis, risk, substances, history, cognition and closing, with the point board and the listening drill (189 patient replies).' },
      { type: 'content', text: 'All Japanese in this version is a draft for review by a native Japanese-speaking clinician. Clinical tools, case simulations and printable handouts come in later versions.' }
    ]
  }
];
