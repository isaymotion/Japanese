/* Transform the sentence (#/transform, 0.23.0). Data: window.GRAMMAR_TRANSFORM (js/data/grammar-transform-*.js), choose or type.
   Best scores: state.done.transform['<lv>:<mode>'] = best % (mode choose | type); numbers only (the Progress page, V.progress in js/views.js, shows them under "Practice scores").
   SCAFFOLD: the view below only draws the heading; the module writer replaces its body. */
(function () {
  const { esc } = App;
  const V = App.views;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  V.transform = (el) => {
    el.innerHTML = crumb([['Practice', '#/practice'], ['Transform the sentence']]) + '<h1>Transform the sentence</h1>' +
      '<div class="notice info">Coming in this build.</div>';
  };
})();
