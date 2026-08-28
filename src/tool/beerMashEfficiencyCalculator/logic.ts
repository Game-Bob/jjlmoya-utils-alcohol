import type { GrainPreset, MashInputState, MashCalculationResult } from './ui';

export const GRAIN_PRESETS: GrainPreset[] = [
  { id: 'pilsner', name: 'Pilsner Malt', potentialSg: 1.037, potentialPpg: 37 },
  { id: 'pale_ale', name: 'Pale Ale Malt', potentialSg: 1.038, potentialPpg: 38 },
  { id: 'vienna', name: 'Vienna Malt', potentialSg: 1.036, potentialPpg: 36 },
  { id: 'munich', name: 'Munich Malt', potentialSg: 1.035, potentialPpg: 35 },
  { id: 'wheat', name: 'Wheat Malt', potentialSg: 1.038, potentialPpg: 38 },
  { id: 'caramel_30', name: 'Caramel / Crystal 30', potentialSg: 1.034, potentialPpg: 34 },
  { id: 'caramel_60', name: 'Caramel / Crystal 60', potentialSg: 1.034, potentialPpg: 34 },
  { id: 'chocolate', name: 'Chocolate Malt', potentialSg: 1.034, potentialPpg: 34 },
  { id: 'custom', name: 'Custom Grain Potential', potentialSg: 1.037, potentialPpg: 37 },
];

export const CONVERSION = {
  KG_TO_LB: 2.2046226218,
  L_TO_GAL: 0.2641720524,
  GAL_TO_L: 3.785411784,
  LB_TO_KG: 0.45359237,
};

export function sgToPoints(sg: number): number {
  return Math.max(0, (sg - 1) * 1000);
}

export function pointsToSg(points: number): number {
  return 1 + points / 1000;
}

export function sgToBrix(sg: number): number {
  if (sg <= 1.0) return 0;
  return -668.82 + 11.536 * sg * 100 + 1 * sg * sg - 0;
}

export function calculateBrixPrecision(sg: number): number {
  if (sg <= 1.0) return 0;
  const brix = (182.4601 * Math.pow(sg, 3)) - (775.6821 * Math.pow(sg, 2)) + (1262.7794 * sg) - 669.5622;
  return Math.max(0, brix);
}

export function getGrainPotentialSg(input: MashInputState): number {
  if (input.grainPresetId === 'custom') {
    return input.customPotentialSg;
  }
  const preset = GRAIN_PRESETS.find((g) => g.id === input.grainPresetId);
  return preset ? preset.potentialSg : 1.037;
}

function calculatePotentialPoints(input: MashInputState): number {
  const potentialSg = getGrainPotentialSg(input);
  const grainPtsPerUnit = sgToPoints(potentialSg);
  const weightInLb = input.unitSystem === 'metric' ? input.grainWeight * CONVERSION.KG_TO_LB : input.grainWeight;
  return weightInLb * grainPtsPerUnit;
}

export function correctSgForTemperature(sg: number, sampleTempC: number, calibTempC: number): number {
  if (sg <= 1.0) return sg;
  const tS = sampleTempC * 1.8 + 32;
  const tC = calibTempC * 1.8 + 32;
  const delta = (1.313454 - 0.133774 * tS + 0.001741919 * tS * tS - 0.000001443868 * tS * tS * tS) -
                (1.313454 - 0.133774 * tC + 0.001741919 * tC * tC - 0.000001443868 * tC * tC * tC);
  return Math.max(1.0, sg + delta / 1000);
}

function calculateMeasuredPoints(input: MashInputState, effectiveSg: number): number {
  const volumeInGal = input.unitSystem === 'metric' ? input.wortVolume * CONVERSION.L_TO_GAL : input.wortVolume;
  const measuredSgPts = sgToPoints(effectiveSg);
  return volumeInGal * measuredSgPts;
}

function determineStatusKey(effPercent: number): MashCalculationResult['statusKey'] {
  if (effPercent >= 82) return 'excellent';
  if (effPercent >= 74) return 'good';
  if (effPercent >= 65) return 'average';
  return 'poor';
}

function calcExpectedSgForVolume(potentialPts: number, effPercent: number, volumeGal: number): number {
  if (volumeGal <= 0) return 1.0;
  const expectedPointsPerGal = (potentialPts * (effPercent / 100)) / volumeGal;
  return pointsToSg(expectedPointsPerGal);
}

export function calculateMashEfficiency(input: MashInputState): MashCalculationResult {
  const effectiveSg = correctSgForTemperature(input.measuredSg, input.sampleTempC || 20, input.calibTempC || 20);
  const potentialPointsTotal = calculatePotentialPoints(input);
  const measuredPointsTotal = calculateMeasuredPoints(input, effectiveSg);
  const volumeInGal = input.unitSystem === 'metric' ? input.wortVolume * CONVERSION.L_TO_GAL : input.wortVolume;

  const mashEfficiency = potentialPointsTotal > 0 ? (measuredPointsTotal / potentialPointsTotal) * 100 : 0;
  const measuredSgPts = sgToPoints(effectiveSg);
  const brix = calculateBrixPrecision(effectiveSg);

  return {
    potentialPointsTotal: Math.round(potentialPointsTotal * 10) / 10,
    measuredPointsTotal: Math.round(measuredPointsTotal * 10) / 10,
    correctedSg: Math.round(effectiveSg * 1000) / 1000,
    mashEfficiency: Math.round(mashEfficiency * 10) / 10,
    expectedSg75: Math.round(calcExpectedSgForVolume(potentialPointsTotal, 75, volumeInGal) * 1000) / 1000,
    expectedSg80: Math.round(calcExpectedSgForVolume(potentialPointsTotal, 80, volumeInGal) * 1000) / 1000,
    expectedSg85: Math.round(calcExpectedSgForVolume(potentialPointsTotal, 85, volumeInGal) * 1000) / 1000,
    liquidEfficiencyPoints: Math.round(measuredSgPts * 10) / 10,
    wortGravityBrix: Math.round(brix * 10) / 10,
    statusKey: determineStatusKey(mashEfficiency),
  };
}
