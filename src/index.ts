import { generatePasswordCore, PasswordOptions } from './core';

export type { PasswordOptions };

export function generatePassword(options?: PasswordOptions): string {
    if (typeof globalThis.crypto === 'undefined' || typeof globalThis.crypto.getRandomValues !== 'function') {
        throw new Error('Web Crypto API is not available in this environment. If you are using Node.js, please import from the package root which should resolve to the Node.js version automatically, or ensure you are on Node.js 19+.');
    }
    return generatePasswordCore(globalThis.crypto as any, options);
}
