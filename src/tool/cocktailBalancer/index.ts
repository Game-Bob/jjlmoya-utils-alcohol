import type { AlcoholToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CocktailBalancerCalculator from './component.astro';
import CocktailBalancerSEO from './seo.astro';
import CocktailBalancerBibliography from './bibliography.astro';

export interface CocktailBalancerUI {
  [key: string]: string;
  title: string;
  presetsBtn: string;
  saveBtn: string;
  resetBtn: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  addBtn: string;
  addMoreBtn: string;
  flavorProfileTitle: string;
  volLabel: string;
  sugarLabel: string;
  colorLabel: string;
  sourLawTitle: string;
  acidDryLabel: string;
  balanceLabel: string;
  sweetLabel: string;
  aiSuggestionTitle: string;
  addIngredientTitle: string;
  searchPlaceholder: string;
  presetsTitle: string;
  savedSectionTitle: string;
  classicsSectionTitle: string;
  confirmDeleteTitle: string;
  confirmDeleteText: string;
  cancelBtn: string;
  deleteBtn: string;
  verdictSpiritSeco: string;
  verdictSoloDulce: string;
  verdictMuyAcido: string;
  verdictAcido: string;
  verdictEquilibrado: string;
  verdictDulce: string;
  verdictEmpalagoso: string;
  fixAddBitters: string;
  fixAddSugar: string;
  fixAddAcid: string;
}

export type CocktailBalancerLocaleContent = ToolLocaleContent<CocktailBalancerUI>;

export const cocktailBalancer: AlcoholToolEntry<CocktailBalancerUI> = {
  id: 'cocktail-balancer',
  icons: {
    bg: 'mdi:glass-cocktail',
    fg: 'mdi:fruit-citrus',
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

export { CocktailBalancerCalculator, CocktailBalancerSEO, CocktailBalancerBibliography };

export const COCKTAIL_BALANCER_TOOL: ToolDefinition = {
  entry: cocktailBalancer as AlcoholToolEntry<Record<string, string>>,
  Component: CocktailBalancerCalculator,
  SEOComponent: CocktailBalancerSEO,
  BibliographyComponent: CocktailBalancerBibliography,
};
