import { defineConfig } from 'vitepress';
import { resolve } from 'path';

export default defineConfig({
    base: '/pass-generator/',
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

        footer: {
            message:
                'Released under the <a href="https://github.com/abisai7/pass-generator/blob/main/LICENSE">ISC License</a>.',
            copyright: 'Copyright © 2025-present <a href="https://abisai.dev">Abisai Herrera</a>',
        },
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
