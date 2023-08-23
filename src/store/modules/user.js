import axios from "axios";

const user = {
  namespaced: true,
  state: {
    userData: [],
  },

  getters: {
    getUser: (state) => state.userData,
  },
  actions: {
    async fetchUser({ commit }) {
      const token = localStorage.getItem("access_token");
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/info", {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log(data.data);
        commit("SET_USER", data.data["user"]);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.userData = user;
    },
  },
};

export default user;
