import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'wein-aufspritung-rechner';
const title = 'Weinaufspritung und Wermut Rechner: Pearson Quadrat Kalkulator';
const description = 'Berechne genau, wie viel Alkohol du deinem Wein hinzufügen musst, um den gewünschten Alkoholgehalt zu erreichen. Stelle perfekten Wermut, Port und Sherry mit der Pearson Quadrat Methode her.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: 'Was möchtest du herstellen?',
  intentionVermouth: 'Wermut',
  intentionPort: 'Portwein',
  intentionSherry: 'Sherry',
  intentionCustom: 'Benutzerdefiniert',
  modeALabel: 'Aus vorhandenem Wein',
  modeBLabel: 'Zielvolumen am Ende',
  wineSection: 'Basiswein',
  wineVolumeLabel: 'Weinmenge (L)',
  wineAbvLabel: 'Alkoholgehalt Wein (%)',
  spiritSection: 'Aufspritung',
  spiritAbvLabel: 'Alkoholgehalt Sprit (%)',
  brandyPreset: 'Weinbrand (38°)',
  neutralPreset: 'Neutralalkohol (96°)',
  aguardientePreset: 'Aguardiente (42°)',
  targetAbvLabel: 'Ziel Alkoholgehalt (%)',
  targetVolumeLabel: 'Zielvolumen gesamt (L)',
  resultsTitle: 'Dein Rezept',
  addLabel: 'Hinzufügen',
  finalVolumeLabel: 'Endvolumen',
  bottlesSection: 'Benötigte Flaschen',
  copyBtn: 'Rezept kopieren',
  copiedBtn: 'Kopiert!',
  pearsonTitle: 'Pearson Quadrat',
  wineCornerLabel: 'Wein',
  spiritCornerLabel: 'Sprit',
  emptyState: 'Gib deine Werte ein, um das Pearson Quadrat zu sehen',
  errorAbv: 'Der Alkoholgehalt des Sprits muss höher als der Zielwert sein, und der Zielwert muss höher als der Weinalkohol sein.',
  errorMode: 'Gib ein gültiges Volumen ein, um zu berechnen.',
};

const faqTitle = 'Häufig gestellte Fragen';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'Was ist die Pearson Quadrat Methode?',
    answer: 'Das Pearson Quadrat ist eine einfache grafische Methode in der Weinherstellung zur Berechnung von Mischverhältnissen. Du platzierst den Ziel-Alkoholgehalt in der Mitte, den Wein-Alkoholgehalt oben links und den Sprit-Alkoholgehalt unten links.',
  },
  {
    question: 'Was ist der typische Alkoholgehalt für Wermut?',
    answer: 'Traditioneller Wermut liegt zwischen 15% und 18% Vol. Trockener Wermut liegt meist am unteren Ende (15-16%), während süßer Wermut häufig 16-18% Aufspritung aufweist.',
  },
  {
    question: 'Welchen Basiswein sollte ich für Wermut verwenden?',
    answer: 'Ein neutraler, trockener Weißwein mit 10-12% Vol. eignet sich am besten. Der Wein bildet das Fundament; da er mit Kräutern aromatisiert wird, ist ein sauberer, säurebetonter Wein ideal.',
  },
  {
    question: 'Kann ich Neutralalkohol statt Weinbrand verwenden?',
    answer: 'Ja. Neutralalkohol (96% Vol.) bietet maximale Kontrolle und ein neutrales Geschmacksprofil. Weinbrand bringt eigene Holz- und Vanillenoce mit. Portwein verwendet traditionell Brandy.',
  },
  {
    question: 'Wie konserviert die Aufspritung den Wein?',
    answer: 'Wenn der Alkoholgehalt 15-16% übersteigt, wird die Hefegärung gestoppt. Dadurch verlängert sich die Haltbarkeit von aufgespritetem Wein erheblich, da Alkohol als natürliches Konservierungsmittel wirkt.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Stil wählen', text: 'Wähle Wermut, Portwein, Sherry oder Benutzerdefiniert aus, um den Ziel-Alkoholgehalt festzulegen.' },
  { name: 'Weindaten eingeben', text: 'Gib deine Weinmenge und den aktuellen Alkoholgehalt des Basisweins ein.' },
  { name: 'Spirituose festlegen', text: 'Wähle eine Spirituosen-Voreinstellung oder gib den gewünschten Alkoholgehalt an.' },
  { name: 'Rezept ablesen', text: 'Der Rechner zeigt genau an, wie viel Liter Spirituose hinzugefügt werden müssen.' },
];

const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'Das Pearson Quadrat: Alte Mathematik, perfekter Wein', level: 2 },
  {
    type: 'paragraph',
    html: 'Das <strong>Pearson Quadrat</strong> ist eine der ältesten und elegantesten Methoden in der Oenologie. Im 19. Jahrhundert entwickelt, ermöglicht es jedem Winzer die genaue Berechnung von Mischverhältnissen mit einfachen Subtraktionen. Dieses Werkzeug digitalisiert die visuelle Methode in Echtzeit.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Wermut', value: '15-18% Vol.', icon: 'mdi:glass-cocktail' },
      { label: 'Portwein', value: '18-20% Vol.', icon: 'mdi:bottle-wine' },
      { label: 'Sherry', value: '15-17% Vol.', icon: 'mdi:cup-water' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'Warum auf 18% aufspriten?',
    icon: 'mdi:shield-check',
    html: 'Ab etwa 15% Vol. wird <em>Saccharomyces cerevisiae</em> - die Haupthefe des Weins - gehemmt. Bei 18% stoppt die Gärung vollständig. Deshalb behält Portwein seine Restsüße.',
  },
  {
    type: 'tip',
    title: 'Profi Tipp: Bei 20 Grad messen',
    html: 'Die Alkoholdichte verändert sich mit der Temperatur. Offizielle Messungen werden bei 20°C kalibriert. Liegt die Temperatur abweichend vor, wende eine Temperaturkorrektur an.',
  },
  { type: 'title', text: 'Die Renaissance des handwerklichen Wermuts', level: 2 },
  {
    type: 'paragraph',
    html: 'Südeuropa erlebt eine Renaissance der handwerklichen Wermutherstellung. Barcelona, Valencia und San Sebastián haben die Wermut-Kultur neu belebt. Das inspiriert eine neue Generation von Hobby-Produzenten.',
  },
  {
    type: 'summary',
    title: 'Für wen ist dieses Werkzeug gedacht?',
    items: [
      'Hobby-Winzer: Sprite deinen Wein mit präzisen Mengen statt Schätzungen auf.',
      'Wermut-Hersteller: Teste neue Ziel-Alkoholgehalte vor der Produktion großer Chargen.',
      'Ausbilder: Demonstriere das Pearson Quadrat anschaulich in Seminaren.',
    ],
  },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
