import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'alcohol-clearance-calculator';
const title = '宿醉与血液酒精含量计算器：恢复预测器';
const description = '使用Widmark公式计算你的血液酒精含量(BAC)和达到0.0所需的时间。计划睡前补液并了解你何时完全恢复。';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: '生物性别',
  weightLabel: '体重',
  kgUnit: 'kg',
  addDrinkLabel: '添加饮品',
  beerLabel: '啤酒',
  wineLabel: '葡萄酒',
  spiritLabel: '混合饮品',
  shotLabel: '一杯',
  accumulatedLabel: '已消耗的饮品',
  emptyListLabel: '你的列表是空的',
  emptySubLabel: '选择饮品来计算。',
  estimatedBacLabel: '估计BAC',
  bacUnit: 'BAC',
  timeToZeroLabel: '达到0.0',
  waterAdviceLabel: '水（睡前）',
  pillAdviceLabel: '补充剂',
  noneAdvice: '不需要',
  hydrationAdvice: '优先级：补水',
  electrolytesAdvice: '电解质 + 维生素 B',
  disclaimerText: '该计算器是一个理论估计。代谢和食物会改变结果。不要酒驾。',
  drinkUnit: '杯',
  drinksUnit: '杯'
};

const faqTitle = '常见问题';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "什么是标准饮品单位，每种饮品中有多少？",
    answer: "标准饮品单位含约10克纯酒精(英国/欧盟定义；美国为14克)。普通啤酒(5%酒精度330ml)含约1.3单位，葡萄酒杯(12%酒精度150ml)约1.4单位，一杯烈酒(40%酒精度40ml)约1.3单位。了解你所喝饮品中的单位对正确解释计算器的结果至关重要。",
  },
  {
    question: "为什么生物性别会影响BAC计算？",
    answer: "生物性别影响Widmark系数'r'，它表示总体水分占体重的比例。男性平均r=0.68，因为他们的体水分比例更高。女性平均r=0.55，因为体脂肪比例更高，酒精吸收较少。这意味着对于相同的饮品和体重，女性会达到更高的BAC。",
  },
  {
    question: "咖啡、水或运动能加速酒精消除吗？",
    answer: "不能。肝脏以恒定速率约0.15克/升每小时消除酒精(零阶动力学)。咖啡可以掩盖疲劳，水有助于缓解脱水，运动改善整体健康——但都不会降低你的实际BAC。只有时间才能从血液中消除酒精。",
  },
  {
    question: "喝酒后进食有助于降低BAC吗？",
    answer: "喝酒后进食不会减少已经在血液中的酒精。食物最重要的是在喝酒前或喝酒时：胃中的食物——特别是蛋白质和脂肪——会减缓胃吸收并能降低你的峰值BAC高达50%。一旦酒精被吸收，只有肝脏代谢才能消除它。",
  },
  {
    question: "达到0.0 BAC需要多长时间？",
    answer: "这取决于你的起始BAC。将你的估计BAC(克/升)除以0.15即可获得大约的小时数。例如，BAC为1.5克/升约需10小时。肝脏永不停止：即使你睡眠中也会处理酒精。但要注意——即使你感觉完全恢复，酒精仍可能存在于你的血液中。",
  },
  {
    question: "该计算器对决定是否驾驶100%可靠吗？",
    answer: "不。该工具是基于Widmark公式的理论估计。食物摄入、药物、疲劳、遗传ADH酶变异和压力等因素可能使你的实际BAC偏离20-30%。永远不要使用该计算器来决定是否驾驶。如果你喝过酒，不要驾驶——这是唯一没有容错空间的规则。",
  },
];


