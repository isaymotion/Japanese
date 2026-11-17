/* Listen and reply (#/reply, 0.25.0). Data: window.LISTEN_REPLY (js/data/listen-reply-1.js everyday, -2.js clinical;
   shape PLAN-0.25 A2): { id, lv, clin, who, say, en, opts: [{ ja, en }] ×4, a, why }.
   The learner HEARS `say` (played when the question opens and from "Play again"; its text stays hidden until answered)
   and chooses the natural reply among four Japanese buttons (furigana and romaji follow the reading-aid settings), each
   with its own small speaker. After answering: `say` with its speaker and English, each option's English (the right one
   marked), and `why`.
   Segs: Everyday / Clinical / All (state.settings.replyKind) and level All / N5 … N2 (state.settings.replyLv; only levels
   with items in that kind). 10 items a round.
   Score: state.done.reply['<everyday|clinical|all>:<lv|all>'] = best % (numbers only). Mistakes: state.done.reply.miss =
   item ids (newest last, at most 200; a right answer takes the id off) for a "Practise my mistakes" round.
   API: App.replyQs(kind, lv, n) → n questions ('all' or null for any kind / level); App.replyQs([ids]) → those items;
   shared question shape of App.drillRun (js/today.js). App.replyItems() = the valid items (QA). */
