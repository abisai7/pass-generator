import { defineConfig } from 'vitepress';
import { resolve } from 'path';

export default defineConfig({
    title: 'Pass Generator',
    description: 'A secure and flexible password generator library.',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide' },
            { text: 'API', link: '/api' },
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Getting Started', link: '/guide' },
                    { text: 'API Reference', link: '/api' },
                ],
            },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/abisai7/pass-generator' }],
    },
    vite: {
        configFile: false,
        resolve: {
            alias: {
                '@abisai7/pass-generator': resolve(__dirname, '../../src/index.ts'),
            },
        },
    },
});
