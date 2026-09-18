<script setup lang="ts">
import { Braces, ShieldCheck, SlidersHorizontal } from '@lucide/vue';

const features = [
    {
        title: 'Secure',
        details: 'Uses cryptographically strong random values.',
        icon: ShieldCheck,
    },
    {
        title: 'Flexible',
        details: 'Customizable length and character sets.',
        icon: SlidersHorizontal,
    },
    {
        title: 'TypeScript',
        details: 'Written in TypeScript with full type definitions.',
        icon: Braces,
    },
];
</script>

<template>
    <section class="feature-cards" aria-label="Library features">
        <article v-for="feature in features" :key="feature.title" class="feature-card">
            <span class="feature-icon" aria-hidden="true"
                ><component :is="feature.icon" :size="22"
            /></span>
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.details }}</p>
        </article>
    </section>
</template>

<style scoped>
.feature-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin: 36px 0 54px;
}

.feature-card {
    padding: 24px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: linear-gradient(145deg, var(--vp-c-bg-soft), var(--vp-c-bg-alt));
    box-shadow: 0 10px 28px rgb(15 118 110 / 6%);
}

.feature-icon {
    display: inline-grid;
    place-items: center;
    width: 42px;
    height: 42px;
    margin-bottom: 18px;
    color: #ecfeff;
    background: linear-gradient(135deg, #0f766e, #0891b2);
    border: 1px solid rgb(103 232 249 / 45%);
    border-radius: 8px;
    box-shadow: 0 8px 18px rgb(8 145 178 / 22%);
}

.feature-card h2 {
    margin: 0;
    border: 0;
    font-size: 18px;
    line-height: 1.35;
}

.feature-card p {
    margin: 8px 0 0;
    color: var(--vp-c-text-2);
    font-size: 14px;
    line-height: 1.6;
}

@media (max-width: 640px) {
    .feature-cards {
        grid-template-columns: 1fr;
        margin-top: 28px;
    }
}
</style>
