import axios from "axios";

const elektronik = {
  namespaced: true,
  state: {
    elektronikData: [],
  },

  getters: {
    getElektronik: (state) => state.elektronikData,
  },
  actions: {
    async fetchElektronik({ commit }) {
      try {
        const dataElektronik = await axios.get("https://fakestoreapi.com/products/category/electronics?limit=4");
        commit("SET_ELEKTRONIK", dataElektronik.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_ELEKTRONIK(state, elektronik) {
      state.elektronikData = elektronik;
    },
  },
};

export default elektronik;
