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
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { AlcoholClearanceCalculator };

export const ALCOHOL_CLEARANCE_TOOL: ToolDefinition = {
  entry: alcoholClearance as AlcoholToolEntry<Record<string, string>>,
  Component: AlcoholClearanceCalculator,
  SEOComponent: AlcoholClearanceSEO,
  BibliographyComponent: AlcoholClearanceBibliography,
};
