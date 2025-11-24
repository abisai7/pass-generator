export interface PasswordOptions {
    length?: number;
    includeUppercase?: boolean;
    includeLowercase?: boolean;
    includeNumbers?: boolean;
    includeSymbols?: boolean;
    humanReadable?: boolean;
}

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
const VOWELS = 'aeiou';

/** 
 * Returns a random string from a charset 
 * */
function randomChars(charset: string, count: number): string {
    if (count <= 0) return '';
    const values = new Uint32Array(count);
    crypto.getRandomValues(values);
    return Array.from(values, v => charset[v % charset.length]).join('');
}

/** 
 * Generates a pronounceable sequence by alternating consonants and vowels 
 * */
function generatePronounceable(length: number, includeUppercase: boolean): string {
    if (length <= 0) return '';

    const values = new Uint32Array(length);
    crypto.getRandomValues(values);

    let useConsonant = values[0] % 2 === 0;
    const result: string[] = [];

    for (let i = 0; i < length; i++) {
        const set = useConsonant ? CONSONANTS : VOWELS;
        let char = set[values[i] % set.length];

        // Occasionally uppercase consonant/vowel
        if (includeUppercase && values[i] % 3 === 0) {
            char = char.toUpperCase();
        }

        result.push(char);
        useConsonant = !useConsonant;
    }

    return result.join('');
}

export function generatePassword(options: PasswordOptions = {}): string {
    const {
        length = 12,
        includeUppercase = true,
        includeLowercase = true,
        includeNumbers = true,
        includeSymbols = true,
        humanReadable = false,
    } = options;

    // Human-readable password generation
    if (humanReadable) {
        let numCount = includeNumbers ? (length >= 8 ? 2 : 1) : 0;
        let symbolCount = includeSymbols ? (length >= 8 ? 2 : 1) : 0;

        // Ensure extra chars do not exceed total length
        const extra = numCount + symbolCount;
        if (extra > length) {
            if (includeNumbers && includeSymbols) {
                numCount = Math.floor(length / 2);
                symbolCount = length - numCount;
            } else if (includeNumbers) {
                numCount = length;
                symbolCount = 0;
            } else {
                symbolCount = length;
                numCount = 0;
            }
        }

        const wordLength = length - numCount - symbolCount;

        return (
            generatePronounceable(wordLength, includeUppercase) +
            randomChars(NUMBERS, numCount) +
            randomChars(SYMBOLS, symbolCount)
        );
    }

    // Standard random password generation
    let charset = '';
    if (includeUppercase) charset += UPPERCASE;
    if (includeLowercase) charset += LOWERCASE;
    if (includeNumbers) charset += NUMBERS;
    if (includeSymbols) charset += SYMBOLS;

    if (!charset) {
        throw new Error('At least one character set must be selected.');
    }

    return randomChars(charset, length);
}
