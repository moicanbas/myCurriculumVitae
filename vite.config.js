import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        isCustomElement: (tag) => ['md-linedivider'].includes(tag)
                    }
                }
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
                '@compone   nts': fileURLToPath(new URL('./src/components', import.meta.url))
            }
        },
        server: {
            host: true
        }
    };
});
