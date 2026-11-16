/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Listening questions on the N2 readings and dialogues (0.22.0): keys = reading ids of reading-4.js and reading-5.js, dialogue ids of dialogues-3.js; same item shape as listen-questions.js. Loads after listen-questions-3.js. */
window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, {
  /* ---------- readings (reading-4.js) ---------- */
  'nyuuin-no-goannai': [
    ["What are the daily visiting hours?", ["From 1 p.m. to 6 p.m.", "From 2 p.m. to 7 p.m.", "From 2 p.m. to 8 p.m.", "From 3 p.m. to 7 p.m."], 1, "The notice says visiting hours are from 2 p.m. to 7 p.m. every day."],
    ["How many people may visit a patient at one time?", ["One", "Three", "Four", "Two"], 3, "The notice says visits are limited to two people at a time per patient."],
    ["What does the notice say about the shop on the first floor?", ["It is closed for renovation", "It closes at 7 p.m.", "It sells toiletries", "It is open only on weekdays"], 0, "The notice says the shop on the first floor is currently closed for renovation."]
  ],
  'shoukaijou': [
    ["Why has Mrs. Hasegawa gone to the clinic for many years?", ["Diabetes", "Poor sleep", "High blood pressure", "Back pain"], 2, "The letter says she has attended the clinic for many years for high blood pressure, which has been stable."],
    ["What happened last autumn?", ["She retired from work", "She lost her husband to an illness", "Her daughter moved away", "She had an operation"], 1, "The letter says that last autumn she lost her husband of many years to an illness, and low mood and poor sleep followed."],
    ["Who plans to come with her to the appointment?", ["Her daughter, who lives nearby", "Her son", "Her sister", "A clinic nurse"], 0, "The letter says her daughter, who lives nearby, plans to come with her."]
  ],
  'kanfarensu-no-kiroku': [
    ["When did Mrs. Ito's symptoms tend to get worse before admission?", ["Early in the morning", "Around lunchtime", "After meals", "From late afternoon into the night"], 3, "The record says her symptoms tended to worsen from late afternoon into the night."],
    ["How many days a week will she use day care after discharge?", ["Two", "Three", "Four", "Five"], 1, "The plan says she will use day care three days a week."],
    ["What were the family told to do about the missing purse?", ["Explain firmly that no one took it", "Hide all her money", "Not argue, but look for it with her", "Call the police"], 2, "The family agreed not to argue about the purse but to look for it with her, and to keep a spare purse."]
  ],
  'kazokukai-dayori': [
    ["How did Mrs. Fujita feel when her son's illness was first found?", ["She blamed herself", "She blamed the doctors", "She felt relieved", "She did not believe it"], 0, "She writes that when they first learned of the illness, she did nothing but blame herself."],
    ["How did she come to join the family group?", ["A friend from work invited her", "She saw a poster at the station", "Her son asked her to go", "His doctor suggested it"], 3, "She writes that she joined the family group at the suggestion of her son's doctor."],
    ["What does she do now once a week?", ["Goes swimming", "Goes for a walk with a friend", "Goes to a cooking class", "Writes for the newsletter"], 1, "She writes that she now makes a point of going for a walk with a friend once a week."]
  ],
  /* ---------- readings (reading-5.js) ---------- */
  'kenshuu-hantoshi': [
    ["How long has the writer been in psychiatry training in Japan?", ["Exactly one year", "Three months", "Exactly six months", "Two years"], 2, "The writer says that today makes exactly six months since starting psychiatry training."],
    ["What did the senior doctor say patients want?", ["Perfect Japanese", "Someone who listens to them to the end", "Short consultations", "Clear written questions"], 1, "The senior doctor said that what patients want is not correct grammar so much as someone who listens to them to the end."],
    ["What did a quiet patient say just before discharge?", ["That the doctor did not rush, so was easy to talk to", "That the doctor spoke too slowly", "That the doctor's Japanese was perfect", "That the doctor asked too many questions"], 0, "The patient said, 'You don't rush, doctor, so you were easy to talk to.'"]
  ],
  'nemuri-to-sumaho': [
    ["Where does the writer now charge the smartphone?", ["In the bedroom", "In the kitchen", "At work", "In the living room"], 3, "The writer says the smartphone stays out of the bedroom and is charged in the living room."],
    ["What does the writer now use as an alarm?", ["The smartphone", "An old clock", "The radio", "A family member"], 1, "The writer says an old clock is now used for the alarm."],
    ["What does the writer say is the real problem?", ["The smartphone itself", "Reading paper books", "The way we live with the tool", "Working late"], 2, "The writer says the problem lies not so much in the tool itself as in the way we live with it."]
  ],
  'shoutengai-no-matsuri': [
    ["When was the summer festival held?", ["The first Saturday of August", "The last Sunday of July", "The first Sunday of August", "The middle of August"], 0, "The article says the festival was held on the first Saturday of August."],
    ["What kind of shop has Mr. Ono run for nearly sixty years?", ["A noodle shop", "A Japanese sweet shop", "A clothes shop", "A bookshop"], 1, "The article says Mr. Ono has run a Japanese sweet shop on the street for nearly sixty years."],
    ["Who helped change the festival's fortunes?", ["A large shopping centre", "The city office", "Students from a nearby university", "A television company"], 2, "The article says students from a nearby university changed the tide, and about thirty of them helped this year."]
  ],
  'orei-no-tegami': [
    ["Why had Mori stopped work when first coming to the clinic?", ["Because of an injury", "To look after a family member", "Because of a change of job", "Because of depression"], 3, "Mori writes that the first visit was shortly after stopping work because of depression."],
    ["What did Dr. Santos tell Mori at that time?", ["That resting is part of the treatment too", "That Mori should go back to work quickly", "That Mori should exercise every day", "That Mori should write a diary"], 0, "Mori recalls the doctor saying, 'Right now, resting is part of the treatment too.'"],
    ["By this autumn, how long has Mori been back at work?", ["Six months", "Exactly one year", "Two years", "Three months"], 1, "Mori writes that this autumn marks exactly one year since going back to the workplace."]
  ],
  /* ---------- dialogues (dialogues-3.js) ---------- */
  'shoukai-denwa': [
    ["Why is Dr. Santos phoning Dr. Kondo?", ["To refer a new patient to him", "To ask for test results", "To change an appointment", "About Mrs. Hasegawa, whom he referred"], 3, "Dr. Santos says he is calling about Mrs. Hasegawa, whom Dr. Kondo referred the other day."],
    ["What does Dr. Kondo say about alcohol?", ["She drinks every night", "She has stopped drinking recently", "He was told she hardly drinks", "He has never asked"], 2, "Dr. Kondo says he was told she hardly drinks."],
    ["What does Dr. Santos say will happen once Mrs. Hasegawa has settled?", ["She will be sent back to Dr. Kondo's care", "She will be admitted", "She will stop all treatment", "She will see a new specialist"], 0, "Dr. Santos says that once she has settled, he would like to send her back to Dr. Kondo's care."]
  ],
  'nyuuin-no-susume': [
    ["What is Mrs. Ishii's main worry about her husband?", ["He sleeps all day", "He hardly eats at home", "He drinks too much", "He shouts at her"], 1, "Mrs. Ishii says he hardly eats at home and she cannot stop worrying."],
    ["What does her husband often say?", ["\"I want to go to work\"", "\"I can't sleep\"", "\"Leave me alone\"", "\"I'm nothing but a burden\""], 3, "She says he doesn't say it outright, but he often says, 'I'm nothing but a burden.'"],
    ["What does Mrs. Ishii ask for at the end?", ["A bed in a single room", "More time to think at home", "To be beside her husband when it is explained to him", "To talk to another doctor"], 2, "She asks, 'When you explain it to him, please let me be there beside him.'"]
  ],
  'shourei-kentoukai': [
    ["What led to Mr. Ishii's admission?", ["He had become almost unable to eat", "He had stopped sleeping", "He had a fall", "He had left home at night"], 0, "The presenting doctor says the admission came because he had become almost unable to eat."],
    ["How long has he been in hospital?", ["One week", "Two weeks", "One month", "Three days"], 1, "The presenting doctor says two weeks have passed since admission."],
    ["What do they plan to try before discharge?", ["An early return to full-time work", "Moving him to another ward", "A trip abroad", "Overnight leave in stages"], 3, "The presenting doctor says that after hearing his wife's views, they plan to try overnight leave in stages."]
  ],
  'menkai-no-onegai': [
    ["Why can't Mr. Ogawa see his sister tonight?", ["She is asleep already", "Visiting hours are already over", "She does not want visitors", "He forgot to book"], 1, "Dr. Santos says that today's visiting hours are already over."],
    ["What has Mr. Ogawa brought for his sister?", ["A change of clothes", "Some fruit", "A book", "Her mobile phone"], 0, "Mr. Ogawa says he brought her a change of clothes and asks if they can be given to her."],
    ["What does Dr. Santos say he can arrange if Mr. Ogawa books ahead?", ["A visit on a weekday evening", "A phone call with his sister", "A meeting with the doctor, even late in the evening", "An overnight stay at home"], 2, "Dr. Santos says that for a meeting with him only, if booked ahead, he can arrange it even late in the evening."]
  ],
  'senpai-ni-soudan': [
    ["What happened in the resident's interview?", ["The patient walked out", "The patient was late", "The patient refused to talk", "The patient suddenly started crying"], 3, "The resident says the patient suddenly started crying, and the resident ended up talking too much."],
    ["What does Dr. Nishimura suggest doing while the patient is crying?", ["Ask many questions", "Hand a tissue and wait a little", "End the interview early", "Call a nurse"], 1, "Dr. Nishimura agrees that handing her a tissue and waiting a little is enough."],
    ["According to Dr. Nishimura, what matters more than the words in aizuchi?", ["Nodding and tone of voice", "Speaking quickly", "Taking notes", "Using polite forms"], 0, "Dr. Nishimura says nodding and your tone of voice matter more than the words."]
  ],
  'fukushoku-no-soudan': [
    ["What does Mr. Mori's boss tell him?", ["To come back next week", "To work longer hours", "Not to rush", "To change departments"], 2, "Mr. Mori says his boss tells him not to rush."],
    ["How does the doctor suggest he return to work?", ["Start with short hours and increase little by little", "Go straight back to his old workload", "Work from home only", "Wait another six months"], 0, "The doctor says it is best to start with short hours and increase them little by little according to how he feels."],
    ["What should he do if his warning signs go on for a few days?", ["Take a holiday", "Tell his boss", "Stop working at once", "Contact the clinic without waiting for his appointment"], 3, "The doctor says that if those signs go on for a few days, he should contact them without waiting for his appointment."]
  ]
});
