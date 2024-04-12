<script setup>
import AppMenuItem from './AppMenuItem.vue';
import { ref } from 'vue';

const model = ref([
    {
        label: 'Dashboards',
        icon: 'pi pi-home',
        items: [
            {
                label: 'E-Commerce',
                icon: 'pi pi-fw pi-home',
                to: '/'
            }
        ]
    },
    { separator: true },
    {
        label: 'Mis Proyectos',
        icon: 'pi pi-th-large',
        items: [
            {
                label: 'Blog',
                icon: 'pi pi-fw pi-comment',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-image',
                        to: '/apps/blog/list'
                    },
                    {
                        label: 'Detail',
                        icon: 'pi pi-fw pi-list',
                        to: '/apps/blog/detail'
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        to: '/apps/blog/edit'
                    }
                ]
            },
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <AppMenuItem v-if="!item.separator" :item="item" root :index="i"/>

            <li v-else class="menu-separator mb-3"></li>
        </template>
    </ul>
</template>
