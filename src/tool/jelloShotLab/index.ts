import type { ToolDefinition, AlcoholToolEntry } from '../../types';
import { jelloShotLab } from './entry';

export * from './entry';

export const JELLO_SHOT_LAB_TOOL: ToolDefinition = {
  entry: jelloShotLab as AlcoholToolEntry<Record<string, string>>,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
