import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.macstation.com.ar",
      },
    ],
  },
};

export default nextConfig;
