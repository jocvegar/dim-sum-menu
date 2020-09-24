<template>
  <div class="index">
    <section class="hero py-24 md:py-48 bg-cover bg-center">
      <div class="container mx-auto px-6 md:px-10">
        <h2
          class="title text-6xl font-bold text-white text-center sm:text-left"
        >
          Wan Fu
        </h2>
        <h3
          class="subtitle text-2xl font-medium mb-2 text-gray-200 text-center sm:text-left"
        >
          Desayuno Dim Sum
        </h3>
      </div>
    </section>
    <section class="mx-auto px-5 my-5">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a :href = phone_link>
          <div
            class="flex flex-col items-center justify-around bg-brown-500 h-40 px-5 py-5 text-gray-800 rounded-lg"
          >
            <i class="fa fa-phone text-4xl" aria-hidden="true"></i>
            <p class="font-medium text-lg text-center">
              Haz tu pedido los días 
              <span class="font-black">
                miércoles o jueves
              </span>
              <span class="font-light text-gray-800">por WhatsApp</span>
              <span class="font-black">9922-3803</span>
            </p>
          </div>
        </a>  
        <div
          class="flex flex-col items-center justify-around bg-brown-500 h-40 px-5 py-5 text-gray-800 rounded-lg"
        >
          <i class="fas fa-motorcycle text-4xl"></i>
          <p class="font-medium text-lg text-center">
            Servicio a domicilio <br>
            o pick-up
          </p>
        </div>
        <div
          class="flex flex-col items-center justify-around bg-brown-500 h-40 px-5 py-5 text-gray-800 rounded-lg"
        >
          <i class="far fa-calendar-alt text-4xl"></i>
          <p class="font-medium text-lg text-center">
            Comida se entrega los días viernes por la mañana
          </p>
        </div>
      </div>
    </section>
    <section class="menu">
      <Menu />
    </section>
    <section class="footer mt-5">
      <div class="grid grid-cols-1">
        <footer
          class="flex items-center flex-no-shrink justify-center bg-brown-800 h-20 text-center"
        >
          <a @click="scrollToTop">
            <img src="@/static/icon.png" alt="wan-fu" />
          </a>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import { isMobile } from 'mobile-device-detect';


export default {
  components: {
    Menu
  },
  data() {
    return {
      nishta: process.env.test
    }
  },
  computed: {
    message() {
      return process.env.test
    },
    phone_link() {
      return isMobile ? 'https://wa.me/+50499223803' : 'https://api.whatsapp.com/send?phone=+50499223803'
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.hero {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url('~static/hero.jpg');
}

.title {
  font-family: 'Sriracha', cursive;
}

.subtitle {
  font-family: 'Montserrat', sans-serif;
}

img {
  width: auto;
  height: 50px;
}
/* .page-enter-active, .page-leave-active {
    transition: opacity 5s;
  }
.page-enter, .page-leave-to {
    opacity: 0;
} */
</style>
