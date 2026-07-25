import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/Urmi-Shah-Resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Urmi-Shah-Resume.pdf"',
          },
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
