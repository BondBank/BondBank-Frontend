/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'custom-icon-badges.demolab.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
