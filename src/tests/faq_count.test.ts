import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

const MIN_FAQS = 3;

describe('FAQ Count Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.entries(tool.entry.i18n).forEach(([locale, loader]) => {
        it(`${locale}: should have at least ${MIN_FAQS} FAQs`, async () => {
          const content = await loader();
          expect(content.faq.length).toBeGreaterThanOrEqual(MIN_FAQS);
        });
      });
    });
  });
});
