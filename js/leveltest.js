/* Level review test (#/test, 0.23.0). A mixed test for one level (N5, N4, N3, N2) built at start from existing data:
     Grammar         10 from the level's lesson quizzes (LESSONS[].quiz and LESSON_EXTRA[id].quiz) + 6 from GRAMMAR_CLOZE
     Sentence order  4 lesson example sentences (lesson .ex blocks and LESSON_EXTRA.more) of 5+ words cut into 4 chunks,
                     one slot marked ★ (the JLPT style). Particles and endings stay on the word before them; the ★ chunk
                     never ends in a particle that could move (は が を に で と へ も から まで より や), so the order is fixed.
     Vocabulary      6 meaning (word → English), 6 reading (plain kanji → kana; words with kanji), 4 in context (DICT_EX
                     sentence with the headword's own tokens blanked; words whose tokens are not found are skipped)
     Kanji           4 (kanji → meaning, App.KANJI of the level)
     Reading         one READING passage of the level with its LISTEN_Q questions (or its own questions when it has none)
   A section whose pool is empty is skipped and the total adjusts. No feedback until the end; an optional 25-minute timer
   (state.settings.testTimer, off by default). The test in progress is kept in state.testRun (resume or discard).
   Scores: state.done.test['<lv>'] = best % (V.progress); state.done.testInfo['<lv>'] = { best, of, at, areas: { grammar:
   [right, of], … }, last: { pct, right, of, at, areas } } (areas of the best run in .areas, of the last run in .last). */
