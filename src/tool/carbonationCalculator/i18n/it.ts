import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'calcolatore-carbonatazione-birra';
const title = 'Calcolatore di Carbonatazione e Primer per Birra';
const description = 'Calcola i grammi esatti di Destrosio, Zucchero di Canna o DME (Estratto di Malto Secco) per imbottigliare la tua birra artigianale. Inserisci il volume, la temperatura di fermentazione e lo stile per un primer perfetto.';

const ui: CarbonationUI = {
  parametersTitle: 'Parametri',
  metricBtn: 'Metrico',
  imperialBtn: 'Imperiale',
  volumeLabel: 'Volume di Birra',
  maxTempLabel: 'Temperatura Massima',
  litersUnit: 'Litri',
  celsiusUnit: '°C',
  gallonsUnit: 'Galloni',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'Carbonatazione Desiderata',
  volUnit: 'Vol CO2',
  resultsTitle: 'Risultati del Primer',
  tableSugarLabel: 'Zucchero da Tavola',
  cornSugarLabel: 'Zucchero di Mais (Destrosio)',
  dmeLabel: 'Estratto di Malto Secco (DME)',
  safetyTitle: 'PERICOLO DI ESPLOSIONE!',
  lowCarbonation: 'CARBONATAZIONE BASSA',
  optimalCarbonation: 'CARBONATAZIONE OTTIMALE',
  highEffervescence: 'EFFERVESCENZA ELEVATA',
  bubblingVisualizationLabel: 'Visualizzazione approssimativa delle bolle'
};

const faqTitle = 'Domande Frequenti';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "Perché la temperatura è importante per la carbonatazione?",
    answer: "La CO2 residua nella tua birra dipende dalla temperatura più alta raggiunta dopo la fermentazione: i liquidi freddi trattengono più gas disciolto rispetto ai liquidi caldi. Se inserisci una temperatura inferiore a quella reale, la calcolatrice presume una CO2 residua maggiore di quella presente e ti suggerisce meno zucchero del necessario. Se la inserisci troppo alta accade il contrario - aggiungi più zucchero del dovuto e rischi l'esplosione della bottiglia, dove la pressione eccessiva causa la rottura del vetro o l'espulsione violenta del tappo.",
  },
  {
    question: "Quale zucchero è migliore per il primer?",
    answer: "Il Destrosio (zucchero di mais) è preferibile perché è neutro e si dissolve rapidamente. Lo zucchero da tavola funziona bene ma richiede circa il 10% in meno di peso.",
  },
  {
    question: "Che cosa succede se aggiungo troppo zucchero di primer?",
    answer: "Un eccesso di zucchero genera una pressione eccessiva di CO2 all'interno della bottiglia. Le bottiglie di vetro standard si rompono a circa 3,5-4,0 volumi di CO2. Oltre questo punto, la bottiglia può esplodere o il tappo può saltare violentemente. Ecco perché la precisione è fondamentale - anche 5 grammi extra per litro possono spingere un lotto nella zona di pericolo.",
  },
  {
    question: "Quanto tempo impiega la birra a carbonatarsi dopo l'imbottigliamento?",
    answer: "Tra 2 e 3 settimane a temperatura ambiente (18-22°C) è l'intervallo tipico affinché il lievito ferimenti completamente lo zucchero aggiunto e la CO2 si integri nel liquido. Aprire una bottiglia prima che il processo sia completo dà sempre un risultato fuorviante: la birra sembrerà poco carbonatata anche se la carbonatazione è ancora in corso. Con il DME il processo può essere leggermente più lento a causa della complessità dei suoi zuccheri fermentabili.",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "Misura il volume reale",
    text: "Indica quanti litri (o galloni) di birra hai pronto per l'imbottigliamento dopo che la fermentazione è completata.",
  },
  {
    name: "Definisci la temperatura di fermentazione",
    text: "Inserisci la temperatura più alta raggiunta dalla birra durante o dopo la fermentazione attiva.",
  },
  {
    name: "Scegli lo stile o il volume di CO2",
    text: "Seleziona il livello di carbonatazione desiderato. Gli stili variano da 1,5 (Stout) a 4,5 (Birre di Grano).",
  },
];


