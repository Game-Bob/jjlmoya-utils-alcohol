import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'cocktail-evenwicht';
const title = 'Cocktail Balancer: De Zuurwet';
const description = 'Bereken het perfecte evenwicht tussen zoet en zuur voor je cocktails. Beheers de gulden snede van mixologie.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Recepten',
  saveBtn: 'Opslaan',
  resetBtn: 'Resetten',
  emptyStateTitle: 'Je werkbank is leeg',
  emptyStateDescription: 'Voeg ingrediënten toe om je cocktailbalans in real-time te analyseren.',
  addBtn: 'Ingrediënt toevoegen',
  addMoreBtn: 'Nog een ingrediënt toevoegen',
  flavorProfileTitle: 'Smaakprofiel',
  volLabel: 'Volume',
  sugarLabel: 'Suiker',
  colorLabel: 'Kleur',
  sourLawTitle: 'Zuurwet',
  acidDryLabel: 'Zuur (Droog)',
  balanceLabel: 'Evenwicht',
  sweetLabel: 'Zoet',
  aiSuggestionTitle: 'AI-voorstel',
  addIngredientTitle: 'Ingrediënt toevoegen',
  searchPlaceholder: 'Zoeken op rum, limoen, siroop...',
  presetsTitle: 'Recepten & voorinstellingen',
  savedSectionTitle: 'Mijn opgeslagen',
  classicsSectionTitle: 'Klassieken',
  confirmDeleteTitle: 'Alles verwijderen?',
  confirmDeleteText: 'Dit verwijdert alle ingrediënten van je werkbank. Deze actie kan niet ongedaan gemaakt worden.',
  cancelBtn: 'Annuleren',
  deleteBtn: 'Verwijderen',
  verdictSpiritSeco: 'Gedistilleerd / Droog',
  verdictSoloDulce: 'Alleen Zoet (Old Fashioned)',
  verdictMuyAcido: 'Te zuur / Botten droog',
  verdictAcido: 'Zuur / Hartigs',
  verdictEquilibrado: 'Gebalanceerd (Zuur)',
  verdictDulce: 'Zoet / Commercieel',
  verdictEmpalagoso: 'Te zoet',
  fixAddBitters: 'Bitterheid ontbreekt',
  fixAddSugar: 'Te zuur',
  fixAddAcid: 'Te zoet'
};

const faqTitle = 'Veelgestelde vragen';
const bibliographyTitle = 'Bibliografie & Bronnen';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "Wat is de 'Zuurwet'?",
    answer: "Het is de gulden snede van mixologie die drie elementen in evenwicht brengt: de sterke basis (sterkedrank), het zuur (citrusvruchten) en het zoet (siropen). Een klassiek recept volgt meestal de verhouding 2:1:1 (Sterk:Zuur:Zoet), hoewel dit varieert afhankelijk van sterkte en dichtheid.",
  },
  {
    question: "Hoe beïnvloedt verdunning het cocktail-evenwicht?",
    answer: "Ijs koelt niet alleen; het voegt water toe (verdunning) die de aromas van de sterkedrank opent en de pieken van zuurheid en zoetheid verzacht. Een gebalanceerde cocktail in de shaker kan uit balans raken als hij te lang met ijs in het glas blijft.",
  },
  {
    question: "Waarom smaken mijn huisgemaakte cocktails niet zoals die in een bar?",
    answer: "Dit is meestal te wijten aan het gebrek aan evenwicht tussen suiker en de pH van de citrusvruchten. Citroenen variëren in zuurgraad afhankelijk van het seizoen. Onze rekenmachine helpt je de exacte hoeveelheid siroop aan te passen op basis van het volume sap dat je gebruikt.",
  },
  {
    question: "Wat zijn Brix-graden en waarom zijn ze belangrijk in cocktails?",
    answer: "Brix is een schaal die de hoeveelheid opgelost suiker in een vloeistof meet. Een eenvoudige siroop (1:1) ligt rond de 50 °Brix; een rijke siroop (2:1) overschrijdt 66 °Brix. Hoe hoger de Brix, hoe meer lichaam en zoetheid het per volume-eenheid bijdraagt. Dit weten stelt je in staat siropen in een recept uit te wisselen zonder het evenwicht te verstoren.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Selecteer de alcoholische basis",
    text: "Kies de hoofdsterkedrank (Jenever, Rum, Whiskey) uit onze database om het lichaam en alcoholbijdrage ervan te kennen.",
  },
  {
    name: "Voer de zure stof in",
    text: "Voeg het volume citroensap, limoensap of grapefruitrsap toe. De rekenmachine analyseert de pH-impact op het mengsel.",
  },
  {
    name: "Pas de zoete component aan",
    text: "Voer het type siroop in (eenvoudig, 2:1, agave) en kijk hoe de balans-indicator in real-time beweegt.",
  },
  {
    name: "Perfect serveren",
    text: "Controleer het eindoordeel van het gereedschap: de zuurbegrafenis, de geschatte ABV na verdunning en correctievoorslagen. Serveer met vers ijs en verfijn citrusvruchten of siroop naar smaak.",
  },
];

const bibliography: CocktailBalancerLocaleContent['bibliography'] = [
  {
    name: "Liquid Intelligence: The Art and Science of the Perfect Cocktail",
    url: "https://www.indigo.ca/en-ca/liquid-intelligence-the-art-and-science-of-the-perfect-cocktail/9780393089035.html",
  },
  {
    name: "Cocktails: The Science of Shaking",
    url: "https://cookingissues.com/2009/07/22/cocktails-the-science-of-shaking/",
  },
  {
    name: "Cocktail Balance - Difford's Guide",
    url: "https://www.diffordsguide.com/encyclopedia/1066/cocktails/cocktail-balance",
  },
];

