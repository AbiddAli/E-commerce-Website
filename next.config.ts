import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;


// next.config.js
module.exports = {
  webpack: (config: { module: { rules: { test: RegExp; resolve: { fullySpecified: boolean; }; }[]; }; }) => {
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false, // Allows ES Modules
      },
    });
    return config;
  },
};
