import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AbvDilutionCalculatorUI } from '../ui';

const slug = 'abv-dilution-calculator';
const title = '酒精稀释与 Proof 计算器';
const description = '计算将烈酒降低到目标酒精度所需添加的水量。显示最终体积、纯酒精体积和稀释比例。';
const ui: AbvDilutionCalculatorUI = {
  unitLabel: '体积单位', metricUnit: '公制 ml', imperialUnit: '英制 fl oz', strengthLabel: '酒精度单位', abvUnit: '酒精百分比', proofUnit: '美国 Proof', presetLabel: '快速场景', spiritPresetLabel: '750 ml 烈酒', liqueurPresetLabel: '700 ml 利口酒', cocktailPresetLabel: '500 ml 调配批次', startingStrengthLabel: '初始酒精度', startingVolumeLabel: '初始体积', targetStrengthLabel: '目标酒精度', waterToAddLabel: '添加水量', finalVolumeLabel: '最终体积', pureAlcoholLabel: '纯酒精', ratioLabel: '水的比例', startingProofLabel: '初始 Proof', targetProofLabel: '目标 Proof', readyMessage: '目标酒精度更低。量取水后逐步混合。', invalidMessage: '目标酒精度必须低于初始酒精度才能进行稀释。', largeAdditionMessage: '这批调配需要至少和烈酒等量的水。请分阶段混合并再次检查。', bottleLabel: '显示计算最终体积的刻度瓶', waterLayerLabel: '最终混合液中的水层', estimateNotice: '这只是计划参考值。酒精和水混合后可能发生体积收缩，请使用合适的测量设备确认最终酒精度。', sourceLabel: '公式来源', calculateAction: '稀释输入', resetAction: '重置数值', volumeHint: '添加水之前选择现有的体积。', strengthHint: 'Proof 使用美国体系显示：80 Proof 等于百分之四十酒精度。',
};
const faq = [
  { question: '如何计算稀释酒精所需的水量？', answer: '先将初始体积乘以初始酒精度，得到纯酒精体积。再将纯酒精体积除以小数形式的目标酒精度，得到理论最终体积。用最终体积减去初始体积，就是需要添加的水量。' },
  { question: 'ABV 和 Proof 有什么区别？', answer: 'ABV 表示液体中纯酒精的体积百分比。在美国 Proof 体系中，Proof 是 ABV 的两倍，因此百分之四十 ABV 等于 80 Proof。切换按钮只改变显示方式，不改变实际酒精强度。' },
  { question: '计算器会考虑酒精和水的体积收缩吗？', answer: '不会。结果是基于纯酒精守恒的估算。乙醇和水混合后总体积可能略有减少，温度也会改变体积。请把结果作为调配计划，并使用合适的酒精计或其他方法确认。' },
  { question: '可以用它制作合法的酒精产品吗？', answer: '本工具只进行数学计算，不检查配方、标签、消费税、许可证或当地法规。请遵守生产和销售地点的要求，并使用干净的设备和安全的测量方法。' },
];
const howTo = [
  { name: '选择体积单位', text: '选择公制毫升或英制液量盎司。切换单位时实际体积保持不变。' },
  { name: '输入初始批次', text: '设置稀释前的初始酒精度和烈酒体积。' },
  { name: '设置目标酒精度', text: '输入最终混合液的较低酒精度。不是稀释的目标会被标记。' },
  { name: '分阶段加水', text: '查看水量和最终体积，逐步混合，并使用合适的设备确认酒精度。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'zh' };
export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: '关于稀释的常见问题', bibliographyTitle: '公式来源', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: 'title', text: '酒精稀释的工作原理', level: 2 },
  { type: 'paragraph', html: '稀释是通过加水降低酒精浓度，同时大致保持纯酒精总量不变。这个<strong>酒精稀释计算器</strong>将初始酒精度和体积转换为实用的加水量与理论最终体积。计算在浏览器本地完成，不会上传批次数据。' },
  { type: 'table', headers: ['数值', '公式', '含义'], rows: [['纯酒精', '初始体积 x 初始酒精度', '带入混合液的酒精'], ['最终体积', '纯酒精 / 目标酒精度', '稀释后的理论总量'], ['添加水量', '最终体积减去初始体积', '计划准备的水量']] },
  { type: 'title', text: 'ABV 与 Proof 的换算', level: 2 },
  { type: 'paragraph', html: '体积酒精度表示液体中纯酒精所占的比例。在美国体系中，Proof 是 ABV 的两倍，因此百分之四十 ABV 等于 80 Proof。标签使用 Proof 时可以切换显示，但不同国家和历史时期的标准可能不同。' },
  { type: 'stats', columns: 3, items: [{ value: '80 proof', label: '百分之四十 ABV' }, { value: '1:1', label: '默认场景的水比例' }, { value: '100% 本地', label: '不上传批次数据' }] },
  { type: 'title', text: '为什么结果只是估算', level: 2 },
  { type: 'paragraph', html: '数学计算保持纯酒精体积，但真实混合液并不是完全相加的。酒精和水混合时会发生收缩，温度也会改变密度与测量体积。请逐步加水，等待混合液达到测量温度，再用适合液体的设备确认酒精度。' },
  { type: 'tip', title: '逐步混合并进行确认', html: '使用干净且量取准确的水，并准备足以容纳理论最终体积的容器。计算器不知道温度、糖分、香料或当地测量规则，因此水量只能作为起始计划，不能作为最终酒精度证明。' },
  { type: 'title', text: '可重复的稀释流程', level: 2 },
  { type: 'list', items: ['记录标签上的初始酒精度和批次实际体积。', '选择低于初始值的目标酒精度。', '计算纯酒精、最终体积和添加水量。', '先加入大部分水并混合，再分小步骤加入剩余水量。', '混合液达到测量温度后确认最终酒精度。'] },
  { type: 'diagnostic', variant: 'warning', title: '计算不等于生产许可', html: '本页面不验证原料、卫生、标签、税费、许可证或销售合法性。不要因为得到一个计算结果就跳过适用于你的饮品或所在地的规则。' },
] };
