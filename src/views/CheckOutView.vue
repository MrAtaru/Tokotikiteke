<template>
  <div class="bg-sky-color flex flex-col mx-auto px-14 py-12 sm:py-16">
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
                to="/cart"
                class="rounded-md p-1 text-2xl font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >Cart</RouterLink
              >
            </div>
          </div>
        </li>
        <li class="text-left">
          <div class="flex items-center">
            <span class="mx-2 text-gray-400 text-xl">/</span>
            <div class="-m-1">
              <RouterLink
                to=""
                class="rounded-md p-1 text-2xl font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >Checkout</RouterLink
              >
            </div>
          </div>
        </li>
      </ol>
    </nav>
  </div>
  <div class="bg-sky-color shadow-lg grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
    <div class="px-3">
      <div class="bg1 shadow-lg">
        <p class="text-xl font-medium">Order Summary</p>
        <p class="text-gray-900">Check your items. And select a suitable shipping method.</p>
      </div>
      <div class="list shadow-lg mt-4 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        <div v-for="product in getKeranjang" :key="product.cart_id" class="flex flex-col rounded-lg bg-white sm:flex-row">
          <img
            class="m-2 h-24 w-28 rounded-md border object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dU3hIRKnft40eFVAwTxnEhFRGBGzaVlUaYFKLOlF3-ZRECCi9_oRQbX6u4z37j6K3AU&usqp=CAU"
            alt=""
          />
          <div class="flex w-full flex-col px-4 py-4">
            <span class="font-semibold">{{ product.name }}</span>
            <span class="float-right text-gray-400">{{ product.qty }} pcs</span>
            <p class="text-lg font-bold">{{ formatCurrency(product.regular_price * product.qty) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg3 shadow-lg mt-10 bg-gray-50 px-8 pt-8 lg:mt-0">
      <p class="text-xl font-medium">Payment Details</p>
      <p class="text-gray-400">Complete your order by providing your payment details.</p>
      <div class="">
        <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
        <div class="relative">
          <input
            type="text"
            id="email"
            name="email"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="your.email@gmail.com"
          />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </div>
        </div>
        <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
        <div class="relative">
          <input
            type="text"
            id="card-holder"
            name="card-holder"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your full name here"
          />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
              />
            </svg>
          </div>
        </div>
        <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
        <div class="flex">
          <div class="relative w-7/12 flex-shrink-0">
            <input
              type="text"
              id="card-no"
              name="card-no"
              class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="xxxx-xxxx-xxxx-xxxx"
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                class="h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                <path
                  d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z"
                />
              </svg>
            </div>
          </div>
          <input
            type="text"
            name="credit-expiry"
            class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="MM/YY"
          />
          <input
            type="text"
            name="credit-cvc"
            class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="CVC"
          />
        </div>
        <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
        <div class="flex flex-col sm:flex-row">
          <div class="relative flex-shrink-0 sm:w-7/12">
            <input
              type="text"
              id="billing-address"
              name="billing-address"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Street Address"
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <img class="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
            </div>
          </div>
          <select
            type="text"
            name="billing-state"
            class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="State">State</option>
          </select>
          <input
            type="text"
            name="billing-zip"
            class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="ZIP"
          />
        </div>
        <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Delivery Options</label>
        <div class="grid md:grid-cols-1 gap-1">
          <div class="flex items-center mb-4">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value="standard"
                v-model="deliveryType"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div class="ml-2 text-sm">
              <label for="helper-radio" class="flex font-medium text-gray-900 dark:text-gray-300">
                <img class="w-12 object-contain" src="https://componentland.com/images/naorrAeygcJzX0SyNI4Y0.png" alt="" /> Fedex
                Delivery - Standard
              </label>
              <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Delivery: 2-4 Days</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value="express"
                v-model="deliveryType"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div class="ml-2 text-sm">
              <label for="helper-radio" class="flex font-medium text-gray-900 dark:text-gray-300">
                <img class="w-12 object-contain" src="https://componentland.com/images/naorrAeygcJzX0SyNI4Y0.png" alt="" /> Fedex
                Delivery - Express</label
              >
              <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Delivery: 1-2 Days</p>
            </div>
          </div>
        </div>
        <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Shipping Methods</label>
        <div class="grid md:grid-cols-1 gap-1">
          <div class="flex items-center mb-4">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value="cash_on_delivery"
                v-model="paymentType"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div class="flex ml-2 text-sm">
              <img
                class="w-10 object-contain"
                src="data:image/png;base64,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"
                alt=""
              />
              <div class="ml-1 mt-2">
                <span class="mt-2 font-semibold">Cash On Delivery</span>
                <!-- <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> -->
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value="payment_wallet"
                v-model="paymentType"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div class="flex ml-2 text-sm">
              <img
                class="w-10 object-contain"
                src="https://png.pngtree.com/png-clipart/20190904/original/pngtree-orange-wallet-icon-png-image_4462385.jpg"
                alt=""
              />
              <div class="ml-1 mt-2">
                <span class="mt-16 font-semibold leading-6">Payment Wallet</span>
                <!-- <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> -->
              </div>
            </div>
          </div>
        </div>

        <!-- Total -->
        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Subtotal</p>
            <p class="font-semibold text-gray-900">{{ formatCurrency(sum) }}</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Tax</p>
            <p class="font-semibold text-gray-900">{{ formatCurrency(tax) }}</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Total</p>
          <p class="text-2xl font-semibold text-gray-900">{{ formatCurrency(sum + tax) }}</p>
        </div>
      </div>

      <button @click="performCheckout" class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
        Place Order
      </button>
    </div>
    <br />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      paymentType: 15000,
      deliveryType: 30000,
    };
  },
  computed: {
    ...mapGetters("keranjang", ["getKeranjang", "getAddress", "getCheckout"]),
    ...mapGetters("product", ["getProducts"]),

    sum() {
      return this.getKeranjang.reduce((sum, transaction) => {
        return (sum += transaction.regular_price * transaction.qty);
      }, 0);
    },
    tax() {
      return this.getKeranjang.reduce((sum, transaction) => {
        return (sum += transaction.tax);
      }, 0);
    },
  },
  methods: {
    ...mapActions("keranjang", ["fetchKeranjang", "fetchAddress"]),
    ...mapActions("product", ["fetchProducts"]),
    ...mapActions("user", ["fetchUser"]),

    formatCurrency(value) {
      const formattedValue = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);

      return formattedValue.replace("Rp", "Rp.");
    },
    

    // async performCheckout() {
    //   // Collect the product IDs to be checked out
    //   const cartItemIds = this.getKeranjang.map((product) => product.cart_id);
    //   // Get user address
    //   const userAddressResponse = await this.$store.dispatch("keranjang/fetchAddress");
    //   const userAddressId = userAddressResponse.data[0].id;

    //   const checkoutPayload = {
    //     shippingAddress: userAddressId,
    //     billingAddress: userAddressId,
    //     paymentType: this.paymentType,
    //     deliveryType: this.deliveryType,
    //     cart_item_ids: cartItemIds,
    //   };

    //   // Call the checkout action with the collected IDs and user address
    //   await this.$store.dispatch("keranjang/checkoutKeranjang", checkoutPayload)
    //   .then(() => {
    //     this.$router.push(`/order/${this.getCheckout.order_code}`);
    //   });
    // },
    async performCheckout() {
            // Collect the product IDs to be checked out
            const cartItemIds = this.getKeranjang.map(product => product.cart_id);
            // Get user address
            const userAddressResponse = await this.$store.dispatch('keranjang/fetchAddress');
            const userAddressId = userAddressResponse.data[0].id;
            

            const checkoutPayload = {
                shippingAddress: userAddressId,
                billingAddress: userAddressId,
                paymentType: this.paymentType,
                deliveryType: this.deliveryType,
                cart_item_ids: cartItemIds
            };

            // Call the checkout action with the collected IDs and user address
            await this.$store.dispatch('keranjang/checkoutCart', checkoutPayload)
            .then(() => {
                this.$router.push(`/order/${this.getCheckout.order_code}`);
            });
            
        }
  },
  beforeMount() {
        this.fetchAddress();
    },

    mounted() {
        this.fetchUser()
        this.fetchKeranjang();
    },
};
</script>
<style scoped>
.list{
  height: 90.5%;
}

.bg-sky-color {
  background-color: #87ceeb; /* Sky-like blue color */
}
.bg1 {
  background: #ffffff;
  border-radius: 10px;
  padding: 2%;
}
.bg2 {
  background: #ffffff;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-left: 1%;
  padding-right: 1%;
  border-radius: 17px;
}
.bg3 {
  background: #ffffff;
  border-radius: 10px;
}
</style>
