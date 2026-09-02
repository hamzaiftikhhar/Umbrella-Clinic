import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rawPath = path.join(root, "scripts/insurance-all-carriers.txt");
const outPath = path.join(root, "src/data/insurance-carriers.ts");

const popular = [
  "Aetna",
  "UnitedHealthcare",
  "Cigna",
  "Empire Blue Cross Blue Shield (Health)",
  "EmblemHealth (formerly known as GHI)",
  "HealthFirst (NY)",
  "Fidelis Care (NY)",
  "Anthem Blue Cross Blue Shield",
];

const skip = new Set(["Popular carriers", "All carriers"]);
const raw = fs.readFileSync(rawPath, "utf8");
const parsed = raw
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 1 && !/^[#A-Z]$/.test(line) && !skip.has(line));

const networkSrc = fs.readFileSync(path.join(root, "src/data/insurance-network.ts"), "utf8");
const networkNames = [...networkSrc.matchAll(/"name": "([^"]+)"/g)].map((match) => match[1]);

const all = [...new Set([...popular, ...parsed, ...networkNames])].sort((a, b) =>
  a.localeCompare(b, undefined, { sensitivity: "base" }),
);

const file = `/** Insurance carrier directory for search (source: Zocdoc + carrier list). Auto-generated — do not edit by hand. */
export const POPULAR_INSURANCE_CARRIERS = ${JSON.stringify(popular, null, 2)} as const;

export const ALL_INSURANCE_CARRIER_NAMES = ${JSON.stringify(all, null, 2)} as const;

export const TOTAL_INSURANCE_CARRIERS = ${all.length};
`;

fs.writeFileSync(outPath, file);
console.log(`Wrote ${all.length} carriers to ${outPath}`);
