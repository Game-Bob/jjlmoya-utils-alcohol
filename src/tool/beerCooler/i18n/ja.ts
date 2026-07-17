import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'beer-cooler';
const title = 'ニュートンの冷却法則を用いたビール冷却計算機';
const description = '真の熱力学で計算します - ニュートンの冷却法則 - ビールが冷蔵庫または冷凍庫で完璧なサービング温度に達するまでに正確にどのくらい時間がかかるかを確認してください。';

const ui: BeerCoolerUI = {
  step1Title: '何を冷やしていますか？',
  canLabel: 'リング缶',
  aluminumLabel: 'アルミニウム',
  bottleLabel: 'ボトル',
  glassLabel: 'ガラス',
  step2Title: 'どこに入れますか？',
  fridgeLabel: '冷蔵庫',
  freezerLabel: '冷凍庫',
  step3Title: '温度を微調整',
  initialTempLabel: '初期温度',
  targetTempLabel: '目標温度',
  glacialLabel: '氷のように冷たい',
  perfectLabel: 'パーフェクト',
  bodegaLabel: 'ボデガ',
  readyTitle: '準備完了',
  readyDescription: '容器と場所を選択して計算します。',
  estimatedTimeLabel: '推定時間',
  methodLabel: 'メソッド',
  containerLabel: 'コンテナ',
  alreadyColdLabel: 'もう冷たい！',
  neverColdLabel: '冷えない'
};

const faqTitle = 'よくあるご質問';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: 'このツールは冷却時間をどのように計算しますか？',
    answer: 'ニュートンの冷却法則を適用します: T(t) = T_env + (T₀ - T_env) × e^(-kt)。定数kは容器の素材と冷却媒体によって異なります。冷蔵庫のアルミニウム缶は、冷凍庫のガラスボトルとは大きく異なるkを持っています。ここで使用される値は、各組み合わせについて実世界の実験に対して校正されています。',
  },
  {
    question: '塩を入れた湿ったペーパータオルのトリックは実際に機能しますか？',
    answer: 'はい、かなり顕著です。容器を塩を含む湿ったペーパータオルで包むと、2つの理由で冷却が加速されます。水の蒸発が追加の熱を放出し（蒸発冷却）、塩が水の融点を低下させ、湿った接触をより長く活発に保ちます。冷凍庫に乾いた缶を置くのと比べて、最初の数分間に追加で2～4°Cの低下を得ることができます。',
  },
  {
    question: 'さまざまなビールスタイルの理想的なサービング温度は何ですか？',
    answer: 'それはスタイルによって異なります。ラガーとピルスナーは3～7°Cが最適です。IPAとペールエールは7～10°Cで輝きます。スタウト、ポーター、複雑なエールはより温かく、12～14°Cでサービスする必要があります。そうすることで、コーヒー、チョコレート、ナッツなどの香りの化合物を完全に表現できます。',
  },
  {
    question: '冷凍庫に入れたままにするとビールが爆発しますか？',
    answer: 'はい。アルコールと溶解糖はビールの融点を純水より下げます。標準的な5%ラガーは約-3°Cで凍ります。水が結晶化するにつれて体積が増加し、溶解したCO2が内部圧力を上げ、容器が破裂するまで。冷凍庫に60分以上 - 特にガラスボトル - は本当に危険なゾーンです。このカリキュレーターを使用してそれを回避してください。',
  },
  {
    question: '冷却が速すぎるとビールが「焦げ」ますか？',
    answer: 'いいえ。ビールを台無しにする「ヒートショック」の神話は誤りです。実際に影響を与える可能性があるのは、繰り返された凍結と解凍です。これはタンパク質を破壊し、液体を曇らせます。または直接紫外線への暴露です。冷凍庫での急速冷却または氷水では風味は損なわれません。',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: 'コンテナを選択',
    text: 'アルミニウム缶またはガラスボトルから選択します。素材は熱伝達速度に大きく影響します。',
  },
  {
    name: '冷却方法を選択',
    text: '従来の冷蔵庫（4°C）を使用しているか、超高速プロセス用の冷凍庫（-18°C）を使用しているかを示します。',
  },
  {
    name: '温度を調整',
    text: '飲料の現在の温度（室温）と、希望の目標冷却温度を定義します。',
  },
];


