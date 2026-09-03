import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'calcolatore-efficienza-ammostamento-birra';
const title = 'Calcolatore Efficienza Ammostamento Birra';
const description = 'Calcola la percentuale di efficienza dell\'ammostamento, l\'estrazione degli zuccheri e la gravità specifica prevista per l\'homebrewing.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Metrico',
  stagePreboil: 'Mosto pre-bollitura',
  stagePostboil: 'Mosto post-bollitura',
  unitImperial: 'Imperiale',
  labels: {
    grainWeight: 'Peso totale dei malti',
    grainType: 'Preset di potenziale del malto',
    customPotential: 'Potenziale personalizzato (SG)',
    wortVolume: 'Volume di mosto pre-bollitura',
    measuredSg: 'Gravità specifica misurata (SG)',
    unitSystem: 'Sistema di unità',
    sampleTemp: 'Temperatura campione',
    calibTemp: 'Temperatura taratura',
    stageLabel: 'Fase di ammostamento',
    presets: 'Potenziali comuni del malto',
  },
  units: {
    weightKg: 'kg',
    weightLb: 'lb',
    volumeL: 'L',
    volumeGal: 'gal',
    sg: 'SG',
    brix: 'Brix',
    percent: '%',
    tempC: '°C',
    tempF: '°F',
  },
  grainPresets: {
    pilsner: 'Malto Pilsner (1.037 / 37 PPG)',
    pale_ale: 'Malto Pale Ale (1.038 / 38 PPG)',
    vienna: 'Malto Viennese (1.036 / 36 PPG)',
    munich: 'Malto Monaco (1.035 / 35 PPG)',
    wheat: 'Malto di frumento (1.038 / 38 PPG)',
    caramel_30: 'Caramello 30L (1.034 / 34 PPG)',
    caramel_60: 'Caramello 60L (1.034 / 34 PPG)',
    chocolate: 'Malto cioccolato (1.034 / 34 PPG)',
    custom: 'Potenziale personalizzato...',
  },
  results: {
    efficiencyTitle: 'Efficienza di ammostamento',
    efficiencyBadge: 'Stato calcolato',
    correctedGravity: 'SG corretta per temperatura',
    measuredGravity: 'Gravità misurata',
    expectedGravity75: 'SG a 75% efficienza',
    expectedGravity80: 'SG a 80% efficienza',
    expectedGravity85: 'SG a 85% efficienza',
    potentialPoints: 'Punti potenziali totali',
    extractedPoints: 'Punti estratti misurati',
    wortBrix: 'Brix stimati',
  },
  statusMessages: {
    excellent: 'Eccellente estrazione (82%+)',
    good: 'Buona efficienza (74% - 81%)',
    average: 'Efficienza media (65% - 73%)',
    poor: 'Bassa estrazione (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Estrazione nella tina di ammostamento',
    wortLevel: 'Livello del mosto',
    sugarExtraction: 'Estrazione zuccheri',
  },
};

const faq = [
  {
    question: 'Che cos\'è l\'efficienza di ammostamento?',
    answer: 'L\'efficienza di ammostamento misura la percentuale di zuccheri potenziali estratti dai malti nel mosto prima della bollitura.',
  },
  {
    question: 'Qual è un buon valore di efficienza?',
    answer: 'Per l\'homebrewing, un\'efficienza compresa tra il 70% e l\'80% è considerata ottimale.',
  },
  {
    question: 'Come si calcola l\'efficienza di ammostamento?',
    answer: 'Si confrontano i punti di gravità reali ottenuti nel mosto con il potenziale teorico massimo dei grani.',
  },
  {
    question: 'Come migliorare un\'efficienza troppo bassa?',
    answer: 'Regola la macinatura dei grani, mantieni il pH del mosto tra 5.2 e 5.6 ed effettua uno sparging omogeneo.',
  },
  {
    question: 'Qual è la differenza tra efficienza di ammostamento ed efficienza dell\'impianto?',
    answer: 'L\'efficienza di ammostamento misura solo l\'estrazione prima della bollitura; l\'efficienza globale include le perdite nel bollitore e nel fermentatore.',
  },
  {
    question: 'Come influisce il rapporto acqua/grani?',
    answer: 'Un ammostamento più fluido (da 3.5 a 4.0 L per kg) favorisce la mobilità enzimatica e il lavaggio degli zuccheri.',
  }
];

const howTo = [
  {
    name: 'Selezionare il sistema di unità',
    text: 'Scegli tra sistema metrico o imperiale.',
  },
  {
    name: 'Inserire peso e potenziale dei grani',
    text: 'Seleziona un tipo di malto o imposta un potenziale personalizzato.',
  },
  {
    name: 'Indicare volume di mosto e densità misurata',
    text: 'Inserisci il volume raccolto e la lettura del densimetro.',
  },
  {
    name: 'Esaminare efficienza e target di densità',
    text: 'Confronta il valore ottenuto con gli obiettivi al 75%, 80% e 85%.',
  },
  {
    name: 'Adattare la ricetta per la cotta successiva',
    text: 'Usa l\'efficienza calcolata per calibrare le ricette future.',
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<BeerMashEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande frequenti sull\'efficienza di ammostamento',
  bibliographyTitle: 'Riferimenti e formule',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Comprendere l\'efficienza di ammostamento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'efficienza di ammostamento misura quanto efficacemente gli amidi dei cereali vengono convertiti in zuccheri fermentabili e raccolti nel mosto. Conoscerla consente di formulare ricette precise.',
    },
    {
      type: 'table',
      headers: ['Parametro', 'Formula', 'Descrizione'],
      rows: [
        ['Punti potenziali', 'Peso x PPG del grano', 'Massimo teorico di punti'],
        ['Punti estratti', 'Volume x punti SG misurati', 'Punti reali di densità nel mosto'],
        ['Efficienza di ammostamento', '(Estratti / Potenziali) x 100', 'Percentuale reale di estrazione'],
        ['Gradi Brix mosto', '-668.82 + 11.536 x SG x 100...', 'Equivalente al rifrattometro']
      ],
    },
    {
      type: 'title',
      text: 'Fattori chiave che influenzano l\'estrazione',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Macinatura: Una macinatura più fine aumenta la superficie ma può ostruire il filtraggio.',
        'Temperatura e pH: Attività enzimatica ottimale tra 64°C e 68°C a pH 5.2 - 5.6.',
        'Tecnica di sparging: Il flusso continuo o per fasi incide sul risciacquo degli zuccheri.',
        'Rapporto acqua-grani: Ammostamenti più fluidi favoriscono la mobilità enzimatica.',
        'Spessore del letto: Tra 30 cm e 45 cm si ottimizza la dinamica del fluido.'
      ],
    },
    {
      type: 'tip',
      title: 'Usare il 75% come valore base',
      html: 'Quando si progetta una nuova ricetta, impostare un\'efficienza del 75% garantisce un punto di partenza affidabile.',
    },
    {
      type: 'title',
      text: 'Regolazioni della cotta in base ai risultati',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se la densità misurata prima della bollitura è inferiore al previsto, è possibile prolungare la bollitura per concentrare il mosto o aggiungere estratto di malto.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Efficienza di ammostamento vs Efficienza dell\'impianto',
      html: 'Non confondere l\'efficienza di estrazione in ammostamento con l\'efficienza totale del tuo sistema di produzione.',
    },
  ],
};
