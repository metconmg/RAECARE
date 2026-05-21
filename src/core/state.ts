import type { StageState } from './types';

export const stateLabels: Record<StageState, string> = {
  PENDING: 'Pending',
  ACTIVE: 'Active',
  VERIFIED: 'Verified',
  ERROR: 'Error',
  CONFLICT: 'Conflict',
};

export function isOperationalState(state: StageState): boolean {
  return state === 'ACTIVE' || state === 'VERIFIED';
}
