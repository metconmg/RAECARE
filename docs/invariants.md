# RAECARE Invariants

`txn_id: raecare-repo-20260519-03`

| Node | Invariant | Status |
| --- | --- | --- |
| A001 | Any direct link to secure subfolders initiates background verification. | encoded |
| A002 | Open-ended text search is removed from landing to prevent exploit paths. | encoded |
| B001 | Unverified caregiver records are scrubbed from dashboard by default. | encoded |
| B002 | Intake continuation must preserve questionnaire lineage. | partial; serialized node detail unresolved |

## Display contract

- Invariants are visible as operational UI affordances, not hidden comments.
- Status is never color-only: pair color, icon, label, and border/stroke.
- Unknown serialized nodes remain marked as unresolved instead of being fabricated.
