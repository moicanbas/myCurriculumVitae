<script setup>
import AppMenu from './AppMenu.vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutState, layoutConfig } = useLayout();
const router = useRouter();

let timeout = null;

const onMouseEnter = () => {
    if (!layoutState.anchored.value) {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        layoutState.sidebarActive.value = true;
    }
};

const onMouseLeave = () => {
    if (!layoutState.anchored.value) {
        if (!timeout) {
            timeout = setTimeout(() => (layoutState.sidebarActive.value = false), 300);
        }
    }
};

const anchor = () => {
    layoutState.anchored.value = !layoutState.anchored.value;
};

const navigateToHome = () => router.push('/')

</script>

<template>
    <div class="layout-sidebar" @mouseenter="onMouseEnter()" @mouseleave="onMouseLeave()">
        <div class="sidebar-header flex justify-content-start">
            <a @click="navigateToHome" class="app-logo" style="cursor: pointer">
                <div class="app-logo-small h-2rem">
                    <img
                        :src="'/layout/images/logo/logo-' + (layoutConfig.colorScheme.value === 'light' ? 'dark' : 'light') + '.png'" />
                </div>
                <div class="app-logo-normal">
                    <!-- <img class="h-2rem" :src="'/layout/images/logo/logo-' + (layoutConfig.colorScheme.value === 'light' ? 'dark' : 'light') + '.png'" />
                    <img class="h-2rem ml-3" :src="'/layout/images/logo/appname-' + (layoutConfig.colorScheme.value === 'light' ? 'dark' : 'light') + '.png'" /> -->
                </div>
            </a>
            <Button class="layout-sidebar-anchor items-center justify-center" rounded type="button" @click="anchor"
                v-tooltip.right="layoutState.anchored.value ? 'Desfijar' : 'Fijar'" text
                :class="{ 'bg-blue-500': layoutState.anchored.value, 'text-white': layoutState.anchored.value }">
                <icon class="mr-1" :class="`${layoutState.anchored.value ? 'mdi mdi-pin-outline' : 'mdi mdi-pin'}`" />
            </Button>
        </div>

        <div class="layout-menu-container">
            <AppMenu />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
