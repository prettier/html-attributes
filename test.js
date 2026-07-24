import assert from "node:assert/strict";
import test from "node:test";
import { globalAttributes, elementAttributes } from "./index.js";

function assertAttributes(tag, attributes) {
  assert.ok(
    Array.isArray(attributes),
    `Attributes in '${tag}' should be an array.`,
  );
  assert.ok(attributes.length > 0);
  assert.equal(
    new Set(attributes).size,
    attributes.length,
    `Attributes in '${tag}' should be unique.${JSON.stringify(attributes, undefined, 2)}`,
  );

  for (const attribute of attributes) {
    assert.ok(/^\w+(?:-[\w]+)*$/.test(attribute), attribute);
  }
}

test("Main", () => {
  assertAttributes("*", globalAttributes);

  for (const [tag, attributes] of Object.entries(elementAttributes)) {
    assertAttributes(tag, attributes);

    for (const attribute of attributes) {
      assert.ok(!globalAttributes.includes(attribute));
    }
  }
});
