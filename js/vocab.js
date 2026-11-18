/* Vocabulary quiz (0.17.0): #/vocab (Quiz tab) and #/vocab?tab=match (topic matching, ?set=<id>).
   Quiz: dictionary words from one deck (My mistakes, By level, Vocabulary, Clinical vocabulary) in three modes:
   Meaning (Japanese → English), Recall (English → Japanese) and Reading (kanji without furigana → kana reading).
   Best % per deck and mode in state.done.vocab['<deckId>:<mode>']; the last deck in state.settings.vocabDeck.
   Matching: window.TOPIC_SETS (js/data/topic-sets.js); rounds of 6 sounds against 6 meanings. Best result in
   state.done.vocab['match:<setId>'] = { m: misses, t: seconds }.
   0.20.0: a level filter (All, N5, N4, N3, N2 (0.21.0), N1 (0.28.0, once a set has N1 words); state.settings.matchLv): a set's words at a level are those whose dictionary
   level is at or below it (C or no level: All only); sets with fewer than 6 such words are hidden; best results in
   'match:<setId>' (All) or 'match:<setId>@N5' etc. Set page modes Match / Quiz (?mode=quiz): multiple choice on the
   set's words, Meaning or Recall (state.settings.matchQuizMode), best % in 'topic:<setId>@<lv>:<mode>'.
   0.23.0: two more deck modes. In context ('<deckId>:context'): a word's example sentence (App.exampleFor) with the
   word's token blanked; choose the word in dictionary form among four of the same part of speech and level. The token is
   found by the kanji stem (or the kana stem for words in kana) and the word is skipped unless exactly one token matches.
   Type it ('<deckId>:type'): the English and part of speech; type the reading in kana or romaji (or the word in kanji).
   0.27.0: a sixth deck mode, Picture ('<deckId>:picture'). Pool: the deck's usable words that have a picture, i.e. some
   part of a picture set (App.pictures, js/pictures.js) has part.w === e.tl exactly (map tl → [{ set, part }] built once,
   lazily, skipping diagram sets whose art is missing). The question is the picture: a cards set's emoji, large, or a
   diagram set's drawing with only that part's pin shown, highlighted (App.pictures.svg, pins 'dots'; the CSS hides the
   others); one set at random when a word has several. Four Japanese options: other parts of the same set first (same
   level or lower first; never the answer's plain text, reading or English twice), filled from the deck, then the
   dictionary. Runs in App.drillRun (js/today.js); misses go to My mistakes through App.recordAnswer. */
