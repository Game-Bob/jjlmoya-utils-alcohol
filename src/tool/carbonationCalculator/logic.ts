export interface PrimingSugarResults {
  tableSugar: number;
  cornSugar: number;
  dme: number;
  residualCO2: number;
}

export function calculatePrimingSugar(
  volumeL: number,
  co2Target: number,
  tempC: number
): PrimingSugarResults {
  const residualCO2 = 3.0378 - 0.050062 * tempC + 0.00026555 * Math.pow(tempC, 2);
  const co2Needed = Math.max(0, co2Target - residualCO2);

  const cornSugar = volumeL * co2Needed * 4.4;
  const tableSugar = cornSugar * 0.91;
  const dme = cornSugar * 1.5;

  return {
    tableSugar: Math.round(tableSugar),
    cornSugar: Math.round(cornSugar),
    dme: Math.round(dme),
    residualCO2
  };
}

export function convertToImperial(liters: number, celsius: number) {
  return {
    gallons: liters * 0.264172,
    fahrenheit: (celsius * 9) / 5 + 32
  };
}

export function convertToMetric(gallons: number, fahrenheit: number) {
  return {
    liters: gallons / 0.264172,
    celsius: ((fahrenheit - 32) * 5) / 9
  };
}
