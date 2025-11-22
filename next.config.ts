import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tailwind 'theme' belongs in tailwind.config.js; removed from NextConfig.
   images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  
  /* config options here */
};

export default nextConfig;
