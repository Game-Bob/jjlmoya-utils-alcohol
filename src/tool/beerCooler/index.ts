export * from './entry';
export const BEER_COOLER_TOOL: ToolDefinition = {
  entry: beerCooler as AlcoholToolEntry<Record<string, string>>,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
