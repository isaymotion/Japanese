/* Signs and buttons (#/signs?tab=learn|quiz|panels, 0.24.0). STUB from the scaffold: the signs coder replaces the body of this file.
   Data: window.SIGNS (js/data/signs.js), window.SIGN_PANELS (js/data/signs-panels.js); shapes in PLAN-0.24 A3.
   Scores: state.done.signs['quiz:<group id | all>:<mode>'] and state.done.signs['panel:<panel id>'] = best % (numbers only; the
   Progress page, V.progress in js/views.js, shows them under "Practice scores"; mode names are shown as written, e.g. ja-en, en-ja).
   API: V.signs(el, params, q). */
(function () {
  const { esc } = App;
  const V = App.views;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  V.signs = (el) => {
    el.innerHTML = crumb([['Practice', '#/practice'], ['Signs and buttons']]) + '<h1>Signs and buttons</h1>' +
      '<p class="muted">Read the signs in a hospital, a station and the street, and the buttons on machines.</p>' +
      '<div class="notice" style="margin-top:12px">Coming in this build.</div>';
  };
})();
