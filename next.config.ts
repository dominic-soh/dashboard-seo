import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath:
    process.env.NEXT_PUBLIC_APP_ENV === "local" ? undefined : "/dashboard-seo",
  output: process.env.NEXT_PUBLIC_APP_ENV === "local" ? undefined : "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
