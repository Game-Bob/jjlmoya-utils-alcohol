import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'beer-mash-efficiency-calculator';
const title = '啤酒糖化效率计算器';
const description = '计算家酿与工坊啤酒的糖化效率百分比、糖分提取量及预期原麦汁浓度。';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: '公制',
  stagePreboil: '煮沸前麦汁',
  stagePostboil: '煮沸后麦汁',
  unitImperial: '英制',
  labels: {
    grainWeight: '麦芽总重量',
    grainType: '麦芽出糖率预设',
    customPotential: '自定义出糖率 (SG)',
    wortVolume: '煮沸前麦汁体积',
    measuredSg: '实测比重 (SG)',
    unitSystem: '单位系统',
    sampleTemp: '测量样品温度',
    calibTemp: '校准温度',
    stageLabel: '酿造阶段',
    presets: '常见麦芽潜在比重',
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
    pilsner: '皮尔森麦芽 (1.037 / 37 PPG)',
    pale_ale: '淡色艾尔麦芽 (1.038 / 38 PPG)',
    vienna: '维也纳麦芽 (1.036 / 36 PPG)',
    munich: '慕尼黑麦芽 (1.035 / 35 PPG)',
    wheat: '小麦麦芽 (1.038 / 38 PPG)',
    caramel_30: '焦糖麦芽 30L (1.034 / 34 PPG)',
    caramel_60: '焦糖麦芽 60L (1.034 / 34 PPG)',
    chocolate: '巧克力麦芽 (1.034 / 34 PPG)',
    custom: '自定义潜在值...',
  },
  results: {
    efficiencyTitle: '糖化效率',
    efficiencyBadge: '计算状态',
    correctedGravity: '温度校正比重',
    measuredGravity: '实测比重',
    expectedGravity75: '75% 效率目标 SG',
    expectedGravity80: '80% 效率目标 SG',
    expectedGravity85: '85% 效率目标 SG',
    potentialPoints: '理论总比重点数',
    extractedPoints: '实测提取比重点数',
    wortBrix: '预计 Brix 糖度',
  },
  statusMessages: {
    excellent: '极佳提取效率 (82%+)',
    good: '良好提取效率 (74% - 81%)',
    average: '平均提取效率 (65% - 73%)',
    poor: '偏低提取效率 (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: '糖化锅内提取过程',
    wortLevel: '麦汁液位',
    sugarExtraction: '糖分提取',
  },
};

const faq = [
  {
    question: '什么是啤酒糖化效率？',
    answer: '糖化效率是指在糖化和洗糟过程中，从麦芽中提取到煮沸前麦汁中的糖分占理论最大值的百分比。',
  },
  {
    question: '多少糖化效率算优秀？',
    answer: '对于家酿酿造，70% 到 80% 之间属于正常且良好的水平。',
  },
  {
    question: '糖化效率是如何计算的？',
    answer: '通过对比麦汁中实际提取的比重点数与麦芽配方理论最大可提供点数。',
  },
  {
    question: '如何提高偏低的糖化效率？',
    answer: '调整麦芽粉碎粒度、保持糖化 pH 在 5.2 - 5.6 之间并改善洗糟均匀度。',
  },
  {
    question: '糖化效率与酿造系统总效率有何区别？',
    answer: '糖化效率仅衡量煮沸前糖化锅内的提取率；系统总效率还包含了煮沸蒸发、酒花槽及发酵罐沉淀损失。',
  },
  {
    question: '料水比如何影响出糖率？',
    answer: '较稀的糖化醪（每公斤麦芽 3.5 至 4.0 升水）有助于增强酶活性和糖分洗出。',
  }
];

const howTo = [
  {
    name: '选择单位系统',
    text: '选择公制或英制单位。',
  },
  {
    name: '输入麦芽参数',
    text: '选择麦芽种类预设或输入自定义比重。',
  },
  {
    name: '输入麦汁体积与实测比重',
    text: '输入煮沸前收集的麦汁体积与比重计读数。',
  },
  {
    name: '查看效率与目标比重',
    text: '检查计算出的效率并对比 75%、80% 及 85% 目标值。',
  },
  {
    name: '调整后续酿造配方',
    text: '使用测得的基准效率精确调整未来的麦芽用量。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '糖化效率常见问题',
  bibliographyTitle: '参考文献与公式',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: '理解啤酒糖化效率',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '糖化效率衡量麦芽淀粉转化为可发酵糖并收集于麦汁中的效率。掌握糖化效率是精准配方设计的基础。',
    },
    {
      type: 'table',
      headers: ['参数', '公式', '说明'],
      rows: [
        ['潜在比重点数', '重量 x PPG', '理论最大值'],
        ['实际提取点数', '体积 x SG 点数', '麦汁中实际点数'],
        ['糖化效率', '(提取 / 潜在) x 100', '实际提取百分比'],
        ['麦汁 Brix', '-668.82 + 11.536 x SG x 100...', '折光仪对应值']
      ],
    },
    {
      type: 'title',
      text: '影响出糖效率的关键因素',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '麦芽粉碎度：粉碎越细表面积越大，但可能堵塞过滤。',
        '温度与 pH：酶活性最佳范围为 64°C - 68°C，pH 5.2 - 5.6。',
        '洗糟技术：连续或分段补水影响糖分洗出效率。',
        '料水比：较稀的糖化醪有助于酶的扩散和糖分洗涤。',
        '醪层深度：30 cm 至 45 cm 之间可优化液体流动动力。'
      ],
    },
    {
      type: 'tip',
      title: '以 75% 作为新配方设计基准',
      html: '设计新配方时，预设 75% 的糖化效率是一个可靠的起点。',
    },
    {
      type: 'title',
      text: '根据测量结果调整酿造',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '若煮沸前实测比重低于预期，可适当延长煮沸时间以浓缩麦汁，或添加干麦芽浸出物进行补偿。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '糖化效率与设备总效率的区别',
      html: '请勿将糖化锅提取效率与包含管道损失的设备总效率混淆。',
    },
  ],
};
