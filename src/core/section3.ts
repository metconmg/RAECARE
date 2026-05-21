export type GraphNodeType = 'Caregiver' | 'ClientFamily' | 'TaskEvent' | 'Institution' | 'Therapist';
export type GraphEdgeType = 'WORKED_WITH' | 'SHARED_TO_NETWORK' | 'PROVIDED_LINEAGE_FOR' | 'RETAINED_ASSOCIATION' | 'REQUESTED_CONTACT';
export type TrustMetricLevel = 1 | 2 | 3;

export interface GraphNodeOntologyEntry {
  type: GraphNodeType;
  label: string;
  primaryIdentifier: string;
  keyPlatformAttributes: string[];
}

export interface GraphEdgeTaxonomyEntry {
  origin: GraphNodeType;
  edgeType: GraphEdgeType;
  target: GraphNodeType;
  systemMeaning: string;
}

export interface AlgorithmicConstraint {
  principle: string;
  technicalImplementation: string;
  outcome: string;
}

export interface TrustMetricEntry {
  level: TrustMetricLevel;
  metricType: string;
  definition: string;
}

export interface VisualPrimitive {
  primitive: string;
  renderingLogic: string;
  replaces: string;
}

export interface InteractionPositioningRule {
  actor: 'Client' | 'Caregiver';
  prohibitedFraming: string[];
  requiredFraming: string[];
}

export interface RelaySecurityComponent {
  component: string;
  engineeringConstraint: string;
  liabilityPosture: string;
}

export const graphNodeOntology: GraphNodeOntologyEntry[] = [
  {
    type: 'Caregiver',
    label: 'Caregiver',
    primaryIdentifier: 'Anonymized Platform ID',
    keyPlatformAttributes: ['Credential Tier', 'Service Tags', 'Trust Density (Node Count)'],
  },
  {
    type: 'ClientFamily',
    label: 'Client / Family',
    primaryIdentifier: 'Anonymized Platform ID',
    keyPlatformAttributes: ['Care Required', 'Geographic Anchor', 'Visibility Permissions'],
  },
  {
    type: 'TaskEvent',
    label: 'Task / Event',
    primaryIdentifier: 'Event ID',
    keyPlatformAttributes: ['Care Category', 'Duration', 'Completion Status'],
  },
  {
    type: 'Institution',
    label: 'Institution',
    primaryIdentifier: 'Entity ID',
    keyPlatformAttributes: ['Contextual Graph Bridge'],
  },
  {
    type: 'Therapist',
    label: 'Therapist',
    primaryIdentifier: 'Anonymized Platform ID',
    keyPlatformAttributes: ['License Status', 'Off-Platform Relay Target'],
  },
];

export const graphEdgeTaxonomy: GraphEdgeTaxonomyEntry[] = [
  {
    origin: 'Caregiver',
    edgeType: 'WORKED_WITH',
    target: 'ClientFamily',
    systemMeaning: 'Establishes direct historical care continuity.',
  },
  {
    origin: 'ClientFamily',
    edgeType: 'SHARED_TO_NETWORK',
    target: 'Caregiver',
    systemMeaning: 'Voluntary trust propagation through additive visibility.',
  },
  {
    origin: 'ClientFamily',
    edgeType: 'PROVIDED_LINEAGE_FOR',
    target: 'TaskEvent',
    systemMeaning: 'Contextual comments attached to specific past interactions.',
  },
  {
    origin: 'Institution',
    edgeType: 'RETAINED_ASSOCIATION',
    target: 'Caregiver',
    systemMeaning: 'Institutional fan-out through permission-gated proximity.',
  },
  {
    origin: 'ClientFamily',
    edgeType: 'REQUESTED_CONTACT',
    target: 'Therapist',
    systemMeaning: 'One-way structured relay event. No clinical chat hosted.',
  },
];

export const algorithmicConstraints: AlgorithmicConstraint[] = [
  {
    principle: 'Perspective-Bound',
    technicalImplementation: "Queries execute relative to the viewer's ID. No global queries.",
    outcome: 'Prevents mass-scale graph flattening. Users only see their localized trust universe.',
  },
  {
    principle: 'Additive Visibility',
    technicalImplementation: 'System only writes/displays positive propagation events: shares and referrals.',
    outcome: 'Growth is anti-viral and scales strictly at the speed of human trust continuity.',
  },
  {
    principle: 'Non-Punitive Omission',
    technicalImplementation: 'No data schema exists for public downvotes, rejection flags, or not-recommended markers.',
    outcome: 'Negative trust does not scale. Dignity is preserved and social warfare is eliminated.',
  },
  {
    principle: 'Anti-Reverse-Engineering',
    technicalImplementation: 'Omission creates zero platform artifacts.',
    outcome: 'Withheld endorsements remain trapped inside tiny, recursive overlap zones.',
  },
];

export const trustMetricHierarchy: TrustMetricEntry[] = [
  { level: 1, metricType: 'Operational Competency', definition: 'Baseline completion: they did the job without incident.' },
  { level: 2, metricType: 'Trust Propagation', definition: 'Voluntary sharing/referral: I trust this person enough to expose them.' },
  { level: 3, metricType: 'Graph Persistence', definition: 'Node density across intersecting clusters over time; relational legitimacy.' },
];

export const visualPrimitives: VisualPrimitive[] = [
  { primitive: 'Primary Node', renderingLogic: 'Circular container with Anonymized ID, such as CG-8472.', replaces: 'Public profile photos / full names.' },
  { primitive: 'Credential Badge', renderingLogic: 'Docked shield-style icon representing Verified Tier.', replaces: 'Ambiguous text claims.' },
  { primitive: 'Proximity Badge', renderingLogic: 'Metric showing shared connections, such as Connected via Family D.', replaces: '5-Star Average Rating.' },
  { primitive: 'Lineage Thread', renderingLogic: 'Chronological stack of past task cards linked by a vertical vector line.', replaces: 'Isolated text testimonials.' },
];

export const relationalIntroductionFlow = [
  'Visibility Trigger',
  'Immersive Evaluation',
  'Soft Introduction',
  'Mutual Evaluation',
  'Boundary Negotiation',
  'Care Agreement',
  'Trust Retention',
] as const;

export const interactionPositioningRules: InteractionPositioningRule[] = [
  {
    actor: 'Client',
    prohibitedFraming: ['Hire Now', 'Book', 'Applicant Pool'],
    requiredFraming: ['Request Introduction', 'Meet Caregiver'],
  },
  {
    actor: 'Caregiver',
    prohibitedFraming: ['You were selected for a job', 'Apply'],
    requiredFraming: ['Opportunity to Meet', 'You may be a fit'],
  },
];

export const relaySecurityArchitecture: RelaySecurityComponent[] = [
  {
    component: 'Therapist Relay',
    engineeringConstraint: 'Strictly boolean/dropdown inputs. Zero free-text fields.',
    liabilityPosture: 'Platform avoids HIPAA/PHI storage by preventing clinical narrative generation.',
  },
  {
    component: 'Data Payload',
    engineeringConstraint: 'Encrypted in transit; minimized data retention.',
    liabilityPosture: 'Operates purely as a matchmaking lead generator.',
  },
  {
    component: 'In-App Messaging',
    engineeringConstraint: 'Allowed only for Non-Licensed/Licensed Caregiver tiers.',
    liabilityPosture: 'Standard ToS / MDHHS compliance; zero clinical chat.',
  },
];
