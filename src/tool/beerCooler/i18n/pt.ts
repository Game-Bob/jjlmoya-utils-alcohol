import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'beer-cooler';
const title = 'Calculadora de Resfriamento de Cerveja com a Lei de Newton';
const description = 'Calcule com termodinâmica real — Lei do Resfriamento de Newton — exatamente quanto tempo sua cerveja leva para atingir a temperatura de serviço perfeita na geladeira ou freezer.';

const ui: BeerCoolerUI = {
  step1Title: 'O que você está resfriando?',
  canLabel: 'Lata',
  aluminumLabel: 'Alumínio',
  bottleLabel: 'Garrafa',
  glassLabel: 'Vidro',
  step2Title: 'Onde você coloca?',
  fridgeLabel: 'Geladeira',
  freezerLabel: 'Freezer',
  step3Title: 'Ajuste Fino de Temperaturas',
  initialTempLabel: 'Temp. Inicial',
  targetTempLabel: 'Objetivo Frio',
  glacialLabel: 'Glacial',
  perfectLabel: 'Perfeito',
  bodegaLabel: 'Bodega',
  readyTitle: 'Pronto',
  readyDescription: 'Selecione o recipiente e a localização para calcular.',
  estimatedTimeLabel: 'Tempo estimado',
  methodLabel: 'Método',
  containerLabel: 'Recipiente',
  alreadyColdLabel: 'Já frio!',
  neverColdLabel: 'Nunca fica frio'
};

const faqTitle = 'Perguntas Frequentes';
const bibliographyTitle = 'Referências & Fontes';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: 'Como esta ferramenta calcula o tempo de resfriamento?',
    answer: 'Ela aplica a Lei de Resfriamento de Newton: T(t) = T_env + (T₀ - T_env) × e^(-kt). A constante k varia dependendo do material do recipiente e do meio de resfriamento. Uma lata de alumínio em uma geladeira tem um k muito diferente de uma garrafa de vidro em um freezer. Os valores usados aqui são calibrados contra experimentos do mundo real para cada combinação.',
  },
  {
    question: 'O truque da toalha de papel molhada com sal realmente funciona?',
    answer: 'Sim, e notavelmente. Envolver o recipiente em uma toalha de papel molhada com sal acelera o resfriamento por duas razões: a evaporação da água remove calor adicional (resfriamento evaporativo), e o sal reduz o ponto de congelamento da água, mantendo o contato úmido ativo por mais tempo. Você pode ganhar uma queda adicional de 2–4°C nos primeiros minutos em comparação com colocar uma lata seca no freezer.',
  },
  {
    question: 'Qual é a temperatura de serviço ideal para diferentes estilos de cerveja?',
    answer: 'Depende do estilo. Lagers e Pilsners são melhor servidas entre 3°C e 7°C. IPAs e Pale Ales brilham entre 7°C e 10°C. Stouts, Porters e ales complexas devem ser servidas mais quentes, entre 12°C e 14°C, para que seus compostos aromáticos — café, chocolate, nozes — possam se expressar completamente.',
  },
  {
    question: 'Minha cerveja pode explodir se deixá-la no freezer?',
    answer: 'Sim. O álcool e os açúcares dissolvidos reduzem o ponto de congelamento da cerveja abaixo da água pura: uma lager padrão de 5% congela em torno de -3°C. Quando a água cristaliza, o volume aumenta e o CO2 dissolvido aumenta a pressão interna até o recipiente ceder. Mais de 60 minutos no freezer — especialmente garrafas de vidro — é realmente uma zona de perigo. Use esta calculadora para evitar isso.',
  },
  {
    question: 'A cerveja "queima" se esfriada muito rapidamente?',
    answer: 'Não. O mito do "choque térmico" que estraga a cerveja é falso. O que pode genuinamente afetá-la é o congelamento e descongelamento repetidos — que quebram proteínas e turnam o líquido — ou exposição direta à luz UV. Um resfriamento rápido no freezer ou em água com gelo não prejudica o sabor.',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: 'Selecione o recipiente',
    text: 'Escolha entre uma lata de alumínio ou uma garrafa de vidro. O material afeta drasticamente a velocidade de transferência de calor.',
  },
  {
    name: 'Escolha o método de resfriamento',
    text: 'Indique se você está usando uma geladeira convencional (4°C) ou um freezer (-18°C) para um processo ultra-rápido.',
  },
  {
    name: 'Ajuste as temperaturas',
    text: 'Defina a temperatura atual da bebida (temperatura ambiente) e sua temperatura de resfriamento desejada.',
  },
];

