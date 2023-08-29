<template>
  <div class="bg-sky-color">
    <cart-view />
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div>
        <center>
          <h1 class="shadow-lg text-4xl bg-text font-extrabold text-gray-900 dark:text-white text-center">Semua Product</h1>
        </center>
        <br /><br />
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 pt-2">
        <div v-for="product in getProducts" :key="product.id">
          <div
            class="shadow-lg w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card"
          >
            <div class="grid md:grid-cols-1 gap-1 posisi fixed-bottom">
              <div>
                <center>
                  <br />
                  <figure class="max-w-lg">
                    <a href="#">
                      <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                        alt="product image"
                      />
                    </a>
                  </figure>
                  <br />
                </center>
              </div>
              <div class="px-5 pb-5 text text-justify">
                <a href="#">
                  <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white a">{{ product.name }}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                  <svg
                    class="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
                    >Rating : {{ product.rating }}</span
                  >
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-xl font-semibold text-gray-900 dark:text-white">{{ formatCurrency(product.base_price) }}</span>
                  <router-link
                    :to="{ name: 'SingleProduct', params: { id: product.id } }"
                    class="group text-md peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-3 py-1 font-bold"
                    >Detail...</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartView from "./CartView.vue";

export default {
  computed: {
    ...mapGetters("product", ["getProducts"]),
  },
  methods: {
    ...mapActions("product", ["fetchProducts"]),
    formatCurrency(value) {
      const formattedValue = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);

      return formattedValue.replace("Rp", "Rp.");
    },
    // getImage(imageURL) {
    //     return {
    //         'src': `${imageURL}`,
    //         'background-size': 'cover',
    //         'background-position': 'center',
    //     };
    // },
  },
  created() {
    this.fetchProducts();
  },
  components: { CartView },
};
</script>

<style scoped>
.bg-text {
  background-color: #ffffff;
  width: 30%;
  padding-bottom: 2%;
  padding-top: 2%;
  border-radius: 25px;
}
.group {
  color: black;
}
.bg-sky-color {
  background-color: #87ceeb; /* Sky-like blue color */
}

/* Add additional styling to ensure proper visibility of text over the background */
.bg-sky-color .text {
  color: #ffffff; /* White text color */
}

.bg-sky-color .a {
  align-items: end;
}
.text {
  padding-top: 20px;
}
.a {
  align-items: end;
}
.posisi {
  height: 100%;
}
.card {
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
}
.flex-container {
  display: flex;
}
.container {
  padding: 2px 16px;
}
</style>
-->
