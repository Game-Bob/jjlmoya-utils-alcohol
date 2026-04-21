import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'cocktail-balancer';
const title = '칵테일 밸런서: 사워 법칙';
const description = '칵테일의 달콤함과 신맛의 완벽한 균형을 계산합니다. 믹솔로지의 황금비를 마스터하세요.';

const ui: CocktailBalancerUI = {
  title: '칵테일 밸런서',
  presetsBtn: '레시피',
  saveBtn: '저장',
  resetBtn: '재설정',
  emptyStateTitle: '작업 대면이 비어 있습니다',
  emptyStateDescription: '칵테일 밸런스를 실시간으로 분석하려면 재료를 추가하세요.',
  addBtn: '재료 추가',
  addMoreBtn: '다른 재료 추가',
  flavorProfileTitle: '풍미 프로필',
  volLabel: '부피',
  sugarLabel: '설탕',
  colorLabel: '색상',
  sourLawTitle: '사워 법칙',
  acidDryLabel: '산 (드라이)',
  balanceLabel: '균형',
  sweetLabel: '달콤',
  aiSuggestionTitle: 'AI 제안',
  addIngredientTitle: '재료 추가',
  searchPlaceholder: '럼, 라임, 시럽 검색...',
  presetsTitle: '레시피 & 프리셋',
  savedSectionTitle: '내 저장됨',
  classicsSectionTitle: '클래식',
  confirmDeleteTitle: '모두 삭제하시겠습니까?',
  confirmDeleteText: '작업 대면에서 모든 재료가 제거됩니다. 이 작업은 실행 취소할 수 없습니다.',
  cancelBtn: '취소',
  deleteBtn: '삭제',
  verdictSpiritSeco: '스피릿 / 드라이',
  verdictSoloDulce: '스위트 온리 (올드 패션드)',
  verdictMuyAcido: '산성 과잉 / 매우 드라이',
  verdictAcido: '산성 / 신맛',
  verdictEquilibrado: '균형잡힌 (사워)',
  verdictDulce: '스위트 / 상용',
  verdictEmpalagoso: '너무 달콤한',
  fixAddBitters: '비터 누락',
  fixAddSugar: '산성 과잉',
  fixAddAcid: '너무 달콤함'
};

const faqTitle = '자주 묻는 질문';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "'사워 법칙'이란 무엇입니까?",
    answer: "믹솔로지의 황금비로 세 가지 요소의 균형을 맞춥니다: 강한 베이스 (스피릿), 신맛 (시트러스), 달콤함 (시럽). 클래식 레시피는 일반적으로 2:1:1 비율 (강함:신맛:달콤함)을 따르지만 강도와 밀도에 따라 달라집니다.",
  },
  {
    question: "희석이 칵테일 균형에 어떻게 영향을 미치나요?",
    answer: "얼음은 냉각할 뿐만 아니라 물을 추가(희석)하여 스피릿의 향기를 열고 산도와 단맛의 피크를 부드럽게 합니다. 셰이커에서 균형을 이룬 칵테일이 글래스에서 얼음으로 너무 오래 방치되면 불균형이 될 수 있습니다.",
  },
  {
    question: "내 집에서 만든 칵테일이 바의 칵테일 같지 않은 이유는 무엇입니까?",
    answer: "일반적으로 설탕과 시트러스의 pH 사이의 불균형으로 인한 것입니다. 레몬은 계절에 따라 산도가 다릅니다. 우리의 계산기는 사용된 주스의 양을 기반으로 정확한 시럽 양을 조정하는 데 도움이 됩니다.",
  },
  {
    question: "Brix 도수란 무엇이며 칵테일에서 왜 중요한가요?",
    answer: "Brix는 액체에 용해된 설탕의 양을 측정하는 척도입니다. 심플 시럽 (1:1)은 약 50°Brix입니다. 리치 시럽 (2:1)은 66°Brix를 초과합니다. Brix가 높을수록 부피당 더 많은 바디와 단맛을 제공합니다. 이를 알면 균형을 깨지 않고 레시피의 시럽을 교환할 수 있습니다.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "알코올 베이스 선택",
    text: "데이터베이스에서 주 스피릿 (진, 럼, 위스키)을 선택하여 그 바디와 알코올 기여도를 파악합니다.",
  },
  {
    name: "산성 에이전트 입력",
    text: "레모, 라임 또는 자몽 주스의 량을 추가합니다. 계산기가 혼합에 대한 pH 영향을 분석합니다.",
  },
  {
    name: "달콤한 성분 조정",
    text: "시럽 유형 (심플, 2:1, 아가베)을 입력하고 밸런스 인디케이터가 실시간으로 움직이는 것을 지켜봅니다.",
  },
  {
    name: "완벽한 서빙",
    text: "도구의 최종 판단을 검토합니다: 사워 비율, 희석 후 예상 ABV, 수정 제안. 신선한 얼음으로 서빙하고 맛에 따라 시트러스 또는 시럽을 미세 조정합니다.",
  },
];


