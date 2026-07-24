import fs from "node:fs/promises";
import * as cheerio from "cheerio";
import { outdent } from "outdent";
import assert from "node:assert/strict";
import { htmlTags } from "@prettier/html-tags";
import obsolete from "./obsolete.js";
import experimental from "./experimental.js";
import { mergeAttributeData } from "./utilities.js";

const CACHE_DIRECTORY = new URL("../.cache/", import.meta.url);

const getText = async (url) => {
  const cacheFile = new URL(
    url.replaceAll(/[^a-zA-Z\d\.]/g, "-"),
    CACHE_DIRECTORY,
  );

  let stat;

  try {
    stat = await fs.stat(cacheFile);
  } catch {}

  if (stat) {
    if (Date.now() - stat.mtimeMs < /* 10 hours */ 10 * 60 * 60 * 1000) {
      return fs.readFile(cacheFile, "utf8");
    }

    await fs.rm(cacheFile);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Fetch '${url}' failed.`);
  }

  const text = await response.text();

  await fs.mkdir(CACHE_DIRECTORY, { recursive: true });
  await fs.writeFile(cacheFile, text);

  return text;
};

function getAttribute(attributeCell) {
  assert(attributeCell.type === "tag" && attributeCell.name === "th");

  const children = Array.from(attributeCell.children).filter(
    (child) => !(child.type === "text" && /^\s+$/.test(child.data)),
  );
  assert(children.length === 1);

  const [code] = children;
  assert(code.type === "tag" && code.name === "code");
  assert(code.children.length === 1);

  const [text] = code.children;
  assert(text.type === "text");

  return text.data;
}

function getElement(element) {
  assert(element.type === "tag" && element.name === "code");

  assert(element.children.length === 1);
  const [anchor] = element.children;
  assert(anchor.type === "tag" && anchor.name === "a");

  assert(anchor.children.length === 1);

  const [text] = anchor.children;
  assert(text.type === "text");
  return text.data;
}

function* getElements(elementsCell, attribute) {
  assert(elementsCell.type === "tag" && elementsCell.name === "td");

  if (isGlobalAttribute(elementsCell)) {
    yield "*";
    return;
  }

  const text = cheerio.load(elementsCell).text().replaceAll(/\s+/g, " ");

  for (let tag of text.split(";")) {
    tag = tag.trim();

    if (!tag) {
      continue;
    }

    if (
      tag === "form-associated custom elements" &&
      (attribute === "disabled" ||
        attribute === "form" ||
        attribute === "name" ||
        attribute === "readonly")
    ) {
      continue;
    }

    if (tag === "video img" && attribute === "controls") {
      yield "video";
      yield "img";
      continue;
    }

    if (
      (tag === "source (in picture)" &&
        (attribute === "height" || attribute === "width")) ||
      (tag === "source (in video or audio)" && attribute === "src")
    ) {
      tag = "source";
    }

    yield tag;
  }
}

function isGlobalAttribute(elementsCell) {
  const children = Array.from(elementsCell.children).filter(
    (child) => !(child.type === "text" && child.data.trim() === ""),
  );

  if (children.length !== 1) {
    return false;
  }

  const [anchor] = children;

  if (
    !(anchor.type === "tag" && anchor.name === "a") ||
    anchor.children.length !== 1
  ) {
    return false;
  }

  const [text] = anchor.children;

  return text.type === "text" && text.data === "HTML elements";
}

function getElementsTable($) {
  for (let element = $("#elements-3")[0]; element; element = element.next) {
    if (element.type === "tag" && element.name === "table") {
      assert.equal(
        $("thead tr:first-child th:nth-child(1)", element).text().trim(),
        "Element",
      );
      assert.equal(
        $("thead tr:first-child th:nth-child(6)", element).text().trim(),
        "Attributes",
      );
      return element;
    }
  }
}

function parseData(text) {
  const attributes = mergeAttributeData(obsolete, experimental);
  const $ = cheerio.load(text);
  const addAttribute = (tag, attribute) => {
    assert(
      tag === "*" || htmlTags.includes(tag),
      `Attribute '${attribute}': '${tag}' is not a valid html tag.`,
    );
    attributes[tag] ??= [];
    attributes[tag].push(attribute);
  };

  // Parse attributes table
  {
    const table = $("#attributes-1")[0];
    for (const tr of $("tbody tr", table)) {
      const [attributeCell, elementsCell] = tr.children;
      const attribute = getAttribute(attributeCell);

      for (const tag of getElements(elementsCell, attribute)) {
        addAttribute(tag, attribute);
      }
    }
  }

  // Parse elements table
  {
    const table = getElementsTable($);
    for (const tr of $("tbody tr", table)) {
      const elementCell = tr.children[0];
      const attributesCell = tr.children[5];
      const tag = $(elementCell).text();

      if (
        tag === "MathML math" ||
        tag === "SVG svg" ||
        tag === "autonomous custom elements"
      ) {
        continue;
      }

      for (let anchor of $("a", attributesCell)) {
        let attribute = $(anchor).text().trim();

        if (attribute === "globals") {
          continue;
        }

        if (tag === "body" && attribute.startsWith("on")) {
          continue;
        }

        addAttribute(tag, attribute);
      }
    }
  }

  return attributes;
}

const text = await getText(
  "https://html.spec.whatwg.org/multipage/indices.html",
);

let { "*": globalAttributes, ...elementAttributes } = parseData(text);
globalAttributes.sort();

const tags = Object.keys(elementAttributes).toSorted();
assert.ok(tags.length > 10);

elementAttributes = Object.fromEntries(
  tags
    .map((tag) => {
      let attributes = elementAttributes[tag];

      if (globalAttributes.includes("title")) {
        attributes = attributes.filter(
          (attribute) => !globalAttributes.includes(attribute),
        );
      }
      return [tag, [...new Set(attributes)].toSorted()];
    })
    .filter(([, attributes]) => attributes.length > 0),
);

await fs.writeFile(
  new URL(`../global.json`, import.meta.url),
  JSON.stringify(globalAttributes, undefined, 2) + "\n",
);

await fs.writeFile(
  new URL(`../element.json`, import.meta.url),
  JSON.stringify(elementAttributes, undefined, 2) + "\n",
);

await fs.writeFile(
  new URL(`../index.d.ts`, import.meta.url),
  outdent`
    type HtmlTags =
    ${tags.map((tag) => `  | '${tag}'`).join("\n")};

    /**
    List of HTML global attributes.

    @example
    \`\`\`
    import {globalAttributes} from "@prettier/html-attributes";

    console.log(globalAttributes);
    // => [ 'accesskey', 'autocapitalize',  …],
    \`\`\`
    */
    export const globalAttributes: readonly string[];

    /**
    List of HTML element attributes.

    @example
    \`\`\`
    import {elementAttributes} from "@prettier/html-attributes";

    console.log(elementAttributes);
    // => {
    //   'a': [ 'charset',  'coords' …],
    //   …,
    // }
    \`\`\`
    */
    export const elementAttributes: {
      readonly [Tag in HtmlTags]: readonly string[];
    };

	`,
);
