# PROTOTYPE A — BLOCKER RESOLUTION PACKET

## Purpose

This packet resolves the post-attempt blockers reported by Meta / AI Studio during Prototype A staging.

The blockers are not architecture blockers. They are tool-access and hosting assumptions. Proceed with repo-driven staging using the files below.

## Repo

`https://github.com/metconmg/RAECARE`

Branch: `main`

## Resolution Summary

### 1. File access blocker

Reported blocker:

> Repo files return 404 via browser tool. Cannot verify exact content of markdown docs, HTML prototypes, or CSV structure.

Resolution:

Use GitHub repo paths directly. If browser fetch fails, use repo file access, raw file view, GitHub connector access, or user-provided uploaded artifacts. Do not treat browser-tool 404 as evidence that files are missing.

Required files are present at these repo paths:

1. `docs/prototype-artifact-index.md`
2. `docs/section-3-master-document.md`
3. `docs/departmental-architecture.md`
4. `docs/orchestration/prototype-a-ai-studio-staging-structure.md`
5. `docs/orchestration/prototype-b-antigravity-execution-brief.md`
6. `public/prototypes/raecare-prototype.html`
7. `public/prototypes/raecare-trust-graph.html`
8. `public/prototypes/raecare-pricing-flow.html`
9. `data/RCare Scenario Library CSV - Table 1.csv`
10. `src/core/section3.ts`
11. `src/core/departmentalArchitecture.ts`

Instruction:

If a browser tool cannot open a repo path, continue with the repo manifest and local artifact paths. Do not halt.

### 2. CSV structure blocker

Reported blocker:

> CSV structure unverified. Parser assumes columns.

Resolution:

Use the actual CSV header below:

```csv
Scenario_id,Scenario_title,Scenario_type,User_role,Starting_node,Trigger_event,User_goal,Risk_class,Path_node_ids,Active_wires,Active_nodes,Blocked_nodes,Terminal_endpoint,Success,Console_logs,Pitch_deck_explanation,Machine_instruction_summary,Transition_tooltips,Json_payload,Confidence_0_to_100,Source_notes,Source
```

Known scenario rows include:

1. `RUN_002` — Special Needs Protection — `COMPLIANCE_BOUNDARY` — `HIGH`
2. `RUN_003` — Therapist Relay Boundary — `COMPLIANCE_BOUNDARY` — `CRITICAL`
3. `RUN_004` — Spam Throttling — `ABUSE_TEST` — `MEDIUM`
4. `RUN_005` — Credential Dispute — `VERIFICATION_DISPUTE` — `HIGH`
5. `RUN_006` — Non-Licensed Onboarding — `CAREGIVER_ONBOARDING` — `MEDIUM`
6. `RUN_001` — General Care Search — `NORMAL_FLOW` — `LOW`

Instruction:

Use these columns for CSV parsing. If parsing fails because of escaped commas or quoted JSON payloads, fall back to a compact static validation table using scenario ID, title, type, risk class, trigger event, outcome, and pitch deck explanation.

### 3. Prototype hosting blocker

Reported blocker:

> Three HTML files must be hosted at publicly accessible URLs for iframe embedding. X-Frame-Options unknown.

Resolution:

Do not depend on external iframe hosting for Prototype A staging. Use local repo-relative paths or import/copy the prototype HTML into the AI Studio artifact.

Local repo-relative paths:

1. `/prototypes/raecare-prototype.html`
2. `/prototypes/raecare-trust-graph.html`
3. `/prototypes/raecare-pricing-flow.html`

If deploying via GitHub Pages under repo base path, use:

1. `/RAECARE/prototypes/raecare-prototype.html`
2. `/RAECARE/prototypes/raecare-trust-graph.html`
3. `/RAECARE/prototypes/raecare-pricing-flow.html`

Fallback instruction:

If iframe embedding is blocked, use launch buttons plus thumbnail cards instead of embedded iframes. The prototype is still valid if the artifacts open in new tabs.

### 4. Visual assets blocker

Reported blocker:

> No logo files or screenshots available. Using typography-only treatment per spec.

Resolution:

Typography-only branding is acceptable. Use:

1. `RAECARE` wordmark
2. Cormorant Garamond display font
3. Outfit body font
4. Midnight navy background
5. Amber accent line / pill / CTA
6. Shield, node, graph, lock, and check icons from inline SVG or lucide-react if available

Do not halt for missing logo assets.

## Corrected Status

Prototype A staging is not blocked.

Proceed using:

1. `docs/orchestration/prototype-a-ai-studio-staging-structure.md`
2. `docs/prototype-artifact-index.md`
3. repo-local artifact paths
4. the CSV header and scenario summary provided above

## Instruction to Next Agent

Do not ask questions. Do not stop because the browser tool cannot fetch GitHub files. Use the repo paths and committed artifacts. If an iframe cannot load, create launcher cards instead. If CSV parsing fails, use a static scenario summary table. Continue until the AI Studio staging prototype is complete.