const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Moleculaire technologie en vloeistofbalans',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Welkom in het digitale laboratorium waar intuïtie wiskunde ontmoet. Dit gereedschap is geen eenvoudig receptenboek; het is een <strong>geavanceerde fysisch-chemische simulator</strong> ontworpen om de moleculaire structuur van je cocktails in real-time te deconstrueren en analyseren. Elke druppel citrusvruchten, elke maat sterkedrank, elke gram siroop werkt volgens onveranderlijke chemische wetten die bepalen of je drank een meesterwerk of een teleurstellend fiasco zal zijn.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Limoen', value: '~6% Zuur', icon: 'mdi:fruit-citrus' },
      { label: 'Citroen', value: '~6% Zuur', icon: 'mdi:fruit-citrus' },
      { label: 'Grapefruit', value: '~1-2% Zuur', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'De wetenschap van zuurheid',
    icon: 'mdi:fruit-citrus',
    html: 'Zuurheid is niet alleen een smaak; het is de structurele ruggengraat van elke gebalanceerde cocktail. Zonder de juiste zuurheid wordt een drankje plat, eendimensionaal en onvergetelijk. Ons algoritme onderscheidt de titreerbare zuurheid van een Perzische limoen versus een Eureka-citroen en houdt rekening met seizoensgebonden variaties in pH van citrusvruchten die je recept met een volledig balancepunt kunnen verschuiven aan het verhemelte.'
  },
  {
    type: 'card',
    title: 'Brix controle (Zoetheid)',
    icon: 'mdi:spoon-sugar',
    html: 'Het lichaam en de textuur van je cocktail hangen volledig af van opgelost suiker. Een eenvoudige siroop (1:1) gedraagt zich heel anders dan een rijke siroop (2:1), honing of agavenectar. Elke zoetmaker heeft een ander Brix-getal en een ander soortelijk gewicht die bepalen hoe de drank je tong bekleedt. Onze rekenmachine berekent de exacte grammen opgelost suiker om het uiteindelijke mondgevoel en de zoetewaarneming te voorspellen.'
  },
  {
    type: 'card',
    title: 'Thermodynamica en verdunning',
    icon: 'mdi:water-percent',
    html: 'Een geschudde cocktail verdunt 25-40% afhankelijk van ijstemperatuur, schuddingstechniek en duur. Deze waterbijdrage is geen fout; het is een essentieel ingrediënt dat aromas opent en de rand van alcohol verzacht. Onze rekenmachine schat de uiteindelijke ABV na verdunning, dus je kunt dranken ontwerpen met precies de beoogde sterkte en smaakevenwicht.'
  },
  {
    type: 'title',
    text: 'Buiten de basisratio',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Veel barkeepers leren de klassieke 2:1:1-regel (2 delen sterkedrank, 1 deel zuur, 1 deel zoet) en behandelen deze als universale waarheid. Echter, <strong>chemie is veel genuanceerder</strong>. Een citroen uit Sicilië bevat een ander zuurgehalte dan een limoen uit Mexico. Een triple sec zoals Cointreau gedraagt zich radicaal anders dan een blauwe Curaçao. Hetzelfde recept kan één week perfect gebalanceerd smaken en volgende week genadeloos zuur, simpelweg vanwege seizoensgebonden fruitvariatie.'
  },
  {
    type: 'paragraph',
    html: 'Deze balancer doorbreekt deze simplistische barrières. Door je specifieke ingrediënten in te voeren, raadpleeg je een levende database die zuurgraad- en zoetheids-vectoren dynamisch aanpast om een precieze sensorische kaart van je creatie aan te bieden. Hou op met gissen en begin je cocktails met dezelfde wetenschappelijke nauwkeurigheid te ontwerpen die barkeepers in toonaangevende gelegenheden elke service gebruiken.'
  },
  {
    type: 'summary',
    title: 'Voor wie is dit gereedschap bestemd?',
    items: [
      'Professionele barkeepers: Standaardiseer recepten en creëer signature menu\'s met reproduceerbare consistentie.',
      'Huisenthousiasten: Hou op met gissen en begin te begrijpen waarom je cocktails slagen of mislukken.',
      'Drankenitwikkelaars: Prototype snel nieuwe smaakconcepten voordat dure productiereeksen volgen.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'De gouden zone',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Doel',
    html: 'Dit is het ultieme doel: een gecontroleerde pH waarbij suiker de agressie van zuur neutraliseert zonder de essentiële oliën en aromatische stoffen van de basissterkedrank te maskeren. Dit precieze evenwicht is waar onsterfelijke klassiekers leven — de Daiquiri, de Margarita, de Sidecar — dranken die decennia hebben overleefd omdat ze de fundamentele wetten van smaakchemie gehoorzamen.'
  },
  {
    type: 'tip',
    title: 'Deskundig advies: gebruik altijd verse citrusvruchten',
    html: 'Pers citrusvruchten altijd op het laatste moment. Citroenen en limoensap oxideren snel en verliezen binnen 20-30 minuten na het persen hun levende zuurheid. Een cocktail gemaakt met echt vers sap heeft altijd een helderheid en vitaliteit aan het verhemelte die geen afgeperst product kan repliceren. Gebruik fruit op kamertemperatuur om de sapopbrengst te maximaliseren.'
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
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
