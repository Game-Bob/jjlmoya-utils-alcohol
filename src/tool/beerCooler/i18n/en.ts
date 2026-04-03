import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'beer-cooler';
const title = 'Beer Cooling Calculator';
const description = 'Calculate how long it takes for your beer to cool down in the fridge or freezer based on its container.';

const ui: BeerCoolerUI = {
  step1Title: 'What are you cooling?',
  canLabel: 'Can',
  aluminumLabel: 'Aluminum',
  bottleLabel: 'Bottle',
  glassLabel: 'Glass',
  step2Title: 'Where do you put it?',
  fridgeLabel: 'Fridge',
  freezerLabel: 'Freezer',
  step3Title: 'Fine-tune Temperatures',
  initialTempLabel: 'Initial Temp',
  targetTempLabel: 'Cold Goal',
  glacialLabel: 'Glacial',
  perfectLabel: 'Perfect',
  bodegaLabel: 'Bodega',
  readyTitle: 'Ready',
  readyDescription: 'Select container and location to calculate.',
  estimatedTimeLabel: 'Estimated time',
  methodLabel: 'Method',
  containerLabel: 'Container',
  alreadyColdLabel: 'Already cold!',
  neverColdLabel: 'Never cold'
};

const faqTitle = 'Frequently Asked Questions';
const bibliographyTitle = 'Bibliography & Sources';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: "Does beer 'burn' if cooled too fast?",
    answer: "No. The myth of beer 'burning' from heat shock is false. What can affect it is repeated freezing and thawing, which breaks proteins and clouds the liquid, or leaving it in the sun (UV rays).",
  },
  {
    question: "Why does foam spray out if the beer is warm?",
    answer: "Henry's Law. The solubility of CO2 decreases as temperature increases. In a warm beer, the gas is 'desperate' to escape. When opened, the pressure drops and the gas expands violently.",
  },
  {
    question: "What is the ideal serving temperature for different beer styles?",
    answer: "It depends on the style. Lagers and Pilsners are best served between 3°C and 7°C. IPAs and Pale Ales shine at 7°C to 10°C. Stouts, Porters and complex ales should be served warmer, around 10°C to 13°C, so their aromatic compounds can fully open up.",
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: "Select the container",
    text: "Choose between an aluminum can or a glass bottle. The material drastically affects the heat transfer speed.",
  },
  {
    name: "Choose the cooling method",
    text: "Indicate whether you're using a conventional fridge (4°C) or a freezer (-18°C) for an ultra-fast process.",
  },
  {
    name: "Adjust temperatures",
    text: "Define the current temperature of the drink (room temp) and your desired target cold temperature.",
  },
];

const bibliography: BeerCoolerLocaleContent['bibliography'] = [
  {
    name: "Newton's Law of Cooling - Physics Hypertextbook",
    url: "https://physics.info/newton-cooling/",
  },
  {
    name: "The Science of Better Beer - American Chemical Society",
    url: "https://www.acs.org/content/acs/en/pressroom/reactions/videos/2016/the-science-of-better-beer.html",
  },
];

const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'The Science of Cold and Thermodynamics',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Why does that can cool down before the bottle? Is it magic? No, it is <strong>Newton\'s Law of Cooling</strong> in action. This tool mathematically calculates the exact moment your drink reaches thermodynamic perfection. Every material, every environment, every starting temperature feeds into the same differential equation that physicists and engineers use to model heat transfer in industrial systems.'
  },
  {
    type: 'diagnostic',
    title: 'The Master Formula',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Physics',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). This differential equation describes how an object\'s temperature changes proportionally to the difference between its temperature and that of the environment. The constant k depends on the material and geometry of the container, which is why a can cools faster than a bottle of the same volume.'
  },
  {
    type: 'title',
    text: 'Material Wars: Aluminum vs. Glass',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>Aluminum</strong> has a thermal conductivity of ~205 W/(m·K), while <strong>glass</strong> barely reaches 0.8 W/(m·K). Metal transfers cold violently fast, making it the ideal container for emergencies. However, glass provides better insulation once cold, maintaining the ideal temperature for longer during consumption. This trade-off is why different beer cultures have evolved preferences for each material.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Pilsner & Lager', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA & Pale Ale', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: 'Stout & Porter', value: '10°C - 13°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'The Freezer Danger Zone',
    icon: 'mdi:snowflake-alert',
    html: 'Due to alcohol and dissolved sugars, beer freezes below 0°C — a standard 5% lager freezes around -3°C. As water crystallizes it expands, while CO2 pressure rises simultaneously. The result is a container that can rupture violently. Never leave a beer in the freezer for more than 45 minutes without setting a timer.'
  },
  {
    type: 'proscons',
    title: 'Emergency Chilling Hacks',
    items: [
      { pro: 'Wet Paper Trick: Wrap the can in wet paper towel, then freeze — evaporation accelerates cooling.', con: '' },
      { pro: 'Arctic Brine: Fill a bucket with water, ice and 2 tablespoons of salt to reach -5°C brine.', con: '' },
      { pro: 'Spinning Method: Rotate the bottle in iced water to force convection and shorten cooling time.', con: '' },
      { pro: '', con: 'Do not place a can directly on a freezer shelf without a timer — ruptured cans are messy and dangerous.' }
    ]
  },
  {
    type: 'tip',
    title: 'Pro Tip: Pre-chill the Glass',
    html: 'The glass you serve beer into has a significant thermal mass. A warm glass can raise the temperature of a perfectly cold beer by 2-3°C instantly on contact. Place your serving glass in the freezer for 5 minutes before pouring, or rinse it with cold water. This simple step extends the window where your beer tastes exactly as intended.'
  },
  {
    type: 'title',
    text: 'Understanding the Cooling Constant',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'The cooling constant k in Newton\'s equation is not a fixed universal value — it is an empirical property of each specific container and medium. A thin aluminum can in ice water has a dramatically different k than a thick glass bottle in still refrigerator air. Our calculator uses measured values calibrated against real-world experiments for each container type, giving you predictions accurate to within a few minutes for typical household cooling scenarios.'
  }
];

const schemas: BeerCoolerLocaleContent['schemas'] = [
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

export const content: BeerCoolerLocaleContent = {
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
