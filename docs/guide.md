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
    length: 8,
    includeUppercase: false,
    includeLowercase: false,
    includeSymbols: false,
});
console.log(customPassword);
// → "92710485"

// Human-readable password
const humanReadablePassword = generatePassword({ length: 10, humanReadable: true });
console.log(humanReadablePassword);
// → "mavuroked" (example)
```
