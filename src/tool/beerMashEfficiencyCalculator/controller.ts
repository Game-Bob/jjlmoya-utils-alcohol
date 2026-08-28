import type { MashInputState, BeerMashEfficiencyCalculatorUI } from './ui';
import { calculateMashEfficiency, GRAIN_PRESETS } from './logic';
import { loadMashState, saveMashState } from './storage';
import { getStatusBadgeText, getStatusColorClass } from './evaluator';
import { renderKettleSvg } from './dom-views';

function setElText(parent: HTMLElement, selector: string, text: string): void {
  const el = parent.querySelector<HTMLElement>(selector);
  if (el) el.textContent = text;
}

function updateInputsFromState(container: HTMLElement, state: MashInputState, ui: BeerMashEfficiencyCalculatorUI): void {
  const grainWeightInput = container.querySelector<HTMLInputElement>('#grain-weight');
  const wortVolumeInput = container.querySelector<HTMLInputElement>('#wort-volume');
  const measuredSgInput = container.querySelector<HTMLInputElement>('#measured-sg');
  const sampleTempInput = container.querySelector<HTMLInputElement>('#sample-temp');

  if (grainWeightInput) grainWeightInput.value = state.grainWeight.toString();
  if (wortVolumeInput) wortVolumeInput.value = state.wortVolume.toString();
  if (measuredSgInput) measuredSgInput.value = state.measuredSg.toString();
  if (sampleTempInput) sampleTempInput.value = state.sampleTempC.toString();

  setElText(container, '#grain-weight-val', state.grainWeight.toFixed(1));
  setElText(container, '#grain-weight-unit', state.unitSystem === 'metric' ? ui.units.weightKg : ui.units.weightLb);
  setElText(container, '#wort-volume-val', state.wortVolume.toFixed(1));
  setElText(container, '#wort-volume-unit', state.unitSystem === 'metric' ? ui.units.volumeL : ui.units.volumeGal);
  setElText(container, '#measured-sg-val', state.measuredSg.toFixed(3));
  setElText(container, '#sample-temp-val', state.sampleTempC.toString());
  setElText(container, '#sample-temp-unit', state.unitSystem === 'metric' ? ui.units.tempC : ui.units.tempF);
}

function updatePresetView(container: HTMLElement, state: MashInputState, ui: BeerMashEfficiencyCalculatorUI): void {
  const customPotentialGroup = container.querySelector<HTMLElement>('#custom-potential-group');
  const customPotentialInput = container.querySelector<HTMLInputElement>('#custom-potential');
  const presetObj = GRAIN_PRESETS.find((g) => g.id === state.grainPresetId);

  if (customPotentialInput) customPotentialInput.value = state.customPotentialSg.toString();
  setElText(container, '#custom-potential-val', state.customPotentialSg.toFixed(3));
  setElText(container, '#grain-preset-selected', ui.grainPresets[state.grainPresetId] || presetObj?.name || state.grainPresetId);
  if (customPotentialGroup) customPotentialGroup.style.display = state.grainPresetId === 'custom' ? 'block' : 'none';
}

function updateResultsView(container: HTMLElement, state: MashInputState, ui: BeerMashEfficiencyCalculatorUI): void {
  const result = calculateMashEfficiency(state);
  const resBadge = container.querySelector<HTMLElement>('#res-badge');
  const kettleSvgContainer = container.querySelector<HTMLElement>('#kettle-svg-container');

  setElText(container, '#res-efficiency', `${result.mashEfficiency}%`);
  if (resBadge) {
    resBadge.textContent = getStatusBadgeText(result.statusKey, ui);
    resBadge.className = `status-badge ${getStatusColorClass(result.statusKey)}`;
  }
  setElText(container, '#res-corrected-sg', result.correctedSg.toFixed(3));
  setElText(container, '#res-expected-75', result.expectedSg75.toFixed(3));
  setElText(container, '#res-table-expected-80', result.expectedSg80.toFixed(3));
  setElText(container, '#res-expected-85', result.expectedSg85.toFixed(3));
  setElText(container, '#res-potential-pts', `${result.potentialPointsTotal} pts`);
  setElText(container, '#res-extracted-pts', `${result.measuredPointsTotal} pts`);
  setElText(container, '#res-brix', `${result.wortGravityBrix}° Brix`);
  if (kettleSvgContainer) kettleSvgContainer.innerHTML = renderKettleSvg(state, result);
}

