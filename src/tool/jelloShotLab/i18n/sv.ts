import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'jello-shot-kalkylator';
const title = 'Jello Shot Kalkylator: Den perfekta kalkylatorn för alkohol och gelatin';
const description = 'Beräkna exakt hur mycket sprit och gelatin du behöver för jello shots som faktiskt stelnar. Undvik rinniga eller gummiliknande misslyckanden med vetenskapsbaserade förhållanden för alla alkoholstyrkor.';

const ui: JelloShotLabUI = {
  title: 'Jello Shot Kalkylator',
  description: 'Få det perfekta förhållandet av gelatin, vatten och alkohol så att dina shots stelnar varje gång.',
  liquorBaseLabel: 'Typ av sprit',
  liquorAbvLabel: 'Alkoholstyrka (%)',
  gelatinLabel: 'Typ av gelatin',
  diluentLabel: 'Vattenbas',
  calculateBtn: 'Beräkna',
  modePrecision: 'Precisionsläge',
  modeIntensity: 'Shot-styrka',
  modeIntensityLight: 'Lätt (Enkelt)',
  modeIntensityBalanced: 'Standard',
  modeIntensityLimit: 'Maximum (Starkt)',
  partyPlannerTitle: 'Festplanerare',
  partyPlannerGuestLabel: 'Gäster',
  partyPlannerShotsPerGuest: 'Shots per person',
  multiLayerTitle: 'Flerskiktigt',
  howToTitle: 'Hur man gör dem',
  proTipsTitle: 'Proffstips',
  resultsTitle: 'Ditt recept',
  totalVolumeLabel: 'Total volym',
  boilingWaterLabel: 'Hett vatten',
  alcoholVolumeLabel: 'Sprit',
  packetsNeededLabel: 'Gelatinpåsar',
  chillingTimeLabel: 'Kyltid',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'påsar',
  modeParty: 'Festläge',
  modeRecipe: 'Receptläge',
};

const faqTitle = 'Vanliga frågor';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'Varför hindrar stark alkohol jello shots från att stelna?',
    answer: 'Etanol stör vätebindningarna som håller ihop gelatinets trippelhelix-proteinstruktur. När spriten utgör ungefär 35% av den totala volymen kan proteinmatrisen inte bilda ett stabilt nätverk och shoten förblir flytande. Ju högre ABV spriten har, desto mindre volym kan man tillsätta innan man når denna gräns.',
  },
  {
    question: 'Vad är det maximala alkoholförhållandet innan jello shots slutar stelna?',
    answer: 'Den säkra övre gränsen är ungefär 30–35% av den totala vätskovolymen som ren sprit (vid 40% ABV). Med en neutral sprit på 96% sjunker den gränsen till ungefär 15–18% av den totala volymen. Vår kalkylator tar hänsyn till spritens ABV så att du aldrig överskrider stelningsgränsen.',
  },
  {
    question: 'Spelar det någon roll vilken sprit man använder — vodka, rom eller tequila?',
    answer: 'Det som spelar roll är ABV, inte sprittypen. Vodka med 40% och rom med 40% beter sig identiskt i gelatinmatrisen. Spritsorter med högre sockerhalt (som vissa romsörter eller likörer) kan förbättra texturen något eftersom sockret konkurrerar med etanolen om vätebindningarna i gelatinnätverket.',
  },
  {
    question: 'Hur länge håller jello shots i kylskåpet?',
    answer: 'Rätt tillverkade jello shots håller 3–5 dagar i kylskåpet täckta med plastfolie. Den höga alkoholhalten fungerar som ett naturligt konserveringsmedel. Undvik att lämna dem i rumstemperatur mer än 2 timmar eftersom gelatinet mjuknar och bakterier kan föröka sig.',
  },
  {
    question: 'Kan jag göra mina jello shots fastare eller mjukare?',
    answer: 'Ja. Använd mer gelatin (eller ett halvt extra paket) för fastare shots som glider rent ur muggarna. Använd lite mindre för en mjukare, dallrande konsistens. Ersätt aldrig gelatin med agar-agar om du vill ha en smälter-i-munnen-konsistens — agar stelnar hårdare och smälter vid en högre temperatur.',
  },
  {
    question: 'Kan jag frysa jello shots för att snabba upp kylningen?',
    answer: 'Nej. Frysning bryter ner gelatinnätverket och ger en vattnig, grynig konsistens när de tinar. Kyl alltid i minst 4 timmar. Gör dem kvällen innan för fester — 8+ timmar ger bäst konsistens.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'Välj din sprit', text: 'Ange ABV för din sprit och välj den önskade shot-styrkan. Kalkylatorn visar dig den maximala mängd sprit ditt gelatin kan hålla.' },
  { name: 'Blanda gelatinet', text: 'Häll den beräknade mängden kokande vatten i en skål. Tillsätt gelatinpulvret och rör energiskt i 2 minuter tills det är helt upplöst. Tillsätt inte alkohol ännu.' },
  { name: 'Tillsätt spriten', text: 'Låt gelatinblandningen svalna i 5–10 minuter tills den är varm men inte het (under 50 °C). Tillsätt din sprit och rör försiktigt för att undvika bubblor.' },
  { name: 'Häll upp och kyl', text: 'Häll i plastmuggar, silikonformar eller små shotglas. Kyl i minst 4 timmar — en hel natt är idealiskt. Frys inte.' },
];


