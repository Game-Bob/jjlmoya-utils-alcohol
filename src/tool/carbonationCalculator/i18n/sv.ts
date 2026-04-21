import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'ol-karboniserings-och-prynings-kalkylator';
const title = 'Ölkarboniserings och Pryningskalkylator';
const description = 'Beräkna de exakta gramen Dextros, Vassockeror eller DME (Torkat Mjölkextrakt) för flaskfyllning av ditt hembryggt öl. Ange volym, gärningstemperatur och stil för perfekt pryning.';

const ui: CarbonationUI = {
  parametersTitle: 'Parametrar',
  metricBtn: 'Metrisk',
  imperialBtn: 'Imperial',
  volumeLabel: 'Ölvolym',
  maxTempLabel: 'Maximal Temperatur',
  litersUnit: 'Liter',
  celsiusUnit: '°C',
  gallonsUnit: 'Gallon',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'Önskad Karbonisering',
  volUnit: 'CO2 Vol',
  resultsTitle: 'Pryningsresultat',
  tableSugarLabel: 'Vassockor',
  cornSugarLabel: 'Majssockor (Dextros)',
  dmeLabel: 'Torkat Mjölkextrakt (DME)',
  safetyTitle: 'EXPLOSIONSRISK!',
  lowCarbonation: 'LÅG KARBONISERING',
  optimalCarbonation: 'OPTIMAL KARBONISERING',
  highEffervescence: 'HÖG MOUSSERANDE',
  bubblingVisualizationLabel: 'Ungefärlig bubbelvisualiserning'
};

const faqTitle = 'Vanliga Frågor';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "Varför är temperatur viktig för karbonisering?",
    answer: "Det kvarvarande CO2 i ditt öl beror på den högsta temperaturen som uppnåtts efter jäsning: kall vätska behåller mer löst gas än varm vätska. Om du anger en temperatur lägre än den faktiska utgår kalkylatorn från mer kvarvarande CO2 än vad som verkligen finns och föreslår mindre socker än vad som behövs. Om du anger det för högt sker det motsatta — du lägger till mer socker än nödvändigt och skjuter din sats in i explosionsfaran, där övertryck orsakar flaskor att sprängas eller kronor att sprutas av våldsamt.",
  },
  {
    question: "Vilken sockor är bäst för pryning?",
    answer: "Dextros (majssocker) föredras eftersom det är neutralt och löser sig snabbt. Vassockor fungerar bra men kräver cirka 10% mindre vikt.",
  },
  {
    question: "Vad händer om jag tillsätter för mycket pryningssocker?",
    answer: "Över-pryning genererar överskridande CO2-tryck inuti flaskan. Standardglasflaskor misslyckas vid cirka 3,5-4,0 volymer CO2. Bortom denna punkt kan flaskan sprängas eller kronen kan sprutas av våldsamt. Detta är varför precision är viktigt — även 5 extra gram per liter kan skjuta en sats in i farozonen.",
  },
  {
    question: "Hur lång tid tar det för öl att karboniseras efter flaskfyllning?",
    answer: "Mellan 2 och 3 veckor vid rumstemperatur (18-22°C) är det typiska intervallet för jäst att helt fermentera det tillsatta sockret och för CO2 att integrera sig i vätskan. Att öppna en flaska innan processen är klar ger alltid ett vilseledande resultat: ölet kommer att verka underkarboniserat även om karboniseringen fortfarande utvecklas. Med DME kan processen vara något långsamare på grund av komplexiteten i dess jäsbara socker.",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "Mät den verkliga volymen",
    text: "Ange hur många liter (eller gallon) öl du har klart för flaskfyllning efter att jäsningen är slutförd.",
  },
  {
    name: "Definiera jäsningstemperatur",
    text: "Ange den högsta temperatur som ölet nådde under eller efter aktiv jäsning.",
  },
  {
    name: "Välj stil eller CO2-volym",
    text: "Välj önskad karboniseringsnivå. Stilar varierar från 1,5 (Stouts) till 4,5 (Vetöl).",
  },
];


