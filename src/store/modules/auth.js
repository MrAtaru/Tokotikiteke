import axios from "axios";

const auth = {
  namespaced: true,
  state: {
    access_token: localStorage.getItem("access_token") || "",
  },
  getters: {
    isAuthenticated: (state) => !!state.access_token,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post("https://ecommerce.olipiskandar.com/api/v1/auth/login", credentials);
        const token = response.data.access_token;

        // Save token to localStorage
        localStorage.setItem("access_token", token);

        commit("SET_TOKEN", token);
        console.log("Token saved:", token);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async register({ commit }, credentials) {
      try {
        const response = await axios.post("https://ecommerce.olipiskandar.com/api/v1/auth/signup", credentials);
        const token = response.data.access_token;

        // Save token to localStorage
        localStorage.setItem("access_token", token);

        commit("SET_TOKEN", token);
        console.log("Token saved:", token);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem("access_token");
      localStorage.removeItem("access_token");
      commit("SET_TOKEN", "");
      // Log token removed
      console.log("Token removed:", token);
      window.location.href = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, access_token) {
      state.access_token = access_token;
    },
  },
};

export default auth;
