/* Source extract (Hablemos): the yesenia discharge case only. */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
 {
  id: "yesenia",
  title: "Cravings down, naloxone taught, bridge clinic booked",
  level: "B2",
  dx: "Opioid use disorder, severe",
  decision: { discharge: true, why: "Discharge today. She is stable on buprenorphine-naloxone, cravings are much lower, withdrawal has resolved, and she sleeps better. She denies suicidal thoughts. The overdose was unintentional and she and her mother have been taught to use naloxone. A bridge clinic appointment is in 3 days and she leaves with a 7-day supply. Leaving without a bridge appointment and naloxone would be the real risk." },
  setting: "Ward, morning of planned discharge. Yesenia, 31, nail technician, two children (6 and 3) who are staying with her mother, Doña Lidia. Her mother is waiting downstairs.",
  chart: [
   "Admitted 6 days ago after one overdose, reversed with naloxone by a friend. Fentanyl pills (“las azules”, M30), smoked, after a back injury and prescribed oxycodone. Wanted to stop and could not. Has PTSD symptoms (nightmares, startle) from an assault; does not want to give details.",
   "Admission MSE: tearful, anxious, drug craving, mild withdrawal (COWS 12), no suicidal ideation, insight fair.",
   "Course: buprenorphine-naloxone started once withdrawal was clear and raised to 16 mg/4 mg daily (teaching example). Cravings from 9/10 to 2/10. No restraint. No falls. Nightmares twice a week, improved from nightly. Sleep chart 6 to 7 hours.",
   "Plan: bridge clinic appointment in 3 days; 7-day buprenorphine-naloxone prescription; naloxone kit taught to her and her mother; trauma therapy referral when ready; children stay with her mother. 988 card."
  ],
  fields: {
   behavior: {
    obs: "Clean sweater, hair in a ponytail, no makeup. Calm, a little shy. Eye contact good. Sits with her hands in her lap and asks about her kids.",
    ans: {
     0: ["Mejor, doctora. Más tranquila y con ganas de ver a mis niños.", "Better, doctor. Calmer and wanting to see my kids."],
     1: ["Sí, claro.", "Yes, of course."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Guarded: "She is shy about the assault but open about her use and her plans.",
     Restless: "That was part of the withdrawal on admission. She sits calmly now."
    },
    doc: "Calm, cooperative, good eye contact, fairly groomed",
    why: "Compare with admission: tearful and anxious then, calm now. A calm patient who is no longer in withdrawal is easier to hear."
   },
   mood: {
    obs: "Smiles when she speaks about her children. Looks tense for a moment when asked about going back home.",
    ans: {
     0: ["Más tranquila. Antes no sentía nada o sentía miedo. Ahora siento ganas de empezar de nuevo.", "Calmer. Before I felt nothing or I felt fear. Now I feel like starting over."],
     1: ["Contenta y también nerviosa. Me da miedo salir y encontrarme con las mismas personas.", "Happy and also nervous. I'm afraid to go out and run into the same people."],
     2: ["Un siete.", "A seven."]
    },
    quote: "Más tranquila. Antes no sentía nada o sentía miedo. Ahora siento ganas de empezar de nuevo. (Calmer. Before I felt nothing or I felt fear. Now I feel like starting over.)",
    need: ["Euthymic mood", "Congruent affect", "Full range affect"],
    ok: ["Anxious mood", "Restricted affect"],
    wrong: {
     "Dysphoric mood": "That was her admission mood. She now says she feels calmer and hopeful.",
     "Flat affect": "She smiles and looks tense at fitting moments."
    },
    doc: "“Más tranquila. Antes no sentía nada o sentía miedo. Ahora siento ganas de empezar de nuevo.” (Calmer. Before I felt nothing or I felt fear. Now I feel like starting over.) Mood 7/10. Euthymic mood with situational nervousness; congruent, full range affect",
    why: "Her nervousness about leaving is realistic. Naming it is part of the relapse plan: people, places, and things."
   },
   process: {
    obs: "Organized and brief. Pauses when the assault is mentioned and chooses not to give detail.",
    ans: {
     0: ["Me lastimé la espalda en el trabajo y me dieron oxicodona. Cuando se acabó, un amigo me dio las azules. Me volví dependiente. Una noche me desmayé y mi amigo me salvó con el Narcan. Aquí me dieron la medicina y se me quitaron las ganas.", "I hurt my back at work and they gave me oxycodone. When it ran out, a friend gave me the blue ones. I became dependent. One night I passed out and my friend saved me with the Narcan. Here they gave me the medicine and the cravings went away."],
     1: ["Quedarme con mi mamá y mis hijos esta semana, ir a la clínica el lunes, y luego volver a trabajar poco a poco en el salón.", "Stay with my mom and my kids this week, go to the clinic on Monday, and then go back to work little by little at the salon."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    doc: "Goal-directed, coherent and relevant; declines detail about the assault",
    why: "A clear timeline and a plan with dates. Not giving detail about the assault is her choice. Respect it and do not push."
   },
   positive: {
    obs: "Not responding to anything. No startle during the interview.",
    ans: {
     0: ["No.", "No."],
     1: ["No.", "No."],
     2: ["No, solo las pesadillas, pero eso no es ver cosas, son sueños.", "No, only the nightmares, but that isn't seeing things, they're dreams."],
     3: ["No creo que me siga nadie. Me da miedo salir de noche, pero sé que es por lo que viví.", "I don't think anyone follows me. I'm afraid to go out at night, but I know that's because of what I went through."]
    },
    key: [2, 3],
    need: ["No hallucinations elicited", "Not responding to internal stimuli"],
    wrong: {
     "Residual persecutory ideas, less intense": "Her fear is linked to the trauma and she knows it. She does not believe she is being followed."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli; no delusions; trauma-related fear of going out at night, with insight",
    why: "Ask the questions and listen for a trauma-related fear. Nightmares and hypervigilance are PTSD symptoms, not psychosis."
   },
   negative: {
    obs: "Ward notes: joins groups, helps other patients with their nails, bathes daily.",
    ans: {
     0: ["Sí, me gustó el grupo de manualidades.", "Yes, I liked the crafts group."],
     1: ["Sí, con una compañera que también tiene hijos.", "Yes, with a woman who also has children."],
     2: ["Sí, más que antes.", "Yes, more than before."],
     3: ["Sí, todos los días.", "Yes, every day."]
    },
    need: ["None noted"],
    wrong: {
     Anhedonia: "She enjoys the crafts group and her children. Interest is back.",
     "Poor self-care": "She bathes and dresses daily."
    },
    doc: "None noted",
    why: "Interest, social contact, and self-care are all back."
   },
   suicide: {
    ans: {
     0: ["No. Lo de la sobredosis no fue para quitarme la vida. Fue que me pasé de dosis.", "No. The overdose wasn't to take my life. I took too much."],
     1: ["No, ninguno.", "No, none."],
     2: ["Le digo a mi mamá y llamo a la clínica o al 988, y oprimo el 2.", "I tell my mom and I call the clinic or 988, and press 2."]
    },
    key: [0, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; overdose was unintentional (accidental, fentanyl); reasons for living (her children); will tell her mother and call the clinic or 988 (oprima 2)",
    why: "Ask directly whether the overdose was an attempt. An unintentional overdose and a suicide attempt need different plans. Write what she said in her own words."
   },
   homicide: {
    ans: {
     0: ["No.", "No."],
     1: ["Siento coraje con la persona que me lastimó, pero no quiero hacerle daño. Solo quiero que me dejen en paz.", "I feel coraje toward the person who hurt me, but I don't want to hurt him. I just want to be left alone."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; anger toward the person who assaulted her, no intent or plan",
    why: "Anger at a person who hurt her is expected. Ask about intent, and do not ask for details of the assault."
   },
   orientation: {
    ans: {
     0: ["Es viernes, a mediados de noviembre.", "It's Friday, the middle of November."],
     1: ["En el hospital.", "In the hospital."],
     2: ["Usted es la doctora.", "You are the doctor."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3)",
    why: "Correct day, place, and person."
   },
   memory: {
    ans: {
     0: ["Pelota, árbol, llave.", "Ball, tree, key."],
     1: ["Pelota, árbol, llave.", "Ball, tree, key."],
     2: ["Un burrito de huevo y un café.", "An egg burrito and a coffee."],
     3: ["Hace seis días.", "Six days ago."],
     4: ["En Fresno, aquí en California.", "In Fresno, here in California."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory",
    why: "Memory is intact."
   },
   insight: {
    ans: {
     0: ["Porque me sobredosifiqué y ya no podía parar de usar.", "Because I overdosed and couldn't stop using anymore."],
     1: ["Sí, es una enfermedad. Mi mamá dice que es falta de voluntad, pero ya entendí que no es eso.", "Yes, it's an illness. My mom says it's lack of willpower, but I understand now that it isn't."],
     2: ["Sí. Aunque me sienta bien. La medicina me quita las ganas. Si la dejo, vuelvo a lo mismo.", "Yes. Even if I feel good. The medicine takes away the cravings. If I stop, I go back to the same thing."],
     3: ["Volvería a usar y podría morir, porque ya no tendría tolerancia.", "I'd go back to using and I could die, because I wouldn't have tolerance anymore."]
    },
    key: [1, 2, 3],
    need: ["Good", "Grade 5: intellectual insight"],
    ok: ["Fair", "Grade 6: true emotional insight"],
    wrong: {
     Poor: "She names the illness, the medicine, and the overdose risk after losing tolerance.",
     "Grade 3: blames others/external factors": "She does not blame the injury or her friends. She links her use to a disorder."
    },
    doc: "Good (grade 5): accepts opioid use disorder as an illness, understands that medicine prevents relapse and that losing tolerance raises overdose risk",
    why: "Her answer about losing tolerance is the key safety fact. Many overdoses after detox happen in the first weeks."
   },
   judgment: {
    ans: {
     0: ["Llamo a la clínica antes de que se me acabe. Me dieron la fecha, y si falta algo, voy a urgencias.", "I call the clinic before it runs out. They gave me the date, and if something is missing I go to the ER."],
     1: ["No oigo voces, pero si me vienen pensamientos de usar, llamo a mi mamá.", "I don't hear voices, but if thoughts of using come, I call my mom."],
     2: ["Saldría rápido y avisaría a alguien.", "I'd leave quickly and tell someone."],
     3: ["Ya borré los números de esos amigos. Si me los encuentro, les digo que no y me voy.", "I deleted those friends' numbers. If I run into them, I say no and leave."]
    },
    key: [0, 3],
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment; specific plan for medicine supply and for people who use (deleted numbers)",
    why: "Her plan to keep from the people who use is concrete. Ask again at the bridge clinic, because the first days at home are the riskiest."
   },
   sleep: {
    obs: "Sleep chart: 6 to 7 hours, with brief waking on two nights, matching nightmares.",
    ans: {
     0: ["Mejor. Seis, siete horas.", "Better. Six, seven hours."],
     1: ["Dos veces por semana me despierto por una pesadilla y me cuesta volver a dormir.", "Twice a week I wake from a nightmare and have trouble going back to sleep."],
     2: ["Un poco, nada más.", "A little, that's all."],
     3: ["No.", "No."]
    },
    key: [1],
    need: ["Fair", "Frequent awakenings"],
    ok: ["Difficulty initiating sleep"],
    wrong: {
     Good: "Nightmares still wake her twice a week. Fair is the honest rating.",
     "7–8 hours, uninterrupted": "The chart shows awakenings on two nights.",
     "Reduced need for sleep": "She does not feel energetic. She is tired."
    },
    doc: "Fair, 6–7 hours (sleep chart); wakes about twice a week from trauma-related nightmares and has trouble going back to sleep (improved from nightly)",
    why: "Poor sleep is a relapse trigger. Nightmares are a target for later trauma treatment. Tell the bridge clinic."
   },
   adverse: {
    obs: "Chart: opioid withdrawal at admission (COWS 12) before buprenorphine was started, resolved within 36 hours. No restraint, no falls, no sedation, no medical illness.",
    ans: {
     0: ["Nada. Al principio me daba un poquito de náusea con la película, pero ya no.", "Nothing. At first the film gave me a little nausea, but not anymore."],
     1: ["No, aquí no. Solo los primeros días me dolía todo y no dormía, de la abstinencia.", "No, not here. Only the first days everything hurt and I didn't sleep, from withdrawal."]
    },
    key: [1],
    need: ["Withdrawal symptoms"],
    wrong: {
     None: "The chart records opioid withdrawal on admission. Document it, even though it is resolved.",
     Sedation: "She denies sleepiness from the medicine."
    },
    doc: "Opioid withdrawal on admission (COWS 12), resolved after buprenorphine induction; mild nausea early on, resolved; no sedation, no restraint, no falls",
    why: "Document withdrawal and how it ended. Her description of it also helps her keep medicine because she remembers how bad it was."
   },
   diagnosis: {
    ans: {
     0: ["Sí. Trastorno por uso de opioides. Me dijeron que tiene tratamiento.", "Yes. Opioid use disorder. They told me it has treatment."],
     1: ["Sí, el cerebro se acostumbra y pide más.", "Yes, the brain gets used to it and asks for more."],
     2: ["Gracias. Mi mamá dice que es vicio y que es mi culpa. Quiero que ella escuche esto.", "Thank you. My mom says it's a vice and my fault. I want her to hear this."]
    },
    need: ["Other comorbid: ___"],
    wrong: {
     "Methamphetamine-induced psychotic disorder, with ___ use disorder": "This case involves opioids (fentanyl pills), not stimulants. No psychosis was found."
    },
    doc: "Opioid use disorder, severe (fentanyl, after prescribed oxycodone), on buprenorphine-naloxone; one reversed overdose; PTSD symptoms (nightmares, startle, avoidance), full assessment deferred to outpatient care",
    why: "The form has no opioid-use pick, so write it under “Other comorbid”. Name the PTSD symptoms too. Arranging a talk with her mother could help the family see addiction as an illness."
   },
   medications: {
    ans: {
     0: ["Sí, la película de buprenorfina con naloxona, debajo de la lengua, una vez al día.", "Yes, the buprenorphine-naloxone film, under the tongue, once a day."],
     2: ["Pongo la película debajo de la lengua y la dejo disolver. No la trago ni hablo hasta que se disuelva. Una vez al día en la mañana. Si me siento mal, no la dejo.", "I put the film under my tongue and let it dissolve. I don't swallow it or talk until it dissolves. Once a day in the morning. If I feel bad, I don't stop."],
     3: ["La receta es por siete días. Tengo Medicaid. Si no me la cubren, la clínica me ayuda.", "The prescription is for seven days. I have Medicaid. If it isn't covered, the clinic helps me."],
     4: ["Sí. Ya sé que no debo dejarla.", "Yes. I know I shouldn't stop."]
    },
    key: [2],
    need: ["Naloxone kit given and taught", "Teach-back done, correct"],
    ok: ["Family supervises medication"],
    wrong: {
     "Teach-back incorrect, re-taught": "Her teach-back was correct: under the tongue, dissolve, once a day.",
     "Olanzapine ___ mg tab, 1 tab at bedtime": "No antipsychotic was ordered. She has no psychosis."
    },
    doc: "Buprenorphine-naloxone 16 mg/4 mg sublingual film, once daily, 7-day supply (teaching example); teach-back correct; naloxone nasal kit given and taught to patient and mother (demonstrated: call 911, spray, rescue breaths, stay with her); cost and coverage checked",
    why: "Teach-back covers how to take it and what not to do. The naloxone kit is as important as the prescription. The form has no buprenorphine pick, so the drug and dose go in the documentation line."
   },
   aftercare: {
    ans: {
     0: ["Sí. Dentro de tres días, el lunes a las diez. Mi mamá me lleva.", "Yes. In three days, Monday at ten. My mom takes me."],
     1: ["Mi mamá. Ella ya aprendió a usar el Narcan.", "My mom. She already learned how to use the Narcan.", "Doña Lidia (mother)"],
     2: ["Sí. Si vuelven las ganas muy fuertes, si dejo de dormir, o si pienso en hacerme daño, llamo a la clínica o al 988.", "Yes. If cravings come back very strong, if I stop sleeping, or if I think of hurting myself, I call the clinic or 988."],
     3: ["Lo guardé en el teléfono. Oprimo el 2.", "I saved it in my phone. I press 2."]
    },
    key: [1],
    need: ["Naloxone kit and MOUD referral", "Follow-up appointment date and clinic given in writing", "Family oriented on warning signs"],
    ok: ["Referred to ___"],
    wrong: {
     "Outpatient follow-up in 1–2 weeks": "Too long. Her bridge appointment is in 3 days, and the 7-day supply runs out before 2 weeks.",
     "Discharge deferred: ___": "She meets the criteria for discharge today, with naloxone and a bridge appointment in place."
    },
    doc: "Bridge clinic Monday 10 a.m. (3 days), date and place given in writing; 7-day buprenorphine-naloxone prescription; naloxone kit given, taught to patient and mother; mother oriented on overdose and relapse warning signs; trauma therapy referral when ready; children staying with her mother; 988 (oprima 2 for Spanish)",
    why: "The days after discharge carry the highest overdose risk. Match supply to the appointment, and put naloxone in the home. Her mother is a strong support, so her view of addiction as a vice matters."
   }
  }
 }
]);
