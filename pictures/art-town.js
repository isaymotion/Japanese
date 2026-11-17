/* Line art for the 'town' picture sets (0.24.0). NOT in js/data: no Japanese here (labels come from js/data/picture-sets-town.js),
   so changing art does not start the recording job.
   Shape (PLAN-0.24 A2): window.PICTURE_ART['<art id>'] = { vb: [width 300-420, height 240-440], svg: '<g>…</g>' }; inner SVG only:
   no <svg>, <text>, <style>, <script>, <image>, ids or external references; paints only stroke="currentColor", fill="none",
   fill="currentColor" with fill-opacity 0.06-0.2, fill="var(--surface)"; stroke width 1.5-3, round caps and joins; under 9 KB each.
   Art ids are permanent once a set uses them. */
window.PICTURE_ART = window.PICTURE_ART || {};
/* seed: writers replace */
window.PICTURE_ART['positions'] = { vb: [340, 260], svg: '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  '<line x1="20" y1="232" x2="320" y2="232"/>' +
  '<rect x="50" y="134" width="240" height="12" rx="3" fill="currentColor" fill-opacity="0.12"/>' +
  '<line x1="72" y1="146" x2="72" y2="232"/><line x1="268" y1="146" x2="268" y2="232"/>' +
  '<rect x="130" y="84" width="80" height="50" rx="2" fill="currentColor" fill-opacity="0.06"/>' +
  '<line x1="130" y1="84" x2="118" y2="72"/><line x1="210" y1="84" x2="222" y2="72"/>' +
  '<circle cx="170" cy="66" r="14" fill="currentColor" fill-opacity="0.15"/>' +
  '<circle cx="170" cy="112" r="12" fill="currentColor" fill-opacity="0.15"/>' +
  '<circle cx="244" cy="122" r="11" fill="currentColor" fill-opacity="0.15"/>' +
  '<circle cx="170" cy="212" r="18" fill="currentColor" fill-opacity="0.15"/>' +
  '</g>' };
