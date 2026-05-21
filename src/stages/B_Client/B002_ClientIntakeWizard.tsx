import { InvariantPill } from '../shared/InvariantPill';
import { LeverList } from '../shared/LeverList';
import { nodeDatabase } from '../../core/data';

const node = nodeDatabase.find((item) => item.id === 'B002');

export function B002ClientIntakeWizard() {
  if (!node) return null;

  return (
    <section className="panel unresolved">
      <InvariantPill invariant={node.invariant} state={node.state} />
      <LeverList levers={node.levers} />
      <p className="muted">B002+ serialized node detail is still unresolved.</p>
    </section>
  );
}
