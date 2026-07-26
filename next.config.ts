import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/Urmi shah_Content Designer.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Urmi shah_Content Designer.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
