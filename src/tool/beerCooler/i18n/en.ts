import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'beer-cooler';
const title = "Beer Cooling Calculator with Newton's Law";
const description = "Calculate with real thermodynamics — Newton's Law of Cooling — exactly how long your beer needs to reach the perfect serving temperature in the fridge or freezer.";

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
    question: "How does this tool calculate cooling time?",
    answer: "It applies Newton's Law of Cooling: T(t) = T_env + (T₀ - T_env) × e^(-kt). The constant k varies by container material and cooling medium. An aluminum can in a fridge has a very different k than a glass bottle in a freezer. The values used here are calibrated against real-world experiments for each combination.",
  },
  {
    question: "Does the wet paper towel trick with salt actually work?",
    answer: "Yes, and quite noticeably. Wrapping the container in a damp paper towel with salt speeds cooling for two reasons: water evaporation draws out additional heat (evaporative cooling), and salt lowers the water's freezing point, keeping the moist contact active longer. You can gain an extra 2–4°C drop in the first few minutes compared to placing a dry can in the freezer.",
  },
  {
    question: "What is the ideal serving temperature for different beer styles?",
    answer: "It depends on the style. Lagers and Pilsners are best served between 3°C and 7°C. IPAs and Pale Ales shine at 7°C to 10°C. Stouts, Porters and complex ales should be served warmer, between 12°C and 14°C, so their aromatic compounds — coffee, chocolate, nuts — can express themselves fully.",
  },
  {
    question: "Can my beer explode if I leave it in the freezer?",
    answer: "Yes. Alcohol and dissolved sugars lower beer's freezing point below that of pure water: a standard 5% lager freezes around -3°C. As the water crystallizes, the volume increases and dissolved CO2 raises internal pressure until the container gives way. More than 60 minutes in the freezer — especially glass bottles — is a real danger zone. Use this calculator to avoid it.",
  },
  {
    question: "Does beer 'burn' if cooled too quickly?",
    answer: "No. The 'heat shock' myth that ruins beer is false. What can genuinely affect it is repeated freezing and thawing — which breaks proteins and clouds the liquid — or direct UV light exposure. A quick chill in the freezer or ice water does not harm the flavour.",
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
    name: "Newton's Law of Cooling - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling",
  },
  {
    name: "Advanced Chemistry of Beer and Brewing - American Chemical Society",
    url: "https://www.acs.org/acs-webinars/library/advanced-chemistry-of-beer-and-brewing.html",
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
      { label: 'Stout & Porter', value: '12°C - 14°C', icon: 'mdi:beer' }
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
    title: 'Pro Tip: Prechill the Glass',
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
