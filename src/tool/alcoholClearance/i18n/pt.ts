import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'calculadora-alcoolemia-recuperacao';
const title = 'Calculadora de Ressaca e Alcoolemia: Preditor de Recuperação';
const description = 'Calcule sua alcoolemia (BAC) e o tempo para chegar a 0.0 usando a fórmula de Widmark. Planeje sua hidratação antes de dormir e saiba quando estará totalmente recuperado.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Sexo Biológico',
  weightLabel: 'Peso Corporal',
  kgUnit: 'kg',
  addDrinkLabel: 'Adicionar Bebida',
  beerLabel: 'Cerveja',
  wineLabel: 'Vinho',
  spiritLabel: 'Drink',
  shotLabel: 'Dose',
  accumulatedLabel: 'Bebidas Consumidas',
  emptyListLabel: 'Sua lista está vazia',
  emptySubLabel: 'Selecione bebidas para calcular.',
  estimatedBacLabel: 'Alcoolemia Estimada',
  bacUnit: 'BAC',
  timeToZeroLabel: 'até chegar a 0.0',
  waterAdviceLabel: 'Água (Antes de dormir)',
  pillAdviceLabel: 'Suplementos',
  noneAdvice: 'Não é necessário',
  hydrationAdvice: 'Prioridade: Hidratação',
  electrolytesAdvice: 'Eletrólitos + Vit. B',
  disclaimerText: 'Esta calculadora é uma estimativa teórica. O metabolismo e a alimentação variam o resultado. Não dirija após beber.',
  drinkUnit: 'bebida',
  drinksUnit: 'bebidas'
};

const faqTitle = 'Perguntas Frequentes';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "O que é uma Unidade Padrão de Bebida Alcoólica e quanto cada bebida contém?",
    answer: "Uma Unidade Padrão contém aproximadamente 10 gramas de álcool puro (definição UE/UK; 14g nos EUA). Uma cerveja comum (330ml a 5%) contém ~1.3 unidades, um copo de vinho (150ml a 12%) ~1.4 unidades, e uma dose (40ml a 40%) ~1.3 unidades. Conhecer as unidades do que você bebe é essencial para interpretar corretamente os resultados da calculadora.",
  },
  {
    question: "Por que o sexo biológico afeta o cálculo da alcoolemia?",
    answer: "O sexo biológico influencia o fator de Widmark 'r', que representa a água corporal total como fração do peso. Homens têm em média r=0.68 porque possuem proporcionalmente mais água corporal. Mulheres têm em média r=0.55 devido a um percentual maior de gordura corporal, que retém menos álcool. Isso significa que, com as mesmas bebidas e peso, mulheres atingem uma alcoolemia mais alta.",
  },
  {
    question: "Café, água ou exercício conseguem acelerar a eliminação do álcool?",
    answer: "Não. O fígado elimina o álcool a uma taxa constante de aproximadamente 0.15 g/L por hora (cinética de ordem zero). Café pode disfarçar o cansaço, água ajuda com a desidratação, e exercício melhora o bem-estar geral - mas nenhum deles reduz seu BAC real. Apenas o tempo elimina o álcool do sangue.",
  },
  {
    question: "Comer após beber ajuda a diminuir o BAC?",
    answer: "Comer após beber não reduz o álcool já na corrente sanguínea. Onde a alimentação faz uma grande diferença é antes ou durante o consumo: comida no estômago - especialmente proteínas e gorduras - desacelera a absorção gástrica e pode reduzir seu BAC máximo em até 50%. Uma vez que o álcool é absorvido, apenas o metabolismo hepático pode eliminá-lo.",
  },
  {
    question: "Quanto tempo leva para chegar a um BAC de 0.0?",
    answer: "Depende do seu BAC inicial. Divida sua alcoolemia estimada (em g/L) por 0.15 para obter as horas aproximadas. Por exemplo, um BAC de 1.5 g/L leva cerca de 10 horas. O fígado nunca para: processa álcool mesmo enquanto você dorme. Mas tenha cuidado - álcool ainda pode estar presente no seu sangue mesmo quando você se sente completamente recuperado.",
  },
  {
    question: "Esta calculadora é 100% confiável para decidir se devo dirigir?",
    answer: "Não. Esta ferramenta é uma estimativa teórica baseada na fórmula de Widmark. Fatores como ingestão de alimentos, medicamentos, fadiga, variantes genéticas da enzima ADH e estresse podem deslocar sua alcoolemia real em 20-30% em qualquer direção. Nunca use esta calculadora para decidir se deve dirigir. Se você bebeu, não dirija - essa é a única regra sem margem de erro.",
  },
];


