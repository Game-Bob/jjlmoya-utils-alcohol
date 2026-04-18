import type { AlcoholToolEntry, ToolLocaleContent } from '../../types';

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
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
