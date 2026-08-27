import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AbvDilutionCalculatorUI } from '../ui';

const slug = 'abv-dilution-calculator';
const title = 'アルコール希釈とプルーフ計算機';
const description = '蒸留酒を目標アルコール度数まで下げるために加える水の量を計算します。最終容量、純アルコール量、希釈比も表示します。';
const ui: AbvDilutionCalculatorUI = {
  unitLabel: '容量の単位', metricUnit: 'メートル法 ml', imperialUnit: 'ヤードポンド法 fl oz', strengthLabel: '強さの単位', abvUnit: 'アルコール度数', proofUnit: '米国プルーフ', presetLabel: 'クイック設定', spiritPresetLabel: '蒸留酒 750 ml', liqueurPresetLabel: 'リキュール 700 ml', cocktailPresetLabel: 'カクテル 500 ml', startingStrengthLabel: '開始度数', startingVolumeLabel: '開始容量', targetStrengthLabel: '目標度数', waterToAddLabel: '加える水', finalVolumeLabel: '最終容量', pureAlcoholLabel: '純アルコール', ratioLabel: '水の比率', startingProofLabel: '開始プルーフ', targetProofLabel: '目標プルーフ', readyMessage: '目標値は低く設定されています。水を量り、少しずつ混ぜてください。', invalidMessage: '希釈するには目標度数を開始度数より低くしてください。', largeAdditionMessage: 'このバッチには蒸留酒と同量以上の水が必要です。段階的に混ぜて再確認してください。', bottleLabel: '計算された最終容量を示す目盛り付きボトル', waterLayerLabel: '完成した混合液の水の層', estimateNotice: 'これは計画用の推定値です。アルコールと水は混合時に収縮することがあるため、適切な器具で最終度数を確認してください。', sourceLabel: '計算式の出典', calculateAction: '希釈入力', resetAction: '値をリセット', volumeHint: '水を加える前に手元の容量を選択してください。', strengthHint: 'プルーフは米国式で表示されます。80プルーフは40パーセントのアルコールです。',
};
const faq = [
  { question: 'アルコールを希釈する水の量はどう計算しますか？', answer: '開始容量に開始度数を掛けて純アルコールの容量を求めます。その容量を目標度数の小数で割ると理論上の最終容量になります。そこから開始容量を引くと加える水の量が分かります。' },
  { question: 'ABVとプルーフの違いは何ですか？', answer: 'ABVは容量に対する純アルコールの割合です。米国のプルーフではABVの2倍がプルーフなので、40パーセントABVは80プルーフです。切り替えは表示だけを変更し、実際の強さは変えません。' },
  { question: 'アルコールと水の収縮は計算に含まれますか？', answer: '含まれません。結果は純アルコールが保たれると仮定した推定値です。エタノールと水は混合後に合計容量が少し小さくなることがあり、温度も容量を変えます。計画値として使い、適切な比重計などで確認してください。' },
  { question: '合法的なアルコール製品の製造に使えますか？', answer: 'このツールは計算のみを行い、レシピ、表示、酒税、許可、地域の規則は確認しません。製造と販売を行う場所の要件に従い、安全な計量と清潔な器具を使用してください。' },
];
const howTo = [
  { name: '容量の単位を選ぶ', text: 'メートル法のミリリットル、またはヤードポンド法の液量オンスを選びます。単位を変えても実際の容量は同じです。' },
  { name: '開始バッチを入力する', text: '希釈前の開始度数と蒸留酒の容量を設定します。' },
  { name: '目標度数を設定する', text: '完成した混合液の低い度数を入力します。希釈にならない値は警告されます。' },
  { name: '水を段階的に加える', text: '水と最終容量を確認し、少しずつ混ぜてから適切な器具で度数を測定します。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'ja' };
export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: '希釈についてのよくある質問', bibliographyTitle: '計算式の出典', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: 'title', text: 'アルコール希釈の仕組み', level: 2 },
  { type: 'paragraph', html: '希釈は水を加えてアルコール濃度を下げる方法です。純アルコールの量はおおむね保たれます。この<strong>アルコール希釈計算機</strong>は開始度数と容量から、加える水の量と理論上の最終容量を求めます。バッチのデータをアップロードせず、ブラウザー内で計算できます。' },
  { type: 'table', headers: ['値', '計算式', '意味'], rows: [['純アルコール', '開始容量 x 開始度数', '混合液に残るアルコール'], ['最終容量', '純アルコール / 目標度数', '希釈後の理論上の合計'], ['加える水', '最終容量 minus 開始容量', '準備する水の量']] },
  { type: 'title', text: 'ABVとプルーフの換算', level: 2 },
  { type: 'paragraph', html: '容量アルコール度数は液体に含まれる純アルコールの割合を表します。米国式ではプルーフはABVの2倍で、40パーセントABVは80プルーフです。ラベルがプルーフ表記のときは切り替えを使えますが、国や時代により制度が異なる場合があります。' },
  { type: 'stats', columns: 3, items: [{ value: '80 proof', label: '40パーセントABV' }, { value: '1:1', label: '標準設定での水の比率' }, { value: '100% local', label: 'バッチデータを送信しない' }] },
  { type: 'title', text: '結果が推定値である理由', level: 2 },
  { type: 'paragraph', html: '計算では純アルコールの容量を保ちますが、実際の混合液は完全な足し算にはなりません。アルコールと水は混ざると収縮し、温度も密度と測定容量を変えます。水は少しずつ加え、測定温度になってから、液体に合った器具で度数を確認してください。' },
  { type: 'tip', title: '少しずつ混ぜて確認する', html: '清潔で計量した水と、理論上の最終容量に十分な大きさの容器を使用してください。温度、糖分、香料、地域の測定規則は計算機には分かりません。表示された水の量は開始計画であり、完成度数の証明書ではありません。' },
  { type: 'title', text: '再現しやすい希釈手順', level: 2 },
  { type: 'list', items: ['ラベルの開始度数と実際のバッチ容量を記録します。', '開始度数より低い目標度数を選びます。', '純アルコール、最終容量、水の量を計算します。', '大部分の水を加えて混ぜ、残りを少量ずつ足します。', '測定温度に達した完成液の度数を確認します。'] },
  { type: 'diagnostic', variant: 'warning', title: '計算は製造許可ではありません', html: 'このページは原料、衛生、表示、税金、許可、販売の適法性を確認しません。飲料や地域に適用される規則を計算結果だけで省略しないでください。' },
] };
