<script setup lang="ts">
const markdownString = "# Markdwon-it in Nuxt3";
</script>

<template>
  <h2>Hallo</h2>
  <section
    class="prose prose-gray text-sm"
    v-html="$mdRenderer.render(markdownString)"
  />
</template>
