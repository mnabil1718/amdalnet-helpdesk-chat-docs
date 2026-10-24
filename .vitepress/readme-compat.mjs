// Converts ReadMe-specific Markdown/MDX into things VitePress understands,
// before the Markdown is parsed:
//   <Callout theme="warn">### Title ...</Callout>  -> ::: warning Title
//   > 📘 Title (legacy blockquote callouts)          -> ::: info Title
//   <Anchor href="...">text</Anchor>                -> <a href="...">text</a>
//   <Image src="..." />                             -> <img src="..." />
//   <Accordion title="...">...</Accordion>          -> ::: details ...

const THEMES = {
  info: 'info', default: 'info',
  warn: 'warning', warning: 'warning',
  error: 'danger', danger: 'danger',
  okay: 'tip', success: 'tip', tip: 'tip',
}

const EMOJI_THEMES = {
  '📘': 'info', 'ℹ️': 'info',
  '👍': 'tip', '✅': 'tip',
  '🚧': 'warning', '⚠️': 'warning',
  '❗️': 'danger', '❗': 'danger', '🛑': 'danger',
}

const attr = (attrs, name) =>
  attrs.match(new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\\{["']([^"']*)["']\\})`))
    ?.slice(1).find((v) => v !== undefined)

// Remove common leading indentation (MDX bodies are often indented)
function dedent(text) {
  const lines = text.replace(/^\n+|\s+$/g, '').split('\n')
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length)
  const min = indents.length ? Math.min(...indents) : 0
  return lines.map((l) => l.slice(min)).join('\n')
}

const isEmoji = (s) => !!s && /\p{Extended_Pictographic}/u.test(s)

function container(type, title, body) {
  // Longer fence if the body has its own containers
  const fence = body.includes(':::') ? '::::' : ':::'
  return `\n${fence} ${type}${title ? ' ' + title : ''}\n${body}\n${fence}\n`
}

// Pull a leading "### Title" line out of a callout body
function splitTitle(body) {
  const m = body.match(/^#{1,6}\s+(.+?)\s*#*\s*(?:\n|$)/)
  return m ? [m[1], body.slice(m[0].length).replace(/^\n+/, '')] : ['', body]
}

export function transformReadme(src) {
  let out = src

  // <Callout icon="⚠️" theme="warn"> ... </Callout>
  out = out.replace(/<Callout\b([^>]*)>([\s\S]*?)<\/Callout>/g, (_, attrs, inner) => {
    const type = THEMES[attr(attrs, 'theme')] || 'info'
    const icon = attr(attrs, 'icon')
    let [title, body] = splitTitle(dedent(inner))
    if (isEmoji(icon)) title = `${icon} ${title || ''}`.trim()
    return container(type, title, body)
  })

  // Legacy:  > 📘 Title\n>\n> body
  out = out.replace(/^(?:>[^\n]*(?:\n|$))+/gm, (block) => {
    const lines = block.replace(/\n$/, '').split('\n').map((l) => l.replace(/^>\s?/, ''))
    const first = lines[0].trim()
    const emoji = Object.keys(EMOJI_THEMES).find((e) => first.startsWith(e))
    if (!emoji) return block
    const title = first.slice(emoji.length).trim()
    const body = lines.slice(1).join('\n').replace(/^\n+/, '')
    return container(EMOJI_THEMES[emoji], `${emoji} ${title}`.trim(), body)
  })

  // <Accordion title="..."> ... </Accordion>
  out = out.replace(/<Accordion\b([^>]*)>([\s\S]*?)<\/Accordion>/g, (_, attrs, inner) =>
    container('details', attr(attrs, 'title') || 'Detail', dedent(inner))
  )

  // Wrappers that only group children
  out = out.replace(/<\/?AccordionGroup\b[^>]*>/g, '')

  // <Anchor ...>text</Anchor> -> <a ...>text</a>
  out = out
    .replace(/<Anchor\b([^>]*)>/g, (_, a) => `<a${a.replace(/\slabel=("[^"]*"|'[^']*')/, '')}>`)
    .replace(/<\/Anchor>/g, '</a>')

  // <Image src="..." ... /> -> <img ... />
  out = out
    .replace(/<Image\b([^>]*?)\/?>/g, (_, a) => {
      const src = attr(a, 'src') || ''
      const alt = attr(a, 'alt') || attr(a, 'caption') || ''
      const width = attr(a, 'width')
      return `<img src="${src}" alt="${alt}"${width ? ` width="${width}"` : ''} />`
    })
    .replace(/<\/Image>/g, '')

  return out
}

// markdown-it plugin: rewrite the source before VitePress parses it
export default function readmeCompat(md) {
  md.core.ruler.before('normalize', 'readme-compat', (state) => {
    state.src = transformReadme(state.src)
  })
}
