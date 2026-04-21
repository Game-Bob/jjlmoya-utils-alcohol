import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'jello-shot-calculator';
const title = 'Jello Shot Calculator: De perfecte calculator voor alcohol en gelatine verhouding';
const description = 'Bereken precies hoeveel sterkedrank en gelatine je nodig hebt voor jello shots die echt stollen. Vermijd vloeibare of rubberachtige mislukkingen met wetenschappelijk onderbouwde verhoudingen voor elke alcoholsterkte.';

const ui: JelloShotLabUI = {
  title: 'Jello Shot Calculator',
  description: 'Krijg de perfecte verhouding van gelatine, water en alcohol zodat jouw shots elke keer stollen.',
  liquorBaseLabel: 'Type drank',
  liquorAbvLabel: 'Alcoholsterkte (%)',
  gelatinLabel: 'Type gelatine',
  diluentLabel: 'Waterbasis',
  calculateBtn: 'Berekenen',
  modePrecision: 'Precisiemodus',
  modeIntensity: 'Shot sterkte',
  modeIntensityLight: 'Licht (Makkelijk)',
  modeIntensityBalanced: 'Standaard',
  modeIntensityLimit: 'Maximum (Sterk)',
  partyPlannerTitle: 'Party planner',
  partyPlannerGuestLabel: 'Gasten',
  partyPlannerShotsPerGuest: 'Shots per persoon',
  multiLayerTitle: 'Meerdere lagen',
  howToTitle: 'Hoe maak je ze',
  proTipsTitle: 'Pro tips',
  resultsTitle: 'Jouw recept',
  totalVolumeLabel: 'Totaal volume',
  boilingWaterLabel: 'Heet water',
  alcoholVolumeLabel: 'Sterkedrank',
  packetsNeededLabel: 'Gelatinezakjes',
  chillingTimeLabel: 'Koeltijd',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'zakjes',
  modeParty: 'Feestmodus',
  modeRecipe: 'Receptmodus',
};

const faqTitle = 'Veelgestelde vragen';
const bibliographyTitle = 'Bronnen & Referenties';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'Waarom voorkomt sterk alcohol dat jello shots stollen?',
    answer: 'Ethanol verstoort de waterstofbruggen die de drievoudige helixstructuur van het eiwit in gelatine bij elkaar houden. Wanneer de sterkedrank meer dan circa 35% van het totale volume uitmaakt, kan de eiwitmatrix geen stabiel netwerk vormen en blijft de shot vloeibaar. Hoe hoger het alcoholgehalte van de drank, hoe minder volume je kunt toevoegen voordat je deze grens bereikt.',
  },
  {
    question: 'Wat is de maximale alcoholverhouding voordat jello shots niet meer stollen?',
    answer: 'De veilige bovengrens is ongeveer 30–35% van het totale vloeistofvolume als pure sterkedrank (bij 40% vol). Met een neutrale alcohol van 96% daalt die grens naar ongeveer 15–18% van het totale volume. Onze calculator houdt rekening met het alcoholgehalte van de drank zodat je de stoldrempel nooit overschrijdt.',
  },
  {
    question: 'Maakt het uit welke sterkedrank je gebruikt — wodka, rum of tequila?',
    answer: 'Wat telt is het alcoholgehalte, niet het type drank. Wodka van 40% en rum van 40% gedragen zich identiek in de gelatinematrix. Dranken met een hoger suikergehalte (zoals sommige rums of likeuren) kunnen de textuur licht verbeteren omdat suiker concurreert met ethanol om de waterstofbindingen in het gelatinenetwerk.',
  },
  {
    question: 'Hoe lang blijven jello shots goed in de koelkast?',
    answer: 'Goed gemaakte jello shots zijn 3–5 dagen houdbaar in de koelkast, afgedekt met plasticfolie. Het hoge alcoholgehalte werkt als natuurlijk conserveermiddel. Laat ze niet langer dan 2 uur op kamertemperatuur staan, want de gelatine wordt zacht en bacteriën kunnen zich vermenigvuldigen.',
  },
  {
    question: 'Kan ik mijn jello shots steviger of zachter maken?',
    answer: 'Ja. Gebruik meer gelatine (of een half zakje extra) voor stevigere shots die netjes uit de bekers glijden. Gebruik iets minder voor een zachtere, waggelende textuur. Vervang gelatine nooit door agar-agar als je een smelt-in-de-mond textuur wilt — agar stolt harder en smelt bij een hogere temperatuur.',
  },
  {
    question: 'Kan ik jello shots invriezen om het koelen te versnellen?',
    answer: 'Nee. Invriezen breekt het gelatinenetwerk, wat resulteert in een waterige, korrelige textuur na het ontdooien. Altijd minimaal 4 uur in de koelkast bewaren. Maak ze voor feestjes de avond van tevoren — 8+ uur geeft de beste textuur.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'Kies je sterkedrank', text: 'Voer het alcoholgehalte van je drank in en kies de gewenste shot sterkte. De calculator toont je de maximale hoeveelheid drank die je gelatine kan bevatten.' },
  { name: 'Meng de gelatine', text: 'Giet de berekende hoeveelheid kokend water in een kom. Voeg het gelatinepoeder toe en roer 2 minuten krachtig tot het volledig is opgelost. Voeg nog geen alcohol toe.' },
  { name: 'Voeg de sterkedrank toe', text: 'Laat het gelatinemengsel 5–10 minuten afkoelen totdat het warm maar niet heet is (onder 50 °C). Voeg je sterkedrank toe en roer voorzichtig om bubbels te vermijden.' },
  { name: 'Giet en koel', text: 'Giet in plastic bekers, siliconen vormpjes of kleine shotglaasjes. Zet minimaal 4 uur in de koelkast — een nacht is ideaal. Niet invriezen.' },
];

