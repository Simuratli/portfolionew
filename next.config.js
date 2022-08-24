/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'www.billboard.com'],
  },
};

module.exports = nextConfig;
