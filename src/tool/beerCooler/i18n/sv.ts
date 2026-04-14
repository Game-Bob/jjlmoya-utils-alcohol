import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'beer-cooler';
const title = 'Ölkylningsräknare med Newtons kylningslag';
const description = 'Beräkna med verklig termodynamik — Newtons kylningslag — exakt hur lång tid din öl behöver för att nå den perfekta serveringstemperaturen i kylskåp eller frys.';

const ui: BeerCoolerUI = {
  step1Title: 'Vad kyler du?',
  canLabel: 'Burk',
  aluminumLabel: 'Aluminium',
  bottleLabel: 'Flaska',
  glassLabel: 'Glas',
  step2Title: 'Var sätter du det?',
  fridgeLabel: 'Kylskåp',
  freezerLabel: 'Frys',
  step3Title: 'Finjustera temperaturer',
  initialTempLabel: 'Starttemperatur',
  targetTempLabel: 'Måltemperatur',
  glacialLabel: 'Glaciär',
  perfectLabel: 'Perfekt',
  bodegaLabel: 'Bodega',
  readyTitle: 'Redo',
  readyDescription: 'Välj behållare och plats för att beräkna.',
  estimatedTimeLabel: 'Beräknad tid',
  methodLabel: 'Metod',
  containerLabel: 'Behållare',
  alreadyColdLabel: 'Redan kallt!',
  neverColdLabel: 'Aldrig kallt'
};

const faqTitle = 'Vanliga frågor';
const bibliographyTitle = 'Bibliografi & Källor';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: 'Hur beräknar verktyget kylningstiden?',
    answer: 'Det tillämpar Newtons kylningslag: T(t) = T_env + (T₀ - T_env) × e^(-kt). Konstanten k varierar beroende på behållarens material och kylmedium. En aluminiumburk i kylskåp har ett helt annat k än en glaskflaska i frys. De värden som används här är kalibrerade mot verkliga experiment för varje kombination.',
  },
  {
    question: 'Fungerar knepet med våt pappershandduk och salt verkligen?',
    answer: 'Ja, och ganska märkbart. Att lindra behållaren i en fuktig pappershandduk med salt snabbar på kylningen av två skäl: vattnets förångning bortför ytterligare värme (förångningskylning), och salt sänker vattnets smältpunkt, vilket håller den fuktiga kontakten aktiv längre. Du kan få en extra nedgång på 2–4°C under de första minuterna jämfört med att placera en torr burk i frysen.',
  },
  {
    question: 'Vilken är den ideala serveringstemperaturen för olika ölstilar?',
    answer: 'Det beror på stilen. Lager och Pilsner serveras bäst mellan 3°C och 7°C. IPA och Pale Ale glänser vid 7°C till 10°C. Stout, Porter och komplexa aler bör serveras varmare, mellan 12°C och 14°C, så att deras aromatiska föreningar — kaffe, choklad, nötter — kan uttrycka sig fullt ut.',
  },
  {
    question: 'Kan min öl explodera om jag lämnar den i frysen?',
    answer: 'Ja. Alkohol och lösta socker sänkerölens smältpunkt under rent vatten: en standard 5% lager fryser omkring -3°C. När vattnet kristalliserar ökar volymen och löst CO2 höjer det inre trycket tills behållaren ger vika. Mer än 60 minuter i frysen — särskilt glaskflaskor — är en verklig fara. Använd denna räknare för att undvika det.',
  },
  {
    question: 'Bränner öl om den kyls för snabbt?',
    answer: 'Nej. Myten om "värmechock" som förstör öl är falsk. Det som verkligen kan påverka den är upprepad frysning och eltöning — vilket bryter proteiner och grumlar vätskan — eller direkt UV-ljusexponering. Snabb kylning i frys eller isvatten skadar inte smaken.',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: 'Välj behållare',
    text: 'Välj mellan en aluminiumburk eller glaskflaska. Materialet påverkar värmöverföringshastigheten drastiskt.',
  },
  {
    name: 'Välj kylningsmetod',
    text: 'Ange om du använder ett konventionellt kylskåp (4°C) eller frys (-18°C) för en ultrasnel process.',
  },
  {
    name: 'Justera temperaturer',
    text: 'Definiera dryckens aktuella temperatur (rumstemperatur) och den målkyltemperatur du vill ha.',
  },
];

