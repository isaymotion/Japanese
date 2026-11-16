/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Listening questions on first-visit MSE and discharge practice cases (0.20.0): keys mse-<case id>, dis-<case id>; same item shape as listen-questions.js. Loads after listen-questions-2.js. */
window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, {
  'mse-ocd': [
    ["How long has Takumi felt that there are germs on his hands?", ["About six months", "About one year", "About two years", "About five years"], 2, "Takumi says that for about two years he has felt there are germs on his hands."],
    ["What does Takumi do as soon as he gets home?", ["Lies down for a rest", "Changes all his clothes", "Washes the dishes", "Cleans the kitchen"], 1, "Takumi says that as soon as he gets home he changes all his clothes."],
    ["What does Takumi's wife often tell him?", ["That his showers are long", "That he works too late", "That he looks tired", "That he should rest more"], 0, "Takumi says his wife often tells him his showers are long."],
    ["What number does Takumi give for his mood?", ["Three", "Four", "Five", "Six"], 2, "Takumi says about five, because he felt a little relieved to hear it is an illness."],
    ["What does Takumi keep asking his wife every day?", ["\"Did you lock the door?\"", "\"Are you tired?\"", "\"Did you wash your hands?\"", "\"Is it all right?\""], 3, "Takumi says he asks her \"Is it all right?\" over and over every day, so she must be tired too."]
  ],
  'mse-ptsd': [
    ["How badly were Mariko and her son hurt in the accident?", ["Nobody was hurt at all", "Both had only minor injuries and have recovered", "Her son broke his arm", "She was in hospital for a month"], 1, "Mariko says they both had only minor injuries and have recovered."],
    ["What hit Mariko's car from behind?", ["A bus", "A motorbike", "A taxi", "A truck"], 3, "Mariko says a truck hit them from behind while she was driving on the expressway."],
    ["Who suggested that Mariko come to the hospital?", ["Her mother", "Her son's teacher", "Her family doctor", "A friend from work"], 2, "Mariko says her family doctor suggested it and she came by herself."],
    ["What does Mariko say she does and then regrets?", ["She raises her voice at Hiroto", "She stops talking to Hiroto", "She leaves the house", "She cancels plans with friends"], 0, "Mariko says she raises her voice at Hiroto and regrets it afterwards."],
    ["Who does Mariko say she wants to get better for?", ["Her work", "Hiroto", "Her mother", "Her family doctor"], 1, "Mariko says she wants to get better for Hiroto."]
  ],
  'mse-panic': [
    ["How long did tonight's attack take to settle?", ["About half a day", "Less than an hour", "About two hours", "It went on until morning"], 1, "Daiki says it settled within the hour."],
    ["What happened to Daiki's hands during the attack?", ["They went numb", "They went cold", "They shook", "They started to hurt"], 0, "Daiki says his hands went numb."],
    ["Who lives with Daiki?", ["His mother", "A roommate", "His girlfriend", "No one; he lives alone"], 3, "Daiki says he lives alone, so there is no one to tell him how he moves."],
    ["Where does Daiki's mother live?", ["Tokyo", "Kyoto", "Osaka", "Fukuoka"], 2, "Daiki says his mother is in Osaka."],
    ["What does Daiki think is part of the cause?", ["Problems with his family", "Moving to a new home", "Skipping meals", "A run of deadlines and being tired"], 3, "Daiki says the run of deadlines and being tired is part of it."]
  ],
  'mse-hinata': [
    ["When does Hinata feel the worst?", ["On weekend evenings", "On school mornings", "After lunch", "Late at night"], 1, "Hinata says school mornings are the worst."],
    ["What happened when Hinata gave her presentation in class?", ["She cried in front of the class", "She forgot to bring her notes", "Her mind went blank and she could not say anything", "She felt sick and went home"], 2, "Hinata says her mind went blank and she couldn't say anything."],
    ["What does Hinata say she sometimes thinks?", ["That she wants to die", "That someone is following her", "That she is sick", "That she wants to disappear"], 3, "Hinata says it is not that she wants to die, but sometimes she thinks she wants to disappear."],
    ["What does Hinata do instead of getting angry?", ["She goes quiet", "She shouts", "She cries", "She slams the door"], 0, "Hinata says that instead of getting angry, she just goes quiet."]
  ],
  'dis-panic': [
    ["What number does Daiki give for his mood now?", ["Three or four", "Four or five", "Five or six", "Seven or eight"], 2, "Daiki says five or six now; when he talked with the doctor earlier it was about four."],
    ["What will Daiki do first if a usual attack comes again?", ["Call 119 straight away", "Breathe slowly and wait for it to pass", "Phone the outpatient clinic", "Take a taxi home"], 1, "Daiki says that if another attack comes he will start by breathing slowly and wait for the wave to pass; 119 is only for chest pain that is different from usual or feeling faint."],
    ["What did Daiki have in the morning?", ["Rice and miso soup", "Toast and eggs", "Nothing at all", "Only coffee"], 3, "Daiki says he had just coffee in the morning, as always."],
    ["What is Daiki's main problem with sleep?", ["Waking up too early", "Nightmares", "Getting to sleep", "Waking up many times"], 2, "Daiki says he wakes up now and then, but the bigger problem is getting to sleep."],
    ["How will Daiki's mother hear about tonight?", ["He will phone her himself", "The doctor will phone her now", "She is coming to the hospital", "He will tell her when he visits Osaka"], 0, "Daiki says he will phone his mother and tell her himself."]
  ]
});
