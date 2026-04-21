import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'laboratorio-de-jello-shots';
const title = 'Jello Shot Lab: Calculadora de Gelatina y Alcohol Perfecta';
const description = 'Calcula exactamente cuánto licor y gelatina necesitas para que tus jello shots cuajen siempre. Evita los fallos líquidos o demasiado duros con proporciones respaldadas por la ciencia.';

const ui: JelloShotLabUI = {
  title: 'Jello Shot Lab',
  description: 'La proporción exacta de gelatina, agua y alcohol para que tus shots cuajen a la perfección.',
  liquorBaseLabel: 'Tipo de Licor',
  liquorAbvLabel: 'Graduación del Destilado (%)',
  gelatinLabel: 'Tipo de Gelatina',
  diluentLabel: 'Base de Agua',
  calculateBtn: 'Calcular',
  modePrecision: 'Modo Precisión',
  modeIntensity: 'Fuerza del Shot',
  modeIntensityLight: 'Suave',
  modeIntensityBalanced: 'Estándar',
  modeIntensityLimit: 'Máximo',
  partyPlannerTitle: 'Planificador de Fiesta',
  partyPlannerGuestLabel: 'Invitados',
  partyPlannerShotsPerGuest: 'Shots por persona',
  multiLayerTitle: 'Multicapa',
  howToTitle: 'Cómo Hacerlos',
  proTipsTitle: 'Consejos Pro',
  resultsTitle: 'Tu Receta',
  totalVolumeLabel: 'Volumen Total',
  boilingWaterLabel: 'Agua Caliente',
  alcoholVolumeLabel: 'Licor',
  packetsNeededLabel: 'Sobres de Gelatina',
  chillingTimeLabel: 'Tiempo en Nevera',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'sobres',
  modeParty: 'Modo Fiesta',
  modeRecipe: 'Modo Receta',
};

const faqTitle = 'Preguntas Frecuentes';
const bibliographyTitle = 'Fuentes y Referencias';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: '¿Por qué el alcohol de alta graduación impide que cuaje la gelatina?',
    answer: 'El etanol interfiere con los enlaces de hidrógeno que mantienen la estructura de triple hélice de las proteínas de la gelatina. Cuando el alcohol supera aproximadamente el 35% del volumen total del líquido, la red proteica no puede formarse de manera estable y el shot permanece líquido. A mayor graduación del licor, menor volumen puedes añadir antes de superar este límite.',
  },
  {
    question: '¿Cuál es la proporción máxima de alcohol antes de que los jello shots no cuajen?',
    answer: 'El límite seguro es aproximadamente un 30–35% del volumen total siendo licor de 40% de alcohol. Con un alcohol neutro al 96%, ese límite baja a un 15–18% del volumen total. Nuestra calculadora tiene en cuenta la graduación del licor para que nunca superes el umbral de cuaje.',
  },
  {
    question: '¿Importa qué licor uso — vodka, ron o tequila?',
    answer: 'Lo que importa es la graduación, no el tipo de licor. Un vodka al 40% y un ron al 40% se comportan de forma idéntica en la matriz de gelatina. Sin embargo, los licores con mayor contenido en azúcar (como algunos rones o licores) pueden mejorar ligeramente la textura, ya que el azúcar compite con el etanol por los enlaces de hidrógeno.',
  },
  {
    question: '¿Cuánto tiempo duran los jello shots en la nevera?',
    answer: 'Los jello shots bien preparados duran 3–5 días en la nevera cubiertos con film transparente. El alto contenido en alcohol actúa como conservante natural. Evita dejarlos a temperatura ambiente más de 2 horas, ya que la gelatina se ablanda y las bacterias pueden multiplicarse.',
  },
  {
    question: '¿Puedo hacer mis jello shots más firmes o más blandos?',
    answer: 'Sí. Usa más gelatina (o medio sobre extra) para shots más firmes que salgan bien del vasito. Usa un poco menos para una textura más temblorosa y suave. Nunca sustituyas la gelatina por agar-agar si buscas una textura que se derrita en la boca: el agar cuaja más duro y se funde a mayor temperatura.',
  },
  {
    question: '¿Puedo congelar los jello shots para enfriarlos más rápido?',
    answer: 'No. Congelarlos rompe la red de gelatina, resultando en una textura acuosa y granulosa al descongelarlos. Refrigera siempre un mínimo de 4 horas. Para fiestas, prepáralos la noche anterior: 8 horas o más dan la mejor textura.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'Elige tu licor', text: 'Introduce la graduación de tu licor y elige la fuerza del shot que quieres. La calculadora te mostrará el volumen máximo de alcohol que tu gelatina puede absorber.' },
  { name: 'Disuelve la gelatina', text: 'Vierte el agua hirviendo calculada en un bol. Añade el polvo de gelatina y remueve con energía durante 2 minutos hasta que se disuelva completamente. No añadas alcohol todavía.' },
  { name: 'Añade el licor', text: 'Deja enfriar la mezcla de gelatina 5–10 minutos hasta que esté caliente pero no quemante (por debajo de 50°C). Añade el licor y remueve suavemente para evitar burbujas.' },
  { name: 'Vierte y refrigera', text: 'Vierte en vasitos de plástico, moldes de silicona o chupiteros pequeños. Refrigera un mínimo de 4 horas — una noche entera es ideal. No congeles.' },
];

