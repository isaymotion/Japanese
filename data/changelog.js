/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO: YYYY-MM-DD. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
  {
    version: '0.10.0', date: '2026-11-13', title: 'Stroke order for kanji and kana',
    items: [
      { type: 'feature', text: 'Stroke order for kanji. Every kanji page (all 719) now has a Stroke order card: a large diagram with numbered strokes, Play to watch the kanji being written, Next stroke to go one stroke at a time, and a row of small pictures, one for each stroke, with a dot where the stroke starts. Tap a small picture to see the kanji up to that stroke.' },
      { type: 'feature', text: 'Stroke order for kana. In the Kana trainer, tapping a hiragana or katakana on the chart still says it, and now also opens How to write under the table, with the same diagram. Combinations such as きゃ show both kana.' },
      { type: 'update', text: 'The diagrams work offline once the app has been opened online, and print with the kanji page. Stroke data comes from KanjiVG by Ulrich Apel (Creative Commons Attribution-Share Alike 3.0); the credit is on each diagram and on the About page.' }
    ]
  },
  {
    version: '0.9.0', date: '2026-11-13', title: 'Recorded Japanese voice',
    items: [
      { type: 'feature', text: 'Recorded voice. The app can now play recorded clips of a natural Japanese voice (Nanami) instead of the voice on your device: about 10,100 clips covering every dictionary word, lesson example, reading, dialogue, kana, kanji word, every form of the 100 verbs and 60 adjectives in the trainer, and every interview phrase (polite and plain), patient reply, case and clinical-tool line. The clips are recorded on GitHub after this release; until they arrive, and for anything without a clip, the app uses the device voice as before.' },
      { type: 'feature', text: 'Settings → Voice shows whether the recorded voice is installed, lets you switch between Recorded Japanese voice and Device voice, and has Save all audio for offline use (about 150 MB). Without saving, each clip is kept after the first time you play it.' },
      { type: 'update', text: 'The recorded voice follows the furigana. Where a kanji can be read in more than one way (何, 七時, 十分, 方), the voice is given that word in kana, so what you hear matches the reading you see. Words written the same but read differently (方 as かた or ほう, 一日 as いちにち or ついたち) each have their own clip.' },
      { type: 'correction', text: 'Practice cases: when a simulated patient has no specific answer, the default reply is now Japanese (はい、先生。) instead of a leftover Spanish line; a Spanish example in the goal box of the substance use screen is now English.' }
    ]
  },
  {
    version: '0.8.1', date: '2026-11-13', title: 'Japanese drinks in the alcohol notes',
    items: [
      { type: 'content', text: 'Alcohol: the drink-counting note (substance use screen, AUDIT-C, and the printed MSE sheet) now gives Japanese drinks. One standard drink of 14 g is about 120 ml of sake, so one gō (180 ml) is about 1.5; 70 ml of shōchū; 45 ml of whisky, so a single highball is about 0.7 and a double about 1.4; 250 ml of 7% chūhai; 150 ml of umeshu or wine; 350 ml of beer.' },
      { type: 'content', text: 'The questions about what a patient drinks now name sake, whisky, highballs and umeshu as well as beer, chūhai, shōchū and wine, and the withdrawal question asks for sake in gō (何合).' }
    ]
  },
  {
    version: '0.8.0', date: '2026-11-13', title: 'More reading and a bigger dictionary',
    items: [
      { type: 'content', text: 'The dictionary has more than doubled, from 1,600 to about 3,440 words. New: every example word on the kanji pages now has its own dictionary entry (about 1,130 words), about 350 N3 verbs, adjectives, adverbs, linking words and sound-symbolic words, about 150 N3 nouns, 72 N3 grammar patterns with an example each, and about 130 words for the ward and for reading charts (for example 申し送り, 所見, 訴え, 検温, 付き添い, 不穏, 独語).' },
      { type: 'content', text: '14 new reading passages, for 24 in all (Starter 2, N5 4, N4 7, N3 11). N4: a convenience store, a first visit to a clinic, a sister\'s diary. N3: commuting, stress at work, a hometown, sleep habits, a first admission, a mother\'s letter to the ward, a patient thinking about alcohol, getting ready to go home, a chat between friends in casual speech, a day of nursing notes, and a ward notice in formal written style. Each has a translation, a glossary and five questions.' },
      { type: 'feature', text: 'Reading has a level filter, and the dictionary\'s level menu and the flashcard decks by level now include N3. A new dictionary topic, "Society, ideas and abstract words".' },
      { type: 'update', text: 'Words you already saved as flashcards keep their place: word ids no longer change when the dictionary grows.' },
      { type: 'content', text: 'As with the rest of the Japanese, the new words and passages were written and then checked by a second AI reviewer, and are a draft until a native Japanese speaker reviews them.' }
    ]
  },
  {
    version: '0.7.0', date: '2026-11-13', title: 'Printable handouts',
    items: [
      { type: 'feature', text: 'Printable handout (Psychiatry → Print): build a reference sheet from the interview flow, the key or full phrases of any section, the MSE table, the 32 "what the patient may be saying" expressions, the de-escalation checklist, the discharge guide and a blank MSE write-up form. Seven ready-made sets, including a pocket booklet on A5 and a de-escalation pocket card on A6. Choose polite or plain form, English shown, hidden or as an answer key, furigana on or off, romaji on or off, paper and text size.' },
      { type: 'feature', text: 'MSE interviewer sheet: the screening questions for the clinic and wards in polite Japanese, with pages for substance use screening and brief intervention. Furigana, romaji and English can each be switched on or off before printing.' },
      { type: 'feature', text: 'Print button on every lesson and reading passage, and a new List view in Kanji that prints the kanji of a level as a table with readings and example words.' },
      { type: 'update', text: 'Printing uses the browser\'s own print window, so there is nothing to download: choose a printer, or "Save as PDF" to make a PDF file. Japanese prints with the fonts already on the phone or computer.' },
      { type: 'content', text: 'The interview-flow tips were rewritten for Japanese-speaking patients. All Japanese on the sheets is a draft for review by a native Japanese-speaking clinician; the sheets print no hospital name or crisis line unless data/hospital.js is filled in.' }
    ]
  },
  {
    version: '0.6.0', date: '2026-11-13', title: 'N3 grammar',
    items: [
      { type: 'content', text: 'A new N3 level with 24 lessons in eight units, each with a six-question quiz: Time and sequence (〜間 に, 〜うち に, 〜たび に, 〜とおり, 〜ついで に, 〜て 以来, 〜た とたん, 〜次第); Limits and extent (だけ, しか, ばかり, さえ, こそ, ほど, くらい, compound verbs such as 〜始める and 〜続ける); Causes and obligations (〜おかげ で, 〜せい で, わけ, べき, もの だ, こと だ); Conditions and relations (なら, 〜ば よかった, 〜さえ 〜ば, and compound particles such as 〜に ついて, 〜に 対して, 〜に とって, 〜に よって, 〜と して, 〜に 比べて); Contrast and concession (〜一方, 〜わり に, 〜くせ に, たとえ 〜ても, 〜と して も); Hearsay and judgement (〜そう だ, 〜との こと, 〜に 違いない, 〜おそれ が ある, 〜がち, 〜気味, 〜っぽい, 〜と いう); Feelings and attempts (〜て たまらない, 〜ず に, 〜よう と する, patterns with こと); and Casual and written styles.' },
      { type: 'content', text: 'Two of the N3 lessons are for the ward: understanding casual patient speech (〜ちゃう, 〜てる, 〜なきゃ, 〜っけ, 〜もん), and reading chart and notice Japanese (the である style, noun-ending notes, 〜あり / 〜なし, formal words).' },
      { type: 'content', text: 'The app now has 86 lessons: 6 Starter, 21 at N5, 35 at N4 and 24 at N3. The lessons page has an N3 filter. All of the Japanese is a draft for review by a native Japanese speaker.' }
    ]
  },
  {
    version: '0.5.0', date: '2026-11-13', title: 'N4 grammar, in full',
    items: [
      { type: 'content', text: '24 new N4 lessons in eight units, each with a six-question quiz: Clauses and descriptions (describing a noun with a sentence, の and こと, questions inside sentences, 〜やすい / 〜にくい / 〜すぎる); How things seem (〜そう, 〜よう, 〜みたい, 〜らしい; でしょう, かも しれません, はず); Giving and receiving (あげる, くれる, もらう and their て-forms); More て-forms (〜て しまう, 〜て おく, 〜て みる, 〜て いく, 〜て くる, 〜て ある, transitive and intransitive pairs, 〜ながら, 〜た まま, ところ, 〜た ばかり); Plans, advice and rules (the volitional form, 〜こと に する / なる, 〜よう に する / なる, advice, commands and signs); Purpose and contrast (〜ため に, 〜よう に, 〜ても, 〜の に, 〜し); Passive and causative (four lessons); and Respect language (honorific and humble forms).' },
      { type: 'content', text: 'About a third of the examples in the new lessons are lines for the clinic or ward. The app now has 62 lessons. Like the rest of the Japanese, they are a draft for review by a native Japanese speaker.' },
      { type: 'correction', text: 'On phones, a long lesson title and the previous and next lesson buttons now wrap instead of running off the side of the screen.' },
      { type: 'correction', text: 'Lesson examples now show the English under the Japanese sentence at full width. Before, the two sat side by side and long sentences were squeezed into a narrow column.' }
    ]
  },
  {
    version: '0.4.0', date: '2026-11-13', title: 'Kanji study',
    items: [
      { type: 'feature', text: 'Kanji study: 719 kanji on a chart by level (80 at JLPT N5, 166 at N4, 367 at N3 and a clinical set of 106 that the psychiatry phrases use), grouped by theme. Each kanji has its own page with meanings, on and kun readings, stroke count, example words with furigana and sound, and more words from the dictionary.' },
      { type: 'feature', text: 'Kanji drill, a group at a time, in four modes: see the kanji and choose the meaning, see the meaning and choose the kanji, see a word and choose its reading, see a word and choose its meaning. A kanji turns green on the chart after three correct answers in a row.' },
      { type: 'feature', text: 'Kanji flashcard decks for each level, and a button on every kanji page to add it to your cards. Dictionary word pages now list the kanji in the word, and a kanji typed in the search box opens its page.' },
      { type: 'content', text: 'New lesson in Foundations, "How kanji work": meanings, on and kun readings, okurigana, and how to learn kanji inside words.' },
      { type: 'update', text: 'Lessons can be filtered by level, and the app remembers the level you chose.' },
      { type: 'content', text: 'The kanji readings, meanings and example words are a draft for review by a native Japanese speaker. JLPT levels for kanji are approximate, because there is no official list.' }
    ]
  },
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
