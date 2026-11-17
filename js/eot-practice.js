/* End-of-treatment review practice (0.20.0): an outpatient's last planned session. Interview a simulated patient field
   by field, document with the review form's picks, check each field against a model answer, decide whether regular
   sessions can end, and compare with the first-visit MSE. Runs on the discharge practice engine (App.formCases,
   App.formCase in js/discharge-practice.js; grading App.dischargeGrade).
   Data: PSYCH_EOT (fields, questions, picks; phrase section "eot") + PSYCH_EOT_CASES (answers, models, decision.end). */
(function () {
  const { esc } = App;
  const V = (App.views = App.views || {});
  const mseOf = (C) => (window.PSYCH_MSE_CASES || []).find((m) => m.id === C.id);
  // The answer label: the answer's own speaker, else the case's speaker, else the first-visit case's patient name.
  const speaker = (C) => { const m = mseOf(C), w = m && m.cc && m.cc.ans && m.cc.ans[2]; return C.speaker || (w && !/\(/.test(w) ? w : '') || 'Patient'; };
  // First visit vs today: the domains the review MSE repeats.
  const firstVisit = (C) => {
    const m = mseOf(C); if (!m || !m.domains) return '';
    const a = (ids) => ids.map((id) => m.domains[id] && m.domains[id].doc).filter(Boolean).join('; ');
    const b = (ids) => ids.map((id) => C.fields[id] && C.fields[id].doc).filter(Boolean).join('; ');
    const rows = [['Mood and affect', ['mood'], ['mood']], ['Suicidal and homicidal ideation', ['safety'], ['safety']], ['Insight', ['insight'], ['insight']]].filter(([, x, y]) => a(x) && b(y));
    if (!rows.length) return '';
    return '<div class="card stack eot-first"><h3 style="margin:0">First visit vs today</h3><p class="small muted" style="margin:0">Model MSE at the first visit (' + esc(m.title) + ') and at this review.</p>' +
      '<div class="stack" style="gap:8px">' + rows.map(([t, x, y]) => '<div class="dc-row"><b>' + esc(t) + '</b><div class="small"><span class="eyebrow">First visit</span> ' + esc(a(x)) + '</div><div class="small"><span class="eyebrow">Today</span> ' + esc(b(y)) + '</div></div>').join('') + '</div></div>';
  };
  const EOT = {
    form: () => window.PSYCH_EOT, cases: () => window.PSYCH_EOT_CASES || [], store: 'ecases',
    list: '#/psych/eot', page: '#/psych/ecase/', listTitle: 'End-of-treatment review',
    listCrumb: '<a href="#/psych">Psychiatry</a> / End-of-treatment review',
    notYet: 'The end-of-treatment review cases',
    intro: () => 'The last planned outpatient session: review the course of treatment, a short review MSE, safety, a relapse plan, and the decision whether regular sessions can end. Ask the questions in ' + LANG.name + ', document each field with the form\'s wording, then compare with a model answer.',
    foot: 'Patients are fictional.',
    chartSub: 'first visit and treatment sessions', textHint: 'Add details, e.g., what the patient said',
    compareTitle: 'Your review vs the model',
    decision: { key: 'end', ask: 'Can regular sessions end today?', yes: 'End regular sessions', no: 'Continue treatment', yesSaid: 'end regular sessions', noSaid: 'continue treatment' },
    links: (C) => (mseOf(C) ? '<a class="btn" href="#/psych/mcase/' + C.id + '">Compare with the first-visit MSE</a>' : '') +
      ((window.PSYCH_SECTIONS || []).some((s) => s.id === 'eot') ? '<a class="btn" href="#/psych/s/eot">Questions for the review</a>' : ''),
    extra: firstVisit, speaker, listen: 'eot-'   // 0.25.0: listening questions key prefix (LISTEN_Q)
  };
  V.eotCases = (el) => App.formCases(el, EOT);
  V.eotCase = (el, params) => App.formCase(el, params, EOT);
})();
