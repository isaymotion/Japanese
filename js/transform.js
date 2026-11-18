/* Transform the sentence (#/transform, 0.23.0). Data: window.GRAMMAR_TRANSFORM (js/data/grammar-transform-*.js), choose or type.
   Best scores: state.done.transform['<lv>:<mode>'] = best % (mode choose | type); numbers only (the Progress page, V.progress in js/views.js, shows them under "Practice scores").
   Missed items: state.done.transform.miss = [item ids] (newest last, at most 200) for "Practise my mistakes" (no score kept).
   Settings: state.settings.transformLv, transformType (a group below or 'all'), transformMode (choose | type), transformCount (10 | 20).
   Choose: the model answer `to` and the three `wrong` sentences, shuffled (keys 1–4). Type: kana, kanji or romaji; right when it equals
   `to` or an `alt` once spaces and 。、？！ are ignored, katakana is read as hiragana and any kanji word may be typed as its reading.
   A wrong typed answer gets a character-level hint (where it starts and stops differing). Wrong sentences are never spoken. */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const MODES = [['choose', 'Choose'], ['type', 'Type']];
  const MISS_CAP = 200;
  // Human groups of the data's `type` values; anything unknown goes to Other.
  const GROUPS = [
    ['neg', 'Negative', ['neg']],
    ['past', 'Past', ['past', 'pastneg']],
    ['polite', 'Plain ↔ polite', ['polite', 'plain', 'formal', 'casual']],
    ['join', 'Joining', ['te-join', 'reason', 'contrast', 'conditional', 'noun-mod']],
    ['potential', 'Potential', ['potential']],
    ['passive', 'Passive and causative', ['passive', 'causative']],
    ['keigo', 'Keigo', ['keigo']],
    ['other', 'Other', []]
  ];
  const groupOf = (t) => { const g = GROUPS.find((x) => x[2].includes(t)); return g ? g[0] : 'other'; };
  const isStr = (x) => typeof x === 'string' && x.trim() !== '';
  const usable = (x) => x && isStr(x.id) && LEVELS.includes(x.lv) && isStr(x.instr) && isStr(x.to) &&
    (isStr(x.from) || (Array.isArray(x.from) && x.from.length && x.from.every(isStr)));
  const canChoose = (x) => Array.isArray(x.wrong) && x.wrong.filter(isStr).length >= 3;
  const items = () => (Array.isArray(window.GRAMMAR_TRANSFORM) ? window.GRAMMAR_TRANSFORM : []).filter(usable);
  const alts = (x) => [x.to].concat(Array.isArray(x.alt) ? x.alt.filter(isStr) : []);

  /* ---------- Typed answers ---------- */
  const STRIP = /[\s　。、？！?!,.，．・「」『』…‥〜～]/g;
  const hira = (s) => JA.toHira(String(s || '').normalize('NFC')).replace(STRIP, '');
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // A regex for one notation string: each kanji word with furigana matches its kanji or its reading.
  const kanaRe = (t) => {
    const re = new RegExp(JA.RUBY_SRC, 'g');
    let out = '', last = 0, m;
    const lit = (s) => [...hira(s)].map(reEsc).join('');
    while ((m = re.exec(t))) {
      out += lit(t.slice(last, m.index));
      const base = (m[1] || m[2]).replace(/｜/g, ''), rd = m[3];
      out += '(?:' + reEsc(base.replace(STRIP, '')) + '|' + lit(rd) + ')';
      last = re.lastIndex;
    }
    out += lit(t.slice(last));
    return new RegExp('^' + out + '$');
  };
  const normRomaji = (s) => String(s || '').toLowerCase().normalize('NFC')
    .replace(/ā/g, 'aa').replace(/ī/g, 'ii').replace(/ū/g, 'uu').replace(/ē/g, 'ee').replace(/[ōô]/g, 'ou').replace(/[âû]/g, (c) => (c === 'â' ? 'aa' : 'uu'))
    .replace(/[\s'’\-.,?!"。、？！「」]/g, '').replace(/oo/g, 'ou').replace(/oh(?=[^aiueo]|$)/g, 'ou')
    .replace(/si/g, 'shi').replace(/tu/g, 'tsu').replace(/(^|[^sc])hu/g, '$1fu').replace(/zi/g, 'ji').replace(/m(?=[bpm])/g, 'n');
  const romajiForms = (t) => [normRomaji(JA.romaji(t)), normRomaji(JA.kanaToRomaji(hira(JA.kana(t))))];
  const isKanaInput = (s) => /[぀-ヿ㐀-鿿]/.test(s);
  const matches = (typed, t) => {
    const s = String(typed || '').trim(); if (!s) return false;
    if (isKanaInput(s)) return kanaRe(t).test(hira(s));
    return romajiForms(t).includes(normRomaji(s));
  };
  App.transformMatches = matches;   // for QA
  // Where a wrong typed answer differs from the closest correct one: common start and end, the middle marked.
  const diffHint = (typed, x) => {
    const kanaIn = isKanaInput(typed), hasKanji = new RegExp('[' + JA.KANJI + ']').test(typed);
    const form = (t) => (kanaIn ? (hasKanji ? hira(JA.speak(t)) : hira(JA.kana(t))) : romajiForms(t)[0]);
    const a = kanaIn ? hira(typed) : normRomaji(typed);
    const A = [...a];
    let best = null;
    alts(x).forEach((t) => {
      const B = [...form(t)];
      let p = 0; while (p < A.length && p < B.length && A[p] === B[p]) p++;
      let q = 0; while (q < A.length - p && q < B.length - p && A[A.length - 1 - q] === B[B.length - 1 - q]) q++;
      if (!best || p + q > best.p + best.q) best = { B, p, q };
    });
    const mark = (C, p, q) => esc(C.slice(0, p).join('')) + '<mark class="tr-diff">' + (C.length - p - q > 0 ? esc(C.slice(p, C.length - q).join('')) : '‸') + '</mark>' + esc(C.slice(C.length - q).join(''));
    return '<div class="tr-hint" data-norj><div><span class="muted small">Yours:</span> <span class="tr-h">' + mark(A, best.p, best.q) + '</span></div>' +
      '<div><span class="muted small">' + (kanaIn ? 'Model (reading):' : 'Model (romaji):') + '</span> <span class="tr-h">' + mark(best.B, best.p, best.q) + '</span></div>' +
      '<div class="muted small">' + (best.p ? 'The first ' + best.p + ' character' + (best.p === 1 ? '' : 's') + ' match; the marked part differs.' : 'It differs from the start: see the marked part.') + '</div></div>';
  };

  /* ---------- State ---------- */
  const store = () => { const d = S().done; if (!d.transform || typeof d.transform !== 'object' || Array.isArray(d.transform)) d.transform = {}; return d.transform; };
  const missList = () => { const b = store(); if (!Array.isArray(b.miss)) b.miss = []; return b.miss; };
  const addMiss = (id) => { const m = missList(), i = m.indexOf(id); if (i >= 0) m.splice(i, 1); m.push(id); if (m.length > MISS_CAP) m.splice(0, m.length - MISS_CAP); };
  const dropMiss = (id) => { const m = missList(), i = m.indexOf(id); if (i >= 0) m.splice(i, 1); };
  const seg = (label, list, cur, attr) => '<div class="seg" role="group" aria-label="' + esc(label) + '" data-norj>' + list.map(([k, t]) => '<button type="button" data-' + attr + '="' + esc(k) + '" class="' + (String(cur) === String(k) ? 'on' : '') + '" aria-pressed="' + (String(cur) === String(k)) + '">' + esc(t) + '</button>').join('') + '</div>';
  const lessonLink = (x) => { const l = x.l && (window.LESSONS || []).find((y) => y.id === x.l); return l ? '<a class="small" href="#/lessons/' + esc(l.id) + '">Lesson: ' + esc(l.title) + '</a>' : ''; };
  const fromHtml = (x) => (Array.isArray(x.from) ? x.from : [x.from]).map((s) => '<div class="tr-from"><span class="tl">' + esc(s) + '</span> ' + App.sayBtn(s) + '</div>').join('');

  // 0.25.0: Choose questions for Today's practice (js/today.js, shared shape of App.drillRun): App.transformQs([ids]) or
  // App.transformQs(lv, n). Same instruction, options and feedback as a Choose round here; wrong sentences are never spoken.
  const drillQ = (x) => ({ drill: 'transform', id: x.id, lv: x.lv, norj: true,
    html: '<div class="tr-instr">' + esc(x.instr) + '</div><div class="tr-froms">' + fromHtml(x) + '</div>',
    opts: shuffle([x.to].concat(x.wrong.filter(isStr).slice(0, 3))).map((o) => ({ h: '<span class="tl">' + esc(o) + '</span>', ok: o === x.to })),
    fb: () => { const others = alts(x).slice(1); return '<div class="tr-to"><span class="tl">' + esc(x.to) + '</span> ' + App.sayBtn(x.to) + '</div>' +
      (others.length ? '<div class="small"><span class="muted">Also right:</span> ' + others.map((t) => '<span class="tl">' + esc(t) + '</span> ' + App.sayBtn(t)).join(' ') + '</div>' : '') +
      (isStr(x.en) ? '<div>' + esc(x.en) + '</div>' : '') + lessonLink(x); },
    done: (ok) => (ok ? dropMiss(x.id) : addMiss(x.id)) });
  App.transformQs = (lv, n) => {
    const all = items().filter(canChoose);
    if (Array.isArray(lv)) return lv.map((id) => all.find((x) => x.id === id)).filter(Boolean).map(drillQ);
    return pick(all.filter((x) => !lv || lv === 'all' || x.lv === lv), n || 10).map(drillQ);
  };

  V.transform = (el) => {
    const st = S().settings;
    const mode = () => (MODES.some((m) => m[0] === st.transformMode) ? st.transformMode : 'choose');
    const byMode = () => items().filter((x) => mode() !== 'choose' || canChoose(x));
    const levels = () => { const p = byMode(); return LEVELS.filter((lv) => p.some((x) => x.lv === lv)); };
    const level = () => (levels().includes(st.transformLv) ? st.transformLv : 'all');
    const byLevel = () => { const lv = level(); return byMode().filter((x) => lv === 'all' || x.lv === lv); };
    const groups = () => { const p = byLevel(); return GROUPS.filter((g) => p.some((x) => groupOf(x.type) === g[0])); };
    const group = () => (groups().some((g) => g[0] === st.transformType) ? st.transformType : 'all');
    const pool = () => { const g = group(); return byLevel().filter((x) => g === 'all' || groupOf(x.type) === g); };
    const count = () => (st.transformCount === 20 ? 20 : 10);
    const misses = () => { const ids = new Set(missList()); return byMode().filter((x) => ids.has(x.id)); };

    el.innerHTML = crumb([['Practice', '#/practice'], ['Transform the sentence']]) + '<h1>Transform the sentence</h1>' +
      '<p class="muted">Change a sentence the way the instruction says: make it negative, past, plain or polite, join two sentences, and more. <b>Choose</b> the right version from four, or <b>Type</b> it in kana or romaji.</p>' +
      '<div class="card stack" id="trset"></div><div id="tr" style="margin-top:14px"></div>';
    const set = el.querySelector('#trset'), box = el.querySelector('#tr');
    const drawSet = () => {
      if (!items().length) { set.innerHTML = '<div class="notice">No items yet. The transformation sentences are still being written; check back after the next update.</div>'; return; }
      const b = store(), lv = level(), n = pool().length, nm = misses().length;
      const bestOf = (k) => (typeof b[k + ':' + mode()] === 'number' ? ' · ' + b[k + ':' + mode()] + '%' : '');
      set.innerHTML = '<div class="tr-ctl">' + seg('Mode', MODES, mode(), 'tm') + seg('Number of items', [[10, '10'], [20, '20']], count(), 'tc') + '</div>' +
        '<div class="tr-ctl">' + seg('Level', [['all', 'All' + bestOf('all')]].concat(levels().map((x) => [x, x + bestOf(x)])), lv, 'tl') + '</div>' +
        '<div class="tr-ctl">' + seg('Kind of change', [['all', 'All kinds']].concat(groups().map((g) => [g[0], g[1]])), group(), 'tg') + '</div>' +
        '<p class="muted small" style="margin:0">' + n + ' item' + (n === 1 ? '' : 's') + ' at this choice' + (n && n < count() ? '; the round uses all of them' : '') + '.</p>' +
        '<div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn primary" id="trgo"' + (n ? '' : ' disabled') + '>Start</button>' +
        (nm ? '<button class="btn" id="trmiss">Practise my mistakes (' + nm + ')</button>' : '') + '</div>';
      const on = (attr, key, num) => set.querySelectorAll('[data-' + attr + ']').forEach((x) => (x.onclick = () => { st[key] = num ? +x.dataset[attr] : x.dataset[attr]; App.save(); box.innerHTML = ''; App.keyHandler = null; drawSet(); }));
      on('tm', 'transformMode'); on('tc', 'transformCount', true); on('tl', 'transformLv'); on('tg', 'transformType');
      set.querySelector('#trgo').onclick = () => run(pick(pool(), count()), level() + ':' + mode());
      const mm = set.querySelector('#trmiss'); if (mm) mm.onclick = () => run(pick(misses(), count()), null);
    };

    const run = (list, key) => {
      if (!list.length) return;
      const md = mode();
      let i = 0, right = 0;
      const one = () => {
        App.keyHandler = null;
        if (i >= list.length) {
          const pct = Math.round((100 * right) / list.length), b = store();
          if (key) b[key] = Math.max(pct, typeof b[key] === 'number' ? b[key] : 0);
          App.activity(10); App.save();
          box.innerHTML = '<div class="card stack"><h3>' + right + ' / ' + list.length + ' right</h3><div class="progress"><i style="width:' + pct + '%"></i></div>' +
            (key ? '<p class="muted small" style="margin:0">Best for this level and mode: ' + b[key] + '%.</p>' : '<p class="muted small" style="margin:0">Mistakes round. Items you get right leave the list.</p>') +
            '<div class="row"><button class="btn primary" id="tragain">New round</button>' + (missList().length ? '<button class="btn" id="trmiss2">Practise my mistakes</button>' : '') + '</div></div>';
          box.querySelector('#tragain').onclick = () => (key ? run(pick(pool(), count()), level() + ':' + mode()) : run(pick(misses(), count()), null));
          const m2 = box.querySelector('#trmiss2'); if (m2) m2.onclick = () => run(pick(misses(), count()), null);
          box.querySelector('#tragain').focus();
          drawSet();
          return;
        }
        const x = list[i];
        const opts = md === 'choose' ? shuffle([x.to].concat(x.wrong.filter(isStr).slice(0, 3))) : [];
        let done = false;
        box.innerHTML = '<div class="card stack" data-tid="' + esc(x.id) + '"><div class="spread"><span class="eyebrow">Item ' + (i + 1) + ' of ' + list.length + '</span><span class="small muted">' + esc(x.lv) + ' · ' + esc((GROUPS.find((g) => g[0] === groupOf(x.type)) || GROUPS[7])[1]) + '</span></div>' +
          '<div class="progress"><i style="width:' + Math.round((100 * i) / list.length) + '%"></i></div>' +
          '<div class="tr-instr">' + esc(x.instr) + '</div>' +
          '<div class="tr-froms">' + fromHtml(x) + '</div>' +
          (md === 'choose'
            ? '<div class="opts" data-norj>' + opts.map((o, k) => '<button class="opt tl" data-k="' + k + '"><span class="tr-key" aria-hidden="true">' + (k + 1) + '</span> ' + esc(o) + '</button>').join('') + '</div>'
            : '<label class="small" for="trtype">Type the new sentence (kana, kanji or romaji)</label><input class="input" id="trtype" autocomplete="off" autocapitalize="off" spellcheck="false" lang="ja">' +
              '<div class="row"><button class="btn primary" id="trcheck">Check</button></div>') +
          '<div id="trfb"></div></div>';
        const $ = (q) => box.querySelector(q);
        const finish = (ok, extra) => {
          done = true;
          if (ok) { right++; dropMiss(x.id); } else addMiss(x.id);
          App.save();
          const others = alts(x).slice(1);
          $('#trfb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack tr-fb"><b>' + esc(ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b>' + (extra || '') +
            '<div class="tr-to"><span class="tl">' + esc(x.to) + '</span> ' + App.sayBtn(x.to) + '</div>' +
            (others.length ? '<div class="small"><span class="muted">Also right:</span> ' + others.map((t) => '<span class="tl">' + esc(t) + '</span> ' + App.sayBtn(t)).join(' ') + '</div>' : '') +
            (isStr(x.en) ? '<div>' + esc(x.en) + '</div>' : '') + lessonLink(x) + '</div>' +
            '<div class="row" style="margin-top:10px"><button class="btn primary" id="trnext">' + (i + 1 < list.length ? 'Next' : 'See score') + '</button></div>';
          $('#trnext').onclick = () => { i++; one(); };
          $('#trnext').focus();
        };
        if (md === 'choose') {
          const pickOpt = (k) => {
            if (done) return;
            const ok = opts[k] === x.to;
            box.querySelectorAll('.opt').forEach((b) => { b.disabled = true; if (opts[+b.dataset.k] === x.to) b.classList.add('right'); });
            if (!ok) box.querySelector('.opt[data-k="' + k + '"]').classList.add('wrong');
            finish(ok);
          };
          box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => pickOpt(+b.dataset.k)));
          App.keyHandler = (e) => {
            if (e.target.matches('input,textarea,select')) return;
            if (!done && /^[1-4]$/.test(e.key) && +e.key <= opts.length) { e.preventDefault(); pickOpt(+e.key - 1); }
            else if (done && e.key === 'Enter' && !e.target.matches('button,a')) { e.preventDefault(); $('#trnext').click(); }
          };
        } else {
          const inp = $('#trtype');
          const check = () => {
            if (done) return;
            const typed = inp.value.trim();
            if (!typed) { App.toast('Type the new sentence first.'); inp.focus(); return; }
            const ok = alts(x).some((t) => matches(typed, t));
            inp.disabled = true; $('#trcheck').disabled = true;
            finish(ok, ok ? '' : diffHint(typed, x));
          };
          $('#trcheck').onclick = check;
          inp.onkeydown = (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); check(); } };
          App.keyHandler = (e) => { if (done && e.key === 'Enter' && !e.target.matches('button,a,input')) { e.preventDefault(); $('#trnext').click(); } };
          setTimeout(() => { if (box.contains(inp) && !done) inp.focus({ preventScroll: true }); }, 50);
        }
      };
      one();
    };
    drawSet();
  };
})();
