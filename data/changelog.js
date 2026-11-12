/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO: YYYY-MM-DD. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
  {
    version: '0.3.0', date: '2026-11-13', title: 'Clinical tools',
    items: [
      { type: 'feature', text: 'Mood episode checker: the DSM-5-TR major depressive and manic or hypomanic episode criteria as questions in Japanese, with duration, impairment and specifiers, and interview paraphrases of the PHQ-9 and MDQ.' },
      { type: 'feature', text: 'Substance use screen: the DSM-5-TR criteria as questions for alcohol, tobacco, cannabis, methamphetamine, cocaine, opioids, other substances and gambling, with severity and codes, AUDIT-C and Fagerström add-ons, and a guided motivational interview.' },
      { type: 'feature', text: 'Withdrawal and agitation: what to ask and how to explain alcohol, cannabis and opioid withdrawal in Japanese (PAWSS, CIWA-Ar and COWS scorers), the agitated patient from de-escalation to restraint, a nurse monitoring script and practice cases. The English teaching reference is the same as in Hablemos.' },
      { type: 'feature', text: 'De-escalation checklist with what to say at each step, a listen-and-repeat drill and timed practice; 28 more de-escalation phrases.' },
      { type: 'feature', text: 'Discharge assessment, field by field, with 58 questions in Japanese and wording to document.' },
      { type: 'feature', text: 'Practice with simulated patients: two admission MSE cases and four discharge cases, using the same patients as the case simulations.' },
      { type: 'content', text: 'The psychiatry track now has 39 sections and 707 phrases. All of the Japanese is a draft for review by a native Japanese-speaking clinician. The tools use generic forms: no hospital name, form numbers or crisis line are preset (data/hospital.js).' }
    ]
  },
  {
    version: '0.2.0', date: '2026-11-12', title: 'The full interview, and case simulations',
    items: [
      { type: 'feature', text: 'Thirteen more interview sections (155 phrases): trauma, de-escalation, family history, personal and social history, collateral history, the MSE (abstraction, judgment and insight; describing observations), explaining diagnosis and treatment, medication, admission and discharge, children and adolescents, elderly patients, and Shea\'s validity techniques. The track now has all 27 sections and 352 phrases, in the same order as Usap Tayo.' },
      { type: 'feature', text: 'Seven case simulations: first-episode psychosis, depression with suicide risk, a manic episode, delirium in an older adult, alcohol withdrawal, an agitated patient, and over-the-counter medicine misuse with motivational interviewing. Choose what to say next and get feedback on each choice. The same cases can be role-played in Speaking.' },
      { type: 'feature', text: '"What is the patient saying?": 32 idioms, indirect statements and body-first descriptions of distress, with what each may mean and what to ask next.' },
      { type: 'feature', text: 'The point board and the listening drill now cover every section (314 patient replies). Technique notes at the top of each section link to the matching chapter of the Psychiatric Interviewing Trainer.' },
      { type: 'correction', text: 'Sentences with an ellipsis (…) now show their romaji on one line under the sentence.' },
      { type: 'content', text: 'All of this Japanese is a draft for review by a native Japanese-speaking clinician.' }
    ]
  },
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
