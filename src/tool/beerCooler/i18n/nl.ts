import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'beer-cooler';
const title = 'Bierkoelingscalculator met de Wet van Newton';
const description = 'Bereken met echte thermodynamica — Wet van Newton voor afkoeling — precies hoe lang je bier nodig heeft om de perfecte serveertemperatuur in de koelkast of vriezer te bereiken.';

const ui: BeerCoolerUI = {
  step1Title: 'Wat koel je af?',
  canLabel: 'Blikje',
  aluminumLabel: 'Aluminium',
  bottleLabel: 'Fles',
  glassLabel: 'Glas',
  step2Title: 'Waar zet je het neer?',
  fridgeLabel: 'Koelkast',
  freezerLabel: 'Vriezer',
  step3Title: 'Temperaturen fijnstellen',
  initialTempLabel: 'Begintemperatuur',
  targetTempLabel: 'Doeltemperatuur',
  glacialLabel: 'Ijskoud',
  perfectLabel: 'Perfect',
  bodegaLabel: 'Bodega',
  readyTitle: 'Klaar',
  readyDescription: 'Selecteer container en locatie om te berekenen.',
  estimatedTimeLabel: 'Geschatte tijd',
  methodLabel: 'Methode',
  containerLabel: 'Container',
  alreadyColdLabel: 'Al koud!',
  neverColdLabel: 'Wordt nooit koud'
};

const faqTitle = 'Veelgestelde Vragen';
const bibliographyTitle = 'Bibliografie & Bronnen';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: 'Hoe berekent deze tool de afkoelingstijd?',
    answer: 'Het past de Wet van Newton voor afkoeling toe: T(t) = T_env + (T₀ - T_env) × e^(-kt). De constante k varieert afhankelijk van het materiaal van de container en het koelmiddel. Een aluminium blikje in een koelkast heeft een heel ander k dan een glazen fles in een vriezer. De waarden die hier worden gebruikt, zijn gekalibreerd tegen echte experimenten voor elke combinatie.',
  },
  {
    question: 'Werkt de truc met natte papieren handdoek en zout echt?',
    answer: 'Ja, en zeer opvallend. Het omwikkelen van de container met een vochtige papieren handdoek met zout versnelt de afkoeling om twee redenen: waterverdamping verwijdert extra warmte (verdampingskoeling), en zout verlaagt het vriespunt van water, waardoor het vochtige contact langer actief blijft. Je kunt in de eerste minuten een extra afname van 2–4°C behalen in vergelijking met een droog blikje in de vriezer.',
  },
  {
    question: 'Wat is de ideale serveertemperatuur voor verschillende biersoorten?',
    answer: 'Dat hangt af van het type. Lagers en Pilsners worden het beste geserveerd tussen 3°C en 7°C. IPA\'s en Pale Ales glimmen op 7°C tot 10°C. Stouts, Porters en complexe ales moeten warmer worden geserveerd, tussen 12°C en 14°C, zodat hun geurstoffen — koffie, chocolade, noten — zich volledig kunnen uitten.',
  },
  {
    question: 'Kan mijn bier ontploffen als ik het te lang in de vriezer laat?',
    answer: 'Ja. Alcohol en opgeloste suikers verlagen het vriespunt van bier onder dat van zuiver water: een standaard 5% lager bevriest rond -3°C. Als water kristalliseert, neemt het volume toe en verhoogt opgelost CO2 de interne druk totdat de container bezwijkt. Meer dan 60 minuten in de vriezer — vooral glazen flessen — is echt gevaarlijk. Gebruik deze calculator om het te voorkomen.',
  },
  {
    question: 'Wordt bier "geschokt" als het te snel wordt afgekoeld?',
    answer: 'Nee. De mythe dat bier door "hitteschok" wordt bedorven, is onwaar. Wat het echt kan beïnvloeden is herhaald invriezen en ontdooien — wat eiwitten breekt en de vloeistof troebel maakt — of rechtstreekse UV-lichtblootstelling. Snelle afkoeling in de vriezer of ijswater schaadt de smaak niet.',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: 'Selecteer de container',
    text: 'Kies tussen een aluminium blikje of een glazen fles. Het materiaal beïnvloedt de warmteoverdrachtssnelheid drastisch.',
  },
  {
    name: 'Kies de afkoelingsmethode',
    text: 'Geef aan of je een conventionele koelkast (4°C) of een vriezer (-18°C) voor ultrasnel proces gebruikt.',
  },
  {
    name: 'Pas temperaturen aan',
    text: 'Definieer de huidige temperatuur van het drankje (kamertemperatuur) en je gewenste doelkoudetemperatuur.',
  },
];

