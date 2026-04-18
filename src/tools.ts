import type { ToolDefinition } from './types';
import { COCKTAIL_BALANCER_TOOL } from './tool/cocktailBalancer';
import { BEER_COOLER_TOOL } from './tool/beerCooler';
import { PARTY_KEG_TOOL } from './tool/partyKeg';
import { CARBONATION_TOOL } from './tool/carbonationCalculator';
import { ALCOHOL_CLEARANCE_TOOL } from './tool/alcoholClearance';

export const ALL_TOOLS: ToolDefinition[] = [
  COCKTAIL_BALANCER_TOOL,
  BEER_COOLER_TOOL,
  PARTY_KEG_TOOL,
  CARBONATION_TOOL,
  ALCOHOL_CLEARANCE_TOOL,
];

export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
