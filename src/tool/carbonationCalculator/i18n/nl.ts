import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'bier-carbonatatie-calculator';
const title = 'Bier Carbonatatie & Priming Calculator';
const description = 'Bereken de exacte grammen Dextrose, Tafelsuiker of DME (Droge Moutkextract) voor het bottelen van je zelfgebrouwen bier. Voer je volume, gistingstemperatuur en stijl in voor perfectionele priming.';

const ui: CarbonationUI = {
  parametersTitle: 'Parameters',
  metricBtn: 'Metrisch',
  imperialBtn: 'Imperial',
  volumeLabel: 'Biervolume',
  maxTempLabel: 'Maximale Temperatuur',
  litersUnit: 'Liters',
  celsiusUnit: '°C',
  gallonsUnit: 'Gallons',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'Gewenste Carbonatatie',
  volUnit: 'CO2 Vol',
  resultsTitle: 'Priming Resultaten',
  tableSugarLabel: 'Tafelsuiker',
  cornSugarLabel: 'Maïssuiker (Dextrose)',
  dmeLabel: 'Droge Moutkextract (DME)',
  safetyTitle: 'EXPLOSIEGEVAAR!',
  lowCarbonation: 'LAGE CARBONATATIE',
  optimalCarbonation: 'OPTIMALE CARBONATATIE',
  highEffervescence: 'HOGE BRUISING',
  bubblingVisualizationLabel: 'Geschatte bellenvisualisatie'
};

const faqTitle = 'Veelgestelde Vragen';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "Waarom is temperatuur belangrijk voor carbonatatie?",
    answer: "Het resterende CO2 in je bier hangt af van de hoogste temperatuur bereikt na gisting: koude vloeistof houdt meer opgelost gas vast dan warme vloeistof. Als je een temperatuur lager dan het actueel invoert, gaat de calculator uit van meer restend CO2 dan werkelijk aanwezig en geeft je minder suiker dan nodig. Als je het te hoog invoert gebeurt het tegenovergestelde - je voegt meer suiker toe dan nodig en duurt je partij de explosiegevaarzone in, waar overdruk flessen doet barsten of dopsels gewelddadig afblazen.",
  },
  {
    question: "Welke suiker is het beste voor priming?",
    answer: "Dextrose (maïssuiker) wordt de voorkeur gegeven omdat het neutraal is en snel oplost. Tafelsuiker werkt prima maar vereist ongeveer 10% minder gewicht.",
  },
  {
    question: "Wat gebeurt er als ik te veel primingsuiker toevoeg?",
    answer: "Over-priming genereert excessieve CO2-druk in de fles. Standaard glasflessen bezwijken bij ongeveer 3,5-4,0 volumes CO2. Voorbij dit punt kan de fles barsten of de dop gewelddadig afblazen. Dit is waarom precisie van belang is - zelfs 5 extra gram per liter kan een partij in de gevarenuone duwen.",
  },
  {
    question: "Hoe lang duurt het voor bier koolzuurhoudend wordt na het bottelen?",
    answer: "Tussen 2 en 3 weken bij kamertemperatuur (18-22°C) is het typische bereik voor gist om de toegevoegde suiker volledig te fermenteren en CO2 in de vloeistof te integreren. Een fles openen voordat het proces volledig is geeft altijd een misleidend resultaat: het bier lijkt ondergekarbonateerd, hoewel carbonatatie nog steeds plaats vindt. Met DME kan het proces iets langzamer gaan vanwege de complexiteit van zijn gistbare suikers.",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "Meet het werkelijke volume",
    text: "Geef aan hoeveel liters (of gallons) bier je gereed hebt voor bottelen nadat de gisting compleet is.",
  },
  {
    name: "Definieer gistingstemperatuur",
    text: "Voer de hoogste temperatuur in die het bier bereikt heeft tijdens of na actieve gisting.",
  },
  {
    name: "Kies stijl of CO2-volume",
    text: "Selecteer het gewenste carbonatatieniveau. Stijlen variëren van 1,5 (Stouts) tot 4,5 (Tarwebiertjes).",
  },
];


