import { Store } from "vuex";
import type { Project } from "./src/types/main";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    guestName: string;
    projects: Project[];
    isProjectsLoading: boolean;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
