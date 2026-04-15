import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Slug Localization and Uniqueness Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      it('every locale should have a unique, translated slug', async () => {
        const slugs = new Map<string, string>();
        const locales = Object.keys(tool.entry.i18n);

        // First, get the English slug for comparison
        let enSlug = '';
        if (locales.includes('en')) {
          const enLoader = tool.entry.i18n['en' as keyof typeof tool.entry.i18n];
          const enContent = (await enLoader?.()) as ToolLocaleContent;
          enSlug = enContent.slug;
        }

        const sharingLocales = ['ja', 'ko', 'zh'];

        for (const locale of locales) {
          const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
          const content = (await loader?.()) as ToolLocaleContent;

          // Rule 1: Slug must be transliterated (only a-z, 0-9, and -)
          expect(
            content.slug,
            `Tool "${tool.entry.id}" locale "${locale}" has an invalid slug ("${content.slug}"). Slugs must be transliterated (only a-z, 0-9, and -).`,
          ).toMatch(/^[a-z0-9-]+$/);

          if (locale === 'en') {
            continue;
          }

          if (sharingLocales.includes(locale)) {
            // Rule 2: ja, ko, zh must use the English slug
            expect(
              content.slug,
              `Tool "${tool.entry.id}" locale "${locale}" must use the same slug as "en" ("${enSlug}").`,
            ).toBe(enSlug);
          } else {
            // Rule 3: Other locales must have a different slug than English
            expect(
              content.slug,
              `Tool "${tool.entry.id}" locale "${locale}" has the same slug as "en" ("${enSlug}"). Cada slug tiene que estar en su propia idioma`,
            ).not.toBe(enSlug);

            // Rule 4: Other locales must have unique slugs
            const previousLocale = slugs.get(content.slug);
            if (previousLocale) {
              expect(
                false,
                `Tool "${tool.entry.id}" locales "${locale}" and "${previousLocale}" share the same slug ("${content.slug}"). Cada slug tiene que estar en su propia idioma`,
              ).toBe(true);
            }
            slugs.set(content.slug, locale);
          }
        }
      });
    });
  });
});