const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ultieme Gids voor Carbonatatie en Priming',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Beheers de kunst van priming en transformeer je zelfgebrouwen bier van een plat experiment naar een professionele bruisende ervaring. Priming houdt in dat je een nauwkeurige hoeveelheid suiker toevoegt zodat de achtergebleven gist in de fles natuurlijke CO2 produceert tijdens een secundaire gisting. Te weinig suiker geeft plat bier; te veel creëert gevaarlijke druk die flessen breekt. Het verschil tussen de twee is enkele grammen - daarom bestaat deze calculator.'
  },
  {
    type: 'proscons',
    title: 'Kritieke Succesfactoren',
    items: [
      { pro: 'Temperatuur: Restend CO2 hangt af van de temperatuurpiek na gisting.', con: '' },
      { pro: 'Nauwkeurigheid: 5 extra gram per liter kan het verschil zijn tussen perfecte carbonatatie en een geiser.', con: '' },
      { pro: '', con: 'Oxidatie: Vermijd spatten van vloeistof bij overdracht om primingsuiker te mengen.' }
    ]
  },
  {
    type: 'title',
    text: 'CO2-volumes naar Bierstijl',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'British Stouts', value: '1,5 - 2,0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2,2 - 2,6 Vol', icon: 'mdi:hops' },
      { label: 'German Wheat', value: '3,3 - 4,5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Welke Suiker Zou Je Moeten Kiezen?',
    icon: 'mdi:corn',
    html: '<strong>Dextrose</strong> is neutraal en professioneel - de industriestandaard. <strong>Tafelsuiker</strong> is economisch en effectief (gebruik 10% minder gewicht dan dextrose). <strong>DME (Droge Moutkextract)</strong> is de keuze van de puristen maar moeilijker nauwkeurig in te schatten omdat de gisbaarheid per merk en maltsamenstelling varieert.'
  },
  {
    type: 'diagnostic',
    title: 'Veiligheidswaarschuwing',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Gevaar',
    html: 'Standaard glasflessen bezwijken bij 3,5-4,0 volumes CO2. Probeer niet Belgische of tarwebierstijlen in dun glas te carbonateren. Gebruik altijd flessen die voor bruisende dranken zijn geclassificeerd en hergebruik nooit commerciële flessen die microscopische structurele schade door vorig gebruik kunnen hebben.'
  },
  {
    type: 'tip',
    title: 'Pro Tip: Los Suiker Correct Op',
    html: 'Kook je primingsuikeroplossing (suiker opgelost in ongeveer 250ml water per 20L partij) altijd 10 minuten voordat je het aan het bier toevoegt. Koken ontsmet de oplossing en zorgt ervoor dat de suiker volledig is opgelost en gelijkmatig over de hele partij is verdeeld, waarbij hete plekken die onregelmatige carbonatatie tussen flessen veroorzaken, worden voorkomen.'
  },
  {
    type: 'summary',
    title: 'Voor Wie is Deze Tool?',
    items: [
      'Zelfbrouwers: Haal de exacte primingsuikerberekening voor elke partijgrootte, stijl en gistingstemperatuur.',
      'Ambachtbierfanaten: Begrijp de wetenschap erachter waarom commerciële biertjes verschillende carbonatatieniveaus hebben.',
      'Professionele Brouwers: Controleer handberekeningen voordat je grote commerciële partijen bottelt.'
    ]
  },
  {
    type: 'title',
    text: 'Wetenschap van Carbonatatie: Henry\'s Wet',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Op zijn kern wordt carbonatatie beheerst door <strong>Henry\'s Wet</strong>: de hoeveelheid gas opgelost in een vloeistof is evenredig aan de partiële druk van dat gas boven de vloeistof. Wanneer je een fles primer en verzegelt, verbruikt gist de suiker en produceert CO2 in een verzegelde omgeving. Naarmate de druk stijgt, wordt het gas terug in oplossing gedwongen. De temperatuur waarop dit evenwicht optreedt, bepaalt het uiteindelijke carbonatatieniveau - daarom is gistingstemperatuur de meest kritieke variabele in deze calculator.'
  },
  {
    type: 'paragraph',
    html: 'Het restende CO2 in je bier voor priming is niet nul. Elk bier bevat opgelost CO2 van het gistingsproces, en de hoeveelheid die behouden blijft hangt af van de hoogste temperatuur die het bier bereikt. Een bier gegist op 22°C bevat aanzienlijk minder restend CO2 dan één gegist op 16°C, hoewel beide nu afgekoeld zijn. Het niet in rekening brengen van dit residu leidt tot systematische over-carbonatatie - een van de meest voorkomende fouten onder beginnende zelfbrouwers.'
  }
];

const schemas: CarbonationLocaleContent['schemas'] = [
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

export const content: CarbonationLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faqTitle,
  faq,
  bibliography,
  howTo,
  schemas,
};
