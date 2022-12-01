import { createStore } from "vuex";
import { db } from "@/firebaseInit";
import { collection, query, getDocs } from "@firebase/firestore";
import type { Project } from "@/types/main";

export type State = {
  guestName: string;
  projects: Project[];
  isProjectsLoading: boolean;
};

const state: State = {
  guestName: "",
  projects: [],
  isProjectsLoading: false,
};

export default createStore({
  state,
  mutations: {
    setName(state, name) {
      state.guestName = name;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setLoading(state, bool) {
      state.isProjectsLoading = bool;
    },
  },
  actions: {
    async fetchProjects({ commit }) {
      commit("setLoading", true);
      const projectsRef = collection(db, "projects");
      const projectsQuery = query(projectsRef);

      const querySnapshot = await getDocs(projectsQuery);
      const projectsFb: Project[] = [];
      querySnapshot.forEach(doc => {
        projectsFb.push({
          id: doc.id,
          description: doc.data().description,
          name: doc.data().name,
          projectLink: doc.data().projectLink,
          order: doc.data().order,
          steps: doc.data().steps.reverse(),
          videoURL: doc.data().videoURL,
        });
      });
      commit("setProjects", projectsFb);
      //   this.currentProject = projectsFb.find(
      //     (project: Project) => project?.order === Number(this.$route.params.id),
      //   );
      commit("setLoading", false);
    },
  },
});
