<template>
  <h2>Blog</h2>
  <div v-for="post in posts.data">
    <NuxtLink :to="`/blog/${post.id}`">
      <h5>
        {{ post.attributes.title }}
      </h5>
    </NuxtLink>
    <p>
      {{ post.attributes.teaser }}
    </p>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: posts } = await useFetch(
  `${config.public.baseUrl}/api/posts?locale=all&fields[0]=title&fields[1]=teaser`
);
</script>
