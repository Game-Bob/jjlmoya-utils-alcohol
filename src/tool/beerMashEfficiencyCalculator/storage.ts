import type { MashInputState } from './ui';

const STORAGE_KEY = 'jjlmoya_beer_mash_efficiency_v1';

export const DEFAULT_MASH_STATE: MashInputState = {
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

function getNum(val: unknown, fallback: number): number {
  return typeof val === 'number' ? val : fallback;
}

export function loadMashState(): MashInputState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_MASH_STATE;
    const p = JSON.parse(raw);
    return {
      grainWeight: getNum(p.grainWeight, DEFAULT_MASH_STATE.grainWeight),
      grainPresetId: typeof p.grainPresetId === 'string' ? p.grainPresetId : DEFAULT_MASH_STATE.grainPresetId,
      customPotentialSg: getNum(p.customPotentialSg, DEFAULT_MASH_STATE.customPotentialSg),
      wortVolume: getNum(p.wortVolume, DEFAULT_MASH_STATE.wortVolume),
      measuredSg: getNum(p.measuredSg, DEFAULT_MASH_STATE.measuredSg),
      unitSystem: p.unitSystem === 'imperial' ? 'imperial' : 'metric',
      sampleTempC: getNum(p.sampleTempC, DEFAULT_MASH_STATE.sampleTempC),
      calibTempC: getNum(p.calibTempC, DEFAULT_MASH_STATE.calibTempC),
      stage: p.stage === 'postboil' ? 'postboil' : 'preboil',
    };
  } catch {
    return DEFAULT_MASH_STATE;
  }
}

export function saveMashState(state: MashInputState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
