import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const indexPath = path.join(root, 'INDEX.md')

function fail(message) {
  console.error(`[check-doc-index] ${message}`)
  process.exitCode = 1
}

if (!fs.existsSync(indexPath)) {
  fail('INDEX.md is missing')
  process.exit()
}

const index = fs.readFileSync(indexPath, 'utf8')
const docRefs = [...index.matchAll(/(?:^|\n)\s*[-*]\s+([^\n`]+?\.md)\s*$/g)]
  .map(match => match[1].trim())
  .filter(ref => !/^https?:\/\//i.test(ref))

if (docRefs.length === 0) {
  fail('No markdown file references found in INDEX.md')
}

for (const ref of docRefs) {
  const resolved = path.join(root, ref.replaceAll('/', path.sep))
  if (!fs.existsSync(resolved)) {
    fail(`Missing indexed file: ${ref}`)
  }
}

if (!process.exitCode) {
  console.log(`[check-doc-index] ok (${docRefs.length} indexed markdown files)`)
}
