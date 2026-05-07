# AdMate Naming Canonicalization Plan v1

Date: 2026-05-07

Purpose: standardize AdMate project names across local folders, GitHub repositories, Vercel projects, Supabase projects, Codex project labels, and Obsidian references without breaking production domains, deployment links, or existing repo history.

This document is a planning and execution control document. It does not rename, delete, migrate, or mutate any external project by itself.

---

## 1. Goal

AdMate currently has several historical names:

- AdMate Guide
- Capture Pro
- Openclaw Monitor
- Admate-Vision
- Ad-Planner AI
- Jhongjin-admate-guide-codex
- Design Director Agent
- AdMate Creative Studio Agent

The long-term product naming is now clearer:

- AdMate Compass
- AdMate Sentinel
- AdMate Lens
- AdMate Foresight
- AdMate Agent Core
- AdMate Homepage
- AdMate Docs
- AdMate Creative Studio
- AdMate Design Director
- AdMate Data Core

The goal is to make names readable and predictable while preserving:

- Git history
- Vercel custom domains
- Supabase project refs and URLs
- local Codex workspace continuity
- Obsidian vault usability
- existing production deployments

---

## 2. Naming Principles

Use lowercase kebab-case for technical surfaces:

- GitHub repository slugs
- Vercel project names
- local folder names
- package/project directories

Use title case for product display names:

- AdMate Compass
- AdMate Lens
- AdMate Foresight

Use stable internal names for shared infrastructure:

- `admate-agent-core` for Openclaw/Hermes/Sentinel/Auth/Intelligence shared backend
- `admate-data-core` for Supabase main shared data project display name

Avoid names that are too narrow:

- `Admate-Vision` is too narrow for the current shared Supabase project because it now holds Compass, Openclaw/Sentinel, Intelligence Library, and shared auth data.
- `openclaw-monitor` is too narrow because the repo now includes Agent Core, Auth, Command Center, Intelligence Library, and Sentinel surfaces.

Avoid names that preserve old product names:

- `admate-capture-pro`
- `Jhongjin-admate-guide-codex`
- `admateplanner`

---

## 3. Current Inventory

Snapshot source: local `D:\Projects\AdMate` inventory, local `.vercel/project.json`, Git remotes, and Vercel read-only project inspection on 2026-05-07.

### 3.1 Local And GitHub

| Product Area | Canonical Local Folder | Canonical GitHub Repo | Status |
|---|---|---|---|
| Docs / Command Center | `D:\Projects\AdMate\admate-docs` | `Jhongjin/admate-docs` | Canonical. Also the Obsidian vault root. |
| Homepage | `D:\Projects\AdMate\admate-homepage` | `Jhongjin/admate-homepage` | Canonical. |
| Compass | `D:\Projects\AdMate\admate-compass` | `Jhongjin/admate-compass` | Canonical local/Git name. |
| Lens | `D:\Projects\AdMate\admate-lens` | `Jhongjin/admate-lens` | Canonical local/Git name. |
| Agent Core / Sentinel | `D:\Projects\AdMate\admate-agent-core` | `Jhongjin/admate-agent-core` | Canonical technical repo for Openclaw/Hermes/Sentinel surfaces. |
| Foresight | `D:\Projects\AdMate\admate-foresight` | `Jhongjin/admate-foresight` | Canonical local/Git name. |
| Creative Studio | `D:\Projects\AdMate\admate-creative-studio` | `Jhongjin/admate-creative-studio` | Canonical local/Git name. |
| Design Director | `D:\Projects\AdMate\admate-design-director` | `Jhongjin/admate-design-director` | Canonical local/Git name. |
| Sentinel Legacy | `D:\Projects\AdMate\admate-sentinel-legacy` | `Jhongjin/admate-sentinel-legacy` | Legacy preservation repo. Do not treat as active Agent Core. |

### 3.2 Vercel

| Product Area | Canonical Vercel Project | Production Domain | Status |
|---|---|---|---|
| Homepage | `admate-homepage` | `home.admate.ai.kr` | Canonical. Duplicate homepage project was retired. |
| Compass | `admate-compass` | `compass.admate.ai.kr` | Project/domain canonical. Git linked repo label still needs dashboard verification. |
| Lens | `admate-lens` | `lens.admate.ai.kr` | Project/domain canonical. Git linked repo label still needs dashboard verification. |
| Agent Core / Sentinel | `admate-agent-core` | `sentinel.admate.ai.kr` | Project/domain canonical. Git linked repo label still needs dashboard verification. |
| Foresight | `admate-foresight` | none confirmed | Project name canonical; repo linkage should be reviewed before production dependency. |

