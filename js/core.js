/* Core: storage, data indexes, search, spaced repetition, speech. Shared engine with Usap Tayo and Hablemos;
   language-specific values come from js/lang.js (window.LANG). Japanese text is stored in the furigana notation
   of js/ja.js: norm() and flat() strip the readings and word spaces, so matching always works on plain text. */
(function () {
  const App = (window.App = {});

  // Psychiatry sections are split over several data files; show them in the shared Usap Tayo order (LANG.sectionOrder).
  if (window.PSYCH_SECTIONS && window.LANG && LANG.sectionOrder) {
    const at = (id) => { const i = LANG.sectionOrder.indexOf(id); return i < 0 ? 999 : i; };
    window.PSYCH_SECTIONS = PSYCH_SECTIONS.map((s, i) => [s, i]).sort((a, b) => at(a[0].id) - at(b[0].id) || a[1] - b[1]).map((x) => x[0]);
  }

  /* ---------- Utilities ---------- */
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = (s) => JA.compact(JA.plain(String(s || ''))).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC').replace(/[’']/g, "'").trim();
  const flat = (s) => norm(s).replace(/[-'\s.,!?"():;…。、？！「」『』・〜～＿]/g, ''); // compact form for matching
  const hira = (s) => JA.toHira(flat(JA.kana(String(s || ''))));                       // reading in hiragana, compact
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const dayDiff = (a, b) => Math.round((new Date(b) - new Date(a)) / 864e5);
  Object.assign(App, { esc, norm, flat, hira, shuffle, pick, today });
  const L = window.LANG;

  /* ---------- Storage ---------- */
  const KEY = 'hanashimasho.v1';
  const defaults = () => ({
    settings: { theme: 'system', textSize: '100', register: 'f', voice: '', voiceSource: 'pack', rate: 0.85, cardDir: 'tl-en', newPerDay: 15, furigana: 'on', romaji: true, spacing: true },
    srs: {}, mistakes: [], newToday: { date: '', n: 0 },
    done: { lessons: {}, reading: {}, cases: {}, dialogues: {}, sections: {} }, kana: {}, drills: {},
    streak: { last: '', count: 0, best: 0, days: [] },
    stats: { reviews: 0, correct: 0, answered: 0 }, xp: 0, level: '', seenVersion: ''
  });
  let state;
  try { state = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { state = defaults(); }
  state.settings = Object.assign(defaults().settings, state.settings || {});
  state.done = Object.assign(defaults().done, state.done || {});
  App.state = state;
  App.save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ } };
  App.reset = () => { state = App.state = defaults(); App.save(); };
  App.importState = (obj) => { App.state = state = Object.assign(defaults(), obj); state.settings = Object.assign(defaults().settings, obj.settings || {}); App.save(); };

  // Activity: streaks and XP
  App.activity = (xp) => {
    const t = today();
    if (state.streak.last !== t) {
      const gap = state.streak.last ? dayDiff(state.streak.last, t) : 99;
      state.streak.count = gap === 1 ? state.streak.count + 1 : 1;
      state.streak.best = Math.max(state.streak.best, state.streak.count);
      state.streak.last = t;
      state.streak.days = (state.streak.days || []).concat(t).slice(-120);
    }
    state.xp += xp || 0;
    App.save();
  };
  App.streakNow = () => {
    if (!state.streak.last) return 0;
    return dayDiff(state.streak.last, today()) <= 1 ? state.streak.count : 0;
  };
  App.recordAnswer = (correct, cardId) => {
    state.stats.answered++;
    if (correct) state.stats.correct++;
    if (!correct && cardId && !state.mistakes.includes(cardId)) state.mistakes.push(cardId);
    if (correct && cardId && state.srs[cardId] && state.srs[cardId].r >= 3) state.mistakes = state.mistakes.filter((x) => x !== cardId);
    App.activity(correct ? 5 : 1);
  };

  /* ---------- Dictionary ---------- */
  const POS = { n: 'noun', v1: 'る-verb', v5: 'う-verb', vs: 'する noun', vi: 'irregular verb', ai: 'い-adjective', an: 'な-adjective', adv: 'adverb', pron: 'pronoun', part: 'particle', conj: 'conjunction', interj: 'interjection', num: 'number', ctr: 'counter', q: 'question word', pre: 'prefix', suf: 'suffix', phr: 'phrase' };
  App.POS = POS;
  const seen = new Map();
  const DICT = [];
  (window.DICT_RAW || []).join('\n').split('\n').forEach((line) => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const [tl, en, pos, cat, lv, note] = line.split('|').map((s) => (s || '').trim());
    if (!tl || !en) return;
    const k = flat(tl) + '|' + norm(en);
    if (seen.has(k)) return;
    seen.set(k, 1);
    DICT.push({ id: 'd' + DICT.length, tl, en, pos: pos || '', cat: cat || 'other', lv: lv || '', root: '', note: note || '', ftl: flat(tl), kn: hira(tl), rj: flat(JA.romaji(tl)), nen: norm(en) });
  });
  DICT.sort((a, b) => a.kn.localeCompare(b.kn, 'ja') || a.ftl.localeCompare(b.ftl, 'ja'));
  DICT.forEach((e, i) => (e.id = 'd' + i));
  App.DICT = DICT;
  App.dictById = Object.fromEntries(DICT.map((e) => [e.id, e]));

  // Root index: root → entries; headword → entries
  const byRoot = new Map(), byHead = new Map();
  DICT.forEach((e) => {
    const r = flat(e.root || ''), h = e.ftl;
    if (r) { if (!byRoot.has(r)) byRoot.set(r, []); byRoot.get(r).push(e); }
    if (!byHead.has(h)) byHead.set(h, []); byHead.get(h).push(e);
  });
  App.byRoot = byRoot; App.byHead = byHead;

  // Dictionary topics (js/data/dict-*.js category column). Clinical topics feed the "Clinical vocabulary" decks.
  App.CATS = {
    basics: 'Basics & greetings', grammar: 'Particles & grammar words', pronouns: 'Pronouns & forms of address', questions: 'Question words',
    numbers: 'Numbers', counters: 'Counters', time: 'Time & dates', people: 'People', family: 'Family', body: 'Body',
    food: 'Food & drink', home: 'Home & things', money: 'Work, school & money', places: 'Places & directions', travel: 'Getting around', nature: 'Weather & nature',
    adjectives: 'Describing words', verbs: 'Common verbs', adverbs: 'Adverbs',
    emotions: 'Emotions', health: 'Health & symptoms', mind: 'Mind & perception', risk: 'Risk & safety (clinical)', substance: 'Alcohol & substances',
    meds: 'Medication', hospital: 'Hospital & care', clinical: 'Clinical terms', mimetic: 'Sound-symbolic words (イライラ, ドキドキ…)', idioms: 'Expressions of distress (気, 心, 胸…)'
  };
  App.LEVELS = { N5: 'JLPT N5 (beginner)', N4: 'JLPT N4', N3: 'JLPT N3', C: 'Clinical / advanced' };
  // Dictionary browser rows (あ か さ た な は ま や ら わ): the row of a reading's first kana, voiced marks folded in.
  const ROWS = { 'あ': 'あいうえおぁぃぅぇぉゔ', 'か': 'かきくけこがぎぐげご', 'さ': 'さしすせそざじずぜぞ', 'た': 'たちつてとだぢづでどっ', 'な': 'なにぬねの', 'は': 'はひふへほばびぶべぼぱぴぷぺぽ', 'ま': 'まみむめも', 'や': 'やゆよゃゅょ', 'ら': 'らりるれろ', 'わ': 'わをんゎ' };
  App.kanaRow = (kn) => { const c = (kn || '')[0]; return Object.keys(ROWS).find((r) => ROWS[r].includes(c)) || ''; };
  // Japanese needs no root stripping: the dictionary lists dictionary forms, and search matches kanji, kana and romaji.
  App.findRoots = () => [];

  /* ---------- Search ---------- */
  function score(hay, q) {
    if (!hay) return 0;
    if (hay === q) return 100;
    if (hay.startsWith(q)) return 70;
    const re = new RegExp('(^|[^a-z])' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (re.test(hay)) return 50;
    if (hay.includes(q)) return 25;
    return 0;
  }
  App.searchDict = (q, dir) => {
    const nq = norm(q), fq = flat(q), hq = hira(q);
    if (!nq) return [];
    const res = new Map();
    const add = (e, s, why) => { const cur = res.get(e.id); if (!cur || cur.s < s) res.set(e.id, { e, s, why }); };
    for (const e of DICT) {
      if (dir !== 'en') { const s = Math.max(score(e.ftl, fq), score(e.kn, hq), /^[a-z]+$/.test(fq) && fq.length > 1 ? score(e.rj, fq) - 3 : 0); if (s > 0) add(e, s + 5, ''); }
      if (dir !== 'tl') { const s = score(e.nen, nq); if (s) add(e, s, ''); }
    }
    if (dir !== 'en' && fq.length >= 4) {
      for (const r of App.findRoots(q)) {
        const why = 'root: ' + r;
        (byRoot.get(r) || []).forEach((e) => add(e, e.pos === 'v' ? 63 : 60, why));
        (byHead.get(r) || []).forEach((e) => add(e, 65, why));
      }
    }
    return [...res.values()].sort((a, b) => b.s - a.s || a.e.tl.length - b.e.tl.length);
  };

  // Universal index of everything else
  const IDX = [];
  const push = (type, title, sub, text, route) => { const raw = title + ' ' + sub + ' ' + text; IDX.push({ type, title, sub, text: norm(raw) + (JA.hasJa(raw) ? ' ' + JA.toHira(JA.compact(JA.kana(raw))) + ' ' + JA.romaji(raw).toLowerCase() : ''), route }); };
  (window.LESSONS || []).forEach((l) => push('Lesson', l.title, l.summary, l.body.replace(/<[^>]+>/g, ' '), '#/lessons/' + l.id));
  (window.READING || []).forEach((r) => push('Reading', r.title, r.titleEn, r.tl.join(' ') + ' ' + r.en.join(' '), '#/reading/' + r.id));
  (window.DIALOGUES || []).forEach((d) => push('Dialogue', d.title, d.level, d.lines.map((l) => l[1] + ' ' + l[2]).join(' '), '#/speak/' + d.id));
  (window.PSYCH_SECTIONS || []).forEach((s) => {
    push('Psychiatry', s.title, s.group, s.intro, '#/psych/s/' + s.id);
    s.phrases.forEach((p, i) => push('Phrase', p.f, p.en, (p.c || '') + ' ' + (p.n || ''), '#/psych/s/' + s.id + '?p=' + i));
  });
  (window.PSYCH_CASES || []).forEach((c) => push('Case', c.title, c.setting, '', '#/psych/case/' + c.id));
  [['Flashcards', '#/flash'], ['Kana trainer: hiragana and katakana', '#/kana'], ['Verb trainer: conjugation', '#/verbs'], ['Adjective trainer', '#/verbs?tab=adj'], ['Particle drill', '#/particles'], ['Placement test', '#/placement'], ['Progress', '#/progress'], ['Settings: furigana, romaji, word spacing, voice', '#/settings'], ["What's New", '#/new'], ['About', '#/about'], ['Dictionary', '#/dict'], ['Listening drill', '#/psych/listen'], ['Point board (' + L.point.title + '): patient points to the answer', '#/psych/point'], ['Practice', '#/practice'], ['Lessons', '#/lessons'], ['Reading', '#/reading'], ['Speaking', '#/speak'], ['Psychiatry', '#/psych'], ['More', '#/more']]
    .forEach(([t, r]) => push('Page', t, '', '', r));
  App.searchAll = (q, limit) => {
    const nq = norm(q);
    if (nq.length < 1) return [];
    const words = nq.split(/\s+/).filter(Boolean);
    const out = [];
    App.searchDict(q).slice(0, limit ? 6 : 60).forEach((r) => out.push({ type: 'Dictionary', title: r.e.tl, sub: r.e.en + (r.why ? ' · ' + r.why : ''), route: '#/dict/' + r.e.id, s: r.s + 20 }));
    IDX.forEach((it) => {
      let s = 0;
      for (const w of words) { const ws = score(it.text, w); if (!ws) { s = 0; break; } s += ws; }
      if (norm(it.title).includes(nq)) s += 40;
      if (s) out.push(Object.assign({ s: s / words.length }, it));
    });
    out.sort((a, b) => b.s - a.s);
    return limit ? out.slice(0, limit) : out;
  };

  /* ---------- Cards and decks ---------- */
  App.cardFor = (id) => {
    if (id.startsWith('d')) { const e = App.dictById[id]; return e && { id, tl: e.tl, en: e.en, note: e.note, sub: [POS[e.pos], e.lv].filter(Boolean).join(' · ') }; }
    if (id.startsWith('p:')) {
      const [, sid, i] = id.split(':');
      const s = (window.PSYCH_SECTIONS || []).find((x) => x.id === sid);
      const p = s && s.phrases[+i];
      if (!p) return null;
      return { id, tl: state.settings.register === 'c' ? p.c || p.f : p.f, en: p.en, note: p.n, sub: s.title, alt: state.settings.register === 'c' ? p.f : p.c };
    }
    return null;
  };

  App.decks = () => {
    const decks = [];
    const catGroups = {};
    DICT.forEach((e) => { (catGroups[e.cat] = catGroups[e.cat] || []).push(e.id); });
    const psychAll = [];
    (window.PSYCH_SECTIONS || []).forEach((s) => s.phrases.forEach((p, i) => psychAll.push('p:' + s.id + ':' + i)));
    decks.push({ id: 'due', name: 'All due reviews', group: 'Review', ids: Object.keys(state.srs).filter((k) => state.srs[k].due <= Date.now()) });
    decks.push({ id: 'mistakes', name: 'My mistakes', group: 'Review', ids: state.mistakes.slice() });
    decks.push({ id: 'psych', name: 'Psychiatry phrases (all)', group: 'Psychiatry', ids: psychAll });
    (window.PSYCH_SECTIONS || []).forEach((s) => decks.push({ id: 'ps-' + s.id, name: s.title, group: 'Psychiatry', ids: s.phrases.map((p, i) => 'p:' + s.id + ':' + i) }));
    const clinicalCats = ['emotions', 'health', 'mind', 'risk', 'substance', 'meds', 'hospital', 'clinical', 'mimetic', 'idioms'];
    const byLv = {};
    DICT.forEach((e) => { if (e.lv) (byLv[e.lv] = byLv[e.lv] || []).push(e.id); });
    Object.keys(App.LEVELS).forEach((lv) => { if (byLv[lv]) decks.push({ id: 'lv-' + lv, name: App.LEVELS[lv] + ' vocabulary', group: 'By level', ids: byLv[lv] }); });
    Object.keys(App.CATS).forEach((c) => { if (catGroups[c]) decks.push({ id: 'c-' + c, name: App.CATS[c], group: clinicalCats.includes(c) ? 'Clinical vocabulary' : 'Vocabulary', ids: catGroups[c] }); });
    return decks;
  };

  /* ---------- Spaced repetition (SM-2 variant) ---------- */
  App.srsQueue = (ids) => {
    const now = Date.now();
    const due = ids.filter((id) => state.srs[id] && state.srs[id].due <= now);
    if (state.newToday.date !== today()) state.newToday = { date: today(), n: 0 };
    const allowance = Math.max(0, state.settings.newPerDay - state.newToday.n);
    const fresh = ids.filter((id) => !state.srs[id]).slice(0, Math.min(allowance, 20));
    return shuffle(due).concat(fresh);
  };
  App.srsGrade = (id, g) => { // g: 0 again, 1 hard, 2 good, 3 easy
    const isNew = !state.srs[id];
    const c = state.srs[id] || { e: 2.5, i: 0, r: 0, due: 0 };
    if (isNew) state.newToday.n++;
    if (g === 0) { c.r = 0; c.i = 0; c.e = Math.max(1.3, c.e - 0.2); c.due = Date.now() + 60 * 1000; }
    else {
      c.r++;
      if (c.r === 1) c.i = g === 3 ? 3 : 1;
      else if (c.r === 2) c.i = g === 1 ? 3 : 6;
      else c.i = Math.round(c.i * (g === 1 ? 1.2 : g === 3 ? c.e * 1.3 : c.e));
      c.e = Math.max(1.3, c.e + (g === 1 ? -0.15 : g === 3 ? 0.15 : 0));
      c.due = Date.now() + c.i * 864e5;
    }
    state.srs[id] = c;
    state.stats.reviews++;
    App.recordAnswer(g > 0, id);
  };
  App.nextLabel = (id, g) => {
    const c = state.srs[id] || { e: 2.5, i: 0, r: 0 };
    if (g === 0) return '1 min';
    let i;
    if (c.r === 0) i = g === 3 ? 3 : 1; else if (c.r === 1) i = g === 1 ? 3 : 6; else i = Math.round(c.i * (g === 1 ? 1.2 : g === 3 ? c.e * 1.3 : c.e));
    return i < 30 ? i + 'd' : i < 365 ? Math.round(i / 30) + 'mo' : (i / 365).toFixed(1) + 'y';
  };

  /* ---------- Speech ----------
     1. Recorded audio pack (audio/manifest.json + audio/<key>.mp3), natural voice from the workflow.
     2. Device voice for the language (LANG.voiceLang), if installed.
     3. A device voice whose language reads the spelling closely (LANG.nearVoices), never English. */
  const synth = window.speechSynthesis;
  App.voices = () => (synth ? synth.getVoices() : []);
  App.nativeVoices = () => App.voices().filter((v) => L.voiceLang.test(v.lang) || L.voiceNameMatch.test(v.name));
  const NEAR = L.nearVoices;
  App.bestVoice = () => {
    const all = App.voices();
    const chosen = all.find((x) => x.name === state.settings.voice);
    if (chosen) return { voice: chosen, kind: 'chosen' };
    const fil = App.nativeVoices();
    if (fil.length) return { voice: fil.find((v) => /natural|neural|online|google/i.test(v.name)) || fil[0], kind: 'native' };
    for (const re of NEAR) { const v = all.filter((x) => re.test(x.lang)); if (v.length) return { voice: v.find((x) => x.localService) || v[0], kind: 'near' }; }
    return { voice: null, kind: 'none' };
  };
  App.canSpeak = !!synth;
  App.pack = { keys: new Set(), info: null, ready: false };
  App.loadAudioPack = () => fetch('audio/manifest.json', { cache: 'no-cache' }).then((r) => (r.ok ? r.json() : null)).then((m) => {
    if (m && Array.isArray(m.keys) && m.keys.length) { App.pack.keys = new Set(m.keys); App.pack.info = m; }
  }).catch(() => {}).finally(() => { App.pack.ready = true; });
  App.hasClip = (text) => state.settings.voiceSource !== 'device' && App.pack.keys.has(AudioKey(JA.speak(text)));
  let current = null; // { audio } or { utter }
  const haltCurrent = () => {
    if (current && current.audio) { try { current.audio.pause(); } catch (e) {} }
    if (current && current.done) current.done();
    current = null;
    if (synth) synth.cancel();
  };
  App.stopSpeech = () => { App._seq = (App._seq || 0) + 1; haltCurrent(); };
  // Speak target-language text; resolves when finished. opts.lang = 'en' speaks English with the device voice.
  App.speakAsync = (text, opts) => new Promise((resolve) => {
    opts = opts || {};
    if (opts.lang !== 'en') text = JA.speak(text);   // readings and word spaces are not spoken
    haltCurrent();
    const rate = opts.rate || state.settings.rate || 0.85;
    let finished = false;
    const done = () => { if (!finished) { finished = true; resolve(); } };
    if (opts.lang !== 'en' && App.hasClip(text)) {
      const a = new Audio('audio/' + AudioKey(text) + '.mp3');
      a.playbackRate = Math.min(1.4, Math.max(0.6, rate / 0.85));
      a.preservesPitch = true;
      current = { audio: a, done };
      a.onended = done; a.onerror = () => { App.pack.keys.delete(AudioKey(text)); done(); };
      a.play().catch(done);
      return;
    }
    if (!synth) { if (!opts.quiet) App.toast('Audio is not available in this browser.'); return setTimeout(done, 800); }
    const u = new SpeechSynthesisUtterance(text);
    if (opts.lang === 'en') u.lang = 'en-US';
    else { const b = App.bestVoice(); if (b.voice) { u.voice = b.voice; u.lang = b.voice.lang; } else u.lang = L.bcp47; }
    u.rate = rate;
    u.onend = done; u.onerror = done;
    current = { utter: u, done };
    setTimeout(done, 15000 + text.length * 120);
    synth.speak(u);
  });
  App.speak = (text, opts) => { App._seq = (App._seq || 0) + 1; App.speakAsync(text, opts); };
  App.speakAll = async (texts, gapMs) => { const tok = (App._seq = (App._seq || 0) + 1); for (const t of texts) { if (App._seq !== tok) return; await App.speakAsync(t); if (gapMs) await new Promise((r) => setTimeout(r, gapMs)); } };
  // Describes what the learner will hear, for notices and settings.
  App.audioStatus = () => {
    const pack = App.pack.info && state.settings.voiceSource !== 'device';
    const b = App.bestVoice();
    return { pack: !!pack, packCount: App.pack.keys.size, voiceKind: b.kind, voiceName: b.voice ? b.voice.name + ' (' + b.voice.lang + ')' : '' };
  };
  if (synth) synth.onvoiceschanged = () => { App.voicesReady = true; };

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  App.canListen = !!SR;
  App.listen = (onResult, onEnd) => {
    if (!SR) return null;
    const r = new SR();
    r.lang = L.bcp47; r.interimResults = false; r.maxAlternatives = 3;
    r.onresult = (ev) => { const alts = [...ev.results[0]].map((a) => a.transcript); onResult(alts); };
    r.onerror = (ev) => { App.toast(ev.error === 'not-allowed' ? 'Microphone permission was denied.' : 'Speech recognition stopped: ' + ev.error); };
    r.onend = () => onEnd && onEnd();
    try { r.start(); } catch (e) { return null; }
    return r;
  };
  // Similarity 0–100 between what was expected and what the recogniser heard. Japanese has no spaces and the
  // recogniser may return kanji or kana, so compare character by character against both the kanji text and its reading.
  const lev = (A, B) => {
    if (!A.length) return 0;
    const dp = Array.from({ length: A.length + 1 }, (_, i) => [i].concat(Array(B.length).fill(0)));
    for (let j = 1; j <= B.length; j++) dp[0][j] = j;
    for (let i = 1; i <= A.length; i++) for (let j = 1; j <= B.length; j++)
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (A[i - 1] === B[j - 1] ? 0 : 1));
    return Math.max(0, Math.round(100 * (1 - dp[A.length][B.length] / Math.max(A.length, B.length))));
  };
  App.similarity = (target, heard) => {
    const h = [...JA.toHira(flat(heard))];
    return Math.max(lev([...JA.toHira(flat(target))], h), lev([...hira(target)], h));
  };

  // Record and compare (MediaRecorder)
  App.canRecord = !!(navigator.mediaDevices && window.MediaRecorder);
  App.record = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const rec = new MediaRecorder(stream);
    const chunks = [];
    rec.ondataavailable = (e) => chunks.push(e.data);
    const done = new Promise((res) => (rec.onstop = () => { stream.getTracks().forEach((t) => t.stop()); res(URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }))); }));
    rec.start();
    return { stop: () => { rec.stop(); return done; } };
  };

  /* ---------- Toast ---------- */
  let toastTimer;
  App.toast = (msg) => {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => (t.hidden = true), 2600);
  };

  /* ---------- Icons ---------- */
  const I = (p) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  App.icons = {
    home: I('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>'),
    book: I('<path d="M4 4h10a4 4 0 014 4v12H8a4 4 0 01-4-4z"/><path d="M4 16a4 4 0 014-4h10"/>'),
    cards: I('<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 012 2v12"/>'),
    verb: I('<path d="M4 7h16M4 12h10M4 17h6"/><path d="M17 14l3 3-3 3"/>'),
    star: I('<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8z"/>'),
    starOn: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8z"/></svg>',
    affix: I('<rect x="3" y="8" width="5" height="8" rx="1.5"/><rect x="9.5" y="8" width="5" height="8" rx="1.5"/><rect x="16" y="8" width="5" height="8" rx="1.5"/>'),
    lesson: I('<path d="M2 8l10-5 10 5-10 5z"/><path d="M6 10v5c3 2 9 2 12 0v-5"/>'),
    read: I('<path d="M2 5h7a3 3 0 013 3v12a2 2 0 00-2-2H2z"/><path d="M22 5h-7a3 3 0 00-3 3v12a2 2 0 012-2h8z"/>'),
    speak: I('<path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/>'),
    brain: I('<path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 003 3h1V4z"/><path d="M15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-3 3h-1V4z"/>'),
    chart: I('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    gear: I('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>'),
    spark: I('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>'),
    info: I('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>'),
    target: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
    sound: I('<path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13"/>'),
    mic: I('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>'),
    rec: I('<circle cx="12" cy="12" r="7"/>'),
    plus: I('<path d="M12 5v14M5 12h14"/>'),
    check: I('<path d="M5 12l5 5L20 7"/>'),
    sun: I('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    moon: I('<path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/>'),
    eye: I('<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>'),
    case: I('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"/><path d="M12 11v5M9.5 13.5h5"/>'),
    ear: I('<path d="M6 9a6 6 0 1112 0c0 3-2 4-3 5.5S14 18 12 19.5 8 20 8 18"/><path d="M10 9a2 2 0 114 0c0 1.5-1.5 2-1.5 3"/>'),
    search: I('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>')
  };
  App.sayBtn = (text, label) => '<button class="say" data-say="' + esc(text) + '" title="Listen" aria-label="Listen' + (label ? ': ' + esc(JA.speak(label)) : '') + '">' + App.icons.sound + '</button>';
})();
