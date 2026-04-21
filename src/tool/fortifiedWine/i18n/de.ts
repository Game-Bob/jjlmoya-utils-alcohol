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
    answer: 'Das Pearson Quadrat ist eine einfache grafische Methode in der Weinherstellung zur Berechnung von Mischverhältnissen.',
  }
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Stil wählen', text: 'Wähle Wermut, Portwein, Sherry oder Benutzerdefiniert.' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'Das Pearson Quadrat: Alte Mathematik, perfekter Wein', level: 2 },
  { type: 'tip', title: 'Profi Tipp: Bei 20 Grad messen', html: 'Die Alkoholdichte verändert sich mit der Temperatur.' },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