const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: '冷感と熱力学の科学',
    level: 2
  },
  {
    type: 'paragraph',
    html: '缶がボトルの前に冷えるのはなぜですか？ 魔法ですか？ いいえ、これは実際の<strong>ニュートンの冷却法則</strong>です。このツールは、飲料が熱力学的完璧性に到達する正確な瞬間を数学的に計算します。あらゆる材料、あらゆる環境、あらゆる開始温度は、物理学者とエンジニアが産業システムの熱伝達をモデル化するために使用する同じ微分方程式に組み込まれます。'
  },
  {
    type: 'diagnostic',
    title: 'マスターフォーミュラ',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: '物理学',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt)。この微分方程式は、物体の温度がその温度と環境の温度の差に比例してどのように変化するかを説明しています。定数kは容器の素材と形状に依存します。これが缶が同じ体積のボトルよりも速く冷却される理由です。'
  },
  {
    type: 'title',
    text: '素材戦争：アルミニウム対ガラス',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>アルミニウム</strong>の熱伝導率は約205 W/(m·K)ですが、<strong>ガラス</strong>はわずか0.8 W/(m·K)に達します。金属は非常に速く冷たさを伝え、緊急時に理想的な容器です。しかし、ガラスは冷えた後、より良い断熱性を提供し、消費中に理想的な温度をより長く保ちます。この妥協案は、異なるビール文化が各素材に異なる好みを発展させた理由を説明しています。'
  },
  {
    type: 'stats',
    items: [
      { label: 'ピルスナー & ラガー', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA & ペールエール', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: 'スタウト & ポーター', value: '12°C - 14°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: '冷凍庫危険ゾーン',
    icon: 'mdi:snowflake-alert',
    html: 'アルコールと溶解糖のため、ビールは0°C以下で凍ります。標準的な5%ラガーは約-3°Cで凍ります。水が結晶化すると体積が増加し、CO2圧力が同時に上昇します。その結果は激しく破裂する可能性がある容器です。冷凍庫にビールを45分以上置かないでください。タイマーを設定せずに。'
  },
  {
    type: 'proscons',
    title: '緊急冷却ハック',
    items: [
      { pro: 'ウェットペーパートリック：湿ったペーパータオルで缶を包んで冷凍します。蒸発により冷却が加速します。', con: '' },
      { pro: '北極ソルト水：バケットに水、氷、塩大さじ2杯を入れて-5°C塩水に到達します。', con: '' },
      { pro: '回転方法：氷水で瓶を回して対流を強制し、冷却時間を短縮します。', con: '' },
      { pro: '', con: 'タイマーなしでフリーザーシェルフに缶を直接置かないでください。破裂した缶は邪魔で危険です。' }
    ]
  },
  {
    type: 'tip',
    title: 'プロのコツ：グラスを事前冷却',
    html: 'ビールを注ぐグラスには、かなりの熱容量があります。温かいグラスは、完璧に冷えたビールの温度を接触時に2～3°C上げることができます。注ぐ前に5分間グラスを冷凍庫に入れるか、冷水で洗ってください。この簡単なステップは、ビールが意図したとおりに正確に味わう時間を延長します。'
  },
  {
    type: 'title',
    text: '冷却定数の理解',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'ニュートン方程式の冷却定数kは、固定された普遍値ではありません。これは、各特定の容器と媒体の経験的特性です。薄いアルミニウム缶は氷水に静かな冷蔵庫の空気の中に厚いガラスボトルとは劇的に異なるkを持っています。私たちの計算機は、各容器タイプの実世界の実験に対して校正された測定値を使用し、典型的な家庭用冷却シナリオの予測精度は数分以内です。'
  }
];

const schemas: BeerCoolerLocaleContent['schemas'] = [
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

export const content: BeerCoolerLocaleContent = {
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
