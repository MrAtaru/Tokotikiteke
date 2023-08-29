<template>
  <div>
    <nav class="bg-cloud-color border-gray-200 dark:bg-gray-900 dark:border-gray-700 relative">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
        <a href="#" class="flex items-center">
          <img src="/sun.png" class="rounded-full w-30 h-30 h-20 mr-5" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TokoTikiTeke</span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 ml-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="shadow-sm hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul
            class="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <RouterLink
                to="/"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                >Home</RouterLink
              >
            </li>
            <!-- <li>
              <RouterLink
                to="/about"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                >About</RouterLink
              >
            </li> -->
            <li>
              <RouterLink
                to="/product"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Product</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/categories"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Categories</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/brand"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Brand</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/user"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Profile</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/cart"
                class="cartText relative inline-flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <img class="cart" src="/shopping-cart.png" alt="" />
                <div
                  class="absolute count inline-flex items-center justify-center text-xs font-thin text-white bg-red-500 border-red rounded-full -right-2 -top-1 dark:border-gray-900"
                >
                  {{ totalPrice }}
                </div>
              </RouterLink>
            </li>

            <li>
              <div v-if="isAuthenticated" class="flex md:order-2">
                <button
                  @click="logout"
                  type="button"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Logout
                </button>
              </div>
              <div v-else class="flex md:order-2">
                <router-link
                  to="/login"
                  type="button"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </router-link>
                <p>‎ / ‎</p>
                <router-link
                  to="/register"
                  type="button"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Register
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data(){
    return {
      total: 0
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
    ...mapGetters("keranjang", ["getKeranjang"]),
    totalPrice() {
      return this.getKeranjang.length;
    },
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("keranjang", ["fetchKeranjang"]),
  },
  beforeMount() {
    this.fetchKeranjang();
  },
  created(){
    this.total = this.fetchKeranjang();
  }
  
};
</script>

<style scoped>
.bg-cloud-color {
  position: relative;
  background-color: #f5f5f5; /* Cloud-like background color */
  overflow: hidden;
}
nav {
  padding-top: 1%;
  padding-bottom: 1%;
}
.cart {
  width: auto;
  height: 18px;
  padding-right: 8%;
}
.count {
  width: 15px;
  height: 15px;
  font-size: 11px;
}
</style>
