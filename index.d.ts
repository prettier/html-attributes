/**
List of HTML global attributes.

@example
```
import {globalAttributes} from "@prettier/html-attributes";

console.log(globalAttributes);
// => [ 'accesskey', 'autocapitalize',  …],
```
*/
export const globalAttributes: readonly string[];

/**
List of HTML element attributes.

@example
```
import {elementAttributes} from "@prettier/html-attributes";

console.log(elementAttributes);
// => {
//   'a': [ 'charset',  'coords' …],
//   …,
// }
```
*/
export const htmlAttributes: Record<string, readonly string[]>;
