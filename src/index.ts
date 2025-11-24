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

export function generatePassword(options: PasswordOptions = {}): string {
    const {
        length = 12,
        includeUppercase = true,
        includeLowercase = true,
        includeNumbers = true,
        includeSymbols = true,
        humanReadable = false,
    } = options;

    if (humanReadable) {
        let numCount = includeNumbers ? (length >= 8 ? 2 : 1) : 0;
        let symbolCount = includeSymbols ? (length >= 8 ? 2 : 1) : 0;

        // Ensure we don't exceed length
        if (numCount + symbolCount > length) {
            if (includeNumbers && includeSymbols) {
                numCount = Math.floor(length / 2);
                symbolCount = length - numCount;
            } else if (includeNumbers) {
                numCount = length;
            } else {
                symbolCount = length;
            }
        }

        const wordLength = length - numCount - symbolCount;
        let password = '';

        // Generate pronounceable part
        if (wordLength > 0) {
            const values = new Uint32Array(wordLength);
            crypto.getRandomValues(values);

            // Start with consonant or vowel randomly? Let's alternate.
            // To make it sound like a word, starting with Consonant is usually safer, but random is fine.
            // Let's stick to strict C-V-C-V...
            let useConsonant = values[0] % 2 === 0;

            for (let i = 0; i < wordLength; i++) {
                const set = useConsonant ? CONSONANTS : VOWELS;
                let char = set[values[i] % set.length];

                if (includeUppercase && values[i] % 3 === 0) { // Randomly uppercase ~33%
                    char = char.toUpperCase();
                }

                password += char;
                useConsonant = !useConsonant;
            }
        }

        // Append numbers
        if (numCount > 0) {
            const numValues = new Uint32Array(numCount);
            crypto.getRandomValues(numValues);
            for (let i = 0; i < numCount; i++) {
                password += NUMBERS[numValues[i] % NUMBERS.length];
            }
        }

        // Append symbols
        if (symbolCount > 0) {
            const symValues = new Uint32Array(symbolCount);
            crypto.getRandomValues(symValues);
            for (let i = 0; i < symbolCount; i++) {
                password += SYMBOLS[symValues[i] % SYMBOLS.length];
            }
        }

        return password;
    }

    let charset = '';
    if (includeUppercase) charset += UPPERCASE;
    if (includeLowercase) charset += LOWERCASE;
    if (includeNumbers) charset += NUMBERS;
    if (includeSymbols) charset += SYMBOLS;

    if (charset === '') {
        throw new Error('At least one character set must be selected.');
    }

    let password = '';
    const values = new Uint32Array(length);
    crypto.getRandomValues(values);

    for (let i = 0; i < length; i++) {
        password += charset[values[i] % charset.length];
    }

    return password;
}
