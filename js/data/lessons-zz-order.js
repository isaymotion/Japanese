/* Lesson order (0.23.0). Loaded AFTER every lessons-*.js and lesson-extra-*.js file and before js/core.js, so every
   page (lessons list, units, previous / next, placement, progress counts, search, listening sentences) sees one order.
   Not content: no Japanese here.
   A lesson with `after: '<lesson id>'` moves to directly after that lesson. Several lessons with the same `after`:
   the `review: true` ones first, then the others in file order. Chains resolve (a lesson placed after a lesson that
   itself moved follows it to its new place). A lesson whose `after` names no lesson (or itself) stays where it is.
   The array is re-sorted IN PLACE (window.LESSONS stays the same object); running it twice gives the same order.
   Guarded so it loads alone (tools/check-ja.js). */
(function (root) {
  const L = root.LESSONS;
  if (!Array.isArray(L) || !L.length) return;
  const byId = new Map();
  L.forEach((l) => { if (l && l.id && !byId.has(l.id)) byId.set(l.id, l); });
  const moves = (l) => !!(l && l.after && l.after !== l.id && byId.has(l.after));
  const kids = new Map();   // anchor id -> lessons placed after it, reviews first, then file order
  L.forEach((l) => { if (moves(l)) { if (!kids.has(l.after)) kids.set(l.after, []); kids.get(l.after).push(l); } });
  kids.forEach((ls) => ls.sort((a, b) => (b.review ? 1 : 0) - (a.review ? 1 : 0) || L.indexOf(a) - L.indexOf(b)));
  const out = [], seen = new Set();
  const emit = (l) => {
    if (seen.has(l)) return;
    seen.add(l); out.push(l);
    (kids.get(l.id) || []).forEach(emit);
  };
  L.forEach((l) => { if (!moves(l)) emit(l); });
  L.forEach((l) => { if (!seen.has(l)) emit(l); });   // only a cycle of `after`s gets here: keep those lessons, in file order
  L.length = 0;
  out.forEach((l) => L.push(l));
})(typeof window !== 'undefined' ? window : globalThis);
