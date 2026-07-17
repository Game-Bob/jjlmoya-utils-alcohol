import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'cocktail-equilibrato';
const title = 'Cocktail Balancer: La Legge dell\'Acido';
const description = 'Calcola il perfetto equilibrio tra dolce e acido per i tuoi cocktail. Padroneggia il rapporto aureo della mixologia.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Ricette',
  saveBtn: 'Salva',
  resetBtn: 'Ripristina',
  emptyStateTitle: 'Il Tuo Banco di Lavoro è Vuoto',
  emptyStateDescription: 'Aggiungi ingredienti per analizzare l\'equilibrio del tuo cocktail in tempo reale.',
  addBtn: 'Aggiungi Ingrediente',
  addMoreBtn: 'Aggiungi un Altro Ingrediente',
  flavorProfileTitle: 'Profilo Gustativo',
  volLabel: 'Volume',
  sugarLabel: 'Zucchero',
  colorLabel: 'Colore',
  sourLawTitle: 'Legge dell\'Acido',
  acidDryLabel: 'Acido (Secco)',
  balanceLabel: 'Equilibrio',
  sweetLabel: 'Dolce',
  aiSuggestionTitle: 'Suggerimento IA',
  addIngredientTitle: 'Aggiungi Ingrediente',
  searchPlaceholder: 'Cerca rum, lime, sciroppo...',
  presetsTitle: 'Ricette e Preset',
  savedSectionTitle: 'I Miei Salvati',
  classicsSectionTitle: 'Classici',
  confirmDeleteTitle: 'Eliminare tutto?',
  confirmDeleteText: 'Questo rimuoverà tutti gli ingredienti dal tuo banco di lavoro. Questa azione non può essere annullata.',
  cancelBtn: 'Annulla',
  deleteBtn: 'Elimina',
  verdictSpiritSeco: 'Spiritoso / Secco',
  verdictSoloDulce: 'Solo Dolce (Old Fashioned)',
  verdictMuyAcido: 'Troppo Acido / Osso Secco',
  verdictAcido: 'Acido / Agro',
  verdictEquilibrado: 'Equilibrato (Acido)',
  verdictDulce: 'Dolce / Commerciale',
  verdictEmpalagoso: 'Troppo Dolce',
  fixAddBitters: 'Manca l\'Amaro',
  fixAddSugar: 'Troppo Acido',
  fixAddAcid: 'Troppo Dolce'
};

const faqTitle = 'Domande Frequenti';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "Cos'è la 'Legge dell'Acido'?",
    answer: "È il rapporto aureo della mixologia che equilibra tre elementi: la base forte (spirito), l'acido (agrumi) e il dolce (sciroppi). Una ricetta classica di solito segue il rapporto 2:1:1 (Forte:Acido:Dolce), sebbene questo vari a seconda della forza e della densità.",
  },
  {
    question: "Come la diluizione influisce l'equilibrio del cocktail?",
    answer: "Il ghiaccio non solo raffredda; aggiunge acqua (diluizione) che apre gli aromi dello spirito e ammorbidisce i picchi di acidità e dolcezza. Un cocktail equilibrato nello shaker può diventare squilibrato se lasciato troppo a lungo con ghiaccio nel bicchiere.",
  },
  {
    question: "Perché i miei cocktail fatti in casa non sanno come quelli al bar?",
    answer: "Di solito è dovuto alla mancanza di equilibrio tra zucchero e il pH degli agrumi. I limoni variano di acidità a seconda della stagione. Il nostro calcolatore ti aiuta ad adattare la quantità esatta di sciroppo in base al volume di succo utilizzato.",
  },
  {
    question: "Cosa sono i gradi Brix e perché sono importanti nei cocktail?",
    answer: "Brix è una scala che misura la quantità di zucchero disciolto in un liquido. Uno sciroppo semplice (1:1) si attesta intorno a 50 °Brix; uno sciroppo ricco (2:1) supera 66 °Brix. Più alto è il Brix, più corpo e dolcezza apporta per unità di volume. Sapere questo ti consente di scambiare gli sciroppi in una ricetta senza rompere l'equilibrio.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Seleziona la base alcolica",
    text: "Scegli lo spirito principale (Gin, Rum, Whiskey) dal nostro database per conoscerne il corpo e il contributo alcolico.",
  },
  {
    name: "Inserisci l'agente acido",
    text: "Aggiungi il volume di succo di limone, lime o pompelmo. Il calcolatore analizzerà l'impatto del pH sulla miscela.",
  },
  {
    name: "Regola il componente dolce",
    text: "Inserisci il tipo di sciroppo (semplice, 2:1, agave) e osserva l'indicatore di equilibrio muoversi in tempo reale.",
  },
  {
    name: "Servizio perfetto",
    text: "Esamina il verdetto finale dello strumento: il rapporto acido, l'ABV stimato dopo diluizione e i suggerimenti di correzione. Servi con ghiaccio fresco e regola gli agrumi o lo sciroppo secondo il gusto.",
  },
];


