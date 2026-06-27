# AdMate Agent Workspace Routing

Updated: 2026-06-27

This is the versioned copy of `D:\Projects\AdMate\WORKSPACE.md`. The workspace root is not currently a valid git repo, so this file preserves the routing rules in `admate-docs`.

## Core Rule

AdMate agents should not scan the whole `D:\Projects\AdMate` workspace by default. They should read the root routing file, pick the owning repo, then read only that repo's `AGENTS.md` and task-relevant files.

## Routing

| Task | Folder |
|---|---|
| Cross-product coordination | `D:\Projects\AdMate\admate-commander` |
| Compass policy/RAG/answer quality | `D:\Projects\AdMate\admate-compass` |
| Sentinel, Openclaw, Hermes, monitoring, security workflow | `D:\Projects\AdMate\admate-agent-core` plus `docs\agents\agent-core-role-routing.md` |
| Lens capture/evidence generation | `D:\Projects\AdMate\admate-lens` |
| Foresight prediction/planning/statistics | `D:\Projects\AdMate\admate-foresight` |
| Design and UI/UX governance | `D:\Projects\AdMate\admate-design-director` |
| Homepage | `D:\Projects\AdMate\admate-homepage` |
| Creative tools | `D:\Projects\AdMate\admate-creative-studio` |
| Canonical docs | `D:\Projects\AdMate\admate-docs` |

## Shared Agent Core Branches

`admate-agent-core` is one shared repo for Sentinel, Openclaw, Hermes, Security, Command Center, Paperclip, and Slack operations. Do not split it into new repos unless Commander explicitly approves a future architecture change.

Use role-specific branch prefixes:

- `feature/sentinel-monitoring/`
- `feature/sentinel-mediamix/`
- `feature/openclaw/`
- `feature/hermes/`
- `feature/security/`
- `feature/command-center/`
- `feature/paperclip/`
- `feature/slack-ops/`

The detailed routing and prompt templates live in:

```text
D:\Projects\AdMate\admate-agent-core\docs\agents\agent-core-role-routing.md
```

## Archived Workspace Noise

Archived on 2026-06-27 after user approval:

- `D:\Projects\AdMate-archive\2026-06-27-workspace-cleanup\.tmp`
- `D:\Projects\AdMate-archive\2026-06-27-workspace-cleanup\qa-browser-profiles`
- `D:\Projects\AdMate-archive\2026-06-27-workspace-cleanup\백업.docx`
- `D:\Projects\AdMate-archive\2026-06-27-workspace-cleanup\.playwright-mcp`
- `D:\Projects\AdMate-archive\2026-06-27-workspace-cleanup\.external`
- `D:\Projects\AdMate-archive\2026-06-27-workspace-cleanup\lua`
- `D:\Projects\AdMate-archive\2026-06-27-workspace-cleanup\sentinel_supabase_db_files`

Do not delete archived files without explicit approval.

Treat `admate-sentinel-legacy` as legacy reference only unless explicitly requested.

## New Session Prompt

```text
You are the [product] agent for AdMate.
Read D:\Projects\AdMate\WORKSPACE.md first, then D:\Projects\AdMate\[repo]\AGENTS.md.
Stay inside [repo] unless I explicitly ask for cross-repo work.
Avoid broad recursive scans of D:\Projects\AdMate.
```
