import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'alkoholabbau-rechner';
const title = 'Kater und BAK Rechner: Erholungsprognose';
const description = 'Berechne deinen Blutalkoholspiegel (BAK) und die Zeit bis 0,0 mit der Widmark-Formel. Plane deine Flüssigkeitszufuhr vor dem Schlafengehen und erkenne, wenn du vollständig genesen bist.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Biologisches Geschlecht',
  weightLabel: 'Körpergewicht',
  kgUnit: 'kg',
  addDrinkLabel: 'Getränk hinzufügen',
  beerLabel: 'Bier',
  wineLabel: 'Wein',
  spiritLabel: 'Cocktail/Longdrink',
  shotLabel: 'Shot',
  accumulatedLabel: 'Konsumierte Getränke',
  emptyListLabel: 'Deine Liste ist leer',
  emptySubLabel: 'Wähle Getränke zur Berechnung aus.',
  estimatedBacLabel: 'Geschätzter BAK',
  bacUnit: 'BAK',
  timeToZeroLabel: 'bis 0,0 erreicht',
  waterAdviceLabel: 'Wasser (vor dem Schlafengehen)',
  pillAdviceLabel: 'Nahrungsergänzung',
  noneAdvice: 'Nicht erforderlich',
  hydrationAdvice: 'Priorität: Flüssigkeitszufuhr',
  electrolytesAdvice: 'Elektrolyte + Vit. B',
  disclaimerText: 'Dieser Rechner ist eine theoretische Schätzung. Stoffwechsel und Nahrung beeinflussen das Ergebnis. Fahre nicht unter Alkoholeinfluss.',
  drinkUnit: 'Getränk',
  drinksUnit: 'Getränke'
};

const faqTitle = 'Häufig gestellte Fragen';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "Was ist eine Standardgetränkeeinheit und wie viel steckt in jedem Getränk?",
    answer: "Eine Standardgetränkeeinheit enthält etwa 10 Gramm reinen Alkohol (Definition in UK/EU; 14 g in den USA). Ein normales Bier (330 ml bei 5 %) enthält etwa 1,3 Einheiten, ein Glas Wein (150 ml bei 12 %) etwa 1,4 Einheiten und ein Shot (40 ml bei 40 %) etwa 1,3 Einheiten. Das Kennen der Einheiten in dem, was du trinkst, ist wesentlich für die richtige Interpretation der Rechner-Ergebnisse.",
  },
  {
    question: "Warum beeinflusst das biologische Geschlecht die BAK-Berechnung?",
    answer: "Das biologische Geschlecht beeinflusst den Widmark-Faktor 'r', der den Gesamtkörperwasser­anteil als Bruchteil des Körpergewichts darstellt. Männer haben durchschnittlich r=0,68, da sie proportional mehr Körperwasser haben. Frauen haben durchschnittlich r=0,55 wegen eines höheren Körperfettanteils, der weniger Alkohol speichert. Das bedeutet, dass bei denselben Getränken und gleichem Körpergewicht Frauen einen höheren BAK erreichen.",
  },
  {
    question: "Können Kaffee, Wasser oder Sport den Alkoholabbau beschleunigen?",
    answer: "Nein. Die Leber baut Alkohol mit einer konstanten Rate von etwa 0,15 g/L pro Stunde ab (Kinetik nullter Ordnung). Kaffee kann Müdigkeit maskieren, Wasser hilft gegen Dehydration, und Sport verbessert das allgemeine Wohlbefinden – aber nichts davon reduziert deinen tatsächlichen BAK. Nur Zeit baut Alkohol aus dem Blut ab.",
  },
  {
    question: "Hilft das Essen nach dem Trinken, den BAK zu senken?",
    answer: "Das Essen nach dem Trinken reduziert nicht den Alkohol, der bereits in deinem Blutkreislauf ist. Wo Nahrung einen großen Unterschied macht, ist vor oder während des Trinkens: Nahrung im Magen – besonders Proteine und Fette – verlangsamt die gastrale Aufnahme und kann deinen Spitzen-BAK um bis zu 50 % senken. Sobald Alkohol aufgenommen wurde, kann nur der hepatische Stoffwechsel ihn abbauen.",
  },
  {
    question: "Wie lange dauert es, bis man 0,0 BAK erreicht?",
    answer: "Das hängt von deinem Ausgangs-BAK ab. Teile deinen geschätzten BAK (in g/L) durch 0,15, um die ungefähre Dauer in Stunden zu erhalten. Ein BAK von 1,5 g/L dauert etwa 10 Stunden. Die Leber stoppt nie: Sie baut Alkohol sogar ab, während du schläfst. Aber beachte – Alkohol kann noch in deinem Blut vorhanden sein, auch wenn du dich vollständig erholt fühlst.",
  },
  {
    question: "Ist dieser Rechner 100 % zuverlässig für die Entscheidung, Auto zu fahren?",
    answer: "Nein. Dieses Tool ist eine theoretische Schätzung basierend auf der Widmark-Formel. Faktoren wie Nahrungsaufnahme, Medikamente, Müdigkeit, genetische ADH-Enzym-Varianten und Stress können deinen tatsächlichen BAK um 20–30 % in beide Richtungen verschieben. Nutze diesen Rechner niemals, um zu entscheiden, ob du fahren darfst. Wenn du getrunken hast, fahre nicht – das ist die einzige Regel, bei der es keine Ausnahmen gibt.",
  },
];


