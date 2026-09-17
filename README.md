# 🔐 Secure Password Generator

A lightweight and secure **password generator** library for **TypeScript** and **JavaScript**.  
Designed for both **Node.js** and **browser environments**, using cryptographically strong randomness to generate secure passwords.

Perfect for authentication systems, user onboarding, security tools, or any application requiring strong random strings.

## 🚀 Features

- ✔ **Cryptographically secure** random generation
- ✔ Fully **customizable** length and character sets
- ✔ **Human-readable / pronounceable** password mode
- ✔ **Universal compatibility**
    - Uses `node:crypto` in Node.js
    - Uses **Web Crypto API** in browsers
- ✔ **TypeScript** support (with full type definitions)
- ✔ Includes **ESM**, **CJS**, and **UMD** builds
- ✔ Zero dependencies
- ✔ Lightweight and fast

## 📋 Requirements

- Node.js >= 16
- npm >= 8

## 📦 Installation

### NPM

```bash
npm install @abisai7/pass-generator
```

### CDN

```html
<script src="https://unpkg.com/@abisai7/pass-generator/dist/pass-generator.umd.js"></script>
```

## 📚 Usage

### ES Modules

```typescript
import { generatePassword } from '@abisai7/pass-generator';

const password = generatePassword({
    length: 16,
    includeSymbols: true,
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

## 📘 API Reference

### `generatePassword(options?)`

Returns a secure, random password string.

#### Options

| Option             | Type      | Default | Description                       |
| ------------------ | --------- | ------- | --------------------------------- |
| `length`           | `number`  | `12`    | Length of the password            |
| `includeUppercase` | `boolean` | `true`  | Include A-Z                       |
| `includeLowercase` | `boolean` | `true`  | Include a-z                       |
| `includeNumbers`   | `boolean` | `true`  | Include 0-9                       |
| `includeSymbols`   | `boolean` | `true`  | Include !@#$%^&\*...              |
| `humanReadable`    | `boolean` | `false` | Generate a pronounceable password |

## 💡 Examples

### **Human-readable password**

```ts
generatePassword({ length: 10, humanReadable: true });
// → "mavuroked" (example)
```

### **Numbers only**

```ts
generatePassword({
    length: 8,
    includeUppercase: false,
    includeLowercase: false,
    includeSymbols: false,
});
// → "92710485"
```

### **Symbols only**

```ts
generatePassword({
    length: 6,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: true,
});
```

## ❓ Why Use This Library?

- Uses **true cryptographic randomness**
- Works **the same** in Node.js and in browsers
- Cleaner API than most password generator packages
- Minimal footprint, zero dependencies
- Can generate both **strong security passwords** and **human-friendly strings**
- Actively maintained and TypeScript-first

## 📜 License

MIT