const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Guida Completa alla Carbonatazione e al Primer',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Padroneggia l\'arte del primer e trasforma la tua birra artigianale da un esperimento piatto a un\'esperienza effervescente professionale. Il primer consiste nell\'aggiungere una quantità precisa di zucchero affinché il lievito residuo nella bottiglia generi CO2 naturale durante una fermentazione secondaria. Troppo poco zucchero produce birra piatta; troppo crea una pressione pericolosa che può rompere le bottiglie. La differenza tra i due è di pochi grammi - ecco perché esiste questo calcolatore.'
  },
  {
    type: 'proscons',
    title: 'Fattori Critici di Successo',
    items: [
      { pro: 'Temperatura: la CO2 residua dipende dal picco di temperatura post-fermentazione.', con: '' },
      { pro: 'Precisione: 5 grammi extra per litro possono fare la differenza tra una carbonatazione perfetta e un geyser.', con: '' },
      { pro: '', con: 'Ossidazione: evita schizzi di liquido quando trasferisci per mescolare lo zucchero di primer.' }
    ]
  },
  {
    type: 'title',
    text: 'Volumi di CO2 per Stile di Birra',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'British Stouts', value: '1,5 - 2,0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2,2 - 2,6 Vol', icon: 'mdi:hops' },
      { label: 'German Wheat', value: '3,3 - 4,5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Quale Zucchero Dovresti Scegliere?',
    icon: 'mdi:corn',
    html: '<strong>Destrosio</strong> è neutro e professionale - lo standard del settore. <strong>Zucchero da Tavola</strong> è economico ed efficace (usa il 10% in meno rispetto al destrosio). <strong>DME (Estratto di Malto Secco)</strong> è la scelta del purista ma più difficile da prevedere con precisione poiché la sua fermentabilità varia in base al marchio e alla composizione del malto.'
  },
  {
    type: 'diagnostic',
    title: 'Avviso di Sicurezza',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Pericolo',
    html: 'Le bottiglie di vetro standard si rompono a 3,5-4,0 volumi di CO2. Non tentare di carbonatare stili belgi o di grano in vetro sottile. Usa sempre bottiglie idonee per bevande gassate e non riutilizzare mai bottiglie commerciali riciclate che potrebbero avere danni strutturali microscopici da usi precedenti.'
  },
  {
    type: 'tip',
    title: 'Consiglio Pro: Dissolvi lo Zucchero Correttamente',
    html: 'Fai sempre bollire la soluzione di zucchero per il primer (zucchero disciolto in circa 250 ml di acqua per ogni 20 L di lotto) per 10 minuti prima di aggiungerla alla birra. Bollire igienizza la soluzione e garantisce che lo zucchero sia completamente disciolto e distribuito uniformemente in tutto il lotto, prevenendo punti caldi che causano una carbonatazione irregolare tra le bottiglie.'
  },
  {
    type: 'summary',
    title: 'Per chi è questo strumento?',
    items: [
      'Birrai Artigianali: ottieni il calcolo esatto dello zucchero per il primer per qualsiasi volume, stile e temperatura di fermentazione.',
      'Appassionati di Birra Artigianale: comprendi la scienza dietro il motivo per cui le birre commerciali hanno diversi livelli di carbonatazione.',
      'Birrai Professionisti: verifica i calcoli manuali prima di imbottigliare lotti commerciali di grandi dimensioni.'
    ]
  },
  {
    type: 'title',
    text: 'Scienza della Carbonatazione: Legge di Henry',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Nel suo nucleo, la carbonatazione è governata dalla <strong>Legge di Henry</strong>: la quantità di gas disciolto in un liquido è proporzionale alla pressione parziale di quel gas sopra il liquido. Quando primer una bottiglia e la sigilli, il lievito consuma lo zucchero e produce CO2 in un ambiente sigillato. Man mano che la pressione aumenta, il gas viene forzato di nuovo in soluzione. La temperatura a cui si raggiunge questo equilibrio determina il livello di carbonatazione finale - ecco perché la temperatura di fermentazione è la variabile più critica in questo calcolatore.'
  },
  {
    type: 'paragraph',
    html: 'La CO2 residua nella tua birra prima del primer non è zero. Ogni birra contiene CO2 disciolta dal processo di fermentazione, e la quantità trattenuta dipende dalla temperatura più alta raggiunta. Una birra fermentata a 22°C contiene significativamente meno CO2 residua rispetto a una fermentata a 16°C, anche se ora entrambe sono raffreddate. Non considerare questo residuo porta a una over-carbonatazione sistematica - uno degli errori più comuni tra i birrai alle prime armi.'
  }
];

const schemas: CarbonationLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    step: howTo.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: CarbonationLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faqTitle,
  faq,
  bibliography,
  howTo,
  schemas,
};
