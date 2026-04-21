import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'rekenmachine-alcoholafbraak';
const title = 'Kater en BVO calculator: Herstelindicator';
const description = 'Bereken uw Bloed Voorzuringsoort (BVO) en de tijd om 0,0 te bereiken met behulp van de formule van Widmark. Plan uw hydratatie vóór het slapen en weet wanneer u volledig hersteld bent.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Biologisch geslacht',
  weightLabel: 'Lichaamsgewicht',
  kgUnit: 'kg',
  addDrinkLabel: 'Drank toevoegen',
  beerLabel: 'Bier',
  wineLabel: 'Wijn',
  spiritLabel: 'Gemixt drankje',
  shotLabel: 'Shot',
  accumulatedLabel: 'Genuttigd aantal dranken',
  emptyListLabel: 'Uw lijst is leeg',
  emptySubLabel: 'Selecteer dranken om te berekenen.',
  estimatedBacLabel: 'Geschatte BVO',
  bacUnit: 'BVO',
  timeToZeroLabel: 'om op 0,0 uit te komen',
  waterAdviceLabel: 'Water (voor het slapen)',
  pillAdviceLabel: 'Supplementen',
  noneAdvice: 'Niet nodig',
  hydrationAdvice: 'Prioriteit: Hydratatie',
  electrolytesAdvice: 'Elektrolyten + Vit. B',
  disclaimerText: 'Deze calculator is een theoretische inschatting. Stofwisseling en voeding variëren het resultaat. Rijd niet onder invloed.',
  drinkUnit: 'drank',
  drinksUnit: 'dranken'
};

const faqTitle = 'Veelgestelde vragen';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "Wat is een standaarddrankenhoeveelheid en hoeveel zit er in elk drankje?",
    answer: "Een standaarddrankenhoeveelheid bevat ongeveer 10 gram zuivere alcohol (EU-definitie; 14g in de VS). Een gewoon biertje (330ml met 5%) bevat ongeveer 1,3 eenheden, een glas wijn (150ml met 12%) ongeveer 1,4 eenheden en een shot (40ml met 40%) ongeveer 1,3 eenheden. De hoeveelheid eenheden in wat u drinkt kennen is essentieel om de resultaten van de calculator correct te interpreteren.",
  },
  {
    question: "Waarom beïnvloedt biologisch geslacht BVO-berekeningen?",
    answer: "Biologisch geslacht beïnvloedt de Widmark-factor 'r', die het totale lichaamsvocht als fractie van het gewicht vertegenwoordigt. Mannen hebben gemiddeld r=0,68 omdat zij proportioneel meer lichaamsvocht hebben. Vrouwen hebben gemiddeld r=0,55 vanwege een hoger percentage lichaamsvet, dat minder alcohol vasthoudt. Dit betekent dat voor dezelfde dranken en lichaamsgewicht vrouwen een hogere BVO bereiken.",
  },
  {
    question: "Kunnen koffie, water of oefening de alcoholafbraak versnellen?",
    answer: "Nee. De lever breekt alcohol af met een constant tempo van ongeveer 0,15 g/L per uur (nulde-orde kinetiek). Koffie kan vermoeidheid maskeren, water helpt bij uitdroging en oefening verbetert het welzijn in het algemeen — maar geen van deze zaken verlaagt uw werkelijke BVO. Alleen tijd breekt alcohol uit het bloed af.",
  },
  {
    question: "Helpt eten na het drinken de BVO te verlagen?",
    answer: "Eten na het drinken verlaagt de alcohol die al in uw bloedbaan aanwezig is niet. Voedsel maakt het meeste verschil voor of tijdens het drinken: voedsel in de maag — vooral proteïnen en vetten — vertraagt de gastric absorption en kan uw piekwaarde van BVO met tot 50% verlagen. Zodra alcohol is opgenomen, kan alleen hepatische stofwisseling deze afbreken.",
  },
  {
    question: "Hoe lang duurt het om 0,0 BVO te bereiken?",
    answer: "Dit hangt af van uw uitgangspunt voor BVO. Deel uw geschatte BVO (in g/L) door 0,15 om de geschatte uren te krijgen. Bijvoorbeeld, een BVO van 1,5 g/L duurt ongeveer 10 uur. De lever stopt nooit: deze breekt alcohol af, zelfs terwijl u slaapt. Maar wees voorzichtig — alcohol kan nog steeds in uw bloed aanwezig zijn, zelfs wanneer u zich volledig hersteld voelt.",
  },
  {
    question: "Is deze calculator 100% betrouwbaar voor het bepalen of u mag rijden?",
    answer: "Nee. Dit hulpmiddel is een theoretische inschatting gebaseerd op de formule van Widmark. Factoren zoals voedselopname, medicijnen, vermoeidheid, genetische ADH-enzymvarianten en stress kunnen uw werkelijke BVO met 20–30% in beide richtingen verschuiven. Gebruik deze calculator nooit om te bepalen of u mag rijden. Als u drinkt, moet u niet rijden — dat is de enige regel zonder uitzonderingsruimte.",
  },
];


