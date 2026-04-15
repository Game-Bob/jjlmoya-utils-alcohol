import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'party-stock-calculator';
const title = '파티 맥주 계산기: 결혼식 및 생일을위한 1인당 수량';
const description = '손님, 기간 및 온도에 따라 필요한 맥주와 얼음의 양을 계산하는 무료 도구입니다. 결혼식, 생일 및 야외 행사에 완벽합니다.';

const ui: PartyKegUI = {
  calcStockTitle: '재고 계산기',
  beerIceSub: '행사용 맥주 및 얼음',
  guestsLabel: '손님',
  durationLabel: '기간',
  hoursUnit: '시간',
  intensityLabel: '강도',
  chillLabel: 'Chill',
  standardLabel: 'Standard',
  partyLabel: 'Party',
  tempLabel: '온도',
  estimatedVolLabel: '예상 용량',
  kegsLabel: '통',
  iceRequiredLabel: '필요한 얼음',
  bagsLabel: '봉지',
  visualizationTitle: '재고 시각화',
  optimalMsg: '최적 조건',
  highMeltMsg: '높은 융해 감지됨',
  highEfficiencyMsg: '추운/높은 효율'
};

const faqTitle = '자주 묻는 질문';
const bibliographyTitle = '참고 문헌 및 소스';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "4시간 동안 1인이 몇 잔의 맥주를 마시나요?",
    answer: "평균적으로 4시간 행사의 경우 1인당 5잔의 맥주를 계산하세요. 이는 첫 번째 시간에 2잔, 나머지 각 시간에 1잔을 가정합니다.",
  },
  {
    question: "100잔의 맥주에 필요한 얼음은 얼마나 되나요?",
    answer: "약 15~20킬로그램의 얼음(7~10봉지)이 필요합니다. 실제 규칙은 일반적인 조건에서 음료 1리터당 0.75kg의 얼음입니다. 여름이나 25°C 이상의 야외에서는 1리터당 1kg으로 늘리세요. 주변 열이 융해를 가속화하면 예상보다 훨씬 빨리 얼음이 떨어집니다.",
  },
  {
    question: "표준 통과 파티 통의 차이점은 무엇인가요?",
    answer: "표준 상용 통은 50리터를 담고 약 200인분(각 250ml)을 생산합니다. 파티 통(미니통)은 일반적으로 5리터를 담습니다(약 20인분). 이러한 크기를 알면 계산기의 리터 출력을 구매해야 할 컨테이너 수로 변환하는 데 도움이 됩니다.",
  },
  {
    question: "맥주가 이미 차가운데 왜 이렇게 많은 얼음이 필요한가요?",
    answer: "냉각과 유지는 두 가지 별개의 과정이기 때문입니다. 캔을 25°C에서 4°C로 옮기는 것은 얼음의 잠재 융해열을 소비합니다. 약 334kJ/kg입니다. 차가워지면 얼음은 계속 주변 열을 상쇄하기 위해 작동합니다. 35°C의 여름날에는 쿨러로의 열 전달이 2~3시간마다 음료 1리터당 1kg의 얼음을 녹일 수 있습니다. 그래서 파티 전에 음료를 미리 식혀놓으면 전체 얼음 소비량이 절반으로 줄어드는 것입니다.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "손님 수를 추정하세요",
    text: "참석할 인원을 정의하세요. 당사 계산기는 통계적 소비 평균에 따라 수량을 조정합니다.",
  },
  {
    name: "기간과 강도를 정의하세요",
    text: "행사가 몇 시간 지속될 것인지, 파티의 '흐름'(차분함, 표준, 또는 강렬함)을 표시하세요.",
  },
  {
    name: "주변 온도에 맞게 조정하세요",
    text: "야외 온도는 얼음 계산의 핵심입니다. 열을 보충해야 하는 융해 속도가 높을수록 더워집니다.",
  },
];

const bibliography: PartyKegLocaleContent['bibliography'] = [
  {
    name: "Event Planning: Alcohol & Bar Calculations - Spruce Eats",
    url: "https://www.thespruceeats.com/stock-your-bar-for-a-party-760394",
  },
  {
    name: "Thermodynamics of Ice Melting - Engineering Toolbox",
    url: "https://www.engineeringtoolbox.com/saturated-ice-steam-d_970.html",
  },
];

