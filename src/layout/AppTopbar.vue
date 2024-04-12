<script setup>
import { ref, onMounted, watch } from 'vue';
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

const langs = ref([
    {
        items: [{ code: 'en', text: 'English' },
        { code: 'es', text: 'Español' }]
    }
]);


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
            <div class="locale-changer" v-tooltip.left="$t('chooseLanguage')">
                <Dropdown v-model="$i18n.locale" :options="langs" optionLabel="text" class="w-full md:w-5rem"
                    optionValue="code" :optionGroupLabel="$t('lang')" optionGroupChildren="items">
                    <template #optiongroup>
                        <div class="flex align-items-center">
                            <i class="mdi mdi-translate mr-2"></i>
                            <div>{{ $t('lang') }}</div>
                        </div>
                    </template>
                    <template #value="slotProps">
                        <div v-if="slotProps.value.code" class="flex align-items-center">
                            <img alt="bandera - flag"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.value.code == 'en' ? 'uk' : 'es'}`"
                                style="width: 18px" />
                        </div>
                        <div v-else class="flex align-items-center">
                            <img alt="bandera - flag"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.value === 'en' ? 'uk' : 'es'}`"
                                style="width: 18px" />
                        </div>
                    </template>
                    <template #option="slotProps">
                        <div class="flex align-items-center">
                            <img alt="bandera - flag"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.option.code === 'en' ? 'uk' : 'es'}`"
                                style="width: 18px" />
                            <div>{{ slotProps.option.text }}</div>
                        </div>
                    </template>
                </Dropdown>
            </div>
            <!-- Colocar switch con luna y sol para tema claro y oscuro
                 Y ver como hacer con el tema de los colores-->
            <li class="md:mr-5 flex align-items-center">
                <Button :icon="`pi ${checked ? 'pi-sun' : 'pi-moon'}`" outlined
                    :severity="`${checked ? 'warning' : 'contrast'}`" v-model="checked" @click="darkOrLightMode" text
                    v-tooltip.left="`Cambiar a modo ${checked ? 'claro' : 'oscuro'}`" />
            </li>
        </ul>
        <div class="layout-topbar-menu-section">
            <AppSidebar />
        </div>
    </div>
</template>