const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "Stel uw profiel in",
    text: "Selecteer uw biologische geslacht (beïnvloedt het percentage lichaamsvocht) en uw huidige gewicht.",
  },
  {
    name: "Voeg genuttigd dranken toe",
    text: "Klik op de drankenpictogrammen die u hebt genuttigd. Deze worden in de onderstaande lijst opgeteld.",
  },
  {
    name: "Controleer de veiligheidstijden",
    text: "Let op de geschatte BVO en nog belangrijker de tijd die uw lever nodig heeft om alle ingenomen ethanol af te breken.",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Alcoholstofwisseling: Wetenschap en afbraak',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Begrijpen hoe ons lichaam ethanol verwerkt is essentieel voor veiligheid en voor het beperken van katersymptomen. Onze <strong>alcoholafbreek-calculator</strong> gebruikt de erkende <strong>Widmark-formule</strong> om u een helder beeld van uw metabole toestand te geven. Alcohol wordt niet afgebroken door zweten, water drinken of sporten — alleen tijd en hepatische stofwisseling kunnen uw bloedalcoholconcentratie verlagen.'
  },
  {
    type: 'diagnostic',
    title: 'De farmacokinetiek van BVO',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Biochemie',
    html: 'Alcohol verspreidt zich door lichaamsvocht. Factoren zoals gewicht en de Widmark-coëfficiënt r (0,68 bij mannen / 0,55 bij vrouwen) bepalen de initiële verdunning van ethanol in de bloedbaan. Dit is waarom twee personen van hetzelfde gewicht na dezelfde hoeveelheid dranken heel verschillende BVO-waarden kunnen hebben.'
  },
  {
    type: 'title',
    text: 'Hepatische oxidatie en enzymen',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'De lever breekt 95% van alcohol af via Alcoholdehydrogenase (ADH). Dit proces verloopt met een constant tempo (nulde-orde kinetiek), wat betekent dat het niet kan worden versneld door sporten of koffie. De resterende 5% wordt uitgescheiden via adem, urine en zweet — wat de basis vormt voor alcoholtestapparatuur bij verkeershandhaving.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Afbraaksnelheid', value: '0,15 g/L·h', icon: 'mdi:clock-fast' },
      { label: 'Gastric absorption', value: '20% Ethanol', icon: 'mdi:stomach' },
      { label: 'Aanbevolen hydratatie', value: '1:1 Water/Drank', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Mythen versus werkelijkheid',
    items: [
      { pro: 'Water en elektrolyten vóór het slapen verminderen de ernst van katersymptomen door diurese tegen te gaan.', con: '' },
      { pro: '', con: 'Koude douches: Deze hebben helemaal geen effect op bloedalcoholconcentratie.' },
      { pro: '', con: 'Koffie: Verbergt slaperigheid maar herstelt verloren reflexen of cognitieve functies niet.' }
    ]
  },
  {
    type: 'card',
    title: 'Wat veroorzaakt een kater?',
    icon: 'mdi:alert-decagram',
    html: 'Een kater, wetenschappelijk bekend als veisalgia, wordt veroorzaakt door systemische uitdroging (suppressie van vasopressine door ethanol), ophoping van acetaldehyde (een giftige metaboliet) en een cytokinaire inflammatoire immuunrespons. De glutamaatrebound van de hersenen na alcoholsuppressie draagt ook bij aan angst en gevoeligheid voor licht en geluid de volgende ochtend.'
  },
  {
    type: 'tip',
    title: 'Veiligheid eerst: ken uw limiet',
    html: 'Een BVO van 0,05% beperkt duidelijk het oordeel, tracering en reactietijd. De meeste landen stellen de wettelijke grens voor rijden op tussen 0,05% en 0,08%. Echter, individuele gevoeligheid varieert aanzienlijk — leeftijd, medicijnen, vermoeidheid en genetische ADH-enzymvarianten bepalen allemaal hoe alcohol u persoonlijk beïnvloedt. In geval van twijfel rijdt u niet.'
  },
  {
    type: 'title',
    text: 'De rol van voedsel en absorptietempo',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Eten vóór of tijdens het drinken verandert de alcoholabsorptiekinetiek dramatisch. Voedsel in de maag — vooral proteïnen en vetten — vertraagt de gastric emptying, waardoor de maximale snelheid waarop ethanol in de bloedbaan komt is verkleind. Een persoon die op een lege maag drinkt, kan een piekwaarde van BVO bereiken die 50% hoger is dan dezelfde persoon die voor dezelfde hoeveelheid een volle maaltijd eet. Dit is een van de meest krachtige variabelen die de Widmark-formule niet volledig kan vastleggen. Dit is waarom onze calculator een disclaimer over theoretische inschatting bevat.'
  },
  {
    type: 'paragraph',
    html: 'Het type alcoholisch drankje doet er ook toe, verder dan alleen ABV en volume. Koolzuurhoudende mixers (tonic water, mousserende wijn) versnellen de gastric emptying en duwen alcohol sneller in de bloedbaan. Dranken met zeer hoog ABV (>25%) kunnen gastric motility tijdelijk remmen en vertraagt absorptie. Zoete dranken kunnen het waargenomen effect van alcohol maskeren, wat ertoe leidt dat mensen sneller drinken dan zij zich realiseren. Dit zijn de nuances waarom werkelijke BVO van modelvoorspellingen kan afwijken met 20-30% in beide richtingen.'
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
