import type { AlcoholToolEntry, ToolLocaleContent } from '../../types';
import { bibliography } from './bibliography';
import type { BeerMashEfficiencyCalculatorUI } from './ui';

export type { BeerMashEfficiencyCalculatorUI } from './ui';

export type BeerMashEfficiencyCalculatorLocaleContent = ToolLocaleContent<BeerMashEfficiencyCalculatorUI>;

export const beerMashEfficiencyCalculator: AlcoholToolEntry<BeerMashEfficiencyCalculatorUI> = {
  id: 'beer-mash-efficiency-calculator',
  icons: {
    bg: 'mdi:glass-mug-variant',
    fg: 'mdi:percent-outline',
  },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    en: () => import('./i18n/en').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    es: () => import('./i18n/es').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    fr: () => import('./i18n/fr').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    id: () => import('./i18n/id').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    it: () => import('./i18n/it').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    ja: () => import('./i18n/ja').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    ko: () => import('./i18n/ko').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    nl: () => import('./i18n/nl').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    pl: () => import('./i18n/pl').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    pt: () => import('./i18n/pt').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    ru: () => import('./i18n/ru').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    sv: () => import('./i18n/sv').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    tr: () => import('./i18n/tr').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
    zh: () => import('./i18n/zh').then((m) => m.content as unknown as ToolLocaleContent<BeerMashEfficiencyCalculatorUI>),
  },
} as unknown as AlcoholToolEntry<BeerMashEfficiencyCalculatorUI>;

export { bibliography };
