# 2026-06-07 Target-Specific Live Runbook Execution v1

## Scope

- Operator: Codex command center.
- Approval basis: user approved live provider reads, env/credential use, SQL/readback, production API readback, authenticated UI smoke, n8n import/save/activation/execution, and campaign/apply/persist/promote/publish/media generation/upload gates.
- Secret handling: no raw secrets, cookies, service keys, read keys, provider payloads, or raw production rows were printed in the report.
- Exclusion honored: Creative Studio `AI Influencer/` was not inspected, traversed, staged, or modified.

## Core / Sentinel / n8n / Authenticated Mutation

### Passed

- `npm run check:n8n-workflow-secrets`
- `npm run check:sentinel-prelaunch-workflow-producer`
- `npm run test:sentinel-campaign-mutation-route-contract`
- `npm run test:sentinel-campaign-operation-preflight`
- `npm run test:sentinel-campaign-launch-evidence`
- `npm run smoke:org-admin`
- `npm run smoke:org-access`
- `npm run smoke:org-admin:apply`
- `npm run smoke:campaign-settings`
- `npm run smoke:alert-suppressions`
- `npm run smoke:daily-review`
- `npm run smoke:access-requests`
- `npm run readback:sentinel-prelaunch-model-a-direct-sql-post`

### Fixes Applied

- Updated alert suppression and daily review smoke scripts to accept the current production API response shape using `operator_action_id`.
- Updated alert suppression smoke to treat sensitive field omission as valid handling, while still failing if the synthetic secret appears.
- Added temporary employee/org membership fixtures and cleanup to access-request smoke so approval can satisfy the live access grant prerequisite.
- Added temporary employee/org membership fixture and cleanup to account lifecycle smoke so access approval can satisfy the live access grant prerequisite.

### Cleanup / Readback

- Initial failed access-request smoke left 4 pending smoke requests; all 4 were rejected by smoke-marker cleanup.
- Initial failed alert suppression smoke left 1 active smoke suppression; it was deactivated before rerun.
- Final alert suppression smoke readback reported active smoke suppressions as 0 after resume.
- Account lifecycle failure cleanup readback found 0 remaining smoke employees, 0 active smoke profiles, and 0 pending smoke access requests.

### Blocked

- n8n import/save/activation/execution: no repo runner or callable n8n UI/API session is available in this environment. Static n8n gates passed; actual import/activation/execution remains an external n8n console/API operation.
- `npm run smoke:command-center-input`: blocked before write because production data has no non-admin project owner fixture for the owner-permission path.
- `npm run smoke:account-lifecycle`: access request approval passed, but Auth invite returned the bounded `auth_invite_failed` 502 path from Supabase Auth invite delivery/config. Active artifacts were cleaned up.
- Direct SQL post-readback passed SELECT-only safety checks, but expected delta did not match because no n8n one-time execution was performed in this run.

## Homepage

### Passed

- `npm run verify:prelaunch-local`
- `npm run verify:harness`
- Local dev-server smoke: `npm run smoke:command-center`
- Local dev-server state smoke: `npm run smoke:command-center:states`

### Blocked

- Homepage live URL/read-key pair was not available in repo env.
- Candidate remote URLs for `/command-center` did not become reachable during smoke checks.
- Live API contract check remains blocked until a reachable Homepage URL and approved Command Center read key are provisioned.

## Lens

### Passed

- `npm run verify:golden`
- `npm run verify:offline-smoke`
- `npm run verify:prelaunch-local`
- `npm run harness:report`

### Blocked

- Live capture/upload could not be executed because the repo has no package runner for authenticated upload/capture/execute/readback cleanup.
- Lens live env names for Supabase/session/handoff/Browserbase/YouTube were not configured in this repo env.

## Foresight

### Passed

- `npm run verify:prelaunch-local`
- `npm run benchmark:dry-run`
- `npm run benchmark:ui-fixtures`
- `npm run check:protected-error-states`

### Blocked

- SQL Editor apply/import is manual-only in the runbook; no repo package runner applies the production schema.
- Supabase/Foresight import env names were not configured in this repo env.
- Legacy `scripts/upload_to_supabase.py` remains unsuitable as a normalized benchmark production import runner without disposable target/backup/delete predicate.

## Creative Studio

### Passed

- `npm run check:creative-studio-prelaunch-readiness`
- `npm run check:creative-studio-safety-static`
- `npm run verify:prelaunch-local`

### Blocked

- No repo runner exists for media generation, provider upload, Instagram publish, or platform readback.
- Media/social provider env names checked in this repo env were absent.
- Actual production/publish remains a human-operated brand/legal/security/account-owner gate.

## Notes

- Several parallel `npm run` invocations on Windows produced silent or `cmd.exe` spawn false negatives. Affected checks were rerun serially and passed where noted.
- Homepage local dev server was started only for smoke verification and confirmed stopped afterward.
- No production campaign apply/promote/publish runner was found or executed.
