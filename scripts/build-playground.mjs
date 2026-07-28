import { execSync } from "node:child_process";
import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const playgroundDir = join(root, "content-engineering-playground");
const outputDir = join(root, "public", "playground");
const outputIndex = join(outputDir, "index.html");

if (!existsSync(join(playgroundDir, "package.json"))) {
  console.error("content-engineering-playground not found.");
  process.exit(1);
}

if (process.env.VERCEL === "1") {
  if (existsSync(outputIndex)) {
    console.log("Using committed playground assets on Vercel.");
    process.exit(0);
  }

  console.error("Missing public/playground/index.html for Vercel deploy.");
  process.exit(1);
}

console.log(`Building content-engineering-playground for /playground/ (Node ${process.version}) …`);

function installPlaygroundDeps() {
  console.log("Installing content-engineering-playground dependencies…");
  try {
    execSync("npm ci", {
      cwd: playgroundDir,
      stdio: "inherit",
    });
  } catch {
    console.warn("npm ci failed in content-engineering-playground, retrying with npm install…");
    execSync("npm install", {
      cwd: playgroundDir,
      stdio: "inherit",
    });
  }
}

const playgroundModules = join(playgroundDir, "node_modules", "vite");
if (!existsSync(playgroundModules)) {
  installPlaygroundDeps();
}

execSync("npm run build", {
  cwd: playgroundDir,
  env: {
    ...process.env,
    VITE_BASE: "/playground/",
    VITE_USE_API_PROXY: "true",
  },
  stdio: "inherit",
});

rmSync(outputDir, { recursive: true, force: true });
cpSync(join(playgroundDir, "dist"), outputDir, { recursive: true });

console.log("Playground copied to public/playground/");