const bibliography: JelloShotLabLocaleContent['bibliography'] = [
  { name: 'Gelatina — Wikipedia', url: 'https://es.wikipedia.org/wiki/Gelatina' },
  { name: 'Gelatin — Wikipedia (EN)', url: 'https://en.wikipedia.org/wiki/Gelatin' },
  { name: 'McGee, H. — La Cocina y los Alimentos (Editorial Debate, 2007)', url: 'https://www.penguinlibros.com/es/gastronomia/148-la-cocina-y-los-alimentos-9788483067628.html' },
  { name: 'López-Alt, J.K. — The Food Lab: Mejor Cocina en Casa a través de la Ciencia', url: 'https://www.seriouseats.com/the-food-lab-better-home-cooking-through-science' },
];

const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'La Química Detrás de un Jello Shot Perfecto', level: 2 },
  {
    type: 'paragraph',
    html: 'Un jello shot no es solo gelatina con alcohol: es una <strong>suspensión coloidal delicada</strong> donde polímeros proteicos, agua y etanol compiten por los mismos enlaces de hidrógeno. Si te equivocas en la proporción, acabas con un charco de líquido dulce o un disco de goma que rebota en la mesa. Acertando la fórmula, obtienes un shot perfectamente tembloroso que sale del vasito de un solo golpe limpio.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Suave', value: '~30% licor', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Estándar', value: '~45% licor', icon: 'mdi:flask-outline' },
      { label: 'Máximo', value: '~55% licor', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: '¿Qué es la fuerza Bloom?',
    icon: 'mdi:molecule',
    html: 'Bloom es la medida de la capacidad gelificante de la gelatina, normalmente entre 50 y 300 Bloom. La gelatina de supermercado suele estar entre 150–200 Bloom. A mayor Bloom, gel más firme con la misma cantidad de polvo, lo que significa que aguanta algo más de alcohol antes de no cuajar. Un sobre estándar de 7g está calibrado para unos 240ml de líquido.',
  },
  {
    type: 'card',
    title: 'El Límite del Etanol',
    icon: 'mdi:alert-circle-outline',
    html: 'El etanol compite con el agua por los sitios de unión por hidrógeno en las cadenas de aminoácidos del colágeno. Cuando el etanol ocupa demasiados de esos sitios, la proteína no puede plegarse en la triple hélice estable que da estructura a la gelatina. El límite práctico es aproximadamente <strong>1 parte de licor al 40% por cada 1 parte de agua</strong>: más de eso y el shot no cuajará aunque esperes días.',
  },
  {
    type: 'tip',
    title: 'Nunca añadas el alcohol a la gelatina hirviendo',
    html: 'El alcohol se evapora rápidamente por encima de los 78°C. Deja siempre que la gelatina disuelta se enfríe por debajo de los 50°C antes de añadir el licor. Este solo paso es responsable de más jello shots fallidos que cualquier otro error.',
  },
  { type: 'title', text: 'Guía de Solución de Problemas', level: 2 },
  {
    type: 'proscons',
    title: 'Síntomas y Soluciones',
    items: [
      { pro: 'Shot líquido tras 4 horas → Demasiado alcohol. Reduce el volumen de licor.', con: 'No se nota el alcohol → Añadiste el licor cuando la mezcla aún estaba demasiado caliente.' },
      { pro: 'Shot demasiado duro y gomoso → Demasiada gelatina. Reduce medio sobre la próxima vez.', con: 'Shot turbio → Burbujas atrapadas. Remueve suavemente y deja reposar antes de verter.' },
      { pro: 'Textura granulosa → La gelatina no se disolvió bien. Remueve más tiempo en agua caliente.', con: 'Shot no cuaja tras 8 horas → Se superó el límite de etanol. Usa menos licor o de menor graduación.' },
    ],
  },
  {
    type: 'summary',
    title: '¿Para quién es esta herramienta?',
    items: [
      'Anfitriones de fiestas: Calcula exactamente cuántos sobres y cuánto licor necesitas antes de comprar.',
      'Bartenders: Escala a producción en grandes lotes con resultados consistentes cada vez.',
      'Cocineros caseros: Evita los fallos más comunes: shots líquidos, textura gomosa o sin sabor a alcohol.',
    ],
  },
];

const schemas: JelloShotLabLocaleContent['schemas'] = [
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

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliographyTitle, bibliography, howTo, schemas };
