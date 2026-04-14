import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'beer-cooler';
const title = 'Bierkühler mit Newtonsches Abkühlungsgesetz';
const description = 'Berechne mit echter Thermodynamik — Newtonsches Abkühlungsgesetz — genau wie lange dein Bier braucht, um die perfekte Serviertemperatur im Kühlschrank oder Gefrierschrank zu erreichen.';

const ui: BeerCoolerUI = {
  step1Title: 'Was kühlst du ab?',
  canLabel: 'Dose',
  aluminumLabel: 'Aluminium',
  bottleLabel: 'Flasche',
  glassLabel: 'Glas',
  step2Title: 'Wo stellst du es hin?',
  fridgeLabel: 'Kühlschrank',
  freezerLabel: 'Gefrierschrank',
  step3Title: 'Temperaturen feinjustieren',
  initialTempLabel: 'Starttemperatur',
  targetTempLabel: 'Zieltemperatur',
  glacialLabel: 'Eiskalt',
  perfectLabel: 'Perfekt',
  bodegaLabel: 'Bodega',
  readyTitle: 'Bereit',
  readyDescription: 'Behälter und Ort auswählen zum Berechnen.',
  estimatedTimeLabel: 'Geschätzte Zeit',
  methodLabel: 'Methode',
  containerLabel: 'Behälter',
  alreadyColdLabel: 'Schon kalt!',
  neverColdLabel: 'Wird nie kalt'
};

const faqTitle = 'Häufig gestellte Fragen';
const bibliographyTitle = 'Bibliografie & Quellen';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: 'Wie berechnet dieses Werkzeug die Abkühlungszeit?',
    answer: 'Es wendet Newtons Abkühlungsgesetz an: T(t) = T_env + (T₀ - T_env) × e^(-kt). Die Konstante k variiert je nach Behältermaterial und Kühlmedium. Eine Aluminiumdose im Kühlschrank hat ein völlig anderes k als eine Glasflasche im Gefrierschrank. Die hier verwendeten Werte sind durch reale Experimente für jede Kombination kalibriert.',
  },
  {
    question: 'Funktioniert der Trick mit dem nassen Papiertuch und Salz wirklich?',
    answer: 'Ja, und sehr deutlich. Das Wickeln des Behälters in ein feuchtes Papiertuch mit Salz beschleunigt das Abkühlen aus zwei Gründen: Wasserverdunstung entzieht zusätzliche Wärme (Verdunstungskühlung), und Salz senkt den Gefrierpunkt des Wassers, wodurch der feuchte Kontakt länger aktiv bleibt. Du kannst in den ersten Minuten einen zusätzlichen Temperaturabfall von 2–4°C erreichen, verglichen mit einer trockenen Dose im Gefrierschrank.',
  },
  {
    question: 'Welche ist die ideale Serviertemperatur für verschiedene Biersorten?',
    answer: 'Das hängt von der Sorte ab. Lagerbiere und Pilsener werden am besten zwischen 3°C und 7°C serviert. IPAs und Pale Ales kommen bei 7°C bis 10°C zur Geltung. Stouts, Porter und komplexere Ales sollten wärmer serviert werden, zwischen 12°C und 14°C, damit ihre Aromastoffe — Kaffee, Schokolade, Nüsse — sich vollständig entfalten können.',
  },
  {
    question: 'Kann mein Bier explodieren, wenn ich es zu lange im Gefrierschrank lasse?',
    answer: 'Ja. Alkohol und gelöste Zucker senken den Gefrierpunkt des Bieres unter den von reinem Wasser: Ein standardmäßiges Lagerbier mit 5% Alkohol gefriert um -3°C. Wenn Wasser kristallisiert, nimmt das Volumen zu, und gelöstes CO2 erhöht den Innendruck, bis der Behälter nachgibt. Mehr als 60 Minuten im Gefrierschrank — besonders bei Glasflaschen — ist wirklich gefährlich. Nutze diesen Rechner, um das zu vermeiden.',
  },
  {
    question: 'Wird Bier "geschockt", wenn es zu schnell gekühlt wird?',
    answer: 'Nein. Der Mythos vom "Wärmeschock", der Bier ruiniert, ist falsch. Was es wirklich beeinträchtigen kann, ist wiederholtes Einfrieren und Auftauen — das zerstört Proteine und trübt die Flüssigkeit — oder direkte UV-Lichteinstrahlung. Ein schnelles Abkühlen im Gefrierschrank oder Eiswasser schadet dem Geschmack nicht.',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: 'Behälter auswählen',
    text: 'Entscheide dich zwischen einer Aluminiumdose oder einer Glasflasche. Das Material beeinflusst die Wärmeübergangsgeschwindigkeit drastisch.',
  },
  {
    name: 'Kühlmethode wählen',
    text: 'Gib an, ob du einen herkömmlichen Kühlschrank (4°C) oder einen Gefrierschrank (-18°C) für einen Ultra-Schnellprozess verwendest.',
  },
  {
    name: 'Temperaturen anpassen',
    text: 'Lege die aktuelle Temperatur des Getränks (Raumtemperatur) und deine gewünschte Zieltemperatur fest.',
  },
];

