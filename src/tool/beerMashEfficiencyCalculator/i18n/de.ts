import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'maischausbeute-rechner-bier';
const title = 'Maischausbeute Rechner für Bier';
const description = 'Berechne die Maischausbeute in Prozent, die Zuckerextraktion und die erwartete Stammwürze für Heimbrauer und Handwerksbrauereien.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Metrisch',
  stagePreboil: 'Würze vor Kochen',
  stagePostboil: 'Würze nach Kochen',
  unitImperial: 'Imperial',
  labels: {
    grainWeight: 'Gesamtes Malzgewicht',
    grainType: 'Malzausbeute-Preset',
    customPotential: 'Eigener Ausbeutewert (SG)',
    wortVolume: 'Pfannevollvolumen',
    measuredSg: 'Gemessene Stammwürze (SG)',
    unitSystem: 'Einheitensystem',
    sampleTemp: 'Probentemperatur',
    calibTemp: 'Kalibriertemperatur',
    stageLabel: 'Braustufe',
    presets: 'Typische Malzausbeuten',
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
    pilsner: 'Pilsner Malz (1.037 / 37 PPG)',
    pale_ale: 'Pale Ale Malz (1.038 / 38 PPG)',
    vienna: 'Wiener Malz (1.036 / 36 PPG)',
    munich: 'Münchner Malz (1.035 / 35 PPG)',
    wheat: 'Weizenmalz (1.038 / 38 PPG)',
    caramel_30: 'Karamellmalz 30L (1.034 / 34 PPG)',
    caramel_60: 'Karamellmalz 60L (1.034 / 34 PPG)',
    chocolate: 'Schokoladenmalz (1.034 / 34 PPG)',
    custom: 'Eigenes Potenzial...',
  },
  results: {
    efficiencyTitle: 'Maischausbeute',
    efficiencyBadge: 'Berechneter Status',
    correctedGravity: 'Korrigierte Stammwürze',
    measuredGravity: 'Gemessene Dichte',
    expectedGravity75: 'SG bei 75% Ausbeute',
    expectedGravity80: 'SG bei 80% Ausbeute',
    expectedGravity85: 'SG bei 85% Ausbeute',
    potentialPoints: 'Gesamte Ausbeutepunkte',
    extractedPoints: 'Gemessene Extraktpunkte',
    wortBrix: 'Geschätzte Brix',
  },
  statusMessages: {
    excellent: 'Hervorragende Extraktion (82%+)',
    good: 'Gute Ausbeute (74% - 81%)',
    average: 'Durchschnittliche Ausbeute (65% - 73%)',
    poor: 'Niedrige Extraktion (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Extraktion im Maischebehälter',
    wortLevel: 'Würzepegel',
    sugarExtraction: 'Zuckerextraktion',
  },
};

const faq = [
  {
    question: 'Was ist die Maischausbeute beim Bierbrauen?',
    answer: 'Die Maischausbeute gibt den prozentualen Anteil der aus dem Malz gelösten Ausbeutestoffe im Vergleich zum theoretischen Maximum an.',
  },
  {
    question: 'Welche Maischausbeute ist ein guter Zielwert?',
    answer: 'Für Heimbrauer liegt eine gute Maischausbeute typischerweise zwischen 70% und 80%.',
  },
  {
    question: 'Wie berechnet man die Ausbeute?',
    answer: 'Man vergleicht die tatsächlich gemessenen Ausbeutepunkte der Würze mit dem theoretischen Ausbeutepotenzial der Malzschüttung.',
  },
  {
    question: 'Wie lässt sich eine niedrige Ausbeute verbessern?',
    answer: 'Feineres Schrotbild, optimale Maischetemperatur, richtiger pH-Wert zwischen 5.2 und 5.6 sowie gleichmäßiges Läutern erhöhen die Ausbeute.',
  },
  {
    question: 'Was ist der Unterschied zwischen Maischausbeute und Sudhausausbeute?',
    answer: 'Die Maischausbeute misst die Extraktion im Maischebehälter vor dem Kochen. Die Sudhausausbeute berücksichtigt zusätzlich Trub- und Gärverluste.',
  },
  {
    question: 'Wie beeinflusst das Hauptguss-Verhältnis das Ergebnis?',
    answer: 'Dünnere Maischen (3.5 bis 4.0 L pro kg) verbessern die Enzymmobilität und erleichtern das Auswaschen der Zucker.',
  }
];

const howTo = [
  {
    name: 'Einheitensystem wählen',
    text: 'Wähle metrische Einheiten oder das imperiale System.',
  },
  {
    name: 'Malzmenge und Potenzial eingeben',
    text: 'Wähle ein Malz-Preset oder gib den spezifischen Ausbeutewert ein.',
  },
  {
    name: 'Würzevolumen und Dichte angeben',
    text: 'Gib das gemessene Pfannevollvolumen und die Spindelablesung ein.',
  },
  {
    name: 'Ausbeute und Zielwerte prüfen',
    text: 'Vergleiche deine Ausbeute mit den Richtwerten für 75%, 80% und 85%.',
  },
  {
    name: 'Rezept für den nächsten Sud anpassen',
    text: 'Nutze den berechneten Ausbeutewert zur genauen Skalierung künftiger Schüttungen.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufige Fragen zur Maischausbeute',
  bibliographyTitle: 'Referenzen und Formeln',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Maischausbeute beim Bierbrauen verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Maischausbeute misst, wie effizient Malzstärken in vergärbare Zucker umgewandelt und in die Würze überführt werden. Sie ist grundlegend für die Rezeptplanung.',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Formel', 'Beschreibung'],
      rows: [
        ['Potenzielle Punkte', 'Gewicht x PPG', 'Theoretisches Maximum'],
        ['Extrahierte Punkte', 'Volumen x SG-Punkte', 'Tatsächliche Ausbeutepunkte'],
        ['Maischausbeute', '(Extrahiert / Potenzial) x 100', 'Prozentualer Ausbeutewert'],
        ['Wort Brix', '-668.82 + 11.536 x SG x 100...', 'Refraktometerwert']
      ],
    },
    {
      type: 'title',
      text: 'Einflussfaktoren auf die Extraktausbeute',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Mahlgrad: Feineres Schrot erhöht die Oberfläche, kann aber das Läutern erschweren.',
        'Temperatur und pH: Optimale Enzymaktivität zwischen 64°C und 68°C bei pH 5.2 - 5.6.',
        'Läutertechnik: Kontinuierliches oder stufenweises Nachgießen beeinflusst das Auswaschen der Zucker.',
        'Wasser-Malz-Verhältnis: Dünnere Maischen fördern die Enzymmobilität.',
        'Schüttungshöhe: Zwischen 30 cm und 45 cm wird die Fluiddynamik optimiert.'
      ],
    },
    {
      type: 'tip',
      title: '75% als Ausgangswert für neue Rezepte',
      html: 'Beim Entwurf neuer Rezepte bietet eine angenommene Maischausbeute von 75% eine zuverlässige Basis.',
    },
    {
      type: 'title',
      text: 'Rezeptanpassung nach der Messung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Liegt die gemessene Dichte vor dem Kochen unter dem Zielwert, kann man den Kochvorgang verlängern oder Malzextrakt zufügen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Maischausbeute unterscheidet sich von Sudhausausbeute',
      html: 'Beachte, dass Verluste im Hopfen- und Trubseiher nicht in die reine Maischausbeute eingehen.',
    },
  ],
};
