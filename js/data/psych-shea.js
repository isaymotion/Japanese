/* Links between Hanashimashō and the Psychiatric Interviewing Trainer (https://isaymotion.github.io/sheatrainer/),
   the companion study app built on Shea's Psychiatric Interviewing (3rd ed.).
   The phrase section "shea-techniques" itself is in psych-phrases-6.js: original conversational Japanese written for
   training, not a translation from the book and not attributed to it.
   SHEA_LINKS: for each psych section, the trainer chapter and section that teach the technique behind the phrases.
   A value may be one link or an array of links (most relevant first). Rendered as "Technique notes" at the top of the section.
   A link is { ch, sec, label } for a study-guide section, or { href, label }. */
(function () {
  const REVIEWED = false;
  window.SHEA_TRAINER = {
    name: 'Psychiatric Interviewing Trainer',
    base: 'https://isaymotion.github.io/sheatrainer/#/learn/',
    root: 'https://isaymotion.github.io/sheatrainer/',
    reviewed: REVIEWED,
    draftNotice: 'Draft wording. These Japanese phrasings are new and have not yet been reviewed by a native Japanese-speaking clinician. Check them with your seniors or a qualified interpreter before using them with patients.'
  };
  window.SHEA_LINKS = {
    opening: [{ ch: 'ch3', sec: 'introduction', label: 'Chapter 3: The introduction' }, { ch: 'ch12', sec: 'culture-language', label: 'Chapter 12: Culture and language (ask which language the patient thinks in)' }],
    consent: { ch: 'ch3', sec: 'confidentiality', label: 'Chapter 3: Addressing confidentiality' },
    'cc-hpi': { ch: 'ch9', sec: 'persistence', label: 'Chapter 9: The history of the present illness' },
    depression: [{ ch: 'ch9', sec: 'exploring', label: 'Chapter 9: Exploring anhedonia and the neurovegetative symptoms' }, { ch: 'ch10', sec: 'biological', label: 'Chapter 10: The body as first messenger' }, { ch: 'ch10', sec: 'window-shade', label: 'Chapter 10: The window shade response' }],
    mania: { ch: 'ch9', sec: 'bipolar-trap', label: 'Chapter 9: The bipolar trap' },
    anxiety: { ch: 'ch2', sec: 'ocd', label: 'Chapter 2: The normalizing OCD screen' },
    trauma: { ch: 'ch5', sec: 'raising', label: 'Chapter 5: Raising a sensitive topic' },
    hallucinations: [{ ch: 'ch12', sec: 'raising-voices', label: 'Chapter 12: Raising voices and exploring them' }, { ch: 'ch12', sec: 'commands', label: 'Chapter 12: Command hallucinations' }, { ch: 'ch16', sec: 'perception', label: 'Chapter 16: Perception' }],
    delusions: [{ ch: 'ch11', sec: 'life-cycle', label: 'Chapter 11: Soft signs and exploring a delusion' }, { ch: 'ch11', sec: 'delusional-disorders', label: 'Chapter 11: Delusional disorders and dangerousness' }, { ch: 'ch12', sec: 'porous-ego', label: 'Chapter 12: First-rank symptoms' }, { ch: 'ch16', sec: 'content', label: 'Chapter 16: Thought content' }],
    suicide: [{ ch: 'ch17', sec: 'case-approach', label: 'Chapter 17: The CASE Approach' }, { ch: 'ch10', sec: 'themes', label: 'Chapter 10: Burdensomeness and hopelessness' }, { ch: 'ch12', sec: 'commands', label: 'Chapter 12: Command hallucinations' }],
    violence: { ch: 'ch18', sec: 'presenting-recent', label: 'Chapter 18: Presenting and recent violent events' },
    deescalation: [{ ch: 'ch8', sec: 'violence', label: 'Chapter 8: Calming a potentially violent patient' }, { ch: 'ch15', sec: 'complementary', label: 'Chapter 15: Complementary shifts with an angry patient' }],
    substance: [{ ch: 'ch5', sec: 'finishing-lists', label: 'Chapter 5: Gentle assumption and symptom amplification' }, { ch: 'ch11', sec: 'visual-withdrawal', label: 'Chapter 11: Asking about withdrawal' }],
    history: { ch: 'ch9', sec: 'melancholia-anxiety', label: 'Chapter 9: The past psychiatric history' },
    'family-hx': { ch: 'ch9', sec: 'family-history', label: 'Chapter 9: The family history' },
    social: [{ ch: 'ch6', sec: 'wellness', label: 'Chapter 6: The wellness triad' }, { ch: 'ch13', sec: 'social-history', label: 'Chapter 13: Reading the social history for personality patterns' }, { ch: 'ch14', sec: 'probes', label: 'Chapter 14: Probe questions for personality disorders' }],
    collateral: [{ ch: 'ch18', sec: 'corroboration', label: 'Chapter 18: Corroboration' }, { ch: 'ch12', sec: 'families', label: 'Chapter 12: Families of patients with psychosis' }, { ch: 'ch10', sec: 'family', label: 'Chapter 10: The whole family has the depression' }],
    'mse-cog': [{ ch: 'ch16', sec: 'cognition', label: 'Chapter 16: Sensorium, cognition, and insight' }, { ch: 'ch11', sec: 'delirium', label: 'Chapter 11: Delirium and the bedside attention tests' }],
    'mse-abstract': { ch: 'ch16', sec: 'cognition', label: 'Chapter 16: Sensorium, cognition, and insight' },
    'mse-describe': { ch: 'ch16', sec: 'documenting', label: 'Chapter 16: Documenting the mental status' },
    explain: [{ ch: 'ch2', sec: 'collab', label: 'Chapter 2: Collaborative interviewing' }, { ch: 'ch13', sec: 'benefits', label: 'Chapter 13: Fitting the treatment discussion to the personality' }, { ch: 'ch15', sec: 'splitting', label: 'Chapter 15: Collaborative planning when a patient splits' }],
    admission: { ch: 'ch3', sec: 'closing', label: 'Chapter 3: The closing' },
    closing: [{ ch: 'ch3', sec: 'closing', label: 'Chapter 3: The closing' }, { ch: 'ch15', sec: 'merger', label: 'Chapter 15: Setting boundaries with a patient who fears abandonment' }],
    meds: { ch: 'ch12', sec: 'akathisia-catatonia', label: 'Chapter 12: Akathisia and catatonia' },
    elderly: { ch: 'ch11', sec: 'delirium', label: 'Chapter 11: Delirium and the bedside attention tests' },
    'shea-techniques': [{ ch: 'ch5', sec: 'challenge', label: 'Chapter 5: Validity techniques' }, { ch: 'ch14', sec: 'expand', label: 'Chapter 14: Anchoring traits to adolescence and ruling out state dependency' }],
    'wd-alcohol': { ch: 'ch11', sec: 'visual-withdrawal', label: 'Chapter 11: Visual hallucinations and the withdrawal that kills' },
    'wd-agitation': { ch: 'ch12', sec: 'thought-and-gates', label: 'Chapter 12: The agitated psychotic patient' }
  };
})();
