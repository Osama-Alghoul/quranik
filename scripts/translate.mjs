import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const API_KEY = process.env.LINGO_API_KEY;
const ENGINE_ID = process.env.LINGO_ENGINE_ID || "";

if (!API_KEY) {
  console.error("Missing LINGO_API_KEY environment variable");
  process.exit(1);
}

const SOURCE = "ar";
const TARGETS = ["en"];

async function translate(data, targetLocale) {
  const res = await fetch("https://api.lingo.dev/process/localize", {
    method: "POST",
    headers: {
      "X-API-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...(ENGINE_ID ? { engineId: ENGINE_ID } : {}),
      sourceLocale: SOURCE,
      targetLocale: targetLocale,
      data,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err}`);
  }

  const json = await res.json();
  return json.data;
}

async function main() {
  const sourcePath = resolve(__dirname, "..", "messages", "ar.json");
  const source = JSON.parse(readFileSync(sourcePath, "utf-8"));

  for (const target of TARGETS) {
    console.log(`Translating ar → ${target}...`);
    const translated = await translate(source, target);
    const outPath = resolve(__dirname, "..", "messages", `${target}.json`);
    writeFileSync(outPath, JSON.stringify(translated, null, 2), "utf-8");
    console.log(`Written: ${outPath}`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
