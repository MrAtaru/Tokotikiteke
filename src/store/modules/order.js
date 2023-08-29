import axios from "axios";

const order = {
  namespaced: true,
  state: {
    orderData: [],
  },
  getters: {
    getOrder: (state) => state.orderData,
  },
  actions: {
    async fetchOrderData({ commit }, orderCode) {
      try {
        const urlOrder = `https://ecommerce.olipiskandar.com/api/v1/user/order/${orderCode}`;
        const responseOrder = await axios.get(urlOrder, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        commit("SET_ORDER", responseOrder.data["data"]);
        console.log(responseOrder.data["data"]);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    },
  },
  mutations: {
    SET_ORDER(state, order) {
      state.orderData = order;
    },
  },
};

export default order;
