import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'calculadora-carbonatacion';
const title = 'Calculadora de Carbonatación y Priming';
const description = 'Calcula los gramos exactos de Dextrosa, Azúcar de Mesa o DME (Extracto de Malta Seco) para embotellar tu cerveza casera. Introduce el volumen, la temperatura de fermentación y el estilo para un priming perfecto.';

const ui: CarbonationUI = {
  parametersTitle: 'Parámetros',
  metricBtn: 'Métrico',
  imperialBtn: 'Imperial',
  volumeLabel: 'Volumen de Cerveza',
  maxTempLabel: 'Temperatura Máxima',
  litersUnit: 'Litros',
  celsiusUnit: '°C',
  gallonsUnit: 'Galones',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'Carbonatación Deseada',
  volUnit: 'Vol CO2',
  resultsTitle: 'Resultados de Priming',
  tableSugarLabel: 'Azúcar de Mesa',
  cornSugarLabel: 'Dextrosa (Maíz)',
  dmeLabel: 'Extracto Seco (DME)',
  safetyTitle: '¡PELIGRO EXPLOSIÓN!',
  lowCarbonation: 'BAJA CARBONATACIÓN',
  optimalCarbonation: 'CARBONATACIÓN ÓPTIMA',
  highEffervescence: 'ALTA EFERVESCENCIA',
  bubblingVisualizationLabel: 'Visualización aproximada de burbujas'
};

const faqTitle = 'Preguntas Frecuentes';
const bibliographyTitle = 'Bibliografía y Fuentes';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "¿Por qué influye la temperatura en el cálculo?",
    answer: "El CO2 residual que ya tiene tu cerveza depende de la temperatura máxima alcanzada tras la fermentación: el líquido frío retiene más gas disuelto que el caliente. Si introduces una temperatura más baja de la real, la calculadora asumirá más residual del que hay y te dará menos azúcar del necesario. Si la introduces más alta, ocurre lo contrario: añadirás más azúcar de la cuenta y entrarás en la zona de peligro de las bombas de botella — botellas que explotan por exceso de presión.",
  },
  {
    question: "¿Qué azúcar es mejor para el priming?",
    answer: "La dextrosa (azúcar de maíz) es la preferida por ser neutra y disolverse rápido. El azúcar de mesa funciona bien pero requiere un 10% menos de peso.",
  },
  {
    question: "¿Qué pasa si añado demasiado azúcar de priming?",
    answer: "Un exceso de azúcar genera una presión de CO2 excesiva dentro de la botella. Las botellas de vidrio estándar fallan a partir de 3.5-4.0 volúmenes de CO2. Por encima de este punto, la botella puede romperse violentamente o el tapón puede saltar disparado. Por eso la precisión es crítica — incluso 5 gramos extra por litro pueden llevar un lote a la zona de peligro.",
  },
  {
    question: "¿Cuánto tiempo tarda la cerveza en carbonatarse tras el embotellado?",
    answer: "Entre 2 y 3 semanas a temperatura ambiente (18-22°C) es el rango habitual para que la levadura fermente completamente el azúcar añadido y el CO2 se integre en el líquido. Abrir una botella antes de que el proceso termine da siempre una lectura engañosa: la cerveza parecerá poco carbonatada aunque el proceso siga en marcha. Con el DME el proceso puede ser ligeramente más lento por la complejidad de sus azúcares fermentables.",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "Medir el volumen real",
    text: "Indica cuántos litros (o galones) de cerveza tienes listos para embotellar una vez terminada la fermentación.",
  },
  {
    name: "Definir la temperatura de fermentación",
    text: "Introduce la temperatura más alta que alcanzó la cerveza durante o después de la fermentación activa.",
  },
  {
    name: "Elegir el estilo o volumen de CO2",
    text: "Selecciona el nivel de carbonatación deseado. Los estilos varían desde 1.5 (Stouts) hasta 4.5 (Wheat Beers).",
  },
];

const bibliography: CarbonationLocaleContent['bibliography'] = [
  {
    name: "How to Brew: Carbonation Tables - John Palmer",
    url: "https://howtobrew.com/section-1/chapter-11/",
  },
  {
    name: "BJCP Style Guidelines: Carbonation Levels",
    url: "https://www.bjcp.org/style/2021/beer/",
  },
];

