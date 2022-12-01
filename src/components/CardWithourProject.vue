<script lang="ts">
import type { PropType } from "vue";
import { format } from "date-fns";

type CardWithoutProject = {
  title: string;
  subtitle: string;
  content: string;
};

export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    cardWithoutProject: {
      type: Object as PropType<CardWithoutProject>,
      required: false,
    },
    hasBackButton: {
      type: Boolean,
      required: false,
      default: true,
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
  <v-card max-width="90%" width="500" v-show="cardWithoutProject">
    <v-card-item>
      <div>
        <div class="text-h6">
          {{
            cardWithoutProject?.title
              ? cardWithoutProject?.title
              : "Hello, " + $store.state.guestName
          }}
        </div>
        <div class="text-h5 mb-1">{{ cardWithoutProject?.subtitle }}</div>
        <div class="text-caption">
          {{ cardWithoutProject?.content }}
        </div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="hasBackButton" variant="outlined" @click="$router.go(-1)">Back</v-btn>
      <v-btn variant="outlined" @click="$router.push(`${goForwardPath}`)"> {{ buttonText }} </v-btn>
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
