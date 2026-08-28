import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'beer-mash-efficiency-calculator';
const title = 'Kalkulator Efisiensi Mash Bir';
const description = 'Hitung efisiensi mash dan ekstraksi gula.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Metrik',
  stagePreboil: 'Wort Sebelum Dididihkan',
  stagePostboil: 'Wort Setelah Dididihkan',
  unitImperial: 'Imperial',
  labels: {
    grainWeight: 'Total Berat Malt',
    grainType: 'Potensi Malt',
    customPotential: 'Potensi Kustom',
    wortVolume: 'Volume Wort',
    measuredSg: 'SG Terukur',
    unitSystem: 'Sistem Satuan',
    sampleTemp: 'Suhu Sampel',
    calibTemp: 'Suhu Kalibrasi',
    stageLabel: 'Tahap Pembuatan',
    presets: 'Potensi Umum',
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
    pilsner: 'Pilsner Malt (1.037 / 37 PPG)',
    pale_ale: 'Pale Ale Malt (1.038 / 38 PPG)',
    vienna: 'Vienna Malt (1.036 / 36 PPG)',
    munich: 'Munich Malt (1.035 / 35 PPG)',
    wheat: 'Wheat Malt (1.038 / 38 PPG)',
    caramel_30: 'Caramel 30L (1.034 / 34 PPG)',
    caramel_60: 'Caramel 60L (1.034 / 34 PPG)',
    chocolate: 'Chocolate Malt (1.034 / 34 PPG)',
    custom: 'Custom Potential...',
  },
  results: {
    efficiencyTitle: 'Efisiensi Mash',
    efficiencyBadge: 'Status Terhitung',
    correctedGravity: 'SG Terkoreksi Suhu',
    measuredGravity: 'Gravitasi Terukur',
    expectedGravity75: 'SG pada 75%',
    expectedGravity80: 'SG pada 80%',
    expectedGravity85: 'SG pada 85%',
    potentialPoints: 'Poin Potensial',
    extractedPoints: 'Poin Ekstraksi',
    wortBrix: 'Estimasi Brix',
  },
  statusMessages: {
    excellent: 'Sangat Baik (82%+)',
    good: 'Baik (74% - 81%)',
    average: 'Rata-rata (65% - 73%)',
    poor: 'Rendah (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Mash Kettle Extraction',
    wortLevel: 'Wort Level',
    sugarExtraction: 'Sugar Extraction',
  },
};

const faq = [
  {
    question: 'What is mash efficiency in brewing?',
    answer: 'Mash efficiency is the percentage of potential sugars extracted from malted grains into the pre-boil wort during the mashing and sparging process.',
  },
  {
    question: 'What is a good mash efficiency percentage?',
    answer: 'For homebrewing, a mash efficiency between 70% and 80% is considered typical and good. Commercial brewhouses with fine-tuned sparging often achieve 82% to 90%.',
  },
  {
    question: 'How is mash efficiency calculated?',
    answer: 'It compares the total gravity points extracted in the wort (volume multiplied by measured gravity points) to the maximum theoretical gravity points available from the grain bill.',
  },
  {
    question: 'How can I improve low mash efficiency?',
    answer: 'Check grain crush size, maintain proper mash pH (5.2 - 5.6), ensure thorough lautering/sparging, and avoid channeling in the grain bed.',
  },
  {
    question: 'What is the difference between mash efficiency and brewhouse efficiency?',
    answer: 'Mash efficiency measures sugar extraction into the kettle before boiling. Brewhouse efficiency factors in kettle deadspace, trub losses, and volume left in the fermenter.',
  },
  {
    question: 'How does water-to-grain ratio affect mash yield?',
    answer: 'Thinner mashes (3.5 to 4.0 L per kg) improve enzyme mobility and sugar rinsing, while thicker mashes can protect enzymes at higher temperatures but slow down extraction.',
  },
];

const howTo = [
  {
    name: 'Select unit system',
    text: 'Choose metric (kg/L) or imperial (lb/gal) for your brewing setup.',
  },
  {
    name: 'Set grain bill weight and grain potential',
    text: 'Select the grain type preset or enter a custom specific gravity potential along with total malt weight.',
  },
  {
    name: 'Enter wort volume and measured SG',
    text: 'Input the pre-boil wort volume collected and the hydrometer or refractometer specific gravity reading.',
  },
  {
    name: 'Review efficiency and expected gravity targets',
    text: 'Examine the calculated efficiency percentage and compare measured gravity against 75%, 80%, and 85% benchmarks.',
  },
  {
    name: 'Adjust recipe or process for next brew day',
    text: 'Use the calculated efficiency baseline to scale future grain bills accurately or adjust sparging speed.',
  },
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
  inLanguage: 'id',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions about Mash Efficiency',
  bibliographyTitle: 'References and Formulas',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Understanding Beer Mash Efficiency',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mash efficiency evaluates how effectively grain starches are converted to fermentable sugars during mashing and collected during lautering. Knowing your efficiency allows precise recipe formulation and consistent gravity results across brew days.',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Formula', 'Description'],
      rows: [
        ['Potential Points', 'Weight x Grain PPG', 'Theoretical maximum gravity points'],
        ['Extracted Points', 'Volume x Measured SG Points', 'Actual gravity points in wort'],
        ['Mash Efficiency', '(Extracted Points / Potential Points) x 100', 'Percentage yield of extraction'],
        ['Wort Gravity Brix', '-668.82 + 11.536 x SG x 100...', 'Refractometer Brix equivalent'],
      ],
    },
    {
      type: 'title',
      text: 'Key Factors Influencing Efficiency',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Malt Crush: A finer crush increases surface area but can cause stuck sparges.',
        'Mash Temperature & pH: Optimum enzymatic activity occurs between 64°C - 68°C and pH 5.2 - 5.6.',
        'Sparge Technique: Fly sparging or batch sparging flow rate affects sugar rinsing completeness.',
        'Water-to-Grain Ratio: Thinner mashes promote enzyme mobility.',
        'Grain Bed Depth: Bed depth between 30 cm and 45 cm optimizes sparge fluid dynamics.',
      ],
    },
    {
      type: 'tip',
      title: 'Target 75% for Recipe Scaling',
      html: 'When designing a new recipe, standardizing on a baseline 75% mash efficiency gives a reliable foundation before adjusting for specific brewhouse setups.',
    },
    {
      type: 'title',
      text: 'Converting Gravity Points to Recipe Adjustments',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'If your measured pre-boil gravity falls short of target points, you can extend the boil to concentrate sugars or add extra pale malt extract. Tracking mash efficiency over multiple batches establishes your specific system profile.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Mash Efficiency vs Brewhouse Efficiency',
      html: 'Do not confuse mash efficiency with overall brewhouse efficiency. Mash efficiency only measures sugar extraction in the kettle before boiling, excluding equipment deadspace and fermenter trub losses.',
    },
  ],
};
