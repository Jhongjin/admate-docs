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

Snapshot source: local `D:\Projects` inventory, local `.vercel/project.json`, Git remotes, and Vercel read-only project inspection on 2026-05-07.

### 3.1 Local And GitHub

| Product Area | Current Local Folder | Current GitHub Remote | Current Branch | Target Local Folder | Target GitHub Repo |
|---|---|---|---|---|---|
| Docs | `D:\Projects\admate-docs` | `Jhongjin/admate-docs` | `main` | `D:\Projects\admate-docs` | `Jhongjin/admate-docs` |
| Homepage | `D:\Projects\admate-homepage` | `Jhongjin/admate-homepage` | `main` | `D:\Projects\admate-homepage` | `Jhongjin/admate-homepage` |
| Compass | `D:\Projects\Jhongjin-admate-guide-codex` | `Jhongjin/Jhongjin-admate-guide-codex` | `main` | `D:\Projects\admate-compass` | `Jhongjin/admate-compass` |
| Lens | `D:\Projects\admate-capture-pro` | `Jhongjin/admate-capture-pro` | `codex/youtube-instream-skip-timing` | `D:\Projects\admate-lens` | `Jhongjin/admate-lens` |
| Agent Core / Sentinel | `D:\Projects\openclaw-monitor` | `Jhongjin/openclaw-monitor` | `main` | `D:\Projects\admate-agent-core` | `Jhongjin/admate-agent-core` |
| Foresight | `D:\Projects\AdMate Foresight` | `Jhongjin/admate-foresight` | `main` | `D:\Projects\admate-foresight` | `Jhongjin/admate-foresight` |
| Ad-Sentinel legacy | `D:\Projects\Ad-Sentinel` | `Jhongjin/AdMate-Sentinel` | `main` | `D:\Projects\admate-sentinel-legacy` | `Jhongjin/admate-sentinel-legacy` |
| Creative Studio | `D:\Projects\AdMate Creative Studio Agent` | `Jhongjin/admate-creative-studio` | `main` | `D:\Projects\admate-creative-studio` | `Jhongjin/admate-creative-studio` |
| Design Director | `D:\Projects\Design Director Agent` | `Jhongjin/Design-Director-Agent` | `main` | `D:\Projects\admate-design-director` | `Jhongjin/admate-design-director` |

Notes:

- `admate-docs` already matches the target name.
- `admate-homepage` already matches the target name.
- `admate-foresight` GitHub remote already matches the target name, but local folder still has spaces and title case.
- `admate-capture-pro` is currently on a non-main branch. Do not rename this local folder until branch state is confirmed and either merged, preserved, or intentionally left as-is.
- `Ad-Sentinel` should be treated as legacy until its relationship to `admate-agent-core` is finalized.

### 3.2 Vercel

| Product Area | Current Vercel Project | Current Production Domain | Current GitHub Repo Link | Target Vercel Project | Status |
|---|---|---|---|---|---|
| Homepage | `admate-homepage` | `home.admate.ai.kr` | `admate-homepage` | `admate-homepage` | Canonical. Duplicate `admate-homepage-al13` can be removed after final check. |
| Compass | `admate-compass` | `compass.admate.ai.kr` | `Jhongjin-admate-guide-codex` | `admate-compass` | Project name already canonical; GitHub/local still need rename. |
| Lens | `admate-lens` | `lens.admate.ai.kr` | `admate-capture-pro` | `admate-lens` | Project name already canonical; GitHub/local still need rename. |
| Agent Core / Sentinel | `openclaw-monitor` | `sentinel.admate.ai.kr` | `openclaw-monitor` | `admate-agent-core` | Rename only after explicit approval because user-facing domain is Sentinel but repo role is Agent Core. |
| Foresight | `admate-foresight` | none confirmed | `admateplanner` | `admate-foresight` | Needs repo linkage review before rename. |
| Legacy Guide | `admate-guide` | `guide.admate.ai.kr` | `admate-guide` | archive or legacy | Keep until Compass replacement/redirect plan is confirmed. |

Homepage duplicate cleanup state:

- `home.admate.ai.kr` has been moved to `admate-homepage`.
- Vercel domain API confirms `home.admate.ai.kr` belongs to `admate-homepage`.
- `admate-homepage-al13` retains only its default Vercel domain and is a deletion candidate.

### 3.3 Supabase

| Current Supabase Project | Observed Role | Target Display Name | Risk |
|---|---|---|---|
| `Admate-Vision` | Main shared production DB for Compass/Openclaw/Sentinel/Auth/Intelligence and related schemas | `AdMate-Data-Core` | Display rename should be safe, but project ref/URL must remain unchanged. |
| `Admate_AI_MMP` | Non-production dry-run target used for Intelligence Library schema rehearsal | `AdMate-Dryrun-MMP` or keep as-is | Rename optional; avoid confusion with production. |
| `Ad-Planner AI` | Legacy Foresight/Planner DB candidate | `AdMate-Foresight-Legacy` | Read-only inventory still incomplete. Do not migrate/rename until inventory is done. |

Supabase display-name changes are generally safer than GitHub/Vercel/local folder renames because project refs and URLs usually remain stable. Still, update internal docs after any display-name change to avoid human confusion.

### 3.4 Codex And Obsidian

Current Codex project labels shown by user include:

- Command Center / `admate-docs`
- openclaw / `openclaw-monitor`
- Compass / `Jhongjin-admate-guide-codex`
- Lens / `admate-capture-pro`
- homepage / `admate-homepage`
- AdMate Foresight
- Ad-Sentinel
- AdMate Creative Studio Agent
- Design Director Agent

Target Codex/local names should match target local folders:

