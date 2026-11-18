/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Listening questions on the N1 readings and dialogues (0.29.0): keys = reading ids of reading-6.js and reading-7.js, dialogue ids of dialogues-4.js; same item shape as listen-questions-4.js: [question, [4 options], correct index (0-based), why]. English only. Loads after listen-questions-6.js. */
window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, {
  /* ---------- readings (reading-6.js) ---------- */
  'shourei-houkoku': [
    ["Who came with the man to his first visit to the department?", ["His wife", "His eldest daughter", "His internist", "A long-time friend"], 1, "The report says his worried eldest daughter accompanied him on his first visit."],
    ["What did the man keep saying at his first visit to the department?", ["There must be something wrong somewhere", "I want to stop treatment", "I will be fine soon", "It's just my age"], 3, "The report says that at the first visit he kept saying it was just his age."],
    ["How often does he now come to the outpatient clinic?", ["Once a week", "Every two weeks", "Once a month", "Every three months"], 2, "The report says he has kept coming to the outpatient clinic once a month."]
  ],
  'setsumei-doui-bunsho': [
    ["About how long does it take to fill in the questionnaire?", ["About five minutes", "About fifteen minutes", "About ten minutes", "About thirty minutes"], 2, "The form says filling it in takes about ten minutes."],
    ["What does the questionnaire ask about?", ["Sleep times, night waking, daytime sleepiness, ward noise or lights", "Appetite, weight, meals and snacks on the ward", "Mood, worries, family and friendships", "Pain, tiredness, medicine and side effects"], 0, "The form lists the times of going to bed and getting up, waking at night, daytime sleepiness, and noise or lights that bother the patient."],
    ["Where are the answer sheets kept?", ["With the patient's medical record", "At the nurses' station, where staff can read them", "At the patient's bedside until discharge", "In a locked place, apart from the consent form"], 3, "The form says the sheets are kept in a locked place and managed separately from the consent form."]
  ],
  'iryou-anzen-dayori': [
    ["What did the patient grab to avoid falling?", ["The nurse call button", "The bedside table", "The curtain", "The bed rail"], 3, "The article says the patient grabbed the bed rail on the spot and only just managed not to fall."],
    ["How did the night nurse find out that something was wrong?", ["The patient pressed the call button", "The nurse heard the bed rail rattle", "Another patient called out", "The doctor on duty told the nurse"], 1, "The article says the night nurse heard the rail rattle and came at once."],
    ["Where is the nurse call button placed now?", ["By the pillow", "At the foot of the bed", "On the wall by the door", "At the end of the bed rail"], 0, "The article says the call button is now placed by the pillow, within reach even while lying down."]
  ],
  'kaifuku-no-shuki': [
    ["At what age did the writer retire?", ["Sixty", "Fifty-five", "Sixty-five", "Seventy"], 0, "The writer says that after retiring at sixty she had all the time in the world."],
    ["What did the doctor say about not being able to read?", ["It was a sign of ageing", "She should read a little every day", "It was not laziness, and her mind needed rest", "It would pass in a few weeks"], 2, "The doctor said not being able to read was not laziness and that her mind needed rest."],
    ["What does the writer do once a week now?", ["She works again at the city library", "She volunteers on a hospital ward", "She teaches adults to read", "She reads picture books to children"], 3, "The writer says that once a week she reads picture books aloud to children at the neighbourhood library."]
  ],
  /* ---------- readings (reading-7.js) ---------- */
  'shasetsu-kodoku': [
    ["What does the writer notice when walking through the housing estate at dusk?", ["More children playing outside", "More dark windows each year", "Fewer shops staying open", "More new families moving in"], 1, "The editorial says the windows with no light in them grow in number year by year."],
    ["What does the man who worked as a carpenter do at the meeting hall?", ["He teaches children woodwork", "He leads the tea gathering", "He brings homemade pickles", "He repairs the shelves"], 3, "The editorial says the former carpenter repairs the shelves in the meeting hall."],
    ["According to the writer, what can nothing replace?", ["A programme run by local government", "A professional's regular visit", "A neighbour's 'good morning'", "A large reform"], 2, "The editorial says that nothing can replace a neighbour's 'good morning', however well the arrangements are made."]
  ],
  'shikiten-no-aisatsu': [
    ["How did the hospital begin fifty years ago?", ["As a small clinic on the edge of town", "As a ward of a university hospital", "As a home-visit service", "As a clinic in the town centre"], 0, "The director says the hospital began as a small clinic on the edge of town."],
    ["Which group does the director thank for welcoming discharged patients as members of their workforce?", ["The volunteers", "The partner organisations", "The shopkeepers", "The nurses"], 2, "The director thanks the shopkeepers who welcomed people discharged from the wards as members of their workforce."],
    ["How does the director describe the change over the fifty years?", ["From outpatient care to mainly inpatient care", "From curing in hospital to supporting life in the community", "From care by doctors to care led by volunteers", "From a small local clinic to a national centre"], 1, "The director says the fifty years have been a journey from care that cures inside the hospital to care that supports living together in the community."]
  ],
  'zuihitsu-hatsushimo': [
    ["What was Mrs. Noguchi doing in her garden?", ["Pulling up daikon", "Watering the flowers", "Sweeping the frost from the path", "Covering the plants with straw frost covers"], 3, "The essay says she was putting straw frost covers over the plants one at a time."],
    ["What did Mrs. Noguchi give the writer as they parted?", ["A bunch of flowers", "A freshly pulled daikon", "A Chinese cabbage", "A cloth for the head"], 1, "The essay says she gave the writer a daikon freshly pulled from the field."],
    ["What had happened to the frost on the road by the time the writer got home?", ["It had vanished without a trace", "It had turned to snow", "It was thicker than before", "It had melted only in the garden"], 0, "The essay says the sun was high and the frost on the road had vanished without a trace."]
  ],
  'kenshuu-ichinen': [
    ["Which three things does the writer say the year taught?", ["Grammar, speed and dialect", "Keigo, handovers and night duty", "Words, silence and asking for help", "Patience, humility and hard work"], 2, "The writer names the weight of words, silence, and asking for help."],
    ["What example of a careless remark does the writer give?", ["Please keep trying hard", "I don't understand you", "It's just your age", "Please say it again"], 0, "The writer says that 'Please keep trying hard' can corner someone who has been trying hard all along."],
    ["What did a nurse say that helped the writer?", ["Doctor, please call the senior doctor tonight", "Doctor, that patient would like a longer interview", "Doctor, the handover has moved to the morning", "Doctor, that patient's expression looks tense this morning"], 3, "The writer says a nurse's single remark that a patient's expression looked tense this morning has saved the writer many times."]
  ],
  /* ---------- dialogues (dialogues-4.js) ---------- */
  'gakkai-shitsugi': [
    ["According to Dr. Santos, what was decisive in reaching the diagnosis of depression?", ["The results of repeated tests", "The referral letter from the internist", "Listening carefully to what the patient himself said", "The family's description"], 2, "Dr. Santos says it was listening carefully to what the patient himself told them."],
    ["How was physical illness ruled out?", ["New tests done after he came to the department", "Earlier tests, the internist's among them, found nothing", "His family's account of his health", "A second opinion from another hospital"], 1, "Dr. Santos says the tests done until then, including those at the referring internist, had found no abnormality that could account for his symptoms."],
    ["What does Dr. Santos name as a task for the future?", ["Asking older patients with bodily complaints early about mood and life changes", "Doing fewer tests on older patients who complain of bodily problems", "Teaching families to encourage older patients more firmly", "Sending older patients with bodily complaints straight to psychiatry"], 0, "Dr. Santos says that asking such older people early about their mood and life changes will be the task for the future."]
  ],
  'kujou-taiou': [
    ["What did Ms. Fukuda find when she came to visit?", ["Her mother was asleep and could not be woken", "Her mother's belongings had been left in the corridor", "Her mother was gone, and no one had explained why", "Her mother had been sent home without notice"], 2, "Ms. Fukuda says her mother's room had been changed without any explanation, and her mother was not there."],
    ["What does Ms. Fukuda say she most wants?", ["To know why the room was changed", "A written apology", "Her mother moved back that day", "A different doctor"], 0, "She says it is not so much an apology she wants as to know why the room was changed."],
    ["Until what time can Ms. Fukuda wait?", ["Three o'clock", "Four o'clock", "Five o'clock", "Six o'clock"], 1, "She says she can wait until four, and no later."]
  ],
  'nenpai-no-kanja': [
    ["About how long ago did Mr. Miura's wife die?", ["About two months", "About three months", "About a year", "About half a year"], 3, "Mr. Miura says it is about half a year now since his wife went before him."],
    ["What has Mr. Miura not done for a long time because he has no energy?", ["Gardening", "Calligraphy", "Reading", "Walking"], 1, "He says that because he has no energy he has not done the calligraphy he loves for a long time."],
    ["When does Dr. Santos ask Mr. Miura to come again?", ["In one week", "In ten days", "In two weeks", "In a month"], 2, "Dr. Santos asks him to come again in two weeks and tell how things are, including his sleep."]
  ],
  'tashokushu-kaigi': [
    ["What does the social worker propose for the patient's support after discharge?", ["Combining a day service with home visits", "Home visits only", "A longer stay on the ward", "Moving in with the family"], 0, "The social worker proposes combining a day service with home visits, based on the ward's assessment."],
    ["How does the patient feel about people coming to the house?", ["Pleased about it", "Worried about the cost", "Angry about it", "A little awkward"], 3, "Dr. Santos reports that the patient feels a little awkward about people coming to the house."],
    ["What does Dr. Santos suggest would help the patient feel safer about going home?", ["A weekly phone call from the family", "An overnight stay at home before discharge", "A longer stay on the ward", "Moving to the family's home"], 1, "Dr. Santos suggests the patient would feel safer if there were one overnight stay at home before discharge."]
  ],
  'buchou-ni-houkoku': [
    ["Where was Dr. Santos taking the patient?", ["To the ward lounge", "To the outpatient clinic", "To the interview room", "To the X-ray room"], 2, "Dr. Santos says they were taking the patient to the interview room."],
    ["What caused the near fall?", ["The patient tripped on a step at their feet", "A wet floor", "The patient felt dizzy", "The patient's slipper came off"], 0, "Dr. Santos says that as they turned the corner of the corridor, the patient tripped on a step."],
    ["What did Dr. Santos do straight afterwards?", ["Called the facilities staff to the corridor", "Walked the patient straight back to the ward", "Sent the department head a report by email", "Sat the patient down and checked them with a ward nurse"], 3, "Dr. Santos had the patient sit down on a chair at once and checked their condition together with a ward nurse."]
  ],
  'soubetsukai-no-aisatsu': [
    ["Why is Dr. Santos giving a speech?", ["The ward is marking an anniversary", "Ms. Shimizu is moving to a new workplace", "Dr. Santos is leaving the ward", "A new nurse has joined the ward"], 1, "Dr. Santos thanks Ms. Shimizu as she moves on to a new workplace."],
    ["What did Ms. Shimizu do when Dr. Santos could not keep up with the handover?", ["Wrote the handover out for Dr. Santos", "Asked a senior nurse to take over", "Said it again slowly without looking annoyed", "Skipped the difficult parts"], 2, "Dr. Santos says that she never looked annoyed and said it again slowly."],
    ["What does Dr. Santos joke that Ms. Shimizu never told them?", ["Where the nurses' station hides its snacks", "Which ward serves the best lunch", "Where the staff keep the spare keys", "Why the ward clock is always fast"], 0, "Dr. Santos jokes that she never did tell them where the nurses' station hides its snacks."]
  ]
});
