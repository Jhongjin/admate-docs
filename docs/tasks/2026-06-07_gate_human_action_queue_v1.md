# Gate Human Action Queue v1

Date: 2026-06-07 KST
Commander: AdMate
Status: ready for operator handoff

## Purpose

This queue lists the remaining actions that require a human-authenticated
external console/session or a secret-handling path that Codex cannot complete
from the local workspace alone.

No raw secret, token, cookie, session, credential value, provider payload,
production row ID, or raw production row should be pasted into chat or docs.

Detailed operator packets are in:

- `docs/tasks/2026-06-08_external_gate_operator_packets_v1.md`
- `docs/tasks/2026-06-08_foresight_production_migration_queue_v1.md`
- `docs/tasks/2026-06-08_creative_studio_platform_handoff_packet_v1.md`

## Recommended Order

Proceed in this order:

1. Gate 6 Creative Studio media/publish platform

Reason:

- Gate 2 authenticated mutation smoke, including the account lifecycle
  invite/password setup flow, was completed on 2026-06-08 KST.
- Command Center read-key/live rendering was completed on 2026-06-08 KST.
- n8n UI/API activation/execution/readback was completed on 2026-06-08 KST.
- Lens authenticated capture/upload/readback/cleanup was completed on
  2026-06-08 KST.
- Gate 5 Foresight was closed at the `preflight-only` boundary on 2026-06-08
  KST, and production schema apply/import was split into a separate migration
  queue.
- Creative requires a real authenticated product/platform session.

## Gate 3: Command Center Read-Key Pair

Status: completed on 2026-06-08 KST.

Success criteria:

- Homepage Production has `COMMAND_CENTER_LIVE_DATA`.
- `https://home.admate.ai.kr/command-center` renders live data.
- Required project labels are present.
- Forbidden public markers are absent.
- No raw secret value was printed or recorded.

## Gate 2: Authenticated Mutation Smoke

Status: completed on 2026-06-08 KST.

Completed:

- Most authenticated mutation smokes passed.
- Command Center input smoke passed with a bounded temporary non-admin owner
  membership fixture, and the temporary membership was deactivated.
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

Human action required:

- None for Gate 2.

Notes:

- Historical approved account lifecycle access request rows remain as audit
  evidence.
- Keep Gmail SMTP sender email, username, and app password aligned to the same
  Gmail account unless a company SMTP relay is later approved.

## Gate 1: n8n UI/API Console

Current status:

- Remote API credential path was provided through local `.env.local`.
- Target environment was confirmed by the operator-provided remote n8n URL.
- Target workflow was confirmed as `Campaign Status Monitor`.
- API inventory/readback passed.
- Target workflow publish/activate passed and readback shows active.
- Operator executed the approved workflow once from the n8n UI.
- API execution readback passed with status `success`.
- Alert-event and delivery SELECT-only readback passed.
- Public API does not expose a one-time workflow execute endpoint on this
  instance, so the UI click was the correct execution path.

Human action still required:

- None for Gate 1.

Important:

- Do not start local n8n with `n8n start` just to expose the UI unless active
  workflows have been isolated or explicitly accepted. That command starts
  active workflows, and the current inventory includes active non-AdMate
  workflows.

Codex will run after human action:

```powershell
cd D:\Projects\AdMate\admate-agent-core
npm run check:n8n-workflow-secrets
node scripts/check-sentinel-prelaunch-workflow-producer.mjs
n8n list:workflow
```

With the provided API credential, Codex can:

- list workflows through API,
- confirm target workflow state,
- publish/activate or deactivate the approved workflow,
- read back execution history.

Codex cannot execute this workflow through the public API on this n8n instance.

Success criteria:

- only approved workflows are touched.
- no production ingest call except from the approved target workflow execution.
- final target workflow state remains active unless the operator asks for
  deactivation.
- static workflow secret check remains green.

Stop conditions:

- target environment uncertain.
- credential label missing.
- raw execution payload would be exposed.
- workflow attempts unapproved ingest/publish.

## Gate 4: Lens Authenticated Capture/Upload

Status: completed on 2026-06-08 KST.

Completed:

- Human-authenticated Lens session was used by the operator.
- Disposable target URL was confirmed: `https://www.yna.co.kr/`.
- Test creative upload, capture execution, and cleanup were approved.
- Local/offline prelaunch checks passed.
- Authenticated UI submission created one new exact-source GDN PC capture.
- Capture completed successfully.
- Uploaded creative and placement capture images were reachable and nonblank.
- Cleanup removed the created smoke DB row and storage objects.
- Post-clean readback showed no remaining exact-source smoke rows or active
  smoke captures.

Human action required:

- None for Gate 4.

Codex will run after human action:

