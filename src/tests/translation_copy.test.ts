import { describe, expect, it } from 'vitest';
import { ALL_ENTRIES } from '../entries';

interface TextSample {
  locale: string;
  path: string;
  value: string;
}

const TRANSLATABLE_KEYS = new Set([
  'answer',
  'badge',
  'con',
  'definition',
  'description',
  'faqTitle',
  'html',
  'pro',
  'question',
  'text',
  'title',
]);

const STRUCTURAL_KEYS = new Set([
  '@context',
  '@type',
  'applicationCategory',
  'columns',
  'highlight',
  'icon',
  'level',
  'operatingSystem',
  'position',
  'positive',
  'price',
  'priceCurrency',
  'slug',
  'trend',
  'type',
  'url',
  'value',
  'variant',
]);

function normalizeText(value: string): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&(?:amp|lt|gt|quot|apos|nbsp);/gi, ' ')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .toLocaleLowerCase();
}

function isTranslatableText(value: string, key: string): boolean {
  const letters = value.match(/\p{L}/gu)?.length ?? 0;
  const words = value.split(/\s+/).filter(Boolean);
  return (TRANSLATABLE_KEYS.has(key) && value.length >= 12 && letters >= 6)
    || (value.length >= 40 && letters >= 18 && words.length >= 5);
}

function collectText(value: unknown, locale: string, path: string, samples: TextSample[]): void {
  if (typeof value === 'string') {
    const normalized = normalizeText(value);
    const key = path.split('.').at(-1)?.replace(/\[\d+\]$/, '') ?? '';
    if (isTranslatableText(normalized, key)) {
      samples.push({ locale, path, value: normalized });
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectText(item, locale, `${path}[${index}]`, samples));
    return;
  }

  if (!value || typeof value !== 'object') return;

  Object.entries(value).forEach(([key, child]) => {
    if (STRUCTURAL_KEYS.has(key)) return;
    collectText(child, locale, `${path}.${key}`, samples);
  });
}

function collectLocaleText(content: unknown, locale: string): TextSample[] {
  if (!content || typeof content !== 'object') return [];

  const record = content as Record<string, unknown>;
  const samples: TextSample[] = [];
  collectText(record.title, locale, 'title', samples);
  collectText(record.description, locale, 'description', samples);
  collectText(record.faqTitle, locale, 'faqTitle', samples);
  collectText(record.faq, locale, 'faq', samples);
  collectText(record.seo, locale, 'seo', samples);
  collectText(record.schemas, locale, 'schemas', samples);
  return samples;
}

describe('Translated copy must not be duplicated between locales', () => {
  ALL_ENTRIES.forEach((entry) => {
    it(`${entry.id} has translated SEO, FAQ and schema copy in every locale`, async () => {
      const samplesByLocale = new Map<string, TextSample[]>();

      for (const [locale, loader] of Object.entries(entry.i18n)) {
        if (!loader) continue;
        samplesByLocale.set(locale, collectLocaleText(await loader(), locale));
      }

      const seen = new Map<string, TextSample>();
      const duplicates: string[] = [];

      for (const samples of samplesByLocale.values()) {
        for (const sample of samples) {
          const previous = seen.get(sample.value);
          if (previous && previous.locale !== sample.locale) {
            duplicates.push(
              `${previous.locale}:${previous.path} = ${sample.locale}:${sample.path}: "${sample.value}"`,
            );
          } else if (!previous) {
            seen.set(sample.value, sample);
          }
        }
      }

      expect(duplicates, `Duplicated translated copy in ${entry.id}`).toEqual([]);
    });
  });
});
