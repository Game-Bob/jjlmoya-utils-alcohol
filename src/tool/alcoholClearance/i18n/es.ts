import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'calculadora-alcohol-resaca';
const title = 'Calculadora de Alcoholemia y Metabolismo';
const description = 'Estima tu tasa de alcoholemia (BAC) y el tiempo necesario para eliminar el alcohol de tu organismo basándote en la fórmula de Widmark.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Sexo Biológico',
  weightLabel: 'Peso Corporal',
  kgUnit: 'kg',
  addDrinkLabel: 'Añadir Bebida',
  beerLabel: 'Cerveza',
  wineLabel: 'Vino',
  spiritLabel: 'Copa',
  shotLabel: 'Chupito',
  accumulatedLabel: 'Consumo Acumulado',
  emptyListLabel: 'Tu lista está vacía',
  emptySubLabel: 'Selecciona bebidas para calcular.',
  estimatedBacLabel: 'Alcoholemia Estimada',
  bacUnit: 'BAC',
  timeToZeroLabel: 'para estar a 0.0',
  waterAdviceLabel: 'Agua (Antes de dormir)',
  pillAdviceLabel: 'Suplementos',
  noneAdvice: 'Sin necesidad',
  hydrationAdvice: 'Prioriza Hidratación',
  electrolytesAdvice: 'Electrolitos + Vit. B',
  disclaimerText: 'Esta calculadora es una estimación teórica. Metabolismo y comida varían el resultado. Si bebes, no conduzcas.',
  drinkUnit: 'bebida',
  drinksUnit: 'bebidas'
};

const faqTitle = 'Preguntas Frecuentes';
const bibliographyTitle = 'Bibliografía y Fuentes';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "¿Qué es la fórmula de Widmark?",
    answer: "Es el modelo estándar de farmacocinética que relaciona la cantidad de alcohol ingerido con el peso corporal y un factor de distribución según el sexo biológico.",
  },
  {
    question: "¿Se puede acelerar la eliminación con café?",
    answer: "No. El hígado elimina el alcohol a una tasa constante (aprox. 0.15 g/L por hora). El café puede espabilarte, pero no reduce el alcohol en sangre.",
  },
  {
    question: "¿Por qué el sexo biológico afecta al cálculo de la alcoholemia?",
    answer: "El sexo biológico influye en el factor de Widmark 'r', que representa el agua corporal total como fracción del peso. Los hombres tienen de media r=0.68 porque tienen proporcionalmente más agua corporal. Las mujeres tienen de media r=0.55 debido a un mayor porcentaje de grasa corporal, que retiene menos el alcohol. Esto significa que, con las mismas bebidas y peso, las mujeres tendrán una tasa de alcoholemia más alta.",
  },
];

const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "Configurar tu perfil",
    text: "Selecciona tu sexo biológico (influye en el porcentaje de agua corporal) y tu peso actual.",
  },
  {
    name: "Añadir las bebidas consumidas",
    text: "Ve pulsando sobre los iconos de las bebidas que has tomado. Se irán acumulando en la lista inferior.",
  },
  {
    name: "Revisar los tiempos de seguridad",
    text: "Observa el BAC estimado y, sobre todo, el tiempo que el hígado tardará en procesar todo el etanol ingerido.",
  },
];

