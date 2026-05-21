import { AlertTriangle, CheckCircle2, CircleDot, Clock3, GitBranch } from 'lucide-react';
import type { StageState } from '../../core/types';
import { stateLabels } from '../../core/state';

const icons = {
  PENDING: Clock3,
  ACTIVE: CircleDot,
  VERIFIED: CheckCircle2,
  ERROR: AlertTriangle,
  CONFLICT: GitBranch,
} satisfies Record<StageState, typeof Clock3>;

interface StateBadgeProps {
  state: StageState;
}

export function StateBadge({ state }: StateBadgeProps) {
  const Icon = icons[state];
  return (
    <span className={`state-badge state-${state.toLowerCase()}`}>
      <Icon size={14} aria-hidden="true" />
      {stateLabels[state]}
    </span>
  );
}
