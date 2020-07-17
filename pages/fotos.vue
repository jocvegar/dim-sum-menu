<template>
  <div>
      <div class="relative h-screen"> 
          <client-only>
              <component
                  :is="slideshow"
                  :images="images"
                  :collageSizeMin="2"
                  :collageSizeMax="3"
                  :slidesInterval="5000"
                  :showNoImagesMsg="true"
                  noImagesMsg="No Images"
                  :showLoadingMsg="true"
                  loadingMsg="Cargando..."
                  height="100%"
                  class="absolute">
              </component> 
          </client-only>
      </div>
      <section class="footer">
          <div class="grid grid-cols-1">
          <footer class="flex flex-col items-center flex-no-shrink justify-center bg-brown-800 h-24 text-center">
          <p class="text-center text-lg text-white">Mandanos tus fotos!</p>
          <p class="text-center text-lg text-white">jocvegar@gmail.com</p>
          </footer>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  components: {
    // Slideshow: () => import('vue-collage-slideshow')
  },
  computed: {
    slideshow() {
      return () => {
        if (process.client) {
          return import('vue-collage-slideshow')
        }
      }
    }
  },
  data() {
    return {
      images: [
        { image: require('~/assets/images/image-1.jpg') },
        { image: require('~/assets/images/image-2.jpg') },
        { image: require('~/assets/images/image-3.jpg') },
        { image: require('~/assets/images/image-4.jpg') },
        { image: require('~/assets/images/image-5.jpg') },
        { image: require('~/assets/images/image-6.jpg') },
        { image: require('~/assets/images/image-7.jpg') },
        { image: require('~/assets/images/image-8.jpg') },
        { image: require('~/assets/images/image-9.jpg') },
        { image: require('~/assets/images/image-10.jpg') },
        { image: require('~/assets/images/image-11.jpg') },
        { image: require('~/assets/images/image-12.jpg') },
        { image: require('~/assets/images/image-13.jpg') },
        { image: require('~/assets/images/image-14.jpg') },
        { image: require('~/assets/images/image-15.jpg') },
        { image: require('~/assets/images/image-16.jpg') },
        { image: require('~/assets/images/image-17.jpg') },
        { image: require('~/assets/images/image-18.jpg') },
        { image: require('~/assets/images/image-19.jpg') },
        { image: require('~/assets/images/image-20.jpg') },
        { image: require('~/assets/images/image-21.jpg') },
        { image: require('~/assets/images/image-22.jpg') },
        { image: require('~/assets/images/image-23.jpg') },
        { image: require('~/assets/images/image-24.jpg') },
        { image: require('~/assets/images/image-25.jpg') },
        { image: require('~/assets/images/image-26.jpg') },
        { image: require('~/assets/images/image-27.jpg') },
        { image: require('~/assets/images/image-28.jpg') },
        { image: require('~/assets/images/image-29.jpg') },
        { image: require('~/assets/images/image-30.jpg') },
        { image: require('~/assets/images/image-31.jpg') },
        { image: require('~/assets/images/image-32.jpg') },
        { image: require('~/assets/images/image-33.jpg') },
        { image: require('~/assets/images/image-34.jpg') },
        { image: require('~/assets/images/image-35.jpg') },
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  font-family: 'Montserrat', sans-serif;
}
</style>
