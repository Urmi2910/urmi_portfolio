import { copyFileSync, existsSync, mkdirSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "Urmi_Content Designer.pdf");
const targets = [
  join(root, "public", "Urmi_Content Designer.pdf"),
  join(root, "src", "app", "resume", "download", "resume.pdf"),
];

const legacyFiles = [
  join(root, "Urmi-Shah-Resume.pdf"),
  join(root, "public", "Urmi-Shah-Resume.pdf"),
  join(root, "public", "resume.pdf"),
  join(root, "src", "app", "resume", "download", "Urmi-Shah-Resume.pdf"),
];

if (!existsSync(source)) {
  if (targets.some((target) => existsSync(target))) {
    console.log("Using existing synced resume PDF");
    process.exit(0);
  }

  console.error("Missing Urmi_Content Designer.pdf — add your resume PDF to the project root.");
  process.exit(1);
}

for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
}

for (const legacyFile of legacyFiles) {
  if (existsSync(legacyFile)) {
    unlinkSync(legacyFile);
  }
}

console.log("Synced Urmi_Content Designer.pdf to public/ and resume/download/");
