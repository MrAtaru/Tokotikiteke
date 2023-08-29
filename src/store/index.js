
import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/users";
import berita from "./modules/berita";
import product from "./modules/product";
import kategori from "./modules/kategori";
import elektronik from "./modules/elektronik";
import auth from "./modules/auth";
import jewelery from "./modules/jewelery";
import mens_clothing from "./modules/mens'_clothing";
import womens_clothing from "./modules/women's_clothing";
import surahs from "./modules/surah";
import brand from "./modules/brand";
import user from "./modules/user";
import keranjang from "./modules/keranjang";
import order from "./modules/order";


const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    donatur,
    clients,
    transaksi,
    users,
    berita,
    product,
    kategori,
    auth,
    elektronik,
    jewelery,
    mens_clothing,
    womens_clothing,
    surahs,
    brand,
    user,
    keranjang,
    order
  },
});

export default store;
