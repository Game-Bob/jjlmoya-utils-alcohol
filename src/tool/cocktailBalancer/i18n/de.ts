import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'cocktail-ausgleicher';
const title = 'Cocktail Balancer: Das Sauer Gesetz';
const description = 'Berechnen Sie die perfekte Balance zwischen süß und sauer für Ihre Cocktails. Meistern Sie das goldene Verhältnis der Mixologie.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Rezepte',
  saveBtn: 'Speichern',
  resetBtn: 'Zurücksetzen',
  emptyStateTitle: 'Ihre Werkbank ist leer',
  emptyStateDescription: 'Fügen Sie Zutaten hinzu, um die Balance Ihres Cocktails in Echtzeit zu analysieren.',
  addBtn: 'Zutat hinzufügen',
  addMoreBtn: 'Noch eine Zutat hinzufügen',
  flavorProfileTitle: 'Geschmacksprofil',
  volLabel: 'Volumen',
  sugarLabel: 'Zucker',
  colorLabel: 'Farbe',
  sourLawTitle: 'Sauer-Gesetz',
  acidDryLabel: 'Säure (Trocken)',
  balanceLabel: 'Balance',
  sweetLabel: 'Süß',
  aiSuggestionTitle: 'KI-Vorschlag',
  addIngredientTitle: 'Zutat hinzufügen',
  searchPlaceholder: 'Rum, Limette, Sirup durchsuchen...',
  presetsTitle: 'Rezepte & Vorlagen',
  savedSectionTitle: 'Meine gespeicherten',
  classicsSectionTitle: 'Klassiker',
  confirmDeleteTitle: 'Alles löschen?',
  confirmDeleteText: 'Dadurch werden alle Zutaten von Ihrer Werkbank entfernt. Diese Aktion kann nicht rückgängig gemacht werden.',
  cancelBtn: 'Abbrechen',
  deleteBtn: 'Löschen',
  verdictSpiritSeco: 'Spirituose / Trocken',
  verdictSoloDulce: 'Nur Süß (Old Fashioned)',
  verdictMuyAcido: 'Zu sauer / Knochentrocken',
  verdictAcido: 'Sauer / Herb',
  verdictEquilibrado: 'Ausgewogen (Sauer)',
  verdictDulce: 'Süß / Kommerziell',
  verdictEmpalagoso: 'Zu süß',
  fixAddBitters: 'Bitterkeit fehlt',
  fixAddSugar: 'Zu sauer',
  fixAddAcid: 'Zu süß'
};

