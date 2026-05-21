import { Lock, ShieldCheck } from 'lucide-react';
import type { StageState } from '../../core/types';

interface InvariantPillProps {
  invariant: string;
  state: StageState;
}

export function InvariantPill({ invariant, state }: InvariantPillProps) {
  const Icon = state === 'VERIFIED' ? ShieldCheck : Lock;

  return (
    <div className={`invariant-pill state-${state.toLowerCase()}`}>
      <Icon size={16} aria-hidden="true" />
      <span>{invariant}</span>
    </div>
  );
}
