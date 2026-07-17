import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'beer-cooler';
const title = '뉴턴의 냉각 법칙을 이용한 맥주 냉각 계산기';
const description = '실제 열역학으로 계산하세요 - 뉴턴의 냉각 법칙 - 맥주가 냉장고나 냉동고에서 완벽한 제공 온도에 도달하는 데 정확히 얼마나 오래 걸리는지 알아보세요.';

const ui: BeerCoolerUI = {
  step1Title: '무엇을 냉각하고 있나요?',
  canLabel: '캔',
  aluminumLabel: '알루미늄',
  bottleLabel: '병',
  glassLabel: '유리',
  step2Title: '어디에 놓나요?',
  fridgeLabel: '냉장고',
  freezerLabel: '냉동고',
  step3Title: '온도 미세 조정',
  initialTempLabel: '초기 온도',
  targetTempLabel: '목표 온도',
  glacialLabel: '극저온',
  perfectLabel: '완벽함',
  bodegaLabel: '보데가',
  readyTitle: '준비 완료',
  readyDescription: '용기와 위치를 선택하여 계산합니다.',
  estimatedTimeLabel: '예상 시간',
  methodLabel: '방법',
  containerLabel: '용기',
  alreadyColdLabel: '이미 차가워요!',
  neverColdLabel: '절대 차가워지지 않음'
};

const faqTitle = '자주 묻는 질문';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: '이 도구는 냉각 시간을 어떻게 계산하나요?',
    answer: '뉴턴의 냉각 법칙을 적용합니다: T(t) = T_env + (T₀ - T_env) × e^(-kt). 상수 k는 용기의 재료와 냉각 매질에 따라 다릅니다. 냉장고의 알루미늄 캔은 냉동고의 유리 병과 매우 다른 k값을 가집니다. 여기서 사용된 값은 각 조합에 대해 실제 실험으로 보정되었습니다.',
  },
  {
    question: '소금을 넣은 젖은 종이 타올 요령이 정말 작동하나요?',
    answer: '네, 매우 눈에 띕니다. 용기를 소금이 들어있는 젖은 종이 타올로 감싸면 두 가지 이유로 냉각이 가속됩니다. 물의 증발로 추가 열을 제거하고(증발 냉각), 소금이 물의 어는점을 낮춰서 젖은 접촉을 더 오래 유지합니다. 냉동고에 마른 캔을 놓는 것과 비교하면 처음 몇 분 동안 추가로 2-4°C 하강을 얻을 수 있습니다.',
  },
  {
    question: '맥주 스타일별 이상적인 제공 온도는 무엇인가요?',
    answer: '스타일에 따라 다릅니다. 라거와 필스너는 3-7°C가 최적입니다. IPA와 페일 에일은 7-10°C에서 빛납니다. 스타우트, 포터, 복잡한 에일은 더 따뜻하게 12-14°C에서 제공해야 하므로 커피, 초콜릿, 견과류 같은 향료 화합물이 완전히 표현될 수 있습니다.',
  },
  {
    question: '냉동고에 두면 맥주가 폭발할 수 있나요?',
    answer: '예. 알코올과 용해된 설탕은 맥주의 어는점을 순수한 물보다 낮춥니다. 표준 5% 라거는 약 -3°C에서 얼어붙습니다. 물이 결정화되면서 부피가 증가하고 용해된 CO2가 내부 압력을 높여서 용기가 터질 때까지 계속됩니다. 냉동고에 60분 이상 - 특히 유리 병 - 은 정말 위험한 구역입니다. 이 계산기를 사용해서 피해야 합니다.',
  },
  {
    question: '냉각이 너무 빠르면 맥주가 "탈 수" 있나요?',
    answer: '아니요. 맥주를 망치는 "열 충격" 신화는 거짓입니다. 실제로 영향을 줄 수 있는 것은 반복적인 동결과 해동입니다. 이것은 단백질을 파괴하고 액체를 흐릿하게 만듭니다. 또는 직접 UV 빛 노출입니다. 냉동고 또는 얼음물에서의 빠른 냉각은 맛을 해치지 않습니다.',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: '용기 선택',
    text: '알루미늄 캔 또는 유리 병 중에서 선택하세요. 재료는 열 전달 속도에 극적으로 영향을 미칩니다.',
  },
  {
    name: '냉각 방법 선택',
    text: '기존 냉장고(4°C) 또는 초고속 프로세스용 냉동고(-18°C)를 사용 중인지 표시합니다.',
  },
  {
    name: '온도 조정',
    text: '음료의 현재 온도(실온)와 원하는 목표 냉각 온도를 정의합니다.',
  },
];


