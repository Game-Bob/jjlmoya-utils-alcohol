import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'alcohol-party',
  title: '酒精与派对实用工具',
  description: '用于计算酒精含量、饮料冷却和活动规划的工具',
  seo: [
    {
      type: 'summary',
      title: '科学与庆典',
      items: [
        '为您的鸡尾酒计算完美的平衡',
        '利用物理精度在创纪录的时间内冷却您的饮料',
        '为您的活动规划桶装啤酒和冰块库存',
        '估算您的新陈代谢和恢复时间',
      ],
    },
    {
      type: 'title',
      text: '更好地规划，负责任地庆祝',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '本类别汇集了酒精度、饮料冷却和活动准备相关的实用计算工具。您可以用它们比较配方、估算所需数量，并把结果作为规划参考。计算器不能判断一个人是否适合驾驶，也不能替代医疗建议。',
    },
  ],
};
