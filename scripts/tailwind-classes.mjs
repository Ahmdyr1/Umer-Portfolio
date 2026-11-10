/**
 * Writes every class-like token in src/ to a CSS file as a Tailwind inline source.
 *
 * Tailwind normally finds classes with a native scanner. Where Windows Application
 * Control blocks that binary, Tailwind's WebAssembly fallback can't read Windows
 * paths and finds nothing, so the site builds with no utilities at all. Listing the
 * classes explicitly works everywhere. Runs automatically before `dev` and `build`.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const output = "src/app/tailwind-classes.css";
const tokens = new Set();

for (const entry of readdirSync("src", { recursive: true, withFileTypes: true })) {
  if (!entry.isFile() || !/\.tsx?$/.test(entry.name)) continue;
  const source = readFileSync(join(entry.parentPath, entry.name), "utf8");
  for (const token of source.split(/[\s"'`]+/)) {
    if (isCandidate(token)) tokens.add(token);
  }
}

function isCandidate(token) {
  if (token.length > 200 || !/^!?-?[a-z@[][-!a-z0-9@[\]:/.%_(),#&>=*+~]*$/i.test(token)) return false;
  const count = (char) => token.split(char).length - 1;
  return count("[") === count("]") && count("(") === count(")") && /[a-z0-9\]]$/i.test(token);
}

writeFileSync(output, `@source inline("${[...tokens].sort().join(" ")}");\n`);
console.log(`Listed ${tokens.size} class candidates in ${output}`);