const bibliography: JelloShotLabLocaleContent['bibliography'] = [
  { name: 'Gelatine — Wikipedia', url: 'https://en.wikipedia.org/wiki/Gelatin' },
  { name: 'Jello Shot — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jello_shot' },
  { name: 'McGee, H. — On Food and Cooking: The Science and Lore of the Kitchen (Scribner, 2004)', url: 'https://www.simonandschuster.com/books/On-Food-and-Cooking/Harold-McGee/9780684800011' },
  { name: 'The Food Lab: Better Home Cooking Through Science — J. Kenji López-Alt (Norton, 2015)', url: 'https://www.seriouseats.com/the-food-lab-better-home-cooking-through-science' },
];

const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'De chemie achter een perfecte jello shot', level: 2 },
  {
    type: 'paragraph',
    html: 'Een jello shot is niet zomaar gearomatiseerde gelatine met alcohol erin — het is een <strong>delicate colloïdale suspensie</strong> waarbij eiwitpolymeren, water en ethanol strijden om waterstofbruggen. De verhouding fout en je eindigt met een plas zoete vloeistof of een rubberachtige schijf die van de tafel ketst. De verhouding goed en je hebt een perfect waggelende shot die in één vloeiende beweging uit het bekertje glijdt.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Licht (Makkelijk)', value: '~30% sterkedrank', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Standaard', value: '~45% sterkedrank', icon: 'mdi:flask-outline' },
      { label: 'Maximum', value: '~55% sterkedrank', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'Wat is Bloom sterkte?',
    icon: 'mdi:molecule',
    html: 'Bloom meet de gelersterkte van een gelatine, typisch variërend van 50 tot 300 Bloom. Supermarktbladgelatine is gewoonlijk 150–200 Bloom. Een hogere Bloom betekent een stevigere gel met dezelfde hoeveelheid poeder, wat inhoudt dat het iets meer alcohol kan verdragen voordat het niet meer stolt. Standaard gelatinezakjes (7 g) zijn gekalibreerd voor circa 240 ml vloeistof.',
  },
  {
    type: 'card',
    title: 'De ethanollimiet',
    icon: 'mdi:alert-circle-outline',
    html: 'Ethanol concurreert met water om de waterstofbindingsplaatsen op de aminozuurketens van collageen. Wanneer ethanol te veel van die plaatsen bezet, kan het eiwit niet meer de stabiele drievoudige helix vormen die gelatine zijn structuur geeft. De praktische limiet is ongeveer <strong>1 deel 40% sterkedrank op 1 deel water</strong> — daarboven stolt je shot niet, hoelang je ook wacht.',
  },
  {
    type: 'tip',
    title: 'Voeg nooit alcohol toe aan kokende gelatine',
    html: 'Alcohol verdampt snel boven 78 °C. Laat je opgeloste gelatine altijd afkoelen tot onder 50 °C voordat je de sterkedrank toevoegt. Deze ene stap is verantwoordelijk voor meer mislukte jello shots dan welke andere fout dan ook.',
  },
  { type: 'title', text: 'Veelvoorkomende fouten oplossen', level: 2 },
  {
    type: 'proscons',
    title: 'Tekenen en oplossingen',
    items: [
      { pro: 'Shot is vloeibaar na 4 uur → Te veel alcohol of verhouding overschreden. Verlaag het volume sterkedrank.', con: 'Shot heeft geen alcoholsmaak → Sterkedrank toegevoegd terwijl vloeistof nog te heet was. Eerst laten afkoelen.' },
      { pro: 'Shot is te rubberachtig → Te veel gelatine. Gebruik de volgende keer een half zakje minder.', con: 'Shot is troebel → Luchtbellen gevangen tijdens het mengen. Voorzichtig roeren en laten rusten voor het gieten.' },
      { pro: 'Shot heeft korrelige textuur → Gelatine niet volledig opgelost. Langer roeren in heet water.', con: 'Shot stolt niet na 8 uur → Ethanollimiet overschreden. Gebruik minder sterkedrank of een lager ABV.' },
    ],
  },
  {
    type: 'summary',
    title: 'Voor wie is dit hulpmiddel?',
    items: [
      'Feestorganisatoren: Bereken precies hoeveel zakjes en hoeveel sterkedrank je nodig hebt voordat je gaat winkelen.',
      'Bartenders: Opschalen naar grootschalige productie met consistente resultaten elke keer.',
      'Thuiskoks: Vermijd de meest voorkomende fouten — vloeibare shots, rubberachtige textuur of nul alcoholsmaak.',
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

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliographyTitle, bibliography, howTo, schemas };
