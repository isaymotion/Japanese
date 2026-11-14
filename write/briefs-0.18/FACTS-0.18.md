# 0.18.0 simulations: fixed facts (decided by the main chat; writers must not change them)

General: follow /home/claude/work/SIM-BRIEF.md. 6–8 steps, level as given. Add `role: 'nurse'` as a field of the case
object for the nurse-played cases (A, B, C); the doctor-played cases have no role field. In nurse cases the learner is
the ward nurse 木村《きむら》 (introduces self as 看護師《かんごし》 の 木村《きむら》 です); scores and feedback teach nursing
practice; anything beyond nursing scope is "I will tell the doctor" (医師《いし》 / 先生《せんせい》 に 伝《つた》えます).
Every new patient's file header says "fictional patient". No method detail, no product or medicine names, no doses,
no vital-sign or lab numbers. Crisis: "the local crisis line" and 119 only. Law: "follow local law and your hospital's policy".

## A. nurse-admit — Shota arrives on the ward (nurse-played, N4)
Existing patient: Shota Takahashi (psychosis; mother Mrs. Takahashi). READ his facts first: psych-cases-1.js (id shota),
psych-mse-cases.js (shota), psych-discharge-cases-1.js (shota); facts there win. Setting: the evening of his admission,
after the doctor's assessment; nurse Kimura receives him and his mother on the ward. Content: greeting and introducing
self; explaining the ward and the day (meals, rest, where the nurses' station is); the belongings check asked politely
with a reason and done together, items kept at the nurses' station returned at discharge (the 0.16.0 nurse lines); he is
suspicious (hears voices, thinks people may be watching): do not argue with or confirm the voices, offer a choice and
time; the mother's worry and visiting; ends with how to call a nurse at night. Teach: explain before doing, choices,
respect, no confrontation about beliefs, report new risk to the doctor.

## B. nurse-meds — Ren and the evening medicine (nurse-played, N4)
Existing patient: Ren (mania; girlfriend Misaki). READ psych-cases-1.js (ren), psych-mse-cases.js (ren),
psych-discharge-cases-*.js (ren). Setting: day 3 on the ward, evening medicine round. He talks fast, says he feels
better than ever and does not need medicine, the medicine makes him slow. Content: listen first, acknowledge, ask what
he dislikes about it (side effects), give accurate simple information without threats, never trick or hide medicine,
the as-needed medicine is not used as a threat, offer to tell the doctor about the side effect, respect a refusal
(record it and report it to the doctor), come back later. Ends with Ren agreeing to take it after talking, OR agreeing
to talk to the doctor tomorrow — writer chooses, both are fine. No medicine names.

## C. nurse-night — Tetsuo at night, day 2 of alcohol withdrawal (nurse-played, N3)
Existing patient: Tetsuo Yamamoto (alcohol; daughter Haruka; seizure in the ER before admission). READ psych-cases-2.js
(tetsuo), psych-mse-cases-3.js (tetsuo), psych-discharge-cases-*.js (tetsuo), psych-withdrawal.js (the nurse script).
Setting: about 2 a.m. of his second night; he is awake, sweaty, his hands shake, he is restless and asks to go home
to get a drink, and once asks about the "bugs" on the curtain then doubts it. Content: calm approach with light on,
orientation (where he is, the time), ask about symptoms the nurse's withdrawal script asks about (shaking, sweating,
nausea, anxiety, seeing or hearing things, feeling something on the skin, headache), do not argue about the bugs but
check what he sees and reassure safety, safety (bed low, call bell, not going out alone), call the doctor on duty now
because of the perceptual change and worsening (teach: early warning of withdrawal delirium); fluids if allowed;
stay with him. No numbers, no medicine names.

## D. ocd — Takumi Kobayashi, first outpatient visit (doctor-played, N3)
New fictional patient: 小林《こばやし》 拓海《たくみ》, 34, works in the accounts section of a city office, married to
小林《こばやし》 綾《あや》 (does not attend), no children. For two years: fear of germs and of making others ill; washes
hands many times a day until the skin is chapped and cracked, long showers, changes clothes when he comes home;
checking the gas, the locks and the windows many times before leaving, now late for work; checks the figures in his
work again and again. He knows it is excessive and is ashamed ("I know it's strange"). He hid it for a long time;
his wife persuaded him to come. Mood a little low because of the time lost; no suicidal thoughts (asked, denies), no
alcohol problem, no hallucinations; no harm-related intrusive thoughts (do not add any). Teaching: thank him for
telling, ask about the thoughts without judging, ask time spent and what happens if he does not wash or check
(anxiety), insight is good, don't reassure repeatedly (reassurance feeds the cycle) but explain it is a known,
treatable condition; mention in general terms that therapy that practises facing fears step by step and medicine
can both help (no names, no doses); involve his wife if he wishes. Title in English like "Takumi: washing and checking".

