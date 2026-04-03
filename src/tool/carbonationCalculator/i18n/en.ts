import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'beer-carbonation-calculator';
const title = 'Beer Carbonation & Priming Calculator';
const description = 'Calculate the exact amount of sugar for bottling your homebrew beer based on volume, temperature and style.';

const ui: CarbonationUI = {
  parametersTitle: 'Parameters',
  metricBtn: 'Metric',
  imperialBtn: 'Imperial',
  volumeLabel: 'Beer Volume',
  maxTempLabel: 'Maximum Temperature',
  litersUnit: 'Liters',
  celsiusUnit: '°C',
  gallonsUnit: 'Gallons',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'Desired Carbonation',
  volUnit: 'CO2 Vol',
  resultsTitle: 'Priming Results',
  tableSugarLabel: 'Table Sugar',
  cornSugarLabel: 'Corn Sugar (Dextrose)',
  dmeLabel: 'Dry Malt Extract (DME)',
  safetyTitle: 'EXPLOSION DANGER!',
  lowCarbonation: 'LOW CARBONATION',
  optimalCarbonation: 'OPTIMAL CARBONATION',
  highEffervescence: 'HIGH EFFERVESCENCE',
  bubblingVisualizationLabel: 'Approximate bubble visualization'
};

const faqTitle = 'Frequently Asked Questions';
const bibliographyTitle = 'Bibliography & Sources';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "Why does temperature matter for carbonation?",
    answer: "The residual CO2 in your beer depends on the highest temperature reached after fermentation. Cold liquid holds more dissolved gas than warm liquid.",
  },
  {
    question: "What sugar is best for priming?",
    answer: "Dextrose (corn sugar) is preferred because it is neutral and dissolves quickly. Table sugar works well but requires about 10% less weight.",
  },
  {
    question: "What happens if I add too much priming sugar?",
    answer: "Over-priming generates excess CO2 pressure inside the bottle. Standard glass bottles fail at approximately 3.5-4.0 volumes of CO2. Beyond this point, the bottle can rupture or the cap can blow off violently. This is why precision matters — even 5 extra grams per liter can push a batch into the danger zone.",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "Measure real volume",
    text: "Indicate how many liters (or gallons) of beer you have ready for bottling after fermentation is complete.",
  },
  {
    name: "Define fermentation temperature",
    text: "Enter the highest temperature the beer reached during or after active fermentation.",
  },
  {
    name: "Choose style or CO2 volume",
    text: "Select the desired carbonation level. Styles vary from 1.5 (Stouts) to 4.5 (Wheat Beers).",
  },
];

const bibliography: CarbonationLocaleContent['bibliography'] = [
  {
    name: "How to Brew: Carbonation Tables - John Palmer",
    url: "http://howtobrew.com/book/section-1/priming-and-bottling/priming-solutions",
  },
  {
    name: "BJCP Style Guidelines: Carbonation Levels",
    url: "https://www.bjcp.org/stylecenter.php",
  },
];

const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ultimate Guide to Carbonation and Priming',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Master the art of priming and transform your homebrew from a flat experiment into a professional effervescent experience. Priming involves adding a precise amount of sugar so residual yeast in the bottle generates natural CO2 during a secondary fermentation. Too little sugar yields flat beer; too much creates dangerous pressure that can shatter bottles. The difference between the two is a few grams — which is why this calculator exists.'
  },
  {
    type: 'proscons',
    title: 'Critical Success Factors',
    items: [
      { pro: 'Temperature: Residual CO2 depends on the post-fermentation temperature peak.', con: '' },
      { pro: 'Precision: 5 extra grams per liter can be the difference between perfect carbonation and a geyser.', con: '' },
      { pro: '', con: 'Oxidation: Avoid splashing the liquid when transferring to mix the priming sugar.' }
    ]
  },
  {
    type: 'title',
    text: 'CO2 Volumes by Beer Style',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'British Stouts', value: '1.5 - 2.0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2.2 - 2.6 Vol', icon: 'mdi:hops' },
      { label: 'German Wheat', value: '3.3 - 4.5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Which Sugar Should You Choose?',
    icon: 'mdi:corn',
    html: '<strong>Dextrose</strong> is neutral and professional — the industry standard. <strong>Table Sugar</strong> is economical and effective (use 10% less by weight than dextrose). <strong>DME (Dry Malt Extract)</strong> is the purist\'s choice but harder to predict accurately because its fermentability varies by brand and malt composition.'
  },
  {
    type: 'diagnostic',
    title: 'Safety Warning',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Danger',
    html: 'Standard glass bottles fail at 3.5-4.0 volumes of CO2. Do not attempt to carbonate Belgian-style or wheat beers in thin glass. Always use bottles rated for sparkling drinks, and never use recycled commercial bottles that may have microscopic structural damage from previous use.'
  },
  {
    type: 'tip',
    title: 'Pro Tip: Dissolve the Sugar Properly',
    html: 'Always boil your priming sugar solution (sugar dissolved in approximately 250ml of water per 20L batch) for 10 minutes before adding it to the beer. Boiling sanitizes the solution and ensures the sugar is fully dissolved and evenly distributed throughout the batch, preventing hot spots that cause uneven carbonation between bottles.'
  },
  {
    type: 'summary',
    title: 'Who is this tool for?',
    items: [
      'Homebrewers: Get the exact priming sugar calculation for any batch size, style and fermentation temperature.',
      'Craft Beer Enthusiasts: Understand the science behind why commercial beers have different carbonation levels.',
      'Professional Brewers: Cross-check hand calculations before bottling large commercial batches.'
    ]
  },
  {
    type: 'title',
    text: 'Carbonation Science: Henry\'s Law',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'At its core, carbonation is governed by <strong>Henry\'s Law</strong>: the amount of gas dissolved in a liquid is proportional to the partial pressure of that gas above the liquid. When you prime a bottle and seal it, the yeast consumes the sugar and produces CO2 in a sealed environment. As pressure builds, the gas is forced back into solution. The temperature at which this equilibrium occurs determines the final carbonation level — which is why the fermentation temperature is the most critical variable in this calculator.'
  },
  {
    type: 'paragraph',
    html: 'The residual CO2 in your beer before priming is not zero. Every beer holds dissolved CO2 from the fermentation process, and the amount retained depends on the highest temperature the beer reached. A beer fermented at 22°C holds significantly less residual CO2 than one that fermented at 16°C, even if both are now chilled. Failing to account for this residual leads to systematic over-carbonation — one of the most common mistakes among beginning homebrewers.'
  }
];

const schemas: CarbonationLocaleContent['schemas'] = [
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
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
