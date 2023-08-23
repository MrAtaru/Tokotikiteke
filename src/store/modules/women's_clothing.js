import axios from "axios";

const womens_clothing = {
  namespaced: true,
  state: {
    womens_clothingData: [],
  },

  getters: {
    getWomens_clothing: (state) => state.womens_clothingData,
  },
  actions: {
    async fetchWomens_clothing({ commit }) {
      try {
        const dataWomens_clothing = await axios.get("https://fakestoreapi.com/products/category/women's%20clothing?limit=4");
        commit("SET_WOMEN_CLOTHING", dataWomens_clothing.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_WOMEN_CLOTHING(state, womens_clothing) {
      state.womens_clothingData = womens_clothing;
    },
  },
};

export default womens_clothing;
