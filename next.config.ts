import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/product-content-design/dropdown-labels",
        destination: "/work/product-content-design/ui-components#dropdown-labels",
        permanent: true,
      },
      {
        source: "/work/product-content-design/snackbars",
        destination: "/work/product-content-design/ui-components#snackbars",
        permanent: true,
      },
      {
        source: "/work/product-content-design/call-to-action",
        destination: "/work/product-content-design/ui-components#call-to-action",
        permanent: true,
      },
      {
        source: "/work/ux-writing-practice",
        destination: "/work/writing-beyond-products",
        permanent: true,
      },
    ];
  },
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
