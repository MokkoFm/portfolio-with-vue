<script lang="ts">
import ContentCard from "@/components/ContentCard.vue";
import type { Project } from "@/types/main";

export default {
  components: {
    ContentCard,
  },
  data: () => ({
    currentProject: {} as Project | undefined,
  }),
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        window.scrollTo(0, 0);
        this.getCurrentProject();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true },
    );
  },
  methods: {
    getCurrentProject: function () {
      this.currentProject = this.$store.state.projects.filter(
        (project: Project) => project.order === Number(this.$route.params.id),
      )[0];
    },
  },
};
</script>

<template>
  <main>
    <div class="projectWrapper">
      <ContentCard
        v-if="currentProject"
        :currentProject="currentProject"
        :goForwardPath="
          currentProject?.order < $store.state.projects.length
            ? `/projects/${currentProject?.order + 1}`
            : '/thank-you'
        "
      />
    </div>
  </main>
</template>
