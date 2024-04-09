import { defineStore } from 'pinia';

export const globalStore = defineStore('store', {
    state: () => ({
        lightordarkmode: localStorage.getItem('lightordarkmode') !== null ? JSON.parse(localStorage.getItem('lightordarkmode')) : false,
        theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'purple'
    }),
    actions: {
        updateMode() {
            return this.lightordarkmode;
        }
    }
});
