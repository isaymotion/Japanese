/* Signs and buttons (#/signs?tab=learn|quiz|panels, 0.24.0). Data: window.SIGNS (js/data/signs.js), window.SIGN_PANELS
   (js/data/signs-panels.js); shapes in PLAN-0.24 A3.
   Learn: group seg (All or one group; the group note on top); each sign is drawn as a sign board in CSS by its `style`
   (green, red, blue, yellow, plain), in big plain text without furigana, like a real sign (the board is data-noja, so
   ja.js leaves it alone). Tap a board: the reading (furigana), English, note and a speaker. "Always show readings" switch
   (state.settings.signsRead). Quiz: group seg, mode seg ja-en "Sign → meaning" (4 English options) / en-ja
   "Meaning → sign" (4 boards), level seg (only levels that exist), 10 / 20 per round (state.settings.signsN); distractors
   from the same group first. Panels: list; a panel page (&p=<id>) draws the rows of controls as a device face; Explore
   (tap any control: reading, English, speaker) and Tasks (tap the right control; a wrong tap shakes and the right one is
   shown; `why` after each; lamps are not tappable in tasks).
   Scores: state.done.signs['quiz:<group id | all>:<ja-en | en-ja>'] and ['panel:<panel id>'] = best % (numbers only; the
   Progress page reads them). state.done.signs.miss = sign ids (last 200) for a "Practise my mistakes" round; a right
   answer takes the sign off. Settings: signsG (group), signsLv, signsM (mode), signsN, signsRead.
   Deep links: #/signs?tab=learn|quiz|panels, &g=<group id>, &p=<panel id>.
   API: V.signs(el, params, q); App.signBoard(sign, extraClass) → the board HTML (plain text, no furigana). */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LVS = ['N5', 'N4', 'N3'];
  const TABS = [['learn', 'Learn'], ['quiz', 'Quiz'], ['panels', 'Panels']];
  const MODES = [['ja-en', 'Sign → meaning'], ['en-ja', 'Meaning → sign']];
  const STYLES = ['green', 'red', 'blue', 'yellow', 'plain'];
  const KIND = { btn: 'button', lamp: 'lamp (status light)', dial: 'dial' };
  const MISS_MAX = 200;
  const lc = (s) => String(s || '').trim().toLowerCase();

  /* ---------- Data (copes with missing, empty or partial globals) ---------- */
  const src = () => (window.SIGNS && typeof window.SIGNS === 'object' ? window.SIGNS : {});
  const groupsAll = () => (Array.isArray(src().groups) ? src().groups : []).filter((g) => g && g.id);
  const signsAll = () => (Array.isArray(src().signs) ? src().signs : []).filter((x) => x && x.id && x.ja && x.en);
  const panelsAll = () => (Array.isArray(window.SIGN_PANELS) ? window.SIGN_PANELS : []).filter((p) => p && p.id && Array.isArray(p.rows));
  const controlsOf = (p) => p.rows.filter(Array.isArray).map((r) => r.filter((c) => c && c.id && c.ja)).filter((r) => r.length);
  const tasksOf = (p) => {
    const ids = new Set([].concat(...controlsOf(p)).filter((c) => c.kind !== 'lamp').map((c) => c.id));
    return (Array.isArray(p.tasks) ? p.tasks : []).filter((t) => t && t.q && ids.has(t.a));
  };
  const store = () => { const d = S().done; if (!d.signs || typeof d.signs !== 'object') d.signs = {}; return d.signs; };
  const missList = () => { const st = store(); if (!Array.isArray(st.miss)) st.miss = []; return st.miss; };
  const noteMiss = (id, ok) => {
    const m = missList(), at = m.indexOf(id);
    if (at >= 0) m.splice(at, 1);
    if (!ok) { m.push(id); if (m.length > MISS_MAX) m.splice(0, m.length - MISS_MAX); }
  };
  const saveBest = (k, pct) => { const st = store(); st[k] = Math.max(pct, typeof st[k] === 'number' ? st[k] : 0); };
  const bestPill = (k) => { const b = store()[k]; return typeof b === 'number' ? '<span class="pill' + (b >= 80 ? ' good' : '') + '">Best ' + b + '%</span>' : ''; };

  /* ---------- Sign boards ---------- */
  // Plain text as printed (no readings, no word spaces). data-noja: ja.js adds no furigana or romaji.
  const board = (x, cls) => {
    const t = JA.speak(x.ja), n = [...t].length;
    const st = STYLES.includes(x.style) ? x.style : 'plain';
    return '<span class="sg-board sg-' + st + (n > 7 ? ' sg-l3' : n > 4 ? ' sg-l2' : '') + (cls ? ' ' + cls : '') + '" data-noja lang="ja">' + esc(t) + '</span>';
  };
  App.signBoard = board;
  // Reading with furigana, speaker, English, level, note.
  const info = (x) => '<div class="sg-info"><div class="sg-read"><span class="tl">' + esc(x.ja) + '</span>' + App.sayBtn(x.ja, x.ja) + '</div>' +
    '<div class="sg-en">' + esc(x.en) + (x.lv ? ' <span class="pill lv">' + esc(x.lv) + '</span>' : '') + '</div>' +
    (x.note ? '<div class="small muted">' + esc(x.note) + '</div>' : '') + '</div>';

  const segBtns = (attr, list, cur, label) => '<div class="seg sg-seg" role="group" aria-label="' + label + '" data-norj>' +
    list.map(([k, t]) => '<button type="button" ' + attr + '="' + esc(k) + '" aria-pressed="' + (cur === k) + '" class="' + (cur === k ? 'on' : '') + '">' + esc(t) + '</button>').join('') + '</div>';

  V.signs = (el, prm, q) => {
    q = q || {};
    const tab = TABS.some((t) => t[0] === q.tab) ? q.tab : (q.p ? 'panels' : 'learn');
    const st = S().settings;
    const signs = signsAll(), groups = groupsAll();
    const known = new Set(groups.map((g) => g.id));
    const gs = groups.filter((g) => signs.some((x) => x.g === g.id)).concat(signs.some((x) => !known.has(x.g)) ? [{ id: 'other', title: 'Other', note: '' }] : []);
    const gOf = (x) => (known.has(x.g) ? x.g : 'other');
    if (q.g && (q.g === 'all' || gs.some((g) => g.id === q.g))) { st.signsG = q.g; App.save(); }
    const g = st.signsG && gs.some((x) => x.id === st.signsG) ? st.signsG : 'all';
    const panel = tab === 'panels' && q.p ? panelsAll().find((p) => p.id === q.p) : null;
    const head = crumb([['Practice', '#/practice']].concat(panel ? [['Signs and buttons', '#/signs?tab=panels'], [panel.title || panel.id]] : [['Signs and buttons']])) +
      '<h1>' + esc(panel ? panel.title || panel.id : 'Signs and buttons') + '</h1>';
    const tabs = '<div class="seg sg-seg" role="group" aria-label="View" data-norj style="margin-bottom:10px">' + TABS.map(([k, t]) => '<a role="button" href="#/signs?tab=' + k + '" class="' + (tab === k ? 'on' : '') + '"' + (tab === k ? ' aria-current="page"' : '') + '>' + t + '</a>').join('') + '</div>';
    const rerender = (nq) => V.signs(el, prm, nq);
    const c = { signs, gs, gOf, g, gTitle: (id) => (id === 'all' ? 'All signs' : (gs.find((x) => x.id === id) || {}).title || id), rerender };
    if (tab === 'panels') {
      el.innerHTML = head + (panel ? '' : '<p class="muted">The buttons, lamps and dials printed on machines in Japan. Explore a panel, then do its tasks.</p>') + tabs + '<div id="sgbox"></div>';
      const box = el.querySelector('#sgbox');
      return panel ? panelPage(box, panel) : panelList(box, q);
    }
    el.innerHTML = head + '<p class="muted">Read the signs in a hospital, a station and the street, as they are really printed: no furigana. Tap a sign to see how it is read.</p>' + tabs + '<div id="sgbox"></div>';
    const box = el.querySelector('#sgbox');
    if (!signs.length) { box.innerHTML = '<div class="notice info">No signs yet. The signs (受付, 出口, 非常口 and the rest) arrive with the next data update.</div>'; return; }
    const gseg = segBtns('data-sgg', [['all', 'All']].concat(gs.map((x) => [x.id, x.title || x.id])), g, 'Group');
    if (tab === 'quiz') return quiz(box, gseg, c);
    return learn(box, gseg, c);
  };

  const bindGroup = (box, c, tab) => box.querySelectorAll('[data-sgg]').forEach((b) => (b.onclick = () => { S().settings.signsG = b.dataset.sgg; App.save(); c.rerender({ tab }); }));

  /* ---------- Learn ---------- */
  function learn(box, gseg, c) {
    const st = S().settings;
    const always = !!st.signsRead;
    const shown = c.gs.filter((g) => c.g === 'all' || g.id === c.g);
    box.innerHTML = '<div class="stack">' + gseg +
      '<label class="sg-switch"><input type="checkbox" id="sgread"' + (always ? ' checked' : '') + '> Always show readings</label></div>' +
      shown.map((g) => '<h2>' + esc(g.title || g.id) + '</h2>' + (g.note ? '<p class="muted">' + esc(g.note) + '</p>' : '') +
        '<div class="sg-grid">' + c.signs.filter((x) => c.gOf(x) === g.id).map((x) =>
          '<div class="sg-tile"><button type="button" class="sg-tap" data-sid="' + esc(x.id) + '" aria-expanded="' + always + '" aria-label="' + esc(JA.speak(x.ja)) + (always ? '' : ': show the reading') + '">' + board(x) + '</button>' +
          '<div class="sg-detail"' + (always ? '' : ' hidden') + '>' + info(x) + '</div></div>').join('') + '</div>').join('');
    bindGroup(box, c, 'learn');
    box.querySelector('#sgread').onchange = (ev) => { st.signsRead = ev.target.checked; App.save(); learn(box, gseg, c); };
    box.querySelectorAll('.sg-tap').forEach((b) => (b.onclick = () => {
      const d = b.nextElementSibling, open = d.hidden;
      d.hidden = !open; b.setAttribute('aria-expanded', open);
      if (open) { const x = c.signs.find((y) => y.id === b.dataset.sid); if (x) App.speak(x.ja); }
    }));
  }

  /* ---------- Quiz ---------- */
  // Three other signs with a different meaning and different text: same group first, then any.
  function others(x, items, gOf) {
    const out = [], ens = new Set([lc(x.en)]), ws = new Set([JA.speak(x.ja)]);
    const take = (list) => { for (const y of list) { if (out.length >= 3) break; const w = JA.speak(y.ja); if (ens.has(lc(y.en)) || ws.has(w)) continue; out.push(y); ens.add(lc(y.en)); ws.add(w); } };
    take(shuffle(items.filter((y) => y !== x && gOf(y) === gOf(x))));
    take(shuffle(items.filter((y) => y !== x)));
    return out;
  }
  function makeQ(x, mode, items, gOf) {
    const o = others(x, items, gOf);
    if (o.length < 3) return null;
    const opts = shuffle([x].concat(o));
    const fb = (ok, ch) => '<div class="sg-fbrow">' + board(x, 'sg-sm') + info(x) + '</div>' +
      (!ok && ch ? '<div class="small muted">Your choice: ' + (mode === 'en-ja' ? '<span class="tl">' + esc(ch.x.ja) + '</span> = ' + esc(ch.x.en) : esc(ch.x.en) + ' = <span class="tl">' + esc(ch.x.ja) + '</span>') + '</div>' : '');
    if (mode === 'en-ja') return { id: x.id, fb, wide: true, html: '<div class="muted small">Which sign means …</div><div class="sg-q">' + esc(x.en) + '</div>', opts: opts.map((y) => ({ h: board(y, 'sg-sm'), ok: y === x, x: y, lab: JA.speak(y.ja) })) };
    return { id: x.id, fb, html: '<div class="muted small">What does this sign mean?</div><div class="sg-qboard">' + board(x) + '</div>', opts: opts.map((y) => ({ h: esc(y.en), ok: y === x, x: y })) };
  }
  function quiz(box, gseg, c) {
    const st = S().settings;
    let n = st.signsN === 20 ? 20 : 10;
    let mode = MODES.some((m) => m[0] === st.signsM) ? st.signsM : 'ja-en';
    const inG = c.signs.filter((x) => c.g === 'all' || c.gOf(x) === c.g);
    const avail = LVS.filter((lv) => inG.some((x) => x.lv === lv));
    let lv = st.signsLv && avail.includes(st.signsLv) ? st.signsLv : 'All';
    const byId = (id) => c.signs.find((x) => x.id === id);
    const paint = () => {
      const k = 'quiz:' + c.g + ':' + mode;
      const pool = inG.filter((x) => lv === 'All' || x.lv === lv);
      const miss = missList().map(byId).filter(Boolean);
      box.innerHTML = '<div class="card stack">' + gseg + segBtns('data-sgm', MODES, mode, 'Mode') +
        '<div class="row" style="flex-wrap:wrap;gap:8px">' + (avail.length > 1 ? segBtns('data-sglv', [['All', 'All']].concat(avail.map((x) => [x, x])), lv, 'Level') : '') +
        segBtns('data-sgn', [['10', '10'], ['20', '20']], String(n), 'Number of questions') + bestPill(k) + '</div>' +
        '<p class="muted small" style="margin:0">' + pool.length + ' sign' + (pool.length === 1 ? '' : 's') + ' in ' + esc(c.g === 'all' ? 'all groups' : c.gTitle(c.g)) + '. Keys 1–4 choose, Enter goes on.</p>' +
        '<div class="row"><button class="btn primary" id="sggo"' + (pool.length < 1 || c.signs.length < 4 ? ' disabled' : '') + '>Start</button>' + (miss.length ? '<button class="btn" id="sgmistakes">Practise my mistakes (' + miss.length + ')</button>' : '') + '</div>' +
        (c.signs.length < 4 ? '<div class="notice">Not enough signs yet; at least 4 are needed.</div>' : '') + '</div><div id="sgq" style="margin-top:14px"></div>';
      bindGroup(box, c, 'quiz');
      box.querySelectorAll('[data-sgm]').forEach((x) => (x.onclick = () => { mode = x.dataset.sgm; st.signsM = mode; App.save(); paint(); }));
      box.querySelectorAll('[data-sglv]').forEach((x) => (x.onclick = () => { lv = x.dataset.sglv; st.signsLv = lv; App.save(); paint(); }));
      box.querySelectorAll('[data-sgn]').forEach((x) => (x.onclick = () => { n = +x.dataset.sgn; st.signsN = n; App.save(); paint(); }));
      const go = box.querySelector('#sggo'); if (go) go.onclick = () => run(pick(pool, n), k);
      const mb = box.querySelector('#sgmistakes'); if (mb) mb.onclick = () => run(pick(miss, n), null);
      return pool;
    };
    const run = (list, k) => {
      const qs = list.map((x) => makeQ(x, mode, c.signs, c.gOf)).filter(Boolean);
      const qbox = box.querySelector('#sgq');
      if (!qs.length) { qbox.innerHTML = '<div class="notice">Not enough signs to make options yet.</div>'; return; }
      drill(qbox, shuffle(qs), {
        onAnswer: (qq, ok) => { noteMiss(qq.id, ok); App.recordAnswer(ok); App.save(); },
        onDone: (r, total) => {
          if (k) saveBest(k, Math.round((100 * r) / total));
          App.activity(10); App.save();
          return '<button class="btn primary" data-act="again">New round</button>' + (missList().length ? '<button class="btn" data-act="miss">Practise my mistakes</button>' : '') + '<a class="btn" href="#/progress">Progress</a>';
        },
        bind: (wrap) => {
          const a = wrap.querySelector('[data-act=again]'); if (a) a.onclick = () => { const pool = paint(); run(pick(pool, n), 'quiz:' + c.g + ':' + mode); };
          const m = wrap.querySelector('[data-act=miss]'); if (m) m.onclick = () => { paint(); run(pick(missList().map(byId).filter(Boolean), n), null); };
          if (a) a.focus();
        }
      });
      qbox.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    paint();
  }

  /* ---------- Panels ---------- */
  function panelList(box) {
    const ps = panelsAll();
    if (!ps.length) { box.innerHTML = '<div class="notice info">No panels yet. The machine panels (washing machine, ticket machine, lift and the rest) arrive with the next data update.</div>'; return; }
    box.innerHTML = '<div class="grid sg-plist">' + ps.map((p) => {
      const nc = [].concat(...controlsOf(p)).length, nt = tasksOf(p).length;
      return '<a class="tile sg-ptile" href="#/signs?tab=panels&p=' + encodeURIComponent(p.id) + '"><div class="spread"><b>' + esc(p.title || p.id) + '</b>' + (p.lv ? '<span class="pill lv">' + esc(p.lv) + '</span>' : '') + '</div>' +
        (p.note ? '<span class="small muted">' + esc(p.note) + '</span>' : '') + '<span class="small">' + nc + ' controls · ' + nt + ' task' + (nt === 1 ? '' : 's') + ' ' + bestPill('panel:' + p.id) + '</span></a>';
    }).join('') + '</div>';
  }

  // The device face. mode 'explore': every control is a button; 'tasks': lamps are plain lights, not buttons.
  function face(p, mode) {
    return '<div class="sg-dev" role="group" aria-label="' + esc(p.title || p.id) + '">' + controlsOf(p).map((row) => '<div class="sg-drow">' + row.map((ctl) => {
      const kind = KIND[ctl.kind] ? ctl.kind : 'btn', lab = JA.speak(ctl.ja);
      const inner = kind === 'lamp' ? '<span class="sg-light" aria-hidden="true"></span><span class="sg-clab" data-noja lang="ja">' + esc(lab) + '</span>'
        : kind === 'dial' ? '<span class="sg-knob" aria-hidden="true"><i></i></span><span class="sg-clab" data-noja lang="ja">' + esc(lab) + '</span>'
        : '<span class="sg-key" data-noja lang="ja">' + esc(lab) + '</span>';
      if (kind === 'lamp' && mode === 'tasks') return '<div class="sg-ctl sg-lamp sg-off">' + inner + '</div>';
      return '<button type="button" class="sg-ctl sg-' + kind + '" data-cid="' + esc(ctl.id) + '" aria-label="' + esc(lab) + '">' + inner + '</button>';
    }).join('') + '</div>').join('') + '</div>';
  }
  const ctlInfo = (ctl) => '<div class="sg-info"><div class="sg-read"><span class="tl">' + esc(ctl.ja) + '</span>' + App.sayBtn(ctl.ja, ctl.ja) + '</div>' +
    '<div class="sg-en">' + esc(ctl.en || '') + ' <span class="pill">' + esc(KIND[ctl.kind] || 'button') + '</span></div></div>';

  function panelPage(box, p) {
    const all = [].concat(...controlsOf(p)), tasks = tasksOf(p), byId = (id) => all.find((x) => x.id === id);
    let mode = 'explore';
    const top = () => (p.note ? '<p class="muted">' + esc(p.note) + '</p>' : '') +
      '<div class="row" style="flex-wrap:wrap;gap:8px">' + segBtns('data-pm', [['explore', 'Explore'], ['tasks', 'Tasks']], mode, 'Panel mode') + bestPill('panel:' + p.id) + '</div>';
    const explore = () => {
      if (!all.length) { box.innerHTML = '<div class="notice info">This panel has no controls yet.</div><p><a class="btn" href="#/signs?tab=panels">All panels</a></p>'; return; }
      box.innerHTML = top() + '<p class="muted small">Tap a button, lamp or dial to see how it is read.</p>' + face(p, 'explore') +
        '<div class="card sg-pinfo" id="sgpi" aria-live="polite"><span class="muted small">Nothing chosen yet.</span></div>' +
        '<div class="row" style="margin-top:12px"><a class="btn" href="#/signs?tab=panels">All panels</a></div>';
      bind();
      box.querySelectorAll('.sg-ctl[data-cid]').forEach((b) => (b.onclick = () => {
        const ctl = byId(b.dataset.cid); if (!ctl) return;
        box.querySelectorAll('.sg-ctl.sel').forEach((x) => x.classList.remove('sel')); b.classList.add('sel');
        box.querySelector('#sgpi').innerHTML = ctlInfo(ctl);
        App.speak(ctl.ja);
      }));
    };
    const runTasks = () => {
      if (!tasks.length) { box.innerHTML = top() + '<div class="notice info">No tasks for this panel yet.</div>'; bind(); return; }
      const list = shuffle(tasks.slice());
      let i = 0, right = 0;
      const draw = () => {
        if (i >= list.length) {
          const pct = Math.round((100 * right) / list.length), k = 'panel:' + p.id, before = store()[k];
          saveBest(k, pct); App.activity(10); App.save();
          box.innerHTML = top() + '<div class="card stack" style="margin-top:12px"><h3 style="margin:0">' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + list.length + '</h3>' +
            '<div class="progress"><i style="width:' + pct + '%"></i></div>' + (typeof before === 'number' && pct > before ? '<span class="pill good">New best</span>' : '') +
            '<div class="row"><button class="btn primary" data-act="again">Try again</button><a class="btn" href="#/signs?tab=panels">All panels</a><a class="btn" href="#/progress">Progress</a></div></div>';
          bind();
          const a = box.querySelector('[data-act=again]'); a.onclick = runTasks; a.focus();
          return;
        }
        const t = list[i];
        box.innerHTML = top() + '<div class="card stack sg-task" style="margin-top:12px"><div class="spread"><span class="eyebrow">Task ' + (i + 1) + ' of ' + list.length + '</span><span class="muted small">' + right + ' right</span></div>' +
          '<div class="progress"><i style="width:' + Math.round((100 * i) / list.length) + '%"></i></div><div class="sg-q">' + esc(t.q) + '</div></div>' +
          face(p, 'tasks') + '<div data-fb></div>';
        bind();
        let done = false;
        box.querySelectorAll('.sg-ctl[data-cid]').forEach((b) => (b.onclick = () => {
          if (done) return;
          done = true;
          const ok = b.dataset.cid === t.a, ctl = byId(t.a);
          if (ok) right++;
          App.recordAnswer(ok);
          const rb = box.querySelector('.sg-ctl[data-cid="' + CSS.escape(t.a) + '"]');
          if (rb) rb.classList.add('right');
          if (!ok) { b.classList.add('wrong', 'sg-shake'); setTimeout(() => b.classList.remove('sg-shake'), 600); }
          box.querySelectorAll('.sg-ctl[data-cid]').forEach((x) => x.setAttribute('aria-disabled', 'true'));
          box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack" style="margin-top:12px"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong + ' The right one is lit up.') + '</b>' +
            (ctl ? ctlInfo(ctl) : '') + (t.why ? '<div class="small">' + esc(t.why) + '</div>' : '') +
            (!ok ? '<div class="small muted">You pressed: <span class="tl">' + esc((byId(b.dataset.cid) || {}).ja || '') + '</span> = ' + esc((byId(b.dataset.cid) || {}).en || '') + '</div>' : '') + '</div>' +
            '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < list.length ? 'Next' : 'See score') + '</button></div>';
          if (ctl) App.speak(ctl.ja);
          const nx = box.querySelector('[data-act=next]'); nx.onclick = () => { i++; draw(); }; nx.focus({ preventScroll: true });
          nx.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }));
      };
      App.keyHandler = (ev) => {
        if (!box.isConnected || ev.altKey || ev.ctrlKey || ev.metaKey) return;
        if (ev.key === 'Enter' && !ev.target.closest('button,a,input,select')) { const nx = box.querySelector('[data-act=next]'); if (nx) { ev.preventDefault(); nx.click(); } }
      };
      draw();
    };
    const bind = () => box.querySelectorAll('[data-pm]').forEach((b) => (b.onclick = () => { App.keyHandler = null; mode = b.dataset.pm; (mode === 'tasks' ? runTasks : explore)(); }));
    explore();
  }

  /* ---------- A small multiple-choice runner (progress bar, feedback, keys 1-4 and Enter) ---------- */
  // qs: [{ id, html, opts: [{ h, ok, lab }], fb(ok, chosenOpt) → html, wide }]
  function drill(el, qs, o) {
    let i = 0, right = 0;
    const draw = () => {
      if (i >= qs.length) {
        const pct = Math.round((100 * right) / qs.length);
        const btns = o.onDone ? o.onDone(right, qs.length) : '';
        el.innerHTML = '<div class="card stack"><h3 style="margin:0">' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + qs.length + '</h3><div class="progress"><i style="width:' + pct + '%"></i></div><div class="row">' + btns + '</div></div>';
        if (o.bind) o.bind(el);
        return;
      }
      const q = qs[i];
      el.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span><span class="muted small">' + right + ' right</span></div>' +
        '<div class="progress"><i style="width:' + Math.round((100 * i) / qs.length) + '%"></i></div>' + q.html +
        '<div class="opts' + (q.wide ? ' sg-bopts' : '') + '" data-norj>' + q.opts.map((x, k) => '<button class="opt" data-k="' + k + '"' + (x.lab ? ' aria-label="' + (k + 1) + ': ' + esc(x.lab) + '"' : '') + '><span class="pr-k" aria-hidden="true">' + (k + 1) + '</span> ' + x.h + '</button>').join('') + '</div><div data-fb></div></div>';
      el.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
        const ch = q.opts[+b.dataset.k], ok = !!ch.ok;
        if (ok) right++;
        el.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (q.opts[+x.dataset.k].ok) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        if (o.onAnswer) o.onAnswer(q, ok);
        el.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b>' + q.fb(ok, ok ? null : ch) + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
        const nx = el.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); };
        nx.focus();
      }));
    };
    App.keyHandler = (ev) => {
      if (!el.isConnected || ev.altKey || ev.ctrlKey || ev.metaKey || ev.target.matches('input,textarea,select')) return;
      if (/^[1-4]$/.test(ev.key)) { const b = el.querySelector('.opt[data-k="' + (+ev.key - 1) + '"]:not(:disabled)'); if (b) { ev.preventDefault(); b.click(); } return; }
      if (ev.key === 'Enter' && !ev.target.closest('button,a')) { const nx = el.querySelector('[data-act=next]'); if (nx) { ev.preventDefault(); nx.click(); } }
    };
    draw();
  }
})();
