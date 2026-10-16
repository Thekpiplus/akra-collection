import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akracollectionlayan.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
