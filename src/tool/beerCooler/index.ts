import type { AlcoholToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import BeerCoolerCalculator from './component.astro';

export interface BeerCoolerUI {
  [key: string]: string;
  step1Title: string;
  canLabel: string;
  aluminumLabel: string;
  bottleLabel: string;
  glassLabel: string;
  step2Title: string;
  fridgeLabel: string;
  freezerLabel: string;
  step3Title: string;
  initialTempLabel: string;
  targetTempLabel: string;
  glacialLabel: string;
  perfectLabel: string;
  bodegaLabel: string;
  readyTitle: string;
  readyDescription: string;
  estimatedTimeLabel: string;
  methodLabel: string;
  containerLabel: string;
  alreadyColdLabel: string;
  neverColdLabel: string;
}

export type BeerCoolerLocaleContent = ToolLocaleContent<BeerCoolerUI>;

export const beerCooler: AlcoholToolEntry<BeerCoolerUI> = {
  id: 'beer-cooling',
  icons: {
    bg: 'mdi:snowflake-thermometer',
    fg: 'mdi:beer',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { BeerCoolerCalculator };

export const BEER_COOLER_TOOL: ToolDefinition = {
  entry: beerCooler as AlcoholToolEntry<Record<string, string>>,
  Component: BeerCoolerCalculator,
};
