import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'construtor-vinho-fortificado';
const title = 'Construtor de Vinho Fortificado & Vermute: Calculadora Quadrado de Pearson';
const description = 'Calcule exatamente quanto destilado adicionar ao seu vinho para atingir o teor alcoólico desejado. Crie vermute, porto e xerez perfeitos com o método do Quadrado de Pearson.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: 'O que está a criar?',
  intentionVermouth: 'Vermute',
  intentionPort: 'Porto',
  intentionSherry: 'Xerez',
  intentionCustom: 'Personalizado',
  modeALabel: 'A partir do vinho que tenho',
  modeBLabel: 'Volume final desejado',
  wineSection: 'Vinho Base',
  wineVolumeLabel: 'Volume de vinho (L)',
  wineAbvLabel: 'Teor alcoólico do vinho (%)',
  spiritSection: 'Destilado de Fortificação',
  spiritAbvLabel: 'Teor alcoólico do destilado (%)',
  brandyPreset: 'Brandy (38°)',
  neutralPreset: 'Neutro (96°)',
  aguardientePreset: 'Aguardente (42°)',
  targetAbvLabel: 'Teor alcoólico alvo (%)',
  targetVolumeLabel: 'Volume total alvo (L)',
  resultsTitle: 'A Sua Receita',
  addLabel: 'Adicionar',
  finalVolumeLabel: 'Volume final',
  bottlesSection: 'Garrafas necessárias',
  copyBtn: 'Copiar Receita',
  copiedBtn: 'Copiado!',
  pearsonTitle: 'Quadrado de Pearson',
  wineCornerLabel: 'Vinho',
  spiritCornerLabel: 'Destilado',
  emptyState: 'Insira os seus valores para ver o Quadrado de Pearson',
  errorAbv: 'O teor alcoólico do destilado deve ser superior ao alvo, e o alvo deve ser superior ao teor alcoólico do vinho.',
  errorMode: 'Insira um volume válido para calcular.',
};

const faqTitle = 'Perguntas Frequentes';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'O que é o método do Quadrado de Pearson?',
    answer: 'O Quadrado de Pearson é um método gráfico simples usado na produção de vinho para calcular rácios de mistura. Coloca-se o teor alcoólico alvo no centro do quadrado, o teor alcoólico do vinho no canto superior esquerdo e o do destilado no canto inferior esquerdo. As diferenças diagonais fornecem as partes proporcionais de cada líquido necessárias.',
  },
  {
    question: 'Qual é o teor alcoólico típico do vermute?',
    answer: 'O vermute tradicional tem um teor alcoólico entre 15 % e 18 %. O vermute seco (estilo francês) situa-se geralmente na faixa inferior (15–16 %), enquanto o vermute doce (estilo italiano) atinge frequentemente 16–18 %. O vermute rosé encontra-se entre os dois.',
  },
  {
    question: 'Que vinho base devo usar para o vermute?',
    answer: 'Tradicionalmente, um vinho branco seco e neutro entre 10–12 % de teor alcoólico funciona melhor. O vinho fornece a estrutura base, mas como será aromatizado com ervas e botânicos, não é necessário um vinho caro — uma base limpa e ácida é o ideal.',
  },
  {
    question: 'Posso usar álcool neutro em vez de brandy?',
    answer: 'Sim. O álcool neutro (96 % vol.) oferece controlo máximo e um perfil de sabor mais limpo. O brandy acrescenta o seu próprio carácter (carvalho, frutos secos, baunilha), o que pode ser desejável ou indesejável dependendo do estilo. O porto usa tradicionalmente aguardente vínica, enquanto alguns vermutes usam álcool neutro.',
  },
  {
    question: 'Como é que a fortificação conserva o vinho?',
    answer: 'Quando o teor alcoólico do vinho ultrapassa aproximadamente 15–16 %, a fermentação pelas leveduras é inibida — as leveduras não conseguem sobreviver em ambientes com alto teor alcoólico. É por isso que os vinhos fortificados têm uma vida útil muito mais longa do que o vinho comum. O álcool atua como conservante natural contra a deterioração por leveduras e bactérias.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Escolher o estilo', text: 'Selecione Vermute, Porto, Xerez ou Personalizado para preencher automaticamente a faixa de teor alcoólico alvo recomendada.' },
  { name: 'Inserir dados do vinho', text: 'Introduza o volume do seu vinho base (ou o volume final alvo no Modo B) e o seu teor alcoólico atual.' },
  { name: 'Definir o destilado', text: 'Escolha um preset de destilado ou introduza um teor alcoólico personalizado. O Quadrado de Pearson atualiza-se em tempo real.' },
  { name: 'Ler a sua receita', text: 'A calculadora mostra exatamente quantos mililitros de destilado adicionar e o volume final.' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'O Quadrado de Pearson: Matemática ancestral, vinho perfeito', level: 2 },
  { type: 'paragraph', html: 'O <strong>Quadrado de Pearson</strong> é uma das ferramentas mais antigas e elegantes da matemática vitivinícola. Desenvolvido no século XIX, permite a qualquer produtor de vinho — profissional ou amador — calcular rácios de mistura com nada mais do que subtrações. A nossa ferramenta digitaliza este método visual e adiciona feedback em tempo real, para que passe menos tempo a calcular e mais tempo a criar.' },
  { type: 'stats', items: [{ label: 'Vermute', value: '15–18 % vol.', icon: 'mdi:glass-cocktail' }, { label: 'Porto', value: '18–20 % vol.', icon: 'mdi:bottle-wine' }, { label: 'Xerez', value: '15–17 % vol.', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: 'Por que fortificar a 18 %?', icon: 'mdi:shield-check', html: 'Acima de cerca de 15 % vol., a <em>Saccharomyces cerevisiae</em> — a principal levedura do vinho — é inibida. Quando se atinge os 18 %, a fermentação é completamente interrompida. É por isso que o vinho do Porto retém açúcar residual: os destilados são adicionados a meio da fermentação, matando a levedura antes que todo o açúcar seja consumido.' },
  { type: 'tip', title: 'Dica Profissional: Medir a 20 °C', html: 'A densidade do álcool muda com a temperatura. As medições oficiais de teor alcoólico são calibradas a 20 °C. Se o seu destilado ou vinho estiver significativamente mais quente ou mais frio, aplique um fator de correção: aproximadamente +0,04 % vol. por °C abaixo de 20 °C e −0,04 % por °C acima.' },
  { type: 'title', text: 'O Renascimento do Vermute Artesanal', level: 2 },
  { type: 'paragraph', html: 'O sul da Europa está a viver um renascimento do vermute artesanal. Barcelona, Valência e San Sebastián recuperaram <em>la hora del vermut</em> como instituição cultural, e pequenos produtores em Espanha, Itália e França estão a engarrafar expressões notáveis. Isso criou uma nova geração de produtores caseiros que querem ferramentas técnicas à altura das suas ambições.' },
  { type: 'summary', title: 'Para quem é esta ferramenta?', items: ['Produtores de vinho caseiros: Fortifique a sua colheita com precisão em vez de adivinhar.', 'Produtores de vermute artesanal: Prototype novos teores alcoólicos alvo antes de escalar para lotes completos.', 'Educadores de destilados: Demonstre visualmente o método do Quadrado de Pearson em workshops.'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
