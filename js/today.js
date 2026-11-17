/* Today's practice (#/today, 0.25.0): one mixed round of 12 questions drawn from what the learner got wrong.
   Sources: the `miss` arrays of Fill the blank (state.done.cloze.miss, newest first), Transform the sentence (choose;
   done.transform.miss), Word pairs (done.pairs.miss), Sound-symbolic words (done.sounds.miss), the dictionary words of My
   mistakes (state.mistakes), Picture words (identify; done.pictures.miss = '<set>:<part>'), Signs (done.signs.miss),
   Find the mistake (done.errors.miss) and Listen and reply (done.reply.miss); all but cloze store the newest last.
   The most recent mistakes come first, at most 3 from one drill (round-robin over the drills). With fewer than 12
   mistakes the round is filled with new items at the learner's level (placement level, else N5) from Fill the blank,
   Find the mistake, Listen and reply and the vocabulary.
   Every question is built by its own drill's builder (App.clozeQs, App.transformQs, App.pairsQs, App.soundsQs, App.vocabQs,
   App.picturesQs, App.signsQs, App.errorsQs, App.replyQs: all return the shared question shape below) and its done(ok)
   updates that drill's own miss list (a right answer takes the id off).
   Score: state.done.today['YYYY-MM-DD'] = the day's best % (numbers only; the last 90 days are kept).
   Also here: App.drillRun(box, qs, o), the shared question runner used by Find the mistake and Listen and reply.
   Question shape: { drill, id, lv, tag, html, opts?: [{ h, ok, say? }], norj?, mount?(card, answer), play?, reveal?(card, ok, ch),
   fb(ok, ch) → html, done?(ok, ch) }. opts with `say` get their own speaker beside the button. play = notation spoken when the
   question opens and from any [data-act=play] button. [data-qtext] elements are shown once answered. */
