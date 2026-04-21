import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'jello-shot-lab';
const title = 'ジェロショット計算機：アルコールとゼラチンの完璧な比率計算ツール';
const description = 'ジェロショットが本当に固まるために必要なスピリッツとゼラチンの量を正確に計算します。あらゆるアルコール度数に対応した科学的根拠のある比率で、水っぽいまたはゴム状の失敗を避けましょう。';

const ui: JelloShotLabUI = {
  title: 'ジェロショット計算機',
  description: 'ゼラチン、水、アルコールの完璧な比率を取得して、ショットが毎回固まるようにしましょう。',
  liquorBaseLabel: 'スピリッツの種類',
  liquorAbvLabel: 'アルコール度数 (%)',
  gelatinLabel: 'ゼラチンの種類',
  diluentLabel: '水ベース',
  calculateBtn: '計算する',
  modePrecision: '精密モード',
  modeIntensity: 'ショットの強さ',
  modeIntensityLight: '軽め（簡単）',
  modeIntensityBalanced: 'スタンダード',
  modeIntensityLimit: '最大（強め）',
  partyPlannerTitle: 'パーティープランナー',
  partyPlannerGuestLabel: 'ゲスト数',
  partyPlannerShotsPerGuest: '1人あたりのショット数',
  multiLayerTitle: 'マルチレイヤー',
  howToTitle: '作り方',
  proTipsTitle: 'プロのコツ',
  resultsTitle: 'あなたのレシピ',
  totalVolumeLabel: '合計容量',
  boilingWaterLabel: 'お湯',
  alcoholVolumeLabel: 'スピリッツ',
  packetsNeededLabel: 'ゼラチンの袋数',
  chillingTimeLabel: '冷却時間',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: '袋',
  modeParty: 'パーティーモード',
  modeRecipe: 'レシピモード',
};

const faqTitle = 'よくある質問';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'なぜ高度数のアルコールはジェロショットが固まるのを妨げるのですか？',
    answer: 'エタノールはゼラチンの三重らせんタンパク質構造を結びつけている水素結合を乱します。スピリッツが総量の約35%を超えると、タンパク質マトリックスが安定したネットワークを形成できなくなり、ショットは液体のままです。スピリッツのABVが高いほど、この限界に達する前に加えられる量は少なくなります。',
  },
  {
    question: 'ジェロショットが固まらなくなる最大アルコール比率はどのくらいですか？',
    answer: '安全な上限は、総液体量の約30〜35%が純粋なスピリッツ（40% ABVの場合）です。96%のニュートラルスピリッツでは、その限界は総量の約15〜18%まで下がります。当計算機はスピリッツのABVを考慮するため、固化閾値を超えることはありません。',
  },
  {
    question: 'どのスピリッツを使うかは重要ですか？ウォッカ、ラム、テキーラ？',
    answer: '重要なのはABVであり、スピリッツの種類ではありません。40%のウォッカと40%のラムはゼラチンマトリックス内で同じように振る舞います。ただし、糖分が多いスピリッツ（一部のラムやリキュールなど）は、糖がゼラチンネットワーク内の水素結合をエタノールと競い合うため、食感をわずかに改善することがあります。',
  },
  {
    question: 'ジェロショットは冷蔵庫でどのくらい日持ちしますか？',
    answer: '正しく作られたジェロショットは、ラップをかけた冷蔵庫の中で3〜5日保存できます。高いアルコール含有量が天然の防腐剤として機能します。室温で2時間以上放置しないようにしましょう。ゼラチンが柔らかくなり、細菌が繁殖する可能性があります。',
  },
  {
    question: 'ジェロショットをより固く、または柔らかくできますか？',
    answer: 'はい。カップからきれいに出てくる固いショットには、ゼラチンを多め（またはハーフパケット追加）に使用してください。柔らかく揺れる食感にはわずかに少なめを使用してください。口の中でとろける食感を望むなら、ゼラチンを寒天で代替しないでください。寒天はより固く固まり、より高温で溶けます。',
  },
  {
    question: '冷却を早めるためにジェロショットを冷凍できますか？',
    answer: 'いいえ。冷凍するとゼラチンネットワークが壊れ、解凍後に水っぽく粒状の食感になります。常に最低4時間冷蔵してください。パーティーには前夜に作りましょう。8時間以上で最高の食感が得られます。',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'スピリッツを選ぶ', text: 'スピリッツのABVを入力し、お望みのショットの強さを選択してください。計算機がゼラチンに保持できるスピリッツの最大量を表示します。' },
  { name: 'ゼラチンを混ぜる', text: '計算した量の熱湯をボウルに注ぎます。ゼラチンパウダーを加え、完全に溶けるまで2分間しっかりとかき混ぜます。まだアルコールを加えないでください。' },
  { name: 'スピリッツを加える', text: 'ゼラチン混合物を5〜10分間冷まして、温かいが熱くない状態（50℃以下）にします。スピリッツを加え、泡が立たないようにやさしくかき混ぜます。' },
  { name: '注いで冷蔵する', text: 'プラスチックカップ、シリコン型、または小さなショットグラスに注ぎます。最低4時間冷蔵してください。一晩が理想的です。冷凍しないでください。' },
];


