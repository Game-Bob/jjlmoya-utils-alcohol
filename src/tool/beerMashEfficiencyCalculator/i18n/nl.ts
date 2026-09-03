import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'maisrendement-rekenmachine-bier';
const title = 'Maisrendement Rekenmachine voor Bier';
const description = 'Bereken het maisrendement percentage, de suikerextractie en de verwachte begindichtheid voor zelfgebrouwen bier.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Metrisch',
  stagePreboil: 'Wort voor koken',
  stagePostboil: 'Wort na koken',
  unitImperial: 'Imperiaal',
  labels: {
    grainWeight: 'Totaal moutgewicht',
    grainType: 'Mout potentieel preset',
    customPotential: 'Aangepast potentieel (SG)',
    wortVolume: 'Wort volume voor koken',
    measuredSg: 'Gemeten soortelijk gewicht (SG)',
    unitSystem: 'Eenheidssysteem',
    sampleTemp: 'Monstertemperatuur',
    calibTemp: 'Calibratietemperatuur',
    stageLabel: 'Brouwstadium',
    presets: 'Veelvoorkomende moutwaarden',
  },
  units: {
    weightKg: 'kg',
    weightLb: 'lb',
    volumeL: 'L',
    volumeGal: 'gal',
    sg: 'SG',
    brix: 'Brix',
    percent: '%',
    tempC: '°C',
    tempF: '°F',
  },
  grainPresets: {
    pilsner: 'Pilsner mout (1.037 / 37 PPG)',
    pale_ale: 'Pale Ale mout (1.038 / 38 PPG)',
    vienna: 'Weense mout (1.036 / 36 PPG)',
    munich: 'Münchner mout (1.035 / 35 PPG)',
    wheat: 'Tarwemout (1.038 / 38 PPG)',
    caramel_30: 'Karamel 30L (1.034 / 34 PPG)',
    caramel_60: 'Karamel 60L (1.034 / 34 PPG)',
    chocolate: 'Chocolademout (1.034 / 34 PPG)',
    custom: 'Eigen potentieel...',
  },
  results: {
    efficiencyTitle: 'Maisrendement',
    efficiencyBadge: 'Berekende status',
    correctedGravity: 'Temp-gecorrigeerde SG',
    measuredGravity: 'Gemeten dichtheid',
    expectedGravity75: 'SG bij 75% rendement',
    expectedGravity80: 'SG bij 80% rendement',
    expectedGravity85: 'SG bij 85% rendement',
    potentialPoints: 'Totale potentiele punten',
    extractedPoints: 'Gemeten extractpunten',
    wortBrix: 'Geschatte Brix',
  },
  statusMessages: {
    excellent: 'Uitstekende extractie (82%+)',
    good: 'Goed rendement (74% - 81%)',
    average: 'Gemiddeld rendement (65% - 73%)',
    poor: 'Lage extractie (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Extractie in de maispan',
    wortLevel: 'Wortpeil',
    sugarExtraction: 'Suikerextractie',
  },
};

const faq = [
  {
    question: 'Wat is het maisrendement bij bierbrouwen?',
    answer: 'Het maisrendement geeft het percentage suikers aan dat tijdens het maischen en spoelen uit de mout in het wort terechtkomt.',
  },
  {
    question: 'Wat is een goed maisrendement?',
    answer: 'Voor hobbybrouwers geldt een maisrendement tussen 70% en 80% als zeer goed.',
  },
  {
    question: 'Hoe wordt het maisrendement berekend?',
    answer: 'Door de gemeten dichtheidspunten in het opgevangen wort te vergelijken met de maximale theoretische waarde van de moutstorting.',
  },
  {
    question: 'Hoe verbeter je een laag maisrendement?',
    answer: 'Controleer de schrootfijnheid, bewaar een maisch-pH tussen 5.2 en 5.6 en zorg voor een gelijkmatige spoeling van het maisbed.',
  },
  {
    question: 'Wat is het verschil tussen maisrendement en brouwzaalrendement?',
    answer: 'Het maisrendement meet alleen de extractie in de ketel voor het koken. Het brouwzaalrendement neemt ook verliezen in de kookketel en het gistvat mee.',
  },
  {
    question: 'Welke invloed heeft de beslagdikte?',
    answer: 'Een dunnere maisch (3.5 tot 4.0 liter per kg) verhoogt de enzymmobiliteit en maakt het uitspoelen van suikers eenvoudiger.',
  }
];

const howTo = [
  {
    name: 'Kies het eenheidssysteem',
    text: 'Kies tussen metrisch of imperiaal.',
  },
  {
    name: 'Voer moutgewicht en potentieel in',
    text: 'Selecteer een moutsoort of voer een eigen waarde in.',
  },
  {
    name: 'Voer wortvolume en gemeten SG in',
    text: 'Vul het opgevangen volume voor koken en de hydrometerwaarde in.',
  },
  {
    name: 'Bekijk het rendement en de streefwaarden',
    text: 'Vergelijk de gemeten dichtheid met de doelen van 75%, 80% en 85%.',
  },
  {
    name: 'Pas het recept aan voor het volgende brouwsel',
    text: 'Gebruik het berekende rendement om toekomstige stortingen nauwkeurig te plannen.',
  }
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<BeerMashEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen over maisrendement',
  bibliographyTitle: 'Referenties en formules',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Het maisrendement begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het maisrendement meet hoe efficiënt zetmelen in vergistbare suikers worden omgezet en in het wort worden verzameld. Het is de basis voor betrouwbare receptformulering.',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Formule', 'Beschrijving'],
      rows: [
        ['Potentiele punten', 'Gewicht x PPG', 'Theoretisch maximum'],
        ['Geëxtraheerde punten', 'Volume x SG-punten', 'Werkelijke extractiepunten'],
        ['Maisrendement', '(Geëxtraheerd / Potentieel) x 100', 'Werkelijk rendementpercentage'],
        ['Wort Brix', '-668.82 + 11.536 x SG x 100...', 'Refractometerwaarde']
      ],
    },
    {
      type: 'title',
      text: 'Belangrijke factoren voor suikerextractie',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Maalgraad: Fijnere maling vergroot het oppervlak maar kan het spoelen bemoeilijken.',
        'Temperatuur en pH: Optimale enzymactiviteit tussen 64°C en 68°C bij pH 5.2 - 5.6.',
        'Spoeltechniek: Continu of stapsgewijs spoelen beïnvloedt de suikeruitwassing.',
        'Water-mout-verhouding: Dunnere maisch bevordert enzymmobiliteit.',
        'Diepte van het maisbed: Tussen 30 cm en 45 cm optimaliseert de vloeistofdynamiek.'
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik 75% als basis voor nieuwe recepten',
      html: 'Bij het ontwerpen van een nieuw recept is 75% rendement een betrouwbaar uitgangspunt.',
    },
    {
      type: 'title',
      text: 'Receptaanpassingen op basis van metingen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Als de gemeten dichtheid voor het koken lager is dan verwacht, kunt u de kooktijd verlengen om het wort te concentreren of moutextract toevoegen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Maisrendement versus brouwzaalrendement',
      html: 'Haal het rendement van de maischketel niet door elkaar met het totale rendement van je brouwinstallatie.',
    },
  ],
};
