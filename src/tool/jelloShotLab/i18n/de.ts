import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'jello-shot-rechner';
const title = 'Jello Shot Rechner: Der perfekte Gelatine und Alkohol Verhältnis Kalkulator';
const description = 'Berechne genau, wie viel Alkohol und Gelatine du für Jello Shots brauchst, die wirklich fest werden. Vermeide flüssige oder gummiartige Misserfolge mit wissenschaftlich fundierten Verhältnissen für jede Alkoholstärke.';

const ui: JelloShotLabUI = {
  title: 'Jello Shot Rechner',
  description: 'Erhalte das perfekte Verhältnis von Gelatine, Wasser und Alkohol, damit deine Shots jedes Mal fest werden.',
  liquorBaseLabel: 'Spirituosenart',
  liquorAbvLabel: 'Alkoholstärke (%)',
  gelatinLabel: 'Gelatinetyp',
  diluentLabel: 'Wasserbasis',
  calculateBtn: 'Berechnen',
  modePrecision: 'Präzisionsmodus',
  modeIntensity: 'Shot-Stärke',
  modeIntensityLight: 'Leicht (Einfach)',
  modeIntensityBalanced: 'Standard',
  modeIntensityLimit: 'Maximum (Stark)',
  partyPlannerTitle: 'Party-Planer',
  partyPlannerGuestLabel: 'Gäste',
  partyPlannerShotsPerGuest: 'Shots pro Person',
  multiLayerTitle: 'Mehrschichtig',
  howToTitle: 'So werden sie gemacht',
  proTipsTitle: 'Profi-Tipps',
  resultsTitle: 'Dein Rezept',
  totalVolumeLabel: 'Gesamtvolumen',
  boilingWaterLabel: 'Heißes Wasser',
  alcoholVolumeLabel: 'Spirituose',
  packetsNeededLabel: 'Gelatinepäckchen',
  chillingTimeLabel: 'Kühlzeit',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'Päckchen',
  modeParty: 'Party-Modus',
  modeRecipe: 'Rezept-Modus',
};

const faqTitle = 'Häufig gestellte Fragen';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'Warum verhindert hochprozentiger Alkohol, dass Jello Shots fest werden?',
    answer: 'Ethanol stört die Wasserstoffbrückenbindungen, die die Dreifachhelix-Proteinstruktur der Gelatine zusammenhalten. Wenn der Spirituosenanteil am Gesamtvolumen etwa 35 % überschreitet, kann das Proteinnetzwerk keine stabile Struktur bilden und der Shot bleibt flüssig. Je höher der ABV der Spirituose, desto weniger Volumen kann man hinzufügen, bevor man diese Grenze erreicht.',
  },
  {
    question: 'Was ist das maximale Alkoholverhältnis, bevor Jello Shots nicht mehr fest werden?',
    answer: 'Die sichere Obergrenze liegt bei etwa 30-35 % des gesamten Flüssigkeitsvolumens als pure Spirituose (bei 40 % ABV). Bei einem 96 %igen Neutralalkohol sinkt diese Grenze auf etwa 15-18 % des Gesamtvolumens. Unser Rechner berücksichtigt den ABV der Spirituose, sodass du die Gelierschwelle nie überschreitest.',
  },
  {
    question: 'Spielt es eine Rolle, welche Spirituose ich verwende - Wodka, Rum oder Tequila?',
    answer: 'Entscheidend ist der ABV, nicht die Art der Spirituose. Wodka mit 40 % und Rum mit 40 % verhalten sich im Gelatinegitter identisch. Spirituosen mit höherem Zuckergehalt (wie manche Rums oder Liköre) können die Textur leicht verbessern, da Zucker mit Ethanol um die Wasserstoffbrückenbindungen im Gelatinegitter konkurriert.',
  },
  {
    question: 'Wie lange sind Jello Shots im Kühlschrank haltbar?',
    answer: 'Richtig hergestellte Jello Shots halten sich 3-5 Tage im Kühlschrank, abgedeckt mit Frischhaltefolie. Der hohe Alkoholgehalt wirkt als natürliches Konservierungsmittel. Lass sie nicht länger als 2 Stunden bei Zimmertemperatur stehen, da die Gelatine weich wird und sich Bakterien vermehren können.',
  },
  {
    question: 'Kann ich meine Jello Shots fester oder weicher machen?',
    answer: 'Ja. Verwende mehr Gelatine (oder ein halbes Päckchen extra) für festere Shots, die sauber aus den Bechern gleiten. Verwende etwas weniger für eine weichere, wackelige Textur. Ersetze Gelatine niemals durch Agar-Agar, wenn du eine glatte, auf der Zunge zerschmelzende Textur möchtest - Agar wird fester und schmilzt bei höherer Temperatur.',
  },
  {
    question: 'Kann ich Jello Shots einfrieren, um das Kühlen zu beschleunigen?',
    answer: 'Nein. Durch das Einfrieren bricht das Gelatinegitter, was beim Auftauen zu einer wässrigen, körnigen Textur führt. Immer mindestens 4 Stunden im Kühlschrank lagern. Für Partys bereite sie am Vorabend zu - 8+ Stunden ergibt die beste Textur.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'Wähle deine Spirituose', text: 'Gib den ABV deiner Spirituose ein und wähle die gewünschte Shot-Stärke. Der Rechner zeigt dir die maximale Menge an Spirituose, die deine Gelatine aufnehmen kann.' },
  { name: 'Gelatine anrühren', text: 'Gieß die berechnete Menge kochendes Wasser in eine Schüssel. Füge das Gelatinepulver hinzu und rühre 2 Minuten lang kräftig, bis es vollständig aufgelöst ist. Noch keinen Alkohol hinzufügen.' },
  { name: 'Spirituose hinzufügen', text: 'Lass die Gelatinmischung 5-10 Minuten abkühlen, bis sie warm, aber nicht heiß ist (unter 50 °C). Füge deine Spirituose hinzu und rühre vorsichtig, um Blasen zu vermeiden.' },
  { name: 'Eingießen und kühlen', text: 'In Plastikbecher, Silikonformen oder kleine Schnapsgläser füllen. Mindestens 4 Stunden kühlen - über Nacht ist ideal. Nicht einfrieren.' },
];


