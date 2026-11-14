/* QA fixture (not in the repo): two-step nurse scripts for PSYCH_NURSE_TOOLS.mood and .admit, used by qa/nurse-tools-2.py
   only while js/data/psych-nurse-tools-2.js is still empty (real data wins). */
(function () {
  const T = window.PSYCH_NURSE_TOOLS = window.PSYCH_NURSE_TOOLS || {};
  const fx = (name) => ({
    notice: 'Nurse script: draft, pending Nursing Service review. Follow your hospital\'s policy. (QA fixture: ' + name + ')',
    steps: [
      { title: 'Greeting', lines: [
        { tl: '＿さん、 おはよう ございます。 看護師《かんごし》 の 木村《きむら》 です。', c: '＿さん、 おはよう。 看護師《かんごし》 の 木村《きむら》 だよ。', en: 'Good morning, ＿. I am Kimura, the nurse.' },
        { tl: '昨夜《ゆうべ》 は よく 眠《ねむ》れました か。', c: '昨夜《ゆうべ》 は よく 眠《ねむ》れた？', en: 'Did you sleep well last night?', n: 'Note: 睡眠《すいみん》 = sleep.' } ] },
      { title: 'When to tell the doctor', lines: [
        { tl: '先生《せんせい》 に 伝《つた》えて おきます ね。', c: '先生《せんせい》 に 伝《つた》えて おく ね。', en: 'I will let the doctor know.' } ] } ],
    escalate: 'Thoughts of suicide or a plan: stay with the patient and tell the doctor at once.'
  });
  if (!((T.mood || {}).steps || []).length) T.mood = fx('mood');
  if (!((T.admit || {}).steps || []).length) T.admit = fx('admit');
})();
