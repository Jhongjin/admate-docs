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
    name: 'openclaw-monitor',
    path: path.join(projectsRoot, 'openclaw-monitor'),
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
    name: 'Jhongjin-admate-guide-codex',
    path: path.join(projectsRoot, 'Jhongjin-admate-guide-codex'),
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
]

function fail(message) {
  console.error(`[check-repo-harness-coverage] ${message}`)
  process.exitCode = 1
}

for (const repo of repos) {
  if (!fs.existsSync(repo.path)) {
    fail(`${repo.name} repo folder is missing: ${repo.path}`)
    continue
  }

  for (const required of repo.required) {
    const target = path.join(repo.path, required.replaceAll('/', path.sep))
    if (!fs.existsSync(target)) {
      fail(`${repo.name} missing ${required}`)
    }
  }
}

if (!process.exitCode) {
  console.log(`[check-repo-harness-coverage] ok (${repos.length} repos)`)
}