const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: '내 파티를 위해 맥주와 얼음이 얼마나 필요한가요?',
    level: 2
  },
  {
    type: 'paragraph',
    html: '행사를 계획할 때의 백만 달러 질문: <strong>맥주 몇 리터를 구매해야 하나요?</strong> 부족하면 재앙이지만 과도하게 구매하는 것은 불필요한 지출입니다. 이 도구는 정확한 알코올 양을 계산하는 데 도움이 됩니다. 가장 중요한 것은 <strong>얼음 몇 봉지</strong>가 필요한지를 계산합니다. 전문 케이터링 업체와 행사 기획자는 통계적 소비 모델을 사용합니다. 이제 무료로 같은 방식을 사용할 수 있습니다.'
  },
  {
    type: 'title',
    text: '1인당 소비 공식',
    level: 2
  },
  {
    type: 'paragraph',
    html: '필요한 알코올을 추정하기 위해 전문 케이터링 업체는 "시간당 소비율"을 기반으로 한 공식을 사용합니다. 정확한 과학은 아니지만 통계에 따르면 표준 파티에서는 1인당 약 1.5단위가 시간당 소비됩니다. 주변 온도, 음식 이용 가능성, 행사의 사회적 에너지와 같은 요소들은 모두 이 기본 수치를 변경합니다.'
  },
  {
    type: 'stats',
    items: [
      { label: '차분한 소비', value: '1잔/시간', icon: 'mdi:tea-outline' },
      { label: '표준 파티', value: '1.5잔/시간', icon: 'mdi:glass-mug-variant' },
      { label: '결혼식/축제', value: '2.5+잔/시간', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: '얼음의 물리학',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: '열역학',
    html: '얼음 계산은 대부분의 호스트가 실패하는 곳입니다. 얼음은 두 가지 기능을 수행합니다: 냉각(맥주를 25°C에서 4°C로)과 유지(주변 열과 싸우기). 30°C 이상의 온도에서는 융해 속도가 두 배가 됩니다. 직사광선 아래 얼음 봉지가 20분 이내에 사라져서 파티가 정점에 도달하기 전에 음료가 따뜻해질 수 있습니다.'
  },
  {
    type: 'tip',
    title: '얼음 절약을 위한 전문가 팁',
    html: '얼음을 추가하기 전에 통과 캔을 그늘에 보관하세요. 햇빛 아래 음료가 따뜻하면, 첫 번째 얼음 봉지의 50%가 단순히 잠재열을 교환하면서 10분 내에 소실됩니다. 미리 차갑게 식힌 음료로 시작하면 실제로 구매해야 할 얼음의 양을 드라마틱하게 줄일 수 있습니다.'
  },
  {
    type: 'title',
    text: '물류를 위한 참고 데이터',
    level: 2
  },
  {
    type: 'paragraph',
    html: '표준 50L 통은 약 200인분을 생산합니다. 일반적인 얼음 봉지의 무게는 2kg입니다. 이러한 숫자를 알면 최후의 순간 놀라움 없이 행사에 필요한 운송 및 보관을 계획할 수 있습니다. 운송 중 얼음 융해를 고려하세요. 여름의 30분 운전이 파티 시작 전에 전체 봉지를 사용할 수 있습니다.'
  },
  {
    type: 'summary',
    title: '이 도구는 누구를 위한 것인가요?',
    items: [
      '개인 파티 호스트: 추측을 멈추고 다음 축하 행사에 필요한 것을 정확히 자신감 있게 구매하세요.',
      '행사 기획자: 정확한 소비 모델을 사용하여 고객에게 견적을 제시하고 바 물류를 전문적으로 계획하세요.',
      '장소 관리자: 다양한 손님 수를 가진 반복되는 행사 전체에서 재고 계산을 표준화하세요.'
    ]
  },
  {
    type: 'paragraph',
    html: '흔히 간과되는 변수는 <strong>손님 탈락률</strong>입니다. 대부분의 파티에서는 10~15% 손님이 조기 퇴장하고 10%는 음료를 마시지 않을 수 있습니다. 계산기는 부족하지 않으면서도 엄청난 잉여를 남기지 않도록 보수적인 완충을 적용합니다. 이러한 조정을 이해하면 특정 그룹과 상황에 맞게 추정치를 미세 조정하는 데 도움이 됩니다. 구매할 때 항상 올림하세요. 개봉된 통은 반환할 수 없습니다. 작은 잉여가 파티 한복판에 음료가 떨어지는 것보다 항상 낫습니다.'
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
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
