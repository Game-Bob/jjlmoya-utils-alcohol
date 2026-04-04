import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'equilibrador-cocteles';
const title = 'Equilibrador de Cócteles - La Ley del Sour';
const description = 'Calcula el equilibrio perfecto entre dulce y ácido para tus cócteles. Domina la proporción áurea de la mixología.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Recetas',
  saveBtn: 'Guardar',
  resetBtn: 'Reset',
  emptyStateTitle: 'Tu Mesa de Trabajo está Vacía',
  emptyStateDescription: 'Añade ingredientes para analizar el equilibrio de tu cóctel en tiempo real.',
  addBtn: 'Añadir Ingrediente',
  addMoreBtn: 'Añadir Otro Ingrediente',
  flavorProfileTitle: 'Perfil de Sabor',
  volLabel: 'Volumen',
  sugarLabel: 'Azúcar',
  colorLabel: 'Color',
  sourLawTitle: 'Ley del Sour',
  acidDryLabel: 'Ácido (Dry)',
  balanceLabel: 'Equilibrio',
  sweetLabel: 'Dulce (Sweet)',
  aiSuggestionTitle: 'Sugerencia de la IA',
  addIngredientTitle: 'Añadir Ingrediente',
  searchPlaceholder: 'Buscar ron, lima, sirope...',
  presetsTitle: 'Recetas & Presets',
  savedSectionTitle: 'Mis Guardadas',
  classicsSectionTitle: 'Clásicos',
  confirmDeleteTitle: '¿Borrar todo?',
  confirmDeleteText: 'Esta acción eliminará todos los ingredientes de tu mesa de trabajo. No se puede deshacer.',
  cancelBtn: 'Cancelar',
  deleteBtn: 'Borrar',
  verdictSpiritSeco: 'Espirituoso / Seco',
  verdictSoloDulce: 'Solo Dulce (Old Fashioned)',
  verdictMuyAcido: 'Muy Ácido / Bone Dry',
  verdictAcido: 'Ácido / Tart',
  verdictEquilibrado: 'Equilibrado (Sour)',
  verdictDulce: 'Dulce / Comercial',
  verdictEmpalagoso: 'Empalagoso',
  fixAddBitters: 'Falta Amargor',
  fixAddSugar: 'Muy Ácido',
  fixAddAcid: 'Muy Dulce'
};