const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'Die Chemie hinter einem perfekten Jello Shot', level: 2 },
  {
    type: 'paragraph',
    html: 'Ein Jello Shot ist nicht nur aromatisierte Gelatine mit Alkohol - er ist eine <strong>empfindliche kolloidale Suspension</strong>, bei der Proteinpolymere, Wasser und Ethanol um Wasserstoffbrückenbindungen konkurrieren. Stimmt das Verhältnis nicht, erhält man eine Pfütze süßer Flüssigkeit oder eine gummiartige Scheibe, die vom Tisch springt. Stimmt es, hat man einen perfekt wackeligen Shot, der in einer sauberen Bewegung aus dem Becher gleitet.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Leicht (Einfach)', value: '~30 % Spirituose', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Standard', value: '~45 % Spirituose', icon: 'mdi:flask-outline' },
      { label: 'Maximum', value: '~55 % Spirituose', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'Was ist Bloom Festigkeit?',
    icon: 'mdi:molecule',
    html: 'Bloom ist das Maß für die Gelierkraft einer Gelatine und reicht typischerweise von 50 bis 300 Bloom. Supermarkt-Blattgelatine hat üblicherweise 150-200 Bloom. Eine höhere Bloom-Zahl bedeutet ein festeres Gel bei gleicher Pulvermenge, was bedeutet, dass es etwas mehr Alkohol verträgt, bevor es nicht mehr geliert. Standard-Gelatinepäckchen (7 g) sind für etwa 240 ml Flüssigkeit kalibriert.',
  },
  {
    type: 'card',
    title: 'Die Ethanol Grenze',
    icon: 'mdi:alert-circle-outline',
    html: 'Ethanol konkurriert mit Wasser um die Wasserstoffbrückenbindungsstellen an den Aminosäureketten des Kollagens. Wenn Ethanol zu viele dieser Stellen besetzt, kann das Protein nicht mehr die stabile Dreifachhelix bilden, die der Gelatine ihre Struktur gibt. Die praktische Grenze liegt bei etwa <strong>1 Teil 40%iger Spirituose auf 1 Teil Wasser</strong> - danach wird dein Shot nicht mehr fest, egal wie lange du wartest.',
  },
  {
    type: 'tip',
    title: 'Niemals Alkohol zu kochender Gelatine geben',
    html: 'Alkohol verdampft schnell über 78 °C. Lass deine aufgelöste Gelatine immer auf unter 50 °C abkühlen, bevor du die Spirituose einrührst. Dieser einzelne Schritt ist für mehr misslungene Jello Shots verantwortlich als jeder andere Fehler.',
  },
  { type: 'title', text: 'Häufige Fehler beheben', level: 2 },
  {
    type: 'proscons',
    title: 'Anzeichen und Lösungen',
    items: [
      { pro: 'Shot ist nach 4 Stunden flüssig → Zu viel Alkohol oder Verhältnis überschritten. Spirituosenmenge reduzieren.', con: 'Shot schmeckt nicht nach Alkohol → Spirituose wurde zu heißer Flüssigkeit hinzugefügt. Abkühlen lassen.' },
      { pro: 'Shot ist zu gummiartig → Zu viel Gelatine. Beim nächsten Mal ein halbes Päckchen weniger verwenden.', con: 'Shot ist trüb → Beim Rühren eingeschlossene Blasen. Sanft rühren und vor dem Eingießen ruhen lassen.' },
      { pro: 'Shot hat körnige Textur → Gelatine nicht vollständig aufgelöst. Länger in heißem Wasser rühren.', con: 'Shot wird nach 8 Stunden nicht fest → Ethanolgrenze überschritten. Weniger Spirituose oder niedrigeren ABV verwenden.' },
    ],
  },
  {
    type: 'summary',
    title: 'Für wen ist dieses Tool?',
    items: [
      'Party-Gastgeber: Berechne genau, wie viele Päckchen und wie viel Spirituose du vor dem Kauf brauchst.',
      'Barkeeper: Hochskalieren auf Großproduktion mit konsistenten Ergebnissen jedes Mal.',
      'Hobbyköche: Vermeide die häufigsten Fehler - flüssige Shots, gummiartige Textur oder null Alkoholgeschmack.',
    ],
  },
];

const schemas: JelloShotLabLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
