export interface BACResults {
  bacPermille: number;
  bacPercent: number;
  hoursToZero: number;
  minutesToZero: number;
  waterMl: number;
  advice: string;
}

function emptyBACResults(): BACResults {
  return {
    bacPermille: 0,
    bacPercent: 0,
    hoursToZero: 0,
    minutesToZero: 0,
    waterMl: 0,
    advice: 'none'
  };
}

function computeAdvice(totalGrams: number): string {
  if (totalGrams > 30) return 'electrolytes';
  return 'hydration';
}

export function calculateAlcoholClearance(
  totalGrams: number,
  weight: number,
  r: number,
  drinkCount: number
): BACResults {
  if (totalGrams <= 0) return emptyBACResults();

  const bacPermille = totalGrams / (weight * r);
  const bacPercent = bacPermille / 10;
  const hours = bacPermille / 0.15;
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);

  return {
    bacPermille,
    bacPercent,
    hoursToZero: h,
    minutesToZero: m,
    waterMl: drinkCount * 250,
    advice: computeAdvice(totalGrams)
  };
}

export const DRINK_TEMPLATES = {
  beer: { name: 'beer', size: 330, abv: 0.05 },
  wine: { name: 'wine', size: 150, abv: 0.12 },
  spirit: { name: 'spirit', size: 50, abv: 0.4 },
  shot: { name: 'shot', size: 40, abv: 0.4 },
};

export function getAlcoholGrams(sizeMl: number, abv: number): number {
  return sizeMl * abv * 0.8;
}
