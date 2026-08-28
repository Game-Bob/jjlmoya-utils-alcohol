import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'calculadora-eficiencia-macerado-cerveza';
const title = 'Calculadora de Eficiencia de Macerado de Cerveza';
const description = 'Calcula el porcentaje de eficiencia del macerado, la extracción de azúcares y la densidad inicial esperada para recetas de cerveza casera y artesanal.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Métrico',
  stagePreboil: 'Mosto Pre-hervido',
  stagePostboil: 'Mosto Post-hervido',
  unitImperial: 'Imperial',
  labels: {
    grainWeight: 'Peso Total de la Malta / Grano',
    grainType: 'Potencial de Malta',
    customPotential: 'Potencial de Malta Personalizado (SG)',
    wortVolume: 'Volumen de Mosto Pre-hervido',
    measuredSg: 'Densidad Específica Medida (SG)',
    unitSystem: 'Sistema de Unidades',
    sampleTemp: 'Temperatura de Muestra',
    calibTemp: 'Temperatura Calibración',
    stageLabel: 'Etapa de Muestreo',
    presets: 'Potenciales de Malta Habituales',
  },
  units: {
    weightKg: 'kg',
    weightLb: 'lb',
    volumeL: 'L',
    volumeGal: 'gal',
    sg: 'SG',
    brix: 'Brix',
    percent: '%',
    tempC: '°C',
    tempF: '°F',
  },
  grainPresets: {
    pilsner: 'Malta Pilsner (1.037 / 37 PPG)',
    pale_ale: 'Malta Pale Ale (1.038 / 38 PPG)',
    vienna: 'Malta Viena (1.036 / 36 PPG)',
    munich: 'Malta Múnich (1.035 / 35 PPG)',
    wheat: 'Malta de Trigo (1.038 / 38 PPG)',
    caramel_30: 'Caramelo 30L (1.034 / 34 PPG)',
    caramel_60: 'Caramelo 60L (1.034 / 34 PPG)',
    chocolate: 'Malta Chocolate (1.034 / 34 PPG)',
    custom: 'Potencial Personalizado...',
  },
  results: {
    efficiencyTitle: 'Eficiencia de Macerado',
    efficiencyBadge: 'Estado Calculado',
    correctedGravity: 'SG Corregida por Temp',
    measuredGravity: 'Densidad Medida',
    expectedGravity75: 'SG a 75% Eficiencia',
    expectedGravity80: 'SG a 80% Eficiencia',
    expectedGravity85: 'SG a 85% Eficiencia',
    potentialPoints: 'Puntos Potenciales Totales',
    extractedPoints: 'Puntos Extraídos Medidos',
    wortBrix: 'Equivalente Brix',
  },
  statusMessages: {
    excellent: 'Excelente Extracción (82%+)',
    good: 'Buena Eficiencia (74% - 81%)',
    average: 'Eficiencia Media (65% - 73%)',
    poor: 'Baja Extracción (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Extracción en la Olla de Macerado',
    wortLevel: 'Nivel de Mosto',
    sugarExtraction: 'Extracción de Azúcar',
  },
};

const faq = [
  {
    question: '¿Qué es la eficiencia de macerado en elaboración de cerveza?',
    answer: 'La eficiencia de macerado es el porcentaje de azúcares potenciales extraídos de la malta al mosto antes de hervir durante el macerado y lavado.',
  },
  {
    question: '¿Cuál es un buen porcentaje de eficiencia de macerado?',
    answer: 'En elaboración casera, entre 70% y 80% es lo habitual. Las fábricas comerciales con lavado optimizado suelen obtener entre 82% y 90%.',
  },
  {
    question: '¿Cómo se calcula la eficiencia de macerado?',
    answer: 'Compara los puntos de densidad extraídos en el mosto (volumen por puntos de densidad medida) frente al máximo teórico disponible de la malta.',
  },
  {
    question: '¿Cómo puedo mejorar una eficiencia de macerado baja?',
    answer: 'Revisa el moliendo del grano, mantén el pH del macerado entre 5.2 y 5.6, realiza un lavado adecuado y evita canales preferenciales.',
  },
  {
    question: '¿En qué se diferencia la eficiencia de macerado de la eficiencia del equipo?',
    answer: 'La eficiencia de macerado mide la extracción en la olla antes de hervir. La eficiencia global incluye pérdidas en turbio, hervido y fermentador.',
  },
  {
    question: '¿Cómo afecta la relación agua-grano al rendimiento?',
    answer: 'Macerados más fluidos (3.5 a 4.0 L por kg) mejoran la movilidad enzimática y el lavado de azúcares.',
  },
];

