import type { NodeData } from '../core/types';
import { NodeCard } from '../components/NodeCard/NodeCard';
import { Zone } from './Zone';

interface NetworkCanvasProps {
  nodes: NodeData[];
}

export function NetworkCanvas({ nodes }: NetworkCanvasProps) {
  const entryNodes = nodes.filter((node) => node.zone === 'A_Entry');
  const clientNodes = nodes.filter((node) => node.zone === 'B_Client');

  return (
    <section className="canvas-shell" aria-label="RAECARE topology canvas">
      <Zone title="A · Entry / Auth">
        {entryNodes.map((node) => <NodeCard key={node.id} node={node} />)}
      </Zone>
      <Zone title="B · Client">
        {clientNodes.map((node) => <NodeCard key={node.id} node={node} />)}
      </Zone>
    </section>
  );
}
