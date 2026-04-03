import type { AlcoholToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import PartyKegCalculator from './component.astro';

export interface PartyKegUI {
  [key: string]: string;
  calcStockTitle: string;
  beerIceSub: string;
  guestsLabel: string;
  durationLabel: string;
  hoursUnit: string;
  intensityLabel: string;
  chillLabel: string;
  standardLabel: string;
  partyLabel: string;
  tempLabel: string;
  estimatedVolLabel: string;
  kegsLabel: string;
  iceRequiredLabel: string;
  bagsLabel: string;
  visualizationTitle: string;
  optimalMsg: string;
  highMeltMsg: string;
  highEfficiencyMsg: string;
}

export type PartyKegLocaleContent = ToolLocaleContent<PartyKegUI>;

export const partyKeg: AlcoholToolEntry<PartyKegUI> = {
  id: 'party-keg',
  icons: {
    bg: 'mdi:party-popper',
    fg: 'mdi:keg',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { PartyKegCalculator };

export const PARTY_KEG_TOOL: ToolDefinition = {
  entry: partyKeg as AlcoholToolEntry<Record<string, string>>,
  Component: PartyKegCalculator,
};