const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "Richte dein Profil ein",
    text: "Wähle dein biologisches Geschlecht (beeinflusst den Körperwasseranteil) und dein aktuelles Gewicht.",
  },
  {
    name: "Konsumierten Getränke hinzufügen",
    text: "Klicke auf die Getränk-Icons, die du konsumiert hast. Sie werden sich in der Liste darunter ansammeln.",
  },
  {
    name: "Sicherheitszeiten überprüfen",
    text: "Achte auf den geschätzten BAK und, noch wichtiger, auf die Zeit, die die Leber braucht, um all den aufgenommenen Alkohol zu verarbeiten.",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Alkoholstoffwechsel: Wissenschaft und Abbau',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Das Verständnis dafür, wie unser Körper Ethanol verarbeitet, ist für die Sicherheit und zur Linderung von Kater wesentlich. Unser <strong>Alkoholabbau-Rechner</strong> nutzt die anerkannte <strong>Widmark-Formel</strong>, um dir einen klaren Überblick über deinen Stoffwechselzustand zu geben. Alkohol wird nicht durch Schwitzen, Trinken von Wasser oder Sport abgebaut – nur Zeit und der hepatische Stoffwechsel können deinen Blutalkoholspiegel senken.'
  },
  {
    type: 'diagnostic',
    title: 'Die Pharmakokenetik des BAK',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Biochemie',
    html: 'Alkohol verteilt sich im Körperwasser. Faktoren wie Gewicht und der Widmark-Koeffizient r (0,68 bei Männern / 0,55 bei Frauen) bestimmen die anfängliche Verdünnung von Ethanol im Blutkreislauf. Darum können zwei Menschen mit gleichem Gewicht nach dem Konsum derselben Menge sehr unterschiedliche BAK-Werte haben.'
  },
  {
    type: 'title',
    text: 'Hepatische Oxidation und Enzyme',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Die Leber baut 95 % des Alkohols durch Alkoholdehydrogenase (ADH) ab. Dieser Prozess findet mit einer konstanten Rate statt (Kinetik nullter Ordnung), was bedeutet, dass er nicht durch Sport oder Kaffee beschleunigt werden kann. Die restlichen 5 % werden über Atem, Urin und Schweiß ausgeschieden – die Grundlage für Atemalkoholtests im Straßenverkehr.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Abbaurate', value: '0,15 g/L·h', icon: 'mdi:clock-fast' },
      { label: 'Magen-Absorption', value: '20 % Ethanol', icon: 'mdi:stomach' },
      { label: 'Empfohlen: Flüssigkeitszufuhr', value: '1:1 Wasser/Getränk', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Mythen vs. Realität',
    items: [
      { pro: 'Wasser und Elektrolyte vor dem Schlafengehen verringern die Katerintensität durch Gegensteuerung der Diurese.', con: '' },
      { pro: '', con: 'Kalte Duschen: Sie beeinflussen den Blutalkoholspiegel gar nicht.' },
      { pro: '', con: 'Kaffee: Maskiert Müdigkeit, stellt aber verlorene Reflexe oder kognitive Funktionen nicht wieder her.' }
    ]
  },
  {
    type: 'card',
    title: 'Was verursacht einen Kater?',
    icon: 'mdi:alert-decagram',
    html: 'Wissenschaftlich als Veisalgia bekannt, wird ein Kater durch systemische Dehydration (Vasopressin-Suppression durch Ethanol), Ansammlung von Acetaldehyd (ein giftiger Metabolit) und eine zytokine entzündliche Immunreaktion verursacht. Der Glutamat-Rebound im Gehirn nach der Alkoholsuppression trägt auch zu Angst und Licht- und Lärmempfindlichkeit am nächsten Morgen bei.'
  },
  {
    type: 'tip',
    title: 'Sicherheit geht vor: Kenne dein Limit',
    html: 'Ein BAK von 0,05 % beeinträchtigt nachweislich das Urteilsvermögen, die Nachverfolgung und die Reaktionszeit. Die meisten Länder setzen die Grenzwerte für das Fahren zwischen 0,05 % und 0,08 %. Allerdings unterscheidet sich die individuelle Empfindlichkeit erheblich – Alter, Medikamente, Müdigkeit und genetische ADH-Enzym-Varianten beeinflussen alle, wie Alkohol dich persönlich beeinflusst. Im Zweifelsfall fahre nicht.'
  },
  {
    type: 'title',
    text: 'Die Rolle von Nahrung und Absorptionsgeschwindigkeit',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Das Essen vor oder während des Trinkens ändert die Alkoholaufnahme-Kinetik dramatisch. Nahrung im Magen – besonders Proteine und Fette – verlangsamt die Magenentleerung und reduziert die Spitzengeschwindigkeit, mit der Ethanol in den Blutkreislauf gelangt. Eine Person, die auf leeren Magen trinkt, kann einen Spitzen-BAK erreichen, der 50 % höher ist als die gleiche Person, die vor dem Konsum der gleichen Menge eine vollständige Mahlzeit zu sich genommen hat. Dies ist eine der stärksten Variablen, die die Widmark-Formel nicht vollständig erfasst, weshalb unser Rechner einen Disclaimer über theoretische Schätzung enthält.'
  },
  {
    type: 'paragraph',
    html: 'Die Art des alkoholischen Getränks spielt auch eine Rolle, die über nur ABV und Volumen hinausgeht. Kohlensäurehaltige Mixer (Tonic Water, Schaumwein) beschleunigen die Magenentleerung und drücken Alkohol schneller in den Blutkreislauf. Getränke mit sehr hohem ABV (>25 %) können vorübergehend die Magenmotilität hemmen und die Aufnahme verlangsamen. Süße Getränke können die wahrgenommene Alkoholwirkung maskieren, was dazu führt, dass Menschen schneller trinken, als sie es merken. Diese Nuancen sind der Grund, warum der tatsächliche BAK von Modellvorhersagen um 20–30 % in beide Richtungen abweichen kann.'
  }
];

const schemas: AlcoholClearanceLocaleContent['schemas'] = [
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
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: AlcoholClearanceLocaleContent = {
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
