import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'alcohol-clearance-calculator';
const title = 'Calcolatore Sbornia e BAC: Predittore di Recupero';
const description = 'Calcola il tuo contenuto di alcol nel sangue (BAC) e il tempo per raggiungere 0.0 utilizzando la formula di Widmark. Pianifica la tua idratazione pre-sonno e saprai quando sarai completamente recuperato.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Sesso biologico',
  weightLabel: 'Peso corporeo',
  kgUnit: 'kg',
  addDrinkLabel: 'Aggiungi bevanda',
  beerLabel: 'Birra',
  wineLabel: 'Vino',
  spiritLabel: 'Cocktail',
  shotLabel: 'Bicchierino',
  accumulatedLabel: 'Bevande consumate',
  emptyListLabel: 'Il tuo elenco è vuoto',
  emptySubLabel: 'Seleziona le bevande per calcolare.',
  estimatedBacLabel: 'BAC stimato',
  bacUnit: 'BAC',
  timeToZeroLabel: 'per raggiungere 0.0',
  waterAdviceLabel: 'Acqua (Prima del sonno)',
  pillAdviceLabel: 'Integratori',
  noneAdvice: 'Non necessario',
  hydrationAdvice: 'Priorità: Idratazione',
  electrolytesAdvice: 'Elettroliti + Vit. B',
  disclaimerText: 'Questo calcolatore è una stima teorica. Il metabolismo e il cibo variano il risultato. Non bere e guidare.',
  drinkUnit: 'bevanda',
  drinksUnit: 'bevande'
};

const faqTitle = 'Domande frequenti';
const bibliographyTitle = 'Bibliografia e fonti';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: 'Che cos\'è un\'unità di bevanda standard e quanto c\'è in ogni bevanda?',
    answer: 'Un\'unità di bevanda standard contiene approssimativamente 10 grammi di alcol puro (definizione UK/UE; 14g negli USA). Una birra normale (330ml al 5%) contiene ~1,3 unità, un bicchiere di vino (150ml al 12%) ~1,4 unità, e un bicchierino (40ml al 40%) ~1,3 unità. Conoscere le unità di quello che bevi è essenziale per interpretare correttamente i risultati del calcolatore.',
  },
  {
    question: 'Perché il sesso biologico influisce sui calcoli del BAC?',
    answer: 'Il sesso biologico influenza il fattore Widmark "r", che rappresenta l\'acqua corporea totale come frazione del peso. Gli uomini hanno una media r=0,68 perché hanno proporzionalmente più acqua corporea. Le donne hanno una media r=0,55 a causa di una percentuale più alta di grasso corporeo, che trattiene meno alcol. Ciò significa che per gli stessi drink e peso corporeo, le donne raggiungeranno un BAC più alto.',
  },
  {
    question: 'Possono il caffè, l\'acqua o l\'esercizio accelerare l\'eliminazione dell\'alcol?',
    answer: 'No. Il fegato elimina l\'alcol a un tasso costante di circa 0,15 g/L all\'ora (cinetica di ordine zero). Il caffè può mascherare la stanchezza, l\'acqua aiuta con la disidratazione, e l\'esercizio migliora il benessere generale — ma nessuno di questi riduce il tuo BAC effettivo. Solo il tempo elimina l\'alcol dal sangue.',
  },
  {
    question: 'Mangiare dopo aver bevuto aiuta ad abbassare il BAC?',
    answer: 'Mangiare dopo aver bevuto non riduce l\'alcol già nel tuo flusso sanguigno. Dove il cibo fa una grande differenza è prima o durante il bere: il cibo nello stomaco — specialmente proteine e grassi — rallenta l\'assorbimento gastrico e può ridurre il tuo BAC massimo fino al 50%. Una volta che l\'alcol è assorbito, solo il metabolismo epatico può eliminarlo.',
  },
  {
    question: 'Quanto tempo ci vuole per raggiungere 0,0 BAC?',
    answer: 'Dipende dal tuo BAC iniziale. Dividi il tuo BAC stimato (in g/L) per 0,15 per ottenere le ore approssimative. Ad esempio, un BAC di 1,5 g/L richiede circa 10 ore. Il fegato non smette mai: elabora l\'alcol anche mentre dormi. Ma fai attenzione — l\'alcol può ancora essere presente nel tuo sangue anche quando ti senti completamente recuperato.',
  },
  {
    question: 'Questo calcolatore è affidabile al 100% per decidere se guidare?',
    answer: 'No. Questo strumento è una stima teorica basata sulla formula di Widmark. Fattori come l\'assunzione di cibo, i farmaci, la fatica, le varianti genetiche dell\'enzima ADH e lo stress possono spostare il tuo BAC effettivo del 20-30% in entrambe le direzioni. Non utilizzare mai questo calcolatore per decidere se guidare. Se hai bevuto, non guidare — quella è l\'unica regola con zero margine di errore.',
  },
];

