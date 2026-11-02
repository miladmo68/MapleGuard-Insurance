import type { NextConfig } from "next";

// Static export for GitHub Pages (https://miladmo68.github.io/MapleGuard-Insurance/)
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  ...(isPages && { basePath: "/MapleGuard-Insurance" }),
};

export default nextConfig;
