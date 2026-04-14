import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'cocktail-balancer';
const title = 'Cocktail Balancer: A Lei do Ácido';
const description = 'Calcule o equilíbrio perfeito entre doce e ácido para seus coquetéis. Domine a proporção áurea da mixologia.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Receitas',
  saveBtn: 'Salvar',
  resetBtn: 'Redefinir',
  emptyStateTitle: 'Seu Banco de Trabalho está Vazio',
  emptyStateDescription: 'Adicione ingredientes para analisar o equilíbrio do seu coquetel em tempo real.',
  addBtn: 'Adicionar Ingrediente',
  addMoreBtn: 'Adicionar Outro Ingrediente',
  flavorProfileTitle: 'Perfil de Sabor',
  volLabel: 'Volume',
  sugarLabel: 'Açúcar',
  colorLabel: 'Cor',
  sourLawTitle: 'Lei do Ácido',
  acidDryLabel: 'Ácido (Seco)',
  balanceLabel: 'Equilíbrio',
  sweetLabel: 'Doce',
  aiSuggestionTitle: 'Sugestão de IA',
  addIngredientTitle: 'Adicionar Ingrediente',
  searchPlaceholder: 'Pesquisar rum, limão, xarope...',
  presetsTitle: 'Receitas e Predefinições',
  savedSectionTitle: 'Meus Salvos',
  classicsSectionTitle: 'Clássicos',
  confirmDeleteTitle: 'Apagar tudo?',
  confirmDeleteText: 'Isso removerá todos os ingredientes do seu banco de trabalho. Esta ação não pode ser desfeita.',
  cancelBtn: 'Cancelar',
  deleteBtn: 'Apagar',
  verdictSpiritSeco: 'Destilado / Seco',
  verdictSoloDulce: 'Apenas Doce (Old Fashioned)',
  verdictMuyAcido: 'Muito Ácido / Muito Seco',
  verdictAcido: 'Ácido / Azedo',
  verdictEquilibrado: 'Equilibrado (Ácido)',
  verdictDulce: 'Doce / Comercial',
  verdictEmpalagoso: 'Muito Doce',
  fixAddBitters: 'Falta Amargura',
  fixAddSugar: 'Muito Ácido',
  fixAddAcid: 'Muito Doce'
};

const faqTitle = 'Perguntas Frequentes';
const bibliographyTitle = 'Bibliografia e Fontes';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "O que é a 'Lei do Ácido'?",
    answer: "É a proporção áurea da mixologia que equilibra três elementos: a base forte (destilado), o ácido (cítricos) e o doce (xaropes). Uma receita clássica geralmente segue a proporção 2:1:1 (Forte:Ácido:Doce), embora isso varie dependendo da potência e densidade.",
  },
  {
    question: "Como a diluição afeta o equilíbrio do coquetel?",
    answer: "O gelo não apenas resfria; adiciona água (diluição) que abre os aromas do destilado e suaviza os picos de acidez e doçura. Um coquetel equilibrado no shaker pode se tornar desequilibrado se deixado muito tempo com gelo no copo.",
  },
  {
    question: "Por que meus coquetéis caseiros não têm gosto como os de um bar?",
    answer: "Geralmente é devido à falta de equilíbrio entre o açúcar e o pH dos cítricos. Os limões variam em acidez dependendo da estação. Nosso calculador ajuda você a ajustar a quantidade exata de xarope com base no volume de suco usado.",
  },
  {
    question: "O que são graus Brix e por que são importantes em coquetéis?",
    answer: "Brix é uma escala que mede a quantidade de açúcar dissolvido em um líquido. Um xarope simples (1:1) fica em torno de 50 °Brix; um xarope rico (2:1) ultrapassa 66 °Brix. Quanto maior o Brix, mais corpo e doçura ele contribui por unidade de volume. Saber disso permite que você troque xaropes em uma receita sem quebrar o equilíbrio.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Selecione a base alcoólica",
    text: "Escolha o destilado principal (Gim, Rum, Whiskey) do nosso banco de dados para conhecer seu corpo e contribuição alcoólica.",
  },
  {
    name: "Digite o agente ácido",
    text: "Adicione o volume de suco de limão, lima ou toranja. A calculadora analisará o impacto do pH na mistura.",
  },
  {
    name: "Ajuste o componente doce",
    text: "Digite o tipo de xarope (simples, 2:1, agave) e observe o indicador de equilíbrio se mover em tempo real.",
  },
  {
    name: "Serviço perfeito",
    text: "Revise o veredito final da ferramenta: a proporção ácida, o ABV estimado após diluição e as sugestões de correção. Sirva com gelo fresco e ajuste os cítricos ou xarope ao gosto.",
  },
];

const bibliography: CocktailBalancerLocaleContent['bibliography'] = [
  {
    name: "Liquid Intelligence: The Art and Science of the Perfect Cocktail",
    url: "https://www.indigo.ca/en-ca/liquid-intelligence-the-art-and-science-of-the-perfect-cocktail/9780393089035.html",
  },
  {
    name: "Cocktails: The Science of Shaking",
    url: "https://cookingissues.com/2009/07/22/cocktails-the-science-of-shaking/",
  },
  {
    name: "Cocktail Balance - Difford's Guide",
    url: "https://www.diffordsguide.com/encyclopedia/1066/cocktails/cocktail-balance",
  },
];

