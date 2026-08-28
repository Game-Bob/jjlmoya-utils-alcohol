import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'beer-mash-efficiency-calculator';
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
  units: { weightKg: 'кг', weightLb: 'фунт', volumeL: 'л', volumeGal: 'гал', sg: 'SG', brix: 'Brix', percent: '%' },
  grainPresets: {
    pilsner: 'Пилснер солод (1.037 / 37 PPG)',
    pale_ale: 'Пэйл Эль солод (1.038 / 38 PPG)',
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
  kettleVisual: { mashTunTitle: 'Заторный чан', wortLevel: 'Уровень сусла', sugarExtraction: 'Экстракция' },
};

const faq = [
  { question: 'Что такое эффективность затирания пива?', answer: 'Эффективность затирания показывает процент сахаров, извлеченных из солода в сусло до кипячения.' },
  { question: 'Какая эффективность затирания считается хорошей?', answer: 'Для домашнего пивоварения нормальным считается уровень от 70% до 80%.' },
];
const howTo = [
  { name: 'Выберите единицы', text: 'Выберите метрическую или имперскую систему.' },
  { name: 'Укажите солод и объем', text: 'Введите вес солода, объем сусла и плотность.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s, idx) => ({ '@type': 'HowToStep', position: idx + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'ru' };

export const content: ToolLocaleContent<Record<string, any>> = {
  slug, title, description, ui, faqTitle: 'Вопросы об эффективности', bibliographyTitle: 'Источники', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography,
  seo: [
    { type: 'title', text: 'Эффективность затирания солода', level: 2 },
    { type: 'paragraph', html: 'Показатель позволяет точно рассчитывать рецепты пива.' }
  ]
};
