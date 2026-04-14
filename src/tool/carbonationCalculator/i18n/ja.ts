import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'beer-carbonation-calculator';
const title = 'ビール炭酸化・プライミング計算機';
const description = 'ホームブルーをボトリングするために必要なデキストロース、白砂糖、またはDME（乾燥麦芽抽出物）の正確なグラム数を計算します。容量、発酵温度、スタイルを入力して、完璧なプライミングを実現してください。';

const ui: CarbonationUI = {
  parametersTitle: 'パラメータ',
  metricBtn: 'メートル法',
  imperialBtn: 'ヤード・ポンド法',
  volumeLabel: 'ビール容量',
  maxTempLabel: '最高温度',
  litersUnit: 'リットル',
  celsiusUnit: '°C',
  gallonsUnit: 'ガロン',
  fahrenheitUnit: '°F',
  desiredCo2Label: '希望する炭酸化',
  volUnit: 'CO2 Vol',
  resultsTitle: 'プライミング結果',
  tableSugarLabel: '白砂糖',
  cornSugarLabel: 'トウモロコシ糖（デキストロース）',
  dmeLabel: '乾燥麦芽抽出物（DME）',
  safetyTitle: '爆発の危険!',
  lowCarbonation: '低炭酸化',
  optimalCarbonation: '最適炭酸化',
  highEffervescence: '高発泡性',
  bubblingVisualizationLabel: 'ほぼ泡の可視化'
};

const faqTitle = 'よくある質問';
const bibliographyTitle = '参考文献とソース';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "なぜ炭酸化に温度が重要なのですか？",
    answer: "ビールに残存するCO2は、発酵後に達した最高温度によって異なります。冷たい液体は温かい液体よりも多くの溶解ガスを保持します。実際の温度より低い温度を入力すると、計算機は実際よりも多くの残存CO2があると想定し、必要な砂糖より少なく提案します。温度を高すぎる値に設定すると逆のことが起こります。砂糖を過剰に加えてボトル爆発の危険ゾーンに突入させ、過剰な圧力がボトルの破裂やキャップの暴力的な吹き飛ばしを引き起こします。",
  },
  {
    question: "プライミングに最適な砂糖は何ですか？",
    answer: "デキストロース（トウモロコシ糖）は中立で、迅速に溶解するため好まれています。白砂糖も効果的ですが、デキストロースより約10%少ない重量で済みます。",
  },
  {
    question: "プライミング砂糖を加えすぎたらどうなりますか？",
    answer: "砂糖の過剰は、ボトル内に過剰なCO2圧力を生成します。標準的なガラスボトルは約3.5～4.0容積のCO2で破損します。この点を超えると、ボトルが破裂する可能性があり、キャップが暴力的に吹き飛ぶ可能性があります。正確性が重要な理由は、1リットルあたり5グラムの余分な砂糖でも、ロット全体が危険ゾーンに入る可能性があるからです。",
  },
  {
    question: "ボトリング後、ビールが炭酸化するのにどのくらい時間がかかりますか？",
    answer: "室温（18～22°C）で2～3週間が、酵母が追加された砂糖を完全に発酵させ、CO2が液体に統合されるための典型的な範囲です。プロセスが完了する前にボトルを開けると、常に誤解を招く結果になります。ビールが不十分に炭酸化されたように見えても、実際には炭酸化がまだ進行中です。DMEの場合、その発酵性砂糖の複雑さが理由で、プロセスが少し遅くなる可能性があります。",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "実際の容量を測定する",
    text: "発酵が完了した後、ボトリング用に準備できたビールのリットル数（またはガロン数）を入力してください。",
  },
  {
    name: "発酵温度を定義する",
    text: "ビールが活発な発酵中またはその後に達した最高温度を入力してください。",
  },
  {
    name: "スタイルまたはCO2容積を選択する",
    text: "希望する炭酸化レベルを選択してください。スタイルは1.5（スタウト）から4.5（ホイートビール）まで異なります。",
  },
];

const bibliography: CarbonationLocaleContent['bibliography'] = [
  {
    name: "How to Brew: Carbonation Tables - John Palmer",
    url: "https://howtobrew.com/section-1/chapter-11/",
  },
  {
    name: "BJCP Style Guidelines: Carbonation Levels",
    url: "https://www.bjcp.org/style/2021/beer/",
  },
];

