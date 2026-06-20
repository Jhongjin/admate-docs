# External Gate Operator Packets v1

Date: 2026-06-08 KST
Commander: AdMate
Status: ready for human-authenticated handoff

## Boundary

Do not paste raw secrets, API keys, tokens, cookies, session values, provider
payloads, production row IDs, or raw production rows into chat or docs.

Codex can continue only through one of these safe paths:

- authenticated console already open and controlled by the operator,
- local secret file path created by the operator,
- local browser/storage-state path approved by the operator,
- explicit SQL Editor target confirmation and exact SQL approval.

## Gate 1: n8n UI/API

Current state:

- `n8n --version`: `2.9.4`.
- `n8n list:workflow`: works.
- local `http://127.0.0.1:5678` UI/API health: not reachable.
- static workflow secret check: pass.
- producer checker: pass.
- SELECT-only post readback: pass.
- Remote n8n API health: reachable.
- Remote API inventory/readback: pass.
- Operator-provided target workflow: `Campaign Status Monitor`.
- Target workflow matches local node/connection structure.
- Target workflow publish/activate: pass; readback is active.
- Operator UI execution smoke: pass.
- Latest execution readback: `success`, last node `Update Slack Delivery Status`.
- Alert-event/delivery SELECT-only readback: pass.
- Public API supports publish/deactivate but not one-time workflow execution.

Do not start local n8n casually:

- `n8n start` makes the web UI available and starts active workflows.
- Current inventory includes active non-AdMate workflows and active AdMate
  workflow records.
- Starting the server without first disabling or isolating active workflows can
  trigger unintended scheduled/active executions.

Operator must provide:

- nothing further for Gate 1.

Allowed Codex sequence after handoff:

1. Confirm API/UI target identity without printing credentials.
2. List workflows and compare only name/state/updated metadata.
3. Run static checks:
   - `npm run check:n8n-workflow-secrets`
   - `node scripts/check-sentinel-prelaunch-workflow-producer.mjs`
4. If approved, import/save only the named workflow.
5. If approved, activate only the named smoke workflow.
6. If the operator runs the workflow in UI, verify the new execution by API.
7. If no UI run occurs, verify the next scheduled execution by API.
8. Deactivate only if explicitly requested by the operator.
9. Run SELECT-only post readback and report sanitized counts/status only.

Stop conditions:

- target environment uncertain,
- API credential not provided through a safe local path,
- UI/API response would expose raw execution payloads,
- workflow name or ID ambiguity,
- active non-AdMate workflows would be started/touched,
- workflow would perform unapproved ingest, publish, provider call, or campaign
  mutation,
- final smoke workflow cannot be returned to the approved active/inactive state.

## Gate 2: Authenticated Mutation Smoke

Current state:

- Most authenticated mutation smokes pass.
- Latest Command Center input smoke recheck scanned for published
  smoke/test/sample markers and stayed clean.
- Active non-admin profiles existed, but active non-admin owner membership count
  was `0`, so a bounded temporary non-admin owner membership fixture was
  created.
- Command Center input smoke passed, and the temporary membership was
  deactivated.
- Cleanup/readback after Command Center smoke showed active non-admin owner
  membership count `0`, active Gate 2 fixture membership count `0`, and
  published smoke marker count `0`.
- Company SMTP diagnostics identified external/provider limitations; Gmail SMTP
  initially failed until app-password and sender alignment was corrected.
- Direct Supabase Auth invite diagnostic passed after Gmail app-password SMTP
  correction, and the temporary Auth user was deleted.
- `node scripts/admin-smoke-account-lifecycle.js` passed end-to-end: employee
  fixture created, access request created/approved, Auth invite sent, password
  setup email sent, password login session recognized, and cleanup complete.
- Cleanup/readback showed employee fixture `0`, org membership residue `0`,
  access grant residue `0`, active profile `0`, Auth user residue `0`, and
  active Gate 2 owner fixture membership `0`.
- Historical approved account lifecycle access request rows remain as audit
  evidence.

Operator must provide:

- nothing further for Gate 2.

Allowed Codex sequence if an archival re-run is explicitly requested:

1. Re-run account lifecycle smoke.
2. Verify smoke cleanup and bounded audit evidence.
3. If needed, re-run Command Center input smoke with the same bounded temporary
   fixture approach.
4. Report only sanitized status/counts.

Stop conditions:

- smoke would expose invite tokens or raw production row data,
- cleanup cannot be bounded to the created smoke fixtures.

## Gate 4: Lens Authenticated Capture/Upload

Current state:

- `https://lens.admate.ai.kr/` redirects to login.
- unauthenticated `/api/account/me` and `/api/captures` return `401`.
- `/api/auth/start?next=%2F%23capture-studio` redirects to Core product start.
- Core product start requires an active Core account session before issuing a
  Lens handoff code.
