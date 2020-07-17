<template>
    <div>
        <vueper-slides 
            autoplay
            class="no-shadow"
            :visible-slides="3"
            slide-multiple
            :infinite="true" 
            :arrows="false"
            :bullets="false"
            :gap="1"
            progress
            lazy 
            lazy-load-on-drag
            :slide-ratio="1 / 3"
            :dragging-distance="70"
            :breakpoints="{ 800: { 
                visibleSlides: 1, 
                slideRatio: 1,
                } 
            }">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image"/>
        </vueper-slides>
        <div class="my-8">
            <h1 class="text-brown-400 text-xl text-center font-medium uppercase">
                Gracias por las fotos!
            </h1>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: { VueperSlides, VueperSlide },
    data: () => ({
        pauseOnHover: true,
        autoPlaying: true,
        slides: [
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
            { image: require('~/assets/images/image-36.jpg') },  
            { image: require('~/assets/images/image-37.jpg') },  
        ]
    })
}
</script>

<style>
h1 {
  font-family: 'Sriracha', cursive;
}

</style>
