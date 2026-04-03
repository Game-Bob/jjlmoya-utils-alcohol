import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { SEOSection } from '../types';

const MIN_WORDS = 400;

function extractText(section: SEOSection): string {
  const s = section as Record<string, unknown>;
  const parts: string[] = [];
  if (typeof s['text'] === 'string') parts.push(s['text']);
  if (typeof s['html'] === 'string') parts.push((s['html'] as string).replace(/<[^>]+>/g, ' '));
  if (typeof s['title'] === 'string') parts.push(s['title'] as string);
  if (Array.isArray(s['items'])) {
    for (const item of s['items'] as Record<string, unknown>[]) {
      if (typeof item['label'] === 'string') parts.push(item['label']);
      if (typeof item['value'] === 'string') parts.push(item['value']);
    }
  }
  return parts.join(' ');
}

function countWords(seo: SEOSection[]): number {
  const fullText = seo.map(extractText).join(' ');
  return fullText.split(/\s+/).filter((w) => w.length > 0).length;
}

describe('SEO Content Length Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.entries(tool.entry.i18n).forEach(([locale, loader]) => {
        it(`${locale}: SEO content should have at least ${MIN_WORDS} words`, async () => {
          const content = await loader();
          const wordCount = countWords(content.seo);
          expect(wordCount, `Got ${wordCount} words, need ${MIN_WORDS}`).toBeGreaterThanOrEqual(MIN_WORDS);
        });
      });
    });
  });
});
