<template>
  <nav class="flex items-center justify-between flex-wrap bg-brown-500 p-6">
    <nuxt-link @click.native="open = false" to="/">
        <div class="flex items-center flex-no-shrink text-white mr-6">
            <img src="@/static/icon.png" alt="wan-fu">
            <span class="font-semibold text-2xl text-brown-800 tracking-tight">Wan Fu</span>
        </div>
    </nuxt-link>    
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-brown-800 border-gray-600 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>

    <div :class="open ? 'block showMe': 'hidden hideMe'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-base sm:flex-grow">
            <nuxt-link 
                @click.native="open = false"
                :to=foto_link
                class="no-underline block mt-4 text-lg sm:inline-block sm:mt-0 text-brown-800 hover:text-white mr-4">
                    Fotos
            </nuxt-link> 
            <a @click="open = false"
                :href=phone_link
                target="_blank"
                class="no-underline block mt-4 text-lg sm:inline-block sm:mt-0 text-brown-800 hover:text-white mr-4">
                Escríbenos
            </a>
        </div>
      <div>
        <nuxt-link 
            @click.native="open = false"
            to="/menu" 
            class="no-underline inline-block text-base px-4 py-2 leading-none border rounded text-brown-800 border-gray-600 hover:border-transparent hover:text-black hover:bg-brown-200 mt-4 sm:mt-0">
                Menu
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { isMobile } from 'mobile-device-detect';

export default {
  name: 'Nav',
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  },
  computed: {
    phone_link() {
      return isMobile ? 'https://wa.me/+50499223803' : 'https://api.whatsapp.com/send?phone=+50499223803'
    },
    foto_link() {
      return isMobile ? '/slides' : '/fotos'
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
  color: #1e1500;
}
.showMe {
  opacity: 2;
  animation: fade 500ms;
}
.hideMe {
  opacity: 1;
  -webkit-transition: opacity 400ms;
  transition: opacity 400ms;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
