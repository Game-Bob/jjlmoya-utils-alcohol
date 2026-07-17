import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'bier-ijsrekenmachine-feest';
const title = 'Bier ijsrekenmachine: Hoeveelheid per Persoon voor Bruiloften en Verjaardagen';
const description = 'Gratis tool om te berekenen hoeveel bier en ijs je nodig hebt op basis van gasten, duur en temperatuur. Perfect voor bruiloften, verjaardagen en buitenevenementen.';

const ui: PartyKegUI = {
  calcStockTitle: 'Voorraadcalculator',
  beerIceSub: 'Bier & Ijs voor Evenementen',
  guestsLabel: 'Gasten',
  durationLabel: 'Duur',
  hoursUnit: 'Uren',
  intensityLabel: 'Intensiteit',
  chillLabel: 'Chill',
  standardLabel: 'Standard',
  partyLabel: 'Party',
  tempLabel: 'Temperatuur',
  estimatedVolLabel: 'Geschatte Hoeveelheid',
  kegsLabel: 'Vaten',
  iceRequiredLabel: 'Ijs Nodig',
  bagsLabel: 'Zakken',
  visualizationTitle: 'Voorraadvisualisatie',
  optimalMsg: 'Optimale Voorwaarden',
  highMeltMsg: 'Hoog Smeltingspercentage Gedetecteerd',
  highEfficiencyMsg: 'Koud / Hoge Efficiëntie'
};

const faqTitle = 'Veelgestelde Vragen';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "Hoeveel bier drinkt een persoon in 4 uur?",
    answer: "Reken gemiddeld op 5 bieren per persoon voor een 4-uurs evenement. Dit gaat uit van 2 drankjes in het eerste uur en 1 voor elk resterend uur.",
  },
  {
    question: "Hoeveel ijs heb ik nodig voor 100 bieren?",
    answer: "Je hebt ongeveer 15-20 kilogram ijs nodig (7-10 zakken). De praktische regel is 0,75 kg ijs per liter drank onder normale omstandigheden. In de zomer of buiten boven 25°C moet je tot 1 kg per liter gaan: omgevingswarmte versnelt de smelt en je loopt ijs veel sneller uit dan verwacht.",
  },
  {
    question: "Wat is het verschil tussen een standaardvat en een festvat?",
    answer: "Een standaard handelsvat bevat 50 liter, wat ongeveer 200 porties (250 ml elk) oplevert. Een festvat (minivat) bevat meestal 5 liter - ongeveer 20 porties. Deze maten kennen helpt je om de liter-uitkomst van de calculator om te zetten naar het aantal containers dat je moet kopen.",
  },
  {
    question: "Waarom heb ik zoveel ijs nodig als het bier al koud is?",
    answer: "Omdat afkoelen en onderhouden twee aparte processen zijn. Een blikje van 25°C naar 4°C brengen verbruikt de latente smeltingswarmte van ijs: ongeveer 334 kJ/kg. Eenmaal koud, blijft ijs werken om omgevingswarmte tegen te gaan. Op een zomerdag van 35°C kunnen warmteoverdrachten naar de koelbox ongeveer 1 kg ijs per liter drank elke 2-3 uur smelten. Daarom halveert je drank voorkelen voor het feest je totale ijsverbruik.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "Schat het aantal gasten",
    text: "Bepaal hoeveel mensen zullen deelnemen. Onze calculator past de hoeveelheden aan op basis van statistische verbruiksgemiddelden.",
  },
  {
    name: "Bepaal duur en intensiteit",
    text: "Geef aan hoeveel uur het evenement duurt en wat de 'flow' van het feest is (chill, standaard of intens).",
  },
  {
    name: "Pas je aan omgevingstemperatuur aan",
    text: "Buitentemperatuur is cruciaal voor de ijsberekening. Hoe warmer, hoe hoger de smeltingssnelheid die we moeten compenseren.",
  },
];