const bibliography: BeerCoolerLocaleContent['bibliography'] = [
  {
    name: 'Wet van Newton voor afkoeling - Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling',
  },
  {
    name: 'Geavanceerde chemie van bier en brouwen - American Chemical Society',
    url: 'https://www.acs.org/acs-webinars/library/advanced-chemistry-of-beer-and-brewing.html',
  },
];

const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'De Wetenschap van Kou en Thermodynamica',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Waarom koelt het blikje af voor de fles? Is het magie? Nee, het is de <strong>Wet van Newton voor afkoeling</strong> in actie. Deze tool berekent wiskundig het exacte moment waarop je drank thermodynamische perfectie bereikt. Elk materiaal, elke omgeving, elke begintemperatuur voert zich in dezelfde differentiaalvergelijking in die natuurkundigen en ingenieurs gebruiken om warmteoverdracht in industriële systemen te modelleren.'
  },
  {
    type: 'diagnostic',
    title: 'De Hoofdformule',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Natuurkunde',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). Deze differentiaalvergelijking beschrijft hoe de temperatuur van een object evenredig verandert met het verschil tussen zijn temperatuur en die van de omgeving. De constante k hangt af van het materiaal en de geometrie van de container, daarom koelt een blikje sneller af dan een fles met hetzelfde volume.'
  },
  {
    type: 'title',
    text: 'Materialenoorlog: Aluminium tegen Glas',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>Aluminium</strong> heeft een thermische geleiding van ~205 W/(m·K), terwijl <strong>glas</strong> nauwelijks 0,8 W/(m·K) bereikt. Metaal brengt kou razendsnel over, waardoor het de ideale container voor noodgevallen is. Glas biedt echter betere isolatie eenmaal koud, waardoor de ideale temperatuur langer behouden blijft tijdens consumptie. Dit compromis verklaart waarom verschillende bierculturen verschillende voorkeur voor elk materiaal hebben ontwikkeld.'
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
    title: 'De Vriezergevarzone',
    icon: 'mdi:snowflake-alert',
    html: 'Door alcohol en opgeloste suiker bevriest bier onder 0°C — een standaard 5% lager bevriest rond -3°C. Als water kristalliseert, neemt het volume toe, terwijl CO2-druk tegelijkertijd stijgt. Het resultaat is een container die gewelddadig kan barsten. Laat bier nooit langer dan 45 minuten in de vriezer zonder een timer in te stellen.'
  },
  {
    type: 'proscons',
    title: 'Noodafkoelingstrucjes',
    items: [
      { pro: 'Natte handoektruuk: Wikkel het blikje in natte papieren handdoek in, vrieg dan in — verdamping versnelt afkoeling.', con: '' },
      { pro: 'Arctische zoutwaterbak: Vul een emmer met water, ijs en 2 eetlepels zout om -5°C zoutwaterbak te bereiken.', con: '' },
      { pro: 'Rotatiemethode: Draai de fles in ijswater rond om convectie af te dwingen en afkoelingstijd te verkorten.', con: '' },
      { pro: '', con: 'Plaats geen blikje direct op een vrizerplank zonder timer — gebarsten blikjes zijn rommelig en gevaarlijk.' }
    ]
  },
  {
    type: 'tip',
    title: 'Pro Tip: Voorkoel het Glas',
    html: 'Het glas waarin je bier schenkt, heeft aanzienlijke thermische massa. Een warm glas kan de temperatuur van perfect koud bier bij contact onmiddellijk met 2-3°C verhogen. Zet je serveergas 5 minuten in de vriezer of spoel met koud water. Deze eenvoudige stap verlengt het moment waarop je bier precies naar bedoeling smaakt.'
  },
  {
    type: 'title',
    text: 'De Afkoelingscontante Begrijpen',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'De afkoelingscontante k in de vergelijking van Newton is geen vaste universele waarde — het is een empirische eigenschap van elke specifieke container en medium. Een dun aluminium blikje in ijswater heeft een dramatisch ander k dan een dik glas in stille koelkastlucht. Onze calculator gebruikt gemeten waarden die tegen echte experimenten voor elk containertype zijn gekalibreerd, wat je voorspellingen geeft die voor typische huishoudelijke afkoelingscenario\'s nauwkeurig binnen enkele minuten zijn.'
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
