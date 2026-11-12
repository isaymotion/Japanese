/* Hospital and program details for THIS deployment. Hanashimashō is written for any psychiatry service, so nothing
   here is hard-coded elsewhere: the About page (and the ward tools, when they are added) read these values.
   Edit this file for your own hospital; leave a field empty to hide it.
   (Usap Tayo keeps the Mariveles version of this file; this copy is deliberately generic.) */
window.HOSPITAL = {
  name: '',
  shortName: '',
  address: '',
  program: '',
  country: '',
  forms: { deesc: '', discharge: '', admission: '' },
  formPrefix: '',
  posts: [],
  yearLevels: [1, 2, 3],
  // Crisis line shown on the About page and, later, in the ward tools. Left empty on purpose: fill in the line
  // your own service uses and verify the number before you publish it.
  crisis: { name: '', number: '', note: '' }
};