const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: '냉감 및 열역학의 과학',
    level: 2
  },
  {
    type: 'paragraph',
    html: '왜 캔이 병보다 먼저 식을까요? 마법인가요? 아니요, 이것은 실제 <strong>뉴턴의 냉각 법칙</strong>입니다. 이 도구는 음료가 열역학적 완벽성에 도달하는 정확한 순간을 수학적으로 계산합니다. 모든 재료, 모든 환경, 모든 시작 온도는 물리학자와 엔지니어가 산업 시스템의 열 전달을 모델링하는 데 사용하는 동일한 미분 방정식으로 들어갑니다.'
  },
  {
    type: 'diagnostic',
    title: '마스터 공식',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: '물리학',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). 이 미분 방정식은 물체의 온도가 그 온도와 환경 온도의 차이에 비례하여 어떻게 변하는지 설명합니다. 상수 k는 용기의 재료와 형태에 따라 다르며, 이것이 캔이 같은 부피의 병보다 더 빨리 식는 이유입니다.'
  },
  {
    type: 'title',
    text: '재료 전쟁: 알루미늄 대 유리',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>알루미늄</strong>의 열 전도율은 약 205 W/(m·K)이지만 <strong>유리</strong>는 겨우 0.8 W/(m·K)에 도달합니다. 금속은 매우 빠르게 냉기를 전달하여 응급 상황에서 이상적인 용기입니다. 하지만 유리는 차가워진 후 더 나은 단열성을 제공하여 소비 중에 이상적인 온도를 더 오래 유지합니다. 이 절충점이 서로 다른 맥주 문화가 각 재료에 대해 다른 선호를 발전시킨 이유입니다.'
  },
  {
    type: 'stats',
    items: [
      { label: '필스너 & 라거', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA & 페일 에일', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: '스타우트 & 포터', value: '12°C - 14°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: '냉동고 위험 구역',
    icon: 'mdi:snowflake-alert',
    html: '알코올과 용해된 설탕 때문에 맥주는 0°C 아래에서 얼어붙습니다. 표준 5% 라거는 약 -3°C에서 얼어붙습니다. 물이 결정화되면서 부피가 증가하고 CO2 압력이 동시에 상승합니다. 결과는 폭력적으로 터질 수 있는 용기입니다. 타이머를 설정하지 않고 냉동고에 맥주를 45분 이상 두지 마세요.'
  },
  {
    type: 'proscons',
    title: '긴급 냉각 요령',
    items: [
      { pro: '젖은 종이 요령: 젖은 종이 타올로 캔을 싸서 냉동합니다. 증발이 냉각을 가속합니다.', con: '' },
      { pro: '북극 염수: 양동이에 물, 얼음, 소금 2큰술을 넣어 -5°C 염수에 도달합니다.', con: '' },
      { pro: '회전 방법: 얼음물에서 병을 회전하여 대류를 강제하고 냉각 시간을 단축합니다.', con: '' },
      { pro: '', con: '타이머 없이 캔을 냉동고 선반에 직접 놓지 마세요. 터진 캔은 지저분하고 위험합니다.' }
    ]
  },
  {
    type: 'tip',
    title: '프로 팁: 잔을 미리 냉각',
    html: '맥주를 따르는 잔은 상당한 열용량을 가지고 있습니다. 따뜻한 잔은 완벽하게 차가운 맥주의 온도를 접촉 시 2-3°C 높일 수 있습니다. 따르기 전에 서빙 잔을 냉동고에 5분 넣거나 냉수로 헹굽니다. 이 간단한 단계는 맥주가 정확히 의도한 맛을 내는 시간을 연장합니다.'
  },
  {
    type: 'title',
    text: '냉각 상수 이해',
    level: 2
  },
  {
    type: 'paragraph',
    html: '뉴턴 방정식의 냉각 상수 k는 고정된 보편적 가치가 아닙니다. 이것은 각 특정 용기와 매질의 경험적 속성입니다. 얇은 알루미늄 캔은 얼음물에서 조용한 냉장고 공기의 두꺼운 유리 병과 극적으로 다른 k를 가집니다. 우리 계산기는 각 용기 유형에 대해 실제 실험으로 보정된 측정 값을 사용하여 전형적인 가정용 냉각 시나리오에 대해 정확도가 몇 분 이내입니다.'
  }
];

const schemas: BeerCoolerLocaleContent['schemas'] = [
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

export const content: BeerCoolerLocaleContent = {
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
