<template>
  <div class="strapline">showcase</div>
  <h2 class="center">Projekte</h2>
  <div class="projectsblockcontainer">
    <div class="projectsdisplay">
      <div class="browser-bar" v-on:click="showOverview">
        <img src="images/light.svg" loading="lazy" alt="" class="safari" />
      </div>
      <div class="screencontainer">
        <div class="screenstartpage">
          <!-- Projects Display -->
          <div class="favouitesitesblock">
            <div
              v-for="(project, index) in projects.data"
              v-on:click="showDetails(index)"
              class="favouriteproject"
            >
              <!-- Overview -->
              <div v-if="showProjectOverview === true">
                <img
                  :src="
                    config.public.baseUrl +
                    project.attributes.preview_image.data.attributes.formats
                      .medium.url
                  "
                  loading="lazy"
                  sizes="(max-width: 479px) 39vw, 160px"
                  alt=""
                  className="image"
                />
                <div class="text-block-3">{{ project.attributes.title }}</div>
              </div>
              <!-- Details -->
              <div class="project-container" v-if="index === selectedItemIndex">
                <img
                  :src="
                    config.public.baseUrl +
                    project.attributes.preview_image.data.attributes.formats
                      .medium.url
                  "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="loading-wrapper">
          <div class="loading-bar"></div>
        </div>
      </div>
    </div>
    <ProjectsDescription />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const showProjectOverview = ref(true);
const selectedItemIndex = ref(null);

const { data: projects } = await useFetch(
  `${config.public.baseUrl}/api/projects?locale=all&populate=*`
);

const showDetails = (index) => {
  showProjectOverview.value = false;
  selectedItemIndex.value = index;
  console.log(index);
};

const showOverview = () => {
  showProjectOverview.value = true;
  selectedItemIndex.value = null;
};
</script>
