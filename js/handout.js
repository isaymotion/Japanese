/* Printable handout generator for the psychiatry track.
   Builds one content model from the options and renders it as an on-screen preview; the same preview is what prints.
   There is no PDF library: the Print button opens the browser's print window, where "Save as PDF" makes the file.
   (A PDF library would need a Japanese font of several megabytes; the browser already has one.)
   Japanese strings are written in the app notation and rendered by js/ja.js, so furigana and romaji follow the
   two switches on this page (classes ho-nofu / ho-norj on the paper), not the app-wide reading aids. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;

  const ALL_STEPS = () => PSYCH_FLOW.concat(PSYCH_FLOW_EXTRA);
  const PRESETS = {
    full: { label: 'Full interview + MSE', desc: 'The whole interview in order, key phrases, MSE table, and idioms.', o: { steps: PSYCH_FLOW.map((s) => s.id), depth: 'key', overview: true, mse: true, idioms: true, form: false, deescList: false, deescCard: false, nurseCard: false, deescAfter: false, dischargeGuide: false, paper: 'A4', size: 'normal' } },
    mse: { label: 'MSE only', desc: 'All MSE prompts, observation vocabulary, and a blank write-up form.', o: { steps: ['mse'], depth: 'all', overview: false, mse: true, idioms: false, form: true, deescList: false, deescCard: false, nurseCard: false, deescAfter: false, dischargeGuide: false, paper: 'A4', size: 'normal' } },
    risk: { label: 'Risk assessment', desc: 'Suicide, violence, and de-escalation phrases, plus the de-escalation checklist.', o: { steps: ['suicide', 'violence', 'deesc'], depth: 'all', overview: false, mse: false, idioms: false, form: false, deescList: true, deescCard: false, nurseCard: false, deescAfter: true, dischargeGuide: false, paper: 'A4', size: 'normal' } },
    pocket: { label: 'Pocket booklet', desc: 'A5 pages, small type, key phrases only. Fold or staple for the white coat.', o: { steps: PSYCH_FLOW.map((s) => s.id), depth: 'key', overview: true, mse: true, idioms: false, form: false, deescList: false, deescCard: false, nurseCard: false, deescAfter: false, dischargeGuide: false, paper: 'A5', size: 'small', notes: false } },
    discharge: { label: 'Discharge summary guide', desc: 'Each field of the discharge summary form with what to assess, ' + LANG.name + ' questions, and wording to document.', o: { steps: [], depth: 'key', overview: false, mse: false, idioms: false, form: false, deescList: false, deescAfter: false, deescCard: false, nurseCard: false, dischargeGuide: true, paper: 'A4', size: 'normal' } },
    deesccard: { label: 'De-escalation pocket card', desc: 'Two A6 sides: the 12 steps with one ' + LANG.name + ' line each, plus what to do if it fails. Print double-sided and laminate.', o: { steps: [], depth: 'key', overview: false, mse: false, idioms: false, form: false, deescList: false, deescAfter: false, dischargeGuide: false, deescCard: true, nurseCard: false, paper: 'A6', size: 'small' } },
    nursecard: { label: 'Nurse pocket card', desc: 'A6 sides with the ward nurse\'s most used ' + LANG.name + ' lines: admission, medicines, sleep and meals, safety checks, calming, going home. Print double-sided.', o: { steps: [], depth: 'key', overview: false, mse: false, idioms: false, form: false, deescList: false, deescAfter: false, dischargeGuide: false, deescCard: false, nurseCard: true, paper: 'A6', size: 'small' } },
    everything: { label: 'Complete reference', desc: 'Every section and every phrase, including special populations and the de-escalation checklist.', o: { steps: ALL_STEPS().map((s) => s.id), depth: 'all', overview: true, mse: true, idioms: true, form: true, deescList: true, deescCard: false, nurseCard: false, deescAfter: true, dischargeGuide: true, paper: 'A4', size: 'normal' } }
  };
  /* Nurse pocket card (0.18.0): phrase refs 'sectionId:index' from the six nurse sections (psych-phrases-7.js, -8.js),
     printed on A6 sides grouped as NURSE_SIDES. */
  const NURSE_CARD = ['nurse-admit:0', 'nurse-admit:5', 'nurse-admit:6', 'nurse-admit:12',
    'nurse-meds:0', 'nurse-meds:1', 'nurse-meds:9', 'nurse-meds:10',
    'nurse-daily:0', 'nurse-daily:5', 'nurse-daily:6', 'nurse-daily:16',
    'nurse-risk:1', 'nurse-risk:4', 'nurse-risk:6', 'nurse-risk:9',
    'nurse-calm:0', 'nurse-calm:3', 'nurse-calm:5', 'nurse-calm:13',
    'nurse-educ:1', 'nurse-educ:4', 'nurse-educ:22'];
  const NURSE_LABELS = { 'nurse-admit': 'Admission', 'nurse-meds': 'Medicines', 'nurse-daily': 'Sleep, meals, pain', 'nurse-risk': 'Safety check', 'nurse-calm': 'Calming', 'nurse-educ': 'Going home' };
  const NURSE_SIDES = [['nurse-admit', 'nurse-meds'], ['nurse-daily', 'nurse-risk'], ['nurse-calm', 'nurse-educ']];
  const isCard = (o) => !!(o.deescCard || o.nurseCard);
  const CARD_LABELS = ['Keep two arms\' length', 'Approach calmly', 'Introduce, orient, reassure', 'Short, simple words', 'Let them talk', 'Listen and reflect', 'Agree, or agree to disagree', 'Set clear limits', 'Reassure: we\'ll help you', 'Coach to stay in control', 'Offer choices', 'Offer medication'];
  const INST = () => (window.APP_META && APP_META.institution) || {};
  const ESC_LINE = () => (window.PSYCH_DEESC && PSYCH_DEESC.escLine) || 'If de-escalation fails, the charge nurse takes over and the physician on duty is notified at all times.';
  const SIGNS = () => (window.PSYCH_DEESC && PSYCH_DEESC.signatures) || ['Staff member', 'Charge nurse', 'Physician notified (date/shift/time)'];
  const CRISIS = () => { const c = (window.HOSPITAL && HOSPITAL.crisis) || {}; return c.number ? c.name + ' ' + c.number : 'Local crisis line'; };
  const DEFAULTS = { preset: 'full', english: 'show', register: 'f', furi: 'show', romaji: 'hide', notes: true, answers: false, title: 'Psychiatric Interview in ' + LANG.name + '', preparedFor: '' };

  function opts() {
    const saved = S().settings.handout || {};
    const base = Object.assign({}, DEFAULTS, PRESETS.full.o, { notes: true });
    return Object.assign(base, saved);
  }
  function saveOpts(o) { S().settings.handout = o; App.save(); }

  /* ---------- Content model ---------- */
  function ref(r) {
    const [sid, i] = r.split(':');
    const s = PSYCH_SECTIONS.find((x) => x.id === sid);
    return s && s.phrases[+i];
  }
  function phraseModel(p, o) {
    const main = o.register === 'c' ? p.c || p.f : p.f;
    const alt = o.register === 'both' && p.c && p.c !== p.f ? p.c : '';
    return { tl: main, alt, en: p.en, note: o.notes ? p.n || '' : '', answers: o.answers ? p.answers || [] : [] };
  }
  // "What is the patient saying?" items: [Japanese, what it says, what it may mean and what to ask].
  function idiomRows() { return (window.PSYCH_INTERP || []).map((r) => [r[0], r[1], r[2]]); }
  function build(o) {
    const steps = ALL_STEPS().filter((s) => o.steps.includes(s.id));
    const flowOrder = PSYCH_FLOW.filter((s) => o.steps.includes(s.id));
    const key = [];
    let n = 0;
    const body = steps.map((st) => {
      n++;
      const refs = o.depth === 'key' ? st.key : st.sections.flatMap((sid) => PSYCH_SECTIONS.find((x) => x.id === sid).phrases.map((_, i) => sid + ':' + i));
      const phrases = refs.map(ref).filter(Boolean).map((p, k) => { const m = phraseModel(p, o); m.num = n + '.' + (k + 1); key.push([m.num, m.en]); return m; });
      return { n, id: st.id, title: st.title, goal: st.goal, tip: o.notes ? st.tip || '' : '', branch: st.branch || '', phrases };
    });
    const mse = o.mse ? PSYCH_MSE.map((d) => ({
      domain: d.domain, assess: d.assess, note: o.notes ? d.note || '' : '',
      ask: d.ask.map(ref).filter(Boolean).map((p) => phraseModel(p, o)),
      terms: d.terms.map(ref).filter(Boolean).map((p) => ({ en: p.en, tl: o.register === 'c' ? p.c || p.f : p.f }))
    })) : null;
    return {
      title: o.title || DEFAULTS.title, preparedFor: o.preparedFor, date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      overview: o.overview ? (flowOrder.length ? flowOrder : steps).map((s) => ({ n: body.find((b) => b.id === s.id).n, title: s.title, goal: s.goal, branch: s.branch || '' })) : null,
      body, mse, idioms: o.idioms ? idiomRows() : null, form: o.form, deesc: o.deescList && window.PSYCH_DEESC ? {
        behaviors: PSYCH_DEESC.behaviors, escalation: PSYCH_DEESC.escalation, escLine: ESC_LINE(), signatures: SIGNS(),
        steps: PSYCH_DEESC.steps.map((st, i) => ({ n: i + 1, en: st.en, tip: o.notes ? st.tip : '', say: st.say.map(ref).filter(Boolean).map((p) => phraseModel(p, o)) }))
      } : null,
      discharge: o.dischargeGuide && window.PSYCH_DISCHARGE ? PSYCH_DISCHARGE.fields.filter((f) => f.kind !== 'sign').map((f) => ({ label: f.label, group: f.group, assess: o.notes ? f.assess : '', ask: f.refs.map(ref).filter(Boolean).map((p) => phraseModel(p, o)), picks: f.picks })) : null,
      deescAfter: o.deescAfter && window.PSYCH_DEESC ? PSYCH_DEESC.after.map((a) => ({ title: a.title, who: a.who, points: a.points, say: a.say.map(ref).filter(Boolean).map((p) => phraseModel(p, o)) })) : null,
      card: o.deescCard && window.PSYCH_DEESC ? {
        steps: PSYCH_DEESC.steps.map((st, i) => ({ n: i + 1, label: CARD_LABELS[i], say: phraseModel(ref(st.say[0]), o) })),
        behaviors: PSYCH_DEESC.behaviors.map((b) => b.en.replace(/ \(specify\).*$/, '')), escalation: PSYCH_DEESC.escalation, escLine: ESC_LINE(),
        debrief: (PSYCH_DEESC.debrief || []).map(ref).filter(Boolean).map((p) => phraseModel(p, o))
      } : null,
      ncard: o.nurseCard && (window.PSYCH_SECTIONS || []).some((x) => x.id === 'nurse-admit') ? NURSE_SIDES.map((ids) => ids.map((sid) => ({
        label: NURSE_LABELS[sid], say: NURSE_CARD.filter((r) => r.split(':')[0] === sid).map(ref).filter(Boolean).map((p) => phraseModel(p, Object.assign({}, o, { register: o.register === 'c' ? 'c' : 'f' })))
      }))) : null,
      key: o.english === 'key' ? key : null, o
    };
  }

  /* ---------- Pocket card (A6, two sides) ---------- */
  function cardHTML(m) {
    const c = m.card, showEn = m.o.english === 'show';
    const line = (st) => '<div class="hc-step"><span class="hc-n">' + st.n + '</span><div><b>' + esc(st.label) + '</b><div class="hc-tl">' + esc(st.say.tl) + '</div>' + (showEn ? '<div class="hc-en">' + esc(st.say.en) + '</div>' : '') + '</div></div>';
    const top = '<div class="hc-top"><b>DE-ESCALATION</b><span>' + esc(INST().short || '') + (INST().deescForm ? ' · ' + esc(INST().deescForm) : '') + '</span></div>';
    return '<div class="hc-wrap"><div class="hc-card">' + top + '<div class="hc-sub">Watch for: ' + esc(c.behaviors.join(', ')) + '</div>' + c.steps.slice(0, 6).map(line).join('') + '</div>' +
      '<div class="hc-card">' + top + c.steps.slice(6).map(line).join('') + '<div class="hc-esc"><b>If it fails:</b> ' + esc(c.escLine) + '</div>' +
      '<div class="hc-sub"><b>Debrief later:</b> ' + c.debrief.map((p) => esc(p.tl) + (showEn ? ' (' + esc(p.en) + ')' : '')).join(' · ') + '</div><div class="hc-foot">' + esc(CRISIS()) + ' · ' + esc(APP_META.name) + '</div></div></div>';
  }
  function nurseCardHTML(m) {
    const showEn = m.o.english === 'show', n = m.ncard.length;
    const top = (i) => '<div class="hc-top"><b>NURSE PHRASES</b><span>' + esc([INST().short || '', n > 1 ? (i + 1) + '/' + n : ''].filter(Boolean).join(' · ')) + '</span></div>';
    const line = (p) => '<div class="nc-line"><div class="hc-tl">' + esc(p.tl) + '</div>' + (showEn ? '<div class="hc-en">' + esc(p.en) + '</div>' : '') + '</div>';
    return '<div class="hc-wrap">' + m.ncard.map((side, i) => '<div class="hc-card nc-card">' + top(i) + side.map((g) => '<div class="nc-sec">' + esc(g.label) + '</div>' + g.say.map(line).join('')).join('') +
      (i === n - 1 ? '<div class="hc-esc"><b>Tell the doctor at once:</b> thoughts of suicide, a plan, violence, injury or a medical emergency.</div><div class="hc-foot">Draft, pending Nursing Service review · ' + esc(CRISIS()) + ' · ' + esc(APP_META.name) + '</div>' : '') + '</div>').join('') + '</div>';
  }
  /* ---------- HTML preview ---------- */
  function renderHTML(m) {
    const o = m.o, showEn = o.english === 'show', numbered = o.english === 'key';
    const ph = (p) => '<div class="ho-ph' + (showEn ? '' : ' one') + '">' + (numbered ? '<span class="ho-num">' + p.num + '</span>' : '') +
      '<div class="ho-tl"><b>' + esc(p.tl) + '</b>' + (p.alt ? '<i>' + esc(p.alt) + '</i>' : '') + (p.note ? '<small>' + esc(p.note) + '</small>' : '') +
      (p.answers.length ? '<small class="ho-ans">Patient may say: ' + p.answers.map((a) => esc(a[0]) + (showEn ? ' (' + esc(a[1]) + ')' : '')).join(' · ') + '</small>' : '') + '</div>' +
      (showEn ? '<div class="ho-en">' + esc(p.en) + '</div>' : '') + '</div>';
    if (m.card) return cardHTML(m);
    if (m.ncard) return nurseCardHTML(m);
    let h = '<header class="ho-head"><img src="icons/logo-96.png" alt=""><div><h1>' + esc(m.title) + '</h1><p>' + (m.preparedFor ? 'Prepared for ' + esc(m.preparedFor) + ' · ' : '') + esc(m.date) +
      ' · ' + (o.register === 'c' ? 'Plain form' : o.register === 'both' ? 'Polite form (です/ます), with the plain form in italics' : 'Polite form (です/ます)') + '</p></div></header>';
    if (m.overview) {
      h += '<section class="ho-sec"><h2>Interview flow</h2><ol class="ho-flow">' + m.overview.map((s) => '<li><span class="ho-n">' + s.n + '</span><div><b>' + esc(s.title) + '</b><small>' + esc(s.goal) + '</small>' + (s.branch ? '<em>→ ' + esc(s.branch) + '</em>' : '') + '</div></li>').join('') + '</ol></section>';
    }
    m.body.forEach((st) => {
      h += '<section class="ho-sec"><h2><span class="ho-n">' + st.n + '</span>' + esc(st.title) + '</h2><p class="ho-goal">' + esc(st.goal) + '</p>' +
        (st.tip ? '<p class="ho-tip">' + esc(st.tip) + '</p>' : '') + (st.branch ? '<p class="ho-branch">→ ' + esc(st.branch) + '</p>' : '') + st.phrases.map(ph).join('') + '</section>';
    });
    if (m.mse) {
      h += '<section class="ho-sec"><h2>Mental status exam</h2><div class="ho-tw"><table class="ho-mse"><tr><th>Domain</th><th>Assess</th><th>Ask</th><th>Describe (everyday words)</th></tr>' +
        m.mse.map((d) => '<tr><td><b>' + esc(d.domain) + '</b></td><td>' + esc(d.assess) + (d.note ? '<small>' + esc(d.note) + '</small>' : '') + '</td><td>' +
          (d.ask.map((p) => '<div><b>' + esc(p.tl) + '</b>' + (showEn ? '<small>' + esc(p.en) + '</small>' : '') + '</div>').join('') || '<span class="ho-muted">Observe</span>') + '</td><td>' +
          d.terms.map((t) => '<div>' + (showEn ? esc(t.en) + ': ' : '') + '<i>' + esc(t.tl) + '</i></div>').join('') + '</td></tr>').join('') + '</table></div></section>';
    }
    if (m.idioms && m.idioms.length) {
      h += '<section class="ho-sec"><h2>What the patient may be saying</h2><div class="ho-tw"><table><tr><th>Patient says</th>' + (showEn ? '<th>In English</th>' : '') + '<th>May mean; what to ask</th></tr>' +
        m.idioms.map((r) => '<tr><td><b>' + esc(r[0]) + '</b></td>' + (showEn ? '<td>' + esc(r[1]) + '</td>' : '') + '<td>' + esc(r[2]) + '</td></tr>').join('') + '</table></div></section>';
    }
    if (m.deesc) {
      const d = m.deesc;
      h += '<section class="ho-sec">' + (INST().name ? '<div class="ho-inst"><b>' + esc(INST().name.toUpperCase()) + '</b><br>' + esc(INST().address) + '</div>' : '') + '<h2>De-escalation checklist</h2><p class="ho-goal">Patient: ____________________ Age: _____ Sex: _____ Ward: ________</p>' +
        '<p class="ho-goal"><b>Tick the behavior presented by the patient.</b></p><div class="ho-beh">' + d.behaviors.map((b) => '<div><span class="ho-box"></span><b>' + esc(b.en) + '</b>' + (showEn ? '' : '') + '<small>' + esc(b.tl) + '</small></div>').join('') + '</div>' +
        '<div class="ho-steps">' + d.steps.map((st) => '<div class="ho-step"><span class="ho-box"></span><div><b>' + st.n + '. ' + esc(st.en) + '</b>' + (st.tip ? '<small>' + esc(st.tip) + '</small>' : '') +
          st.say.map((p) => '<div class="ho-say"><b>' + esc(p.tl) + '</b>' + (p.alt ? ' <i>' + esc(p.alt) + '</i>' : '') + (showEn ? '<span> ' + esc(p.en) + '</span>' : '') + '</div>').join('') + '</div></div>').join('') + '</div>' +
        '<p class="ho-branch">' + esc(d.escLine) + ' (' + d.escalation.map((e) => e[0] + ' = ' + e[1]).join('; ') + ')</p>' +
        '<p class="ho-goal">Remarks: ☐ Successful ☐ Partly successful ☐ Not successful, escalated ________________________</p><p class="ho-goal">' + d.signatures.map((x) => esc(x) + ': ______________').join(' ') + '</p>' + (INST().deescForm ? '<p class="ho-form-no">' + esc(INST().deescForm) + '</p>' : '') + '</section>';
    }
    if (m.discharge) {
      h += '<section class="ho-sec">' + (INST().name ? '<div class="ho-inst"><b>' + esc(INST().name.toUpperCase()) + '</b><br>' + esc(INST().address) + '</div>' : '') + '<h2>Discharge summary: interview guide</h2>' +
        m.discharge.map((f) => '<div class="ho-step" style="grid-template-columns:minmax(0,1fr)"><div><b>' + esc(f.label) + '</b> <span class="ho-muted">(' + esc(f.group) + ')</span>' + (f.assess ? '<small>' + esc(f.assess) + '</small>' : '') +
          f.ask.map((p) => '<div class="ho-say"><b>' + esc(p.tl) + '</b>' + (p.alt ? ' <i>' + esc(p.alt) + '</i>' : '') + (showEn ? '<span> ' + esc(p.en) + '</span>' : '') + '</div>').join('') +
          (f.picks.length ? '<small><b>Document as:</b> ' + f.picks.map(esc).join(' · ') + '</small>' : '') + '</div></div>').join('') +
        (INST().dischargeForm ? '<p class="ho-form-no">Guide for form ' + esc(INST().dischargeForm) + '</p>' : '') + '</section>';
    }
    if (m.deescAfter) {
      h += '<section class="ho-sec"><h2>If de-escalation fails</h2><p class="ho-goal">General guide. Hospital policy and physician orders decide what is done.</p>' + m.deescAfter.map((a, i) => '<div class="ho-step" style="grid-template-columns:minmax(0,1fr)"><div><b>' + (i + 1) + '. ' + esc(a.title) + '</b> <span class="ho-muted">(' + esc(a.who) + ')</span>' +
        a.points.map((t) => '<small>• ' + esc(t) + '</small>').join('') + a.say.map((p) => '<div class="ho-say"><b>' + esc(p.tl) + '</b>' + (p.alt ? ' <i>' + esc(p.alt) + '</i>' : '') + (showEn ? '<span> ' + esc(p.en) + '</span>' : '') + '</div>').join('') + '</div></div>').join('') + '</section>';
    }
    if (m.form) {
      h += '<section class="ho-sec"><h2>MSE write-up</h2><p class="ho-goal">Patient: ____________________ Date: __________ Language used: __________</p><div class="ho-tw"><table class="ho-form">' +
        PSYCH_MSE.map((d) => '<tr><td><b>' + esc(d.domain) + '</b></td><td></td></tr>').join('') + '<tr><td><b>Risk</b></td><td></td></tr></table></div></section>';
    }
    if (m.key) {
      h += '<section class="ho-sec"><h2>English key</h2><div class="ho-key">' + m.key.map(([k, e]) => '<div><span class="ho-num">' + k + '</span>' + esc(e) + '</div>').join('') + '</div></section>';
    }
    h += '<footer class="ho-foot">' + esc(APP_META.attribution) + ' · Practice phrasings for training, not validated instrument translations. · ' + CRISIS() + '</footer>';
    return h;
  }

  /* ---------- Page ---------- */
  const paperClass = (o) => 'ho-paper ho-' + (isCard(o) ? 'A6' : o.paper) + ' ho-size-' + o.size + (o.furi === 'hide' ? ' ho-nofu' : '') + (o.romaji === 'show' ? '' : ' ho-norj');
  V.handout = (el, p, q) => {
    if (!(window.PSYCH_SECTIONS || []).length) return App.notYet(el, 'Printable handout', 'The printable handouts', true);
    let o = opts();
    if (q.discharge) o = Object.assign({}, o, PRESETS.discharge.o, { preset: 'discharge', title: 'Discharge Summary Interview Guide' });
    if (q.deesccard) o = Object.assign({}, o, PRESETS.deesccard.o, { preset: 'deesccard', title: 'De-escalation Pocket Card' });
    if (q.nursecard) o = Object.assign({}, o, PRESETS.nursecard.o, { preset: 'nursecard', title: 'Nurse Pocket Card' });
    if (q.deesc) o = Object.assign({}, o, { preset: 'custom', steps: [], deescList: true, deescAfter: true, deescCard: false, nurseCard: false, overview: false, mse: false, idioms: false, form: false, title: 'De-escalation Checklist' });
    if (q.s) { // came from a section page: start with just that section
      const st = ALL_STEPS().find((x) => x.sections.includes(q.s));
      if (st) o = Object.assign({}, o, { preset: 'custom', steps: [st.id], depth: 'all', overview: false, mse: q.s.startsWith('mse'), idioms: false, form: false });
    }
    const chk = (k, label, hint) => '<label class="ho-chk"><input type="checkbox" data-o="' + k + '"' + (o[k] ? ' checked' : '') + '> <span>' + label + (hint ? '<small class="muted"> ' + hint + '</small>' : '') + '</span></label>';
    const seg = (k, items) => '<div class="seg" role="group">' + items.map(([v, t]) => '<button data-seg="' + k + '" data-v="' + v + '" class="' + (o[k] === v ? 'on' : '') + '">' + t + '</button>').join('') + '</div>';
    const draw = () => {
      el.innerHTML = '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / Handout</div><h1>Printable handout</h1>' +
        '<p class="muted">Build a reference sheet for the ward or clinic, then print it or save it as a PDF from the print window. Your choices are remembered on this device.</p>' +
        '<div class="card stack ho-controls">' +
        '<div><div class="eyebrow">Start from</div><div class="ho-presets">' + Object.entries(PRESETS).map(([k, pr]) => '<button class="ho-preset' + (o.preset === k ? ' on' : '') + '" data-preset="' + k + '"><b>' + pr.label + '</b><small>' + pr.desc + '</small></button>').join('') + '</div></div>' +
        '<div class="ho-grid">' +
        '<div><div class="eyebrow">English translation</div>' + seg('english', [['show', 'Show'], ['hide', 'Hide'], ['key', 'Answer key at end']]) + '<p class="small muted" style="margin:4px 0 0">Hide it to practice; use the answer key to self-test.</p></div>' +
        '<div><div class="eyebrow">Register</div>' + seg('register', [['f', 'Polite (です/ます)'], ['c', 'Plain'], ['both', 'Both']]) + '</div>' +
        '<div><div class="eyebrow">Furigana</div>' + seg('furi', [['show', 'Show'], ['hide', 'Hide']]) + '</div>' +
        '<div><div class="eyebrow">Romaji</div>' + seg('romaji', [['show', 'Show'], ['hide', 'Hide']]) + '<p class="small muted" style="margin:4px 0 0">Romaji makes the handout about a third longer.</p></div>' +
        '<div><div class="eyebrow">Phrases</div>' + seg('depth', [['key', 'Key phrases'], ['all', 'All phrases']]) + '</div>' +
        '<div><div class="eyebrow">Paper</div>' + seg('paper', [['A4', 'A4'], ['LETTER', 'Letter'], ['A5', 'A5 booklet']]) + '</div>' +
        '<div><div class="eyebrow">Text size</div>' + seg('size', [['small', 'Small'], ['normal', 'Normal'], ['large', 'Large']]) + '</div>' +
        '</div>' +
        '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('overview', 'Interview flow overview') + chk('mse', 'MSE table') + chk('idioms', 'What the patient may be saying (32 expressions)') + chk('form', 'Blank MSE write-up form') + chk('deescList', 'De-escalation checklist') + chk('deescAfter', 'If it fails: restraint, monitoring, debrief') + chk('dischargeGuide', 'Discharge summary guide') + chk('notes', 'Clinician tips and notes') + chk('answers', 'Likely patient answers') + '</div></div>' +
        '<details' + (o.preset === 'custom' ? ' open' : '') + '><summary><b>Sections</b> <span class="muted small">(' + o.steps.length + ' selected)</span></summary><div class="ho-chks" style="margin-top:8px">' +
        '<div class="small muted" style="grid-column:1/-1">Interview flow, in order</div>' + PSYCH_FLOW.map((s, i) => '<label class="ho-chk"><input type="checkbox" data-step="' + s.id + '"' + (o.steps.includes(s.id) ? ' checked' : '') + '> <span>' + (i + 1) + '. ' + esc(s.title) + '</span></label>').join('') +
        '<div class="small muted" style="grid-column:1/-1;margin-top:6px">Add-ons</div>' + PSYCH_FLOW_EXTRA.map((s) => '<label class="ho-chk"><input type="checkbox" data-step="' + s.id + '"' + (o.steps.includes(s.id) ? ' checked' : '') + '> <span>' + esc(s.title) + '</span></label>').join('') +
        '<div class="row" style="grid-column:1/-1"><button class="btn sm" data-all="1">Select all</button><button class="btn sm" data-all="0">Clear</button></div></div></details>' +
        '<div class="ho-grid"><label class="small">Title<input class="input" id="hoTitle" value="' + esc(o.title) + '"></label><label class="small">Prepared for (optional)<input class="input" id="hoFor" value="' + esc(o.preparedFor) + '" placeholder="e.g., First-year residents, Dept. of Psychiatry"></label></div>' +
        '<div class="row"><button class="btn primary" id="hoPrint">' + icons.book + ' Print or save as PDF</button><span class="muted small">In the print window, choose your printer or "Save as PDF", and the same paper size as here.</span></div></div>' +
        (isCard(o) ? '<p class="small muted" style="margin:4px 0 0">The pocket card always prints on A6 (105 × 148 mm), front and back. Print double-sided, trim, and laminate.</p>' : '') + '<h2 style="margin-top:18px">Preview</h2><div class="' + paperClass(o) + '" id="hoPaper"></div>';
      bind();
      preview();
    };
    const preview = () => {
      const paper = el.querySelector('#hoPaper');
      if (!o.steps.length && !o.mse && !o.deescList && !o.deescAfter && !o.deescCard && !o.nurseCard && !o.dischargeGuide) { paper.innerHTML = '<p class="muted">Choose at least one section or the MSE table.</p>'; return; }
      paper.innerHTML = renderHTML(build(o));
    };
    const update = (patch, redraw) => { o = Object.assign({}, o, patch); saveOpts(o); if (redraw) draw(); else preview(); };
    const bind = () => {
      el.querySelectorAll('[data-preset]').forEach((b) => (b.onclick = () => { const k = b.dataset.preset; const special = { deesccard: 'De-escalation Pocket Card', nursecard: 'Nurse Pocket Card', discharge: 'Discharge Summary Interview Guide' }; const auto = ['De-escalation Checklist', 'De-escalation Pocket Card', 'Nurse Pocket Card', 'Discharge Summary Interview Guide', DEFAULTS.title].includes(o.title); update(Object.assign({ notes: true }, PRESETS[k].o, { preset: k }, auto ? { title: special[k] || DEFAULTS.title } : {}), true); }));
      el.querySelectorAll('[data-seg]').forEach((b) => (b.onclick = () => {
        el.querySelectorAll('[data-seg="' + b.dataset.seg + '"]').forEach((x) => x.classList.toggle('on', x === b));
        const patch = { [b.dataset.seg]: b.dataset.v };
        if (['paper', 'size', 'furi', 'romaji'].includes(b.dataset.seg)) el.querySelector('#hoPaper').className = paperClass(Object.assign({}, o, patch));
        update(patch);
      }));
      el.querySelectorAll('[data-o]').forEach((c) => (c.onchange = () => update({ [c.dataset.o]: c.checked })));
      el.querySelectorAll('[data-step]').forEach((c) => (c.onchange = () => {
        const steps = ALL_STEPS().map((s) => s.id).filter((id) => (id === c.dataset.step ? c.checked : o.steps.includes(id)));
        update({ steps, preset: 'custom' });
        el.querySelector('details summary span').textContent = '(' + steps.length + ' selected)';
        el.querySelectorAll('.ho-preset').forEach((x) => x.classList.remove('on'));
      }));
      el.querySelectorAll('[data-all]').forEach((b) => (b.onclick = () => update({ steps: b.dataset.all === '1' ? ALL_STEPS().map((s) => s.id) : [], preset: 'custom' }, true)));
      el.querySelector('#hoTitle').oninput = (e) => update({ title: e.target.value });
      el.querySelector('#hoFor').oninput = (e) => update({ preparedFor: e.target.value });
      el.querySelector('#hoPrint').onclick = () => {
        if (!o.steps.length && !o.mse && !o.deescList && !o.deescAfter && !o.deescCard && !o.nurseCard && !o.dischargeGuide) { App.toast('Choose at least one section first.'); return; }
        App.printWith(isCard(o) ? 'A6' : o.paper, isCard(o) ? '6mm' : o.paper === 'A5' ? '10mm' : '14mm');
        App.activity(5);
      };
    };
    draw();
  };
  App.handoutBuild = build;
})();
