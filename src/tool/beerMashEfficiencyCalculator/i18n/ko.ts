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
  units: { weightKg: 'kg', weightLb: 'lb', volumeL: 'L', volumeGal: 'gal', sg: 'SG', brix: 'Brix', percent: '%' },
  grainPresets: {
    pilsner: '필스너 몰트 (1.037 / 37 PPG)',
    pale_ale: '페일 에일 몰트 (1.038 / 38 PPG)',
    vienna: '비엔나 몰트 (1.036 / 36 PPG)',
    munich: '뮌헨 몰트 (1.035 / 35 PPG)',
    wheat: '밀 몰트 (1.038 / 38 PPG)',
    caramel_30: '카라멜 30L (1.034 / 34 PPG)',
    caramel_60: '카라멜 60L (1.034 / 34 PPG)',
    chocolate: '초콜릿 몰트 (1.034 / 34 PPG)',
    custom: '사용자 지정 잠재 비중...',
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
  kettleVisual: { mashTunTitle: '당화조 당분 추출 시각화', wortLevel: '맥즙 수위', sugarExtraction: '당분 추출 상태' },
};

const faq = [
  { question: '맥주 당화 효율이란 무엇인가요?', answer: '당화 효율은 몰트에서 추출할 수 있는 이론적 당분 중 실제 맥즙으로 추출된 당분의 비율을 나타냅니다.' },
  { question: '적절한 당화 효율은 얼마인가요?', answer: '홈브루잉 기준 70%에서 80% 사이가 가장 일반적이고 적절합니다.' },
];
const howTo = [
  { name: '단위계 선택', text: '미터법 또는 야드파운드법을 선택합니다.' },
  { name: '몰트 무게 및 비중 입력', text: '몰트 무게와 끓이기 전 맥즙 비중을 입력합니다.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s, idx) => ({ '@type': 'HowToStep', position: idx + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'ko' };

export const content: ToolLocaleContent<Record<string, any>> = {
  slug, title, description, ui, faqTitle: '당화 효율 자주 묻는 질문', bibliographyTitle: '참고자료', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography,
  seo: [
    { type: 'title', text: '맥주 당화 효율의 이해', level: 2 },
    { type: 'paragraph', html: '당화 효율을 이해하면 홈브루잉 레시피를 정밀하게 설계할 수 있습니다.' }
  ]
};
