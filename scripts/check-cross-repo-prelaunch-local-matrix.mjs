import fs from 'node:fs'
import path from 'node:path'

const repoRoot = process.cwd()
const projectsRoot = path.resolve(repoRoot, '..')

const repos = [
  {
    label: 'Core/Sentinel',
    name: 'admate-agent-core',
    path: path.join(projectsRoot, 'admate-agent-core'),
  },
  {
    label: 'Compass',
    name: 'admate-compass',
    path: path.join(projectsRoot, 'admate-compass'),
  },
  {
    label: 'Homepage',
    name: 'admate-homepage',
    path: path.join(projectsRoot, 'admate-homepage'),
  },
  {
    label: 'Lens',
    name: 'admate-lens',
    path: path.join(projectsRoot, 'admate-lens'),
  },
  {
    label: 'Foresight',
    name: 'admate-foresight',
    path: path.join(projectsRoot, 'admate-foresight'),
  },
  {
    label: 'Creative Studio',
    name: 'admate-creative-studio',
    path: path.join(projectsRoot, 'admate-creative-studio'),
  },
]

const requiredScriptName = 'verify:prelaunch-local'

const forbiddenTerms = [
  'activation',
  'apply',
  'auth',
  'authenticated',
  'campaign',
  'env',
  'human',
  'import',
  'live',
  'n8n',
  'persist',
  'promote',
  'provider',
  'publish',
  'readback',
  'save',
  'sql',
]

function fail(message) {
  console.error(`[check-cross-repo-prelaunch-local-matrix] ${message}`)
  process.exitCode = 1
}

function readPackageJson(repo) {
  const packageJsonPath = path.join(repo.path, 'package.json')
  if (!fs.existsSync(packageJsonPath)) {
    fail(`${repo.label} (${repo.name}) missing package.json at ${packageJsonPath}`)
    return null
  }

  try {
    return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
  } catch (error) {
    fail(`${repo.label} (${repo.name}) package.json is not valid JSON: ${error.message}`)
    return null
  }
}

function commandSegments(command) {
  return String(command)
    .split(/\s*(?:&&|\|\||;)\s*/u)
    .map((segment) => segment.trim())
    .filter(Boolean)
}

function tokenize(segment) {
  const tokens = []
  const tokenPattern = /"([^"]*)"|'([^']*)'|([^\s]+)/gu
  let match
  while ((match = tokenPattern.exec(segment)) !== null) {
    tokens.push(match[1] ?? match[2] ?? match[3])
  }
  return tokens
}

function npmRunTargets(command) {
  const targets = []

  for (const segment of commandSegments(command)) {
    const tokens = tokenize(segment)
    if (tokens.length >= 3 && tokens[0] === 'npm' && tokens[1] === 'run') {
      targets.push(tokens[2])
    }
  }

  return targets
}

function nodeEntrypoints(command) {
  const entrypoints = []

  for (const segment of commandSegments(command)) {
    const tokens = tokenize(segment)
    if (tokens[0] !== 'node') {
      continue
    }

    let entrypoint = null
    for (const token of tokens.slice(1)) {
      if (token.startsWith('-')) {
        continue
      }
      entrypoint = token
      break
    }

    if (entrypoint && !entrypoint.startsWith('node:') && !entrypoint.startsWith('-')) {
      entrypoints.push(entrypoint)
    }
  }

  return entrypoints
}

function assertNoForbiddenTerms(repo, scriptName, command) {
  const haystack = `${scriptName} ${command}`.toLowerCase()
  const hits = forbiddenTerms.filter((term) => haystack.includes(term))
  if (hits.length > 0) {
    fail(
      `${repo.label} (${repo.name}) ${scriptName} contains forbidden live/human-gated term(s): ${hits.join(', ')}`,
    )
  }
}

function assertNodeEntrypointsExist(repo, scriptName, command) {
  for (const entrypoint of nodeEntrypoints(command)) {
    if (!entrypoint.includes('/') && !entrypoint.includes('\\')) {
      continue
    }

    const target = path.resolve(repo.path, entrypoint)
    if (!fs.existsSync(target)) {
      fail(`${repo.label} (${repo.name}) ${scriptName} references missing node entrypoint: ${entrypoint}`)
    }
  }
}

let checkedRepos = 0
let checkedDirectTargets = 0

for (const repo of repos) {
  if (!fs.existsSync(repo.path)) {
    fail(`${repo.label} (${repo.name}) repo folder is missing: ${repo.path}`)
    continue
  }

  const packageJson = readPackageJson(repo)
  if (!packageJson) {
    continue
  }

  const scripts = packageJson.scripts ?? {}
  const verifyCommand = scripts[requiredScriptName]

  if (typeof verifyCommand !== 'string' || verifyCommand.trim() === '') {
    fail(`${repo.label} (${repo.name}) missing package script ${requiredScriptName}`)
    continue
  }

  checkedRepos += 1
  assertNoForbiddenTerms(repo, requiredScriptName, verifyCommand)
  assertNodeEntrypointsExist(repo, requiredScriptName, verifyCommand)

  for (const targetName of npmRunTargets(verifyCommand)) {
    const targetCommand = scripts[targetName]
    if (typeof targetCommand !== 'string' || targetCommand.trim() === '') {
      fail(`${repo.label} (${repo.name}) ${requiredScriptName} references missing package script: ${targetName}`)
      continue
    }

    checkedDirectTargets += 1
    assertNoForbiddenTerms(repo, targetName, targetCommand)
    assertNodeEntrypointsExist(repo, targetName, targetCommand)
  }
}

if (!process.exitCode) {
  console.log(
    `[check-cross-repo-prelaunch-local-matrix] ok (${checkedRepos} repos, ${checkedDirectTargets} direct npm-run targets)`,
  )
}
