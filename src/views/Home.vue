<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import { globalStore } from '@store/globalStore.js'

const store = globalStore()

// Declaración de variables
const products = ref([
    { name: 'GIT', value: 'mdi mdi-github', tipo: 'interno' },
    { name: 'PYTHON', value: 'mdi mdi-language-python', tipo: 'interno' },
    { name: 'JAVASCRIPT', value: 'mdi mdi-language-javascript', tipo: 'interno' },
    { name: 'VUE JS', value: 'mdi mdi-vuejs', tipo: 'interno' },
    { name: 'HTML 5', value: 'mdi mdi-language-html5', tipo: 'interno' },
    { name: 'JAVA', value: 'mdi mdi-language-java', tipo: 'interno' },
    { name: 'CSS 3', value: 'mdi mdi-language-css3', tipo: 'interno' },
    // Controlar ícono claro u oscuro
    { name: 'DJANGO', value: `/layout/images/icons/django-${store.lightordarkmode ? 'light' : 'dark'}.png`, tipo: 'externo' },
    { name: 'POSTGRESQL', value: `/layout/images/icons/postgresql-${store.lightordarkmode ? 'light' : 'dark'}.png`, tipo: 'externo' },
    { name: 'FASTAPI', value: `/layout/images/icons/fastapi-${store.lightordarkmode ? 'light' : 'dark'}.png`, tipo: 'externo' },
    { name: 'FLASK', value: `/layout/images/icons/flask-${store.lightordarkmode ? 'light' : 'dark'}.png`, tipo: 'externo' },
    { name: 'MY SQL', value: `/layout/images/icons/mysql-${store.lightordarkmode ? 'light' : 'dark'}.png`, tipo: 'externo' },
])
const computedProducts = computed(() => {
    return products.value
});

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>

<template>
    <div class="card">
        <div class="grid align-items-center justify-content-center">
            <div class="md:col-3 col-12 flex justify-content-center md:justify-content-end">
                <img class="custom-img" src="/layout/images/avatar/avatar-m-1.jpg" alt="Image" width="250" />
            </div>
            <div class="md:col-6 col-12 flex md:justify-content-end">
                <div class="col-12">
                    <div class="font-light text-md opacity-60 mb-1">
                        LADRÓN DEL BARRIO
                    </div>
                    <div class="font-bold text-4xl mb-2">
                        JUANITO ALIMAÑA
                    </div>
                    <div class="font-normal text-lg">
                        <p class="italic">
                            Explorador intrépido en el laberinto de la vida, navegando entre los desafíos y las alegrías
                            con la
                            destreza de un equilibrista y la curiosidad de un niño. Su historia es un testamento a la
                            resiliencia y al
                            poder transformador del amor y la amistad en el viaje del alma hacia la plenitud.
                        </p>
                    </div>
                    <!-- <div class="mt-1 opacity-70">
                        <i class="mdi mdi-github mr-2" style="font-size: 2rem" />
                        <i class="mdi mdi-gmail mr-2" style="font-size: 2rem" />
                        <i class="mdi mdi-linkedin" style="font-size: 2rem" />
                    </div> -->
                </div>
            </div>
        </div>
        <!-- Sección tecnologías -->
        <div class="text-center">
            <Divider align="center" type="dotted">
                <span class="text-xxl font-bold">Tecnologías</span>
            </Divider>
            <Carousel :value="computedProducts" circular :autoplayInterval="2500" :responsiveOptions="responsiveOptions"
                :showIndicators="false">
                <template #item="slotProps">
                    <div class="m-2 p-3 formgrid">
                        <div class="field mb-0">
                            <icon :class="slotProps.data.value" style="font-size: 5rem;"
                                v-if="slotProps.data.tipo === 'interno'" />
                            <icon style="font-size: 5rem;" v-else>
                                <img :src="slotProps.data.value" height="70">
                            </icon>
                        </div>
                        <span>{{ slotProps.data.name }}</span>
                    </div>
                </template>
            </Carousel>
        </div>
        <!-- <div class="card bg-green-300 text-center">
            Estudios (dentro de un carrousel)
        </div>
        <div class="card bg-purple-300 text-center">
            Proyectos (dentro de un carrousel)
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
.custom-img {
    border-radius: 50%;
}
</style>
