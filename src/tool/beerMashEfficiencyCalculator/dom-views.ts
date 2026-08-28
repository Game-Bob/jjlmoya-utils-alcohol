import type { MashInputState, MashCalculationResult } from './ui';

function renderKettleDefs(liquidColor: string): string {
  return `
    <defs>
      <linearGradient id="copperBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="var(--n-kettle-copper-light, #f59e0b)"/>
        <stop offset="50%" stop-color="var(--n-kettle-copper-mid, #d97706)"/>
        <stop offset="100%" stop-color="var(--n-kettle-copper-dark, #78350f)"/>
      </linearGradient>
      <linearGradient id="wortGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${liquidColor}"/>
        <stop offset="100%" stop-color="var(--n-wort-bottom, #92400e)"/>
      </linearGradient>
      <linearGradient id="glassSight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.4)"/>
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.1)"/>
      </linearGradient>
    </defs>
  `;
}

function renderKettleDetails(levelY: number, bubblesOpacity: number): string {
  return `
    <!-- Handles -->
    <path d="M 20 75 C 10 75, 10 115, 20 115" fill="none" stroke="var(--n-kettle-copper-dark, #78350f)" stroke-width="6" stroke-linecap="round"/>
    <path d="M 220 75 C 230 75, 230 115, 220 115" fill="none" stroke="var(--n-kettle-copper-dark, #78350f)" stroke-width="6" stroke-linecap="round"/>

    <!-- Kettle Main Vessel -->
    <rect x="25" y="35" width="190" height="155" rx="16" fill="url(#copperBody)" stroke="var(--n-kettle-border, #451a03)" stroke-width="3"/>

    <!-- Sight Glass Window / Liquid Chamber -->
    <rect x="35" y="45" width="170" height="135" rx="10" fill="var(--n-kettle-inner, #0f172a)" stroke="url(#glassSight)" stroke-width="2"/>

    <!-- Wort Liquid Body -->
    <rect x="35" y="${levelY}" width="170" height="${180 - levelY}" rx="6" fill="url(#wortGradient)" />

    <!-- Grain Filter Bed at bottom -->
    <path d="M 35 155 L 205 155 L 205 180 Q 120 185 35 180 Z" fill="var(--n-grain-bed, #b45309)" opacity="0.85"/>
    <circle cx="65" cy="165" r="2.5" fill="#fde68a"/>
    <circle cx="95" cy="162" r="3.5" fill="#fde68a"/>
    <circle cx="125" cy="166" r="3" fill="#fde68a"/>
    <circle cx="155" cy="163" r="2.5" fill="#fde68a"/>
    <circle cx="180" cy="167" r="3" fill="#fde68a"/>

    <!-- Bubbles rising -->
    <g opacity="${bubblesOpacity}">
      <circle cx="70" cy="${levelY + 25}" r="3.5" fill="#fff" opacity="0.75"/>
      <circle cx="110" cy="${levelY + 40}" r="5" fill="#fff" opacity="0.65"/>
      <circle cx="145" cy="${levelY + 20}" r="3" fill="#fff" opacity="0.8"/>
      <circle cx="175" cy="${levelY + 45}" r="4" fill="#fff" opacity="0.7"/>
    </g>

    <!-- Sight Gauge lines -->
    <line x1="195" y1="55" x2="195" y2="165" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 3"/>
  `;
}

export function renderKettleSvg(input: MashInputState, result: MashCalculationResult): string {
  const effPercent = Math.min(100, Math.max(0, result.mashEfficiency));
  const fluidHeightPercent = Math.min(85, Math.max(20, (input.wortVolume / 50) * 100));
  const levelY = 180 - (fluidHeightPercent / 100) * 125;
  const goldIntensity = Math.min(1, Math.max(0.15, (input.measuredSg - 1.000) / 0.080));
  const liquidColor = `rgba(245, 158, 11, ${0.45 + goldIntensity * 0.5})`;
  const bubblesOpacity = effPercent > 50 ? 0.85 : 0.35;

  return `
    <svg viewBox="0 0 240 210" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Brewing Kettle Visualization">
      ${renderKettleDefs(liquidColor)}
      ${renderKettleDetails(levelY, bubblesOpacity)}
      <!-- Integrated Centered Badge -->
      <rect x="65" y="80" width="110" height="50" rx="10" fill="var(--n-card-bg, #ffffff)" stroke="var(--n-primary, #d97706)" stroke-width="2" opacity="0.95"/>
      <text x="120" y="100" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="0.05em" fill="var(--n-text-muted, #64748b)">MASH EFFICIENCY</text>
      <text x="120" y="122" text-anchor="middle" font-size="20" font-weight="900" fill="var(--n-primary, #d97706)">${result.mashEfficiency}%</text>
    </svg>
  `;
}
