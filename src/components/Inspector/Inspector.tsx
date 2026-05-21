import type { NodeData } from '../../core/types';
import { Panel } from '../Panel/Panel';

interface InspectorProps {
  node: NodeData;
}

export function Inspector({ node }: InspectorProps) {
  return (
    <aside className="inspector" aria-label="Node inspector">
      <Panel title="Inspector">
        <div className="tab-row" role="tablist" aria-label="Inspector tabs">
          <button type="button">Identity</button>
          <button type="button">Layout</button>
          <button type="button">Content</button>
          <button type="button">Handoff</button>
        </div>
        <dl className="inspector-list">
          <dt>Node</dt><dd>{node.id}</dd>
          <dt>Coords</dt><dd>{node.coords}</dd>
          <dt>Confidence</dt><dd>{node.confidence}</dd>
          <dt>Invariant</dt><dd>{node.invariant}</dd>
        </dl>
      </Panel>
    </aside>
  );
}
