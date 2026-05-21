import { describe, expect, it } from 'vitest';
import {
  algorithmicConstraints,
  graphEdgeTaxonomy,
  graphNodeOntology,
  interactionPositioningRules,
  relaySecurityArchitecture,
  trustMetricHierarchy,
  visualPrimitives,
} from '../src/core/section3';

describe('Section 3 architecture contract', () => {
  it('preserves the required graph node ontology', () => {
    expect(graphNodeOntology.map((node) => node.type)).toEqual([
      'Caregiver',
      'ClientFamily',
      'TaskEvent',
      'Institution',
      'Therapist',
    ]);
  });

  it('preserves the required graph edge taxonomy', () => {
    expect(graphEdgeTaxonomy.map((edge) => edge.edgeType)).toEqual([
      'WORKED_WITH',
      'SHARED_TO_NETWORK',
      'PROVIDED_LINEAGE_FOR',
      'RETAINED_ASSOCIATION',
      'REQUESTED_CONTACT',
    ]);
  });

  it('keeps trust mechanics perspective-bound and additive', () => {
    expect(algorithmicConstraints.map((rule) => rule.principle)).toEqual([
      'Perspective-Bound',
      'Additive Visibility',
      'Non-Punitive Omission',
      'Anti-Reverse-Engineering',
    ]);
  });

  it('does not allow rating-marketplace language as required framing', () => {
    const requiredLanguage = interactionPositioningRules.flatMap((rule) => rule.requiredFraming);
    expect(requiredLanguage).not.toContain('Hire Now');
    expect(requiredLanguage).not.toContain('Book');
    expect(requiredLanguage).not.toContain('Apply');
  });

  it('keeps trust metrics, visual primitives, and relay security populated', () => {
    expect(trustMetricHierarchy).toHaveLength(3);
    expect(visualPrimitives).toHaveLength(4);
    expect(relaySecurityArchitecture).toHaveLength(3);
  });
});
