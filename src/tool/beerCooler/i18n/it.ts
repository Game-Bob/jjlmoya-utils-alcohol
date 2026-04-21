import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'raffreddatore-birra';
const title = 'Calcolatore di Raffreddamento della Birra con la Legge di Newton';
const description = 'Calcola con vera termodinamica — Legge di Raffreddamento di Newton — esattamente quanto tempo hai bisogno affinché la tua birra raggiunga la temperatura di servizio perfetta in frigorifero o congelatore.';

const ui: BeerCoolerUI = {
  step1Title: 'Cosa stai raffreddando?',
  canLabel: 'Lattina',
  aluminumLabel: 'Alluminio',
  bottleLabel: 'Bottiglia',
  glassLabel: 'Vetro',
  step2Title: 'Dove lo metti?',
  fridgeLabel: 'Frigorifero',
  freezerLabel: 'Congelatore',
  step3Title: 'Regola le Temperature',
  initialTempLabel: 'Temp. Iniziale',
  targetTempLabel: 'Obiettivo Freddo',
  glacialLabel: 'Glaciale',
  perfectLabel: 'Perfetto',
  bodegaLabel: 'Bodega',
  readyTitle: 'Pronto',
  readyDescription: 'Seleziona contenitore e luogo per calcolare.',
  estimatedTimeLabel: 'Tempo stimato',
  methodLabel: 'Metodo',
  containerLabel: 'Contenitore',
  alreadyColdLabel: 'Già freddo!',
  neverColdLabel: 'Mai freddo'
};

const faqTitle = 'Domande Frequenti';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: 'Come calcola questo strumento il tempo di raffreddamento?',
    answer: 'Applica la Legge di Raffreddamento di Newton: T(t) = T_env + (T₀ - T_env) × e^(-kt). La costante k varia a seconda del materiale del contenitore e del mezzo di raffreddamento. Una lattina di alluminio in frigorifero ha un k molto diverso da una bottiglia di vetro in congelatore. I valori qui utilizzati sono calibrati su esperimenti reali per ogni combinazione.',
  },
  {
    question: 'Il trucco del tovagliolo bagnato con sale funziona davvero?',
    answer: 'Sì, molto notevolmente. Avvolgere il contenitore in un tovagliolo di carta umido con sale accelera il raffreddamento per due motivi: l\'evaporazione dell\'acqua estrae calore aggiuntivo (raffreddamento evaporativo), e il sale abbassa il punto di congelamento dell\'acqua, mantenendo il contatto umido più attivo. Puoi guadagnare un ulteriore calo di 2–4°C nei primi minuti rispetto a una lattina asciutta nel congelatore.',
  },
  {
    question: 'Qual è la temperatura di servizio ideale per diversi stili di birra?',
    answer: 'Dipende dallo stile. Le Lager e le Pilsner si servono meglio tra 3°C e 7°C. Le IPA e le Pale Ale brillano a 7°C-10°C. Gli Stout, Porter e ale complesse dovrebbero essere serviti più caldi, tra 12°C e 14°C, così i loro composti aromatici — caffè, cioccolato, noci — possono esprimersi pienamente.',
  },
  {
    question: 'La mia birra può esplodere se la lascio nel congelatore?',
    answer: 'Sì. L\'alcol e gli zuccheri disciolti abbassano il punto di congelamento della birra sotto quello dell\'acqua pura: una lager standard al 5% congela intorno a -3°C. Mentre l\'acqua cristallizza, il volume aumenta e l\'anidride carbonica disciolta aumenta la pressione interna finché il contenitore cede. Più di 60 minuti nel congelatore — soprattutto bottiglie di vetro — è davvero pericoloso. Usa questo calcolatore per evitarlo.',
  },
  {
    question: 'La birra "brucia" se raffreddata troppo velocemente?',
    answer: 'No. Il mito dello "shock termico" che rovina la birra è falso. Quello che può genuinamente danneggiarla è il ripetuto congelamento e scongelamento — che rompe le proteine e intorbida il liquido — o l\'esposizione diretta alla luce UV. Un raffreddamento veloce nel congelatore o in acqua ghiacciata non danneggia il sapore.',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: 'Seleziona il contenitore',
    text: 'Scegli tra una lattina di alluminio o una bottiglia di vetro. Il materiale influisce drasticamente sulla velocità del trasferimento di calore.',
  },
  {
    name: 'Scegli il metodo di raffreddamento',
    text: 'Indica se stai usando un frigorifero convenzionale (4°C) o un congelatore (-18°C) per un processo ultra-veloce.',
  },
  {
    name: 'Regola le temperature',
    text: 'Definisci la temperatura attuale della bevanda (temperatura ambiente) e la tua temperatura di raffreddamento desiderata.',
  },
];


