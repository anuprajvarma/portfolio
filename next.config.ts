// next.config.js

import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"], // Add MDX support for pages
  experimental: {
    mdxRs: true, // Enables the built-in MDX support in Next.js 15
  },
};

export default mdx()(nextConfig);