const bibliography: AlcoholClearanceLocaleContent['bibliography'] = [
  {
    name: "Widmark's Formula for BAC Calculation - Forensic Science Lab",
    url: "https://www.forensic-science.com/widmark-formula",
  },
  {
    name: "Alcohol Metabolism: How the body processes alcohol - NIH",
    url: "https://www.niaaa.nih.gov/publications/alcohol-metabolism",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Metabolismo del Alcohol: Ciencia y Eliminación',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Comprender cómo nuestro organismo procesa el etanol es esencial para la seguridad y para mitigar la resaca. Nuestra <strong>calculadora de eliminación de alcohol</strong> utiliza la reconocida <strong>Fórmula de Widmark</strong> para ofrecerte un mapa claro de tu estado metabólico.'
  },
  {
    type: 'diagnostic',
    title: 'La Farmacocinética de la Alcoholemia',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Bioquímica',
    html: 'El alcohol se distribuye por el agua corporal. Factores como el peso y el coeficiente r (0.68 en hombres / 0.55 en mujeres) determinan la dilución inicial del etanol en el torrente sanguíneo.'
  },
  {
    type: 'title',
    text: 'Oxidación Hepática y Enzimas',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'El hígado degrada el 95% del alcohol mediante la Alcohol Deshidrogenasa (ADH). Este proceso ocurre a una velocidad constante (cinética de orden cero), lo que significa que no se puede acelerar con ejercicio o café.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Tasa de Eliminación', value: '0.15 g/L·h', icon: 'mdi:clock-fast' },
      { label: 'Absorción Gástrica', value: '20% Etanol', icon: 'mdi:stomach' },
      { label: 'Hidratación Sugerida', value: '1:1 Agua/Copa', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Mitos vs Realidad',
    items: [
      { pro: 'El agua y los electrolitos antes de dormir reducen la severidad de la resaca.', con: '' },
      { pro: '', con: 'Duchas frías: No afectan a la concentración de alcohol en sangre.' },
      { pro: '', con: 'Café: Enmascara la somnolencia pero no recupera los reflejos perdidos.' }
    ]
  },
  {
    type: 'card',
    title: '¿Qué causa la resaca?',
    icon: 'mdi:alert-decagram',
    html: 'Conocida científicamente como veisalgia, se produce por deshidratación sistémica (supresión de vasopresina por el etanol), acumulación de acetaldehído (un metabolito tóxico) y una respuesta inflamatoria citoquínica del sistema inmune. El rebote del glutamato cerebral tras la supresión alcohólica también contribuye a la ansiedad y sensibilidad a la luz al día siguiente.'
  },
  {
    type: 'tip',
    title: 'Seguridad Primero: Conoce tu Límite',
    html: 'Una alcoholemia de 0.05% altera mediblemente el juicio, el seguimiento visual y el tiempo de reacción. La mayoría de países fijan el límite legal de conducción entre 0.05% y 0.08%. Sin embargo, la sensibilidad individual varía significativamente — la edad, los medicamentos, la fatiga y las variantes genéticas de la enzima ADH influyen en cómo el alcohol te afecta personalmente. Ante la duda, no conduzcas.'
  },
  {
    type: 'summary',
    title: '¿Para quién es esta herramienta?',
    items: [
      'Conductores designados: Calcula si un amigo ha eliminado suficiente alcohol antes de conducir.',
      'Personas responsables: Comprende cuánto tiempo necesita tu cuerpo para procesar diferentes cantidades.',
      'Profesionales de la salud: Utiliza la fórmula de Widmark como referencia educativa para pacientes.'
    ]
  },
  {
    type: 'title',
    text: 'El Papel de la Comida y la Tasa de Absorción',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Comer antes o durante el consumo de alcohol cambia drásticamente la cinética de absorción. La comida en el estómago — especialmente proteínas y grasas — ralentiza el vaciado gástrico, reduciendo la tasa máxima a la que el etanol entra en el torrente sanguíneo. Una persona que bebe con el estómago vacío puede alcanzar un BAC máximo un 50% más alto que la misma persona que comió antes de beber la misma cantidad. Esta es una de las variables más poderosas que la fórmula de Widmark no puede capturar completamente, razón por la que nuestra calculadora incluye un aviso sobre la estimación teórica.'
  },
  {
    type: 'paragraph',
    html: 'El tipo de bebida alcohólica también importa más allá del ABV y el volumen. Los mezcladores con gas (tónica, cava) aceleran el vaciado gástrico y empujan el alcohol al torrente sanguíneo más rápido. Las bebidas con ABV muy alto (>25%) pueden inhibir temporalmente la motilidad gástrica, ralentizando la absorción. Las bebidas dulces pueden enmascarar el efecto percibido del alcohol, llevando a las personas a beber más rápido de lo que se dan cuenta. Estas sutilezas explican por qué el BAC real puede desviarse de las predicciones del modelo en un 20-30% en ambas direcciones.'
  }
];

const schemas: AlcoholClearanceLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: AlcoholClearanceLocaleContent = {
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
