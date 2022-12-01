/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import store from "@/store";
import App from "./App.vue";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "./assets/main.css";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.provide("$store", store);
app.use(router).use(vuetify).use(store);

app.mount("#app");
