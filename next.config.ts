import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typedRoutes: true,
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
