import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'jello-shot-lab';
const title = '젤로 샷 계산기: 완벽한 알코올 젤라틴 비율 계산기';
const description = '실제로 굳는 젤로 샷을 위해 술과 젤라틴을 정확히 얼마나 사용해야 하는지 계산하세요. 모든 알코올 도수에 대한 과학적 비율로 물처럼 흐르거나 고무 같은 실패를 방지하세요.';

const ui: JelloShotLabUI = {
  title: '젤로 샷 계산기',
  description: '샷이 매번 굳도록 젤라틴, 물, 알코올의 완벽한 비율을 얻으세요.',
  liquorBaseLabel: '술 종류',
  liquorAbvLabel: '알코올 도수 (%)',
  gelatinLabel: '젤라틴 종류',
  diluentLabel: '물 베이스',
  calculateBtn: '계산하기',
  modePrecision: '정밀 모드',
  modeIntensity: '샷 강도',
  modeIntensityLight: '가벼움 (쉬움)',
  modeIntensityBalanced: '표준',
  modeIntensityLimit: '최대 (강함)',
  partyPlannerTitle: '파티 플래너',
  partyPlannerGuestLabel: '게스트',
  partyPlannerShotsPerGuest: '1인당 샷 수',
  multiLayerTitle: '멀티 레이어',
  howToTitle: '만드는 방법',
  proTipsTitle: '전문가 팁',
  resultsTitle: '나의 레시피',
  totalVolumeLabel: '총 용량',
  boilingWaterLabel: '뜨거운 물',
  alcoholVolumeLabel: '술',
  packetsNeededLabel: '젤라틴 봉지',
  chillingTimeLabel: '냉각 시간',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: '봉지',
  modeParty: '파티 모드',
  modeRecipe: '레시피 모드',
};

const faqTitle = '자주 묻는 질문';
const bibliographyTitle = '출처 및 참고문헌';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: '고도수 알코올이 왜 젤로 샷이 굳는 것을 방해하나요?',
    answer: '에탄올은 젤라틴의 삼중 나선 단백질 구조를 유지하는 수소 결합을 방해합니다. 술이 총 부피의 약 35%를 초과하면 단백질 매트릭스가 안정적인 네트워크를 형성할 수 없어 샷이 액체 상태로 유지됩니다. 술의 ABV가 높을수록 이 한계에 도달하기 전에 추가할 수 있는 양이 줄어듭니다.',
  },
  {
    question: '젤로 샷이 굳지 않기 전 최대 알코올 비율은 얼마인가요?',
    answer: '안전한 상한선은 총 액체 부피의 약 30~35%가 순수한 술(40% ABV 기준)입니다. 96% 중성 주정의 경우 그 한계는 총 부피의 약 15~18%로 낮아집니다. 계산기는 술의 ABV를 고려하여 응고 임계값을 절대 초과하지 않도록 합니다.',
  },
  {
    question: '어떤 술을 사용하는지 중요한가요? 보드카, 럼, 테킬라?',
    answer: '중요한 것은 종류가 아닌 ABV입니다. 40% 보드카와 40% 럼은 젤라틴 매트릭스에서 동일하게 작동합니다. 그러나 당분이 높은 술(일부 럼이나 리큐어 등)은 젤라틴 네트워크의 수소 결합을 두고 에탄올과 경쟁하는 설탕 덕분에 식감을 약간 개선할 수 있습니다.',
  },
  {
    question: '젤로 샷은 냉장고에서 얼마나 보관할 수 있나요?',
    answer: '제대로 만든 젤로 샷은 랩으로 덮어 냉장고에서 3~5일 보관할 수 있습니다. 높은 알코올 함량이 천연 방부제 역할을 합니다. 젤라틴이 부드러워지고 박테리아가 번식할 수 있으므로 실온에 2시간 이상 두지 마세요.',
  },
  {
    question: '젤로 샷을 더 단단하게 또는 부드럽게 만들 수 있나요?',
    answer: '네. 컵에서 깨끗하게 빠져나오는 더 단단한 샷을 위해 젤라틴을 더 많이(또는 반 봉지 추가) 사용하세요. 부드럽고 흔들리는 식감을 위해 약간 덜 사용하세요. 입안에서 녹는 식감을 원한다면 젤라틴을 한천으로 절대 대체하지 마세요. 한천은 더 단단하게 굳고 더 높은 온도에서 녹습니다.',
  },
  {
    question: '냉각을 빠르게 하려고 젤로 샷을 냉동할 수 있나요?',
    answer: '아니요. 냉동하면 젤라틴 네트워크가 깨져 녹았을 때 물기 많고 알갱이 같은 식감이 됩니다. 항상 최소 4시간 냉장 보관하세요. 파티를 위해서는 전날 만드세요. 8시간 이상이면 최고의 식감을 얻을 수 있습니다.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: '술 선택하기', text: '술의 ABV를 입력하고 원하는 샷 강도를 선택하세요. 계산기가 젤라틴이 담을 수 있는 최대 술의 양을 보여줍니다.' },
  { name: '젤라틴 섞기', text: '계산된 양의 끓는 물을 그릇에 붓습니다. 젤라틴 파우더를 추가하고 완전히 녹을 때까지 2분 동안 세차게 저어줍니다. 아직 알코올을 추가하지 마세요.' },
  { name: '술 추가하기', text: '젤라틴 혼합물을 5~10분간 식혀 따뜻하지만 뜨겁지 않은 상태(50°C 이하)로 만들어 주세요. 술을 추가하고 기포가 생기지 않도록 부드럽게 저어줍니다.' },
  { name: '붓고 냉장하기', text: '플라스틱 컵, 실리콘 몰드 또는 작은 샷 글라스에 붓습니다. 최소 4시간 냉장하세요. 하룻밤이 이상적입니다. 냉동하지 마세요.' },
];

