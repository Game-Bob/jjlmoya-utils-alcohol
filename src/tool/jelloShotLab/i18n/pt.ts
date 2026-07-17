import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'laboratorio-jello-shots';
const title = 'Laboratório Jello Shots: O calculador perfeito da proporção entre álcool e gelatina';
const description = 'Calcule exatamente quanta bebida e gelatina usar para jello shots que realmente solidificam. Evite os fracassos líquidos ou borrachudos com proporções baseadas na ciência para qualquer teor alcoólico.';

const ui: JelloShotLabUI = {
  title: 'Laboratório Jello Shots',
  description: 'Obtenha a proporção perfeita de gelatina, água e álcool para que os seus shots solidifiquem sempre.',
  liquorBaseLabel: 'Tipo de bebida',
  liquorAbvLabel: 'Teor alcoólico (%)',
  gelatinLabel: 'Tipo de gelatina',
  diluentLabel: 'Base de água',
  calculateBtn: 'Calcular',
  modePrecision: 'Modo precisão',
  modeIntensity: 'Força do shot',
  modeIntensityLight: 'Leve (Fácil)',
  modeIntensityBalanced: 'Standard',
  modeIntensityLimit: 'Máximo (Forte)',
  partyPlannerTitle: 'Planeador de festa',
  partyPlannerGuestLabel: 'Convidados',
  partyPlannerShotsPerGuest: 'Shots por pessoa',
  multiLayerTitle: 'Multi-camadas',
  howToTitle: 'Como prepará-los',
  proTipsTitle: 'Dicas de pro',
  resultsTitle: 'A sua receita',
  totalVolumeLabel: 'Volume total',
  boilingWaterLabel: 'Água quente',
  alcoholVolumeLabel: 'Bebida',
  packetsNeededLabel: 'Saquetas de gelatina',
  chillingTimeLabel: 'Tempo de refrigeração',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'saquetas',
  modeParty: 'Modo festa',
  modeRecipe: 'Modo receita',
};

const faqTitle = 'Perguntas frequentes';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'Por que o álcool de alta graduação impede os jello shots de solidificar?',
    answer: 'O etanol perturba as ligações de hidrogénio que mantêm a estrutura proteica de tripla hélice da gelatina. Quando o destilado representa cerca de 35% do volume total, a matriz proteica não consegue formar uma rede estável e o shot permanece líquido. Quanto maior o teor alcoólico da bebida, menos volume se pode adicionar antes de atingir este limite.',
  },
  {
    question: 'Qual é a proporção máxima de álcool antes de os jello shots pararem de solidificar?',
    answer: 'O limite superior seguro é de cerca de 30 a 35% do volume total de líquido sendo bebida pura (a 40% vol). Com um álcool neutro a 96%, esse limite desce para cerca de 15 a 18% do volume total. A nossa calculadora tem em conta o teor alcoólico da bebida para que nunca ultrapasse o limite de solidificação.',
  },
  {
    question: 'Importa o tipo de bebida utilizada - vodka, rum ou tequila?',
    answer: 'O que importa é o teor alcoólico, não o tipo de bebida. Vodka a 40% e rum a 40% comportam-se de forma idêntica na matriz de gelatina. No entanto, bebidas com maior teor de açúcar (como alguns rons ou licores) podem melhorar ligeiramente a textura, pois o açúcar compete com o etanol pelas ligações de hidrogénio na rede de gelatina.',
  },
  {
    question: 'Quanto tempo duram os jello shots no frigorífico?',
    answer: 'Os jello shots bem preparados duram 3 a 5 dias no frigorífico cobertos com película aderente. O alto teor alcoólico funciona como conservante natural. Evite deixá-los à temperatura ambiente por mais de 2 horas, pois a gelatina amolece e as bactérias podem multiplicar-se.',
  },
  {
    question: 'Posso tornar os meus jello shots mais firmes ou mais macios?',
    answer: 'Sim. Use mais gelatina (ou meia saqueta extra) para shots mais firmes que saem facilmente dos copos. Use ligeiramente menos para uma textura mais mole e trêmula. Nunca substitua a gelatina por ágar-ágar se quiser uma textura que se derrete na boca - o ágar solidifica mais e derrete a uma temperatura mais elevada.',
  },
  {
    question: 'Posso congelar os jello shots para acelerar o arrefecimento?',
    answer: 'Não. O congelamento quebra a rede de gelatina, resultando numa textura aquosa e granulada após descongelar. Refrigere sempre durante um mínimo de 4 horas. Para festas, prepare-os na noite anterior - 8 horas ou mais dão a melhor textura.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'Escolha a sua bebida', text: 'Introduza o teor alcoólico da sua bebida e escolha a força do shot desejada. A calculadora mostrará a quantidade máxima de bebida que a sua gelatina consegue suportar.' },
  { name: 'Prepare a gelatina', text: 'Deite a quantidade calculada de água a ferver numa tigela. Adicione o pó de gelatina e mexa vigorosamente durante 2 minutos até dissolver completamente. Não adicione álcool ainda.' },
  { name: 'Adicione a bebida', text: 'Deixe a mistura de gelatina arrefecer durante 5 a 10 minutos até estar morna mas não quente (abaixo de 50 °C). Adicione a sua bebida e mexa suavemente para evitar criar bolhas.' },
  { name: 'Deite e refrigere', text: 'Deite em copos de plástico, moldes de silicone ou pequenos copos de shot. Refrigere durante pelo menos 4 horas - uma noite inteira é ideal. Não congele.' },
];


