<script setup lang="ts">
import { Sparkles } from '@lucide/vue';

defineProps<{
    id: string;
    title: string;
}>();
</script>

<template>
    <h2 :id="id" class="section-title">
        <span class="section-title-icon" aria-hidden="true"><Sparkles :size="19" /></span>
        {{ title }}
    </h2>
</template>

<style scoped>
.section-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 3rem 0 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 25%, var(--vp-c-divider));
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3333333;
    scroll-margin-top: var(--vp-nav-height);
}

.section-title-icon {
    display: inline-grid;
    place-items: center;
    width: 30px;
    height: 30px;
    color: #ecfeff;
    background: linear-gradient(135deg, #0f766e, #0891b2);
    border: 1px solid rgb(103 232 249 / 45%);
    border-radius: 6px;
}
</style>