const bibliography: JelloShotLabLocaleContent['bibliography'] = [
  { name: '젤라틴 — 위키피디아', url: 'https://en.wikipedia.org/wiki/Gelatin' },
  { name: 'Jello Shot — 위키피디아', url: 'https://en.wikipedia.org/wiki/Jello_shot' },
  { name: 'McGee, H. — On Food and Cooking: The Science and Lore of the Kitchen (Scribner, 2004)', url: 'https://www.simonandschuster.com/books/On-Food-and-Cooking/Harold-McGee/9780684800011' },
  { name: 'The Food Lab: Better Home Cooking Through Science — J. Kenji López-Alt (Norton, 2015)', url: 'https://www.seriouseats.com/the-food-lab-better-home-cooking-through-science' },
];

const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: '완벽한 젤로 샷 뒤에 숨겨진 화학', level: 2 },
  {
    type: 'paragraph',
    html: '젤로 샷은 단순히 알코올을 넣은 향미 젤라틴이 아닙니다. 단백질 폴리머, 물, 에탄올이 수소 결합을 두고 경쟁하는 <strong>섬세한 콜로이드 현탁액</strong>입니다. 비율이 잘못되면 달콤한 액체 웅덩이나 테이블에서 튕겨지는 고무 원반이 됩니다. 올바르면 컵에서 하나의 깔끔한 동작으로 미끄러져 나오는 완벽하게 흔들리는 샷을 얻을 수 있습니다.',
  },
  {
    type: 'stats',
    items: [
      { label: '가벼움 (쉬움)', value: '~30% 술', icon: 'mdi:emoticon-happy-outline' },
      { label: '표준', value: '~45% 술', icon: 'mdi:flask-outline' },
      { label: '최대', value: '~55% 술', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: '블룸 강도란 무엇인가요?',
    icon: 'mdi:molecule',
    html: '블룸은 젤라틴의 겔화 강도를 측정하며 일반적으로 50에서 300 블룸 사이입니다. 슈퍼마켓의 판 젤라틴은 보통 150~200 블룸입니다. 블룸이 높을수록 같은 양의 파우더로 더 단단한 겔이 만들어지므로, 굳지 않기 전에 약간 더 많은 알코올을 견딜 수 있습니다. 표준 젤라틴 파우더 봉지(7g)는 약 240ml의 액체에 맞게 조정되어 있습니다.',
  },
  {
    type: 'card',
    title: '에탄올의 한계',
    icon: 'mdi:alert-circle-outline',
    html: '에탄올은 콜라겐의 아미노산 사슬에 있는 수소 결합 부위를 두고 물과 경쟁합니다. 에탄올이 그 부위를 너무 많이 차지하면 단백질이 젤라틴에 구조를 주는 안정적인 삼중 나선으로 접힐 수 없습니다. 실질적인 한계는 대략 <strong>40% 술 1부에 물 1부</strong>이며, 그 이상이면 얼마나 기다려도 샷이 굳지 않습니다.',
  },
  {
    type: 'tip',
    title: '끓는 젤라틴에 절대 알코올을 추가하지 마세요',
    html: '알코올은 78°C 이상에서 빠르게 증발합니다. 술을 넣기 전에 항상 녹인 젤라틴이 50°C 이하로 식을 때까지 기다리세요. 이 단 하나의 단계가 다른 어떤 실수보다 더 많은 젤로 샷 실패의 원인입니다.',
  },
  { type: 'title', text: '흔한 실패 문제 해결', level: 2 },
  {
    type: 'proscons',
    title: '증상과 해결책',
    items: [
      { pro: '4시간 후에도 샷이 액체 → 알코올 과다 또는 비율 초과. 술 양을 줄이세요.', con: '샷에서 알코올 맛이 나지 않음 → 너무 뜨거운 액체에 술을 추가함. 먼저 식히세요.' },
      { pro: '샷이 너무 고무 같음 → 젤라틴 과다. 다음번에 반 봉지 줄이세요.', con: '샷이 흐림 → 섞는 동안 기포가 갇혔음. 부드럽게 저어주고 붓기 전에 잠시 두세요.' },
      { pro: '샷의 식감이 알갱이 같음 → 젤라틴이 완전히 녹지 않음. 뜨거운 물에서 더 오래 저으세요.', con: '8시간 후에도 샷이 굳지 않음 → 에탄올 한계 초과. 술 양을 줄이거나 도수가 낮은 술 사용.' },
    ],
  },
  {
    type: 'summary',
    title: '이 도구는 누구를 위한 건가요?',
    items: [
      '파티 주최자: 구매 전 필요한 봉지 수와 술의 양을 정확히 계산하세요.',
      '바텐더: 매번 일관된 결과로 대량 생산까지 확장하세요.',
      '홈 쿡: 가장 흔한 실패(물처럼 흐르는 샷, 고무 같은 식감, 알코올 맛 없음)를 피하세요.',
    ],
  },
];

const schemas: JelloShotLabLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliographyTitle, bibliography, howTo, schemas };
