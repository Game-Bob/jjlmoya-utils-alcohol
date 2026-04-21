import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'fortified-wine-builder';
const title = '강화 와인 & 베르무트 빌더: 피어슨 스퀘어 계산기';
const description = '목표 알코올 도수에 도달하기 위해 와인에 얼마나 많은 증류주를 첨가해야 하는지 정확히 계산하세요. 피어슨 스퀘어 방법으로 완벽한 베르무트, 포트, 셰리를 만들어 보세요.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: '무엇을 만드시겠습니까?',
  intentionVermouth: '베르무트',
  intentionPort: '포트 와인',
  intentionSherry: '셰리',
  intentionCustom: '사용자 지정',
  modeALabel: '보유한 와인 기준',
  modeBLabel: '목표 최종 용량',
  wineSection: '베이스 와인',
  wineVolumeLabel: '와인 용량 (L)',
  wineAbvLabel: '와인 알코올 도수 (%)',
  spiritSection: '강화 증류주',
  spiritAbvLabel: '증류주 알코올 도수 (%)',
  brandyPreset: '브랜디 (38°)',
  neutralPreset: '중성 (96°)',
  aguardientePreset: '아과르디엔테 (42°)',
  targetAbvLabel: '목표 알코올 도수 (%)',
  targetVolumeLabel: '목표 총 용량 (L)',
  resultsTitle: '나의 레시피',
  addLabel: '추가',
  finalVolumeLabel: '최종 용량',
  bottlesSection: '필요한 병 수',
  copyBtn: '레시피 복사',
  copiedBtn: '복사됨!',
  pearsonTitle: '피어슨 스퀘어',
  wineCornerLabel: '와인',
  spiritCornerLabel: '증류주',
  emptyState: '피어슨 스퀘어를 보려면 값을 입력하세요',
  errorAbv: '증류주 알코올 도수는 목표보다 높아야 하고, 목표는 와인 알코올 도수보다 높아야 합니다.',
  errorMode: '계산하려면 유효한 용량을 입력하세요.',
};

