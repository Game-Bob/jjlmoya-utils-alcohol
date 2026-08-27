import type { StrengthUnit, VolumeUnit } from './logic';

export interface DilutionState {
  startingAbv: number;
  startingVolumeMl: number;
  targetAbv: number;
  volumeUnit: VolumeUnit;
  strengthUnit: StrengthUnit;
}

const STORAGE_KEY = 'abv-dilution-calculator-state';

export function loadDilutionState(): DilutionState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as DilutionState : null;
  } catch {
    return null;
  }
}

export function saveDilutionState(state: DilutionState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