const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "设置你的个人资料",
    text: "选择你的生物性别(影响体水百分比)和你的当前体重。",
  },
  {
    name: "添加消耗的饮品",
    text: "点击你已喝的饮品图标。它们将积累在下面的列表中。",
  },
  {
    name: "检查安全时间",
    text: "观察估计的BAC，最重要的是，肝脏处理所有摄入的乙醇需要的时间。",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: '酒精代谢：科学与消除',
    level: 2
  },
  {
    type: 'paragraph',
    html: '了解我们的身体如何处理乙醇对安全和减轻宿醉至关重要。我们的<strong>酒精消除计算器</strong>使用公认的<strong>Widmark公式</strong>为你提供清晰的代谢状态图谱。酒精不会通过出汗、喝水或运动消除——只有时间和肝脏代谢才能降低你的血液酒精浓度。'
  },
  {
    type: 'diagnostic',
    title: 'BAC的药物动力学',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: '生物化学',
    html: '酒精通过体水分布。体重和Widmark系数r(男性0.68/女性0.55)等因素决定了乙醇在血液中的初始稀释。这就是为什么体重相同的两个人喝相同饮品后BAC值会有很大不同。'
  },
  {
    type: 'title',
    text: '肝氧化和酶',
    level: 2
  },
  {
    type: 'paragraph',
    html: '肝脏通过酒精脱氢酶(ADH)降解95%的酒精。此过程以恒定速率进行(零阶动力学)，这意味着它不能通过运动或咖啡加快。剩余5%通过呼吸、尿液和汗液排出——这是呼气酒精测试在交通执法中的基础。'
  },
  {
    type: 'stats',
    items: [
      { label: '消除速率', value: '0.15克/升·小时', icon: 'mdi:clock-fast' },
      { label: '胃吸收', value: '乙醇20%', icon: 'mdi:stomach' },
      { label: '建议补水', value: '1:1水/饮品', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: '神话与现实',
    items: [
      { pro: '睡前喝水和电解质通过对抗利尿来减轻宿醉严重程度。', con: '' },
      { pro: '', con: '冷水澡：它们根本不影响血液酒精浓度。' },
      { pro: '', con: '咖啡：掩盖困意但不能恢复丧失的反射或认知功能。' }
    ]
  },
  {
    type: 'card',
    title: '什么导致宿醉？',
    icon: 'mdi:alert-decagram',
    html: '科学上称为veisalgia，宿醉由全身脱水(乙醇导致的血管升压素抑制)、乙醛积累(有毒代谢产物)和细胞因子炎症免疫反应引起。酒精抑制后大脑的谷氨酸反弹也导致第二天早上对光和声音的焦虑和敏感。'
  },
  {
    type: 'tip',
    title: '安全第一：了解你的限制',
    html: '0.05% BAC明显会损害判断力、追踪能力和反应时间。大多数国家将法定驾驶限制设置在0.05%至0.08%之间。然而，个人敏感性差异很大——年龄、药物、疲劳和遗传ADH酶变异都会改变酒精如何影响你。有疑问时，不要驾驶。'
  },
  {
    type: 'title',
    text: '食物的作用和吸收速率',
    level: 2
  },
  {
    type: 'paragraph',
    html: '喝酒前或喝酒时进食会大幅改变酒精吸收动力学。胃中的食物——特别是蛋白质和脂肪——会减缓胃排空，降低乙醇进入血液的峰值速率。空腹饮酒的人可以达到的峰值BAC比饮前进食相同量的人高50%。这是Widmark公式无法完全捕捉的最强大变量之一，这就是为什么我们的计算器包含了关于理论估计的免责声明。'
  },
  {
    type: 'paragraph',
    html: '酒精饮品的类型也很重要，不仅仅是酒精度和体积。碳酸混合料(汤力水、起泡酒)加快胃排空并将酒精更快推入血液。酒精度极高的饮品(>25%)可能会暂时抑制胃蠕动，减慢吸收。甜饮品可能掩盖酒精的感觉，导致人们喝得比意识到的更快。这些细微差别是为什么现实BAC可能与模型预测偏离20-30%的原因。'
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
