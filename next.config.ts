import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async rewrites() {
    return [
      {
        source: "/playground",
        destination: "/playground/index.html",
      },
      {
        source: "/playground/",
        destination: "/playground/index.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/work/product-content-design/dropdown-labels",
        destination: "/work/product-content-design?open=microcopy-examples&item=dropdown-labels",
        permanent: true,
      },
      {
        source: "/work/product-content-design/snackbars",
        destination: "/work/product-content-design?open=microcopy-examples&item=snackbars",
        permanent: true,
      },
      {
        source: "/work/product-content-design/call-to-action",
        destination: "/work/product-content-design?open=microcopy-examples&item=call-to-action",
        permanent: true,
      },
      {
        source: "/work/product-content-design/ui-components",
        destination: "/work/product-content-design?open=microcopy-examples",
        permanent: true,
      },
      {
        source: "/work/product-content-design/ui-components/:path*",
        destination: "/work/product-content-design?open=microcopy-examples",
        permanent: true,
      },
      {
        source: "/work/product-content-design/microcopy-examples",
        destination: "/work/product-content-design?open=microcopy-examples",
        permanent: true,
      },
      {
        source: "/work/ux-writing-practice",
        destination: "/work/product-content-design#writing",
        permanent: true,
      },
      {
        source: "/work/writing-beyond-products",
        destination: "/work/product-content-design#writing",
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
