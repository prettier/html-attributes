import fs from "node:fs/promises";
import * as cheerio from "cheerio";
import { outdent } from "outdent";
import assert from "node:assert/strict";
import { htmlTags } from "@prettier/html-tags";

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

    assert(
      htmlTags.includes(tag),
      `Attribute '${attribute}': '${tag}' is not a valid html tag.`,
    );

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

function parseData(text) {
  const attributes = {};
  const $ = cheerio.load(text);

  for (const tr of $("#attributes-1 tbody tr")) {
    let [attributeCell, elementsCell] = tr.children;
    const attribute = getAttribute(attributeCell);

    for (const tag of getElements(elementsCell, attribute)) {
      attributes[tag] ??= [];
      attributes[tag].push(attribute);
    }
  }

  return attributes;
}

const text = await getText(
  "https://html.spec.whatwg.org/multipage/indices.html",
);

const raw = parseData(text);
assert.ok("*" in raw);
const tags = [
  "*",
  ...Object.keys(raw)
    .filter((tag) => tag !== "*")
    .sort((a, b) => a.localeCompare(b)),
];
assert.ok(tags.length > 10);

const globalAttributes = new Set(raw["*"]);

const attributes = Object.fromEntries(
  tags
    .map((tag) => {
      let attributes = raw[tag];

      if (tag !== "*" && globalAttributes.has("title")) {
        attributes = attributes.filter(
          (attribute) => !globalAttributes.has(attribute),
        );
      }
      assert.equal(new Set(attributes).size, attributes.length);
      return [tag, attributes.toSorted()];
    })
    .filter(([, attributes]) => attributes.length > 0),
);

await fs.writeFile(
  new URL(`../index.json`, import.meta.url),
  JSON.stringify(attributes, undefined, 2) + "\n",
);

await fs.writeFile(
  new URL(`../index.d.ts`, import.meta.url),
  outdent`
    type HtmlTags =
    ${tags.map((tag) => `  | '${tag}'`).join("\n")};

    /**
    List of HTML attributes.

    @example
    \`\`\`
    import htmlAttributes from "@prettier/html-attributes";

    console.log(htmlAttributes);
    // => {
    //   '*': [ 'accesskey', 'autocapitalize', …],
    //   …,
    // }
    \`\`\`
    */
    declare const htmlAttributes: {
      readonly [Tag in HtmlTags]: readonly string[];
    };

    export default htmlAttributes;\n
	`,
);
