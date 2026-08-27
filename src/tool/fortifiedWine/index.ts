import { fortifiedWine } from './entry';
import type { ToolDefinition, AlcoholToolEntry } from '../../types';
export * from './entry';
export const FORTIFIED_WINE_TOOL: ToolDefinition = {
  entry: fortifiedWine as AlcoholToolEntry<Record<string, string>>,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
