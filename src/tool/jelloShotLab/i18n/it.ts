import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'laboratorio-jello-shot';
const title = 'Laboratorio Jello Shot: Il calcolatore perfetto del rapporto tra alcol e gelatina';
const description = 'Calcola esattamente quanta acquavite e gelatina usare per jello shot che si solidificano davvero. Evita i fallimenti liquidi o gommosi con rapporti basati sulla scienza per qualsiasi gradazione alcolica.';

const ui: JelloShotLabUI = {
  title: 'Laboratorio Jello Shot',
  description: 'Ottieni il rapporto perfetto di gelatina, acqua e alcol affinché i tuoi shot si solidifichino ogni volta.',
  liquorBaseLabel: 'Tipo di liquore',
  liquorAbvLabel: 'Gradazione alcolica (%)',
  gelatinLabel: 'Tipo di gelatina',
  diluentLabel: 'Base acquosa',
  calculateBtn: 'Calcola',
  modePrecision: 'Modalità precisione',
  modeIntensity: 'Intensità del shot',
  modeIntensityLight: 'Leggero (Facile)',
  modeIntensityBalanced: 'Standard',
  modeIntensityLimit: 'Massimo (Forte)',
  partyPlannerTitle: 'Pianificatore di festa',
  partyPlannerGuestLabel: 'Ospiti',
  partyPlannerShotsPerGuest: 'Shot per persona',
  multiLayerTitle: 'Multi-strato',
  howToTitle: 'Come prepararli',
  proTipsTitle: 'Consigli pro',
  resultsTitle: 'La tua ricetta',
  totalVolumeLabel: 'Volume totale',
  boilingWaterLabel: 'Acqua calda',
  alcoholVolumeLabel: 'Liquore',
  packetsNeededLabel: 'Bustine di gelatina',
  chillingTimeLabel: 'Tempo di raffreddamento',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'bustine',
  modeParty: 'Modalità festa',
  modeRecipe: 'Modalità ricetta',
};

const faqTitle = 'Domande frequenti';
const bibliographyTitle = 'Fonti e riferimenti';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'Perché l\'alcol ad alta gradazione impedisce ai jello shot di solidificarsi?',
    answer: 'L\'etanolo disturba i legami idrogeno che tengono insieme la struttura proteica a tripla elica della gelatina. Quando il liquore supera circa il 35% del volume totale, la matrice proteica non riesce a formare una rete stabile e il shot rimane liquido. Più alta è la gradazione alcolica del liquore, meno volume si può aggiungere prima di raggiungere questo limite.',
  },
  {
    question: 'Qual è il rapporto massimo di alcol prima che i jello shot smettano di solidificarsi?',
    answer: 'Il limite superiore sicuro è di circa il 30–35% del volume totale di liquido come liquore puro (a 40% vol). Con un alcol neutro al 96%, quel limite scende a circa il 15–18% del volume totale. Il nostro calcolatore tiene conto della gradazione alcolica del liquore in modo che non si superi mai la soglia di solidificazione.',
  },
  {
    question: 'Il tipo di liquore utilizzato — vodka, rum o tequila — fa differenza?',
    answer: 'Ciò che conta è la gradazione alcolica, non il tipo di liquore. Vodka al 40% e rum al 40% si comportano in modo identico nella matrice di gelatina. Tuttavia, i liquori con un contenuto di zucchero più elevato (come alcuni rum o liquori) possono migliorare leggermente la consistenza perché lo zucchero compete con l\'etanolo per i legami idrogeno nella rete di gelatina.',
  },
  {
    question: 'Quanto durano i jello shot in frigorifero?',
    answer: 'I jello shot preparati correttamente durano 3–5 giorni in frigorifero coperti con pellicola trasparente. L\'alto contenuto alcolico funge da conservante naturale. Evitare di lasciarli a temperatura ambiente per più di 2 ore poiché la gelatina si ammorbidisce e i batteri possono moltiplicarsi.',
  },
  {
    question: 'Posso rendere i miei jello shot più sodi o più morbidi?',
    answer: 'Sì. Usa più gelatina (o mezza bustina in più) per shot più sodi che escono pulitamente dai bicchieri. Usa leggermente meno per una consistenza più morbida e tremolante. Non sostituire mai la gelatina con agar-agar se vuoi una consistenza che si scioglie in bocca — l\'agar si solidifica più duramente e si scioglie a una temperatura più elevata.',
  },
  {
    question: 'Posso congelare i jello shot per accelerare il raffreddamento?',
    answer: 'No. Il congelamento rompe la rete di gelatina, risultando in una consistenza acquosa e granulosa quando scongelata. Conservare sempre in frigorifero per un minimo di 4 ore. Per le feste, prepararli la sera prima — 8 ore o più garantiscono la migliore consistenza.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'Scegli il tuo liquore', text: 'Inserisci la gradazione alcolica del tuo liquore e scegli l\'intensità del shot desiderata. Il calcolatore ti mostrerà la quantità massima di liquore che la tua gelatina può contenere.' },
  { name: 'Prepara la gelatina', text: 'Versa la quantità calcolata di acqua bollente in una ciotola. Aggiungi la gelatina in polvere e mescola vigorosamente per 2 minuti fino a completo scioglimento. Non aggiungere ancora alcol.' },
  { name: 'Aggiungi il liquore', text: 'Lascia raffreddare il composto di gelatina per 5–10 minuti fino a quando è caldo ma non bollente (sotto i 50 °C). Aggiungi il tuo liquore e mescola delicatamente per evitare bolle.' },
  { name: 'Versa e refrigera', text: 'Versa in bicchieri di plastica, stampi in silicone o piccoli bicchierini da shot. Refrigera per almeno 4 ore — una notte intera è l\'ideale. Non congelare.' },
];

