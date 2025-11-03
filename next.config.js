/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Force Vercel to expose environment variables
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],
  },
}

module.exports = nextConfig
