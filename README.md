# typed-object-keys

A tiny typed wrapper around `Object.keys` for TypeScript.

`Object.keys` returns `string[]`, which means TypeScript loses the relationship
between an object and its known keys. `typed-object-keys` keeps that relationship
at the type level while preserving the exact same runtime behavior as
`Object.keys`.

## Installation

```bash
npm install typed-object-keys
```

```bash
pnpm add typed-object-keys
```

```bash
yarn add typed-object-keys
```

```bash
bun add typed-object-keys
```

## Usage

```ts
import objectKeys from "typed-object-keys";

const user = {
  id: "user_123",
  name: "Ada Lovelace",
  active: true,
};

const keys = objectKeys(user);
//    ^? Array<"id" | "name" | "active">

for (const key of keys) {
  const value = user[key];
  // key is typed as "id" | "name" | "active"
  // value is typed as string | boolean
}
```

## API

### `objectKeys(object)`

```ts
function objectKeys<TObject extends object>(object: TObject): Array<keyof TObject>;
```

Returns the enumerable own property names of `object`, typed as keys of the
provided object type.

This package is intentionally a zero-dependency wrapper around `Object.keys`.
It does not change JavaScript runtime behavior:

- only enumerable own properties are returned
- symbol keys are not returned
- numeric keys follow `Object.keys` and are returned as strings at runtime
- key order is the same as `Object.keys`

## Why

This removes the common local cast:

```ts
const keys = Object.keys(user) as Array<keyof typeof user>;
```

and replaces it with:

```ts
const keys = objectKeys(user);
```

## Package

- ESM only
- TypeScript declarations included
- No runtime dependencies
- Tree-shakeable

## Development

Install dependencies:

```bash
vp install
```

Run validation:

```bash
vp check
vp test
```

Build the package:

```bash
vp pack
```

## License

MIT
