# API Reference

## generatePassword(options?)

Generates a secure random password.

### Parameters

- `options` (optional): `PasswordOptions` object.

### Returns

- `string`: The generated password.

## PasswordOptions

Interface for password generation options.

| Property                   | Type      | Default | Description                                                           |
| :------------------------- | :-------- | :------ | :-------------------------------------------------------------------- |
| `length`                   | `number`  | `12`    | Length of the password.                                               |
| `numbers`                  | `boolean` | `true`  | Include numbers.                                                      |
| `symbols`                  | `boolean` | `true`  | Include symbols.                                                      |
| `uppercase`                | `boolean` | `true`  | Include uppercase letters.                                            |
| `lowercase`                | `boolean` | `true`  | Include lowercase letters.                                            |
| `excludeSimilarCharacters` | `boolean` | `false` | Exclude similar characters (e.g., 'i', 'l', '1', 'L', 'o', '0', 'O'). |
| `strict`                   | `boolean` | `false` | Ensure at least one character from each selected set is included.     |
