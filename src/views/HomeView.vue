<script lang="ts">
import WelcomeDialog from "@/components/WelcomeDialog.vue";
import CardWithourProject from "@/components/CardWithourProject.vue";
export default {
  components: {
    WelcomeDialog,
    CardWithourProject,
  },
  data: () => ({
    cardWithoutProject: {
      title: "",
      subtitle: "My name is Sergei Elsakov",
      content:
        "I am a Software developer with 3 years of working experience in implementing frontend and backend development for business needs. I have helped companies start or improve their digital solutions. A few years ago I started my career learning Python and Javascript. And now, mostly I work with React, TypeScript, Django, GraphQL, Redux, and Firebase. Also, I am a certified Google Cloud Associate Engineer. Let's check my projects!",
    },
    buttonText: "Start",
    dialog: true,
    path: "/projects/1",
  }),
  created() {
    this.$store.dispatch("fetchProjects");
  },
};
</script>

<template>
  <main>
    <div class="mainContentContainer">
      <WelcomeDialog v-if="!$store.state.guestName" />
      <CardWithourProject
        v-if="$store.state.guestName"
        :cardWithoutProject="cardWithoutProject"
        :buttonText="buttonText"
        :hasBackButton="false"
        :goForwardPath="path"
      />
    </div>
  </main>
</template>

<style>
.mainContentContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
}
</style>
