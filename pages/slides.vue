<template>
    <div>
        <client-only>
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
                    :image="require(`~/assets/images/image-${slide.image}.jpg`)"/>
            </vueper-slides>
        </client-only>

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
        primarySrc: '',
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

        ]
    })
}
</script>

<style>
h1 {
  font-family: 'Sriracha', cursive;
}
</style>