const faqTitle = '자주 묻는 질문';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: '피어슨 스퀘어 방법이란 무엇인가요?',
    answer: '피어슨 스퀘어는 와인 제조에서 블렌딩 비율을 계산하는 데 사용되는 간단한 그래픽 방법입니다. 목표 알코올 도수를 정사각형 중앙에 배치하고, 와인 알코올 도수를 왼쪽 위, 증류주 알코올 도수를 왼쪽 아래에 배치합니다. 대각선 차이가 필요한 각 액체의 비례량을 제공합니다.',
  },
  {
    question: '베르무트의 일반적인 알코올 도수는 얼마인가요?',
    answer: '전통적인 베르무트의 알코올 도수는 15%에서 18% 사이입니다. 드라이(프랑스 스타일) 베르무트는 일반적으로 낮은 편(15~16%)이고, 스위트(이탈리아 스타일) 베르무트는 종종 16~18%입니다. 로제 베르무트는 그 중간에 위치합니다.',
  },
  {
    question: '베르무트에 어떤 베이스 와인을 사용해야 하나요?',
    answer: '전통적으로 알코올 도수 10~12%의 중성적이고 드라이한 화이트 와인이 가장 적합합니다. 와인은 뼈대를 제공하지만, 허브와 식물성 재료로 향을 낼 것이므로 비싼 와인은 필요하지 않습니다 — 깨끗하고 산미 있는 베이스가 이상적입니다.',
  },
  {
    question: '브랜디 대신 중성 알코올을 사용할 수 있나요?',
    answer: '네. 중성 알코올(96%)은 최대한의 제어와 더 깨끗한 풍미 프로필을 제공합니다. 브랜디는 자체적인 특성(오크, 건과일, 바닐라)을 더하는데, 이는 스타일에 따라 바람직할 수도 그렇지 않을 수도 있습니다. 포트 와인은 전통적으로 포도 브랜디를 사용하고, 일부 베르무트는 중성 증류주를 사용합니다.',
  },
  {
    question: '강화는 어떻게 와인을 보존하나요?',
    answer: '와인의 알코올 도수가 약 15~16%를 초과하면 효모에 의한 발효가 억제됩니다 — 효모는 고알코올 환경에서 생존할 수 없습니다. 이것이 강화 와인이 일반 와인보다 훨씬 긴 유통기한을 갖는 이유입니다. 알코올은 효모와 세균 모두에 대한 천연 방부제 역할을 합니다.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: '스타일 선택', text: '베르무트, 포트 와인, 셰리 또는 사용자 지정을 선택하여 권장 목표 알코올 도수 범위를 자동으로 채웁니다.' },
  { name: '와인 데이터 입력', text: '베이스 와인의 용량(또는 모드 B의 목표 최종 용량)과 현재 알코올 도수를 입력합니다.' },
  { name: '증류주 설정', text: '증류주 프리셋을 선택하거나 사용자 지정 알코올 도수를 입력합니다. 피어슨 스퀘어가 실시간으로 업데이트됩니다.' },
  { name: '레시피 확인', text: '계산기는 추가할 증류주의 정확한 밀리리터 수와 최종 용량을 표시합니다.' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: '피어슨 스퀘어: 고대의 수학, 완벽한 와인', level: 2 },
  { type: 'paragraph', html: '<strong>피어슨 스퀘어</strong>는 와인 양조 수학에서 가장 오래되고 우아한 도구 중 하나입니다. 19세기에 개발된 이 방법은 전문가든 아마추어든 모든 와인 생산자가 빼기만으로 블렌딩 비율을 계산할 수 있게 해줍니다. 저희 도구는 이 시각적 방법을 디지털화하고 실시간 피드백을 추가하여 계산에 덜 소비하고 제작에 더 많은 시간을 쓸 수 있게 합니다.' },
  { type: 'stats', items: [{ label: '베르무트', value: '15~18% vol.', icon: 'mdi:glass-cocktail' }, { label: '포트 와인', value: '18~20% vol.', icon: 'mdi:bottle-wine' }, { label: '셰리', value: '15~17% vol.', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: '왜 18%에서 강화하나요?', icon: 'mdi:shield-check', html: '약 15%를 초과하면 <em>Saccharomyces cerevisiae</em>(주요 와인 효모)가 억제됩니다. 18%가 되면 발효가 완전히 중단됩니다. 이것이 포트 와인이 잔류 당분을 보유하는 이유입니다: 발효 중간에 증류주를 추가하여 모든 당분이 소비되기 전에 효모를 사멸시킵니다.' },
  { type: 'tip', title: '프로 팁: 20°C에서 측정', html: '알코올 밀도는 온도에 따라 변합니다. 공식 알코올 도수 측정값은 20°C에서 보정됩니다. 증류주나 와인이 크게 더 따뜻하거나 차가운 경우 보정 계수를 적용하세요: 20°C 이하에서는 °C당 약 +0.04%, 이상에서는 −0.04%.' },
  { type: 'title', text: '크래프트 베르무트의 르네상스', level: 2 },
  { type: 'paragraph', html: '남부 유럽은 크래프트 베르무트 르네상스를 경험하고 있습니다. 바르셀로나, 발렌시아, 산 세바스티안은 <em>la hora del vermut</em>를 문화적 제도로 되찾았고, 스페인, 이탈리아, 프랑스의 소규모 생산자들이 놀라운 제품을 병입하고 있습니다. 이로 인해 자신의 야망에 걸맞은 기술 도구를 원하는 새로운 세대의 홈 생산자가 탄생했습니다.' },
  { type: 'summary', title: '이 도구는 누구를 위한 것인가요?', items: ['홈 와인 메이커: 추측 대신 정밀함으로 수확물을 강화하세요.', '크래프트 베르무트 생산자: 전체 배치로 확장하기 전에 새로운 ABV 목표를 프로토타입하세요.', '증류주 교육자: 워크숍에서 피어슨 스퀘어 방법을 시각적으로 시연하세요.'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
