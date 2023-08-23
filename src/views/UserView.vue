<template>
  <div class="padding bg-sky-color">
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
        <!-- Dropdown menu -->
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
      <div class="shadow-lg flex flex-col items-center pb-10">
        <svg
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
        </svg>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-5 dark:bg-gray-700">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ getUser.name }}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">id : {{ getUser.id }} | {{ getUser.email }}</span>
        <div class="flex mt-4 space-x-3 md:mt-6"></div>
      </div>
    </div>
  </div>
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
  },
  methods: {
    ...mapActions("user", ["fetchUser"]),
    ...mapActions("auth", ["logout"]),

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
  },
};
</script>
<style scoped>
.padding {
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 37%;
}
.bg-sky-color {
  background-color: #87ceeb; /* Sky-like blue color */
}
.btn {
  padding-left: 85%;
}
</style>
