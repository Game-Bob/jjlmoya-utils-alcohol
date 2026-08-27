import { carbonationCalculator } from './entry';
import type { ToolDefinition, AlcoholToolEntry } from '../../types';
export * from './entry';
export const CARBONATION_TOOL: ToolDefinition = {
  entry: carbonationCalculator as AlcoholToolEntry<Record<string, string>>,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
