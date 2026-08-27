import type { DilutionResult } from './logic';

export type DilutionStatus = 'ready' | 'invalid' | 'large';

export interface DilutionEvaluation {
  status: DilutionStatus;
  messageKey: 'readyMessage' | 'invalidMessage' | 'largeAdditionMessage';
}

export function evaluateDilution(result: DilutionResult): DilutionEvaluation {
  if (!result.valid) return { status: 'invalid', messageKey: 'invalidMessage' };
  if (result.waterRatio >= 1) return { status: 'large', messageKey: 'largeAdditionMessage' };
  return { status: 'ready', messageKey: 'readyMessage' };
}
