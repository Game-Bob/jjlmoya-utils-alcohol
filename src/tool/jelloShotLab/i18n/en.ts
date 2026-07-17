import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'jello-shot-lab';
const title = 'Jello Shot Lab: The Perfect Gelatin and Alcohol Ratio Calculator';
const description = 'Calculate exactly how much spirit and gelatin to use for jello shots that actually set. Avoid the runny or rubbery failures with science-backed ratios for any spirit strength.';

const ui: JelloShotLabUI = {
  title: 'Jello Shot Lab',
  description: 'Get the perfect ratio of gelatin, water, and alcohol so your shots set every time.',
  liquorBaseLabel: 'Spirit Type',
  liquorAbvLabel: 'Spirit Strength (%)',
  gelatinLabel: 'Gelatin Type',
  diluentLabel: 'Water Base',
  calculateBtn: 'Calculate',
  modePrecision: 'Precision Mode',
  modeIntensity: 'Shot Strength',
  modeIntensityLight: 'Light (Easy)',
  modeIntensityBalanced: 'Standard',
  modeIntensityLimit: 'Maximum (Strong)',
  partyPlannerTitle: 'Party Planner',
  partyPlannerGuestLabel: 'Guests',
  partyPlannerShotsPerGuest: 'Shots per person',
  multiLayerTitle: 'Multi-Layer',
  howToTitle: 'How to Make Them',
  proTipsTitle: 'Pro Tips',
  resultsTitle: 'Your Recipe',
  totalVolumeLabel: 'Total Volume',
  boilingWaterLabel: 'Hot Water',
  alcoholVolumeLabel: 'Spirit',
  packetsNeededLabel: 'Gelatin Packets',
  chillingTimeLabel: 'Chilling Time',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'packets',
  modeParty: 'Party Mode',
  modeRecipe: 'Recipe Mode',
};

const faqTitle = 'Frequently Asked Questions';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'Why does high-proof alcohol prevent jello shots from setting?',
    answer: 'Ethanol disrupts the hydrogen bonds that hold gelatin\'s triple-helix protein structure together. Above roughly 35% of the total volume being spirit, the protein matrix cannot form a stable network and the shot stays liquid. The higher the spirit\'s ABV, the less volume you can add before hitting this limit.',
  },
  {
    question: 'What is the maximum alcohol ratio before jello shots stop setting?',
    answer: 'The safe upper limit is around 30-35% of the total liquid volume being pure spirit (at 40% ABV). With a 96% neutral spirit that limit drops to around 15-18% of total volume. Our calculator accounts for the spirit\'s ABV so you never exceed the setting threshold.',
  },
  {
    question: 'Does it matter which spirit I use - vodka, rum, or tequila?',
    answer: 'What matters is the ABV, not the type of spirit. Vodka at 40% and rum at 40% behave identically in the gelatin matrix. However, spirits with higher sugar content (like some rums or liqueurs) can slightly improve texture because sugar competes with ethanol for the hydrogen bonds in the gelatin network.',
  },
  {
    question: 'How long do jello shots last in the fridge?',
    answer: 'Properly made jello shots last 3-5 days in the fridge covered with plastic wrap. The high alcohol content actually acts as a preservative. Avoid leaving them at room temperature for more than 2 hours as the gelatin softens and bacteria can multiply.',
  },
  {
    question: 'Can I make my jello shots firmer or softer?',
    answer: 'Yes. Use more gelatin (or an extra half-packet) for firmer shots that pop out of cups cleanly. Use slightly less for shots with a softer, jiggly texture. Never substitute gelatin with agar-agar if you want a smooth melt-in-your-mouth texture - agar sets harder and melts at a higher temperature.',
  },
  {
    question: 'Can I freeze jello shots to speed up chilling?',
    answer: 'No. Freezing breaks the gelatin network, resulting in a watery, grainy texture when thawed. Always refrigerate for a minimum of 4 hours. For parties, make them the night before - 8+ hours gives the best texture.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'Choose your spirit', text: 'Enter the ABV of your spirit and pick the shot strength you want. The calculator will show you the maximum amount of spirit your gelatin can hold.' },
  { name: 'Mix the gelatin', text: 'Pour the calculated amount of boiling water into a bowl. Add the gelatin powder and stir vigorously for 2 minutes until fully dissolved. Do not add alcohol yet.' },
  { name: 'Add the spirit', text: 'Let the gelatin mixture cool for 5-10 minutes until it is warm but not hot (below 50°C). Add your spirit and stir gently to avoid creating bubbles.' },
  { name: 'Pour and refrigerate', text: 'Pour into plastic cups, silicone molds, or small shot glasses. Refrigerate for at least 4 hours - overnight is ideal. Do not freeze.' },
];


