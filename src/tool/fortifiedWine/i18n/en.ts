import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'fortified-wine-builder';
const title = 'Fortified Wine & Vermouth Builder: Pearson Square Calculator';
const description = 'Calculate exactly how much spirit to add to your wine to reach your target ABV. Craft perfect vermouth, port, and sherry with the Pearson Square method.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: 'What are you creating?',
  intentionVermouth: 'Vermouth',
  intentionPort: 'Port',
  intentionSherry: 'Sherry',
  intentionCustom: 'Custom',
  modeALabel: 'From wine I have',
  modeBLabel: 'Target final volume',
  wineSection: 'Base Wine',
  wineVolumeLabel: 'Wine volume (L)',
  wineAbvLabel: 'Wine ABV (%)',
  spiritSection: 'Fortifying Spirit',
  spiritAbvLabel: 'Spirit ABV (%)',
  brandyPreset: 'Brandy (38°)',
  neutralPreset: 'Neutral (96°)',
  aguardientePreset: 'Aguardiente (42°)',
  targetAbvLabel: 'Target ABV (%)',
  targetVolumeLabel: 'Target total volume (L)',
  resultsTitle: 'Your Recipe',
  addLabel: 'Add',
  finalVolumeLabel: 'Final volume',
  bottlesSection: 'Bottles needed',
  copyBtn: 'Copy Recipe',
  copiedBtn: 'Copied!',
  pearsonTitle: 'Pearson Square',
  wineCornerLabel: 'Wine',
  spiritCornerLabel: 'Spirit',
  emptyState: 'Enter your values to see the Pearson Square',
  errorAbv: 'Spirit ABV must be higher than target, and target must be higher than wine ABV.',
  errorMode: 'Enter a valid volume to calculate.',
};

const faqTitle = 'Frequently Asked Questions';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'What is the Pearson Square method?',
    answer: 'The Pearson Square is a simple graphical method used in winemaking to calculate blending ratios. You place the target ABV in the center, the wine ABV at the top-left, and the spirit ABV at the bottom-left. The diagonal differences give the proportional parts of each liquid needed.',
  },
  {
    question: 'What is the typical ABV for vermouth?',
    answer: 'Traditional vermouth ranges from 15% to 18% ABV. Dry (French-style) vermouth is usually at the lower end (15-16%), while sweet (Italian-style) vermouth is often 16-18%.',
  },
  {
    question: 'What base wine should I use for vermouth?',
    answer: 'A neutral, dry white wine between 10-12% ABV works best. The wine provides the backbone; since it will be aromatized with botanicals, you do not need an expensive wine — a clean, acidic base is ideal.',
  },
  {
    question: 'Can I use neutral alcohol instead of brandy?',
    answer: 'Yes. Neutral alcohol (96% ABV) gives you maximum control and a cleaner flavour profile. Brandy adds its own character (oak, dried fruit, vanilla) which can be desirable depending on the style. Port traditionally uses grape brandy.',
  },
  {
    question: 'How does fortification preserve wine?',
    answer: 'When wine ABV exceeds roughly 15-16%, yeast fermentation becomes inhibited. This is why fortified wines have much longer shelf lives — the alcohol acts as a natural preservative against both yeast and bacterial spoilage.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Choose your style', text: 'Select Vermouth, Port, Sherry, or Custom to auto-fill the recommended target ABV.' },
  { name: 'Enter wine data', text: 'Input your base wine volume (or target final volume in Mode B) and its current ABV.' },
  { name: 'Set your spirit', text: 'Choose a spirit preset or enter a custom ABV. The Pearson Square updates in real time.' },
  { name: 'Read your recipe', text: 'The calculator shows exactly how many litres of spirit to add and the final volume.' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'The Pearson Square: Ancient Math, Perfect Wine', level: 2 },
  {
    type: 'paragraph',
    html: 'The <strong>Pearson Square</strong> is one of the oldest and most elegant tools in winemaking mathematics. Developed in the 19th century, it allows any winemaker — professional or amateur — to calculate blending ratios with nothing more than subtraction. Our tool digitises this visual method and adds real-time feedback, so you spend less time calculating and more time crafting.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Vermouth', value: '15–18% ABV', icon: 'mdi:glass-cocktail' },
      { label: 'Port', value: '18–20% ABV', icon: 'mdi:bottle-wine' },
      { label: 'Sherry', value: '15–17% ABV', icon: 'mdi:cup-water' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'Why fortify at 18%?',
    icon: 'mdi:shield-check',
    html: 'Above roughly 15% ABV, <em>Saccharomyces cerevisiae</em> — the primary wine yeast — becomes inhibited. By 18%, fermentation is completely arrested. This is why Port retains residual sweetness: spirits are added mid-fermentation, killing the yeast before all sugar is consumed.',
  },
  {
    type: 'tip',
    title: 'Pro Tip: Measure at 20°C',
    html: 'Alcohol density changes with temperature. Official ABV measurements are calibrated at 20°C. If your spirit or wine is significantly colder or warmer, apply a correction: roughly +0.04% ABV per °C below 20°C.',
  },
  { type: 'title', text: 'The Craft Vermouth Renaissance', level: 2 },
  {
    type: 'paragraph',
    html: 'Southern Europe is experiencing a craft vermouth renaissance. Barcelona, Valencia, and San Sebastián have reclaimed <em>la hora del vermut</em> as a cultural institution, and small producers across Spain, Italy, and France are bottling remarkable expressions. This has created a new generation of home producers who want the technical tools to match their ambition.',
  },
  {
    type: 'summary',
    title: 'Who is this tool for?',
    items: [
      'Home winemakers: Fortify your harvest with precision instead of guesswork.',
      'Craft vermouth producers: Prototype new ABV targets before scaling to full batches.',
      'Spirits educators: Demonstrate the Pearson Square method visually in workshops.',
    ],
  },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
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

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
