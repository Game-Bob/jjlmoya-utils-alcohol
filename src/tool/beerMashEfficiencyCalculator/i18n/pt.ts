import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'calculadora-eficiencia-mostura-cerveja';
const title = 'Calculadora de Eficiência da Mostura de Cerveja';
const description = 'Calcule a porcentagem de eficiência da mostura, extração de açúcares e gravidade específica esperada para cerveja artesanal.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Métrico',
  stagePreboil: 'Mosto pré-fervura',
  stagePostboil: 'Mosto pós-fervura',
  unitImperial: 'Imperial',
  labels: {
    grainWeight: 'Peso total dos maltes',
    grainType: 'Preset de potencial do malte',
    customPotential: 'Potencial personalizado (SG)',
    wortVolume: 'Volume de mosto pré-fervura',
    measuredSg: 'Gravidade específica medida (SG)',
    unitSystem: 'Sistema de unidades',
    sampleTemp: 'Temperatura amostra',
    calibTemp: 'Temperatura calibração',
    stageLabel: 'Etapa de mostura',
    presets: 'Potenciais comuns de malte',
  },
  units: {
    weightKg: 'kg',
    weightLb: 'lb',
    volumeL: 'L',
    volumeGal: 'gal',
    sg: 'SG',
    brix: 'Brix',
    percent: '%',
    tempC: '°C',
    tempF: '°F',
  },
  grainPresets: {
    pilsner: 'Malte Pilsner (1.037 / 37 PPG)',
    pale_ale: 'Malte Pale Ale (1.038 / 38 PPG)',
    vienna: 'Malte Viena (1.036 / 36 PPG)',
    munich: 'Malte Munique (1.035 / 35 PPG)',
    wheat: 'Malte de trigo (1.038 / 38 PPG)',
    caramel_30: 'Caramelo 30L (1.034 / 34 PPG)',
    caramel_60: 'Caramelo 60L (1.034 / 34 PPG)',
    chocolate: 'Malte chocolate (1.034 / 34 PPG)',
    custom: 'Potencial personalizado...',
  },
  results: {
    efficiencyTitle: 'Eficiência da mostura',
    efficiencyBadge: 'Status calculado',
    correctedGravity: 'SG corrigida por temp',
    measuredGravity: 'Gravidade medida',
    expectedGravity75: 'SG a 75% de eficiência',
    expectedGravity80: 'SG a 80% de eficiência',
    expectedGravity85: 'SG a 85% de eficiência',
    potentialPoints: 'Pontos potenciais totais',
    extractedPoints: 'Pontos extraídos medidos',
    wortBrix: 'Brix estimado',
  },
  statusMessages: {
    excellent: 'Excelente extração (82%+)',
    good: 'Boa eficiência (74% - 81%)',
    average: 'Eficiência média (65% - 73%)',
    poor: 'Baixa extração (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Extração na panela de mostura',
    wortLevel: 'Nível de mosto',
    sugarExtraction: 'Extração de açúcares',
  },
};

const faq = [
  {
    question: 'O que é a eficiência da mostura na produção de cerveja?',
    answer: 'A eficiência da mostura é a porcentagem de açúcares potenciais extraídos dos maltes para o mosto antes da fervura.',
  },
  {
    question: 'Qual é uma boa eficiência de mostura?',
    answer: 'Na produção caseira, uma eficiência entre 70% e 80% é considerada muito boa.',
  },
  {
    question: 'Como se calcula a eficiência da mostura?',
    answer: 'Compara-se a quantidade de pontos de gravidade extraídos no mosto com o máximo teórico disponível dos grãos.',
  },
  {
    question: 'Como melhorar uma eficiência baixa?',
    answer: 'Ajuste a moagem do grão, mantenha o pH da mostura entre 5.2 e 5.6 e faça uma lavagem uniforme do bagaço.',
  },
  {
    question: 'Qual a diferença entre eficiência da mostura e eficiência do equipamento?',
    answer: 'A eficiência da mostura mede apenas a extração na panela; a eficiência global inclui perdas no trub e fermentador.',
  },
  {
    question: 'Como a relação água-grão afeta a extração?',
    answer: 'Mosturas mais fluidas (3.5 a 4.0 L por kg) melhoram a ação enzimática e a lavagem dos açúcares.',
  }
];

const howTo = [
  {
    name: 'Selecionar o sistema de unidades',
    text: 'Escolha entre o sistema métrico ou imperial.',
  },
  {
    name: 'Informar peso e potencial dos maltes',
    text: 'Selecione o tipo de malte ou insira um valor personalizado.',
  },
  {
    name: 'Digitar volume de mosto e densidade medida',
    text: 'Informe o volume coletado e a leitura do densímetro.',
  },
  {
    name: 'Analisar a eficiência e as metas',
    text: 'Compare a densidade obtida com os alvos de 75%, 80% e 85%.',
  },
  {
    name: 'Ajustar a receita para as próximas braçagens',
    text: 'Use a eficiência calculada para calibrar o peso de grãos no futuro.',
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas frequentes sobre eficiência da mostura',
  bibliographyTitle: 'Referências e fórmulas',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Compreender a eficiência da mostura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A eficiência da mostura mede com que eficiência os amidos do grão são convertidos em açúcares fermentáveis e coletados no mosto. Conhecê-la permite formular receitas com precisão.',
    },
    {
      type: 'table',
      headers: ['Parâmetro', 'Fórmula', 'Descrição'],
      rows: [
        ['Pontos potenciais', 'Peso x PPG do grão', 'Máximo teórico de pontos'],
        ['Pontos extraídos', 'Volume x pontos SG medidos', 'Pontos reais no mosto'],
        ['Eficiência da mostura', '(Extraídos / Potencial) x 100', 'Percentual real de extração'],
        ['Graus Brix do mosto', '-668.82 + 11.536 x SG x 100...', 'Equivalente no refratômetro']
      ],
    },
    {
      type: 'title',
      text: 'Fatores determinantes na extração',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Moagem do grão: Uma moagem mais fina aumenta a superfície, mas pode dificultar a filtragem.',
        'Temperatura e pH: Atividade enzimática ótima entre 64°C e 68°C a pH 5.2 - 5.6.',
        'Técnica de lavagem: O fluxo contínuo ou por etapas influencia o enxágue dos açúcares.',
        'Relação água-grão: Mosturas mais fluidas favorecem a mobilidade enzimática.',
        'Profundidade do leito: Entre 30 cm e 45 cm otimiza a dinâmica do fluido.'
      ],
    },
    {
      type: 'tip',
      title: 'Usar 75% como base para novas receitas',
      html: 'Ao planejar uma nova receita, adotar 75% de eficiência garante uma margem segura e previsível.',
    },
    {
      type: 'title',
      text: 'Ajustes no processo cervejeiro',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se a densidade medida antes da fervura for inferior à prevista, pode-se prolongar a fervura para concentrar o mosto ou adicionar extrato de malte.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Eficiência da mostura vs Eficiência da brassagem',
      html: 'Não confunda o rendimento da panela de mostura com a eficiência global do seu equipamento.',
    },
  ],
};
