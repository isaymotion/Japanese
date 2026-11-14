/* Listening practice (#/listen, 0.17.0). Four tabs (?tab=):
   hear (default)  words or sentences of a level, hear one and choose the meaning (App.runQuiz with hideQ)
   dict            dictation: hear a word, build it from kana tiles or type it (kana or romaji)
   pairs           sound pairs (window.SOUND_PAIRS): hear one of two near-identical words and choose which
   story           questions on whole dialogues, readings and case simulations (window.LISTEN_Q keyed by DIALOGUES / READING id,
                   or 'case-<case id>' from js/data/listen-questions-2.js, 0.18.0: the best-path dialogue of App.caseDialogue; ?id=)
   Level (Starter, N5, N4, N3) is remembered in state.settings.listenLv; best scores in state.done.listen2[tab + ':' + variant].
   Modelled on V.psychListen (js/point-listen.js). */
(function () {
  const { esc, shuffle, pick, icons, norm } = App;
  const V = App.views;
  const S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LEVELS = ['Starter', 'N5', 'N4', 'N3'];
  const SPEEDS = [['slow', 'Slower', 0.7], ['natural', 'Natural', 0.9], ['fast', 'Fast', 1.05]];
  const TABS = [['hear', 'Hear'], ['dict', 'Dictation'], ['pairs', 'Sound pairs'], ['story', 'Dialogues and readings']];
  const INTRO = {
    hear: 'Hear a word or a sentence of your level and choose what it means. The text appears only after you answer.',
    dict: 'Hear a word and spell it in kana: tap the tiles, or type it in kana or romaji. Small ゃ ゅ ょ っ and the long-vowel mark ー are tiles of their own.',
    pairs: 'Words that differ by one sound: a long vowel, a small っ, a voiced sound. Hear one and choose which it was.',
    story: 'Hear a whole dialogue, reading or case simulation first, then answer questions about it. Keep the text hidden until you have tried.'
  };
  const st = { speed: 'natural', src: 'words', type: '' };
  const rate = () => (SPEEDS.find((s) => s[0] === st.speed) || SPEEDS[1])[2];
  const level = () => { const v = S().settings.listenLv; return LEVELS.includes(v) ? v : 'N5'; };
  const best = (key, pct) => {
    const d = S().done; d.listen2 = d.listen2 || {};
    d.listen2[key] = Math.max(pct, d.listen2[key] || 0);
    App.activity(10); App.save();
  };
  const bestOf = (key) => ((S().done.listen2 || {})[key]);
  const seg = (label, items, cur, attr) => '<div class="seg" role="group" aria-label="' + label + '">' + items.map(([k, t]) => '<button type="button" data-' + attr + '="' + esc(k) + '" class="' + (cur === k ? 'on' : '') + '" aria-pressed="' + (cur === k) + '">' + esc(t) + '</button>').join('') + '</div>';
  // Speak a list in turn, like App.speakAll, but at the chosen speed; App.stopSpeech() (or leaving the page) stops it.
  const speakSeq = async (texts, gapMs, onStep) => {
    const tok = (App._seq = (App._seq || 0) + 1);
    for (let i = 0; i < texts.length; i++) {
      if (App._seq !== tok) return false;
      if (onStep) onStep(i);
      await App.speakAsync(texts[i], { rate: rate() });
      if (gapMs) await new Promise((r) => setTimeout(r, gapMs));
    }
    return App._seq === tok;
  };

  /* ---------- Pools ---------- */
  const KANA_ONLY = /^[ぁ-ゖァ-ヺー]+$/;
  // Dictionary entries of a level. The dictionary has no Starter level: Starter = N5 words written in kana only
  // (all N5 words if there are too few of them).
  const wordsOf = (lv) => {
    const all = App.DICT.filter((e) => e.lv === (lv === 'Starter' ? 'N5' : lv) && !/＿/.test(e.tl) && (e.tl.trim().match(/ /g) || []).length <= 2 && e.en);
    if (lv !== 'Starter') return all;
    const kana = all.filter((e) => KANA_ONLY.test(JA.plain(e.tl).replace(/\s/g, '')));
    return kana.length >= 8 ? kana : all;
  };
  const deHtml = (h) => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent.trim(); };
  const cleanEn = (en) => { const s = en.replace(/\s*\([^()]*\)\s*$/, '').trim(); return s || en.trim(); };
  let sentCache = null;
  const sentences = () => {
    if (sentCache) return sentCache;
    const out = [], seen = new Set();
    const add = (ja, en, lv) => {
      ja = (ja || '').trim(); en = cleanEn(en || '');
      if (!ja || !en || /＿/.test(ja) || !JA.hasJa(ja) || !LEVELS.includes(lv)) return;
      const k = App.flat(ja); if (seen.has(k)) return; seen.add(k);
      out.push({ ja, en, lv });
    };
    const re = /<div class="ex"><b>([\s\S]*?)<\/b><span>([\s\S]*?)<\/span><\/div>/g;
    (window.LESSONS || []).forEach((l) => { let m; re.lastIndex = 0; while ((m = re.exec(l.body || ''))) add(deHtml(m[1]), deHtml(m[2]), l.level); });
    const byKey = new Map(App.DICT.map((e) => [App.flat(e.tl) + '|' + norm(e.en), e]));
    (window.DICT_EX || []).forEach(([key, ja, en]) => {
      const at = String(key).lastIndexOf('|'); if (at < 0) return;
      const e = byKey.get(App.flat(key.slice(0, at)) + '|' + norm(key.slice(at + 1)));
      if (e) add(ja, en, e.lv);
    });
    return (sentCache = out);
  };

  /* ---------- Hear ---------- */
  const hearQs = (lv) => {
    if (st.src === 'words') {
      const pool = wordsOf(lv);
      if (pool.length < 4) return null;
      return pick(pool, Math.min(10, pool.length)).map((e) => {
        const used = new Set([norm(e.en)]), d = [];
        const take = (list) => { for (const x of shuffle(list)) { if (d.length >= 3) break; const k = norm(x.en); if (!used.has(k)) { used.add(k); d.push(x.en); } } };
        take(pool.filter((x) => x !== e && x.cat === e.cat));
        if (d.length < 3) take(pool.filter((x) => x !== e));
        if (d.length < 3) take(App.DICT.filter((x) => x !== e));
        return { q: e.tl, say: e.tl, rate: rate(), hideQ: 'Listen, then choose the meaning.', opts: [e.en].concat(d), a: 0, cardId: e.id, exp: e.tl + ' — ' + e.en };
      });
    }
    const pool = sentences().filter((s) => s.lv === lv);
    if (pool.length < 4) return null;
    return pick(pool, Math.min(10, pool.length)).map((s) => {
      const used = new Set([norm(s.en)]), d = [];
      const near = pool.filter((x) => x !== s).map((x) => [x, Math.abs(x.en.length - s.en.length)]).sort((a, b) => a[1] - b[1]).slice(0, 12).map((x) => x[0]);
      for (const x of shuffle(near).concat(shuffle(pool))) { if (d.length >= 3) break; const k = norm(x.en); if (x !== s && !used.has(k)) { used.add(k); d.push(x.en); } }
      return { q: s.ja, say: s.ja, rate: rate(), hideQ: 'Listen, then choose the meaning.', opts: [s.en].concat(d), a: 0, exp: s.ja + ' — ' + s.en };
    });
  };
  const drawHear = (box) => {
    const lv = level(), qs = hearQs(lv);
    box.innerHTML = '<div class="row lp-ctl">' + seg('Source', [['words', 'Words'], ['sentences', 'Sentences']], st.src, 'src') + '</div><div id="lpq"></div>';
    box.querySelectorAll('[data-src]').forEach((b) => (b.onclick = () => { st.src = b.dataset.src; drawHear(box); }));
    const q = box.querySelector('#lpq');
    if (!qs) { q.innerHTML = '<div class="notice">Not enough ' + st.src + ' at this level yet. Choose another level.</div>'; return; }
    const key = 'hear:' + st.src + ':' + lv;
    App.runQuiz(q, qs, { onDone: (r, n) => best(key, Math.round((100 * r) / n)) });
  };

  /* ---------- Dictation ---------- */
  const toKata = (s) => s.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
  const KATA_ONLY = /^[ァ-ヺー]+$/;
  const dictPool = (lv) => wordsOf(lv).filter((e) => {
    if (/\s/.test(e.tl.trim())) return false;
    const p = JA.plain(e.tl);
    if (KATA_ONLY.test(p)) return p.length >= 2 && p.length <= 7;
    return /^[ぁ-ゖー]+$/.test(e.kn) && e.kn.length >= 2 && e.kn.length <= 7;
  });
  const answerOf = (e) => { const p = JA.plain(e.tl); return KATA_ONLY.test(p) ? p : e.kn; };
  // Confusable kana, written in hiragana; katakana words use the katakana shapes below.
  const PAIRS_H = ['かが', 'きぎ', 'くぐ', 'けげ', 'こご', 'さざ', 'しじ', 'すず', 'せぜ', 'そぞ', 'ただ', 'ちぢじ', 'つづずっ', 'てで', 'とど', 'はばぱ', 'ひびぴ', 'ふぶぷ', 'へべぺ', 'ほぼぽ',
    'やゃ', 'ゆゅ', 'よょ', 'あぁ', 'いぃ', 'うぅ', 'えぇ', 'おぉ'];
  const SHAPE_H = ['ぬめ', 'ねれわ', 'るろ', 'さちき', 'はほ', 'いり', 'しつ', 'あお', 'まも', 'こに', 'うら', 'たな'];
  const SHAPE_K = ['シツ', 'ソン', 'クケタ', 'ウワ', 'コユ', 'ヌス', 'チテ', 'アマ', 'ロコ', 'ノメ', 'ラヲ'];
  const COMMON = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわん';
  const tilesFor = (ans, kata) => {
    const conv = kata ? toKata : (s) => s;
    const groups = PAIRS_H.map(conv).concat(kata ? SHAPE_K : SHAPE_H);
    const chars = [...ans], inAns = new Set(chars), cand = [];
    const add = (c) => { if (c && !inAns.has(c) && !cand.includes(c)) cand.push(c); };
    shuffle(chars).forEach((c) => groups.forEach((g) => { if (g.includes(c)) [...g].forEach(add); }));
    // Long vowels: an extra う or ー; and ん.
    if (kata) add('ー'); else { add('う'); add('い'); }
    add(conv('ん'));
    const n = Math.min(6, Math.max(4, chars.length - 1));
    let dis = shuffle(cand.slice(0, 10)).slice(0, n);
    for (const c of shuffle([...conv(COMMON)])) { if (dis.length >= n) break; if (!inAns.has(c) && !dis.includes(c)) dis.push(c); }
    return shuffle(chars.concat(dis));
  };
  const normRomaji = (s) => String(s || '').toLowerCase().normalize('NFC')
    .replace(/ā/g, 'aa').replace(/ī/g, 'ii').replace(/ū/g, 'uu').replace(/ē/g, 'ee').replace(/[ōô]/g, 'ou').replace(/[âû]/g, (c) => (c === 'â' ? 'aa' : 'uu'))
    .replace(/[\s'’\-.]/g, '').replace(/oo/g, 'ou').replace(/oh(?=[^aiueo]|$)/g, 'ou')
    .replace(/si/g, 'shi').replace(/tu/g, 'tsu').replace(/(^|[^sc])hu/g, '$1fu').replace(/zi/g, 'ji').replace(/m(?=[bpm])/g, 'n');
  const matches = (typed, ans) => {
    const t = String(typed || '').trim().replace(/\s+/g, '');
    if (!t) return false;
    if (/[ぁ-ヺー]/.test(t)) return JA.toHira(t) === JA.toHira(ans);
    return normRomaji(t) === normRomaji(JA.romaji(ans));
  };
  const drawDict = (box) => {
    const lv = level(), pool = dictPool(lv);
    if (pool.length < 3) { box.innerHTML = '<div class="notice">Not enough words at this level yet. Choose another level.</div>'; return; }
    const words = pick(pool, Math.min(10, pool.length));
    let i = 0, right = 0;
    const one = () => {
      if (i >= words.length) {
        const pct = Math.round((100 * right) / words.length);
        box.innerHTML = '<div class="card stack"><h3>' + right + ' / ' + words.length + ' spelled right</h3><div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><button class="btn primary" id="lpagain">New set</button></div></div>';
        box.querySelector('#lpagain').onclick = () => drawDict(box);
        best('dict:' + lv, pct);
        return;
      }
      const e = words[i], ans = answerOf(e), kata = KATA_ONLY.test(ans);
      const tiles = tilesFor(ans, kata).map((c) => ({ c, used: false }));
      const built = [];
      let checked = false;
      const play = () => App.speak(e.tl, { rate: rate() });
      box.innerHTML = '<div class="card stack" data-norj><div class="spread"><span class="eyebrow">Word ' + (i + 1) + ' of ' + words.length + '</span><span class="small muted">' + (kata ? 'Katakana' : 'Hiragana') + ', ' + [...ans].length + ' tiles</span></div>' +
        '<div class="listen-q"><button class="btn primary" id="lpplay">' + icons.sound + ' Play again</button><span class="muted small">Listen, then spell the word.</span></div>' +
        '<div class="lp-built" id="lpbuilt" aria-live="polite"></div>' +
        '<div class="lp-tiles" id="lptiles"></div>' +
        '<div class="row"><button class="btn sm" id="lpback" aria-label="Remove the last character">⌫</button><button class="btn sm ghost" id="lpclear">Clear</button></div>' +
        '<label class="small" for="lptype">Or type it (kana or romaji)</label><input class="input" id="lptype" autocomplete="off" autocapitalize="off" spellcheck="false" lang="ja">' +
        '<div class="row"><button class="btn primary" id="lpcheck">Check</button></div><div id="lpfb"></div></div>';
      const $ = (s) => box.querySelector(s);
      const paint = () => {
        $('#lpbuilt').innerHTML = built.length
          ? built.map((t, k) => '<button type="button" class="lp-ch"' + (k === built.length - 1 && !checked ? ' data-pop="1" aria-label="Remove ' + esc(tiles[t].c) + '"' : ' disabled') + '>' + esc(tiles[t].c) + '</button>').join('')
          : '<span class="muted small">Tap the tiles in order.</span>';
        $('#lptiles').innerHTML = tiles.map((t, k) => '<button type="button" class="lp-tile" data-t="' + k + '"' + (t.used || checked ? ' disabled' : '') + '>' + esc(t.c) + '</button>').join('');
        box.querySelectorAll('[data-t]').forEach((b) => (b.onclick = () => { const k = +b.dataset.t; if (tiles[k].used) return; tiles[k].used = true; built.push(k); paint(); }));
        const pop = box.querySelector('[data-pop]'); if (pop) pop.onclick = back;
      };
      const back = () => { if (checked || !built.length) return; tiles[built.pop()].used = false; paint(); };
      $('#lpplay').onclick = play;
      $('#lpback').onclick = back;
      $('#lpclear').onclick = () => { if (checked) return; built.length = 0; tiles.forEach((t) => (t.used = false)); paint(); };
      $('#lptype').onkeydown = (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); $('#lpcheck').click(); } };
      $('#lpcheck').onclick = () => {
        if (checked) return;
        const typed = $('#lptype').value.trim(), fromTiles = built.map((k) => tiles[k].c).join('');
        if (!typed && !fromTiles) { App.toast('Tap the tiles or type the word first.'); return; }
        const ok = typed ? matches(typed, ans) : fromTiles === ans;
        checked = true; if (ok) right++;
        App.recordAnswer(ok, e.id);
        paint();
        $('#lptype').disabled = true; $('#lpcheck').disabled = true; $('#lpback').disabled = true; $('#lpclear').disabled = true;
        const yours = typed || fromTiles;
        $('#lpfb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack"><div><b>' + (ok ? 'Right.' : 'Not quite.') + '</b>' + (ok ? '' : ' You wrote <span class="lp-yours">' + esc(yours) + '</span>.') + '</div>' +
          '<div class="lp-ans"><span class="lp-kana">' + esc(ans) + '</span><span class="muted small">' + esc(JA.romaji(ans)) + '</span></div>' +
          '<div class="row"><span class="tl lp-word">' + esc(e.tl) + '</span>' + App.sayBtn(e.tl) + '<span>' + esc(e.en) + '</span></div></div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" id="lpnext">' + (i + 1 < words.length ? 'Next' : 'See score') + '</button></div>';
        $('#lpnext').onclick = () => { i++; one(); };
        $('#lpnext').focus();
        play();
      };
      paint();
      setTimeout(play, 150);
    };
    one();
  };

  /* ---------- Sound pairs ---------- */
  const SP = () => window.SOUND_PAIRS || { guide: [], items: [] };
  const drawPairs = (box) => {
    const guide = SP().guide.filter((g) => SP().items.some((it) => it[0] === g[0]));
    if (!SP().items.length) { box.innerHTML = '<div class="notice">The sound pairs are not written yet.</div>'; return; }
    if (st.type && !guide.some((g) => g[0] === st.type)) st.type = '';
    const g = guide.find((x) => x[0] === st.type);
    const pool = SP().items.filter((it) => !st.type || it[0] === st.type);
    const set = pick(pool, Math.min(10, pool.length)).map((it) => ({ it, which: Math.random() < 0.5 ? 0 : 1 }));
    const key = 'pairs:' + (st.type || 'all');
    box.innerHTML = '<div class="row lp-ctl">' + seg('Type', [['', 'All']].concat(guide.map((x) => [x[0], x[1]])), st.type, 'type') + '</div>' +
      '<div class="card lp-guide">' + (g ? '<b>' + esc(g[1]) + '.</b> ' + esc(g[2]) : '<b>All types.</b> ' + esc(guide.map((x) => x[1]).join(', ')) + ', mixed. Choose a type to read how it works.') + '</div><div id="lpq"></div>';
    box.querySelectorAll('[data-type]').forEach((b) => (b.onclick = () => { st.type = b.dataset.type; drawPairs(box); }));
    const q = box.querySelector('#lpq');
    let i = 0, right = 0;
    const one = () => {
      if (i >= set.length) {
        const pct = Math.round((100 * right) / set.length);
        q.innerHTML = '<div class="card stack"><h3>' + right + ' / ' + set.length + ' heard right</h3><div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><button class="btn primary" id="lpagain">New set</button></div></div>';
        q.querySelector('#lpagain').onclick = () => drawPairs(box);
        best(key, pct);
        return;
      }
      const { it, which } = set[i];
      const words = [[it[1], it[2]], [it[3], it[4]]];
      const heard = words[which][0];
      const play = () => App.speak(heard, { rate: rate() });
      q.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Pair ' + (i + 1) + ' of ' + set.length + '</span></div>' +
        '<div class="listen-q"><button class="btn primary" id="lpplay">' + icons.sound + ' Play again</button><span class="muted small">Which word did you hear?</span></div>' +
        '<div class="lp-pair">' + words.map((w, k) => '<button type="button" class="opt lp-pick" data-k="' + k + '"><span class="tl lp-pw">' + esc(w[0]) + '</span><span class="lp-pe">' + esc(w[1]) + '</span></button>').join('') + '</div><div id="lpfb"></div></div>';
      q.querySelector('#lpplay').onclick = play;
      q.querySelectorAll('.lp-pick').forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k, ok = k === which;
        if (ok) right++;
        App.recordAnswer(ok);
        q.querySelectorAll('.lp-pick').forEach((x) => { x.disabled = true; if (+x.dataset.k === which) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        q.querySelector('#lpfb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack"><div><b>' + (ok ? 'Right.' : 'Not quite.') + '</b> You heard <span class="tl">' + esc(heard) + '</span> (' + esc(words[which][1]) + '). Compare them:</div>' +
          words.map((w) => '<div class="row">' + App.sayBtn(w[0]) + '<span class="tl">' + esc(w[0]) + '</span><span class="muted">' + esc(w[1]) + '</span></div>').join('') + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" id="lpnext">' + (i + 1 < set.length ? 'Next' : 'See score') + '</button></div>';
        q.querySelector('#lpnext').onclick = () => { i++; one(); };
        q.querySelector('#lpnext').focus();
      }));
      setTimeout(play, 150);
    };
    one();
  };

  /* ---------- Dialogues and readings ---------- */
  const LQ = () => window.LISTEN_Q || {};
  const storyItems = () => {
    const out = [];
    (window.DIALOGUES || []).forEach((d) => { if ((LQ()[d.id] || []).length) out.push({ kind: 'd', id: d.id, level: d.level, title: d.title, sub: '', obj: d }); });
    (window.READING || []).forEach((r) => { if ((LQ()[r.id] || []).length) out.push({ kind: 'r', id: r.id, level: r.level, title: r.title, sub: r.titleEn, obj: r }); });
    (window.PSYCH_CASES || []).forEach((c) => { const id = 'case-' + c.id; if ((LQ()[id] || []).length && App.caseDialogue) out.push({ kind: 'c', id, caseId: c.id, level: c.level, title: c.title, sub: '', nurse: c.role === 'nurse', obj: App.caseDialogue(c) }); });
    return out;
  };
  App.listenStoryIds = () => storyItems().map((x) => x.id);   // for the Progress page
  const drawStoryList = (box) => {
    const items = storyItems();
    if (!items.length) { box.innerHTML = '<div class="notice">The listening questions are not written yet.</div>'; return; }
    const tile = (x) => {
      const b = bestOf('story:' + x.id);
      return '<a class="tile" href="#/listen?tab=story&id=' + encodeURIComponent(x.id) + '"><div class="row"><span class="pill lv">' + esc(x.level) + '</span>' + (x.kind === 'c' ? '<span class="pill warn">clinical</span>' + (x.nurse ? '<span class="pill">nurse</span>' : '') : '') + (b != null ? '<span class="pill good">' + b + '%</span>' : '') + '</div>' +
        '<h3 style="margin-top:6px"' + (x.kind === 'r' ? ' class="tl"' : '') + '>' + esc(x.title) + '</h3><p>' + (x.sub ? esc(x.sub) + ' · ' : '') + LQ()[x.id].length + ' questions</p></a>';
    };
    const group = (k, title) => { const g = items.filter((x) => x.kind === k); return g.length ? '<h2 style="margin-top:14px">' + title + '</h2><div class="grid">' + g.map(tile).join('') + '</div>' : ''; };
    box.innerHTML = group('d', 'Dialogues') + group('r', 'Readings') + group('c', 'Case simulations');
  };
  const drawStory = (box, id) => {
    const x = storyItems().find((s) => s.id === id);
    if (!x) { box.innerHTML = '<div class="notice">There are no listening questions for this item. <a href="#/listen?tab=story">See the list</a>.</div>'; return; }
    const dl = x.kind !== 'r';   // dialogues and case simulations are shown as a conversation
    const lines = dl
      ? x.obj.lines.map((l) => ({ who: l[4] || (x.obj.roles || [])[l[0]] || '', ja: l[1], en: l[2] }))
      : x.obj.tl.map((t, k) => ({ who: '', ja: t, en: (x.obj.en || [])[k] || '' }));
    const back = x.kind === 'c' ? ['#/psych/case/' + x.caseId, 'Open the case'] : x.kind === 'd' ? ['#/speak/' + x.id, 'Open the dialogue'] : ['#/reading/' + x.id, 'Open the reading'];
    let shown = false;
    box.innerHTML = '<div class="row"><span class="pill lv">' + esc(x.level) + '</span><span class="muted small">' + (x.kind === 'c' ? 'Case simulation' + (x.nurse ? ' · you are the ward nurse' : '') : x.kind === 'd' ? 'Dialogue' : 'Reading') + '</span></div>' +
      '<h2 style="margin-top:6px"' + (x.kind === 'r' ? ' class="tl"' : '') + '>' + esc(x.title) + '</h2>' + (x.sub ? '<p class="muted">' + esc(x.sub) + '</p>' : '') +
      '<div class="row lp-ctl"><button class="btn primary" id="lpall">' + icons.sound + ' Play all</button><button class="btn" id="lpstop">Stop</button><button class="btn" id="lpshow" aria-expanded="false">Show the text</button><span class="muted small" id="lpstat" aria-live="polite"></span></div>' +
      '<div id="lptext" hidden></div><h2 style="margin-top:16px">Questions</h2><div id="lpq"></div>' +
      '<div class="row" style="margin-top:12px"><a class="btn" href="' + back[0] + '">' + back[1] + '</a><a class="btn ghost" href="#/listen?tab=story">All listening questions</a></div>';
    const $ = (s) => box.querySelector(s);
    $('#lptext').innerHTML = '<div class="' + (dl ? 'dlg' : 'card passage') + '">' + lines.map((l, k) => dl
      ? '<div class="line" data-ln="' + k + '"><div class="spread"><span class="who">' + esc(l.who) + '</span>' + App.sayBtn(l.ja) + '</div><div class="t">' + esc(l.ja) + '</div><div class="e">' + esc(l.en) + '</div></div>'
      : '<div class="lp-para" data-ln="' + k + '"><div class="row" style="align-items:flex-start;flex-wrap:nowrap">' + App.sayBtn(l.ja) + '<p class="tl" style="margin:0">' + esc(l.ja) + '</p></div>' + (l.en ? '<p class="tr">' + esc(l.en) + '</p>' : '') + '</div>').join('') + '</div>';
    const mark = (k) => box.querySelectorAll('[data-ln]').forEach((n) => n.classList.toggle('lp-now', +n.dataset.ln === k));
    $('#lpall').onclick = async () => {
      const done = await speakSeq(lines.map((l) => l.ja), dl ? 300 : 350, (k) => { mark(k); const s = $('#lpstat'); if (s) s.textContent = (dl ? 'Line ' : 'Part ') + (k + 1) + ' of ' + lines.length; });
      if (!box.isConnected || !$('#lpstat')) return;
      mark(-1); $('#lpstat').textContent = done ? 'Finished.' : '';
    };
    $('#lpstop').onclick = () => { App.stopSpeech(); mark(-1); $('#lpstat').textContent = 'Stopped.'; };
    $('#lpshow').onclick = () => { shown = !shown; $('#lptext').hidden = !shown; $('#lpshow').textContent = shown ? 'Hide the text' : 'Show the text'; $('#lpshow').setAttribute('aria-expanded', String(shown)); };
    const qs = LQ()[x.id].map(([q, opts, a, why]) => ({ q, opts, a, exp: why || '' }));
    App.runQuiz($('#lpq'), qs, { onDone: (r, n) => best('story:' + x.id, Math.round((100 * r) / n)) });
  };

  /* ---------- Page ---------- */
  V.listen = (el, p, q) => {
    q = q || {};
    const tab = TABS.some((t) => t[0] === q.tab) ? q.tab : 'hear';
    const usesLevel = tab === 'hear' || tab === 'dict';
    el.innerHTML = crumb([['Practice', '#/practice'], ['Listening practice']]) + '<h1>Listening practice</h1>' +
      '<div class="seg lp-tabs" role="group" aria-label="View" style="margin-bottom:8px">' + TABS.map(([k, t]) => '<a role="button" href="#/listen' + (k === 'hear' ? '' : '?tab=' + k) + '" class="' + (tab === k ? 'on' : '') + '"' + (tab === k ? ' aria-current="page"' : '') + '>' + t + '</a>').join('') + '</div>' +
      '<p class="muted">' + esc(INTRO[tab]) + '</p>' +
      ('<div class="row lp-ctl">' + (usesLevel ? seg('Level', LEVELS.map((k) => [k, k]), level(), 'lv') : '') +
        seg('Speed', SPEEDS.map(([k, t]) => [k, t]), st.speed, 'sp') +
        (tab === 'story' ? '' : '<button class="btn sm" id="lpnew">New set</button>') + '</div>') +
      '<div id="lpbody"></div>';
    const box = el.querySelector('#lpbody');
    const draw = () => {
      if (tab === 'hear') drawHear(box);
      else if (tab === 'dict') drawDict(box);
      else if (tab === 'pairs') drawPairs(box);
      else if (q.id) drawStory(box, q.id);
      else drawStoryList(box);
    };
    el.querySelectorAll('[data-lv]').forEach((b) => (b.onclick = () => {
      S().settings.listenLv = b.dataset.lv; App.save();
      el.querySelectorAll('[data-lv]').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      draw();
    }));
    el.querySelectorAll('[data-sp]').forEach((b) => (b.onclick = () => {
      st.speed = b.dataset.sp;
      el.querySelectorAll('[data-sp]').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      if (tab !== 'story') draw();   // a new set at the new speed; on a story page the speed applies to the next Play all
    }));
    const nb = el.querySelector('#lpnew'); if (nb) nb.onclick = draw;
    draw();
  };
})();
