<script setup lang="ts">
import { ref, watch } from 'vue';
import { generatePassword } from '../../src/index';

const length = ref(12);
const includeUppercase = ref(true);
const includeLowercase = ref(true);
const includeNumbers = ref(true);
const includeSymbols = ref(true);
const humanReadable = ref(false);

const password = ref('');
const copied = ref(false);

const generate = () => {
    try {
        password.value = generatePassword({
            length: length.value,
            includeUppercase: includeUppercase.value,
            includeLowercase: includeLowercase.value,
            includeNumbers: includeNumbers.value,
            includeSymbols: includeSymbols.value,
            humanReadable: humanReadable.value,
        });
        copied.value = false;
    } catch (e) {
        password.value = 'Error: ' + (e as Error).message;
    }
};

const copyToClipboard = async () => {
    if (!password.value) return;
    try {
        await navigator.clipboard.writeText(password.value);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

// Generate on mount and when options change
watch(
    [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, humanReadable],
    () => {
        generate();
    },
    { immediate: true },
);
</script>

<template>
    <div class="password-generator">
        <div class="display-area">
            <div class="password-display">{{ password }}</div>
            <button
                class="copy-btn"
                @click="copyToClipboard"
                :title="copied ? 'Copied!' : 'Copy to clipboard'"
            >
                <span v-if="copied">✓</span>
                <span v-else>📋</span>
            </button>
        </div>

        <div class="controls">
            <div class="control-group">
                <label>
                    Length: {{ length }}
                    <input type="range" v-model.number="length" min="4" max="64" />
                </label>
            </div>

            <div class="options-grid">
                <label class="checkbox-label">
                    <input type="checkbox" v-model="includeUppercase" />
                    Uppercase (A-Z)
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" v-model="includeLowercase" />
                    Lowercase (a-z)
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" v-model="includeNumbers" />
                    Numbers (0-9)
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" v-model="includeSymbols" />
                    Symbols (!@#$)
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" v-model="humanReadable" />
                    Human Readable
                </label>
            </div>

            <button class="generate-btn" @click="generate">Generate New Password</button>
        </div>
    </div>
</template>

<style scoped>
.password-generator {
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    padding: 20px;
    background-color: var(--vp-c-bg-soft);
    margin: 20px 0;
}

.display-area {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    background-color: var(--vp-c-bg);
    padding: 15px;
    border-radius: 6px;
    border: 1px solid var(--vp-c-divider);
}

.password-display {
    flex-grow: 1;
    font-family: monospace;
    font-size: 1.2em;
    word-break: break-all;
    color: var(--vp-c-text-1);
}

.copy-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    padding: 5px;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.copy-btn:hover {
    background-color: var(--vp-c-bg-mute);
}

.controls {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.control-group input[type='range'] {
    width: 100%;
    margin-top: 5px;
}

.options-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
}

.generate-btn {
    background-color: var(--vp-c-brand);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.2s;
    align-self: center;
    margin-top: 10px;
}

.generate-btn:hover {
    background-color: var(--vp-c-brand-dark);
}
</style>
