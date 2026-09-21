import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": false,
      "@/": false,
    };
    return config;
  },
  distDir: ".next",
};

export default nextConfig;