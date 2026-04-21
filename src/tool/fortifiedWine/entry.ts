import type { AlcoholToolEntry, ToolLocaleContent } from '../../types';
export { bibliography } from './bibliography';

export interface FortifiedWineBuilderUI {
  [key: string]: string;
  intentionTitle: string;
  intentionVermouth: string;
  intentionPort: string;
  intentionSherry: string;
  intentionCustom: string;
  modeALabel: string;
  modeBLabel: string;
  wineSection: string;
  wineVolumeLabel: string;
  wineAbvLabel: string;
  spiritSection: string;
  spiritAbvLabel: string;
  brandyPreset: string;
  neutralPreset: string;
  aguardientePreset: string;
  targetAbvLabel: string;
  targetVolumeLabel: string;
  resultsTitle: string;
  addLabel: string;
  finalVolumeLabel: string;
  bottlesSection: string;
  copyBtn: string;
  copiedBtn: string;
  pearsonTitle: string;
  wineCornerLabel: string;
  spiritCornerLabel: string;
  emptyState: string;
  errorAbv: string;
  errorMode: string;
}

export type FortifiedWineBuilderLocaleContent = ToolLocaleContent<FortifiedWineBuilderUI>;

export const fortifiedWine: AlcoholToolEntry<FortifiedWineBuilderUI> = {
  id: 'fortified-wine-builder',
  icons: {
    bg: 'mdi:bottle-wine',
    fg: 'mdi:glass-wine',
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
