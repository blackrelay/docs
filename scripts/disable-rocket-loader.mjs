import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const distDir = fileURLToPath(new URL("../dist/", import.meta.url));

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await htmlFiles(path)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(path);
    }
  }

  return files;
}

const scriptTag = /<script(?=[\s>])(?![^>]*\bdata-cfasync=)/g;

for (const file of await htmlFiles(distDir)) {
  const html = await readFile(file, "utf8");
  const patched = html.replace(scriptTag, '<script data-cfasync="false"');
  if (patched !== html) {
    await writeFile(file, patched);
  }
}