const bibliography: BeerCoolerLocaleContent['bibliography'] = [
  {
    name: 'Newtonsches Abkühlungsgesetz - Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling',
  },
  {
    name: 'Fortgeschrittene Chemie von Bier und Brauen - American Chemical Society',
    url: 'https://www.acs.org/acs-webinars/library/advanced-chemistry-of-beer-and-brewing.html',
  },
];

const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Die Wissenschaft der Kälte und Thermodynamik',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Warum kühlt sich die Dose schneller ab als die Flasche? Ist es Magie? Nein, es ist <strong>Newtons Abkühlungsgesetz</strong> in Aktion. Dieses Werkzeug berechnet mathematisch den genauen Moment, in dem dein Getränk thermodynamische Perfektion erreicht. Jedes Material, jede Umgebung, jede Ausgangstemperatur speist sich in die gleiche Differentialgleichung ein, die Physiker und Ingenieure zur Modellierung von Wärmevorgängen in Industriesystemen verwenden.'
  },
  {
    type: 'diagnostic',
    title: 'Die Meisterformel',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Physik',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). Diese Differentialgleichung beschreibt, wie sich die Temperatur eines Objekts proportional zur Differenz zwischen seiner Temperatur und der der Umgebung ändert. Die Konstante k hängt vom Material und der Geometrie des Behälters ab, weshalb sich eine Dose schneller abkühlt als eine Flasche desselben Volumens.'
  },
  {
    type: 'title',
    text: 'Materialkrieg: Aluminium gegen Glas',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>Aluminium</strong> hat eine Wärmeleitfähigkeit von etwa 205 W/(m·K), während <strong>Glas</strong> kaum 0,8 W/(m·K) erreicht. Metall leitet Kälte rasend schnell, weshalb es der ideale Behälter für Notfälle ist. Glas hingegen isoliert besser, wenn es einmal kalt ist, und hält die ideale Temperatur während des Konsums länger. Dieser Kompromiss erklärt, warum verschiedene Bierkulturen unterschiedliche Vorlieben für jedes Material entwickelt haben.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Pilsner & Lagerbier', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA & Pale Ale', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: 'Stout & Porter', value: '12°C - 14°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Die Gefrierzone',
    icon: 'mdi:snowflake-alert',
    html: 'Wegen Alkohol und gelöster Zucker gefriert Bier unter 0°C — ein standardmäßiges 5%-Lagerbier gefriert um -3°C. Während Wasser kristallisiert, dehnt es sich aus, während der CO2-Druck gleichzeitig ansteigt. Das Ergebnis ist ein Behälter, der heftig platzen kann. Lass Bier niemals länger als 45 Minuten im Gefrierschrank, ohne einen Timer zu stellen.'
  },
  {
    type: 'proscons',
    title: 'Notfall Kühl Tricks',
    items: [
      { pro: 'Nasses Papiertuch-Trick: Wickle die Dose in ein nasses Papiertuch und friere ein — Verdunstung beschleunigt das Abkühlen.', con: '' },
      { pro: 'Arktische Sole: Fülle einen Eimer mit Wasser, Eis und 2 Esslöffeln Salz, um -5°C Salzwasser zu erreichen.', con: '' },
      { pro: 'Drehende Methode: Drehe die Flasche im Eiswasser, um Konvektion zu erzwingen und die Abkühlungszeit zu verkürzen.', con: '' },
      { pro: '', con: 'Stelle eine Dose nicht ohne Timer direkt auf ein Gefrierschrankregal — platzte Dosen sind chaotisch und gefährlich.' }
    ]
  },
  {
    type: 'tip',
    title: 'Profi Tipp: Vorkühle das Glas',
    html: 'Das Glas, in das du Bier eingießt, hat eine signifikante thermische Masse. Ein warmes Glas kann die Temperatur eines perfekt kalten Bieres sofort um 2-3°C erhöhen. Stelle dein Servierglas 5 Minuten lang in den Gefrierschrank oder spüle es mit kaltem Wasser. Dieser einfache Schritt verlängert das Zeitfenster, in dem dein Bier genau so schmeckt, wie es gemeint ist.'
  },
  {
    type: 'title',
    text: 'Die Abkühlungskonstante verstehen',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Die Abkühlungskonstante k in Newtons Gleichung ist keine feste universelle Größe — sie ist eine empirische Eigenschaft jedes spezifischen Behälters und Mediums. Eine dünne Aluminiumdose in Eiswasser hat ein dramatisch anderes k als eine dicke Glasflasche in still stehender Kühlschrankluft. Unser Rechner verwendet gemessene Werte, die durch reale Experimente für jeden Behältertyp kalibriert sind, und gibt dir Vorhersagen, die für typische häusliche Kühlszenarien auf wenige Minuten genau sind.'
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
