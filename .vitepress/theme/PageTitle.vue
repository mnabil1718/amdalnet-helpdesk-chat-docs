<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.title" class="rm-head">
    <h1 class="rm-title">{{ frontmatter.title }}</h1>
    <p v-if="frontmatter.excerpt" class="rm-excerpt">{{ frontmatter.excerpt }}</p>
  </div>
</template>

<style>
.rm-head { margin-bottom: 24px; }
.rm-title { font-size: 32px; font-weight: 700; line-height: 1.25; letter-spacing: -0.02em; }
.rm-excerpt { margin-top: 8px; color: var(--vp-c-text-2); font-size: 16px; }
</style>
