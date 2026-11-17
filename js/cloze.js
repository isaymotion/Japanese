/* Fill the blank (#/cloze, 0.23.0). Data: window.GRAMMAR_CLOZE (js/data/grammar-cloze-*.js), by level or by lesson.
   Best scores: state.done.cloze['<lv>'] or state.done.cloze['l:<lesson id>'] = best %. Speak and record the filled sentence with App.fillBlank(s, a); numbers only (the Progress page, V.progress in js/views.js, shows them under "Practice scores").
   SCAFFOLD: the view below only draws the heading; the module writer replaces its body. */
(function () {
  const { esc } = App;
  const V = App.views;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  V.cloze = (el) => {
    el.innerHTML = crumb([['Practice', '#/practice'], ['Fill the blank']]) + '<h1>Fill the blank</h1>' +
      '<div class="notice info">Coming in this build.</div>';
  };
})();
