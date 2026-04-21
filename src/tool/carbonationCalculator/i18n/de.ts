import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'bier-karbonatisierungs-rechner';
const title = 'Bier Karbonisierungs und Primersüße Rechner';
const description = 'Berechne die exakte Grammmenge von Dextrose, Haushaltszucker oder Malzextrakt (DME) zum Abfüllen deines Haushaltbieres. Gib dein Volumen, Gärungstemperatur und Stil ein und perfektioniere deine Grundierung.';

const ui: CarbonationUI = {
  parametersTitle: 'Parameter',
  metricBtn: 'Metrisch',
  imperialBtn: 'Imperial',
  volumeLabel: 'Biervolumen',
  maxTempLabel: 'Höchsttemperatur',
  litersUnit: 'Liter',
  celsiusUnit: '°C',
  gallonsUnit: 'Gallonen',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'Gewünschte Karbonisierung',
  volUnit: 'CO2 Vol',
  resultsTitle: 'Primierungsergebnisse',
  tableSugarLabel: 'Haushaltszucker',
  cornSugarLabel: 'Kristallzucker (Dextrose)',
  dmeLabel: 'Trockenes Malzextrakt (DME)',
  safetyTitle: 'EXPLOSIONSGEFAHR!',
  lowCarbonation: 'NIEDRIGE KARBONISIERUNG',
  optimalCarbonation: 'OPTIMALE KARBONISIERUNG',
  highEffervescence: 'HOHE SPRUDELIGKEIT',
  bubblingVisualizationLabel: 'Ungefähre Blasenvisualisierung'
};

const faqTitle = 'Häufig gestellte Fragen';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: 'Warum ist Temperatur für Karbonisierung wichtig?',
    answer: 'Das Restgas CO2 in deinem Bier hängt von der höchsten Temperatur ab, die nach der Gärung erreicht wurde: Kalte Flüssigkeit hält mehr gelöstes Gas als warme Flüssigkeit. Wenn du eine niedrigere Temperatur eingibst als die tatsächliche, geht der Rechner von mehr Restgas aus, als wirklich vorhanden ist, und gibt dir weniger Zucker als nötig. Gib es zu hoch ein und das Gegenteil passiert — du fügst mehr Zucker hinzu als notwendig und drückst deinen Charge in Flaschenboben-Gebiet, wo Überdruck zu Flaschen-Ruptur oder Kappenflucht führt.',
  },
  {
    question: 'Welcher Zucker ist am besten zum Ansäen?',
    answer: 'Dextrose (Kristallzucker) wird bevorzugt, weil es neutral ist und schnell auflöst. Haushaltszucker funktioniert gut, erfordert aber etwa 10% weniger Gewicht.',
  },
  {
    question: 'Was passiert, wenn ich zu viel Primerungszucker hinzufüge?',
    answer: 'Überprimerier erzeugt übermäßigen CO2-Druck in der Flasche. Standardglasflaschen versagen bei ungefähr 3,5-4,0 CO2-Volumen. Darüber hinaus kann die Flasche platzen oder die Kappe heftig abblasen. Deshalb ist Präzision wichtig — selbst 5 Extra-Gramm pro Liter können eine Charge in die Gefahrenzone drücken.',
  },
  {
    question: 'Wie lange dauert es, bis Bier nach dem Abfüllen karbonisiert?',
    answer: 'Zwischen 2 und 3 Wochen bei Raumtemperatur (18-22°C) ist der typische Bereich, damit die Hefe den hinzugefügten Zucker vollständig gären und das CO2 sich in die Flüssigkeit integriert. Eine Flasche vor Abschluss des Prozesses zu öffnen gibt immer ein irreführendes Ergebnis: Das Bier scheint unterkarbonisiert zu sein, obwohl die Karbonisierung immer noch entwickelt wird. Bei DME kann der Prozess leicht langsamer sein, da seine Gärungszucker komplex sind.',
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: 'Messung echtes Volumen',
    text: 'Gib an, wie viele Liter (oder Gallonen) Bier du nach Abschluss der Gärung zur Abfüllung bereit hast.',
  },
  {
    name: 'Definiiere Gärungstemperatur',
    text: 'Gib die höchste Temperatur ein, die das Bier während oder nach aktiver Gärung erreicht hat.',
  },
  {
    name: 'Wähle Stil oder CO2-Volumen',
    text: 'Wähle das gewünschte Karbonisierungsniveau. Die Stile variieren von 1,5 (Stouts) bis 4,5 (Weizenbiere).',
  },
];


