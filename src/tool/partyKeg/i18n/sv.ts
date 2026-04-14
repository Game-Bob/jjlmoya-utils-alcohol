import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'ol-iskalkylator-fest';
const title = 'Ölkalkylator för Fester: Mängd Per Person för Bröllop och Födelsedagar';
const description = 'Gratis verktyg för att beräkna hur mycket öl och is du behöver baserat på gäster, varaktighet och temperatur. Perfekt för bröllop, födelsedagar och utomhusevenemang.';

const ui: PartyKegUI = {
  calcStockTitle: 'Lagerkalkylator',
  beerIceSub: 'Öl & Is för Event',
  guestsLabel: 'Gäster',
  durationLabel: 'Varaktighet',
  hoursUnit: 'Timmar',
  intensityLabel: 'Intensitet',
  chillLabel: 'Chill',
  standardLabel: 'Standard',
  partyLabel: 'Party',
  tempLabel: 'Temperatur',
  estimatedVolLabel: 'Beräknad Volym',
  kegsLabel: 'Fat',
  iceRequiredLabel: 'Is Behövd',
  bagsLabel: 'Påsar',
  visualizationTitle: 'Lagervisualisering',
  optimalMsg: 'Optimala Förhållanden',
  highMeltMsg: 'Högt Smältningstal Upptäckt',
  highEfficiencyMsg: 'Kall / Hög Effektivitet'
};

const faqTitle = 'Vanliga Frågor';
const bibliographyTitle = 'Bibliografi och Källor';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "Hur mycket öl dricker en person på 4 timmar?",
    answer: "I genomsnitt, räkna med 5 öl per person för ett 4-timmar-event. Det förutsätter 2 drycker första timmen och 1 för varje återstående timme.",
  },
  {
    question: "Hur mycket is behöver jag för 100 öl?",
    answer: "Du behöver ungefär 15–20 kilogram is (7–10 påsar). Praktiska regeln är 0,75 kg is per liter dryck under normala förhållanden. På sommaren eller utomhus över 25°C, öka till 1 kg per liter: omgivningsvärmen påskyndar smältningen och du kommer att få slut på is mycket snabbare än förväntat.",
  },
  {
    question: "Vad är skillnaden mellan ett standardfat och ett festfat?",
    answer: "Ett standard-handelsfat innehåller 50 liter, vilket ger cirka 200 portioner (250 ml var). Ett festfat (mini-fat) innehåller vanligtvis 5 liter — cirka 20 portioner. Att känna till dessa storlekar hjälper dig att omvandla kalkylatorns liter-resultat till antalet behållare du behöver köpa.",
  },
  {
    question: "Varför behöver jag så mycket is om ölen redan är kall?",
    answer: "För att kyling och underhåll är två separata processer. Att föra en burk från 25°C till 4°C förbrukar isens latenta smältvärme: cirka 334 kJ/kg. En gång kall fortsätter isen att arbeta för att kompensera för omgivningsvärmen. En sommardag på 35°C kan värmeavgiven till kylfällan smälta 1 kg is per liter dryck var 2–3:e timme. Det är därför förkyling av dryckerna innan festen halverar din totala isförbrukning.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "Uppskatta antal gäster",
    text: "Definiera hur många människor som kommer att deltaga. Vår kalkylator justerar mängderna baserat på statistiska konsumtionsgenomsnitt.",
  },
  {
    name: "Definiera varaktighet och intensitet",
    text: "Ange hur många timmar evenemanget kommer att pågå och 'flödet' på festen (chill, standard eller intensiv).",
  },
  {
    name: "Justera för omgivningstemperatur",
    text: "Utomhustemperaturen är nyckeln för isberäkningen. Ju varmare det är, desto högre smältningshastighetsmå vi kompensera för.",
  },
];

const bibliography: PartyKegLocaleContent['bibliography'] = [
  {
    name: "Event Planning: Alcohol & Bar Calculations - Spruce Eats",
    url: "https://www.thespruceeats.com/stock-your-bar-for-a-party-760394",
  },
  {
    name: "Thermodynamics of Ice Melting - Engineering Toolbox",
    url: "https://www.engineeringtoolbox.com/saturated-ice-steam-d_970.html",
  },
];

