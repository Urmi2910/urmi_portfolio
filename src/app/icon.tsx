import { FaviconMark } from "@/lib/favicon-mark";
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<FaviconMark dimension={32} />, { ...size });
}