Remaining Vercel follow-up:

- Vercel Git linked repo labels for Compass, Lens, and Agent Core may still show historical repository names or redirects.
- Do not reconnect Vercel projects as part of docs cleanup. Reconnection belongs in a separate Vercel verification gate with production smoke after the next deployment.
- Keep legacy Guide deployment/redirect decisions as a product-routing follow-up, not a central docs path cleanup item.

### 3.3 Supabase

| Current Display Name | Historical Display Name | Observed Role | Safety Rule |
|---|---|---|---|
| `AdMate-Data-Core` | `Admate-Vision` | Main shared production DB for Compass, Agent Core/Sentinel, Auth, Intelligence, and related schemas | Display name only. Project ref, API URL, credentials, schemas, and data must remain unchanged. |
| `Admate_AI_MMP` or future `AdMate-Dryrun-MMP` | same | Non-production dry-run target used for Intelligence Library schema rehearsal | Rename optional; avoid confusion with production. |
| `Ad-Planner AI` or future `AdMate-Foresight-Legacy` | same | Legacy Foresight/Planner DB candidate | Inventory remains incomplete. Do not migrate or rename until reviewed. |

Supabase display-name changes are safer than GitHub/Vercel/local folder renames because project refs and URLs usually remain stable. Still, AdMate docs must explicitly say that display-name cleanup does not change application configuration values.

### 3.4 Codex And Obsidian

Target Codex/local names should match canonical local folders:

- `admate-docs`
- `admate-homepage`
- `admate-compass`
- `admate-lens`
- `admate-agent-core`
- `admate-foresight`
- `admate-creative-studio`
- `admate-design-director`
- `admate-sentinel-legacy`

Obsidian vault target:

```text
D:\Projects\AdMate\admate-docs
```

Do not create a C-drive vault or duplicate docs folder. `.obsidian/` is local vault configuration and should not be staged or committed unless a future gate explicitly changes that rule.

---

## 4. Recommended Execution Order

### Completed Gates

| Gate | Status |
|---|---|
| Rename-1 Planning And Inventory | Completed. |
| Rename-2 Homepage Duplicate Cleanup | Completed. |
| Rename-3 Supabase Display Rename | Completed for main shared display name. |
| Rename-4 Local Root Consolidation | Completed with copy fallback for previously locked folders. |
| Rename-5 Local Remote And Vercel Metadata Sync | Completed where external names were canonical. |
| Rename-6 Post-Rename Verification | Completed with production smoke recorded for homepage, Compass, Lens, and Sentinel domains. |

### Current Docs Gate

Gate Docs-Canonical-1:

- Update active central docs to use `D:\Projects\AdMate` as the canonical root.
- Update active central docs to use canonical repo names and GitHub slugs.
- Preserve historical task/result documents and `archive/` originals.
- Leave Vercel Git linked repo label verification as a future follow-up.
- Do not modify product repos, DB/API/env configuration, or deployment settings.

### Next Operational Gate Candidates

1. Vercel Git linked repo verification and dashboard reconnection for Compass, Lens, and Agent Core.
2. Product repo `AGENTS.md` sync from this central canonical map.
3. Legacy Guide and Sentinel Legacy routing/archive decision review.

---

## 5. Rollback And Safety Notes

### GitHub Repo Rename

GitHub usually preserves redirects from old repo URLs, but do not rely on redirects long-term.

Rollback:

- Rename repository back in GitHub UI.
- Reset local remote URL.
- Verify Vercel Git integration.

### Vercel Project Rename

Rollback:

- Rename project back in Vercel UI.
- Check custom domain assignment.
- Run production smoke.

### Supabase Display Rename

Rollback:

- Rename display name back in Supabase UI.
- Connection strings and project refs should not change if only display name is changed.

### Local Folder Rename

Rollback:

```powershell
Rename-Item -LiteralPath "D:\Projects\<new-name>" -NewName "<old-name>"
```

Do not delete local folders during rename cleanup. Rename first, verify, then archive old aliases if needed.

---

## 6. Current Recommendation

Current canonical root:

```text
D:\Projects\AdMate
```

Current central docs / Obsidian vault:

```text
D:\Projects\AdMate\admate-docs
```

Use the canonical local folders and GitHub slugs in active planning, handoff, prompt, and Command Center documents. Leave historical task/result documents and `archive/` originals unchanged.

Remaining naming work should proceed in this order:

1. Verify and, if needed, reconnect Vercel Git linked repo labels for Compass, Lens, and Agent Core in a dedicated Vercel gate.
2. Sync product repo `AGENTS.md` files with the central canonical map.
3. Decide legacy Guide redirect/archive handling.
4. Decide Sentinel Legacy long-term archival scope.

