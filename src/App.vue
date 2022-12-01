<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <v-app class="container">
    <RouterView />
  </v-app>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #eff5f5;
}
</style>
