import type { CocktailComponent, CocktailStats } from './domain/Ingredient';

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (_m, r: string, g: string, b: string) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);

  return result
    ? {
        r: parseInt(result[1] ?? '', 16),
        g: parseInt(result[2] ?? '', 16),
        b: parseInt(result[3] ?? '', 16),
      }
    : { r: 255, g: 255, b: 255 };
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function computeBalanceRatio(sugarGrams: number, acidGrams: number): number {
  if (acidGrams > 0) return sugarGrams / acidGrams;
  if (sugarGrams > 0) return 999;
  return 0;
}

function accumulateComponents(components: CocktailComponent[]) {
  let totalVol = 0, totalAlcoholVol = 0, totalSugarGrams = 0, totalAcidGrams = 0;
  let weightedBitterness = 0, weightedComplexity = 0;
  let weightedR = 0, weightedG = 0, weightedB = 0;

  components.forEach((comp) => {
    if (comp.volumeMl <= 0) return;
    const vol = comp.volumeMl;
    totalVol += vol;
    totalAlcoholVol += vol * (comp.ingredient.abv / 100);
    totalSugarGrams += vol * (comp.ingredient.sugar / 100);
    totalAcidGrams += vol * (comp.ingredient.acid / 100);
    weightedBitterness += vol * (comp.ingredient.bitterness || 0);
    weightedComplexity += vol * (comp.ingredient.complexity || 0);
    const rgb = hexToRgb(comp.ingredient.color || '#ffffff');
    weightedR += vol * rgb.r;
    weightedG += vol * rgb.g;
    weightedB += vol * rgb.b;
  });

  return { totalVol, totalAlcoholVol, totalSugarGrams, totalAcidGrams, weightedBitterness, weightedComplexity, weightedR, weightedG, weightedB };
}

function emptyStats(): CocktailStats {
  return {
    totalVolumeMl: 0, finalAbv: 0, totalSugarGrams: 0, totalAcidGrams: 0,
    sugarConcentration: 0, acidConcentration: 0, balanceRatio: 0,
    bitternessIndex: 0, complexityIndex: 0, finalColor: '#ffffff',
  };
}

export function calculateCocktail(components: CocktailComponent[]): CocktailStats {
  const acc = accumulateComponents(components);
  if (acc.totalVol === 0) return emptyStats();

  const v = acc.totalVol;
  return {
    totalVolumeMl: v,
    finalAbv: (acc.totalAlcoholVol / v) * 100,
    totalSugarGrams: acc.totalSugarGrams,
    totalAcidGrams: acc.totalAcidGrams,
    sugarConcentration: (acc.totalSugarGrams / v) * 100,
    acidConcentration: (acc.totalAcidGrams / v) * 100,
    balanceRatio: computeBalanceRatio(acc.totalSugarGrams, acc.totalAcidGrams),
    bitternessIndex: acc.weightedBitterness / v,
    complexityIndex: acc.weightedComplexity / v,
    finalColor: rgbToHex(Math.round(acc.weightedR / v), Math.round(acc.weightedG / v), Math.round(acc.weightedB / v)),
  };
}

export function getBalanceVerdict(stats: CocktailStats): { labelKey: string; colorClass: string } {
  const r = stats.balanceRatio;

  if (stats.totalAcidGrams === 0 && stats.totalSugarGrams < 2) {
    return { labelKey: 'verdictSpiritSeco', colorClass: 'text-indigo-400' };
  }
  if (stats.totalAcidGrams === 0) {
    return { labelKey: 'verdictSoloDulce', colorClass: 'text-amber-400' };
  }
  if (r < 4) return { labelKey: 'verdictMuyAcido', colorClass: 'text-red-500' };
  if (r < 6) return { labelKey: 'verdictAcido', colorClass: 'text-lime-400' };
  if (r < 9) return { labelKey: 'verdictEquilibrado', colorClass: 'text-emerald-400' };
  if (r < 12) return { labelKey: 'verdictDulce', colorClass: 'text-yellow-400' };
  return { labelKey: 'verdictEmpalagoso', colorClass: 'text-red-500' };
}

function getSugarFix(stats: CocktailStats): { actionKey: string; amountValue: string } | null {
  const TARGET_RATIO = 7.5;
  const targetSugar = TARGET_RATIO * stats.totalAcidGrams;
  const vol = ((targetSugar - stats.totalSugarGrams) * 100) / 61.5;
  if (vol < 2.5) return null;
  return { actionKey: 'fixAddSugar', amountValue: `+${Math.ceil(vol / 2.5) * 2.5}ml Jarabe` };
}

function getAcidFix(stats: CocktailStats): { actionKey: string; amountValue: string } | null {
  const TARGET_RATIO = 7.5;
  const targetAcid = stats.totalSugarGrams / TARGET_RATIO;
  const vol = ((targetAcid - stats.totalAcidGrams) * 100) / 6.0;
  if (vol < 2.5) return null;
  return { actionKey: 'fixAddAcid', amountValue: `+${Math.ceil(vol / 2.5) * 2.5}ml Lima` };
}

export function getFixSuggestion(stats: CocktailStats): { actionKey: string; amountValue: string } | null {
  if (stats.totalVolumeMl === 0) return null;
  if (stats.totalAcidGrams === 0 && stats.totalSugarGrams < 2) return null;
  if (stats.totalAcidGrams === 0) return { actionKey: 'fixAddBitters', amountValue: '+2 dashes Bitters' };

  const currentRatio = stats.balanceRatio;
  if (currentRatio >= 6.0 && currentRatio <= 9.0) return null;
  if (currentRatio < 6.0) return getSugarFix(stats);
  return getAcidFix(stats);
}
