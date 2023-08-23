import axios from "axios";

const brand = {
  namespaced: true,
  state: {
    brandData: [],
  },

  getters: {
    getBrand: (state) => state.brandData,
  },
  actions: {
    async fetchBrand({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-brands");
        commit("SET_BRAND", data.data.data.slice(0,20));
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_BRAND(state, brand) {
      state.brandData = brand;
    },
  },
};

export default brand;
