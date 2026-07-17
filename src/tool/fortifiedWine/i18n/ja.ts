import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'fortified-wine-builder';
const title = '酒精強化ワイン＆ベルモット ビルダー：ピアソン法計算ツール';
const description = '目標アルコール度数に達するために、ワインに加えるべき蒸留酒の正確な量を計算します。ピアソン法で完璧なベルモット、ポート、シェリーを作りましょう。';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: '何を作りますか？',
  intentionVermouth: 'ベルモット',
  intentionPort: 'ポートワイン',
  intentionSherry: 'シェリー',
  intentionCustom: 'カスタム',
  modeALabel: '手持ちのワインから',
  modeBLabel: '目標最終容量',
  wineSection: 'ベースワイン',
  wineVolumeLabel: 'ワインの量（L）',
  wineAbvLabel: 'ワインのアルコール度数（%）',
  spiritSection: '強化スピリッツ',
  spiritAbvLabel: 'スピリッツのアルコール度数（%）',
  brandyPreset: 'ブランデー（38°）',
  neutralPreset: 'ニュートラル（96°）',
  aguardientePreset: 'アグアルディエンテ（42°）',
  targetAbvLabel: '目標アルコール度数（%）',
  targetVolumeLabel: '目標合計容量（L）',
  resultsTitle: 'あなたのレシピ',
  addLabel: '追加',
  finalVolumeLabel: '最終容量',
  bottlesSection: '必要なボトル数',
  copyBtn: 'レシピをコピー',
  copiedBtn: 'コピー済み！',
  pearsonTitle: 'ピアソン法',
  wineCornerLabel: 'ワイン',
  spiritCornerLabel: 'スピリッツ',
  emptyState: 'ピアソン法を表示するには値を入力してください',
  errorAbv: 'スピリッツのアルコール度数は目標より高く、目標はワインのアルコール度数より高くなければなりません。',
  errorMode: '計算するには有効な容量を入力してください。',
};

const faqTitle = 'よくある質問';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'ピアソン法とは何ですか？',
    answer: 'ピアソン法は、ワイン醸造においてブレンド比率を計算するために使われるシンプルな図解法です。目標アルコール度数を四角形の中央に置き、ワインのアルコール度数を左上、スピリッツのアルコール度数を左下に置きます。対角線の差が、それぞれの液体に必要な比率を示します。',
  },
  {
    question: 'ベルモットの一般的なアルコール度数はどれくらいですか？',
    answer: '伝統的なベルモットのアルコール度数は15%〜18%です。ドライ（フランス式）ベルモットは通常低め（15〜16%）で、スイート（イタリア式）ベルモットは16〜18%になることが多いです。ロゼベルモットはその中間に位置します。',
  },
  {
    question: 'ベルモットにはどのベースワインを使えばいいですか？',
    answer: '伝統的には、アルコール度数10〜12%のニュートラルで辛口の白ワインが最適です。ワインは骨格を提供しますが、ハーブや植物素材で香り付けするため、高価なワインは必要ありません-クリーンで酸味のあるベースが理想的です。',
  },
  {
    question: 'ブランデーの代わりにニュートラルアルコールを使えますか？',
    answer: 'はい。ニュートラルアルコール（96%）は最大限のコントロールとクリーンな風味プロファイルを提供します。ブランデーは独自の個性（樫、ドライフルーツ、バニラ）をもたらしますが、スタイルによって望ましい場合も望ましくない場合もあります。ポートワインは伝統的にグレープブランデーを使用し、一部のベルモットはニュートラルスピリッツを使用します。',
  },
  {
    question: '強化はワインをどのように保存しますか？',
    answer: 'ワインのアルコール度数が約15〜16%を超えると、酵母による発酵が抑制されます-酵母は高アルコール環境では生きられません。これが強化ワインが通常のワインよりもはるかに長い保存期間を持つ理由です。アルコールは酵母と細菌の両方に対する天然防腐剤として機能します。',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'スタイルを選択', text: 'ベルモット、ポートワイン、シェリー、またはカスタムを選択して、推奨目標アルコール度数範囲を自動入力します。' },
  { name: 'ワインデータを入力', text: 'ベースワインの容量（またはモードBでの目標最終容量）と現在のアルコール度数を入力します。' },
  { name: 'スピリッツを設定', text: 'スピリッツのプリセットを選択するか、カスタムのアルコール度数を入力します。ピアソン法はリアルタイムで更新されます。' },
  { name: 'レシピを確認', text: '計算ツールは追加すべきスピリッツの正確なミリリットル数と最終容量を表示します。' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'ピアソン法：古代の数学、完璧なワイン', level: 2 },
  { type: 'paragraph', html: '<strong>ピアソン法</strong>は、ワイン醸造数学における最も古くて優雅なツールの一つです。19世紀に開発され、プロのワイン醸造家からアマチュアまで、引き算だけでブレンド比率を計算することができます。私たちのツールはこの視覚的な方法をデジタル化し、リアルタイムのフィードバックを追加することで、計算に費やす時間を減らし、醸造により多くの時間を使えるようにします。' },
  { type: 'stats', items: [{ label: 'ベルモット', value: '15〜18% vol.', icon: 'mdi:glass-cocktail' }, { label: 'ポートワイン', value: '18〜20% vol.', icon: 'mdi:bottle-wine' }, { label: 'シェリー', value: '15〜17% vol.', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: 'なぜ18%で強化するのか？', icon: 'mdi:shield-check', html: '約15%を超えると、<em>Saccharomyces cerevisiae</em>（主要なワイン酵母）が阻害されます。18%になると発酵が完全に止まります。これがポートワインが残留糖分を保持する理由です：スピリッツは発酵の途中で加えられ、全ての糖が消費される前に酵母を死滅させます。' },
  { type: 'tip', title: 'プロのヒント：20°Cで測定', html: 'アルコール密度は温度によって変化します。公式のアルコール度数測定値は20°Cで校正されています。スピリッツまたはワインが大幅に暖かいまたは冷たい場合は補正係数を適用してください：20°C以下では1°Cごとに約+0.04%、20°C以上では−0.04%。' },
  { type: 'title', text: 'クラフトベルモットのルネッサンス', level: 2 },
  { type: 'paragraph', html: '南欧ではクラフトベルモットの復興が起きています。バルセロナ、バレンシア、サン・セバスティアンは<em>la hora del vermut</em>を文化的な制度として取り戻し、スペイン、イタリア、フランスの小規模生産者が素晴らしい製品を瓶詰めしています。これにより、自分たちの野望に見合った技術ツールを求める新世代のホームプロデューサーが生まれています。' },
  { type: 'summary', title: 'このツールは誰のためのものですか？', items: ['ホームワインメーカー：推測ではなく精度でハーベストを強化してください。', 'クラフトベルモットプロデューサー：フルバッチにスケールする前に新しいABV目標のプロトタイプを作成してください。', 'スピリッツ教育者：ワークショップでピアソン法を視覚的にデモンストレーションしてください。'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
