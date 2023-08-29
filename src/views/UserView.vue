<template>
  <!-- <div class="padding bg-sky-color">
    <div class="w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="bg shadow-lg flex flex-col items-center pb-10">
        <div class="justify-end px-4 pt-4 relative inline-block btn">
          <button
            @click="toggleDropdown"
            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
              <path
                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
              />
            </svg>
          </button>
          <div
            v-show="isDropdownOpen"
            class="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          >
            <ul class="py-1" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Your cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  ><div v-if="isAuthenticated" class="flex md:order-2">
                    <button @click="logout" type="button">Logout</button>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-8 md:p-1">
          <span class="text-lg font-medium text">Profile information</span>
        </div>
        <hr class="hr w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-0 dark:bg-gray-700" />
        <div class="grid md:grid-cols-2 gap-1">
          <div class="fp dark:bg-gray-800 p-8 md:p-2">
            <svg
              class="w-36 h-36 mb-3 rounded-full shadow-lg"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="info dark:bg-gray-800 p-8 md:p-5">
            <h5 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">{{ getUser.name }}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Id : {{ getUser.id }}</span>
            <br />
            <span class="text-sm text-gray-500 dark:text-gray-400">Email : {{ getUser.email }}</span>
          </div>
        </div>
        <div class="p-8 md:p-2">
          <span class="text-lg font-medium text">Addresses</span>
        </div>
      </div>
    </div>
  </div> -->
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />

  <section class="pt-8 bg-blueGray-50 bg-sky-color">
    <div class="bg w-full lg:w-6/12 px-4 mx-auto">
      <div class="card relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-lg mt-16">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 flex justify-center">
              <div class="relative">
                <img
                  alt="..."
                  src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                  class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <br />
            <div class="fp dark:bg-gray-800 p-8 md:p-1">
              <svg
                class="w-36 h-36 mb-3 bg-gray-100 rounded-full shadow-md"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          <div class="text-center mt-12">
            <div class="mb-2 text-2xl text-blueGray-600 mt-5">Profile Information</div>
            <h3 class="text-lg font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {{ getUser.name }}
            </h3>
            <table class="table">
              <tr class="">
                <td>Email</td>
                <td>ㅤ:ㅤ</td>
                <td>{{ getUser.email }}</td>
              </tr>
              <tr class="">
                <td>Phone number</td>
                <td>ㅤ:ㅤ</td>
                <td>{{ getAddress[0].phone }}</td>
              </tr>
            </table>
          </div>
          <div class="mt-5 py-0 border-t border-blueGray-200 text-center">
            <div class="mb-2 text-xl text-blueGray-600 mt-5">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Addresses
            </div>
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <div class="mb-2 text-blueGray-600 mt-3">
                  <table class="table">
                    <tr>
                      <td>Address</td>
                      <td>ㅤ:ㅤ</td>
                      <td>{{ getAddress[0].address }}</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>ㅤ:ㅤ</td>
                      <td>{{ getAddress[0].country }}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>ㅤ:ㅤ</td>
                      <td>{{ getAddress[0].city }}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>ㅤ:ㅤ</td>
                      <td>{{ getAddress[0].state }}</td>
                    </tr>
                    <tr>
                      <td>Postal code</td>
                      <td>ㅤ:ㅤ</td>
                      <td>{{ getAddress[0].postal_code }}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
    ...mapGetters("auth", ["isAuthenticated"]),
    ...mapGetters("keranjang", ["getAddress"]),
  },
  methods: {
    ...mapActions("user", ["fetchUser"]),
    ...mapActions("auth", ["logout"]),
    ...mapActions("keranjang", ["fetchAddress"]),

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdown);
  },
  created() {
    this.fetchUser();
    this.fetchAddress();
  },
};
</script>
<style scoped>
.card {
  padding-bottom: 5%;
  padding-top: 1%;
}
.bg {
  padding-bottom: 5%;
}
.table {
  margin: auto;
  text-align: left;
}
.text {
  text-align: left;
}
.info {
  padding-right: 10%;
  padding-left: 1%;
  align-items: center;
  margin: auto;
}
.fp {
  align-items: center;
  margin: auto;
}
.padding {
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 22%;
}
.bg-sky-color {
  background-color: #87ceeb; /* Sky-like blue color */
}
.btn {
  padding-left: 85%;
}
</style>
