export type VolumeUnit = 'metric' | 'imperial';
export type StrengthUnit = 'abv' | 'proof';

export interface DilutionInput {
  startingStrength: number;
  startingVolumeMl: number;
  targetStrength: number;
}

export interface DilutionResult {
  valid: boolean;
  startingAbv: number;
  targetAbv: number;
  startingVolumeMl: number;
  pureAlcoholMl: number;
  finalVolumeMl: number;
  waterToAddMl: number;
  waterRatio: number;
  startingProof: number;
  targetProof: number;
}

export interface DilutionPreset {
  id: string;
  startingAbv: number;
  startingVolumeMl: number;
  targetAbv: number;
}

export const ML_PER_FL_OZ = 29.5735;
export const DEFAULT_PRESET: DilutionPreset = {
  id: 'spirit',
  startingAbv: 40,
  startingVolumeMl: 750,
  targetAbv: 20,
};

export const PRESETS: DilutionPreset[] = [
  DEFAULT_PRESET,
  { id: 'liqueur', startingAbv: 40, startingVolumeMl: 700, targetAbv: 25 },
  { id: 'cocktail', startingAbv: 40, startingVolumeMl: 500, targetAbv: 10 },
];

function finiteNumber(value: number, fallback = 0): number {
  return Number.isFinite(value) ? value : fallback;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, finiteNumber(value, min)));
}

export function proofToAbv(proof: number): number {
  return finiteNumber(proof) / 2;
}

export function abvToProof(abv: number): number {
  return finiteNumber(abv) * 2;
}

export function mlToFlOz(ml: number): number {
  return finiteNumber(ml) / ML_PER_FL_OZ;
}

export function flOzToMl(flOz: number): number {
  return finiteNumber(flOz) * ML_PER_FL_OZ;
}

export function normalizeStrength(value: number, unit: StrengthUnit): number {
  const abv = unit === 'proof' ? proofToAbv(value) : value;
  return clamp(abv, 0.5, 96);
}

export function calculateDilution(input: DilutionInput): DilutionResult {
  const startingAbv = clamp(input.startingStrength, 0.5, 96);
  const targetAbv = clamp(input.targetStrength, 0.5, 96);
  const startingVolumeMl = clamp(input.startingVolumeMl, 10, 100000);
  const pureAlcoholMl = startingVolumeMl * startingAbv / 100;
  const isDilution = targetAbv < startingAbv;
  const finalVolumeMl = isDilution ? pureAlcoholMl / (targetAbv / 100) : startingVolumeMl;
  const waterToAddMl = isDilution ? finalVolumeMl - startingVolumeMl : 0;

  return {
    valid: isDilution,
    startingAbv,
    targetAbv,
    startingVolumeMl,
    pureAlcoholMl,
    finalVolumeMl,
    waterToAddMl,
    waterRatio: waterToAddMl / startingVolumeMl,
    startingProof: abvToProof(startingAbv),
    targetProof: abvToProof(targetAbv),
  };
}

export function presetById(id: string): DilutionPreset {
  return PRESETS.find((preset) => preset.id === id) ?? DEFAULT_PRESET;
}
