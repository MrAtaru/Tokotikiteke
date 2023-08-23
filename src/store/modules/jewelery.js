import axios from "axios";

const jewelery = {
  namespaced: true,
  state: {
    jeweleryData: [],
  },

  getters: {
    getJewelery: (state) => state.jeweleryData,
  },
  actions: {
    async fetchJewelery({ commit }) {
      try {
        const dataJewelery = await axios.get("https://fakestoreapi.com/products/category/jewelery?limit=4");
        commit("SET_JEWELERY", dataJewelery.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_JEWELERY(state, jewelery) {
      state.jeweleryData = jewelery;
    },
  },
};

export default jewelery;
