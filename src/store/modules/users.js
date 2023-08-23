import axios from "axios";

const users = {
  namespaced: true,
  state: {
    userData: [],
  },
  getters: {
    getUsers: (state) => state.userData,
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.userData = users;
    },
  },
};

export default users;
