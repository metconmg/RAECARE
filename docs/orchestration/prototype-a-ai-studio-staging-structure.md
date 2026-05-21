# RAECARE PROTOTYPE A — AI STUDIO STAGING STRUCTURE

**Repo**: https://github.com/metconmg/RAECARE  
**Prototype Type**: Guided presentation flow, institutional grade, no Relume  
**Core Invariant**: Frontend expresses backend — every UI element maps 1:1 to verification nodes

---

## SCREEN-BY-SCREEN FLOW

### 1. Describe the problem

- **Artifact**: `docs/section-3-master-document.md` (problem framing)
- **Visual**: Full-bleed midnight navy `#0A0F1C`, centered column 720px max, amber accent line top

1.a. **The invisible risk**  
Headline: "Families hire caregivers blind."  
Copy: Background checks are point-in-time PDFs. Licenses lapse silently. Platforms optimize for matches per hour, not safe matches per family.

1.b. **The failure mode**  
Three amber-outlined cards:

- **Unverified credentials**: License expires → profile stays active → family hires → incident
- **PII leakage**: Free-text chat → phone shared → off-platform hire → zero recourse
- **Unqualified matching**: Special needs request → general caregiver matched → inadequate care

1.c. **The cost**  
Copy: "The cost is not theoretical. It is a family discovering their special needs caregiver was never certified for behavioral support. The cost is a platform that cannot prove it tried to protect them."

### 2. Why nothing fixes it

- **Artifact**: `docs/departmental-architecture.md` (constraints)
- **Visual**: Three-column grid, stone cards, amber left border 4px

2.a. **Marketplaces optimize for volume**  
Care.com, UrbanSitter — verification is a cost center. They run one background check at signup and call it "verified forever."

2.b. **Agencies optimize for margin**  
40-60% markup, still use same point-in-time checks. No portable credentials. Families pay premium for same vetting.

2.c. **Background APIs sell data, not safety**  
Checkr, Sterling tell you what was true at a point in time. They don't monitor, dispute, or simulate competency.

### 3. Introduce RAECARE

- **Artifact**: `public/prototypes/raecare-prototype.html` (hero section embed)
- **Visual**: Split 50/50 — left narrative, right live iframe at 85% scale with navy chrome

3.a. **What it is**  
RAECARE is a trust network marketplace where verification is continuous, competency is measured through simulation, and safety is enforced by system design — not policy pages.

3.b. **Who it's for**  
Families who need special needs care, elder care, or clinical support and cannot afford to be wrong about who they let into their home.

3.c. **The promise**  
Every caregiver is verified live against primary sources. Every match is safety-gated by role. Every conversation is protected by structured communication.

### 4. RAECARE ethos and posture

- **Artifact**: `docs/departmental-architecture.md` (principles) + `src/core/section3.ts`
- **Visual**: Institutional document treatment, monospaced labels, stone border

4.a. **Posture**  
We are infrastructure, not an app. We provide the verification layer agencies cannot build themselves. Same machine, cleaner cockpit.

4.b. **Invariants**

- **UNVERIFIED = INVISIBLE**: If we haven't verified your license, you do not appear in search. Not demoted. Database-level rejection.
- **DISPUTED = DEMOTED INSTANTLY**: Credential flagged → removed from specialist matches within 60 seconds.
- **PRIVATE DATA = NEVER TYPED**: Families cannot type free text in first contact. Structured choices only.

4.c. **Zero gimmicks**  
No star ratings. No "Hire Now" buttons. No fake urgency. No clinical chat. Safety is not a UX pattern you can A/B test.

### 5. The how — high level

- **Artifact**: `src/core/departmentalArchitecture.ts` + `src/core/section3.ts`
- **Visual**: Horizontal 5-node timeline, navy circles, amber connections

5.a. **Onboard** → A002 Gateway  
Role triage at front door. No open-ended text search on landing.

5.b. **Demonstrate** → D004 Mirrorbox Terminal  
Caregiver completes live simulation. System captures decision telemetry.

5.c. **Verify** → D002 Vault + S001 Lock  
Credentials confirmed via third-party webhook → competency score generated → profile locked from search until both clear.

5.d. **Match** → B002 Intake → G003 Gate  
Family specifies needs → system filters to verified + competent only → special needs routes to G003 for specialist-only results.

5.e. **Protect** → G004 PII Shield → B004 Safe Chat  
First contact is structured choice cards → PII scrubbed in real time → continuous telemetry monitoring active.

### 6. Deliverable 1 — prototype site

- **Artifact**: `public/prototypes/raecare-prototype.html` (full embed)
- **Visual**: Full-screen iframe, navy chrome header, amber LIVE indicator top-right

6.a. **Public face**  
Family-facing experience. Notice what's missing: no star ratings, no instant hire, no free-text chat. Only verified pathways.

6.b. **Key interactions**

- Role triage — no open search
- Caregiver dashboard showing unverified lock state
- Family intake wizard with structured selectors

6.c. **Trust signals in UI**  
Every profile shows verification chain. Timestamps and operational assessment state replace ratings.

### 7. Deliverable 2 — trust network / knowledge graph visualization

- **Artifact**: `public/prototypes/raecare-trust-graph.html`
- **Visual**: Full-screen dark canvas `#020617`, interactive graph

7.a. **System proof**  
This is the live trust graph. Every node is a verification gate. Every edge is a state transition.

