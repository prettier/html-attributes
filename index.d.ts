type HtmlTags =
  | 'a'
  | 'abbr'
  | 'applet'
  | 'area'
  | 'audio'
  | 'base'
  | 'basefont'
  | 'bdo'
  | 'blockquote'
  | 'body'
  | 'br'
  | 'button'
  | 'canvas'
  | 'caption'
  | 'col'
  | 'colgroup'
  | 'data'
  | 'del'
  | 'details'
  | 'dfn'
  | 'dialog'
  | 'dir'
  | 'div'
  | 'dl'
  | 'embed'
  | 'fieldset'
  | 'font'
  | 'form'
  | 'frame'
  | 'frameset'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'head'
  | 'hr'
  | 'html'
  | 'iframe'
  | 'img'
  | 'input'
  | 'ins'
  | 'isindex'
  | 'label'
  | 'legend'
  | 'li'
  | 'link'
  | 'map'
  | 'menu'
  | 'meta'
  | 'meter'
  | 'object'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'output'
  | 'p'
  | 'param'
  | 'pre'
  | 'progress'
  | 'q'
  | 'script'
  | 'select'
  | 'slot'
  | 'source'
  | 'style'
  | 'table'
  | 'tbody'
  | 'td'
  | 'template'
  | 'textarea'
  | 'tfoot'
  | 'th'
  | 'thead'
  | 'time'
  | 'tr'
  | 'track'
  | 'ul'
  | 'video';

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
export const elementAttributes: {
  readonly [Tag in HtmlTags]: readonly string[];
};
