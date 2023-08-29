<template>
  <router-link to="/cart">
    <div class="sticky-div shadow-lg" :class="{ 'is-sticky': isSticky }">
      <slot>
        <span class="flex">
          <img class="cart" src="/shopping-cart.png" alt="" />
          <p class="txt text-xs">{{ length }} item(s)</p>
        </span>
        <div class="text-xs font-medium bg">
          <p class="">{{ formatCurrency(sum) }}</p>
        </div>
      </slot>
    </div>
  </router-link>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "keranjang",
  data() {
    return {
      isSticky: false,
      offsetTop: 20, // Adjust this value to set the sticky position
      total: 0,
    };
  },
  computed: {
    ...mapGetters("keranjang", ["getKeranjang"]),
    totalPriceFormatted() {
      return this.formatCurrency(this.price * this.totalPrice);
    },
    sum() {
      return this.getKeranjang.reduce((sum, transaction) => {
        return (sum += transaction.regular_price * transaction.qty);
      }, 0);
    },
    length() {
      return this.getKeranjang.length;
    },
    price() {
      return this.getKeranjang[0].regular_price;
    },
  },
  beforeMount() {
    this.fetchKeranjang();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.pageYOffset > this.offsetTop;
    },
    ...mapActions("keranjang", ["fetchKeranjang"]),
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
  created() {
    this.total = this.fetchKeranjang();
  },
};
</script>

<style scoped>
.sticky-div {
  position: absolute;
  top: 340px; /* Initial position */
  right: 0%;
  background-color: #f0f0f0; /* Example background color */
  padding: 10px;
  z-index: 100; /* If needed, adjust z-index to control layering */
  width: 7%; /* Make sure it spans the full width */
  transition: top 0.3s ease-in-out; /* Smooth transition when becoming sticky */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
}

.is-sticky {
  position: fixed;
}
.bg {
  background-color: lightblue;
  border-radius: 5px;
  padding: 7px;
}
.txt {
  padding-bottom: 5px;
}
.cart {
  width: auto;
  height: 14px;
  padding-right: 8%;
}
</style>
