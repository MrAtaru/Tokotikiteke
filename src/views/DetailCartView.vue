<template>
  <div class="bg-sky-color container mx-auto px-14 py-12 sm:py-16">
    <nav class="flex">
      <ol role="list" class="bg2 shadow-lg flex items-center">
        <li class="text-left">
          <div class="-m-1">
            <router-link
              to="/"
              class="rounded-md p-1 text-2xl font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
              >Home</router-link
            >
          </div>
        </li>

        <li class="text-left">
          <div class="flex items-center">
            <span class="mx-2 text-gray-400 text-xl">/</span>
            <div class="-m-1">
              <RouterLink
                to="/product"
                class="rounded-md p-1 text-2xl font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >Cart</RouterLink
              >
            </div>
          </div>
        </li>
      </ol>
    </nav>

    <section class="dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="shadow-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 bg p-8 md:p-12 mb-8">
          <h1 class="text-gray-900 dark:text-white text-center text-3xl md:text-5xl font-extrabold mb-2">-Shopping Cart List-</h1>
          <br />
          <div class="title grid md:grid-cols-5 gap-1">
            <div class="bg-gray-50 dark:bg-gray-800 p-8 md:p-2">
              <p class="header font-bold text-lg">Product(s)</p>
              <div v-for="keranjang in getKeranjang" class="bg-gray-50 dark:bg-gray-800 p-8 md:p-4">
                <div class="h-auto max-w-xs overflow-hidden">
                  <img
                    class="foto h-full w-full max-w-full object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                    alt="product image"
                  />
                  <p class="output">Product : {{ keranjang.name }}</p>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-8 md:p-2">
              <p class="header font-bold text-lg">price(s)</p>
              <div v-for="keranjang in getKeranjang" class="bg-gray-50 dark:bg-gray-800 p-8 md:p-8">
                <p class="output1">{{ formatCurrency(keranjang.regular_price) }}</p>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-8 md:p-2">
              <p class="header font-bold text-lg">QTY</p>
              <div v-for="keranjang in getKeranjang" class="bg-gray-50 dark:bg-gray-800 p-8 md:p-8">
                <div class="output2 text-center grid md:grid-cols-3 gap-1 bg-gray-50 dark:bg-gray-800 p-8 md:p-8">
                  <div>
                    <button @click="editKeranjang({ cart_id: keranjang.cart_id, type: 'minus' })" class="decrement">
                      <p class="text-xl">-</p>
                    </button>
                  </div>
                  <div>
                    <p class="text-xl">{{ keranjang.qty }}</p>
                  </div>
                  <div>
                    <button @click="editKeranjang({ cart_id: keranjang.cart_id, type: 'plus' })" class="increment">
                      <p class="text-xl">+</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-8 md:p-2">
              <p class="header font-bold text-lg">Total</p>
              <div v-for="keranjang in getKeranjang" class="bg-gray-50 dark:bg-gray-800 p-8 md:p-8">
                <div class="output3 text-center bg-gray-50 dark:bg-gray-800 p-8 md:p-8">
                  <p>{{ formatCurrency(keranjang.regular_price * keranjang.qty) }}</p>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-8 md:p-2">
              <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-lg font-semibold mb-4">Summary</h2>
                <div class="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr class="my-2" />
                <div class="flex justify-between mb-2">
                  <span class="font-semibold">Total</span>
                  <span class="font-semibold">{{ formatCurrency(sum) }}</span>
                </div>
                <router-link to="/checkout">
                  <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  padding-bottom: 15%;
}
.output3 {
  padding-top: 12%;
  padding-bottom: 48%;
  text-align: center;
  align-items: center;
}
.output2 {
  padding-top: 12%;
  padding-bottom: 43%;
  text-align: center;
  align-items: center;
}
.output1 {
  padding-top: 15%;
  padding-bottom: 43%;
  text-align: center;
  align-items: center;
}
.output {
  padding-top: 5%;
  padding-bottom: 1%;
  text-align: center;
  align-items: center;
}
.increment .decrement {
  font-size: large;
}
.title {
  padding-top: 3%;
  padding-left: 5%;
  padding-right: 5%;
}
.checkout {
  background-color: #87ceeb;
}
.bg-sky-color {
  background-color: #87ceeb; /* Sky-like blue color */
}
.bg {
  border-radius: 17px;
}
.bg2 {
  background: #ffffff;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-left: 1%;
  padding-right: 1%;
  border-radius: 17px;
}
.foto {
  width: 150px;
  height: 95px;
  margin: auto;
  border-radius: 5%;
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "keranjang",
  data() {
    return {
      total: 0,
      count: 0,
      cek: 1,
      keranjang: [],
    };
  },

  computed: {
    ...mapGetters("keranjang", ["getKeranjang", "getAddress"]),
    sum() {
      return this.getKeranjang.reduce((sum, transaction) => {
        return (sum += transaction.regular_price * transaction.qty);
      }, 0);
    },
  },
  beforeMount() {
    this.fetchKeranjang();
  },

  methods: {
    ...mapActions("keranjang", ["fetchKeranjang", "editKeranjang", "deleteKeranjang", "fetchAddress"]),
    formatCurrency(value) {
      const formattedValue = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);

      return formattedValue.replace("Rp", "Rp.");
    },
    // calculateTotal() {
    //   this.total = this.getKeranjang.reduce((accumulator, getKeranjang) => {
    //     return accumulator + getKeranjang.regular_price * getKeranjang.qty;
    //   }, 0);
    //   this.calculateTotal(); // Panggil metode untuk menghitung total setiap kali data diperbarui
    // },

    qty(type) {
      if (type === "tambah") {
        this.cek++;
      } else if (type === "kurang" && this.cek > 1) {
        this.cek--;
      }
    },
  },
  created() {
    this.fetchKeranjang();
  },
};
</script>
