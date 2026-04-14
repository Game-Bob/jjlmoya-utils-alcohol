import type { AlcoholCategoryEntry } from '../types';

export const alcoholCategory: AlcoholCategoryEntry = {
  icon: 'mdi:shape',
  tools: [],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
  },
};

