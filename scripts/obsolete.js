const table = {
  table: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table#deprecated_attributes
    "align",
    "bgcolor",
    "border",
    "cellpadding",
    "cellspacing",
    "frame",
    "rules",
    "summary",
    "width",
  ],

  tbody: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tbody#deprecated_attributes
    "align",
    "bgcolor",
    "char",
    "charoff",
    "valign",
  ],

  td: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/td#deprecated_attributes
    "abbr",
    "align",
    "axis",
    "bgcolor",
    "char",
    "charoff",
    "height",
    "scope",
    "valign",
    "width",

    // https://www.geeksforgeeks.org/html/html-td-nowrap-attribute/
    "nowrap",
  ],

  tfoot: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tfoot#deprecated_attributes
    "align",
    "bgcolor",
    "char",
    "charoff",
    "valign",
  ],

  th: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th#deprecated_attributes
    "align",
    "axis",
    "bgcolor",
    "char",
    "charoff",
    "height",
    "valign",
    "width",

    // https://www.geeksforgeeks.org/html/html-th-nowrap-attribute/
    "nowrap",
  ],

  thead: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead#deprecated_attributes
    "align",
    "bgcolor",
    "char",
    "charoff",
    "valign",
  ],

  tr: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tr#deprecated_attributes
    "align",
    "bgcolor",
    "char",
    "charoff",
    "valign",
  ],
};

export default {
  "*": [
    // https://drafts.csswg.org/css-shadow/#element-attrdef-html-global-exportparts
    "exportparts",
    // https://drafts.csswg.org/css-shadow/#part-attr
    "part",
  ],
  a: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#deprecated_attributes
    "charset",
    "coords",
    "name",
    "rev",
    "shape",
  ],

  // https://www.w3.org/TR/html401/struct/objects.html#edef-APPLET
  applet: [
    "codebase",
    "code",
    "name",
    "archive",
    "object",
    "width",
    "height",
    "alt",
    "align",
    "hspace",
    "vspace",
  ],

  area: [
    // https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element
    "hreflang",
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/area
    "nohref",
    // https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element
    "type",
  ],

  // https://www.geeksforgeeks.org/html/html-basefont-tag/
  basefont: ["color", "face", "size"],

  body: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body#deprecated_attributes
    "alink",
    "background",
    "bgcolor",
    "bottommargin",
    "leftmargin",
    "link",
    "rightmargin",
    "text",
    "topmargin",
    "vlink",
  ],

  br: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/br#deprecated_attributes
    "clear",
  ],

  caption: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/caption#deprecated_attributes
    "align",
  ],

  col: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/col#deprecated_attributes
    "align",
    "bgcolor",
    "char",
    "charoff",
    "valign",
    "width",
  ],
  colgroup: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/colgroup#deprecated_attributes
    "align",
    "bgcolor",
    "char",
    "charoff",
    "valign",
    "width",
  ],

  dir: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dir#deprecated_attributes
    "compact",
  ],

  div: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div
    "align",
  ],

  dl: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl#attributes
    "compact",
  ],

  font: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/font#attributes
    "color",
    "face",
    "size",
  ],

  form: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form#accept
    "accept",
  ],

  frame: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/frame#attributes
    "src",
    "name",
    "noresize",
    "scrolling",
    "marginheight",
    "marginwidth",
    "frameborder",

    // https://www.w3.org/TR/html401/present/frames.html
    "longdesc",
  ],

  frameset: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/frameset#attributes
    "cols",
    "rows",
  ],

  // https://www.w3.org/TR/2010/WD-html-markup-20100624/h1.html
  h1: ["align"],
  h2: ["align"],
  h3: ["align"],
  h4: ["align"],
  h5: ["align"],
  h6: ["align"],

  head: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head#attributes
    "profile",
  ],

  hr: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hr#attributes
    "align",
    "color",
    "noshade",
    "size",
    "width",
  ],

  html: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html#attributes
    "version",
    "xmlns",

    // https://www.w3.org/TR/2010/WD-html-markup-20100624/html.html
    "manifest",
  ],

  iframe: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#deprecated_attributes
    "align",
    "frameborder",
    "longdesc",
    "marginheight",
    "marginwidth",
    "scrolling",

    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#allowpaymentrequest
    "allowpaymentrequest",
  ],

  img: [
    //https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#deprecated_attributes
    "align",
    "border",
    "hspace",
    "longdesc",
    "name",
    "vspace",
  ],

  input: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input
    "align",
  ],

  // https://www.geeksforgeeks.org/html/html-isindex-tag/
  isindex: ["prompt", "action"],

  label: [
    // https://www.w3schools.com/TAgs/att_label_form.asp
    "form",
  ],

  legend: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend
    "align",
  ],

  li: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li#type
    "type",
  ],

  link: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link#non-standard_attributes
    "target",

    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link#obsolete_attributes
    "charset",
    "rev",
  ],

  meta: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta
    "scheme",
  ],

  menu: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/menu#attributes
    "compact",
  ],

  object: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object
    "archive",
    "border",
    "classid",
    "codebase",
    "codetype",
    "declare",
    "standby",
    "usemap",
  ],
  ol: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol#compact
    "compact",
  ],

  p: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p#attributes
    "align",
  ],

  param: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/param#attributes
    "name",
    "value",
    "type",
    "valuetype",
  ],

  pre: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre#attributes
    "width",
    "wrap",
  ],

  script: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script#deprecated_attributes
    "charset",
    "language",
  ],

  style: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style#deprecated_attributes
    "type",
  ],

  ul: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul#attributes
    "compact",
    "type",
  ],

  ...table,
};
