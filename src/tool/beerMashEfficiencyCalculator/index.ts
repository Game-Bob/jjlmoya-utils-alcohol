import type { ToolDefinition } from '../../types';
import { beerMashEfficiencyCalculator } from './entry';

export * from './entry';

export const BEER_MASH_EFFICIENCY_CALCULATOR_TOOL: ToolDefinition = {
  entry: beerMashEfficiencyCalculator as typeof beerMashEfficiencyCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
