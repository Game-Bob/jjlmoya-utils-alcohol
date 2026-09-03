import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'bira-mase-verimliligi-hesaplayici';
const title = 'Bira Mayşe Verimliliği Hesaplayıcı';
const description = 'Ev biracılığı için mayşe verimlilik yüzdesini, şeker ekstraksiyonunu ve beklenen özgül ağırlığı hesaplayın.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Metrik',
  stagePreboil: 'Kaynatma Öncesi Şıra',
  stagePostboil: 'Kaynatma Sonrası Şıra',
  unitImperial: 'İmparatorluk',
  labels: {
    grainWeight: 'Toplam Malt Ağırlığı',
    grainType: 'Malt Potansiyeli',
    customPotential: 'Özel Potansiyel (SG)',
    wortVolume: 'Şıra Hacmi',
    measuredSg: 'Ölçülen SG',
    unitSystem: 'Birim Sistemi',
    sampleTemp: 'Numune Sıcaklığı',
    calibTemp: 'Kalibrasyon Sıcaklığı',
    stageLabel: 'Mayşe Aşaması',
    presets: 'Yaygın Değerler',
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
    pilsner: 'Pilsner Malt (1.037 / 37 PPG)',
    pale_ale: 'Pale Ale Malt (1.038 / 38 PPG)',
    vienna: 'Viyana Malt (1.036 / 36 PPG)',
    munich: 'Münih Malt (1.035 / 35 PPG)',
    wheat: 'Buğday Malt (1.038 / 38 PPG)',
    caramel_30: 'Karamel 30L (1.034 / 34 PPG)',
    caramel_60: 'Karamel 60L (1.034 / 34 PPG)',
    chocolate: 'Çikolata Malt (1.034 / 34 PPG)',
    custom: 'Özel Potansiyel...',
  },
  results: {
    efficiencyTitle: 'Mayşe Verimliliği',
    efficiencyBadge: 'Hesaplanan Durum',
    correctedGravity: 'Sıcaklık Düzeltmeli SG',
    measuredGravity: 'Ölçülen Yoğunluk',
    expectedGravity75: '%75 Verimlilikte SG',
    expectedGravity80: '%80 Verimlilikte SG',
    expectedGravity85: '%85 Verimlilikte SG',
    potentialPoints: 'Toplam Potansiyel Puan',
    extractedPoints: 'Ekstraksiyon Puanı',
    wortBrix: 'Tahmini Brix',
  },
  statusMessages: {
    excellent: 'Mükemmel Ekstraksiyon (%82+)',
    good: 'İyi Verimlilik (%74 - %81)',
    average: 'Ortalama Verimlilik (%65 - %73)',
    poor: 'Düşük Ekstraksiyon (< %65)',
  },
  kettleVisual: {
    mashTunTitle: 'Mayşe Kazanında Ekstraksiyon',
    wortLevel: 'Şıra Seviyesi',
    sugarExtraction: 'Şeker Ekstraksiyonu',
  },
};

const faq = [
  {
    question: 'Bira yapımında mayşe verimliliği nedir?',
    answer: 'Mayşe verimliliği, malttaki potansiyel şekerlerin kaynatma öncesi şıraya ne oranda aktarıldığını gösterir.',
  },
  {
    question: 'İyi bir mayşe verimliliği oranı nedir?',
    answer: 'Ev biracılığında %70 ile %80 arasındaki mayşe verimliliği oldukça başarılı kabul edilir.',
  },
  {
    question: 'Mayşe verimliliği nasıl hesaplanır?',
    answer: 'Şıradaki toplam özgül ağırlık puanları, kullanılan malt kırmasının teorik maksimum potansiyeli ile kıyaslanır.',
  },
  {
    question: 'Düşük mayşe verimliliği nasıl artırılır?',
    answer: 'Malt kırma boyutunu ayarlayın, mayşe pH değerini 5.2 - 5.6 arasında tutun ve yağmurlamayı dengeli yapın.',
  },
  {
    question: 'Mayşe verimliliği ile ekipman verimliliği arasındaki fark nedir?',
    answer: 'Mayşe verimliliği yalnızca kazandaki şeker kazanımını ölçer; genel verimlilik kaynatma ve fermantasyon kayıplarını da kapsar.',
  },
  {
    question: 'Su-malt oranı şeker ekstraksiyonunu nasıl etkiler?',
    answer: 'Daha sulu mayşeler (kg başına 3.5 - 4.0 L su) enzim hareketliliğini ve şeker yıkanmasını kolaylaştırır.',
  }
];

