<script setup>
import { ref, computed } from 'vue'
import Carrusel from '@/components/Carrusel.vue';
import { useLayout } from '@/layout/composables/layout';

const { layoutConfig } = useLayout()

const tecnologies = ref([])
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 1,
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
const projects = ref([
    {
        nombre: 'Proyecto 1',
        value: 'Texto de ejemplo',
        tecnologias: ['vue', 'postgre', 'vue', 'postgre'],
        background: 'bg-red-300',
        descripcion: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
        (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal
        manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años.`
    },
    {
        nombre: 'Proyecto 2',
        value: 'Texto de ejemplo2',
        tecnologias: ['javascript', 'postgre'],
        background: 'bg-cyan-300',
        descripcion: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
        (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal
        manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años.`
    },
    {
        nombre: 'Proyecto 3',
        value: 'Texto de ejemplo3',
        tecnologias: ['javascript', 'mysql'],
        background: 'bg-primary-300',
        descripcion: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
        (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal
        manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años.`
    },
    {
        nombre: 'Proyecto 4',
        value: 'Texto de ejemplo4',
        tecnologias: ['python', 'mysql'],
        background: 'bg-yellow-300',
        descripcion: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
        (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal
        manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años.`
    },
])

const computedItems = computed(() => {
    return tecnologies.value = [
        { name: 'GIT', value: 'mdi mdi-git', tipo: 'interno' },
        { name: 'PYTHON', value: 'mdi mdi-language-python', tipo: 'interno' },
        { name: 'JAVASCRIPT', value: 'mdi mdi-language-javascript', tipo: 'interno' },
        { name: 'VUE JS', value: 'mdi mdi-vuejs', tipo: 'interno' },
        { name: 'HTML 5', value: 'mdi mdi-language-html5', tipo: 'interno' },
        { name: 'JAVA', value: 'mdi mdi-language-java', tipo: 'interno' },
        { name: 'CSS 3', value: 'mdi mdi-language-css3', tipo: 'interno' },
        { name: 'DOCKER', value: 'mdi mdi-docker', tipo: 'interno' },
        // Controlar ícono claro u oscuro
        { name: 'DJANGO', value: `/layout/images/icons/django-${layoutConfig.colorScheme.value}.png`, tipo: 'externo' },
        { name: 'POSTGRESQL', value: `/layout/images/icons/postgresql-${layoutConfig.colorScheme.value}.png`, tipo: 'externo' },
        { name: 'FASTAPI', value: `/layout/images/icons/fastapi-${layoutConfig.colorScheme.value}.png`, tipo: 'externo' },
        { name: 'FLASK', value: `/layout/images/icons/flask-${layoutConfig.colorScheme.value}.png`, tipo: 'externo' },
        { name: 'MY SQL', value: `/layout/images/icons/mysql-${layoutConfig.colorScheme.value}.png`, tipo: 'externo' },
    ]
})

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
                    <div class="font-normal text-lg text-justify">
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
        <!-- Inicio sección proyectos -->
        <div class="text-center">
            <Divider align="center" type="dotted">
                <span class="text-xxl font-bold">Proyectos</span>
            </Divider>
            <Carousel :value="projects" circular :responsiveOptions="responsiveOptions" :showIndicators="false">
                <template #item="slotProps">
                    <div style="overflow: hidden" class="card mb-0 m-1 pb-0">
                        <div class="image-container rounded-xl">
                            <img alt="user header" src="/layout/images/card-vue.jpg" height="160" />
                        </div>
                        <div class="mt-1 text-center">
                            <span class="text-2xl font-bold">{{ slotProps.data.nombre }}</span>
                        </div>
                        <div class="text-justify mb-0 pb-0 mt-1">
                            {{ slotProps.data.descripcion }}
                        </div>
                        <Divider align="center" type="dotted" class="mb-0 pb-0">
                            <span class="text-xxl font-bold">Tecnologías</span>
                        </Divider>
                        <div class="col-12 mb-0 pb-0 pt-1">
                            <template v-for="(item, index) in slotProps.data.tecnologias">
                                <Tag severity="success" rounded :value="item"/>
                                {{ index !== slotProps.data.tecnologias.length - 1 ? ' ' : '' }}
                            </template>
                        </div>
                        <div class="flex gap-3 mt-0 justify-content-center mb-0 pb-0">
                            <Button text severity="secondary" v-tooltip.left="'Ver código fuente'"
                                icon="mdi mdi-github mdi-24px" />
                            <Button text severity="secondary" v-tooltip.right="'Ver en vivo'"
                                icon="mdi mdi-link-variant mdi-24px" />
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
        <!-- Fin sección proyectos -->
        <!-- Inicio sección tecnologías -->
        <div class="text-center">
            <Divider align="center" type="dotted">
                <span class="text-xxl font-bold">Tecnologías</span>
            </Divider>
            <Carrusel :items="computedItems" />
        </div>
        <!-- Fin sección tecnologías -->
        <!-- Inicio sección experiencia -->
        <div class="grid">
            <Divider align="center" type="dotted">
                <span class="text-xxl font-bold">Experiencia</span>
            </Divider>
            <div class="flex justify-content-center">
                <Card class="col-5 card text-justify">
                    <template #title>
                        <div class="text-center">Robo a mano armada</div>
                    </template>
                    <template #subtitle>
                        <div class="text-center">mi barrio 2002 - mi muerte</div>
                    </template>
                    <template #content>
                        <ul class="list-disc mt-0 mb-0">
                            <li>Lideré mi equipo en el asalto a la joyería "Diamantes del Caribe". Con armas en mano,
                                entramos en la tienda y nos aseguramos de mantener el control absoluto de la situación,
                                manteniendo a raya al personal y a los clientes.
                            </li>
                            <li>Actuamos con rapidez y determinación, vaciando las vitrinas y las cajas registradoras
                                sin vacilar. La adrenalina corría por mis venas mientras observaba cómo se acumulaba
                                nuestro botín en nuestras manos.
                            </li>
                            <li>A pesar de la cercana llegada de la policía, logramos escapar sin ser atrapados, dejando
                                atrás un rastro de incertidumbre y desafío para quienes intentaban detenernos.
                            </li>
                        </ul>
                    </template>
                </Card>
                <Divider layout="vertical" />
                <Card class="col-5 card text-justify">
                    <template #title>
                        <div class="text-center">Robo a mano desarmada</div>
                    </template>
                    <template #subtitle>
                        <div class="text-center">mi muerte - mas allá</div>
                    </template>
                    <template #content>
                        <ul class="list-disc mt-0 mb-0">
                            <li>Decidimos adoptar un enfoque más astuto esta vez. Entramos al Banco Nacional de la
                                Ciudad sin armas a la vista, camuflados entre los clientes. Utilizamos nuestra
                                inteligencia y habilidades para manipular los sistemas bancarios a nuestro favor.
                            </li>
                            <li>Sin levantar sospechas, ejecutamos nuestro plan de fraude con precisión quirúrgica,
                                desviando fondos a nuestras cuentas sin dejar rastro. Cada movimiento estaba
                                cuidadosamente calculado para evitar ser detectados.
                            </li>
                            <li>Cuando finalmente salimos del banco con nuestro botín, sentí una mezcla de excitación y
                                satisfacción. Habíamos burlado al sistema una vez más, dejando a todos preguntándose
                                cómo lo habíamos logrado.
                            </li>
                        </ul>
                    </template>
                </Card>
            </div>
        </div>
        <!-- Fin sección experiencia -->
        <!-- Inicio sección sobre mí -->

        <!-- Fin sección sobre mí -->
        <!-- <div class="card bg-purple-300 text-center">
            Proyectos (dentro de un carrousel)
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
.custom-img {
    border-radius: 50%;
}
</style>
