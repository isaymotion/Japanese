/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Listening questions on the eight older admission MSE cases (0.25.0): keys mse-<case id>. Loads after listen-questions-4.js. Shape: PLAN-0.25 section A (write/briefs-0.25/PLAN-0.25.md on dev-tools). Ids are permanent: append only after release. */
window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, {
  'mse-shota': [
    ["What does Shota's mother say he hears?", ["A radio playing at night", "The neighbors talking about him", "His father calling him", "Music through the floor"], 1, "Mrs. Takahashi says he hears the neighbors talking about him and that a coworker put a curse on him."],
    ["What did Shota put against his bedroom door?", ["The dresser", "A table", "His bed", "A bookshelf"], 0, "Shota says the neighbors talk about him through the wall, and that is why he put the dresser against the door."],
    ["Why has Shota not slept well?", ["Because of his work shifts", "Because of headaches", "Because of the noise", "Because he stays up playing games"], 2, "Shota says he feels normal, but he has not slept well because of the noise."],
    ["What does Shota say about the food at home?", ["He only eats at the warehouse", "His mother cooks too much", "He has stopped eating breakfast", "He would rather eat what he buys himself"], 3, "Shota says he does not know about the food at home and would rather eat what he buys himself."],
    ["Who did Shota's mother take him to?", ["A school counselor", "A spiritual healer", "His uncle", "A doctor at a clinic"], 1, "Mrs. Takahashi says she took him to a spiritual healer, who said it was a curse."]
  ],
  'mse-ren': [
    ["How many nights has Ren gone without sleep?", ["Two", "Three", "Five", "Seven"], 2, "Misaki says he has not slept in five nights and will not stop talking."],
    ["Why would Ren rather walk than sit down?", ["If he sits, his ideas cool down", "His back hurts", "He is late for the club", "He wants to find Misaki"], 0, "Ren says he would rather walk, because if he sits his ideas cool down."],
    ["What number does Ren give for his mood?", ["Seven", "Fifteen, then twenty", "Nine", "Twelve"], 1, "Asked for a number from one to ten, Ren says fifteen, then twenty."],
    ["Where did Ren's uncle have a speaker just like his?", ["Tokyo", "Kyoto", "Fukuoka", "Osaka"], 3, "Ren says his uncle had a speaker just like it in Osaka."],
    ["What does Misaki say Ren has always done regularly?", ["Gone running", "Played football", "Visited shrines", "Cooked for friends"], 2, "Misaki says Ren has always visited shrines regularly, but he had never said that God chose him."]
  ],
  'mse-ayaka': [
    ["According to her mother, what does Ayaka do all the time lately?", ["Laughs", "Cries", "Argues with her brother", "Stays out late"], 1, "Mrs. Nakamura says that lately Ayaka does not seem to sleep at night and cries all the time."],
    ["What does Ayaka have almost every night?", ["Piano lessons", "Shifts at her job", "Nightmares", "Long walks"], 2, "Ayaka says she has nightmares almost every night, but she does not want to talk about them yet."],
    ["What is Ayaka scared to do?", ["Go out alone at night", "Take the train", "Speak in class", "Stay home alone"], 0, "Ayaka says she is scared to go out alone at night."],
    ["Why has Ayaka not been eating much?", ["She is too busy", "She is on a diet", "The food has no taste", "Her stomach hurts"], 3, "Ayaka says her stomach hurts, so she just has not been eating much."],
    ["What does Ayaka's mother ask the doctor?", ["Whether Ayaka should leave university", "Whether she raised her badly", "Whether Ayaka needs a new job", "Whether her son is unwell too"], 1, "Mrs. Nakamura says Ayaka is weak-willed and asks whether she raised her badly."]
  ],
  'mse-yumiko': [
    ["What does Yumiko say her troubles began with?", ["A car accident", "Her husband leaving", "Her mother's illness", "Moving house"], 1, "Yumiko says that since her husband left she cannot do anything."],
    ["How does Noriko say her sister moves and talks lately?", ["Very fast", "Loudly", "Only at night", "Very slowly"], 3, "Noriko says that lately her sister moves and talks very slowly, and some days she lies down all day."],
    ["What number does Yumiko give for her mood?", ["About one", "About three", "About five", "About seven"], 0, "Yumiko says her mood is about a one."],
    ["What does Yumiko say about herself and her children?", ["She is proud of them", "She wants them to visit", "She feels she has failed them", "She is angry with them"], 2, "Yumiko says she feels she has failed her children and is not a good mother."],
    ["What has Yumiko stopped being able to do?", ["Cook dinner", "Drive a car", "Read the newspaper", "Go to work"], 3, "Yumiko says her body feels heavy, she wakes early in the morning and cannot sleep, and she has stopped being able to go to work."]
  ],
  'mse-tetsuo': [
    ["Besides the sweating, what does Mr. Yamamoto say his hands do?", ["Go numb", "Feel cold", "Shake", "Hurt"], 2, "Mr. Yamamoto says his hands shake and the sweating will not stop."],
    ["How long had Mr. Yamamoto gone without a drink?", ["One day", "About two days", "A week", "A month"], 1, "Mr. Yamamoto says he had not had a drink for about two days, and then his hands started shaking."],
    ["What does he need before he can get to the work site?", ["Breakfast", "A coffee", "A good night's sleep", "A morning drink"], 3, "Mr. Yamamoto says that unless he has a morning drink, he cannot get to the work site."],
    ["What did a stain on the wall look like for a second?", ["A bug", "A face", "A snake", "A hand"], 0, "Mr. Yamamoto says a stain on the wall looked like a bug for a second, but it was just a stain."],
    ["What has Haruka been asking her father for years?", ["To change jobs", "To stop drinking", "To move in with her", "To see a doctor every month"], 1, "Haruka says her father always blames his work, and she has been asking him to stop drinking for years."]
  ],
  'mse-chiyoko': [
    ["What does Megumi say Chiyoko tells her every day?", ["That she stole her purse", "That the food is bad", "That she wants to see her son", "That the house is cold"], 0, "Megumi says that every day her mother-in-law tells her she stole her purse."],
    ["What does everyone at school call Chiyoko?", ["Grandma Ito", "Principal Ito", "Chiyoko", "Ito-sensei"], 3, "Chiyoko says Ito is fine, but at school everyone calls her Ito-sensei."],
    ["What did Chiyoko do with the children on winter mornings in Niigata?", ["Sang songs", "Cleared the snow", "Went for a walk", "Cooked breakfast"], 1, "Chiyoko says the snow was terrible in winter, and in the mornings she cleared the snow with the children before lessons."],
    ["Where does Chiyoko think she is?", ["In a hotel", "At a train station", "In the school staff room", "At her son's office"], 2, "Chiyoko says she thinks this is the school, the staff room."],
    ["Who gives Chiyoko her morning medicine?", ["Her son Hiroshi", "A nurse", "Megumi", "A neighbor"], 2, "Chiyoko says Megumi gives her the morning medicine, but she has forgotten what it is for."]
  ],
  'mse-daisuke': [
    ["What does Tomoko say her brother has hardly done for weeks?", ["Eaten", "Slept", "Spoken", "Gone to work"], 1, "Tomoko says that for the last few weeks he has been getting stranger and has hardly slept."],
    ["Which seat does Daisuke choose?", ["The one by the window", "The one nearest his sister", "The one in the corner", "The one where he can see the door"], 3, "Daisuke says he will take the seat where he can see the door."],
    ["What does Daisuke say has been behind him for a few weeks?", ["The same car", "A motorbike", "A taxi", "A man on a bicycle"], 0, "Daisuke says that for a few weeks the same car has been behind him all the time, with a few men inside."],
    ["What does Daisuke hear from outside?", ["Music", "Knocking on the door", "His name being called", "A dog barking"], 2, "Daisuke says he hears just his name, \"Sato\", from outside, and when he opens the window nobody is there."],
    ["What did Tomoko see when she looked outside?", ["Children playing", "A neighbour walking a dog", "A broken streetlight", "No car like that"], 3, "Tomoko says she looked outside too, and there was no car like that."]
  ],
  'mse-shigeru': [
    ["What does Keiko say her father was like yesterday?", ["Coughing a lot", "Angry with everyone", "Fine, and they chatted", "Unable to walk"], 2, "Keiko says yesterday he was fine, he knew her and they chatted; he has been like this since last night."],
    ["Who does Shigeru first think the doctor is?", ["His son", "Gen", "A neighbor", "Keiko's husband"], 1, "Shigeru asks whether it is Gen and says he is late."],
    ["Where does Shigeru say the children are?", ["At the window", "In the corridor", "Under the bed", "By the door"], 0, "Shigeru says he is scared because there are children at the window and it is dangerous."],
    ["What does Shigeru say he has to go and check?", ["The cows", "The post box", "The doors of the house", "The water in the paddy"], 3, "Shigeru says he has to go and check the water, the water in the paddy."],
    ["What does Shigeru say today is?", ["His birthday", "Market day", "Rice planting", "A festival day"], 2, "Asked what day it is, Shigeru says today is rice planting and he has to hurry."]
  ]
});
