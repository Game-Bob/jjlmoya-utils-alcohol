import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AbvDilutionCalculatorUI } from '../ui';

const slug = 'abv-dilution-calculator';
const title = '알코올 희석 및 프루프 계산기';
const description = '증류주의 알코올 도수를 낮추기 위해 넣을 물의 양을 계산합니다. 최종 부피, 순수 알코올, 희석 비율을 확인할 수 있습니다.';
const ui: AbvDilutionCalculatorUI = {
  unitLabel: '부피 단위', metricUnit: '미터법 ml', imperialUnit: '야드파운드법 fl oz', strengthLabel: '도수 단위', abvUnit: '알코올 퍼센트', proofUnit: '미국 프루프', presetLabel: '빠른 시나리오', spiritPresetLabel: '증류주 750 ml', liqueurPresetLabel: '리큐르 700 ml', cocktailPresetLabel: '배치 500 ml', startingStrengthLabel: '시작 도수', startingVolumeLabel: '시작 부피', targetStrengthLabel: '목표 도수', waterToAddLabel: '넣을 물', finalVolumeLabel: '최종 부피', pureAlcoholLabel: '순수 알코올', ratioLabel: '물 비율', startingProofLabel: '시작 프루프', targetProofLabel: '목표 프루프', readyMessage: '목표가 더 낮습니다. 물을 계량한 뒤 조금씩 섞으세요.', invalidMessage: '희석하려면 목표 도수가 시작 도수보다 낮아야 합니다.', largeAdditionMessage: '이 배치에는 증류주만큼 또는 그보다 많은 물이 필요합니다. 단계적으로 섞고 다시 확인하세요.', bottleLabel: '계산된 최종 부피를 보여 주는 눈금 병', waterLayerLabel: '최종 혼합물의 물 층', estimateNotice: '계획을 위한 추정값입니다. 알코올과 물은 섞일 때 수축할 수 있으므로 적절한 장비로 최종 도수를 확인하세요.', sourceLabel: '계산식 출처', calculateAction: '희석 입력', resetAction: '값 초기화', volumeHint: '물을 넣기 전 가지고 있는 부피를 선택하세요.', strengthHint: '프루프는 미국식으로 표시됩니다. 80 프루프는 알코올 40퍼센트입니다.',
};
const faq = [
  { question: '알코올을 희석할 때 필요한 물은 어떻게 계산하나요?', answer: '시작 부피에 시작 도수를 곱해 순수 알코올 부피를 구합니다. 이 값을 목표 도수의 소수값으로 나누면 이론상 최종 부피가 됩니다. 최종 부피에서 시작 부피를 빼면 넣을 물의 양을 얻습니다.' },
  { question: 'ABV와 프루프의 차이는 무엇인가요?', answer: 'ABV는 부피 기준 순수 알코올의 비율입니다. 미국 프루프 체계에서는 프루프가 ABV의 두 배이므로 40퍼센트 ABV는 80 프루프입니다. 전환 버튼은 표시만 바꾸며 실제 알코올 도수는 바꾸지 않습니다.' },
  { question: '계산기에 알코올과 물의 수축이 반영되나요?', answer: '아니요. 순수 알코올이 보존된다는 가정에 기반한 추정값입니다. 에탄올과 물은 섞은 뒤 합산 부피가 조금 줄 수 있고 온도도 부피를 바꿉니다. 배치 계획으로 사용하고 적절한 비중계 등으로 확인하세요.' },
  { question: '합법적인 알코올 제품을 만드는 데 사용할 수 있나요?', answer: '이 도구는 산술만 수행하며 레시피, 라벨, 주세, 허가 또는 지역 규정을 확인하지 않습니다. 제조 및 판매 장소의 요건을 따르고 깨끗한 장비와 안전한 계량 방법을 사용하세요.' },
];
const howTo = [
  { name: '부피 단위 선택', text: '미터법 밀리리터 또는 야드파운드법 액량 온스를 선택합니다. 단위를 바꿔도 실제 부피는 같습니다.' },
  { name: '시작 배치 입력', text: '희석 전 시작 도수와 증류주 부피를 설정합니다.' },
  { name: '목표 도수 설정', text: '완성된 혼합물의 더 낮은 도수를 입력합니다. 희석이 아닌 목표는 표시됩니다.' },
  { name: '물을 단계적으로 추가', text: '물과 최종 부피를 확인하고 천천히 섞은 다음 적절한 장비로 도수를 확인합니다.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'ko' };
export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: '희석에 관한 질문', bibliographyTitle: '계산식 출처', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: 'title', text: '알코올 희석의 원리', level: 2 },
  { type: 'paragraph', html: '희석은 물을 넣어 알코올 농도를 낮추는 과정이며 순수 알코올의 양은 대체로 유지됩니다. 이 <strong>알코올 희석 계산기</strong>는 시작 도수와 부피를 넣을 물의 양과 이론상 최종 부피로 바꿔 줍니다. 배치 데이터를 업로드하지 않고 브라우저에서 계산합니다.' },
  { type: 'table', headers: ['값', '계산식', '의미'], rows: [['순수 알코올', '시작 부피 x 시작 도수', '혼합물에 들어가는 알코올'], ['최종 부피', '순수 알코올 / 목표 도수', '희석 후 이론상 전체량'], ['넣을 물', '최종 부피 minus 시작 부피', '준비할 물의 양']] },
  { type: 'title', text: 'ABV와 프루프 변환', level: 2 },
  { type: 'paragraph', html: '알코올 도수는 액체 중 순수 알코올의 비율을 나타냅니다. 미국 체계에서 프루프는 ABV의 두 배이므로 40퍼센트 ABV는 80 프루프입니다. 병 라벨이 프루프를 사용할 때 전환 기능을 이용하되 국가와 시대에 따라 기준이 다를 수 있음을 기억하세요.' },
  { type: 'stats', columns: 3, items: [{ value: '80 proof', label: '40퍼센트 ABV' }, { value: '1:1', label: '기본 시나리오의 물 비율' }, { value: '100% local', label: '배치 데이터 전송 없음' }] },
  { type: 'title', text: '결과가 추정값인 이유', level: 2 },
  { type: 'paragraph', html: '계산은 순수 알코올 부피를 보존하지만 실제 혼합물은 완전히 더해지지 않습니다. 알코올과 물은 섞일 때 수축하고 온도는 밀도와 측정 부피를 바꿉니다. 물을 천천히 넣고 측정 온도에 도달한 뒤 적합한 장비로 도수를 확인하세요.' },
  { type: 'tip', title: '천천히 섞고 확인하기', html: '깨끗하게 계량한 물과 이론상 최종 부피를 담을 수 있는 충분한 용기를 사용하세요. 계산기는 온도, 당분, 향료 또는 지역 측정 규정을 알 수 없습니다. 물의 양은 시작 계획이지 최종 도수 인증서가 아닙니다.' },
  { type: 'title', text: '반복 가능한 희석 순서', level: 2 },
  { type: 'list', items: ['라벨의 시작 도수와 실제 배치 부피를 기록합니다.', '시작 도수보다 낮은 목표 도수를 선택합니다.', '순수 알코올, 최종 부피, 물의 양을 계산합니다.', '대부분의 물을 넣고 섞은 뒤 나머지를 조금씩 추가합니다.', '측정 온도에 도달한 완성물을 확인합니다.'] },
  { type: 'diagnostic', variant: 'warning', title: '계산은 제조 허가가 아닙니다', html: '이 페이지는 원료, 위생, 라벨, 세금, 허가 또는 판매 적법성을 검증하지 않습니다. 음료와 지역에 적용되는 규정을 계산 결과만으로 생략하지 마세요.' },
] };