const bibliography: BeerCoolerLocaleContent['bibliography'] = [
  {
    name: 'Lei de Resfriamento de Newton - Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling',
  },
  {
    name: 'Química Avançada de Cerveja e Cervejaria - American Chemical Society',
    url: 'https://www.acs.org/acs-webinars/library/advanced-chemistry-of-beer-and-brewing.html',
  },
];

const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'A Ciência do Frio e da Termodinâmica',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Por que a lata esfria antes da garrafa? É magia? Não, é a <strong>Lei de Resfriamento de Newton</strong> em ação. Esta ferramenta calcula matematicamente o momento exato em que sua bebida atinge a perfeição termodinâmica. Cada material, cada ambiente, cada temperatura inicial se alimenta da mesma equação diferencial que físicos e engenheiros usam para modelar transferência de calor em sistemas industriais.'
  },
  {
    type: 'diagnostic',
    title: 'A Fórmula Mestre',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Física',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). Esta equação diferencial descreve como a temperatura de um objeto muda proporcionalmente à diferença entre sua temperatura e a do ambiente. A constante k depende do material e da geometria do recipiente, é por isso que uma lata esfria mais rápido que uma garrafa do mesmo volume.'
  },
  {
    type: 'title',
    text: 'Guerra dos Materiais: Alumínio vs. Vidro',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>Alumínio</strong> tem condutividade térmica de ~205 W/(m·K), enquanto <strong>vidro</strong> mal atinge 0,8 W/(m·K). O metal transfere frio com violência rápida, tornando-o o recipiente ideal para emergências. No entanto, o vidro fornece melhor isolamento uma vez frio, mantendo a temperatura ideal por mais tempo durante o consumo. Este compromisso é por isso que diferentes culturas de cerveja desenvolveram preferências diferentes para cada material.'
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
    title: 'A Zona de Perigo do Freezer',
    icon: 'mdi:snowflake-alert',
    html: 'Devido ao álcool e açúcares dissolvidos, a cerveja congela abaixo de 0°C — uma lager padrão de 5% congela em torno de -3°C. Conforme a água cristaliza, o volume aumenta, enquanto a pressão de CO2 sobe simultaneamente. O resultado é um recipiente que pode romper violentamente. Nunca deixe cerveja no freezer por mais de 45 minutos sem definir um temporizador.'
  },
  {
    type: 'proscons',
    title: 'Truques de Resfriamento de Emergência',
    items: [
      { pro: 'Truque da Toalha Molhada: Envolva a lata em toalha de papel molhada, depois congele — a evaporação acelera o resfriamento.', con: '' },
      { pro: 'Salmoura Ártica: Encha um balde com água, gelo e 2 colheres de sopa de sal para atingir salmoura de -5°C.', con: '' },
      { pro: 'Método de Rotação: Gire a garrafa em água com gelo para forçar convecção e encurtar o tempo de resfriamento.', con: '' },
      { pro: '', con: 'Não coloque uma lata diretamente na prateleira do freezer sem um temporizador — latas explodidas são bagunçadas e perigosas.' }
    ]
  },
  {
    type: 'tip',
    title: 'Dica Pro: Presfrie o Copo',
    html: 'O copo em que você despeja cerveja tem massa térmica significativa. Um copo quente pode aumentar a temperatura de uma cerveja perfeitamente fria em 2-3°C instantaneamente no contato. Coloque seu copo de serviço no freezer por 5 minutos antes de despejar, ou enxágue com água fria. Este passo simples estende a janela onde sua cerveja tem exatamente o gosto pretendido.'
  },
  {
    type: 'title',
    text: 'Entendendo a Constante de Resfriamento',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'A constante de resfriamento k na equação de Newton não é um valor universal fixo — é uma propriedade empírica de cada recipiente e meio específico. Uma lata de alumínio fina em água com gelo tem um k dramaticamente diferente de uma garrafa de vidro espessa em ar parado de geladeira. Nossa calculadora usa valores medidos calibrados contra experimentos do mundo real para cada tipo de recipiente, fornecendo previsões precisas dentro de alguns minutos para cenários típicos de resfriamento doméstico.'
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
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
