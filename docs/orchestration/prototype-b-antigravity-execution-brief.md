# PROTOTYPE B — GPT + ANTIGRAVITY EXECUTION BRIEF

## Purpose

Build Prototype B using GPT orchestration and AntiGravity execution.

The deliverable is a shareable interactive SPA deck app or webpage set generated from the RAECARE repository and existing artifacts.

AntiGravity should not need conversational memory. It should only need:

1. this instruction file,
2. repository access,
3. the artifact files already committed in the repo.

## Source Repository

Use this repository:

`https://github.com/metconmg/RAECARE`

Default branch:

`main`

## Target Deliverable

Create a shareable interactive SPA deck app or webpage set.

Acceptable implementation forms:

1. A Vite React SPA route / page set inside the existing repo, or
2. A static HTML deck app under `public/` if faster and cleaner.

Preferred implementation:

A Vite React SPA deck app that reads from local structured content and links to the existing prototype artifacts.

## Required Output Paths

Create or update these paths:

1. `src/deck/raecareDeckContent.ts`
2. `src/deck/RAECAREDeckApp.tsx`
3. `src/deck/RAECAREDeck.css`
4. `src/App.tsx` or a clean route/launcher to expose the deck app
5. `docs/orchestration/prototype-b-build-receipt.md`

If static HTML is selected instead, create:

1. `public/deck/raecare-interactive-spa-deck.html`
2. `docs/orchestration/prototype-b-build-receipt.md`

## Required Repo Inputs

Read these first:

1. `docs/prototype-artifact-index.md`
2. `docs/section-3-master-document.md`
3. `docs/departmental-architecture.md`
4. `public/prototypes/raecare-prototype.html`
5. `public/prototypes/raecare-trust-graph.html`
6. `public/prototypes/raecare-pricing-flow.html`
7. `data/RCare Scenario Library CSV - Table 1.csv`
8. `src/core/section3.ts`
9. `src/core/departmentalArchitecture.ts`
10. `tests/section3.test.ts`
11. `tests/departmentalArchitecture.test.ts`

## Build Principle

100% orchestration via repository and artifacts.

Do not ask for missing chat context. Use the repo as the complete context package.

## Required Deck / App Flow

Build the interactive deck in this order:

1. Title / intro
2. Problem
3. Why nothing fixes it
4. Introduce RAECARE
5. RAECARE ethos and posture
6. The how — high level
7. Deliverable 1 — prototype site
8. Deliverable 2 — trust graph
9. Deliverable 3 — pricing + platform flow
10. Deliverable 4 — dual walkthrough
11. Validation / scenario library
12. CTA / next steps

## Required Hierarchy Format

Use the numbering style below for any outline / sidebar / content model:

1. Main section
   1.a. Subsection
   1.b. Subsection
   1.c. Subsection
2. Main section
   2.a. Subsection
   2.b. Subsection

## Deck Content Contract

### 1. Title / intro

1.a. Title: RAECARE
1.b. Subtitle: Care Matching Built on Trust, Not Search
1.c. Descriptor: Trusted Support Network Marketplace & Ecosystem
1.d. Visual: dark midnight navy, amber accents, institutional trust tone

### 2. Problem

2.a. Care is being treated like gig work.
2.b. Families are forced into unsafe search behavior.
2.c. Caregivers are flattened into commodity labor.
2.d. High-stakes care needs are mixed with low-stakes browsing.
2.e. Marketplace logic creates pressure before trust is established.

### 3. Why nothing fixes it

3.a. Ratings do not equal trust.
3.b. Search does not understand care risk.
3.c. Credential claims are not enough.
3.d. Negative trust should not scale.
3.e. Existing platforms optimize conversion, not protection.

### 4. Introduce RAECARE

4.a. RAECARE is a trusted support network, marketplace, and care ecosystem.
4.b. RAECARE is not a directory.
4.c. RAECARE is a trust-governed matchmaking system.
4.d. The public promise: care that is verified, matched, and yours.

### 5. RAECARE ethos and posture

5.a. Protection before conversion.
5.b. Mutual compatibility, not hiring pressure.
5.c. Visibility must be earned.
5.d. Dignity is preserved through non-punitive omission.
5.e. Clinical boundary discipline: structured relay, no clinical chat.
5.f. Visual posture: midnight navy, amber, Cormorant Garamond, institutional trust.

