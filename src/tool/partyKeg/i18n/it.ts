import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'calcolatore-birra-ghiaccio-feste';
const title = 'Calcolatore Birra per Feste: Quantità per Persona a Matrimoni e Compleanni';
const description = 'Strumento gratuito per calcolare quanta birra e ghiaccio ti servono in base ai ospiti, alla durata e alla temperatura. Perfetto per matrimoni, compleanni e eventi all\'aperto.';

const ui: PartyKegUI = {
  calcStockTitle: 'Calcolatore di Stock',
  beerIceSub: 'Birra & Ghiaccio per Eventi',
  guestsLabel: 'Ospiti',
  durationLabel: 'Durata',
  hoursUnit: 'Ore',
  intensityLabel: 'Intensità',
  chillLabel: 'Chill',
  standardLabel: 'Standard',
  partyLabel: 'Party',
  tempLabel: 'Temperatura',
  estimatedVolLabel: 'Volume Stimato',
  kegsLabel: 'Fusti',
  iceRequiredLabel: 'Ghiaccio Necessario',
  bagsLabel: 'Sacchi',
  visualizationTitle: 'Visualizzazione Stock',
  optimalMsg: 'Condizioni Ottimali',
  highMeltMsg: 'Fusione Elevata Rilevata',
  highEfficiencyMsg: 'Freddo / Efficienza Alta'
};

const faqTitle = 'Domande Frequenti';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "Quante birre beve una persona in 4 ore?",
    answer: "In media, calcola 5 birre per persona per un evento di 4 ore. Questo presuppone 2 bevande nella prima ora e 1 per ogni ora restante.",
  },
  {
    question: "Quanto ghiaccio mi serve per 100 birre?",
    answer: "Avrai bisogno di circa 15–20 chilogrammi di ghiaccio (7–10 sacchi). La regola pratica è 0,75 kg di ghiaccio per litro di bevanda in condizioni normali. In estate o all\'aperto sopra i 25°C, aumenta a 1 kg per litro: il calore ambientale accelera lo scioglimento e resterai senza ghiaccio molto prima del previsto.",
  },
  {
    question: "Qual è la differenza tra un fusto standard e uno per feste?",
    answer: "Un fusto commerciale standard contiene 50 litri, che produce circa 200 porzioni (250 ml l\'una). Un fusto per feste (mini-fusto) di solito contiene 5 litri — circa 20 porzioni. Conoscere queste dimensioni ti aiuta a convertire l\'output in litri della calcolatrice nel numero di contenitori da acquistare.",
  },
  {
    question: "Perché ho bisogno di così tanto ghiaccio se le birre sono già fredde?",
    answer: "Perché il raffreddamento e il mantenimento sono due processi separati. Portare una lattina da 25°C a 4°C consuma il calore latente di fusione del ghiaccio: circa 334 kJ/kg. Una volta fredda, il ghiaccio continua a lavorare per compensare il calore ambientale. In una giornata estiva a 35°C, il trasferimento di calore nel frigorifero può sciogliere 1 kg di ghiaccio per litro di bevanda ogni 2–3 ore. Ecco perché pre-raffreddare le bevande prima della festa riduce il consumo totale di ghiaccio della metà.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "Stima il numero di ospiti",
    text: "Definisci quante persone parteciperanno. Il nostro calcolatore regola le quantità in base alle medie statistiche di consumo.",
  },
  {
    name: "Definisci durata e intensità",
    text: "Indica quante ore durerà l\'evento e il 'ritmo' della festa (tranquillo, standard o intenso).",
  },
  {
    name: "Adatta la temperatura ambiente",
    text: "La temperatura esterna è fondamentale per il calcolo del ghiaccio. Più fa caldo, più alta è la velocità di scioglimento che dobbiamo compensare.",
  },
];