const faqTitle = 'Häufig gestellte Fragen';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "Was ist das 'Sauer-Gesetz'?",
    answer: "Es ist das goldene Verhältnis der Mixologie, das drei Elemente ausbalanciert: die starke Basis (Spirituose), die Säure (Zitrusfrüchte) und die Süße (Sirupe). Ein klassisches Rezept folgt in der Regel dem Verhältnis 2:1:1 (Stark:Sauer:Süß), wobei dies je nach Stärke und Dichte variiert.",
  },
  {
    question: "Wie wirkt sich Verdünnung auf die Cocktail-Balance aus?",
    answer: "Eis kühlt nicht nur ab; es fügt Wasser (Verdünnung) hinzu, das die Aromen der Spirituose öffnet und die Spitzen von Säure und Süße abschwächt. Ein ausgewogener Cocktail im Shaker kann unausgewogen werden, wenn er zu lange mit Eis im Glas bleibt.",
  },
  {
    question: "Warum schmecken meine selbstgemachten Cocktails nicht wie die in einer Bar?",
    answer: "Es liegt meist an der fehlenden Balance zwischen Zucker und dem pH-Wert der Zitrusfrüchte. Zitronen variieren je nach Jahreszeit in ihrer Säure. Unser Rechner hilft Ihnen, die genaue Menge Sirup basierend auf dem verwendeten Saftvolumen anzupassen.",
  },
  {
    question: "Was sind Brix-Grade und warum sind sie für Cocktails wichtig?",
    answer: "Brix ist eine Skala, die die Menge des gelösten Zuckers in einer Flüssigkeit misst. Ein einfacher Sirup (1:1) liegt bei etwa 50 °Brix; ein Rich Syrup (2:1) überschreitet 66 °Brix. Je höher der Brix-Wert, desto mehr Körper und Süße trägt er pro Volumeneinheit bei. Dieses Wissen ermöglicht es Ihnen, Sirupe in einem Rezept auszutauschen, ohne die Balance zu beeinträchtigen.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Wählen Sie die alkoholische Basis",
    text: "Wählen Sie die Hauptspirituose (Gin, Rum, Whiskey) aus unserer Datenbank, um ihren Körper und Alkoholbeitrag zu kennen.",
  },
  {
    name: "Geben Sie den Säureagenten ein",
    text: "Fügen Sie das Volumen von Zitronensaft, Limettensaft oder Grapefruitsaft hinzu. Der Rechner analysiert die pH-Auswirkung auf die Mischung.",
  },
  {
    name: "Passen Sie die süße Komponente an",
    text: "Geben Sie den Siruptyp (einfach, 2:1, Agave) ein und beobachten Sie, wie sich der Balance-Indikator in Echtzeit bewegt.",
  },
  {
    name: "Perfekte Serviertechnik",
    text: "Überprüfen Sie das endgültige Urteil des Tools: das Sauer-Verhältnis, die geschätzte ABV nach Verdünnung und die Korrekturvorschläge. Mit frischem Eis servieren und Zitrus oder Sirup nach Geschmack feinabstimmen.",
  },
];


