import type { ToolDefinition } from '../../types';
import { abvDilutionCalculator } from './entry';

export * from './entry';

export const ABV_DILUTION_CALCULATOR_TOOL: ToolDefinition = {
  entry: abvDilutionCalculator as typeof abvDilutionCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
