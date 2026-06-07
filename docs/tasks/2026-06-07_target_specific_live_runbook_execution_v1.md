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
- n8n local CLI import/readback:
  - `Sentinel Core Prelaunch Workflow Producer`
  - `Campaign Status Monitor`
  - `Sentinel Core Prelaunch Gate CLI Smoke V2`
- n8n local CLI activation/readback for `Sentinel Core Prelaunch Workflow Producer`: active `1`, then final active `0`.
- n8n local CLI activation/execution/readback for `Sentinel Core Prelaunch Gate CLI Smoke V2`: active `1`, execution delta `1`, then final active `0`.

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

- n8n external ingest execution remains gated: the scheduled producer is not directly CLI-startable without an `Execute Workflow Trigger`, and the environment does not have the `Openclaw Ingest Key` credential label. No external ingest call was made.
- n8n UI/API console operation remains unverified because no callable n8n web UI/API session was available; local CLI import/activation/execution smoke passed as noted above.
- `npm run smoke:command-center-input`: blocked before write because production data has no non-admin project owner fixture for the owner-permission path.
- `npm run smoke:account-lifecycle`: access request approval passed, but Auth invite returned the bounded `auth_invite_failed` 502 path from Supabase Auth invite delivery/config. Active artifacts were cleaned up.
- Direct SQL post-readback passed SELECT-only safety checks, but expected delta did not match because no n8n one-time execution was performed in this run.

## Homepage

### Passed

- `npm run verify:prelaunch-local`
- `npm run verify:harness`
- Local dev-server smoke: `npm run smoke:command-center`
- Local dev-server state smoke: `npm run smoke:command-center:states`
- Remote Homepage URL probe: `https://home.admate.ai.kr/command-center` returned HTTP 200.
- Remote Homepage smoke: `COMMAND_CENTER_SMOKE_ALLOW_REMOTE=1` with `https://home.admate.ai.kr/command-center` passed.
- Vercel production env list showed Homepage has `OPENCLAW_MONITOR_URL` and `COMMAND_CENTER_READ_KEY`.
- Vercel production env list showed Agent Core has `COMMAND_CENTER_READ_KEY`.

### Blocked

- Homepage live API readback remains blocked by read-key visibility/pair verification. Local Core read key against `https://sentinel.admate.ai.kr/api/public/command-center` returned 401, and production secret values were not available for safe equality/probe through the current CLI workflow.
- Other URL candidates remained unusable: `https://admate.ai.kr/command-center`, `https://www.admate.ai.kr/command-center`, and `https://homepage.admate.ai.kr/command-center`.

## Lens

### Passed

- `npm run verify:golden`
- `npm run verify:offline-smoke`
- `npm run verify:prelaunch-local`
- `npm run harness:report`
- Live Lens URL probe: `https://lens.admate.ai.kr/` redirected to `/login?next=%2F`.
- Unauthenticated production API probes returned 401 for `/api/account/me`, `/api/captures`, `/api/captures/execute`, and `/api/upload`.
- Vercel production env list showed Lens has `ADMATE_LENS_HANDOFF_SECRET`, Supabase env, Browserbase env, and capture-related provider env.

### Blocked

- Live capture/upload could not be executed in this browser context because no human-authenticated Lens session or account password was available.
- Direct standalone upload/capture mutation was not run. The remaining gate is a human login/session handoff or an official Core handoff-issued session.

## Foresight

### Passed

- `npm run verify:prelaunch-local`
- `npm run benchmark:dry-run`
- `npm run benchmark:ui-fixtures`
- `npm run check:protected-error-states`
- Production preflight SQL `docs/sql/2026-05-08_foresight_benchmark_production_preflight.sql` was run as SELECT-only direct SQL.
- Preflight summary:
  - `foresight_schema_count`: 0
  - `existing_draft_table_count`: 0
  - `existing_foresight_object_inventory`: 0
  - `existing_foresight_policy_residue`: 0
  - `existing_foresight_grant_residue`: 0
  - extensions available: `pgcrypto`, `uuid-ossp`
  - recommended action: production preflight review required before migration runbook
- Vercel production env list showed Foresight has handoff/session and Supabase env.

### Blocked

- SQL Editor apply/import remains blocked by the schema file itself: `2026-05-07_foresight_benchmark_schema_draft.sql` is marked `REVIEW ONLY. DO NOT EXECUTE.`
- The approved next step is a migration runbook, not applying the draft schema directly.
- Legacy `scripts/upload_to_supabase.py` remains unsuitable as a normalized benchmark production import runner without disposable target/backup/delete predicate.

## Creative Studio

### Passed

- `npm run check:creative-studio-prelaunch-readiness`
- `npm run check:creative-studio-safety-static`
- `npm run verify:prelaunch-local`
- Confirmed no Vercel project link and no local env file at repo root.

### Blocked

- No repo runner exists for media generation, provider upload, Instagram publish, or platform readback.
- Media/social provider env names checked in this repo env were absent.
- Actual production/publish remains a human-operated brand/legal/security/account-owner/platform gate with a concrete brief and target account.

## Notes

- Several parallel `npm run` invocations on Windows produced silent or `cmd.exe` spawn false negatives. Affected checks were rerun serially and passed where noted.
- Homepage local dev server was started only for smoke verification and confirmed stopped afterward.
- No production campaign apply/promote/publish runner was found or executed.
- A local n8n sqlite backup was created before workflow import; imported n8n smoke workflows were left inactive.
