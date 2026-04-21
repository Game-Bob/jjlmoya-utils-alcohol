import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'costruttore-vino-fortificato';
const title = 'Costruttore di Vino Fortificato & Vermouth: Calcolatore Quadrato di Pearson';
const description = 'Calcola esattamente quanto distillato aggiungere al tuo vino per raggiungere la gradazione alcolica desiderata. Crea il vermouth, il porto e lo sherry perfetti con il metodo del Quadrato di Pearson.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: 'Cosa stai creando?',
  intentionVermouth: 'Vermouth',
  intentionPort: 'Porto',
  intentionSherry: 'Sherry',
  intentionCustom: 'Personalizzato',
  modeALabel: 'Dal vino che ho',
  modeBLabel: 'Volume finale desiderato',
  wineSection: 'Vino Base',
  wineVolumeLabel: 'Volume del vino (L)',
  wineAbvLabel: 'Gradazione vino (%)',
  spiritSection: 'Distillato di Fortificazione',
  spiritAbvLabel: 'Gradazione distillato (%)',
  brandyPreset: 'Brandy (38°)',
  neutralPreset: 'Neutro (96°)',
  aguardientePreset: 'Aguardiente (42°)',
  targetAbvLabel: 'Gradazione obiettivo (%)',
  targetVolumeLabel: 'Volume totale obiettivo (L)',
  resultsTitle: 'La Tua Ricetta',
  addLabel: 'Aggiungere',
  finalVolumeLabel: 'Volume finale',
  bottlesSection: 'Bottiglie necessarie',
  copyBtn: 'Copia Ricetta',
  copiedBtn: 'Copiato!',
  pearsonTitle: 'Quadrato di Pearson',
  wineCornerLabel: 'Vino',
  spiritCornerLabel: 'Distillato',
  emptyState: 'Inserisci i tuoi valori per vedere il Quadrato di Pearson',
  errorAbv: 'La gradazione del distillato deve essere superiore alla gradazione obiettivo, e l\'obiettivo deve essere superiore alla gradazione del vino.',
  errorMode: 'Inserisci un volume valido per calcolare.',
};

const faqTitle = 'Domande Frequenti';
const bibliographyTitle = 'Bibliografia & Fonti';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'Cos\'è il metodo del Quadrato di Pearson?',
    answer: 'Il Quadrato di Pearson è un semplice metodo grafico utilizzato in enologia per calcolare i rapporti di miscelazione. Si inserisce la gradazione alcolica obiettivo al centro del quadrato, la gradazione del vino in alto a sinistra e quella del distillato in basso a sinistra. Le differenze diagonali forniscono le parti proporzionali di ciascun liquido necessarie.',
  },
  {
    question: 'Qual è la gradazione tipica del vermouth?',
    answer: 'Il vermouth tradizionale ha una gradazione compresa tra il 15 % e il 18 %. Il vermouth secco (stile francese) si trova generalmente nella fascia bassa (15–16 %), mentre il vermouth dolce (stile italiano) raggiunge spesso il 16–18 %. Il vermouth rosato si colloca nel mezzo.',
  },
  {
    question: 'Quale vino base devo usare per il vermouth?',
    answer: 'Tradizionalmente funziona meglio un vino bianco secco e neutro tra il 10 e il 12 % di gradazione alcolica. Il vino fornisce la struttura di base, ma poiché verrà aromatizzato con erbe e botaniche, non è necessario un vino costoso — una base pulita e acida è l\'ideale.',
  },
  {
    question: 'Posso usare alcol neutro invece del brandy?',
    answer: 'Sì. L\'alcol neutro (96 % vol.) offre il massimo controllo e un profilo aromatico più pulito. Il brandy aggiunge il proprio carattere (quercia, frutta secca, vaniglia), che può essere desiderabile o indesiderabile a seconda dello stile. Il porto usa tradizionalmente acquavite d\'uva, mentre alcuni vermouth utilizzano alcol neutro.',
  },
  {
    question: 'Come fa la fortificazione a conservare il vino?',
    answer: 'Quando la gradazione alcolica del vino supera circa il 15–16 %, la fermentazione da parte dei lieviti viene inibita — i lieviti non sopravvivono in ambienti ad alto contenuto alcolico. Per questo motivo i vini fortificati hanno una conservabilità molto più lunga rispetto ai vini normali. L\'alcol agisce come conservante naturale contro il deterioramento da lieviti e batteri.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Scegliere lo stile', text: 'Seleziona Vermouth, Porto, Sherry o Personalizzato per compilare automaticamente l\'intervallo di gradazione alcolica obiettivo consigliato.' },
  { name: 'Inserire i dati del vino', text: 'Inserisci il volume del tuo vino base (o il volume finale obiettivo nel Modo B) e la sua gradazione alcolica attuale.' },
  { name: 'Impostare il distillato', text: 'Scegli un preset di distillato o inserisci una gradazione personalizzata. Il Quadrato di Pearson si aggiorna in tempo reale.' },
  { name: 'Leggere la ricetta', text: 'Il calcolatore mostra esattamente quanti millilitri di distillato aggiungere e il volume finale.' },
];

