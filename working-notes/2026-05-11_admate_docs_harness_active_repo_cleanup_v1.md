# AdMate Docs Harness Active Repo Cleanup

Date: 2026-05-11

## Summary

Updated the central docs harness coverage checker so the everyday harness tracks the
current active AdMate repo set instead of failing on historical local folder names.

Active repo coverage now includes:

- admate-docs
- admate-homepage
- admate-lens
- admate-agent-core
- admate-compass

Historical local aliases remain documented in the checker as optional entries:

- admate-capture-pro, replaced by admate-lens
- openclaw-monitor, replaced by admate-agent-core
- Jhongjin-admate-guide-codex, replaced by admate-compass

If those historical folders are absent, the checker skips them with a warning and
continues. Active repo folders and required harness files still fail closed.

## No-Touch Confirmation

This cleanup did not clone, recreate, delete, or modify historical product repos.
It did not modify product code, product docs, APIs, databases, environment
variables, captures, screenshots, assets, or credentials.

Local editor state such as `.obsidian/` was left untouched and unstaged.

## Verification

Planned checks:

- `npm run check:harness`
- `npm run verify:harness`
- `git diff --check`
