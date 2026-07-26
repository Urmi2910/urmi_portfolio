import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/Urmi shah_Senior Content Designer.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Urmi shah_Senior Content Designer.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
