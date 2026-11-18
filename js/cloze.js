/* Fill the blank (#/cloze, 0.23.0). Data: window.GRAMMAR_CLOZE (js/data/grammar-cloze-*.js), by level or by lesson.
   Routes: #/cloze (Mixed tab), #/cloze?tab=lessons (By lesson), #/cloze?lv=N4 (sets the level), #/cloze?l=<lesson id>
   (a round on one lesson's items). Mixed draws across the chosen level (state.settings.clozeLv: all | N5 … N2), 10 or 20
   items (state.settings.clozeCount), optionally mistakes first (state.settings.clozeMissFirst).
   Best scores: state.done.cloze['<lv>'] or state.done.cloze['l:<lesson id>'] = best % (a number; V.progress shows them).
   Mistakes: state.done.cloze.miss = item ids (newest first, at most 200); a right answer takes the id off again.
   Only the correct sentence, App.fillBlank(s, a), is ever spoken; the sentence with a wrong option is never built.
   A "Practise this grammar" link goes on every lesson page that has items (App.lessonLinks). */
(function () {
  const { esc, shuffle, icons } = App;
  const V = App.views, S = () => App.state;
  const LVS = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const MISS_MAX = 200;

  // Items that can be shown: a sentence with one ＿, four options and the answer among them.
  const valid = (x) => x && typeof x.id === 'string' && typeof x.s === 'string' && x.s.indexOf('＿') >= 0 && Array.isArray(x.opts) && x.opts.length >= 2 && x.opts.indexOf(x.a) >= 0;
  const items = () => (Array.isArray(window.GRAMMAR_CLOZE) ? window.GRAMMAR_CLOZE : []).filter(valid);
  const lessonOf = (id) => (Array.isArray(window.LESSONS) ? LESSONS.find((l) => l.id === id) : null);
  const store = () => { const d = S().done; return d.cloze && typeof d.cloze === 'object' ? d.cloze : (d.cloze = {}); };
  const misses = () => { const c = store(); if (!Array.isArray(c.miss)) c.miss = []; return c.miss; };
  const bestOf = (key) => { const v = store()[key]; return typeof v === 'number' ? v : null; };
  const pctPill = (v) => (v == null ? '' : '<span class="pill ' + (v >= 80 ? 'good' : '') + '">' + v + '%</span>');

  // 0.25.0: questions for Today's practice (js/today.js, shared shape of App.drillRun). App.clozeQs([ids]) or App.clozeQs(lv, n);
  // the same sentence, options, feedback and mistakes bookkeeping as a round here (newest first; a right answer takes the id off).
  const noteMiss = (id, ok) => { const ms = misses(), at = ms.indexOf(id); if (at >= 0) ms.splice(at, 1); if (!ok) { ms.unshift(id); if (ms.length > MISS_MAX) ms.length = MISS_MAX; } };
  const drillQ = (x) => {
    const at = x.s.indexOf('＿'), before = x.s.slice(0, at).trim(), after = x.s.slice(at + 1).trim(), full = App.fillBlank(x.s, x.a), l = x.l ? lessonOf(x.l) : null;
    return { drill: 'cloze', id: x.id, lv: x.lv,
      html: '<div class="muted small">Choose the word that fills the blank.</div><div class="cz-sent tl" data-norj><span>' + esc(before) + '</span> <span class="cz-blank" aria-label="blank">＿＿</span> <span>' + esc(after) + '</span></div>',
      opts: shuffle(x.opts.slice()).map((o) => ({ h: '<span class="tl">' + esc(o) + '</span>', ok: o === x.a, t: o })),
      fb: (ok) => (ok ? '' : '<div>The answer is <span class="tl">' + esc(x.a) + '</span>.</div>') + '<div class="cz-full"><span class="tl">' + esc(full) + '</span>' + App.sayBtn(full, full) + '</div>' +
        (x.en ? '<div>' + esc(x.en) + '</div>' : '') + (x.why ? '<div class="muted small">' + esc(x.why) + '</div>' : '') +
        (l ? '<div class="small"><a href="#/lessons/' + encodeURIComponent(l.id) + '">Lesson: ' + esc(l.title) + '</a></div>' : ''),
      done: (ok) => noteMiss(x.id, ok) };
  };
  App.clozeQs = (lv, n) => {
    const all = items();
    if (Array.isArray(lv)) return lv.map((id) => all.find((x) => x.id === id)).filter(Boolean).map(drillQ);
    return App.pick(all.filter((x) => !lv || lv === 'all' || x.lv === lv), n || 10).map(drillQ);
  };

  App.lessonLinks = App.lessonLinks || [];
  App.lessonLinks.push((l) => (l && items().some((x) => x.l === l.id) ? '<a class="btn" href="#/cloze?l=' + encodeURIComponent(l.id) + '">' + icons.pen + ' Practise this grammar</a>' : ''));

  V.cloze = (el, p, q) => {
    q = q || {};
    const st = S().settings, all = items();
    const lvs = LVS.filter((lv) => all.some((x) => x.lv === lv));
    if (q.lv && (q.lv === 'all' || lvs.includes(q.lv))) { st.clozeLv = q.lv; App.save(); }
    if (q.l) return lessonRound(el, q.l);
    const tab = q.tab === 'lessons' ? 'lessons' : 'mixed';
    const head = crumb([['Practice', '#/practice'], ['Fill the blank']]) + '<h1>Fill the blank</h1>' +
      '<p class="muted">Choose the particle, form or ending that completes the sentence. After each answer you see the whole sentence, its meaning and why.</p>';
    if (!all.length) { el.innerHTML = head + '<div class="notice info">No items yet. The fill-the-blank sentences are still being written.</div>'; return; }
    let lv = st.clozeLv === 'all' || lvs.includes(st.clozeLv) ? st.clozeLv : (lvs[0] || 'all');
    const tabs = '<div class="seg" role="group" aria-label="View" data-norj style="margin-bottom:12px">' +
      [['mixed', 'Mixed', '#/cloze'], ['lessons', 'By lesson', '#/cloze?tab=lessons']].map(([k, t, h]) => '<a role="button" href="' + h + '" class="' + (tab === k ? 'on' : '') + '"' + (tab === k ? ' aria-current="page"' : '') + '>' + t + '</a>').join('') + '</div>';
    const lvSeg = () => '<div class="seg" role="group" aria-label="Level" data-norj>' + ['all'].concat(lvs).map((k) => '<button type="button" data-lv="' + k + '" aria-pressed="' + (lv === k) + '" class="' + (lv === k ? 'on' : '') + '">' + (k === 'all' ? 'All' : k) + '</button>').join('') + '</div>';
    el.innerHTML = head + tabs + '<div id="czbody"></div>';
    const body = el.querySelector('#czbody');
    const inLv = () => all.filter((x) => lv === 'all' || x.lv === lv);
    const bindLv = (draw) => body.querySelectorAll('[data-lv]').forEach((b) => (b.onclick = () => { lv = b.dataset.lv; st.clozeLv = lv; App.save(); draw(); }));

    const drawLessons = () => {
      const pool = inLv(), groups = new Map();
      pool.forEach((x) => { if (!groups.has(x.l || '')) groups.set(x.l || '', []); groups.get(x.l || '').push(x); });
      const order = Array.isArray(window.LESSONS) ? LESSONS.map((l) => l.id) : [];
      const keys = [...groups.keys()].sort((a, b) => { const x = order.indexOf(a), y = order.indexOf(b); return (x < 0 ? 1e6 : x) - (y < 0 ? 1e6 : y); });
      body.innerHTML = '<div class="card stack">' + lvSeg() + '<p class="muted small" style="margin:0">' + pool.length + ' sentences in ' + keys.length + ' lesson' + (keys.length === 1 ? '' : 's') + '. Tap a lesson for a round on its grammar.</p></div>' +
        '<div class="stack cz-lessons" style="margin-top:12px">' + keys.map((id) => {
          const l = lessonOf(id), n = groups.get(id).length, b = bestOf('l:' + id), lvl = l ? l.level : groups.get(id)[0].lv;
          return '<a class="tile cz-ltile" href="#/cloze?l=' + encodeURIComponent(id) + '"><div class="spread"><span class="row"><span class="pill">' + esc(lvl) + '</span><span class="muted small">' + n + ' sentence' + (n === 1 ? '' : 's') + '</span></span>' + (b != null ? '<span class="small">Best ' + pctPill(b) + '</span>' : '') + '</div>' +
            '<h3 style="margin-top:6px">' + esc(l ? l.title : (id || 'Other sentences')) + '</h3></a>';
        }).join('') + '</div>';
      bindLv(drawLessons);
    };

    const drawMixed = () => {
      const pool = inLv(), missSet = new Set(misses()), nMiss = pool.filter((x) => missSet.has(x.id)).length;
      const count = st.clozeCount === 20 ? 20 : 10, missFirst = !!st.clozeMissFirst, b = bestOf(lv);
      body.innerHTML = '<div class="card stack">' + lvSeg() +
        '<div class="row" style="flex-wrap:wrap;gap:8px"><div class="seg" role="group" aria-label="Number of questions" data-norj>' + [10, 20].map((k) => '<button type="button" data-n="' + k + '" aria-pressed="' + (count === k) + '" class="' + (count === k ? 'on' : '') + '">' + k + '</button>').join('') + '</div>' +
        '<label class="row cz-check"><input type="checkbox" id="czmf"' + (missFirst ? ' checked' : '') + '> Mistakes first</label></div>' +
        '<p class="muted small" style="margin:0">' + pool.length + ' sentences' + (lv === 'all' ? ' at all levels' : ' at ' + lv) + (nMiss ? ', ' + nMiss + ' in your mistakes' : '') + (b != null ? '. Best ' + b + '%' : '') + '.</p>' +
        '<div class="row" style="flex-wrap:wrap"><button class="btn primary" id="czgo">Start</button>' + (nMiss ? '<button class="btn" id="czmiss">Practise my mistakes (' + nMiss + ')</button>' : '') + '</div></div><div id="czround" style="margin-top:14px"></div>';
      bindLv(drawMixed);
      body.querySelectorAll('[data-n]').forEach((x) => (x.onclick = () => { st.clozeCount = +x.dataset.n; App.save(); drawMixed(); }));
      body.querySelector('#czmf').onchange = (ev) => { st.clozeMissFirst = ev.target.checked; App.save(); };
      const box = body.querySelector('#czround');
      body.querySelector('#czgo').onclick = () => {
        const ms = new Set(misses()), sh = shuffle(inLv());
        const list = st.clozeMissFirst ? sh.filter((x) => ms.has(x.id)).concat(sh.filter((x) => !ms.has(x.id))) : sh;
        round(box, list.slice(0, st.clozeCount === 20 ? 20 : 10), { key: lv, again: () => body.querySelector('#czgo').click(), done: drawMixed });
      };
      const mb = body.querySelector('#czmiss');
      if (mb) mb.onclick = () => { const ms = new Set(misses()); round(box, shuffle(inLv().filter((x) => ms.has(x.id))).slice(0, 20), { key: null, label: 'mistakes', done: drawMixed }); };
    };
    (tab === 'lessons' ? drawLessons : drawMixed)();
  };

  function lessonRound(el, id) {
    const l = lessonOf(id), list = items().filter((x) => x.l === id), title = l ? l.title : id;
    el.innerHTML = crumb([['Practice', '#/practice'], ['Fill the blank', '#/cloze?tab=lessons'], [title]]) + '<h1>Fill the blank</h1>' +
      '<div class="spread" style="flex-wrap:wrap;gap:8px;margin-bottom:12px"><div><div class="eyebrow">' + esc(l ? l.level + ' lesson' : 'Lesson') + '</div><h2 style="margin:2px 0 0">' + esc(title) + '</h2></div>' +
      (l ? '<a class="btn sm" href="#/lessons/' + encodeURIComponent(id) + '">' + icons.book + ' Open the lesson</a>' : '') + '</div><div id="czround"></div>';
    const box = el.querySelector('#czround');
    if (!list.length) { box.innerHTML = '<div class="notice info">No fill-the-blank sentences for this lesson yet. <a href="#/cloze?tab=lessons">See all lessons</a></div>'; return; }
    const go = () => round(box, shuffle(list).slice(0, 20), { key: 'l:' + id, again: go, lessonPage: true });
    go();
  }

  // One round. opts: key (score key or null), again(), done() (back to the setup), lessonPage (no lesson link per item).
  function round(box, qs, opts) {
    let i = 0, right = 0, answered = false;
    if (!qs.length) { box.innerHTML = '<div class="notice info">No items for this choice.</div>'; return; }
    const finish = () => {
      App.keyHandler = null;
      const pct = Math.round((100 * right) / qs.length), c = store();
      let rec = '';
      if (opts.key) { const old = bestOf(opts.key); if (old == null || pct > old) { c[opts.key] = pct; rec = old != null ? ' New best.' : ''; } }
      App.activity(Math.max(1, right)); App.save();
      const nMiss = misses().length;
      box.innerHTML = '<div class="card stack cz-done"><h3 style="margin:0">' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + qs.length + '</h3>' +
        '<div class="progress"><i style="width:' + pct + '%"></i></div><p class="muted small" style="margin:0">' + pct + '%.' + rec + (opts.key && bestOf(opts.key) != null ? ' Best ' + bestOf(opts.key) + '%.' : '') + (nMiss ? ' ' + nMiss + ' sentence' + (nMiss === 1 ? '' : 's') + ' in your mistakes.' : '') + '</p>' +
        '<div class="row" style="flex-wrap:wrap"><button class="btn primary" id="czagain">' + (opts.again ? 'New round' : 'Back') + '</button>' + (opts.done && opts.again ? '<button class="btn" id="czback">Change settings</button>' : '') + '<a class="btn" href="#/progress">Progress</a></div></div>';
      const ag = box.querySelector('#czagain'); ag.onclick = () => (opts.again ? opts.again() : opts.done && opts.done()); ag.focus();
      const bk = box.querySelector('#czback'); if (bk) bk.onclick = () => opts.done();
    };
    const draw = () => {
      if (i >= qs.length) return finish();
      answered = false;
      const x = qs[i], order = shuffle(x.opts.map((o, k) => k)), at = x.s.indexOf('＿');
      const before = x.s.slice(0, at).trim(), after = x.s.slice(at + 1).trim();
      box.innerHTML = '<div class="card stack cz-q" data-id="' + esc(x.id) + '"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + (opts.label === 'mistakes' ? ' · mistakes' : '') + '</span><span class="pill">' + esc(x.lv) + '</span></div>' +
        '<div class="progress" aria-hidden="true"><i style="width:' + Math.round((100 * i) / qs.length) + '%"></i></div>' +
        '<div class="cz-sent tl" data-norj><span>' + esc(before) + '</span> <span class="cz-blank" aria-label="blank">＿＿</span> <span>' + esc(after) + '</span></div>' +
        '<div class="opts cz-opts">' + order.map((k, n) => '<button class="opt tl" data-k="' + k + '"><span class="cz-num" aria-hidden="true">' + (n + 1) + '</span> ' + esc(x.opts[k]) + '</button>').join('') + '</div><div data-fb></div></div>';
      box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => choose(b)));
    };
    const choose = (b) => {
      if (answered) return;
      answered = true;
      const x = qs[i], k = +b.dataset.k, ok = x.opts[k] === x.a, ms = misses();
      if (ok) right++;
      const at = ms.indexOf(x.id);
      if (ok && at >= 0) ms.splice(at, 1);
      if (!ok) { if (at >= 0) ms.splice(at, 1); ms.unshift(x.id); if (ms.length > MISS_MAX) ms.length = MISS_MAX; }
      App.save();
      box.querySelectorAll('.opt').forEach((o) => { o.disabled = true; if (x.opts[+o.dataset.k] === x.a) o.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      const full = App.fillBlank(x.s, x.a), l = x.l ? lessonOf(x.l) : null;
      box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack cz-fb"><div><b>' + (ok ? LANG.quiz.right : 'Not quite.') + '</b>' + (ok ? '' : ' The answer is <span class="tl">' + esc(x.a) + '</span>.') + '</div>' +
        '<div class="cz-full"><span class="tl">' + esc(full) + '</span>' + App.sayBtn(full, full) + '</div>' +
        (x.en ? '<div>' + esc(x.en) + '</div>' : '') + (x.why ? '<div class="muted small">' + esc(x.why) + '</div>' : '') +
        (l && !opts.lessonPage ? '<div class="small"><a href="#/lessons/' + encodeURIComponent(l.id) + '">Lesson: ' + esc(l.title) + '</a></div>' : '') + '</div>' +
        '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
      const nx = box.querySelector('[data-act=next]');
      nx.onclick = () => { i++; draw(); };
      nx.focus();
    };
    App.keyHandler = (e) => {
      if (e.target && e.target.matches && e.target.matches('input,textarea,select')) return;
      if (/^[1-4]$/.test(e.key) && !answered) { const b = box.querySelectorAll('.opt')[+e.key - 1]; if (b) { e.preventDefault(); choose(b); } return; }
      if (e.key === 'Enter' && answered) {
        if (e.target && e.target.closest && e.target.closest('button,a')) return;   // the focused button handles Enter itself
        const nx = box.querySelector('[data-act=next]'); if (nx) { e.preventDefault(); nx.click(); }
      }
    };
    draw();
  }
})();
