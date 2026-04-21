import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'calculadora-alcohol-resaca';
const title = 'Calculadora de Resaca y Alcoholemia: Predictor de Recuperación';
const description = 'Calcula tu alcoholemia (BAC) y el tiempo hasta 0.0 según la fórmula de Widmark. Planifica tu hidratación pre-sueño y sabe cuándo estarás recuperado.';

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

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "¿Qué es una UBE y cuántas lleva cada bebida?",
    answer: "Una UBE (Unidad de Bebida Estándar) equivale a 10 gramos de alcohol puro en España. Una caña (330ml al 5%) aporta ~1.3 UBE, una copa de vino (150ml al 12%) ~1.4 UBE y un chupito (40ml al 40%) ~1.3 UBE. Conocer las UBE de lo que bebes es clave para interpretar correctamente el resultado de la calculadora.",
  },
  {
    question: "¿Por qué el sexo biológico afecta al cálculo de la alcoholemia?",
    answer: "El sexo biológico influye en el factor de Widmark 'r', que representa el agua corporal total como fracción del peso. Los hombres tienen de media r=0.68 porque tienen proporcionalmente más agua corporal. Las mujeres tienen de media r=0.55 debido a un mayor porcentaje de grasa corporal, que retiene menos el alcohol. Esto significa que, con las mismas bebidas y peso, las mujeres tendrán una tasa de alcoholemia más alta.",
  },
  {
    question: "¿Se puede acelerar la eliminación con café, agua o ejercicio?",
    answer: "No. El hígado elimina el alcohol a una tasa constante de aproximadamente 0.15 g/L por hora (cinética de orden cero). El café puede disimular el cansancio, el agua ayuda con la deshidratación y el ejercicio mejora el bienestar general, pero ninguno reduce el BAC real. Solo el tiempo elimina el alcohol de la sangre.",
  },
  {
    question: "¿Comer después de beber ayuda a bajar el BAC?",
    answer: "Comer después de beber no reduce el alcohol que ya está en sangre. Donde sí marca una diferencia enorme es antes o durante: la comida en el estómago, especialmente proteínas y grasas, ralentiza la absorción gástrica y puede reducir el BAC máximo alcanzado hasta un 50%. Una vez el alcohol está absorbido, solo el metabolismo hepático puede eliminarlo.",
  },
  {
    question: "¿Cuánto tiempo tardo en dar 0.0?",
    answer: "Depende de tu BAC inicial. Dividiendo tu alcoholemia estimada (en g/L) entre 0.15 obtienes las horas aproximadas. Por ejemplo, un BAC de 1.5 g/L requiere unas 10 horas. El hígado no descansa: procesa alcohol incluso mientras duermes. Pero atención: todavía puede haber alcohol en sangre aunque te sientas completamente recuperado.",
  },
  {
    question: "¿Es esta calculadora 100% fiable para decidir si puedo conducir?",
    answer: "No. Esta herramienta es una estimación teórica basada en la fórmula de Widmark. Factores como la comida, medicamentos, fatiga, genética de la enzima ADH o el estrés pueden desviarte un 20-30% del valor calculado. Nunca uses esta calculadora para decidir si conduces. Si has bebido, no conduzcas — es la única regla sin margen de error.",
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
  bibliography,
  howTo,
  schemas,
};
