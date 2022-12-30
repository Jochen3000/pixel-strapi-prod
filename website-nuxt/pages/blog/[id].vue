<template>
  <div>
    <h2>{{ post.data.attributes.title }}</h2>
    <div>{{ post.data.attributes.content }}</div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const { data: post } = await useFetch(
  `http://localhost:1337/api/posts/${id}?locale=all&populate=*`
);
</script>
