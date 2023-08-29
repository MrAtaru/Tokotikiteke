<template>
  <div class="pt-20 bg-sky-color">
    <div class="container mx-auto px-4">
      <div class="bg1 shadow-lg message text-center">
        <h1 class="text-3xl font-bold pt-10">Terimakasih Telah Memesan</h1>
        <p>Kode Pemesanan : {{ getOrder.code }}</p>
        <p class="italic">Terimakasih atas kepercayaan Tn./Ny. {{ getOrder.user.name }} kepada TokoTikiTeke</p>
      </div>
      <br />
      <div class="bg2 shadow-lg mx-10 mt-10">
        <div class="grid grid-cols-2">
          <div>
            <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Kode Pemesanan :</dt>
                <dd class="text-lg font-semibold">{{ getOrder.code }}</dd>
              </div>
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Alamat Email :</dt>
                <dd class="text-lg font-semibold">{{ getOrder.user.email }}</dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Alamat Rumah :</dt>
                <dd class="text-lg font-semibold">
                  {{ getOrder.shipping_address.address }}, {{ getOrder.shipping_address.city }},
                  {{ getOrder.shipping_address.state }}, {{ getOrder.shipping_address.country }},
                  {{ getOrder.shipping_address.postal_code }}
                </dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Nomor Telpon :</dt>
                <dd class="text-lg font-semibold">
                  {{ getOrder.shipping_address.phone }}
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Metode Pembayaran :</dt>
                <dd class="text-lg font-semibold">
                  {{ getOrder.orders[0].payment_type }}
                </dd>
              </div>
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Metode Pengiriman :</dt>
                <dd class="text-lg font-semibold">
                  {{ getOrder.orders[0].delivery_type }}
                </dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Alamat Tagihan :</dt>
                <dd class="text-lg font-semibold">
                  {{ getOrder.shipping_address.address }}, {{ getOrder.shipping_address.city }},
                  {{ getOrder.shipping_address.state }}, {{ getOrder.shipping_address.country }},
                  {{ getOrder.shipping_address.postal_code }}
                </dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Total Barang :</dt>
                <dd class="text-lg font-semibold">
                  {{ formatCurrency(getOrder.orders[0].grand_total) }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <br />
      <div class="shadow-lg bg3 relative overflow-x-auto pt-10">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">No.</th>
              <th scope="col" class="px-6 py-3">Product</th>
              <th scope="col" class="px-6 py-3">Quantity</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="(order, index) in getOrder.orders[0].products.data"
            >
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ index + 1 }}
              </th>
              <td class="px-6 py-4">{{ order.name }}</td>
              <td class="px-6 py-4">{{ order.quantity }}</td>
              <td class="px-6 py-4">{{ formatCurrency(order.total) }}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div class="">
          <div class="mt-3 border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total Belanja</p>
              <p class="font-semibold text-gray-900">{{ formatCurrency(getOrder.grand_total) }}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Biaya Jasa</p>
              <p class="font-semibold text-gray-900">{{ formatCurrency(getOrder.orders[0].products.data.length * 10000) }}</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total Harga :</p>
            <p class="text-2xl font-semibold text-gray-900">
              {{ formatCurrency(getOrder.grand_total + getOrder.orders[0].products.data.length * 10000) }}
            </p>
          </div>
        </div>
        <br>
        <div>
          <router-link to="/product">
            <button class="continue bg-gray-100">
            <span class="text-center text-purple-900 text-md">
              <p><u>Continue shopping?</u></p>
            </span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      standard: 15000,
      express: 30000,
    };
  },
  props: ["orderCode"],
  computed: {
    ...mapGetters("order", ["getOrder"]),
    ...mapGetters("user", ["getUser"]),
    ...mapGetters("keranjang", ["getAddress", "getKeranjang"]),

    
  },
  methods: {
    ...mapActions("user", ["fetchUser"]),
    ...mapActions("keranjang", ["fetchKeranjang", "fetchAddress"]),
    ...mapActions("order", ["fetchOrderData"]),

    formatCurrency(value) {
      const formattedValue = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);

      return formattedValue.replace("Rp", "Rp.");
    },
  },
  beforeMount() {
    this.fetchAddress();
  },
  created() {
    this.fetchUser(), this.fetchAddress(), this.$store.dispatch("order/fetchOrderData", this.orderCode);
  },
};
</script>

<style scoped>
.continue {
  text-align: center;
  width: 18%;
  margin: auto;
  align-items: center;
  border-radius: 10px;
  padding-bottom: 5px;
}
.bg-sky-color {
  background-color: #87ceeb; /* Sky-like blue color */
}
.bg1 {
  background: #ffffff;
  padding-bottom: 3%;
  border-radius: 15px;
  width: 50%;
  margin: auto;
}
.bg2 {
  background: #ffffff;
  padding: 3%;
  width: 70%;
  margin: auto;
  border-radius: 15px;
}
.bg3 {
  background: #ffffff;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-right: 3%;
  padding-left: 3%;
  border-radius: 15px;
  width: 70%;
  margin: auto;
}
</style>