const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Hur Mycket Öl och Is Behöver Jag Till Min Fest?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Miljonfrågan när du organiserar något event: <strong>Hur många liter öl ska jag köpa?</strong> För lite är en katastrof, men för mycket är onödiga utgifter. Det här verktyget hjälper dig att beräkna exakt mängd alkohol och, viktigast av allt, <strong>hur många ispåsar</strong> du behöver för att hålla det kallt. Professionella caterare och eventplanerare använder statistiska konsumtionsmodeller — och nu kan du också, helt gratis.'
  },
  {
    type: 'title',
    text: 'Konsumtionsformeln Per Person',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'För att uppskatta alkoholen som behövs använder professionella caterare en formel baserad på "Konsumtionstakt Per Timme". Det är inte en exakt vetenskap, men statistiken visar att på ett standardfest konsumeras cirka 1,5 enheter per timme per person. Faktorer som omgivningstemperatur, matkvalitet och festavens sociala energi förändrar alla detta basnummer.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Chill-konsumtion', value: '1 dryck/timme', icon: 'mdi:tea-outline' },
      { label: 'Standardfest', value: '1,5 drycker/timme', icon: 'mdi:glass-mug-variant' },
      { label: 'Bröllop / Festival', value: '2,5+ drycker/timme', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: 'Isens Fysik',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Termodynamik',
    html: 'Att beräkna is är där de flesta värdinnor misslyckas. Is har två funktioner: Kylning (föra öl från 25°C till 4°C) och Underhål (bekämpa omgivningsvärmen). Vid temperaturer över 30°C fördubblas smälthastigheten. En full ispåse i direktsol kan försvinna på mindre än 20 minuter, vilket gör att dryckerna blir varma innan festen når sin höjdpunkt.'
  },
  {
    type: 'tip',
    title: 'Proffs Tips för att Spara Is',
    html: 'Håll fat och burkar i skuggan innan du lägger till is. Om dryckerna är varma i solen försvinner de första 50% av din ispåse på 10 minuter genom att bara utbyta latent värme. Börja med förkyld dryck för att drastiskt minska hur mycket is du faktiskt behöver köpa.'
  },
  {
    type: 'title',
    text: 'Referensdata för Logistik',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Ett standard 50L-fat ger cirka 200 portioner. En typisk ispåse väger 2 kg. Med dessa siffror kan du planera den transport och lagring som krävs för ditt event utan sista-minuten-överraskningar. Räkna med issmältning under transport — en 30-minuterstur sommartid kan kosta dig en hel påse innan festen börjar.'
  },
  {
    type: 'summary',
    title: 'För Vem Är Det Här Verktyget?',
    items: [
      'Privata Festvärdinnor: Sluta gissa och köp självsäkert exakt vad du behöver till nästa fest.',
      'Eventplanerare: Använd exakta konsumtionsmodeller för att citera kunder och planera barpersonal professionellt.',
      'Lokalbehållare: Standardisera lagerberäkningar över återkommande event med olika gästantal.'
    ]
  },
  {
    type: 'paragraph',
    html: 'En ofta förbisedd variabel är <strong>gästernas bortfallstal</strong>. På de flesta fester går 10–15% av gästerna tidigt och 10% kanske inte dricker alls. Kalkylatorn använder ett försiktigt buffert så att du aldrig blir utan, men också inte sittar med ett enormt överskud. Att förstå dessa justeringar hjälper dig att finjustera uppskattningen för din specifika grupp och kontext. Avrunda alltid uppåt vid köp, eftersom öppnade fat normalt inte kan returneras. Ett litet överskud är alltid bättre än att vara utan dryck mitt i festen.'
  }
];

const schemas: PartyKegLocaleContent['schemas'] = [
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

export const content: PartyKegLocaleContent = {
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
