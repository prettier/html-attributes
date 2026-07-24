import assert from "node:assert/strict";
import test from "node:test";
import htmlAttributes from "./index.js";

test("Main", () => {
  const globalAttributes = htmlAttributes["*"];

  for (const [tag, attributes] of Object.entries(htmlAttributes)) {
    assert.ok(Array.isArray(attributes));
    assert.ok(attributes.length > 0);
    assert.equal(
      new Set(attributes).size,
      attributes.length,
      `Attributes in '${tag}' should be unique.${JSON.stringify(attributes, undefined, 2)}`,
    );

    for (const attribute of attributes) {
      assert.ok(/^\w+(?:-[\w]+)*$/.test(attribute), attribute);

      if (tag !== "*") {
        assert.ok(!globalAttributes.includes(attribute));
      }
    }
  }
});
