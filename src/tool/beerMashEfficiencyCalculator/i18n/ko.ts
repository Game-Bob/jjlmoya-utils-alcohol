import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'beer-mash-efficiency-calculator';
const title = '맥주 당화 효율 계산기';
const description = '홈브루잉 및 수제 맥주 레시피를 위한 당화 효율 퍼센트, 당분 추출량, 예상 원맥즙 비중을 계산합니다.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: '미터법',
  stagePreboil: '끓이기 전 맥즙',
  stagePostboil: '끓인 후 맥즙',
  unitImperial: '야드파운드법',
  labels: {
    grainWeight: '총 몰트 무게',
    grainType: '몰트 잠재 비중 프리셋',
    customPotential: '사용자 지정 잠재 비중 (SG)',
    wortVolume: '끓이기 전 맥즙 부피',
    measuredSg: '측정된 비중 (SG)',
    unitSystem: '단위계',
    sampleTemp: '측정 시료 온도',
    calibTemp: '보정 온도',
    stageLabel: '양조 단계',
    presets: '주요 몰트 잠재 비중',
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
    pilsner: '필스너 몰트 (1.037 / 37 PPG)',
    pale_ale: '페일 에일 몰트 (1.038 / 38 PPG)',
    vienna: '비엔나 몰트 (1.036 / 36 PPG)',
    munich: '뮌헨 몰트 (1.035 / 35 PPG)',
    wheat: '밀 몰트 (1.038 / 38 PPG)',
    caramel_30: '카라멜 몰트 30L (1.034 / 34 PPG)',
    caramel_60: '카라멜 몰트 60L (1.034 / 34 PPG)',
    chocolate: '초콜릿 몰트 (1.034 / 34 PPG)',
    custom: '사용자 지정 잠재값...',
  },
  results: {
    efficiencyTitle: '당화 효율',
    efficiencyBadge: '계산 상태',
    correctedGravity: '온도 보정 비중',
    measuredGravity: '측정된 비중',
    expectedGravity75: '75% 효율 목표 SG',
    expectedGravity80: '80% 효율 목표 SG',
    expectedGravity85: '85% 효율 목표 SG',
    potentialPoints: '이론상 총 추출 포인트',
    extractedPoints: '실제 추출 포인트',
    wortBrix: '추정 Brix',
  },
  statusMessages: {
    excellent: '우수한 추출 효율 (82%+)',
    good: '양호한 추출 효율 (74% - 81%)',
    average: '평균 추출 효율 (65% - 73%)',
    poor: '낮은 추출 효율 (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: '당화조 추출 과정',
    wortLevel: '맥즙 수위',
    sugarExtraction: '당분 추출',
  },
};

const faq = [
  {
    question: '맥주 당화 효율이란 무엇인가요?',
    answer: '당화 효율은 몰트에서 추출할 수 있는 이론적 당분 중 실제 맥즙으로 추출된 당분의 비율을 나타냅니다.',
  },
  {
    question: '적절한 당화 효율은 얼마인가요?',
    answer: '홈브루잉 기준 70%에서 80% 사이가 가장 일반적이고 적절합니다.',
  },
  {
    question: '당화 효율은 어떻게 계산하나요?',
    answer: '실제 추출된 비중 포인트와 몰트 레시피의 이론상 최대 비중 포인트를 비교하여 계산합니다.',
  },
  {
    question: '낮은 당화 효율을 개선하는 방법은?',
    answer: '몰트 분쇄도 조정, 당화 pH(5.2 ~ 5.6) 유지, 골고루 린싱하는 스파징 작업이 도움을 줍니다.',
  },
  {
    question: '당화 효율과 전체 양조장 효율의 차이는?',
    answer: '당화 효율은 끓이기 전 당화조에서의 추출만을 측정하며, 전체 효율은 끓임 및 발효조 손실을 포함합니다.',
  },
  {
    question: '물과 몰트의 비율이 당화에 미치는 영향은?',
    answer: '묽은 당화(kg당 3.5 ~ 4.0L)는 효소 이동성을 높여 당분 세척을 원활하게 만듭니다.',
  }
];

const howTo = [
  {
    name: '단위계 선택',
    text: '미터법 또는 야드파운드법을 선택합니다.',
  },
  {
    name: '몰트 무게 및 비중 입력',
    text: '몰트 종류를 선택하거나 사용자 지정 비중을 입력합니다.',
  },
  {
    name: '맥즙 부피와 측정 비중 입력',
    text: '끓이기 전 수집한 맥즙 부피와 비중계 측정값을 입력합니다.',
  },
  {
    name: '효율 및 목표 비중 확인',
    text: '계산된 효율과 75%, 80%, 85% 목표 비중을 비교합니다.',
  },
  {
    name: '다음 양조를 위한 레시피 조정',
    text: '측정된 기준 효율을 바탕으로 향후 몰트 양을 정밀하게 조정합니다.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '당화 효율에 관한 자주 묻는 질문',
  bibliographyTitle: '참고 문헌 및 공식',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: '맥주 당화 효율의 이해와 활용',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '당화 효율은 맥아 전분이 발효 가능한 당분으로 전환되어 맥즙에 수집되는 효율을 측정합니다. 정밀한 레시피 설계의 기초가 되는 지표입니다.',
    },
    {
      type: 'table',
      headers: ['매개변수', '공식', '설명'],
      rows: [
        ['잠재 포인트', '무게 x PPG', '이론적 최대값'],
        ['추출 포인트', '부피 x SG 포인트', '맥즙 내 실제 포인트'],
        ['당화 효율', '(추출 / 잠재) x 100', '실제 추출 비율'],
        ['맥즙 Brix', '-668.82 + 11.536 x SG x 100...', '굴절계 환산값']
      ],
    },
    {
      type: 'title',
      text: '당물 추출률에 영향을 주는 요인',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '분쇄도: 미세 분쇄일수록 표면적이 늘어나지만 여과가 어려워질 수 있습니다.',
        '온도와 pH: 최적 효소 활성 범위는 64°C - 68°C, pH 5.2 - 5.6입니다.',
        '스파징 기술: 연속 또는 단계적 물 공급이 당분 세척에 영향을 줍니다.',
        '물-몰트 비율: 묽은 당화는 효소 이동성을 촉진합니다.',
        '층 깊이: 30 cm ~ 45 cm 사이에서 유체 역학이 최적화됩니다.'
      ],
    },
    {
      type: 'tip',
      title: '신규 레시피 설계 시 75%를 기본으로 설정',
      html: '새로운 레시피를 작성할 때는 75% 당화 효율을 기준점으로 삼는 것이 안정적입니다.',
    },
    {
      type: 'title',
      text: '측정 결과에 따른 양조 조정',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '끓이기 전 측정 비중이 목표보다 낮으면 끓이는 시간을 늘려 맥즙을 농축하거나 건조 맥아 엑기스를 추가할 수 있습니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '당화조 효율과 전체 양조 시스템 효율의 구분',
      html: '당화조 세척 효율과 홉 침전물 손실을 포함한 전체 효율을 혼동하지 않도록 유의하세요.',
    },
  ],
};
