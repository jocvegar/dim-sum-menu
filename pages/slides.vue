<template>
    <hooper 
       :centerMode="true" 
       pagination="no"
       :progress="true" 
       :autoPlay="true" 
       :playSpeed="2000"
       :infiniteScroll="true"
    >
        <slide v-for="(slide, indx) in slides" :key="indx" :index="indx">
            <img :src=slide.image>
        </slide>
    </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    name: 'App',
    components: { Hooper, Slide },
    data: () => ({
        slides: [
            { image: require('~/assets/images/image-1.jpg') },
            { image: require('~/assets/images/image-2.jpg') },
            { image: require('~/assets/images/image-3.jpg') },
            { image: require('~/assets/images/image-4.jpg') },
            { image: require('~/assets/images/image-5.jpg') },
        ]    
    })
};
</script>
