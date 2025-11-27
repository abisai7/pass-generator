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
        password.value = 'Error: At least one option must be selected';
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
                    <span class="checkmark"></span>
                    Uppercase (A-Z)
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" v-model="includeLowercase" />
                    <span class="checkmark"></span>
                    Lowercase (a-z)
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" v-model="includeNumbers" />
                    <span class="checkmark"></span>
                    Numbers (0-9)
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" v-model="includeSymbols" />
                    <span class="checkmark"></span>
                    Symbols (!@#$)
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" v-model="humanReadable" />
                    <span class="checkmark"></span>
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
    accent-color: var(--vp-c-brand-2);
}

.options-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    user-select: none;
    position: relative;
    padding-left: 35px; /* Space for custom checkbox */
    font-size: 1.05em;
}

/* Hide default checkbox */
.checkbox-label input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Custom checkbox */
.checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 24px;
    width: 24px;
    background-color: var(--vp-c-bg);
    border: 2px solid var(--vp-c-divider);
    border-radius: 6px;
    transition: all 0.2s ease;
}

/* On mouse-over, add a grey background color */
.checkbox-label:hover input ~ .checkmark {
    border-color: var(--vp-c-brand-2);
}

/* When the checkbox is checked, add a blue background */
.checkbox-label input:checked ~ .checkmark {
    background-color: var(--vp-c-brand-2);
    border-color: var(--vp-c-brand-2);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: '';
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.checkbox-label input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.checkbox-label .checkmark:after {
    left: 8px;
    top: 4px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.generate-btn {
    background-color: var(--vp-button-brand-bg);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 24px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1em;
    transition: all 0.2s;
    align-self: center;
    margin-top: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.generate-btn:hover {
    filter: brightness(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
}

.generate-btn:active {
    transform: translateY(0);
}
</style>
