import type { AlcoholToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CarbonationCalculator from './component.astro';
import CarbonationSEO from './seo.astro';
import CarbonationBibliography from './bibliography.astro';

export interface CarbonationUI {
  [key: string]: string;
  parametersTitle: string;
  metricBtn: string;
  imperialBtn: string;
  volumeLabel: string;
  maxTempLabel: string;
  litersUnit: string;
  celsiusUnit: string;
  gallonsUnit: string;
  fahrenheitUnit: string;
  desiredCo2Label: string;
  volUnit: string;
  resultsTitle: string;
  tableSugarLabel: string;
  cornSugarLabel: string;
  dmeLabel: string;
  safetyTitle: string;
  lowCarbonation: string;
  optimalCarbonation: string;
  highEffervescence: string;
  bubblingVisualizationLabel: string;
}

export type CarbonationLocaleContent = ToolLocaleContent<CarbonationUI>;

export const carbonationCalculator: AlcoholToolEntry<CarbonationUI> = {
  id: 'carbonation-calculator',
  icons: {
    bg: 'mdi:bottle-soda-classic',
    fg: 'mdi:water-opacity',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { CarbonationCalculator };

export const CARBONATION_TOOL: ToolDefinition = {
  entry: carbonationCalculator as AlcoholToolEntry<Record<string, string>>,
  Component: CarbonationCalculator,
  SEOComponent: CarbonationSEO,
  BibliographyComponent: CarbonationBibliography,
};
