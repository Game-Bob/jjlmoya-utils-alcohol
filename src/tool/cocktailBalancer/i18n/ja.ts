import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'cocktail-balancer';
const title = 'カクテルバランサー：サワーの法則';
const description = '完璧なカクテルの甘さと酸っぱさのバランスを計算します。ミクソロジーの黄金比をマスターしましょう。';

const ui: CocktailBalancerUI = {
  title: 'カクテルバランサー',
  presetsBtn: 'レシピ',
  saveBtn: '保存',
  resetBtn: 'リセット',
  emptyStateTitle: 'ワークベンチが空です',
  emptyStateDescription: 'カクテルのバランスをリアルタイムで分析するには、材料を追加してください。',
  addBtn: '材料を追加',
  addMoreBtn: 'さらに材料を追加',
  flavorProfileTitle: 'フレーバープロファイル',
  volLabel: 'ボリューム',
  sugarLabel: '砂糖',
  colorLabel: '色',
  sourLawTitle: 'サワーの法則',
  acidDryLabel: '酸（ドライ）',
  balanceLabel: 'バランス',
  sweetLabel: '甘い',
  aiSuggestionTitle: 'AI提案',
  addIngredientTitle: '材料を追加',
  searchPlaceholder: 'ラム、ライム、シロップを検索...',
  presetsTitle: 'レシピ＆プリセット',
  savedSectionTitle: '保存済み',
  classicsSectionTitle: 'クラシック',
  confirmDeleteTitle: 'すべて削除しますか？',
  confirmDeleteText: 'これにより、ワークベンチからすべての材料が削除されます。この操作は元に戻せません。',
  cancelBtn: 'キャンセル',
  deleteBtn: '削除',
  verdictSpiritSeco: 'スピリッツ / ドライ',
  verdictSoloDulce: 'スウィートオンリー（オールドファッション）',
  verdictMuyAcido: '酸性過剰 / 骨乾き',
  verdictAcido: '酸性 / 酸っぱい',
  verdictEquilibrado: 'バランス型（サワー）',
  verdictDulce: 'スウィート / コマーシャル',
  verdictEmpalagoso: 'クドい',
  fixAddBitters: 'ビターが不足',
  fixAddSugar: '酸性が強すぎる',
  fixAddAcid: '甘すぎる'
};

const faqTitle = 'よくある質問';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "「サワーの法則」とは何ですか？",
    answer: "これはミクソロジーの黄金比で、強いベース（スピリッツ）、酸（シトラス）、甘さ（シロップ）の3つの要素を調和させます。古典的なレシピは通常、2:1:1の比率（強い：酸：甘い）に従いますが、これは強度と密度によって異なります。",
  },
  {
    question: "希釈がカクテルのバランスにどのように影響しますか？",
    answer: "氷は冷やすだけでなく、水を加える（希釈）ことでスピリッツの香りを開き、酸味と甘さのピークを柔らかくします。シェイカーで調和したカクテルは、グラスに長く氷が入ったままになると不調和になることがあります。",
  },
  {
    question: "ホームカクテルがバーのようなじゃない理由は何ですか？",
    answer: "通常は砂糖とシトラスのpHのバランスが不足しているからです。レモンは季節によって酸性度が異なります。当社の計算機は、使用されたジュースの量に基づいてシロップの正確な量を調整するのに役立ちます。",
  },
  {
    question: "Brix度とは何ですか？なぜカクテルに重要なのですか？",
    answer: "Brixは液体に溶解した砂糖の量を測定するスケールです。シンプルシロップ（1:1）は約50°Brixですが、リッチシロップ（2:1）は66°Brixを超えます。Brixが高いほど、単位体積あたりより多くのボディと甘さが得られます。これを知ることで、バランスを崩さずにレシピのシロップを交換できます。",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "アルコールベースを選択",
    text: "当社のデータベースからメインスピリッツ（ジン、ラム、ウイスキー）を選択して、そのボディとアルコール度数を知ります。",
  },
  {
    name: "酸性剤を入力",
    text: "レモン、ライム、またはグレープフルーツジュースの量を追加します。計算機はミックスへのpH影響を分析します。",
  },
  {
    name: "甘い成分を調整",
    text: "シロップの種類（シンプル、2:1、アガベ）を入力し、バランスインジケーターをリアルタイムで動くのを見てください。",
  },
  {
    name: "完璧なサービング",
    text: "ツールの最終判定を確認します：サワー比、希釈後の推定ABV、修正提案。新鮮な氷でサービスし、シトラスまたはシロップを好みに応じて調整します。",
  },
];


