import { htmlTags } from "@prettier/html-tags";
import fs from "node:fs/promises";
import assert from "node:assert/strict";

const CACHE_DIRECTORY = new URL("../.cache/", import.meta.url);

async function getText(url) {
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
}

function addAttribute(data, tag, attribute) {
  assert(
    tag === "*" || htmlTags.includes(tag),
    `Attribute '${attribute}': '${tag}' is not a valid html tag.`,
  );

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

export { getText, mergeAttributeData, addAttribute };
