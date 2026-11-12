/* App identity. version must match the newest entry in data/changelog.js and VERSION in sw.js. */
window.APP_META = {
  name: 'Hanashimashō',
  short: 'Hanashimashō',
  nameNative: '話しましょう',
  tagline: 'Japanese from zero, for clinicians',
  version: '0.8.1',
  repo: 'Japanese',
  updated: 'November 2026',
  author: 'Isabella Navarro, MD',
  email: 'isaymotion@gmail.com',
  // Institution shown on handouts and in the ward tools when they arrive. This app is not tied to one hospital:
  // names, address and form labels are read from data/hospital.js (edit that file for your own service).
  institution: { name: (window.HOSPITAL && HOSPITAL.name) || '', address: (window.HOSPITAL && HOSPITAL.address) || '', short: (window.HOSPITAL && HOSPITAL.shortName) || '', deescForm: (window.HOSPITAL && HOSPITAL.forms && HOSPITAL.forms.deesc) || '', dischargeForm: (window.HOSPITAL && HOSPITAL.forms && HOSPITAL.forms.discharge) || '' },
  attribution: 'App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com'
};

/* Show the "Other apps" group in the menu? Off for now, as in the other apps; the list is kept in step so it can be switched on later. */
window.SHOW_OTHER_APPS = false;

window.APP_LINKS = [
  { name: 'Usap Tayo (Tagalog)', href: 'https://isaymotion.github.io/Tagalog/' },
  { name: 'Hablemos (Spanish)', href: 'https://isaymotion.github.io/Hablemos/' },
  { name: 'MSE Trainer', href: 'https://isaymotion.github.io/MSEtrainer/' },
  { name: 'DSM-5-TR Study Companion', href: 'https://isaymotion.github.io/DSMVapp/' },
  { name: 'Stahl Study Companion', href: 'https://isaymotion.github.io/Stahl/' },
  { name: 'Kaplan Study', href: 'https://isaymotion.github.io/KaplanStudy/' },
  { name: 'Shea Trainer', href: 'https://isaymotion.github.io/sheatrainer/' }
];

/* New app: all progress lives under 'hanashimasho.v1' (js/core.js) and the shell's 'hanashimasho.lastBackup'. No MIGRATE_KEYS. */
