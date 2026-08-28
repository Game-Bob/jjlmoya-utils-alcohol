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
  units: { weightKg: '公斤', weightLb: '磅', volumeL: '升', volumeGal: '加仑', sg: 'SG', brix: 'Brix', percent: '%' },
  grainPresets: {
    pilsner: '皮尔森麦芽 (1.037 / 37 PPG)',
    pale_ale: '淡色淡艾麦芽 (1.038 / 38 PPG)',
    vienna: '维也纳麦芽 (1.036 / 36 PPG)',
    munich: '慕尼黑麦芽 (1.035 / 35 PPG)',
    wheat: '小麦麦芽 (1.038 / 38 PPG)',
    caramel_30: '水晶焦香 30L (1.034 / 34 PPG)',
    caramel_60: '水晶焦香 60L (1.034 / 34 PPG)',
    chocolate: '巧克力麦芽 (1.034 / 34 PPG)',
    custom: '自定义出糖率...',
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
  kettleVisual: { mashTunTitle: '糖化锅糖分提取', wortLevel: '麦汁液位', sugarExtraction: '糖分提取状态' },
};

const faq = [
  { question: '什么是啤酒糖化效率？', answer: '糖化效率是指在糖化和洗糟过程中，从麦芽中提取到煮沸前麦汁中的糖分占理论最大值的百分比。' },
  { question: '多少糖化效率算优秀？', answer: '对于家酿酿造，70% 到 80% 之间属于正常且良好的水平。' },
];
const howTo = [
  { name: '选择单位系统', text: '选择公制或英制单位。' },
  { name: '输入麦芽和麦汁参数', text: '输入麦芽总重、出糖率及实测比重。' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s, idx) => ({ '@type': 'HowToStep', position: idx + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'zh' };

export const content: ToolLocaleContent<Record<string, any>> = {
  slug, title, description, ui, faqTitle: '糖化效率常见问题', bibliographyTitle: '参考来源', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography,
  seo: [
    { type: 'title', text: '理解啤酒糖化效率', level: 2 },
    { type: 'paragraph', html: '了解糖化效率有助于精准调整家酿配方与比重。' }
  ]
};