const faqTitle = 'Preguntas Frecuentes';
const bibliographyTitle = 'Bibliografía y Fuentes';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "¿Qué es la 'Ley del Sour'?",
    answer: "Es la proporción áurea de la coctelería que equilibra tres elementos: la base fuerte (destilado), lo ácido (cítricos) y lo dulce (siropes). Una receta clásica suele seguir el ratio 2:1:1 (Fuerte:Ácido:Dulce), aunque este varía según la graduación y densidad.",
  },
  {
    question: "¿Cómo afecta la dilución al equilibrio del cóctel?",
    answer: "El hielo no solo enfría; aporta agua (dilución) que abre los aromas del destilado y suaviza los picos de acidez y dulzor. Un cóctel equilibrado en la coctelera puede descompensarse si se deja demasiado tiempo con hielo en el vaso.",
  },
  {
    question: "¿Por qué mis cócteles caseros no saben igual que los de un bar?",
    answer: "Suele ser por la falta de equilibrio entre el azúcar y el pH del cítrico. Los limones varían en acidez según la temporada. Nuestra calculadora te ayuda a ajustar la cantidad de sirope exacta según el volumen de zumo usado.",
  },
  {
    question: "¿Qué son los grados Brix y por qué importan en coctelería?",
    answer: "El Brix es una escala que mide la cantidad de azúcar disuelta en un líquido. Un sirope simple (1:1) ronda los 50 °Brix; un Rich Syrup (2:1) supera los 66 °Brix. Cuanto mayor el Brix, más cuerpo y dulzor aportará al cóctel con menos volumen. Conocerlo te permite sustituir siropes entre sí sin romper el equilibrio de la receta.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Seleccionar la base alcohólica",
    text: "Elige el destilado principal (Gin, Ron, Whisky) de nuestra base de datos para conocer su aporte de cuerpo y alcohol.",
  },
  {
    name: "Introducir el agente ácido",
    text: "Añade el volumen de zumo de limón, lima o pomelo. La calculadora analizará el impacto del pH en la mezcla.",
  },
  {
    name: "Ajustar el componente dulce",
    text: "Introduce el tipo de sirope (simple, 2:1, agave) y observa cómo se desplaza el indicador de equilibrio en tiempo real.",
  },
  {
    name: "Perfecto servicio",
    text: "Revisa el veredicto final de la herramienta: el ratio Sour, el ABV estimado tras la dilución y las sugerencias de corrección. Sirve con hielo fresco y ajusta el cítrico o el sirope al gusto.",
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
    text: 'Ingeniería Molecular & Equilibrio Líquido',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Bienvenido al laboratorio digital donde la intuición se encuentra con la matemática. Esta herramienta no es un simple recetario; es un <strong>simulador físico-químico avanzado</strong> diseñado para deconstruir y analizar la estructura molecular de tus cócteles en tiempo real, garantizando la perfección en cada copa.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Lima', value: '~6% Ácido', icon: 'mdi:fruit-citrus' },
      { label: 'Limón', value: '~6% Ácido', icon: 'mdi:fruit-citrus' },
      { label: 'Pomelo', value: '~1-2% Ácido', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'La Ciencia del Ácido',
    icon: 'mdi:fruit-citrus',
    html: 'La acidez no es solo sabor; es estructura. Un cóctel sin la acidez correcta es plano y aburrido. Nuestro algoritmo distingue la potencia titulerable de una lima persa frente a un limón eureka o una naranja dulce.'
  },
  {
    type: 'card',
    title: 'Control de Brix (Dulzura)',
    icon: 'mdi:spoon-sugar',
    html: 'El "cuerpo" de tu bebida depende del azúcar. No es lo mismo usar un Jarabe Simple (1:1) que un Rich Syrup (2:1) o miel. Calculamos los gramos exactos de azúcar disuelta para predecir la textura final.'
  },
  {
    type: 'card',
    title: 'Termodinámica y Dilución',
    icon: 'mdi:water-percent',
    html: 'Un cóctel agitado se diluye entre un 25-40% dependiendo del hielo y la técnica. Nuestra calculadora estima el ABV Final antes de que agites la coctelera, permitiéndote diseñar bebidas con la potencia exacta deseada.'
  },
  {
    type: 'title',
    text: 'Más allá de la "Regla de Tres"',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Muchos bartenders aprenden fórmulas básicas como la regla 2:1:1 (2 partes de alcohol, 1 de acido, 1 de dulce). Sin embargo, <strong>la química es caprichosa</strong>. Un limón de Sicilia no tiene la misma acidez que una lima de Brasil. Un licor de naranja como el Cointreau se comporta radicalmente distinto a un Curaçao.'
  },
  {
    type: 'paragraph',
    html: 'Este equilibrador rompe esas barreras simplistas. Al introducir ingredientes en nuestro sistema, estás consultando una base de datos viva que ajusta los vectores de acidez y dulzor para ofrecerte un mapa sensorial preciso de tu creación antes de gastar una sola gota de licor caro.'
  },
  {
    type: 'summary',
    title: '¿Para quién es esta herramienta?',
    items: [
      'Bartenders Profesionales: Para estandarizar recetas y crear menús de autor.',
      'Entusiastas del Hogar: Para dejar de adivinar y empezar a entender los fallos.',
      'Desarrolladores de Bebidas: Para prototipar rápidamente conceptos de sabor.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'La Zona Dorada',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Objetivo',
    html: 'Este es el objetivo final: un pH controlado donde el azúcar neutraliza la agresión del ácido sin enmascarar los aceites esenciales y los compuestos aromáticos del alcohol base. Aquí viven los clásicos inmortales: el Daiquiri, la Margarita, el Sidecar. Bebidas que han sobrevivido décadas porque obedecen las leyes fundamentales de la química del sabor.'
  },
  {
    type: 'tip',
    title: 'Consejo Experto: Usa Siempre Cítricos Frescos',
    html: 'Exprime siempre los cítricos en el último momento. El zumo de limón y lima se oxida rápidamente, perdiendo su acidez viva en 20-30 minutos tras la extracción. Un cóctel elaborado con zumo verdaderamente fresco siempre tendrá una brillantez y vivacidad en el paladar que ningún producto embotellado puede replicar. Usa fruta a temperatura ambiente para maximizar el rendimiento del zumo.'
  }
];

const schemas: CocktailBalancerLocaleContent['schemas'] = [
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
