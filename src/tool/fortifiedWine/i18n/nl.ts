import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'versterkte-wijn-bouwer';
const title = 'Versterkte Wijn & Vermout Bouwer: Pearson Vierkant Calculator';
const description = 'Bereken precies hoeveel gedestilleerd je aan je wijn moet toevoegen om het gewenste alcoholpercentage te bereiken. Maak perfecte vermout, port en sherry met de Pearson Vierkant methode.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: 'Wat maak je?',
  intentionVermouth: 'Vermout',
  intentionPort: 'Port',
  intentionSherry: 'Sherry',
  intentionCustom: 'Aangepast',
  modeALabel: 'Van wijn die ik heb',
  modeBLabel: 'Gewenst eindvolume',
  wineSection: 'Basiswijn',
  wineVolumeLabel: 'Wijnvolume (L)',
  wineAbvLabel: 'Alcoholpercentage wijn (%)',
  spiritSection: 'Versterkend Gedestilleerd',
  spiritAbvLabel: 'Alcoholpercentage gedestilleerd (%)',
  brandyPreset: 'Brandy (38°)',
  neutralPreset: 'Neutraal (96°)',
  aguardientePreset: 'Aguardiente (42°)',
  targetAbvLabel: 'Doel alcoholpercentage (%)',
  targetVolumeLabel: 'Totaal doelvolume (L)',
  resultsTitle: 'Jouw Recept',
  addLabel: 'Toevoegen',
  finalVolumeLabel: 'Eindvolume',
  bottlesSection: 'Benodigde flessen',
  copyBtn: 'Recept Kopiëren',
  copiedBtn: 'Gekopieerd!',
  pearsonTitle: 'Pearson Vierkant',
  wineCornerLabel: 'Wijn',
  spiritCornerLabel: 'Gedestilleerd',
  emptyState: 'Voer je waarden in om het Pearson Vierkant te zien',
  errorAbv: 'Het alcoholpercentage van het gedestilleerde moet hoger zijn dan het doelpercentage, en het doel moet hoger zijn dan het wijnalcohol.',
  errorMode: 'Voer een geldig volume in om te berekenen.',
};

