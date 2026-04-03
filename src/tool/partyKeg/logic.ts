export interface PartyStats {
  totalLiters: number;
  kegs: number;
  totalIce: number;
  bags: number;
  iceMsg: string;
}

export function calculatePartyStock(
  guests: number,
  duration: number,
  temp: number,
  drinkRate: number
): PartyStats {
  const totalDrinks = guests * (drinkRate * duration);
  const totalLiters = Math.ceil(totalDrinks * 0.33);
  const kegs = Math.ceil(totalLiters / 50);

  const deltaT = temp - 4;
  const massBeer = totalLiters;
  const energyToRemove = massBeer * 4.18 * deltaT;
  const iceForCooling = (energyToRemove / 334) * 1.5;

  const ambientDelta = temp - 0;
  const meltRate = (ambientDelta / 10) * 0.5;
  const iceForMaintenance = meltRate * duration * (massBeer / 20);

  const totalIce = Math.ceil(iceForCooling + iceForMaintenance);
  const bags = Math.ceil(totalIce / 2);

  let iceMsg = 'optimal';
  if (temp > 30) iceMsg = 'highMelt';
  else if (temp < 15) iceMsg = 'highEfficiency';

  return { totalLiters, kegs, totalIce, bags, iceMsg };
}
