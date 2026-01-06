import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // ✅ tells Next.js to export static files
  images: {
    unoptimized: true, // ✅ allows images to work on static sites
  },
};

export default nextConfig;
