export * from './entry';
export const PARTY_KEG_TOOL: ToolDefinition = {
  entry: partyKeg as AlcoholToolEntry<Record<string, string>>,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