const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "Configure seu perfil",
    text: "Selecione seu sexo biológico (afeta o percentual de água corporal) e seu peso atual.",
  },
  {
    name: "Adicione as bebidas consumidas",
    text: "Clique nos ícones das bebidas que consumiu. Elas se acumularão na lista abaixo.",
  },
  {
    name: "Verifique os tempos de segurança",
    text: "Observe a alcoolemia estimada e, mais importante, o tempo que o fígado levará para processar todo o etanol ingerido.",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Metabolismo do Álcool: Ciência e Eliminação',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Entender como nosso corpo processa etanol é essencial para a segurança e para mitigar ressacas. Nossa <strong>calculadora de eliminação alcoólica</strong> utiliza a reconhecida <strong>Fórmula de Widmark</strong> para oferecer um mapa claro do seu estado metabólico. O álcool não é eliminado por suor, água ou exercício - apenas o tempo e o metabolismo hepático reduzem sua concentração de álcool no sangue.'
  },
  {
    type: 'diagnostic',
    title: 'Farmacocinética da Alcoolemia',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Bioquímica',
    html: 'O álcool se distribui pela água corporal. Fatores como peso e o coeficiente de Widmark r (0.68 em homens / 0.55 em mulheres) determinam a diluição inicial do etanol na corrente sanguínea. É por isso que duas pessoas com o mesmo peso podem ter leituras de BAC muito diferentes após consumir as mesmas bebidas.'
  },
  {
    type: 'title',
    text: 'Oxidação Hepática e Enzimas',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'O fígado degrada 95% do álcool através da Desidrogenase de Álcool (ADH). Este processo ocorre a uma taxa constante (cinética de ordem zero), o que significa que não pode ser acelerado por exercício ou café. Os restantes 5% são eliminados pela respiração, urina e suor - que é a base para os testes de bafômetro na fiscalização de trânsito.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Taxa de Eliminação', value: '0.15 g/L·h', icon: 'mdi:clock-fast' },
      { label: 'Absorção Gástrica', value: '20% Etanol', icon: 'mdi:stomach' },
      { label: 'Hidratação Sugerida', value: '1:1 Água/Bebida', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Mitos vs Realidade',
    items: [
      { pro: 'Água e eletrólitos antes de dormir reduzem a gravidade da ressaca ao combater a diurese.', con: '' },
      { pro: '', con: 'Chuveiro frio: Não afeta a concentração de álcool no sangue de forma alguma.' },
      { pro: '', con: 'Café: Disfarça a sonolência, mas não restaura os reflexos ou funções cognitivas perdidas.' }
    ]
  },
  {
    type: 'card',
    title: 'O que Causa uma Ressaca?',
    icon: 'mdi:alert-decagram',
    html: 'Conhecida cientificamente como veisalgia, a ressaca é causada por desidratação sistêmica (supressão de vasopressina pelo etanol), acúmulo de acetaldeído (um metabólito tóxico) e uma resposta inflamatória imunológica de citocinas. O rebote de glutamato do cérebro após a supressão do álcool também contribui para ansiedade e sensibilidade à luz e som no dia seguinte.'
  },
  {
    type: 'tip',
    title: 'Segurança em Primeiro: Conheça Seu Limite',
    html: 'Um BAC de 0.05% prejudica mensuravelmente o julgamento, rastreamento e tempo de reação. A maioria dos países define o limite legal de dirigir entre 0.05% e 0.08%. No entanto, a sensibilidade individual varia significativamente - idade, medicamentos, fadiga e variantes genéticas da enzima ADH alteram como o álcool o afeta pessoalmente. Em caso de dúvida, não dirija.'
  },
  {
    type: 'title',
    text: 'O Papel da Alimentação e Taxa de Absorção',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Comer antes ou durante o consumo muda drasticamente a cinética de absorção do álcool. Alimento no estômago - especialmente proteínas e gorduras - desacelera o esvaziamento gástrico, reduzindo a taxa máxima na qual o etanol entra na corrente sanguínea. Uma pessoa que bebe com o estômago vazio pode atingir um BAC máximo 50% maior do que a mesma pessoa que comeu uma refeição completa antes de consumir a mesma quantidade. Esta é uma das variáveis mais poderosas que a fórmula de Widmark não consegue capturar completamente, razão pela qual nossa calculadora inclui um aviso sobre estimativa teórica.'
  },
  {
    type: 'paragraph',
    html: 'O tipo de bebida alcoólica também importa além apenas de ABV e volume. Bebidas carbonatadas (água tônica, vinho espumante) aceleram o esvaziamento gástrico e empurram o álcool para a corrente sanguínea mais rapidamente. Bebidas com ABV muito alto (>25%) podem inibir temporariamente a motilidade gástrica, desacelerando a absorção. Bebidas doces podem mascarar o efeito percebido do álcool, levando as pessoas a beber mais rápido do que percebem. Essas nuances são razão pela qual o BAC real pode divergir das previsões do modelo em 20-30% em ambas as direções.'
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
    applicationCategory: 'HealthApplication',
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