const bibliography: BeerCoolerLocaleContent['bibliography'] = [
  {
    name: 'Newtons kylningslag - Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling',
  },
  {
    name: 'Avancerad kemi för öl och ölbryggning - American Chemical Society',
    url: 'https://www.acs.org/acs-webinars/library/advanced-chemistry-of-beer-and-brewing.html',
  },
];

const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Vetenskapen om kyla och termodynamik',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Varför kyls burken före flaskan? Är det magi? Nej, det är <strong>Newtons kylningslag</strong> i handling. Detta verktyg beräknar matematiskt det exakta ögonblick då din dryck når termodynamisk perfektion. Varje material, varje miljö, varje starttemperatur matas in i samma differentialekvation som fysiker och ingenjörer använder för att modellera värmöverföring i industriella system.'
  },
  {
    type: 'diagnostic',
    title: 'Huvudformeln',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Fysik',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). Denna differentialekvation beskriver hur ett objekts temperatur ändras i proportion till skillnaden mellan dess temperatur och omgivningens. Konstanten k beror på behållarens material och geometri, vilket är varför en burk kyls snabbare än en flaska med samma volym.'
  },
  {
    type: 'title',
    text: 'Materiallekriget: Aluminium vs. Glas',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>Aluminium</strong> har värmeledningsförmåga på ~205 W/(m·K), medan <strong>glas</strong> knappast uppnår 0,8 W/(m·K). Metall överför köld mycket snabbt, vilket gör det till den ideala behållaren för nödsituationer. Glas ger dock bättre isolering när det väl är kallt, vilket bibehåller den ideala temperaturen längre under konsumtionen. Denna kompromiss förklarar varför olika ölkulturer har utvecklat olika preferenser för varje material.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Pilsner & Lager', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA & Pale Ale', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: 'Stout & Porter', value: '12°C - 14°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Fryszonens farozon',
    icon: 'mdi:snowflake-alert',
    html: 'På grund av alkohol och lösta socker fryser öl under 0°C — en standard 5% lager fryser omkring -3°C. När vattnet kristalliserar ökar volymen, och CO2-trycket stiger samtidigt. Resultatet är en behållare som kan sprängas med våld. Lämna aldrig öl i frysen i mer än 45 minuter utan att ställa in en timer.'
  },
  {
    type: 'proscons',
    title: 'Nödkylningsknep',
    items: [
      { pro: 'Knep med våt handduk: Slå in burken i våt pappershandduk, frys sedan in — förångning snabbar på kylningen.', con: '' },
      { pro: 'Arktisk saltlake: Fyll en hink med vatten, is och 2 matskedar salt för att nå -5°C saltlake.', con: '' },
      { pro: 'Rotationsmetod: Snurra flaskan i isvatten för att tvinga fram konvektion och förkorta kylningstiden.', con: '' },
      { pro: '', con: 'Placera inte en burk direkt på frysbordet utan timer — sprucken burkar är röriga och farliga.' }
    ]
  },
  {
    type: 'tip',
    title: 'Pro tips: Förkyla glaset',
    html: 'Glaset som du häller öl i har betydande värmemassa. Ett varmt glas kan höja temperaturen på en perfekt kall öl med 2–3°C omedelbar vid kontakt. Sätt serveringsglaset i frysen i 5 minuter innan du häller, eller skölj med kallt vatten. Det här enkla steget förlänger fönstret när din öl smaksätter exakt som avsett.'
  },
  {
    type: 'title',
    text: 'Förstå kylningskonstanten',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Kylningskonstanten k i Newtons ekvation är inte ett fast universellt värde — det är en empirisk egenskap hos varje specifik behållare och medium. En tunn aluminiumburk i isvatten har ett dramatiskt annat k än en tjock glasflaska i stilla kylskåpsluft. Vår miniräknare använder uppmätta värden kalibrerade mot verkliga experiment för varje behållartyp, vilket ger dig förutsägelser exakta inom några minuter för typiska hemkylningsscenarioer.'
  }
];

const schemas: BeerCoolerLocaleContent['schemas'] = [
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

export const content: BeerCoolerLocaleContent = {
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
