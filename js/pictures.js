/* Picture words (#/pictures, #/pictures/<id>?tab=learn|identify|label|listen|print, 0.24.0). STUB from the scaffold: the pictures
   coder replaces the body of this file (keep the names below).
   Data: window.PICTURE_SETS (js/data/picture-sets-<group>.js), window.PICTURE_ART (pictures/art-<group>.js); shapes in PLAN-0.24 A1, A2.
   Scores: state.done.pictures['<mode>:<set id>'] = best % (numbers only; the Progress page, V.progress in js/views.js, shows
   identify / label / listen under "Practice scores"), plus state.done.pictures.miss = ['<set id>:<part id>', …] (newest last, at most 200).
   API used elsewhere:
     V.pictures(el, params, q)       params.id = set id or undefined (the list); q.tab; the print tab calls App.picturePrint.sheet
                                     (js/picture-print.js). #/pictures/bodymap is routed to V.pictureBodymap (js/picture-print.js).
     App.pictures.embed(el, setId)   mounts the tap-to-learn picture of one set inside a lesson (el = <div class="pic-embed"
                                     data-pic="<set id>">, called by App.mountPics in js/views.js after V.lesson renders, so also
                                     in print). An unknown set id leaves el empty and logs nothing.
     App.pictures.GROUPS             [[group id, English title], …] in menu order. */
(function () {
  const { esc } = App;
  const V = App.views;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const GROUPS = [['body', 'The body'], ['home', 'At home'], ['town', 'In town'], ['animals', 'Animals'], ['machines', 'Machines and things'],
    ['food', 'Food and drink'], ['clothes', 'Clothes and colours'], ['nature', 'Nature and weather'], ['daily', 'Feelings and daily life']];
  const sets = () => (Array.isArray(window.PICTURE_SETS) ? window.PICTURE_SETS.filter((s) => s && s.id) : []);
  const byId = (id) => sets().find((s) => s.id === id);
  const soon = '<div class="notice" style="margin-top:12px">Coming in this build.</div>';

  V.pictures = (el, p, q) => {
    p = p || {}; q = q || {};
    if (!p.id) {
      el.innerHTML = crumb([['Practice', '#/practice'], ['Picture words']]) + '<h1>Picture words</h1>' +
        '<p class="muted">Learn words from pictures: tap a part to hear it, then find it, label it and point to it.</p>' + soon +
        GROUPS.map(([g, t]) => { const ss = sets().filter((s) => s.group === g); return ss.length ? '<h2 style="margin-top:18px">' + esc(t) + '</h2><div class="grid">' +
          ss.map((s) => '<a class="tile" href="#/pictures/' + esc(s.id) + '"><span class="eyebrow">' + esc(s.lv || '') + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.intro || '') + '</p></a>').join('') + '</div>' : ''; }).join('') +
        '<p style="margin-top:18px"><a class="btn" href="#/pictures/bodymap">Body map</a></p>';
      return;
    }
    const s = byId(p.id);
    if (!s) { el.innerHTML = crumb([['Picture words', '#/pictures'], ['Not found']]) + '<h1>Picture set not found</h1><p><a href="#/pictures">All picture words</a></p>'; return; }
    el.innerHTML = crumb([['Picture words', '#/pictures'], [s.title]]) + '<h1>' + esc(s.title) + '</h1><p class="muted">' + esc(s.intro || '') + '</p><div id="picTab"></div>';
    const box = el.querySelector('#picTab');
    if (q.tab === 'print' && App.picturePrint && App.picturePrint.sheet) App.picturePrint.sheet(box, s, q);
    else box.innerHTML = soon;
  };

  // Lesson embed. The stub shows the set title and a link; the pictures coder mounts the real tap-to-learn picture here.
  const embed = (el, setId) => {
    if (!el) return;
    const s = byId(setId);
    if (!s) { el.innerHTML = ''; return; }
    el.innerHTML = '<div class="card stack"><span class="eyebrow">Picture</span><h3 style="margin:0">' + esc(s.title) + '</h3>' +
      '<a class="noprint" href="#/pictures/' + esc(s.id) + '">Open the picture</a></div>';
  };

  App.pictures = { embed, GROUPS, sets, byId };
})();
