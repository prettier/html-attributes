type HtmlTags =
  | '*'
  | 'a'
  | 'abbr'
  | 'area'
  | 'audio'
  | 'base'
  | 'bdo'
  | 'blockquote'
  | 'button'
  | 'canvas'
  | 'col'
  | 'colgroup'
  | 'data'
  | 'del'
  | 'details'
  | 'dfn'
  | 'dialog'
  | 'embed'
  | 'fieldset'
  | 'form'
  | 'iframe'
  | 'img'
  | 'input'
  | 'ins'
  | 'label'
  | 'li'
  | 'link'
  | 'map'
  | 'meta'
  | 'meter'
  | 'object'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'output'
  | 'progress'
  | 'q'
  | 'script'
  | 'select'
  | 'slot'
  | 'source'
  | 'style'
  | 'td'
  | 'template'
  | 'textarea'
  | 'th'
  | 'time'
  | 'track'
  | 'video';

/**
List of HTML attributes.

@example
```
import htmlAttributes from "@prettier/html-attributes";

console.log(htmlAttributes);
// => {
//   '*': [ 'accesskey', 'autocapitalize', …],
//   …,
// }
```
*/
declare const htmlAttributes: {
  readonly [Tag in HtmlTags]: readonly string[];
};

export default htmlAttributes;
