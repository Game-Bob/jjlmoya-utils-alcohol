import type { AlcoholToolEntry, ToolLocaleContent } from '../../types';
import { bibliography } from './bibliography';
import type { BeerMashEfficiencyCalculatorUI } from './ui';

export type { BeerMashEfficiencyCalculatorUI } from './ui';

export type BeerMashEfficiencyCalculatorLocaleContent = ToolLocaleContent<BeerMashEfficiencyCalculatorUI>;

export const beerMashEfficiencyCalculator: AlcoholToolEntry = {
  id: 'beer-mash-efficiency-calculator',
  icons: {
    bg: 'mdi:glass-mug-variant',
    fg: 'mdi:percent-outline',
  },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content as unknown as ToolLocaleContent),
    en: () => import('./i18n/en').then((m) => m.content as unknown as ToolLocaleContent),
    es: () => import('./i18n/es').then((m) => m.content as unknown as ToolLocaleContent),
    fr: () => import('./i18n/fr').then((m) => m.content as unknown as ToolLocaleContent),
    id: () => import('./i18n/id').then((m) => m.content as unknown as ToolLocaleContent),
    it: () => import('./i18n/it').then((m) => m.content as unknown as ToolLocaleContent),
    ja: () => import('./i18n/ja').then((m) => m.content as unknown as ToolLocaleContent),
    ko: () => import('./i18n/ko').then((m) => m.content as unknown as ToolLocaleContent),
    nl: () => import('./i18n/nl').then((m) => m.content as unknown as ToolLocaleContent),
    pl: () => import('./i18n/pl').then((m) => m.content as unknown as ToolLocaleContent),
    pt: () => import('./i18n/pt').then((m) => m.content as unknown as ToolLocaleContent),
    ru: () => import('./i18n/ru').then((m) => m.content as unknown as ToolLocaleContent),
    sv: () => import('./i18n/sv').then((m) => m.content as unknown as ToolLocaleContent),
    tr: () => import('./i18n/tr').then((m) => m.content as unknown as ToolLocaleContent),
    zh: () => import('./i18n/zh').then((m) => m.content as unknown as ToolLocaleContent),
  },
} as unknown as AlcoholToolEntry;

export { bibliography };
