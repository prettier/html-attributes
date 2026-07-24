type HtmlTags =
  | '*'
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
