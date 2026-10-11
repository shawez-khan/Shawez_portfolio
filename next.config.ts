import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  // Transpile Three.js and related packages
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/postprocessing",
  ],
  // Add empty turbopack config to satisfy Turbopack (GLB files served as static via public/ dir)
  turbopack: {},
};

export default nextConfig;

