import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'cocktail-balanserare';
const title = 'Cocktail Balancer: Surlagenen';
const description = 'Beräkna den perfekta balansen mellan sött och surt för dina cocktails. Bemästra det gyllene snittet inom mixologi.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Recept',
  saveBtn: 'Spara',
  resetBtn: 'Återställ',
  emptyStateTitle: 'Din Arbetsbänk är Tom',
  emptyStateDescription: 'Lägg till ingredienser för att analysera din cocktails balans i realtid.',
  addBtn: 'Lägg Till Ingrediens',
  addMoreBtn: 'Lägg Till En Till Ingrediens',
  flavorProfileTitle: 'Smakprofil',
  volLabel: 'Volym',
  sugarLabel: 'Socker',
  colorLabel: 'Färg',
  sourLawTitle: 'Surlagenen',
  acidDryLabel: 'Sur (Torr)',
  balanceLabel: 'Balans',
  sweetLabel: 'Söt',
  aiSuggestionTitle: 'AI-förslag',
  addIngredientTitle: 'Lägg Till Ingrediens',
  searchPlaceholder: 'Sök rom, lime, sirap...',
  presetsTitle: 'Recept & Förinställningar',
  savedSectionTitle: 'Mina Sparade',
  classicsSectionTitle: 'Klassiker',
  confirmDeleteTitle: 'Ta bort allt?',
  confirmDeleteText: 'Detta tar bort alla ingredienser från din arbetsbänk. Den här åtgärden kan inte ångras.',
  cancelBtn: 'Avbryt',
  deleteBtn: 'Ta bort',
  verdictSpiritSeco: 'Spritdryck / Torr',
  verdictSoloDulce: 'Endast Söt (Old Fashioned)',
  verdictMuyAcido: 'För Sur / Skelettorr',
  verdictAcido: 'Sur / Tart',
  verdictEquilibrado: 'Balanserad (Sur)',
  verdictDulce: 'Söt / Kommersiell',
  verdictEmpalagoso: 'För Söt',
  fixAddBitters: 'Bittrare Saknas',
  fixAddSugar: 'För Sur',
  fixAddAcid: 'För Söt'
};

