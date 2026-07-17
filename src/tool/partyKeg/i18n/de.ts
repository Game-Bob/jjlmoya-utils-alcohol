import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'bier-eisrechner-party';
const title = 'Bier Eisrechner: Menge pro Person für Hochzeiten und Geburtstage';
const description = 'Kostenloses Tool zur Berechnung von Bier- und Eismengen basierend auf Gästen, Dauer und Temperatur. Perfekt für Hochzeiten, Geburtstage und Outdoorevents.';

const ui: PartyKegUI = {
  calcStockTitle: 'Bestandsrechner',
  beerIceSub: 'Bier & Eis für Events',
  guestsLabel: 'Gäste',
  durationLabel: 'Dauer',
  hoursUnit: 'Stunden',
  intensityLabel: 'Intensität',
  chillLabel: 'Chill',
  standardLabel: 'Standard',
  partyLabel: 'Party',
  tempLabel: 'Temperatur',
  estimatedVolLabel: 'Geschätztes Volumen',
  kegsLabel: 'Fässer',
  iceRequiredLabel: 'Eis erforderlich',
  bagsLabel: 'Beutel',
  visualizationTitle: 'Bestandsvisualisierung',
  optimalMsg: 'Optimale Bedingungen',
  highMeltMsg: 'Hohe Schmelzrate erkannt',
  highEfficiencyMsg: 'Kalt / Hohe Effizienz'
};

const faqTitle = 'Häufig gestellte Fragen';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "Wie viele Biere trinkt eine Person in 4 Stunden?",
    answer: "Im Durchschnitt sollte man mit 5 Bieren pro Person für eine 4-Stunden-Veranstaltung rechnen. Dies geht von 2 Getränken in der ersten Stunde und je 1 in den verbleibenden Stunden aus.",
  },
  {
    question: "Wie viel Eis brauche ich für 100 Biere?",
    answer: "Du benötigst ungefähr 15-20 Kilogramm Eis (7-10 Beutel). Die praktische Regel lautet: 0,75 kg Eis pro Liter Getränk unter Normalbedingungen. Im Sommer oder im Freien über 25 °C solltest du mit 1 kg pro Liter rechnen: Die Umgebungswärme beschleunigt das Schmelzen erheblich, und dein Eis schmilzt viel schneller als erwartet.",
  },
  {
    question: "Was ist der Unterschied zwischen einem Standard- und einem Party-Fass?",
    answer: "Ein Standard-Fassfass fasst 50 Liter, was ungefähr 200 Portionen à 250 ml ergibt. Ein Party-Fass (Mini-Fass) fasst typischerweise 5 Liter - etwa 20 Portionen. Diese Größen zu kennen hilft dir, die Literangabe des Rechners in die Anzahl der zu kaufenden Behälter umzurechnen.",
  },
  {
    question: "Warum brauche ich so viel Eis, wenn die Biere bereits kalt sind?",
    answer: "Weil Abkühlung und Aufrechterhaltung zwei unterschiedliche Prozesse sind. Um eine Dose von 25 °C auf 4 °C abzukühlen, wird die Schmelzwärmemenge des Eises benötigt: etwa 334 kJ/kg. Einmal kalt, arbeitet das Eis weiterhin, um die Umgebungswärme auszugleichen. An einem Sommertag mit 35 °C kann Wärmeleitung in die Kühlbox etwa 1 kg Eis pro Liter Getränk alle 2-3 Stunden schmelzen. Deshalb reduziert Vorkühlen deiner Getränke vor der Party deinen Gesamteisverbrauch um die Hälfte.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "Schätze die Anzahl der Gäste",
    text: "Definiere, wie viele Personen teilnehmen werden. Unser Rechner passt die Mengen auf Basis statistischer Verbrauchsdurchschnitte an.",
  },
  {
    name: "Definiere Dauer und Intensität",
    text: "Gib an, wie viele Stunden das Event dauert und welches Tempo die Party hat (chill, standard oder intensiv).",
  },
  {
    name: "Passe dich an die Umgebungstemperatur an",
    text: "Die Außentemperatur ist entscheidend für die Eisberechnung. Je wärmer, desto höher muss die Schmelzrate sein, die wir ausgleichen müssen.",
  },
];


