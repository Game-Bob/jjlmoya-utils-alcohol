import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'alcohol-clearance-calculator';
const title = '二日酔い・血中アルコール濃度計算機：回復予測ツール';
const description = 'ウィドマルク式を使用して血中アルコール濃度（BAC）を計算し、0.0に達するまでの時間を予測します。睡眠前の水分補給を計画し、完全に回復する時間を把握しましょう。';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: '生物学的性別',
  weightLabel: '体重',
  kgUnit: 'kg',
  addDrinkLabel: 'ドリンクを追加',
  beerLabel: 'ビール',
  wineLabel: 'ワイン',
  spiritLabel: 'カクテル',
  shotLabel: 'ショット',
  accumulatedLabel: '飲んだドリンク',
  emptyListLabel: 'リストが空です',
  emptySubLabel: '計算するドリンクを選択してください。',
  estimatedBacLabel: '推定BAC',
  bacUnit: 'BAC',
  timeToZeroLabel: '0.0に到達するまで',
  waterAdviceLabel: '水（睡眠前）',
  pillAdviceLabel: 'サプリメント',
  noneAdvice: '不要',
  hydrationAdvice: '優先：水分補給',
  electrolytesAdvice: '電解質 + ビタミンB',
  disclaimerText: 'この計算機は理論値です。代謝と食事により結果は変わります。飲酒運転は絶対にしないでください。',
  drinkUnit: '杯',
  drinksUnit: '杯'
};

const faqTitle = 'よくある質問';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: '標準飲酒単位とは何ですか。各ドリンクに含まれる量は？',
    answer: '標準飲酒単位はおよそ純アルコール10グラムを含みます（イギリス・EU基準。米国は14g）。通常のビール330ml（5%）は約1.3単位、ワイングラス150ml（12%）は約1.4単位、ショット40ml（40%）は約1.3単位です。飲んでいるものにいくつの単位が含まれているかを知ることは、計算機の結果を正しく解釈するために不可欠です。',
  },
  {
    question: 'なぜ生物学的性別がBAC計算に影響するのですか？',
    answer: '生物学的性別はウィドマルク係数「r」に影響を与え、この値は体重に占める体内水分の割合を表します。男性は平均 r=0.68 で、体水分の割合が相対的に多いためです。女性は平均 r=0.55 で、体脂肪の割合が高く、アルコールをより少なく保持するためです。つまり、同じドリンク数と体重でも、女性はより高いBACに達します。',
  },
  {
    question: 'コーヒー、水、運動でアルコール分解を速めることができますか？',
    answer: 'いいえ。肝臓はアルコールを毎時間約0.15 g/L の一定速度で分解します（ゼロ次反応）。コーヒーは疲労を隠し、水は脱水状態を改善し、運動は全般的な健康を向上させますが、いずれも実際のBAC低下には影響しません。アルコール分解を促進できるのは時間だけです。',
  },
  {
    question: '飲酒後に食べるとBACが低くなりますか？',
    answer: '飲酒後に食べても、既に血液中にあるアルコールは減少しません。食事が大きな違いをもたらすのは飲酒前または飲酒中です。胃の中の食物、特にタンパク質と脂肪は胃からの吸収を遅くし、ピークBAC を最大50%低下させることができます。アルコールが吸収されれば、肝臓の代謝によってのみ分解されます。',
  },
  {
    question: 'BAC0.0に到達するのにどのくらい時間がかかりますか？',
    answer: 'これはあなたの開始BACに依存します。推定BAC（g/L）を0.15で割れば、おおよその時間が得られます。例えば、BAC1.5 g/L の場合は約10時間かかります。肝臓は常に働いており、睡眠中もアルコールを処理しています。ただし注意してください。完全に回復したと感じているときでも、血液中にアルコールが存在している可能性があります。',
  },
  {
    question: 'この計算機は運転の判断に100%信頼できますか？',
    answer: 'いいえ。このツールはウィドマルク式に基づく理論推定値です。食事摂取、薬物、疲労、ADH酵素遺伝子変異、ストレスなどの要因により、実際のBAC は両方向で20～30%変動する可能性があります。この計算機を運転の判断に使用しないでください。飲酒した場合は、絶対に運転しないでください。これが唯一のルールであり、エラーの余地がありません。',
  },
];