const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'La Scienza del Freddo e della Termodinamica',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Perché la lattina si raffredda prima della bottiglia? È magia? No, è la <strong>Legge di Raffreddamento di Newton</strong> in azione. Questo strumento calcola matematicamente il momento esatto in cui la tua bevanda raggiunge la perfezione termodinamica. Ogni materiale, ogni ambiente, ogni temperatura iniziale si inserisce nella stessa equazione differenziale che i fisici e gli ingegneri usano per modellare il trasferimento di calore nei sistemi industriali.'
  },
  {
    type: 'diagnostic',
    title: 'La Formula Principale',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Fisica',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). Questa equazione differenziale descrive come la temperatura di un oggetto cambia proporzionalmente alla differenza tra la sua temperatura e quella dell\'ambiente. La costante k dipende dal materiale e dalla geometria del contenitore, motivo per cui una lattina si raffredda più velocemente di una bottiglia dello stesso volume.'
  },
  {
    type: 'title',
    text: 'Guerra dei Materiali: Alluminio vs. Vetro',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'L\'<strong>alluminio</strong> ha una conduttività termica di ~205 W/(m·K), mentre il <strong>vetro</strong> appena raggiunge 0,8 W/(m·K). Il metallo trasferisce il freddo violentemente veloce, rendendolo il contenitore ideale per le emergenze. Tuttavia, il vetro fornisce un migliore isolamento una volta freddo, mantenendo la temperatura ideale più a lungo durante il consumo. Questo compromesso è il motivo per cui diverse culture birrarie hanno sviluppato preferenze diverse per ogni materiale.'
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
    title: 'La Zona Pericolo Congelatore',
    icon: 'mdi:snowflake-alert',
    html: 'A causa dell\'alcol e degli zuccheri disciolti, la birra congela sotto 0°C — una lager standard al 5% congela intorno a -3°C. Quando l\'acqua cristallizza si espande, mentre la pressione di CO2 aumenta simultaneamente. Il risultato è un contenitore che può rompersi violentemente. Non lasciare mai una birra nel congelatore per più di 45 minuti senza impostare un timer.'
  },
  {
    type: 'proscons',
    title: 'Trucchi di Raffreddamento d\'Emergenza',
    items: [
      { pro: 'Trucco del Tovagliolo: Avvolgi la lattina in tovagliolo di carta bagnato, poi congela — l\'evaporazione accelera il raffreddamento.', con: '' },
      { pro: 'Salamoia Artica: Riempi un secchio con acqua, ghiaccio e 2 cucchiai di sale per raggiungere salamoia a -5°C.', con: '' },
      { pro: 'Metodo di Rotazione: Ruota la bottiglia in acqua ghiacciata per forzare convezione e accorciare il tempo di raffreddamento.', con: '' },
      { pro: '', con: 'Non mettere una lattina direttamente su uno scaffale del congelatore senza un timer — le lattine rotte sono disastrose e pericolose.' }
    ]
  },
  {
    type: 'tip',
    title: 'Consiglio Pro: Prereffreddare il Bicchiere',
    html: 'Il bicchiere in cui versi la birra ha una massa termica significativa. Un bicchiere caldo può aumentare la temperatura di una birra perfettamente fredda di 2-3°C istantaneamente al contatto. Metti il tuo bicchiere di servizio nel congelatore per 5 minuti prima di versare, o risciacqualo con acqua fredda. Questo semplice passaggio estende la finestra in cui la tua birra ha esattamente il sapore previsto.'
  },
  {
    type: 'title',
    text: 'Comprendere la Costante di Raffreddamento',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'La costante di raffreddamento k nell\'equazione di Newton non è un valore universale fisso — è una proprietà empirica di ogni contenitore specifico e mezzo. Una lattina di alluminio sottile in acqua ghiacciata ha un k drasticamente diverso da una bottiglia di vetro spessa in aria del frigorifero ferma. Il nostro calcolatore utilizza valori misurati calibrati contro esperimenti reali per ogni tipo di contenitore, dandoti previsioni accurate entro pochi minuti per tipici scenari di raffreddamento domestico.'
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
  bibliography,
  howTo,
  schemas,
};
