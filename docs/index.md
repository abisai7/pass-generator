---
layout: home

hero:
    name: 'Pass Generator'
    text: 'Secure Password Generator'
    tagline: A flexible and secure password generator library for Node.js and the browser.
    actions:
        - theme: brand
          text: Get Started
          link: /guide
        - theme: alt
          text: API Reference
          link: /api
---

<script setup>
import PasswordGenerator from './components/PasswordGenerator.vue'
import NpmStats from './components/NpmStats.vue'
import FeatureCards from './components/FeatureCards.vue'
import SectionTitle from './components/SectionTitle.vue'
</script>

<NpmStats />

<FeatureCards />

<SectionTitle id="live-demo" title="Live Demo" />

<PasswordGenerator />
