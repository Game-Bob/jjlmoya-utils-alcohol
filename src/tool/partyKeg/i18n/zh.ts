import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'party-stock-calculator';
const title = '派对啤酒计算器：婚礼和生日派对的人均用量';
const description = '根据嘉宾数量、活动时长和温度计算所需啤酒和冰块数量的免费工具。非常适合婚礼、生日派对和户外活动。';

const ui: PartyKegUI = {
  calcStockTitle: '库存计算器',
  beerIceSub: '派对用啤酒和冰块',
  guestsLabel: '嘉宾人数',
  durationLabel: '活动时长',
  hoursUnit: '小时',
  intensityLabel: '强度',
  chillLabel: '悠闲',
  standardLabel: '标准',
  partyLabel: '热烈',
  tempLabel: '温度',
  estimatedVolLabel: '估算容量',
  kegsLabel: '桶',
  iceRequiredLabel: '所需冰块',
  bagsLabel: '袋',
  visualizationTitle: '库存可视化',
  optimalMsg: '最优条件',
  highMeltMsg: '检测到高融化速度',
  highEfficiencyMsg: '寒冷/高效率'
};

const faqTitle = '常见问题';
const bibliographyTitle = '参考文献和来源';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "4小时内1个人要喝多少啤酒？",
    answer: "平均而言，4小时派对中每人需准备5瓶啤酒。这假设第一小时有2杯饮品，之后每小时1杯。",
  },
  {
    question: "100瓶啤酒需要多少冰块？",
    answer: "您大约需要15-20公斤冰块（7-10袋）。经验法则是正常条件下每升饮料配0.75公斤冰块。在夏季或室外温度超过25°C时，增加到每升1公斤：环境热量会加速融化，冰块会比预期更快耗尽。",
  },
  {
    question: "标准啤酒桶和派对桶之间有什么区别？",
    answer: "标准商用啤酒桶容量50升，可产生约200份饮品（每份250毫升）。派对桶（迷你桶）通常容量5升，约20份饮品。了解这些规格有助于将计算器的升数转换为您需要购买的桶数。",
  },
  {
    question: "如果啤酒已经冷了，为什么还需要这么多冰块？",
    answer: "因为冷却和保温是两个不同的过程。将一罐啤酒从25°C冷却到4°C需要消耗冰块的潜热，约334千焦/千克。冰块冷却后，它会继续工作来抵消环境热量。在35°C的夏日，冷却效果对每升饮料可能每2-3小时融化1公斤冰块。这就是为什么派对前预冷饮料可以将总冰块消耗量减少一半。",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "估算嘉宾人数",
    text: "确定将有多少人参加。我们的计算器会根据统计消费平均值调整用量。",
  },
  {
    name: "确定时长和强度",
    text: "说明活动持续多少小时以及派对的'节奏'（悠闲、标准或热烈）。",
  },
  {
    name: "根据环境温度调整",
    text: "室外温度对冰块计算至关重要。温度越高，需要补偿的融化速度就越大。",
  },
];

const bibliography: PartyKegLocaleContent['bibliography'] = [
  {
    name: "Event Planning: Alcohol & Bar Calculations - Spruce Eats",
    url: "https://www.thespruceeats.com/stock-your-bar-for-a-party-760394",
  },
  {
    name: "Thermodynamics of Ice Melting - Engineering Toolbox",
    url: "https://www.engineeringtoolbox.com/saturated-ice-steam-d_970.html",
  },
];

const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: '派对需要多少啤酒和冰块？',
    level: 2
  },
  {
    type: 'paragraph',
    html: '组织任何活动时的百万美元问题：<strong>我应该买多少升啤酒？</strong>太少是灾难，太多是不必要的开支。该工具帮助您计算准确的酒精量，最重要的是计算出<strong>需要多少袋冰块</strong>来保持冷度。专业餐饮服务和活动规划人员使用统计消费模型——现在您也可以免费使用。'
  },
  {
    type: 'title',
    text: '人均消费公式',
    level: 2
  },
  {
    type: 'paragraph',
    html: '为了估算所需的酒精，专业餐饮服务使用基于"小时消费率"的公式。这不是精确的科学，但统计数据表明，在标准派对上，每人每小时大约消费1.5单位。环境温度、食物供应和活动的社交氛围等因素都会改变这个基准数字。'
  },
  {
    type: 'stats',
    items: [
      { label: '悠闲消费', value: '1杯/小时', icon: 'mdi:tea-outline' },
      { label: '标准派对', value: '1.5杯/小时', icon: 'mdi:glass-mug-variant' },
      { label: '婚礼/音乐节', value: '2.5+杯/小时', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: '冰块的物理学',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: '热力学',
    html: '计算冰块是大多数派对主人失败的地方。冰块有两个功能：冷却（将啤酒从25°C降至4°C）和维持（对抗环境热量）。在超过30°C的温度下，融化速度翻倍。一袋冰块在阳光直射下可能在20分钟内全部融化，导致派对高潮时饮料已经变温。'
  },
  {
    type: 'tip',
    title: '节省冰块的专业建议',
    html: '在添加冰块前，将啤酒桶和罐子存放在阴凉处。如果饮料在阳光下受热，您的第一袋冰块会因潜热交换在10分钟内损失50%。从预冷的饮料开始，可以大幅减少您实际需要购买的冰块量。'
  },
  {
    type: 'title',
    text: '物流参考数据',
    level: 2
  },
  {
    type: 'paragraph',
    html: '标准50升啤酒桶可产生约200份饮品。典型冰块袋重2公斤。了解这些数据可以帮助您规划活动所需的运输和储存，避免临时突发事件。考虑运输过程中的冰块融化——夏季30分钟的运车可能会损耗一整袋冰块，派对还未开始。'
  },
  {
    type: 'summary',
    title: '该工具面向谁？',
    items: [
      '私人派对主办者：停止猜测，自信地购买下一场庆祝所需的确切用量。',
      '活动策划人：使用准确的消费模型为客户报价并专业地规划酒吧物流。',
      '场地管理者：在不同嘉宾数量的重复性活动中标准化库存计算。'
    ]
  },
  {
    type: 'paragraph',
    html: '一个常被忽视的变量是<strong>嘉宾缺席率</strong>。在大多数派对中，10-15%的嘉宾会提早离场，10%可能根本不喝酒。计算器应用保守的缓冲区，确保您永远不会短缺，但也不会有巨额剩余。理解这些调整有助于为您的特定人群和场景微调估算。购买时始终向上取整，因为开封的啤酒桶通常无法退货。小的过量总是优于派对中途饮品用尽。'
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
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
