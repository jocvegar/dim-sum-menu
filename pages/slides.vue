<template>
    <div class="w-auto h-64 mx-auto">
        <!-- <span v-for="(slide, idx) in slides" :key="slide.idx"> -->
            <img :src="image">
        <!-- </span> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 1,
            // slides: [
            //     {image: require('@/assets/images/image-1.jpg')},
            //     {image: require('@/assets/images/image-2.jpg')},
            // ]
        }
    },
    // methods: {
    //     getSlide() {
    //         return require(`@/assets/images/image-${this.id}.jpg`)
    //         this.id = this.id + 1
    //     }
    // },
    computed: {
        image: function () {
            return require(`@/assets/images/image-${this.id}.jpg`)
        }
    },
    created: function() {
		setInterval(function() {
            if (this.id<30) {
                this.id++
            }
        }, 500);
	}
}
</script>

<style>

</style>
