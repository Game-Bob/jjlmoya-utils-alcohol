import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'beer-carbonation-calculator';
const title = '맥주 탄산화 및 프라이밍 계산기';
const description = '홈브루를 병에 담을 때 필요한 덱스트로스, 일반 설탕 또는 DME(건조 보리 추출물)의 정확한 그램수를 계산합니다. 용량, 발효 온도, 스타일을 입력하여 완벽한 프라이밍을 달성하세요.';

const ui: CarbonationUI = {
  parametersTitle: '매개변수',
  metricBtn: '미터법',
  imperialBtn: '야드파운드법',
  volumeLabel: '맥주 용량',
  maxTempLabel: '최고 온도',
  litersUnit: '리터',
  celsiusUnit: '°C',
  gallonsUnit: '갤런',
  fahrenheitUnit: '°F',
  desiredCo2Label: '원하는 탄산화',
  volUnit: 'CO2 Vol',
  resultsTitle: '프라이밍 결과',
  tableSugarLabel: '일반 설탕',
  cornSugarLabel: '옥수수 설탕(덱스트로스)',
  dmeLabel: '건조 보리 추출물(DME)',
  safetyTitle: '폭발 위험!',
  lowCarbonation: '낮은 탄산화',
  optimalCarbonation: '최적 탄산화',
  highEffervescence: '높은 발포성',
  bubblingVisualizationLabel: '대략적인 거품 시각화'
};

const faqTitle = '자주 묻는 질문';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "탄산화에 온도가 중요한 이유는 무엇입니까?",
    answer: "맥주의 잔존 CO2는 발효 후 도달한 최고 온도에 따라 달라집니다. 찬 액체는 따뜻한 액체보다 더 많은 용해 가스를 유지합니다. 실제 온도보다 낮은 온도를 입력하면 계산기는 실제보다 더 많은 잔존 CO2가 있다고 가정하고 필요한 설탕보다 적게 제안합니다. 너무 높은 온도를 입력하면 반대가 됩니다. 필요한 것보다 더 많은 설탕을 추가하여 병 폭발 위험 영역에 진입하게 되고, 과도한 압력으로 인해 병이 파열되거나 캡이 폭력적으로 날아갑니다.",
  },
  {
    question: "프라이밍에 가장 좋은 설탕은 무엇입니까?",
    answer: "덱스트로스(옥수수 설탕)는 중성이고 빠르게 용해되어 선호됩니다. 일반 설탕도 잘 작동하지만 덱스트로스보다 약 10% 적은 무게가 필요합니다.",
  },
  {
    question: "프라이밍 설탕을 너무 많이 추가하면 어떻게 됩니까?",
    answer: "과잉 프라이밍은 병 내부에 과도한 CO2 압력을 생성합니다. 표준 유리 병은 약 3.5-4.0 용적의 CO2에서 파손됩니다. 이 지점을 초과하면 병이 파열되거나 캡이 폭력적으로 날아갈 수 있습니다. 정확성이 중요한 이유는 리터당 5그램의 추가 설탕도 전체 배치가 위험 영역에 들어갈 수 있기 때문입니다.",
  },
  {
    question: "병에 담은 후 맥주가 탄산화되는 데 얼마나 걸립니까?",
    answer: "실온(18-22°C)에서 2-3주가 효모가 추가된 설탕을 완전히 발효시키고 CO2가 액체에 통합되는 전형적인 범위입니다. 과정이 완료되기 전에 병을 열면 항상 오도된 결과를 얻습니다. 맥주가 탄산화 부족으로 보이지만 탄산화가 여전히 진행 중입니다. DME의 경우 발효 가능한 설탕의 복잡성으로 인해 프로세스가 약간 더 느릴 수 있습니다.",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "실제 용량 측정",
    text: "발효가 완료된 후 병에 담을 준비가 된 맥주의 리터(또는 갤런) 수를 입력합니다.",
  },
  {
    name: "발효 온도 정의",
    text: "활발한 발효 중 또는 후에 맥주가 도달한 최고 온도를 입력합니다.",
  },
  {
    name: "스타일 또는 CO2 용적 선택",
    text: "원하는 탄산화 수준을 선택합니다. 스타일은 1.5(스타우트)부터 4.5(밀맥주)까지 다양합니다.",
  },
];


