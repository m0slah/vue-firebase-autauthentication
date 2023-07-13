import { createStore } from "pinia";

export default createStore({
  state: {
    user: null
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    CLEAR_USER(state) {
      state.user = null;
    },
  },

  actions: {
    async login({ commit }, details) {
      // implementation for login action
    },

    async register({ commit }, details) {
      // implementation for register action
    },

    async logout({ commit }) {
      // implementation for logout action
    },
  },

  getters: {
    // define your getters here
  },

  modules: {
    // define your modules here
  },
});
