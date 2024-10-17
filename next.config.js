/** @type {import('next').NextConfig} */
const withSvgr = require('next-svgr');

const nextConfig = {
  reactStrictMode: true, // Optional: Enables React strict mode
  swcMinify: true, // Optional: Enables SWC minification for faster builds
  // Any other Next.js configuration can go here
};

module.exports = withSvgr(nextConfig);
