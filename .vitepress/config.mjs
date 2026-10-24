// VitePress config for a ReadMe Git-synced repo.
// Builds the sidebar from docs/_order.yaml and each category's _order.yaml,
// so the site always matches the order you set in ReadMe.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import readmeCompat from './readme-compat.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'docs')

// ---- Change these ----
const SITE_TITLE = 'Panduan Fitur'
const SITE_DESCRIPTION = 'Dokumentasi panduan fitur'
// ----------------------

const unquote = (s) => s.replace(/^['"]|['"]$/g, '')

function readOrder(dir) {
  const file = path.join(dir, '_order.yaml')
  if (!fs.existsSync(file)) return []
  return fs
    .readFileSync(file, 'utf8')
    .split('\n')
    .map((line) => line.match(/^\s*-\s*(.+?)\s*$/)?.[1])
    .filter(Boolean)
    .map(unquote)
}

// Items listed in _order.yaml first, anything unlisted after, alphabetically.
// Matches by exact name or by slug, so "getting-started" in _order.yaml
// matches a folder called "Getting Started".
function ordered(dir, items) {
  const listed = []
  for (const entry of readOrder(dir)) {
    const match =
      items.find((i) => i === entry) ||
      items.find((i) => slugify(i) === slugify(entry))
    if (match && !listed.includes(match)) listed.push(match)
  }
  return [...listed, ...items.filter((i) => !listed.includes(i)).sort()]
}

function frontmatter(file) {
  const m = fs.readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const fm = {}
  if (!m) return fm
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/)
    if (kv) fm[kv[1]] = unquote(kv[2].trim())
  }
  return fm
}

const slugify = (s) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const rewrites = {}
const sidebar = []
const hidden = []

const categories = ordered(
  SRC,
  fs
    .readdirSync(SRC, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
    .map((d) => d.name)
)

for (const cat of categories) {
  const dir = path.join(SRC, cat)
  const pages = ordered(
    dir,
    fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3))
  )
  const items = []
  for (const page of pages) {
    const src = `${cat}/${page}.md`
    const fm = frontmatter(path.join(dir, `${page}.md`))
    if (fm.hidden === 'true') {
      hidden.push(src)
      continue
    }
    // Clean URLs: "Pengguna Publik/notifikasi-email" -> "/pengguna-publik/notifikasi-email"
    const target = `${slugify(cat)}/${page}.md`
    rewrites[src] = target
    items.push({ text: fm.title || page, link: '/' + target.slice(0, -3) })
  }
  if (items.length) sidebar.push({ text: cat, collapsed: false, items })
}

// The first page becomes the home page
const firstSrc = Object.keys(rewrites)[0]
if (firstSrc) {
  rewrites[firstSrc] = 'index.md'
  sidebar[0].items[0].link = '/'
}

export default defineConfig({
  // GitHub Pages serves the site at /<repo-name>/; the deploy workflow sets this
  base: process.env.VITEPRESS_BASE || '/',
  srcDir: 'docs',
  srcExclude: ['**/_order.yaml', ...hidden],
  rewrites,
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  lang: 'id-ID',
  cleanUrls: true,
  lastUpdated: true,
  // ReadMe-style internal links (e.g. doc:slug) don't resolve here; don't fail the build
  ignoreDeadLinks: true,
  markdown: {
    // Render ReadMe callouts, Anchor/Image components, accordions
    config: (md) => md.use(readmeCompat),
  },
  themeConfig: {
    sidebar,
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'Di halaman ini' },
    docFooter: { prev: 'Sebelumnya', next: 'Berikutnya' },
    lastUpdated: { text: 'Terakhir diperbarui' },
    returnToTopLabel: 'Kembali ke atas',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tema',
  },
})
