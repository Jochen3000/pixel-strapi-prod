<template>
  <div>
    <h2>{{ post.data.attributes.title }}</h2>
    <div
      v-html="
        $mdRenderer.render(
          post.data.attributes.content.replace(
            /\/uploads/g,
            config.public.baseUrl + '/uploads'
          )
        )
      "
    />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const config = useRuntimeConfig();

const { data: post } = await useFetch(
  `${config.public.baseUrl}/api/posts/${id}?locale=all&populate=*`
);
</script>
