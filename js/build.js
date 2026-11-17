/* Sentence builder (#/build, 0.23.0). Data: no new data: lesson .ex blocks, LESSON_EXTRA[id].more and DICT_EX, by level.
   Best scores: state.done.build['<lv>'] = best % (lv N5 | N4 | N3 | N2 | all); numbers only (the Progress page, V.progress in js/views.js, shows them under "Practice scores").
   SCAFFOLD: the view below only draws the heading; the module writer replaces its body. */
(function () {
  const { esc } = App;
  const V = App.views;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  V.build = (el) => {
    el.innerHTML = crumb([['Practice', '#/practice'], ['Sentence builder']]) + '<h1>Sentence builder</h1>' +
      '<div class="notice info">Coming in this build.</div>';
  };
})();
