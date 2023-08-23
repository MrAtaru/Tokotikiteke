<template>
  <section class="bg-white dark:bg-gray-900 bg-sky-color">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div class="flex flex-col justify-center">
        <h1
          class="shadow-lg bg mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Never gonna give you up
        </h1>
        <br />
        <p class="shadow-lg bg2 mb-8 text-lg font-normal text-dark-500 lg:text-xl dark:text-gray-400">
          Never gonna let you down.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            class="shadow-lg inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            class="shadow-lg inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-dark-300 hover:bg-gray-300 bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn more
          </a>
        </div>
      </div>
      <div>
        <iframe
          class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div>
      <iframe
        style="border-radius: 12px"
        class="rickroll shadow-xl"
        src="https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen="false"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.rickroll{
  padding-left: 9%;
  padding-right: 9%;
  padding-bottom: 7%;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.bg-sky-color {
  background-color: #87ceeb; /* Sky-like blue color */
}
.bg {
  border-radius: 25px;
  background: #ffffff;
  padding-left: 6%;
  padding-bottom: 4%;
  padding-top: 2%;
}
.bg2 {
  border-radius: 15px;
  background: #ffffff;
  width: 45%;
  padding-left: 3%;
  padding-right: 1%;
  padding-bottom: 2%;
  padding-top: 1%;
}
</style>
