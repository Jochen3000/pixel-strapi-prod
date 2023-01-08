<template>
  <div class="page-container w-container">
    <div class="articlehead wf-section">
      <div class="containerinner blog">
        <div class="subtitle">{{ post.data.attributes.description }}</div>
        <h1 class="center">{{ post.data.attributes.title }}</h1>
        <p class="center">
          {{ post.data.attributes.teaser }}
        </p>
        <div class="postmeta">
          <img
            src="/images/jochen-photo-bw-lighter.jpg"
            loading="lazy"
            alt="Author image"
            class="blogauthorimage"
          />
          <div class="postauthor">Jochen Ade</div>
          <div class="text-block-2">|</div>
          <div class="postdate">{{ post.data.attributes.createdAt }}</div>
        </div>
      </div>
    </div>
    <div class="contentsection wf-section">
      <div class="containerinner blog">
        <img
          v-if="post.data.attributes.image.data"
          :src="
            config.public.baseUrl +
            post.data.attributes.image.data.attributes.url
          "
          loading="lazy"
          :alt="post.data.attributes.title"
        />
        <div class="affiliatedisclosure">
          Hinweis: Wir verwenden manchmal Affiliate-Links, was bedeutet, dass
          wir möglicherweise eine Provision erhalten.
        </div>
      </div>
    </div>
    <div class="blogcontent">
      <div class="container">
        <div class="blog-grid">
          <BlogSidebar />
          <!-- <div id="content" class="content-right_blog">
            <div class="rich-text w-richtext">
              <div
                v-html="
                  post.data.attributes.content.replace(
                    /\/uploads/g,
                    config.public.baseUrl + '/uploads'
                  )
                "
              />
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <!-- DATA SECTION -->
  <div></div>
</template>

<script setup>
const { id } = useRoute().params;
const config = useRuntimeConfig();

const { data: post } = await useFetch(
  `${config.public.baseUrl}/api/posts/${id}?locale=all&populate=*`
);
</script>
