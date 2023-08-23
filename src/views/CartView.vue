<template>
  <div class="sticky-div" :class="{ 'is-sticky': isSticky }">
    <slot>Cart</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      offsetTop: 20 // Adjust this value to set the sticky position
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.pageYOffset > this.offsetTop;
    }
  }
};
</script>

<style>
.sticky-div {
  position: absolute;
  top: 300px; /* Initial position */
  right: 0%;
  background-color: #f0f0f0; /* Example background color */
  padding: 10px;
  z-index: 100; /* If needed, adjust z-index to control layering */
  width: 4%; /* Make sure it spans the full width */
  transition: top 0.3s ease-in-out; /* Smooth transition when becoming sticky */
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    text-align: center;
}

.is-sticky {
  position: fixed;
  top: 350px; /* Sticky position */
}
</style>
