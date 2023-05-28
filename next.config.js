/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
