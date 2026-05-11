import fs from 'node:fs'
import path from 'node:path'

const repoRoot = process.cwd()
const projectsRoot = path.resolve(repoRoot, '..')

const repos = [
  {
    name: 'admate-docs',
    path: repoRoot,
    required: [
      'AGENTS.md',
      'README.md',
      'INDEX.md',
      'harness/03_Deterministic_vs_Nondeterministic_Work_Rules_v1.md',
      'skills-catalog',
      'scripts/check-doc-index.mjs',
      'scripts/check-skill-catalog.mjs',
      'scripts/check-repo-harness-coverage.mjs',
    ],
  },
  {
    name: 'admate-homepage',
    path: path.join(projectsRoot, 'admate-homepage'),
    required: [
      'AGENTS.md',
      'README.md',
      '.ai/MEMORY.md',
      '.ai/PLAN.md',
      '.ai/RULES.md',
      '.ai/DETERMINISTIC.md',
      '.agents/skills/admate-homepage-command-center/SKILL.md',
      'scripts/check-command-center-contract.mjs',
      'scripts/smoke-command-center.mjs',
    ],
  },
  {
    name: 'admate-capture-pro',
    path: path.join(projectsRoot, 'admate-capture-pro'),
    optional: true,
    replacedBy: 'admate-lens',
    required: [
      'AGENTS.md',
      'README.md',
      '.ai/MEMORY.md',
      '.ai/PLAN.md',
      '.ai/RULES.md',
      '.ai/DETERMINISTIC.md',
      '.agents/skills/lens-capture-fidelity-qa/SKILL.md',
      'scripts/check-surface-registry.mjs',
      'scripts/check-capture-output-metadata.mjs',
      'scripts/check-capture-dimensions.mjs',
    ],
  },
  {
    name: 'admate-lens',
    path: path.join(projectsRoot, 'admate-lens'),
    required: [
      'AGENTS.md',
      'README.md',
      '.agents/skills/lens-capture-fidelity-qa/SKILL.md',
      '.agents/skills/lens-gdn-capture-builder/SKILL.md',
      '.agents/skills/lens-mobile-native-capture-builder/SKILL.md',
      '.agents/skills/lens-youtube-capture-builder/SKILL.md',
      'scripts/check-surface-registry.mjs',
      'scripts/check-capture-output-metadata.mjs',
      'scripts/check-golden-manifest.mjs',
      'scripts/check-golden-metadata.mjs',
      'scripts/check-golden-dimensions.mjs',
    ],
  },
  {
    name: 'openclaw-monitor',
    path: path.join(projectsRoot, 'openclaw-monitor'),
    optional: true,
    replacedBy: 'admate-agent-core',
    required: [
      'AGENTS.md',
      'README.md',
      '.ai/MEMORY.md',
      '.ai/PLAN.md',
      '.ai/RULES.md',
      '.ai/DETERMINISTIC.md',
      '.agents/skills/openclaw-agent-core/SKILL.md',
      'scripts/check-command-center-contract.mjs',
      'scripts/check-public-api-redaction.mjs',
      'scripts/check-n8n-workflow-secrets.mjs',
    ],
  },
  {
    name: 'admate-agent-core',
    path: path.join(projectsRoot, 'admate-agent-core'),
    required: [
      'AGENTS.md',
      'README.md',
      '.agents/skills/openclaw-agent-core/SKILL.md',
      'scripts/check-command-center-contract.mjs',
      'scripts/check-public-api-redaction.mjs',
      'scripts/check-n8n-workflow-secrets.mjs',
      'scripts/check-api-guards.mjs',
      'scripts/check-secrets.mjs',
      'scripts/verify-security.mjs',
    ],
  },
  {
    name: 'Jhongjin-admate-guide-codex',
    path: path.join(projectsRoot, 'Jhongjin-admate-guide-codex'),
    optional: true,
    replacedBy: 'admate-compass',
    required: [
      'AGENTS.md',
      'README.md',
      '.ai/MEMORY.md',
      '.ai/PLAN.md',
      '.ai/RULES.md',
      '.ai/DETERMINISTIC.md',
      '.agents/skills/admate-compass-rag/SKILL.md',
      'scripts/check-rag-contract.mjs',
      'scripts/check-rag-source-quality.mjs',
      'scripts/check-admin-debug-surface.mjs',
    ],
  },
  {
    name: 'admate-compass',
    path: path.join(projectsRoot, 'admate-compass'),
    required: [
      'AGENTS.md',
      'README.md',
      '.agents/skills/admate-compass-rag/SKILL.md',
      'scripts/check-rag-contract.mjs',
      'scripts/check-rag-source-quality.mjs',
      'scripts/check-admin-debug-surface.mjs',
      'scripts/check-nodata-boundary-fixtures.mjs',
    ],
  },
]

function fail(message) {
  console.error(`[check-repo-harness-coverage] ${message}`)
  process.exitCode = 1
}

let activeRepoCount = 0
let optionalSkippedCount = 0

for (const repo of repos) {
  if (!fs.existsSync(repo.path)) {
    if (repo.optional) {
      optionalSkippedCount += 1
      console.log(
        `[check-repo-harness-coverage] skipped optional historical repo ${repo.name}` +
          (repo.replacedBy ? ` (replaced by ${repo.replacedBy})` : '') +
          `: ${repo.path}`,
      )
      continue
    }
    fail(`${repo.name} repo folder is missing: ${repo.path}`)
    continue
  }

  activeRepoCount += repo.optional ? 0 : 1

  for (const required of repo.required) {
    const target = path.join(repo.path, required.replaceAll('/', path.sep))
    if (!fs.existsSync(target)) {
      if (repo.optional) {
        console.log(`[check-repo-harness-coverage] optional historical repo ${repo.name} missing ${required}`)
        continue
      }
      fail(`${repo.name} missing ${required}`)
    }
  }
}

if (!process.exitCode) {
  console.log(
    `[check-repo-harness-coverage] ok (${activeRepoCount} active repos, ${optionalSkippedCount} optional skipped)`,
  )
}
