function addAttribute(data, tag, attribute) {
  data[tag] ??= [];
  data[tag].push(attribute);

  return data;
}

function addAttributes(data, tag, attributes) {
  data[tag] ??= [];
  data[tag].push(...attributes);

  return data;
}

function mergeAttributeData(...list) {
  const data = {};
  for (const attributeData of list) {
    for (const [tag, attributes] of Object.entries(attributeData)) {
      addAttributes(data, tag, attributes);
    }
  }
  return data;
}

export { mergeAttributeData };
