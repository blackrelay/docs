import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const docsDir = fileURLToPath(new URL("../src/content/docs/", import.meta.url));
const markdownLinkPattern = /(?<!!)\[[^\]]+\]\((?<href>[^)\s]+)(?:\s+"[^"]*")?\)/g;

async function contentFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await contentFiles(path)));
    } else if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
      files.push(path);
    }
  }

  return files;
}

function routeForFile(file) {
  const normalised = relative(docsDir, file).split(sep).join("/");
  const route = normalised.replace(/\.(md|mdx)$/, "");
  if (route === "index") return "/";
  if (route.endsWith("/index")) return `/${route.slice(0, -"/index".length)}/`;
  return `/${route}/`;
}

function isIgnoredHref(href) {
  return (
    href.startsWith("#") ||
    /^[a-z][a-z0-9+.-]*:/i.test(href) ||
    href.startsWith("//")
  );
}

const files = await contentFiles(docsDir);
const routes = new Set(files.map(routeForFile));
const failures = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  const currentRoute = routeForFile(file);

  for (const match of source.matchAll(markdownLinkPattern)) {
    const href = match.groups.href;
    if (isIgnoredHref(href)) continue;

    const resolved = new URL(href, `https://docs.blackrelay.network${currentRoute}`);
    const path = resolved.pathname.endsWith("/")
      ? resolved.pathname
      : `${resolved.pathname}/`;

    if (!routes.has(path)) {
      failures.push({
        file: relative(process.cwd(), file),
        route: currentRoute,
        href,
        resolved: path,
      });
    }
  }
}

if (failures.length > 0) {
  console.error("Broken internal docs links:");
  for (const failure of failures) {
    console.error(
      `- ${failure.file}: ${failure.href} resolves to ${failure.resolved} from ${failure.route}`,
    );
  }
  process.exit(1);
}

console.log(`Checked ${files.length} docs file(s); no broken internal links found.`);