const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Hoeveel Bier en Ijs heb ik Nodig voor Mijn Feest?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'De miljoenenvraag bij het organiseren van een evenement: <strong>Hoeveel liter bier moet ik kopen?</strong> Te weinig is een ramp, maar overkopen is onnodige uitgave. Deze tool helpt je de exacte hoeveelheid alcohol te berekenen en, het allerbelangrijkste, <strong>hoeveel ijszakken</strong> je nodig hebt om alles koud te houden. Professionele cateraars en evenementenplanners gebruiken statistische verbruiksmodellen - en nu kun je dat ook, gratis.'
  },
  {
    type: 'title',
    text: 'De Verbruiksformule Per Persoon',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Om de benodigde alcohol in te schatten, gebruiken professionele cateraars een formule gebaseerd op "Verbruikssnelheid per Uur". Het is geen exacte wetenschap, maar statistieken tonen aan dat op een standaardfeest ongeveer 1,5 eenheden per uur per persoon wordt geconsumeerd. Factoren als omgevingstemperatuur, voedselaanbod en de sociale energie van het evenement veranderen dit basisgetal allemaal.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Chill-verbruik', value: '1 drankje/uur', icon: 'mdi:tea-outline' },
      { label: 'Standaardfeest', value: '1,5 drankjes/uur', icon: 'mdi:glass-mug-variant' },
      { label: 'Bruiloft / Festival', value: '2,5+ drankjes/uur', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: 'De Fysica van Ijs',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Thermodynamica',
    html: 'IJsberekening is waar de meeste gastheren falen. Ijs vervult twee functies: Afkoelen (bier van 25°C naar 4°C) en Onderhoud (tegen omgevingswarmte vechten). Bij temperaturen boven 30°C verdubbelt de smeltingssnelheid. Een volle ijszak in direct zonlicht kan binnen 20 minuten weg zijn, waardoor je drank warm wordt voordat het feest op zijn hoogtepunt is.'
  },
  {
    type: 'tip',
    title: 'Professioneel Advies om Ijs te Besparen',
    html: 'Houd vaten en blikjes in de schaduw voordat je ijs toevoegt. Als drank in de zon warm is, sterft de eerste 50% van je ijszak in 10 minuten simpel door latente warmte uit te wisselen. Begin met voorafgekoelde dranken om drastisch het ijs dat je echt moet kopen te verminderen.'
  },
  {
    type: 'title',
    text: 'Referentiegegevens voor Logistiek',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Een standaard 50L-vat levert ongeveer 200 porties op. Een typische ijszak weegt 2 kg. Met deze getallen kun je het vervoer en de opslag voor je evenement plannen zonder laatste moment verrassingen. Houdt rekening met ijssmelt tijdens transport - een 30-minutenrit in de zomer kan je een hele zak kosten voordat het feest begint.'
  },
  {
    type: 'summary',
    title: 'Voor wie is deze tool?',
    items: [
      'Privéfeestgastheren: Stop met gokken en koop zelfverzekerd precies wat je nodig hebt voor je volgende vieringen.',
      'Evenementenplanners: Gebruik nauwkeurige verbruiksmodellen om klanten te quoten en barbevoorraad professioneel in te plannen.',
      'Venuebeheerders: Standaardiseer voorraadbereking over terugkerende evenementen met verschillende gastenantal.'
    ]
  },
  {
    type: 'paragraph',
    html: 'Een vaak over het hoofd gezien variabele is <strong>gastenuitvalpercentage</strong>. Bij de meeste feesten vertrekken 10-15% van de gasten eerder en 10% drinkt misschien helemaal niet. De calculator past een voorzichtig buffer toe, zodat je nooit tekortschiet, maar ook niet met enorme overschotten zit. Begrijpen van deze aanpassingen helpt je de schatting voor je specifieke groep en context bij te stellen. Rond altijd naar boven af bij aankoop, omdat geopende vaten normaal niet kunnen worden geretourneerd. Een klein overschot is altijd beter dan halverwege het feest zonder drank zitten.'
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
  bibliography,
  howTo,
  schemas,
};
