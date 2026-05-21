import { InvariantPill } from '../shared/InvariantPill';
import { LeverList } from '../shared/LeverList';
import { nodeDatabase } from '../../core/data';

const node = nodeDatabase.find((item) => item.id === 'A002');

export function A002LandingIntake() {
  if (!node) return null;

  return (
    <section className="panel">
      <InvariantPill invariant={node.invariant} state={node.state} />
      <LeverList levers={node.levers} />
    </section>
  );
}
