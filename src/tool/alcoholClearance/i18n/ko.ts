import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'alcohol-clearance-calculator';
const title = '숙취 & 혈중알콜농도 계산기: 회복 시간 예측';
const description = '위드마크 공식을 사용해 혈중알콜농도(BAC)와 0.0에 도달하는 시간을 계산하세요. 잠들기 전 수분 섭취 계획을 세우고 완전히 회복되는 시점을 파악하세요.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: '생물학적 성별',
  weightLabel: '체중',
  kgUnit: 'kg',
  addDrinkLabel: '음료 추가',
  beerLabel: '맥주',
  wineLabel: '와인',
  spiritLabel: '칵테일',
  shotLabel: '샷',
  accumulatedLabel: '섭취한 음료',
  emptyListLabel: '목록이 비어 있습니다',
  emptySubLabel: '음료를 선택해서 계산해보세요.',
  estimatedBacLabel: '예상 혈중알콜농도',
  bacUnit: 'BAC',
  timeToZeroLabel: '0.0에 도달하는 시간',
  waterAdviceLabel: '물 (수면 전)',
  pillAdviceLabel: '영양제',
  noneAdvice: '불필요',
  hydrationAdvice: '우선순위: 수분 섭취',
  electrolytesAdvice: '전해질 + 비타민 B',
  disclaimerText: '이 계산기는 이론적 추정치입니다. 신진대사와 음식 섭취에 따라 결과가 달라집니다. 음주 운전은 절대 금지입니다.',
  drinkUnit: '잔',
  drinksUnit: '잔'
};

const faqTitle = '자주 묻는 질문';
const bibliographyTitle = '참고 자료 및 출처';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "표준 음주량이란 무엇이고 각 음료에는 얼마나 포함되어 있나요?",
    answer: "표준 음주량(Standard Drink Unit)은 순 알콜 약 10그램을 의미합니다(영국/EU 기준; 미국은 14g). 일반적인 맥주 330ml(5%)에는 약 1.3 단위, 와인 한 잔 150ml(12%)에는 약 1.4 단위, 샷 40ml(40%)에는 약 1.3 단위가 포함됩니다. 자신이 마신 음료의 음주량 단위를 정확히 아는 것이 계산기 결과를 올바르게 해석하는 데 필수적입니다.",
  },
  {
    question: "생물학적 성별이 혈중알콜농도 계산에 영향을 미치는 이유는?",
    answer: "생물학적 성별은 신체 수분 함량의 비율을 나타내는 위드마크 계수 'r'에 영향을 미칩니다. 남성은 신체에 상대적으로 더 많은 수분을 가지고 있어서 평균 r=0.68입니다. 여성은 체지방 비율이 높아서 알콜을 덜 유지하기 때문에 평균 r=0.55입니다. 즉, 같은 양의 음료를 마시고 같은 체중이어도 여성이 더 높은 혈중알콜농도에 도달합니다.",
  },
  {
    question: "커피, 물, 운동이 알콜 제거 속도를 높일 수 있나요?",
    answer: "아니요. 간은 알콜을 시간당 약 0.15g/L의 일정한 속도로 제거합니다(영차 동역학). 커피는 졸음을 가릴 수 있고, 물은 탈수를 도와주며, 운동은 전반적인 건강을 개선하지만 실제 혈중알콜농도는 낮추지 못합니다. 오직 시간만이 혈액에서 알콜을 제거할 수 있습니다.",
  },
  {
    question: "음주 후 음식을 섭취하면 혈중알콜농도가 내려가나요?",
    answer: "음주 후 음식을 먹는 것은 이미 혈중에 있는 알콜을 감소시키지 못합니다. 음식이 큰 역할을 하는 시점은 음주 전이나 음주 중입니다. 위에 있는 음식, 특히 단백질과 지방은 위의 배출을 지연시켜 알콜이 혈액에 흡수되는 속도를 줄일 수 있고 최고 혈중알콜농도를 최대 50%까지 낮출 수 있습니다. 알콜이 한 번 흡수되면 간의 신진대사만이 그것을 제거할 수 있습니다.",
  },
  {
    question: "혈중알콜농도가 0.0에 도달하는 데 얼마나 걸리나요?",
    answer: "출발점의 혈중알콜농도에 따라 다릅니다. 예상 혈중알콜농도(g/L)를 0.15로 나누면 대략적인 시간을 얻을 수 있습니다. 예를 들어 혈중알콜농도 1.5g/L은 약 10시간 정도 걸립니다. 간은 절대 멈추지 않고 수면 중에도 알콜을 처리합니다. 하지만 주의하세요. 완전히 회복된 것처럼 느껴도 혈액에 알콜이 여전히 남아 있을 수 있습니다.",
  },
  {
    question: "이 계산기가 운전 가능 여부를 결정하는 데 100% 신뢰할 수 있나요?",
    answer: "아니요. 이 도구는 위드마크 공식을 기반으로 한 이론적 추정치입니다. 음식 섭취, 약물, 피로, 유전적 ADH 효소 변이, 스트레스와 같은 요소들이 실제 혈중알콜농도를 양쪽 방향으로 20~30% 변동시킬 수 있습니다. 이 계산기를 운전 가능 여부를 결정하는 데 절대 사용하지 마세요. 음주했다면 운전하지 마세요. 이것이 실수의 여지가 없는 유일한 규칙입니다.",
  },
];

const bibliography: AlcoholClearanceLocaleContent['bibliography'] = [
  {
    name: "알콜 계산 및 불확실성 - PMC",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4361698/",
  },
  {
    name: "알콜 신진대사: 신체가 알콜을 처리하는 방식 - NIH",
    url: "https://www.niaaa.nih.gov/publications/alcohol-metabolism",
  },
];

