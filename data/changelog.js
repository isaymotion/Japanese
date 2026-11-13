/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO: YYYY-MM-DD. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
  {
    version: '0.17.0', date: '2026-11-14', title: 'Vocabulary quiz, listening practice, numbers and counters',
    items: [
      { type: 'feature', text: 'Vocabulary quiz (Practice, and Drills in the menu): choose any deck (a JLPT level, a topic, the clinical vocabulary or My mistakes) and a mode: Meaning (Japanese to English), Recall (English to Japanese) or Reading (the word in kanji without furigana; choose its reading in kana). 10 or 20 questions, best score per mode; misses go to My mistakes.' },
      { type: 'feature', text: 'Topic matching: 14 sets (body parts, physical symptoms, feelings, pain and sensation words such as ズキズキ and チクチク, sleep, the hospital, medicine words, family, time, food, the house, places in town, everyday verbs, describing words). Tap a sound, then its meaning; Show words makes it easier.' },
      { type: 'content', text: 'Example sentences: 802 dictionary words (all N5 words and the most useful N4 words) now have an example sentence with its English, on the word page and on the back of the word\'s flashcard. About a third are set in a clinic or on a ward.' },
      { type: 'feature', text: 'Listening practice (new page): Hear (a word or one of about 1,900 recorded sentences by level: choose the meaning, at slower, natural or fast speed); Dictation (hear a word and build it from kana tiles, or type it in kana or romaji); Sound pairs (104 pairs: long vowels, small っ, ん, small ゃゅょ and voicing, such as 病院 and 美容院); Dialogues and readings (hear a whole dialogue or reading, then answer three questions; 120 questions on all 16 dialogues and 24 readings, linked from each dialogue and reading page).' },
      { type: 'feature', text: 'Numbers and counters (new page): 21 tables (numbers, hundreds and thousands, times, dates, months, lengths of time, weekdays, ages, people, things, and the counters 本, 錠, 回, 杯, 階, 枚, 匹, 時間) with every sound change marked and spoken; a Read and Listen quiz; and In the clinic, 40 sentences from patients and nurses where you catch the number (how many times she wakes at night, since the 14th, two tablets after meals).' },
      { type: 'update', text: 'About 990 new lines (example sentences, sound pairs, numbers) are recorded in the same voice as the rest of the app.' }
    ]
  },
  {
    version: '0.16.0', date: '2026-11-13', title: 'Nurse view and a complete set of practice patients',
    items: [
      { type: 'feature', text: 'Nurse view: Psychiatry → Interview now has a Resident / Nurse switch (shared with the substance use and withdrawal tools). The Nurse view shows six new nurse sections — arriving on the ward, giving medicines and checking side effects, sleep, appetite and hygiene, safety checks for suicide risk and agitation, calming things down on the ward, and teaching patients and families — then the resident sections nurses use most. 125 phrases and 60 likely replies; pending Nursing Service review.' },
      { type: 'content', text: 'Case simulation: Chiyoko Ito with her son and daughter-in-law (dementia with a delusion of theft and night wandering; compare Shigeru\'s delirium). Eight simulations in all.' },
      { type: 'content', text: 'Admission MSE practice: Daisuke Sato on the evening of admission, and Shigeru Yamada with delirium on the medical ward. Discharge practice: Shigeru Yamada on day 8, delirium resolved. Every practice patient now has a full set.' },
      { type: 'content', text: 'Interpretation drill: 16 more patient and family lines (48 in all). 30 more patient replies on the point board and in the listening drill.' },
      { type: 'correction', text: 'Daisuke\'s simulation summary now records the footsteps and his name being called, to match his admission and discharge cases.' }
    ]
  },
  {
    version: '0.15.1', date: '2026-11-13', title: 'Yumiko, Tetsuo and Shigeru made consistent',
    items: [
      { type: 'correction', text: 'Yumiko (case simulation, admission and discharge practice): two details left over from the Spanish app this one was built from are gone. Her brother\'s hunting rifle was the main means to restrict; now it is medicines: her sister keeps and gives Yumiko\'s medicines, and her brother has cleared the medicines out of the family home. Her faith is now her family\'s temple and visits to her mother\'s grave, the priest who visited her is the priest of the family temple, and her guilt is the idea that this is a punishment (罰《ばち》) for being a bad mother, not God\'s.' },
      { type: 'correction', text: 'Tetsuo\'s discharge practice: his own account and the adverse-event note now agree with the rest of his story: after about two days without a drink he was shaking and sweating, his daughter took him to the emergency department, and the seizure happened there (not a fall at the work site).' },
      { type: 'correction', text: 'Shigeru Yamada is 78 everywhere: the nursing notes reading said 82.' },
      { type: 'correction', text: 'Yumiko\'s discharge practice: her sleep is now keyed as frequent awakenings (she wakes at 3 a.m.), not difficulty falling asleep. The crisis line no longer has to "offer help in Japanese"; it is the local line.' }
    ]
  },
  {
    version: '0.15.0', date: '2026-11-13', title: 'Six admission cases, seven discharge cases, stroke order on word cards, more trainer words',
    items: [
      { type: 'content', text: 'Admission MSE practice: three new cases (six in all). Yumiko on the day of her admission, a week after an overdose, with ongoing suicidal thoughts she cannot promise not to act on (level N4); Tetsuo on day 1 of alcohol withdrawal, shaky and low, with a brief illusion he corrects himself and a passive wish not to wake up (level N3); and a new patient, Chiyoko Ito, 79, a retired teacher with Alzheimer\'s disease who believes her daughter-in-law steals her purse and has been leaving the house at night (level N3). Chiyoko\'s case teaches ruling out delirium first and interviewing the family alongside the patient.' },
      { type: 'content', text: 'Discharge practice: two new cases (seven in all). Daisuke Sato ten days after the emergency visit in his case simulation: paranoia gone with abstinence, craving down, a plan built around his trigger (night shifts), and an honest answer when he asks who will be told. Chiyoko Ito after three and a half weeks: calmer nights, a low-dose medicine to be reviewed and stopped, day care, a door sensor, and help for her daughter-in-law as a carer.' },
      { type: 'feature', text: 'Flashcards: the back of every vocabulary card now has a Stroke order button for each kanji in the word (for example 合 and 鍵 in 合鍵). Each opens the same diagram as the kanji page; tap it again to close.' },
      { type: 'content', text: 'Dictionary: 120 new words (3,557 in all), 76 verbs and 44 adjectives such as to throw away, to pick up, to wipe, to pack, to visit someone in hospital, to stay with a patient, to ease, to comfort, to look back on; sleepy, queasy, awkward, guilty, listless, oversensitive, forward-looking.' },
      { type: 'content', text: 'Verb and adjective trainer: 60 more verbs (404 in all) and 43 more adjectives (253 in all), all taken from the new dictionary words, each with example sentences. Words whose "let\'s" or "please" form would sound odd or unkind to a patient (to withdraw from people, to agonise, to endure, to scold, to give in to it) were kept in the dictionary but not added to the trainer.' },
      { type: 'correction', text: 'Admission MSE practice: the chief-complaint step said to ask a family member even in cases where the patient is the one asked. It now says whom to ask.' },
      { type: 'update', text: 'The new lines are recorded for the voice pack automatically after this update.' }
    ]
  },
  {
    version: '0.14.0', date: '2026-11-13', title: 'Stroke order in lessons, drills and cards; Japanese headings; Ayaka on admission; more trainer words',
    items: [
      { type: 'feature', text: 'Stroke order in more places. The hiragana and katakana lessons now end with a "How to write them" card: tap any kana to hear it and see its stroke order. In the kanji drill a Stroke order button appears after each answer, and kanji flashcards have the same button on the back of the card. Each opens the same diagram as the kanji page, with a link to a writing practice sheet.' },
      { type: 'feature', text: 'Menu language: when the menu is set to Japanese, page headings, the section headings on Home, Practice and Settings, and the titles on the tiles are now in Japanese with furigana too, each with its English underneath. Explanations and lesson text stay in English. 34 new labels.' },
      { type: 'content', text: 'Admission MSE practice: a third case, Ayaka Nakamura on the evening of her admission (over-the-counter medicine misuse, level N3). She is frightened, tearful and restless, denies any wish to die, and is not ready to talk about a past event; the case teaches asking about suicide directly even when an overdose is described as unintentional, and not pressing about the event. No product names or doses appear. The same patient is in the case simulations and the discharge practice.' },
      { type: 'content', text: 'Verb and adjective trainer: 44 more verbs (344 in all) and 30 more adjectives (210 in all), each with example sentences. Thirty of the new verbs are everyday words (to quit, to pass an exam, to climb, to fly, to stop, to hand over, to try, to check, to turn down); fourteen are for the interview and the ward (to hope for, to grieve, to plan, to rest, to avoid, to snack, to give up alcohol). The adjectives include light (sleep), worn out, vague, specific, careful and sudden.' },
      { type: 'correction', text: 'Admission MSE practice: four help lines under the domains still mentioned Spanish from the app this one was built from. They now describe Japanese-speaking patients.' },
      { type: 'update', text: 'The new words and the new case are recorded for the voice pack automatically after this update.' }
    ]
  },
  {
    version: '0.13.0', date: '2026-11-13', title: 'Japanese menu, more trainer words, a fifth discharge case',
    items: [
      { type: 'feature', text: 'Menu language: in Settings (and on About) the app\'s own menu can now be shown in Japanese. The menu, the tabs at the bottom, the footer, the theme and text-size controls and the backup messages are in Japanese with furigana, and each menu item shows its English meaning underneath. Lessons and tools are unchanged. The Japanese labels are a draft.' },
      { type: 'content', text: 'Verb and adjective trainer: 100 more verbs (300 in all) and 60 more adjectives (180 in all), each with example sentences. Fifty of the new verbs are everyday N5 and N4 words (to choose, to compare, to move, to order, to introduce); fifty are ward and clinic words (to confirm, to take medicine, to rest, to return to work, to take a temperature, to interpret). About half of the new adjectives are for feelings and clinical descriptions.' },
      { type: 'content', text: 'Discharge practice: a fifth case, Ayaka Nakamura, 20, over-the-counter medicine misuse. She goes home with no medicines, her mother keeps the household medicines locked away, and she has an outpatient appointment in three days. No product names or doses appear.' },
      { type: 'update', text: 'The new words and the new case are recorded for the voice pack automatically after this update.' }
    ]
  },
  {
    version: '0.12.2', date: '2026-11-13', title: 'Some verb forms hidden',
    items: [
      { type: 'update', text: 'Verb trainer and dictionary: a few verbs no longer show, drill or speak the forms that would sound like encouragement to harm. For to die (shinu), the let\'s, please, make-or-let and can forms are hidden; for to hurt (kizutsukeru) the let\'s, please and make-or-let forms; for to vomit (haku) and to gamble (kakeru) the let\'s forms. Their other forms stay, including shinitai (I want to die), which a patient may say and a clinician must recognise.' }
    ]
  },
  {
    version: '0.12.1', date: '2026-11-13', title: 'Menu scrolling fixed; a Psychiatry tab',
    items: [
      { type: 'correction', text: 'The menu that opens from More now scrolls on phones and tablets. Before, it was taller than the screen and could not be scrolled, so everything below the Learn group (the drills, the psychiatry pages, the clinical tools, Settings) could not be reached from it.' },
      { type: 'update', text: 'Psychiatry has its own tab at the bottom of the screen, in place of Cards. Flashcards are still under Practice and in the menu.' },
      { type: 'update', text: 'On the Home page, the Psychiatry section is now near the top, right after Today, and starts with a link to the whole psychiatry track.' }
    ]
  },
  {
    version: '0.12.0', date: '2026-11-13', title: 'Writing practice sheets, and twice as many trainer words',
    items: [
      { type: 'feature', text: 'Writing practice sheet (Learn menu): print a sheet to practise writing by hand. Choose hiragana or katakana rows, kanji groups from any level, or type your own characters. Each character has a numbered model, a small picture for every stroke, grey characters to trace and empty squares. You choose the square size, the number of rows, how many characters to trace, and A4 or Letter paper. Use Print or save as PDF.' },
      { type: 'feature', text: 'Every kanji page and the stroke-order panel on the kana chart now link to a writing practice sheet for that character.' },
      { type: 'content', text: 'Verb and adjective trainer: 100 more verbs (200 in all) and 60 more adjectives (120 in all), each with its full table of forms and example sentences. Half of the new words are clinical: feelings, symptoms, medicines, treatment and ward routines. Some are N3 or from the clinical set.' },
      { type: 'feature', text: 'The trainer has a level filter (N5, N4, N3, clinical set) for both the word list and the drill.' },
      { type: 'update', text: 'The new words and sentences are drafts for review, like the rest of the Japanese. Their recorded voice clips are added automatically after this update; until then the device voice reads them.' }
    ]
  },
  {
    version: '0.11.0', date: '2026-11-13', title: 'N3 dialogues and N3 placement questions',
    items: [
      { type: 'content', text: 'Six N3 dialogues on the Speaking page, each with Listen, Shadow and Role-play: handover to the night nurse, explaining to a patient\'s mother, a patient who wants to stop her medicine, presenting a patient at the morning conference, a friend who is not sleeping (casual speech), and a phone call about a late appointment. There are now 16 dialogues.' },
      { type: 'feature', text: 'The Speaking page has a level filter (All, Starter, N5, N4, N3), like Lessons and Reading.' },
      { type: 'content', text: 'The placement test now goes up to N3: five new questions (25 in all). If you pass the N4 questions it sends you to the first N3 unit, Time and sequence; if you pass N3 as well, to the psychiatry track.' },
      { type: 'update', text: 'The new dialogue lines are drafts for review, like the rest of the Japanese. Their recorded voice clips are added automatically a few minutes after this update; until then the device voice reads them.' }
    ]
  },
  {
    version: '0.10.1', date: '2026-11-13', title: 'Recorded voice pack complete',
    items: [
      { type: 'correction', text: 'The recorded voice pack is complete: all 10,118 clips are installed. Its real size is about 210 MB, not the 150 MB estimated in the notes for 0.9.0; Save all audio for offline use downloads that much.' }
    ]
  },
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
      { type: 'feature', text: 'Settings → Voice shows whether the recorded voice is installed, lets you switch between Recorded Japanese voice and Device voice, and has Save all audio for offline use (about 210 MB). Without saving, each clip is kept after the first time you play it.' },
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
