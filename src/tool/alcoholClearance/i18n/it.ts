import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'calcolatore-smaltimento-alcol';
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
    answer: 'No. Il fegato elimina l\'alcol a un tasso costante di circa 0,15 g/L all\'ora (cinetica di ordine zero). Il caffè può mascherare la stanchezza, l\'acqua aiuta con la disidratazione, e l\'esercizio migliora il benessere generale - ma nessuno di questi riduce il tuo BAC effettivo. Solo il tempo elimina l\'alcol dal sangue.',
  },
  {
    question: 'Mangiare dopo aver bevuto aiuta ad abbassare il BAC?',
    answer: 'Mangiare dopo aver bevuto non riduce l\'alcol già nel tuo flusso sanguigno. Dove il cibo fa una grande differenza è prima o durante il bere: il cibo nello stomaco - specialmente proteine e grassi - rallenta l\'assorbimento gastrico e può ridurre il tuo BAC massimo fino al 50%. Una volta che l\'alcol è assorbito, solo il metabolismo epatico può eliminarlo.',
  },
  {
    question: 'Quanto tempo ci vuole per raggiungere 0,0 BAC?',
    answer: 'Dipende dal tuo BAC iniziale. Dividi il tuo BAC stimato (in g/L) per 0,15 per ottenere le ore approssimative. Ad esempio, un BAC di 1,5 g/L richiede circa 10 ore. Il fegato non smette mai: elabora l\'alcol anche mentre dormi. Ma fai attenzione - l\'alcol può ancora essere presente nel tuo sangue anche quando ti senti completamente recuperato.',
  },
  {
    question: 'Questo calcolatore è affidabile al 100% per decidere se guidare?',
    answer: 'No. Questo strumento è una stima teorica basata sulla formula di Widmark. Fattori come l\'assunzione di cibo, i farmaci, la fatica, le varianti genetiche dell\'enzima ADH e lo stress possono spostare il tuo BAC effettivo del 20-30% in entrambe le direzioni. Non utilizzare mai questo calcolatore per decidere se guidare. Se hai bevuto, non guidare - quella è l\'unica regola con zero margine di errore.',
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
    text: 'Metabolismo dell Alcol: Scienza ed Eliminazione',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Comprendere come il nostro corpo elabora l etanolo è essenziale per la sicurezza e per mitigare i postumi della sbornia. Il nostro <strong>calcolatore di eliminazione dell alcol</strong> utilizza la rinomata <strong>Formula di Widmark</strong> per offrirti una mappa chiara del tuo stato metabolico.'
  },
  {
    type: 'diagnostic',
    title: 'La Farmacocinetica del BAC',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Biochimica',
    html: 'L alcol si distribuisce nell acqua corporea. Fattori come il peso e il coefficiente r (0,68 negli uomini / 0,55 nelle donne) determinano la diluizione iniziale dell etanolo nel sangue.'
  },
  {
    type: 'title',
    text: 'Ossidazione Epatica ed Enzimi',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Il fegato degrada il 95% dell alcol tramite l Alcol Deidrogenasi (ADH). Questo processo avviene a una velocità costante (cinetica di ordine zero), il che significa che non può essere accelerato dall esercizio o dal caffè.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Tasso di Eliminazione', value: '0,15 g/L·h', icon: 'mdi:clock-fast' },
      { label: 'Assorbimento Gastrico', value: '20% Etanolo', icon: 'mdi:stomach' },
      { label: 'Idratazione Suggerita', value: '1:1 Acqua/Drink', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Miti vs Realtà',
    items: [
      { pro: 'L acqua e gli elettroliti prima di dormire riducono la gravità dei postumi.', con: '' },
      { pro: '', con: 'Docce fredde: Non influenzano la concentrazione di alcol nel sangue.' },
      { pro: '', con: 'Caffè: Maschera la sonnolenza ma non ripristina i riflessi persi.' }
    ]
  },
  {
    type: 'card',
    title: 'Cosa Causa i Postumi della Sbornia?',
    icon: 'mdi:alert-decagram',
    html: 'Nota scientificamente come veisalgia, la sbornia è causata da disidratazione sistemica, accumulo di acetaldeide e una risposta infiammatoria immunitaria a citochine.'
  },
  {
    type: 'tip',
    title: 'Sicurezza Prima di Tutto: Conosci il Tuo Limite',
    html: 'Un BAC dello 0,05% compromette misurabilmente il giudizio, il tracciamento visivo e i tempi di reazione. In caso di dubbio, non guidare.'
  },
  {
    type: 'title',
    text: 'Il Ruolo del Cibo e il Tasso di Assorbimento',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Mangiare prima o durante l assunzione di alcol modifica radicalmente la cinetica di assorbimento. Il cibo nello stomaco rallenta lo svuotamento gastrico, riducendo il picco di etanolo nel sangue.'
  },
  {
    type: 'paragraph',
    html: 'Anche il tipo di bevanda alcolica influisce oltre al semplice gradiente alcolico e al volume. I drink gassati accelerano lo svuotamento gastrico e spingono l alcol nel sangue più velocemente.'
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
  bibliography,
  howTo,
  schemas,
};
