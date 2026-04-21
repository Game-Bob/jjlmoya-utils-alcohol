import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'cocktail-balancer';
const title = '鸡尾酒平衡器：酸法则';
const description = '计算你的鸡尾酒中甜与酸的完美平衡。掌握调酒术的黄金比例。';

const ui: CocktailBalancerUI = {
  title: '鸡尾酒平衡器',
  presetsBtn: '食谱',
  saveBtn: '保存',
  resetBtn: '重置',
  emptyStateTitle: '你的工作台是空的',
  emptyStateDescription: '添加材料以实时分析你的鸡尾酒平衡。',
  addBtn: '添加材料',
  addMoreBtn: '再添加一种材料',
  flavorProfileTitle: '风味概况',
  volLabel: '体积',
  sugarLabel: '糖',
  colorLabel: '颜色',
  sourLawTitle: '酸法则',
  acidDryLabel: '酸（干）',
  balanceLabel: '平衡',
  sweetLabel: '甜',
  aiSuggestionTitle: 'AI建议',
  addIngredientTitle: '添加材料',
  searchPlaceholder: '搜索朗姆酒、酸橙、糖浆...',
  presetsTitle: '食谱和预设',
  savedSectionTitle: '我的已保存',
  classicsSectionTitle: '经典',
  confirmDeleteTitle: '删除所有内容？',
  confirmDeleteText: '这将删除工作台上的所有材料。此操作无法撤销。',
  cancelBtn: '取消',
  deleteBtn: '删除',
  verdictSpiritSeco: '烈酒 / 干',
  verdictSoloDulce: '仅甜味（老酒）',
  verdictMuyAcido: '过酸 / 极干',
  verdictAcido: '酸 / 尖酸',
  verdictEquilibrado: '平衡（酸）',
  verdictDulce: '甜 / 商业',
  verdictEmpalagoso: '过甜',
  fixAddBitters: '缺少苦味',
  fixAddSugar: '过酸',
  fixAddAcid: '过甜'
};

const faqTitle = '常见问题';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "'酸法则'是什么？",
    answer: "这是调酒术的黄金比例，它平衡三个要素：强劲的基础（烈酒）、酸性（柑橘类）和甜度（糖浆）。经典配方通常遵循2:1:1的比例（强：酸：甜），尽管这会根据强度和密度而变化。",
  },
  {
    question: "稀释如何影响鸡尾酒的平衡？",
    answer: "冰不仅仅冷却；它添加水（稀释），这打开烈酒的香气并柔和酸度和甜度的峰值。在摇杯器中平衡的鸡尾酒，如果在玻璃杯中放置太长时间的冰，可能会变得不平衡。",
  },
  {
    question: "为什么我自制的鸡尾酒尝起来不像酒吧里的那样？",
    answer: "通常是由于糖和柑橘pH之间缺乏平衡。柠檬根据季节而异。我们的计算器可帮助你根据使用的果汁体积调整确切的糖浆量。",
  },
  {
    question: "什么是勃利克斯度，为什么它在鸡尾酒中很重要？",
    answer: "勃利克斯是测量液体中溶解糖含量的量表。简单糖浆（1:1）约为50°Brix；丰富糖浆（2:1）超过66°Brix。勃利克斯越高，每单位体积贡献的身体和甜度就越多。了解这一点可以在不破坏平衡的情况下在配方中交换糖浆。",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "选择酒精基础",
    text: "从我们的数据库中选择主要烈酒（金酒、朗姆酒、威士忌），以了解其风格和酒精含量。",
  },
  {
    name: "输入酸性代理",
    text: "添加柠檬汁、酸橙汁或葡萄柚汁的体积。计算器将分析pH对混合物的影响。",
  },
  {
    name: "调整甜味成分",
    text: "输入糖浆类型（简单、2:1、龙舌兰），并观看平衡指示器实时移动。",
  },
  {
    name: "完美服务",
    text: "审查该工具的最终裁决：酸比率、稀释后的估计ABV和更正建议。配新鲜冰块一起上桌，根据口味调整柑橘或糖浆。",
  },
];


