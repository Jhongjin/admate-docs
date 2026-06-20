# Commander Handoff Snapshot - 2026-06-04

Purpose: concise post-format handoff snapshot for continuing the AdMate Commander session after C drive format.

## Current Core/Sentinel HEAD Sequence

- `6914a4d` - Dedicated scheduled producer static checker split.
- `3eec3dd` - Dedicated scheduled producer export-only skeleton added.
- `5c08183` - Export-only / no-live guard completed; Core is clean and synced here.

## Current Repo State Summary

- Core: clean and synced at `5c08183`.
- Compass: dirty only in `next-env.d.ts`.
- Foresight, Lens, Homepage, Creative Studio, and Legacy: previously clean and synced.
- Legacy is reference-only.

## Safety Constraints

- No live n8n import, save, publish, activation, or execution.
- No SQL mutation.
- No provider or campaign mutation.
- No credential internals.
- No raw identifiers, secrets, tokens, cookies, sessions, account ids, campaign ids, provider ids, request ids, database ids, event ids, source hashes, or credential internals.
- Commander approval gates remain required before any action that could affect live systems or external state.

## Completed Queues

- Dedicated scheduled producer static checker split.
- Export-only skeleton.
- Export-only / no-live guard.

## Verification Passed

Verification commands were run and passed, with raw outputs intentionally omitted:

- Core/Sentinel status and sync checks.
- Static checker split verification.
- Export-only skeleton verification.
- Export-only / no-live guard verification.
- Final clean-state confirmation for Core at `5c08183`.

## PC Format Backup

Before formatting C drive, close Codex, browsers, terminals, and any other tools that may hold live sessions or file handles.

Suggested backup command:

```powershell
powershell -ExecutionPolicy Bypass -File "D:\Projects\AdMate\_pc-format-backup-tools\Backup-CodexBeforeFormat.ps1"
```

Default backup destination is inside `D:\Projects\AdMate\_pc-format-backup`.
The backup may contain auth/session material and must stay private.

## Next Recommended Queue

Recommended next queue is contract-only: inactive import approval packet/readiness doc for the dedicated scheduled producer.

If stopping for format, resume from Core clean at `5c08183`.