const faqTitle = 'Vanliga Frågor';
const bibliographyTitle = 'Bibliografi & Källor';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "Vad är 'Surlagenen'?",
    answer: "Det är det gyllene snittet inom mixologi som balanserar tre element: den starka basen (sprit), det sura (citrusfrukter) och det söta (siraper). Ett klassiskt recept följer vanligtvis förhållandet 2:1:1 (Stark:Sur:Söt), även om detta varierar beroende på styrka och densitet.",
  },
  {
    question: "Hur påverkar utspädning cocktails balans?",
    answer: "Is kyl inte bara; det adderar vatten (utspädning) som öppnar spritens aromer och mjukar upp topparna av surhet och söta. En balanserad cocktail i shaken kan bli obalanserad om den lämnas för länge med is i glaset.",
  },
  {
    question: "Varför smakar mina hemgjorda cocktails inte som de på baren?",
    answer: "Det beror vanligtvis på bristen på balans mellan socker och citronfrukternas pH. Citron varierar i surhet beroende på årstid. Vår kalkylator hjälper dig att justera den exakta mängden sirap baserat på volymen saft som använts.",
  },
  {
    question: "Vad är Brix-grader och varför är de viktiga i cocktails?",
    answer: "Brix är en skala som mäter mängden upplöst socker i en vätska. En enkel sirap (1:1) ligger runt 50 °Brix; en rik sirap (2:1) överstiger 66 °Brix. Ju högre Brix, desto mer kropp och söta bidrar det per volymenheten. Att veta detta låter dig byta siraper i ett recept utan att bryta balansen.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Välj alkoholisk bas",
    text: "Välj huvudspriten (Gin, Rom, Whiskey) från vår databas för att känna till dess kropp och alkoholbidrag.",
  },
  {
    name: "Ange den sura agenten",
    text: "Lägg till volymen av citron-, lime- eller grapefruktjuice. Kalkylatorn analyserar pH-effekten på blandningen.",
  },
  {
    name: "Justera den söta komponenten",
    text: "Ange siraptyp (enkel, 2:1, agava) och se hur balanssindikatorn rör sig i realtid.",
  },
  {
    name: "Perfekt servering",
    text: "Granska verktygets slutgiltiga dikt: surförhållandet, det beräknade ABV efter utspädning och rättningsförslag. Servera med färsk is och finjustera citrus eller sirap efter smak.",
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
    text: 'Molekylär Teknik och Vätskebalans',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Välkommen till det digitala laboratoriet där intuition möter matematik. Detta verktyg är inte bara en receptbok; det är en <strong>avancerad fysikalisk-kemisk simulator</strong> utformad för att dekonstruera och analysera din cocktails molekylära struktur i realtid. Varje droppe citrusfrukter, varje mått sprit, varje gram sirap interagerar enligt oföränderliga kemiska lagar som avgör om din dryck blir ett mästerverk eller en besvikelse misslyckande.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Lime', value: '~6% Sur', icon: 'mdi:fruit-citrus' },
      { label: 'Citron', value: '~6% Sur', icon: 'mdi:fruit-citrus' },
      { label: 'Grapefrukt', value: '~1-2% Sur', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Surhetsvetenskapen',
    icon: 'mdi:fruit-citrus',
    html: 'Surhet är inte bara en smak; det är det strukturella ryggraden på varje balanserad cocktail. Utan rätt surhet blir en dryck platt, endimensionell och glömsk. Vår algoritm skiljer mellan titrerbar surhet av persisk lime jämfört med Eureka-citron, tar hänsyn till säsongsvariationer i citrusfrukts pH som kan flytta ditt recept ett helt balanspoäng på gommen.'
  },
  {
    type: 'card',
    title: 'Brixkontroll (Söta)',
    icon: 'mdi:spoon-sugar',
    html: 'Din cocktails kropp och textur beror helt på upplöst socker. En enkel sirap (1:1) beter sig mycket annorlunda än en rik sirap (2:1), honung eller agavesirap. Varje sötningsmedel har olika Brix-grad och viskositet som påverkar hur drycken kläder tungan. Vår kalkylator beräknar de exakta grammen upplöst socker för att förutsäga slutmun och sötkänning.'
  },
  {
    type: 'card',
    title: 'Termodynamik och Utspädning',
    icon: 'mdi:water-percent',
    html: 'En skakad cocktail späds ut 25-40% beroende på istemperatur, skakningsmetod och varaktighet. Denna vattenaddition är ingen defekt; det är en väsentlig ingrediens som öppnar aromer och mjukar upp alkoholkanten. Vår kalkylator uppskattar slutligabv efter utspädning, så du kan konstruera drycker med precis den avsedd styrka och smakbalans.'
  },
  {
    type: 'title',
    text: 'Bortom Grundförhållandet',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Många bartenders lär sig den klassiska 2:1:1-regeln (2 delar sprit, 1 del sur, 1 del söt) och behandlar det som universell sanning. Men <strong>kemien är mycket mer nyanserad</strong>. En citron från Sicilien innehåller annan surhet än en lime från Mexiko. En triple sec som Cointreau beter sig radikalt annorlunda än blå Curaçao. Samma recept kan smaka perfekt balanserat en vecka och brutalt surt nästa, bara på grund av säsongsvariationer i frukt.'
  },
  {
    type: 'paragraph',
    html: 'Denna balansör bryter igenom dessa simplastiska barriärer. Genom att mata in dina specifika ingredienser konsulterar du en levande databas som dynamiskt justerar surhet- och söthetsvektorer för att erbjuda en precis sensorisk karta över din skapelse. Sluta gissa och börja konstruera dina cocktails med samma vetenskapliga rigoritet som bartenders på världsklass-etablissemang använder vid varje service.'
  },
  {
    type: 'summary',
    title: 'Vem är detta verktyg för?',
    items: [
      'Professionella bartenders: Standardisera recept och skapa signaturmeny med reproducerbar konsistens.',
      'Hemmaentusiaster: Sluta gissa och börja förstå varför dina cocktails lyckas eller misslyckas.',
      'Dryckestillverkare: Prototyp snabbt nya smakbegrepp innan dyra produktionskörningar.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'Den Gyllene Zonen',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Mål',
    html: 'Detta är det ultimata målet: en kontrollerad pH där socker neutraliserar surhets aggression utan att maskera bassprits väsentliga oljor och aromatiska föreningar. Denna exakta balans är där odödliga klassiker bor — Daiquiri, Margarita, Sidecar — drycker som överlevde decennier eftersom de följer smakkemins grundläggande lagar.'
  },
  {
    type: 'tip',
    title: 'Experttips: Använd Alltid Färsk Citrusfrukter',
    html: 'Pressa alltid citrusfrukter i sista stund. Citron- och limejuice oxideras snabbt, förlorar levande surhet inom 20-30 minuter efter pressning. En cocktail gjord med verkligt färsk juice kommer alltid att ha en ljusstyrka och vitalitet på gommen som inget buteljerat produkter kan replikera. Använd frukt vid rumstemperatur för att maximera saftutbytet.'
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