7.b. **Safety subgraph**  
Filter to G003, G004, B004, S001, S003. Teal = caregiver flow, Magenta = client flow, Gold = secure intersect, Red = blocked.

7.c. **Provenance**  
Click node → side panel shows nodeDatabase entry from `src/core/data.ts`. Frontend expresses backend — no UI fiction.

### 8. Deliverable 3 — pricing + platform flow

- **Artifact**: `public/prototypes/raecare-pricing-flow.html`
- **Visual**: Split screen — left pricing cards, right Sankey flow diagram

8.a. **Business proof**

- **Community**: Free verification, basic matching
- **Professional**: $49/mo, priority verification queue, analytics
- **Enterprise**: Custom, API access, white-label, SLA

8.b. **Where money flows**  
Families pay platform fee → caregiver keeps 100% wage → verification costs are platform-side → disputes are free to report.

8.c. **The guarantee**  
If a verified caregiver is found to have falsified credentials, RAECARE refunds the verification fee and removes the caregiver. Platform risk, not family risk.

### 9. Deliverable 4 — dual walkthrough

- **Artifact**: `data/RCare Scenario Library CSV - Table 1.csv`
- **Visual**: Split-screen synchronized player, left = family, right = system

9.a. **Scenario 1: Fake license caught**  
Expired license detected → system isolates to dispute ledger → family never sees unsafe match.

9.b. **Scenario 2: Privacy leak blocked**  
Parent types medical details → no-free-text lock engages → zero PHI leaked.

9.c. **Scenario 3: Unqualified redirected**  
Student applies for ADHD care without credentials → special needs gate blocks → only appropriate general helper paths shown.

### 10. Demo / artifact launcher

- **Artifact**: all repo prototypes
- **Visual**: 2×2 grid, navy cards, amber hover glow

10.a. **Launcher grid**

- **Public Face**: `raecare-prototype.html`
- **System Proof**: `raecare-trust-graph.html`
- **Business Proof**: `raecare-pricing-flow.html`
- **Scenario Library**: CSV viewer

10.b. **Guided tour mode**  
Auto-advance every 45 seconds, amber progress bar, narration captions bottom.

10.c. **Technical appendix**  
Collapsible links to `src/core/section3.ts`, `src/core/departmentalArchitecture.ts`, and docs.

### 11. CTA / next step

- **Artifact**: none — close
- **Visual**: centered, max-width 680px, generous whitespace

11.a. **The ask**  
Headline: "This is infrastructure for care."  
Body: Prototype A demonstrates public face and system proof. Prototype B is the operational dashboard for trust & safety teams.

11.b. **Next steps**

- Technical review: NodeDatabase implementation audit
- Compliance review: invariant enforcement verification
- Pilot: 50 families, 100 caregivers, 30-day validation

11.c. **Access**

- Primary CTA: Schedule Technical Walkthrough
- Secondary CTA: Request Staging Access
- Footer: © 2026 RAECARE • Trusted Support Network • `txn_id: prototype-a-20260521`

---

## VISUAL TREATMENT NOTES

### Color System

- Background: `#0A0F1C`
- Surface: `#111827`
- Elevated: `#1E293B`
- Accent: `#D97706`
- Text primary: `#F8FAFC`
- Text secondary: `#94A3B8`
- Success: `#059669`
- Error: `#DC2626`

### Typography

- Display: Cormorant Garamond, 600-700, 48-72px, letter-spacing -0.02em
- Heading: Outfit, 600, 24-32px
- Body: Outfit, 400, 16px/1.6
- Mono: JetBrains Mono, 400, 12-14px
- Uppercase labels: Outfit, 600, 11px, tracking 0.1em, amber

### Layout

- Max width: 1400px, centered
- Grid: 12 columns, 24px gutters
- Vertical rhythm: 80px section padding, 24px mobile
- Cards: 16px radius, 1px border `border-slate-800`, no shadows
- Motion: 200ms ease-out, fade + subtle slide, no spring

---

## DEMO LAUNCHER STRUCTURE

```text
/prototype-a
  index.html
  demo.html
  cta.html
  /embeds/
    prototype-iframe.html
    graph-iframe.html
    pricing-iframe.html
  /data/
    scenarios.json
```

Navigation: progress dots top-right, arrow keys, swipe mobile.  
Deep link: `?screen=7` jumps to trust graph.  
Embed: iframes use `sandbox="allow-scripts allow-same-origin"`, amber loading bar.

---

## ARTIFACT MAPPING

| Screen | Repo Path | Integration |
| --- | --- | --- |
| 3, 6 | `public/prototypes/raecare-prototype.html` | Full iframe embed |
| 7 | `public/prototypes/raecare-trust-graph.html` | Full iframe embed, interactive |
| 8 | `public/prototypes/raecare-pricing-flow.html` | Full iframe embed |
| 9, 10 | `data/RCare Scenario Library CSV - Table 1.csv` | Fetch → parse → interactive table |
| 4, 5, 7.c | `src/core/section3.ts` | Static code excerpts |
| 4, 5 | `src/core/departmentalArchitecture.ts` | Static topology excerpts |
| 10.c | `docs/section-3-master-document.md` | Markdown excerpt |
| 10.c | `docs/departmental-architecture.md` | Markdown excerpt |

---

## STATUS

Prototype A staging structure complete and ready for AI Studio implementation.
