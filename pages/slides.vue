<template>
    <div>
        <no-ssr>
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
                :image="getImage(slide.image)"/>
        </vueper-slides>
        </no-ssr> 
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
    methods: {
        getImage(name) {
            return require(`~/assets/images/image-${name}.jpg`)
        }
    },
    data: () => ({
        pauseOnHover: true,
        autoPlaying: true,
        slides: [
            { image: 1 },  
            { image: 2 },
            { image: 3 },
            { image: 4 },
            { image: 5 },
            { image: 6 },
            { image: 7 },
            { image: 8 },
            { image: 9 },
            { image: 10 },
            { image: 11 },
            { image: 12 },
            { image: 13 },
            { image: 14 },
            { image: 15 },
            { image: 16 },
            { image: 17 },
            { image: 18 },
            { image: 19 },
            { image: 20 },
            { image: 21 },
            { image: 22 },
            { image: 23 },
            { image: 24 },
            { image: 25 },
            { image: 26 },
            { image: 27 },
            { image: 28 },
            { image: 29 },
            { image: 30 },
            { image: 31 },
            { image: 32 },
            { image: 33 },
            { image: 34 },
            { image: 35 },
            { image: 36 },
            { image: 37 },
        ]
    })
}
</script>

<style>
h1 {
  font-family: 'Sriracha', cursive;
}
</style>
