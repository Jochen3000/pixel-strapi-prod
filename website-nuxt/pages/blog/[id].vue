<template>
  <div>
    <h2>{{ post.data.attributes.title }}</h2>
    <div
      v-html="
        $mdRenderer.render(
          post.data.attributes.content.replace(
            '/uploads',
            'http://localhost:1337/uploads'
          )
        )
      "
    />
    <b>{{ myData }}</b>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const { data: post } = await useFetch(
  `http://localhost:1337/api/posts/${id}?locale=all&populate=*`
);

const myData = ref("Hallo");
</script>
