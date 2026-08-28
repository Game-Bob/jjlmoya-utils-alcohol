import { describe, it, expect } from 'vitest';
import {
  sgToPoints,
  pointsToSg,
  calculateBrixPrecision,
  calculateMashEfficiency,
  getGrainPotentialSg,
  GRAIN_PRESETS,
} from './logic';
import type { MashInputState } from './ui';

describe('Beer Mash Efficiency Calculator Logic', () => {
  it('converts SG to gravity points correctly', () => {
    expect(sgToPoints(1.050)).toBeCloseTo(50);
    expect(sgToPoints(1.037)).toBeCloseTo(37);
    expect(sgToPoints(1.000)).toBe(0);
    expect(sgToPoints(0.990)).toBe(0);
  });

  it('converts gravity points to SG correctly', () => {
    expect(pointsToSg(50)).toBeCloseTo(1.050);
    expect(pointsToSg(37)).toBeCloseTo(1.037);
    expect(pointsToSg(0)).toBe(1.000);
  });

  it('calculates Brix from SG accurately', () => {
    expect(calculateBrixPrecision(1.000)).toBe(0);
    expect(calculateBrixPrecision(1.050)).toBeCloseTo(12.4, 0);
  });

  it('retrieves grain potential SG correctly', () => {
    const statePreset: MashInputState = {
      grainWeight: 5,
      grainPresetId: 'pale_ale',
      customPotentialSg: 1.040,
      wortVolume: 20,
      measuredSg: 1.050,
      unitSystem: 'metric',
      sampleTempC: 20,
      calibTempC: 20,
      stage: 'preboil',
    };
    expect(getGrainPotentialSg(statePreset)).toBe(1.038);

    const stateCustom: MashInputState = {
      ...statePreset,
      grainPresetId: 'custom',
      customPotentialSg: 1.042,
    };
    expect(getGrainPotentialSg(stateCustom)).toBe(1.042);
  });

  it('calculates mash efficiency for typical metric recipe', () => {
    const input: MashInputState = {
      grainWeight: 5.5,
      grainPresetId: 'pilsner',
      customPotentialSg: 1.037,
      wortVolume: 23,
      measuredSg: 1.052,
      unitSystem: 'metric',
      sampleTempC: 20,
      calibTempC: 20,
      stage: 'preboil',
    };

    const result = calculateMashEfficiency(input);
    expect(result.mashEfficiency).toBeGreaterThan(60);
    expect(result.mashEfficiency).toBeLessThan(95);
    expect(result.expectedSg75).toBeCloseTo(1.055, 2);
  });

  it('calculates mash efficiency for imperial recipe', () => {
    const state: MashInputState = {
      grainWeight: 10,
      grainPresetId: 'pale_ale',
      customPotentialSg: 1.038,
      wortVolume: 5,
      measuredSg: 1.060,
      unitSystem: 'imperial',
      sampleTempC: 20,
      calibTempC: 20,
      stage: 'preboil',
    };

    const result = calculateMashEfficiency(state);
    expect(result.potentialPointsTotal).toBeCloseTo(380);
    expect(result.measuredPointsTotal).toBeCloseTo(300);
    expect(result.mashEfficiency).toBeCloseTo(78.9, 1);
    expect(result.statusKey).toBe('good');
  });

  it('handles poor and excellent efficiency boundaries', () => {
    const poorState: MashInputState = {
      grainWeight: 10,
      grainPresetId: 'pilsner',
      customPotentialSg: 1.037,
      wortVolume: 20,
      measuredSg: 1.020,
      unitSystem: 'metric',
      sampleTempC: 20,
      calibTempC: 20,
      stage: 'preboil',
    };
    expect(calculateMashEfficiency(poorState).statusKey).toBe('poor');

    const excellentState: MashInputState = {
      grainWeight: 5,
      grainPresetId: 'pilsner',
      customPotentialSg: 1.037,
      wortVolume: 25,
      measuredSg: 1.060,
      unitSystem: 'metric',
      sampleTempC: 20,
      calibTempC: 20,
      stage: 'preboil',
    };
    expect(calculateMashEfficiency(excellentState).statusKey).toBe('excellent');
  });

  it('contains expected presets', () => {
    expect(GRAIN_PRESETS.length).toBeGreaterThan(5);
    const pilsner = GRAIN_PRESETS.find((g) => g.id === 'pilsner');
    expect(pilsner?.potentialSg).toBe(1.037);
  });
});
