/* MSE interviewer sheet view: the two-page Japanese MSE question sheet (OPD and wards), on screen and printable. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const D = () => window.PSYCH_MSE_SHEET;

  function ref(r) {
    const [sid, i] = r.split(':');
    const s = PSYCH_SECTIONS.find((x) => x.id === sid);
    return s && s.phrases[+i];
  }
  function item(it) {
    if (it.r) { const p = ref(it.r); return p ? { tl: p.f, en: p.en.replace(/^[A-Z] · /, ''), ut: true, b: it.b, arrow: it.arrow } : null; }
    return it;
  }
  const UT = '<span class="ms-ut" title="Phrase from the app">HS</span>';

  /* Pages 3 and 4: substance use screening and brief intervention, built from PSYCH_SUD so the wording stays in one place.
     Alcohol is the worked example; titles and notes are Japanese with English glosses, like the MSE pages. */
  function sudSections() {
    const d = window.PSYCH_SUD; if (!d || !(d.substances || []).length) return [];
    const sub = (id) => d.substances.find((x) => x.id === id);
    const alc = sub('alcohol'), tob = sub('tobacco'), can = sub('cannabis'), meth = sub('meth'), coc = sub('cocaine'), opi = sub('opioids'), oth = sub('other'), gam = sub('gambling');
    const fillEn = (t, sb) => (d.fillEn ? d.fillEn(t, sb) : String(t).replace(/\{sa\}|\{s\}/g, sb.en).replace(/\{u\}/g, sb.unit));
    const fill = (p, sb) => ({ tl: d.fill(p.tl, sb), en: fillEn(p.en, sb), ut: true });
    const scr = (items) => items.map((it) => ({ tl: it.tl, en: it.en, ut: true, sub: it.opts.map((o) => o[1] + ' ' + o[0]).join(' · ') }));
    const mi = (stepId, idx) => idx.map((i) => fill(d.mi.find((x) => x.id === stepId).lines[i], alc));
    const psy = (sb) => sb.psychoed.map((p) => fill(p, sb));
    return [
      { id: 'sud-open', title: 'アルコール、 薬物《やくぶつ》、 ギャンブル： 導入《どうにゅう》', en: 'Substance use screen', ut: true, blocks: [
        { items: d.open.slice(0, 3).map((p) => fill(p, alc)) },
        { h: 'その 他《ほか》 の 薬物《やくぶつ》', items: [fill(meth.ask[0], meth), fill(opi.ask[0], opi), fill(oth.ask[0], oth)] } ],
        note: '記録《きろく》： 物質《ぶっしつ》、 重症度《じゅうしょうど》、 特定《とくてい》 用語《ようご》、 コード。 患者《かんじゃ》さん に は、 話《はなし》 の 内容《ないよう》 は 秘密《ひみつ》 で 治療《ちりょう》 の ため に 使《つか》う と 伝《つた》えます。 通報《つうほう》 に ついて は 地域《ちいき》 の 法律《ほうりつ》 と 病院《びょういん》 の 方針《ほうしん》 に 従《したが》って ください。 点数《てんすう》 の 集計《しゅうけい》 は アプリ の スクリーナー （Psychiatry → Substance use） で 行《おこな》えます。' },
      { id: 'sud-crit', title: '十一《じゅういち》 の 診断《しんだん》 基準《きじゅん》 （DSM-5-TR）', en: 'Past 12 months · 2+ = disorder', ut: true, blocks: [
        { items: d.criteria.map((c) => Object.assign(fill(c, alc), { b: String(c.n) })) } ],
        note: d.rule(alc) + '. 「アルコール」 を タバコ、 大麻《たいま》、 覚醒剤《かくせいざい》、 コカイン、 オピオイド、 または 薬物《やくぶつ》 の 名前《なまえ》 に 置《お》き換《か》えて ください。 処方《しょほう》 どおり に 飲《の》んで いる 薬《くすり》 で は、 耐性《たいせい》 と 離脱《りだつ》 は 数《かぞ》えません。 寛解《かんかい》： 渇望《かつぼう》 以外《いがい》 の 基準《きじゅん》 を 満《み》たさない 期間《きかん》 が 三《さん》か月《げつ》 以上《いじょう》 （早期《そうき》） または 十二《じゅうに》か月《げつ》 以上《いじょう》 （持続《じぞく》）。' },
      { id: 'sud-alcohol', title: 'アルコール', en: 'Alcohol · AUDIT-C', ut: true, blocks: [
        { items: alc.ask.map((p) => fill(p, alc)) },
        { h: 'AUDIT-C （0〜12、 陽性《ようせい》： 男性《だんせい》 4 以上《いじょう》、 女性《じょせい》 3 以上《いじょう》）', items: scr(d.screens.alcohol.items) } ],
        note: '標準《ひょうじゅん》 ドリンク （米国《べいこく》） = ビール 12 オンス、 ワイン 5 オンス、 蒸留酒《じょうりゅうしゅ》 1.5 オンス。 毎日《まいにち》 大量《たいりょう》 に 飲《の》んで いて、 最後《さいご》 の 飲酒《いんしゅ》 から 6〜48 時間《じかん》 → 離脱《りだつ》 に 注意《ちゅうい》 （振戦《しんせん》、 発汗《はっかん》、 頻脈《ひんみゃく》、 錯乱《さくらん》、 けいれん）。' },
      { id: 'sud-tobacco', title: 'タバコ と 電子《でんし》 タバコ', en: 'Tobacco · Fagerström', ut: true, blocks: [
        { items: [fill(tob.ask[0], tob), fill(tob.ask[1], tob)] },
        { h: 'ファガストローム （0〜10： 0〜2 低《ひく》い、 3〜4 低《ひく》い 〜 中等度《ちゅうとうど》、 5〜7 中等度《ちゅうとうど》、 8〜10 高《たか》い）', items: scr(d.screens.tobacco.items) } ] },
      { id: 'sud-opioids', title: 'オピオイド と フェンタニル', en: 'Opioids · overdose · naloxone', ut: true, blocks: [
        { items: opi.ask.slice(1).map((p) => fill(p, opi)) },
        { h: 'ナロキソン と 治療《ちりょう》', items: [fill(opi.psychoed[0], opi), fill(opi.psychoed[2], opi), fill(opi.psychoed[3], opi)] } ],
        note: 'アメリカ など で は、 路上《ろじょう》 で 売《う》られる 錠剤《じょうざい》 や 粉末《ふんまつ》 の ほとんど に フェンタニル が 混《ま》じって います。 ナロキソン が 使《つか》える 場合《ばあい》 は、 患者《かんじゃ》さん が 帰《かえ》る 前《まえ》 に 渡《わた》す か 処方《しょほう》 します。 ブプレノルフィン や メサドン は 過剰《かじょう》 摂取《せっしゅ》 （オーバードーズ） に よる 死亡《しぼう》 を 半分《はんぶん》 以下《いか》 に 減《へ》らします。 その 日《ひ》 の うち に 提案《ていあん》 して ください。 COWS： Psychiatry → Withdrawal。' },
      { id: 'sud-gambling', title: 'ギャンブル', en: 'Gambling disorder · 9 criteria, 4+', ut: true, blocks: [
        { items: [fill(gam.ask[0], gam), fill(gam.ask[2], gam)] },
        { items: d.gambling.map((c) => Object.assign(fill(c, gam), { b: String(c.n) })) } ],
        note: '軽度《けいど》 4〜5、 中等度《ちゅうとうど》 6〜7、 重度《じゅうど》 8〜9。 挿話性《そうわせい》 または 持続性《じぞくせい》。 F63.0。 多額《たがく》 の 借金《しゃっきん》 → 自殺《じさつ》 に ついて 聞《き》きます。 対策《たいさく》： 店《みせ》 や サイト に 自分《じぶん》 から 利用《りよう》 停止《ていし》 を 申《もう》し出《で》る、 アプリ や サイト の ブロック、 信頼《しんらい》 できる 人《ひと》 に お金《かね》 や カード の 管理《かんり》 を 任《まか》せる。' },
      { id: 'sud-mi', title: '動機《どうき》づけ 面接《めんせつ》', en: 'Brief intervention · OARS', ut: true, blocks: [['permission', [0, 1, 3]], ['reflect', [0, 1, 3]], ['rulers', [0, 1, 3, 4]], ['feedback', [0, 1, 3]], ['plan', [0, 1, 2, 3, 5]], ['notready', [0, 2, 3]], ['close', [0, 1, 2]]].map(([id, idx]) => ({ h: d.mi.find((x) => x.id === id).title, items: mi(id, idx) })),
        note: '「中毒者《ちゅうどくしゃ》」 と は 言《い》わない。 医師《いし》 は 聞《き》き役《やく》 で、 理由《りゆう》 を 言《い》う の は 患者《かんじゃ》さん。 ものさし の 質問《しつもん》： 「なぜ もっと 低《ひく》く ない の か」 と 聞《き》き、 「なぜ もっと 高《たか》く ない の か」 と は 聞《き》かない。' },
      { id: 'sud-psy1', title: '心理《しんり》 教育《きょういく》： アルコール、 大麻《たいま》、 覚醒剤《かくせいざい》', en: 'Elicit–provide–elicit', ut: true, blocks: [
        { h: 'アルコール', items: psy(alc) },
        { h: '大麻《たいま》', items: psy(can) },
        { h: '覚醒剤《かくせいざい》', items: psy(meth) } ],
        note: '許可《きょか》 を もらって から、 この 患者《かんじゃ》さん に 当《あ》てはまる 情報《じょうほう》 を 一《ひと》つ か 二《ふた》つ だけ 伝《つた》えます。' },
      { id: 'sud-psy2', title: '心理《しんり》 教育《きょういく》： タバコ、 コカイン、 ギャンブル', en: '', ut: true, blocks: [
        { h: 'タバコ', items: psy(tob) },
        { h: 'コカイン と クラック', items: psy(coc) },
        { h: 'ギャンブル', items: psy(gam) } ] },
      { id: 'sud-nurse', title: '看護《かんご》： スクリーニング と 簡単《かんたん》 な 助言《じょげん》', en: 'Nurse script', ut: true, blocks: d.nurse.steps.map((st) => ({ h: st.title, items: st.lines.map((p) => fill(p, alc)) })),
        note: 'Escalate: ' + d.nurse.escalate + ' (Pending nursing review.)' }
    ];
  }

  function renderSection(sec, showEn) {
    const head = '<h2><span>' + esc(sec.title) + '</span><span class="ms-en">' + esc(sec.en || '') + (sec.ut ? ' ' + UT : '') + '</span></h2>';
    if (sec.obs) {
      return '<section class="ms-sec" id="ms-' + sec.id + '">' + head + '<div class="ms-obs">' + sec.obs.map(([k, v]) => '<span><b>' + esc(k) + ':</b> ' + esc(v) + '</span>').join('') + '</div></section>';
    }
    const body = sec.blocks.map((bl) => (bl.h ? '<h3>' + esc(bl.h) + '</h3>' : '') + '<ul>' + bl.items.map(item).filter(Boolean).map((it) =>
      '<li class="' + (it.b ? 'k' : '') + '">' + (it.b ? '<span class="ms-b">' + esc(it.b) + '</span>' : '') + '<span class="ms-tl">' + esc(it.tl) + '</span>' +
      (it.arrow ? ' <span class="ms-arrow">' + esc(it.arrow) + '</span>' : '') + (it.ut && !sec.ut ? ' ' + UT : '') +
      ' ' + App.sayBtn(it.tl) + (it.sub ? '<div class="ms-sub-opts">' + esc(it.sub) + '</div>' : '') + (showEn && it.en ? '<div class="ms-gloss">' + esc(it.en) + '</div>' : '') + '</li>').join('') + '</ul>').join('');
    return '<section class="ms-sec' + (sec.risk ? ' risk' : '') + (sec.ut ? ' ut' : '') + '" id="ms-' + sec.id + '">' + head + body + (sec.note ? '<div class="ms-note">' + esc(sec.note) + '</div>' : '') + '</section>';
  }

  V.mseSheet = (el) => {
    if (!((window.PSYCH_MSE_SHEET || {}).sections || []).length) return App.notYet(el, 'MSE interviewer sheet', 'The printable MSE interviewer sheet', true);
    const d = D();
    const inst = (window.APP_META && APP_META.institution) || {};
    const showEn = !!S().settings.mseSheetEn;
    const showFu = S().settings.mseSheetFu !== false, showRj = !!S().settings.mseSheetRj;   // furigana on, romaji off unless chosen
    const byId = {}; d.sections.concat(sudSections()).forEach((s) => (byId[s.id] = s));
    const hasSud = sudSections().length > 0;
    const allPages = hasSud ? d.pages.concat([[['sud-open', 'sud-crit'], ['sud-alcohol', 'sud-tobacco'], ['sud-opioids', 'sud-gambling']], [['sud-mi'], ['sud-psy1'], ['sud-psy2', 'sud-nurse']]]) : d.pages;
    const subs = d.pageSubtitles || [d.subtitle, d.reminder, '物質《ぶっしつ》 使用《しよう》： DSM-5-TR の 診断《しんだん》 基準《きじゅん》、 AUDIT-C、 ファガストローム、 オピオイド と ナロキソン、 ギャンブル', '簡易《かんい》 介入《かいにゅう》： 動機《どうき》づけ 面接《めんせつ》、 心理《しんり》 教育《きょういく》、 看護師《かんごし》 の ため の 会話例《かいわれい》'];
    const H = window.HOSPITAL || {};
    const pages = allPages.map((cols, pi) =>
      '<div class="ms-page">' +
      '<div class="ms-head"><div><div class="ms-title">' + esc(d.title) + '</div><div class="ms-sub">' + esc(subs[pi] || '') + '</div></div>' +
      '<div class="ms-right"><b>' + esc(inst.name || '') + '</b>' + (H.program ? '<br>' + esc(H.program) : '') + '</div></div>' +
      '<div class="ms-cols">' + cols.map((c) => '<div class="ms-col">' + c.map((id) => renderSection(byId[id], showEn)).join('') + '</div>').join('') + '</div>' +
      '<div class="ms-foot"><span>' + esc(d.disclaimer) + '</span><span>' + esc(d.pageWord || 'Page') + ' ' + (pi + 1) + ' / ' + allPages.length + '</span></div></div>').join('');

    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['MSE interviewer sheet']]) +
      '<span class="eyebrow">Print · clinic and wards</span><h1>MSE interviewer sheet</h1>' +
      '<p class="muted">Every screening question for the ' + LANG.name + ' MSE on a few printed pages: opening, mood, depression, suicide, mania, hallucinations, delusions, violence, substance use, anxiety, cognition, insight and judgment. Polite register (です/ます); the HS mark shows phrases that are also in the app with audio.</p>' +
      '<div class="ho-controls row" style="margin-bottom:14px">' +
      '<button class="btn sm primary" id="msPrint">Print or save as PDF</button>' +
      '<label class="ho-chk"><input type="checkbox" id="msFu"' + (showFu ? ' checked' : '') + '> Furigana</label>' +
      '<label class="ho-chk"><input type="checkbox" id="msRj"' + (showRj ? ' checked' : '') + '> Romaji</label>' +
      '<label class="ho-chk"><input type="checkbox" id="msEn"' + (showEn ? ' checked' : '') + '> Show English</label>' +
      '<a class="btn sm ghost" href="#/psych/handout">Other handouts</a></div>' +
      '<div class="ms-sheet' + (showEn ? ' ms-en-on' : '') + (showFu ? '' : ' ms-nofu') + (showRj ? '' : ' ms-norj') + '">' + pages + '</div>';
    el.querySelector('#msPrint').onclick = () => App.printWith('A4', '9mm');
    el.querySelector('#msFu').onchange = (e) => { S().settings.mseSheetFu = e.target.checked; App.save(); V.mseSheet(el); };
    el.querySelector('#msRj').onchange = (e) => { S().settings.mseSheetRj = e.target.checked; App.save(); V.mseSheet(el); };
    el.querySelector('#msEn').onchange = (e) => { S().settings.mseSheetEn = e.target.checked; App.save(); V.mseSheet(el); };
  };
})();
