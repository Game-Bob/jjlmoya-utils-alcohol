import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'beer-mash-efficiency-calculator';
const title = 'ビール糖化効率計算機';
const description = '自家醸造およびクラフトビール向けの糖化効率（マッシュ効率）、糖分抽出量、予測比重を計算します。';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'メートル法',
  stagePreboil: '煮沸前麦汁',
  stagePostboil: '煮沸後麦汁',
  unitImperial: 'ヤード・ポンド法',
  labels: {
    grainWeight: 'モルト総重量',
    grainType: 'モルト潜在比重プリセット',
    customPotential: 'カスタム潜在比重 (SG)',
    wortVolume: '煮沸前麦汁量',
    measuredSg: '計測実測比重 (SG)',
    unitSystem: '単位系',
    sampleTemp: '測定サンプル温度',
    calibTemp: '校正温度',
    stageLabel: '醸造ステージ',
    presets: '代表的なモルト潜在比重',
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
    pilsner: 'ピルスナーモルト (1.037 / 37 PPG)',
    pale_ale: 'ペールエールモルト (1.038 / 38 PPG)',
    vienna: 'ウィーンモルト (1.036 / 36 PPG)',
    munich: 'ミュンヘンモルト (1.035 / 35 PPG)',
    wheat: '小麦モルト (1.038 / 38 PPG)',
    caramel_30: 'カラメルモルト 30L (1.034 / 34 PPG)',
    caramel_60: 'カラメルモルト 60L (1.034 / 34 PPG)',
    chocolate: 'チョコレートモルト (1.034 / 34 PPG)',
    custom: 'カスタム潜在比重...',
  },
  results: {
    efficiencyTitle: '糖化効率',
    efficiencyBadge: '計算ステータス',
    correctedGravity: '温度補正後比重',
    measuredGravity: '実測比重',
    expectedGravity75: '効率 75% 時の目標 SG',
    expectedGravity80: '効率 80% 時の目標 SG',
    expectedGravity85: '効率 85% 時の目標 SG',
    potentialPoints: '理論最大抽出ポイント',
    extractedPoints: '実測抽出ポイント',
    wortBrix: '推定 Brix',
  },
  statusMessages: {
    excellent: '優れた抽出率 (82%+)',
    good: '良好な抽出率 (74% - 81%)',
    average: '平均的な抽出率 (65% - 73%)',
    poor: '低い抽出率 (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'マッシュタンクでの抽出',
    wortLevel: '麦汁レベル',
    sugarExtraction: '糖分抽出',
  },
};

const faq = [
  {
    question: 'ビール醸造における糖化効率とは何ですか？',
    answer: '糖化効率とは、モルトから煮沸前麦汁へ抽出された糖分が理論最大値の何パーセントに相当するかを示す指標です。',
  },
  {
    question: '適切な糖化効率の目安は？',
    answer: 'ホームブローイングでは70%〜80%の範囲が一般的な目標値となります。',
  },
  {
    question: '糖化効率はどのように計算されますか？',
    answer: '麦汁に実際に回収されたエキスポイントと、モルト配合の理論潜在ポイントを比較して算出します。',
  },
  {
    question: '糖化効率が低い場合の改善方法は？',
    answer: 'モルトの砕き具合の調整、マッシュpH（5.2〜5.6）の維持、スパージングの均一化が効果的です。',
  },
  {
    question: '糖化効率と醸造設備全体の効率の違いは？',
    answer: '糖化効率は煮沸前の釜での回収率を指し、設備全体効率は煮沸・冷却・発酵容器でのロスを含みます。',
  },
  {
    question: '料水比は抽出にどう影響しますか？',
    answer: '水比率が高めのマッシュ（1kgあたり3.5L〜4.0L）は酵素の移動を助け、糖分の洗浄効率を高めます。',
  }
];

const howTo = [
  {
    name: '単位系を選択',
    text: 'メートル法またはヤード・ポンド法を選択します。',
  },
  {
    name: 'モルト重量と潜在比重を入力',
    text: 'モルトの種類を選択するかカスタム比重を入力します。',
  },
  {
    name: '麦汁量と実測比重を入力',
    text: '煮沸前に回収した麦汁量と比重計の読みを入力します。',
  },
  {
    name: '効率と目標値を確認',
    text: '計算された効率と75%、80%、85%の目標値を比較します。',
  },
  {
    name: '次回仕込みのレシピを調整',
    text: '算出された基準効率をもとに仕込み配合を最適化します。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '糖化効率に関するよくある質問',
  bibliographyTitle: '参考文献と計算式',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'ビール糖化効率の理解と活用',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '糖化効率は、モルトのデンプンが発酵性糖に変換され麦汁に回収される効率を測定します。正確なレシピ設計の基礎となる指標です。',
    },
    {
      type: 'table',
      headers: ['値', '計算式', '意味'],
      rows: [
        ['純アルコール', '開始容量 x 開始度数', '混合液に残るアルコール'],
        ['最終容量', '純アルコール / 目標度数', '希釈後の理論上の合計'],
        ['加える水', '最終容量 minus 開始容量', '準備する水の量'],
        ['麦汁 Brix', '-668.82 + 11.536 x SG x 100...', '屈折計の対応値']
      ],
    },
    {
      type: 'title',
      text: 'エキス抽出率に影響を与える要因',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'モルト粉砕：細かく砕くほど表面積が増えるが、ラウタリングが詰まりやすくなる。',
        '温度とpH：酵素活性の最適範囲は64°C〜68°C、pH 5.2〜5.6。',
        'スパージング技術：連続または段階的な注水が糖分洗浄に影響する。',
        '仕込み水量：水比率の高いマッシュは酵素の移動を促進する。',
        '穀物層の深さ：30〜45 cmで液体の流動が最適化される。'
      ],
    },
    {
      type: 'tip',
      title: '新レシピは75%を標準として設計',
      html: '新しいレシピを設計する際は、75%の糖化効率を基準にすると安定した計画が立てられます。',
    },
    {
      type: 'title',
      text: '計測結果に基づく調整',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '煮沸前の実測比重が目標を下回る場合は、煮沸時間を延ばして麦汁を濃縮するか、乾燥モルトエキスを追加することができます。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '糖化釜効率と設備全体効率の分離',
      html: '糖化釜での抽出効率と、トラブ損などを含む最終回収効率を混同しないよう注意しましょう。',
    },
  ],
};
