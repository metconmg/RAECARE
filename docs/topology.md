# RAECARE Topology

`txn_id: raecare-repo-20260519-03`

This map follows the serialized `nodeDatabase` topology captured from the AI Studio export. No new workflow stages are invented here.

## A-series: Entry / Auth

| Node | Coord band | Component | Purpose |
| --- | --- | --- | --- |
| A001 | F-1:F-2 | `src/stages/A_Entry/A001_RootEntryLayer.tsx` | Root entry layer for URL gating and session-token checks. |
| A002 | E-3:G-5 | `src/stages/A_Entry/A002_LandingIntake.tsx` | Landing intake with role-triage matrix. |

## B-series: Client

| Node | Coord band | Component | Purpose |
| --- | --- | --- | --- |
| B001 | C-6:D-6 | `src/stages/B_Client/B001_ClientDashboard.tsx` | Verified families dashboard. |
| B002 | TBD | `src/stages/B_Client/B002_ClientIntakeWizard.tsx` | Client intake wizard scaffold awaiting full serialized node detail. |

## Rule

`src/core/data.ts` is the code source of truth. Docs mirror it for audit and handoff readability.
