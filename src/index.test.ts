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
        expect(() =>
            generatePassword({
                includeUppercase: false,
                includeLowercase: false,
                includeNumbers: false,
                includeSymbols: false,
            }),
        ).toThrow();
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

    describe('humanReadable', () => {
        it('should generate a password of correct length', () => {
            const password = generatePassword({ humanReadable: true, length: 16 });
            expect(password.length).toBe(16);
        });

        it('should include numbers and symbols at the end by default', () => {
            const password = generatePassword({ humanReadable: true, length: 12 });
            // Default: numbers=true, symbols=true. Length 12 >= 8, so 2 nums, 2 symbols.
            // Last 4 chars should be numbers and symbols.
            const suffix = password.slice(-4);
            expect(suffix).toMatch(/[0-9]{2}[!@#$%^&*()_+~`|}{[\]:;?><,./-=]{2}/);
        });

        it('should follow consonant-vowel alternation in the word part', () => {
            // Disable numbers and symbols to test the word part only
            const password = generatePassword({
                humanReadable: true,
                length: 10,
                includeNumbers: false,
                includeSymbols: false,
            });

            const vowels = 'aeiouAEIOU';
            const isVowel = (char: string) => vowels.includes(char);

            for (let i = 0; i < password.length - 1; i++) {
                expect(isVowel(password[i])).not.toBe(isVowel(password[i + 1]));
            }
        });

        it('should respect includeUppercase option', () => {
            const password = generatePassword({
                humanReadable: true,
                length: 20,
                includeUppercase: false,
                includeNumbers: false,
                includeSymbols: false,
            });
            expect(password).toMatch(/^[a-z]+$/);
        });
    });
});
