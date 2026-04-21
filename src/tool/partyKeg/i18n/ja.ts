import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'party-stock-calculator';
const title = 'パーティービール計算機：結婚式と誕生日のための1人あたりの量';
const description = 'ゲスト数、期間、気温に基づいて必要なビールと氷の量を計算する無料ツール。結婚式、誕生日、屋外イベントに最適です。';

const ui: PartyKegUI = {
  calcStockTitle: 'ストック計算機',
  beerIceSub: 'イベント用ビール＆氷',
  guestsLabel: 'ゲスト',
  durationLabel: '期間',
  hoursUnit: '時間',
  intensityLabel: '強度',
  chillLabel: 'チル',
  standardLabel: 'スタンダード',
  partyLabel: 'パーティー',
  tempLabel: '温度',
  estimatedVolLabel: '推定容量',
  kegsLabel: '樽',
  iceRequiredLabel: '必要な氷',
  bagsLabel: '袋',
  visualizationTitle: 'ストック可視化',
  optimalMsg: '最適な状態',
  highMeltMsg: '高い融解が検出されました',
  highEfficiencyMsg: '寒冷/高効率'
};

const faqTitle = 'よくある質問';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "4時間で1人がビールを何杯飲みますか？",
    answer: "平均して、4時間のイベントの場合、1人あたり5杯のビールを計算してください。これは最初の1時間に2杯、残りの1時間に1杯を前提としています。",
  },
  {
    question: "100杯のビールのために氷はどのくらい必要ですか？",
    answer: "約15～20キログラムの氷（7～10袋）が必要です。実用的なルールは、通常の条件下では1リットルの飲料あたり0.75 kgの氷です。夏または25°C以上の屋外では、1リットルあたり1 kgに増やしてください。周囲の熱は融解を加速し、予想より早く氷がなくなってしまいます。",
  },
  {
    question: "標準樽とパーティー樽の違いは何ですか？",
    answer: "標準的な商用樽は50リットル収容し、約200杯分（250ml各）になります。パーティー樽（ミニ樽）は通常5リットル収容します。約20杯分です。これらのサイズを知ることで、計算機のリットル出力を購入する必要があるコンテナの数に変換するのに役立ちます。",
  },
  {
    question: "ビールがすでに冷えているのに、なぜこんなに氷が必要ですか？",
    answer: "冷却と維持は2つの別々のプロセスだからです。缶を25°Cから4°Cに持ってくるには、氷の潜熱融解が消費されます。約334 kJ/kg。冷たくなると、氷は環境熱を相殺するために機能し続けます。35°Cの夏の日には、クーラーへの熱伝達は2～3時間ごとに1リットルの飲料あたり1 kgの氷を融かす可能性があります。だからこそ、パーティーの前に飲み物を事前に冷やすことで、氷の総消費量が半分になります。",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "ゲスト数を見積もる",
    text: "何人の人が参加するかを定義してください。当社の計算機は、統計的消費平均に基づいて数量を調整します。",
  },
  {
    name: "期間と強度を定義する",
    text: "イベントが何時間続くか、そしてパーティーの'フロー'（チル、スタンダード、または激しい）を示してください。",
  },
  {
    name: "周囲温度に合わせて調整する",
    text: "屋外温度は氷の計算の鍵です。熱いほど、補う必要がある融解率が高くなります。",
  },
];


const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'パーティーに必要なビールと氷の量は？',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'あらゆるイベントを企画するときの百万ドルの質問：<strong>何リットルのビールを買うべき？</strong> 不足は災いですが、買いすぎは不要な出費です。このツールは正確なアルコール量を計算するのに役立ちます。最も重要なことに、<strong>何袋の氷</strong>が必要かを計算します。プロのケータリング業者やイベントプランナーは統計的消費モデルを使用しています。今、あなたも無料でこれを実行できます。'
  },
  {
    type: 'title',
    text: '1人あたりの消費式',
    level: 2
  },
  {
    type: 'paragraph',
    html: '必要なアルコールを見積もるために、プロのケータリング業者は「時間単位の消費率」に基づいた式を使用します。これは正確な科学ではありませんが、統計によれば、標準的なパーティーでは、1人あたり1時間に約1.5単位が消費されます。周囲温度、食物の入手可能性、イベントの社会的エネルギーなどの要因はすべて、このベース数を変更します。'
  },
  {
    type: 'stats',
    items: [
      { label: 'チル消費', value: '1杯/時間', icon: 'mdi:tea-outline' },
      { label: 'スタンダードパーティー', value: '1.5杯/時間', icon: 'mdi:glass-mug-variant' },
      { label: 'ウェディング/フェスティバル', value: '2.5+杯/時間', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: '氷の物理学',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: '熱力学',
    html: '氷を計算するのはほとんどのホストが失敗する場所です。氷は2つの機能を果たします。冷却（25°Cから4°Cにビールを持ってくる）と維持（周囲の熱と戦う）。30°C以上の温度では、融解速度が2倍になります。直射日光の下で氷の袋がいっぱいになると、20分以内になくなる可能性があり、パーティーがピークに達する前に飲み物が温かくなります。'
  },
  {
    type: 'tip',
    title: '氷を節約するプロのコツ',
    html: '氷を追加する前に、樽と缶を日陰に保管してください。飲み物が太陽の中で温かい場合、最初の氷の袋の50％は、潜熱を交換するだけで10分以内に消えます。事前に冷却した飲み物から始めて、実際に購入する必要がある氷の量を劇的に減らしてください。'
  },
  {
    type: 'title',
    text: 'ロジスティックス参考データ',
    level: 2
  },
  {
    type: 'paragraph',
    html: '標準50L樽は約200杯分を生成します。典型的な氷の袋の重さは2 kgです。これらの数字を知ることで、イベントに必要な輸送と保管を最後の瞬間の驚きなしに計画できます。輸送中の氷の融解を考慮に入れてください。夏の30分のドライブは、パーティーが始まる前に袋全体を費やす可能性があります。'
  },
  {
    type: 'summary',
    title: 'このツールは誰のためのものですか？',
    items: [
      'プライベートパーティーのホスト：推測を止めて、次の祝いに正確に必要なものを自信を持って購入してください。',
      'イベントプランナー：正確な消費モデルを使用してクライアントに見積もりを提供し、バーロジスティクスを専門的に計画してください。',
      '会場マネージャー：異なるゲスト数で繰り返し発生するイベント全体で在庫計算を標準化します。'
    ]
  },
  {
    type: 'paragraph',
    html: 'しばしば見落とされる変数は<strong>ゲストのドロップアウト率</strong>です。ほとんどのパーティーでは、10～15％のゲストが早めに出発し、10％が飲まないかもしれません。計算機は、不足することはなくても、巨大な余剰を残さないように、保守的なバッファを適用します。これらの調整を理解すると、特定のグループとコンテキストの見積もりを微調整するのに役立ちます。購入時は常に端数を切り上げてください。開いたバレルは通常返却できません。小さな余剰は常にパーティーの最中に飲み物がなくなるより良いです。'
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
  bibliography,
  howTo,
  schemas,
};