const bibliography: AlcoholClearanceLocaleContent['bibliography'] = [
  {
    name: 'Calcoli di alcol e loro incertezza - PMC',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4361698/',
  },
  {
    name: 'Metabolismo dell\'alcol: Come il corpo elabora l\'alcol - NIH',
    url: 'https://www.niaaa.nih.gov/publications/alcohol-metabolism',
  },
];

const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: 'Configura il tuo profilo',
    text: 'Seleziona il tuo sesso biologico (influisce sulla percentuale di acqua corporea) e il tuo peso attuale.',
  },
  {
    name: 'Aggiungi le bevande consumate',
    text: 'Inserisci il tipo e il numero di drink. Il calcolatore userà unità standard per stimare l\'alcol puro consumato.',
  },
  {
    name: 'Interpreta i risultati',
    text: 'Leggere il tuo BAC stimato e il tempo per raggiungere 0,0. Ricorda: il caffè e l\'esercizio fisico non accelerano l\'eliminazione.',
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'La scienza dietro il BAC e l\'eliminazione dell\'alcol',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Il tuo corpo metabolizza l\'alcol a una velocità fissa: circa 0,15 grammi per litro all\'ora. Questo processo è chiamato cinetica di ordine zero — non importa quanta esperienza hai, quanti integratori prendi, o quanto caffè bevi. Solo il tempo e il fegato eliminano l\'alcol dal tuo sangue. Questo calcolatore utilizza la formula di Widmark, il gold standard nei laboratori forense e tossicologia.'
  },
  {
    type: 'title',
    text: 'Il sesso biologico conta nel metabolismo dell\'alcol',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'La differenza tra uomini e donne nel BAC non è un mito: è biologia. Le donne hanno una percentuale più alta di grasso corporeo e una più bassa percentuale di acqua corporea, il che significa che l\'alcol si distribuisce in un volume più piccolo e raggiunge concentrazioni più elevate. Inoltre, le donne spesso hanno un\'attività inferiore dell\'enzima alcol deidrogenasi nello stomaco, portando a un assorbimento più rapido.'
  },
  {
    type: 'title',
    text: 'Unità di bevanda standard in tutto il mondo',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'Birra (5%)', value: '1,3 unità', icon: 'mdi:beer' },
      { label: 'Vino (12%)', value: '1,4 unità', icon: 'mdi:glass-cocktail' },
      { label: 'Liquore (40%)', value: '1,3 unità', icon: 'mdi:bottle-wine' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Cosa NON riduce il BAC',
    icon: 'mdi:close-circle',
    html: '<strong>Il caffè</strong> maschera la stanchezza ma non riduce il BAC. <strong>L\'esercizio</strong> migliora il tuo benessere ma non accelera l\'eliminazione. <strong>L\'acqua</strong> aiuta con la disidratazione post-alcol, ma l\'alcol nel tuo sangue rimane fino al metabolismo epatico. <strong>Il cibo assunto dopo il bere</strong> non aiuta l\'alcol già assorbito. L\'unica cosa che funziona è <strong>il tempo</strong>.'
  },
  {
    type: 'tip',
    title: 'Suggerimento: il cibo PRIMA di bere è importante',
    html: 'A differenza del cibo dopo il bere, mangiare prima o durante il bere riduce effettivamente il tuo BAC di picco fino al 50%. La chiave è la cibo nello stomaco rallenta l\'assorbimento dell\'alcol nell\'intestino tenue. I cibi ricchi di grassi e proteine sono i più efficaci. Quindi sì, mangia prima di bere, ma non contare sulla cena dopo per salvare il tuo BAC.'
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
    applicationCategory: 'UtilityApplication',
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
