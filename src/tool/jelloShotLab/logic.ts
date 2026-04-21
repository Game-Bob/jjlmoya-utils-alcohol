export interface JelloOptions {
  abv: number;
  totalVolume: number;
  intensity: 'light' | 'balanced' | 'limit';
}

export interface JelloResults {
  boilingWaterVolume: number;
  alcoholVolume: number;
  packetsNeeded: number;
  chillingTimeHours: number;
  finalAbv: number;
}

export function calculateJelloShot(options: JelloOptions): JelloResults {
  const { abv, totalVolume, intensity } = options;

  let alcoholRatio = 0.45;
  if (intensity === 'light') alcoholRatio = 0.30;
  if (intensity === 'limit') alcoholRatio = Math.min(0.55, 35 / abv);

  const alcoholVolume = totalVolume * alcoholRatio;
  const boilingWaterVolume = totalVolume - alcoholVolume;
  const packetsNeeded = totalVolume / 475;
  const chillingTimeHours = 4 + (totalVolume > 1000 ? (totalVolume - 1000) / 1000 : 0);
  const finalAbv = (alcoholVolume * abv) / totalVolume;

  return { boilingWaterVolume, alcoholVolume, packetsNeeded, chillingTimeHours, finalAbv };
}
