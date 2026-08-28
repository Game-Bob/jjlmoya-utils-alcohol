import type { MashCalculationResult, BeerMashEfficiencyCalculatorUI } from './ui';

export function getStatusBadgeText(statusKey: MashCalculationResult['statusKey'], ui: BeerMashEfficiencyCalculatorUI): string {
  return ui.statusMessages[statusKey] || ui.results.efficiencyBadge;
}

export function getStatusColorClass(statusKey: MashCalculationResult['statusKey']): string {
  switch (statusKey) {
    case 'excellent':
      return 'badge-excellent';
    case 'good':
      return 'badge-good';
    case 'average':
      return 'badge-average';
    case 'poor':
      return 'badge-poor';
  }
}
