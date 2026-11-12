/* Admission MSE: the domains of a generic admission mental status examination, in documentation order, with the
   phrases to ask (refs "sectionId:index" into PSYCH_SECTIONS) and the standard wording to pick when documenting.
   PSYCH_ADMIT_MSE { form, title, domains: [{ id, group, label, kind: 'observe' | 'ask', assess, ask: [refs], picks, risk? }] }
   Hanashimashō is not tied to one hospital: form is empty (set your form number in data/hospital.js if you have one).
   Uses existing phrases only; append to `ask`, never insert. Used by js/mse-practice.js once PSYCH_MSE_CASES has cases.
   Mirrors Usap Tayo's 13 domains so the practice-case format is shared. */
(function () {
  const GRADES = ['Good', 'Fair', 'Poor', 'Grade 1: complete denial', 'Grade 2: slight awareness', 'Grade 3: blames others/external factors', 'Grade 4: aware, cause unknown in self', 'Grade 5: intellectual insight', 'Grade 6: true emotional insight'];
  window.PSYCH_ADMIT_MSE = {
    form: '', title: 'Admission MSE',
    domains: [
      { id: 'appearance', group: 'General', label: 'General appearance', kind: 'observe',
        assess: 'Sex and apparent age, build, clothing, grooming and hygiene. Written first, as one line: "Adult male, medium built, ... fairly kempt."',
        ask: ['opening:0', 'opening:2'],
        picks: ['Adult male', 'Adult female', 'Young adult', 'Older adult', 'Thin built', 'Medium built', 'Heavy built', 'Well kempt', 'Fairly kempt', 'Unkempt', 'Poor hygiene', 'Looks older than stated age'] },
      { id: 'psychomotor', group: 'General', label: 'Psychomotor activity', kind: 'observe',
        assess: 'Amount and quality of movement: agitation, slowing, restlessness, tremor, abnormal movements.',
        ask: ['depression:12'],
        picks: ['No psychomotor agitation or retardation', 'Psychomotor agitation', 'Psychomotor retardation', 'Restless', 'Tremor', 'Abnormal involuntary movements'] },
      { id: 'attitude', group: 'General', label: 'Attitude and eye contact', kind: 'observe',
        assess: 'Attitude toward the examiner and eye contact. Lowered eyes can be respeto toward a doctor; look at the whole picture before calling it guarded.',
        ask: ['opening:1', 'opening:3'],
        picks: ['Cooperative', 'Uncooperative', 'Guarded', 'Suspicious', 'Irritable', 'Hostile', 'Overfamiliar', 'Good eye contact', 'Fair eye contact', 'Poor eye contact'] },
      { id: 'mood', group: 'Mood and speech', label: 'Mood and affect', kind: 'ask',
        assess: 'Mood in the patient\'s own words (quote in Spanish with translation); affect is what you observe: range, intensity, stability, congruence.',
        ask: ['opening:9', 'depression:0', 'depression:4'],
        picks: ['Sad mood', 'Anxious mood', 'Irritable mood', 'Euphoric mood', 'Euthymic mood', 'Full range affect', 'Restricted affect', 'Blunted affect', 'Flat affect', 'Labile affect', 'Congruent affect', 'Incongruent affect'] },
      { id: 'speech', group: 'Mood and speech', label: 'Speech', kind: 'observe',
        assess: 'Spontaneity and productivity, rate, volume. Switching between Spanish and English is normal and is not a finding.',
        ask: ['cc-hpi:2'],
        picks: ['Spontaneous', 'Non-spontaneous (answers only when asked)', 'Productive', 'Non-productive', 'Normal rate', 'Slow rate', 'Rapid rate', 'Pressured', 'Adequate volume', 'Soft volume', 'Loud volume', 'Poverty of speech'] },
      { id: 'process', group: 'Thought', label: 'Thought process', kind: 'observe',
        assess: 'How the ideas connect, judged from a story told in the patient\'s words: linear and goal-directed, or circumstantial, tangential, loose, flight of ideas, blocking, clanging.',
        ask: ['cc-hpi:2', 'cc-hpi:13'],
        picks: ['Linear', 'Goal-directed', 'Circumstantial', 'Tangential', 'Loose associations', 'Flight of ideas', 'Thought blocking', 'Clang associations', 'Neologisms'] },
      { id: 'perception', group: 'Thought', label: 'Perceptual disturbances', kind: 'ask',
        assess: 'Hallucinations by modality, their content, and commands. Watch for responding to internal stimuli. Seeing a dead relative in dreams, or briefly while grieving, is not by itself a hallucination.',
        ask: ['hallucinations:1', 'hallucinations:2', 'hallucinations:4', 'hallucinations:10', 'hallucinations:13'],
        picks: ['Denies perceptual disturbances', 'Auditory hallucinations', 'Command auditory hallucinations', 'Visual hallucinations', 'Tactile hallucinations', 'Responding to internal stimuli', 'Not responding to internal stimuli'] },
      { id: 'content', group: 'Thought', label: 'Thought content', kind: 'ask',
        assess: 'Delusions and preoccupations. A delusion is fixed, false, and not shared by the patient\'s culture or religion: ask how sure they are and whether there could be another explanation. A family\'s belief in brujería, mal de ojo or "un trabajo" is a cultural explanation, not the patient\'s delusion.',
        ask: ['delusions:0', 'delusions:1', 'delusions:4', 'delusions:17', 'delusions:18', 'depression:8', 'cc-hpi:10'],
        picks: ['No delusions elicited', 'Persecutory delusions', 'Grandiose delusions', 'Delusions of reference', 'Delusional jealousy', 'Nihilistic delusions', 'Thought insertion or broadcasting', 'Guilt or worthlessness (not delusional)', 'Preoccupation with ___'] },
      { id: 'safety', group: 'Thought', label: 'Suicidal and homicidal ideation', kind: 'ask', risk: true,
        assess: 'Ask directly, from general to specific: death wish, ideation, plan, intent, past attempts; thoughts of harming others and toward whom.',
        ask: ['suicide:0', 'suicide:1', 'suicide:3', 'suicide:7', 'suicide:11', 'violence:0'],
        picks: ['Denies suicidal ideation', 'Passive death wish', 'Active suicidal ideation, no plan', 'Active suicidal ideation with plan', 'Denies homicidal ideation', 'Homicidal ideation toward ___'] },
      { id: 'orientation', group: 'Cognition and judgment', label: 'Orientation', kind: 'ask',
        assess: 'Time, place, and person, written "oriented to 3 spheres" when intact.',
        ask: ['mse-cog:4', 'mse-cog:7', 'mse-cog:9'],
        picks: ['Oriented to 3 spheres', 'Disoriented to time', 'Disoriented to place', 'Disoriented to person'] },
      { id: 'insight', group: 'Cognition and judgment', label: 'Insight', kind: 'ask',
        assess: 'Awareness of illness and need for treatment; grade 1–6. Write the patient\'s reason in a short phrase after the grade.',
        ask: ['mse-abstract:7', 'mse-abstract:8', 'mse-abstract:9'],
        picks: GRADES },
      { id: 'impulse', group: 'Cognition and judgment', label: 'Impulse control', kind: 'ask',
        assess: 'From the history (violence, destruction, recklessness) and behavior during the interview.',
        ask: ['violence:5', 'violence:2'],
        picks: ['Good impulse control', 'Fair impulse control', 'Poor impulse control'] },
      { id: 'judgment', group: 'Cognition and judgment', label: 'Judgment', kind: 'ask',
        assess: 'Test judgment (hypothetical situations) and social judgment (real decisions before admission).',
        ask: ['mse-abstract:5', 'mse-abstract:6'],
        picks: ['Good', 'Fair', 'Poor', 'Intact test judgment', 'Impaired test judgment', 'Intact social judgment', 'Impaired social judgment'] }
    ]
  };
})();
