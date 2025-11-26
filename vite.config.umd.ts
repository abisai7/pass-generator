import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'PassGenerator',
            fileName: () => 'pass-generator.umd.js',
            formats: ['umd'],
        },
        emptyOutDir: false, // Don't empty dist as it might contain other build artifacts
    },
});
