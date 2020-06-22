import Vue from 'vue'
import Slideshow from 'vue-collage-slideshow'

if (process.client) {
    Vue.use(Slideshow)
}
