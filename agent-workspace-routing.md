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
| Sentinel, Openclaw, Hermes, monitoring, security workflow | `D:\Projects\AdMate\admate-agent-core` |
| Lens capture/evidence generation | `D:\Projects\AdMate\admate-lens` |
| Foresight prediction/planning/statistics | `D:\Projects\AdMate\admate-foresight` |
| Design and UI/UX governance | `D:\Projects\AdMate\admate-design-director` |
| Homepage | `D:\Projects\AdMate\admate-homepage` |
| Creative tools | `D:\Projects\AdMate\admate-creative-studio` |
| Canonical docs | `D:\Projects\AdMate\admate-docs` |

## Move Candidates

Do not move these without explicit approval:

- `.tmp`
- `qa-browser-profiles`
- `백업.docx`
- `.playwright-mcp`
- `.external`
- `lua`
- `sentinel_supabase_db_files`

Treat `admate-sentinel-legacy` as legacy reference only unless explicitly requested.

## New Session Prompt

```text
You are the [product] agent for AdMate.
Read D:\Projects\AdMate\WORKSPACE.md first, then D:\Projects\AdMate\[repo]\AGENTS.md.
Stay inside [repo] unless I explicitly ask for cross-repo work.
Avoid broad recursive scans of D:\Projects\AdMate.
```
