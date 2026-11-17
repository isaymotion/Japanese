/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Listening questions on the eight older discharge cases (keys dis-<case id>) and the four end-of-treatment cases (keys eot-<case id>) (0.25.0). Loads after listen-questions-5.js. Shape: PLAN-0.25 section A (write/briefs-0.25/PLAN-0.25.md on dev-tools). Ids are permanent: append only after release. */
window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, {
  'dis-shota': [
    ["What does Shota want to do after a few days of rest at home?", ["Look for a job in a new town", "Talk with his boss about going back to the warehouse", "Go back to school full-time", "Visit his grandparents for a month"], 1, "Shota says he wants to rest a few days at home and then talk with his boss to see if he can go back to the warehouse, even part-time."],
    ["What does Shota say he likes doing on the ward?", ["Cards and basketball", "Shogi and reading", "Painting and singing", "Football and video games"], 0, "Shota says yes, he likes cards and basketball."],
    ["What did Shota have for breakfast?", ["Toast and coffee", "Bread and milk", "Nothing at all", "Rice, miso soup and a rolled omelette"], 3, "Shota says he had rice, miso soup and a rolled omelette."],
    ["When does Shota fall asleep and get up now?", ["Around midnight, up at eight", "Around nine, up at five", "Around ten, up at six", "Around eleven, up at seven"], 2, "Shota says he sleeps well: he falls asleep around ten and gets up at six."],
    ["What will Shota's mother, Mrs. Takahashi, watch for?", ["Him talking fast and spending money", "Him not sleeping and shutting himself in", "Him not eating and losing weight", "Him getting angry with the neighbours"], 1, "His mother says that when he started to get sick he wasn't sleeping and he shut himself in, so that is what she will watch for."]
  ],
  'dis-yumiko': [
    ["Whom does Yumiko say she wants to see?", ["Her children", "Her husband", "Her parents", "Her friends from school"], 0, "Yumiko says she feels a little better and wants to see her children."],
    ["Where will Yumiko stay after she leaves?", ["At her own home, alone", "With a friend from work", "With her sister for a few weeks", "With her parents in the country"], 2, "Yumiko says she is going to stay with her sister for a few weeks."],
    ["What did Yumiko like on the ward?", ["The cooking group", "The music group", "The morning exercises", "The painting class"], 3, "Yumiko says she enjoys things a little now: she liked the painting class, whereas before nothing was fun."],
    ["What happens to Yumiko at three in the morning?", ["She has nightmares", "She wakes up and starts thinking", "She gets hungry", "A nurse wakes her for checks"], 1, "Yumiko says she wakes up at three in the morning and starts thinking, and then she doesn't sleep well."],
    ["When is Yumiko's clinic appointment, and who takes her?", ["Tomorrow; she goes alone", "In two weeks; a friend", "In five days; her sister", "In a month; her husband"], 2, "Yumiko says the appointment is in five days and her sister takes her."]
  ],
  'dis-ren': [
    ["Why does Ren want to leave today?", ["He has a job interview", "He has a show on Saturday", "His family is waiting at home", "He has to move house"], 1, "Ren says he is ready to get out because he has a show on Saturday and can't miss it."],
    ["What does Ren plan to do in about two months?", ["Open his own studio", "Go on a tour abroad", "Buy a new car", "Start a radio programme"], 0, "Ren says that in about two months he wants to open his own studio; he already has the name and is looking into a loan."],
    ["What happens when Ren wakes at four in the morning?", ["He feels anxious and sweaty", "He goes for a run", "He eats a snack and sleeps again", "He has a thousand ideas and can't get back to sleep"], 3, "Ren says he wakes up at four with a thousand ideas and can't go back to sleep."],
    ["What side effects does Ren mention?", ["Headache and nausea", "Weight gain and sleepiness", "Shaky hands and feeling very thirsty", "A stiff neck and dizziness"], 2, "Ren says his hands shake a little, which bothers him when he plays music, and that sometimes he feels very thirsty."],
    ["What is Misaki, his girlfriend, afraid of?", ["That he will lose his job", "That he will stop his medicine and go back to those friends", "That he will move away", "That he will be in a car accident"], 1, "Misaki says she thinks he isn't well yet, and she is afraid he will stop his medicine and go back to those friends."]
  ],
  'dis-tetsuo': [
    ["How does Tetsuo say he is today?", ["He is tired and has no appetite", "He has headaches every day", "He no longer shakes and he eats well", "He sleeps most of the day"], 2, "Tetsuo says he is much better: he doesn't shake anymore and he eats well."],
    ["Where will Tetsuo go for the first few days?", ["To his daughter's", "To his own apartment", "To his brother's house", "To a friend's place"], 0, "Tetsuo says he is going to his daughter's for a few days, then to the clinic and the meetings."],
    ["What does Tetsuo enjoy on the ward?", ["Painting and music", "The group and shogi", "Walking and reading", "Television and cards"], 1, "Tetsuo says he likes the group and shogi."],
    ["Where was Tetsuo born?", ["In Aomori", "In Fukushima", "In Niigata", "In Akita, near Yokote"], 3, "Tetsuo says he was born in Akita, in the countryside near Yokote."],
    ["When is Tetsuo's first appointment?", ["Tuesday at ten", "Monday at nine", "Thursday at two", "Wednesday at eleven"], 1, "Tetsuo says it is Monday at nine, and Haruka takes him."]
  ],
  'dis-ayaka': [
    ["Whom does Ayaka want to see soon?", ["Her father and her sister", "Her friends from university", "Her mother and her brother", "Her grandmother"], 2, "Ayaka says she has calmed down and wants to see her mother and her brother soon."],
    ["What is Ayaka's plan for this weekend?", ["Stay at home with her mother and brother", "Go to the cinema with a friend", "Study at the library", "Visit a friend in another city"], 0, "Ayaka says she will stay home with her mother and her brother this weekend, go to the outpatient clinic on Monday, and then go back to university and her job little by little."],
    ["Which group did Ayaka like on the ward?", ["The singing group", "The cooking class", "The exercise group", "The crafts group"], 3, "Ayaka says she liked the crafts group."],
    ["How often does Ayaka wake from a nightmare?", ["Every night", "Twice a week", "Once a month", "Almost never"], 1, "Ayaka says that twice a week she wakes from a nightmare and has trouble going back to sleep."],
    ["When is Ayaka's outpatient appointment, and who goes with her?", ["Tomorrow at two; a friend", "In two weeks; she goes alone", "Next Thursday; her father", "Monday at ten; her mother"], 3, "Ayaka says it is in three days, Monday at ten, and her mother is coming with her."]
  ],
  'dis-daisuke': [
    ["What does Daisuke feel bad about?", ["Missing work", "Frightening people at the bus stop", "Arguing with his sister", "Being rude to the nurses"], 1, "Daisuke says he is happy, but he feels bad about frightening people at the bus stop."],
    ["What will Daisuke ask his company?", ["To take a month off", "To work from home", "To switch to day shifts", "To give him a pay rise"], 2, "Daisuke says he is going to ask his company if he can switch to day shifts."],
    ["What did Daisuke have for breakfast?", ["Bread and milk", "Rice and miso soup", "Toast and coffee", "Nothing yet"], 0, "Daisuke says he had bread and milk."],
    ["How long does Daisuke sleep now?", ["About five hours", "About six hours", "About nine hours", "About seven hours"], 3, "Daisuke says he sleeps about seven hours, and it has been a long time since he slept properly at night."],
    ["What will his sister Tomoko do in the first week?", ["Have him stay at her house", "Go by his apartment every day to see how he is", "Phone him every evening", "Visit him at weekends"], 1, "Tomoko says that for the first week she will go by her brother's apartment every day to see how he is."]
  ],
  'dis-chiyoko': [
    ["What has Chiyoko enjoyed on the ward?", ["Reading the paper and walking", "Painting and crafts", "Morning exercises and afternoon singing", "Cards and shogi"], 2, "Chiyoko says it has been fun: exercises in the morning and singing in the afternoon."],
    ["What does Chiyoko say she will do at home?", ["Have tea with Megumi and take it easy", "Cook dinner for the family", "Work in the garden", "Go shopping with Hiroshi"], 0, "Chiyoko says she will have tea with Megumi and take it easy."],
    ["Where was Chiyoko born?", ["In Akita", "In Hokkaido", "In Okinawa", "In Niigata, a place with lots of snow"], 3, "Chiyoko says she was born in Niigata, a place with lots of snow."],
    ["What does her son Hiroshi say makes things a little easier?", ["Knowing the medicine will cure it", "Knowing she doesn't mean it", "Having a holiday soon", "Having a bigger house"], 1, "Hiroshi says his mother calling Megumi a thief is part of the illness, and knowing she doesn't mean it makes it a little easier."],
    ["According to Megumi, what have they put on the front door?", ["A second lock", "A camera", "A sensor", "A bell"], 2, "Megumi says they have put a sensor on the front door, and a card with her name and their contact in her bag."]
  ],
  'dis-shigeru': [
    ["Where will Shigeru stay after he leaves, and for how long?", ["At home alone, from today", "At Keiko's for two weeks", "At a care home for a month", "At his son's for a month"], 1, "Shigeru says he will stay at Keiko's for two weeks."],
    ["What does Shigeru enjoy in the day room?", ["Reading the paper", "Watching television", "Playing shogi", "Doing puzzles"], 0, "Shigeru says there are not many activities, but he enjoys reading the paper in the day room."],
    ["Why does Shigeru wake at night?", ["Because of nightmares", "Because of noise on the ward", "Because he feels hungry", "Once, to go to the toilet"], 3, "Shigeru says he wakes just once, for the toilet, and goes straight back to sleep."],
    ["What does his daughter Keiko say she had been afraid of?", ["That he had had a stroke", "That he had hurt his head", "That he had got dementia", "That he was depressed"], 2, "Keiko says she thought he had got dementia, and she was really frightened."],
    ["How will Shigeru get to the local clinic next week?", ["By bus", "Keiko will drive him", "By taxi", "A neighbour will take him"], 1, "Keiko says the visit is in one week at the local clinic, for his blood pressure and a urine test, and she will drive him."]
  ],
  'eot-ocd': [
    ["How many sessions did Takumi come to?", ["Ten", "Twelve", "All sixteen", "Twenty"], 2, "Takumi says he was able to come to all sixteen and didn't miss a single one."],
    ["What was really scary for Takumi the first time?", ["Holding a strap on the train", "Touching a door handle and not washing", "Using a public toilet", "Shaking hands with a coworker"], 1, "Takumi says the first time he touched a door handle and didn't wash, he was really scared."],
    ["What can Takumi do in the morning now?", ["Look at the gas and the lock once and leave", "Leave without looking at anything", "Check everything three times", "Take a photo of the lock"], 0, "Takumi says that in the morning, once he has looked at the gas and the lock one time, he can just leave the house."],
    ["What have Takumi and his wife started doing again?", ["Going to the cinema", "Travelling at weekends", "Going to the gym", "Eating out"], 3, "Takumi says he and his wife have started eating out again; before, the dishes at restaurants bothered him."],
    ["Who knows Takumi's warning signs and will help him?", ["His mother", "His boss", "His wife", "A friend from work"], 2, "Takumi says his wife knows the signs too, and if he starts asking again she will kindly say no."]
  ],
  'eot-ptsd': [
    ["What does Mariko still do when a sound makes her jump?", ["Hold her breath and count to ten", "Put her feet flat on the floor and count three things she can see", "Close her eyes and listen to music", "Phone her husband"], 1, "Mariko says she puts her feet flat on the floor and counts three things she can see, and she still uses it."],
    ["How often does Mariko have the frightening dreams now?", ["Twice a week", "About once a week", "Every night", "About once a month"], 3, "Mariko says she used to have the dreams several times a week; now it is about once a month."],
    ["What does Mariko do every morning now?", ["Drives Hiroto to school", "Takes the train to work", "Takes Hiroto swimming", "Goes jogging"], 0, "Mariko says she can drive on ordinary roads again and takes Hiroto to school every morning."],
    ["What does Mariko's family do at weekends?", ["Stay at home and rest", "Visit her parents", "Go out as a family", "Go to the beach"], 2, "Mariko says that at weekends they go out as a family."],
    ["Who will notice if Mariko is having bad dreams?", ["Hiroto", "Her husband", "Her mother", "A coworker"], 1, "Mariko says her husband notices if she is having bad dreams at night."]
  ],
  'eot-hinata': [
    ["What was hard for Hinata's mother at first?", ["Getting up early", "Talking to the teacher", "Coming to the clinic every week", "Not making Hinata go to school"], 3, "Mrs. Matsumoto says that for her, at first, the hard part was not making Hinata go; she kept wanting to say something."],
    ["What did Hinata's homeroom teacher tell her?", ["That at first a small group is fine", "That she never has to give presentations", "That she can stay home on presentation days", "That she should practise at home"], 0, "Hinata says talking in front of the class is still really scary, but her homeroom teacher told her that at first a small group is fine."],
    ["How does Hinata spend her school week now?", ["Five days in class", "Two days in class, three at home", "Three days in class, two in the counselling room", "One day in class, four in the counselling room"], 2, "Hinata says that three days a week she is in class from morning to the end, and the other two days in the counselling room."],
    ["What time does Hinata go to bed on school days?", ["By nine", "By eleven", "By ten", "After midnight"], 1, "Hinata says that on school days she is in bed by eleven."],
    ["Whom will Hinata tell if the signs come back?", ["Her father", "Her friends", "Her grandmother", "Her mother or the school counsellor"], 3, "Hinata says she will tell her mother or the counsellor at school."]
  ],
  'eot-panic': [
    ["Which practice helped Daiki understand the most?", ["Counting things he could see", "Making his heart pound on purpose and waiting for it to go down", "Listening to music on the train", "Writing in a diary"], 1, "Daiki says it was the practice where he made his heart pound on purpose and waited until it went down; doing it himself, he understood that his heart can pound and he won't die."],
    ["What was really scary for Daiki the first day?", ["Going back on the packed morning train", "Driving on the expressway", "Going into a lift", "Going to a crowded shop"], 0, "Daiki says the first day he went back on the packed morning train, he was really scared, and even one stop felt long."],
    ["How does Daiki get to work now?", ["By car", "By bicycle", "On foot", "By train every day"], 3, "Daiki says he commutes by train every day, can take the rapid train too, and doesn't use taxis any more."],
    ["What did Daiki do last month?", ["Went on a trip with his mother", "Went to a concert", "Went for a meal with a friend from university", "Joined a gym"], 2, "Daiki says that last month he went for a meal with a friend from university, for the first time in ages."],
    ["Who might tell Daiki if he seems off?", ["His mother, on the phone", "His girlfriend", "His boss", "A neighbour"], 0, "Daiki says he lives alone, so he will have to notice it himself, but he talks with his mother on the phone, so she might tell him if he seems off."]
  ]
});
