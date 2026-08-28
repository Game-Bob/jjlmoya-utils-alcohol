import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'maseffektivitetsraknare-bier';
const title = 'Mäskeffektivitetsräknare för Ölbryggning';
const description = 'Beräkna mäskeffektivitet i procent, sockerutvinning och förväntad stamvörtstyrka för hembryggning.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Metrisk',
  stagePreboil: 'Vört före kok',
  stagePostboil: 'Vört efter kok',
  unitImperial: 'Imperial',
  labels: {
    grainWeight: 'Total maltvikt',
    grainType: 'Förinställning för maltpotential',
    customPotential: 'Egen maltpotential (SG)',
    wortVolume: 'Vörtvolym före kok',
    measuredSg: 'Uppmätt specifik vikt (SG)',
    unitSystem: 'Enhetssystem',
    sampleTemp: 'Provtemperatur',
    calibTemp: 'Kalibreringstemperatur',
    stageLabel: 'Bryggstadium',
    presets: 'Vanliga maltpotentialer',
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
    pilsner: 'Pilsnermalt (1.037 / 37 PPG)',
    pale_ale: 'Pale Ale-malt (1.038 / 38 PPG)',
    vienna: 'Wienermalt (1.036 / 36 PPG)',
    munich: 'Münchner malt (1.035 / 35 PPG)',
    wheat: 'Vetemalt (1.038 / 38 PPG)',
    caramel_30: 'Karamellmalt 30L (1.034 / 34 PPG)',
    caramel_60: 'Karamellmalt 60L (1.034 / 34 PPG)',
    chocolate: 'Chokladmalt (1.034 / 34 PPG)',
    custom: 'Eget potentialvärde...',
  },
  results: {
    efficiencyTitle: 'Mäskeffektivitet',
    efficiencyBadge: 'Beräknad status',
    correctedGravity: 'Temp-korrigerad SG',
    measuredGravity: 'Uppmätt densitet',
    expectedGravity75: 'SG vid 75% effektivitet',
    expectedGravity80: 'SG vid 80% effektivitet',
    expectedGravity85: 'SG vid 85% effektivitet',
    potentialPoints: 'Totala potentiella poäng',
    extractedPoints: 'Uppmätta extraktpoäng',
    wortBrix: 'Uppskattad Brix',
  },
  statusMessages: {
    excellent: 'Utmärkt extraktion (82%+)',
    good: 'God effektivitet (74% - 81%)',
    average: 'Genomsnittlig effektivitet (65% - 73%)',
    poor: 'Låg extraktion (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Extraktion i mäskkärlet',
    wortLevel: 'Vörtnivå',
    sugarExtraction: 'Sockerextraktion',
  },
};

const faq = [
  {
    question: 'Vad är mäskeffektivitet vid ölbryggning?',
    answer: 'Mäskeffektivitet visar hur stor andel av maltets potentiella sockerarter som lakas ut till vörten före kok.',
  },
  {
    question: 'Vad är en bra mäskeffektivitet?',
    answer: 'Vid hembryggning anses en mäskeffektivitet mellan 70% och 80% vara ett mycket bra resultat.',
  },
  {
    question: 'Hur beräknas mäskeffektiviteten?',
    answer: 'Genom att jämföra vörtens faktiska extraktpoäng med maltens teoretiska maxvärde.',
  },
  {
    question: 'Hur förbättrar man en låg mäskeffektivitet?',
    answer: 'Anpassa krossningsgraden, håll mäskans pH mellan 5.2 och 5.6 samt se till att lakningen sker jämnt.',
  },
  {
    question: 'Vad skiljer mäskeffektivitet från brygghuseffektivitet?',
    answer: 'Mäskeffektivitet mäter endast lakningen i mäskkärlet, medan brygghuseffektivitet även drar av förluster i kokkärl och jäskärl.',
  },
  {
    question: 'Hur påverkar mäskningsförhållandet utbytet?',
    answer: 'En tunnare mäsk (3.5 till 4.0 liter per kg) underlättar enzymaktiviteten och gör sockerlakningen effektivare.',
  }
];

const howTo = [
  {
    name: 'Välj enhetssystem',
    text: 'Välj metriska eller imperialistiska enheter.',
  },
  {
    name: 'Ange maltvikt och potential',
    text: 'Välj maltsort ur listan eller ange egen maltpotential.',
  },
  {
    name: 'Fyll i vörtvolym och uppmätt SG',
    text: 'Mata in uppsamlad vörtvolym före kok och mätvärdet från hydrometern.',
  },
  {
    name: 'Granska effektivitet och mål',
    text: 'Jämför din uppmätta densitet med riktvärdena för 75%, 80% och 85%.',
  },
  {
    name: 'Justera receptet inför nästa bryggning',
    text: 'Använd det beräknade värdet för att skala framtida maltgivor exakt.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor om mäskeffektivitet',
  bibliographyTitle: 'Referenser och formler',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Förstå mäskeffektivitet vid ölbryggning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mäskeffektivitet mäter hur effektivt stärkelse från malt omvandlas till jäsbara sockerarter och samlas i vörten. Det är avgörande för exakt receptformulering.',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Formel', 'Beskrivning'],
      rows: [
        ['Potentiella poäng', 'Vikt x PPG', 'Teoretiskt maximum'],
        ['Extraherade poäng', 'Volym x SG-poäng', 'Verkliga extraktpoäng'],
        ['Mäskeffektivitet', '(Extraherat / Potentiell) x 100', 'Verklig extraktionsandel'],
        ['Vört Brix', '-668.82 + 11.536 x SG x 100...', 'Refraktometervärde']
      ],
    },
    {
      type: 'title',
      text: 'Viktiga faktorer som påverkar sockerutvinningen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Krossningsgrad: Finare krossning ökar ytan men kan försvåra lakningen.',
        'Temperatur och pH: Optimal enzymaktivitet mellan 64°C och 68°C vid pH 5.2 - 5.6.',
        'Lakningsteknik: Kontinuerligt eller stegvist tillflöde påverkar sockeruthämtningen.',
        'Vatten-maltförhållande: Tunnare mäsk gynnar enzymmobiliteten.',
        'Bädddjup: Mellan 30 cm och 45 cm optimeras vätskans dynamik.'
      ],
    },
    {
      type: 'tip',
      title: 'Använd 75% som grundvärde för nya recept',
      html: 'När du skapar ett nytt recept ger en antagen mäskeffektivitet på 75% en stabil och trygg utgångspunkt.',
    },
    {
      type: 'title',
      text: 'Processjusteringar baserat på mätvärden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om den uppmätta densiteten före kok är lägre än förväntat kan du förlänga koktiden för att koncentrera vörten eller tillsätta maltextrakt.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Mäskeffektivitet kontra brygghuseffektivitet',
      html: 'Blanda inte ihop effektiviteten i mäskkärlet med den totala effektiviteten för hela ditt bryggverk.',
    },
  ],
};