const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: 'プロフィールを設定',
    text: 'あなたの生物学的性別（体内水分の割合に影響）と現在の体重を選択します。',
  },
  {
    name: '飲んだドリンクを追加',
    text: '飲んだドリンクのアイコンをクリックします。それらは下のリストに蓄積されます。',
  },
  {
    name: '安全な時間を確認',
    text: '推定BAC と、最も重要なこととして、肝臓がすべての摂取エタノールを処理するのに要する時間を観察します。',
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'アルコール代謝：科学と分解',
    level: 2
  },
  {
    type: 'paragraph',
    html: '身体がエタノールをどのように処理するかを理解することは、安全のため、そして二日酔いを軽減するために不可欠です。当社の<strong>アルコール分解計算機</strong>は、認識されている<strong>ウィドマルク式</strong>を使用して、あなたの代謝状態を明確に把握できます。アルコールは発汗、水を飲むこと、または運動によって分解されません。時間と肝臓の代謝だけが血中アルコール濃度を低下させることができます。'
  },
  {
    type: 'diagnostic',
    title: 'BAC の薬物動態学',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: '生化学',
    html: 'アルコールは体内水分全体に分布します。体重とウィドマル係数 r（男性 0.68 / 女性 0.55）などの要因が、血液中のエタノール初期希釈を決定します。これが同じ体重の2人が同じドリンク数を飲んでも、BAC の値がまったく異なる理由です。'
  },
  {
    type: 'title',
    text: '肝臓の酸化と酵素',
    level: 2
  },
  {
    type: 'paragraph',
    html: '肝臓はアルコール脱水素酵素（ADH）によりアルコールの95%を分解します。このプロセスは一定の速度で発生します（ゼロ次反応）。これは運動またはコーヒーによって加速することはできません。残りの5%は呼気、尿、汗を通じて排出されます。これは交通執行での呼気検査の基礎となります。'
  },
  {
    type: 'stats',
    items: [
      { label: '分解速度', value: '0.15 g/L·h', icon: 'mdi:clock-fast' },
      { label: '胃での吸収', value: '20% エタノール', icon: 'mdi:stomach' },
      { label: '推奨水分補給', value: '1：1 水/ドリンク', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: '神話 vs 現実',
    items: [
      { pro: '睡眠前の水分と電解質補給は、利尿作用に対抗することで二日酔いの程度を軽減します。', con: '' },
      { pro: '', con: '冷たいシャワー：血中アルコール濃度にはまったく影響しません。' },
      { pro: '', con: 'コーヒー：眠気を隠しますが、失われた反射神経や認知機能を回復させません。' }
    ]
  },
  {
    type: 'card',
    title: '二日酔いの原因は何ですか？',
    icon: 'mdi:alert-decagram',
    html: '医学的には「宿酔」として知られる二日酔いは、全身脱水（エタノールによるバソプレシン抑制）、アセトアルデヒド蓄積（有毒な代謝産物）、およびサイトカイン炎症反応免疫応答によって引き起こされます。アルコール抑制後の脳のグルタメート反動も、翌朝の不安と光および音への過敏性に寄与します。'
  },
  {
    type: 'tip',
    title: '安全第一：自分の限界を知る',
    html: 'BAC 0.05% は、判断、追視、反応時間に測定可能な障害をもたらします。ほとんどの国は運転の法定上限を0.05% ～ 0.08% の間に設定しています。ただし、個人差は大きく異なります。年齢、薬物、疲労、ADH酵素遺伝子変異は、アルコールがあなた自身に与える影響を大きく左右します。疑わしい場合は、運転しないでください。'
  },
  {
    type: 'title',
    text: '食物と吸収速度の役割',
    level: 2
  },
  {
    type: 'paragraph',
    html: '飲酒前または飲酒中に食べることは、アルコール吸収動態を大きく変えます。胃の中の食物、特にタンパク質と脂肪は胃の排出を遅くし、エタノールが血液に入る最大速度を低下させます。空腹時に飲酒した人は、同じ量を飲む前に食事をした人と比べて、ピークBAC が50%高くなる可能性があります。これはウィドマルク式が完全に捉えることができない最も強力な変数の1つです。だからこそ、当社の計算機には理論推定についての免責事項が含まれています。'
  },
  {
    type: 'paragraph',
    html: 'アルコール飲料の種類も、単なるアルコール度数と体積以上に重要です。炭酸ミキサー（トニックウォーター、スパークリングワイン）は胃の排出を加速させ、アルコールを血液に速く押し込みます。非常に高いアルコール度数（25%以上）のドリンクは、一時的に胃の運動を阻害し、吸収を遅くします。甘いドリンクはアルコールの知覚効果をマスクでき、人々は気づかずにより速く飲むことになります。このような微妙な違いにより、現実のBAC は両方向で20～30%モデル予測から外れる可能性があります。'
  }
];

const schemas: AlcoholClearanceLocaleContent['schemas'] = [
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
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: AlcoholClearanceLocaleContent = {
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
