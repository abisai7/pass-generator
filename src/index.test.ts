import { describe, it, expect } from 'vitest';
import { generatePassword } from './index';

describe('generatePassword', () => {
    it('should generate a password of default length 12', () => {
        const password = generatePassword();
        expect(password.length).toBe(12);
    });

    it('should generate a password of specified length', () => {
        const password = generatePassword({ length: 20 });
        expect(password.length).toBe(20);
    });

    it('should throw error if no character sets are selected', () => {
        expect(() => generatePassword({
            includeUppercase: false,
            includeLowercase: false,
            includeNumbers: false,
            includeSymbols: false,
        })).toThrow();
    });

    it('should include only numbers if specified', () => {
        const password = generatePassword({
            length: 100,
            includeUppercase: false,
            includeLowercase: false,
            includeNumbers: true,
            includeSymbols: false,
        });
        expect(password).toMatch(/^[0-9]+$/);
    });
});
