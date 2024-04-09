<script setup>
import { ref, onMounted } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import AppSidebar from './AppSidebar.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
import { usePrimeVue } from 'primevue/config';
import { globalStore } from '@store/globalStore.js'

const $primevue = usePrimeVue();
const store = globalStore()

defineExpose({
    $primevue
});

const { layoutConfig, onMenuToggle } = useLayout();

const onMenuButtonClick = () => {
    onMenuToggle();
};

const changeColorScheme = (colorScheme) => {
    const themeLink = document.getElementById('theme-link');
    const themeLinkHref = themeLink.getAttribute('href');
    const currentColorScheme = 'theme-' + layoutConfig.colorScheme.value.toString();
    const newColorScheme = 'theme-' + colorScheme;
    const newHref = themeLinkHref.replace(currentColorScheme, newColorScheme);

    replaceLink(themeLink, newHref, () => {
        layoutConfig.colorScheme.value = colorScheme;
    });
};

const replaceLink = (linkElement, href, onComplete) => {
    if (!linkElement || !href) {
        return;
    }

    const id = linkElement.getAttribute('id');
    const cloneLinkElement = linkElement.cloneNode(true);

    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');

    linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

    cloneLinkElement.addEventListener('load', () => {
        linkElement.remove();

        const element = document.getElementById(id);
        element && element.remove();

        cloneLinkElement.setAttribute('id', id);
        onComplete && onComplete();
    });
};

const checked = ref(false)

const darkOrLightMode = () => {
    checked.value = !checked.value;
    changeColorScheme(checked.value ? 'dark' : 'light')
    localStorage.setItem('lightordarkmode', checked.value);
}

onMounted(() => {
    checked.value = store.lightordarkmode
    changeColorScheme(checked.value ? 'dark' : 'light')
})
</script>

<template>
    <div class="layout-topbar mt-0 mb-2">
        <div class="topbar-start">
            <Button ref="menubutton" type="button" class="topbar-menubutton p-link p-trigger"
                @click="onMenuButtonClick">
                <i class="pi pi-bars"></i>
            </Button>

            <div class="topbar-breadcrumb">
                <AppBreadcrumb />
            </div>
        </div>
        <ul class="topbar-menu">
            <!-- Colocar switch con luna y sol para tema claro y oscuro
                 Y ver como hacer con el tema de los colores-->
            <li class="md:mr-5 flex align-items-center">
                <Button :icon="`pi ${checked ? 'pi-sun' : 'pi-moon'}`" outlined
                    v-model="checked" @click="darkOrLightMode" text
                    v-tooltip.left="`Cambiar a modo ${checked ? 'claro' : 'oscuro'}`" />
            </li>
        </ul>
        <div class="layout-topbar-menu-section">
            <AppSidebar />
        </div>
    </div>
</template>
