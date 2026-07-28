import { copyFileSync, existsSync, mkdirSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "Urmi shah_Senior Content Designer.pdf");
const target = join(root, "public", "Urmi shah_Senior Content Designer.pdf");
const legacyFiles = [
  join(root, "Urmi shah_Content Designer.pdf"),
  join(root, "public", "Urmi shah_Content Designer.pdf"),
  join(root, "Urmi_Content Designer.pdf"),
  join(root, "public", "Urmi_Content Designer.pdf"),
];

if (existsSync(target)) {
  console.log("Resume PDF already present in public/");
  process.exit(0);
}

if (!existsSync(source)) {
  console.error("Missing Urmi shah_Senior Content Designer.pdf - add your resume PDF to the project root.");
  process.exit(1);
}

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);

for (const legacyFile of legacyFiles) {
  if (existsSync(legacyFile)) {
    unlinkSync(legacyFile);
  }
}

console.log("Synced Urmi shah_Senior Content Designer.pdf → public/");