const bibliography: FortifiedWineBuilderLocaleContent['bibliography'] = [
  { name: 'Jackisch, P. — Vinificazione Moderna (Cornell University Press)', url: 'https://www.cornellpress.cornell.edu/book/9780801493355/modern-winemaking/' },
  { name: 'Goode, J. — La Scienza del Vino (University of California Press)', url: 'https://www.ucpress.edu/book/9780520276895/the-science-of-wine' },
  { name: 'Quadrato di Pearson — University of California ANR', url: 'https://ucanr.edu/sites/wineserver/files/24612.pdf' },
];

const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'Il Quadrato di Pearson: Matematica antica, vino perfetto', level: 2 },
  { type: 'paragraph', html: 'Il <strong>Quadrato di Pearson</strong> è uno degli strumenti più antichi ed eleganti della matematica enologica. Sviluppato nel XIX secolo, permette a qualsiasi produttore di vino — professionista o amatore — di calcolare i rapporti di miscelazione con nient\'altro che sottrazioni. Il nostro strumento digitalizza questo metodo visivo e aggiunge un feedback in tempo reale, così passi meno tempo a calcolare e più tempo a creare.' },
  { type: 'stats', items: [{ label: 'Vermouth', value: '15–18 % vol.', icon: 'mdi:glass-cocktail' }, { label: 'Porto', value: '18–20 % vol.', icon: 'mdi:bottle-wine' }, { label: 'Sherry', value: '15–17 % vol.', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: 'Perché fortificare al 18 %?', icon: 'mdi:shield-check', html: 'Oltre circa il 15 % vol., <em>Saccharomyces cerevisiae</em> — il principale lievito del vino — viene inibito. Raggiunto il 18 %, la fermentazione è completamente arrestata. Ecco perché il vino porto conserva lo zucchero residuo: il distillato viene aggiunto a metà fermentazione, uccidendo il lievito prima che tutto lo zucchero venga consumato.' },
  { type: 'tip', title: 'Consiglio Pro: Misurare a 20 °C', html: 'La densità dell\'alcol cambia con la temperatura. Le misurazioni ufficiali della gradazione alcolica sono calibrate a 20 °C. Se il tuo distillato o vino è significativamente più caldo o più freddo, applica un fattore di correzione: circa +0,04 % vol. per °C al di sotto dei 20 °C e −0,04 % per °C al di sopra.' },
  { type: 'title', text: 'La Rinascita del Vermouth Artigianale', level: 2 },
  { type: 'paragraph', html: 'L\'Europa meridionale sta vivendo una rinascita del vermouth artigianale. Barcellona, Valencia e San Sebastián hanno recuperato <em>la hora del vermut</em> come istituzione culturale, e piccoli produttori in Spagna, Italia e Francia stanno imbottigliando espressioni straordinarie. Ciò ha creato una nuova generazione di produttori casalinghi che desiderano strumenti tecnici all\'altezza delle loro ambizioni.' },
  { type: 'summary', title: 'A chi serve questo strumento?', items: ['Produttori di vino casalinghi: Fortifica il tuo raccolto con precisione invece di procedere a caso.', 'Produttori di vermouth artigianale: Prototipa nuove gradazioni obiettivo prima di scalare a lotti interi.', 'Educatori del settore spirits: Dimostra visivamente il metodo del Quadrato di Pearson durante i workshop.'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliographyTitle, bibliography, howTo, schemas };
