import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'beer-carbonation-calculator';
const title = '啤酒碳酸化和启动剂计算器';
const description = '计算装瓶自酿啤酒所需的精确葡萄糖、白砂糖或DME（干麦芽提取物）克数。输入体积、发酵温度和风格，实现完美的启动。';

const ui: CarbonationUI = {
  parametersTitle: '参数',
  metricBtn: '公制',
  imperialBtn: '英制',
  volumeLabel: '啤酒体积',
  maxTempLabel: '最高温度',
  litersUnit: '升',
  celsiusUnit: '°C',
  gallonsUnit: '加仑',
  fahrenheitUnit: '°F',
  desiredCo2Label: '所需的碳酸化',
  volUnit: 'CO2 Vol',
  resultsTitle: '启动结果',
  tableSugarLabel: '白砂糖',
  cornSugarLabel: '玉米糖（葡萄糖）',
  dmeLabel: '干麦芽提取物（DME）',
  safetyTitle: '爆炸危险！',
  lowCarbonation: '低碳酸化',
  optimalCarbonation: '最优碳酸化',
  highEffervescence: '高气泡性',
  bubblingVisualizationLabel: '近似气泡可视化'
};

const faqTitle = '常见问题';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "为什么温度对碳酸化很重要？",
    answer: "啤酒中的残余CO2取决于发酵后达到的最高温度：冷液体比热液体保持更多的溶解气体。如果输入的温度低于实际温度，计算器会假设残余CO2比实际存在的要多，并给出少于所需的糖。如果输入过高，就会发生相反的情况-您添加的糖超过必要量，使您的一批进入瓶爆炸危险区，过度的压力会导致瓶子破裂或瓶盖暴力弹出。",
  },
  {
    question: "启动用什么糖最好？",
    answer: "葡萄糖（玉米糖）是首选，因为它是中性的并快速溶解。白砂糖效果很好，但所需重量约少10%。",
  },
  {
    question: "如果我添加过多启动糖会怎样？",
    answer: "过度启动会在瓶子内产生过量的CO2压力。标准玻璃瓶在大约3.5-4.0体积CO2时会失效。超过这一点，瓶子可能会爆裂，或瓶盖可能会暴力弹出。这就是为什么精确性很重要-即使每升5克额外的糖也可能将一批推入危险区域。",
  },
  {
    question: "装瓶后啤酒需要多长时间才能碳酸化？",
    answer: "在室温（18-22°C）下2至3周是酵母完全发酵添加的糖并使CO2融入液体的典型范围。在过程完成前打开瓶子总是会产生误导性结果：啤酒看起来碳酸化不足，尽管碳酸化仍在进行中。使用DME时，由于其可发酵糖的复杂性，过程可能会慢一些。",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "测量实际体积",
    text: "指出发酵完成后有多少升（或加仑）啤酒准备好装瓶。",
  },
  {
    name: "定义发酵温度",
    text: "输入啤酒在活跃发酵期间或之后达到的最高温度。",
  },
  {
    name: "选择风格或CO2体积",
    text: "选择所需的碳酸化水平。风格从1.5（黑啤）到4.5（小麦啤酒）不等。",
  },
];


const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: '碳酸化和启动的终极指南',
    level: 2
  },
  {
    type: 'paragraph',
    html: '掌握启动艺术，将自酿啤酒从平坦的实验转变为专业的起泡体验。启动涉及添加精确量的糖，以便瓶中的残余酵母在二次发酵期间产生天然CO2。糖太少会导致啤酒变平；太多会产生危险的压力，可能破坏瓶子。两者之间的差异只有几克-这就是该计算器存在的原因。'
  },
  {
    type: 'proscons',
    title: '关键成功因素',
    items: [
      { pro: '温度：残余CO2取决于发酵后的温度峰值。', con: '' },
      { pro: '精确性：每升5克额外的糖可能是完美碳酸化和间歇泉之间的区别。', con: '' },
      { pro: '', con: '氧化：转移以混合启动糖时，避免液体溅出。' }
    ]
  },
  {
    type: 'title',
    text: '按啤酒风格的CO2体积',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'British Stouts', value: '1.5 - 2.0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2.2 - 2.6 Vol', icon: 'mdi:hops' },
      { label: 'German Wheat', value: '3.3 - 4.5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: '你应该选择哪种糖？',
    icon: 'mdi:corn',
    html: '<strong>葡萄糖</strong>是中性的和专业的-行业标准。<strong>白砂糖</strong>经济且有效（使用比葡萄糖少10%的重量）。<strong>DME（干麦芽提取物）</strong>是纯粹主义者的选择，但因为其可发酵性因品牌和麦芽成分而异，所以更难精确预测。'
  },
  {
    type: 'diagnostic',
    title: '安全警告',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: '危险',
    html: '标准玻璃瓶在3.5-4.0体积CO2时失效。请勿尝试在薄玻璃中对比利时或小麦啤酒进行碳酸化。始终使用为碳酸饮料额定的瓶子，不要重复使用可能从之前使用中有微观结构损伤的回收商业瓶子。'
  },
  {
    type: 'tip',
    title: '专业提示：正确溶解糖',
    html: '在将启动糖溶液（每20L一批中约250ml水中溶解的糖）添加到啤酒之前，请始终煮沸10分钟。煮沸可以对溶液进行消毒，并确保糖完全溶解并均匀分布在整个一批中，防止导致瓶子之间碳酸化不均的热点。'
  },
  {
    type: 'summary',
    title: '这个工具适合谁？',
    items: [
      '家庭酿酒师：获得任何批次大小、风格和发酵温度的精确启动糖计算。',
      '精酿啤酒爱好者：了解为什么商业啤酒有不同碳酸化水平的科学。',
      '专业酿酒师：在装瓶大型商业批次之前交叉检查手工计算。'
    ]
  },
  {
    type: 'title',
    text: '碳酸化科学：Henry\'s定律',
    level: 2
  },
  {
    type: 'paragraph',
    html: '本质上，碳酸化由<strong>Henry\'s定律</strong>控制：液体中溶解的气体量与该气体在液体上方的分压成正比。当您启动瓶子并将其密封时，酵母消耗糖并在密闭环境中产生CO2。随着压力增加，气体被强制回到溶液中。在这个平衡达到的温度决定了最终的碳酸化水平-这就是为什么发酵温度是该计算器中最关键的变量。'
  },
  {
    type: 'paragraph',
    html: '启动前啤酒中的残余CO2不为零。每种啤酒都含有来自发酵过程的溶解CO2，保留的数量取决于啤酒达到的最高温度。在22°C下发酵的啤酒比在16°C下发酵的啤酒含有明显更少的残余CO2，尽管两者现在都已冷却。未能考虑这一剩余量会导致系统性过度启动-初级家庭酿酒师中最常见的错误之一。'
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
