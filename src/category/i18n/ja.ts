import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'alcohol-party',
  title: 'アルコールおよびパーティーユーティリティ',
  description: 'アルコール度数計算、飲料冷却、イベント計画のためのツール',
  seo: [
    {
      type: 'summary',
      title: '科学とセレブレーション',
      items: [
        'カクテルの完璧なバランスを計算する',
        '物理的な精度で記録的な速さで飲み物を冷やす',
        'イベントの樽と氷の在庫を計画する',
        '代謝と回復時間を推定する',
      ],
    },
    {
      type: 'title',
      text: '責任ある計画とパーティー',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このカテゴリーでは、アルコール度数、飲み物の冷却、イベント準備に役立つ計算ツールをまとめています。レシピを比較し、必要な量を見積もる際の目安として利用してください。飲酒後の運転可否を判断したり、医療上の助言に代わったりするものではありません。',
    },
  ],
};