const howTo = [
  {
    name: 'Birim sistemini seçin',
    text: 'Metrik veya imparatorluk birim sistemini seçin.',
  },
  {
    name: 'Malt miktarını ve potansiyelini girin',
    text: 'Malt türünü listeden seçin veya özel potansiyel değerini yazın.',
  },
  {
    name: 'Şıra hacmini ve ölçülen SG değerini girin',
    text: 'Toplanan kaynatma öncesi hacmi ve hidrometre okumasını girin.',
  },
  {
    name: 'Verimliliği ve hedef değerleri inceleyin',
    text: 'Elde ettiğiniz yoğunluğu %75, %80 ve %85 hedefleri ile karşılaştırın.',
  },
  {
    name: 'Sonraki reçeteler için ayarlama yapın',
    text: 'Hesaplanan verimliliği gelecekteki reçetelerinizi ölçeklendirmek için kullanın.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<BeerMashEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Mayşe verimliliği hakkında sık sorulan sorular',
  bibliographyTitle: 'Kaynaklar ve formüller',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Bira mayşe verimliliğini anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mayşe verimliliği, malt nişastasının fermante edilebilir şekerlere ne kadar verimli dönüştürüldüğünü ve şıraya aktarıldığını ölçer. Doğru reçete formülasyonu için temel bir göstergedir.',
    },
    {
      type: 'table',
      headers: ['Parametre', 'Formül', 'Açıklama'],
      rows: [
        ['Potansiyel Puan', 'Ağırlık x PPG', 'Teorik maksimum'],
        ['Ekstraksiyon Puanı', 'Hacim x SG Puanı', 'Şıradaki gerçek puan'],
        ['Mayşe Verimliliği', '(Elde Edilen / Potansiyel) x 100', 'Gerçek ekstraksiyon yüzdesi'],
        ['Şıra Brix', '-668.82 + 11.536 x SG x 100...', 'Refraktometre karşılığı']
      ],
    },
    {
      type: 'title',
      text: 'Ekstraksiyonu etkileyen temel faktörler',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Öğütme Boyutu: İnce öğütme yüzey alanını artırır ancak filtreyi tıkayabilir.',
        'Sıcaklık ve pH: Optimal enzim aktivitesi 64°C - 68°C ve pH 5.2 - 5.6 arasında gerçekleşir.',
        'Yağmurlama Tekniği: Sürekli veya kademeli su akışı şeker yıkamasını etkiler.',
        'Su-Malt Oranı: Daha sulu mayşeler enzim hareketliliğini artırır.',
        'Yatak Derinliği: 30 cm ile 45 cm arasında sıvı dinamiği optimize edilir.'
      ],
    },
    {
      type: 'tip',
      title: 'Yeni reçetelerde %75 değerini baz alın',
      html: 'Yeni bir reçete oluştururken %75 verimlilik varsayımı güvenilir bir başlangıç noktası sunar.',
    },
    {
      type: 'title',
      text: 'Ölçüm sonuçlarına göre reçete düzeltme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kaynatma öncesi ölçülen yoğunluk hedefin altındaysa, şırayı yoğunlaştırmak için kaynatma süresini uzatabilir ya da malt özü ekleyebilirsiniz.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Mayşe verimliliği ve toplam sistem verimliliği',
      html: 'Mayşe kazanındaki şeker ekstraksiyonunu tüm sisteminizin toplam verimliliği ile karıştırmayın.',
    },
  ],
};