const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'A química por trás de um jello shot perfeito', level: 2 },
  {
    type: 'paragraph',
    html: 'Um jello shot não é apenas gelatina aromatizada com álcool - é uma <strong>suspensão coloidal delicada</strong> onde polímeros proteicos, água e etanol competem por ligações de hidrogénio. Errar a proporção resulta numa poça de líquido doce ou num disco borrachudo que ressalta na mesa. Acertar significa ter um shot perfeitamente trémulo que desliza para fora do copo num único movimento limpo.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Leve (Fácil)', value: '~30% bebida', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Standard', value: '~45% bebida', icon: 'mdi:flask-outline' },
      { label: 'Máximo', value: '~55% bebida', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'O que é a força Bloom?',
    icon: 'mdi:molecule',
    html: 'O Bloom mede a força de gelificação de uma gelatina, tipicamente entre 50 e 300 Bloom. A gelatina em folhas do supermercado é normalmente 150-200 Bloom. Um Bloom mais alto significa um gel mais firme com a mesma quantidade de pó, o que significa que pode tolerar ligeiramente mais álcool antes de não solidificar. As saquetas padrão de gelatina em pó (7 g) estão calibradas para cerca de 240 ml de líquido.',
  },
  {
    type: 'card',
    title: 'O limite do etanol',
    icon: 'mdi:alert-circle-outline',
    html: 'O etanol compete com a água pelos locais de ligação de hidrogénio nas cadeias de aminoácidos do colagénio. Quando o etanol ocupa demasiados desses locais, a proteína não consegue dobrar-se na tripla hélice estável que dá estrutura à gelatina. O limite prático é de aproximadamente <strong>1 parte de bebida a 40% para 1 parte de água</strong> - além disso, o seu shot não solidificará independentemente do tempo de espera.',
  },
  {
    type: 'tip',
    title: 'Nunca adicione álcool à gelatina a ferver',
    html: 'O álcool evapora rapidamente acima dos 78 °C. Deixe sempre a gelatina dissolvida arrefecer abaixo dos 50 °C antes de adicionar a bebida. Este único passo é responsável por mais jello shots falhados do que qualquer outro erro.',
  },
  { type: 'title', text: 'Resolver falhas comuns', level: 2 },
  {
    type: 'proscons',
    title: 'Sintomas e soluções',
    items: [
      { pro: 'Shot líquido após 4 horas → Demasiado álcool ou proporção excedida. Reduzir o volume de bebida.', con: 'Shot sem sabor a álcool → Bebida adicionada a líquido ainda demasiado quente. Deixar arrefecer primeiro.' },
      { pro: 'Shot demasiado borrachudo → Demasiada gelatina. Reduzir meia saqueta na próxima vez.', con: 'Shot turvo → Bolhas presas durante a mistura. Mexer suavemente e deixar repousar antes de deitar.' },
      { pro: 'Shot com textura granulada → Gelatina não completamente dissolvida. Mexer mais tempo em água quente.', con: 'Shot não solidifica após 8 horas → Limite de etanol ultrapassado. Usar menos bebida ou com ABV mais baixo.' },
    ],
  },
  {
    type: 'summary',
    title: 'Para quem é esta ferramenta?',
    items: [
      'Anfitriões de festas: Calcule exatamente quantas saquetas e quanta bebida precisa antes de comprar.',
      'Bartenders: Escale para produção em grande quantidade com resultados consistentes sempre.',
      'Cozinheiros caseiros: Evite os erros mais comuns - shots líquidos, textura borrachuda ou zero sabor a álcool.',
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

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
