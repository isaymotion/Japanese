/* Word pairs (#/pairs, 0.23.0). Data: window.WORD_PAIRS (js/data/word-pairs-*.js); match and quiz.
   Best scores: state.done.pairs['<mode>:<lv>'] = best % (mode match | quiz; lv N5 | N4 | N3 | N2 | all); numbers only (the Progress page, V.progress in js/views.js, shows them under "Practice scores").
   SCAFFOLD: the view below only draws the heading; the module writer replaces its body. */
(function () {
  const { esc } = App;
  const V = App.views;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  V.pairs = (el) => {
    el.innerHTML = crumb([['Practice', '#/practice'], ['Word pairs']]) + '<h1>Word pairs</h1>' +
      '<div class="notice info">Coming in this build.</div>';
  };
})();
