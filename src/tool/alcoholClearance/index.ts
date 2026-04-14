import type { AlcoholToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import AlcoholClearanceCalculator from './component.astro';
import AlcoholClearanceSEO from './seo.astro';
import AlcoholClearanceBibliography from './bibliography.astro';

export interface AlcoholClearanceUI {
  [key: string]: string;
  biologicalSexLabel: string;
  weightLabel: string;
  kgUnit: string;
  addDrinkLabel: string;
  beerLabel: string;
  wineLabel: string;
  spiritLabel: string;
  shotLabel: string;
  accumulatedLabel: string;
  emptyListLabel: string;
  emptySubLabel: string;
  estimatedBacLabel: string;
  bacUnit: string;
  timeToZeroLabel: string;
  waterAdviceLabel: string;
  pillAdviceLabel: string;
  noneAdvice: string;
  hydrationAdvice: string;
  electrolytesAdvice: string;
  disclaimerText: string;
  drinkUnit: string;
  drinksUnit: string;
}

export type AlcoholClearanceLocaleContent = ToolLocaleContent<AlcoholClearanceUI>;

export const alcoholClearance: AlcoholToolEntry<AlcoholClearanceUI> = {
  id: 'alcohol-clearance',
  icons: {
    bg: 'mdi:account-alert',
    fg: 'mdi:glass-cocktail',
  },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { AlcoholClearanceCalculator };

export const ALCOHOL_CLEARANCE_TOOL: ToolDefinition = {
  entry: alcoholClearance as AlcoholToolEntry<Record<string, string>>,
  Component: AlcoholClearanceCalculator,
  SEOComponent: AlcoholClearanceSEO,
  BibliographyComponent: AlcoholClearanceBibliography,
};
