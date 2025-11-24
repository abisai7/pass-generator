import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
                node: resolve(__dirname, 'src/index.node.ts'),
            },
            name: 'PassGenerator',
            fileName: (format, entryName) => {
                if (entryName === 'node') {
                    return `pass-generator.node.${format === 'es' ? 'mjs' : 'js'}`;
                }
                return `pass-generator.${format === 'es' ? 'mjs' : 'umd.js'}`;
            },
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['node:crypto'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {},
            },
        },
    },
});
