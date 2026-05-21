# Section 3 Master Document: Engineering, Data, and The Trust Graph Architecture

This document consolidates the engineering, data logic, interaction positioning, and UX primitives for the Section 3 architecture into a durable repo reference artifact.

## 3.1 Knowledge Graph Architecture — The Engine

The system operates as a localized trust-propagation graph, not a global search directory.

### Graph Node Ontology

| Node Type | Primary Identifier | Key Platform Attributes |
| --- | --- | --- |
| Caregiver | Anonymized Platform ID | Credential Tier, Service Tags, Trust Density (Node Count) |
| Client / Family | Anonymized Platform ID | Care Required, Geographic Anchor, Visibility Permissions |
| Task / Event | Event ID | Care Category, Duration, Completion Status |
| Institution | Entity ID | Contextual Graph Bridge (Hospital, Autism Center, etc.) |
| Therapist | Anonymized Platform ID | License Status, Off-Platform Relay Target |

### Graph Edge Taxonomy

| Origin Node | Edge Type | Target Node | System Meaning |
| --- | --- | --- | --- |
| Caregiver | WORKED_WITH | Client | Establishes direct historical care continuity. |
| Client | SHARED_TO_NETWORK | Caregiver | Voluntary trust propagation through additive visibility. |
| Client | PROVIDED_LINEAGE_FOR | Task | Contextual comments attached to specific past interactions. |
| Institution | RETAINED_ASSOCIATION | Caregiver | Institutional fan-out through permission-gated proximity. |
| Client | REQUESTED_CONTACT | Therapist | One-way structured relay event; no clinical chat hosted. |

## 3.2 System Rules & Trust Mechanics

### Core Algorithmic Constraints

| Principle | Technical Implementation | Outcome |
| --- | --- | --- |
| Perspective-Bound | Queries execute relative to the viewer's ID. No global queries. | Prevents mass-scale graph flattening. Users only see their localized trust universe. |
| Additive Visibility | System only writes/displays positive propagation events: shares and referrals. | Growth is anti-viral and scales strictly at the speed of human trust continuity. |
| Non-Punitive Omission | No data schema exists for public downvotes, rejection flags, or not-recommended markers. | Negative trust does not scale. Dignity is preserved and social warfare is eliminated. |
| Anti-Reverse-Engineering | Omission creates zero platform artifacts. | Withheld endorsements remain trapped inside tiny, recursive overlap zones. |

### Trust Metric Hierarchy

| Level | Metric Type | Definition |
| --- | --- | --- |
| 1 | Operational Competency | Baseline completion: they did the job without incident. |
| 2 | Trust Propagation | Voluntary sharing/referral: I trust this person enough to expose them. |
| 3 | Graph Persistence | Node density across intersecting clusters over time; relational legitimacy. |

## 3.3 Interaction Layer — UX Primitives

### Visual Primitives

| Primitive | UI Rendering Logic | Replaces |
| --- | --- | --- |
| Primary Node | Circular container with Anonymized ID, such as CG-8472. | Public profile photos / full names. |
| Credential Badge | Docked shield-style icon representing Verified Tier. | Ambiguous text claims. |
| Proximity Badge | Metric showing shared connections, such as Connected via Family D. | 5-Star Average Rating. |
| Lineage Thread | Chronological stack of past task cards linked by a vertical vector line. | Isolated text testimonials. |

### Relational Introduction Flow — Zero to Match

1. Visibility Trigger: Client views network feed populated strictly by trust proximity, not a global algorithm.
2. Immersive Evaluation: Client taps a node to expand its lineage thread through additive expansion, not subtractive filtering.
3. Soft Introduction: Client uses one of three free unlocks to trigger Request Introduction.
4. Mutual Evaluation: Both parties assess fit without pressure or transactional desperation.
5. Boundary Negotiation: Needs and boundaries are clarified through system relay.
6. Care Agreement: Match is finalized and the WORKED_WITH graph edge is logged.
7. Trust Retention: Client voluntarily extends visibility through SHARED_TO_NETWORK.

## 3.4 Interaction Positioning — Marketplace vs. Trust Network

The interaction layer intentionally avoids transaction-first psychology. No absolute positional power is granted to either actor.

| Actor | Prohibited Framing | Required Framing |
| --- | --- | --- |
| Client | Hire Now, Book, Applicant Pool | Request Introduction, Meet Caregiver |
| Caregiver | You were selected for a job, Apply | Opportunity to Meet, You may be a fit |

## 3.5 Relay Security & Liability Scope

### Structured Contact Architecture

| System Component | Engineering Constraint | Liability Posture |
| --- | --- | --- |
| Therapist Relay | Strictly boolean/dropdown inputs. Zero free-text fields. | Platform avoids HIPAA/PHI storage by preventing clinical narrative generation. |
| Data Payload | Encrypted in transit; minimized data retention. | Operates purely as a matchmaking lead generator. |
| In-App Messaging | Allowed only for Non-Licensed/Licensed Caregiver tiers. | Standard ToS / MDHHS compliance; zero clinical chat. |

## Implementation Rule

Section 3 is not decorative copy. It defines the repo's trust graph, interaction language, visual primitives, and liability boundaries. Code should reference `src/core/section3.ts` instead of re-encoding these rules in isolated components.
