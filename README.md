# RAECARE
Trusted Support Network Marketplace & Ecosystem

Operational UI for caregiver onboarding, verification, certification, and matching.

**Core rule**: Frontend expresses backend. This repo structure maps 1:1 to `src/core/data.ts :: nodeDatabase`.

**Invariants**:
- A001: Any direct link to secure subfolders initiates background verification
- A002: Open-ended text search removed from landing to prevent exploits
- B001: Unverified caregiver records scrubbed from dashboard by default

**Structure**: `/src/stages` follows node coords. A=Entry, B=Client. See `docs/topology.md`.

**UI philosophy**: Same machine, cleaner cockpit. Modern systems UI, subtle containment, high trust, zero gimmicks.

`txn_id: raecare-repo-20260519-03`
