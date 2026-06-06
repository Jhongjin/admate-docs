# Cross-Repo Prelaunch Local Matrix Result v1

Date: 2026-06-07

## Scope

Central docs now owns a static cross-repo contract for `verify:prelaunch-local` coverage across:

- Core/Sentinel: `admate-agent-core`
- Compass: `admate-compass`
- Homepage: `admate-homepage`
- Lens: `admate-lens`
- Foresight: `admate-foresight`
- Creative Studio: `admate-creative-studio`

The checker only reads each repo's `package.json` and verifies directly referenced Node entrypoint files. It does not run any target repo package scripts.

## Contract

`npm run check:cross-repo-prelaunch-local` verifies:

- each scoped repo folder exists beside `admate-docs`;
- each scoped repo has `package.json`;
- each scoped repo defines `scripts["verify:prelaunch-local"]`;
- direct `npm run <target>` references from `verify:prelaunch-local` exist in the same `package.json`;
- direct `node scripts/...` entrypoint files referenced by `verify:prelaunch-local` or those direct targets exist;
- the `verify:prelaunch-local` script and direct target commands do not contain live/human-gated terms such as `live`, `provider`, `env`, `sql`, `readback`, `auth`, `campaign`, `apply`, `persist`, `promote`, `publish`, `n8n`, `activation`, `import`, or `save`.

## Safety Notes

- No external live/provider/env/SQL/readback/authenticated UI/campaign/apply/persist/promote/publish/n8n activation/import/save checks were executed.
- Creative Studio `AI Influencer/` was not accessed.
- Compass `next-env.d.ts` was not read or modified.
- Existing dirty `README.md` and `INDEX.md` were not modified.

## Verification

Validated from `D:\Projects\AdMate\admate-docs`:

```text
npm run check:cross-repo-prelaunch-local -- ok
npm run check:harness -- ok
npm run verify:harness -- ok
git diff --check -- ok
```

Notes:

- `check:harness` skipped the optional historical repos that are already
  replaced by Lens, Agent Core, and Compass.
- `npm run check:harness` returned a nonzero status once during a parallel
  verification batch without printing a failure diagnostic; rerunning the
  command standalone and through `npm run verify:harness` passed.
- `git diff --check` exited 0 and only printed existing LF to CRLF working-copy
  warnings for touched text files.