const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Guía Definitiva de Carbonatación y Priming',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Domina el arte del "priming" y transforma tu cerveza casera de un experimento plano a una experiencia profesional efervescente. El cebado consiste en añadir azúcar para que la levadura genere CO2 natural dentro de la botella.'
  },
  {
    type: 'proscons',
    title: 'Factores Críticos de Éxito',
    items: [
      { pro: 'Temperatura: El CO2 residual depende del pico térmico post-fermentación.', con: '' },
      { pro: 'Precisión: 5 gramos pueden ser la diferencia entre una buena cerveza y un géiser.', con: '' },
      { pro: '', con: 'Oxidación: Evita chapotear el líquido al trasvasar para mezclar el azúcar.' }
    ]
  },
  {
    type: 'title',
    text: 'Volúmenes de CO2 por Estilo',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'British Stouts', value: '1.5 - 2.0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2.2 - 2.6 Vol', icon: 'mdi:hops' },
      { label: 'German Wheat', value: '3.3 - 4.5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: '¿Qué azúcar elegir?',
    icon: 'mdi:corn',
    html: 'La <strong>Dextrosa</strong> es neutra y profesional. El <strong>Azúcar de Mesa</strong> es económica y efectiva (usa un 10% menos). El <strong>DME</strong> es el purista pero más difícil de predecir.'
  },
  {
    type: 'diagnostic',
    title: 'Advertencia de Seguridad',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Peligro',
    html: 'Las botellas de vidrio estándar fallan a partir de 3.5-4.0 volúmenes de CO2. No intentes carbonatar estilos belgas o de trigo en vidrio fino. Utiliza siempre botellas homologadas para bebidas con gas, y nunca reutilices botellas comerciales que puedan tener daños estructurales microscópicos por usos anteriores.'
  },
  {
    type: 'tip',
    title: 'Consejo Pro: Disuelve el Azúcar Correctamente',
    html: 'Hierve siempre la solución de azúcar de priming (azúcar disuelto en unos 250ml de agua por cada 20L de lote) durante 10 minutos antes de añadirla a la cerveza. La ebullición sanea la solución y garantiza una distribución homogénea en todo el lote, evitando puntos calientes que causan una carbonatación desigual entre botellas.'
  },
  {
    type: 'summary',
    title: '¿Para quién es esta herramienta?',
    items: [
      'Cerveceros Caseros: Obtén el cálculo exacto de azúcar de priming para cualquier volumen, estilo y temperatura.',
      'Aficionados a la Cerveza Artesanal: Entiende la ciencia detrás de los distintos niveles de carbonatación.',
      'Cerveceros Profesionales: Verifica cálculos manuales antes de embotellar lotes comerciales importantes.'
    ]
  },
  {
    type: 'title',
    text: 'La Ciencia de la Carbonatación: Ley de Henry',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'En su esencia, la carbonatación está gobernada por la <strong>Ley de Henry</strong>: la cantidad de gas disuelto en un líquido es proporcional a la presión parcial de ese gas sobre el líquido. Cuando primeas una botella y la sellas, la levadura consume el azúcar y produce CO2 en un entorno cerrado. La presión aumenta y el gas es forzado a disolverse de nuevo en el líquido. La temperatura a la que se produce este equilibrio determina el nivel de carbonatación final — por eso la temperatura de fermentación es la variable más crítica en esta calculadora.'
  },
  {
    type: 'paragraph',
    html: 'El CO2 residual en tu cerveza antes del priming no es cero. Cada cerveza retiene CO2 disuelto del proceso de fermentación, y la cantidad retenida depende de la temperatura más alta que alcanzó la cerveza. Una cerveza fermentada a 22°C retiene significativamente menos CO2 residual que una fermentada a 16°C, aunque ambas estén ahora frías. No tener en cuenta este residual lleva a una sobre-carbonatación sistemática — uno de los errores más comunes entre los cerveceros principiantes.'
  },
  {
    type: 'paragraph',
    html: 'El tiempo de condicionamiento también importa. Tras el embotellado con azúcar de priming, la cerveza necesita entre 2 y 3 semanas a temperatura ambiente (18-22°C) para que la levadura fermente completamente el azúcar añadido y el CO2 se integre en el líquido. Una carbonatación prematura — probar la cerveza antes de que el proceso termine — siempre dará una falsa lectura de subida de carbonatación.'
  }
];

const schemas: CarbonationLocaleContent['schemas'] = [
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

export const content: CarbonationLocaleContent = {
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
