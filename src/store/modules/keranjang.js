import axios from "axios";

const keranjang = {
  namespaced: true,
  state: {
    keranjangData: [],
    addressData: [],
    checkoutData: [],
    dataKeranjang: [],
  },

  getters: {
    getKeranjang: (state) => state.keranjangData,
    getAddress: (state) => state.addressData,
    getCheckout: (state) => state.checkoutData,
    getDataKeranjang: (state) => state.dataKeranjang,
  },
  actions: {
    async fetchKeranjang({ commit }, productId) {
      const token = localStorage.getItem("access_token");
      try {
        const dataCart = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts",
          {
            variation_id: productId,
            qty: 1,
            temp_user_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        commit("SET_KERANJANG", dataCart.data.cart_items.data);
        console.log("cart :", dataCart.data.cart_items.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async editKeranjang({ commit, dispatch }, param) {
      const token = localStorage.getItem("access_token");
      try {
        const editCart = await axios.post("https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity", param, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("EDIT_KERANJANG", editCart.data);
        console.log("Edit cart:", editCart.data);
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        dispatch("keranjang/fetchKeranjang", null, { root: true });
      }
    },
    async deleteKeranjang({ commit, dispatch }, cartd_id) {
      const token = localStorage.getItem("access_token");
      try {
        const deleteCart = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/destroy",
          {
            cartd_id: cartd_id,
            temp_user_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("delete cart:", deleteCart.data);
        commit("DELETE_KERANJANG", deleteCart.data);
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        dispatch("keranjang/fetchKeranjang", null, { root: true });
      }
    },
    async fetchAddress({ commit }) {
      const token = localStorage.getItem("access_token");
      try {
        const getAddress = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/addresses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("GET_ADDRESS", getAddress.data.data);
        console.log("GET_ADDRESS", getAddress.data.data);
        return getAddress.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async checkoutCart({ commit, dispatch }, { shippingAddress, billingAddress, paymentType, deliveryType, cart_item_ids }) {
      try {
        const response = await axios.post(
          `https://ecommerce.olipiskandar.com/api/v1/checkout/order/store`,
          {
            shipping_address_id: shippingAddress,
            billing_address_id: billingAddress,
            payment_type: paymentType,
            delivery_type: deliveryType,
            cart_item_ids: cart_item_ids,
            transactionId: null,
            receipt: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        console.log(response.data.message);
        commit("GET_CHECKOUT", response.data);
        dispatch("fetchKeranjang");
      } catch (error) {
        alert("Error");
        console.log(error);
      }
    },
  },

  mutations: {
    SET_KERANJANG(state, keranjang) {
      state.keranjangData = keranjang;
    },
    EDIT_KERANJANG(state, keranjang) {
      state.keranjangData = keranjang;
    },
    DELETE_KERANJANG(state, keranjang) {
      state.keranjangData = keranjang;
    },
    GET_ADDRESS(state, address) {
      state.addressData = address;
    },
    GET_CHECKOUT(state, keranjang) {
      state.checkoutData = keranjang;
    },
  },
};

export default keranjang;
