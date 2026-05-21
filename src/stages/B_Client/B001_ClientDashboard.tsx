import { InvariantPill } from '../shared/InvariantPill';
import { LeverList } from '../shared/LeverList';
import { nodeDatabase } from '../../core/data';

const node = nodeDatabase.find((item) => item.id === 'B001');

export function B001ClientDashboard() {
  if (!node) return null;

  return (
    <section className="panel">
      <InvariantPill invariant={node.invariant} state={node.state} />
      <LeverList levers={node.levers} />
    </section>
  );
}
