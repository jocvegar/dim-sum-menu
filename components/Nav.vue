<template>
  <nav class="flex items-center justify-between flex-wrap bg-brown-500 p-6 mb-4">
    <nuxt-link to="/">
        <div class="flex items-center flex-no-shrink text-white mr-6">
            <img src="@/static/icon.png" alt="wan-fu">
            <span class="font-semibold text-2xl tracking-tight">Wan Fu</span>
        </div>
    </nuxt-link>    
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-brown-800 border-brown-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-base sm:flex-grow">
         <nuxt-link to="/about" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-brown-800 hover:text-white mr-4">
            About
          </nuxt-link>
        <a href="#responsive-header" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-brown-800 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-brown-800 hover:text-white">
          Blog
        </a>
      </div>
      <div>
        <a href="#" class="no-underline inline-block text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-brown-200 mt-4 sm:mt-0">Download</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
        this.open = !this.open
    }
  }
}
</script>

<style scoped>
    img {
        width: auto;
        height: 40px;
        float: left;
        margin-right: 10px;
    }
    .nuxt-link-exact-active {
        color:white;
    }
</style>
