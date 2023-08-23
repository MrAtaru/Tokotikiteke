<template>
  <div class="bg-sky-color">
  <br /><br /><br />  
  <div>
    <center>
    <h1 class="shadow-lg text-4xl bg-text font-extrabold text-gray-900 dark:text-white text-center">Semua Categories</h1>
  </center>
</div>
  <br /><br /><br>

  <div class="shadow-lg grid md:grid-cols-4 gap-4 card">
    <div v-for="data in getKategori">
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
        <div class="grid md:grid-cols-1 gap-1 posisi fixed-bottom">
          <div></div>
          <div class="px-5 pb-5 text text-justify">
            <a href="#">
              <center>
              <img class="h-auto max-w-full rounded-lg" :src="data.banner" alt="product image" />
              </center>
              <h5 class="text-lg text-center font-semibold tracking-tight text-gray-900 dark:text-white a">{{ data.name }}</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br><br>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import { useStore } from 'vuex'
// const store = useStore();
// const getProducts = computed(() => {
//     return store.getters.getProducts
// })
// const products = computed(() => {
//     return store.state.products
// })
// onMounted(() => {
//     store.dispatch('fetchProduct')
// }),
export default {
  // mounted() {
  //   this.$store.dispatch("fetchCategories");
  // },
  computed: {
    // getProducts() {
    //     return this.$store.getter.getProducts
    // },
    // categories() {
    //   return this.$store.state.categories;
    // },
    ...mapGetters("kategori", ["getKategori"]),
  },
  methods: {
    ...mapActions("kategori", ["fetchKategori"]),
  },
  created() {
    this.fetchKategori();
  },
};
</script>

<style scoped>
.bg-text{
  background-color: #ffffff;
  width: 25%;
  padding-bottom: 2%;
  padding-top: 2%;
  border-radius: 25px;
}
.bg-sky-color {
  background-color: #87CEEB; /* Sky-like blue color */
}
.text {
  padding-top: 20px;
}

.posisi {
  height: 100%;
}
.card {
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
}
img {
  padding-top: 60px;
  padding-bottom: 50px;
  height: 300px;
  width: 65%;
}
.flex-container {
  display: flex;
}
.container {
  padding: 2px 16px;
}
</style>
