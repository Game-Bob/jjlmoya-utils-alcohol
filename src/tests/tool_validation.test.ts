import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 5 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(5);
    });

    it('all tools should have defined i18n', () => {
      ALL_TOOLS.forEach((tool) => {
        expect(tool.entry.i18n).toBeDefined();
      });
    });
  });
});

