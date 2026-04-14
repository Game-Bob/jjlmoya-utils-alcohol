import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'alkoholabbrytnins-kalkylator';
const title = 'Bakfylla och alkoholberäknare: Återhämtningsprediktör';
const description = 'Beräkna din blodalkoholkoncentration (BAC) och tiden tills du når 0,0 med Widmarks formel. Planera din vätskeintag före sömn och ta reda på när du är helt återhämtad.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Biologiskt kön',
  weightLabel: 'Kroppsvikt',
  kgUnit: 'kg',
  addDrinkLabel: 'Lägg till dryck',
  beerLabel: 'Öl',
  wineLabel: 'Vin',
  spiritLabel: 'Spritblandning',
  shotLabel: 'Shot',
  accumulatedLabel: 'Konsumerade drycker',
  emptyListLabel: 'Din lista är tom',
  emptySubLabel: 'Välj drycker för att beräkna.',
  estimatedBacLabel: 'Beräknad BAC',
  bacUnit: 'BAC',
  timeToZeroLabel: 'tills du är på 0,0',
  waterAdviceLabel: 'Vatten (Före sömn)',
  pillAdviceLabel: 'Kosttillskott',
  noneAdvice: 'Inte nödvändigt',
  hydrationAdvice: 'Prioritet: Vätskebalans',
  electrolytesAdvice: 'Elektrolyter + D-vitamin',
  disclaimerText: 'Denna kalkylator är en teoretisk uppskattning. Ämnesomsättningen och mat varierar resultatet. Kör aldrig efter att ha druckit alkohol.',
  drinkUnit: 'dryck',
  drinksUnit: 'drycker'
};

const faqTitle = 'Vanliga frågor';
const bibliographyTitle = 'Litteraturreferenser';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "Vad är en standardenheter alkohol och hur mycket finns i varje dryck?",
    answer: "En standardenheter alkohol innehåller cirka 10 gram ren alkohol (EU-definition; 14g i USA). En vanlig öl (330ml med 5%) innehåller cirka 1,3 enheter, ett glas vin (150ml med 12%) cirka 1,4 enheter och en shot (40ml med 40%) cirka 1,3 enheter. Det är viktigt att veta hur många enheter dina drycker innehåller för att tolka kalkylatorns resultat korrekt.",
  },
  {
    question: "Varför påverkar biologiskt kön BAC-beräkningarna?",
    answer: "Biologiskt kön påverkar Widmarks faktor 'r', som representerar kroppens totala vattenhalt i förhållande till vikt. Män har i genomsnitt r=0,68 eftersom de har proportionellt mer vatten i kroppen. Kvinnor har i genomsnitt r=0,55 på grund av en högre andel kroppsfett, som absorberar mindre alkohol. Det betyder att två personer med samma vikt och samma antal drycker kan få helt olika BAC-värden.",
  },
  {
    question: "Kan kaffe, vatten eller träning påskynda alkoholabbryningen?",
    answer: "Nej. Levern bryter ner alkohol i en konstant takt på cirka 0,15 g/L per timme (nollte ordningens kinetik). Kaffe kan dölja tröttheten, vatten hjälper till med uttorkning, och träning förbättrar det allmänna välbefinnantet – men inget av det minskar din faktiska BAC. Bara tiden bryter ner alkoholen från blodet.",
  },
  {
    question: "Hjälper det att äta efter att ha druckit alkohol?",
    answer: "Att äta efter att ha druckit minskar inte alkoholen som redan finns i blodet. Mat gör största skillnaden före eller under drickandet: mat i magen – särskilt proteiner och fetter – saktar ner absorptionen och kan minska din högsta BAC med upp till 50%. När alkoholen väl är absorberad kan bara leverns ämnesomsättning bryta ner den.",
  },
  {
    question: "Hur lång tid tar det att nå 0,0 BAC?",
    answer: "Det beror på din utgångs-BAC. Dela din beräknade BAC (i g/L) med 0,15 för att få de ungefärliga timmarna. Till exempel tar en BAC på 1,5 g/L omkring 10 timmar. Levern slutar aldrig: den bryter ner alkohol även när du sover. Men var medveten – alkohol kan fortfarande finnas i blodet även när du känner dig helt återhämtad.",
  },
  {
    question: "Är denna kalkylator 100% tillförlitlig för att avgöra om du kan köra?",
    answer: "Nej. Det här verktyget är en teoretisk uppskattning baserad på Widmarks formel. Faktorer som matintag, läkemedel, trötthet, genetiska varianter av ADH-enzymer och stress kan skifta din faktiska BAC med 20–30% åt båda hållen. Använd aldrig denna kalkylator för att avgöra om du kan köra. Om du har druckit alkohol – kör inte. Det är den enda regeln utan marginal för fel.",
  },
];

const bibliography: AlcoholClearanceLocaleContent['bibliography'] = [
  {
    name: "Alkoholberäkningar och deras osäkerhet - PMC",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4361698/",
  },
  {
    name: "Alkoholmetabolism: Hur kroppen bryter ner alkohol - NIH",
    url: "https://www.niaaa.nih.gov/publications/alcohol-metabolism",
  },
];

