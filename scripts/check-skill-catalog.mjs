import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const catalog = path.join(root, 'skills-catalog')
const namePattern = /^[a-z0-9-]{1,63}$/

function fail(message) {
  console.error(`[check-skill-catalog] ${message}`)
  process.exitCode = 1
}

function parseFrontmatter(text, file) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) {
    fail(`${file} is missing YAML frontmatter`)
    return {}
  }

  const result = {}
  for (const line of match[1].split(/\r?\n/)) {
    const parts = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (parts) result[parts[1]] = parts[2].replace(/^["']|["']$/g, '').trim()
  }
  return result
}

if (!fs.existsSync(catalog)) {
  fail('skills-catalog folder is missing')
  process.exit()
}

const skillDirs = fs.readdirSync(catalog, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)
  .sort()

if (skillDirs.length === 0) fail('No skill directories found')

for (const dir of skillDirs) {
  const skillPath = path.join(catalog, dir, 'SKILL.md')
  if (!fs.existsSync(skillPath)) {
    fail(`${dir}/SKILL.md is missing`)
    continue
  }

  const text = fs.readFileSync(skillPath, 'utf8')
  const frontmatter = parseFrontmatter(text, `${dir}/SKILL.md`)

  if (!frontmatter.name) fail(`${dir}/SKILL.md missing name`)
  if (!frontmatter.description) fail(`${dir}/SKILL.md missing description`)
  if (frontmatter.name && !namePattern.test(frontmatter.name)) {
    fail(`${dir}/SKILL.md has invalid name: ${frontmatter.name}`)
  }
  if (frontmatter.name && frontmatter.name !== dir) {
    fail(`${dir}/SKILL.md name does not match folder (${frontmatter.name})`)
  }
  if (frontmatter.description && frontmatter.description.length < 40) {
    fail(`${dir}/SKILL.md description is too short`)
  }
}

if (!process.exitCode) {
  console.log(`[check-skill-catalog] ok (${skillDirs.length} skills)`)
}
