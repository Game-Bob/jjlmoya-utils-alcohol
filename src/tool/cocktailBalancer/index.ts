import { cocktailBalancer } from './entry';
export * from './entry';
export const COCKTAIL_BALANCER_TOOL: ToolDefinition = {
  entry: cocktailBalancer as AlcoholToolEntry<Record<string, string>>,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
