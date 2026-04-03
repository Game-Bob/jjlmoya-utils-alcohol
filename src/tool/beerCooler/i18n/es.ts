import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'enfriador-cerveza';
const title = 'Calculadora de Enfriamiento de Cerveza';
const description = 'Calcula cuánto tiempo tarda tu cerveza en enfriarse en la nevera o el congelador según el envase.';

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
const bibliographyTitle = 'Bibliografía y Fuentes';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: "¿La cerveza se 'quema' si se enfría muy rápido?",
    answer: "No. El mito de 'quemar' la cerveza por choque térmico es falso. Lo que sí puede afectarla es congelarla y descongelarla repetidamente, lo que rompe las proteínas y enturbia el líquido, o dejarla al sol (UV).",
  },
  {
    question: "¿Por qué la espuma sale disparada si está caliente?",
    answer: "Ley de Henry. La solubilidad del CO2 disminuye al aumentar la temperatura. En una cerveza caliente, el gas está 'desesperado' por escapar. Al abrirla, la presión baja y el gas se expande violentamente.",
  },
  {
    question: "¿Cuál es la temperatura de servicio ideal según el estilo de cerveza?",
    answer: "Depende del estilo. Las Lagers y Pilsners están mejor entre 3°C y 7°C. Las IPAs y Pale Ales brillan entre 7°C y 10°C. Las Stouts, Porters y ales complejas deben servirse más cálidas, entre 10°C y 13°C, para que sus compuestos aromáticos se abran completamente.",
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

const bibliography: BeerCoolerLocaleContent['bibliography'] = [
  {
    name: "Newton's Law of Cooling - Physics Hypertextbook",
    url: "https://physics.info/newton-cooling/",
  },
  {
    name: "The Science of Better Beer - American Chemical Society",
    url: "https://www.acs.org/content/acs/en/pressroom/reactions/videos/2016/the-science-of-better-beer.html",
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
    title: 'Consejo Pro: Pre-enfría el Vaso',
    html: 'El vaso en el que sirves la cerveza tiene una masa térmica significativa. Un vaso caliente puede subir la temperatura de una cerveza perfectamente fría en 2-3°C al instante. Mete el vaso de servicio en el congelador 5 minutos antes de servir, o enjuágalo con agua fría. Este simple paso prolonga la ventana en que tu cerveza sabe exactamente como debe.'
  },
  {
    type: 'summary',
    title: '¿Para quién es esta herramienta?',
    items: [
      'Cerveceros caseros: Para saber exactamente cuándo su lote estará listo para el consumo.',
      'Anfitriones de eventos: Para planificar el tiempo de enfriado antes de que lleguen los invitados.',
      'Curiosos de la ciencia: Para entender la física detrás de algo tan cotidiano como enfriar una cerveza.'
    ]
  },
  {
    type: 'title',
    text: 'Entendiendo la Constante de Enfriamiento',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'La constante de enfriamiento k en la ecuación de Newton no es un valor universal fijo — es una propiedad empírica de cada envase y medio específico. Una delgada lata de aluminio en agua con hielo tiene un k radicalmente diferente al de una gruesa botella de vidrio en el aire quieto de un frigorífico. Nuestra calculadora utiliza valores medidos y calibrados con experimentos reales para cada tipo de envase, dándote predicciones precisas al minuto en escenarios domésticos típicos.'
  },
  {
    type: 'paragraph',
    html: 'El movimiento del fluido también juega un papel crucial. En un frigorífico convencional, el aire casi estático ralentiza la transferencia de calor. En cambio, cuando introduces una lata en agua con hielo, la convección forzada actúa como un amplificador térmico que puede multiplicar la velocidad de enfriamiento por un factor de 10 o más. Por eso el truco de girar la botella en agua fría es tan efectivo: cada rotación renueva la capa límite de agua caliente que se forma alrededor del envase.'
  }
];

const schemas: BeerCoolerLocaleContent['schemas'] = [
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
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
