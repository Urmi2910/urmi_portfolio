import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "Urmi-Shah-Resume.pdf");
const targets = [
  join(root, "public", "Urmi-Shah-Resume.pdf"),
  join(root, "public", "resume.pdf"),
  join(root, "src", "app", "resume", "download", "Urmi-Shah-Resume.pdf"),
];

if (!existsSync(source)) {
  if (targets.some((target) => existsSync(target))) {
    console.log("Using existing synced resume PDF");
    process.exit(0);
  }

  console.error("Missing Urmi-Shah-Resume.pdf — add your resume PDF to the project root.");
  process.exit(1);
}

for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
}

console.log("Synced Urmi-Shah-Resume.pdf to public/ and resume/download/");
