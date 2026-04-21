import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'fortified-wine-builder';
const title = '加强葡萄酒与苦艾酒酿造器：皮尔逊方法计算器';
const description = '精确计算需要向葡萄酒中添加多少烈酒才能达到目标酒精度。使用皮尔逊方法酿造完美的苦艾酒、波特酒和雪利酒。';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: '您在制作什么？',
  intentionVermouth: '苦艾酒',
  intentionPort: '波特酒',
  intentionSherry: '雪利酒',
  intentionCustom: '自定义',
  modeALabel: '基于现有葡萄酒',
  modeBLabel: '目标最终容量',
  wineSection: '基础葡萄酒',
  wineVolumeLabel: '葡萄酒容量（升）',
  wineAbvLabel: '葡萄酒酒精度（%）',
  spiritSection: '加强烈酒',
  spiritAbvLabel: '烈酒酒精度（%）',
  brandyPreset: '白兰地（38°）',
  neutralPreset: '中性酒精（96°）',
  aguardientePreset: '阿瓜尔迪恩特（42°）',
  targetAbvLabel: '目标酒精度（%）',
  targetVolumeLabel: '目标总容量（升）',
  resultsTitle: '您的配方',
  addLabel: '添加',
  finalVolumeLabel: '最终容量',
  bottlesSection: '所需瓶数',
  copyBtn: '复制配方',
  copiedBtn: '已复制！',
  pearsonTitle: '皮尔逊方法',
  wineCornerLabel: '葡萄酒',
  spiritCornerLabel: '烈酒',
  emptyState: '请输入数值以查看皮尔逊方法图示',
  errorAbv: '烈酒酒精度必须高于目标酒精度，目标酒精度必须高于葡萄酒酒精度。',
  errorMode: '请输入有效容量进行计算。',
};

const faqTitle = '常见问题';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: '什么是皮尔逊方法？',
    answer: '皮尔逊方法是酿酒中用于计算调配比例的简单图解法。将目标酒精度放在方格中央，葡萄酒酒精度放在左上角，烈酒酒精度放在左下角。对角线差值即为所需各液体的比例份数。',
  },
  {
    question: '苦艾酒的典型酒精度是多少？',
    answer: '传统苦艾酒的酒精度在15%至18%之间。干型（法式风格）苦艾酒通常处于较低端（15-16%），而甜型（意式风格）苦艾酒通常为16-18%。玫瑰苦艾酒居于两者之间。',
  },
  {
    question: '制作苦艾酒应使用哪种基础葡萄酒？',
    answer: '传统上，酒精度在10-12%之间的中性干白葡萄酒效果最佳。葡萄酒提供骨架，但由于将用草药和植物原料调香，不需要昂贵的葡萄酒——干净、酸度适中的基底最为理想。',
  },
  {
    question: '可以用中性酒精代替白兰地吗？',
    answer: '可以。中性酒精（96%）提供最大的控制力和更纯净的风味特征。白兰地带有其自身特色（橡木、干果、香草），这对不同风格可能是有益或无益的。波特酒传统上使用葡萄白兰地，而一些苦艾酒使用中性烈酒。',
  },
  {
    question: '加强过程如何保存葡萄酒？',
    answer: '当葡萄酒的酒精度超过约15-16%时，酵母发酵受到抑制——酵母无法在高酒精环境中存活。这就是加强葡萄酒比普通葡萄酒保质期更长的原因。酒精既能防止酵母又能防止细菌腐败，起到天然防腐剂的作用。',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: '选择风格', text: '选择苦艾酒、波特酒、雪利酒或自定义，自动填入推荐的目标酒精度范围。' },
  { name: '输入葡萄酒数据', text: '输入基础葡萄酒的容量（或模式B中的目标最终容量）及其当前酒精度。' },
  { name: '设置烈酒', text: '选择烈酒预设或输入自定义酒精度。皮尔逊方法图示实时更新。' },
  { name: '查看配方', text: '计算器精确显示需要添加的烈酒毫升数和最终容量。' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: '皮尔逊方法：古老的数学，完美的葡萄酒', level: 2 },
  { type: 'paragraph', html: '<strong>皮尔逊方法</strong>是酿酒数学中最古老、最优雅的工具之一。它诞生于19世纪，使任何酿酒师——无论专业人士还是爱好者——都能仅凭减法计算调配比例。我们的工具将这种可视化方法数字化，并添加实时反馈，让您花更少的时间计算，花更多的时间酿造。' },
  { type: 'stats', items: [{ label: '苦艾酒', value: '15–18% vol.', icon: 'mdi:glass-cocktail' }, { label: '波特酒', value: '18–20% vol.', icon: 'mdi:bottle-wine' }, { label: '雪利酒', value: '15–17% vol.', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: '为什么在18%时加强？', icon: 'mdi:shield-check', html: '当酒精度超过约15%时，<em>Saccharomyces cerevisiae</em>（主要葡萄酒酵母）受到抑制。达到18%时，发酵完全停止。这就是为什么波特酒保留残余糖分：烈酒在发酵中途加入，在所有糖分被消耗之前杀死酵母。' },
  { type: 'tip', title: '专业提示：在20°C时测量', html: '酒精密度随温度变化。官方酒精度测量值以20°C为标准校准。如果您的烈酒或葡萄酒温度明显偏高或偏低，请应用修正系数：低于20°C每降1°C约+0.04%，高于20°C每升1°C约−0.04%。' },
  { type: 'title', text: '精酿苦艾酒的复兴', level: 2 },
  { type: 'paragraph', html: '南欧正在经历精酿苦艾酒的复兴。巴塞罗那、瓦伦西亚和圣塞巴斯蒂安将<em>la hora del vermut</em>重新确立为文化传统，西班牙、意大利和法国的小型生产商正在装瓶出品令人惊叹的产品。这催生了新一代家庭生产者，他们希望获得与自身抱负相匹配的技术工具。' },
  { type: 'summary', title: '这个工具适合谁？', items: ['家庭酿酒师：以精准度而非猜测来加强您的收成。', '精酿苦艾酒生产商：在扩大到完整批次之前对新的酒精度目标进行原型测试。', '烈酒教育者：在工作坊中直观地演示皮尔逊方法。'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
