/* Nurse view helper (0.19.0), shared by De-escalation, Discharge, Mood episode and the MSE interviewer sheet.
   Data: window.PSYCH_NURSE_TOOLS[key] = { notice, steps:[{ title, lines:[{ tl (polite), c (plain), en, n? }] }], escalate }.
   Use:  const NS = App.nurseScript('deesc', { intro: '…', card: true });
     NS.has()        data has steps (the switch shows only then)
     NS.on()         settings.role is 'nurse' and the data has steps
     NS.row()        Resident / Nurse switch, plus register switch and English checkbox in the Nurse view ('' without data)
     NS.view()       intro, notice, numbered step cards, escalate, pocket-card link
     NS.bind(el, redraw)  wires the switches; keeps the scroll position; returns NS.on() so callers can stop binding
   The register setting (settings.register 'f' | 'c') picks which form leads; settings.nurseEn shows the English. */
(function () {
  const { esc } = App;
  const S = () => App.state;
  const main = (p) => (S().settings.register === 'c' ? p.c || p.tl : p.tl);
  const alt = (p) => (S().settings.register === 'c' ? p.tl : p.c);
  const line = (p, showEn) => '<div class="dz-line"><div><div class="tl dz-tl">' + esc(main(p)) + '</div>' + (alt(p) && alt(p) !== main(p) ? '<div class="tl small muted">' + esc(alt(p)) + '</div>' : '') +
    (showEn ? '<div class="small muted">' + esc(p.en) + '</div>' : '') + (p.n ? '<div class="nt-n">' + esc(p.n) + '</div>' : '') + '</div>' + App.sayBtn(main(p)) + '</div>';

  App.nurseScript = (key, opts) => {
    opts = opts || {};
    const data = () => (window.PSYCH_NURSE_TOOLS || {})[key];
    const has = () => !!(data() && (data().steps || []).length);
    const on = () => S().settings.role === 'nurse' && has();
    const row = () => {
      if (!has()) return '';
      const nurse = on(), reg = S().settings.register || 'f';
      return '<div class="row nt-row"><div class="seg" role="group" aria-label="Role"><button class="' + (!nurse ? 'on' : '') + '" data-role="resident" aria-pressed="' + !nurse + '">Resident</button><button class="' + (nurse ? 'on' : '') + '" data-role="nurse" aria-pressed="' + nurse + '">Nurse</button></div>' +
        (nurse ? '<div class="seg" role="group" aria-label="Register">' + [['f', LANG.registers.f.short], ['c', LANG.registers.c.short]].map(([k, t]) => '<button data-nreg="' + k + '" class="' + (reg === k ? 'on' : '') + '" aria-pressed="' + (reg === k) + '">' + t + '</button>').join('') + '</div>' +
          '<label class="ho-chk"><input type="checkbox" id="ntEn"' + (S().settings.nurseEn !== false ? ' checked' : '') + '> <span>English</span></label>' : '') + '</div>';
    };
    const view = () => {
      const d = data(), showEn = S().settings.nurseEn !== false;
      return (opts.intro ? '<p class="muted">' + esc(opts.intro) + '</p>' : '') +
        (d.notice ? '<div class="notice">' + esc(d.notice) + '</div>' : '') + '<div class="stack" style="margin-top:12px">' +
        d.steps.map((s, i) => '<div class="card dz-step nt-step"><h2 style="margin:0 0 6px">' + (i + 1) + '. ' + esc(s.title) + '</h2><div class="stack" style="gap:6px">' + (s.lines || []).map((p) => line(p, showEn)).join('') + '</div></div>').join('') + '</div>' +
        (d.escalate ? '<div class="notice info" style="margin-top:12px"><b>Escalate.</b> ' + esc(d.escalate) + '</div>' : '') +
        (opts.card === false ? '' : '<p style="margin-top:12px"><a class="btn sm" href="#/psych/handout?nursecard=1">Nurse pocket card (print) →</a></p>');
    };
    const bind = (el, redraw) => {
      const keep = () => { const y = window.scrollY; redraw(); window.scrollTo(0, y); };
      el.querySelectorAll('[data-role]').forEach((b) => (b.onclick = () => { S().settings.role = b.dataset.role; App.save(); App.stopSpeech(); keep(); }));
      el.querySelectorAll('[data-nreg]').forEach((b) => (b.onclick = () => { S().settings.register = b.dataset.nreg; App.save(); keep(); }));
      const ne = el.querySelector('#ntEn'); if (ne) ne.onchange = () => { S().settings.nurseEn = ne.checked; App.save(); keep(); };
      return on();
    };
    return { has, on, row, view, bind, line };
  };
})();