const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ultimat Guide till Karbonisering och Pryning',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Bemästra konsten att pryning och omvandla ditt hembryggt öl från ett platt experiment till en professionell mousserande upplevelse. Pryning innebär att tillsätta en exakt mängd socker så att den kvarvarande jästen i flaskan genererar naturlig CO2 under en sekundär jäsning. För lite socker ger platt öl; för mycket skapar farlig tryckning som kan spränga flaskor. Skillnaden mellan de två är några få gram — därför existerar denna kalkylator.'
  },
  {
    type: 'proscons',
    title: 'Kritiska Framgångsfaktorer',
    items: [
      { pro: 'Temperatur: Kvarvarande CO2 beror på temperaturtoppen efter jäsning.', con: '' },
      { pro: 'Precision: 5 extra gram per liter kan vara skillnaden mellan perfekt karbonisering och en geyser.', con: '' },
      { pro: '', con: 'Oxidation: Undvik att få vätskan att stänka när du överför för att blanda pryningssocker.' }
    ]
  },
  {
    type: 'title',
    text: 'CO2-Volymer efter Ölstil',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'British Stouts', value: '1,5 - 2,0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2,2 - 2,6 Vol', icon: 'mdi:hops' },
      { label: 'German Wheat', value: '3,3 - 4,5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Vilken Sockor Bör Du Välja?',
    icon: 'mdi:corn',
    html: '<strong>Dextros</strong> är neutral och professionell — branschstandarden. <strong>Vassockor</strong> är ekonomisk och effektiv (använd 10% mindre vikt än dextros). <strong>DME (Torkat Mjölkextrakt)</strong> är puristens val men svårare att förutsäga exakt eftersom dess gärningsbarhet varierar beroende på märke och mjölksammansättning.'
  },
  {
    type: 'diagnostic',
    title: 'Säkerhetsvaarning',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Fara',
    html: 'Standardglasflaskor misslyckas vid 3,5-4,0 volymer CO2. Försök inte karbonisera belgiska eller vetöl i tunt glas. Använd alltid flaskor klassificerade för kolsyrade drycker och återanvänd aldrig återvunna kommersiella flaskor som kan ha mikroskopiska strukturskador från tidigare användning.'
  },
  {
    type: 'tip',
    title: 'Pro Tip: Lösa Sockret Korrekt',
    html: 'Koka alltid din pryningsockerlösning (socker upplöst i cirka 250 ml vatten per 20 L sats) i 10 minuter innan du tillsätter det till ölet. Kokande desinfiserar lösningen och garanterar att sockret är helt upplöst och jämnt fördelat över hela satsen, vilket förhindrar heta fläckar som orsakar ojämn karbonisering mellan flaskor.'
  },
  {
    type: 'summary',
    title: 'För Vem är Detta Verktyg?',
    items: [
      'Hembryggarare: Få den exakta beräkningen av pryningssocker för alla satsstorlekar, stilar och jäsningstemperaturer.',
      'Hantverksolentusiaster: Förstå vetenskapen bakom varför kommersiell öl har olika karboniseringsnivåer.',
      'Professionella Bryggarare: Krysskontrollera handberäkningar innan du flaskfyller stora kommersiella satser.'
    ]
  },
  {
    type: 'title',
    text: 'Vetenskapen om Karbonisering: Henrys Lag',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'I sin kärna styrs karbonisering av <strong>Henrys Lag</strong>: mängden gas löst i en vätska är proportionell mot deltrycket för den gasen över vätskan. När du pryner en flaska och förseglar den förbrukar jästen sockret och producerar CO2 i en förseglab miljö. När trycket ökar tvingas gasen tillbaka in i lösningen. Temperaturen vid vilken denna jämvikt uppnås bestämmer den slutliga karboniseringsnivån — det är därför jäsningstemperatur är den mest kritiska variabeln i denna kalkylator.'
  },
  {
    type: 'paragraph',
    html: 'Det kvarvarande CO2 i ditt öl före pryning är inte noll. Varje öl innehåller löst CO2 från jäsningsprocessen, och mängden som behålls beror på den högsta temperatur som ölet nådde. Öl jäst vid 22°C innehåller betydligt mindre kvarvarande CO2 än öl jäst vid 16°C, även om båda nu är kylda. Att inte ta hänsyn till detta restband leder till systematisk överkarbonisering — ett av de vanligaste misstagen bland nybörjar hembryggarare.'
  }
];

const schemas: CarbonationLocaleContent['schemas'] = [
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

export const content: CarbonationLocaleContent = {
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
