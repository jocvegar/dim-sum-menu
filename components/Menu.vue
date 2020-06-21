<template>
    <div class="container mx-auto px-4">
        <h1 class="text-4xl text-center font-bold">
            MENU
        </h1>

        <div v-for="item in items" :key="item.id">
            <div class="w-full">
                <div class="border border-gray-400 bg-white rounded-md px-6 py-4 flex flex-col justify-between leading-normal my-5">
                    <div class="mb-8">
                        <div class="text-gray-900 font-bold text-xl mb-2 title"> {{ item.title | upcase }}</div>
                        <p class="text-gray-700 text-base description">{{ item.description }}</p>
                    </div>
                    <!-- <div class="flex items-center"> -->
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                        <p class="text-gray-600">Aug 18</p>
                    </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: "siu mai (tapones)",
                    description: "Hechos con cerdo y camarones",
                    units: "4 unidades",
                    price: "60"
                },
                {
                    id: 2,
                    title: "panqueques chinos (scallion pancakes)",
                    description: "Estilo crepa con carne de cerdo y cebollina",
                    units: "2 unidades",
                    price: "80"
                }
            ]
        }
    },
    filters: {
        upcase: function(value) {
            return value.toUpperCase();
        }
    }
}
</script>

<style>
h1 {
    font-family: 'Montserrat', sans-serif; 
}
.title {
    font-family: 'Sriracha', cursive;
    letter-spacing: 1.5px;
}
.description {
    font-family: 'Montserrat', sans-serif;
}
</style>
