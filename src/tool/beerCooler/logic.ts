export type ContainerType = 'can' | 'bottle';
export type LocationType = 'fridge' | 'freezer';

export interface CoolingState {
  container: ContainerType | null;
  location: LocationType | null;
  tempStart: number;
  tempTarget: number;
}

export const CONSTANTS = {
  fridge: 4,
  freezer: -18,
  can: 0.15,
  bottle: 0.08,
};

export function calculateCoolingTime(state: CoolingState): number {
  if (!state.container || !state.location) return 0;

  const tempAmbient = state.location === 'fridge' ? CONSTANTS.fridge : CONSTANTS.freezer;
  const k = state.container === 'can' ? CONSTANTS.can : CONSTANTS.bottle;

  const t = Math.log((state.tempTarget - tempAmbient) / (state.tempStart - tempAmbient)) / -k;

  if (isNaN(t) || t < 0) return 0;
  return Math.ceil(t);
}

export function getFinishTime(minutes: number): string {
  const d = new Date();
  d.setMinutes(d.getMinutes() + minutes);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
