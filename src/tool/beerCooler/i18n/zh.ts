import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'beer-cooler';
const title = '牛顿冷却定律啤酒冷却计算器';
const description = '用真实热力学计算——牛顿冷却定律——精确计算你的啤酒在冰箱或冷冻室中达到完美温度需要多长时间。';

const ui: BeerCoolerUI = {
  step1Title: '你在冷却什么？',
  canLabel: '罐子',
  aluminumLabel: '铝',
  bottleLabel: '瓶子',
  glassLabel: '玻璃',
  step2Title: '你把它放在哪里？',
  fridgeLabel: '冰箱',
  freezerLabel: '冷冻室',
  step3Title: '微调温度',
  initialTempLabel: '初始温度',
  targetTempLabel: '目标温度',
  glacialLabel: '冰川般冷',
  perfectLabel: '完美',
  bodegaLabel: '小酒馆',
  readyTitle: '准备好了',
  readyDescription: '选择容器和位置以计算。',
  estimatedTimeLabel: '估计时间',
  methodLabel: '方法',
  containerLabel: '容器',
  alreadyColdLabel: '已经很冷了！',
  neverColdLabel: '永远不会冷'
};

const faqTitle = '常见问题';
const bibliographyTitle = '参考文献和来源';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: '该工具如何计算冷却时间？',
    answer: '它应用牛顿冷却定律：T(t) = T_env + (T₀ - T_env) × e^(-kt)。常数k随容器材料和冷却介质而变化。冰箱中的铝罐与冷冻室中的玻璃瓶有完全不同的k值。这里使用的值是根据每种组合的实验进行校准的。',
  },
  {
    question: '用盐浸湿纸巾的技巧真的有效吗？',
    answer: '是的，效果非常显著。用含盐的湿纸巾包裹容器会加快冷却速度，原因有两个：水的蒸发会散失额外的热量（蒸发冷却），盐会降低水的冰点，使湿润接触保持更长时间。与将干罐放在冰箱中相比，你可以在最初几分钟内获得额外的2–4°C下降。',
  },
  {
    question: '不同啤酒类型的理想上菜温度是多少？',
    answer: '这取决于风格。拉格和皮尔森最好在3°C至7°C之间端上。IPA和淡色艾尔在7°C至10°C时闪闪发光。世涛、搬运工和复杂的艾尔应在12°C至14°C之间提供，以便其咖啡、巧克力和坚果等香料化合物可以充分表达。',
  },
  {
    question: '如果我把啤酒放在冷冻室里，它会爆炸吗？',
    answer: '是的。酒精和溶解的糖会降低啤酒的冰点以下纯水：标准的5%拉格在约-3°C处冻结。当水结晶时，体积增加，溶解的CO2升高内部压力直到容器失败。在冷冻室中超过60分钟——尤其是玻璃瓶——是一个真正的危险区域。使用此计算器来避免这种情况。',
  },
  {
    question: '如果啤酒冷却太快会"燃烧"吗？',
    answer: '不。毁坏啤酒的"热冲击"神话是虚假的。真正可能影响它的是重复冷冻和解冻——这会破坏蛋白质并使液体变浑浊——或直接紫外线照射。在冷冻室或冰水中快速冷却不会损害风味。',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: '选择容器',
    text: '在铝罐或玻璃瓶之间选择。材料会极大地影响热传递速度。',
  },
  {
    name: '选择冷却方法',
    text: '指示你是在使用传统冰箱（4°C）还是冷冻室（-18°C）进行超快速过程。',
  },
  {
    name: '调整温度',
    text: '定义饮料的当前温度（室温）和所需的目标冷却温度。',
  },
];

const bibliography: BeerCoolerLocaleContent['bibliography'] = [
  {
    name: '牛顿冷却定律 - Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling',
  },
  {
    name: '啤酒和啤酒酿造的高级化学 - American Chemical Society',
    url: 'https://www.acs.org/acs-webinars/library/advanced-chemistry-of-beer-and-brewing.html',
  },
];

const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: '冷却和热力学的科学',
    level: 2
  },
  {
    type: 'paragraph',
    html: '为什么罐子比瓶子冷却得快？这是魔法吗？不，这是实际的<strong>牛顿冷却定律</strong>在起作用。该工具以数学方式计算你的饮料达到热力学完美度的确切时刻。每种材料、每种环境、每种初始温度都代入物理学家和工程师用于模拟工业系统中热传递的相同微分方程中。'
  },
  {
    type: 'diagnostic',
    title: '主要公式',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: '物理',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt)。此微分方程描述了物体的温度如何与其温度与环境之间的差异成比例地变化。常数k取决于容器的材料和几何形状，这就是为什么罐子比相同体积的瓶子冷却得更快。'
  },
  {
    type: 'title',
    text: '材料战争：铝 vs. 玻璃',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>铝</strong>的热导率约为205 W/(m·K)，而<strong>玻璃</strong>仅勉强达到0.8 W/(m·K)。金属可非常迅速地传递冷却，使其成为紧急情况的理想容器。然而，玻璃一旦冷却就能提供更好的隔热，在消费过程中保持理想温度的时间更长。这种权衡解释了为什么不同的啤酒文化对每种材料都发展了不同的偏好。'
  },
  {
    type: 'stats',
    items: [
      { label: '皮尔森和拉格', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA和淡色艾尔', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: '世涛和搬运工', value: '12°C - 14°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: '冷冻室危险区域',
    icon: 'mdi:snowflake-alert',
    html: '由于酒精和溶解的糖，啤酒在0°C以下结冻——标准的5%拉格在约-3°C处冻结。当水结晶时，体积增加，而CO2压力同时上升。结果是一个可能猛烈爆裂的容器。不要将啤酒在冷冻室中放置超过45分钟而不设置计时器。'
  },
  {
    type: 'proscons',
    title: '紧急冷却技巧',
    items: [
      { pro: '湿纸巾技巧：用湿纸巾包裹罐子，然后冷冻——蒸发加快冷却。', con: '' },
      { pro: '北极盐水：将水、冰和2汤匙盐填充到桶中以达到-5°C盐水。', con: '' },
      { pro: '旋转方法：在冰水中旋转瓶子以强制对流并缩短冷却时间。', con: '' },
      { pro: '', con: '不要在没有计时器的情况下将罐子直接放在冷冻室架子上——破裂的罐子很凌乱且危险。' }
    ]
  },
  {
    type: 'tip',
    title: '专业提示：预冷玻璃杯',
    html: '你倒啤酒的玻璃杯具有相当的热质量。温暖的玻璃杯可在接触时立即将完美冷的啤酒的温度提高2-3°C。在倒之前将你的酒杯放在冷冻室中5分钟，或用冷水冲洗。这个简单的步骤延长了你的啤酒恰好符合预期风味的时间。'
  },
  {
    type: 'title',
    text: '了解冷却常数',
    level: 2
  },
  {
    type: 'paragraph',
    html: '牛顿方程中的冷却常数k不是固定的通用值——它是每个特定容器和介质的经验属性。薄铝罐在冰水中的k值与厚玻璃瓶在静止冰箱空气中的k值完全不同。我们的计算器使用根据每种容器类型的实验校准的测量值，对于典型的家庭冷却场景，精度在几分钟内。'
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