const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: '分子工学と液体バランス',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'intuitionが数学と出会うデジタルラボへようこそ。このツールは単なるレシピ本ではありません。それはあなたのカクテルの分子構造をリアルタイムで解体し、分析するために設計された<strong>高度な物理化学シミュレーター</strong>です。シトラスの1滴、スピリッツの1メジャー、シロップの1グラムは、すべて変わらない化学法則に従って相互作用し、あなたの飲み物が傑作か失望の失敗かを決定します。'
  },
  {
    type: 'stats',
    items: [
      { label: 'ライム', value: '~6% 酸', icon: 'mdi:fruit-citrus' },
      { label: 'レモン', value: '~6% 酸', icon: 'mdi:fruit-citrus' },
      { label: 'グレープフルーツ', value: '~1-2% 酸', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: '酸の科学',
    icon: 'mdi:fruit-citrus',
    html: '酸性度は単なる風味ではなく、バランスの取れたカクテルの構造的支柱です。適切な酸性度がなければ、飲み物は平らで、1次元的で、忘れられてしまいます。当社のアルゴリズムはペルシャンライムの滴定酸性度とユーレカレモンを区別し、あなたのレシピを口腔内のバランスポイント全体だけシフトできる季節的なシトラスpH変動を考慮しています。'
  },
  {
    type: 'card',
    title: 'Brix制御（甘さ）',
    icon: 'mdi:spoon-sugar',
    html: 'カクテルのボディとテクスチャーは、完全に溶解した砂糖に依存します。シンプルシロップ（1:1）はリッチシロップ（2:1）、蜂蜜、またはアガベネクターとは大きく異なります。各甘味料は異なるBrix度と粘度を持ち、飲み物が舌にどのようにコートするかに影響を与えます。当社の計算機は、溶解した砂糖の正確なグラム数を計算して、最終的なマウスフィールと甘さの知覚を予測します。'
  },
  {
    type: 'card',
    title: '熱力学と希釈',
    icon: 'mdi:water-percent',
    html: 'シェイクしたカクテルは、氷の温度、シェイク技術、期間に応じて25-40%希釈されます。この水の追加は欠陥ではなく、香りを開き、アルコール端を軟化させる本質的な成分です。当社の計算機は希釈後の最終ABVを推定するため、正確に意図された強度と風味バランスを持つ飲み物を設計できます。'
  },
  {
    type: 'title',
    text: '基本的な比率を超えて',
    level: 2
  },
  {
    type: 'paragraph',
    html: '多くのバーテンダーは古典的な2:1:1ルール（2部スピリッツ、1部酸、1部甘い）を学び、それを普遍的な真実として扱います。しかし、<strong>化学ははるかに微妙です</strong>。シチリアのレモンはメキシコのライムとは異なる酸性度を含んでいます。Cointreau のようなトリプルセックはブルーキュラソー とはまったく異なる動作をします。同じレシピは1週間完璧にバランスして見え、次に激しく酸性に見え、単に季節的な果物変動のためだけです。'
  },
  {
    type: 'paragraph',
    html: 'このバランサーはこれらの素朴な障壁を突き破ります。あなたの特定の材料を入力することにより、あなたはあなたの創造物の正確な感覚地図を提供するために酸性度と甘さのベクトルを動的に調整する生きたデータベースを参照してください。推測をやめ、世界中クラスの施設のバーテンダーが毎回使用するのと同じ科学的厳密さでカクテルを設計し始めてください。'
  },
  {
    type: 'summary',
    title: 'このツールは誰のためですか？',
    items: [
      'プロフェッショナルバーテンダー：レシピを標準化し、再現可能な一貫性でシグネチャーメニューを作成します。',
      'ホーム愛好家：推測をやめ、カクテルが成功または失敗する理由を理解し始めてください。',
      '飲料開発者：高価な生産実行の前に、新しいフレーバーコンセプトを迅速にプロトタイプします。'
    ]
  },
  {
    type: 'diagnostic',
    title: 'ゴールデンゾーン',
    icon: 'mdi:star',
    variant: 'success',
    badge: '目標',
    html: 'これは究極の目標です：砂糖が酸の侵略を中和する制御されたpH値で、ベーススピリッツの本質油と香りの化合物をマスクしません。この正確なバランスは、不朽の古典が住む場所です — ダイキリ、マルガリータ、サイドカー — 風味化学の基本法則に従うため、数十年生き残った飲み物。'
  },
  {
    type: 'tip',
    title: '専門家のヒント：常に新鮮なシトラスを使用',
    html: 'いつもシトラスを最後の瞬間に絞る。レモンとライムジュースは急速に酸化し、搾汁後20-30分以内に生きた酸性度を失う。本当に新鮮なジュースで作ったカクテルは、常に口腔内の明るさと活力を持ち、ボトル詰めされた製品は複製できません。ジュースの歩留まりを最大化するため、室温で果物を使用してください。'
  }
];

const schemas: CocktailBalancerLocaleContent['schemas'] = [
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

export const content: CocktailBalancerLocaleContent = {
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
