/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Listening questions on dialogues and readings (0.17.0). window.LISTEN_Q = { '<dialogue or reading id>': [[question, [options], answerIndex, why], …] }.
   Questions and options are English; the learner hears the whole dialogue or reading first. Used by #/listen?tab=story. */
window.LISTEN_Q = {
  /* ---------- dialogues ---------- */
  'hajimemashite': [
    ["Where does the new doctor come from?", ["Japan", "The Philippines", "Singapore", "Spain"], 1, "The doctor says, \"I came from the Philippines.\""],
    ["Which department is the new doctor in?", ["Internal medicine", "Surgery", "Psychiatry", "Pediatrics"], 2, "The doctor answers \"Psychiatry\" when asked about the department."],
    ["What does the new doctor say about studying Japanese?", ["They study only on weekends", "They have just started this week", "They find it too hard to continue", "They study every day"], 3, "The doctor says, \"I study every day.\""]
  ],
  'uketsuke': [
    ["What does the patient say at the start?", ["It is their first visit", "They have lost their insurance card", "They want to change an appointment", "They want to pick up medicine"], 0, "The patient says, \"This is my first visit.\""],
    ["What does the receptionist ask the patient to write on the form?", ["Name and age", "Address and phone number", "Job and insurance number", "Symptoms and sleep habits"], 1, "The receptionist says, \"Please write your address and phone number on this form.\""],
    ["How long will the patient wait?", ["About five minutes", "About ten minutes", "About twenty minutes", "About thirty minutes"], 2, "The receptionist says, \"About twenty minutes.\""]
  ],
  'michi': [
    ["What is the person looking for?", ["A bank", "A pharmacy", "A station", "A hospital"], 1, "The person asks, \"Is there a pharmacy near here?\""],
    ["Where should the person turn?", ["Right at the first traffic light", "Left at the second traffic light", "Right at the second traffic light", "Left at the bank"], 2, "The passer-by says, \"Turn right at the second traffic light.\""],
    ["How far is it?", ["About five minutes on foot", "About ten minutes on foot", "About five minutes by bus", "About fifteen minutes by car"], 0, "The passer-by says, \"It's about five minutes on foot.\""]
  ],
  'kaimono': [
    ["What colour is the umbrella the customer asks about?", ["Black", "Red", "Yellow", "Blue"], 3, "The customer asks, \"How much is this blue umbrella?\""],
    ["What is the total the customer has to pay?", ["800 yen", "920 yen", "1,000 yen", "1,120 yen"], 1, "The clerk says, \"That's 920 yen altogether.\""],
    ["How does the customer pay?", ["With cash", "With a coupon", "With a card", "With a phone"], 2, "The customer asks, \"Is a card all right?\" and the clerk says it is fine."]
  ],
  'resutoran': [
    ["How many people are in the group?", ["One", "Two", "Three", "Four"], 1, "The customer answers \"Two\" when asked how many people."],
    ["What does the server say is popular?", ["The tempura set meal", "The sushi plate", "The ramen", "The curry rice"], 0, "The server says, \"The tempura set meal is popular.\""],
    ["How much is the bill?", ["2,300 yen", "3,000 yen", "3,200 yen", "3,600 yen"], 2, "The server says, \"That's 3,200 yen.\""]
  ],
  'meet-patient': [
    ["Who came to the hospital with the patient?", ["Her sister", "Her husband", "Her daughter", "Her mother"], 1, "The patient says, \"I came with my husband.\""],
    ["What does the doctor ask permission to do?", ["Record the conversation", "Take a photo", "Call her Ms. Kato", "Visit her at home"], 2, "The doctor asks, \"May I call you Ms. Kato?\""],
    ["What will the doctor do first?", ["Speak with the husband first", "Speak with both of them together", "Give a physical exam", "Speak with the patient alone"], 3, "The doctor says, \"First I'll talk with you alone, and later I'll also hear from your husband.\""]
  ],
  'suimin': [
    ["Around what time does the patient go to bed?", ["Nine", "Ten", "Eleven", "Midnight"], 2, "The patient says, \"Around eleven.\""],
    ["How long can the patient not fall asleep?", ["About an hour", "About ten minutes", "About thirty minutes", "About two hours"], 0, "The patient says, \"I can't fall asleep for about an hour.\""],
    ["How often does the patient wake up at night?", ["Never", "Two or three times", "Five or six times", "Only once"], 1, "The patient says, \"I wake up two or three times.\""]
  ],
  'shokuyoku-kibun': [
    ["How many meals a day is the patient eating?", ["Three", "One or two", "Four", "None"], 1, "The patient says, \"One or two. I can only eat a little.\""],
    ["How much weight has the patient lost?", ["About one kilo in two months", "About five kilos in two months", "About three kilos in two months", "About three kilos in six months"], 2, "The patient says, \"I've lost about three kilos in two months.\""],
    ["What does the patient say about listening to favourite music?", ["It cheers them up", "It helps them sleep", "It is too loud now", "It is no longer enjoyable"], 3, "The patient says, \"Even when I listen to music I like, it isn't enjoyable.\""]
  ],
  'kusuri-kakunin': [
    ["How often does the patient forget the medicine?", ["Every morning", "About once a week, the evening dose", "About once a month, the morning dose", "Never"], 1, "The patient says, \"About once a week I forget the evening dose.\""],
    ["Which problems does the patient mention since starting the medicine?", ["A little sleepy in the morning and a dry mouth", "A headache and an upset stomach", "A rash and a fever", "Trembling hands and restlessness"], 0, "The patient says, \"I'm a little sleepy in the morning. Also, my mouth gets dry.\" The patient denies trembling and restlessness."],
    ["What does the doctor suggest?", ["Take the evening medicine with a glass of milk", "Take the evening medicine after a bath", "Take the evening medicine when brushing teeth", "Take all the medicine at breakfast"], 2, "The doctor suggests taking the evening medicine when brushing teeth."]
  ],
  'yoyaku': [
    ["Why can't the caller have the appointment on Wednesday?", ["The clinic is closed", "The doctor is away", "Wednesday is full", "It is a public holiday"], 2, "The receptionist says, \"Wednesday is full.\""],
    ["Which times are free on Thursday afternoon?", ["Two o'clock and four o'clock", "One o'clock and three o'clock", "Three o'clock and five o'clock", "Two o'clock and five o'clock"], 0, "The receptionist says, \"We have two o'clock and four o'clock.\""],
    ["Which appointment is confirmed?", ["Next Wednesday at two", "Next Thursday at four", "Next Thursday at two", "Next Friday at four"], 1, "The receptionist says, \"We will expect you next Thursday at four.\""]
  ],
  'moshiokuri': [
    ["When does the patient tend to become restless?", ["In the morning", "Around noon", "In the evening", "After lunch"], 2, "The doctor says his delirium gets worse in the evening, and today he was restless from around five."],
    ["What has been done because of his fall risk?", ["He was moved to a different room", "The bed was lowered and a sensor mat was put down", "His daughter was asked to stay overnight", "The clock was taken away"], 1, "The doctor says, \"I've lowered the bed. A sensor mat is in place too.\""],
    ["When should the night nurse call the doctor?", ["Every hour on the hour", "Only after the morning round", "Only if his daughter asks", "If he is very agitated and unsafe, or has a fever"], 3, "The doctor says to call if he is very agitated and unsafe, or if he gets a fever, even in the middle of the night."]
  ],
  'kazoku-setsumei': [
    ["What does the mother ask the doctor about?", ["Whether her son is eating", "Whether the way she raised him caused his illness", "Whether he will lose his job", "Whether visits will tire him"], 1, "She asks, \"Is it because of the way I raised him that he ended up like this?\""],
    ["What does the doctor say about the cause of the illness?", ["Upbringing alone causes it", "A single infection causes it", "Several causes come together", "Nobody knows anything about it"], 2, "The doctor says this illness is thought to arise from several causes coming together, not from upbringing alone."],
    ["What does the doctor say is a great support for her son?", ["Staying away so he can rest", "Her visits", "Phoning him every night", "Bringing his favourite food"], 1, "The doctor says, \"Your visits are a great support.\""]
  ],
  'fukuyaku-soudan': [
    ["What does the patient want to do?", ["Stop the medicine", "Change her doctor", "Take a month off work", "Come less often"], 0, "She says, \"I'd like to stop the medicine now.\""],
    ["Which two reasons does she give?", ["Headaches and nausea", "The cost and the long waits", "Sleepiness in the day and weight gain", "Dry mouth and shaking hands"], 2, "She says she gets sleepy during the day, and that she has been gaining weight since she started."],
    ["What does the doctor advise?", ["Stop right away since she feels better", "Think it through together rather than deciding alone", "Keep it secret from her family", "Switch to another hospital"], 1, "The doctor says, \"Rather than deciding on your own, let's think it through together.\""]
  ],
  'kanfarensu': [
    ["Why was the patient brought in?", ["A fall at home", "Chest pain", "His drinking", "Losing his job"], 2, "The resident says he was brought in by his daughter because of his drinking."],
    ["What happened on the second day?", ["A fever and a cough", "Tremor of the hands and sweating", "He fainted", "He refused to speak"], 1, "The resident says, \"On the second day he had tremor of the hands and sweating.\""],
    ["What does the resident plan about his high liver values?", ["Send him home", "Do nothing yet", "Ask the family to decide", "Consult internal medicine"], 3, "The resident says, \"I plan to consult internal medicine as well.\""]
  ],
  'tomodachi-soudan': [
    ["Why does Kenta say he can't sleep?", ["Noise at night", "He keeps thinking about work", "He drinks coffee late", "He has a new baby"], 1, "He says, \"Even when I get into bed, I end up thinking about work and can't sleep.\""],
    ["Since when has it been like this?", ["About one week", "About two weeks", "About six months", "About two months"], 3, "He says it started with the new project, about two months ago."],
    ["What does Kenta decide at the end?", ["To quit his job", "To ask his boss for a month off", "To try going to a hospital this Saturday", "To wait and see"], 2, "He says, \"I'll try going this Saturday.\""]
  ],
  'okure-denwa': [
    ["Why will the caller be late?", ["Her train has stopped", "She overslept", "She cannot find the clinic", "She is feeling too unwell"], 0, "She says, \"My train has stopped.\""],
    ["What new appointment time does the clinic offer?", ["Ten thirty", "Eleven", "Eleven thirty", "Noon"], 2, "The receptionist says, \"The doctor says you can be seen today from eleven thirty.\""],
    ["What does the receptionist ask her to do if she is even later?", ["Come back the next day", "Contact the clinic again", "Pay an extra fee", "Go to a different clinic"], 1, "The receptionist says, \"If you are going to be even later, could you contact us again?\""]
  ],
  /* ---------- readings ---------- */
  'jikoshoukai': [
    ["Where does the writer work?", ["At a school in Osaka", "At a hospital in Tokyo", "At a shop in Kyoto", "At an office in Manila"], 1, "The writer says, \"I work at a hospital in Tokyo.\""],
    ["Which foods does the writer love?", ["Ramen and sushi", "Curry and pizza", "Tempura and udon", "Pasta and salad"], 0, "The writer says, \"I love ramen and sushi.\""],
    ["What does the writer say about their Japanese?", ["They have never studied it", "It is perfect", "They practise only on weekends", "It is still poor, but they study every day"], 3, "The writer says, \"My Japanese is still poor, but I study every day.\""]
  ],
  'kazoku': [
    ["How many people are in the writer's family?", ["Three", "Four", "Five", "Six"], 2, "The text says there are five people in the family."],
    ["What is the writer's younger sister?", ["A teacher", "An engineer", "An office worker", "A graduate student"], 3, "The text says, \"My younger sister is twenty-four. She is a graduate student.\""],
    ["How does the writer keep in touch with the family?", ["They talk on the phone every week", "They write letters every month", "They meet every month", "They send emails every day"], 0, "The writer says, \"We talk on the phone every week.\""]
  ],
  'ichinichi': [
    ["What does the nurse do in the morning at work?", ["She measures the patients' blood pressure", "She cooks the patients' meals", "She cleans the ward", "She writes reports"], 0, "The text says, \"In the morning she measures the patients' blood pressure.\""],
    ["How does she get to the hospital?", ["By bus, about thirty minutes", "By bicycle, about ten minutes", "By train, about an hour", "By train, about thirty minutes"], 3, "The text says she goes by train and it takes about thirty minutes."],
    ["What time does she get up?", ["Five", "Six", "Seven", "Eight"], 1, "The text says she gets up at six every morning."]
  ],
  'machi': [
    ["What is in front of the station?", ["A park", "A supermarket", "A big hospital", "A bank"], 2, "The text says, \"In front of the station there is a big hospital.\""],
    ["What is next to the hospital?", ["A pharmacy", "A bank", "A school", "A café"], 0, "The text says, \"Next to the hospital there is a pharmacy.\""],
    ["Where is the park?", ["In front of the station", "Behind the hospital", "To the left of the station", "Next to the supermarket"], 1, "The text says, \"Behind the hospital there is a park.\""]
  ],
  'kusuri': [
    ["How often should the white medicine be taken?", ["Once a day, in the morning", "Three times a day", "Only when in pain", "Twice a day, in the morning and at night"], 3, "The speaker says, \"Please take this white medicine twice a day, in the morning and at night.\""],
    ["What should not be taken together with the medicine?", ["Tea", "Milk", "Alcohol", "Juice"], 2, "The speaker says, \"Please do not take it with alcohol.\""],
    ["What may happen in the first week?", ["You may feel a little sleepy", "You may feel very hungry", "Your skin may feel itchy all week", "You may feel very thirsty"], 0, "The speaker says, \"In the first week you may feel a little sleepy.\""]
  ],
  'nemurenai': [
    ["Around what time does the writer fall asleep?", ["Midnight", "Around one", "Around two", "Around four"], 2, "The writer goes to bed at eleven but cannot fall asleep until about two."],
    ["What time does the writer wake up in the morning, after which he cannot get back to sleep?", ["Around two", "Around four", "Around six", "Around seven"], 1, "The writer says, \"In the morning I wake up at around four.\""],
    ["Why did the writer come to the hospital today?", ["His wife was very worried", "His boss told him to", "He lost his job", "He had a fall"], 0, "The writer says, \"My wife is very worried. So I came to the hospital today.\""]
  ],
  'shinsatsu': [
    ["How did the writer feel before going?", ["Excited", "Angry", "Very nervous", "Bored"], 2, "The writer says, \"Before I went, I was very nervous.\""],
    ["How long did the writer wait?", ["About thirty minutes", "About ten minutes", "About an hour", "They did not wait"], 0, "The text says, \"I waited about thirty minutes.\""],
    ["What did the doctor say when the writer could not speak well at first?", ["Please come back tomorrow", "There is no need to hurry", "Please fill in the form again", "Please speak louder"], 1, "The doctor said, \"There is no need to hurry.\""]
  ],
  'haha-no-shinpai': [
    ["How old is the writer's son?", ["Twenty-two", "Twenty-five", "Thirty-two", "Twenty-eight"], 3, "The text says, \"My son is twenty-eight.\""],
    ["What happened about three months ago?", ["He moved out", "He stopped going to work", "He changed jobs", "He got married"], 1, "The text says he stopped going to work about three months ago."],
    ["What does the mother hear at night?", ["His voice, as if he were talking with someone", "Loud music", "Crying", "A door slamming"], 0, "She hears her son's voice from his room, though nobody else is there."]
  ],
  'tegami': [
    ["Where did the writer move?", ["Tokyo", "Kyoto", "Osaka", "Nara"], 2, "The writer says, \"Last month I moved to Osaka.\""],
    ["What did the writer do on the weekend?", ["Walked around the town and ate okonomiyaki", "Visited Yuki", "Went hiking", "Stayed in bed"], 0, "The writer says they walked around the town and ate okonomiyaki."],
    ["How does the writer feel about making friends?", ["She already has many friends", "She wants to move back", "She finds the people in Osaka unfriendly", "Not many yet, but she thinks she will gradually get used to it"], 3, "The writer says, \"I still don't have many friends, but I think I will gradually get used to it.\""]
  ],
  'kisetsu': [
    ["Why do some people feel nervous in spring?", ["New school years and new jobs begin", "There is too much rain", "The days are short", "It is too hot"], 0, "The text says spring is when new school years and new jobs begin, so some people feel nervous."],
    ["What is said about June?", ["It snows", "It is very cold", "It is very dry", "There is a lot of rain"], 3, "The text says, \"June has a lot of rain.\""],
    ["Why do some people feel down in winter?", ["The nights are hot", "There is too much rain", "They get little sunlight", "The cherry blossoms are late"], 2, "The text says that because people get little sunlight, some people feel down."]
  ],
  'konbini': [
    ["About how long has the writer been in Japan?", ["About a week", "Soon one month", "About six months", "About a year"], 1, "The writer says, \"It will soon be a month since I came to Japan.\""],
    ["What helped the writer in the first weeks?", ["The convenience store in front of the hospital", "A neighbour", "The hospital cafeteria", "A language school"], 0, "The writer says what helped was the convenience store in front of the hospital."],
    ["What did the clerk say last week?", ["That the writer should rest", "That the store was closing", "That the writer had a parcel", "That the writer's Japanese had got better"], 3, "The clerk said, \"Your Japanese has got better.\""]
  ],
  'byouin-no-annai': [
    ["When is it suggested to arrive?", ["Five minutes after the appointment time", "Thirty minutes before", "About ten minutes before", "One hour before"], 2, "The text says it is reassuring to arrive about ten minutes before the appointment time."],
    ["What can you do about things that are hard to write on the questionnaire?", ["Tell the doctor directly", "Ask the receptionist to write them", "Take the form home", "Come on another day"], 0, "The text says things that are hard to write down may be told to the doctor directly."],
    ["What does the text say about family members in the consultation room?", ["They must wait outside", "They are not allowed in the building", "Only children may bring family", "You can come in together with a family member"], 3, "The text says, \"You can also come in together with a family member.\""]
  ],
  'kazoku-no-nikki': [
    ["What did the doctor say on October 3?", ["Nothing is wrong", "She needs surgery", "It is depression, and she will get better little by little with treatment", "She should rest for a year"], 2, "The doctor said, \"It is depression. With treatment, you will get better little by little.\""],
    ["What did the sister say on her own on November 2?", ["She would like to go for a walk", "She would like some tea", "She wants to go back to work", "She would like to see a friend"], 1, "The text says she said on her own, \"I would like some tea.\""],
    ["What did the two of them do on December 8?", ["Went shopping", "Visited the doctor", "Cooked together", "Took a walk in a nearby park"], 3, "The text says, \"The two of us took a walk in the park nearby.\""]
  ],
  'tsuukin': [
    ["How long is the writer's commute?", ["About thirty minutes", "More than an hour", "About two hours", "About ten minutes"], 1, "The writer says they spend more than an hour commuting by train."],
    ["What did the colleague suggest?", ["Taking the bus", "Moving closer to the office", "Trying an earlier train", "Working from home"], 2, "The colleague said, \"Why not try an earlier train?\""],
    ["How are the writer's weekends now?", ["They are enjoying cooking again", "They spend them in bed", "They work on weekends", "They travel every week"], 0, "The writer says that on weekends they are enjoying cooking again."]
  ],
  'shokuba-no-nayami': [
    ["Why did the writer's workload suddenly increase?", ["A colleague left the company", "The writer asked for more work", "The company opened a new branch", "The writer was moved to a different department"], 3, "The writer says that since being moved to a different department last spring, the workload suddenly increased."],
    ["How much weight did the writer lose?", ["One kilogram", "Three kilograms", "Five kilograms", "Ten kilograms"], 1, "The writer says, \"I lost three kilograms.\""],
    ["How did the writer feel after going to the clinic?", ["Sure that everything would be solved at once", "Angry at the colleague", "Lighter, knowing they did not have to put up with it alone", "Afraid to go back to work"], 2, "The text says that realizing they did not have to put up with it alone made the writer feel lighter."]
  ],
  'furusato': [
    ["What was the writer's hometown known as?", ["A fishing town", "A hot spring town", "A farming town", "A castle town"], 0, "The text says, \"In those days the town was known as a fishing town.\""],
    ["How long ago did the writer leave to go to university?", ["Five years", "Ten years", "Twenty years", "Forty years"], 2, "The writer says, \"It has already been twenty years since I left the town to go to university.\""],
    ["What happened to the writer's elementary school?", ["It became a café", "It moved to the city", "It is still open as before", "It closed and is now a place for local people to gather"], 3, "The text says the school closed and is now used as a place where local people gather."]
  ],
  'suimin-no-hanashi': [
    ["What is the first important thing mentioned for good sleep?", ["Getting up at the same time every morning", "Sleeping late on days off", "Taking a nap every afternoon", "Going to bed at eight"], 0, "The text says, \"The first important thing is to get up at the same time every morning.\""],
    ["What does the text say alcohol before bed does?", ["It helps you sleep all night", "It has no effect on sleep", "It makes you sleepy but more likely to wake in the night", "It gives you more energy"], 2, "The text says alcohol makes you sleepy, but makes you more likely to wake up in the middle of the night."],
    ["What is suggested if you still cannot sleep after a while?", ["Try harder to force yourself to sleep", "Do some hard exercise", "Look at your phone", "Get out of bed for a while and spend quiet time in a dimly lit room"], 3, "The text says to get out of bed once and spend some quiet time in a dimly lit room."]
  ],
  'hajimete-no-nyuuin': [
    ["How old is the writer?", ["Seventeen", "Twenty-three", "Twenty-six", "Nineteen"], 3, "The writer says, \"I am nineteen.\""],
    ["What did the nurse do for the writer?", ["Left him completely alone", "Spoke to him every day and waited quietly for his answer", "Made him join group activities at once", "Called his family every day"], 1, "The text says the nurse spoke to him every day, never made him talk, and waited quietly until he answered."],
    ["What made the writer laugh out loud for the first time since admission?", ["Another patient inviting him to join in occupational therapy", "A call from his mother", "A show on TV", "A joke from the doctor"], 0, "The text says another patient invited him, saying \"Come on, let's do it together,\" and he laughed out loud."]
  ],
  'haha-no-tegami': [
    ["What worries the mother about her son's discharge?", ["The cost", "He will be alone during the day while she works", "He will not want to leave", "There will be no bed for him at home"], 1, "She says she works on weekdays, so her son will be alone during the day."],
    ["What did her son tell her last week?", ["He wanted to go home at once", "He was tired of the ward food", "Having the nurse listen to him made him feel a bit better", "He would like a different doctor"], 2, "She quotes him: \"Having the nurse listen to me made me feel a bit better.\""],
    ["What does she ask to talk about at the next meeting?", ["Hospital fees", "Changing wards", "Visiting hours", "Outpatient visits after discharge and going back to university"], 3, "She asks to discuss his outpatient visits after discharge and when he might go back to university."]
  ],
  'osake-to-watashi': [
    ["Why did the days of drinking alone increase?", ["He moved house", "He was given a position with heavy responsibility at work", "He got divorced", "His friends stopped visiting"], 1, "The writer says that after he was given a position with heavy responsibility at his company, the days he drank alone increased."],
    ["What did his daughter say when she first let him hold her baby?", ["Come and live with us", "Please phone me every day", "She wanted her child to meet a dad who isn't drinking", "She was moving far away"], 2, "She said quietly, \"I want this child to meet a dad who isn't drinking.\""],
    ["How long did it take him to make up his mind to call the hospital?", ["One day", "Three days", "One month", "One week"], 3, "The writer says, \"It took me a week to make up my mind to make the call.\""]
  ],
  'taiin-no-junbi': [
    ["What does the text say to do on the day of your appointment if you feel well?", ["Be sure to come anyway", "Cancel because you feel well", "Come only if the symptoms return", "Send a family member instead"], 0, "The text says, \"Even if you feel well, be sure to come on the day of your appointment.\""],
    ["What may happen if you stop or cut down your medicine on your own because you feel better?", ["Nothing will change", "The symptoms may come back", "The doctor will be told automatically", "The pharmacy will call you"], 1, "The text says the symptoms may come back."],
    ["When does the text say not to hesitate to call 119?", ["If an appointment date is inconvenient", "If a medicine is running low", "If someone suddenly becomes very unwell and a life may be at risk", "If you cannot sleep for one night"], 2, "The text says to call 119 if someone suddenly becomes very unwell and a life may be at risk."]
  ],
  'tomodachi-no-message': [
    ["What has Ayaka not managed to do this week?", ["Go to any of her classes", "Reply to messages", "Go out to buy food", "Visit her mum"], 0, "Ayaka says, \"I haven't made it to a single class this week.\""],
    ["What does Yui suggest?", ["Taking a week off from university", "Going to the university counselling room together", "Telling Ayaka's mum", "Asking the teacher for more time"], 1, "Yui says students can talk to someone at the counselling room and asks, \"Want to try going together?\""],
    ["Where will Yui wait for Ayaka tomorrow?", ["In front of the library", "At the station", "At the classroom door", "In front of the cafeteria at lunchtime"], 3, "Yui says, \"I'll wait for you in front of the cafeteria at lunchtime tomorrow.\""]
  ],
  'kango-kiroku': [
    ["What did the patient say when he woke at 2:00?", ["He was hungry", "He had to go home", "He wanted the doctor", "He wanted his glasses"], 1, "The notes say he woke at 2:00 and said, \"I have to go home.\""],
    ["What did his daughter bring to the ward?", ["The glasses and clock he used at home", "A newspaper and a radio", "Photos and a blanket", "Food from home"], 0, "The notes say she brought the glasses and clock he used at home."],
    ["From about what time did he become restless in the evening?", ["15:00", "17:00", "21:00", "19:00"], 3, "The notes say, \"From about 19:00 became restless.\""]
  ],
  'byoutou-no-oshirase': [
    ["What are the weekday visiting hours?", ["10 a.m. to 7 p.m.", "2 p.m. to 7 p.m.", "2 p.m. to 9 p.m.", "Noon to 6 p.m."], 1, "The notice says visiting hours are from 2 p.m. to 7 p.m. on weekdays."],
    ["Where do visitors write their name on the visitor form?", ["At the front gate", "At the cashier", "At the nurses' station", "In the day room"], 2, "The notice says to write your name on the visitor form at the nurses' station."],
    ["What should you do if you bring food or drink?", ["Share it with other patients", "Hand it to the cleaner", "Leave it at reception", "Always tell a nurse"], 3, "The notice says, \"If you bring food or drink, always tell a nurse.\""]
  ]
};
