/* Picture print sheets and the body map (0.24.0). STUB from the scaffold: the print coder replaces the body of this file (keep the names).
   Data: window.PICTURE_SETS, window.PICTURE_ART, window.PICTURE_BODYMAP (js/data/picture-bodymap.js; PLAN-0.24 A6).
   API:
     App.picturePrint.sheet(el, set, q)   the Print tab of a set page (#/pictures/<id>?tab=print), called by V.pictures (js/pictures.js):
                                          numbered picture with blank lines, answer key on the next page; options furigana, English, paper.
     V.pictureBodymap(el, params, q)      #/pictures/bodymap: on screen the patient taps where it hurts; printable A4 handout
                                          (front and back, the questions and pain words, a plain 0 to 10 number line; no faces scale). */
(function () {
  const { esc } = App;
  const V = App.views;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const soon = '<div class="notice" style="margin-top:12px">Coming in this build.</div>';

  const sheet = (el, set) => { el.innerHTML = '<h2>Print sheet</h2>' + soon; };

  V.pictureBodymap = (el) => {
    el.innerHTML = crumb([['Picture words', '#/pictures'], ['Body map']]) + '<h1>Body map</h1>' +
      '<p class="muted">The patient points to where it hurts; print a handout with the questions and pain words.</p>' + soon;
  };

  App.picturePrint = { sheet };
})();
