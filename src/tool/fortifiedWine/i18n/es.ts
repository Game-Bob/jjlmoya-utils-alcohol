import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'constructor-vino-fortificado';
const title = 'Constructor de Vino Fortificado y Vermut: Cuadrado de Pearson';
const description = 'Calcula exactamente cuánto alcohol añadir a tu vino para alcanzar el grado deseado. Crea vermut, oporto y jerez perfectos con el método del Cuadrado de Pearson.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: '¿Qué estás creando?',
  intentionVermouth: 'Vermut',
  intentionPort: 'Oporto',
  intentionSherry: 'Jerez',
  intentionCustom: 'Personalizado',
  modeALabel: 'Desde el vino que tengo',
  modeBLabel: 'Volumen final objetivo',
  wineSection: 'Vino Base',
  wineVolumeLabel: 'Volumen de vino (L)',
  wineAbvLabel: 'Graduación del vino (%)',
  spiritSection: 'Alcohol Fortificante',
  spiritAbvLabel: 'Graduación del alcohol (%)',
  brandyPreset: 'Brandy (38°)',
  neutralPreset: 'Neutro (96°)',
  aguardientePreset: 'Aguardiente (42°)',
  targetAbvLabel: 'Graduación objetivo (%)',
  targetVolumeLabel: 'Volumen total objetivo (L)',
  resultsTitle: 'Tu Receta',
  addLabel: 'Añadir',
  finalVolumeLabel: 'Volumen final',
  bottlesSection: 'Botellas necesarias',
  copyBtn: 'Copiar Receta',
  copiedBtn: '¡Copiado!',
  pearsonTitle: 'Cuadrado de Pearson',
  wineCornerLabel: 'Vino',
  spiritCornerLabel: 'Alcohol',
  emptyState: 'Introduce tus valores para ver el Cuadrado de Pearson',
  errorAbv: 'La graduación del alcohol debe ser mayor que el objetivo, y el objetivo mayor que la del vino.',
  errorMode: 'Introduce un volumen válido para calcular.',
};

const faqTitle = 'Preguntas Frecuentes';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: '¿Qué es el método del Cuadrado de Pearson?',
    answer: 'El Cuadrado de Pearson es un método gráfico sencillo usado en enología para calcular proporciones de mezcla. Se coloca la graduación objetivo en el centro, la del vino en la esquina superior izquierda y la del alcohol en la inferior izquierda. Las diferencias en diagonal dan las partes proporcionales de cada líquido.',
  },
  {
    question: '¿Cuál es la graduación típica del vermut?',
    answer: 'El vermut tradicional oscila entre el 15% y el 18% de alcohol. El vermut seco (estilo francés) suele estar en la parte baja (15-16%), mientras que el vermut dulce (estilo italiano) llega al 16-18%.',
  },
  {
    question: '¿Qué vino base debo usar para el vermut?',
    answer: 'Lo ideal es un vino blanco seco y neutro de entre el 10-12% de alcohol. El vino da la estructura base; como será aromatizado con hierbas y botánicos, no necesitas uno caro — una base limpia y ácida es perfecta.',
  },
  {
    question: '¿Puedo usar alcohol neutro en vez de brandy?',
    answer: 'Sí. El alcohol neutro (96%) te da máximo control y un perfil más limpio. El brandy aporta su propio carácter (roble, fruta pasa, vainilla) que puede ser deseable o no según el estilo. El oporto usa tradicionalmente aguardiente vínico.',
  },
  {
    question: '¿Cómo conserva el vino la fortificación?',
    answer: 'Cuando el alcohol supera aproximadamente el 15-16%, la levadura deja de fermentar. Por eso los vinos fortificados tienen una vida útil mucho mayor: el alcohol actúa como conservante natural contra levaduras y bacterias.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Elige tu estilo', text: 'Selecciona Vermut, Oporto, Jerez o Personalizado para preconfigurar la graduación objetivo recomendada.' },
  { name: 'Introduce los datos del vino', text: 'Introduce el volumen de tu vino base (o el volumen total objetivo en el Modo B) y su graduación actual.' },
  { name: 'Configura el alcohol', text: 'Elige un preset de alcohol o introduce una graduación personalizada. El Cuadrado de Pearson se actualiza en tiempo real.' },
  { name: 'Lee tu receta', text: 'La calculadora te indica exactamente cuántos litros de alcohol añadir y el volumen final resultante.' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'El Cuadrado de Pearson: Matemática Antigua, Vino Perfecto', level: 2 },
  {
    type: 'paragraph',
    html: 'El <strong>Cuadrado de Pearson</strong> es una de las herramientas más antiguas y elegantes de la matemática enológica. Desarrollado en el siglo XIX, permite a cualquier elaborador —profesional o aficionado— calcular proporciones de mezcla con solo sumas y restas. Nuestra herramienta digitaliza este método visual y añade retroalimentación en tiempo real.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Vermut', value: '15–18% Vol.', icon: 'mdi:glass-cocktail' },
      { label: 'Oporto', value: '18–20% Vol.', icon: 'mdi:bottle-wine' },
      { label: 'Jerez', value: '15–17% Vol.', icon: 'mdi:cup-water' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: '¿Por qué fortify al 18%?',
    icon: 'mdi:shield-check',
    html: 'A partir de aproximadamente el 15% de alcohol, el <em>Saccharomyces cerevisiae</em> —la levadura principal del vino— queda inhibida. Al llegar al 18%, la fermentación se detiene completamente. Por eso el oporto conserva azúcar residual: el aguardiente se añade a mitad de la fermentación, matando la levadura antes de que consuma todo el azúcar.',
  },
  {
    type: 'tip',
    title: 'Consejo Pro: Mide a 20°C',
    html: 'La densidad del alcohol cambia con la temperatura. Las medidas oficiales de graduación se calibran a 20°C. Si tu alcohol o vino está más frío o caliente, aplica una corrección: aproximadamente +0,04% por cada °C por debajo de 20°C.',
  },
  { type: 'title', text: 'El Renacimiento del Vermut Artesanal', level: 2 },
  {
    type: 'paragraph',
    html: 'El sur de Europa vive un renacimiento del vermut artesanal. Barcelona, Valencia y San Sebastián han recuperado <em>la hora del vermut</em> como institución cultural, y pequeños productores de España, Italia y Francia están embotellando expresiones notables. Esto ha creado una nueva generación de elaboradores caseros que necesitan herramientas técnicas a la altura de su ambición.',
  },
  {
    type: 'summary',
    title: '¿Para quién es esta herramienta?',
    items: [
      'Elaboradores caseros: Fortifica tu cosecha con precisión en lugar de a ojo.',
      'Productores de vermut artesanal: Prototipa nuevas graduaciones objetivo antes de escalar a lotes completos.',
      'Educadores: Demuestra el método del Cuadrado de Pearson visualmente en talleres.',
    ],
  },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
