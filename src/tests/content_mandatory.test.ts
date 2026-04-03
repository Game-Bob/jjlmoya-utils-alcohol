import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Mandatory Tool Content Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      const locales = Object.keys(tool.entry.i18n) as (keyof typeof tool.entry.i18n)[];

      locales.forEach((locale) => {
        it(`should have non-empty FAQ and Bibliography in locale: ${locale}`, async () => {
          const loader = tool.entry.i18n[locale];
          if (!loader) return;

          const content = await loader() as ToolLocaleContent;

          expect(content.faqTitle, `FAQ title is missing for tool ${tool.entry.id} in locale ${locale}`).toBeDefined();
          expect(content.faqTitle.length, `FAQ title should not be empty for tool ${tool.entry.id} in locale ${locale}`).toBeGreaterThan(0);

          expect(content.faq, `FAQ is missing or empty for tool ${tool.entry.id} in locale ${locale}`).toBeDefined();
          expect(content.faq.length, `FAQ should have at least one entry for tool ${tool.entry.id} in locale ${locale}`).toBeGreaterThan(0);

          expect(content.bibliographyTitle, `Bibliography title is missing for tool ${tool.entry.id} in locale ${locale}`).toBeDefined();
          expect(content.bibliographyTitle.length, `Bibliography title should not be empty for tool ${tool.entry.id} in locale ${locale}`).toBeGreaterThan(0);

          expect(content.bibliography, `Bibliography is missing or empty for tool ${tool.entry.id} in locale ${locale}`).toBeDefined();
          expect(content.bibliography.length, `Bibliography should have at least one entry for tool ${tool.entry.id} in locale ${locale}`).toBeGreaterThan(0);
        });
      });
    });
  });
});
