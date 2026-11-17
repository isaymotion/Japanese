/* Level review test (#/test, 0.23.0). Data: mixed, timed, N5 to N2; no new data.
   Best scores: state.done.test['<lv>'] = best % (lv N5 | N4 | N3 | N2); numbers only (the Progress page, V.progress in js/views.js, shows them under "Practice scores").
   SCAFFOLD: the view below only draws the heading; the module writer replaces its body. */
(function () {
  const { esc } = App;
  const V = App.views;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  V.leveltest = (el) => {
    el.innerHTML = crumb([['Practice', '#/practice'], ['Level review test']]) + '<h1>Level review test</h1>' +
      '<div class="notice info">Coming in this build.</div>';
  };
})();
