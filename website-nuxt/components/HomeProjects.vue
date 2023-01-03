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
    <div class="projectdescription">
      <div class="project-intro" v-if="showProjectOverview === true">
        <div class="teaserheadline">
          <h3 class="h3-teaser">
            My project portfolio includes websites and applications for larger
            companies, start-ups and non-profit organizations.
          </h3>
        </div>
        <p>
          Depending on the task, different tools and technologies are used. Here
          is a selection.
        </p>
      </div>
      <div v-for="(project, index) in projects.data">
        <div class="project" v-if="index === selectedItemIndex">
          <div class="teaserheadline">
            <h3 class="h3-teaser">{{ project.attributes.title }}</h3>
          </div>
          <p class="paragraph-2">
            Website for product coaching companies. Product innovation, less
            risky, faster and with more fun.
          </p>
          <div class="project-tags">
            <div class="tag">
              <img
                src="images/tag-icon.svg"
                loading="lazy"
                alt=""
                class="skill-icon"
              />
              <div class="text-block-5">ux</div>
            </div>
            <div class="tag">
              <img
                src="images/tag-icon.svg"
                loading="lazy"
                alt=""
                class="skill-icon"
              />
              <div class="text-block-5">figma</div>
            </div>
            <div class="tag">
              <img
                src="images/tag-icon.svg"
                loading="lazy"
                alt=""
                class="skill-icon"
              />
              <div class="text-block-5">css</div>
            </div>
            <div class="tag">
              <img
                src="images/tag-icon.svg"
                loading="lazy"
                alt=""
                class="skill-icon"
              />
              <div class="text-block-5">js</div>
            </div>
          </div>
          <a href="https://podojo.com" class="view-project w-inline-block"
            ><img
              src="images/link-chevron.svg"
              loading="lazy"
              alt=""
              class="link-chevron"
            />
            <div class="linktext">podojo website</div>
          </a>
        </div>
      </div>
    </div>
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
};

const showOverview = () => {
  showProjectOverview.value = true;
  selectedItemIndex.value = null;
};
</script>
