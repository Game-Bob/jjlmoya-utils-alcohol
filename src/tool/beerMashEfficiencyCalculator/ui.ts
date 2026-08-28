export interface GrainPreset {
  id: string;
  name: string;
  potentialSg: number;
  potentialPpg: number;
}

export interface MashInputState {
  grainWeight: number;
  grainPresetId: string;
  customPotentialSg: number;
  wortVolume: number;
  measuredSg: number;
  unitSystem: 'metric' | 'imperial';
  sampleTempC: number;
  calibTempC: number;
  stage: 'preboil' | 'postboil';
}

export interface MashCalculationResult {
  potentialPointsTotal: number;
  measuredPointsTotal: number;
  correctedSg: number;
  mashEfficiency: number;
  expectedSg75: number;
  expectedSg80: number;
  expectedSg85: number;
  liquidEfficiencyPoints: number;
  wortGravityBrix: number;
  statusKey: 'excellent' | 'good' | 'average' | 'poor';
}

export interface BeerMashEfficiencyCalculatorUI extends Record<string, Record<string, string> | string> {
  unitMetric: string;
  unitImperial: string;
  stagePreboil: string;
  stagePostboil: string;
  labels: {
    grainWeight: string;
    grainType: string;
    customPotential: string;
    wortVolume: string;
    measuredSg: string;
    unitSystem: string;
    presets: string;
    sampleTemp: string;
    calibTemp: string;
    stageLabel: string;
  };
  units: {
    weightKg: string;
    weightLb: string;
    volumeL: string;
    volumeGal: string;
    sg: string;
    brix: string;
    percent: string;
    tempC: string;
    tempF: string;
  };
  grainPresets: Record<string, string>;
  results: {
    efficiencyTitle: string;
    efficiencyBadge: string;
    measuredGravity: string;
    correctedGravity: string;
    expectedGravity75: string;
    expectedGravity80: string;
    expectedGravity85: string;
    potentialPoints: string;
    extractedPoints: string;
    wortBrix: string;
  };
  statusMessages: {
    excellent: string;
    good: string;
    average: string;
    poor: string;
  };
  kettleVisual: {
    mashTunTitle: string;
    wortLevel: string;
    sugarExtraction: string;
  };
}
