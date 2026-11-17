/* Sound-symbolic words (#/sounds, 0.23.0). Data: window.SOUND_WORDS (js/data/sound-words.js); learn, quiz, match.
   Best scores: state.done.sounds['<mode>:<group id or all>'] = best % (mode quiz | match); numbers only (the Progress page, V.progress in js/views.js, shows them under "Practice scores").
   SCAFFOLD: the view below only draws the heading; the module writer replaces its body. */
(function () {
  const { esc } = App;
  const V = App.views;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  V.sounds = (el) => {
    el.innerHTML = crumb([['Practice', '#/practice'], ['Sound-symbolic words']]) + '<h1>Sound-symbolic words</h1>' +
      '<div class="notice info">Coming in this build.</div>';
  };
})();
