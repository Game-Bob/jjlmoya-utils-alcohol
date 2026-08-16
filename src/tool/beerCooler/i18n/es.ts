import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'calculadora-enfriamiento-cerveza';
const title = 'Calculadora de Enfriamiento de Cerveza con la Ley de Newton';
const description = 'Calcula con termodinámica real -la Ley de Enfriamiento de Newton- cuánto tarda tu cerveza en alcanzar la temperatura perfecta en nevera o congelador.';

const ui: BeerCoolerUI = {
  step1Title: '¿Qué vas a enfriar?',
  canLabel: 'Lata',
  aluminumLabel: 'Aluminio',
  bottleLabel: 'Botella',
  glassLabel: 'Vidrio',
  step2Title: '¿Dónde la pones?',
  fridgeLabel: 'Nevera',
  freezerLabel: 'Congelador',
  step3Title: 'Afinar Temperaturas',
  initialTempLabel: 'Temperatura Inicial',
  targetTempLabel: 'Meta Fría',
  glacialLabel: 'Glacial',
  perfectLabel: 'Perfecta',
  bodegaLabel: 'Bodega',
  readyTitle: 'Todo listo',
  readyDescription: 'Selecciona envase y lugar para calcular.',
  estimatedTimeLabel: 'Hora estimada',
  methodLabel: 'Método',
  containerLabel: 'Envase',
  alreadyColdLabel: '¡Ya está fría!',
  neverColdLabel: 'Nunca llegará'
};

const faqTitle = 'Preguntas Frecuentes';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: "¿Cómo calcula esta herramienta el tiempo de enfriamiento?",
    answer: "Aplica la Ley de Enfriamiento de Newton: T(t) = T_env + (T₀ - T_env) × e^(-kt). La constante k varía según el material del envase y el medio de enfriado. Una lata de aluminio en nevera tiene un k muy diferente al de una botella de vidrio en congelador. Los valores que usamos están calibrados con experimentos reales para cada combinación.",
  },
  {
    question: "¿Funciona el truco del papel húmedo con sal en el congelador?",
    answer: "Sí, y de forma notable. Envolver el envase en papel mojado con sal acelera el enfriamiento por dos razones: la evaporación del agua extrae calor adicional (enfriamiento evaporativo) y la sal baja el punto de congelación del agua, manteniendo el contacto húmedo más tiempo. Puedes bajar entre 2°C y 4°C extra en los primeros minutos respecto a meter la lata seca.",
  },
  {
    question: "¿Cuál es la temperatura de servicio ideal según el estilo de cerveza?",
    answer: "Depende del estilo. Las Lagers y Pilsners están mejor entre 3°C y 7°C. Las IPAs y Pale Ales brillan entre 7°C y 10°C. Las Stouts, Porters y ales complejas deben servirse más cálidas, entre 12°C y 14°C, para que sus compuestos aromáticos -café, chocolate, frutos secos- se expresen con plenitud.",
  },
  {
    question: "¿Puede explotar mi cerveza si la dejo en el congelador?",
    answer: "Sí. El alcohol y los azúcares bajan el punto de congelación de la cerveza respecto al agua pura: una Lager al 5% se congela en torno a los -3°C. Al cristalizarse el agua, el volumen aumenta y el CO2 disuelto eleva la presión interna hasta que el envase cede. Más de 60 minutos en el congelador con envases de vidrio es zona de riesgo real. Usa esta calculadora para no pasarte.",
  },
  {
    question: "¿La cerveza se 'quema' si se enfría muy rápido?",
    answer: "No. El mito del 'choque térmico' que arruina la cerveza es falso. Lo que sí puede afectarla negativamente es congelarla y descongelarla repetidamente -rompe proteínas y enturbia el líquido- o exponerla a luz UV directa. Un enfriamiento rápido en congelador o agua con hielo no daña el sabor.",
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: "Seleccionar el envase",
    text: "Elige entre lata de aluminio o botella de vidrio. El material afecta drásticamente la velocidad de transferencia de calor.",
  },
  {
    name: "Elegir el método de enfriamiento",
    text: "Indica si vas a usar una nevera convencional (4°C) o un congelador (-18°C) para un proceso ultra rápido.",
  },
  {
    name: "Ajustar temperaturas",
    text: "Define la temperatura actual de la bebida (ambiente) y la temperatura objetivo deseada para el consumo.",
  },
];


const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'La Ciencia del Frío y la Termodinámica',
    level: 2
  },
  {
    type: 'paragraph',
    html: '¿Por qué esa lata se enfría antes que la botella? ¿Es magia? No, es la <strong>Ley del Enfriamiento de Newton</strong> en acción. Esta herramienta calcula matemáticamente el momento exacto en que tu bebida alcanza la perfección termodinámica.'
  },
  {
    type: 'diagnostic',
    title: 'La Fórmula Maestra',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Física',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). Esta ecuación diferencial describe cómo la temperatura de un objeto cambia proporcionalmente a la diferencia entre su temperatura y la del ambiente.'
  },
  {
    type: 'title',
    text: 'Guerra de Materiales: Aluminio vs Vidrio',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'El <strong>aluminio</strong> tiene una conductividad térmica de ~205 W/(m·K), mientras que el <strong>vidrio</strong> apenas llega a 0.8 W/(m·K). El metal transfiere el frío violentamente rápido, lo que lo convierte en el envase ideal para emergencias.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Pilsner & Lager', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA & Pale Ale', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: 'Stout & Porter', value: '10°C - 13°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: '¿A qué temperatura explota?',
    icon: 'mdi:snowflake-alert',
    html: 'Debido al alcohol y los azúcares, el punto de congelación desciende. Una Lager al 5% se congela a unos -3°C. Al cristalizarse, el agua se expande y el CO2 aumenta la presión interna hasta que el envase cede.'
  },
  {
    type: 'proscons',
    title: 'Hacks de Enfriamiento Rápido',
    items: [
      { pro: 'La Momia Húmeda: Envuelve la botella en papel mojado con sal.', con: '' },
      { pro: 'Salmuera del Ártico: Agua + Hielo + Sal para bajar a -21°C.', con: '' },
      { pro: 'El Giroscopio: Haz girar la botella en agua con hielo para forzar la convección.', con: '' },
      { pro: '', con: 'No olvides la cerveza en el congelador más de 60 minutos.' }
    ]
  },
  {
    type: 'tip',
    title: 'Consejo Pro: Preenfría el Vaso',
    html: 'El vaso en el que sirves la cerveza tiene una masa térmica significativa. Un vaso caliente puede subir la temperatura de una cerveza perfectamente fría en 2-3°C al instante. Mete el vaso de servicio en el congelador 5 minutos antes de servir, o enjuágalo con agua fría. Este simple paso prolonga la ventana en que tu cerveza sabe exactamente como debe.'
  },
  {
    type: 'title',
    text: 'Entendiendo la Constante de Enfriamiento',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'La constante de enfriamiento k en la ecuación de Newton no es un valor universal fijo - es una propiedad empírica de cada envase y medio específico. Una delgada lata de aluminio en agua con hielo tiene un k radicalmente diferente al de una gruesa botella de vidrio en el aire quieto de un frigorífico. Nuestra calculadora utiliza valores medidos y calibrados con experimentos reales para cada tipo de envase, dándote predicciones precisas al minuto en escenarios domésticos típicos.'
  }
];

const schemas: BeerCoolerLocaleContent['schemas'] = [
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

export const content: BeerCoolerLocaleContent = {
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
