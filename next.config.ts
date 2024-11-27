import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript errors during build
  },
};

export default nextConfig;
