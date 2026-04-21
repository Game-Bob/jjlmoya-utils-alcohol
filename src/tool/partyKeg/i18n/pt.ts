import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'calculadora-cerveja-gelo-festa';
const title = 'Calculadora de Cerveja para Festas: Quantidade Por Pessoa para Casamentos e Aniversários';
const description = 'Ferramenta gratuita para calcular quanto cerveja e gelo você precisa com base em convidados, duração e temperatura. Perfeita para casamentos, aniversários e eventos ao ar livre.';

const ui: PartyKegUI = {
  calcStockTitle: 'Calculadora de Estoque',
  beerIceSub: 'Cerveja & Gelo para Eventos',
  guestsLabel: 'Convidados',
  durationLabel: 'Duração',
  hoursUnit: 'Horas',
  intensityLabel: 'Intensidade',
  chillLabel: 'Chill',
  standardLabel: 'Padrão',
  partyLabel: 'Festa',
  tempLabel: 'Temperatura',
  estimatedVolLabel: 'Volume Estimado',
  kegsLabel: 'Barris',
  iceRequiredLabel: 'Gelo Necessário',
  bagsLabel: 'Sacos',
  visualizationTitle: 'Visualização de Estoque',
  optimalMsg: 'Condições Ótimas',
  highMeltMsg: 'Alto Degelo Detectado',
  highEfficiencyMsg: 'Frio / Alta Eficiência'
};

const faqTitle = 'Perguntas Frequentes';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "Quantas cervejas uma pessoa bebe em 4 horas?",
    answer: "Em média, calcule 5 cervejas por pessoa para um evento de 4 horas. Isso pressupõe 2 bebidas na primeira hora e 1 para cada hora restante.",
  },
  {
    question: "Quanto gelo preciso para 100 cervejas?",
    answer: "Você precisará de aproximadamente 15–20 quilogramas de gelo (7–10 sacos). A regra prática é 0,75 kg de gelo por litro de bebida em condições normais. No verão ou ao ar livre acima de 25°C, aumente para 1 kg por litro: o calor ambiente acelera o derretimento e você ficará sem gelo muito mais rápido do que o esperado.",
  },
  {
    question: "Qual é a diferença entre um barril padrão e um barril de festa?",
    answer: "Um barril comercial padrão contém 50 litros, o que rende aproximadamente 200 porções (250 ml cada). Um barril de festa (mini-barril) geralmente contém 5 litros — cerca de 20 porções. Conhecer esses tamanhos ajuda você a traduzir a saída em litros da calculadora no número de recipientes para comprar.",
  },
  {
    question: "Por que preciso de tanto gelo se as cervejas já estão frias?",
    answer: "Porque resfriar e manter são dois processos separados. Levar uma lata de 25°C para 4°C consome o calor latente de fusão do gelo: cerca de 334 kJ/kg. Depois de frio, o gelo continua trabalhando para neutralizar o calor ambiente. Em um dia de verão a 35°C, a transferência de calor para o refrigerador pode derreter 1 kg de gelo por litro de bebida a cada 2–3 horas. É por isso que o pré-resfriamento das bebidas antes da festa reduz o consumo total de gelo pela metade.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "Estime o número de convidados",
    text: "Defina quantas pessoas irão participar. Nossa calculadora ajusta as quantidades com base nas médias estatísticas de consumo.",
  },
  {
    name: "Defina duração e intensidade",
    text: "Indique quantas horas o evento durará e o 'ritmo' da festa (chill, padrão ou intenso).",
  },
  {
    name: "Ajuste-se à temperatura ambiente",
    text: "A temperatura externa é fundamental para o cálculo do gelo. Quanto mais quente, maior será a taxa de degelo que precisamos compensar.",
  },
];


const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Quanto de Cerveja e Gelo Preciso Para Minha Festa?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'A pergunta de um milhão quando organizando qualquer evento: <strong>Quantos litros de cerveja devo comprar?</strong> Ficar sem é um desastre, mas comprar em excesso é uma despesa desnecessária. Esta ferramenta ajuda você a calcular a quantidade exata de álcool e, o mais importante, <strong>quantos sacos de gelo</strong> você precisa para mantê-lo gelado. Catedores profissionais e planejadores de eventos usam modelos estatísticos de consumo — e agora você também pode, gratuitamente.'
  },
  {
    type: 'title',
    text: 'A Fórmula de Consumo Por Pessoa',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Para estimar o álcool necessário, catedores profissionais usam uma fórmula baseada na "Taxa de Consumo Horária". Não é uma ciência exata, mas as estatísticas mostram que em uma festa padrão, aproximadamente 1,5 unidades são consumidas por hora por pessoa. Fatores como temperatura ambiente, disponibilidade de alimentos e a energia social do evento, todos mudam esse número base.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Consumo Chill', value: '1 bebida/hora', icon: 'mdi:tea-outline' },
      { label: 'Festa Padrão', value: '1,5 bebidas/hora', icon: 'mdi:glass-mug-variant' },
      { label: 'Casamento / Festival', value: '2,5+ bebidas/hora', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: 'A Física do Gelo',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Termodinâmica',
    html: 'Calcular gelo é onde a maioria dos anfitriões falha. O gelo serve duas funções: Resfriamento (levar cerveja de 25°C para 4°C) e Manutenção (lutar contra o calor ambiente). Em temperaturas acima de 30°C, a taxa de derretimento dobra. Um saco de gelo cheio sob o sol direto pode desaparecer em menos de 20 minutos, deixando suas bebidas quentes antes de a festa atingir seu pico.'
  },
  {
    type: 'tip',
    title: 'Dica Profissional Para Economizar Gelo',
    html: 'Mantenha os barris e latas na sombra antes de adicionar gelo. Se as bebidas estão quentes ao sol, os primeiros 50% do seu saco de gelo morrem em 10 minutos apenas trocando calor latente. Comece com bebidas pré-resfriadas para reduzir drasticamente quanto gelo você realmente precisa comprar.'
  },
  {
    type: 'title',
    text: 'Dados de Referência Para Logística',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Um barril padrão de 50L produz cerca de 200 porções. Um saco de gelo típico pesa 2 kg. Conhecendo esses números, você pode planejar o transporte e armazenamento necessários para seu evento sem surpresas de último minuto. Considere o derretimento do gelo durante o transporte — uma viagem de 30 minutos no verão pode custar um saco inteiro antes de a festa começar.'
  },
  {
    type: 'summary',
    title: 'Para Quem Esta Ferramenta É?',
    items: [
      'Anfitriões de Festas Particulares: Pare de adivinhar e confiantemente compre exatamente o que você precisa para sua próxima celebração.',
      'Planejadores de Eventos: Use modelos de consumo precisos para cotar clientes e planejar logística de bar profissionalmente.',
      'Gerentes de Locais: Padronize cálculos de estoque em eventos recorrentes com contagens diferentes de convidados.'
    ]
  },
  {
    type: 'paragraph',
    html: 'Uma variável frequentemente negligenciada é a <strong>taxa de desistência de convidados</strong>. Na maioria das festas, 10–15% dos convidados saem mais cedo e 10% podem não beber nada. A calculadora aplica um buffer conservador para que você nunca fique sem, mas também não fica com um excedente enorme. Entender esses ajustes ajuda você a refinar a estimativa para seu grupo e contexto específico. Sempre arredonde para cima na compra, pois barris abertos geralmente não podem ser devolvidos. Um pequeno excesso é sempre preferível a ficar sem bebida no meio da festa.'
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