const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: '炭酸化とプライミングの究極ガイド',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'プライミング技術を習得し、ホームブルーを平坦な実験から専門的な発泡体験に変えてください。プライミングは、ボトル内の残存酵母が二次発酵中に天然のCO2を生成するように、砂糖の正確な量を加えることから成ります。砂糖が少なすぎるとビールが平坦になり、多すぎると危険な圧力が生じてボトルが割れる可能性があります。この2つの違いはわずか数グラム — これがこの計算機が存在する理由です。'
  },
  {
    type: 'proscons',
    title: '重要な成功要因',
    items: [
      { pro: '温度：残存CO2は発酵後の温度ピークに依存します。', con: '' },
      { pro: '正確性：1リットルあたり5グラムの余分な砂糖が、完璧な炭酸化とガイザーの違いを生む可能性があります。', con: '' },
      { pro: '', con: '酸化：プライミング砂糖を混ぜるために液体を転送するときに、液体の飛散を避けてください。' }
    ]
  },
  {
    type: 'title',
    text: 'ビアースタイル別CO2容積',
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
    title: 'どの砂糖を選ぶべきですか？',
    icon: 'mdi:corn',
    html: '<strong>デキストロース</strong>は中立で専門的です — 業界標準。<strong>白砂糖</strong>は経済的で効果的です（デキストロースより10%少ない重量）。<strong>DME（乾燥麦芽抽出物）</strong>は純粋主義者の選択ですが、ブランドと麦芽組成によって発酵可能性が異なるため、正確に予測するのはより難しいです。'
  },
  {
    type: 'diagnostic',
    title: '安全警告',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: '危険',
    html: '標準的なガラスボトルは3.5～4.0容積のCO2で破損します。薄いガラスでベルギースタイルまたはホイートビールを炭酸化しようとしないでください。常に炭酸飲料用に定格されたボトルを使用し、以前の使用による微視的な構造損傷がある可能性のある回収された商業用ボトルを決して使用しないでください。'
  },
  {
    type: 'tip',
    title: 'プロのヒント：砂糖を正しく溶かす',
    html: 'プライミング砂糖溶液（1バッチあたり約250mlの水に溶かした砂糖）は、ビールに追加する前に必ず10分間煮詰めてください。沸騰は溶液を殺菌し、砂糖が完全に溶解し、バッチ全体に均等に分布していることを確認します。これにより、ボトル間で不均等な炭酸化を引き起こすホットスポットを防ぎます。'
  },
  {
    type: 'summary',
    title: 'このツールは誰を対象としていますか？',
    items: [
      'ホームブルワー：任意のバッチサイズ、スタイル、発酵温度に対する正確なプライミング砂糖計算を取得します。',
      'クラフトビール愛好家：商用ビールがなぜ異なる炭酸化レベルを持っているのかの背後にある科学を理解してください。',
      'プロフェッショナルブルワー：大規模な商業バッチをボトリングする前に、手計算をクロスチェックします。'
    ]
  },
  {
    type: 'title',
    text: '炭酸化科学：Henry\'s Law',
    level: 2
  },
  {
    type: 'paragraph',
    html: '本質的に、炭酸化は<strong>Henry\'s Law</strong>によって支配されます。液体に溶解したガスの量は、液体上のそのガスの部分圧力に比例します。ボトルをプライミングして密閉すると、酵母は砂糖を消費し、密閉環境でCO2を生成します。圧力が上昇するにつれて、ガスはもう一度溶液に強制されます。この平衡が達成される温度は、最終的な炭酸化レベルを決定します — これが発酵温度がこの計算機で最も重要な変数である理由です。'
  },
  {
    type: 'paragraph',
    html: 'プライミング前のビール内の残存CO2はゼロではありません。すべてのビールは発酵プロセスから溶解したCO2を保持し、保持される量はビールが達した最高温度に依存します。22°Cで発酵したビールは、16°Cで発酵したビールよりも大幅に少ない残存CO2を保持します。両方は現在冷却されています。この残存を考慮しなければ、体系的な過炭酸化につながります -- 初心者のホームブルワーの間で最も一般的なエラーの1つです。'
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
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