const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: '分子工程与液体平衡',
    level: 2
  },
  {
    type: 'paragraph',
    html: '欢迎来到直觉与数学相遇的数字实验室。这个工具不是简单的食谱集；这是一个<strong>高级物理化学模拟器</strong>，旨在实时解构和分析你的鸡尾酒的分子结构。柑橘的每一滴、烈酒的每一克、糖浆的每一克都根据不变的化学定律相互作用，这决定了你的饮料是否会成为杰作或令人失望的失败。'
  },
  {
    type: 'stats',
    items: [
      { label: '酸橙', value: '~6% 酸', icon: 'mdi:fruit-citrus' },
      { label: '柠檬', value: '~6% 酸', icon: 'mdi:fruit-citrus' },
      { label: '葡萄柚', value: '~1-2% 酸', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: '酸度的科学',
    icon: 'mdi:fruit-citrus',
    html: '酸度不仅仅是一种味道；它是任何平衡的鸡尾酒的结构脊柱。没有适当的酸度，饮料就会变得平坦、单调且容易被遗忘。我们的算法区分波斯酸橙与尤里卡柠檬的可滴定酸度，同时考虑柑橘pH的季节变化，这可能会将你的食谱转移整个平衡点在味觉上。'
  },
  {
    type: 'card',
    title: '勃利克斯控制（甜度）',
    icon: 'mdi:spoon-sugar',
    html: '你的鸡尾酒的身体和质地完全取决于溶解的糖。简单糖浆（1:1）的行为与丰富糖浆（2:1）、蜂蜜或龙舌兰花蜜完全不同。每种甜味剂都有不同的勃利克斯度和粘度，影响饮料如何覆盖舌头。我们的计算器计算溶解糖的精确克数，以预测最终的口感和甜度感受。'
  },
  {
    type: 'card',
    title: '热力学与稀释',
    icon: 'mdi:water-percent',
    html: '摇晃的鸡尾酒根据冰温、摇晃技术和持续时间稀释25-40%。这种水的添加不是缺陷；这是打开香气并柔和酒精边缘的必需成分。我们的计算器估计稀释后的最终ABV，因此你可以设计具有精确预期强度和风味平衡的饮料。'
  },
  {
    type: 'title',
    text: '超越基本比例',
    level: 2
  },
  {
    type: 'paragraph',
    html: '许多调酒师学习经典的2:1:1规则（2份烈酒、1份酸、1份甜）并将其视为普遍真理。然而，<strong>化学远更加细致</strong>。西西里岛的柠檬含有与墨西哥酸橙不同的酸度。像君度这样的三倍秒表现得与蓝色库拉索根本不同。同一个配方可能在一周内尝起来完美平衡，然后在下一周中令人难以忍受地酸，仅仅是由于季节水果变化。'
  },
  {
    type: 'paragraph',
    html: '这个平衡器突破了这些幼稚的障碍。通过输入你的具体材料，你查阅了一个生活数据库，该数据库动态调整酸度和甜度向量，以提供你的创意的精确感官地图。停止猜测，开始用世界级机构的调酒师在每次服务中使用的相同科学严谨性来设计你的鸡尾酒。'
  },
  {
    type: 'summary',
    title: '这个工具适合谁？',
    items: [
      '专业调酒师：标准化食谱并以可重复的一致性创建签名菜单。',
      '家庭爱好者：停止猜测，开始理解为什么你的鸡尾酒成功或失败。',
      '饮料开发者：在昂贵的生产运行之前快速原型新风味概念。'
    ]
  },
  {
    type: 'diagnostic',
    title: '黄金区域',
    icon: 'mdi:star',
    variant: 'success',
    badge: '目标',
    html: '这是最终目标：糖中和酸的进攻而不掩盖基础烈酒的精油和芳香化合物的受控pH。这种精确的平衡是永恒的经典所在——代基里、玛格丽塔、边车——饮料因为服从味觉化学的基本定律而在几十年内幸存。'
  },
  {
    type: 'tip',
    title: '专家提示：始终使用新鲜柑橘',
    html: '始终在最后一刻挤压柑橘。柠檬和酸橙汁迅速氧化，在挤压后20-30分钟内失去活跃的酸度。用真正新鲜果汁制成的鸡尾酒在味觉上将始终具有亮度和生命力，这是任何瓶装产品都无法复制的。在室温下使用水果以最大化果汁产量。'
  }
];

const schemas: CocktailBalancerLocaleContent['schemas'] = [
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

export const content: CocktailBalancerLocaleContent = {
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
