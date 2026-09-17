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

features:
    - title: Secure
      details: Uses cryptographically strong random values.
    - title: Flexible
      details: Customizable length and character sets.
    - title: TypeScript
      details: Written in TypeScript with full type definitions.
---

<script setup>
import PasswordGenerator from './components/PasswordGenerator.vue'
import NpmStats from './components/NpmStats.vue'
</script>

<NpmStats />

## Live Demo

<PasswordGenerator />