const faqTitle = 'Veelgestelde Vragen';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'Wat is de Pearson Vierkant methode?',
    answer: 'Het Pearson Vierkant is een eenvoudige grafische methode in de wijnmakerij om mengverhoudingen te berekenen. Je plaatst het doel-alcoholpercentage in het midden van het vierkant, het wijnalcohol linksboven en het gedestilleerd alcohol linksonder. De diagonale verschillen geven de proportionele hoeveelheden van elke vloeistof.',
  },
  {
    question: 'Wat is het typische alcoholpercentage van vermout?',
    answer: 'Traditionele vermout heeft een alcoholpercentage van 15 % tot 18 %. Droge (Franse stijl) vermout zit doorgaans aan de lagere kant (15-16 %), terwijl zoete (Italiaanse stijl) vermout vaak 16-18 % bereikt. Rosé vermout zit er tussenin.',
  },
  {
    question: 'Welke basiswijn moet ik gebruiken voor vermout?',
    answer: 'Traditioneel werkt een neutrale, droge witte wijn van 10-12 % alcohol het beste. De wijn biedt de basis, maar omdat hij gearomatiseerd wordt met kruiden en botanicals, heb je geen dure wijn nodig - een schone, zure basis is ideaal.',
  },
  {
    question: 'Kan ik neutrale alcohol gebruiken in plaats van brandy?',
    answer: 'Ja. Neutrale alcohol (96 % vol.) geeft maximale controle en een zuiverder smaakprofiel. Brandy voegt zijn eigen karakter toe (eik, gedroogd fruit, vanille), wat gewenst of ongewenst kan zijn afhankelijk van de stijl. Port gebruikt traditioneel druivenbrandy, terwijl sommige vermouts neutrale alcohol gebruiken.',
  },
  {
    question: 'Hoe conserveert versterking de wijn?',
    answer: 'Wanneer het alcoholgehalte van wijn de circa 15-16 % overschrijdt, wordt fermentatie door gist geremd - gist kan niet overleven in omgevingen met een hoog alcoholgehalte. Daarom hebben versterkte wijnen een veel langere houdbaarheid dan gewone wijn. De alcohol werkt als natuurlijk conserveermiddel tegen bederf door gist en bacteriën.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Stijl kiezen', text: 'Selecteer Vermout, Port, Sherry of Aangepast om het aanbevolen doel-alcoholpercentage automatisch in te vullen.' },
  { name: 'Wijngegevens invoeren', text: 'Voer het volume van je basiswijn in (of het gewenste eindvolume in Modus B) en het huidige alcoholpercentage.' },
  { name: 'Gedestilleerd instellen', text: 'Kies een gedestilleerd preset of voer een aangepast alcoholpercentage in. Het Pearson Vierkant wordt in realtime bijgewerkt.' },
  { name: 'Recept aflezen', text: 'De calculator toont precies hoeveel milliliter gedestilleerd je moet toevoegen en het eindvolume.' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'Het Pearson Vierkant: Eeuwenoude wiskunde, perfecte wijn', level: 2 },
  { type: 'paragraph', html: 'Het <strong>Pearson Vierkant</strong> is een van de oudste en meest elegante hulpmiddelen in de wijnwiskunde. Ontwikkeld in de 19e eeuw stelt het elke wijnmaker - professioneel of amateur - in staat mengverhoudingen te berekenen met niets meer dan aftrekken. Ons hulpmiddel digitaliseert deze visuele methode en voegt realtime feedback toe, zodat je minder tijd besteedt aan berekenen en meer aan het maken.' },
  { type: 'stats', items: [{ label: 'Vermout', value: '15-18 % vol.', icon: 'mdi:glass-cocktail' }, { label: 'Port', value: '18-20 % vol.', icon: 'mdi:bottle-wine' }, { label: 'Sherry', value: '15-17 % vol.', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: 'Waarom versterken op 18 %?', icon: 'mdi:shield-check', html: 'Boven circa 15 % vol. wordt <em>Saccharomyces cerevisiae</em> - de primaire wijngist - geremd. Tegen de tijd dat je 18 % bereikt, is de fermentatie volledig gestopt. Daarom behoudt Port restsuiker: gedestilleerd wordt halverwege de fermentatie toegevoegd, waardoor de gist wordt gedood voordat alle suiker is omgezet.' },
  { type: 'tip', title: 'Pro Tip: Meten bij 20 °C', html: 'Alcoholdichtheid verandert met temperatuur. Officiële alcoholmetingen zijn gekalibreerd op 20 °C. Als je gedestilleerde of wijn aanzienlijk warmer of kouder is, pas dan een correctiefactor toe: ongeveer +0,04 % vol. per °C onder 20 °C en −0,04 % per °C erboven.' },
  { type: 'title', text: 'De Ambachtelijke Vermout Renaissance', level: 2 },
  { type: 'paragraph', html: 'Zuid-Europa beleeft een ambachtelijke vermout renaissance. Barcelona, Valencia en San Sebastián hebben <em>la hora del vermut</em> heroverd als culturele instelling, en kleine producenten in Spanje, Italië en Frankrijk bottelen opmerkelijke expressies. Dit heeft een nieuwe generatie thuisproducenten gecreëerd die technische hulpmiddelen willen die passen bij hun ambities.' },
  { type: 'summary', title: 'Voor wie is dit hulpmiddel?', items: ['Thuiswijnmakers: Versterk je oogst met precisie in plaats van gissen.', 'Ambachtelijke vermoutproducenten: Prototype nieuwe alcoholdoelen voordat je opschaalt naar volledige batches.', 'Spirits-docenten: Demonstreer de Pearson Vierkant methode visueel in workshops.'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
