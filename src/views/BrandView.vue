<template>
  <div class="bg-sky-color">
<br /><br /><br /><br />
  <div>
    <center>
    <h1 class="shadow-lg bg text-4xl font-extrabold text-gray-900 dark:text-white text-center">Semua Brand</h1>
  </center>
</div>
  <br /><br />

  <div class="shadow-lg grid md:grid-cols-4 gap-4 card ">
    <div v-for="data in getBrand">
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
        <div class="grid md:grid-cols-1 gap-1 posisi fixed-bottom">
          <div></div>
          <div class="px-5 pb-5 text text-justify">
            <a href="#">
              <img class="h-auto max-w-xs mx-auto rounded-lg" :src="data.logo" alt="product image" />
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

export default {
  
  computed: {
    
    ...mapGetters("brand", ["getBrand"]),
  },
  methods: {
    ...mapActions("brand", ["fetchBrand"]),
  },
  created() {
    this.fetchBrand();
  },
};
</script>

<style scoped>
.bg{
  background-color: #ffffff;
  width: 20%;
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
