import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/Urmi_Content Designer.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Urmi_Content Designer.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
