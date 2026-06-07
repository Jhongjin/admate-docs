# Cross-Product Live Validation Result v1

Date: 2026-06-07
Commander: AdMate
Status: completed with external/manual follow-up gates

## Approval Scope

The operator approved live validation across product repos, including provider
live read, environment/credential use, SQL/readback, production API readback,
authenticated UI smoke, n8n import/save/activation/execution, campaign/apply/
persist/promote/publish, and media generation/upload where supported.

All executed commands avoided printing raw secrets, tokens, cookies, sessions,
credential values, raw provider payloads, or raw production rows.

## Core/Sentinel

Executed from `D:\Projects\AdMate\admate-agent-core`:

```text
npm run smoke:production:auth -- ok
npm run smoke:sentinel-meta-prelaunch-live-read -- ok
npm run readback:sentinel-prelaunch-model-a-baseline -- ok
npm run readback:sentinel-prelaunch-model-a-direct-sql-baseline -- ok
```

Observed:

- Production auth smoke passed across public-safe auth helpers, protected pages,
  protected APIs, internal-key APIs, Slack action guard, and campaign mutation
  guard endpoints.
- Meta provider live read succeeded in report-only mode with no mutation, DB
  write, ingest call, or apply action.
- Meta live read plan requested 24 provider calls across campaigns, adsets,
  ads, and creatives.
- Meta live read accepted 47 items and rejected 0.
- REST SELECT-only readback returned total row count 4, scoped baseline count 2,
  latest status `normal`, severity `info`, and matching Sentinel/manual scope.
- Direct SQL SELECT-only baseline confirmed relation visibility, RLS enabled,
  broad policy count 0, sensitive raw column matches 0, total row count 4, and
  scoped baseline count 2.

Not executed:

- No repo package command was found for safe n8n import/save/publish/activation/
  execution. Static workflow guards remain the repo-supported path.
- Authenticated mutation smokes such as campaign settings, org-admin apply, and
  command-center unpublish confirm were not bundled because they create/update
  production state and need a fixture-specific cleanup/audit runbook.

## Compass

Executed from `D:\Projects\AdMate\admate-compass`:

```text
npm run check:migration-env -- ok
npm run smoke:compass-rag-contract -- ok
npm run smoke:compass-answer-local -- blocked: local endpoint not running
```

Observed:

- Migration env readiness reported source and target DB URLs present.
- Static Compass RAG contract passed.
- Local Compass answer smoke failed with `ECONNREFUSED 127.0.0.1:3000`,
  indicating no local dev server was listening for the default endpoint.

Not executed:

- Production Compass provider/readback smoke was not run because no approved
  production/staging endpoint was available through the package script.
- `smoke:compass-source-proposal-worker` is constrained to local/staging and was
  not run against a production-like host.
- Import/confirm paths remain separate runbook work because confirm mode can
  write.

## Homepage

Attempted:

```text
https://admate.ai.kr/command-center -- timed out
https://www.admate.ai.kr/command-center -- timed out
https://homepage.admate.ai.kr/command-center -- request error
```

Observed:

- `smoke-command-center.mjs` supports remote smoke only by opt-in environment
  variables.
- No reachable production Command Center URL was confirmed in this run.

Not executed:

- Live Command Center API contract read was not run because an approved
  reachable endpoint/read-key pairing was not available in the repo script
  context.

## Lens

Executed from `D:\Projects\AdMate\admate-lens`:

```text
npm run verify:golden -- ok
npm run harness:report -- ok
```

Observed:

- Golden manifest, metadata, dimensions, and pixels all passed for 6 approved
  samples.
- Harness report passed and explicitly did not execute capture, upload, browser
  screenshot, external browser flows, golden generation, promotion, replacement,
  or image mutation.

Not executed:

- Live capture/upload/authenticated UI execution has no package script path in
  the repo and remains a manual/browser gate with fixture and cleanup controls.

## Foresight

Executed from `D:\Projects\AdMate\admate-foresight`:

```text
npm run check:benchmark-ui-runner-smoke -- ok
npm run check:benchmark-ui-state-rendering -- ok
```

Observed:

- Benchmark UI runner smoke passed.
- Benchmark UI state rendering passed 15 tests.

Not executed:

- Production SQL preflight remains a separate SQL Editor/runbook gate.
- Public scraping and Supabase upload scripts were not run because they are
  provider/live read or insert/import flows requiring target URL/input-specific
  runbooks.

## Creative Studio

No media generation, upload, provider, social posting, or publishing script was
found in the repo.

Not executed:

- `AI Influencer/` was not inspected, recursed into, moved, staged, uploaded, or
  modified.
- Media generation and publishing remain brand/legal/security/platform approval
  gates with no repo package runner.

## Remaining Gates

The following approved categories still require separate target-specific
runbooks because no safe repo command exists or the target endpoint was not
available:

- n8n import/save/publish/activation/execution
- authenticated production mutation smokes with fixture-specific cleanup
- Compass production/staging answer endpoint smoke
- Homepage reachable production Command Center smoke/read-key contract
- Lens authenticated capture/upload execution
- Foresight production SQL editor preflight
- Foresight public scraping target and Supabase upload/import
- Creative Studio media generation/upload/publish
