import { SmallScreenGate } from "@/components/layout/SmallScreenGate";
import { profile } from "@/data/portfolio";
import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.intro,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fffbfe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen min-h-[100dvh] flex-col">
        <SmallScreenGate />
        <div className="hidden min-h-screen min-h-[100dvh] flex-col md:flex">{children}</div>
      </body>
    </html>
  );
}
