/* Japanese conjugation by rule, on strings in the app's furigana notation (js/ja.js).
   Verbs: d = dictionary form, g = 'ru' (ichidan) | 'u' (godan) | 'suru' | 'kuru'.
   Adjectives: d = dictionary form (い-adjective) or bare stem (な-adjective), t = 'i' | 'na'.
   JConj.verb(d, g) and JConj.adj(d, t) return { formId: japanese }. JConj.VERB_FORMS / ADJ_FORMS describe the forms. */
(function (root) {
  const G = {
    'う': ['い', 'わ', 'え', 'お', 'って', 'った'], 'く': ['き', 'か', 'け', 'こ', 'いて', 'いた'], 'ぐ': ['ぎ', 'が', 'げ', 'ご', 'いで', 'いだ'],
    'す': ['し', 'さ', 'せ', 'そ', 'して', 'した'], 'つ': ['ち', 'た', 'て', 'と', 'って', 'った'], 'ぬ': ['に', 'な', 'ね', 'の', 'んで', 'んだ'],
    'ぶ': ['び', 'ば', 'べ', 'ぼ', 'んで', 'んだ'], 'む': ['み', 'ま', 'め', 'も', 'んで', 'んだ'], 'る': ['り', 'ら', 'れ', 'ろ', 'って', 'った']
  };
  // Honorific verbs whose ます-stem ends in い (いらっしゃいます, くださいます…).
  const ARU5 = /(いらっしゃ|おっしゃ|くださ|下《くだ》さ|なさ|ござ)る$/;
  function stems(d, g) {
    if (g === 'suru') { const b = d.replace(/する$/, ''); return { i: b + 'し', a: b + 'し', te: b + 'して', ta: b + 'した', e: null, o: null, base: b, irr: 'suru' }; }
    if (g === 'kuru') {
      const kanji = /来《く》る$/.test(d), b = d.replace(/(来《く》|く)る$/, '');
      const k = (r) => b + (kanji ? '来《' + r + '》' : r);
      return { i: k('き'), a: k('こ'), te: k('き') + 'て', ta: k('き') + 'た', base: b, irr: 'kuru', k };
    }
    if (g === 'ru') { const b = d.slice(0, -1); return { i: b, a: b, te: b + 'て', ta: b + 'た', base: b, ru: true }; }
    const last = d.slice(-1), b = d.slice(0, -1), row = G[last];
    if (!row) return null;
    const iku = /(行《い》|^い)く$/.test(d);   // 行く is the one く-verb with って / った
    return { i: b + (ARU5.test(d) ? 'い' : row[0]), a: b + row[1], e: b + row[2], o: b + row[3], te: iku ? b + 'って' : b + row[4], ta: iku ? b + 'った' : b + row[5], base: b };
  }
  function verb(d, g) {
    const s = stems(d, g);
    if (!s) return null;
    const aru = g === 'u' && /(^|[^ぁ-ん])ある$/.test(d) || d === 'ある';
    const nai = aru ? d.slice(0, -2) + 'ない' : s.a + 'ない';
    const f = {
      dict: d, masu: s.i + 'ます', masen: s.i + 'ません', mashita: s.i + 'ました', masendeshita: s.i + 'ません でした',
      te: s.te, ta: s.ta, nai, nakatta: nai.slice(0, -1) + 'かった', tai: s.i + 'たい', mashou: s.i + 'ましょう',
      tekudasai: s.te + ' ください', teimasu: s.te + ' います', naide: nai + 'で ください'
    };
    if (s.irr === 'suru') Object.assign(f, { potential: s.base + 'できる', volitional: s.base + 'しよう', passive: s.base + 'される', causative: s.base + 'させる', ba: s.base + 'すれば', tara: s.ta + 'ら' });
    else if (s.irr === 'kuru') Object.assign(f, { potential: s.k('こ') + 'られる', volitional: s.k('こ') + 'よう', passive: s.k('こ') + 'られる', causative: s.k('こ') + 'させる', ba: s.k('く') + 'れば', tara: s.ta + 'ら' });
    else if (s.ru) Object.assign(f, { potential: s.base + 'られる', volitional: s.base + 'よう', passive: s.base + 'られる', causative: s.base + 'させる', ba: s.base + 'れば', tara: s.ta + 'ら' });
    else Object.assign(f, { potential: s.e + 'る', volitional: s.o + 'う', passive: s.a + 'れる', causative: s.a + 'せる', ba: s.e + 'ば', tara: s.ta + 'ら' });
    if (aru) { delete f.potential; delete f.passive; delete f.causative; delete f.tai; delete f.mashou; delete f.tekudasai; delete f.teimasu; delete f.naide; delete f.volitional; }
    return f;
  }
  function adj(d, t) {
    if (t === 'na') return { dict: d + ' です', neg: d + ' では ありません', negc: d + ' じゃ ない です', past: d + ' でした', pastneg: d + ' では ありません でした', te: d + ' で', noun: d + ' な', adv: d + ' に', plain: d + ' だ' };
    const b = /(^|[^ぁ-ん])いい$/.test(d) || d === 'いい' ? d.slice(0, -2) + 'よ' : d.slice(0, -1);
    return { dict: d + ' です', neg: b + 'くない です', negc: b + 'く ありません', past: b + 'かった です', pastneg: b + 'くなかった です', te: b + 'くて', noun: d, adv: b + 'く', plain: d };
  }
  const VERB_FORMS = [
    ['dict', 'Dictionary form', 'plain present / future', 1], ['masu', 'ます form', 'polite present / future', 1], ['masen', 'ません', 'polite negative', 1],
    ['mashita', 'ました', 'polite past', 1], ['masendeshita', 'ません でした', 'polite past negative', 1], ['te', 'て form', 'linking, requests, 〜て います', 1],
    ['tekudasai', '〜て ください', 'please do', 1], ['teimasu', '〜て います', 'is doing / state', 1], ['tai', '〜たい', 'want to', 1], ['mashou', '〜ましょう', "let's", 1],
    ['nai', 'ない form', 'plain negative', 2], ['naide', '〜ないで ください', 'please do not', 2], ['ta', 'た form', 'plain past', 2], ['nakatta', '〜なかった', 'plain past negative', 2],
    ['potential', 'Potential', 'can do', 2], ['volitional', 'Volitional', "let's (plain)", 2], ['tara', '〜たら', 'if / when', 2], ['ba', '〜ば', 'if', 2],
    ['passive', 'Passive', 'is done', 3], ['causative', 'Causative', 'make / let do', 3]
  ];
  const ADJ_FORMS = [
    ['dict', 'Present', 'is …', 1], ['neg', 'Negative', 'is not …', 1], ['negc', 'Negative (other form)', 'is not …', 1], ['past', 'Past', 'was …', 1], ['pastneg', 'Past negative', 'was not …', 1],
    ['te', 'て form', '… and', 1], ['noun', 'Before a noun', '', 1], ['adv', 'Adverb', '…ly', 1], ['plain', 'Plain', 'casual', 2]
  ];
  // Group from a dictionary part-of-speech code (js/data/dict-*.js): v1, v5, vi, vs.
  const groupFor = (d, pos) => pos === 'v1' ? 'ru' : pos === 'v5' ? 'u' : pos === 'vs' ? 'suru' : pos === 'vi' ? (/(来《く》|く)る$/.test(d) ? 'kuru' : 'suru') : null;
  root.JConj = { verb, adj, VERB_FORMS, ADJ_FORMS, groupFor };
})(typeof window !== 'undefined' ? window : globalThis);