### 6. The how — high level

6.a. Intake without open search.
6.b. Caregiver trust pipeline.
6.c. Localized trust graph.
6.d. Match engine.
6.e. Soft introduction.
6.f. Boundary negotiation.
6.g. Active care relationship.

### 7. Deliverable 1 — prototype site

7.a. Use artifact: `public/prototypes/raecare-prototype.html`
7.b. Show it as public face.
7.c. Summarize sections: hero, three pillars, trust chain, who we serve, scope of care, invariants, CTA.
7.d. Provide an Open Prototype button.

### 8. Deliverable 2 — trust graph

8.a. Use artifact: `public/prototypes/raecare-trust-graph.html`
8.b. Show it as system proof.
8.c. Summarize: caregiver journey, trust score, invariant firing, client-view verified-only demo.
8.d. Provide an Open Trust Graph button.

### 9. Deliverable 3 — pricing + platform flow

9.a. Use artifact: `public/prototypes/raecare-pricing-flow.html`
9.b. Show it as business proof.
9.c. Summarize: dual tracks, caregiver pricing, client pricing, revenue streams, journey map.
9.d. Provide an Open Pricing Flow button.

### 10. Deliverable 4 — dual walkthrough

10.a. Build a slide or section with Sarah’s Day.
10.b. Build a slide or section with Maya’s Day.
10.c. Show that the same trust system protects both sides.
10.d. Keep this section human, breezy, and emotionally legible.

### 11. Validation / scenario library

11.a. Use artifact: `data/RCare Scenario Library CSV - Table 1.csv`
11.b. Summarize the scenario library as QA proof.
11.c. Highlight special-needs protection, therapist relay boundary, spam throttling, credential dispute, non-licensed onboarding, general care search.
11.d. Do not render the whole CSV raw unless using a compact table.

### 12. CTA / next steps

12.a. Prototype live.
12.b. Architecture encoded.
12.c. Trust graph demonstrable.
12.d. Pricing logic staged.
12.e. Next clean action: deploy/share the interactive deck app.

## UX Requirements

1. Interactive deck navigation.
2. Sidebar or top navigation showing section numbers.
3. Next / previous controls.
4. Artifact launcher cards.
5. Visual callouts for A001 / A002 / B001.
6. Strong separation between public face, system proof, business proof, human proof, and validation proof.
7. Mobile-responsive layout.
8. Shareable output.

## Visual Requirements

1. Midnight navy background.
2. Amber accents.
3. Warm ivory text.
4. Cormorant Garamond display font where feasible.
5. Outfit body font where feasible.
6. No generic light SaaS styling.
7. No fake glowing submarine tech style.
8. Institutional, premium, trustworthy, not cold.

## Content Rules

1. Do not use “Hire Now” as approved framing.
2. Use “Request Introduction” / “Meet Caregiver” language.
3. Do not add public star-rating logic.
4. Do not add global search behavior.
5. Do not add clinical chat.
6. Do not invent backend claims beyond repository artifacts.
7. Do not remove or bury A001 / A002 / B001.
8. Do not merge therapist relay into normal messaging.

## Artifact Links

Use local relative links:

1. `/prototypes/raecare-prototype.html`
2. `/prototypes/raecare-trust-graph.html`
3. `/prototypes/raecare-pricing-flow.html`

If GitHub Pages base path is required, configure Vite base accordingly or use relative path handling.

## Build Receipt Requirement

After implementation, create:

`docs/orchestration/prototype-b-build-receipt.md`

Receipt must include:

1. Files created / modified
2. Artifact paths wired
3. Build mode chosen: Vite SPA or static HTML
4. Known limitations
5. How to run locally
6. How to share / deploy
7. Validation performed

## Local Validation

Run if available:

1. `npm install`
2. `npm run build`
3. `npm test`

If dependencies fail, still produce a receipt explaining exactly what failed and why.

## Success Criteria

Prototype B is successful when a reviewer can open one shareable app/page and understand:

1. the problem,
2. why marketplace logic fails,
3. what RAECARE is,
4. how the trust architecture works,
5. what artifacts already exist,
6. how the product makes money,
7. how both client and caregiver experience the system,
8. what validation scenarios prove the architecture.