const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "프로필 설정",
    text: "생물학적 성별(신체 수분 비율에 영향)과 현재 체중을 선택하세요.",
  },
  {
    name: "섭취한 음료 추가",
    text: "마신 음료의 아이콘을 클릭하세요. 아래의 목록에 누적됩니다.",
  },
  {
    name: "안전 시간 확인",
    text: "예상 혈중알콜농도를 확인하고, 무엇보다 간이 섭취한 에탄올을 모두 처리하는 데 걸리는 시간을 확인하세요.",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: '알콜 신진대사: 과학과 제거 과정',
    level: 2
  },
  {
    type: 'paragraph',
    html: '신체가 에탄올을 어떻게 처리하는지 이해하는 것은 안전과 숙취 완화에 필수적입니다. 우리의 <strong>알콜 제거 계산기</strong>는 널리 인정받는 <strong>위드마크 공식</strong>을 사용해 신진대사 상태를 명확하게 파악할 수 있게 해줍니다. 알콜은 땀 흘리기, 물 마시기, 운동으로는 제거되지 않습니다. 오직 시간과 간의 신진대사만이 혈중알콜농도를 낮출 수 있습니다.'
  },
  {
    type: 'diagnostic',
    title: '혈중알콜농도의 약물동역학',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: '생화학',
    html: '알콜은 신체 수분을 통해 분산됩니다. 체중과 위드마크 계수 r(남성 0.68/여성 0.55)은 에탄올이 혈류에서 초기에 희석되는 정도를 결정합니다. 이것이 같은 체중의 두 사람이 같은 양의 음료를 마신 후에도 혈중알콜농도가 크게 다를 수 있는 이유입니다.'
  },
  {
    type: 'title',
    text: '간의 산화 및 효소',
    level: 2
  },
  {
    type: 'paragraph',
    html: '간은 알콜 탈수소효소(ADH)를 통해 95%의 알콜을 분해합니다. 이 과정은 일정한 속도로 일어나므로(영차 동역학) 운동이나 커피로 가속될 수 없습니다. 나머지 5%는 호흡, 소변, 땀으로 제거되는데, 이것이 교통 단속 시 음주 측정의 기초가 됩니다.'
  },
  {
    type: 'stats',
    items: [
      { label: '제거 속도', value: '0.15 g/L·h', icon: 'mdi:clock-fast' },
      { label: '위에서의 흡수', value: '20% 에탄올', icon: 'mdi:stomach' },
      { label: '권장 수분 섭취', value: '음료 1잔당 물 1잔', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: '미신 vs 사실',
    items: [
      { pro: '수면 전 물과 전해질은 이뇨 현상에 대응해 숙취의 심각도를 줄입니다.', con: '' },
      { pro: '', con: '찬 샤워: 혈중알콜농도에 전혀 영향을 미치지 않습니다.' },
      { pro: '', con: '커피: 졸음을 가리지만 손상된 반사 신경이나 인지 기능을 회복시키지 못합니다.' }
    ]
  },
  {
    type: 'card',
    title: '숙취는 무엇이 원인일까요?',
    icon: 'mdi:alert-decagram',
    html: '과학적으로 숙취증후군(veisalgia)이라 불리는 숙취는 전신 탈수(에탄올에 의한 바소프레신 억제), 독성 대사산물인 아세트알데히드 축적, 사이토카인 염증 면역 반응으로 인해 발생합니다. 알콜 억제 후 뇌의 글루탐산 반동은 다음 날 아침의 불안감과 빛과 소리에 대한 민감성을 높입니다.'
  },
  {
    type: 'tip',
    title: '안전 우선: 자신의 한계를 알아야 합니다',
    html: '혈중알콜농도 0.05%는 판단력, 추적, 반응 시간에 측정 가능한 손상을 유발합니다. 대부분의 국가에서는 운전 중 혈중알콜농도 제한을 0.05%~0.08% 사이로 설정합니다. 하지만 개인의 민감도는 크게 다릅니다. 나이, 약물, 피로, 유전적 ADH 효소 변이 등이 알콜이 개인에게 미치는 영향을 모두 결정합니다. 확실하지 않으면 운전하지 마세요.'
  },
  {
    type: 'title',
    text: '음식 섭취와 흡수 속도의 역할',
    level: 2
  },
  {
    type: 'paragraph',
    html: '음주 전이나 음주 중 음식 섭취는 알콜 흡수 동역학을 극적으로 변화시킵니다. 위에 있는 음식, 특히 단백질과 지방은 위의 배출을 지연시켜 에탄올이 혈류에 들어가는 최대 속도를 줄입니다. 빈속에 음주하는 사람은 음식을 충분히 먹고 같은 양을 마신 사람보다 최고 혈중알콜농도가 최대 50% 높을 수 있습니다. 이것은 위드마크 공식이 완전히 포착할 수 없는 가장 강력한 변수 중 하나이며, 이것이 우리의 계산기가 이론적 추정치에 대한 면책 조항을 포함하는 이유입니다.'
  },
  {
    type: 'paragraph',
    html: '알콜 음료의 종류도 도수와 용량 이상의 의미를 가집니다. 탄산 믹서(토닉 워터, 스파클링 와인)는 위의 배출을 가속화하고 알콜을 혈류에 더 빠르게 밀어 넣습니다. 도수가 매우 높은 음료(25% 이상)는 위 운동을 일시적으로 억제해 흡수를 지연시킬 수 있습니다. 단 음료는 알콜의 인지된 효과를 감추어 사람들이 자신도 모르게 더 빠르게 마시도록 유도합니다. 이러한 미묘한 차이가 실제 혈중알콜농도가 모델 예측에서 양방향으로 20~30% 벗어나는 이유입니다.'
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
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
