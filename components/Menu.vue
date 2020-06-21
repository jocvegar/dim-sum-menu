<template>
    <div class="container mx-auto px-4">
        <h1 v-if="$nuxt.$route.name != 'menu'" class="text-4xl text-center font-bold underline my-6">
            NUESTRO MENU
        </h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="item in items" :key="item.id" >
                <div class="w-full">
                    <div class="border border-gray-400 bg-gray-200 rounded-md px-6 py-2 flex flex-col justify-around leading-normal my-2 h-40">
                        <div class="mb-1">
                            <div class="text-gray-900 font-bold text-xl mb-1 title"> {{ item.title | upcase }}</div>
                            <p class="text-gray-700 text-base description">{{ item.description }}</p>
                        </div>
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">{{ item.units }}</p>
                            <p class="text-gray-600">Lps. {{ item.price }}</p>
                        </div>
                    </div>
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
                },
                {
                    id: 3,
                    title: "Pastelitos de Carne",
                    description: "Pastelitos  de carne de cerdo y hongo shiitake fritos",
                    units: "2 unidades",
                    price: "65"
                },
                {
                    id: 4,
                    title: "Pastelitos de Malanga",
                    description: "Pastelitos rellenos de carne de cerdo",
                    units: "2 unidades",
                    price: "65"
                },
                {
                    id: 5,
                    title: "Pastelitos de Frijol",
                    description: "Pastelitos rellenos con frijol dulce, fritos y cubiertos con semillas de ajonjolí",
                    units: "2 unidades",
                    price: "65"
                },
                {
                    id: 6,
                    title: "Pastelitos de Nabo",
                    description: "Pastelitos rellenos con carne de cerdo",
                    units: "2 unidades",
                    price: "65"
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