The most important decision remains: treat `admate-agent-core` as the canonical technical name for the Openclaw/Hermes/Sentinel/Auth/Intelligence backend repo, while keeping the public-facing product name `AdMate Sentinel` for the monitoring/validation surface.

The rename execution log below intentionally preserves historical paths and names as evidence of what changed over time.

---

## 7. Rename Execution Log

### 2026-05-07 - Rename-2 Homepage Duplicate Cleanup

Operator action: user deleted the duplicate Vercel project `admate-homepage-al13`.

Verification:

- Vercel project list shows only `admate-homepage` for homepage.
- `home.admate.ai.kr` is attached to Vercel project `admate-homepage`.
- `home.admate.ai.kr` returns HTTP 200.
- Canonical local folder remains `D:\Projects\admate-homepage`.
- Canonical GitHub repo remains `Jhongjin/admate-homepage`.

Result:

- `admate-homepage-al13` is retired.
- No further homepage duplicate cleanup is needed.

### 2026-05-07 - Rename-3 Supabase Display Rename

Operator action: user renamed Supabase project display name from `Admate-Vision` to `AdMate-Data-Core`.

Verification note:

- This was a Supabase dashboard display-name operation.
- No Supabase project ref, API URL, connection string, database credential, schema, or data migration was changed by this naming plan.
- Application configuration should continue to use the existing project ref/URL values.

Result:

- Main shared production data project should now be referred to as `AdMate-Data-Core`.
- Old name `Admate-Vision` should remain only in historical docs or migration notes.

### 2026-05-07 - Rename-4 Local Root Consolidation

Operator action: created `D:\Projects\AdMate` and moved canonical AdMate working repos under that root where Windows file locks allowed it.

Moved successfully:

- `D:\Projects\AdMate\admate-homepage`
- `D:\Projects\AdMate\admate-compass`
- `D:\Projects\AdMate\openclaw-monitor`
- `D:\Projects\AdMate\admate-foresight`
- `D:\Projects\AdMate\admate-creative-studio`
- `D:\Projects\AdMate\admate-design-director`
- `D:\Projects\AdMate\admate-sentinel-legacy`

Local folder names normalized during the move:

- `AdMate Foresight` -> `admate-foresight`
- `Ad-Sentinel` -> `admate-sentinel-legacy`

Pending due to Windows file locks:

- `D:\Projects\admate-docs` -> `D:\Projects\AdMate\admate-docs`
- `D:\Projects\admate-capture-pro` -> `D:\Projects\AdMate\admate-capture-pro`

Notes:

- The current Codex thread and/or Obsidian may be holding `admate-docs`.
- `admate-capture-pro` may be held by a local process, editor, or file watcher.
- No forced deletion, cleanup, or copy workaround was performed.
- Existing duplicate folder `D:\Projects\AdMate Creative Studio Agent` was left in place for a later cleanup gate because the canonical folder `D:\Projects\AdMate\admate-creative-studio` already exists.

Verification:

- Git remotes were preserved in moved folders.
- Vercel `.vercel/project.json` files remained present for moved Vercel-linked projects.
- Known unrelated dirty worktrees remained dirty but were not modified by the move.

### 2026-05-07 - Rename-4B Copy Fallback For Locked Folders

Operator action: copied locked source folders into the new AdMate root instead of moving them. The old folders were intentionally left in place for later manual cleanup.

Copied successfully:

- `D:\Projects\admate-docs` -> `D:\Projects\AdMate\admate-docs`
- `D:\Projects\admate-capture-pro` -> `D:\Projects\AdMate\admate-lens`

Copy exclusions:

- `node_modules`
- `.next`
- `.turbo`
- `dist`
- `build`
- `coverage`
- `.cache`
- log files
- TypeScript build info files

Verification:

- `D:\Projects\AdMate\admate-docs` keeps remote `Jhongjin/admate-docs`.
- `D:\Projects\AdMate\admate-docs` includes the copied Obsidian vault settings.
- `D:\Projects\AdMate\admate-lens` keeps Git history from the Lens source folder.
- `D:\Projects\AdMate\admate-lens` currently still points to GitHub remote `Jhongjin/admate-capture-pro`.
- `D:\Projects\AdMate\admate-lens` keeps Vercel project ID `prj_cAd0JHyVm4IBhM2Q0pE4LxesVbZ7`.
- `D:\Projects\AdMate\admate-lens` currently still has `.vercel/project.json` project name `admate-capture-pro`.

Follow-up:

- Open Obsidian vault from `D:\Projects\AdMate\admate-docs`.
- Open Codex projects from the new `D:\Projects\AdMate\...` paths.
- Do not delete `D:\Projects\admate-docs` or `D:\Projects\admate-capture-pro` until the user manually confirms the new paths are working.
- Rename Lens GitHub remote/project references in a later Lens rename gate.

### 2026-05-07 - Rename-5 Low-Risk Local Remote And Vercel Metadata Sync

Operator action: aligned local remotes and local Vercel project metadata where the external names are already canonical.

Completed:

- `D:\Projects\AdMate\admate-design-director`
  - local `origin` updated to `https://github.com/Jhongjin/admate-design-director.git`
- `D:\Projects\AdMate\admate-compass`
  - local `origin` updated to `https://github.com/Jhongjin/admate-compass.git`
  - local `.vercel/project.json` project name updated to `admate-compass`
  - Vercel production inspect for `https://compass.admate.ai.kr` returns project `admate-compass`, target `production`, status `Ready`
- `D:\Projects\AdMate\admate-lens`
  - local `.vercel/project.json` project name updated to `admate-lens`
  - Vercel production inspect for `https://lens.admate.ai.kr` returns project `admate-lens`, target `production`, status `Ready`

Intentionally not changed:

- Lens local `origin` still points to `https://github.com/Jhongjin/admate-capture-pro.git` because `https://github.com/Jhongjin/admate-lens.git` was not confirmed as an available repo at this time.
- Lens Vercel project still has legacy default alias `admate-capture-pro.vercel.app`; this does not affect `lens.admate.ai.kr`.
- Agent Core/Openclaw was not renamed in this gate.

Follow-up:

- Complete Lens GitHub rename only after `Jhongjin/admate-lens` exists or the existing repo is renamed in GitHub.
- Complete Agent Core rename after a dedicated readiness review.

### 2026-05-07 - Rename-6 Post-Rename Verification

Operator action: user completed additional GitHub/Vercel rename work for Lens, Agent Core, Foresight, and Sentinel legacy where applicable. Local remotes and local Vercel metadata were then aligned from the new `D:\Projects\AdMate` root.

Local canonical folders:

- `D:\Projects\AdMate\admate-docs`
- `D:\Projects\AdMate\admate-homepage`
- `D:\Projects\AdMate\admate-compass`
- `D:\Projects\AdMate\admate-lens`
- `D:\Projects\AdMate\admate-agent-core`
- `D:\Projects\AdMate\admate-foresight`
- `D:\Projects\AdMate\admate-creative-studio`
- `D:\Projects\AdMate\admate-design-director`
- `D:\Projects\AdMate\admate-sentinel-legacy`

Local Git remotes aligned:

- `admate-design-director` -> `https://github.com/Jhongjin/admate-design-director.git`
- `admate-creative-studio` -> `https://github.com/Jhongjin/admate-creative-studio.git`
- `admate-compass` -> `https://github.com/Jhongjin/admate-compass.git`
- `admate-lens` -> `https://github.com/Jhongjin/admate-lens.git`
- `admate-foresight` -> `https://github.com/Jhongjin/admate-foresight.git`
- `admate-sentinel-legacy` -> `https://github.com/Jhongjin/admate-sentinel-legacy.git`
- `admate-agent-core` -> `https://github.com/Jhongjin/admate-agent-core.git`

Local Vercel metadata aligned:

- `admate-homepage` keeps project name `admate-homepage`
- `admate-compass` keeps project ID `prj_P42AQ4WX2hJgMMdeRqksqY0fHPWc` and local project name `admate-compass`
- `admate-lens` keeps project ID `prj_cAd0JHyVm4IBhM2Q0pE4LxesVbZ7` and local project name `admate-lens`
- `admate-agent-core` keeps project ID `prj_YXJEMYIvfGSXK0ovjEnNpz5NnS3h` and local project name `admate-agent-core`

Production smoke:

- `https://home.admate.ai.kr` returns HTTP 200
- `https://compass.admate.ai.kr` returns HTTP 200
- `https://lens.admate.ai.kr` returns HTTP 200
- `https://sentinel.admate.ai.kr` returns HTTP 200

Remaining Vercel dashboard/API follow-up:

- Vercel project `admate-compass` still reports linked Git repo `Jhongjin-admate-guide-codex`.
- Vercel project `admate-lens` still reports linked Git repo `admate-capture-pro`.
- Vercel project `admate-agent-core` still reports linked Git repo `openclaw-monitor`.
- These may be stale GitHub integration labels or redirects, but the safer final state is to reconnect each Vercel project to the canonical GitHub repo in the Vercel dashboard and verify the next production deployment.

No immediate production outage was observed.