- Vercel sensitive Lens handoff/session keys are not exposed to local env run.
- Human-authenticated UI capture/upload smoke: pass.
- Target URL: `https://www.yna.co.kr/`.
- Capture status: `completed`.
- Uploaded creative and placement capture image verification: pass.
- Cleanup: DB row and storage objects removed; no remaining exact-source smoke
  rows.

Operator must provide:

- nothing further for Gate 4.

Allowed Codex sequence after handoff:

1. Reconfirm unauthenticated endpoints still return `401`.
2. Confirm authenticated `/api/account/me` is safe and successful.
3. Upload a small approved fixture image through `/api/upload`.
4. Create one capture row through `/api/captures`.
5. Execute capture through `/api/captures/execute` only for the created row.
6. Read back status/output metadata.
7. Cleanup/cancel/delete only the created smoke target.
8. Reconfirm no active smoke capture remains.

Stop conditions:

- no authenticated session,
- no disposable target,
- provider quota/credential uncertainty,
- raw customer/campaign/account data would be captured,
- storage cleanup path cannot be bounded,
- safe error/readback cannot be produced.

## Gate 5: Foresight SQL Editor / Import

Current state:

- local/offline checks pass.
- production SELECT-only preflight passes.
- `foresight` schema/object/policy/grant residue counts are `0`.
- existing broad public policy baseline remains `10`.
- schema draft file still says `REVIEW ONLY. DO NOT EXECUTE.`
- latest preflight stop conditions: none.
- operator decision on 2026-06-08 KST: keep Gate 5 `preflight-only` and split
  production schema apply/import into a separate migration queue.
- no production schema apply/import was executed under Gate 5.

Operator must provide:

- nothing further for Gate 5 in the Gate 1-6 queue.

Separate migration queue:

- `docs/tasks/2026-06-08_foresight_production_migration_queue_v1.md`.

Future operator inputs before schema apply/import:

- AdMate Data Core production SQL Editor target confirmation,
- explicit confirmation this is not MMP/staging/local,
- database operator,
- product/data owner approval,
- security/governance approval,
- rollback approver,
- execution window,
- exact SQL file approval or replacement migration file that no longer says
  `DO NOT EXECUTE`,
- backup/restore expectation,
- rollback decision policy.

Allowed Codex sequence after separate migration queue approval:

1. Re-run SELECT-only production preflight.
2. Verify target confirmation and stop conditions.
3. Execute only the approved schema apply SQL.
4. Run production verify SQL.
5. Report table/RLS/index/row/policy/grant counts only.
6. Do not rollback automatically after success.
7. Rollback only if separately approved and bounded to expected Foresight draft
   objects.

Stop conditions:

- target uncertainty,
- draft still says `DO NOT EXECUTE`,
- unexpected existing Foresight objects,
- broad Foresight anon/public policy or grant,
- verify count mismatch,
- raw benchmark import is requested before schema approval,
- sanitized result reporting cannot be produced.

## Gate 6: Creative Studio Media/Publish

Current state:

- `npm run verify:prelaunch-local`: pass.
- no Vercel link or root `.env*` in allowed repo root.
- no media generation, provider upload, or social publish runner exists.
- `AI Influencer/` was not inspected or touched.
- latest readiness/safety refresh: pass.
- 2026-06-08 KST post-Gate 5 decision refresh: readiness, safety, and
  prelaunch-local checks pass.
- Gate 6 platform handoff packet:
  `docs/tasks/2026-06-08_creative_studio_platform_handoff_packet_v1.md`.

Operator must provide:

- concrete creative brief,
- approved target platform/account,
- account owner and login/2FA operator,
- brand/legal/security approval,
- disclosure/caption/alt-text approval,
- decision whether Codex assists only up to draft copy/assets or not at all.
  Recommended default boundary: `draft-copy-only`.

Allowed Codex sequence after approval:

1. Re-run readiness/safety static checks.
2. Draft caption, disclosure, alt text, and approval checklist.
3. Prepare platform-owner handoff checklist.
4. Do not log into accounts, upload, or publish.
5. Record sanitized confirmation after the human platform owner publishes.

Stop conditions:

- account owner absent,
- legal/brand/security approval missing,
- target account uncertain,
- unapproved likeness or unsafe disclosure posture,
- provider/platform credential would be exposed,
- generated media would be staged into repo without approval.

## Next Action

The next practical handoff in the Gate 1-6 queue is Gate 6 creative/platform
ownership.

Foresight production schema apply/import is now tracked in the separate
migration queue and is not part of the remaining Gate 1-6 handoff.

For Gate 6, provide the creative brief, target platform/account, account owner,
login/2FA operator, and publish boundary. Recommended default boundary:
`draft-copy-only`.
