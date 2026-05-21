import {
  algorithmicConstraints,
  graphEdgeTaxonomy,
  graphNodeOntology,
  interactionPositioningRules,
  relaySecurityArchitecture,
  trustMetricHierarchy,
  visualPrimitives,
} from '../../core/section3';

export function TrustGraphSummary() {
  return (
    <section className="trust-graph-summary" aria-label="Section 3 trust graph architecture">
      <header>
        <p className="eyebrow">Section 3</p>
        <h2>Trust Graph Architecture</h2>
        <p>
          Localized trust propagation, perspective-bound queries, additive visibility, and structured relay boundaries.
        </p>
      </header>

      <div className="summary-grid">
        <article className="panel">
          <h3>Node Ontology</h3>
          <ul className="compact-list">
            {graphNodeOntology.map((node) => <li key={node.type}>{node.label}</li>)}
          </ul>
        </article>

        <article className="panel">
          <h3>Edge Taxonomy</h3>
          <ul className="compact-list">
            {graphEdgeTaxonomy.map((edge) => <li key={edge.edgeType}>{edge.edgeType}</li>)}
          </ul>
        </article>

        <article className="panel">
          <h3>Trust Rules</h3>
          <ul className="compact-list">
            {algorithmicConstraints.map((rule) => <li key={rule.principle}>{rule.principle}</li>)}
          </ul>
        </article>

        <article className="panel">
          <h3>Metrics</h3>
          <ul className="compact-list">
            {trustMetricHierarchy.map((metric) => <li key={metric.level}>{metric.metricType}</li>)}
          </ul>
        </article>

        <article className="panel">
          <h3>Visual Primitives</h3>
          <ul className="compact-list">
            {visualPrimitives.map((primitive) => <li key={primitive.primitive}>{primitive.primitive}</li>)}
          </ul>
        </article>

        <article className="panel">
          <h3>Positioning</h3>
          <ul className="compact-list">
            {interactionPositioningRules.map((rule) => <li key={rule.actor}>{rule.actor}</li>)}
          </ul>
        </article>

        <article className="panel wide-panel">
          <h3>Relay Security</h3>
          <ul className="compact-list">
            {relaySecurityArchitecture.map((item) => <li key={item.component}>{item.component}: {item.engineeringConstraint}</li>)}
          </ul>
        </article>
      </div>
    </section>
  );
}
