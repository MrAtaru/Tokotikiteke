import axios from "axios";

const kategori = {
  namespaced: true,
  state: {
    kategoriData: [],
  },

  getters: {
    getKategori: (state) => state.kategoriData,
  },
  actions: {
    async fetchKategori({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-categories");
        commit("SET_KATEGORI", data.data.data.slice(0,20));
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_KATEGORI(state, kategori) {
      state.kategoriData = kategori;
    },
  },
};

export default kategori;
