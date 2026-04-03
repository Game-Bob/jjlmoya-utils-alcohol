import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { alcoholCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 5 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(5);
    });

    it('alcoholCategory should be defined', () => {
      expect(alcoholCategory).toBeDefined();
      expect(alcoholCategory.i18n).toBeDefined();
    });
  });
});

