import axios from "axios";

const berita = {
  namespaced: true,
  state: {
    newsData: [],
  },
  getters: {
    getNews: (state) => state.newsData,
  },
  actions: {
    async fetchNews({ commit }) {
      try {
        const data = await axios.get(
          "https://the-lazy-media-api.vercel.app/api/games/e-sport"
        );
        commit("SET_NEWS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_NEWS(state, news) {
      state.newsData = news;
    },
  },
};

export default berita;