const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ingegneria Molecolare e Equilibrio dei Liquidi',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Benvenuto nel laboratorio digitale dove l\'intuizione incontra la matematica. Questo strumento non è un semplice libro di ricette; è un <strong>simulatore fisico-chimico avanzato</strong> progettato per decostruire e analizzare la struttura molecolare dei tuoi cocktail in tempo reale. Ogni goccia di agrume, ogni misura di spirito, ogni grammo di sciroppo interagisce secondo leggi chimiche immutabili che determinano se la tua bevanda sarà un capolavoro o un fallimento deludente.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Lime', value: '~6% Acido', icon: 'mdi:fruit-citrus' },
      { label: 'Limone', value: '~6% Acido', icon: 'mdi:fruit-citrus' },
      { label: 'Pompelmo', value: '~1-2% Acido', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'La Scienza dell\'Acidità',
    icon: 'mdi:fruit-citrus',
    html: 'L\'acidità non è solo un gusto; è la spina dorsale strutturale di qualsiasi cocktail equilibrato. Senza la giusta acidità, una bevanda diventa piatta, unidimensionale e dimenticabile. Il nostro algoritmo distingue l\'acidità titolabile di una lime persiana rispetto a un limone Eureka, tenendo conto delle variazioni stagionali del pH degli agrumi che possono spostare la tua ricetta di un intero punto di equilibrio al palato.'
  },
  {
    type: 'card',
    title: 'Controllo Brix (Dolcezza)',
    icon: 'mdi:spoon-sugar',
    html: 'Il corpo e la texture del tuo cocktail dipendono interamente dallo zucchero disciolto. Uno sciroppo semplice (1:1) si comporta molto diversamente da uno sciroppo ricco (2:1), miele o nettare d\'agave. Ogni dolcificante ha un grado Brix e una viscosità diversi che influenzano il modo in cui la bevanda riveste la lingua. Il nostro calcolatore calcola i grammi esatti di zucchero disciolto per prevedere la texture finale della bocca e la percezione della dolcezza.'
  },
  {
    type: 'card',
    title: 'Termodinamica e Diluizione',
    icon: 'mdi:water-percent',
    html: 'Un cocktail agitato si diluisce dal 25-40% a seconda della temperatura del ghiaccio, della tecnica di agitazione e della durata. Questa aggiunta d\'acqua non è un difetto; è un ingrediente essenziale che apre gli aromi e ammorbidisce il bordo dell\'alcol. Il nostro calcolatore stima l\'ABV finale dopo la diluizione, così puoi progettare bevande con la forza e l\'equilibrio di sapore esattamente intesi.'
  },
  {
    type: 'title',
    text: 'Al di Là del Rapporto di Base',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Molti baristi imparano la regola classica 2:1:1 (2 parti spirito, 1 parte acido, 1 parte dolce) e la trattano come verità universale. Tuttavia, <strong>la chimica è molto più sfumata</strong>. Un limone dalla Sicilia contiene un\'acidità diversa da una lime dal Messico. Un triple sec come Cointreau si comporta radicalmente diverso da un Blue Curaçao. La stessa ricetta può assaggiare perfettamente equilibrata una settimana e brutalmente acida la prossima, semplicemente a causa della variazione di frutta stagionale.'
  },
  {
    type: 'paragraph',
    html: 'Questo bilanciatore supera quelle barriere semplicistiche. Inserendo i tuoi ingredienti specifici, consulti un database vivente che regola dinamicamente i vettori di acidità e dolcezza per offrire una mappa sensoriale precisa della tua creazione. Smetti di indovinare e inizia a progettare i tuoi cocktail con lo stesso rigore scientifico che i baristi dei migliori stabilimenti utilizzano in ogni servizio.'
  },
  {
    type: 'summary',
    title: 'Per chi è questo strumento?',
    items: [
      'Baristi Professionisti: Standardizza le ricette e crea menu signature con consistenza riproducibile.',
      'Appassionati Casalinghi: Smetti di indovinare e inizia a capire perché i tuoi cocktail hanno successo o falliscono.',
      'Sviluppatori di Bevande: Prototipa rapidamente nuovi concetti di sapore prima di costose esecuzioni di produzione.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'La Zona d\'Oro',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Obiettivo',
    html: 'Questo è l\'obiettivo finale: un pH controllato in cui lo zucchero neutralizza l\'aggressione dell\'acido senza mascherare gli oli essenziali e i composti aromatici dello spirito di base. Questo equilibrio preciso è dove vivono i classici immortali - il Daiquiri, la Margarita, il Sidecar - bevande che hanno resistito ai decenni perché obbediscono alle leggi fondamentali della chimica del sapore.'
  },
  {
    type: 'tip',
    title: 'Consiglio da Esperto: Usa Sempre Agrumi Freschi',
    html: 'Spremi sempre gli agrumi all\'ultimo momento. Il succo di limone e lime si ossida rapidamente, perdendo l\'acidità viva entro 20-30 minuti dalla spremitura. Un cocktail preparato con succo veramente fresco avrà sempre una luminosità e una vitalità al palato che nessun prodotto in bottiglia può replicare. Usa frutta a temperatura ambiente per massimizzare la resa del succo.'
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
  bibliography,
  howTo,
  schemas,
};
