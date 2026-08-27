import { mlToFlOz, type DilutionResult, type StrengthUnit, type VolumeUnit } from './logic';
import type { DilutionEvaluation } from './evaluator';
import type { AbvDilutionCalculatorUI } from './ui';

interface RenderModel {
  result: DilutionResult;
  evaluation: DilutionEvaluation;
  volumeUnit: VolumeUnit;
  strengthUnit: StrengthUnit;
}

function setText(root: HTMLElement, selector: string, value: string): void {
  root.querySelector<HTMLElement>(selector)?.replaceChildren(document.createTextNode(value));
}

function volumeValue(ml: number, unit: VolumeUnit): number {
  return unit === 'imperial' ? mlToFlOz(ml) : ml;
}

function volumeLabel(ml: number, unit: VolumeUnit): string {
  const value = volumeValue(ml, unit);
  return unit === 'imperial' ? `${value.toFixed(1)} fl oz` : `${Math.round(value)} mL`;
}

function volumeUnitLabel(unit: VolumeUnit): string {
  return unit === 'imperial' ? 'fl oz' : 'mL';
}

function strengthLabel(abv: number, unit: StrengthUnit): string {
  return unit === 'proof' ? `${(abv * 2).toFixed(1)} proof` : `${abv.toFixed(1)}% ABV`;
}

function setLiquidLevel(root: HTMLElement, result: DilutionResult): void {
  const level = Math.min(1, Math.max(0.08, result.finalVolumeMl / 1800));
  const liquidBottom = 326;
  const height = 230 * level;
  const y = liquidBottom - height;
  const liquid = root.querySelector<SVGRectElement>('[data-abd-liquid]');
  const waterline = root.querySelector<SVGPathElement>('[data-abd-waterline]');
  liquid?.setAttribute('y', String(y));
  liquid?.setAttribute('height', String(height));
  waterline?.setAttribute('transform', `translate(0 ${y - 171})`);
  root.style.setProperty('--abd-liquid-level', String(level));
}

export function renderControlValues(root: HTMLElement, model: RenderModel): void {
  const { result, volumeUnit, strengthUnit } = model;
  setText(root, '[data-output="abd-start-strength"]', strengthLabel(result.startingAbv, strengthUnit));
  setText(root, '[data-output="abd-start-volume"]', volumeValue(result.startingVolumeMl, volumeUnit).toFixed(volumeUnit === 'imperial' ? 1 : 0));
  setText(root, '[data-output="abd-target-strength"]', strengthLabel(result.targetAbv, strengthUnit));
  setText(root, '[data-volume-label]', volumeUnitLabel(volumeUnit));
}

export function renderDilutionResult(root: HTMLElement, model: RenderModel, ui: AbvDilutionCalculatorUI): void {
  const { result, evaluation, volumeUnit, strengthUnit } = model;
  setText(root, '[data-abd-status]', ui[evaluation.messageKey]);
  setText(root, '[data-abd-water]', result.valid ? volumeLabel(result.waterToAddMl, volumeUnit) : '--');
  setText(root, '[data-abd-final]', result.valid ? volumeLabel(result.finalVolumeMl, volumeUnit) : '--');
  setText(root, '[data-abd-alcohol]', volumeLabel(result.pureAlcoholMl, volumeUnit));
  setText(root, '[data-abd-ratio]', result.valid ? `${result.waterRatio.toFixed(2)}x` : '--');
  setText(root, '[data-abd-start-proof]', `${result.startingProof.toFixed(1)} proof`);
  setText(root, '[data-abd-target-proof]', `${result.targetProof.toFixed(1)} proof`);
  root.dataset.status = evaluation.status;
  root.dataset.volumeUnit = volumeUnit;
  root.dataset.strengthUnit = strengthUnit;
  setLiquidLevel(root, result);
}
