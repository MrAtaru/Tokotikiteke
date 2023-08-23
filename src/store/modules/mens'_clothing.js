import axios from "axios";

const mens_clothing = {
  namespaced: true,
  state: {
    mens_clothingData: [],
  },

  getters: {
    getMens_clothing: (state) => state.mens_clothingData,
  },
  actions: {
    async fetchMens_clothing({ commit }) {
      try {
        const dataMens_clothing = await axios.get("https://fakestoreapi.com/products/category/men's%20clothing?limit=4");
        commit("SET_MENS_CLOTHING", dataMens_clothing.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_MENS_CLOTHING(state, mens_clothing) {
      state.mens_clothingData = mens_clothing;
    },
  },
};

export default mens_clothing;
