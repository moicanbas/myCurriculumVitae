<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const route = useRoute();
const breadcrumbRoutes = ref([]);
const { showSidebar } = useLayout();
const searchInput = ref(null);
const searchActive = ref(false);

const setBreadcrumbRoutes = () => {
    if (route.meta.breadcrumb) {
        breadcrumbRoutes.value = route.meta.breadcrumb;

        return;
    }

    breadcrumbRoutes.value = route.fullPath
        .split('/')
        .filter((item) => item !== '')
        .filter((item) => isNaN(Number(item)))
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1));
};

const activateSearch = () => {
    searchActive.value = true;
    setTimeout(() => {
        searchInput.value.$el.focus();
    }, 100);
};
const deactivateSearch = () => {
    searchActive.value = false;
};

const onSidebarButtonClick = () => {
    showSidebar();
};

watch(
    route,
    () => {
        setBreadcrumbRoutes();
    },
    { immediate: true }
);
</script>

<template>
    <div class="layout-breadcrumb flex align-items-center relative h-3rem mb-0 mt-2">
        <nav>
            <ol class="relative z-2">
                <template v-for="(breadcrumbRoute, i) in breadcrumbRoutes" :key="breadcrumbRoute">
                    <li>{{ breadcrumbRoute }}</li>
                    <li v-if="i !== breadcrumbRoutes.length - 1" class="layout-breadcrumb-chevron">/</li>
                </template>
            </ol>
        </nav>
    </div>
</template>
