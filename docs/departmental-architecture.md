# Caregiver Platform: Departmental Architecture

This document indexes the platform departments, sub-functions, and cross-department workflows that bind RAECARE's product, compliance, graph/data, revenue, and QA systems.

## Table 1: Core Departmental Functions & Scope

| Dept # | Department | Sub # | Structural Responsibilities & Features |
| :--- | :--- | :--- | :--- |
| **1.0** | **Product & UX** | **1.1** | **Platform Experience & Discovery:** Manages a Bumble-style matchmaking paradigm initiated by clients. |
|  |  | **1.2** | **Trial Architecture:** Executes a 30-day free trial structure with progressive AI-assisted connection unlocks. |
|  |  | **1.3** | **Therapist Contact UX:** Enforces a strict, one-way structured relay form for therapist contact with no free text. |
| **2.0** | **Operations & Compliance** | **2.1** | **Liability Scoping:** Maintains platform liability scoped strictly to matchmaking and system stewardship. |
|  |  | **2.2** | **Regulatory Posture:** Ensures alignment with Michigan Department of Health & Human Services (MDHHS) guidelines. |
|  |  | **2.3** | **Verification Management:** Manages Mirrorbox for baseline screening and official/third-party channels for credentialing. |
| **3.0** | **Engineering & Data** | **3.1** | **Knowledge Graph:** Builds and manages the graph to track relationships, lineage, and trust signals. |
|  |  | **3.2** | **Profile Rendering:** Renders caregiver profiles as an immersive network of nodes rather than flat data statistics. |
|  |  | **3.3** | **Relay Security:** Secures therapist relay infrastructure via data encryption and strict minimization. |
| **4.0** | **Finance & Revenue** | **4.1** | **Monetization Logic:** Operates a low-cost volume model utilizing client access fees and tiered subscriptions. |
|  |  | **4.2** | **Compensation Routing:** Enforces rules anchoring caregiver compensation expectations strictly to their verified credential tier. |
|  |  | **4.3** | **Subsidy Integration:** Integrates institutional sponsorships to subsidize platform costs and keep end-user pricing low. |
| **5.0** | **QA & Simulation** | **5.1** | **Automated Validation:** Deploys an Agentic Scenario Tester to traverse all user experience branches. |
|  |  | **5.2** | **Diagnostic Mapping:** Identifies architectural weak points, mapping dead ends, logic conflicts, and unsafe branches. |
|  |  | **5.3** | **Iterative Reporting:** Generates structured traversal reports for iterative system repair. |

## Table 2: Cross-Departmental Workflows & System Integrations

| Workflow # | System Event | Initiating Dept | Supporting Depts | Connected Architectural Outcome |
| :--- | :--- | :--- | :--- | :--- |
| **6.1** | **User Intake** | 1.0 (Product) | 3.0 (Data) | Clients complete a short, structured questionnaire without blocking browsing; system assigns an anonymized ID. |
| **6.2** | **Tier Verification** | 2.0 (Operations) | 4.0 (Finance) | Operations validates credentials against state records; Finance simultaneously unlocks the corresponding compensation tier. |
| **6.3** | **Therapist Contact** | 1.0 (Product) | 3.0 (Data) & 2.0 (Ops) | Client utilizes the boolean/dropdown relay form; Engineering encrypts the payload; Operations ensures no clinical chat occurs on-platform. |
| **6.4** | **Abuse Detection** | 3.0 (Data) | 1.0 (Product) | Tracking systems flag extractive browsing behavior; Product dynamically increases friction and restricts candidate visibility. |
| **6.5** | **Architecture Update** | 5.0 (QA) | 3.0 (Data) | QA initiates a depth-first traversal of the user journey; Engineering receives an aggregated output report detailing required fixes. |

## Implementation Rule

This departmental index is structural. It should be referenced from `src/core/departmentalArchitecture.ts` and used to keep product, compliance, data, finance, and QA responsibilities separated without fragmenting the system model.
