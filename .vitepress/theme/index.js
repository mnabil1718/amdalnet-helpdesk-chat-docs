// ReadMe keeps page titles in frontmatter, not in the Markdown body.
// This shows the title (and excerpt) at the top of every page.
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import PageTitle from './PageTitle.vue'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-before': () => h(PageTitle) }),
}