const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Wie viel Bier und Eis brauche ich für meine Party?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Die Millionen-Dollar-Frage bei jeder Veranstaltung: <strong>Wie viele Liter Bier sollte ich kaufen?</strong> Zu wenig ist ein Desaster, aber zu viel ist unnötige Ausgabe. Dieses Tool hilft dir, die genaue Menge Alkohol und noch wichtiger <strong>wie viele Eisbeutel</strong> du kaufen musst, um alles kalt zu halten. Professionelle Caterer und Eventmanager nutzen statistische Verbrauchsmodelle - jetzt kannst du das auch kostenlos.'
  },
  {
    type: 'title',
    text: 'Die Verbrauchsformel pro Person',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Um den benötigten Alkohol zu schätzen, nutzen professionelle Caterer eine Formel basierend auf der "Stündlichen Verbrauchsrate". Es ist keine exakte Wissenschaft, aber Statistiken zeigen, dass auf einer Standard-Party ungefähr 1,5 Einheiten pro Stunde pro Person konsumiert werden. Faktoren wie Umgebungstemperatur, Essensangebot und die soziale Energie der Veranstaltung verändern diese Baseline.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Chill-Verbrauch', value: '1 Getränk/Stunde', icon: 'mdi:tea-outline' },
      { label: 'Standard-Party', value: '1,5 Getränke/Stunde', icon: 'mdi:glass-mug-variant' },
      { label: 'Hochzeit / Festival', value: '2,5+ Getränke/Stunde', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: 'Die Physik des Eises',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Thermodynamik',
    html: 'Eisberechnung ist da, wo die meisten Gastgeber scheitern. Eis hat zwei Funktionen: Abkühlung (von 25 °C auf 4 °C) und Aufrechterhaltung (gegen die Umgebungswärme). Bei Temperaturen über 30 °C verdoppelt sich die Schmelzrate. Ein voller Eisbeutel in direkter Sonne kann in unter 20 Minuten weg sein, wodurch deine Getränke warm werden, bevor die Party ihren Höhepunkt erreicht.'
  },
  {
    type: 'tip',
    title: 'Professioneller Tipp zum Eisparen',
    html: 'Lagere Fässer und Dosen im Schatten, bevor du Eis hinzufügst. Wenn Getränke in der Sonne warm sind, vergeudet dein erstes Eisbeutel die ersten 50 % einfach durch Wärmeverlust in 10 Minuten. Beginne mit vorgekhlten Getränken, um die Eismenge, die du kaufen musst, dramatisch zu reduzieren.'
  },
  {
    type: 'title',
    text: 'Referenzdaten für Logistik',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Ein Standard-50-Liter-Fass ergibt etwa 200 Portionen. Ein typischer Eisbeutel wiegt 2 kg. Mit diesen Zahlen kannst du Transport und Lagerung für dein Event ohne letzte Minute Überraschungen planen. Rechne mit Eisschmelz während des Transports - eine 30-minütige Fahrt im Sommer kann dir einen ganzen Beutel kosten, bevor die Party überhaupt anfängt.'
  },
  {
    type: 'summary',
    title: 'Für wen ist dieses Tool?',
    items: [
      'Privatparty-Gastgeber: Höre auf zu raten und kaufe selbstbewusst genau das, was du für dein nächstes Fest brauchst.',
      'Event-Manager: Nutze genaue Verbrauchsmodelle, um Kunden zu beraten und Barlogistik professionell zu planen.',
      'Veranstaltungsstättenmanager: Standardisiere Bestandsberechnungen für wiederkehrende Events mit unterschiedlichen Gästezahlen.'
    ]
  },
  {
    type: 'paragraph',
    html: 'Eine oft übersehene Variable ist die <strong>Ausfallquote der Gäste</strong>. Bei den meisten Partys verlassen 10-15 % der Gäste früh und 10 % trinken vielleicht gar nicht. Der Rechner wendet einen konservativen Puffer an, damit du nie zu kurz kommst, aber auch nicht mit enormem Überschuss sitzt. Diese Anpassungen zu verstehen hilft dir, die Schätzung für deine spezifische Gruppe zu verfeinern. Runde beim Kaufen immer auf, da zurückgegebene offene Fässer normalerweise nicht möglich sind. Ein kleiner Überschuss ist immer besser als am Höhepunkt der Party trocken zu laufen.'
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
