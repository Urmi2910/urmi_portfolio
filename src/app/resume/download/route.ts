import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { profile } from "@/data/portfolio";
import { NextResponse } from "next/server";

const pdfPath = join(dirname(fileURLToPath(import.meta.url)), "resume.pdf");

export async function GET() {
  try {
    const file = readFileSync(pdfPath);

    return new NextResponse(new Uint8Array(file), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${profile.resumeFilename}"; filename*=UTF-8''${encodeURIComponent(profile.resumeFilename)}`,
        "Content-Length": String(file.byteLength),
        "Cache-Control": "private, no-cache",
      },
    });
  } catch {
    return NextResponse.json({ error: "Resume file not found" }, { status: 404 });
  }
}
