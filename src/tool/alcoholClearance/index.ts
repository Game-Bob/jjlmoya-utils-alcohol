import { alcoholClearance } from './entry';
import type { ToolDefinition, AlcoholToolEntry } from '../../types';
export * from './entry';
export const ALCOHOL_CLEARANCE_TOOL: ToolDefinition = {
  entry: alcoholClearance as AlcoholToolEntry<Record<string, string>>,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
