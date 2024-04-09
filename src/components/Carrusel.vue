<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
    items: Array
})

// Declaración de variables
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
    <Carousel :value="props.items" circular :autoplayInterval="3200" :responsiveOptions="responsiveOptions"
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
</template>
<style lang="scss" scoped></style>