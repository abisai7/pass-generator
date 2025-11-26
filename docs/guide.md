# Getting Started

## Installation

```bash
npm install @abisai7/pass-generator
```

## Usage

```typescript
import { generatePassword } from '@abisai7/pass-generator';

// Generate a default password (12 chars, mixed case, numbers, symbols)
const password = generatePassword();
console.log(password);

// Generate a custom password
const customPassword = generatePassword({
    length: 16,
    numbers: true,
    symbols: false,
    uppercase: true,
    lowercase: true,
    excludeSimilarCharacters: true,
});
console.log(customPassword);
```
