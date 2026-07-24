# @prettier/html-attributes

[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]
[![Coverage][coverage_badge]][coverage_link]

[coverage_badge]: https://img.shields.io/codecov/c/github/prettier/html-attributes.svg?style=flat-square
[coverage_link]: https://app.codecov.io/gh/prettier/html-attributes
[license_badge]: https://img.shields.io/npm/l/html-attributes.svg?style=flat-square
[license_link]: https://github.com/prettier/html-attributes/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/@prettier/html-attributes.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/@prettier/html-attributes

> List of HTML attributes.

## Install

```bash
yarn add @prettier/html-attributes
```

## Usage

```js
import {
  globalAttributes,
  elementAttributes,
} from "@prettier/html-attributes";

console.log(globalAttributes);
// => [ 'accesskey', 'autocapitalize',  …],

console.log(elementAttributes);
// => {
//   'a': [ 'charset',  'coords' …],
//   …,
// }
```