const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: '분자 공학 및 액체 균형',
    level: 2
  },
  {
    type: 'paragraph',
    html: '직관이 수학을 만나는 디지털 실험실에 오신 것을 환영합니다. 이 도구는 단순한 레시피 책이 아닙니다. 칵테일의 분자 구조를 실시간으로 해체하고 분석하기 위해 설계된 <strong>고급 물리화학 시뮬레이터</strong>입니다. 시트러스의 한 방울, 스피릿의 한 측정, 시럽의 한 그램은 모두 불변의 화학 법칙에 따라 상호작용하여 음료가 걸작인지 실망스러운 실패인지를 결정합니다.'
  },
  {
    type: 'stats',
    items: [
      { label: '라임', value: '~6% 산', icon: 'mdi:fruit-citrus' },
      { label: '레몬', value: '~6% 산', icon: 'mdi:fruit-citrus' },
      { label: '자몽', value: '~1-2% 산', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: '산의 과학',
    icon: 'mdi:fruit-citrus',
    html: '산도는 단순한 맛이 아니라 균형잡힌 칵테일의 구조적 척추입니다. 적절한 산도가 없으면 음료는 평면적이고, 일차원적이며, 잊혀집니다. 우리의 알고리즘은 페르시안 라임의 정량적 산도와 유레카 레몬을 구별하며, 레시피를 입맛의 전체 밸런스 포인트만큼 이동할 수 있는 시트러스 pH의 계절적 변동을 고려합니다.'
  },
  {
    type: 'card',
    title: 'Brix 제어 (단맛)',
    icon: 'mdi:spoon-sugar',
    html: '칵테일의 바디와 텍스처는 전적으로 용해된 설탕에 따라 달라집니다. 심플 시럽 (1:1)은 리치 시럽 (2:1), 꿀 또는 용설란 넥타와는 매우 다르게 작동합니다. 각 감미료는 음료가 혀를 코팅하는 방식에 영향을 미치는 다른 Brix 도수와 점도를 가지고 있습니다. 우리의 계산기는 용해된 설탕의 정확한 그램을 계산하여 최종 입안감과 단맛 인식을 예측합니다.'
  },
  {
    type: 'card',
    title: '열역학 및 희석',
    icon: 'mdi:water-percent',
    html: '흔들린 칵테일은 얼음 온도, 흔드는 기술, 기간에 따라 25-40% 희석됩니다. 이 물의 추가는 결함이 아니라 향기를 열고 알코올 가장자리를 부드럽게 하는 필수 성분입니다. 우리의 계산기는 희석 후 최종 ABV를 추정하므로 정확히 의도된 강도와 맛 균형으로 음료를 설계할 수 있습니다.'
  },
  {
    type: 'title',
    text: '기본 비율을 넘어서',
    level: 2
  },
  {
    type: 'paragraph',
    html: '많은 바텐더들이 고전적인 2:1:1 규칙 (2부 스피릿, 1부 신맛, 1부 단맛)을 배우고 이를 보편적 진리로 취급합니다. 그러나 <strong>화학은 훨씬 더 세밀합니다</strong>. 시칠리아 레몬은 멕시코 라임과 다른 산도를 포함합니다. 꼬냑 같은 트리플 섹은 블루 큐라소와는 근본적으로 다르게 작동합니다. 같은 레시피가 한 주에는 완벽하게 균형잡혀 보이고 다음 주에는 극도로 산성으로 보일 수 있으며, 이는 단지 계절적인 과일 변동 때문입니다.'
  },
  {
    type: 'paragraph',
    html: '이 밸런서는 그러한 순진한 장벽을 뚫고 나갑니다. 특정 재료를 입력함으로써, 당신은 산도와 단맛 벡터를 동적으로 조정하여 당신의 창작물의 정확한 감각 지도를 제공하는 살아있는 데이터베이스를 참고합니다. 추측을 멈추고 세계 최고의 바의 바텐더들이 매 서비스마다 사용하는 것과 같은 과학적 엄격함으로 칵테일을 설계하기 시작하세요.'
  },
  {
    type: 'summary',
    title: '이 도구는 누구를 위한 것입니까?',
    items: [
      '전문 바텐더: 레시피를 표준화하고 재현 가능한 일관성으로 시그니처 메뉴를 만듭니다.',
      '홈 애호가: 추측을 멈추고 칵테일이 성공하거나 실패하는 이유를 이해하기 시작합니다.',
      '음료 개발자: 비용이 많이 드는 생산 실행 전에 새로운 맛 개념을 빠르게 프로토타입합니다.'
    ]
  },
  {
    type: 'diagnostic',
    title: '황금 구역',
    icon: 'mdi:star',
    variant: 'success',
    badge: '목표',
    html: '이것은 최종 목표입니다: 설탕이 산의 공격성을 중화하는 제어된 pH로, 기본 스피릿의 필수유와 향료 화합물을 가리지 않습니다. 이 정확한 균형은 불멸의 고전이 사는 곳입니다 — 다이키리, 마르가리타, 사이드카 — 맛의 화학의 기본 법칙을 따르기 때문에 수십 년을 견뎌낸 음료.'
  },
  {
    type: 'tip',
    title: '전문가 팁: 항상 신선한 시트러스 사용',
    html: '항상 마지막 순간에 시트러스를 짜세요. 레몬과 라임 주스는 빠르게 산화되어 짜낸 후 20-30분 내에 생생한 산도를 잃습니다. 진정으로 신선한 주스로 만든 칵테일은 항상 입맛에 밝기와 생동감이 있어서 어떤 병에 든 제품도 복제할 수 없습니다. 주스 수율을 최대화하려면 실온의 과일을 사용하세요.'
  }
];

const schemas: CocktailBalancerLocaleContent['schemas'] = [
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

export const content: CocktailBalancerLocaleContent = {
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