const bibliography: JelloShotLabLocaleContent['bibliography'] = [
  { name: 'Gelatina — Wikipedia', url: 'https://en.wikipedia.org/wiki/Gelatin' },
  { name: 'Jello Shot — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jello_shot' },
  { name: 'McGee, H. — On Food and Cooking: The Science and Lore of the Kitchen (Scribner, 2004)', url: 'https://www.simonandschuster.com/books/On-Food-and-Cooking/Harold-McGee/9780684800011' },
  { name: 'The Food Lab: Better Home Cooking Through Science — J. Kenji López-Alt (Norton, 2015)', url: 'https://www.seriouseats.com/the-food-lab-better-home-cooking-through-science' },
];

const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'La chimica dietro un jello shot perfetto', level: 2 },
  {
    type: 'paragraph',
    html: 'Un jello shot non è solo gelatina aromatizzata con alcol aggiunto — è una <strong>delicata sospensione colloidale</strong> in cui polimeri proteici, acqua ed etanolo competono per i legami idrogeno. Sbagliare il rapporto significa ritrovarsi con una pozza di liquido dolce o un disco gommoso che rimbalza sul tavolo. Azzeccarlo significa ottenere un shot perfettamente tremolante che scivola fuori dal bicchiere in un unico movimento pulito.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Leggero (Facile)', value: '~30% liquore', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Standard', value: '~45% liquore', icon: 'mdi:flask-outline' },
      { label: 'Massimo', value: '~55% liquore', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'Cos\'è la forza Bloom?',
    icon: 'mdi:molecule',
    html: 'Il Bloom misura la forza gelificante di una gelatina, tipicamente tra 50 e 300 Bloom. La gelatina in fogli del supermercato è solitamente 150–200 Bloom. Un Bloom più alto significa un gel più sodo con la stessa quantità di polvere, il che significa che può tollerare leggermente più alcol prima di non solidificarsi. Le bustine standard di gelatina in polvere (7 g) sono calibrate per circa 240 ml di liquido.',
  },
  {
    type: 'card',
    title: 'Il limite dell\'etanolo',
    icon: 'mdi:alert-circle-outline',
    html: 'L\'etanolo compete con l\'acqua per i siti di legame idrogeno sulle catene di amminoacidi del collagene. Quando l\'etanolo occupa troppi di quei siti, la proteina non riesce a ripiegarsi nella stabile tripla elica che dà struttura alla gelatina. Il limite pratico è di circa <strong>1 parte di liquore al 40% per 1 parte di acqua</strong> — oltre questo, il tuo shot non si solidificherà, indipendentemente dal tempo di attesa.',
  },
  {
    type: 'tip',
    title: 'Non aggiungere mai alcol alla gelatina bollente',
    html: 'L\'alcol evapora rapidamente sopra i 78 °C. Lascia sempre raffreddare la gelatina disciolta a meno di 50 °C prima di aggiungere il liquore. Questo singolo passaggio è responsabile di più jello shot falliti di qualsiasi altro errore.',
  },
  { type: 'title', text: 'Risolvere i problemi più comuni', level: 2 },
  {
    type: 'proscons',
    title: 'Sintomi e soluzioni',
    items: [
      { pro: 'Shot liquido dopo 4 ore → Troppo alcol o rapporto superato. Ridurre il volume di liquore.', con: 'Shot senza sapore di alcol → Liquore aggiunto a liquido ancora troppo caldo. Lasciare raffreddare prima.' },
      { pro: 'Shot troppo gommoso → Troppa gelatina. Ridurre di mezza bustina la prossima volta.', con: 'Shot torbido → Bolle intrappolate durante la miscelazione. Mescolare delicatamente e lasciare riposare prima di versare.' },
      { pro: 'Shot con consistenza granulosa → Gelatina non completamente disciolta. Mescolare più a lungo in acqua calda.', con: 'Shot non solidifica dopo 8 ore → Limite di etanolo superato. Usare meno liquore o con ABV inferiore.' },
    ],
  },
  {
    type: 'summary',
    title: 'A chi è destinato questo strumento?',
    items: [
      'Organizzatori di feste: Calcola esattamente quante bustine e quanto liquore ti servono prima di acquistare.',
      'Barman: Scala a produzioni di grandi quantità con risultati costanti ogni volta.',
      'Cuochi casalinghi: Evita i fallimenti più comuni — shot liquidi, consistenza gommosa o zero sapore di alcol.',
    ],
  },
];

const schemas: JelloShotLabLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliographyTitle, bibliography, howTo, schemas };
