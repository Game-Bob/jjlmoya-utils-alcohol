import type { AlcoholToolEntry, ToolLocaleContent } from '../../types';
export { bibliography } from './bibliography';

export interface JelloShotLabUI extends Record<string, string> {
  title: string;
  description: string;
  liquorBaseLabel: string;
  liquorAbvLabel: string;
  gelatinLabel: string;
  diluentLabel: string;
  calculateBtn: string;
  modePrecision: string;
  modeIntensity: string;
  modeIntensityLight: string;
  modeIntensityBalanced: string;
  modeIntensityLimit: string;
  partyPlannerTitle: string;
  partyPlannerGuestLabel: string;
  partyPlannerShotsPerGuest: string;
  multiLayerTitle: string;
  howToTitle: string;
  proTipsTitle: string;
  resultsTitle: string;
  totalVolumeLabel: string;
  boilingWaterLabel: string;
  alcoholVolumeLabel: string;
  packetsNeededLabel: string;
  chillingTimeLabel: string;
  unitMm: string;
  unitOz: string;
  unitGrams: string;
  unitPackets: string;
  modeParty: string;
  modeRecipe: string;
}

export type JelloShotLabLocaleContent = ToolLocaleContent<JelloShotLabUI>;

export const jelloShotLab: AlcoholToolEntry<JelloShotLabUI> = {
  id: 'jello-shot-lab',
  icons: {
    bg: 'mdi:flask',
    fg: 'mdi:cup',
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
