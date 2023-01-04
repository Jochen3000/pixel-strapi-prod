<template>
  <div>
    <h2>{{ post.data.attributes.title }}</h2>
    <img
      v-if="post.data.attributes.image.data"
      :src="
        config.public.baseUrl + post.data.attributes.image.data.attributes.url
      "
      loading="lazy"
      sizes="(max-width: 479px) 39vw, 160px"
      alt=""
      className="image"
    />
    <h4>{{ post.data.attributes.teaser }}</h4>
    <div
      v-html="
        post.data.attributes.content.replace(
          /\/uploads/g,
          config.public.baseUrl + '/uploads'
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
