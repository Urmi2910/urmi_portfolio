import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "Urmi-Shah-Resume.pdf");
const publicDir = join(root, "public");
const targets = [
  join(publicDir, "Urmi-Shah-Resume.pdf"),
  join(publicDir, "resume.pdf"),
];

if (!existsSync(source)) {
  if (targets.some((target) => existsSync(target))) {
    console.log("Using existing public resume PDF");
    process.exit(0);
  }

  console.error("Missing Urmi-Shah-Resume.pdf — add your resume PDF to the project root.");
  process.exit(1);
}

for (const target of targets) {
  copyFileSync(source, target);
}

console.log("Synced Urmi-Shah-Resume.pdf → public/");
