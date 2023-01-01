<template>
  <div class="strapline">blog</div>
  <h2 class="center">Latest articles</h2>
  <div class="teaserblockcontainer">
    <div v-for="post in posts.data" class="smallteaser">
      <NuxtLink :to="`/blog/${post.id}`">
        <img
          v-if="post.attributes.image.data"
          :src="
            config.public.baseUrl +
            post.attributes.image.data.attributes.formats.medium.url
          "
          loading="lazy"
          sizes="(max-width: 479px) 39vw, 160px"
          alt=""
          className="image"
        />
        <div class="teaserheadline"></div>
        <h3 class="h3-small-teaser">
          {{ post.attributes.title }}
        </h3>
        <p class="para-teaser-small">
          {{ post.attributes.teaser }}
        </p>
        <div class="teaser-small-more">
          <div class="teaser-text-link">Read article</div>
          <img
            src="images/arrow-full-right.svg"
            loading="lazy"
            width="14"
            height="14"
            alt="arrow right"
            class="arrowlink"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: posts } = await useFetch(
  `${config.public.baseUrl}/api/posts?locale=all&populate=*`
);
</script>
