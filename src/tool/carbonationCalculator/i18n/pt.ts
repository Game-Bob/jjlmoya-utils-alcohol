import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'calculadora-carbonatacao-cerveja';
const title = 'Calculadora de Carbonatação e Priming para Cerveja';
const description = 'Calcule os gramas exatos de Dextrose, Açúcar Cristal ou DME (Extrato de Malte Seco) para engarrafar sua cerveja caseira. Insira o volume, temperatura de fermentação e estilo para um priming perfeito.';

const ui: CarbonationUI = {
  parametersTitle: 'Parâmetros',
  metricBtn: 'Métrico',
  imperialBtn: 'Imperial',
  volumeLabel: 'Volume de Cerveja',
  maxTempLabel: 'Temperatura Máxima',
  litersUnit: 'Litros',
  celsiusUnit: '°C',
  gallonsUnit: 'Galões',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'Carbonatação Desejada',
  volUnit: 'Vol CO2',
  resultsTitle: 'Resultados do Priming',
  tableSugarLabel: 'Açúcar Cristal',
  cornSugarLabel: 'Açúcar de Milho (Dextrose)',
  dmeLabel: 'Extrato de Malte Seco (DME)',
  safetyTitle: 'RISCO DE EXPLOSÃO!',
  lowCarbonation: 'CARBONATAÇÃO BAIXA',
  optimalCarbonation: 'CARBONATAÇÃO ÓTIMA',
  highEffervescence: 'EFERVESCÊNCIA ELEVADA',
  bubblingVisualizationLabel: 'Visualização aproximada das bolhas'
};

const faqTitle = 'Perguntas Frequentes';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "Por que a temperatura é importante para a carbonatação?",
    answer: "O CO2 residual na sua cerveja depende da temperatura mais alta atingida após a fermentação: líquidos frios retêm mais gás dissolvido do que líquidos quentes. Se você inserir uma temperatura inferior à real, a calculadora assume mais CO2 residual do que realmente existe e oferece menos açúcar do que necessário. Se inserir muito alto, o oposto acontece — você adiciona mais açúcar do que o necessário e coloca seu lote na zona de perigo de explosão de garrafas, onde o excesso de pressão causa ruptura de vidro ou expulsão violenta da tampa.",
  },
  {
    question: "Qual açúcar é melhor para o priming?",
    answer: "Dextrose (açúcar de milho) é preferida por ser neutra e se dissolver rapidamente. Açúcar cristal funciona bem, mas requer aproximadamente 10% menos em peso.",
  },
  {
    question: "O que acontece se eu adicionar muito açúcar de priming?",
    answer: "Excesso de priming gera pressão excessiva de CO2 dentro da garrafa. Garrafas de vidro padrão falham em aproximadamente 3,5-4,0 volumes de CO2. Além deste ponto, a garrafa pode explodir ou a tampa pode ser expulsa violentamente. É por isso que a precisão é importante — até 5 gramas extras por litro podem colocar um lote na zona de perigo.",
  },
  {
    question: "Quanto tempo a cerveja leva para carbonatar após o engarrafamento?",
    answer: "Entre 2 e 3 semanas em temperatura ambiente (18-22°C) é o intervalo típico para o fermento fermentar completamente o açúcar adicionado e o CO2 se integrar ao líquido. Abrir uma garrafa antes do processo estar completo sempre dá um resultado enganoso: a cerveja parecerá pouco carbonatada mesmo que a carbonatação ainda esteja em desenvolvimento. Com o DME o processo pode ser ligeiramente mais lento devido à complexidade de seus açúcares fermentáveis.",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "Meça o volume real",
    text: "Indique quantos litros (ou galões) de cerveja você tem pronta para engarrafar após a conclusão da fermentação.",
  },
  {
    name: "Defina a temperatura de fermentação",
    text: "Insira a temperatura mais alta que a cerveja atingiu durante ou após a fermentação ativa.",
  },
  {
    name: "Escolha o estilo ou volume de CO2",
    text: "Selecione o nível de carbonatação desejado. Os estilos variam de 1,5 (Stouts) até 4,5 (Cervejas de Trigo).",
  },
];


