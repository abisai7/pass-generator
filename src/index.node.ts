import { webcrypto } from 'node:crypto';
import { generatePasswordCore, PasswordOptions } from './core';

export type { PasswordOptions };

export function generatePassword(options?: PasswordOptions): string {
    return generatePasswordCore(webcrypto as any, options);
}
