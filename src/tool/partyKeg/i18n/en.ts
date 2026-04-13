import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'party-stock-calculator';
const title = 'Party Beer Calculator: Amount Per Person for Weddings & Birthdays';
const description = 'Free tool to calculate how much beer and ice you need based on guests, duration and temperature. Perfect for weddings, birthdays and outdoor events.';

const ui: PartyKegUI = {
  calcStockTitle: 'Stock Calculator',
  beerIceSub: 'Beer & Ice for Events',
  guestsLabel: 'Guests',
  durationLabel: 'Duration',
  hoursUnit: 'Hours',
  intensityLabel: 'Intensity',
  chillLabel: 'Chill',
  standardLabel: 'Standard',
  partyLabel: 'Party',
  tempLabel: 'Temperature',
  estimatedVolLabel: 'Estimated Volume',
  kegsLabel: 'Kegs',
  iceRequiredLabel: 'Ice Required',
  bagsLabel: 'Bags',
  visualizationTitle: 'Stock Visualization',
  optimalMsg: 'Optimal Conditions',
  highMeltMsg: 'High Melt Detected',
  highEfficiencyMsg: 'Cold / High Efficiency'
};

const faqTitle = 'Frequently Asked Questions';
const bibliographyTitle = 'Bibliography & Sources';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "How many beers does a person drink in 4 hours?",
    answer: "On average, calculate 5 beers per person for a 4-hour event. This assumes 2 drinks the first hour and 1 for each remaining hour.",
  },
  {
    question: "How much ice do I need for 100 beers?",
    answer: "You will need approximately 15-20 kilos of ice (7-10 bags). The practical rule is 0.75kg of ice per liter of drink under normal conditions. In summer or outdoors above 25°C, raise that to 1kg per liter: ambient heat accelerates melting and you will run out much sooner than expected.",
  },
  {
    question: "What is the difference between a standard keg and a party keg?",
    answer: "A standard commercial keg holds 50 liters, which yields approximately 200 servings (250ml each). A party keg (mini-keg) typically holds 5 liters — about 20 servings. Knowing these sizes helps you translate the calculator's liter output into the number of containers to purchase.",
  },
  {
    question: "Why do I need so much ice if the beers are already cold?",
    answer: "Because cooling and maintaining are two separate processes. Bringing a can from 25°C to 4°C consumes the latent heat of fusion of the ice: around 334 kJ/kg. Once cold, ice keeps working to offset ambient heat. On a summer day at 35°C, heat transfer into the cooler can melt 1kg of ice per liter of drink every 2-3 hours. That is why pre-chilling your drinks before the party cuts your total ice consumption in half.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "Estimate the number of guests",
    text: "Define how many people will attend. Our calculator adjusts the quantities based on statistical consumption averages.",
  },
  {
    name: "Define duration and intensity",
    text: "Indicate how many hours the event will last and the 'flow' of the party (chill, standard, or intense).",
  },
  {
    name: "Adjust for ambient temperature",
    text: "Outdoor temperature is key for ice calculation. The hotter it is, the higher the melt rate we must compensate for.",
  },
];

const bibliography: PartyKegLocaleContent['bibliography'] = [
  {
    name: "Event Planning: Alcohol & Bar Calculations - Spruce Eats",
    url: "https://www.thespruceeats.com/stock-your-bar-for-a-party-760394",
  },
  {
    name: "Thermodynamics of Ice Melting - Engineering Toolbox",
    url: "https://www.engineeringtoolbox.com/saturated-ice-steam-d_970.html",
  },
];

const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'How Much Beer and Ice do I need for my Party?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'The million-dollar question when organizing any event: <strong>How many liters of beer should I buy?</strong> Running short is a disaster, but overbuying is an unnecessary expense. This tool helps you calculate the exact amount of alcohol and, most importantly, <strong>how many bags of ice</strong> you need to keep it cold. Professional caterers and event planners use statistical consumption models — and now you can too, for free.'
  },
  {
    type: 'title',
    text: 'The Consumption Formula by Person',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'To estimate the alcohol needed, professional caterers use a formula based on the "Hourly Consumption Rate". It is not an exact science, but statistics show that at a standard party, approximately 1.5 units are consumed per hour per person. Factors like ambient temperature, food availability, and the social energy of the event all shift this baseline number.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Chill Consumption', value: '1 drink/hour', icon: 'mdi:tea-outline' },
      { label: 'Standard Party', value: '1.5 drinks/hour', icon: 'mdi:glass-mug-variant' },
      { label: 'Wedding / Festival', value: '2.5+ drinks/hour', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: 'The Physics of Ice',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Thermodynamics',
    html: 'Calculating ice is where most hosts fail. Ice serves two functions: Cooling (bringing beer from 25°C to 4°C) and Maintaining (fighting ambient heat). At temperatures above 30°C, the melt rate doubles. A full bag of ice in direct sun can be gone in under 20 minutes, leaving your beverages warm before the party peaks.'
  },
  {
    type: 'tip',
    title: 'Professional Tip to Save Ice',
    html: 'Keep kegs and cans in the shade before adding ice. If drinks are warm in the sun, the first 50% of your ice bag will die within 10 minutes simply exchanging latent heat. Start with pre-chilled beverages to dramatically reduce how much ice you actually need to buy.'
  },
  {
    type: 'title',
    text: 'Reference Data for Logistics',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'A standard 50L keg yields around 200 servings. A typical bag of ice weighs 2kg. Knowing these figures, you can plan the transport and storage needed for your event without last-minute surprises. Account for ice melt during transport — a 30-minute drive in summer can cost you one full bag before the party even starts.'
  },
  {
    type: 'summary',
    title: 'Who is this tool for?',
    items: [
      'Private Party Hosts: Stop guessing and confidently buy exactly what you need for your next celebration.',
      'Event Planners: Use accurate consumption models to quote clients and plan bar logistics professionally.',
      'Venue Managers: Standardize stock calculations across recurring events with different guest counts.'
    ]
  },
  {
    type: 'paragraph',
    html: 'One often-overlooked variable is <strong>guest dropout rate</strong>. In most parties, 10-15% of guests leave early and 10% may not drink at all. The calculator applies a conservative buffer so that you are never caught short, but also not left with an enormous surplus. Understanding these adjustments helps you fine-tune the estimate for your specific crowd and context. Always round up when purchasing, since returning opened kegs is generally not possible. A small surplus is always preferable to running dry mid-party.'
  }
];

const schemas: PartyKegLocaleContent['schemas'] = [
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

export const content: PartyKegLocaleContent = {
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