const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "Ställ in din profil",
    text: "Välj ditt biologiska kön (påverkar vattenhalten i kroppen) och din nuvarande vikt.",
  },
  {
    name: "Lägg till konsumerade drycker",
    text: "Klicka på ikonerna för de drycker du har druckit. De kommer att samlas i listan nedan.",
  },
  {
    name: "Kontrollera säkerhetstider",
    text: "Observera den beräknade BAC-nivån och, viktigast av allt, den tid levern behöver för att bryta ner all alkohol.",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Alkoholmetabolism: Vetenskap och nedbrytning',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Att förstå hur kroppen bryter ner etanol är avgörande för säkerhet och för att minska bakfylla. Vår <strong>alkoholabbrytniskalkylator</strong> använder den välkända <strong>Widmarks formel</strong> för att ge dig en tydlig karta över ditt metaboliska tillstånd. Alkohol bryts inte ner genom svettning, vattenintag eller träning – bara tid och leverns ämnesomsättning kan minska din blodalkoholkoncentration.'
  },
  {
    type: 'diagnostic',
    title: 'BAC:s farmakokenetik',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Biokemi',
    html: 'Alkohol distribueras genom kroppens vatten. Faktorer som vikt och Widmarks koefficient r (0,68 för män / 0,55 för kvinnor) bestämmer den initiala utspädningen av etanol i blodet. Det är därför två personer med samma vikt kan ha helt olika BAC-värden efter samma antal drycker.'
  },
  {
    type: 'title',
    text: 'Hepatisk oxidation och enzymer',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Levern bryter ner 95% av alkoholen genom enzymet alkoholdehydrogenas (ADH). Denna process sker i konstant takt (nollte ordningens kinetik), vilket betyder att den inte kan påskyndas av träning eller kaffe. De återstående 5% bryts ner genom andedräkt, urin och svett – vilket är grunden för andedräktstester inom trafikbevakningenin.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Nedbrytningshastighet', value: '0,15 g/L·h', icon: 'mdi:clock-fast' },
      { label: 'Magtarmabsorption', value: '20% Etanol', icon: 'mdi:stomach' },
      { label: 'Rekommenderad vätskeintag', value: '1:1 Vatten/Dryck', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Myter kontra verklighet',
    items: [
      { pro: 'Vatten och elektrolyter före sömn minskar bakfyllas allvarlighetsgrad genom att motverka diures.', con: '' },
      { pro: '', con: 'Kalla duschar: De påverkar inte blodalkoholkoncentrationen alls.' },
      { pro: '', con: 'Kaffe: Döljer sömnighetskänslan men återställer inte förlorade reflexer eller kognitiv funktion.' }
    ]
  },
  {
    type: 'card',
    title: 'Vad orsakar bakfylla?',
    icon: 'mdi:alert-decagram',
    html: 'Bakfylla, vetenskapligt känt som veisalgia, orsakas av systemisk uttorkning (vasopressinöverdriven undertryckning av etanol), acetaldehyd-ackumulering (en giftlig metabolit) och ett cytokindriven inflammatorisk immunrespons. Hjärnans glutamatöverbalans efter alkoholdämpning bidrar också till ångslighet och känslighet för ljus och ljud nästa morgon.'
  },
  {
    type: 'tip',
    title: 'Säkerhet först: Känn din gräns',
    html: 'En BAC på 0,05% försämrar mätbart bedömningsförmåga, uppmärksamhet och reaktionstid. De flesta länder sätter gränsen för körning mellan 0,05% och 0,08%. Men individuell känslighet varierar betydligt – ålder, läkemedel, trötthet och genetiska varianter av ADH-enzymer påverkar hur alkohol påverkar dig personligen. I tveksamma fall – kör inte.'
  },
  {
    type: 'title',
    text: 'Matens roll och absorptionshastighet',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Att äta före eller under drickandet förändrar dramatiskt alkoholens absorptionskinetik. Mat i magen – särskilt proteiner och fetter – saktar ner magtömningen, vilket minskar den hastighet med vilken etanol kommer in i blodet. En person som dricker på tom mage kan få en högsta BAC som är 50% högre än samma person som åt ordentlig mat innan samma mängd alkohol konsumerades. Detta är en av de viktigaste variablerna som Widmarks formel inte helt kan fånga, varför vår kalkylator inkluderar en ansvarsfriskrivning om teoretisk uppskattning.'
  },
  {
    type: 'paragraph',
    html: 'Typen av alkoholhaltig dryck spelar också roll bortom bara ABV och volym. Kolsyrade mixers (tonic water, mousserande vin) påskyndar magtömningen och driver alkohol snabbare in i blodet. Drycker med mycket högt ABV (>25%) kan tillfälligt hämma magomotoriken, vilket saktar ner absorptionen. Söta drycker kan dölja den upplevda effekten av alkohol, vilket leder till att människor dricker snabbare än de inser. Dessa nyanser är anledningen till att verklig BAC kan skilja sig från modellförutsägelser med 20-30% åt båda hållen.'
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
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