const howTo = [
  {
    name: 'Selecciona el sistema de unidades',
    text: 'Elige entre métrico (kg/L) o imperial (lb/gal) según tu equipo.',
  },
  {
    name: 'Introduce el peso y potencial del grano',
    text: 'Elige el tipo de malta habitual o define un potencial personalizado junto con el peso total.',
  },
  {
    name: 'Indica volumen de mosto y densidad medida',
    text: 'Introduce el volumen recogido antes de hervir y la lectura del densímetro o refractómetro.',
  },
  {
    name: 'Revisa la eficiencia y densidades objetivo',
    text: 'Examina el porcentaje calculado y compara tu densidad frente a los objetivos de 75%, 80% y 85%.',
  },
  {
    name: 'Ajusta tu receta para la siguiente elaboración',
    text: 'Usa la eficiencia base calculada para escalar tus futuras recetas con precisión.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes sobre Eficiencia de Macerado',
  bibliographyTitle: 'Referencias y Fórmulas',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Comprender la Eficiencia de Macerado en Cerveza',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La eficiencia de macerado mide con qué eficacia se convierten los almidones del grano en azúcares fermentables y se recogen en el mosto. Conocer tu eficiencia permite formular recetas precisas y obtener resultados constantes.',
    },
    {
      type: 'table',
      headers: ['Parámetro', 'Fórmula', 'Descripción'],
      rows: [
        ['Puntos Potenciales', 'Peso x PPG del Grano', 'Máximo teórico de puntos de densidad'],
        ['Puntos Extraídos', 'Volumen x Puntos SG Medidos', 'Puntos reales de densidad en mosto'],
        ['Eficiencia de Macerado', '(Puntos Extraídos / Potenciales) x 100', 'Porcentaje real de extracción'],
        ['Grados Brix Mosto', '-668.82 + 11.536 x SG x 100...', 'Equivalente en refractómetro'],
      ],
    },
    {
      type: 'title',
      text: 'Factores Clave que Influyen en el Rendimiento',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Molienda de la Malta: Una molienda más fina aumenta la superficie pero puede atascar el lavado.',
        'Temperatura y pH: La actividad enzimática óptima ocurre entre 64°C - 68°C y pH 5.2 - 5.6.',
        'Técnica de Lavado: El flujo continuo o por etapas influye en el enjuague de azúcares.',
        'Relación Agua-Grano: Macerados más fluidos favorecen la movilidad enzimática.',
        'Profundidad de la Cama: Entre 30 cm y 45 cm se optimiza la dinámica del fluido.',
      ],
    },
    {
      type: 'tip',
      title: 'Usa 75% como Base para Diseñar Recetas',
      html: 'Al diseñar una receta nueva, estandarizar una eficiencia base del 75% proporciona un punto de partida fiable antes de ajustar a tu equipo específico.',
    },
    {
      type: 'title',
      text: 'Ajustes en la Elaboración Según los Resultados',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si la densidad medida antes de hervir es inferior a la prevista, puedes prolongar el hervido para concentrar mosto o añadir extracto de malta en polvo.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Eficiencia de Macerado vs Eficiencia Global',
      html: 'No confundas la eficiencia de macerado con la eficiencia global del equipo. El macerado solo mide azúcares en la olla antes de hervir.',
    },
  ],
};
