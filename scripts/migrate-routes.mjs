#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ROUTES_DIR = path.join(ROOT, "src/routes");
const APP_DIR = path.join(ROOT, "app");

const LAYOUT_ONLY = new Set([
  "specialties.tsx",
  "diagnostics.tsx",
  "longevity.tsx",
  "locations.tsx",
  "resources.tsx",
  "resources.busy-professionals.tsx",
  "resources.decoding-your-diagnostics.tsx",
]);

const SKIP = new Set(["__root.tsx", "index.tsx", ...LAYOUT_ONLY]);

function routeFileToAppPath(filename) {
  const base = filename.replace(/\.tsx$/, "").replace(/\.index$/, "");
  return path.join(...base.split("."), "page.tsx");
}

function writeFile(appRelativePath, content) {
  const fullPath = path.join(APP_DIR, appRelativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log("Created", appRelativePath);
}

function extractRouteSections(content) {
  const routeStart = content.indexOf("export const Route = createFileRoute");
  if (routeStart === -1) return null;

  const openBrace = content.indexOf("({", routeStart);
  let depth = 0;
  let end = -1;
  for (let i = openBrace + 1; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end === -1) return null;

  const trailing = content[end];
  const routeEnd = trailing === ")" ? end + 1 : end;
  if (content[routeEnd] === ";") {
    return {
      before: content.slice(0, routeStart).trim(),
      body: content.slice(openBrace + 2, end - 1).trim(),
      after: content.slice(routeEnd + 1).trim(),
    };
  }

  return {
    before: content.slice(0, routeStart).trim(),
    body: content.slice(openBrace + 2, end - 1).trim(),
    after: content.slice(end + 1).trim(),
  };
}

function extractPageHeadArgs(body) {
  const idx = body.indexOf("pageHead(");
  if (idx === -1) return null;
  let depth = 0;
  for (let i = idx + "pageHead".length; i < body.length; i++) {
    if (body[i] === "(") depth++;
    if (body[i] === ")") {
      depth--;
      if (depth === 0) return body.slice(idx + "pageHead(".length, i).trim();
    }
  }
  return null;
}

function extractComponent(body) {
  const idx = body.lastIndexOf("component:");
  if (idx === -1) return null;
  return body
    .slice(idx + "component:".length)
    .trim()
    .replace(/,\s*$/, "");
}

function buildImports(before, needsClient) {
  const importLines = before
    .split("\n")
    .filter((l) => l.startsWith("import "))
    .filter((l) => !l.includes("@tanstack/react-router"))
    .map((l) => l.replace(/import\s*\{\s*pageHead\s*\}\s*from\s*"@\/lib\/page-head";?\s*/, ""))
    .filter((l) => l.trim());

  const cleaned = importLines.join("\n").replace(/\s+as\s+"[^"]+"/g, "");
  const needsLink = before.includes("<Link") || before.includes(" Link ");

  const parts = [
    needsClient ? '"use client";\n' : "",
    needsLink ? 'import { Link } from "@/components/AppLink";' : "",
    'import { buildPageSeo } from "@/lib/page-head";',
    'import { JsonLd } from "@/components/JsonLd";',
    cleaned,
  ].filter(Boolean);

  return parts.join("\n");
}

function buildHelpers(before) {
  return before
    .split("\n")
    .filter((l) => !l.startsWith("import "))
    .join("\n")
    .trim();
}

function transformLinks(code) {
  return code
    .replace(/<Link\s+to=/g, "<Link href=")
    .replace(/\bto=\{/g, "href={")
    .replace(/\bto="/g, 'href="');
}

function transformRouteFile(filename, content) {
  const sections = extractRouteSections(content);
  if (!sections) return null;

  const headArgs = extractPageHeadArgs(sections.body);
  const componentExpr = extractComponent(sections.body);
  if (!componentExpr) return null;

  const needsClient =
    sections.before.includes("useState") ||
    sections.before.includes("useEffect") ||
    sections.after.includes("useState") ||
    sections.after.includes("useEffect") ||
    sections.before.includes("FormEvent") ||
    sections.after.includes("FormEvent");

  let page = buildImports(sections.before, needsClient);
  const helpers = buildHelpers(sections.before);
  if (helpers) page += `\n\n${helpers}`;

  if (headArgs) {
    page += `\n\nconst seo = buildPageSeo(${headArgs});\nexport const metadata = seo.metadata;\n`;
  }

  const namedMatch = componentExpr.match(/^(\w+)$/);
  if (namedMatch) {
    if (sections.after) page += `\n\n${sections.after}\n`;
    page += `\nexport default function RoutePage() {\n  return (\n    <>\n      <JsonLd data={seo.jsonLd} />\n      <${namedMatch[1]} />\n    </>\n  );\n}\n`;
  } else {
    const arrowMatch = componentExpr.match(/^\(\)\s*=>\s*([\s\S]+)$/);
    if (!arrowMatch) return null;
    let jsx = arrowMatch[1].trim();
    if (jsx.startsWith("(") && jsx.endsWith(")")) {
      jsx = jsx.slice(1, -1).trim();
    }
    if (sections.after) page += `\n\n${sections.after}\n`;
    page += `\nexport default function RoutePage() {\n  return (\n    <>\n      <JsonLd data={seo.jsonLd} />\n      ${jsx}\n    </>\n  );\n}\n`;
  }

  return transformLinks(page);
}

function resetAppPages() {
  for (const entry of fs.readdirSync(APP_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.includes(".")) {
      fs.rmSync(path.join(APP_DIR, entry.name), { recursive: true, force: true });
      continue;
    }
    const removePage = (dir) => {
      for (const child of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, child.name);
        if (child.isDirectory()) removePage(full);
        else if (child.name === "page.tsx") fs.unlinkSync(full);
      }
    };
    removePage(path.join(APP_DIR, entry.name));
  }
}

resetAppPages();

for (const file of LAYOUT_ONLY) {
  writeFile(
    path.join(file.replace(".tsx", "").split(".").join(path.sep), "layout.tsx"),
    `export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`,
  );
}

let ok = 0;
let fail = 0;
for (const file of fs.readdirSync(ROUTES_DIR)) {
  if (!file.endsWith(".tsx") || SKIP.has(file)) continue;
  const page = transformRouteFile(file, fs.readFileSync(path.join(ROUTES_DIR, file), "utf8"));
  if (!page) {
    console.warn("Failed:", file);
    fail++;
    continue;
  }
  writeFile(routeFileToAppPath(file), page);
  ok++;
}

console.log(`Done: ${ok} pages, ${fail} failed.`);
