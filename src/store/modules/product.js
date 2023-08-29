import axios from "axios";

const product = {
  namespaced: true,
  state: {
    productData: [],
    keranjang: [],
  },

  getters: {
    getProducts: (state) => state.productData,

    //   get single product
    getProductById: (state) => (productId) => {
      console.log("Fetching single product by ID:", productId);
      console.log("ProductData:", state.productData);
      const product = state.productData.find((p) => p.id == productId);
      console.log("Product:", product);
      return product;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/search");
        commit("SET_PRODUCTS", data.data["products"]["data"]);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    // get single product
    async fetchSingleProduct({ commit }, product_slug) {
      try {
        const response = await axios.get(`https://ecommerce.olipiskandar.com/api/v1/product/details/${product_slug}`);
        commit("SET_SINGLE_PRODUCT", response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async addKeranjang({ commit,dispatch }, productId) {
      const token = localStorage.getItem("access_token");
      try {
        const addCart = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/add",
          {
            "variation_id": productId,
            "qty": 1,
            "temp_user_id": null,
          },
          {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          }
        );
        console.log("Output add cart:", addCart.data);
        commit("ADD_KERANJANG", addCart.data);
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        dispatch("keranjang/fetchKeranjang", null, {root:true})
      }
    },
    
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.productData = products;
    },
    SET_SINGLE_PRODUCT(state, product) {
      state.singleProduct = product;
    },
    ADD_KERANJANG(state, keranjang) {
      state.keranjang = keranjang;
    },
  },
};

export default product;
