<script setup>
import AppMenuItem from './AppMenuItem.vue';
import { ref } from 'vue';

const model = ref([
    {
        label: 'menu',
        icon: 'pi pi-home',
        items: [
            {
                label: 'home',
                icon: 'pi pi-fw pi-home',
                to: '/'
            }
        ]
    },
    { separator: true },
    {
        label: 'projects',
        icon: 'pi pi-th-large',
        items: [
            {
                label: 'project1',
                icon: 'pi pi-sitemap',
                url: 'http://127.0.0.1:8000/erp/',
                target: '_blank',
            },
            {
                label: 'project2',
                icon: 'mdi mdi-clipboard-list-outline',
                url: 'http://127.0.0.1:8000/erp/',
                target: '_blank',
            },
            // {
            //     label: 'Blog',
            //     icon: 'pi pi-fw pi-comment',
            //     items: [
            //         {
            //             label: 'List',
            //             icon: 'pi pi-fw pi-image',
            //             to: '/apps/blog/list'
            //         },
            //         {
            //             label: 'Detail',
            //             icon: 'pi pi-fw pi-list',
            //             to: '/apps/blog/detail'
            //         },
            //         {
            //             label: 'Edit',
            //             icon: 'pi pi-fw pi-pencil',
            //             to: '/apps/blog/edit'
            //         }
            //     ]
            // },
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu mt-0">
        <template v-for="(item, i) in model" :key="item">
            <AppMenuItem v-if="!item.separator" :item="item" root :index="i" />

            <li v-else class="menu-separator mb-3"></li>
        </template>
    </ul>
</template>