(function () {
  const { esc, norm, shuffle, pick, icons } = App;
  const V = App.views, S = () => App.state;
  const GROUPS = ['Review', 'By level', 'Vocabulary', 'Clinical vocabulary'];
  const MODES = [['meaning', 'Meaning'], ['recall', 'Recall'], ['reading', 'Reading'], ['context', 'In context'], ['type', 'Type it'], ['picture', 'Picture']];
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
  const poolFor = (words, mode) => (mode === 'reading' ? words.filter(hasKanji) : mode === 'context' ? words.filter((e) => ctxOf(e)) : mode === 'picture' ? words.filter((e) => picsOf(e).length) : words);

  /* ---------- Picture (0.27.0) ---------- */
  // tl → [{ set, part }] over every picture set whose picture can be shown (cards with an emoji, diagrams with art).
  let picMap = null;
  const picOk = (s, p) => p && p.id && p.w && (s.kind === 'cards' ? !!p.pic : typeof p.x === 'number' && typeof p.y === 'number');
  function picIndex() {
    if (picMap) return picMap;
    const P = App.pictures;
    if (!P || typeof P.sets !== 'function') return new Map();          // js/pictures.js not loaded (yet): try again later
    picMap = new Map();
    P.sets().forEach((s) => {
      if (s.kind !== 'cards' && !P.svg(s, { pins: 'none' })) return;   // a diagram whose art is missing
      (s.parts || []).forEach((p) => { if (!picOk(s, p)) return; const k = String(p.w).trim(); if (!picMap.has(k)) picMap.set(k, []); picMap.get(k).push({ set: s, part: p }); });
    });
    return picMap;
  }
  const picsOf = (e) => (e && picIndex().get(e.tl)) || [];
  const LV_N = { N5: 1, N4: 2, N3: 3, N2: 4, N1: 5 };
  const lvN = (lv) => LV_N[lv] || 9;
  const EMOJI_FONT = "'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Segoe UI Symbol',sans-serif";
  const picHtml = (s, p) => (s.kind === 'cards'
    ? '<div class="pic-cards one vq-pcard" data-norj><div class="pic-card hl" role="img" aria-label="Picture"><span class="pic-emo" aria-hidden="true" style="font-family:' + EMOJI_FONT.replace(/'/g, '&#39;') + '">' + esc(p.pic) + '</span></div></div>'
    : '<div class="pic-wrap vq-pwrap">' + App.pictures.svg(s, { pins: 'dots', highlight: p.id, quiz: true, cls: 'vq-psvg' }) + '</div>');
  // Three wrong options { tl, en }: other parts of the same set (same level or lower first), then the deck, then the
  // dictionary; never the answer's (or another option's) plain text, reading or English.
  function picOthers(e, s, words) {
    const out = [], pl = new Set(), kn = new Set(), ens = new Set();
    const key = (tl, en) => [JA.plain(tl).replace(/\s+/g, ''), JA.toHira(JA.kana(tl)).replace(/\s+/g, ''), norm(en || '')];
    const free = (tl, en) => { const [a, b, c] = key(tl, en); return a && !pl.has(a) && !kn.has(b) && !(c && ens.has(c)); };
    const add = (tl, en) => { const [a, b, c] = key(tl, en); pl.add(a); kn.add(b); if (c) ens.add(c); };
    add(e.tl, e.en);
    const take = (list) => { for (const x of list) { if (out.length >= 3) break; if (!free(x.tl, x.en)) continue; out.push(x); add(x.tl, x.en); } };
    const mine = lvN(e.lv);
    const parts = shuffle((s.parts || []).filter((p) => picOk(s, p) && p.w !== e.tl)).map((p) => { const d = App.DICT.find((x) => x.tl === p.w); return { tl: p.w, en: p.en || (d && d.en) || '', lv: (d && d.lv) || p.lv }; });
    take(parts.filter((x) => lvN(x.lv) <= mine)); take(parts);
    const deck = shuffle(words.filter((x) => x !== e && usable(x)));
    take(deck.filter((x) => lvN(x.lv) <= mine)); take(deck);
    if (out.length < 3) take(shuffle(App.DICT.filter((x) => usable(x) && lvN(x.lv) <= mine)).slice(0, 200));
    return out;
  }
  function picQs(words, n) {
    return pick(poolFor(words, 'picture'), n).map((e) => {
      const { set: s, part: p } = pick(picsOf(e), 1)[0], o = picOthers(e, s, words);
      const opts = shuffle([{ tl: e.tl, en: e.en, ok: true }].concat(o)).map((x) => ({ h: '<span class="tl">' + esc(x.tl) + '</span>', ok: !!x.ok, x }));
      return { drill: 'vocab-picture', id: e.id, lv: e.lv,
        html: '<div class="muted small vq-pq">What is this? (' + esc(s.title || '') + ')</div>' + picHtml(s, p),
        opts,
        fb: (ok, ch) => '<div class="row vq-tw"><a class="tl vq-word" href="#/dict/' + esc(e.id) + '">' + esc(e.tl) + '</a>' + App.sayBtn(e.tl, e.tl) + '<span>= ' + esc(e.en) + '</span></div>' + (e.note ? '<div class="small muted">' + esc(e.note) + '</div>' : '') +
          (!ok && ch && ch.x ? '<div class="row vq-tw small"><span class="muted">You chose</span><span class="tl">' + esc(ch.x.tl) + '</span>' + App.sayBtn(ch.x.tl, ch.x.tl) + '<span class="muted">= ' + esc(ch.x.en || '') + '</span></div>' : '') +
          '<div class="row small vq-plinks"><a href="#/dict/' + esc(e.id) + '">Word page</a><a href="#/pictures/' + esc(s.id) + '">Open the picture</a></div>',
        done: (ok) => App.recordAnswer(ok, e.id) };
    });
  }
  App.vocabPictureCount = (lv) => App.DICT.filter((e) => usable(e) && (!lv || e.lv === lv) && picsOf(e).length).length;   // for QA

  /* ---------- In context (0.23.0) ---------- */
  // The example sentence of word e with the one token that is the word (in any form) blanked, or null.
  // Inflecting words (verbs, い-adjectives) match by their stem: the dictionary form minus its last kana, written in
  // kanji (the token starts with it and the next character is not a kanji: 食べ matches 食べました, not 食べ物), or in
  // kana for words written in kana (a stem of two kana or more). Other words match the token as a whole.
  const INFL = { v1: 1, v5: 1, vi: 1, ai: 1 };
  const TOK_RE = /^([「『（(]*)(.*?)([。、？！，．」』）)…]*)$/;
  const ctxCache = new Map();
  function ctxOf(e) {
    if (!e) return null;
    if (ctxCache.has(e.id)) return ctxCache.get(e.id);
    let r = null;
    const ex = App.exampleFor(e);
    const w = JA.plain(e.tl).trim(), wk = JA.toHira(JA.kana(e.tl)).trim();
    if (ex && ex[0] && w && !/\s/.test(w)) {
      const infl = !!INFL[e.pos] && [...w].length >= 2;
      const ks = infl ? w.slice(0, -1) : w, kk = infl ? wk.slice(0, -1) : wk;
      const kanjiStem = KANJI_RE.test(ks);
      const toks = String(ex[0]).split(' '), hits = [];
      toks.forEach((t, i) => {
        const m = t.match(TOK_RE), core = m ? m[2] : t;
        if (!core) return;
        const p = JA.plain(core), k = JA.toHira(JA.kana(core)), kanaTok = !KANJI_RE.test(p);
        let ok;
        if (e.pos === 'vs' && core.startsWith(e.tl) && /^[しすさせ]/.test(core.slice(e.tl.length))) ok = 'vs';   // 紹介しました: blank 紹介 only
        else if (!infl) ok = p === w || (kanaTok && k === wk);
        else ok = (kanjiStem && p.startsWith(ks) && !KANJI_RE.test(p.charAt(ks.length))) || (kanaTok && [...kk].length >= 2 && k.startsWith(kk));
        if (ok) hits.push([i, ok]);
      });
      if (hits.length === 1) {
        const at = hits[0][0], m = toks[at].match(TOK_RE) || ['', '', toks[at], ''];
        const blank = m[1] + '＿' + (hits[0][1] === 'vs' ? m[2].slice(e.tl.length) : '') + m[3];
        r = { s: toks.map((t, i) => (i === at ? blank : t)).join(' '), full: ex[0], en: ex[1] || '' };
      }
    }
    ctxCache.set(e.id, r);
    return r;
  }
  // Three other dictionary words of the same part of speech and level (then any level), shown in dictionary form.
  function ctxOthers(e) {
    const out = [], ens = new Set([norm(e.en)]), tls = new Set([e.ftl]), kns = new Set([e.kn]);
    const take = (list) => { for (const x of list) { if (out.length >= 3) break; if (!usable(x) || /\s/.test(JA.plain(x.tl).trim()) || ens.has(norm(x.en)) || tls.has(x.ftl) || kns.has(x.kn)) continue; out.push(x); ens.add(norm(x.en)); tls.add(x.ftl); kns.add(x.kn); } };
    take(shuffle(App.DICT.filter((x) => x !== e && x.pos === e.pos && x.lv === e.lv)));
    if (out.length < 3) take(shuffle(App.DICT.filter((x) => x !== e && x.pos === e.pos)));
    // 来る and する are the only irregular verbs: fill up with other verbs of the same level, then any verb.
    if (out.length < 3 && e.pos === 'vi') { take(shuffle(App.DICT.filter((x) => x !== e && /^v/.test(x.pos) && x.lv === e.lv))); take(shuffle(App.DICT.filter((x) => x !== e && /^v/.test(x.pos)))); }
    return out;
  }
  const CTX_HINT = 'Choose the word; it may change its ending in the sentence.';
  const LVS = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const perLevel = (ws) => { const c = {}; ws.forEach((e) => { const k = LVS.includes(e.lv) ? e.lv : 'other'; c[k] = (c[k] || 0) + 1; }); return LVS.concat('other').filter((k) => c[k]).map((k) => (k === 'other' ? 'other ' : k + ' ') + c[k]).join(' · '); };
  App.vocabContextOf = ctxOf;
  App.vocabContextCount = () => { const c = {}; App.DICT.filter(usable).forEach((e) => { if (ctxOf(e)) c[e.lv || '-'] = (c[e.lv || '-'] || 0) + 1; }); return c; };   // for QA and the report

  /* ---------- Type it (0.23.0) ---------- */
  // Typed answers: kana (hiragana or katakana), romaji (as in js/listen.js dictation) or the word as written in kanji.
  const normRomaji = (s) => String(s || '').toLowerCase().normalize('NFC')
    .replace(/ā/g, 'aa').replace(/ī/g, 'ii').replace(/ū/g, 'uu').replace(/ē/g, 'ee').replace(/[ōô]/g, 'ou').replace(/[âû]/g, (c) => (c === 'â' ? 'aa' : 'uu'))
    .replace(/[\s'’\-.]/g, '').replace(/oo/g, 'ou').replace(/oh(?=[^aiueo]|$)/g, 'ou')
    .replace(/si/g, 'shi').replace(/tu/g, 'tsu').replace(/(^|[^sc])hu/g, '$1fu').replace(/zi/g, 'ji').replace(/m(?=[bpm])/g, 'n');
  const clean = (s) => String(s || '').normalize('NFKC').replace(/[\s。、？！?!,.，．〜～]/g, '');
  function typedOk(typed, e) {
    const t = clean(typed);
    if (!t) return false;
    const alts = [e].concat(App.DICT.filter((x) => x !== e && x.nen === e.nen && x.pos === e.pos));
    return alts.some((x) => {
      if (KANJI_RE.test(t)) return t === clean(JA.plain(x.tl)) || JA.toHira(t) === JA.toHira(clean(JA.plain(x.tl)));
      if (/[ぁ-ヺー]/.test(t)) return JA.toHira(t) === x.kn;
      const r = normRomaji(t);
      return r === normRomaji(JA.kanaToRomaji(x.kn)) || r === normRomaji(JA.romaji(x.tl));
    });
  }
  // One round of typed answers; onDone(right, n). Misses go to My mistakes through App.recordAnswer.
  function typeRun(box, words, n, onDone) {
    const qs = pick(words, n);
    let i = 0, right = 0;
    const draw = () => {
      if (i >= qs.length) return onDone(right, qs.length);
      const e = qs[i];
      box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span><span class="muted small">' + right + ' right</span></div>' +
        '<div class="progress"><i style="width:' + Math.round((100 * i) / qs.length) + '%"></i></div>' +
        '<div style="font-size:1.12rem;font-weight:600">' + esc(e.en) + '</div>' + (App.POS[e.pos] ? '<div class="muted">' + esc(App.POS[e.pos]) + '</div>' : '') +
        '<label class="small muted" for="vqtype">Type the Japanese in kana or romaji</label>' +
        '<input class="input" id="vqtype" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="ja" enterkeyhint="done">' +
        '<div class="row vq-tybtns"><button class="btn primary" id="vqcheck">Check</button><button class="btn" id="vqidk">I don\'t know</button></div><div data-fb></div></div>';
      const inp = box.querySelector('#vqtype');
      const answer = (typed, gaveUp) => {
        const ok = !gaveUp && typedOk(typed, e);
        if (!gaveUp && !clean(typed)) { App.toast('Type the word first, or choose I don\'t know.'); inp.focus(); return; }
        if (ok) right++;
        App.recordAnswer(ok, e.id);
        inp.readOnly = true; box.querySelector('.vq-tybtns').hidden = true;
        box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack" style="gap:6px"><div><b>' + (ok ? LANG.quiz.right : gaveUp ? 'The answer:' : LANG.quiz.wrong) + '</b>' + (!ok && !gaveUp ? ' <span class="muted small">You typed: ' + esc(typed) + '</span>' : '') + '</div>' +
          '<div class="row vq-ans"><a class="tl" href="#/dict/' + esc(e.id) + '" style="font-size:1.2rem;font-weight:600">' + esc(e.tl) + '</a>' + App.sayBtn(e.tl, e.tl) + '</div>' +
          '<div class="small">' + esc(e.en) + (e.note ? ' · ' + esc(e.note) : '') + ' · <a href="#/dict/' + esc(e.id) + '">Word page</a></div></div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
        const nx = box.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); const f = box.querySelector('#vqtype'); if (f) f.focus(); };
        nx.focus();
      };
      box.querySelector('#vqcheck').onclick = () => answer(inp.value, false);
      box.querySelector('#vqidk').onclick = () => answer('', true);
      inp.onkeydown = (ev) => { if (ev.key === 'Enter' && !inp.readOnly) { ev.preventDefault(); answer(inp.value, false); } };
    };
    draw();
  }

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
      if (mode === 'context') {
        const c = ctxOf(e), o = [e].concat(ctxOthers(e));
        return { q: c.s, sub: c.en, opts: o.map((x) => x.tl), a: 0, exp: e.tl + ' = ' + e.en + '. ' + c.full + ' ' + c.en, tlq: true, tlo: true, cardId: e.id, after: c.full, word: e };
      }
      if (mode === 'reading') return { q: JA.speak(e.tl), sub: e.en, opts: readingOpts(e, words), a: 0, exp, cardId: e.id, after: e.tl };
      const o = [e].concat(others(e, words));
      if (mode === 'recall') return { q: e.en, sub, opts: o.map((x) => x.tl), a: 0, exp, tlo: true, cardId: e.id, after: e.tl };
      return { q: e.tl, sub, opts: o.map((x) => x.en), a: 0, exp, tlq: true, cardId: e.id, say: e.tl };
    });
  }

  // 0.25.0: Meaning questions for Today's practice (js/today.js, shared shape of App.drillRun): App.vocabQs([dictionary ids])
  // (from My mistakes) or App.vocabQs(lv, n) (new words of one level). Options as in the Meaning mode (others() above).
  // A right answer takes the word off My mistakes (state.mistakes); a wrong one puts it there (App.recordAnswer).
  const drillQ = (e) => {
    const pool = App.DICT.filter((x) => x.lv === e.lv && usable(x)), o = others(e, pool.length >= 8 ? pool : App.DICT);
    if (o.length < 3) return null;
    return { drill: 'vocab', id: e.id, lv: e.lv,
      html: '<div class="muted small">What does this word mean?</div><div class="row vq-tw"><span class="tl vq-word">' + esc(e.tl) + '</span>' + App.sayBtn(e.tl, e.tl) + '</div>' + (App.POS[e.pos] ? '<div class="muted small">' + esc(App.POS[e.pos]) + '</div>' : ''),
      opts: shuffle([e].concat(o)).map((x) => ({ h: esc(x.en), ok: x === e, x })),
      fb: (ok, ch) => '<div class="row vq-tw"><span class="tl">' + esc(e.tl) + '</span>' + App.sayBtn(e.tl, e.tl) + '<span>= ' + esc(e.en) + '</span></div>' + (e.note ? '<div class="small muted">' + esc(e.note) + '</div>' : '') +
        (!ok && ch ? '<div class="small muted">Your choice means the word <span class="tl">' + esc(ch.x.tl) + '</span>.</div>' : '') + '<div class="small"><a href="#/dict/' + esc(e.id) + '">Word page</a></div>',
      done: (ok) => { App.recordAnswer(ok, e.id); if (ok) S().mistakes = (S().mistakes || []).filter((x) => x !== e.id); } };
  };
  App.vocabQs = (lv, n) => {
    if (Array.isArray(lv)) return lv.map((id) => App.dictById[id]).filter(usable).map(drillQ).filter(Boolean);
    return pick(App.DICT.filter((e) => usable(e) && (!lv || lv === 'all' || e.lv === lv)), n || 10).map(drillQ).filter(Boolean);
  };

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
      if (n < 4) return '<div class="notice">' + (deck.id === 'mistakes' && !words.length ? 'No dictionary words in My mistakes yet. Words you miss in any quiz or flashcard land there.' : 'This deck has ' + n + ' word' + (n === 1 ? '' : 's') + ' usable for ' + (mode === 'reading' ? 'the Reading mode (words written with kanji)' : mode === 'picture' ? 'the Picture mode (words that appear in Picture words)' : 'this quiz') + '; at least 4 are needed. Choose another deck or mode.') + '</div>';
      if (mode === 'context') return '<p class="muted small" style="margin:0">' + n + ' words in this deck have an example sentence with the word in it (' + perLevel(poolFor(words, mode)) + ')' + (n < count ? '; the quiz uses all of them' : '') + '.</p><p class="small" style="margin:4px 0 0">' + CTX_HINT + '</p>';
      if (mode === 'picture') return '<p class="muted small" style="margin:0">' + n + ' words in this deck have a picture' + (n < count ? '; the quiz uses all of them' : '') + '.</p>';
      if (mode === 'type') return '<p class="muted small" style="margin:0">' + n + ' words in this deck' + (n < count ? '; the quiz uses all of them' : '') + '. Read the English, type the word in kana or romaji (kanji also counts).</p>';
      return '<p class="muted small" style="margin:0">' + n + ' words in this deck' + (mode === 'reading' ? ' are written with kanji' : '') + (n < count ? '; the quiz uses all of them' : '') + '.</p>';
    };
    el.innerHTML = '<h1>Vocabulary quiz</h1>' + tabs('quiz') +
      '<p class="muted">Test the words of any deck six ways: <b>Meaning</b> (read the Japanese, choose the English), <b>Recall</b> (from the English, choose the Japanese), <b>Reading</b> (kanji without furigana, choose the reading), <b>In context</b> (choose the word missing from an example sentence), <b>Type it</b> (from the English, type the word) and <b>Picture</b> (see the picture, choose the word). Misses go to <b>My mistakes</b> in the flashcards.</p>' +
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
      const words = wordsOf(deck), m = mode, d = deck;
      if (poolFor(words, m).length < 4) return;
      if (!S().settings.vocabDeck) { st.vocabDeck = deck.id; App.save(); }
      const saveBest = (r, n) => {
        const pct = Math.round((100 * r) / n), k = d.id + ':' + m;
        best()[k] = Math.max(pct, best()[k] || 0);
        App.activity(10); App.save();
        if (el.querySelector('#vqmode')) refresh();
        return pct;
      };
      App.keyHandler = keys;                     // a Picture round (App.drillRun) installs its own; take the page's back
      if (m === 'picture') {
        box.removeAttribute('data-norj'); box.onclick = null;
        return App.drillRun(box, picQs(words, count), {
          onDone: (r, n) => {
            saveBest(r, n); App.keyHandler = keys;
            return '<button type="button" class="btn primary" data-act="retry">New round</button><a class="btn" href="#/flash/mistakes">My mistakes</a>';
          },
          bind: (c) => { const a = c.querySelector('[data-act=retry]'); if (a) a.onclick = run; }
        });
      }
      if (m === 'type') {
        box.removeAttribute('data-norj'); box.onclick = null;
        return typeRun(box, words, count, (r, n) => {
          const pct = saveBest(r, n);
          box.innerHTML = '<div class="card stack"><h3>' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + r + ' / ' + n + '</h3><div class="progress"><i style="width:' + pct + '%"></i></div>' +
            '<div class="row"><button class="btn primary" data-act="retry">New round</button><a class="btn" href="#/flash/mistakes">My mistakes</a></div></div>';
          box.querySelector('[data-act=retry]').onclick = run;
          box.querySelector('[data-act=retry]').focus();
        });
      }
      const qs = makeQs(words, m, count);
      // In context: the hint stays above the questions; runQuiz draws into the inner box.
      let qbox = box;
      if (m === 'context') { box.innerHTML = '<p class="small muted vq-hint">' + CTX_HINT + '</p><div class="vq-in"></div>'; qbox = box.querySelector('.vq-in'); }
      // Reading: no romaji anywhere in the quiz box (it would give the reading away), and no sound before answering.
      box.toggleAttribute('data-norj', m === 'reading');
      box.onclick = (ev) => {
        const o = ev.target.closest('.opt'); if (!o) return;
        const i = +((box.querySelector('.eyebrow') || {}).textContent || '').replace(/\D+(\d+).*/, '$1') - 1;
        const qq = qs[i]; if (!qq || !qq.after) return;
        const row = box.querySelector('[data-fb] .row');
        if (row && !row.querySelector('.say')) row.insertAdjacentHTML('beforeend', App.sayBtn(qq.after, qq.after));
        if (row && qq.word && !row.querySelector('.vq-wl')) row.insertAdjacentHTML('beforeend', '<a class="btn vq-wl" href="#/dict/' + esc(qq.word.id) + '">Word page</a>');
      };
      App.runQuiz(qbox, qs, {
        after: '<a class="btn" href="#/flash/mistakes">My mistakes</a>',
        onDone: (r, n) => {
          saveBest(r, n);
          const again = box.querySelector('[data-act=retry]'); if (again) { again.textContent = 'New round'; again.onclick = run; }
        }
      });
    };
    el.querySelector('#vqgo').onclick = () => { run(); box.scrollIntoView({ block: 'start', behavior: 'smooth' }); };
    // Keyboard: 1-4 choose an option, Enter goes on (outside the typing field, which has its own Enter).
    const keys = (ev) => {
      if (ev.altKey || ev.ctrlKey || ev.metaKey || ev.target.matches('input,textarea,select')) return;
      if (/^[1-4]$/.test(ev.key)) { const o = box.querySelectorAll('.opt:not(:disabled)')[+ev.key - 1]; if (o) { ev.preventDefault(); o.click(); } return; }
      if (ev.key === 'Enter' && !ev.target.closest('button,a')) { const nx = box.querySelector('[data-act=next]'); if (nx) { ev.preventDefault(); nx.click(); } }
    };
    App.keyHandler = keys;
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

  // Level filter (0.20.0). N5 < N4 < N3 < N2 < N1; C (clinical) or no level counts as above N1, so such words show only under All.
  // 0.28.0: N1 is offered only once some topic set has an N1 word (until then it would list the same sets as N2).
  const MLV_ALL = ['All', 'N5', 'N4', 'N3', 'N2', 'N1'];
  let mlvCache = null;
  const mlv = () => mlvCache || (mlvCache = MLV_ALL.filter((k) => k !== 'N1' || (window.TOPIC_SETS || []).some((s) => setWords(s).some((e) => e.lv === 'N1'))));
  const LV_RANK = { N5: 1, N4: 2, N3: 3, N2: 4, N1: 5 };
  const MIN_LV = 6;
  const matchLv = () => (mlv().includes(S().settings.matchLv) ? S().settings.matchLv : 'All');
  const atLevel = (e, lv) => lv === 'All' || (LV_RANK[e.lv] || 99) <= LV_RANK[lv];
  const levelWords = (s, lv) => setWords(s).filter((e) => atLevel(e, lv));
  const shown = (s, lv) => levelWords(s, lv).length >= (lv === 'All' ? 2 : MIN_LV);
  const matchKey = (s, lv) => 'match:' + s.id + (lv === 'All' ? '' : '@' + lv);
  const quizKey = (s, lv, m) => 'topic:' + s.id + '@' + lv + ':' + m;
  const QMODES = MODES.filter((m) => m[0] === 'meaning' || m[0] === 'recall');
  const lvSeg = (cur, avail) => '<div class="seg vm-lv" role="group" aria-label="Level" data-norj>' + mlv().map((k) => '<button type="button" data-mlv="' + k + '" aria-pressed="' + (cur === k) + '" class="' + (cur === k ? 'on' : '') + '"' + (avail && !avail.includes(k) ? ' disabled' : '') + '>' + k + '</button>').join('') + '</div>';
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
    const avail = mlv().filter((k) => shown(set, k));
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
