<template>
  <div>
    <h2>{{ post.data.attributes.title }}</h2>
    <div
      v-html="
        $mdRenderer.render(
          post.data.attributes.content.replace(
            /\/uploads/g,
            cmsUrl + '/uploads'
          )
        )
      "
    />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const config = useRuntimeConfig();
const cmsUrl = process.env.API_BASE_URL;

const { data: post } = await useFetch(
  `${cmsUrl}/api/posts/${id}?locale=all&populate=*`
);
</script>
