import { evaluateDilution } from './evaluator';
import { calculateDilution, flOzToMl, mlToFlOz, presetById, type StrengthUnit, type VolumeUnit } from './logic';
import { loadDilutionState, saveDilutionState, type DilutionState } from './storage';
import { renderControlValues, renderDilutionResult } from './dom-views';
import type { AbvDilutionCalculatorUI } from './ui';

function input(root: HTMLElement, id: string): HTMLInputElement | null {
  return root.querySelector<HTMLInputElement>(`#${id}`);
}

function choice<T extends string>(root: HTMLElement, selector: string, fallback: T): T {
  return (root.querySelector<HTMLElement>(`${selector}[aria-pressed="true"]`)?.dataset.value as T) ?? fallback;
}

function setPressed(root: HTMLElement, selector: string, value: string): void {
  root.querySelectorAll<HTMLButtonElement>(selector).forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.value === value));
  });
}

function volumeDisplay(ml: number, unit: VolumeUnit): number {
  return unit === 'imperial' ? mlToFlOz(ml) : ml;
}

interface InputConfig {
  id: string;
  min: number;
  max: number;
  step: number;
}

function configureInput(root: HTMLElement, config: InputConfig): void {
  const range = input(root, config.id);
  if (!range) return;
  range.min = String(config.min);
  range.max = String(config.max);
  range.step = String(config.step);
}

function applyRanges(root: HTMLElement, state: DilutionState): void {
  const strengthMin = state.strengthUnit === 'proof' ? 1 : 0.5;
  const strengthMax = state.strengthUnit === 'proof' ? 192 : 96;
  const strengthConfig = { min: strengthMin, max: strengthMax, step: 0.5 };
  ['abd-start-strength-range', 'abd-start-strength', 'abd-target-strength-range', 'abd-target-strength']
    .forEach((id) => configureInput(root, { id, ...strengthConfig }));
  const volumeConfig = state.volumeUnit === 'imperial'
    ? { id: 'abd-start-volume-range', min: 1.7, max: 169.1, step: 0.1 }
    : { id: 'abd-start-volume-range', min: 50, max: 5000, step: 10 };
  configureInput(root, volumeConfig);
  configureInput(root, { ...volumeConfig, id: 'abd-start-volume' });
}

function storedNumber(root: HTMLElement, key: string, fallback: number): number {
  const value = Number(root.dataset[key]);
  return Number.isFinite(value) ? value : fallback;
}

function cachePhysicalState(root: HTMLElement, state: DilutionState): void {
  root.dataset.startingAbv = String(state.startingAbv);
  root.dataset.startingVolumeMl = String(state.startingVolumeMl);
  root.dataset.targetAbv = String(state.targetAbv);
}

function readState(root: HTMLElement, preservePhysical = false): DilutionState {
  const volumeUnit = choice<VolumeUnit>(root, '[data-volume-unit]', 'metric');
  const strengthUnit = choice<StrengthUnit>(root, '[data-strength-unit]', 'abv');
  return {
    startingAbv: preservePhysical ? storedNumber(root, 'startingAbv', 40) : physicalStrength(root, 'abd-start-strength', strengthUnit, 40),
    startingVolumeMl: preservePhysical ? storedNumber(root, 'startingVolumeMl', 750) : physicalVolume(root, volumeUnit),
    targetAbv: preservePhysical ? storedNumber(root, 'targetAbv', 20) : physicalStrength(root, 'abd-target-strength', strengthUnit, 20),
    volumeUnit,
    strengthUnit,
  };
}

function numericValue(root: HTMLElement, id: string, fallback: number): number {
  const value = Number(input(root, id)?.value);
  return Number.isFinite(value) ? value : fallback;
}

function physicalStrength(root: HTMLElement, id: string, unit: StrengthUnit, fallback: number): number {
  const value = numericValue(root, id, unit === 'proof' ? fallback * 2 : fallback);
  return unit === 'proof' ? value / 2 : value;
}

