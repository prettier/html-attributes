import { mergeAttributeData } from "./utilities.js";

// Should enable on more elements
// https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/elementtiming
const elementtiming = {
  img: ["elementtiming"],
};

const attributes = mergeAttributeData(elementtiming);

export default attributes;
