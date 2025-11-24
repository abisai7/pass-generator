# Secure Password Generator

A lightweight, secure password generator library for TypeScript and JavaScript.

## Features

- Cryptographically secure random number generation
- Customizable length and character sets
- TypeScript support
- Works in Node.js and Browser
- UMD and ESM builds

## Installation

### NPM

```bash
npm install pass-generator
```

### CDN

```html
<script src="https://unpkg.com/pass-generator/dist/pass-generator.umd.js"></script>
```

## Usage

### ES Modules

```typescript
import { generatePassword } from 'pass-generator';

const password = generatePassword({
  length: 16,
  includeSymbols: true
});
console.log(password);
```

### Browser (CDN)

```html
<script>
  const password = PassGenerator.generatePassword({ length: 12 });
  console.log(password);
</script>
```

## API

### `generatePassword(options?)`

Returns a random string.

#### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `length` | `number` | `12` | Length of the password |
| `includeUppercase` | `boolean` | `true` | Include A-Z |
| `includeLowercase` | `boolean` | `true` | Include a-z |
| `includeNumbers` | `boolean` | `true` | Include 0-9 |
| `includeSymbols` | `boolean` | `true` | Include !@#$%^&*... |
