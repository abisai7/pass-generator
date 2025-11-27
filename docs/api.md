# API Reference

## generatePassword(options?)

Generates a secure random password.

### Parameters

- `options` (optional): `PasswordOptions` object.

### Returns

- `string`: The generated password.

## PasswordOptions

Interface for password generation options.

| Option             | Type      | Default | Description                       |
| ------------------ | --------- | ------- | --------------------------------- |
| `length`           | `number`  | `12`    | Length of the password            |
| `includeUppercase` | `boolean` | `true`  | Include A-Z                       |
| `includeLowercase` | `boolean` | `true`  | Include a-z                       |
| `includeNumbers`   | `boolean` | `true`  | Include 0-9                       |
| `includeSymbols`   | `boolean` | `true`  | Include !@#$%^&\*...              |
| `humanReadable`    | `boolean` | `false` | Generate a pronounceable password |
