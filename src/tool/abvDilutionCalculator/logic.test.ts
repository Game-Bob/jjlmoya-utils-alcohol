import { describe, expect, it } from 'vitest';
import {
  abvToProof,
  calculateDilution,
  flOzToMl,
  mlToFlOz,
  presetById,
  proofToAbv,
} from './logic';

describe('ABV dilution logic', () => {
  it('converts ABV and proof in both directions', () => {
    expect(abvToProof(40)).toBe(80);
    expect(proofToAbv(80)).toBe(40);
  });

  it('converts metric volume to imperial volume', () => {
    expect(mlToFlOz(29.5735)).toBeCloseTo(1, 5);
    expect(flOzToMl(1)).toBeCloseTo(29.5735, 4);
  });

  it('calculates the water needed to dilute a spirit', () => {
    const result = calculateDilution({
      startingStrength: 40,
      startingVolumeMl: 750,
      targetStrength: 20,
    });

    expect(result.valid).toBe(true);
    expect(result.pureAlcoholMl).toBe(300);
    expect(result.finalVolumeMl).toBe(1500);
    expect(result.waterToAddMl).toBe(750);
    expect(result.waterRatio).toBe(1);
  });

  it('rejects a target that is not lower than the starting strength', () => {
    const result = calculateDilution({
      startingStrength: 20,
      startingVolumeMl: 500,
      targetStrength: 20,
    });

    expect(result.valid).toBe(false);
    expect(result.waterToAddMl).toBe(0);
  });

  it('clamps unsafe or missing numeric values', () => {
    const result = calculateDilution({
      startingStrength: Number.NaN,
      startingVolumeMl: -20,
      targetStrength: 0,
    });

    expect(result.startingAbv).toBe(0.5);
    expect(result.targetAbv).toBe(0.5);
    expect(result.startingVolumeMl).toBe(10);
    expect(result.valid).toBe(false);
  });

  it('returns a known preset and falls back safely', () => {
    expect(presetById('liqueur').targetAbv).toBe(25);
    expect(presetById('missing').id).toBe('spirit');
  });
});