```powershell
cd D:\Projects\AdMate\admate-lens
npm run verify:prelaunch-local
```

Then, through the authenticated session:

- upload safe fixture,
- create capture row,
- execute capture,
- read back status/output metadata,
- delete/cancel cleanup target where supported,
- verify unauthenticated endpoints remain `401`.

Success criteria:

- authenticated upload returns a safe storage path.
- capture completes or fails with bounded safe error.
- readback confirms status and metadata.
- cleanup leaves no active smoke capture.

Stop conditions:

- no authenticated session.
- no disposable target.
- provider/browserbase quota or credential uncertainty.
- raw customer/campaign data would be captured.

## Gate 5: Foresight SQL Editor / Import

Status: completed on 2026-06-08 KST at the `preflight-only` boundary.

Completed:

- Local/offline Foresight checks passed.
- Production SELECT-only preflight passed.
- Stop conditions are absent.
- Existing `foresight` schema/object/policy/grant residue counts are `0`.
- The current schema draft still says `REVIEW ONLY. DO NOT EXECUTE.`
- Operator decision: keep Gate 5 `preflight-only` and split production schema
  apply/import into a separate migration queue.
- No production schema apply/import was executed under Gate 5.

Human action required:

- None for Gate 5 in the Gate 1-6 queue.

Separate migration queue:

- `docs/tasks/2026-06-08_foresight_production_migration_queue_v1.md`.
- Any future production schema apply/import requires the migration queue
  approvals, exact target confirmation, and a migration SQL file that no longer
  says `DO NOT EXECUTE`.

Current Codex boundary:

- Codex must not apply the current draft.
- Codex may only re-run local/offline checks or SELECT-only preflight unless
  the separate migration queue is explicitly approved.

Codex can re-run now:

```powershell
cd D:\Projects\AdMate\admate-foresight
npm run verify:prelaunch-local
node --experimental-strip-types scripts/benchmark-dry-run.mjs
npm run benchmark:ui-fixtures
```

## Gate 6: Creative Studio Media/Publish

Current status:

- Static readiness checker passed.
- Static safety checker passed.
- Prelaunch local aggregate passed.
- 2026-06-08 KST post-Gate 5 decision refresh passed:
  `npm run check:creative-studio-prelaunch-readiness`,
  `npm run check:creative-studio-safety-static`, and
  `npm run verify:prelaunch-local`.
- Gate 6 platform handoff packet was created:
  `docs/tasks/2026-06-08_creative_studio_platform_handoff_packet_v1.md`.
- Creative Studio docs alignment recheck was recorded:
  `D:\Projects\AdMate\admate-creative-studio\docs\tasks\2026-06-08_creative_studio_gate6_docs_alignment_recheck_result_v1.md`.
- Creative Studio `npm run verify:prelaunch-local` passed again after the docs
  alignment recheck note was recorded.
- Operator approved the `draft-copy-only` boundary on 2026-06-08 KST.
- Operator clarified Lua positioning on 2026-06-08 KST: Lua is an AI
  influencer / AI virtual creator primarily for Instagram, with a matching
  YouTube concept; lifestyle, beauty, food, and daily activity content are the
  main channel mix, while Nasmedia AdMate is one brand/service introduction
  activity inside that broader channel.
- No repo runner exists for media generation, upload, platform publish, or
  platform readback.
- Excluded `AI Influencer/` path remains untouched.

Human action required:

- Provide a concrete creative brief.
- Confirm target platform/account.
- Confirm account owner approval and who will operate login/2FA.
- Confirm brand/legal/security approval.
- Confirm whether media generation is allowed outside the repo.
- Confirm whether publish is manual-only or Codex-assisted up to draft assets.

Codex can run now:

```powershell
cd D:\Projects\AdMate\admate-creative-studio
npm run check:creative-studio-prelaunch-readiness
npm run check:creative-studio-safety-static
npm run verify:prelaunch-local
```

Codex must not do without explicit human platform action:

- log into social accounts,
- upload media to provider/platform,
- publish/post,
- inspect or touch the excluded `AI Influencer/` folder,
- stage generated media into repo.

Success criteria:

- brief, caption, disclosure, alt text, and target account are approved.
- platform owner confirms final publish action.
- evidence contains no credentials or raw account/session data.

Stop conditions:

- account owner absent.
- legal/brand/security approval missing.
- target account uncertain.
- generated media contains unapproved likeness, protected brand use, or unsafe
  disclosure posture.

## Next Commander Move

Human-only inputs remain for Gate 6 in the Gate 1-6 queue.

For Gate 6, provide the creative brief, platform/account, and platform-owner
publish boundary. Foresight production schema apply/import is now tracked in
the separate migration queue.
