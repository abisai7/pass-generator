<script setup lang="ts">
import { withBase } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { BookOpen, Boxes, GitBranch, KeyRound, Sparkles } from '@lucide/vue';

const { Layout } = DefaultTheme;
</script>

<template>
    <Layout>
        <template #nav-bar-title-before>
            <span class="brand-mark" aria-hidden="true"><KeyRound :size="18" /></span>
        </template>
        <template #nav-bar-content-after>
            <a class="nav-icon-link" :href="withBase('/guide')" aria-label="Guide" title="Guide">
                <BookOpen :size="18" />
            </a>
            <a
                class="nav-icon-link"
                :href="withBase('/api')"
                aria-label="API reference"
                title="API reference"
            >
                <Boxes :size="18" />
            </a>
            <a
                class="nav-icon-link"
                href="https://github.com/abisai7/pass-generator"
                aria-label="GitHub repository"
                title="GitHub repository"
            >
                <GitBranch :size="18" />
            </a>
        </template>
        <template #home-hero-info-before>
            <div class="hero-kicker"><Sparkles :size="16" /> Password tooling for TypeScript</div>
        </template>
    </Layout>
</template>
