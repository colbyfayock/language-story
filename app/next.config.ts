import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/p/js/script.js",
        destination: "https://plausible.io/js/script.js",
      },
      {
        source: "/p/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
};

export default nextConfig;