const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Engenharia Molecular e Equilíbrio de Líquidos',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Bem-vindo ao laboratório digital onde a intuição encontra a matemática. Esta ferramenta não é um simples livro de receitas; é um <strong>simulador físico-químico avançado</strong> projetado para desconstruir e analisar a estrutura molecular dos seus coquetéis em tempo real. Cada gota de cítrico, cada medida de destilado, cada grama de xarope interage de acordo com leis químicas imutáveis que determinam se sua bebida será uma obra-prima ou um fracasso decepcionante.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Lima', value: '~6% Ácido', icon: 'mdi:fruit-citrus' },
      { label: 'Limão', value: '~6% Ácido', icon: 'mdi:fruit-citrus' },
      { label: 'Toranja', value: '~1-2% Ácido', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'A Ciência da Acidez',
    icon: 'mdi:fruit-citrus',
    html: 'A acidez não é apenas um sabor; é a espinha dorsal estrutural de qualquer coquetel equilibrado. Sem a acidez correta, uma bebida fica plana, unidimensional e esquecível. Nosso algoritmo distingue a acidez titulável de uma lima persa versus um limão Eureka, levando em conta variações sazonais do pH dos cítricos que podem deslocar sua receita por um ponto de equilíbrio inteiro no paladar.'
  },
  {
    type: 'card',
    title: 'Controle de Brix (Doçura)',
    icon: 'mdi:spoon-sugar',
    html: 'O corpo e a textura do seu coquetel dependem inteiramente do açúcar dissolvido. Um xarope simples (1:1) se comporta muito diferente de um xarope rico (2:1), mel ou néctar de agave. Cada adoçante tem um grau Brix e viscosidade diferentes que afetam como a bebida reveste a língua. Nossa calculadora calcula os gramas exatos de açúcar dissolvido para prever a textura final da boca e a percepção de doçura.'
  },
  {
    type: 'card',
    title: 'Termodinâmica e Diluição',
    icon: 'mdi:water-percent',
    html: 'Um coquetel agitado dilui 25-40% dependendo da temperatura do gelo, técnica de agitação e duração. Essa adição de água não é um defeito; é um ingrediente essencial que abre aromas e suaviza a borda do álcool. Nossa calculadora estima o ABV final após diluição, para que você possa projetar bebidas com a potência e equilíbrio de sabor exatamente pretendidos.'
  },
  {
    type: 'title',
    text: 'Além da Proporção Básica',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Muitos bartenders aprendem a regra clássica 2:1:1 (2 partes destilado, 1 parte ácido, 1 parte doce) e a tratam como verdade universal. No entanto, <strong>a química é muito mais nuançada</strong>. Um limão da Sicília contém acidez diferente de uma lima do México. Um triple sec como Cointreau se comporta radicalmente diferente de um Curaçao azul. A mesma receita pode saborear perfeitamente equilibrada uma semana e brutalmente ácida a próxima, simplesmente por variação de fruta sazonal.'
  },
  {
    type: 'paragraph',
    html: 'Este balanceador rompe essas barreiras simplistas. Ao inserir seus ingredientes específicos, você consulta um banco de dados vivo que ajusta dinamicamente vetores de acidez e doçura para oferecer um mapa sensorial preciso de sua criação. Pare de adivinhar e comece a projetar seus coquetéis com o mesmo rigor científico que os bartenders em estabelecimentos de classe mundial usam em cada serviço.'
  },
  {
    type: 'summary',
    title: 'Para quem é esta ferramenta?',
    items: [
      'Bartenders Profissionais: Padronize receitas e crie menus assinados com consistência reproduzível.',
      'Entusiastas Domésticos: Pare de adivinhar e comece a entender por que seus coquetéis têm sucesso ou falham.',
      'Desenvolvedores de Bebidas: Prototipe rapidamente novos conceitos de sabor antes de execuções de produção caras.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'A Zona Dourada',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Objetivo',
    html: 'Este é o objetivo final: um pH controlado onde o açúcar neutraliza a agressão do ácido sem mascarar os óleos essenciais e compostos aromáticos do destilado base. Este equilíbrio preciso é onde vivem os clássicos imortais — a Daiquiri, a Margarita, o Sidecar — bebidas que sobreviveram a décadas porque obedecem às leis fundamentais da química do sabor.'
  },
  {
    type: 'tip',
    title: 'Dica de Especialista: Sempre Use Cítricos Frescos',
    html: 'Sempre esprema os cítricos no último momento. O suco de limão e lima oxidam rapidamente, perdendo a acidez viva em 20-30 minutos após a extração. Um coquetel feito com suco verdadeiramente fresco sempre terá um brilho e vitalidade no paladar que nenhum produto engarrafado pode replicar. Use frutas em temperatura ambiente para maximizar o rendimento do suco.'
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
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