const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ultimativer Leitfaden zu Karbonisierung und Primerung',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Meistere die Kunst der Primerung und verwandle dein Haushaltsbier aus einem flachen Experiment in eine professionelle sprudelnde Erfahrung. Primerung beinhaltet das Hinzufügen einer genauen Zuckermenge, damit die Resthefen in der Flasche während einer sekundären Gärung natürliches CO2 erzeugen. Zu wenig Zucker ergibt flaches Bier; zu viel erzeugt einen gefährlichen Druck, der Flaschen zerbrechen kann. Der Unterschied zwischen den beiden beträgt ein paar Gramm — deshalb existiert dieser Rechner.'
  },
  {
    type: 'proscons',
    title: 'Kritische Erfolgsfaktoren',
    items: [
      { pro: 'Temperatur: Das Restgas CO2 hängt vom Höchsttemperatur nach Gärung ab.', con: '' },
      { pro: 'Genauigkeit: 5 Extramme pro Liter können der Unterschied zwischen perfekter Karbonisierung und einer Geyser sein.', con: '' },
      { pro: '', con: 'Oxidation: Vermeide beim Transferieren zum Mischen des Primerungszuckers Spritzen.' }
    ]
  },
  {
    type: 'title',
    text: 'CO2-Volumen nach Bierstil',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'Britische Stouts', value: '1,5 - 2,0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2,2 - 2,6 Vol', icon: 'mdi:hops' },
      { label: 'Deutsche Hefeweizen', value: '3,3 - 4,5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Welchen Zucker solltest du wählen?',
    icon: 'mdi:corn',
    html: '<strong>Dextrose</strong> ist neutral und professionell — der Industriestandard. <strong>Haushaltszucker</strong> ist wirtschaftlich und effektiv (verwende 10% weniger Gewicht als Dextrose). <strong>DME (Trockenes Malzextrakt)</strong> ist die Wahl des Puristen, aber schwieriger genau zu prognostizieren, weil seine Gärbarkeit je nach Marke und Malzzusammensetzung variiert.'
  },
  {
    type: 'diagnostic',
    title: 'Sicherheitswarnung',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Gefahr',
    html: 'Standardglasflaschen versagen bei 3,5-4,0 CO2-Volumen. Versuche nicht, belgische oder Weizenbiere in dünnes Glas zu karbonisieren. Verwende immer Flaschen, die für kohlensäurehaltige Getränke geeignet sind, und nutze nie recycelte kommerzielle Flaschen, die möglicherweise mikroskopische Strukturschäden durch frühere Verwendung haben.'
  },
  {
    type: 'tip',
    title: 'Profi Tipp: Löse den Zucker richtig auf',
    html: 'Koche deine Primerungszuckerlösung (Zucker, gelöst in ungefähr 250ml Wasser pro 20L Charge) immer 10 Minuten lang, bevor du sie zum Bier gibst. Das Kochen sterilisiert die Lösung und stellt sicher, dass der Zucker vollständig gelöst und gleichmäßig in der ganzen Charge verteilt ist, was Hotspots verhindert, die zu ungleicher Karbonisierung zwischen Flaschen führen.'
  },
  {
    type: 'summary',
    title: 'Für wen ist dieses Werkzeug?',
    items: [
      'Hausbrauer: Erhalte die genaue Primerungsberechnung für jede Chargengröße, Stil und Gärungstemperatur.',
      'Handwerksbier-Enthusiasten: Verstehe die Wissenschaft dahinter, warum kommerzielle Biere unterschiedliche Karbonisierungsniveaus haben.',
      'Professionelle Brauer: Überprüfe Handberechnungen vor dem Abfüllen großer kommerzieller Chargen.'
    ]
  },
  {
    type: 'title',
    text: 'Karbonisierungswissenschaft: Henrys Gesetz',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Im Kern wird Karbonisierung durch <strong>Henrys Gesetz</strong> gesteuert: Die Menge des in einer Flüssigkeit gelösten Gases ist proportional zum Partialdruck dieses Gases über der Flüssigkeit. Wenn du eine Flasche grundierst und versiegelst, verbraucht die Hefe den Zucker und erzeugt CO2 in einer versiegelten Umgebung. Wenn der Druck ansteigt, wird das Gas zurück in Lösung gezwungen. Die Temperatur, bei der dieses Gleichgewicht erreicht wird, bestimmt das endgültige Karbonisierungsniveau — deshalb ist die Gärungstemperatur die kritischste Variable in diesem Rechner.'
  },
  {
    type: 'paragraph',
    html: 'Das Restgas CO2 in deinem Bier vor Primerung ist nicht null. Jedes Bier enthält gelöstes CO2 aus dem Gärungsprozess, und die Menge, die beibehalten wird, hängt von der höchsten Temperatur ab, die das Bier erreichte. Ein Bier, das bei 22°C gär, enthält deutlich weniger Restgas CO2 als eines, das bei 16°C gärte, obwohl beide jetzt gekühlt sind. Die Nichtberücksichtigung dieser Restwerte führt zu systematischer Übergärung — einem der häufigsten Fehler unter anfänglichen Hausbauern.'
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