function physicalVolume(root: HTMLElement, unit: VolumeUnit): number {
  const value = numericValue(root, 'abd-start-volume', 750);
  return unit === 'imperial' ? flOzToMl(value) : value;
}

function applyState(root: HTMLElement, state: DilutionState): void {
  cachePhysicalState(root, state);
  setPressed(root, '[data-volume-unit]', state.volumeUnit);
  setPressed(root, '[data-strength-unit]', state.strengthUnit);
  applyRanges(root, state);
  const startVolume = input(root, 'abd-start-volume');
  if (startVolume) {
    const displayedVolume = volumeDisplay(state.startingVolumeMl, state.volumeUnit);
    startVolume.value = state.volumeUnit === 'imperial' ? displayedVolume.toFixed(1) : String(Math.round(displayedVolume));
  }
  const startStrength = input(root, 'abd-start-strength');
  if (startStrength) startStrength.value = String(state.strengthUnit === 'proof' ? state.startingAbv * 2 : state.startingAbv);
  const targetStrength = input(root, 'abd-target-strength');
  if (targetStrength) targetStrength.value = String(state.strengthUnit === 'proof' ? state.targetAbv * 2 : state.targetAbv);
  syncInputs(root);
}

function update(root: HTMLElement, ui: AbvDilutionCalculatorUI, nextState?: DilutionState): void {
  const state = nextState ?? readState(root);
  cachePhysicalState(root, state);
  const result = calculateDilution({
    startingStrength: state.startingAbv,
    startingVolumeMl: state.startingVolumeMl,
    targetStrength: state.targetAbv,
  });
  const evaluation = evaluateDilution(result);
  renderControlValues(root, { result, evaluation, volumeUnit: state.volumeUnit, strengthUnit: state.strengthUnit });
  renderDilutionResult(root, { result, evaluation, volumeUnit: state.volumeUnit, strengthUnit: state.strengthUnit }, ui);
  saveDilutionState(state);
}

function syncInputs(root: HTMLElement, source?: HTMLInputElement): void {
  if (source) {
    const target = source.dataset.syncInput ?? source.dataset.syncTarget;
    const sibling = target ? input(root, target) : null;
    if (sibling && sibling !== source) sibling.value = source.value;
    return;
  }

  root.querySelectorAll<HTMLInputElement>('[data-sync-target]').forEach((numberInput) => {
    syncInputs(root, numberInput);
  });
}

function bindInputs(root: HTMLElement, ui: AbvDilutionCalculatorUI): void {
  root.querySelectorAll<HTMLInputElement>('input').forEach((field) => field.addEventListener('input', () => {
    syncInputs(root, field);
    update(root, ui);
  }));
}

function bindChoices(root: HTMLElement, ui: AbvDilutionCalculatorUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-volume-unit], [data-strength-unit]').forEach((button) => button.addEventListener('click', () => {
    const state = readState(root, true);
    const next = button.dataset.value ?? '';
    if (button.hasAttribute('data-volume-unit')) state.volumeUnit = next as VolumeUnit;
    if (button.hasAttribute('data-strength-unit')) state.strengthUnit = next as StrengthUnit;
    applyState(root, state);
    update(root, ui, state);
  }));
}

function bindPresets(root: HTMLElement, ui: AbvDilutionCalculatorUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => button.addEventListener('click', () => {
    const preset = presetById(button.dataset.preset ?? '');
    const state = { ...preset, volumeUnit: choice<VolumeUnit>(root, '[data-volume-unit]', 'metric'), strengthUnit: choice<StrengthUnit>(root, '[data-strength-unit]', 'abv') };
    applyState(root, state);
    update(root, ui, state);
  }));
}

export function initAbvDilutionCalculator(ui: AbvDilutionCalculatorUI): void {
  const root = document.querySelector<HTMLElement>('[data-abv-dilution-calculator]');
  if (!root) return;
  const saved = loadDilutionState();
  if (saved) applyState(root, saved);
  bindInputs(root, ui);
  bindChoices(root, ui);
  bindPresets(root, ui);
  update(root, ui, saved ?? undefined);
}