(function () {
  const { esc, pick, shuffle, icons } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LVS = ['N5', 'N4', 'N3', 'N2'];
  const KINDS = [['everyday', 'Everyday'], ['clinical', 'Clinical'], ['all', 'All']];
  const ROUND = 10, MISS_MAX = 200;
  const isStr = (x) => typeof x === 'string' && x.trim() !== '';
  const valid = (x) => x && isStr(x.id) && isStr(x.say) && Array.isArray(x.opts) && x.opts.length >= 2 && x.opts.every((o) => o && isStr(o.ja)) &&
    Number.isInteger(x.a) && x.a >= 0 && x.a < x.opts.length;
  const items = () => (Array.isArray(window.LISTEN_REPLY) ? window.LISTEN_REPLY : []).filter(valid);
  App.replyItems = items;
  const kindOf = (x) => (x.clin ? 'clinical' : 'everyday');
  const store = () => { const d = S().done; if (!d.reply || typeof d.reply !== 'object' || Array.isArray(d.reply)) d.reply = {}; return d.reply; };
  const missList = () => { const st = store(); if (!Array.isArray(st.miss)) st.miss = []; return st.miss; };
  const noteMiss = (id, ok) => { const m = missList(), at = m.indexOf(id); if (at >= 0) m.splice(at, 1); if (!ok) { m.push(id); if (m.length > MISS_MAX) m.splice(0, m.length - MISS_MAX); } };
  const bestOf = (k) => { const v = store()[k]; return typeof v === 'number' ? v : null; };

  const makeQ = (x) => {
    const order = shuffle(x.opts.map((o, k) => k));
    return {
      drill: 'reply', id: x.id, lv: x.lv, play: x.say,
      html: '<div class="listen-q rp-play"><button type="button" class="btn primary" data-act="play">' + icons.sound + ' Play again</button>' +
        '<span class="muted small">' + (isStr(x.who) ? esc(x.who) + ' says something to you. ' : '') + 'Listen, then choose the natural reply.</span></div>',
      opts: order.map((k) => ({ h: '<span class="tl">' + esc(x.opts[k].ja) + '</span>', ok: k === x.a, say: x.opts[k].ja, k })),
      fb: (ok, ch) => '<div class="rp-said"><span class="eyebrow">' + esc(isStr(x.who) ? x.who : 'They said') + '</span><div class="row rp-line"><span class="tl">' + esc(x.say) + '</span>' + App.sayBtn(x.say, x.say) + '</div>' +
          (isStr(x.en) ? '<div class="small">' + esc(x.en) + '</div>' : '') + '</div>' +
        '<ol class="rp-ens">' + order.map((k) => '<li class="' + (k === x.a ? 'rp-right' : ch && ch.k === k ? 'rp-chose' : '') + '"><span class="tl">' + esc(x.opts[k].ja) + '</span> <span class="small">' + esc(x.opts[k].en || '') + '</span>' +
          (k === x.a ? ' <span class="pill good">natural reply</span>' : ch && ch.k === k ? ' <span class="pill">your choice</span>' : '') + '</li>').join('') + '</ol>' +
        (isStr(x.why) ? '<div class="muted small">' + esc(x.why) + '</div>' : ''),
      done: (ok) => noteMiss(x.id, ok)
    };
  };
  App.replyQs = (kind, lv, n) => {
    const all = items();
    if (Array.isArray(kind)) return kind.map((id) => all.find((x) => x.id === id)).filter(Boolean).map(makeQ);
    const pool = all.filter((x) => (!kind || kind === 'all' || kindOf(x) === kind) && (!lv || lv === 'all' || x.lv === lv));
    return pick(pool, n || ROUND).map(makeQ);
  };

  V.reply = (el, p, q) => {
    q = q || {};
    const st = S().settings, all = items();
    const head = crumb([['Practice', '#/practice'], ['Listen and reply']]) + '<h1>Listen and reply</h1>' +
      '<p class="muted">Hear what someone says, then choose the natural reply: set phrases at work, offers and thanks, and on the ward what a patient, a relative or a nurse says to you. The words stay hidden until you answer.</p>';
    if (!all.length) { el.innerHTML = head + '<div class="notice info">No items yet. The listen-and-reply items are still being written.</div>'; return; }
    if (q.kind && KINDS.some((k) => k[0] === q.kind)) { st.replyKind = q.kind; App.save(); }
    let kind = KINDS.some((k) => k[0] === st.replyKind) ? st.replyKind : 'all';
    let lv = st.replyLv || 'all';
    el.innerHTML = head + '<div class="card stack" id="rpset"></div><div id="rpround" style="margin-top:14px"></div>';
    const set = el.querySelector('#rpset'), box = el.querySelector('#rpround');
    const ofKind = () => all.filter((x) => kind === 'all' || kindOf(x) === kind);
    const lvs = () => LVS.filter((v) => ofKind().some((x) => x.lv === v));
    const pool = () => ofKind().filter((x) => lv === 'all' || x.lv === lv);
    const misses = () => { const ms = new Set(missList()); return pool().filter((x) => ms.has(x.id)); };
    const keyOf = () => kind + ':' + lv;
    const seg = (label, attr, list, cur) => '<div class="seg" role="group" aria-label="' + label + '" data-norj>' + list.map(([k, t]) => '<button type="button" data-' + attr + '="' + k + '" aria-pressed="' + (cur === k) + '" class="' + (cur === k ? 'on' : '') + '">' + esc(t) + '</button>').join('') + '</div>';
    const drawSet = () => {
      if (lv !== 'all' && !lvs().includes(lv)) lv = 'all';
      const n = pool().length, nm = misses().length, b = bestOf(keyOf());
      set.innerHTML = seg('Kind', 'rk', KINDS.filter(([k]) => k === 'all' || all.some((x) => kindOf(x) === k)), kind) +
        seg('Level', 'rl', [['all', 'All']].concat(lvs().map((v) => [v, v])), lv) +
        '<p class="muted small" style="margin:0">' + n + ' item' + (n === 1 ? '' : 's') + ' at this choice' + (nm ? ', ' + nm + ' in your mistakes' : '') + (b != null ? '. Best ' + b + '%' : '') + '. ' + ROUND + ' a round; turn the sound on.</p>' +
        '<div class="row" style="flex-wrap:wrap"><button type="button" class="btn primary" id="rpgo"' + (n ? '' : ' disabled') + '>Start</button>' +
        (nm ? '<button type="button" class="btn" id="rpmiss">Practise my mistakes (' + nm + ')</button>' : '') + '</div>';
      const reset = () => { App.keyHandler = null; App.stopSpeech(); box.innerHTML = ''; drawSet(); };
      set.querySelectorAll('[data-rk]').forEach((x) => (x.onclick = () => { kind = x.dataset.rk; st.replyKind = kind; App.save(); reset(); }));
      set.querySelectorAll('[data-rl]').forEach((x) => (x.onclick = () => { lv = x.dataset.rl; st.replyLv = lv; App.save(); reset(); }));
      set.querySelector('#rpgo').onclick = () => run(pick(pool(), ROUND), keyOf());
      const mb = set.querySelector('#rpmiss'); if (mb) mb.onclick = () => run(pick(misses(), ROUND), null);
    };
    const run = (list, key) => {
      if (!list.length) return;
      App.drillRun(box, list.map(makeQ), {
        label: key ? '' : 'mistakes',
        onDone: (r, n, pct) => {
          let rec = '';
          if (key) { const old = bestOf(key); if (old == null || pct > old) { store()[key] = pct; if (old != null) rec = '<span class="pill good">New best</span>'; } }
          App.activity(Math.max(1, r)); App.save();
          drawSet();
          return rec + '<button type="button" class="btn primary" data-act="again">New round</button>' + (misses().length ? '<button type="button" class="btn" data-act="miss">Practise my mistakes</button>' : '') + '<a class="btn" href="#/progress">Progress</a>';
        },
        scoreNote: () => (key ? 'Best for this choice: ' + (bestOf(key) || 0) + '%.' : 'Mistakes rounds do not change your best score.'),
        bind: (c) => {
          const a = c.querySelector('[data-act=again]'); if (a) a.onclick = () => (key ? run(pick(pool(), ROUND), keyOf()) : run(pick(misses(), ROUND), null));
          const m = c.querySelector('[data-act=miss]'); if (m) m.onclick = () => run(pick(misses(), ROUND), null);
        }
      });
      box.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    App.onLeave = () => App.stopSpeech();
    drawSet();
  };
})();
