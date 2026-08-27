import { describe, expect, it } from 'vitest';
import { ALL_ENTRIES } from '../entries';

const COPY_THRESHOLD = 0.9;

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

function collectText(value: unknown, path: string, parts: string[]): void {
  if (typeof value === 'string') {
    const normalized = normalizeText(value);
    if (normalized.length >= 2) parts.push(normalized);
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectText(item, `${path}[${index}]`, parts));
    return;
  }

  if (!value || typeof value !== 'object') return;

  Object.entries(value).forEach(([key, child]) => {
    if (STRUCTURAL_KEYS.has(key)) return;
    collectText(child, `${path}.${key}`, parts);
  });
}

function localeCorpus(content: unknown): string {
  if (!content || typeof content !== 'object') return '';

  const record = content as Record<string, unknown>;
  const parts: string[] = [];
  collectText(record.title, 'title', parts);
  collectText(record.description, 'description', parts);
  collectText(record.faqTitle, 'faqTitle', parts);
  collectText(record.faq, 'faq', parts);
  collectText(record.seo, 'seo', parts);
  collectText(record.schemas, 'schemas', parts);
  return parts.join(' ');
}

function tokenCounts(text: string): Map<string, number> {
  const counts = new Map<string, number>();
  for (const token of text.match(/[\p{L}\p{N}]+/gu) ?? []) {
    counts.set(token, (counts.get(token) ?? 0) + 1);
  }
  return counts;
}

function copySimilarity(left: string, right: string): number {
  const leftCounts = tokenCounts(left);
  const rightCounts = tokenCounts(right);
  const leftTotal = [...leftCounts.values()].reduce((sum, count) => sum + count, 0);
  const rightTotal = [...rightCounts.values()].reduce((sum, count) => sum + count, 0);
  if (leftTotal === 0 || rightTotal === 0) return 0;

  let shared = 0;
  for (const [token, count] of leftCounts) {
    shared += Math.min(count, rightCounts.get(token) ?? 0);
  }
  return (2 * shared) / (leftTotal + rightTotal);
}

async function loadCorpora(entry: typeof ALL_ENTRIES[number]): Promise<Map<string, string>> {
  const corpora = new Map<string, string>();
  await Promise.all(Object.entries(entry.i18n).map(async ([locale, loader]) => {
    if (loader) corpora.set(locale, localeCorpus(await loader()));
  }));
  return corpora;
}

function pairViolation(left: string, right: string, corpora: Map<string, string>): string | null {
  const similarity = copySimilarity(corpora.get(left) ?? '', corpora.get(right) ?? '');
  if (similarity < COPY_THRESHOLD) return null;
  return `${left} ↔ ${right}: ${(similarity * 100).toFixed(1)}%`;
}

function findCopyViolations(corpora: Map<string, string>): string[] {
  const locales = [...corpora.keys()];
  return locales.flatMap((left, index) => locales.slice(index + 1)
    .map((right) => pairViolation(left, right, corpora))
    .filter((violation): violation is string => violation !== null));
}

describe('Locales must not copy another locale wholesale', () => {
  ALL_ENTRIES.forEach((entry) => {
    it(`${entry.id} is not at least ${COPY_THRESHOLD * 100}% identical to another locale`, async () => {
      const corpora = await loadCorpora(entry);
      const violations = findCopyViolations(corpora);

      expect(violations, `Locale copy threshold exceeded in ${entry.id}`).toEqual([]);
    });
  });
});
