<template>
    <div class="container mx-auto px-6">
        <div>
            <h1 v-if="$nuxt.$route.name != 'menu'" class="menu text-4xl text-center font-bold underline my-6">
                MENU
            </h1>
        </div>

        <div  v-if="$nuxt.$route.name == 'menu'" class= "relative mx-auto w-full md:w-3/4 my-8 ">
            <i class="absolute fa fa-search text-gray-400" aria-hidden="true"></i>
            <input 
                v-model="searchWord" 
                v-on:input="search"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="busqueda...">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="item in filteredMenuItems" :key="item.id" class="h-32">
                <div class="flex flex-col justify-around border-b min-h-full">
                    <div class="mb-2">
                        <h1 class="title text-lg font-bold">{{ item.title | upcase }}</h1>
                        <h4 class="description text-base">{{ item.description }}</h4>
                    </div>
                    <div class="font-semibold pb-1">
                        <p>{{ item.units }} x Lps. {{ item.price }}</p>
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
            searchWord: "",
            items: [
                {
                    id: 1,
                    title: "siu mai (tapones)",
                    description: "Al vapor con carne de cerdo y camarones",
                    units: "4 unidades",
                    price: "60"
                },
                 {
                    id: 2,
                    title: "Wonto Frito",
                    description: "Fritos y crujientes",
                    units: "12 unidades",
                    price: "150"
                },
                {
                    id: 3,
                    title: "taco de arroz con camarones",
                    description: "Al vapor con camarones",
                    units: "2 unidades",
                    price: "90"
                },
                {
                    id: 4,
                    title: "taco de arroz con cerdo",
                    description: "Al vapor con carne de cerdo chasiu",
                    units: "2 unidades",
                    price: "80"
                },
                {
                    id: 5,
                    title: "Pastelitos de Carne",
                    description: "Pastelitos  de carne de cerdo y hongo shiitake fritos",
                    units: "2 unidades",
                    price: "65"
                },
                {
                    id: 6,
                    title: "Pastelitos de Malanga",
                    description: "Pastelitos rellenos de carne de cerdo",
                    units: "2 unidades",
                    price: "65"
                },
                {
                    id: 7,
                    title: "Pastelitos de Frijol",
                    description: "Pastelitos rellenos con frijol dulce, fritos y cubiertos con semillas de ajonjolí",
                    units: "2 unidades",
                    price: "65"
                },
                {
                    id: 8,
                    title: "Pastelitos de Nabo",
                    description: "Pastelitos rellenos con carne de cerdo",
                    units: "2 unidades",
                    price: "65"
                },
                {
                    id: 9,
                    title: "cebollina",
                    description: "Cebollina con salsa soya",
                    units: "1 porción",
                    price: "20"
                },
            ]
        }
    },
    filters: {
        upcase: function(value) {
            return value.toUpperCase();
        }
    },
    methods: {
        search() {
            this.filteredMenuItems;
        }
    },
    computed: {
        filteredMenuItems() {
            let word = this.searchWord.toLowerCase();
            return this.items.filter((item) => {
                return (item.title.toLowerCase().match(word) || item.description.toLowerCase().match(word))
            })
        },
    }
}
</script>

<style scoped>
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
.menu {
    font-family: 'Montserrat', sans-serif;
}
.fa-search {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 1rem;
}
</style>
