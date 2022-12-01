<script lang="ts">
import type { Project } from "@/types/main";
import type { PropType } from "vue";
import { format } from "date-fns";
export default {
  props: {
    currentProject: {
      type: Object as PropType<Project>,
      required: true,
    },
    goForwardPath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showVideo: false,
    };
  },
  methods: {
    getFormattedDate: (date: Date) => {
      return format(date, "dd.MM.yyyy");
    },
  },
};
</script>

<template>
  <v-card max-width="90%" width="500" v-show="currentProject" class="card">
    <v-card-item>
      <div>
        <div class="text-body">
          <a :href="currentProject.projectLink" target="_blank" rel="noopener noreferrer">{{
            currentProject.projectLink
          }}</a>
        </div>
        <div class="text-h5 mb-1">{{ currentProject.name }}</div>
        <div class="text-caption">{{ currentProject.description }}</div>
      </div>
      <div class="showButtonWrapper" v-if="currentProject.videoURL">
        <v-btn
          size="small"
          :prepend-icon="showVideo ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="showVideo = !showVideo"
          >Show video</v-btn
        >
      </div>
      <v-expand-transition>
        <div v-show="showVideo">
          <iframe
            v-if="currentProject.videoURL"
            width="100%"
            height="200"
            :src="currentProject.videoURL"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </v-expand-transition>
      <div v-if="currentProject.steps">
        <div class="font-weight-bold ml-1 mb-2" :style="{ 'margin-top': '16px' }">Today</div>

        <v-timeline density="compact" align="start">
          <v-timeline-item
            v-for="(message, index) in currentProject.steps"
            :key="message.dateTime.seconds"
            :dot-color="index % 2 === 0 ? '#EB6440' : '#497174'"
            size="x-small"
          >
            <div class="mb-4">
              <div class="font-weight-normal">
                <strong>{{ message.title }}</strong> @{{
                  getFormattedDate(new Date(message.dateTime.seconds * 1000))
                }}
              </div>
              <div>{{ message.description }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn variant="outlined" @click="$router.go(-1)"> Back </v-btn>
      <v-btn variant="outlined" @click="$router.push(`${goForwardPath}`)">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
iframe {
  margin-top: 16px;
}

.showButtonWrapper {
  margin: 8px 0;
}

.showButton {
  width: 25px;
  height: 25px;
  margin-left: 16px;
}
</style>
