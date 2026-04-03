import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'alcohol-clearance-calculator';
const title = 'BAC & Alcohol Metabolism Calculator';
const description = 'Estimate your Blood Alcohol Content (BAC) and the time needed for your body to eliminate alcohol based on Widmark\'s formula.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Biological Sex',
  weightLabel: 'Body Weight',
  kgUnit: 'kg',
  addDrinkLabel: 'Add Drink',
  beerLabel: 'Beer',
  wineLabel: 'Wine',
  spiritLabel: 'Mixed Drink',
  shotLabel: 'Shot',
  accumulatedLabel: 'Consumed Drinks',
  emptyListLabel: 'Your list is empty',
  emptySubLabel: 'Select drinks to calculate.',
  estimatedBacLabel: 'Estimated BAC',
  bacUnit: 'BAC',
  timeToZeroLabel: 'to be at 0.0',
  waterAdviceLabel: 'Water (Before sleep)',
  pillAdviceLabel: 'Supplements',
  noneAdvice: 'Not needed',
  hydrationAdvice: 'Priority: Hydration',
  electrolytesAdvice: 'Electrolytes + Vit. B',
  disclaimerText: 'This calculator is a theoretical estimate. Metabolism and food vary the result. Don\'t drink and drive.',
  drinkUnit: 'drink',
  drinksUnit: 'drinks'
};

const faqTitle = 'Frequently Asked Questions';
const bibliographyTitle = 'Bibliography & Sources';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "What is Widmark's formula?",
    answer: "It is the standard pharmacokinetics model that relates the amount of alcohol ingested with body weight and a distribution factor based on biological sex.",
  },
  {
    question: "Can coffee speed up alcohol elimination?",
    answer: "No. The liver eliminates alcohol at a constant rate (approx. 0.15 g/L per hour). Coffee may make you feel more alert, but it doesn't reduce blood alcohol levels.",
  },
  {
    question: "Why does biological sex affect BAC calculations?",
    answer: "Biological sex influences the Widmark factor 'r', which represents total body water as a fraction of weight. Men average r=0.68 because they have proportionally more body water. Women average r=0.55 due to higher body fat percentages, which holds less alcohol. This means for the same drinks and weight, women will have a higher BAC.",
  },
];

const bibliography: AlcoholClearanceLocaleContent['bibliography'] = [
  {
    name: "Widmark's Formula for BAC Calculation - Forensic Science Lab",
    url: "https://www.forensic-science.com/widmark-formula",
  },
  {
    name: "Alcohol Metabolism: How the body processes alcohol - NIH",
    url: "https://www.niaaa.nih.gov/publications/alcohol-metabolism",
  },
];

const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "Set up your profile",
    text: "Select your biological sex (affects body water percentage) and your current weight.",
  },
  {
    name: "Add consumed drinks",
    text: "Click on the drink icons you've had. They will accumulate in the list below.",
  },
  {
    name: "Check safety times",
    text: "Observe the estimated BAC and, most importantly, the time the liver will take to process all the ingested ethanol.",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Alcohol Metabolism: Science and Elimination',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Understanding how our body processes ethanol is essential for safety and for mitigating hangovers. Our <strong>alcohol elimination calculator</strong> uses the recognized <strong>Widmark Formula</strong> to offer you a clear map of your metabolic state. Alcohol is not eliminated by sweating, drinking water, or exercising — only time and hepatic metabolism can reduce your blood alcohol concentration.'
  },
  {
    type: 'diagnostic',
    title: 'The Pharmacokinetics of BAC',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Biochemistry',
    html: 'Alcohol distributes through body water. Factors like weight and the Widmark coefficient r (0.68 in men / 0.55 in women) determine the initial dilution of ethanol in the bloodstream. This is why two people of the same weight can have very different BAC readings after consuming the same drinks.'
  },
  {
    type: 'title',
    text: 'Hepatic Oxidation and Enzymes',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'The liver degrades 95% of alcohol through Alcohol Dehydrogenase (ADH). This process occurs at a constant rate (zero-order kinetics), which means it cannot be accelerated by exercise or coffee. The remaining 5% is eliminated through breath, urine, and sweat — which is the basis for breathalyzer testing in traffic enforcement.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Elimination Rate', value: '0.15 g/L·h', icon: 'mdi:clock-fast' },
      { label: 'Gastric Absorption', value: '20% Ethanol', icon: 'mdi:stomach' },
      { label: 'Suggested Hydration', value: '1:1 Water/Drink', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Myths vs Reality',
    items: [
      { pro: 'Water and electrolytes before sleep reduce hangover severity by countering diuresis.', con: '' },
      { pro: '', con: 'Cold showers: They do not affect blood alcohol concentration at all.' },
      { pro: '', con: 'Coffee: Masks drowsiness but does not restore lost reflexes or cognitive function.' }
    ]
  },
  {
    type: 'card',
    title: 'What Causes a Hangover?',
    icon: 'mdi:alert-decagram',
    html: 'Known scientifically as veisalgia, a hangover is caused by systemic dehydration (vasopressin suppression by ethanol), acetaldehyde accumulation (a toxic metabolite), and a cytokine inflammatory immune response. The brain\'s glutamate rebound after alcohol suppression also contributes to anxiety and sensitivity to light and sound the morning after.'
  },
  {
    type: 'tip',
    title: 'Safety First: Know Your Limit',
    html: 'A BAC of 0.05% measurably impairs judgment, tracking, and reaction time. Most countries set the legal driving limit between 0.05% and 0.08%. However, individual sensitivity varies significantly — age, medications, fatigue, and genetic ADH enzyme variants all shift how alcohol affects you personally. When in doubt, do not drive.'
  },
  {
    type: 'title',
    text: 'The Role of Food and Absorption Rate',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Eating before or during drinking dramatically changes alcohol absorption kinetics. Food in the stomach — especially proteins and fats — slows gastric emptying, reducing the peak rate at which ethanol enters the bloodstream. A person who drinks on an empty stomach can reach a peak BAC 50% higher than the same person who ate a full meal before drinking the same amount. This is one of the most powerful variables that the Widmark formula cannot fully capture, which is why our calculator includes a disclaimer about theoretical estimation.'
  },
  {
    type: 'paragraph',
    html: 'The type of alcoholic beverage also matters beyond just ABV and volume. Carbonated mixers (tonic water, sparkling wine) accelerate gastric emptying and push alcohol into the bloodstream faster. Drinks with very high ABV (>25%) can temporarily inhibit stomach motility, slowing absorption. Sweet drinks can mask the perceived effect of alcohol, leading people to drink faster than they realize. These nuances are why real-world BAC can diverge from model predictions by 20-30% in both directions.'
  }
];

const schemas: AlcoholClearanceLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: AlcoholClearanceLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faqTitle,
  faq,
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