const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: '完璧なジェロショットの背後にある化学', level: 2 },
  {
    type: 'paragraph',
    html: 'ジェロショットは単なるフレーバーゼラチンにアルコールを加えたものではありません。タンパク質ポリマー、水、エタノールが水素結合を争う<strong>繊細なコロイド懸濁液</strong>です。比率を間違えると甘い液体の水たまりや、テーブルで跳ね返るゴム状のディスクになります。正しくできれば、カップから一つの清潔な動きで滑り出る完璧に揺れるショットが得られます。',
  },
  {
    type: 'stats',
    items: [
      { label: '軽め（簡単）', value: '〜30%スピリッツ', icon: 'mdi:emoticon-happy-outline' },
      { label: 'スタンダード', value: '〜45%スピリッツ', icon: 'mdi:flask-outline' },
      { label: '最大', value: '〜55%スピリッツ', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'ブルーム強度とは？',
    icon: 'mdi:molecule',
    html: 'ブルームはゼラチンのゲル化強度を測定する指標で、通常50〜300ブルームの範囲です。スーパーのシートゼラチンは通常150〜200ブルームです。ブルームが高いほど同量の粉で固いゲルが作れるため、固まらなくなる前にわずかに多くのアルコールに対応できます。標準的なゼラチンパウダーのパケット（7g）は約240mlの液体向けに調整されています。',
  },
  {
    type: 'card',
    title: 'エタノールの限界',
    icon: 'mdi:alert-circle-outline',
    html: 'エタノールはコラーゲンのアミノ酸鎖上の水素結合サイトを巡って水と競い合います。エタノールがそれらのサイトの多くを占拠すると、タンパク質はゼラチンに構造を与える安定した三重らせんに折りたたまれなくなります。実際の限界はおよそ<strong>40%スピリッツ1部に対して水1部</strong>で、それを超えると待ち時間に関係なくショットは固まりません。',
  },
  {
    type: 'tip',
    title: '沸騰したゼラチンにアルコールを加えないでください',
    html: 'アルコールは78℃を超えると急速に蒸発します。スピリッツを加える前に、溶かしたゼラチンが50℃以下に冷めるのを常に待ちましょう。このたった一つのステップが、他のどんなミスよりも多くのジェロショットの失敗の原因となっています。',
  },
  { type: 'title', text: 'よくある失敗のトラブルシューティング', level: 2 },
  {
    type: 'proscons',
    title: '症状と解決策',
    items: [
      { pro: '4時間後もショットが液体 → アルコール過多または比率超過。スピリッツ量を減らす。', con: 'ショットにアルコールの味がしない → まだ熱い液体にスピリッツを加えた。先に冷ましてください。' },
      { pro: 'ショットがゴム状すぎる → ゼラチン過多。次回はハーフパケット減らす。', con: 'ショットが濁っている → 混合中に気泡が閉じ込められた。注ぐ前にやさしくかき混ぜて休ませる。' },
      { pro: 'ショットの食感が粒状 → ゼラチンが完全に溶けていない。お湯でより長くかき混ぜる。', con: '8時間後もショットが固まらない → エタノール上限を超えた。スピリッツを減らすか低いABVのものを使用。' },
    ],
  },
  {
    type: 'summary',
    title: 'このツールは誰のためですか？',
    items: [
      'パーティーホスト：購入前に必要なパケット数とスピリッツ量を正確に計算できます。',
      'バーテンダー：一貫した結果で大量生産にスケールアップできます。',
      'ホームクック：最も一般的な失敗（液状ショット、ゴム状食感、アルコール風味ゼロ）を避けられます。',
    ],
  },
];

const schemas: JelloShotLabLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