const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'The Chemistry Behind a Perfect Jello Shot', level: 2 },
  {
    type: 'paragraph',
    html: 'A jello shot is not just flavoured gelatin with booze thrown in - it is a <strong>delicate colloidal suspension</strong> where protein polymers, water, and ethanol compete for hydrogen bonds. Get the ratio wrong and you end up with a puddle of sweet liquid or a rubbery disc that bounces off the table. Get it right and you have a perfectly wobbly shot that slides out of the cup in one clean movement.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Light (Easy)', value: '~30% spirit', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Standard', value: '~45% spirit', icon: 'mdi:flask-outline' },
      { label: 'Maximum', value: '~55% spirit', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'What is Bloom Strength?',
    icon: 'mdi:molecule',
    html: 'Bloom is the measure of a gelatin\'s gelling strength, typically ranging from 50 to 300 Bloom. Supermarket leaf gelatin is usually 150-200 Bloom. Higher Bloom means a firmer gel with the same amount of powder, which means it can tolerate slightly more alcohol before failing to set. Standard powdered gelatin packets (7g) are calibrated for ~240ml of liquid.',
  },
  {
    type: 'card',
    title: 'The Ethanol Limit',
    icon: 'mdi:alert-circle-outline',
    html: 'Ethanol competes with water for the hydrogen-bonding sites on collagen\'s amino acid chains. Once ethanol occupies too many of those sites, the protein cannot fold into the stable triple helix that gives gelatin its structure. The practical limit is approximately <strong>1 part 40% spirit to 1 part water</strong> - beyond that, your shot will not set regardless of how long you wait.',
  },
  {
    type: 'tip',
    title: 'Never add alcohol to boiling gelatin',
    html: 'Alcohol evaporates rapidly above 78°C. Always let your dissolved gelatin cool to below 50°C before stirring in the spirit. This single step is responsible for more failed jello shots than any other mistake.',
  },
  { type: 'title', text: 'Troubleshooting Common Failures', level: 2 },
  {
    type: 'proscons',
    title: 'Signs and Fixes',
    items: [
      { pro: 'Shot is runny after 4 hours → Too much alcohol or ratio exceeded. Reduce spirit volume.', con: 'Shot has no alcohol taste → Spirit was added to liquid that was still too hot. Let it cool first.' },
      { pro: 'Shot is too rubbery → Too much gelatin. Reduce by half a packet next time.', con: 'Shot is cloudy → Bubbles trapped during mixing. Stir gently and let rest before pouring.' },
      { pro: 'Shot has a grainy texture → Gelatin was not fully dissolved. Stir longer in hot water.', con: 'Shot did not set after 8 hours → Ethanol ratio was exceeded. Use less spirit or a lower ABV spirit.' },
    ],
  },
  {
    type: 'summary',
    title: 'Who is this tool for?',
    items: [
      'Party hosts: Calculate exactly how many packets and how much spirit you need before buying.',
      'Bartenders: Scale up to large batch production with consistent results every time.',
      'Home cooks: Avoid the most common failures - runny shots, rubbery texture, or zero alcohol flavour.',
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

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