const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'Kemin bakom en perfekt jello shot', level: 2 },
  {
    type: 'paragraph',
    html: 'En jello shot är inte bara smaksatt gelatin med alkohol ihällt — det är en <strong>känslig kolloidal suspension</strong> där proteinpolymerer, vatten och etanol konkurrerar om vätebindningar. Fel förhållande och du slutar med en pöl söt vätska eller en gummiliknande skiva som studsar av bordet. Rätt förhållande och du har en perfekt darrande shot som glider ut ur muggen i en enda ren rörelse.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Lätt (Enkelt)', value: '~30% sprit', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Standard', value: '~45% sprit', icon: 'mdi:flask-outline' },
      { label: 'Maximum', value: '~55% sprit', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'Vad är Bloom styrka?',
    icon: 'mdi:molecule',
    html: 'Bloom mäter gelatinets gelningsstyrka, vanligtvis från 50 till 300 Bloom. Bladgelatin från snabbköpet är normalt 150–200 Bloom. Högre Bloom innebär ett fastare gel med samma mängd pulver, vilket betyder att det kan tolerera lite mer alkohol innan det misslyckas att stelna. Standardpåsar med gelatinpulver (7 g) är kalibrerade för ca 240 ml vätska.',
  },
  {
    type: 'card',
    title: 'Etanolgränsen',
    icon: 'mdi:alert-circle-outline',
    html: 'Etanol konkurrerar med vatten om vätebindningsplatserna på kollagenets aminosyrakedior. När etanol upptar för många av dessa platser kan proteinet inte vika sig till den stabila trippelhelix som ger gelatin dess struktur. Den praktiska gränsen är ungefär <strong>1 del 40%-ig sprit till 1 del vatten</strong> — bortom det stelnar din shot inte oavsett hur länge du väntar.',
  },
  {
    type: 'tip',
    title: 'Tillsätt aldrig alkohol till kokande gelatin',
    html: 'Alkohol avdunstar snabbt över 78 °C. Låt alltid ditt lösta gelatin svalna till under 50 °C innan du rör ner spriten. Det enda steget är ansvarigt för fler misslyckade jello shots än något annat misstag.',
  },
  { type: 'title', text: 'Felsöka vanliga misslyckanden', level: 2 },
  {
    type: 'proscons',
    title: 'Tecken och lösningar',
    items: [
      { pro: 'Shot är flytande efter 4 timmar → För mycket alkohol eller förhållande överskridet. Minska spritvolymen.', con: 'Shot smakar inte alkohol → Spriten tillsattes i vätska som fortfarande var för het. Låt svalna först.' },
      { pro: 'Shot är för gummiliknande → För mycket gelatin. Minska med ett halvt paket nästa gång.', con: 'Shot är grumlig → Bubblor infångade vid blandning. Rör försiktigt och låt vila innan hällning.' },
      { pro: 'Shot har grynig konsistens → Gelatin inte helt upplöst. Rör längre i hett vatten.', con: 'Shot stelnar inte efter 8 timmar → Etanolgränsen överskriden. Använd mindre sprit eller lägre ABV.' },
    ],
  },
  {
    type: 'summary',
    title: 'Vem är det här verktyget för?',
    items: [
      'Festarrangörer: Beräkna exakt hur många påsar och hur mycket sprit du behöver innan du handlar.',
      'Bartenders: Skala upp till storskalig produktion med konsekventa resultat varje gång.',
      'Hemmakockar: Undvik de vanligaste misslyckandena — rinniga shots, gummiliknande konsistens eller noll alkoholsmak.',
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
