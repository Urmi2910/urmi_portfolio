import { copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "Urmi_Content Designer.pdf");
const target = join(root, "public", "Urmi_Content Designer.pdf");
const legacyDownloadDir = join(root, "src", "app", "resume", "download");

if (!existsSync(source)) {
  if (existsSync(target)) {
    console.log("Using existing public resume PDF");
    process.exit(0);
  }

  console.error("Missing Urmi_Content Designer.pdf — add your resume PDF to the project root.");
  process.exit(1);
}

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);

if (existsSync(legacyDownloadDir)) {
  rmSync(legacyDownloadDir, { recursive: true, force: true });
}

console.log("Synced Urmi_Content Designer.pdf → public/");
