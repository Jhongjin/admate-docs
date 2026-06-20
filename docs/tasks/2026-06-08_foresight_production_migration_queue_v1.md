# Foresight Production Migration Queue v1

Date: 2026-06-08 KST
Commander: AdMate
Status: separated from Gate 5; not approved for execution

## Decision

Gate 5 is closed at the `preflight-only` boundary.

Production Foresight schema apply/import is separated into this migration queue.
No production schema apply/import was executed as part of Gate 5.

## Boundary

Do not paste raw secrets, tokens, cookies, session values, provider payloads,
production row IDs, or raw production rows into chat or docs.

Codex must not run production schema apply/import until this queue has explicit
human approval and an executable migration SQL file.

## Current Evidence

Completed before this queue was separated:

- Local/offline Foresight checks passed.
- Benchmark dry-run passed.
- UI fixture benchmark passed.
- Production SELECT-only preflight passed.
- Latest production preflight stop conditions: none.
- `foresight` schema/object/policy/grant residue counts are `0`.
- Existing broad public policy baseline remains recorded separately.
- No production write/import/schema apply was executed.

## Current Blockers

- `docs/sql/2026-05-07_foresight_benchmark_schema_draft.sql` is explicitly
  marked `REVIEW ONLY. DO NOT EXECUTE.`
- The SQL Editor target name from metadata was not production-looking, so the
  exact AdMate Data Core production target must be confirmed manually in the
  Supabase UI before any future apply.
- Production schema apply/import needs a dedicated migration approval package.

## Required Approval Package

Before any production schema apply/import, the operator must provide:

- exact AdMate Data Core production SQL Editor target confirmation,
- explicit confirmation that the target is not MMP/staging/local,
- database operator,
- product/data owner approval,
- security/governance approval,
- rollback approver,
- execution window,
- exact migration SQL file approval or replacement migration file that no
  longer says `DO NOT EXECUTE`,
- backup/restore expectation,
- rollback decision policy.

## Allowed Codex Sequence After Approval

1. Re-run production SELECT-only preflight.
2. Verify target confirmation and stop conditions.
3. Execute only the approved schema apply SQL.
4. Run production verify SQL.
5. Report table/RLS/index/row/policy/grant counts only.
6. Do not rollback automatically after success.
7. Rollback only if separately approved and bounded to expected Foresight draft
   objects.

## Stop Conditions

- target uncertainty,
- migration SQL still says `DO NOT EXECUTE`,
- unexpected existing Foresight objects,
- broad Foresight anon/public policy or grant,
- verify count mismatch,
- raw benchmark import requested before schema approval,
- sanitized result reporting cannot be produced.
