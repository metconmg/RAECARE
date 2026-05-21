import type { NodeData } from '../../core/types';
import { StateBadge } from '../StateBadge/StateBadge';
import { InvariantPill } from '../../stages/shared/InvariantPill';
import { LeverList } from '../../stages/shared/LeverList';

interface NodeCardProps {
  node: NodeData;
}

export function NodeCard({ node }: NodeCardProps) {
  return (
    <article className="node-card">
      <div className="node-card-header">
        <div>
          <p className="node-id">{node.id} · {node.coords}</p>
          <h3>{node.name}</h3>
        </div>
        <StateBadge state={node.state} />
      </div>
      <p>{node.purpose}</p>
      <InvariantPill invariant={node.invariant} state={node.state} />
      <LeverList levers={node.levers} />
    </article>
  );
}
