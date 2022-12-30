<template>
  <h2>Blog</h2>
  <div v-for="post in posts.data">
    <NuxtLink :to="`/blog/${post.id}`">
      {{ post.attributes.title }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { data: posts } = await useFetch(
  "http://localhost:1337/api/posts?locale=all&populate=*"
);
</script>
 