function updateToggles(container: HTMLElement, state: MashInputState): void {
  const unitMetricBtn = container.querySelector<HTMLButtonElement>('#unit-metric-btn');
  const unitImperialBtn = container.querySelector<HTMLButtonElement>('#unit-imperial-btn');
  if (unitMetricBtn && unitImperialBtn) {
    unitMetricBtn.classList.toggle('active', state.unitSystem === 'metric');
    unitImperialBtn.classList.toggle('active', state.unitSystem === 'imperial');
  }

  const stagePreboilBtn = container.querySelector<HTMLButtonElement>('#stage-preboil-btn');
  const stagePostboilBtn = container.querySelector<HTMLButtonElement>('#stage-postboil-btn');
  if (stagePreboilBtn && stagePostboilBtn) {
    stagePreboilBtn.classList.toggle('active', state.stage === 'preboil');
    stagePostboilBtn.classList.toggle('active', state.stage === 'postboil');
  }
}

function bindInputEvents(container: HTMLElement, state: MashInputState, updateView: () => void): void {
  container.querySelector<HTMLInputElement>('#grain-weight')?.addEventListener('input', (e) => {
    state.grainWeight = parseFloat((e.target as HTMLInputElement).value) || 0;
    updateView();
  });
  container.querySelector<HTMLInputElement>('#wort-volume')?.addEventListener('input', (e) => {
    state.wortVolume = parseFloat((e.target as HTMLInputElement).value) || 0;
    updateView();
  });
  container.querySelector<HTMLInputElement>('#measured-sg')?.addEventListener('input', (e) => {
    state.measuredSg = parseFloat((e.target as HTMLInputElement).value) || 1.000;
    updateView();
  });
  container.querySelector<HTMLInputElement>('#custom-potential')?.addEventListener('input', (e) => {
    state.customPotentialSg = parseFloat((e.target as HTMLInputElement).value) || 1.037;
    updateView();
  });
  container.querySelector<HTMLInputElement>('#sample-temp')?.addEventListener('input', (e) => {
    state.sampleTempC = parseFloat((e.target as HTMLInputElement).value) || 20;
    updateView();
  });
}

function bindUnitEvents(container: HTMLElement, state: MashInputState, updateView: () => void): void {
  container.querySelector<HTMLButtonElement>('#unit-metric-btn')?.addEventListener('click', () => {
    if (state.unitSystem !== 'metric') {
      state.unitSystem = 'metric';
      state.grainWeight = Math.round((state.grainWeight / 2.20462) * 10) / 10;
      state.wortVolume = Math.round((state.wortVolume * 3.78541) * 10) / 10;
      updateView();
    }
  });
  container.querySelector<HTMLButtonElement>('#unit-imperial-btn')?.addEventListener('click', () => {
    if (state.unitSystem !== 'imperial') {
      state.unitSystem = 'imperial';
      state.grainWeight = Math.round((state.grainWeight * 2.20462) * 10) / 10;
      state.wortVolume = Math.round((state.wortVolume / 3.78541) * 10) / 10;
      updateView();
    }
  });
}

function bindDropdownEvents(container: HTMLElement, state: MashInputState, updateView: () => void): void {
  const presetSelectBtn = container.querySelector<HTMLButtonElement>('#grain-preset-trigger');
  const presetDropdown = container.querySelector<HTMLElement>('#grain-preset-dropdown');

  presetSelectBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    presetDropdown?.classList.toggle('open');
  });

  container.querySelectorAll<HTMLButtonElement>('.preset-option').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const presetId = (e.currentTarget as HTMLButtonElement).dataset.presetId;
      if (presetId) {
        state.grainPresetId = presetId;
        presetDropdown?.classList.remove('open');
        updateView();
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!container.contains(e.target as Node)) return;
    if (presetDropdown?.classList.contains('open') && !presetSelectBtn?.contains(e.target as Node)) {
      presetDropdown.classList.remove('open');
    }
  });
}

function bindStageEvents(container: HTMLElement, state: MashInputState, updateView: () => void): void {
  container.querySelector<HTMLButtonElement>('#stage-preboil-btn')?.addEventListener('click', () => {
    if (state.stage !== 'preboil') {
      state.stage = 'preboil';
      updateView();
    }
  });
  container.querySelector<HTMLButtonElement>('#stage-postboil-btn')?.addEventListener('click', () => {
    if (state.stage !== 'postboil') {
      state.stage = 'postboil';
      updateView();
    }
  });
}

export function initBeerMashEfficiencyCalculator(container: HTMLElement, ui: BeerMashEfficiencyCalculatorUI): void {
  const state: MashInputState = loadMashState();

  const updateView = (): void => {
    updateInputsFromState(container, state, ui);
    updatePresetView(container, state, ui);
    updateToggles(container, state);
    updateResultsView(container, state, ui);
    saveMashState(state);
  };

  bindUnitEvents(container, state, updateView);
  bindStageEvents(container, state, updateView);
  bindInputEvents(container, state, updateView);
  bindDropdownEvents(container, state, updateView);

  updateView();
}