## E. ptsd — Mariko Inoue after a car crash (doctor-played, N3)
New fictional patient: 井上《いのうえ》 真理子《まりこ》, 42, part-time worker at a supermarket, lives with husband and
son 大翔《ひろと》 (8). Six months ago a truck hit her car from behind on the expressway while she was driving; she and
her son had only minor injuries and recovered. Since then: nightmares, the sound of brakes brings it back as if
happening now, she cannot drive and avoids the expressway, takes the bus; startles easily, irritable with her son,
sleep poor, feels guilty that her son was frightened; sometimes a glass of beer to sleep, recently more nights (ask;
not daily, no withdrawal). Passive thought "it would have been easier if I had died then" once, not now, no plan;
she wants to get better for her son. Referred by her family doctor. Teaching: trauma-informed approach (explain why
you ask, she can pause or stop, she does not have to tell the crash in detail, never ask for a detailed retelling);
ground her when the memory comes up in the interview (feet on the floor, the room, now); normalise as a common
reaction to a frightening event and treatable; ask about sleep, alcohol to sleep, safety and suicidal thoughts
directly and gently; mention in general terms that trauma-focused therapy helps. No injury description, no blood.

## F. panic — Daiki Okada in the emergency department (doctor-played, N3)
New fictional patient: 岡田《おかだ》 大輝《だいき》, 27, systems engineer, lives alone, mother in Osaka by phone.
Third ED visit in two months with sudden chest pounding, chest tightness, breathlessness, tingling hands, fear of
dying or going mad, peaking within minutes and gone within the hour; tonight on a crowded commuter train. The ED
physician's tests tonight and before were normal (say only "the tests were normal"; no numbers). Now afraid of the
train and of another attack, takes taxis, has missed work. Energy drinks and coffee most days at work (ask; no
amounts in Japanese beyond "many"); no other substances (asked). Psychiatry is called in the ED. Teaching: say the
symptoms are real and frightening (never "it's nothing" or "it's all in your head"), check that medical causes were
looked at, ask what he feared would happen, ask caffeine and substances, explain the panic cycle simply (body alarm,
fear of the alarm, more alarm), slow breathing as one tool, explain that avoidance keeps the fear going, outpatient
follow-up; ask suicidal thoughts briefly (denies).

## G. hinata — Hinata Matsumoto and her mother, school refusal (doctor-played, N4)
New fictional patient: 松本《まつもと》 ひなた, 14, second year of junior high school, with her mother 松本《まつもと》 由香《ゆか》
(46, works at a clinic reception). Father works away from home on weekdays. Child and adolescent outpatient clinic.
For two months she has not gone to school: stomach-aches and headaches on school mornings that go by noon on
weekends and holidays; she stays in her room, plays games and watches videos late at night, sleeps late. It began
after she froze during a presentation in class and thought everyone was laughing at her; two classmates mocked her
afterwards in the group chat (no more than that). Mother is worried, has been angry at times, and blames herself.
Seen with the mother first, then with Hinata alone (the doctor asks Hinata if it is all right; explains that what
she says stays private, except if she or someone is in danger, in which case the doctor would talk with her first
about who needs to know — follow local law and your hospital's policy). Alone she says sometimes she wants to
disappear (消《き》えたい); asked gently: no wish to die, no plan, no self-harm (asked, denies). Teaching: speak to the
teenager directly and with respect, not only to the parent; ask about bullying and the group chat; follow up 消えたい
directly and calmly; do not blame the mother or the child; the physical symptoms are real; plan in general terms:
regular sleep and getting up, small steps back, talking with the school (school counsellor) with her agreement.
Who names: "Hinata", "Mrs. Matsumoto (mother)". Staff call her ひなたさん; she uses plain, short replies.
