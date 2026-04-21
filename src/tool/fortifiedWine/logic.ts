export interface PearsonResult {
  partsWine: number;
  partsSpirit: number;
  totalParts: number;
  volumeWine: number;
  volumeSpirit: number;
  volumeTotal: number;
  bottles75: number;
  bottles50: number;
}

export function calculateModeA(wineAbv: number, spiritAbv: number, targetAbv: number, wineVolume: number): PearsonResult {
  const partsWine = spiritAbv - targetAbv;
  const partsSpirit = targetAbv - wineAbv;
  const totalParts = partsWine + partsSpirit;
  const volumeSpirit = wineVolume * (partsSpirit / partsWine);
  const volumeTotal = wineVolume + volumeSpirit;
  return {
    partsWine,
    partsSpirit,
    totalParts,
    volumeWine: wineVolume,
    volumeSpirit,
    volumeTotal,
    bottles75: Math.ceil(volumeTotal / 0.75),
    bottles50: Math.ceil(volumeTotal / 0.5),
  };
}

export function calculateModeB(wineAbv: number, spiritAbv: number, targetAbv: number, targetVolume: number): PearsonResult {
  const partsWine = spiritAbv - targetAbv;
  const partsSpirit = targetAbv - wineAbv;
  const totalParts = partsWine + partsSpirit;
  const volumeWine = targetVolume * (partsWine / totalParts);
  const volumeSpirit = targetVolume * (partsSpirit / totalParts);
  return {
    partsWine,
    partsSpirit,
    totalParts,
    volumeWine,
    volumeSpirit,
    volumeTotal: targetVolume,
    bottles75: Math.ceil(targetVolume / 0.75),
    bottles50: Math.ceil(targetVolume / 0.5),
  };
}
