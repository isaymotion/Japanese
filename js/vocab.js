/* Vocabulary quiz (0.17.0): #/vocab (Quiz tab) and #/vocab?tab=match (topic matching, ?set=<id>).
   Quiz: dictionary words from one deck (My mistakes, By level, Vocabulary, Clinical vocabulary) in three modes:
   Meaning (Japanese → English), Recall (English → Japanese) and Reading (kanji without furigana → kana reading).
   Best % per deck and mode in state.done.vocab['<deckId>:<mode>']; the last deck in state.settings.vocabDeck.
   Matching: window.TOPIC_SETS (js/data/topic-sets.js); rounds of 6 sounds against 6 meanings. Best result in
   state.done.vocab['match:<setId>'] = { m: misses, t: seconds }.
   0.20.0: a level filter (All, N5, N4, N3, N2 (0.21.0); state.settings.matchLv): a set's words at a level are those whose dictionary
   level is at or below it (C or no level: All only); sets with fewer than 6 such words are hidden; best results in
   'match:<setId>' (All) or 'match:<setId>@N5' etc. Set page modes Match / Quiz (?mode=quiz): multiple choice on the
   set's words, Meaning or Recall (state.settings.matchQuizMode), best % in 'topic:<setId>@<lv>:<mode>'. */
(function () {
  const { esc, norm, shuffle, pick, icons } = App;
  const V = App.views, S = () => App.state;
  const GROUPS = ['Review', 'By level', 'Vocabulary', 'Clinical vocabulary'];
  const MODES = [['meaning', 'Meaning'], ['recall', 'Recall'], ['reading', 'Reading']];
  const KANJI_RE = new RegExp('[' + JA.KANJI + ']');
  const yomi = (tl) => JA.compact(JA.kana(tl)).trim();                 // reading in kana, as written (katakana kept)
  const hasKanji = (e) => KANJI_RE.test(JA.plain(e.tl));
  const usable = (e) => e && !/＿/.test(e.tl) && (e.tl.match(/ /g) || []).length <= 3;
  const best = () => S().done.vocab || (S().done.vocab = {});
  const tabs = (tab) => '<div class="seg" role="group" aria-label="View" data-norj style="margin-bottom:12px">' +
    [['quiz', 'Quiz', '#/vocab'], ['match', 'Matching', '#/vocab?tab=match']].map(([k, t, h]) => '<a role="button" href="' + h + '" class="' + (tab === k ? 'on' : '') + '"' + (tab === k ? ' aria-current="page"' : '') + '>' + t + '</a>').join('') + '</div>';

  V.vocab = (el, p, q) => {
    q = q || {};
    if (q.tab === 'match') return match(el, q);
    quiz(el);
  };

  /* ---------- Quiz ---------- */
  const deckList = () => App.decks().filter((d) => GROUPS.includes(d.group) && (d.group !== 'Review' || d.id === 'mistakes'));
  const wordsOf = (d) => d.ids.filter((id) => id.startsWith('d')).map((id) => App.dictById[id]).filter(usable);
  const poolFor = (words, mode) => (mode === 'reading' ? words.filter(hasKanji) : words);

  // Three wrong options for word e: different English and different Japanese from the answer and from each other,
  // same part of speech first, from the deck, then from the whole dictionary if the deck is short.
  function others(e, words) {
    const out = [], ens = new Set([norm(e.en)]), tls = new Set([e.ftl]);
    const take = (list) => { for (const x of list) { if (out.length >= 3) break; if (!usable(x) || ens.has(norm(x.en)) || tls.has(x.ftl)) continue; out.push(x); ens.add(norm(x.en)); tls.add(x.ftl); } };
    const sh = shuffle(words.filter((x) => x !== e));
    take(sh.filter((x) => x.pos === e.pos)); take(sh);
    if (out.length < 3) { const all = shuffle(App.DICT.filter((x) => x.pos === e.pos)); take(all); take(shuffle(App.DICT).slice(0, 200)); }
    return out;
  }
  // The same reading with one change: a long vowel added or dropped, small っ added or dropped, or voicing switched.
  const PLAIN = 'かきくけこさしすせそたちつてとはひふへほカキクケコサシスセソタチツテトハヒフヘホ', VOICED = 'がぎぐげござじずぜぞだぢづでどばびぶべぼガギグゲゴザジズゼゾダヂヅデドバビブベボ';
  const O_ROW = 'おこごそぞとどのほぼぽもよょろ', U_ROW = 'うくぐすずつづぬふぶぷむゆゅる';
  function variants(r) {
    const out = new Set(), ch = [...r];
    ch.forEach((c, i) => {
      const a = PLAIN.indexOf(c), b = VOICED.indexOf(c);
      if (a >= 0) out.add(r.slice(0, i) + VOICED[a] + r.slice(i + 1));
      if (b >= 0) out.add(r.slice(0, i) + PLAIN[b] + r.slice(i + 1));
      if (c === 'っ' || c === 'ッ' || c === 'ー') out.add(ch.slice(0, i).join('') + ch.slice(i + 1).join(''));
      if ((c === 'う' && i > 0 && (O_ROW + U_ROW).includes(ch[i - 1])) || (c === 'い' && i > 0 && 'えけげせぜてでねへべぺめれ'.includes(ch[i - 1]))) out.add(ch.slice(0, i).join('') + ch.slice(i + 1).join(''));
      if (i < ch.length - 1 && (O_ROW + U_ROW).includes(c) && !'うっ'.includes(ch[i + 1]) && !'ゃゅょ'.includes(ch[i + 1])) out.add(ch.slice(0, i + 1).join('') + 'う' + ch.slice(i + 1).join(''));
      if (i > 0 && i < ch.length - 1 && 'かきくけこさしすせそたちつてとぱぴぷぺぽ'.includes(ch[i + 1]) && !'っんーゃゅょ'.includes(c) && !'っ'.includes(ch[i + 1])) out.add(ch.slice(0, i + 1).join('') + 'っ' + ch.slice(i + 1).join(''));
    });
    out.delete(r);
    return [...out].filter((x) => x.length >= 1);
  }
  function readingOpts(e, words) {
    const ans = yomi(e.tl), seen = new Set([ans, e.kn]), out = [];
    const add = (r) => { if (out.length < 3 && r && !seen.has(r) && !seen.has(JA.toHira(r))) { out.push(r); seen.add(r); seen.add(JA.toHira(r)); } };
    const len = [...ans].length;
    const near = shuffle(words.filter((x) => x !== e && hasKanji(x) && Math.abs([...yomi(x.tl)].length - len) <= 1)).map((x) => yomi(x.tl));
    near.slice(0, 2).forEach(add);
    shuffle(variants(ans)).forEach(add);
    near.forEach(add);
    if (out.length < 3) shuffle(App.DICT.filter((x) => hasKanji(x) && Math.abs([...yomi(x.tl)].length - len) <= 1)).slice(0, 40).map((x) => yomi(x.tl)).forEach(add);
    return [ans].concat(out);
  }
  function makeQs(words, mode, n) {
    const pool = poolFor(words, mode);
    return pick(pool, n).map((e) => {
      const exp = e.tl + ' = ' + e.en + (e.note ? ' · ' + e.note : '');
      const sub = App.POS[e.pos] || '';
      if (mode === 'reading') return { q: JA.speak(e.tl), sub: e.en, opts: readingOpts(e, words), a: 0, exp, cardId: e.id, after: e.tl };
      const o = [e].concat(others(e, words));
      if (mode === 'recall') return { q: e.en, sub, opts: o.map((x) => x.tl), a: 0, exp, tlo: true, cardId: e.id, after: e.tl };
      return { q: e.tl, sub, opts: o.map((x) => x.en), a: 0, exp, tlq: true, cardId: e.id, say: e.tl };
    });
  }

  function quiz(el) {
    const decks = deckList(), st = S().settings;
    let deck = decks.find((d) => d.id === st.vocabDeck) || decks.find((d) => d.id === 'lv-N5') || decks[0];
    let mode = MODES.some((m) => m[0] === st.vocabMode) ? st.vocabMode : 'meaning';
    let count = st.vocabCount === 20 ? 20 : 10;
    const groups = {};
    decks.forEach((d) => (groups[d.group] = groups[d.group] || []).push(d));
    const modeSeg = () => MODES.map(([k, t]) => { const b = best()[deck.id + ':' + k]; return '<button type="button" data-vm="' + k + '" aria-pressed="' + (mode === k) + '" class="' + (mode === k ? 'on' : '') + '">' + t + (b != null ? ' <small class="vq-best">' + b + '%</small>' : '') + '</button>'; }).join('');
    const status = () => {
      const words = wordsOf(deck), n = poolFor(words, mode).length;
      if (n < 4) return '<div class="notice">' + (deck.id === 'mistakes' && !words.length ? 'No dictionary words in My mistakes yet. Words you miss in any quiz or flashcard land there.' : 'This deck has ' + n + ' word' + (n === 1 ? '' : 's') + ' usable for ' + (mode === 'reading' ? 'the Reading mode (words written with kanji)' : 'this quiz') + '; at least 4 are needed. Choose another deck or mode.') + '</div>';
      return '<p class="muted small" style="margin:0">' + n + ' words in this deck' + (mode === 'reading' ? ' are written with kanji' : '') + (n < count ? '; the quiz uses all of them' : '') + '.</p>';
    };
    el.innerHTML = '<h1>Vocabulary quiz</h1>' + tabs('quiz') +
      '<p class="muted">Test the words of any deck three ways: <b>Meaning</b> (read the Japanese, choose the English), <b>Recall</b> (from the English, choose the Japanese) and <b>Reading</b> (kanji without furigana, choose the reading). Misses go to <b>My mistakes</b> in the flashcards.</p>' +
      '<div class="card stack" id="vqset"><label class="small muted" for="vqdeck">Deck</label><select class="input" id="vqdeck">' +
      Object.entries(groups).map(([g, ds]) => '<optgroup label="' + esc(g) + '">' + ds.map((d) => '<option value="' + esc(d.id) + '"' + (d === deck ? ' selected' : '') + '>' + esc(d.name) + '</option>').join('') + '</optgroup>').join('') + '</select>' +
      '<div class="row" style="flex-wrap:wrap;gap:8px"><div class="seg" role="group" aria-label="Mode" data-norj id="vqmode">' + modeSeg() + '</div>' +
      '<div class="seg" role="group" aria-label="Number of questions" data-norj>' + [10, 20].map((k) => '<button type="button" data-vc="' + k + '" aria-pressed="' + (count === k) + '" class="' + (count === k ? 'on' : '') + '">' + k + '</button>').join('') + '</div></div>' +
      '<div id="vqstat"></div><div class="row"><button class="btn primary" id="vqgo">Start</button></div></div><div id="vq" style="margin-top:14px"></div>';
    const box = el.querySelector('#vq');
    // Deck contents change while the page is open (a miss adds to My mistakes), so read them again each time.
    const fresh = () => (deck = deckList().find((d) => d.id === deck.id) || deck);
    const refresh = () => {
      fresh();
      el.querySelector('#vqmode').innerHTML = modeSeg();
      el.querySelector('#vqstat').innerHTML = status();
      el.querySelector('#vqgo').disabled = poolFor(wordsOf(deck), mode).length < 4;
      el.querySelectorAll('[data-vm]').forEach((b) => (b.onclick = () => { mode = b.dataset.vm; st.vocabMode = mode; App.save(); refresh(); }));
    };
    el.querySelector('#vqdeck').onchange = (ev) => { deck = decks.find((d) => d.id === ev.target.value) || deck; st.vocabDeck = deck.id; App.save(); box.innerHTML = ''; refresh(); };
    el.querySelectorAll('[data-vc]').forEach((b) => (b.onclick = () => { count = +b.dataset.vc; st.vocabCount = count; App.save(); el.querySelectorAll('[data-vc]').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); }); refresh(); }));
    // runQuiz's own "Try again" reshuffles its copy of the questions; ours starts a new set of words instead, so the
    // question number in the eyebrow always points into this qs.
    const run = () => {
      fresh();
      const words = wordsOf(deck), qs = makeQs(words, mode, count), m = mode, d = deck;
      if (qs.length < 4) return;
      if (!S().settings.vocabDeck) { st.vocabDeck = deck.id; App.save(); }
      // Reading: no romaji anywhere in the quiz box (it would give the reading away), and no sound before answering.
      box.toggleAttribute('data-norj', m === 'reading');
      box.onclick = (ev) => {
        const o = ev.target.closest('.opt'); if (!o) return;
        const i = +((box.querySelector('.eyebrow') || {}).textContent || '').replace(/\D+(\d+).*/, '$1') - 1;
        const qq = qs[i]; if (!qq || !qq.after) return;
        const row = box.querySelector('[data-fb] .row');
        if (row && !row.querySelector('.say')) row.insertAdjacentHTML('beforeend', App.sayBtn(qq.after, qq.after));
      };
      App.runQuiz(box, qs, {
        after: '<a class="btn" href="#/flash/mistakes">My mistakes</a>',
        onDone: (r, n) => {
          const pct = Math.round((100 * r) / n), k = d.id + ':' + m;
          best()[k] = Math.max(pct, best()[k] || 0);
          App.activity(10); App.save();
          if (el.querySelector('#vqmode')) refresh();
          const again = box.querySelector('[data-act=retry]'); if (again) { again.textContent = 'New round'; again.onclick = run; }
        }
      });
    };
    el.querySelector('#vqgo').onclick = () => { run(); box.scrollIntoView({ block: 'start', behavior: 'smooth' }); };
    refresh();
  }

  /* ---------- Matching ---------- */
  let byKey = null;
  const dictKey = () => byKey || (byKey = new Map(App.DICT.map((e) => [e.tl + '|' + e.en, e])));
  const setWords = (s) => { const seen = new Set(); return (s.words || []).map((k) => dictKey().get(k)).filter((e) => e && !seen.has(e.id) && seen.add(e.id)); };
  const mmss = (t) => Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
  const bestTxt = (b) => (b ? 'Best: ' + b.m + ' miss' + (b.m === 1 ? '' : 'es') + ' · ' + mmss(b.t) : '');
  // Split into rounds of at most 6, as even as possible (13 words → 5, 4, 4), so no round is a single pair.
  const rounds = (ws) => { const n = Math.ceil(ws.length / 6), out = []; let at = 0; for (let r = 0; r < n; r++) { const k = Math.ceil((ws.length - at) / (n - r)); out.push(ws.slice(at, at + k)); at += k; } return out; };

  // Level filter (0.20.0). N5 < N4 < N3 < N2; C (clinical) or no level counts as above N2, so such words show only under All.
  const MLV = ['All', 'N5', 'N4', 'N3', 'N2'];
  const LV_RANK = { N5: 1, N4: 2, N3: 3, N2: 4 };
  const MIN_LV = 6;
  const matchLv = () => (MLV.includes(S().settings.matchLv) ? S().settings.matchLv : 'All');
  const atLevel = (e, lv) => lv === 'All' || (LV_RANK[e.lv] || 99) <= LV_RANK[lv];
  const levelWords = (s, lv) => setWords(s).filter((e) => atLevel(e, lv));
  const shown = (s, lv) => levelWords(s, lv).length >= (lv === 'All' ? 2 : MIN_LV);
  const matchKey = (s, lv) => 'match:' + s.id + (lv === 'All' ? '' : '@' + lv);
  const quizKey = (s, lv, m) => 'topic:' + s.id + '@' + lv + ':' + m;
  const QMODES = MODES.filter((m) => m[0] !== 'reading');
  const lvSeg = (cur, avail) => '<div class="seg vm-lv" role="group" aria-label="Level" data-norj>' + MLV.map((k) => '<button type="button" data-mlv="' + k + '" aria-pressed="' + (cur === k) + '" class="' + (cur === k ? 'on' : '') + '"' + (avail && !avail.includes(k) ? ' disabled' : '') + '>' + k + '</button>').join('') + '</div>';
  const bindLv = (el, redraw) => el.querySelectorAll('[data-mlv]').forEach((b) => (b.onclick = () => { S().settings.matchLv = b.dataset.mlv; App.save(); redraw(); }));

  function match(el, q) {
    const lv = matchLv();
    const all = (window.TOPIC_SETS || []).filter((s) => setWords(s).length >= 2);
    const sets = all.filter((s) => shown(s, lv));
    const set = q.set && all.find((s) => s.id === q.set);
    if (!set) {
      el.innerHTML = '<h1>Vocabulary quiz</h1>' + tabs('match') +
        '<p class="muted">Match the sound to the meaning. Each round has up to six words: tap a numbered sound to hear it, then tap its English meaning. Turn on <b>Show words</b> to see the Japanese from the start. Choose a level to see only the words of that level and below; each set also has a multiple-choice <b>Quiz</b>.</p>' +
        (q.set ? '<div class="notice" style="margin-bottom:12px">That topic set was not found.</div>' : '') +
        '<div class="row vm-lvrow" style="margin-bottom:10px">' + lvSeg(lv) + '<span class="muted small">' + sets.length + ' of ' + all.length + ' sets' + (lv === 'All' ? '' : ' have ' + MIN_LV + ' or more words at ' + lv + ' or below') + '</span></div>' +
        (sets.length ? '<div class="grid">' + sets.map((s) => {
          const b = best()[matchKey(s, lv)], qb = QMODES.map(([m, t]) => [t, best()[quizKey(s, lv, m)]]).filter((x) => x[1] != null);
          return '<a class="tile" href="#/vocab?tab=match&set=' + encodeURIComponent(s.id) + '"><h3>' + esc(s.title) + '</h3><p>' + levelWords(s, lv).length + ' words' + (lv === 'All' ? '' : ' at ' + lv + ' or below') + ' · Match or Quiz</p><div class="meta row">' + (s.clin ? '<span class="pill warn">Clinical</span>' : '') + (b ? '<span class="pill good">' + esc(bestTxt(b)) + '</span>' : '') +
            qb.map(([t, v]) => '<span class="pill' + (v >= 80 ? ' good' : '') + '">' + esc(t) + ' ' + v + '%</span>').join('') + '</div></a>';
        }).join('') + '</div>' : '<div class="notice info">' + (all.length ? 'No set has ' + MIN_LV + ' or more words at ' + lv + ' or below yet. Choose another level.' : 'No topic sets yet.') + '</div>');
      bindLv(el, () => match(el, q));
      return;
    }
    const st = S().settings;
    const avail = MLV.filter((k) => shown(set, k));
    const words0 = levelWords(set, lv);
    const mode = q.mode === 'quiz' ? 'quiz' : 'match';
    const base = '#/vocab?tab=match&set=' + encodeURIComponent(set.id);
    el.innerHTML = '<div class="breadcrumb"><a href="#/vocab?tab=match">Topic matching</a> / ' + esc(set.title) + '</div><h1>' + esc(set.title) + '</h1>' +
      '<div class="row vm-modes" style="margin-bottom:8px"><div class="seg" role="group" aria-label="Mode" data-norj>' + [['match', 'Match', base], ['quiz', 'Quiz', base + '&mode=quiz']].map(([k, t, h]) => '<a role="button" href="' + h + '" class="' + (mode === k ? 'on' : '') + '"' + (mode === k ? ' aria-current="page"' : '') + '>' + t + '</a>').join('') + '</div>' + lvSeg(lv, avail) + '</div>' +
      '<div class="row" style="margin-bottom:10px">' + (set.clin ? '<span class="pill warn">Clinical</span>' : '') + '<span class="muted small">' + words0.length + ' words' + (lv === 'All' ? '' : ' at ' + lv + ' or below' + (words0.length < setWords(set).length ? ' (of ' + setWords(set).length + ')' : '')) + '</span>' +
      (mode === 'match' ? '<label class="row small vm-show" style="margin-left:auto;gap:6px"><input type="checkbox" id="vmshow"' + (st.vocabShowWords ? ' checked' : '') + '> Show words</label>' : '') + '</div><div id="vmbox"></div>';
    bindLv(el, () => match(el, q));
    const box = el.querySelector('#vmbox');
    if (!avail.includes(lv)) { box.innerHTML = '<div class="notice">This set has ' + words0.length + ' word' + (words0.length === 1 ? '' : 's') + ' at ' + lv + ' or below; at least ' + MIN_LV + ' are needed. Choose another level.</div>'; return; }
    if (mode === 'quiz') return topicQuiz(box, set, lv, words0);
    let rs, r, locked, sel, misses, t0, words;
    const start = () => { rs = rounds(shuffle(words0)); r = 0; misses = 0; t0 = Date.now(); round(); };
    const showAll = () => !!S().settings.vocabShowWords;
    const paintWords = () => box.querySelectorAll('.vm-snd').forEach((b) => {
      const i = +b.dataset.i, on = showAll() || locked.has(i);
      b.querySelector('.vm-w').hidden = !on;
      b.setAttribute('aria-label', 'Sound ' + (i + 1) + (on ? ': ' + JA.speak(words[i].tl) : ''));
    });
    function round() {
      words = rs[r]; locked = new Set(); sel = -1;
      const order = shuffle(words.map((w, i) => i));
      box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Round ' + (r + 1) + ' of ' + rs.length + '</span><span class="muted small" id="vmmiss">' + misses + ' miss' + (misses === 1 ? '' : 'es') + '</span></div>' +
        '<div class="vm-grid"><div class="vm-col" data-norj role="group" aria-label="Sounds">' +
        words.map((w, i) => '<button type="button" class="opt vm-snd" data-i="' + i + '" aria-pressed="false"><span class="vm-n">' + (i + 1) + '</span>' + icons.sound + '<span class="vm-w" hidden><span>' + esc(w.tl) + '</span></span></button>').join('') +
        '</div><div class="vm-col" role="group" aria-label="Meanings">' +
        order.map((i) => '<button type="button" class="opt vm-mean" data-i="' + i + '">' + esc(words[i].en) + '</button>').join('') + '</div></div>' +
        '<p class="muted small" style="margin:0">Tap a sound to hear it, then tap its meaning.</p></div>';
      paintWords();
      box.querySelectorAll('.vm-snd').forEach((b) => (b.onclick = () => {
        const i = +b.dataset.i;
        App.speak(words[i].tl);
        if (locked.has(i)) return;
        sel = i;
        box.querySelectorAll('.vm-snd').forEach((x) => { const on = +x.dataset.i === i; x.classList.toggle('sel', on); x.setAttribute('aria-pressed', on); });
      }));
      box.querySelectorAll('.vm-mean').forEach((b) => (b.onclick = () => {
        const i = +b.dataset.i;
        if (locked.has(i)) return;
        if (sel < 0) { App.toast('Tap a sound first, then its meaning.'); return; }
        const sb = box.querySelector('.vm-snd[data-i="' + sel + '"]');
        if (i === sel) {
          locked.add(i); App.recordAnswer(true, words[i].id);
          sb.classList.remove('sel'); sb.classList.add('right'); sb.setAttribute('aria-pressed', 'false');
          b.classList.add('right'); b.disabled = true; sel = -1; paintWords();
          if (locked.size === words.length) setTimeout(() => { if (!box.isConnected) return; r++; if (r < rs.length) round(); else finish(); }, 700);
        } else {
          misses++; App.recordAnswer(false, words[sel].id);
          el.querySelector('#vmmiss').textContent = misses + ' miss' + (misses === 1 ? '' : 'es');
          [sb, b].forEach((x) => { x.classList.add('wrong'); setTimeout(() => x.classList.remove('wrong'), 600); });
        }
      }));
      const first = box.querySelector('.vm-snd'); if (first && r > 0) first.focus();
    }
    function finish() {
      const t = Math.round((Date.now() - t0) / 1000), k = matchKey(set, lv), b = best()[k];
      const better = !b || misses < b.m || (misses === b.m && t < b.t);
      if (better) best()[k] = { m: misses, t };
      App.activity(10); App.save();
      box.innerHTML = '<div class="card stack"><h3 style="margin:0">' + (misses ? LANG.quiz.ok : LANG.quiz.great) + ' All ' + rs.flat().length + ' words matched</h3>' + (lv === 'All' ? '' : '<p class="muted small" style="margin:0">Level ' + lv + ' and below</p>') +
        '<p style="margin:0">' + misses + ' miss' + (misses === 1 ? '' : 'es') + ' · ' + mmss(t) + (better && b ? ' · <span class="pill good">New best</span>' : '') + '</p>' +
        (!better ? '<p class="muted small" style="margin:0">' + esc(bestTxt(b)) + '</p>' : '') +
        '<div class="row"><button class="btn primary" id="vmagain">Try again</button><a class="btn" href="#/vocab?tab=match">Back to sets</a>' + (misses ? '<a class="btn" href="#/flash/mistakes">My mistakes</a>' : '') + '</div></div>';
      box.querySelector('#vmagain').onclick = start;
      box.querySelector('#vmagain').focus();
    }
    el.querySelector('#vmshow').onchange = (ev) => { S().settings.vocabShowWords = ev.target.checked; App.save(); if (box.querySelector('.vm-snd')) paintWords(); };
    start();
  }

  // Multiple choice on a topic set's words (0.20.0): Meaning (Japanese → English) or Recall (English → Japanese),
  // options from the same set first (others()); misses go to My mistakes through runQuiz's App.recordAnswer(ok, cardId).
  function topicQuiz(box, set, lv, words) {
    const st = S().settings;
    let mode = QMODES.some((m) => m[0] === st.matchQuizMode) ? st.matchQuizMode : 'meaning';
    box.innerHTML = '<div class="card stack"><div class="row" style="flex-wrap:wrap;gap:8px"><div class="seg" role="group" aria-label="Quiz type" data-norj id="vtmode"></div></div>' +
      '<p class="muted small" style="margin:0" id="vthelp"></p><div class="row"><button class="btn primary" id="vtgo">Start</button></div></div><div id="vtq" style="margin-top:14px"></div>';
    const qbox = box.querySelector('#vtq');
    const paint = () => {
      box.querySelector('#vtmode').innerHTML = QMODES.map(([k, t]) => { const b = best()[quizKey(set, lv, k)]; return '<button type="button" data-vtm="' + k + '" aria-pressed="' + (mode === k) + '" class="' + (mode === k ? 'on' : '') + '">' + t + (b != null ? ' <small class="vq-best">' + b + '%</small>' : '') + '</button>'; }).join('');
      box.querySelector('#vthelp').textContent = (mode === 'recall' ? 'Read the English, choose the Japanese.' : 'Read the Japanese, choose the English.') + ' ' + words.length + ' questions, one per word.';
      box.querySelectorAll('[data-vtm]').forEach((b) => (b.onclick = () => { mode = b.dataset.vtm; st.matchQuizMode = mode; App.save(); qbox.innerHTML = ''; paint(); }));
    };
    const run = () => {
      const qs = makeQs(words, mode, words.length), m = mode;
      if (qs.length < 4) return;
      // Recall: once answered, a sound button for the right word (as in the deck quiz).
      qbox.onclick = (ev) => {
        const o = ev.target.closest('.opt'); if (!o) return;
        const i = +((qbox.querySelector('.eyebrow') || {}).textContent || '').replace(/\D+(\d+).*/, '$1') - 1;
        const qq = qs[i]; if (!qq || !qq.after) return;
        const row = qbox.querySelector('[data-fb] .row');
        if (row && !row.querySelector('.say')) row.insertAdjacentHTML('beforeend', App.sayBtn(qq.after, qq.after));
      };
      App.runQuiz(qbox, qs, {
        after: '<a class="btn" href="#/flash/mistakes">My mistakes</a><a class="btn" href="#/vocab?tab=match&set=' + encodeURIComponent(set.id) + '">Match this set</a>',
        onDone: (r, n) => {
          const pct = Math.round((100 * r) / n), k = quizKey(set, lv, m);
          best()[k] = Math.max(pct, best()[k] || 0);
          App.activity(10); App.save();
          if (box.isConnected) paint();
          const again = qbox.querySelector('[data-act=retry]'); if (again) { again.textContent = 'New round'; again.onclick = run; }
        }
      });
    };
    box.querySelector('#vtgo').onclick = () => { run(); qbox.scrollIntoView({ block: 'start', behavior: 'smooth' }); };
    paint();
  }
})();
