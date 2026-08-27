import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AbvDilutionCalculatorUI } from '../ui';

const slug = 'abv-dilution-calculator';
const title = 'ABV Dilution Calculator and Proof Converter';
const description = 'Calculate how much water to add when reducing a spirit to a target ABV or proof. The offline calculator shows final volume, pure alcohol, and the dilution ratio.';

const ui: AbvDilutionCalculatorUI = {
  unitLabel: 'Volume units',
  metricUnit: 'Metric mL',
  imperialUnit: 'Imperial fl oz',
  strengthLabel: 'Strength units',
  abvUnit: 'ABV percent',
  proofUnit: 'US proof',
  presetLabel: 'Quick scenarios',
  spiritPresetLabel: '750 mL spirit',
  liqueurPresetLabel: '700 mL liqueur',
  cocktailPresetLabel: '500 mL batch',
  startingStrengthLabel: 'Starting strength',
  startingVolumeLabel: 'Starting volume',
  targetStrengthLabel: 'Target strength',
  waterToAddLabel: 'Water to add',
  finalVolumeLabel: 'Final volume',
  pureAlcoholLabel: 'Pure alcohol',
  ratioLabel: 'Water ratio',
  startingProofLabel: 'Starting proof',
  targetProofLabel: 'Target proof',
  readyMessage: 'Your target is lower. Measure the water, then blend gradually.',
  invalidMessage: 'The target must be lower than the starting strength for dilution.',
  largeAdditionMessage: 'This batch needs at least as much water as spirit. Blend in stages and recheck.',
  bottleLabel: 'Graduated bottle showing the calculated final volume',
  waterLayerLabel: 'Water layer in the final blend',
  estimateNotice: 'Planning estimate only. Alcohol and water can contract when mixed, so verify the final strength with suitable measurement equipment.',
  sourceLabel: 'Formula sources',
  calculateAction: 'Dilution inputs',
  resetAction: 'Reset values',
  volumeHint: 'Choose the volume you have before adding water.',
  strengthHint: 'Proof is shown as US proof where 80 proof equals 40 percent ABV.',
};

const faq = [
  {
    question: 'How do I calculate the water needed to dilute alcohol?',
    answer: 'First calculate the pure alcohol volume by multiplying the starting volume by the starting ABV. Divide that pure alcohol volume by the target ABV as a decimal to get the theoretical final volume. Subtract the starting volume from the final volume to find the water to add.',
  },
  {
    question: 'What is the difference between ABV and proof?',
    answer: 'ABV is the percentage of a drink that is pure alcohol by volume. In the US proof system, proof is twice the ABV, so 80 proof equals 40 percent ABV. The proof switch changes the display without changing the physical alcohol strength.',
  },
  {
    question: 'Does the calculator account for alcohol and water contraction?',
    answer: 'No. The result is a conservation of pure alcohol estimate. Ethanol and water can occupy slightly less combined volume after mixing, and temperature also changes volume. Use the result as a batching plan and verify with an appropriate hydrometer or other method.',
  },
  {
    question: 'Can I use this calculator to make a legal alcohol product?',
    answer: 'This tool only performs arithmetic and does not check recipes, labeling, excise duty, licensing, or local rules. Follow the requirements that apply where you make and sell beverages, and use clean equipment and safe measurement practices.',
  },
];

const howTo = [
  {
    name: 'Choose volume units',
    text: 'Select metric millilitres or imperial fluid ounces. The physical volume stays the same when you switch units.',
  },
  {
    name: 'Enter the starting batch',
    text: 'Set the starting ABV or proof and the volume of spirit you have before dilution.',
  },
  {
    name: 'Set the target strength',
    text: 'Enter a lower ABV or proof for the finished blend. The calculator flags targets that are not dilutions.',
  },
  {
    name: 'Add water in stages',
    text: 'Read the calculated water volume and final volume, blend gradually, and verify the finished strength with suitable equipment.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions about dilution',
  bibliographyTitle: 'Formula sources',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'How ABV dilution works',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dilution reduces the alcohol concentration by adding water while keeping the amount of pure alcohol approximately constant. This <strong>ABV dilution calculator</strong> turns a starting strength and volume into a practical water addition and a theoretical final volume. It works locally in the browser with no uploaded batch data.',
    },
    {
      type: 'table',
      headers: ['Value', 'Formula', 'Meaning'],
      rows: [
        ['Pure alcohol', 'starting volume x starting ABV', 'Alcohol carried into the blend'],
        ['Final volume', 'pure alcohol / target ABV', 'Theoretical total after dilution'],
        ['Water to add', 'final volume - starting volume', 'The planning amount of water'],
      ],
    },
    {
      type: 'title',
      text: 'ABV and proof conversion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alcohol by volume expresses pure alcohol as a percentage of the liquid volume. US proof is twice the ABV, which makes 40 percent ABV equal to 80 proof. Use the visible strength switch when a bottle label uses proof, but remember that proof systems can differ by country and historical convention.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '80 proof', label: '40 percent ABV' },
        { value: '1:1', label: 'Water ratio in the default scenario' },
        { value: '100% local', label: 'No batch data uploaded' },
      ],
    },
    {
      type: 'title',
      text: 'Why the result is an estimate',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The arithmetic preserves the pure alcohol volume, but real mixtures are not perfectly additive. Alcohol and water contract as they combine, and temperature changes density and measured volume. For repeatable production, add water gradually, allow the blend to reach the intended temperature, and verify strength with equipment suited to the liquid.',
    },
    {
      type: 'tip',
      title: 'Blend gradually and verify',
      html: 'Use clean, measured water and a container large enough for the theoretical final volume. The calculator does not know your temperature, sugar, flavourings, or local measurement rules, so treat its water amount as a starting plan rather than a certificate of final ABV.',
    },
    {
      type: 'title',
      text: 'A repeatable dilution workflow',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Record the labelled starting ABV and the actual batch volume.',
        'Choose a target strength that is lower than the starting strength.',
        'Calculate pure alcohol, theoretical final volume, and water to add.',
        'Add most of the water, mix, then add the remainder in small measured steps.',
        'Verify the finished blend after it reaches the measurement temperature.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Arithmetic is not a production approval',
      html: 'This page does not validate ingredients, sanitation, labelling, tax, licensing, or legal sale. Never use a calculator result as a reason to skip the rules and checks that apply to your beverage or location.',
    },
  ],
};
