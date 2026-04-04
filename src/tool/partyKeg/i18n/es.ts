import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'calculadora-barriles-fiesta';
const title = 'Calculadora de Cerveza y Hielo para Eventos';
const description = 'Calcula cuánto alcohol y cuántas bolsas de hielo necesitas para tu fiesta según los invitados, la duración y la temperatura.';

const ui: PartyKegUI = {
  calcStockTitle: 'Calculadora de Stock',
  beerIceSub: 'Cerveza y Hielo para Eventos',
  guestsLabel: 'Invitados',
  durationLabel: 'Duración',
  hoursUnit: 'Horas',
  intensityLabel: 'Intensidad',
  chillLabel: 'Chill',
  standardLabel: 'Standard',
  partyLabel: 'Party',
  tempLabel: 'Temperatura',
  estimatedVolLabel: 'Volumen Estimado',
  kegsLabel: 'Barriles',
  iceRequiredLabel: 'Hielo Requerido',
  bagsLabel: 'Bolsas',
  visualizationTitle: 'Visualización de Stock',
  optimalMsg: 'Condiciones Óptimas',
  highMeltMsg: 'Alto Deshielo Detectado',
  highEfficiencyMsg: 'Ambiente Frío / Eficiencia Alta'
};

const faqTitle = 'Preguntas Frecuentes';
const bibliographyTitle = 'Bibliografía y Fuentes';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "¿Cuántas cervezas bebe una persona en 4 horas?",
    answer: "De media, calcula 5 cervezas por persona para un evento de 4 horas. Esto asume 2 bebidas la primera hora y 1 por cada hora restante.",
  },
  {
    question: "¿Cuánto hielo necesito para 100 cervezas?",
    answer: "Necesitarás aproximadamente 15-20 kilos de hielo (7-10 bolsas). La regla general es 1kg de hielo por cada litro de bebida si hace calor (>25°C).",
  },
  {
    question: "¿Cuál es la diferencia entre un barril estándar y un barril de fiesta?",
    answer: "Un barril comercial estándar contiene 50 litros, lo que equivale a unas 200 raciones de 250ml. Un barril de fiesta (mini-barril) suele contener 5 litros — unas 20 raciones. Conocer estos volúmenes te ayuda a convertir la salida en litros de la calculadora al número de envases que debes comprar.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "Estimar el número de invitados",
    text: "Define cuántas personas asistirán. Nuestra calculadora ajusta las cantidades basándose en promedios estadísticos de consumo.",
  },
  {
    name: "Definir la duración y la intensidad",
    text: "Indica cuántas horas durará el evento y el 'ritmo' de la fiesta (tranquilo, estándar o intenso).",
  },
  {
    name: "Ajustar por temperatura ambiente",
    text: "La temperatura exterior es clave para el cálculo del hielo. A más calor, mayor será la tasa de deshielo que debemos compensar.",
  },
];

const bibliography: PartyKegLocaleContent['bibliography'] = [
  {
    name: "Event Planning: Alcohol & Bar Calculations - Spruce Eats",
    url: "https://www.thespruceeats.com/how-much-alcohol-for-a-party-1191060",
  },
  {
    name: "Thermodynamics of Ice Melting - Engineering Toolbox",
    url: "https://www.engineeringtoolbox.com/ice-thermal-properties-d_156.html",
  },
];

const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: '¿Cuánta Cerveza y Hielo necesito para mi Fiesta?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'La pregunta del millón al organizar cualquier evento: <strong>¿Cuántos litros de cerveza debo comprar?</strong> Quedarse corto es un desastre, pero comprar de más es un gasto innecesario. Esta herramienta te ayuda a calcular la cantidad exacta de alcohol y, lo más importante, <strong>cuántas bolsas de hielo</strong> necesitas para mantenerlo frío.'
  },
  {
    type: 'title',
    text: 'Fórmula de Consumo por Persona',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Para estimar el alcohol necesario, los caterings profesionales utilizan una fórmula basada en la "Tasa de Consumo por Hora". No es una ciencia exacta, pero las estadísticas nos dicen que en una fiesta estándar se beben unas 1.5 unidades/hora por persona.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Consumo Chill', value: '1 bebida/hora', icon: 'mdi:tea-outline' },
      { label: 'Fiesta Estándar', value: '1.5 bebidas/hora', icon: 'mdi:glass-mug-variant' },
      { label: 'Boda / Festival', value: '2.5+ bebidas/hora', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: 'La Física del Hielo',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Termodinámica',
    html: 'Calcular el hielo es donde la mayoría falla. El hielo cumple dos funciones: Enfriar (de 25°C a 4°C) y Mantener (luchar contra el calor ambiental). Si la temperatura supera los 30°C, la velocidad de fusión se duplica.'
  },
  {
    type: 'tip',
    title: 'Consejo Profesional para Ahorrar Hielo',
    html: 'Mantén los barriles o latas a la sombra antes de ponerles el hielo. Si las bebidas están calientes al sol, el 50% de tu primera bolsa de hielo morirá en 10 minutos solo intercambiando calor latente. Comienza siempre con bebidas pre-enfriadas para reducir drásticamente la cantidad de hielo que realmente necesitas comprar.'
  },
  {
    type: 'title',
    text: 'Datos de Referencia para Logística',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Un barril estándar de 50L rinde unas 200 cañas. Una bolsa de hielo típica pesa 2kg. Conociendo estos datos, puedes planificar el transporte y el almacenamiento necesario para tu evento sin sorpresas de última hora. Ten también en cuenta el deshielo durante el transporte: un trayecto de 30 minutos en verano puede costarte una bolsa entera antes de que empiece la fiesta.'
  },
  {
    type: 'paragraph',
    html: 'Una variable que a menudo se pasa por alto es la <strong>tasa de abandono de invitados</strong>. En la mayoría de fiestas, el 10-15% de los invitados se van antes y el 10% puede que no beban en absoluto. La calculadora aplica un margen de seguridad conservador para que nunca te quedes corto, sin que tampoco te sobre demasiado. Entender estos ajustes te ayuda a afinar la estimación para tu grupo y contexto específicos.'
  },
  {
    type: 'summary',
    title: '¿Para quién es esta herramienta?',
    items: [
      'Anfitriones de fiestas privadas: Compra exactamente lo que necesitas sin quedarte corto ni malgastar.',
      'Organizadores de eventos: Usa modelos de consumo precisos para planificar la logística del bar profesionalmente.',
      'Gestores de locales: Estandariza los cálculos de stock para eventos recurrentes con diferentes aforos.'
    ]
  },
  {
    type: 'paragraph',
    html: 'Redondea siempre al alza cuando compres, ya que devolver barriles abiertos generalmente no es posible. Un pequeño exceso es siempre preferible a quedarse sin bebida a mitad de fiesta — es mejor que sobren unas cañas a que la velada termine prematuramente por falta de stock.'
  }
];

const schemas: PartyKegLocaleContent['schemas'] = [
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

export const content: PartyKegLocaleContent = {
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
