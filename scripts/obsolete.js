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
  script: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script#deprecated_attributes
    "charset",
    "language",
  ],
};