- `admate-docs`
- `admate-agent-core`
- `admate-compass`
- `admate-lens`
- `admate-homepage`
- `admate-foresight`
- `admate-sentinel-legacy`
- `admate-creative-studio`
- `admate-design-director`

Obsidian vault should remain:

```text
D:\Projects\admate-docs
```

Do not create a C-drive vault or duplicate docs folder.

---

## 4. Recommended Execution Order

### Gate Rename-1: Planning And Inventory

Status: this document.

Scope:

- Write canonical naming map.
- Mark rename/delete/archive candidates.
- No external mutation.
- No GitHub rename.
- No Vercel rename/delete.
- No Supabase rename.
- No local folder rename.

### Gate Rename-2: Homepage Duplicate Cleanup

Scope:

- Confirm `home.admate.ai.kr` is attached to `admate-homepage`.
- Confirm `admate-homepage-al13` has no custom domain and no unique env/deployment dependency.
- Delete `admate-homepage-al13` from Vercel only after final UI check.

Do not delete if:

- `home.admate.ai.kr` reappears under `admate-homepage-al13`.
- production smoke fails.
- another custom domain is attached.

### Gate Rename-3: Supabase Display Names

Scope:

- Rename `Admate-Vision` display name to `AdMate-Data-Core`.
- Optionally rename `Admate_AI_MMP` to `AdMate-Dryrun-MMP`.
- Do not change project ref, URL, database password, API keys, or connection strings.
- Update docs references after screenshots/confirmation.

Recommended first change:

```text
Admate-Vision -> AdMate-Data-Core
```

### Gate Rename-4: GitHub Repo Rename, Low-Risk Docs/Support Repos

Start with non-production or low-runtime repos:

| Current | Target |
|---|---|
| `Design-Director-Agent` | `admate-design-director` |
| `AdMate Creative Studio Agent` local only | `admate-creative-studio` local folder already has canonical GitHub remote |

For each repo:

1. Confirm local status clean.
2. Rename GitHub repo in GitHub UI.
3. Update local remote:

```powershell
git remote set-url origin https://github.com/Jhongjin/<target-repo>.git
git remote -v
git fetch origin
git status --short
```

4. Update docs references in `admate-docs`.

### Gate Rename-5: GitHub Repo Rename, Product Runtime Repos

Proceed one at a time:

| Product | Current GitHub | Target GitHub | Notes |
|---|---|---|---|
| Compass | `Jhongjin-admate-guide-codex` | `admate-compass` | Vercel project already named `admate-compass`; update linked repo after GitHub rename. |
| Lens | `admate-capture-pro` | `admate-lens` | Current local branch is not main; resolve branch status first. |
| Agent Core | `openclaw-monitor` | `admate-agent-core` | Highest blast radius. Do after Compass/Lens. |
| Ad-Sentinel legacy | `AdMate-Sentinel` | `admate-sentinel-legacy` | Only after confirming it is no longer active production. |

### Gate Rename-6: Vercel Project Rename And Link Check

Vercel projects already canonical:

- `admate-homepage`
- `admate-compass`
- `admate-lens`
- `admate-foresight`

Vercel rename candidates:

| Current | Target |
|---|---|
| `openclaw-monitor` | `admate-agent-core` |
| `admate-guide` | archive or legacy |

After each Vercel change:

- Confirm custom domain still works.
- Confirm GitHub repo link still points to correct repo.
- Confirm `.vercel/project.json` still has the same project ID or is intentionally relinked.
- Run production smoke.

### Gate Rename-7: Local Folder Rename

Only after GitHub/Vercel names are stable.

Suggested PowerShell approach:

```powershell
Rename-Item -LiteralPath "D:\Projects\Jhongjin-admate-guide-codex" -NewName "admate-compass"
Rename-Item -LiteralPath "D:\Projects\admate-capture-pro" -NewName "admate-lens"
Rename-Item -LiteralPath "D:\Projects\openclaw-monitor" -NewName "admate-agent-core"
Rename-Item -LiteralPath "D:\Projects\AdMate Foresight" -NewName "admate-foresight"
Rename-Item -LiteralPath "D:\Projects\AdMate Creative Studio Agent" -NewName "admate-creative-studio"
Rename-Item -LiteralPath "D:\Projects\Design Director Agent" -NewName "admate-design-director"
```

Do not run this blindly. Before each rename:

- Confirm no dev server is running from the old path.
- Confirm Git working tree state.
- Confirm no editor has unsaved files.
- Confirm Obsidian vault remains `D:\Projects\admate-docs`.

### Gate Rename-8: Documentation And Codex Project Cleanup

Update references:

- `admate-docs`
- product repo `AGENTS.md`
- README files
- handoff docs
- Obsidian links if any absolute paths exist
- Codex project labels by reopening the canonical local folders

Old Codex project entries can be removed only after the canonical folders are opened and verified.

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

Proceed in this order:

1. Commit this naming plan to `admate-docs`.
2. Finish Vercel duplicate cleanup for `admate-homepage-al13`.
3. Rename Supabase display `Admate-Vision` to `AdMate-Data-Core`.
4. Rename Design Director GitHub/local naming to `admate-design-director`.
5. Rename Creative Studio local folder to `admate-creative-studio`.
6. Rename Compass GitHub/local to `admate-compass`.
7. Rename Lens GitHub/local to `admate-lens` after branch state is safe.
8. Rename Openclaw/Sentinel repo/project only after a dedicated Agent Core naming review.

The most important decision is to treat `admate-agent-core` as the canonical technical name for the Openclaw/Hermes/Sentinel/Auth/Intelligence backend repo, while keeping the public-facing product name `AdMate Sentinel` for the monitoring/validation surface.