(function () {
  const { esc, shuffle, pick, norm, icons } = App;
  const V = App.views, S = () => App.state;
  const LVS = ['N5', 'N4', 'N3', 'N2'];
  const TIME = 25 * 60;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const AREAS = [['grammar', 'Grammar'], ['order', 'Sentence order'], ['vocab', 'Vocabulary'], ['kanji', 'Kanji'], ['reading', 'Reading']];
  const AREA_NAME = Object.fromEntries(AREAS);
  const DRILL = {
    grammar: (lv) => ['#/cloze?lv=' + lv, 'Fill the blank (' + lv + ')'], order: () => ['#/build', 'Sentence builder'],
    vocab: () => ['#/vocab', 'Vocabulary quiz'], kanji: () => ['#/kanji?tab=drill', 'Kanji drill'], reading: (lv) => ['#/reading?lv=' + lv, 'Reading passages (' + lv + ')']
  };
  const arr = (x) => (Array.isArray(x) ? x : []);
  const KANJI_RE = new RegExp('[' + JA.KANJI + ']');
  const hasJa = (s) => JA.hasJa(s) && !/[A-Za-z]{3}/.test(JA.plain(s));
  const plainKey = (s) => JA.speak(String(s || '')).replace(/[。、？！?!「」\s]/g, '');
  const lessonsOf = (lv) => arr(window.LESSONS).filter((l) => l && l.level === lv);
  const extraOf = (id) => (window.LESSON_EXTRA && typeof LESSON_EXTRA === 'object' && LESSON_EXTRA[id] && typeof LESSON_EXTRA[id] === 'object' ? LESSON_EXTRA[id] : {});
  const okQ = (k) => Array.isArray(k) && typeof k[0] === 'string' && Array.isArray(k[1]) && k[1].length >= 2 && Number.isInteger(k[2]) && k[2] >= 0 && k[2] < k[1].length &&
    new Set(k[1].map(plainKey)).size === k[1].length;   // options that differ only in their furigana (来《き》ず に / 来《こ》ず に) look the same with furigana off
  const lessonLink = (l) => ['#/lessons/' + encodeURIComponent(l.id), 'Lesson: ' + l.title];
  // Shuffle options into their final order now, so a resumed test looks the same.
  const mix = (opts, a) => { const order = shuffle(opts.map((o, k) => k)); return { opts: order.map((k) => opts[k]), a: order.indexOf(a) }; };

  /* ---------- Building the test ---------- */
  function grammarItems(lv) {
    const qz = [];
    lessonsOf(lv).forEach((l) => {
      arr(l.quiz).concat(arr(extraOf(l.id).quiz)).filter(okQ).forEach((k) => qz.push({ k, l }));
    });
    const out = pick(qz, 10).map(({ k, l }) => Object.assign({ area: 'grammar', kind: 'quiz', q: k[0], tlq: hasJa(k[0]), why: k[3] || '', href: lessonLink(l) }, mix(k[1], k[2])));
    const cl = arr(window.GRAMMAR_CLOZE).filter((x) => x && x.lv === lv && typeof x.s === 'string' && x.s.indexOf('＿') >= 0 && Array.isArray(x.opts) && x.opts.indexOf(x.a) >= 0);
    pick(cl, 6).forEach((x) => {
      const l = arr(window.LESSONS).find((y) => y.id === x.l);
      out.push(Object.assign({ area: 'grammar', kind: 'cloze', q: x.s, sub: x.en || '', why: x.why || '', ja: App.fillBlank(x.s, x.a), href: l ? lessonLink(l) : null }, mix(x.opts, x.opts.indexOf(x.a))));
    });
    return out;
  }

  // Words that are joined to the word before them when cutting a sentence into chunks, and particles that let a chunk move.
  const ATTACH = new Set(['は', 'が', 'を', 'に', 'で', 'と', 'へ', 'も', 'の', 'や', 'か', 'ね', 'よ', 'から', 'まで', 'より', 'など', 'だけ', 'しか', 'ぐらい', 'くらい', 'ごろ', 'です', 'でした', 'でしょう', 'だ', 'だった', 'ます', 'ません', 'ました', 'ませんでした', 'ください', 'いる', 'います', 'いました', 'いません', 'ある', 'あります', 'ありません', 'ない', 'なかった', 'じゃ', 'では', 'には', 'では', 'とは', 'にも', 'でも', 'のに', 'ので', 'けど', 'けれど', 'たら', 'ば', 'て', 'た']);
  const LOOSE = new Set(['は', 'が', 'を', 'に', 'で', 'と', 'へ', 'も', 'から', 'まで', 'より', 'や', 'には', 'では', 'とは', 'にも', 'でも']);
  function exampleSentences(lv) {
    const out = [];
    lessonsOf(lv).forEach((l) => {
      String(l.body || '').replace(/<div class="ex"><b>([^<]+)<\/b><span>([^<]*)<\/span>/g, (m, ja, en) => { out.push({ ja: ja.trim(), en: en.trim(), l }); return m; });
      arr(extraOf(l.id).more).forEach((m) => { if (Array.isArray(m) && typeof m[0] === 'string') out.push({ ja: m[0].trim(), en: String(m[1] || ''), l }); });
    });
    return out;
  }
  function orderItem(x) {
    const toks = x.ja.split(/ +/).filter(Boolean);
    if (toks.length < 5 || /＿|「|」/.test(x.ja)) return null;
    let units = [];
    if (App.buildChunks) {
      // 0.23.0: cut the sentence the same way as the Sentence builder (js/build.js); the final 。？！ goes back on the last word.
      const bc = App.buildChunks(x.ja);
      if (!bc || !bc.chunks.length) return null;
      units = bc.chunks.map((c) => c.split(' '));
      const last = units[units.length - 1]; last[last.length - 1] += bc.end || '';
    } else toks.forEach((t) => {
      const core = plainKey(t);
      if (units.length && (!core || ATTACH.has(core))) units[units.length - 1].push(t); else units.push([t]);
    });
    if (units.length < 5) return null;
    const tail = units.pop();
    const headN = Math.max(0, units.length - 6), head = units.slice(0, headN), mid = units.slice(headN);
    // mid: 4 to 6 units into 4 contiguous chunks; the extra units go to randomly chosen chunks
    const sizes = [1, 1, 1, 1];
    shuffle([0, 1, 2, 3]).slice(0, mid.length - 4).forEach((k) => sizes[k]++);
    const chunks = []; let at = 0;
    sizes.forEach((n) => { chunks.push(mid.slice(at, at + n)); at += n; });
    const str = chunks.map((c) => c.map((u) => u.join(' ')).join(' '));
    const keys = str.map(plainKey);
    if (new Set(keys).size < 4 || keys.some((k) => !k)) return null;
    const loose = chunks.map((c) => { const last = c[c.length - 1], lt = plainKey(last[last.length - 1]); return LOOSE.has(lt) || /、$/.test(last[last.length - 1]); });
    const cand = [0, 1, 2, 3].filter((k) => !loose[k]);
    if (!cand.length) return null;
    const star = cand[Math.floor(Math.random() * cand.length)];
    return Object.assign({ area: 'order', kind: 'order', head: head.map((u) => u.join(' ')).join(' '), tail: tail.join(' '), star, sub: x.en, ja: x.ja, why: '', href: lessonLink(x.l) }, mix(str, star));
  }
  function orderItems(lv) {
    const out = [], seen = new Set();
    for (const x of shuffle(exampleSentences(lv))) {
      if (out.length >= 4) break;
      const k = plainKey(x.ja); if (seen.has(k)) continue; seen.add(k);
      const it = orderItem(x); if (it) out.push(it);
    }
    return out;
  }

  const usable = (e) => e && e.id && !/＿/.test(e.tl) && (e.tl.match(/ /g) || []).length <= 3;
  const yomi = (tl) => JA.compact(JA.kana(tl)).trim();
  function others(e, pool, field, n) {
    const out = [], ens = new Set([norm(e.en)]), tls = new Set([e.ftl]);
    const take = (list) => { for (const x of list) { if (out.length >= n) break; if (!usable(x) || ens.has(norm(x.en)) || tls.has(x.ftl)) continue; out.push(x[field]); ens.add(norm(x.en)); tls.add(x.ftl); } };
    const sh = shuffle(pool.filter((x) => x !== e));
    take(sh.filter((x) => x.pos === e.pos)); take(sh);
    if (out.length < n) take(shuffle(arr(App.DICT)).slice(0, 300));
    return out.length >= n ? out : null;
  }
  function vocabItems(lv) {
    const words = arr(App.DICT).filter((e) => e.lv === lv && usable(e));
    const used = new Set(), out = [];
    const href = (e) => ['#/dict/' + e.id, 'Word: ' + e.tl];
    shuffle(words).forEach((e) => {
      if (out.filter((x) => x.kind === 'meaning').length >= 6) return;
      const o = others(e, words, 'en', 3); if (!o) return;
      used.add(e.id);
      out.push(Object.assign({ area: 'vocab', kind: 'meaning', q: e.tl, tlq: true, ja: e.tl, why: e.note || '', href: href(e) }, mix([e.en].concat(o), 0)));
    });
    const kw = shuffle(words.filter((e) => !used.has(e.id) && KANJI_RE.test(JA.plain(e.tl))));
    let nr = 0;
    for (const e of kw) {
      if (nr >= 6) break;
      const ans = yomi(e.tl), len = [...ans].length, seen = new Set([JA.toHira(ans)]), o = [];
      const cands = shuffle(words.filter((x) => x !== e && KANJI_RE.test(JA.plain(x.tl)) && Math.abs([...yomi(x.tl)].length - len) <= 1)).concat(shuffle(words.filter((x) => x !== e)));
      for (const x of cands) { if (o.length >= 3) break; const r = yomi(x.tl), h = JA.toHira(r); if (!r || seen.has(h) || /\s/.test(r)) continue; seen.add(h); o.push(r); }
      if (o.length < 3 || /\s/.test(ans)) continue;
      used.add(e.id); nr++;
      out.push(Object.assign({ area: 'vocab', kind: 'yomi', q: JA.speak(e.tl), tlq: true, norj: true, sub: e.en, ja: e.tl, why: '', href: href(e) }, mix([ans].concat(o), 0)));
    }
    let nc = 0;
    if (App.exampleFor) for (const e of shuffle(words.filter((x) => !used.has(x.id)))) {
      if (nc >= 4) break;
      const ex = App.exampleFor(e); if (!ex || !ex[0]) continue;
      const toks = ex[0].split(/ +/), head = e.tl.split(/ +/);
      const bare = (t) => t.replace(/[。、？！]+$/, '');
      let at = -1;
      for (let k = 0; k + head.length <= toks.length && at < 0; k++) if (head.every((h, j) => (j === head.length - 1 ? bare(toks[k + j]) : toks[k + j]) === h)) at = k;
      if (at < 0) continue;
      const last = toks[at + head.length - 1], rest = last.slice(bare(last).length);
      const s = toks.slice(0, at).concat(['＿' + rest], toks.slice(at + head.length)).join(' ');
      if ((s.match(/＿/g) || []).length !== 1) continue;
      const o = others(e, words, 'tl', 3); if (!o) continue;
      used.add(e.id); nc++;
      out.push(Object.assign({ area: 'vocab', kind: 'context', q: s, sub: ex[1] || '', ja: ex[0], why: e.tl + ' = ' + e.en, href: href(e) }, mix([e.tl].concat(o), 0)));
    }
    const ord = { meaning: 0, yomi: 1, context: 2 };
    return out.sort((a, b) => ord[a.kind] - ord[b.kind]);
  }
  function kanjiItems(lv) {
    const ks = arr(App.KANJI).filter((x) => x.lv === lv && x.mean && x.mean.length);
    const m = (x) => x.mean.slice(0, 2).join(', ');
    return pick(ks, 4).map((x) => {
      const seen = new Set([m(x)]), o = [];
      for (const y of shuffle(ks.length >= 8 ? ks : arr(App.KANJI))) { if (o.length >= 3) break; const t = m(y); if (y === x || !y.mean.length || seen.has(t)) continue; seen.add(t); o.push(t); }
      if (o.length < 3) return null;
      return Object.assign({ area: 'kanji', kind: 'kanji', q: x.k, big: true, norj: true, why: App.kanjiReadings ? App.kanjiReadings(x) : '', href: [App.kanjiHref ? App.kanjiHref(x.k) : '#/kanji', 'Kanji: ' + x.k] }, mix([m(x)].concat(o), 0));
    }).filter(Boolean);
  }
  const readingQs = (r) => { const lq = window.LISTEN_Q && Array.isArray(LISTEN_Q[r.id]) ? LISTEN_Q[r.id].filter(okQ) : []; return lq.length ? lq : arr(r.q).filter(okQ); };
  function readingItems(lv) {
    const rs = arr(window.READING).filter((r) => r && r.level === lv && Array.isArray(r.tl) && r.tl.length);
    const withLq = rs.filter((r) => window.LISTEN_Q && Array.isArray(LISTEN_Q[r.id]) && LISTEN_Q[r.id].some(okQ));
    const pool = (withLq.length ? withLq : rs).filter((r) => readingQs(r).length);
    if (!pool.length) return [];
    const r = pool[Math.floor(Math.random() * pool.length)];
    return readingQs(r).slice(0, 5).map((k) => Object.assign({ area: 'reading', kind: 'passage', q: k[0], tlq: hasJa(k[0]), passage: r.id, why: k[3] || '', href: ['#/reading/' + encodeURIComponent(r.id), 'Passage: ' + (r.titleEn || JA.speak(r.title || r.id))] }, mix(k[1], k[2])));
  }
  function build(lv) {
    const safe = (f) => { try { return f(lv); } catch (e) { console.warn('level test', e); return []; } };
    return [].concat(safe(grammarItems), safe(orderItems), safe(vocabItems), safe(kanjiItems), safe(readingItems));
  }
  const levels = () => LVS.filter((lv) => lessonsOf(lv).length || arr(window.GRAMMAR_CLOZE).some((x) => x && x.lv === lv) || arr(App.DICT).some((e) => e.lv === lv) || arr(App.KANJI).some((k) => k.lv === lv));
  const store = () => { const d = S().done; return d.test && typeof d.test === 'object' ? d.test : (d.test = {}); };
  const infoStore = () => { const d = S().done; return d.testInfo && typeof d.testInfo === 'object' ? d.testInfo : (d.testInfo = {}); };
  const pctOf = (r, n) => (n ? Math.round((100 * r) / n) : 0);
  const bars = (areas) => '<div class="lt-bars">' + AREAS.filter(([k]) => areas[k] && areas[k][1]).map(([k, t]) => {
    const [r, n] = areas[k], p = pctOf(r, n);
    return '<div class="lt-bar"><span class="lt-bl">' + t + '</span><span class="lt-track" role="img" aria-label="' + t + ' ' + p + '%"><i class="' + (p >= 80 ? 'good' : p < 50 ? 'low' : '') + '" style="width:' + p + '%"></i></span><span class="lt-bn">' + r + ' / ' + n + '</span></div>';
  }).join('') + '</div>';

  /* ---------- Start page ---------- */
  V.leveltest = (el) => {
    const st = S().settings, lvs = levels(), run = S().testRun;
    const head = crumb([['Practice', '#/practice'], ['Level review test']]) + '<h1>Level review test</h1>' +
      '<p class="muted">A mixed test of one level: grammar, sentence order, vocabulary, kanji and a reading passage, one section after another. You see your answers and the reasons at the end.</p>';
    if (!lvs.length) { el.innerHTML = head + '<div class="notice info">No items yet. The test is built from the lessons, dictionary, kanji and reading passages, and none are loaded.</div>'; return; }
    let lv = lvs.includes(st.testLv) ? st.testLv : lvs[0];
    const draw = () => {
      const plan = build(lv), counts = {};
      plan.forEach((x) => (counts[x.area] = (counts[x.area] || 0) + 1));
      const info = infoStore()[lv], best = store()[lv];
      const hasRun = run && Array.isArray(run.items) && run.items.length;
      el.innerHTML = head +
        (hasRun ? '<div class="card stack lt-resume" style="margin-bottom:12px"><div><b>Unfinished ' + esc(run.lv) + ' test</b><div class="muted small">' + run.ans.filter((a) => a != null).length + ' of ' + run.items.length + ' answered' + (run.timer ? ', ' + Math.max(0, Math.ceil((TIME - (run.used || 0)) / 60)) + ' min left' : '') + '.</div></div>' +
          '<div class="row" style="flex-wrap:wrap"><button class="btn primary" id="ltresume">Resume</button><button class="btn" id="ltdiscard">Discard</button></div></div>' : '') +
        '<div class="card stack"><div class="seg" role="group" aria-label="Level" data-norj>' + lvs.map((k) => '<button type="button" data-lv="' + k + '" aria-pressed="' + (lv === k) + '" class="' + (lv === k ? 'on' : '') + '">' + k + (typeof store()[k] === 'number' ? ' <small class="vq-best">' + store()[k] + '%</small>' : '') + '</button>').join('') + '</div>' +
        (plan.length ? '<ol class="lt-plan small">' + AREAS.filter(([k]) => counts[k]).map(([k, t]) => '<li><b>' + t + '</b> <span class="muted">' + counts[k] + ' question' + (counts[k] === 1 ? '' : 's') + '</span></li>').join('') + '</ol>' +
          '<p class="muted small" style="margin:0">' + plan.length + ' questions in all.' + (AREAS.some(([k]) => !counts[k]) ? ' ' + AREAS.filter(([k]) => !counts[k]).map(([, t]) => t).join(', ') + ': nothing at this level yet, so that part is skipped.' : '') + '</p>'
          : '<div class="notice info">No items yet for ' + esc(lv) + '.</div>') +
        '<label class="row lt-check"><input type="checkbox" id="lttimer"' + (st.testTimer ? ' checked' : '') + '> Timer: 25 minutes (the test ends when time is up)</label>' +
        '<div class="row"><button class="btn primary" id="ltgo"' + (plan.length ? '' : ' disabled') + '>Start the ' + esc(lv) + ' test</button></div></div>' +
        (info || best != null ? '<div class="card stack" style="margin-top:12px"><div class="spread"><b>Your ' + esc(lv) + ' results</b><span class="small">Best ' + (best != null ? best : (info && info.best) || 0) + '%</span></div>' +
          (info && info.last && info.last.areas ? '<div class="muted small">Last test: ' + info.last.pct + '% (' + info.last.right + ' / ' + info.last.of + ')</div>' + bars(info.last.areas) : '') + '</div>' : '');
      el.querySelectorAll('[data-lv]').forEach((b) => (b.onclick = () => { lv = b.dataset.lv; st.testLv = lv; App.save(); draw(); }));
      el.querySelector('#lttimer').onchange = (e) => { st.testTimer = e.target.checked; App.save(); };
      el.querySelector('#ltgo').onclick = () => {
        if (hasRun && !confirm('Start a new test? The unfinished ' + run.lv + ' test will be discarded.')) return;
        const items = build(lv);
        if (!items.length) return;
        S().testRun = { v: 1, lv, items, ans: items.map(() => null), i: 0, timer: !!st.testTimer, used: 0, at: Date.now() };
        App.save(); play(el);
      };
      if (hasRun) {
        el.querySelector('#ltresume').onclick = () => play(el);
        el.querySelector('#ltdiscard').onclick = () => { if (!confirm('Discard the unfinished ' + run.lv + ' test?')) return; delete S().testRun; App.save(); V.leveltest(el); };
      }
    };
    draw();
  };

  /* ---------- Taking the test ---------- */
  // Links to #/test from inside the test or its result: the hash is already #/test, so render the start page ourselves.
  const sameHash = (el) => el.querySelectorAll('a[href="#/test"]').forEach((a) => (a.onclick = (e) => { if (location.hash === '#/test') { e.preventDefault(); App.go('#/test'); } }));
  const passageHTML = (id) => {
    const r = arr(window.READING).find((x) => x.id === id);
    if (!r) return '';
    return '<details class="lt-passage" open><summary>' + esc(r.titleEn || 'Passage') + '</summary><div class="lt-ptext tl"><h3 style="margin:0 0 6px">' + esc(r.title || '') + '</h3>' + r.tl.map((t) => '<p>' + esc(t) + '</p>').join('') + '</div></details>';
  };
  const promptHTML = (x) => {
    if (x.kind === 'order') {
      const slots = [0, 1, 2, 3].map((k) => '<span class="lt-slot' + (k === x.star ? ' star' : '') + '">' + (k === x.star ? '★' : '') + '</span>').join(' ');
      return '<div class="lt-sent tl" data-norj>' + (x.head ? '<span>' + esc(x.head) + '</span> ' : '') + slots + ' <span>' + esc(x.tail) + '</span></div>' +
        '<div class="muted small">Which chunk goes in the ★ place? Meaning: ' + esc(x.sub) + '</div>';
    }
    if (x.kind === 'cloze' || x.kind === 'context') {
      const at = x.q.indexOf('＿');
      return '<div class="lt-sent tl" data-norj><span>' + esc(x.q.slice(0, at).trim()) + '</span> <span class="cz-blank" aria-label="blank">＿＿</span> <span>' + esc(x.q.slice(at + 1).trim()) + '</span></div>' + (x.sub ? '<div class="muted small">' + esc(x.sub) + '</div>' : '');
    }
    const cls = x.big ? 'lt-big tl' : x.tlq ? 'tl lt-qt' : 'lt-qt';
    return '<div class="' + cls + '"' + (x.norj ? ' data-norj' : '') + '>' + esc(x.q) + '</div>' + (x.sub ? '<div class="muted small">' + esc(x.sub) + '</div>' : '');
  };
  const LEAD = { quiz: 'Choose the best answer.', cloze: 'Choose what fills the blank.', order: '', meaning: 'What does this word mean?', yomi: 'How is this word read?', context: 'Choose the word that fits the sentence.', kanji: 'What does this kanji mean?', passage: '' };

  function play(el) {
    const run = S().testRun;
    if (!run) return V.leveltest(el);
    const items = run.items, secs = AREAS.map(([k]) => k).filter((k) => items.some((x) => x.area === k));
    let timer = null, mark = Date.now();
    const stopTimer = () => { if (timer) { clearInterval(timer); timer = null; } };
    const tick = () => {
      const now = Date.now(); run.used = (run.used || 0) + (now - mark) / 1000; mark = now;
      const left = Math.max(0, TIME - run.used), t = el.querySelector('#lttime');
      if (t) { t.textContent = Math.floor(left / 60) + ':' + String(Math.floor(left % 60)).padStart(2, '0'); t.classList.toggle('low', left < 120); }
      if (left <= 0) { stopTimer(); App.save(); finish(el, true); }
    };
    App.onLeave = () => { if (run.timer) tick(); stopTimer(); App.save(); };
    const draw = () => {
      const i = Math.min(Math.max(0, run.i || 0), items.length - 1), x = items[i];
      run.i = i;
      const si = secs.indexOf(x.area), inSec = items.filter((y) => y.area === x.area), pos = inSec.indexOf(x) + 1;
      const first = i === 0 || items[i - 1].area !== x.area, sel = run.ans[i], nAns = run.ans.filter((a) => a != null).length;
      const showP = x.kind === 'passage' && x.passage;
      el.innerHTML = crumb([['Practice', '#/practice'], ['Level review test', '#/test'], [run.lv]]) +
        '<div class="spread lt-top"><h1 style="margin:0">' + esc(run.lv) + ' review test</h1>' + (run.timer ? '<span class="pill lt-time" id="lttime" aria-live="off">25:00</span>' : '') + '</div>' +
        '<div class="lt-prog"><div class="spread small muted"><span>Question ' + (i + 1) + ' of ' + items.length + '</span><span>' + nAns + ' answered</span></div><div class="progress" aria-hidden="true"><i style="width:' + pctOf(i, items.length) + '%"></i></div></div>' +
        '<div class="lt-sec' + (first ? ' new' : '') + '"><span class="eyebrow">Section ' + (si + 1) + ' of ' + secs.length + '</span><h2 style="margin:2px 0 0">' + AREA_NAME[x.area] + '</h2>' +
        '<div class="muted small">' + pos + ' of ' + inSec.length + (first && x.area === 'order' ? ' · Put the four chunks in order in your head, then choose the one for ★.' : '') + (first && x.area === 'reading' ? ' · Read the passage, then answer.' : '') + '</div></div>' +
        (showP ? passageHTML(x.passage) : '') +
        '<div class="card stack lt-q">' + (LEAD[x.kind] ? '<div class="muted small">' + LEAD[x.kind] + '</div>' : '') + promptHTML(x) +
        '<div class="opts lt-opts">' + x.opts.map((o, k) => '<button class="opt' + (hasJa(o) ? ' tl' : '') + (sel === k ? ' on' : '') + '" data-k="' + k + '" aria-pressed="' + (sel === k) + '"><span class="cz-num" aria-hidden="true">' + (k + 1) + '</span> ' + esc(o) + '</button>').join('') + '</div>' +
        '<div class="row lt-nav"><button class="btn" id="ltprev"' + (i ? '' : ' disabled') + '>← Back</button>' +
        '<button class="btn primary" id="ltnext">' + (i + 1 < items.length ? (sel == null ? 'Skip' : 'Next') + ' →' : 'Finish') + '</button></div></div>' +
        '<div class="row" style="margin-top:12px;flex-wrap:wrap"><a class="btn sm" href="#/test" data-ltgo>Save and leave</a><button class="btn sm" id="ltend">Finish now</button></div>';
      if (run.timer) tick();
      sameHash(el);
      el.querySelectorAll('.lt-opts .opt').forEach((b) => (b.onclick = () => choose(+b.dataset.k)));
      el.querySelector('#ltprev').onclick = () => { run.i = i - 1; App.save(); draw(); };
      el.querySelector('#ltnext').onclick = next;
      el.querySelector('#ltend').onclick = () => { const left = run.ans.filter((a) => a == null).length; if (left && !confirm(left + ' question' + (left === 1 ? ' is' : 's are') + ' not answered and will count as wrong. Finish now?')) return; finish(el); };
    };
    const choose = (k) => {
      const i = run.i;
      run.ans[i] = k; App.save();
      el.querySelectorAll('.lt-opts .opt').forEach((b) => { const on = +b.dataset.k === k; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
      const nx = el.querySelector('#ltnext'); nx.textContent = i + 1 < items.length ? 'Next →' : 'Finish'; nx.focus();
    };
    const next = () => {
      if (run.i + 1 < items.length) { run.i++; App.save(); draw(); window.scrollTo(0, 0); return; }
      const left = run.ans.filter((a) => a == null).length;
      if (left && !confirm(left + ' question' + (left === 1 ? ' is' : 's are') + ' not answered and will count as wrong. Finish now?')) return;
      finish(el);
    };
    App.keyHandler = (e) => {
      if (e.target && e.target.matches && e.target.matches('input,textarea,select,summary')) return;
      if (/^[1-4]$/.test(e.key)) { const x = items[run.i]; if (+e.key <= x.opts.length) { e.preventDefault(); choose(+e.key - 1); } return; }
      if (e.key === 'Enter') { if (e.target && e.target.closest && e.target.closest('button,a')) return; e.preventDefault(); next(); }
    };
    function finish(el2, timeUp) {
      stopTimer(); App.onLeave = null; App.keyHandler = null;
      results(el2, run, timeUp);
    }
    if (run.timer) timer = setInterval(tick, 1000);
    draw();
  }

  /* ---------- Results ---------- */
  function results(el, run, timeUp) {
    const items = run.items, lv = run.lv, areas = {};
    let right = 0;
    items.forEach((x, i) => { const a = areas[x.area] || (areas[x.area] = [0, 0]); a[1]++; if (run.ans[i] === x.a) { a[0]++; right++; } });
    const pct = pctOf(right, items.length), at = Date.now();
    const t = store(), info = infoStore(), old = typeof t[lv] === 'number' ? t[lv] : null;
    const last = { pct, right, of: items.length, at, areas };
    if (old == null || pct >= old) { t[lv] = pct; info[lv] = { best: pct, of: items.length, at, areas, last }; }
    else info[lv] = Object.assign({ best: old, of: items.length, at, areas: {} }, info[lv] || {}, { last });
    delete S().testRun;
    App.activity(Math.max(5, right)); App.save();
    // weakest area: the lowest share right (ties: the earlier section)
    const ranked = AREAS.map(([k]) => k).filter((k) => areas[k]).sort((a, b) => areas[a][0] / areas[a][1] - areas[b][0] / areas[b][1]);
    const weak = ranked.length && areas[ranked[0]][0] < areas[ranked[0]][1] ? ranked[0] : null;
    const wrong = items.map((x, i) => [x, run.ans[i]]).filter(([x, a]) => a !== x.a);
    const qText = (x) => {
      if (x.kind === 'order') return '<span class="tl" data-norj>' + esc(x.head ? x.head + ' ' : '') + '＿ ＿ ＿ ＿ ' + esc(x.tail) + '</span> <span class="muted small">(★ = chunk ' + (x.star + 1) + ')</span>';
      if (x.kind === 'cloze' || x.kind === 'context') { const k = x.q.indexOf('＿'); return '<span class="tl" data-norj>' + esc(x.q.slice(0, k).trim()) + ' ＿＿ ' + esc(x.q.slice(k + 1).trim()) + '</span>'; }
      return '<span class="' + (x.tlq || x.big ? 'tl' : '') + '"' + (x.norj ? ' data-norj' : '') + '>' + esc(x.q) + '</span>';
    };
    const [dh, dt] = weak ? DRILL[weak](lv) : ['', ''];
    el.innerHTML = crumb([['Practice', '#/practice'], ['Level review test', '#/test'], [lv + ' result']]) + '<h1>' + esc(lv) + ' test result</h1>' +
      (timeUp ? '<div class="notice" style="margin-bottom:12px">Time is up. Unanswered questions count as wrong.</div>' : '') +
      '<div class="card stack lt-result"><div class="spread"><div><div class="lt-total">' + right + ' / ' + items.length + '</div><div class="muted small">' + pct + '%' + (old != null && pct > old ? ' · new best' : old != null ? ' · best ' + Math.max(old, pct) + '%' : '') + '</div></div>' +
      '<span class="pill ' + (pct >= 80 ? 'good' : '') + '">' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + '</span></div>' + bars(areas) +
      (weak ? '<div class="notice info lt-weak"><b>Weakest area: ' + AREA_NAME[weak] + '</b> (' + areas[weak][0] + ' / ' + areas[weak][1] + '). Practise it with <a href="' + dh + '">' + esc(dt) + '</a>.</div>' : '<div class="notice info">Everything right. Try the next level up.</div>') +
      '<div class="row" style="flex-wrap:wrap"><a class="btn primary" href="#/test">Back to the test page</a><a class="btn" href="#/progress">Progress</a></div></div>' +
      (wrong.length ? '<h2 style="margin-top:18px">To review (' + wrong.length + ')</h2><div class="stack lt-wrong">' + wrong.map(([x, a]) => {
        const good = x.opts[x.a];
        return '<div class="card stack lt-w"><div class="row"><span class="pill">' + AREA_NAME[x.area] + '</span></div><div>' + qText(x) + '</div>' + (x.sub && x.kind !== 'order' ? '<div class="muted small">' + esc(x.sub) + '</div>' : '') +
          '<div class="small">Your answer: ' + (a == null ? '<i>none</i>' : '<span class="' + (hasJa(x.opts[a]) ? 'tl' : '') + '">' + esc(x.opts[a]) + '</span>') + '</div>' +
          '<div class="small lt-right">Answer: <b class="' + (hasJa(good) ? 'tl' : '') + '">' + esc(good) + '</b></div>' +
          (x.ja && x.kind !== 'meaning' && x.kind !== 'yomi' ? '<div class="lt-full"><span class="tl">' + esc(x.ja) + '</span>' + App.sayBtn(x.ja, x.ja) + '</div>' : '') +
          (x.kind === 'order' && x.sub ? '<div class="muted small">' + esc(x.sub) + '</div>' : '') +
          (x.why ? '<div class="muted small">' + esc(x.why) + '</div>' : '') +
          (x.href ? '<div class="small"><a href="' + x.href[0] + '">' + esc(x.href[1]) + '</a></div>' : '') + '</div>';
      }).join('') + '</div>' : '');
    sameHash(el);
    window.scrollTo(0, 0);
  }
})();