const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Guia Completo de Carbonatação e Priming',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Domine a arte do priming e transforme sua cerveja caseira de um experimento plano em uma experiência efervescente profissional. O priming consiste em adicionar uma quantidade precisa de açúcar para que o fermento residual na garrafa gere CO2 natural durante uma fermentação secundária. Açúcar insuficiente resulta em cerveja plana; excesso cria pressão perigosa que pode romper garrafas. A diferença entre os dois é alguns gramas — por isso esta calculadora existe.'
  },
  {
    type: 'proscons',
    title: 'Fatores Críticos de Sucesso',
    items: [
      { pro: 'Temperatura: O CO2 residual depende do pico de temperatura pós-fermentação.', con: '' },
      { pro: 'Precisão: 5 gramas extras por litro podem ser a diferença entre carbonatação perfeita e um gêiser.', con: '' },
      { pro: '', con: 'Oxidação: Evite respingar o líquido ao transferir para misturar o açúcar de priming.' }
    ]
  },
  {
    type: 'title',
    text: 'Volumes de CO2 por Estilo de Cerveja',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'British Stouts', value: '1,5 - 2,0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2,2 - 2,6 Vol', icon: 'mdi:hops' },
      { label: 'German Wheat', value: '3,3 - 4,5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Qual Açúcar Você Deveria Escolher?',
    icon: 'mdi:corn',
    html: '<strong>Dextrose</strong> é neutra e profissional — o padrão da indústria. <strong>Açúcar Cristal</strong> é econômico e eficaz (use 10% menos em peso que dextrose). <strong>DME (Extrato de Malte Seco)</strong> é a escolha do purista mas mais difícil de prever com precisão porque sua fermentabilidade varia por marca e composição de malte.'
  },
  {
    type: 'diagnostic',
    title: 'Aviso de Segurança',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Perigo',
    html: 'Garrafas de vidro padrão falham em 3,5-4,0 volumes de CO2. Não tente carbonatar estilos belgas ou de trigo em vidro fino. Sempre use garrafas classificadas para bebidas com gás e nunca reutilize garrafas comerciais recicladas que possam ter danos estruturais microscópicos de uso anterior.'
  },
  {
    type: 'tip',
    title: 'Dica Pro: Dissolva o Açúcar Corretamente',
    html: 'Sempre ferva a solução de açúcar de priming (açúcar dissolvido em aproximadamente 250ml de água por lote de 20L) por 10 minutos antes de adicioná-la à cerveja. Fervura desinfeta a solução e garante que o açúcar seja completamente dissolvido e distribuído uniformemente em todo o lote, evitando pontos quentes que causam carbonatação desigual entre garrafas.'
  },
  {
    type: 'summary',
    title: 'Para Quem É Esta Ferramenta?',
    items: [
      'Cervejeiros Caseiros: Obtenha o cálculo exato de açúcar de priming para qualquer tamanho de lote, estilo e temperatura de fermentação.',
      'Entusiastas de Cerveja Artesanal: Compreenda a ciência por trás do motivo pelo qual cervejas comerciais têm diferentes níveis de carbonatação.',
      'Cervejeiros Profissionais: Verifique cálculos manuais antes de engarrafar lotes comerciais grandes.'
    ]
  },
  {
    type: 'title',
    text: 'Ciência da Carbonatação: Lei de Henry',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Em sua essência, a carbonatação é governada pela <strong>Lei de Henry</strong>: a quantidade de gás dissolvido em um líquido é proporcional à pressão parcial daquele gás acima do líquido. Quando você primer uma garrafa e a sela, o fermento consome o açúcar e produz CO2 em um ambiente selado. Conforme a pressão aumenta, o gás é forçado de volta para a solução. A temperatura em que este equilíbrio é alcançado determina o nível final de carbonatação — é por isso que a temperatura de fermentação é a variável mais crítica nesta calculadora.'
  },
  {
    type: 'paragraph',
    html: 'O CO2 residual na sua cerveja antes do priming não é zero. Toda cerveja contém CO2 dissolvido do processo de fermentação, e a quantidade retida depende da temperatura mais alta atingida pela cerveja. Uma cerveja fermentada a 22°C retém significativamente menos CO2 residual do que uma fermentada a 16°C, embora ambas estejam agora resfriadas. Não considerar este resíduo leva à sobre-carbonatação sistemática — um dos erros mais comuns entre cervejeiros caseiros iniciantes.'
  }
];

const schemas: CarbonationLocaleContent['schemas'] = [
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

export const content: CarbonationLocaleContent = {
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
