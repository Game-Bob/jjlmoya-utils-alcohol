import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'kalkulyator-effektivnosti-zatiraniya-piva';
const title = 'Калькулятор эффективности затирания пива';
const description = 'Рассчитайте процент эффективности затирания, экстракцию сахаров и ожидаемую начальную плотность сусла для домашнего пивоварения.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Метрическая',
  stagePreboil: 'Сусло до варки',
  stagePostboil: 'Сусло после варки',
  unitImperial: 'Имперская',
  labels: {
    grainWeight: 'Общий вес солода',
    grainType: 'Потенциал солода',
    customPotential: 'Свой потенциал (SG)',
    wortVolume: 'Объем сусла до варки',
    measuredSg: 'Измеренная плотность (SG)',
    unitSystem: 'Система единиц',
    sampleTemp: 'Температура пробы',
    calibTemp: 'Температура калибровки',
    stageLabel: 'Этап затирания',
    presets: 'Потенциал солода',
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
    pilsner: 'Пилснерный солод (1.037 / 37 PPG)',
    pale_ale: 'Солод Pale Ale (1.038 / 38 PPG)',
    vienna: 'Венский солод (1.036 / 36 PPG)',
    munich: 'Мюнхенский солод (1.035 / 35 PPG)',
    wheat: 'Пшеничный солод (1.038 / 38 PPG)',
    caramel_30: 'Карамельный 30L (1.034 / 34 PPG)',
    caramel_60: 'Карамельный 60L (1.034 / 34 PPG)',
    chocolate: 'Шоколадный солод (1.034 / 34 PPG)',
    custom: 'Свой потенциал...',
  },
  results: {
    efficiencyTitle: 'Эффективность затирания',
    efficiencyBadge: 'Статус расчета',
    correctedGravity: 'Плотность с коррекцией',
    measuredGravity: 'Измеренная плотность',
    expectedGravity75: 'SG при 75%',
    expectedGravity80: 'SG при 80%',
    expectedGravity85: 'SG при 85%',
    potentialPoints: 'Потенциальные очки',
    extractedPoints: 'Извлеченные очки',
    wortBrix: 'Оценка °Brix',
  },
  statusMessages: {
    excellent: 'Отличная экстракция (82%+)',
    good: 'Хорошая эффективность (74% - 81%)',
    average: 'Средняя эффективность (65% - 73%)',
    poor: 'Низкая экстракция (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Экстракция в заторном чане',
    wortLevel: 'Уровень сусла',
    sugarExtraction: 'Экстракция сахаров',
  },
};

const faq = [
  {
    question: 'Что такое эффективность затирания пива?',
    answer: 'Эффективность затирания показывает процент сахаров, извлеченных из солода в сусло до кипячения.',
  },
  {
    question: 'Какая эффективность затирания считается хорошей?',
    answer: 'Для домашнего пивоварения нормальным считается уровень от 70% до 80%.',
  },
  {
    question: 'Как рассчитывается эффективность?',
    answer: 'Сравниваются фактически полученные очки плотности с теоретическим максимумом солода.',
  },
  {
    question: 'Как повысить низкую эффективность?',
    answer: 'Отрегулируйте помол солода, поддерживайте pH затора на уровне 5.2 - 5.6 и промывайте затор равномерно.',
  },
  {
    question: 'В чем разница между эффективностью затирания и варочного порядка?',
    answer: 'Затирание учитывает только экстракцию в заторном чане, а варочный порядок включает потери в варочном котле и ферментере.',
  },
  {
    question: 'Как гидромодуль влияет на выход сахаров?',
    answer: 'Более жидкий затор (3.5 - 4.0 л на кг) улучшает работу ферментов и вымывание экстракта.',
  }
];

const howTo = [
  {
    name: 'Выберите систему единиц',
    text: 'Выберите метрическую или имперскую систему.',
  },
  {
    name: 'Укажите вес и потенциал солода',
    text: 'Выберите солод из списка или введите свой показатель.',
  },
  {
    name: 'Введите объем сусла и плотность',
    text: 'Укажите собранный объем сусла и показания ареометра.',
  },
  {
    name: 'Оцените эффективность и ориентиры',
    text: 'Сравните результат с целевыми показателями 75%, 80% и 85%.',
  },
  {
    name: 'Скорректируйте рецепт на будущее',
    text: 'Используйте полученную эффективность для точного расчета засыпа в следующих варках.',
  }
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
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы об эффективности затирания',
  bibliographyTitle: 'Источники и формулы',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Понимание эффективности затирания пива',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Эффективность затирания измеряет, насколько результативно крахмал солода преобразуется в сбраживаемые сахара и собирается в сусло. Это основа точного расчета рецептов.',
    },
    {
      type: 'table',
      headers: ['Параметр', 'Формула', 'Описание'],
      rows: [
        ['Потенциальные очки', 'Вес x PPG', 'Теоретический максимум'],
        ['Извлеченные очки', 'Объем x очки SG', 'Реальные очки в сусле'],
        ['Эффективность затирания', '(Извлеченные / Потенциал) x 100', 'Реальный процент экстракции'],
        ['Brix сусла', '-668.82 + 11.536 x SG x 100...', 'Значение рефрактометра']
      ],
    },
    {
      type: 'title',
      text: 'Факторы, влияющие на экстрактивность',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Помол солода: Более тонкий помол увеличивает поверхность, но может затруднить фильтрацию.',
        'Температура и pH: Оптимальная активность ферментов при 64°C - 68°C и pH 5.2 - 5.6.',
        'Техника промывки: Непрерывная или ступенчатая подача воды влияет на вымывание сахаров.',
        'Гидромодуль: Более жидкие затирания улучшают подвижность ферментов.',
        'Глубина слоя дробины: Между 30 и 45 см оптимизируется гидродинамика.'
      ],
    },
    {
      type: 'tip',
      title: 'Используйте 75% как базовый ориентир',
      html: 'При создании нового рецепта 75% эффективности служит надежной начальной точкой.',
    },
    {
      type: 'title',
      text: 'Корректировка засыпа и процесса',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Если измеренная плотность до кипячения ниже ожидаемой, можно продлить кипячение для концентрирования сусла или добавить сухой солодовый экстракт.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Эффективность затирания и общая эффективность оборудования',
      html: 'Не путайте экстракцию затора с итоговой эффективностью варочного порядка.',
    },
  ],
};
