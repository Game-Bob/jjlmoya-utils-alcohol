import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'jello-shot-lab';
const title = '果冻酒计算器：完美酒精与明胶比例计算工具';
const description = '精确计算制作果冻酒所需的烈酒和明胶用量，让果冻酒真正凝固。通过科学依据的比例，避免出现液状或橡皮质感的失败品，适用于任何酒精度数。';

const ui: JelloShotLabUI = {
  title: '果冻酒计算器',
  description: '获取明胶、水和酒精的完美比例，让您的果冻酒每次都能凝固。',
  liquorBaseLabel: '烈酒类型',
  liquorAbvLabel: '酒精度数 (%)',
  gelatinLabel: '明胶类型',
  diluentLabel: '水基底',
  calculateBtn: '计算',
  modePrecision: '精确模式',
  modeIntensity: '酒劲强度',
  modeIntensityLight: '轻柔 (简单)',
  modeIntensityBalanced: '标准',
  modeIntensityLimit: '最大 (强劲)',
  partyPlannerTitle: '派对规划器',
  partyPlannerGuestLabel: '宾客人数',
  partyPlannerShotsPerGuest: '每人份数',
  multiLayerTitle: '多层次',
  howToTitle: '制作方法',
  proTipsTitle: '专业技巧',
  resultsTitle: '您的配方',
  totalVolumeLabel: '总量',
  boilingWaterLabel: '热水',
  alcoholVolumeLabel: '烈酒',
  packetsNeededLabel: '明胶包数',
  chillingTimeLabel: '冷藏时间',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: '包',
  modeParty: '派对模式',
  modeRecipe: '配方模式',
};

const faqTitle = '常见问题';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: '为什么高度烈酒会阻止果冻酒凝固？',
    answer: '乙醇会破坏维系明胶三重螺旋蛋白质结构的氢键。当烈酒占总体积约35%时，蛋白质基质无法形成稳定的网络，果冻酒便维持液态。烈酒的ABV越高，在达到这一极限之前可以添加的量就越少。',
  },
  {
    question: '果冻酒停止凝固之前的最大酒精比例是多少？',
    answer: '安全上限约为总液体体积的30–35%为纯烈酒（以40% ABV计算）。若使用96%的中性酒精，这一上限会下降至总体积的约15–18%。我们的计算器会考虑烈酒的ABV，确保您永远不会超过凝固临界值。',
  },
  {
    question: '使用哪种烈酒重要吗？伏特加、朗姆酒还是龙舌兰酒？',
    answer: '重要的是ABV，而不是烈酒的种类。40%的伏特加和40%的朗姆酒在明胶基质中的表现完全相同。然而，含糖量较高的烈酒（如某些朗姆酒或利口酒）可能略微改善口感，因为糖分会在明胶网络中与乙醇竞争氢键。',
  },
  {
    question: '果冻酒在冰箱里能保存多久？',
    answer: '妥善制作的果冻酒用保鲜膜覆盖，冷藏可保存3–5天。高酒精含量起到天然防腐剂的作用。避免在室温下放置超过2小时，因为明胶会软化，细菌也可能繁殖。',
  },
  {
    question: '可以让果冻酒更硬或更软吗？',
    answer: '可以。多加明胶（或额外半包）可制作能整块从杯中滑出的较硬果冻酒。少加一点可获得更软、更有弹性的口感。若想要入口即化的口感，请勿用琼脂代替明胶——琼脂凝固更硬，熔点也更高。',
  },
  {
    question: '可以冷冻果冻酒来加速冷却吗？',
    answer: '不可以。冷冻会破坏明胶网络，解冻后会呈现水汪汪、颗粒感的口感。请始终冷藏至少4小时。派对前一晚制作效果最佳——8小时以上可获得最佳口感。',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: '选择烈酒', text: '输入您烈酒的ABV并选择所需的酒劲强度。计算器将显示明胶所能容纳的最大烈酒量。' },
  { name: '混合明胶', text: '将计算所得量的沸水倒入碗中。加入明胶粉，用力搅拌2分钟直至完全溶解。暂时不要加入酒精。' },
  { name: '加入烈酒', text: '让明胶混合物冷却5–10分钟，直至温热但不烫手（50°C以下）。加入烈酒，轻轻搅拌以避免产生气泡。' },
  { name: '倒入模具并冷藏', text: '倒入塑料杯、硅胶模具或小杯中。冷藏至少4小时——整晚最为理想。不要冷冻。' },
];


const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: '完美果冻酒背后的化学原理', level: 2 },
  {
    type: 'paragraph',
    html: '果冻酒不仅仅是加了酒的调味明胶——它是一种<strong>精妙的胶体悬浮液</strong>，其中蛋白质聚合物、水和乙醇争夺氢键。比例错误，您会得到一滩甜液或一块弹回桌面的橡皮圆盘。比例正确，您将拥有一个完美颤动、能从杯中一次干净滑出的果冻酒。',
  },
  {
    type: 'stats',
    items: [
      { label: '轻柔 (简单)', value: '~30% 烈酒', icon: 'mdi:emoticon-happy-outline' },
      { label: '标准', value: '~45% 烈酒', icon: 'mdi:flask-outline' },
      { label: '最大', value: '~55% 烈酒', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: '什么是布卢姆强度？',
    icon: 'mdi:molecule',
    html: '布卢姆（Bloom）衡量明胶的凝胶强度，通常在50至300布卢姆之间。超市的片状明胶通常为150–200布卢姆。布卢姆越高，同等量粉末制成的凝胶越坚硬，意味着在无法凝固之前可以承受略多的酒精。标准明胶粉包（7克）针对约240毫升液体进行了校准。',
  },
  {
    type: 'card',
    title: '乙醇的极限',
    icon: 'mdi:alert-circle-outline',
    html: '乙醇与水争夺胶原蛋白氨基酸链上的氢键位点。当乙醇占据过多位点时，蛋白质无法折叠成赋予明胶结构的稳定三重螺旋。实际极限约为<strong>1份40%烈酒对1份水</strong>——超过此比例，无论等多久果冻酒都不会凝固。',
  },
  {
    type: 'tip',
    title: '切勿将酒精加入沸腾的明胶中',
    html: '酒精在78°C以上会迅速蒸发。在加入烈酒之前，请始终等待溶解的明胶冷却至50°C以下。这单一步骤造成的果冻酒失败比其他任何错误都多。',
  },
  { type: 'title', text: '常见失败的排查方法', level: 2 },
  {
    type: 'proscons',
    title: '症状与解决方案',
    items: [
      { pro: '4小时后果冻酒仍是液态 → 酒精过多或比例超限。减少烈酒用量。', con: '果冻酒没有酒味 → 在液体仍过热时加入了烈酒。请先冷却后再加入。' },
      { pro: '果冻酒过于有弹性 → 明胶过多。下次减少半包。', con: '果冻酒浑浊 → 搅拌时产生了气泡。轻轻搅拌并在倒入前静置。' },
      { pro: '果冻酒有颗粒感 → 明胶未完全溶解。在热水中搅拌更长时间。', con: '8小时后果冻酒仍未固化 → 乙醇上限已超过。减少烈酒用量或使用ABV更低的酒。' },
    ],
  },
  {
    type: 'summary',
    title: '这个工具适合谁？',
    items: [
      '派对主持人：在购买前精确计算所需包数和烈酒量。',
      '调酒师：以稳定一致的结果扩展至大批量生产。',
      '家庭厨师：避免最常见的失败——液状果冻酒、橡皮质感或零酒精味道。',
    ],
  },
];

const schemas: JelloShotLabLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
