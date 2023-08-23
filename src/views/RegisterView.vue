<template>
  <div class="bg-sky-color flex w-full items-center justify-center text-gray-600 bg-gray-50">
    <div class="relative mt-8">
      <div class="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-10">
        <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
        </svg>
      </div>
      <div class="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-10 -bottom-1">
        <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" />
        </svg>
      </div>
      <!-- Register -->
      <div class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
        <div class="flex-auto p-6">
          <!-- Logo -->
          <div class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
            <a href="#" class="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500">
              <span class="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">TokoTikiTeke</span>
            </a>
          </div>
          <!-- /Logo -->
          <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to TokoTikiTeke!</h4>
          <p class="mb-6 text-gray-500">Please register to access our shop</p>

          <form id="" class="mb-4" @submit.prevent="performRegister">
            <div class="mb-4">
              <label for="name" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"> Full Name</label>
              <input
                type="text"
                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                id="name"
                v-model="name"
                placeholder="Enter your full name"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email Address</label>
              <input
                type="text"
                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                id="email"
                v-model="email"
                placeholder="Enter your email address"
                autofocus=""
              />
            </div>
            <div class="mb-4">
              <label for="phone" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Phone Number</label>
              <input
                type="number"
                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                id="phone"
                v-model="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div class="mb-4">
              <div class="flex justify-between">
                <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700" for="password">Password</label>
              </div>
              <div class="relative flex w-full flex-wrap items-stretch">
                <input
                  type="password"
                  id="password"
                  class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  placeholder="············"
                  v-model="password"
                />
              </div>
            </div>
            <div class="mb-4">
              <div class="flex justify-between">
                <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700" for="password"
                  >confirm Password</label
                >
                <a
                  href="auth-forgot-password-basic.html"
                  class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                >
                </a>
              </div>
              <div class="relative flex w-full flex-wrap items-stretch">
                <input
                  type="password"
                  id="password"
                  class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  placeholder="············"
                  v-model="confirm_password"
                />
              </div>
            </div>
            <div class="mb-4">
              <div class="block"></div>
            </div>
            <div class="mb-4">
              <button
                class="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                type="submit"
              >
                Register
              </button>
            </div>
            <p class="mb-4 text-center">
              All ready have an account?
              <router-link to="/login" class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                Login to account
              </router-link>
            </p>
          </form>
        </div>
      </div>
      <!-- /Register -->
      <br /><br /><br />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),
    async performRegister() {
      const credentials = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        confirm_password: this.confirm_password,
      };

      const success = await this.register(credentials);

      if (success) {
        // Redirect to the desired route on successful login
        this.$router.push("/login");
      } else {
        alert("register Failed");
      }
    },
  },
};
</script>
<style scoped>
.bg-sky-color {
  background-color: #87ceeb; /* Sky-like blue color */
}
</style>