const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: '탄산화 및 프라이밍의 궁극의 가이드',
    level: 2
  },
  {
    type: 'paragraph',
    html: '프라이밍 기술을 마스터하고 홈브루를 평탄한 실험에서 전문적인 발포 경험으로 변환합니다. 프라이밍은 병 내부의 잔존 효모가 이차 발효 중에 천연 CO2를 생성하도록 정확한 양의 설탕을 추가하는 것입니다. 설탕이 너무 적으면 맥주가 평탄해지고, 너무 많으면 병을 깨뜨릴 수 있는 위험한 압력이 생깁니다. 둘 사이의 차이는 몇 그램에 불과합니다 - 이것이 이 계산기가 존재하는 이유입니다.'
  },
  {
    type: 'proscons',
    title: '중요한 성공 요인',
    items: [
      { pro: '온도: 잔존 CO2는 발효 후 온도 피크에 따라 달라집니다.', con: '' },
      { pro: '정확성: 리터당 5그램의 추가 설탕이 완벽한 탄산화와 간헐천의 차이가 될 수 있습니다.', con: '' },
      { pro: '', con: '산화: 프라이밍 설탕을 혼합하기 위해 전송할 때 액체 튀김을 피하십시오.' }
    ]
  },
  {
    type: 'title',
    text: '맥주 스타일별 CO2 용적',
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
    title: '어떤 설탕을 선택해야 합니까?',
    icon: 'mdi:corn',
    html: '<strong>덱스트로스</strong>는 중성이고 전문적입니다 - 산업 표준입니다. <strong>일반 설탕</strong>은 경제적이고 효과적입니다(덱스트로스보다 10% 적은 무게 사용). <strong>DME(건조 보리 추출물)</strong>는 순수주의자의 선택이지만 브랜드 및 보리 구성에 따라 발효성이 다양하므로 정확히 예측하기가 더 어렵습니다.'
  },
  {
    type: 'diagnostic',
    title: '안전 경고',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: '위험',
    html: '표준 유리 병은 3.5-4.0 용적의 CO2에서 파손됩니다. 얇은 유리에서 벨기에식 또는 밀맥주를 탄산화하려고 하지 마십시오. 항상 탄산음료에 대해 정격된 병을 사용하고, 이전 사용으로 인한 미시적 구조적 손상이 있을 수 있는 회수된 상업용 병을 절대 사용하지 마십시오.'
  },
  {
    type: 'tip',
    title: '프로 팁: 설탕을 올바르게 녹이기',
    html: '프라이밍 설탕 용액(배치당 약 250ml의 물에 녹인 설탕 20L)을 맥주에 추가하기 전에 항상 10분 동안 끓으십시오. 끓임은 용액을 살균하고 설탕이 완전히 녹고 전체 배치에 균등하게 분포되어 있음을 보장하여 병 간의 불균등한 탄산화를 초래하는 핫스팟을 방지합니다.'
  },
  {
    type: 'summary',
    title: '이 도구는 누구를 위한 것입니까?',
    items: [
      '홈브루어: 모든 배치 크기, 스타일 및 발효 온도에 대한 정확한 프라이밍 설탕 계산을 얻습니다.',
      '크래프트 맥주 애호가: 상용 맥주가 왜 다른 탄산화 수준을 갖는지 이해합니다.',
      '전문 양조자: 대규모 상업용 배치를 병에 담기 전에 손 계산을 교차 확인합니다.'
    ]
  },
  {
    type: 'title',
    text: '탄산화 과학: Henry\'s Law',
    level: 2
  },
  {
    type: 'paragraph',
    html: '본질적으로 탄산화는 <strong>Henry\'s Law</strong>에 의해 지배됩니다. 액체에 용해된 가스의 양은 액체 위의 그 가스의 부분 압력에 비례합니다. 병을 프라이밍하고 밀폐하면 효모는 설탕을 소비하고 밀폐된 환경에서 CO2를 생성합니다. 압력이 증가하면서 가스는 다시 용액으로 강제됩니다. 이 평형이 달성되는 온도는 최종 탄산화 수준을 결정합니다 - 이것이 발효 온도가 이 계산기에서 가장 중요한 변수인 이유입니다.'
  },
  {
    type: 'paragraph',
    html: '프라이밍 전 맥주의 잔존 CO2는 0이 아닙니다. 모든 맥주는 발효 과정에서 용해된 CO2를 함유하고 있으며, 유지되는 양은 맥주가 도달한 최고 온도에 따라 다릅니다. 22°C에서 발효한 맥주는 16°C에서 발효한 맥주보다 훨씬 적은 잔존 CO2를 유지합니다. 둘 다 현재 냉각되어 있습니다. 이 잔존을 고려하지 않으면 체계적 과탄산화가 발생합니다 - 초보자 홈브루어 사이에서 가장 일반적인 실수 중 하나입니다.'
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
  bibliography,
  howTo,
  schemas,
};