const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Quanta Birra e Ghiaccio mi Serve per la Mia Festa?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'La domanda milionaria quando organizzi un evento: <strong>Quanti litri di birra dovrei comprare?</strong> Rimanere a corto è un disastro, ma comprare troppo è una spesa inutile. Questo strumento ti aiuta a calcolare la quantità esatta di alcol e, soprattutto, <strong>quanti sacchi di ghiaccio</strong> ti servono per tenerlo fresco. I catering professionali e i pianificatori di eventi utilizzano modelli di consumo statistico — e ora puoi farlo anche tu, gratuitamente.'
  },
  {
    type: 'title',
    text: 'La Formula di Consumo Per Persona',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Per stimare l\'alcol necessario, i catering professionali utilizzano una formula basata sulla "Velocità di Consumo Oraria". Non è una scienza esatta, ma le statistiche mostrano che a una festa standard, circa 1,5 unità vengono consumate all\'ora per persona. Fattori come la temperatura ambiente, la disponibilità di cibo e l\'energia sociale dell\'evento cambiano tutti questo numero di base.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Consumo Chill', value: '1 bevanda/ora', icon: 'mdi:tea-outline' },
      { label: 'Festa Standard', value: '1,5 bevande/ora', icon: 'mdi:glass-mug-variant' },
      { label: 'Matrimonio / Festival', value: '2,5+ bevande/ora', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: 'La Fisica del Ghiaccio',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Termodinamica',
    html: 'Calcolare il ghiaccio è dove la maggior parte degli ospiti fallisce. Il ghiaccio serve due funzioni: Raffreddamento (da 25°C a 4°C) e Mantenimento (combattere il calore ambientale). A temperature superiori a 30°C, la velocità di scioglimento raddoppia. Un intero sacco di ghiaccio al sole diretto può essere esaurito in meno di 20 minuti, lasciando le tue bevande calde prima che la festa raggiunga il suo apice.'
  },
  {
    type: 'tip',
    title: 'Consiglio Professionale per Risparmiare Ghiaccio',
    html: 'Tieni i fusti e le lattine all\'ombra prima di aggiungere il ghiaccio. Se le bevande sono calde al sole, il primo 50% del tuo primo sacco di ghiaccio sarà perso in 10 minuti semplicemente scambiando calore latente. Inizia con bevande pre-raffreddate per ridurre drasticamente quanto ghiaccio hai effettivamente bisogno di comprare.'
  },
  {
    type: 'title',
    text: 'Dati di Riferimento per la Logistica',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Un fusto standard da 50L produce circa 200 porzioni. Un sacco di ghiaccio tipico pesa 2 kg. Conoscendo questi numeri, puoi pianificare il trasporto e lo stoccaggio necessari per il tuo evento senza sorprese dell\'ultimo minuto. Tieni conto dello scioglimento del ghiaccio durante il trasporto — un viaggio di 30 minuti in estate può costarti un intero sacco prima che la festa inizi.'
  },
  {
    type: 'summary',
    title: 'Per chi è questo strumento?',
    items: [
      'Padroni di Casa per Feste Private: Smetti di indovinare e acquista fiduciosamente esattamente quello che ti serve per la tua prossima celebrazione.',
      'Pianificatori di Eventi: Utilizza modelli di consumo accurati per quotare i clienti e pianificare professionalmente la logistica del bar.',
      'Gestori di Locali: Standardizza i calcoli di stock su eventi ricorrenti con diverse presenze di ospiti.'
    ]
  },
  {
    type: 'paragraph',
    html: 'Una variabile spesso trascurata è il <strong>tasso di abbandono degli ospiti</strong>. Nella maggior parte delle feste, il 10–15% degli ospiti se ne va presto e il 10% potrebbe non bere affatto. La calcolatrice applica un margine conservativo in modo che tu non sia mai a corto, ma anche non ti ritrovi con un enorme surplus. Comprendere questi adeguamenti ti aiuta a affinare la stima per il tuo gruppo e contesto specifici. Arrotonda sempre per eccesso quando acquisti, poiché i fusti aperti generalmente non possono essere restituiti. Un piccolo surplus è sempre preferibile a esaurire le scorte a metà festa.'
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
  bibliography,
  howTo,
  schemas,
};