const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Molekulare Ingenieurskunst & Flüssigkeitsbalance',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Willkommen im digitalen Labor, wo Intuition auf Mathematik trifft. Dieses Tool ist kein einfaches Rezeptbuch; es ist ein <strong>fortgeschrittener physikalisch-chemischer Simulator</strong>, der dazu entwickelt wurde, die molekulare Struktur Ihrer Cocktails in Echtzeit zu dekonstruieren und zu analysieren. Jeder Tropfen Zitrus, jede Menge Spirituose, jedes Gramm Sirup interagiert nach unveränderlichen Gesetzen der Chemie, die darüber entscheiden, ob Ihr Drink ein Meisterwerk oder ein Fehlschlag wird.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Limette', value: '~6% Säure', icon: 'mdi:fruit-citrus' },
      { label: 'Zitrone', value: '~6% Säure', icon: 'mdi:fruit-citrus' },
      { label: 'Grapefruit', value: '~1-2% Säure', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Die Wissenschaft der Säure',
    icon: 'mdi:fruit-citrus',
    html: 'Säure ist nicht nur ein Geschmack; sie ist das strukturelle Fundament jedes ausgewogenen Cocktails. Ohne die korrekte Säure wird ein Drink flach, eindimensional und vergesslich. Unser Algorithmus unterscheidet zwischen der titrierbaren Säure einer persischen Limette und einer Eureka-Zitrone und berücksichtigt saisonale Schwankungen des pH-Wertes von Zitrusfrüchten, die Ihr Rezept um einen ganzen Balancepunkt verschieben können.'
  },
  {
    type: 'card',
    title: 'Brix Kontrolle (Süße)',
    icon: 'mdi:spoon-sugar',
    html: 'Der Körper und die Textur Ihres Cocktails hängen vollständig von gelöstem Zucker ab. Ein einfacher Sirup (1:1) verhält sich ganz anders als ein Rich Syrup (2:1), Honig oder Agavendicksaft. Jeder Süßstoff hat einen anderen Brix-Grad und eine andere Viskosität, die beeinflussen, wie der Drink am Gaumen haftet. Unser Rechner berechnet die genaue Grammmenge gelösten Zuckers, um das endgültige Mundgefühl und die Süßewahrnehmung vorherzusagen.'
  },
  {
    type: 'card',
    title: 'Thermodynamik und Verdünnung',
    icon: 'mdi:water-percent',
    html: 'Ein geschüttelter Cocktail verdünnt sich je nach Eistemperatur, Schütteltechnik und Dauer um 25-40%. Dieser Wasserzusatz ist kein Fehler; er ist eine wesentliche Zutat, die Aromen öffnet und die Alkoholschärfe abschwächt. Unser Rechner schätzt die endgültige ABV nach Verdünnung, damit Sie Drinks mit genau beabsichtigter Stärke und Geschmacksbalance kreieren können.'
  },
  {
    type: 'title',
    text: 'Jenseits des einfachen Verhältnisses',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Viele Barkeeper lernen die klassische 2:1:1-Regel (2 Teile Spirituose, 1 Teil Sauer, 1 Teil Süß) und behandeln sie als universelle Wahrheit. Aber <strong>Chemie ist weitaus nuancierter</strong>. Eine sizilianische Zitrone enthält andere Säure als eine mexikanische Limette. Ein Triple Sec wie Cointreau verhält sich radikal anders als ein Blue Curaçao. Dasselbe Rezept kann eine Woche perfekt ausgewogen schmecken und die nächste unbarmherzig sauer, einfach wegen saisonaler Fruchtvariation.'
  },
  {
    type: 'paragraph',
    html: 'Dieser Balancer durchbricht diese simplen Grenzen. Indem Sie Ihre spezifischen Zutaten eingeben, konsultieren Sie eine lebende Datenbank, die Säure- und Süßevektoren dynamisch anpasst, um eine präzise sensorische Karte Ihrer Kreation anzubieten. Hören Sie auf zu raten und beginnen Sie, Ihre Cocktails mit der gleichen wissenschaftlichen Genauigkeit zu entwickeln, die Barkeeper in Weltklasse-Etablissements bei jedem Service nutzen.'
  },
  {
    type: 'summary',
    title: 'Für wen ist dieses Tool gedacht?',
    items: [
      'Professionelle Barkeeper: Standardisieren Sie Rezepte und erstellen Sie Signature Menus mit reproduzierbarer Konsistenz.',
      'Heimbegeisterte: Hören Sie auf zu raten und verstehen Sie, warum Ihre Cocktails erfolgreich oder erfolglos sind.',
      'Getränkeentwickler: Prototypisieren Sie schnell neue Geschmackskonzepte, bevor teure Produktionsläufe anfallen.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'Die goldene Zone',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Ziel',
    html: 'Dies ist das ultimative Ziel: ein kontrollierter pH-Wert, bei dem Zucker die Aggression der Säure neutralisiert, ohne die ätherischen Öle und aromatischen Verbindungen der Basisspirituose zu maskieren. Diese präzise Balance ist der Ort, wo unsterbliche Klassiker leben - der Daiquiri, die Margarita, der Sidecar - Drinks, die Jahrzehnte überdauert haben, weil sie den grundlegenden Gesetzen der Geschmackschemie gehorchen.'
  },
  {
    type: 'tip',
    title: 'Expertentipp: Verwenden Sie immer frische Zitrusfrüchte',
    html: 'Pressen Sie Zitrusfrüchte immer in letzter Minute. Zitronensaft und Limettensaft oxidieren schnell und verlieren innerhalb von 20-30 Minuten nach dem Auspressen ihre lebendige Säure. Ein Cocktail aus wirklich frischem Saft hat immer eine Helligkeit und Lebendigkeit am Gaumen, die kein Fertigprodukt replizieren kann. Verwenden Sie Frucht bei Raumtemperatur, um die Saftausbeute zu maximieren.'
  }
];

const schemas: CocktailBalancerLocaleContent['schemas'] = [
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

export const content: CocktailBalancerLocaleContent = {
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
