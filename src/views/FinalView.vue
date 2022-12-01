<script lang="ts">
import CardWithourProject from "@/components/CardWithourProject.vue";
export default {
  components: {
    CardWithourProject,
  },
  data: () => ({
    cardWithoutProject: {
      title: "That's all!",
      subtitle: "Thank you for your attention.",
      content:
        "One important point I want to add at the end is that learning new technologies is very important for me. I made this portfolio website as part of my study of Vue. In 2022, I received the Leveler of the Year award at the company where I work. I am inspired by modern front-end development. I hope that soon I will add projects here with React Native, Svelte, Astro, or Angular. Have a good day!",
    },
    buttonText: "Start again?",
    path: "/",
  }),
  methods: {},
};
</script>

<template>
  <main>
    <div class="mainContentContainer">
      <CardWithourProject
        :cardWithoutProject="cardWithoutProject"
        :buttonText="buttonText"
        :goForwardPath="path"
      />
    </div>
  </main>
</template>