(function () {
  const { esc, shuffle, icons } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LQ = () => (window.LANG && LANG.quiz) || { right: 'Right!', wrong: 'Not quite.', great: 'Great!', ok: 'Good.', keepGoing: 'Keep going.' };
  const ROUND = 12, PER_DRILL = 3, KEEP_DAYS = 90;

  /* ---------- The shared runner ---------- */
  // o: label (eyebrow suffix), onAnswer(q, ok), onDone(right, n) → html of the buttons, bind(card) after the score card,
  // scoreNote(pct) → extra html under the score.
  App.drillRun = (box, qs, o) => {
    o = o || {};
    let i = 0, right = 0, answered = false;
    const card = () => box.querySelector('.dr-q');
    const finish = () => {
      App.keyHandler = null;
      const n = qs.length, pct = n ? Math.round((100 * right) / n) : 0;
      const btns = o.onDone ? o.onDone(right, n, pct) : '';
      if (!box.isConnected) return;
      box.innerHTML = '<div class="card stack dr-done"><h3 style="margin:0">' + (pct >= 80 ? LQ().great : pct >= 50 ? LQ().ok : LQ().keepGoing) + ' ' + right + ' / ' + n + '</h3>' +
        '<div class="progress"><i style="width:' + pct + '%"></i></div><p class="muted small" style="margin:0">' + pct + '%.' + (o.scoreNote ? ' ' + o.scoreNote(pct) : '') + '</p>' +
        '<div class="row" style="flex-wrap:wrap">' + btns + '</div></div>';
      if (o.bind) o.bind(box.querySelector('.dr-done'));
      const f = box.querySelector('.dr-done .btn'); if (f) f.focus({ preventScroll: true });
    };
    const draw = () => {
      if (!box.isConnected) return;
      if (i >= qs.length) return finish();
      answered = false;
      const q = qs[i], withSay = q.opts && q.opts.some((x) => x.say);
      const optHtml = (x, k) => '<button type="button" class="opt' + (x.cls ? ' ' + x.cls : '') + '" data-k="' + k + '"' + (x.lab ? ' aria-label="' + esc(x.lab) + '"' : '') + '><span class="dr-k" aria-hidden="true">' + (k + 1) + '</span> ' + x.h + '</button>';
      box.innerHTML = '<div class="card stack dr-q" data-drill="' + esc(q.drill || '') + '" data-id="' + esc(q.id || '') + '">' +
        '<div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + (o.label ? ' · ' + esc(o.label) : '') + '</span>' +
        '<span class="row dr-tags">' + (q.tag ? '<span class="pill">' + esc(q.tag) + '</span>' : '') + (q.lv ? '<span class="pill lv">' + esc(q.lv) + '</span>' : '') + '</span></div>' +
        '<div class="progress" aria-hidden="true"><i style="width:' + Math.round((100 * i) / qs.length) + '%"></i></div>' + q.html +
        (q.opts ? '<div class="opts dr-opts' + (withSay ? ' dr-sayopts' : '') + (q.wide ? ' dr-wide' : '') + '"' + (q.norj ? ' data-norj' : '') + '>' +
          q.opts.map((x, k) => (withSay ? '<div class="dr-optrow">' + optHtml(x, k) + (x.say ? App.sayBtn(x.say, x.say) : '') + '</div>' : optHtml(x, k))).join('') + '</div>' : '') +
        '<div data-fb></div></div>';
      const c = card();
      if (q.play) {
        c.querySelectorAll('[data-act=play]').forEach((b) => (b.onclick = () => App.speak(q.play)));
        setTimeout(() => { if (c.isConnected && qs[i] === q && !answered) App.speak(q.play); }, 150);
      }
      c.querySelectorAll('.dr-opts .opt').forEach((b) => (b.onclick = () => { const x = q.opts[+b.dataset.k]; answer(!!x.ok, x, b); }));
      if (q.mount) q.mount(c, (ok, ch, el) => answer(!!ok, ch, el));
    };
    const answer = (ok, ch, el) => {
      if (answered) return;
      answered = true;
      const q = qs[i], c = card();
      if (!c) return;
      if (ok) right++;
      c.querySelectorAll('.dr-opts .opt').forEach((x) => { x.disabled = true; if (q.opts[+x.dataset.k].ok) x.classList.add('right'); });
      if (!ok && el && el.classList) el.classList.add('wrong');
      c.querySelectorAll('[data-qtext]').forEach((x) => (x.hidden = false));
      c.classList.add('answered');
      try { if (q.done) q.done(ok, ch); } catch (e) { console.error(e); }
      App.save();
      if (o.onAnswer) o.onAnswer(q, ok);
      try { if (q.reveal) q.reveal(c, ok, ch); } catch (e) { console.error(e); }
      c.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack dr-fb"><b>' + esc(ok ? LQ().right : LQ().wrong) + '</b>' + (q.fb ? q.fb(ok, ok ? null : ch) : '') + '</div>' +
        '<div class="row" style="margin-top:10px"><button type="button" class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
      const nx = c.querySelector('[data-act=next]');
      nx.onclick = () => { App.stopSpeech(); i++; draw(); const t = box.getBoundingClientRect().top; if (t < 0) box.scrollIntoView({ block: 'start' }); };
      nx.focus({ preventScroll: true });
    };
    const keys = (ev) => {
      if (!box.isConnected || ev.altKey || ev.ctrlKey || ev.metaKey || (ev.target.matches && ev.target.matches('input,textarea,select'))) return;
      const c = card(); if (!c) return;
      if (!answered && /^[1-9]$/.test(ev.key)) {
        const b = c.querySelector('.dr-opts .opt[data-k="' + (+ev.key - 1) + '"]:not(:disabled)');
        if (b) { ev.preventDefault(); b.click(); }
        return;
      }
      if (answered && ev.key === 'Enter' && !(ev.target.closest && ev.target.closest('button,a,[role=button]'))) { const nx = c.querySelector('[data-act=next]'); if (nx) { ev.preventDefault(); nx.click(); } }
    };
    App.keyHandler = keys;
    box.drQs = qs; box.drAt = () => i;   // for QA
    if (!qs.length) { box.innerHTML = '<div class="notice info">No questions for this choice yet.</div>'; return; }
    draw();
  };

  /* ---------- Sources ---------- */
  const arr = (x) => (Array.isArray(x) ? x : []);
  const missOf = (k) => { const d = S().done || {}; return d[k] && typeof d[k] === 'object' ? arr(d[k].miss) : []; };
  const isDict = (id) => typeof id === 'string' && /^d/.test(id) && App.dictById && App.dictById[id];
  // [key, label, recent-first ids, builder(ids) → questions]
  const SOURCES = () => [
    ['cloze', 'Fill the blank', () => missOf('cloze').slice(), (ids) => (App.clozeQs ? App.clozeQs(ids) : [])],
    ['errors', 'Find the mistake', () => missOf('errors').slice().reverse(), (ids) => (App.errorsQs ? App.errorsQs(ids) : [])],
    ['reply', 'Listen and reply', () => missOf('reply').slice().reverse(), (ids) => (App.replyQs ? App.replyQs(ids) : [])],
    ['vocab', 'Vocabulary', () => arr(S().mistakes).filter(isDict).reverse(), (ids) => (App.vocabQs ? App.vocabQs(ids) : [])],
    ['transform', 'Transform', () => missOf('transform').slice().reverse(), (ids) => (App.transformQs ? App.transformQs(ids) : [])],
    ['pairs', 'Word pairs', () => missOf('pairs').slice().reverse(), (ids) => (App.pairsQs ? App.pairsQs(ids) : [])],
    ['sounds', 'Sound words', () => missOf('sounds').slice().reverse(), (ids) => (App.soundsQs ? App.soundsQs(ids) : [])],
    ['pictures', 'Picture words', () => missOf('pictures').slice().reverse(), (ids) => (App.picturesQs ? App.picturesQs(ids) : [])],
    ['signs', 'Signs', () => missOf('signs').slice().reverse(), (ids) => (App.signsQs ? App.signsQs(ids) : [])]
  ];
  const safe = (fn) => { try { const r = fn(); return Array.isArray(r) ? r.filter(Boolean) : []; } catch (e) { console.error(e); return []; } };
  // Up to PER_DRILL questions from each drill's mistakes, newest first (ids whose item is gone are skipped).
  const fromMistakes = () => SOURCES().map(([k, label, ids, build]) => {
    const list = safe(ids), out = [];
    for (let at = 0; at < list.length && out.length < PER_DRILL; at += PER_DRILL) out.push(...safe(() => build(list.slice(at, at + PER_DRILL))));
    return out.slice(0, PER_DRILL).map((q) => Object.assign(q, { tag: q.tag || label, src: 'miss', drill: q.drill || k }));
  });
  const robin = (lists, n) => { const out = []; for (let r = 0; out.length < n && lists.some((l) => l.length > r); r++) lists.forEach((l) => { if (out.length < n && l[r]) out.push(l[r]); }); return out; };
  const userLevel = () => { const lv = String(S().level || ''); return /^N[2-5]/.test(lv) ? lv.slice(0, 2) : 'N5'; };
  const fill = (n, have) => {
    if (n <= 0) return [];
    const lv = userLevel(), seen = new Set(have.map((q) => q.drill + ':' + q.id));
    const lists = [
      safe(() => App.clozeQs ? App.clozeQs(lv, n) : []).map((q) => Object.assign(q, { tag: 'Fill the blank' })),
      safe(() => App.errorsQs ? App.errorsQs(lv, n) : []).map((q) => Object.assign(q, { tag: 'Find the mistake' })),
      safe(() => App.replyQs ? App.replyQs('all', lv, n) : []).map((q) => Object.assign(q, { tag: 'Listen and reply' })),
      safe(() => App.vocabQs ? App.vocabQs(lv, n) : []).map((q) => Object.assign(q, { tag: 'Vocabulary' }))
    ].map((l) => l.filter((q) => !seen.has(q.drill + ':' + q.id)).map((q) => Object.assign(q, { src: 'new' })));
    return robin(lists, n);
  };
  const buildRound = () => {
    const miss = robin(fromMistakes(), ROUND);
    return miss.concat(fill(ROUND - miss.length, miss));
  };
  const countMistakes = () => SOURCES().reduce((a, [, , ids]) => a + safe(ids).length, 0);
  App.todayRound = buildRound;          // for QA
  App.todayMistakes = countMistakes;

  /* ---------- Score ---------- */
  const store = () => { const d = S().done; if (!d.today || typeof d.today !== 'object' || Array.isArray(d.today)) d.today = {}; return d.today; };
  const dayOf = (back) => { const d = new Date(Date.now() - back * 864e5); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const todayBest = () => { const v = store()[App.today()]; return typeof v === 'number' ? v : null; };
  App.todayBest = todayBest;
  const saveDay = (pct) => {
    const st = store(), k = App.today();
    st[k] = Math.max(pct, typeof st[k] === 'number' ? st[k] : 0);
    const oldest = dayOf(KEEP_DAYS - 1);
    Object.keys(st).forEach((d) => { if (/^\d{4}-\d{2}-\d{2}$/.test(d) && d < oldest) delete st[d]; });
    return st[k];
  };

  /* ---------- Page ---------- */
  V.today = (el) => {
    const draw = () => {
      const nm = countMistakes(), b = todayBest(), lv = userLevel();
      const days = Object.keys(store()).filter((d) => typeof store()[d] === 'number').sort().reverse();
      el.innerHTML = crumb([['Practice', '#/practice'], ["Today's practice"]]) + "<h1>Today's practice</h1>" +
        '<p class="muted">One mixed round of ' + ROUND + ' questions from what you got wrong in the drills, newest first and at most ' + PER_DRILL + ' from one drill. When there are fewer mistakes, new questions at your level (' + esc(lv) + ') fill the round. A right answer takes the item off that drill\'s mistakes.</p>' +
        '<div class="card stack td-set"><div class="spread" style="flex-wrap:wrap;gap:8px"><span>' + (nm ? '<b>' + nm + '</b> mistake' + (nm === 1 ? '' : 's') + ' waiting in the drills.' : 'No mistakes waiting: this round is all new questions.') + '</span>' +
        (b != null ? '<span class="pill ' + (b >= 80 ? 'good' : '') + ' td-best">Done today: ' + b + '%</span>' : '') + '</div>' +
        '<div class="row" style="flex-wrap:wrap"><button type="button" class="btn primary" id="tdgo">' + (b != null ? 'Go again' : 'Start') + '</button><a class="btn" href="#/progress">Progress</a></div>' +
        (days.length > 1 ? '<p class="muted small" style="margin:0">Recent days: ' + days.slice(0, 7).map((d) => esc(d.slice(5)) + ' ' + store()[d] + '%').join(' · ') + '</p>' : '') + '</div>' +
        '<div id="tdround" style="margin-top:14px"></div>';
      const box = el.querySelector('#tdround');
      el.querySelector('#tdgo').onclick = () => start(box);
    };
    const start = (box) => {
      const qs = buildRound();
      if (!qs.length) { box.innerHTML = '<div class="notice info">There is nothing to practise yet: the drills have no items at your level. Try a drill from the Practice page first.</div>'; return; }
      App.drillRun(box, qs, {
        onDone: (r, n, pct) => {
          const best = saveDay(pct);
          App.activity(10); App.save();
          const tb = el.querySelector('.td-best'), set = el.querySelector('.td-set .spread');
          if (tb) tb.textContent = 'Done today: ' + best + '%'; else if (set) set.insertAdjacentHTML('beforeend', '<span class="pill ' + (best >= 80 ? 'good' : '') + ' td-best">Done today: ' + best + '%</span>');
          const go = el.querySelector('#tdgo'); if (go) go.textContent = 'Go again';
          return '<button type="button" class="btn primary" data-act="again">Go again</button><a class="btn" href="#/practice">Practice</a><a class="btn" href="#/progress">Progress</a>';
        },
        scoreNote: () => 'Done today: ' + todayBest() + '%.',
        bind: (c) => { const a = c.querySelector('[data-act=again]'); if (a) a.onclick = () => { draw(); start(el.querySelector('#tdround')); }; }
      });
      box.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    draw();
  };
})();
