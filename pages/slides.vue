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
                    :image="slide.image"/>
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
            { image: require('@/assets/images/image-1.jpg') },
            { image: require('@/assets/images/image-2.jpg') },
            { image: require('@/assets/images/image-3.jpg') },
            { image: require('@/assets/images/image-4.jpg') },
            { image: require('@/assets/images/image-5.jpg') },
            { image: require('@/assets/images/image-6.jpg') },
            { image: require('@/assets/images/image-7.jpg') },
            { image: require('@/assets/images/image-8.jpg') },
            { image: require('@/assets/images/image-9.jpg') },
            { image: require('@/assets/images/image-10.jpg') },
        ]
    })
}
</script>

<style>
h1 {
  font-family: 'Sriracha', cursive;
}
</style>
